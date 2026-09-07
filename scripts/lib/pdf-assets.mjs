/**
 * Which local PDF becomes which release asset.
 *
 * The naming rule lived only inside upload-pdfs.sh, so anything else that
 * wanted to reason about the published PDFs had to re-derive it - and a check
 * that re-derives what it checks disagrees with it silently. This is the one
 * definition; the uploader and the release check both read it.
 *
 *   games/chess/pdf/variants/standard.pdf     -> chess--variants--standard.pdf
 *   games/dnd-5e/pdf/rules/combat.pdf         -> dnd-5e--rules--combat.pdf
 *   games/chess/pdf/chess-variant-library.pdf -> chess--chess-variant-library.pdf
 *
 * Versioned archives (...-v0.6.1.pdf) stay local and are never published: the
 * release carries one current file per name.
 */
import { readdirSync, statSync, existsSync } from 'fs'
import { join, relative, dirname } from 'path'
import { fileURLToPath } from 'url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..')
const VERSIONED = /-v\d[\d.]*\.pdf$/

function walk(dir, out = []) {
  if (!existsSync(dir)) return out
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) walk(full, out)
    else if (entry.endsWith('.pdf')) out.push(full)
  }
  return out
}

export function pdfAssets(root = ROOT) {
  const gamesDir = join(root, 'games')
  if (!existsSync(gamesDir)) return []

  const out = []
  for (const slug of readdirSync(gamesDir).sort()) {
    const pdfDir = join(gamesDir, slug, 'pdf')
    for (const path of walk(pdfDir).sort()) {
      const rest = relative(pdfDir, path)
      if (VERSIONED.test(rest)) continue
      out.push({ path, asset: `${slug}--${rest.split('/').join('--')}` })
    }
  }
  return out
}

// `node scripts/lib/pdf-assets.mjs` prints "localPath<TAB>assetName" per line,
// which is what the shell uploader consumes.
if (process.argv[1] && process.argv[1].endsWith('pdf-assets.mjs')) {
  for (const { path, asset } of pdfAssets()) console.log(`${path}\t${asset}`)
}
