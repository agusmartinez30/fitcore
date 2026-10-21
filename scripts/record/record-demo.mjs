// Records a vertical demo video of the app tour, frame by frame, at native device resolution.
// Playwright's own video (and the CDP screencast) capture CSS pixels and ignore deviceScaleFactor,
// so each frame is a real screenshot under a virtual clock, piped into FFmpeg.
// Recording-only tooling: it drives the existing dev server and never touches app code.
import { spawn } from 'node:child_process'
import { mkdir, rm } from 'node:fs/promises'
import path from 'node:path'
import { chromium } from '@playwright/test'

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:5173'
const OUT_DIR = path.resolve('recordings')
const VIDEO_PATH = path.join(OUT_DIR, 'app-tour.mp4')
const REFERENCE_PATH = path.join(OUT_DIR, 'reference-home.png')

// Screens are designed at a fixed 390px width; DSF maps that width to 1080 device px.
// 390 * 16/9 is not an integer, so the 694px viewport yields 1922 device px, cropped to 1920.
const VIEWPORT = { width: 390, height: 694 }
const DEVICE_SCALE_FACTOR = 1080 / VIEWPORT.width
const FPS = 60
const FRAME_MS = 1000 / FPS

// Bottom nav tabs match their exact label so "Inicio" never hits "Volver al inicio".
const navTab = (label) => `[role="button"]:has(> div:text-is("${label}"))`
const byName = (name) => `[data-pencil-name="${name}"]`

// Fixed bottom nav height in CSS px; targets are kept clear of it before tapping.
const BOTTOM_NAV_PX = 88
// Scroll pacing: CSS px per second, clamped to a comfortable on-screen duration.
const SCROLL_PX_PER_SEC = 900
const SCROLL_MIN_MS = 700
const SCROLL_MAX_MS = 3500

async function isServerUp() {
  try {
    return (await fetch(BASE_URL)).ok
  } catch {
    return false
  }
}

// Reuses a running dev server; otherwise starts `npm run dev` and stops it afterwards.
async function ensureDevServer() {
  if (await isServerUp()) return null
  const server = spawn('npm', ['run', 'dev', '--', '--strictPort'], { shell: true, stdio: 'ignore' })
  for (let i = 0; i < 60; i++) {
    if (await isServerUp()) return server
    await new Promise((r) => setTimeout(r, 500))
  }
  await stopServer(server)
  throw new Error(`Dev server not reachable at ${BASE_URL}`)
}

// Resolves once the server is gone, so the script never exits leaving vite running.
function stopServer(server) {
  if (!server) return Promise.resolve()
  return new Promise((resolve) => {
    server.once('exit', resolve)
    // `shell: true` wraps vite in a shell; kill the whole tree on Windows.
    if (process.platform === 'win32') spawn('taskkill', ['/pid', String(server.pid), '/T', '/F']).once('exit', resolve)
    else server.kill()
  })
}

// H.264 MP4 for CapCut. Frames arrive as PNGs on stdin; BT.709 tags keep the original colors.
function startEncoder() {
  const ffmpeg = spawn('ffmpeg', [
    '-y', '-loglevel', 'error',
    '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'png', '-i', '-',
    '-vf', 'crop=1080:1920:0:1,scale=out_color_matrix=bt709:out_range=tv,format=yuv420p,setparams=color_primaries=bt709:color_trc=bt709:colorspace=bt709:range=tv',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '12', '-tune', 'animation',
    '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709', '-color_range', 'tv',
    '-r', String(FPS), '-movflags', '+faststart',
    VIDEO_PATH,
  ], { stdio: ['pipe', 'inherit', 'inherit'] })

  const done = new Promise((resolve, reject) => {
    ffmpeg.on('error', (err) => reject(new Error(`FFmpeg is required on PATH (${err.message})`)))
    ffmpeg.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`FFmpeg exited with code ${code}`))))
  })

  return {
    async write(png) {
      if (!ffmpeg.stdin.write(png)) await new Promise((r) => ffmpeg.stdin.once('drain', r))
    },
    async finish() {
      ffmpeg.stdin.end()
      await done
    },
  }
}

