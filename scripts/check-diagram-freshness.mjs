#!/usr/bin/env node
/**
 * CI check: detects when engine: frontmatter has changed without a sync:boards run.
 * Compares current engine: blocks against the committed diagram-hashes.json.
 * If they differ, the SVGs are stale and need regenerating.
 *
 * Run: node scripts/check-diagram-freshness.mjs
 * Regenerate: node scripts/check-diagram-freshness.mjs --update
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { createHash } from 'crypto';
import matter from 'gray-matter';

const ROOT = resolve(import.meta.dirname, '..');
const GAMES_DIR = resolve(ROOT, 'games');
const HASHES_PATH = resolve(ROOT, 'diagram-hashes.json');
const UPDATE = process.argv.includes('--update');

function hashString(str) {
  return createHash('sha256').update(str).digest('hex').slice(0, 12);
}

function getEngineBlocks() {
  const blocks = {};
  const slugs = readdirSync(GAMES_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  for (const slug of slugs) {
    const variantsDir = resolve(GAMES_DIR, slug, 'content/variants');
    if (!existsSync(variantsDir)) continue;

    for (const file of readdirSync(variantsDir).filter(f => f.endsWith('.md'))) {
      const filepath = resolve(variantsDir, file);
      const { data } = matter(readFileSync(filepath, 'utf8'));
      if (!data.engine) continue;

      const key = `${slug}/${file.replace('.md', '')}`;
      const engineStr = JSON.stringify(data.engine);
      blocks[key] = hashString(engineStr);
    }
  }
  return blocks;
}

const current = getEngineBlocks();

if (UPDATE) {
  writeFileSync(HASHES_PATH, JSON.stringify(current, null, 2) + '\n');
  console.log(`Updated diagram-hashes.json (${Object.keys(current).length} entries)`);
  process.exit(0);
}

if (!existsSync(HASHES_PATH)) {
  console.error('diagram-hashes.json not found — run: node scripts/check-diagram-freshness.mjs --update');
  process.exit(1);
}

const committed = JSON.parse(readFileSync(HASHES_PATH, 'utf8'));
const stale = [];
const added = [];

for (const [key, hash] of Object.entries(current)) {
  if (!committed[key]) added.push(key);
  else if (committed[key] !== hash) stale.push(key);
}

if (stale.length === 0 && added.length === 0) {
  console.log(`Diagram freshness check passed — ${Object.keys(current).length} engine blocks unchanged`);
  process.exit(0);
}

if (stale.length > 0) {
  console.error(`Stale diagrams (engine: frontmatter changed without sync:boards):`);
  for (const s of stale) console.error(`  ${s}`);
}
if (added.length > 0) {
  console.error(`New engine blocks without diagram hashes:`);
  for (const a of added) console.error(`  ${a}`);
}
console.error(`\nRun: npm run sync:boards && node scripts/check-diagram-freshness.mjs --update`);
process.exit(1);
