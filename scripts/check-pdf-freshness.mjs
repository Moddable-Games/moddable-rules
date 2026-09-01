#!/usr/bin/env node
/**
 * Is each PDF newer than the content it was built from?
 *
 * Every PDF in this repo was last built on 2026-08-07. Thirteen families
 * changed their variants after that, so 666 PDFs quietly described a corpus
 * that had moved on. The Dai Shogi PDF showed a starting position the web page
 * had already corrected, and the only reason anyone found out was a human
 * downloading it and comparing.
 *
 * A PDF renders the whole variant file - prose and frontmatter both - so the
 * hash is over the whole file, not just the engine block. Same shape as
 * check-diagram-freshness.mjs, which does this for the board SVGs.
 *
 * Run:        node scripts/check-pdf-freshness.mjs
 * Regenerate: node scripts/check-pdf-freshness.mjs --update   (after npm run pdf)
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs'
import { resolve, join } from 'path'
import { createHash } from 'crypto'

const ROOT = resolve(import.meta.dirname, '..')
const GAMES = resolve(ROOT, 'games')
const HASHES = resolve(ROOT, 'pdf-hashes.json')
const UPDATE = process.argv.includes('--update')

const hash = (s) => createHash('sha256').update(s).digest('hex').slice(0, 12)

const current = {}
for (const family of readdirSync(GAMES).filter(d => !d.startsWith('.'))) {
  const variants = join(GAMES, family, 'content', 'variants')
  if (!existsSync(variants)) continue
  for (const file of readdirSync(variants).filter(f => f.endsWith('.md'))) {
    const slug = file.replace('.md', '')
    // Only variants that actually have a PDF are tracked.
    if (!existsSync(join(GAMES, family, 'pdf', 'variants', `${slug}.pdf`))) continue
    current[`${family}/${slug}`] = hash(readFileSync(join(variants, file), 'utf8'))
  }
}

if (UPDATE) {
  writeFileSync(HASHES, JSON.stringify(current, null, 2) + '\n')
  console.log(`Updated pdf-hashes.json (${Object.keys(current).length} entries)`)
  process.exit(0)
}

const previous = existsSync(HASHES) ? JSON.parse(readFileSync(HASHES, 'utf8')) : {}
const stale = Object.keys(current).filter(k => previous[k] !== current[k])

if (stale.length) {
  console.error(`Stale PDFs (content changed without a rebuild):\n`)
  for (const k of stale.slice(0, 20)) console.error(`  ${k}`)
  if (stale.length > 20) console.error(`  ... and ${stale.length - 20} more`)
  console.error(`\nRun: npm run pdf && node scripts/check-pdf-freshness.mjs --update`)
  process.exit(1)
}
console.log(`PDF freshness check passed — ${Object.keys(current).length} PDFs match their source`)
