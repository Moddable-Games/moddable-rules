#!/usr/bin/env node
/**
 * Attribution CI check.
 *
 * Every variant file must satisfy one of:
 *   1. `original: true` in frontmatter (Moddable original, no external provenance claimed)
 *   2. `published: false` in frontmatter (not shipped, not making a claim to anyone)
 *   3. An Attribution section carrying a resolvable reference: a URL, a bare domain,
 *      an ISBN, or a named reference work cited with an italicised title
 *   4. A parent hub whose own Attribution section carries a resolvable reference.
 *      A variant of a documented game inherits the hub's sourcing rather than
 *      duplicating the same citation across dozens of files.
 *
 * Two failure levels:
 *   error   — no attribution at all, or a claim with nothing behind it. Fails the build.
 *   warning — reported, does not fail the build.
 *
 * Also checks, as errors:
 *   - a person credited in `special:` or in body prose who is absent from the
 *     Attribution section. A correction applied only to the Attribution section
 *     leaves the wrong name in the two places readers actually see it.
 *
 * Run: node scripts/check-attribution.mjs [--fix-list] [--verify-domains]
 *
 * --verify-domains resolves every cited domain over DNS and reports any that do
 * not exist. Off by default so the check stays deterministic and offline; run it
 * periodically, and in any session that adds citations. A citation that cannot be
 * resolved is worse than no citation, because it buys credibility it has not earned.
 */

import fs from 'fs'
import path from 'path'
import dns from 'dns/promises'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const gamesDir = path.join(root, 'games')

const REFERENCE_AUTHORS =
  /\b(Pritchard|Murray|Gollon|Cazaux|Schmittberger|Betza|Parton|Dickins|Hooper|Whyld|Bodlaender|Bell|Parlett|Falkener|Culin|Finkel|Boyer)\b/

// Bare domains count. shogunofgames.com was cited by five files, does not exist,
// and was invisible to an https?:// test for three months.
const TLD = '(?:com|org|net|io|games|info|edu|gov|uk|de|fr|jp|at|ru|be|nl|it|es|se|pl|cz)'
const BARE_DOMAIN = new RegExp(`\\b(?:[a-z0-9][a-z0-9-]*\\.)+${TLD}\\b`, 'i')
const ANY_DOMAIN = new RegExp(`\\b(?:[a-z0-9][a-z0-9-]*\\.)+${TLD}\\b`, 'gi')

