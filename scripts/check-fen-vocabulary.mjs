#!/usr/bin/env node
/**
 * FEN vocabulary CI check.
 * For every chess-family variant with an engine.setup field, validates that
 * every alphabetic FEN symbol resolves via DEFAULT_VOCABULARY + the variant's
 * declared vocabulary block.
 *
 * Accepts both unquoted (0: F) and quoted ("0": "F") symbol forms.
 * Skips 4-player comma-separated FENs.
 *
 * Exit code 1 if any unmapped symbols found. Run: node scripts/check-fen-vocabulary.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const gamesDir = path.join(root, 'games')

const DEFAULT_SYMBOLS = new Set('KQRBNPkqrbnp'.split(''))

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return null
  return match[1]
}

function extractSetup(yaml) {
  const m = yaml.match(/^\s*setup:\s*["']?(.+?)["']?\s*$/m)
  if (!m) return null
  const nested = yaml.match(/engine:[\s\S]*?setup:\s*["']?(.+?)["']?\s*$/m)
  return nested ? nested[1] : m[1]
}

function extractVocabularySymbols(yaml) {
  const symbols = new Set()
  const vocabStart = yaml.indexOf('vocabulary:')
  if (vocabStart === -1) return symbols

  const lines = yaml.slice(vocabStart).split('\n')
  const baseIndent = lines[0].search(/\S/)
  let inSymbols = false

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i]
    const indent = line.search(/\S/)
    if (indent === -1) continue
    if (indent <= baseIndent) break

    if (line.includes('symbols:')) {
      inSymbols = true
      // An inline entry carries its symbols on the same line as `symbols:`,
      // so skipping the line skipped the declaration.
      for (const m of line.matchAll(/["']?\d["']?\s*:\s*["']?([A-Za-z])["']?/g)) {
        symbols.add(m[1])
      }
      continue
    }

    if (inSymbols) {
      const symMatch = line.match(/["']?\d["']?\s*:\s*["']?([A-Za-z])["']?/)
      if (symMatch) {
        symbols.add(symMatch[1])
      } else if (indent <= line.search(/symbols:/) && !line.includes('symbols:')) {
        const pieceKeyMatch = line.match(/^\s{2,}\w/)
        if (pieceKeyMatch && indent <= baseIndent + 4) inSymbols = false
      }
    }
  }
  return symbols
}

function extractAllVocabSymbols(yaml) {
  const symbols = new Set()
  const lines = yaml.split('\n')
  let inVocab = false
  let vocabIndent = -1
  for (const line of lines) {
    const indent = line.search(/\S/)
    if (indent === -1) continue
    if (line.trimStart().startsWith('vocabulary:')) {
      inVocab = true
      vocabIndent = indent
      continue
    }
    if (inVocab && indent <= vocabIndent) { inVocab = false; vocabIndent = -1 }
    if (inVocab) {
      // matchAll, not match. The corpus writes vocabulary two ways and the
      // inline flow form puts both owners on one line:
      //
      //   coordinator: { symbols: { 0: C, 1: c } }
      //
      // A non-global match returns only the first, so every inline entry
      // registered its white symbol and dropped its black one. That is the
      // whole of ultima's reported failure - c, h, i, l, w, the lowercase half
      // of five pieces that are correctly declared - and it was masking the two
      // variants that genuinely declare no vocabulary at all.
      for (const m of line.matchAll(/["']?\d["']?\s*:\s*["']?([A-Za-z])["']?/g)) {
        symbols.add(m[1])
      }
    }
  }
  return symbols
}

function isFen4(setup) {
  return setup.includes(',')
}

function extractFenSymbols(setup) {
  const symbols = new Set()
  const fen = setup.split(/\s+/)[0]
  for (const ch of fen) {
    if (/[A-Za-z]/.test(ch)) symbols.add(ch)
  }
  return symbols
}

function isChessFamily(filePath) {
  return filePath.includes('/games/chess/')
}

function findVariantFiles() {
  const files = []
  const chessDir = path.join(gamesDir, 'chess', 'content', 'variants')
  if (!fs.existsSync(chessDir)) return files
  const variants = fs.readdirSync(chessDir).filter(f => f.endsWith('.md'))
  for (const v of variants) {
    files.push(path.join(chessDir, v))
  }
  const rulebook = path.join(gamesDir, 'chess', 'content', 'rulebook.md')
  if (fs.existsSync(rulebook)) files.push(rulebook)
  return files
}

let errorCount = 0
let checkedCount = 0
const failures = []
const files = findVariantFiles()

for (const filePath of files) {
  const content = fs.readFileSync(filePath, 'utf8')
  const yaml = parseFrontmatter(content)
  if (!yaml) continue

  const setup = extractSetup(yaml)
  if (!setup || isFen4(setup)) continue

  const fenSymbols = extractFenSymbols(setup)
  if (fenSymbols.size === 0) continue

  const declaredSymbols = extractAllVocabSymbols(yaml)
  const allKnown = new Set([...DEFAULT_SYMBOLS, ...declaredSymbols])

  const unmapped = [...fenSymbols].filter(s => !allKnown.has(s))
  checkedCount++

  if (unmapped.length > 0) {
    const rel = path.relative(root, filePath)
    const slug = path.basename(filePath, '.md')
    failures.push({ file: rel, slug, unmapped: unmapped.sort() })
    errorCount++
  }
}

if (errorCount > 0) {
  console.error(`\n✗ ${errorCount} variant(s) have unmapped FEN symbols:\n`)
  for (const f of failures) {
    console.error(`  ${f.slug}: ${f.unmapped.join(', ')}  (${f.file})`)
  }
  console.error(`\n  ${checkedCount} checked, ${errorCount} failing\n`)
  process.exit(1)
} else {
  console.log(`✓ All ${checkedCount} chess variants have complete FEN vocabulary mappings`)
}
