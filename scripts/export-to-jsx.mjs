// Converts a Pen.dev HTML export into a JSX screen component, keeping markup and classes intact.
// Usage: node scripts/export-to-jsx.mjs "<export.html>" <ScreenName>
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'

const [input, name] = process.argv.slice(2)
if (!input || !name) {
  console.error('Usage: node scripts/export-to-jsx.mjs "<export.html>" <ScreenName>')
  process.exit(1)
}

const html = readFileSync(input, 'utf8')
let body = html.match(/<body[^>]*>([\s\S]*)<\/body>/)?.[1]?.trim()
if (!body) throw new Error('No <body> found')

// The exported bottom navigation is replaced by the shared <BottomNav> component.
const NAV_TABS = { Inicio: 'home', Entrenar: 'train', Acceso: 'access', Actividad: 'activity', Perfil: 'profile' }
const NAV_ACTIVE_BG = 'bg-[#F2643017]'

const replaceBottomNav = (markup) => {
  const marker = markup.indexOf('data-pencil-name="Área de navegación inferior"')
  if (marker === -1) return { markup, hasNav: false }

  const start = markup.lastIndexOf('<div', marker)
  const tags = /<\/?div\b/g
  tags.lastIndex = start
  let depth = 0
  let tag
  while ((tag = tags.exec(markup))) {
    depth += tag[0] === '<div' ? 1 : -1
    if (depth === 0) break
  }
  const end = markup.indexOf('>', tag.index) + 1
  const nav = markup.slice(start, end)

  const active = Object.entries(NAV_TABS).find(([label]) =>
    new RegExp(`data-pencil-name="Pestaña ${label}"\\s+class="[^"]*${NAV_ACTIVE_BG.replace(/[[\]#]/g, '\\$&')}`).test(nav),
  )?.[1]
  if (!active) throw new Error('Bottom navigation found but no active tab detected')

  return { markup: `${markup.slice(0, start)}<BottomNav active="${active}" />${markup.slice(end)}`, hasNav: true }
}

const nav = replaceBottomNav(body)
body = nav.markup

// The mock status bar (time, signal, wifi, battery) is removed along with its space.
const removeStatusBar = (markup) => {
  const marker = markup.indexOf('data-pencil-name="Barra de estado"')
  if (marker === -1) return markup

  const start = markup.lastIndexOf('<div', marker)
  const tags = /<\/?div\b/g
  tags.lastIndex = start
  let depth = 0
  let tag
  while ((tag = tags.exec(markup))) {
    depth += tag[0] === '<div' ? 1 : -1
    if (depth === 0) break
  }
  return markup.slice(0, start).trimEnd() + markup.slice(markup.indexOf('>', tag.index) + 1)
}

body = removeStatusBar(body)

// Column-based screens size to their content instead of the fixed export height.
body = body.replace(/(class="box-border w-\[390px\] )h-\[[\d.]+px\]( flex flex-col)/, '$1h-fit$2')

// Inline base64 images are written to public/images (deduplicated by content hash).
const extractImage = (dataUri) => {
  const [, ext, data] = dataUri.match(/^data:image\/(\w+);base64,(.*)$/)
  const buffer = Buffer.from(data, 'base64')
  const file = `${createHash('sha1').update(buffer).digest('hex').slice(0, 12)}.${ext === 'jpeg' ? 'jpg' : ext}`
  mkdirSync('public/images', { recursive: true })
  writeFileSync(`public/images/${file}`, buffer)
  return `/images/${file}`
}

const toStyleObject = (css) =>
  `{{ ${css
    .split(/;(?![^(]*\))/)
    .map((rule) => rule.trim())
    .filter(Boolean)
    .map((rule) => {
      const i = rule.indexOf(':')
      const prop = rule.slice(0, i).trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase())
      const value = rule
        .slice(i + 1)
        .trim()
        .replace(/url\('(data:image[^']+)'\)/g, (_, uri) => `url('${extractImage(uri)}')`)
      return `${prop}: ${JSON.stringify(value)}`
    })
    .join(', ')} }}`

const jsx = body
  .replace(/\bstyle="([^"]*)"/g, (_, css) => `style=${toStyleObject(css)}`)
  .replace(/\s+data-(icon-name|icon-set)="[^"]*"/g, '')
  .replace(/\bclass="/g, 'className="')
  .replace(/\bstroke-width=/g, 'strokeWidth=')
  .replace(/\bstroke-linecap=/g, 'strokeLinecap=')
  .replace(/\bstroke-linejoin=/g, 'strokeLinejoin=')
  .replace(/\bfill-rule=/g, 'fillRule=')
  .replace(/\bclip-rule=/g, 'clipRule=')
  .replace(/<(path|circle|rect|line|polyline|polygon|ellipse)([^>]*)><\/\1>/g, '<$1$2 />')
  .replace(/<(img|input|br|hr)([^>]*?)\s*\/?>/g, '<$1$2 />')
  .replace(/^/gm, '    ')

const dir = `src/screens/${name}`
mkdirSync(dir, { recursive: true })
writeFileSync(
  `${dir}/${name}Screen.tsx`,
  `${nav.hasNav ? "import { BottomNav } from '../../components/BottomNav'\n\n" : ''}export function Component() {\n  return (\n${jsx}\n  )\n}\n`,
)
console.log(`Wrote ${dir}/${name}Screen.tsx`)