// Captures frames under virtual time: JS timers via page.clock, CSS/WAAPI animations via
// manual currentTime stepping, so playback is smooth regardless of screenshot latency.
function createRecorder(page, encoder) {
  let frames = 0

  async function captureFrame() {
    await page.clock.runFor(FRAME_MS)
    await page.evaluate((dt) => {
      for (const anim of document.getAnimations()) {
        anim.pause()
        anim.currentTime = (Number(anim.currentTime) || 0) + dt
      }
    }, FRAME_MS)
    await encoder.write(await page.screenshot({ type: 'png', caret: 'hide' }))
    frames++
  }

  async function hold(ms) {
    const count = Math.round((ms / 1000) * FPS)
    for (let i = 0; i < count; i++) await captureFrame()
  }

  // Eased window scroll driven frame by frame, so it is smooth at any capture speed.
  async function scrollTo(targetY) {
    const { from, to } = await page.evaluate((y) => {
      const max = document.scrollingElement.scrollHeight - window.innerHeight
      return { from: window.scrollY, to: Math.max(0, Math.min(y, max)) }
    }, targetY)
    const distance = Math.abs(to - from)
    if (distance < 1) return
    const ms = Math.min(SCROLL_MAX_MS, Math.max(SCROLL_MIN_MS, (distance / SCROLL_PX_PER_SEC) * 1000))
    const count = Math.round((ms / 1000) * FPS)
    for (let i = 1; i <= count; i++) {
      const t = i / count
      const eased = t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2
      await page.evaluate((y) => window.scrollTo(0, y), from + (to - from) * eased)
      await captureFrame()
    }
  }

  return {
    hold,
    scrollTo,
    scrollToBottom: () => scrollTo(Number.MAX_SAFE_INTEGER),
    // Brings a target on screen with a recorded scroll, so Playwright never jumps to it.
    async reveal(selector) {
      const box = await page.locator(selector).evaluate((el, navPx) => {
        // Fixed elements (e.g. the bottom nav itself) never move with scroll.
        for (let n = el; n; n = n.parentElement) {
          if (getComputedStyle(n).position === 'fixed') return { visible: true }
        }
        const r = el.getBoundingClientRect()
        const visible = r.top >= 0 && r.bottom <= window.innerHeight - navPx
        return { visible, centerY: window.scrollY + r.top + r.height / 2 }
      }, BOTTOM_NAV_PX)
      if (!box.visible) await scrollTo(box.centerY - (VIEWPORT.height - BOTTOM_NAV_PX) / 2)
    },
    get frames() {
      return frames
    },
  }
}

// Taps a target after revealing it, then waits until the next screen is fully loaded.
async function tap(page, recorder, selector, nextUrl) {
  await page.locator(selector).waitFor()
  await recorder.reveal(selector)
  await page.locator(selector).click()
  await page.waitForURL(`**${nextUrl}`)
  await page.waitForLoadState('networkidle')
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true })
  for (const stale of ['workout-flow.webm', 'workout-flow.mp4']) await rm(path.join(OUT_DIR, stale), { force: true })
  const server = await ensureDevServer()
  const browser = await chromium.launch()

  try {
    const context = await browser.newContext({
      viewport: VIEWPORT,
      deviceScaleFactor: DEVICE_SCALE_FACTOR,
      isMobile: true,
      hasTouch: true,
    })
    const page = await context.newPage()
    await page.clock.install()

    await page.goto(`${BASE_URL}/access`, { waitUntil: 'networkidle' })
    await page.locator(byName('Botón Escanear QR')).waitFor()

    const encoder = startEncoder()
    const rec = createRecorder(page, encoder)

    // Access → scan QR → access granted
    await rec.hold(1500)
    await tap(page, rec, byName('Botón Escanear QR'), '/access/success')
    await rec.hold(1800)

    // Home (via bottom nav) → start workout
    await tap(page, rec, navTab('Inicio'), '/home')
    await page.screenshot({ path: REFERENCE_PATH })
    await rec.hold(1500)
    await tap(page, rec, byName('Botón comenzar entrenamiento'), '/train/start')

    // Workout in progress → scroll → finish
    await rec.hold(1200)
    await rec.scrollToBottom()
    await rec.hold(800)
    await tap(page, rec, byName('Finalizar entrenamiento'), '/train/finish')

    // Workout summary → scroll → my activity
    await rec.hold(1500)
    await rec.scrollToBottom()
    await rec.hold(800)
    await tap(page, rec, byName('Ver mi actividad'), '/activity')

    // Activity → scroll → profile (via bottom nav)
    await rec.hold(1200)
    await rec.scrollToBottom()
    await rec.hold(1000)
    await tap(page, rec, navTab('Perfil'), '/profile')

    // Profile → credential → membership details → scroll
    await rec.hold(1200)
    await tap(page, rec, byName('Ver mi credencial'), '/profile/credential')
    await rec.hold(1800)
    await tap(page, rec, byName('Ver detalles de mi membresía'), '/profile/membership')
    await rec.hold(1200)
    await rec.scrollToBottom()
    await rec.hold(2000)

    await encoder.finish()
    await context.close()
    console.log(`Video: ${VIDEO_PATH} (${rec.frames} frames @ ${FPS} fps)`)
    console.log(`Reference: ${REFERENCE_PATH}`)
  } finally {
    await browser.close()
    await stopServer(server)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
