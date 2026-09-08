#!/usr/bin/env node
/**
 * Build one game's PDFs, then refresh the manifest.
 *
 * This exists because `"pdf:game": "node js/pdf.mjs --game && node
 * scripts/gen-pdf-manifest.mjs"` cannot work: npm appends arguments to the END
 * of the script, so `npm run pdf:game chess` put the slug on the manifest step
 * and left `--game` with nothing after it. pdf.mjs read that as "no filter" and
 * rebuilt every game, which is why asking for one rulebook took twenty minutes
 * and changed 582 files.
 */
import { spawnSync } from 'child_process'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const slugs = process.argv.slice(2).filter(a => !a.startsWith('--'))

if (!slugs.length) {
  console.error('Usage: npm run pdf:game <game> [game ...]')
  process.exit(1)
}

for (const slug of slugs) {
  const built = spawnSync('node', [resolve(ROOT, 'js/pdf.mjs'), '--game', slug], { stdio: 'inherit', cwd: ROOT })
  if (built.status !== 0) process.exit(built.status ?? 1)
}

const manifest = spawnSync('node', [resolve(ROOT, 'scripts/gen-pdf-manifest.mjs')], { stdio: 'inherit', cwd: ROOT })
process.exit(manifest.status ?? 0)
