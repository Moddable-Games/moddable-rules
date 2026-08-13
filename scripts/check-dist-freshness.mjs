#!/usr/bin/env node
/**
 * Dist freshness CI check.
 *
 * Rebuilds dist/ into a temporary location and compares against the committed
 * dist/. If any file differs, the build output is stale — source has changed
 * without a corresponding `npm run build` + commit.
 *
 * This catches the class of bug where frontmatter or content changes land in
 * source but dist/ still reflects the previous build (e.g. play links absent
 * because playable:true was added after the last dist commit).
 *
 * Run: node scripts/check-dist-freshness.mjs [--report-only]
 *
 * --report-only prints stale files but exits 0 (useful for local dev).
 * Without it, any staleness exits 1 (CI gate).
 */

import { execSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const reportOnly = process.argv.includes('--report-only')

try {
  execSync('npm run build', { cwd: root, stdio: 'pipe' })
} catch (e) {
  console.error('Build failed:', e.stderr?.toString().slice(0, 500))
  process.exit(1)
}

const diff = execSync('git diff --name-only -- dist/', { cwd: root, encoding: 'utf8' }).trim()

if (!diff) {
  console.log('Dist freshness: dist/ matches source (up to date)')
  process.exit(0)
}

const staleFiles = diff.split('\n')
console.log(`Dist freshness: ${staleFiles.length} file(s) stale`)
console.log('')
for (const f of staleFiles.slice(0, 20)) console.log(`  ${f}`)
if (staleFiles.length > 20) console.log(`  ... and ${staleFiles.length - 20} more`)
console.log('')
console.log('Run: npm run build && git add dist/ && git commit')

if (reportOnly) {
  process.exit(0)
}
process.exit(1)
