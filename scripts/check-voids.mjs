#!/usr/bin/env node
/**
 * Void consistency CI check.
 *
 * For families with engine plugins, any file declaring render.zones.voids
 * must also declare topology.voids. The two arrays must match exactly,
 * unless topology.blockers accounts for the difference (render shows all
 * non-existent cells; topology splits them into voids and blockers).
 *
 * Families without plugins (e.g. royal-ur, dungeon-chess) are skipped:
 * topology.voids there would be config nothing consumes.
 *
 * Run: node scripts/check-voids.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const gamesDir = path.join(root, 'games')

const PLUGIN_FAMILIES = new Set(['chess', 'draughts', 'go', 'reversi', 'shogi', 'xiangqi'])

function parseYamlArray(text) {
  const m = text.match(/\[\[[\d,\[\]\s]+\]\]/)
  if (!m) return null
  try {
    return JSON.parse(m[0])
  } catch {
    return null
  }
}

function coordKey(arr) {
  return arr.map(c => `${c[0]},${c[1]}`).sort().join('|')
}

function extractEngineBlock(content) {
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/)
  if (!fmMatch) return null
  return fmMatch[1]
}

function extractField(fm, fieldPath) {
  const lines = fm.split('\n')
  const parts = fieldPath.split('.')
  let indent = -1
  let collecting = false
  let depth = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const lineIndent = line.search(/\S/)
    if (lineIndent < 0) continue

    if (!collecting) {
      if (depth < parts.length) {
        const expected = parts[depth] + ':'
        const trimmed = line.trim()
        if (trimmed.startsWith(expected)) {
          depth++
          indent = lineIndent
          if (depth === parts.length) {
            const value = trimmed.slice(expected.length).trim()
            if (value) return value
            collecting = true
          }
        } else if (lineIndent <= indent && indent >= 0) {
          depth = 0
          indent = -1
        }
      }
    } else {
      if (lineIndent <= indent) break
      const trimmed = line.trim()
      if (trimmed.startsWith('voids:') || trimmed.startsWith('blockers:')) {
        const value = trimmed.split(':').slice(1).join(':').trim()
        if (value) return value
      }
    }
  }
  return null
}

function getVoidsAndBlockers(fm) {
  const renderVoids = extractRenderVoids(fm)
  const topoVoids = extractTopoVoids(fm)
  const topoBlockers = extractTopoBlockers(fm)
  return { renderVoids, topoVoids, topoBlockers }
}

function extractRenderVoids(fm) {
  const lines = fm.split('\n')
  let inRender = false
  let inZones = false
  let renderIndent = -1
  let zonesIndent = -1

  for (const line of lines) {
    const trimmed = line.trim()
    const indent = line.search(/\S/)
    if (indent < 0) continue

    if (trimmed === 'render:') {
      inRender = true
      renderIndent = indent
      continue
    }
    if (inRender && indent <= renderIndent && trimmed !== '') {
      inRender = false
      inZones = false
    }
    if (inRender && trimmed === 'zones:') {
      inZones = true
      zonesIndent = indent
      continue
    }
    if (inZones && indent <= zonesIndent && trimmed !== '') {
      inZones = false
    }
    if (inZones && trimmed.startsWith('voids:')) {
      const value = trimmed.slice('voids:'.length).trim()
      return parseYamlArray(value)
    }
  }
  return null
}

function extractTopoVoids(fm) {
  const lines = fm.split('\n')
  let inTopo = false
  let topoIndent = -1

  for (const line of lines) {
    const trimmed = line.trim()
    const indent = line.search(/\S/)
    if (indent < 0) continue

    if (trimmed === 'topology:') {
      inTopo = true
      topoIndent = indent
      continue
    }
    if (inTopo && indent <= topoIndent && trimmed !== '') {
      inTopo = false
    }
    if (inTopo && trimmed.startsWith('voids:')) {
      const value = trimmed.slice('voids:'.length).trim()
      return parseYamlArray(value)
    }
  }
  return null
}

function extractTopoBlockers(fm) {
  const lines = fm.split('\n')
  let inTopo = false
  let topoIndent = -1

  for (const line of lines) {
    const trimmed = line.trim()
    const indent = line.search(/\S/)
    if (indent < 0) continue

    if (trimmed === 'topology:') {
      inTopo = true
      topoIndent = indent
      continue
    }
    if (inTopo && indent <= topoIndent && trimmed !== '') {
      inTopo = false
    }
    if (inTopo && trimmed.startsWith('blockers:')) {
      const value = trimmed.slice('blockers:'.length).trim()
      return parseYamlArray(value)
    }
  }
  return null
}

const failures = []
let checked = 0

for (const family of PLUGIN_FAMILIES) {
  const varDir = path.join(gamesDir, family, 'content', 'variants')
  if (!fs.existsSync(varDir)) continue

  for (const file of fs.readdirSync(varDir).filter(f => f.endsWith('.md'))) {
    const filePath = path.join(varDir, file)
    const content = fs.readFileSync(filePath, 'utf8')
    const fm = extractEngineBlock(content)
    if (!fm) continue

    const { renderVoids, topoVoids, topoBlockers } = getVoidsAndBlockers(fm)
    if (!renderVoids) continue

    checked++

    if (!topoVoids) {
      failures.push({
        file: `${family}/${file}`,
        reason: 'declares render.zones.voids but missing topology.voids'
      })
      continue
    }

    const renderKey = coordKey(renderVoids)
    const topoKey = coordKey(topoVoids)

    if (topoBlockers) {
      const combined = coordKey([...topoVoids, ...topoBlockers])
      if (combined !== renderKey) {
        failures.push({
          file: `${family}/${file}`,
          reason: 'render.zones.voids does not equal topology.voids + topology.blockers'
        })
      }
    } else {
      if (topoKey !== renderKey) {
        failures.push({
          file: `${family}/${file}`,
          reason: 'render.zones.voids does not match topology.voids (and no blockers declared)'
        })
      }
    }
  }
}

console.log(`Void consistency: ${checked - failures.length}/${checked} passed`)

if (failures.length) {
  console.log(`\n${failures.length} ERRORS:`)
  for (const f of failures) console.log(`  ${f.file} — ${f.reason}`)
  process.exit(1)
}
