#!/usr/bin/env node
/**
 * Are the PUBLISHED PDFs the ones this repo would generate?
 *
 * `check-pdf-freshness.mjs` answers a different question: whether the local
 * PDFs match the content they were built from. Both can pass while every PDF a
 * reader can actually reach is months out of date, because the site's download
 * buttons point at a GitHub release and `games/*''/pdf/` is gitignored - merging
 * to main moves no PDF at all. That is how Xiang Fu shipped a board with eight
 * invisible pieces to every reader while the repo and the site both looked
 * correct.
 *
 * The release API exposes a sha256 digest per asset, so this is exact rather
 * than a size comparison: the local file's hash either is what is published or
 * is not.
 *
 * Usage:
 *   node scripts/check-pdf-release.mjs            # compare and report
 *   node scripts/check-pdf-release.mjs --quiet    # only report drift
 *
 * Needs `gh` authenticated against the repo. Where it is not available the
 * check reports that it could not look and exits 0, because "I cannot see the
 * release" is not the same finding as "the release is stale" - but it says so
 * rather than passing silently.
 */
import { createHash } from 'crypto'
import { readFileSync } from 'fs'
import { execFileSync } from 'child_process'
import { relative, dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { pdfAssets } from './lib/pdf-assets.mjs'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const REPO = 'Moddable-Games/moddable-rules'
const TAG = 'pdfs'
const quiet = process.argv.includes('--quiet')

function releaseAssets() {
  try {
    const json = execFileSync('gh', [
      'api', `repos/${REPO}/releases/tags/${TAG}`, '--jq',
      '[.assets[] | {name, size, digest}]',
    ], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
    return JSON.parse(json)
  } catch (e) {
    return null
  }
}

const assets = releaseAssets()
if (!assets) {
  console.log('PDF release check skipped: could not read the release.')
  console.log(`  Needs \`gh\` authenticated for ${REPO}. Run \`gh auth status\` to check.`)
  process.exit(0)
}

const published = new Map(assets.map(a => [a.name, a]))
const local = pdfAssets(ROOT)
if (local.length === 0) {
  console.log('PDF release check skipped: no local PDFs. Run `npm run pdf` first.')
  process.exit(0)
}

const sha256 = (path) => createHash('sha256').update(readFileSync(path)).digest('hex')

const missing = []
const stale = []
for (const { path, asset } of local) {
  const remote = published.get(asset)
  if (!remote) { missing.push(asset); continue }
  const want = `sha256:${sha256(path)}`
  if (remote.digest !== want) stale.push({ asset, local: relative(ROOT, path) })
}

const orphaned = assets.filter(a => !local.some(l => l.asset === a.name)).map(a => a.name)

if (!missing.length && !stale.length && !orphaned.length) {
  console.log(`PDF release check passed — all ${local.length} published PDFs match this repo`)
  process.exit(0)
}

if (stale.length) {
  console.error(`\n${stale.length} published PDF(s) are behind this repo:\n`)
  for (const s of stale.slice(0, 20)) console.error(`  ${s.asset}`)
  if (stale.length > 20) console.error(`  ... and ${stale.length - 20} more`)
}
if (missing.length) {
  console.error(`\n${missing.length} PDF(s) have never been published:\n`)
  for (const m of missing.slice(0, 20)) console.error(`  ${m}`)
  if (missing.length > 20) console.error(`  ... and ${missing.length - 20} more`)
}
if (orphaned.length) {
  console.error(`\n${orphaned.length} published PDF(s) no longer exist here:\n`)
  for (const o of orphaned.slice(0, 20)) console.error(`  ${o}`)
  if (orphaned.length > 20) console.error(`  ... and ${orphaned.length - 20} more`)
}

console.error('\nRun: npm run pdf && ./scripts/upload-pdfs.sh')
if (!quiet) {
  console.error('\nThe site\'s download buttons point at the release, not at this repo,')
  console.error('so merging to main does not move a PDF. Only uploading does.')
}
process.exit(1)
