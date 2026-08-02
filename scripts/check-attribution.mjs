#!/usr/bin/env node
/**
 * Attribution CI check.
 * Every variant file must satisfy one of:
 *   1. original: true in frontmatter (Moddable original, no external provenance)
 *   2. Attribution section contains a resolvable reference:
 *      - chessvariants.com path
 *      - http/https URL
 *      - Named chess-variant reference work (Pritchard, Murray, Gollon, etc.)
 *      - Book title in *italics*
 *      - ISBN
 *
 * Files that satisfy neither are flagged. Exit code 1 if any are found.
 * Run: node scripts/check-attribution.mjs [--fix-list]
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const gamesDir = path.join(root, 'games')

const REFERENCE_AUTHORS = /\b(Pritchard|Murray|Gollon|Cazaux|Schmittberger|Betza|Parton|Dickins|Hooper|Whyld|Bodlaender|Bell|Parlett|Falkener|Culin|Finkel)\b/

function isResolvable(attribution) {
  if (!attribution) return false
  if (/chessvariants\.com\//.test(attribution)) return true
  if (/https?:\/\//.test(attribution)) return true
  if (/ISBN/i.test(attribution)) return true
  if (REFERENCE_AUTHORS.test(attribution) && /\*[^*]+\*/.test(attribution)) return true
  if (/lichess\.org|chess\.com|pychess\.org/.test(attribution)) return true
  return false
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')

  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/)
  if (!fmMatch) return { pass: false, reason: 'no frontmatter' }

  const frontmatter = fmMatch[1]
  if (/^original:\s*true$/m.test(frontmatter)) return { pass: true, reason: 'original' }
  if (/^published:\s*false$/m.test(frontmatter)) return { pass: true, reason: 'unpublished' }

  const body = content.slice(fmMatch[0].length)
  const attrMatch = body.match(/###\s*Attribution\s*\n([\s\S]*?)(?=\n###|\n---|\s*$)/)
  const attribution = attrMatch ? attrMatch[1].trim() : ''

  if (!attribution) return { pass: false, reason: 'no attribution section' }
  if (isResolvable(attribution)) return { pass: true, reason: 'resolvable' }

  return { pass: false, reason: 'unresolvable attribution' }
}

const families = fs.readdirSync(gamesDir).filter(f => {
  const stat = fs.statSync(path.join(gamesDir, f))
  return stat.isDirectory() && f !== '_shared'
})

const failures = []
let total = 0

for (const family of families) {
  const varDir = path.join(gamesDir, family, 'content', 'variants')
  if (!fs.existsSync(varDir)) continue
  const files = fs.readdirSync(varDir).filter(f => f.endsWith('.md'))

  for (const file of files) {
    total++
    const filePath = path.join(varDir, file)
    const result = checkFile(filePath)
    if (!result.pass) {
      failures.push({ family, file, reason: result.reason })
    }
  }
}

const fixList = process.argv.includes('--fix-list')

if (failures.length === 0) {
  console.log(`Attribution check passed: ${total} files, all have resolvable reference or declare original/unpublished.`)
  process.exit(0)
} else {
  console.log(`Attribution check: ${failures.length}/${total} files lack resolvable reference or original declaration.\n`)
  if (fixList) {
    for (const f of failures) {
      console.log(`  ${f.family}/${f.file} — ${f.reason}`)
    }
  } else {
    const byReason = {}
    for (const f of failures) {
      byReason[f.reason] = (byReason[f.reason] || 0) + 1
    }
    for (const [reason, count] of Object.entries(byReason)) {
      console.log(`  ${count} files: ${reason}`)
    }
    console.log(`\nRun with --fix-list for the full file list.`)
  }
  process.exit(1)
}
