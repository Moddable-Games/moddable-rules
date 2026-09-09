#!/usr/bin/env node
/**
 * Does the uploader still stage the files it is asked for?
 *
 * upload-pdfs.sh read its listing from `$RULES_ROOT`, which nothing ever set.
 * Under `set -u` that failed inside a process substitution, so it killed only
 * the subshell: the read loop got no lines, the count stayed at zero, and the
 * script printed "Nothing uploaded." and exited 0. The release sat 28 files
 * behind while every command in the chain reported success.
 *
 * So this asks the uploader itself, in dry-run, and compares its count with
 * pdf-assets.mjs - the one definition both it and check-pdf-release.mjs read.
 * Re-deriving the staging rule here would just be a second opinion.
 *
 * Run: node scripts/check-pdf-upload.mjs
 */
import { execFileSync } from 'child_process'
import { resolve } from 'path'

const ROOT = resolve(import.meta.dirname, '..')
// Any game with PDFs will do; the bug was total, not per-game.
const GAME = 'go'

const listed = execFileSync('node', [resolve(ROOT, 'scripts/lib/pdf-assets.mjs'), GAME], { encoding: 'utf8' })
  .trim().split('\n').filter(Boolean).length

let staged = 0
try {
  const out = execFileSync(resolve(ROOT, 'scripts/upload-pdfs.sh'), ['--dry-run', GAME], { encoding: 'utf8' })
  staged = Number((out.match(/Staged (\d+) PDFs/) || [])[1] || 0)
} catch (err) {
  console.error(`upload-pdfs.sh --dry-run ${GAME} failed:\n${err.stdout || ''}${err.stderr || ''}`)
  process.exit(1)
}

if (listed === 0) {
  console.error(`pdf-assets.mjs lists no PDFs for ${GAME} — run npm run pdf first`)
  process.exit(1)
}
if (staged !== listed) {
  console.error(`Uploader staged ${staged} PDFs for ${GAME}, but pdf-assets.mjs lists ${listed}.`)
  process.exit(1)
}
console.log(`PDF upload check passed — uploader stages all ${listed} of ${GAME}'s PDFs`)
