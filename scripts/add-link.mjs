// Makes an exported element navigate to a route, without touching its design classes.
// Usage: node scripts/add-link.mjs <ScreenName> "<data-pencil-name>" <routeKey | back>
import { readFileSync, writeFileSync } from 'node:fs'

const [name, pencilName, routeKey] = process.argv.slice(2)
if (!name || !pencilName || !routeKey) {
  console.error('Usage: node scripts/add-link.mjs <ScreenName> "<data-pencil-name>" <routeKey | back>')
  process.exit(1)
}

const file = `src/screens/${name}/${name}Screen.tsx`
let src = readFileSync(file, 'utf8')

const anchor = `data-pencil-name="${pencilName}"`
const hits = src.split(anchor).length - 1
if (hits !== 1) throw new Error(`Expected 1 element named "${pencilName}", found ${hits}`)

const target = routeKey === 'back' ? '-1' : `ROUTES.${routeKey}`
const classAt = src.indexOf('className="', src.indexOf(anchor))
src =
  src.slice(0, classAt) +
  `role="button"\n onClick={() => navigate(${target})}\n className="cursor-pointer ` +
  src.slice(classAt + 'className="'.length)

if (!src.includes('const navigate = useNavigate()')) {
  src = src.replace('export function Component() {\n', 'export function Component() {\n  const navigate = useNavigate()\n\n')
}
const imports = [
  [/import \{[^}]*\buseNavigate\b[^}]*\} from 'react-router'/, "import { useNavigate } from 'react-router'"],
  [/import \{ ROUTES \} from/, "import { ROUTES } from '../../routes'"],
]
const missing = imports.filter(([re]) => !re.test(src)).map(([, line]) => line)
if (missing.length) src = `${missing.join('\n')}\n${src.startsWith('import') ? '' : '\n'}${src}`

writeFileSync(file, src)
console.log(`${name}: "${pencilName}" -> ${target}`)
