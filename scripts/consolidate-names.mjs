#!/usr/bin/env node
/**
 * Consolidates character names from all RPG game data into games/_shared/names.json.
 * Run after adding a new game or updating name tables.
 *
 * Usage: node scripts/consolidate-names.mjs
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs'
import { join } from 'path'

const ROOT = new URL('..', import.meta.url).pathname

const firstNames = new Set()
const surnames = new Set()
const gamesSeen = new Set()

function loadJson(path) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'))
  } catch { return null }
}

const CHARACTER_NAME_PATTERNS = [
  /^(female|male|given)\s*names?$/i,
  /^npc\s*names/i,
  /^character\s*name.*given/i,
  /^character\s*name.*family/i,
  /^character\s*name.*callsign/i,
  /^surnames/i,
  /^family\s*name/i,
]

const EXCLUDE_PATTERNS = [
  /sector/i, /planet/i, /world/i, /settlement/i, /starship/i,
  /faction/i, /inn\b/i, /place/i, /template/i, /tag/i,
]

function isCharacterNameTable(tableName) {
  if (EXCLUDE_PATTERNS.some(p => p.test(tableName))) return false
  return CHARACTER_NAME_PATTERNS.some(p => p.test(tableName))
}

function isValidName(val) {
  if (typeof val !== 'string') return false
  if (val.length < 2) return false
  if (val.includes('[') || val.includes('(')) return false
  if (val.includes('/')) return false
  if (val.split(' ').length > 3) return false
  return true
}

function scanTableFile(filePath, game) {
  const data = loadJson(filePath)
  if (!data || !data.tables) return

  const tables = Array.isArray(data.tables) ? data.tables : []
  for (const t of tables) {
    const name = t.name || ''
    const entries = t.entries || []
    if (!entries.length) continue
    if (!isCharacterNameTable(name)) continue

    const isSurname = /surname|family/i.test(name)

    gamesSeen.add(game)
    for (const e of entries) {
      const val = typeof e === 'object' ? (e.result || e.name || '') : e
      if (!isValidName(val)) continue
      if (isSurname) surnames.add(val)
      else firstNames.add(val)
    }
  }
}

function scanClassNames(filePath, game) {
  const data = loadJson(filePath)
  if (!data) return
  const classes = data.classes || data.entries || []
  if (!Array.isArray(classes)) return
  for (const cls of classes) {
    const names = cls.names || {}
    for (const raceNames of Object.values(names)) {
      if (Array.isArray(raceNames)) {
        gamesSeen.add(game)
        for (const n of raceNames) {
          if (typeof n === 'string' && n.length > 1) firstNames.add(n)
        }
      }
    }
  }
}

// Scan all games
const gamesDir = join(ROOT, 'games')
for (const game of readdirSync(gamesDir)) {
  if (game.startsWith('_') || game.startsWith('.')) continue
  const gameDir = join(gamesDir, game)

  // Scan tables/ and data/ directories
  for (const subdir of ['tables', 'data', 'oracles']) {
    const dir = join(gameDir, subdir)
    if (!existsSync(dir)) continue
    for (const file of readdirSync(dir)) {
      if (!file.endsWith('.json')) continue
      scanTableFile(join(dir, file), game)
    }
  }

  // Scan class files for embedded names
  for (const classFile of ['data/classes.json', 'tables/classes.json']) {
    const path = join(gameDir, classFile)
    if (existsSync(path)) scanClassNames(path, game)
  }
}

const output = {
  name: 'Consolidated Character Names',
  description: 'Auto-consolidated from all RPG game data. Used as fallback for games without their own name tables.',
  generated: new Date().toISOString().split('T')[0],
  sources: [...gamesSeen].sort(),
  stats: { firstNames: firstNames.size, surnames: surnames.size },
  tables: [
    { name: 'First Names', entries: [...firstNames].sort() },
    { name: 'Surnames', entries: [...surnames].sort() },
  ],
}

const outPath = join(gamesDir, '_shared', 'names.json')
writeFileSync(outPath, JSON.stringify(output, null, 2) + '\n')

console.log(`Consolidated names from ${gamesSeen.size} games:`)
console.log(`  ${firstNames.size} first names`)
console.log(`  ${surnames.size} surnames`)
console.log(`  Sources: ${[...gamesSeen].sort().join(', ')}`)
console.log(`  Written to: games/_shared/names.json`)