function isResolvable(attribution) {
  if (!attribution) return false
  if (/https?:\/\//.test(attribution)) return true
  if (BARE_DOMAIN.test(attribution)) return true
  if (/ISBN/i.test(attribution)) return true
  if (REFERENCE_AUTHORS.test(attribution) && /\*[^*]+\*/.test(attribution)) return true
  return false
}

// Slice rather than one regex: a `$` under the `m` flag matches at every line
// end, so a lazy capture terminates on the Attribution section's first line and
// silently drops the rest of it.
function attributionOf(content) {
  const start = content.match(/^#{1,6}\s*Attribution\s*$/m)
  if (!start) return ''
  const from = start.index + start[0].length
  const rest = content.slice(from)
  const next = rest.match(/^#{1,6}\s+\S/m)
  return (next ? rest.slice(0, next.index) : rest).trim()
}

function frontmatterOf(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---/)
  return m ? { fm: m[1], body: content.slice(m[0].length) } : null
}

// "Designed by X", "Invented by X, 1975", "Created by X".
// Capture surnames only, so a match does not depend on honorifics, forenames,
// initials or diacritic spelling agreeing across two places in the same file.
const CREDIT =
  /\b(?:Designed|Invented|Created|Devised|Introduced|Developed)\s+by\s+((?:(?:[A-ZÀ-Þ][\wÀ-ÿ.'-]*|de|van|von|der|and|&)\s*){1,6})/g
const HONORIFIC = /^(?:Dr|Mr|Mrs|Ms|Sir|Prof|Professor|Grandmaster|GM|World|Champion|Soviet|Master|the)$/i

function creditedNames(text) {
  const out = new Set()
  let m
  CREDIT.lastIndex = 0
  while ((m = CREDIT.exec(text)) !== null) {
    // Stop at the end of the sentence. A word ending in "." closes it, unless it
    // is a single-letter initial such as the "E." in "Helge E. de Vasa".
    const clipped = []
    for (const w of m[1].trim().split(/\s+/)) {
      clipped.push(w)
      if (w.endsWith('.') && w.replace(/\./g, '').length > 1) break
    }
    for (const part of clipped.join(' ').split(/\s+and\s+|\s*&\s*/)) {
      const words = part
        .trim()
        .replace(/[.,;:]+$/, '')
        .split(/\s+/)
        .filter(w => w && !HONORIFIC.test(w.replace(/\.$/, '')))
      // Last capitalised word is the surname; lowercase particles are skipped.
      const surname = [...words].reverse().find(w => /^[A-ZÀ-Þ]/.test(w))
      if (surname && surname.replace(/\./g, '').length > 2) out.add(fold(surname))
    }
  }
  return out
}

// Compare names without diacritics, so "Gliński" and "Glinski" are one person.
function fold(s) {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\w'-]/g, '')
    .toLowerCase()
}

const families = fs
  .readdirSync(gamesDir)
  .filter(f => fs.statSync(path.join(gamesDir, f)).isDirectory() && f !== '_shared')

const failures = []
const citedDomains = new Map()
let total = 0

// Collect every domain cited anywhere under games/, not just in variant files.
// A fabricated citation is equally wrong in a hub page or a sub-page, and the
// point of the sweep is that no cited source goes untested.
function collectDomains(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) collectDomains(p)
    else if (entry.name.endsWith('.md')) {
      for (const d of fs.readFileSync(p, 'utf8').match(ANY_DOMAIN) || []) {
        const dom = d.toLowerCase()
        if (!citedDomains.has(dom)) citedDomains.set(dom, [])
        citedDomains.get(dom).push(path.relative(gamesDir, p))
      }
    }
  }
}
if (process.argv.includes('--verify-domains')) collectDomains(gamesDir)

for (const family of families) {
  const familyDir = path.join(gamesDir, family)

  // Hub attribution, used for inheritance.
  let hubResolvable = false
  for (const hubPath of [
    path.join(familyDir, 'content', 'rulebook.md'),
    path.join(familyDir, 'rulebook.md'),
    path.join(familyDir, 'content', 'index.md')
  ]) {
    if (fs.existsSync(hubPath)) {
      const hubAttr = attributionOf(fs.readFileSync(hubPath, 'utf8'))
      if (isResolvable(hubAttr)) hubResolvable = true
    }
  }

  const varDir = path.join(familyDir, 'content', 'variants')
  if (!fs.existsSync(varDir)) continue

  for (const file of fs.readdirSync(varDir).filter(f => f.endsWith('.md'))) {
    total++
    const filePath = path.join(varDir, file)
    const rel = `${family}/${file}`
    const content = fs.readFileSync(filePath, 'utf8')

    const parsed = frontmatterOf(content)
    if (!parsed) {
      failures.push({ rel, reason: 'no frontmatter', severity: 'error' })
      continue
    }
    const { fm, body } = parsed

    const isOriginal = /^original:\s*true$/m.test(fm)
    const isUnpublished = /^published:\s*false$/m.test(fm)
    const attribution = attributionOf(body)

    // Credit consistency. A name in special: or in prose that the Attribution
    // section does not also carry is the defect that hid "Corey Clark" in seven
    // files while this check reported them green.
    if (attribution) {
      const outside = creditedNames(fm + '\n' + body.replace(attribution, ''))
      const foldedAttr = fold(attribution)
      const missing = [...outside].filter(n => !foldedAttr.includes(n))
      if (missing.length) {
        failures.push({
          rel,
          reason: `credited outside Attribution but not in it: ${missing.join('; ')}`,
          severity: 'error'
        })
      }
    }

    if (isOriginal || isUnpublished) continue
    if (isResolvable(attribution)) continue
    // A variant of a documented game inherits its hub's sourcing. "Hex on a 9x9
    // board" does not need its own citation when the Hex hub carries one, and
    // copying the same reference into every variant is the duplication the
    // file-editing discipline in conventions.md exists to prevent.
    if (hubResolvable) continue
    if (!attribution) {
      failures.push({ rel, reason: 'no attribution section, and hub has no citation', severity: 'error' })
      continue
    }
    failures.push({ rel, reason: 'no resolvable reference, and hub has none either', severity: 'warn' })
  }
}

const errors = failures.filter(f => f.severity === 'error')
const warnings = failures.filter(f => f.severity === 'warn')
const fixList = process.argv.includes('--fix-list')

console.log(
  `Attribution check: ${total - failures.length}/${total} passed ` +
    `(resolvable, inherited, original or unpublished)`
)
if (errors.length) console.log(`  ${errors.length} errors`)
if (warnings.length) console.log(`  ${warnings.length} warnings (citation wanted, not a blocker)`)

if (fixList) {
  for (const [label, list] of [['ERRORS', errors], ['WARNINGS', warnings]]) {
    if (!list.length) continue
    console.log(`\n${label}:`)
    for (const f of list) console.log(`  ${f.rel} — ${f.reason}`)
  }
}

if (process.argv.includes('--verify-domains')) {
  console.log(`\nResolving ${citedDomains.size} cited domains...`)
  const dead = []
  await Promise.all(
    [...citedDomains.keys()].map(async d => {
      try {
        await dns.lookup(d)
      } catch {
        dead.push(d)
      }
    })
  )
  if (dead.length) {
    console.log(`  ${dead.length} DO NOT RESOLVE:`)
    for (const d of dead.sort()) console.log(`    ${d} — cited by ${citedDomains.get(d).join(', ')}`)
    process.exit(1)
  }
  console.log('  all cited domains resolve')
}

process.exit(errors.length > 0 ? 1 : 0)
