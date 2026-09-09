#!/usr/bin/env node
/**
 * The record of what content the published PDFs were built from.
 *
 * The release check used to compare the local PDF's bytes with the published
 * asset's sha256. That worked while one laptop was the only thing that ever
 * built a PDF. Once publish-pdfs.yml started working, a GitHub runner became a
 * second producer, and its Chrome renders different bytes for identical
 * content - the agon rulebook came out 142,615 bytes there against 143,847
 * here. Byte equality between two producers is not reachable, so a check that
 * demands it reports drift forever and teaches everyone to ignore it.
 *
 * What actually mattered in the incident that check was written for is whether
 * the PDF a reader downloads was built from the current text. So that is what
 * gets recorded: whoever uploads writes the source hashes for what they
 * uploaded into an asset beside the PDFs, and the check compares those with
 * pdf-hashes.json.
 *
 * Merged rather than replaced, because `upload-pdfs.sh shogi` publishes one
 * family and must not claim the other forty-nine were rebuilt with it.
 *
 * Usage: node scripts/build-release-manifest.mjs <out-path> [game ...]
 */
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { execFileSync } from 'child_process'
import { resolve } from 'path'

const ROOT = resolve(import.meta.dirname, '..')
const REPO = 'Moddable-Games/moddable-rules'
const TAG = 'pdfs'
const ASSET = 'release-manifest.json'

const [outPath, ...games] = process.argv.slice(2)
if (!outPath) {
  console.error('Usage: node scripts/build-release-manifest.mjs <out-path> [game ...]')
  process.exit(1)
}

const hashesPath = resolve(ROOT, 'pdf-hashes.json')
if (!existsSync(hashesPath)) {
  console.error('pdf-hashes.json is missing. Run: node scripts/check-pdf-freshness.mjs --update')
  process.exit(1)
}
const local = JSON.parse(readFileSync(hashesPath, 'utf8'))

// Start from what is already published, so a partial upload leaves the rest of
// the record alone.
let previous = {}
try {
  const raw = execFileSync('gh', [
    'release', 'download', TAG, '--repo', REPO, '--pattern', ASSET, '--output', '-',
  ], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] })
  previous = JSON.parse(raw).sources || {}
} catch {
  // No manifest published yet, which is the state before this existed.
}

const claimed = games.length
  ? Object.fromEntries(Object.entries(local).filter(([key]) =>
      games.some(g => key === g || key.startsWith(`${g}/`))))
  : local

const sources = { ...previous, ...claimed }

// A game published in full has no leftovers: drop entries for variants that
// were removed from a family being republished.
for (const key of Object.keys(sources)) {
  const family = key.split('/')[0]
  const republished = !games.length || games.some(g => key === g || family === g)
  if (republished && !(key in local)) delete sources[key]
}

writeFileSync(outPath, JSON.stringify({
  generated: new Date().toISOString(),
  games: games.length ? games : 'all',
  sources,
}, null, 2) + '\n')

console.log(`Release manifest: ${Object.keys(claimed).length} of ${Object.keys(sources).length} entries claimed by this upload`)
