#!/usr/bin/env node
/**
 * Does the setup string hold the pieces the file says it holds?
 *
 * Dai Shogi's `special` field said "65 pieces per side" from the day the file
 * was created, on 2026-07-08. Its setup string was authored two days later
 * with 63 a side: the two go-betweens were put inside the pawn rank, where
 * they displaced two pawns instead of standing on their own rank in front of
 * them. The two statements sat four lines apart in the same file for eight
 * weeks.
 *
 * Nothing compared them. Every board diagram, every PDF, the gallery and the
 * play page all rendered the setup faithfully, and the snapshot suite locked
 * the result in by comparing the renderer against a file the renderer had
 * produced. Consistent everywhere, and wrong everywhere.
 *
 * A count is the cheapest fact about a starting position and the easiest to
 * state twice. This asserts the two statements agree, and it is the check the
 * corpus did not have.
 *
 * Run: node scripts/check-piece-counts.mjs
 */
import { readFileSync, readdirSync, existsSync } from 'fs'
import { resolve, join } from 'path'

const ROOT = resolve(import.meta.dirname, '..')
const GAMES = resolve(ROOT, 'games')

// "65 pieces per side", "27 pieces a side". Only an explicit per-side claim
// counts: a bare "402 pieces" may be the total for both players.
const CLAIM = /(\d+)\s+pieces?\s+(?:per|a)\s+side/gi

// Two conventions live in this corpus and they disagree about what marks a
// side. Chess and shogi use case: `P` is one player, `p` the other. Draughts
// uses the letter: `w` and `b` are both lowercase and are different players.
// Reading a draughts board by case puts every piece on one side and reports
// zero for the other, which is how the first version of this check produced
// four false failures.
function countSides(setup) {
  const symbols = []
  for (const rank of setup.split('/')) {
    for (const tok of rank.match(/\[[^\]]+\]|\d+|\+?[A-Za-z]/g) || []) {
      if (/^\d+$/.test(tok)) continue
      const core = tok.replace(/[[\]+]/g, '')
      if (core) symbols.push(core)
    }
  }
  const isUpper = (s) => s[0] === s[0].toUpperCase() && s[0] !== s[0].toLowerCase()
  const sente = symbols.filter(isUpper).length
  if (sente > 0) return { sente, gote: symbols.length - sente }

  // No uppercase anywhere, so case is not the discriminator. Group by leading
  // letter and take the two largest groups as the two sides.
  const byLetter = {}
  for (const s of symbols) byLetter[s[0].toLowerCase()] = (byLetter[s[0].toLowerCase()] || 0) + 1
  const groups = Object.values(byLetter).sort((a, b) => b - a)
  return { sente: groups[0] || 0, gote: groups[1] || 0 }
}

const failures = []
let checked = 0

for (const family of readdirSync(GAMES).filter(d => !d.startsWith('.'))) {
  const dir = join(GAMES, family, 'content', 'variants')
  if (!existsSync(dir)) continue
  for (const file of readdirSync(dir).filter(f => f.endsWith('.md'))) {
    const path = join(dir, file)
    const text = readFileSync(path, 'utf8')
    const fm = text.split('---')[1] || ''
    const setupMatch = fm.match(/setup: "([^"]+)"/)
    if (!setupMatch) continue
    const setup = setupMatch[1]
    // Comma-separated FEN4 and coordinate lists are counted by their own rules.
    if (!setup.includes('/') || setup.includes(':')) continue

    const { sente, gote } = countSides(setup)
    if (sente === 0 && gote === 0) continue
    checked++

    const claims = [...text.matchAll(CLAIM)].map(m => Number(m[1]))
    const distinct = [...new Set(claims)]
    const where = `${family}/${file.replace('.md', '')}`

    if (distinct.length > 1) {
      failures.push(`${where}: the file states ${distinct.join(' and ')} pieces per side in different places`)
      continue
    }
    if (distinct.length === 1 && distinct[0] !== sente) {
      failures.push(`${where}: states ${distinct[0]} pieces per side, setup holds ${sente}`)
    }
  }
}

if (failures.length) {
  console.error(`✗ ${failures.length} variant(s) whose setup contradicts their own stated piece count:\n`)
  for (const f of failures) console.error(`  ${f}`)
  console.error(`\n  ${checked} checked, ${failures.length} failing`)
  process.exit(1)
}
console.log(`✓ All ${checked} variants with a stated piece count agree with their setup`)
