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
 * It used to compare the local file's sha256 with the published asset's. That
 * worked while one laptop was the only thing that ever built a PDF. Once
 * publish-pdfs.yml started working a GitHub runner became a second producer,
 * and its Chrome renders different bytes for identical content - the agon
 * rulebook is 142,615 bytes there against 143,847 here. Byte equality between
 * two producers is not reachable, and a check that demands it reports drift
 * forever and teaches everyone to ignore it.
 *
 * So it asks the question the Xiang Fu incident actually raised: was the PDF a
 * reader downloads built from the current text? Whoever uploads writes the
 * source hashes for what they published into `release-manifest.json` beside the
 * PDFs, and this compares those with pdf-hashes.json. Missing and orphaned
 * assets are still compared by name, because a file that is not there at all is
 * drift under any producer.
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
import { readFileSync, existsSync } from 'fs'
import { execFileSync } from 'child_process'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { pdfAssets } from './lib/pdf-assets.mjs'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const REPO = 'Moddable-Games/moddable-rules'
const TAG = 'pdfs'
const MANIFEST_ASSET = 'release-manifest.json'
const HASHES = join(dirname(fileURLToPath(import.meta.url)), '..', 'pdf-hashes.json')
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

const missing = local.filter(l => !published.has(l.asset)).map(l => l.asset)

// The manifest is itself an asset, so it is never an orphan.
const orphaned = assets
  .filter(a => a.name !== MANIFEST_ASSET && !local.some(l => l.asset === a.name))
  .map(a => a.name)

// What content the release says it was built from.
function publishedSources() {
  if (!published.has(MANIFEST_ASSET)) return null
  try {
    const raw = execFileSync('gh', [
      'release', 'download', TAG, '--repo', REPO, '--pattern', MANIFEST_ASSET, '--output', '-',
    ], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] })
    return JSON.parse(raw).sources || {}
  } catch {
    return null
  }
}

const localSources = existsSync(HASHES) ? JSON.parse(readFileSync(HASHES, 'utf8')) : {}
const remoteSources = publishedSources()

const stale = []
let unrecorded = 0
for (const [key, hash] of Object.entries(localSources)) {
  if (!remoteSources) { unrecorded++; continue }
  if (!(key in remoteSources)) { stale.push({ asset: key, why: 'never published from this record' }) }
  else if (remoteSources[key] !== hash) { stale.push({ asset: key, why: 'published from older content' }) }
}

if (!remoteSources) {
  console.log(`PDF release check: ${local.length} PDFs published, but the release carries no`)
  console.log(`${MANIFEST_ASSET}, so what content they were built from is not recorded.`)
  console.log('Run: ./scripts/upload-pdfs.sh   (which writes it)')
  process.exit(1)
}

if (!missing.length && !stale.length && !orphaned.length) {
  console.log(`PDF release check passed — all ${local.length} published PDFs were built from this content`)
  process.exit(0)
}

if (stale.length) {
  console.error(`\n${stale.length} published PDF(s) were built from older content:\n`)
  for (const s of stale.slice(0, 20)) console.error(`  ${s.asset} - ${s.why}`)
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
