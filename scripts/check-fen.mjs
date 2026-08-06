#!/usr/bin/env node
/**
 * FEN / setup string CI check.
 * For every variant file with an engine.setup field, validates:
 *   1. Rank count matches declared engine.topology.rows
 *   2. Each rank's expanded width matches declared engine.topology.cols
 *
 * Exit code 1 if any errors are found. Run: node scripts/check-fen.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const gamesDir = path.join(root, 'games')

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return null
  return match[1]
}

function extractYamlValue(yaml, key) {
  const re = new RegExp(`^\\s*${key}:\\s*(.+)$`, 'm')
  const m = yaml.match(re)
  return m ? m[1].trim().replace(/^["']|["']$/g, '') : null
}

function extractNestedValue(yaml, path) {
  const lines = yaml.split('\n')
  let depth = 0
  let found = []
  const keys = path.split('.')

  for (let ki = 0; ki < keys.length; ki++) {
    const target = keys[ki]
    const targetIndent = ki * 2
    let matched = false
    for (let i = found.length ? found[found.length - 1] + 1 : 0; i < lines.length; i++) {
      const line = lines[i]
      const indent = line.search(/\S/)
      if (indent === -1) continue
      if (indent === targetIndent) {
        const keyMatch = line.match(/^\s*(\w[\w-]*):\s*(.*)$/)
        if (keyMatch && keyMatch[1] === target) {
          if (ki === keys.length - 1) {
            return keyMatch[2].trim().replace(/^["']|["']$/g, '')
          }
          found.push(i)
          matched = true
          break
        }
      }
    }
    if (!matched) return null
  }
  return null
}

function expandRankWidth(rank) {
  let width = 0
  let i = 0
  while (i < rank.length) {
    if (rank[i] === '[') {
      const close = rank.indexOf(']', i)
      if (close === -1) { i++; continue }
      width++
      i = close + 1
    } else if (rank[i] === '+') {
      i++
      if (i < rank.length) {
        if (rank[i] === '[') {
          const close = rank.indexOf(']', i)
          if (close === -1) { i++; continue }
          i = close + 1
        } else {
          i++
        }
        width++
      }
    } else if (/\d/.test(rank[i])) {
      let num = ''
      while (i < rank.length && /\d/.test(rank[i])) {
        num += rank[i]
        i++
      }
      width += parseInt(num, 10)
    } else {
      width++
      i++
    }
  }
  return width
}

function isFen4(setup) {
  return setup.includes(',')
}

function isTrackNotation(setup) {
  return setup.includes('home:') || setup.includes('track:')
}

function isEmpty(setup) {
  return !setup || setup.replace(/["']/g, '').trim() === ''
}

function validateSetup(setup, rows, cols, filePath) {
  if (isEmpty(setup) || isFen4(setup) || isTrackNotation(setup)) return []

  const errors = []
  const fen = setup.split(/\s+/)[0]
  const ranks = fen.split('/')

  if (ranks.length !== rows) {
    errors.push(`rank count ${ranks.length} !== declared rows ${rows}`)
  }

  for (let r = 0; r < ranks.length; r++) {
    const width = expandRankWidth(ranks[r])
    if (width !== cols) {
      errors.push(`rank ${r + 1} ("${ranks[r]}") expands to width ${width}, expected ${cols}`)
    }
  }

  return errors
}

function findVariantFiles() {
  const files = []
  const families = fs.readdirSync(gamesDir).filter(f =>
    fs.statSync(path.join(gamesDir, f)).isDirectory()
  )

  for (const family of families) {
    const variantsDir = path.join(gamesDir, family, 'content', 'variants')
    if (!fs.existsSync(variantsDir)) continue

    const variants = fs.readdirSync(variantsDir).filter(f => f.endsWith('.md'))
    for (const v of variants) {
      files.push(path.join(variantsDir, v))
    }

    const rulebook = path.join(gamesDir, family, 'content', 'rulebook.md')
    if (fs.existsSync(rulebook)) {
      files.push(rulebook)
    }
  }

  return files
}

let errorCount = 0
const files = findVariantFiles()

for (const filePath of files) {
  const content = fs.readFileSync(filePath, 'utf8')
  const yaml = parseFrontmatter(content)
  if (!yaml) continue

  const setup = extractNestedValue(yaml, 'engine.setup')
  if (!setup) continue

  const topoType = extractNestedValue(yaml, 'engine.topology.type')
  if (!topoType || topoType !== 'grid') continue

  const rowsStr = extractNestedValue(yaml, 'engine.topology.rows')
  const colsStr = extractNestedValue(yaml, 'engine.topology.cols')
  if (!rowsStr || !colsStr) continue

  const rows = parseInt(rowsStr, 10)
  const cols = parseInt(colsStr, 10)
  if (isNaN(rows) || isNaN(cols)) continue

  const errors = validateSetup(setup, rows, cols, filePath)
  if (errors.length > 0) {
    const rel = path.relative(root, filePath)
    console.error(`\n  ${rel}`)
    for (const e of errors) {
      console.error(`    ✗ ${e}`)
    }
    errorCount++
  }
}

if (errorCount > 0) {
  console.error(`\n✗ ${errorCount} file(s) with FEN/setup errors\n`)
  process.exit(1)
} else {
  console.log(`✓ All ${files.length} variant files pass FEN dimension checks`)
}
