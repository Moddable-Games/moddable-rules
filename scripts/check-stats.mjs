#!/usr/bin/env node
/**
 * CI check: verifies api/stats.json counts match filesystem reality.
 * Fails if any count drifts from what a fresh build would produce.
 * Run: node scripts/check-stats.mjs
 */
import { readFileSync, existsSync, readdirSync } from 'fs';
import { resolve } from 'path';
import matter from 'gray-matter';

const ROOT = resolve(import.meta.dirname, '..');
const GAMES_DIR = resolve(ROOT, 'games');
const STATS_PATH = resolve(ROOT, 'dist/api/stats.json');

if (!existsSync(STATS_PATH)) {
  console.error('dist/api/stats.json not found — run npm run build first');
  process.exit(1);
}

const stats = JSON.parse(readFileSync(STATS_PATH, 'utf8'));
const errors = [];

function countFiles(dir, ext) {
  if (!existsSync(dir)) return 0;
  let count = 0;
  const walk = (d) => {
    for (const entry of readdirSync(d, { withFileTypes: true })) {
      if (entry.isDirectory()) walk(resolve(d, entry.name));
      else if (entry.name.endsWith(ext)) count++;
    }
  };
  walk(dir);
  return count;
}

const slugs = readdirSync(GAMES_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name)
  .filter(slug => {
    const rb = resolve(GAMES_DIR, slug, 'content/rulebook.md');
    if (!existsSync(rb)) return false;
    const { data } = matter(readFileSync(rb, 'utf8'));
    return data.published !== false;
  });

const actualGameCount = slugs.length;
if (stats.games.total !== actualGameCount) {
  errors.push(`games.total: stats=${stats.games.total}, actual=${actualGameCount}`);
}

let actualVariants = 0;
let actualComponentGames = 0;
let actualSubPages = 0;
for (const slug of slugs) {
  const variantsDir = resolve(GAMES_DIR, slug, 'content/variants');
  if (existsSync(variantsDir)) {
    actualVariants += readdirSync(variantsDir).filter(f => f.endsWith('.md')).length;
  }
  const gamesDir = resolve(GAMES_DIR, slug, 'content/games');
  if (existsSync(gamesDir)) {
    for (const g of readdirSync(gamesDir, { withFileTypes: true })) {
      if (g.isDirectory()) {
        const mdFiles = readdirSync(resolve(gamesDir, g.name)).filter(f => f.endsWith('.md'));
        if (mdFiles.length > 0) actualComponentGames++;
      }
    }
  }
  const contentDir = resolve(GAMES_DIR, slug, 'content');
  for (const entry of readdirSync(contentDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (entry.name === 'variants' || entry.name === 'games') continue;
    actualSubPages += countFiles(resolve(contentDir, entry.name), '.md');
  }
}

if (stats.content.variants !== actualVariants) {
  errors.push(`content.variants: stats=${stats.content.variants}, actual=${actualVariants}`);
}
if (stats.content.componentGames !== actualComponentGames) {
  errors.push(`content.componentGames: stats=${stats.content.componentGames}, actual=${actualComponentGames}`);
}
if (stats.content.subPages !== actualSubPages) {
  errors.push(`content.subPages: stats=${stats.content.subPages}, actual=${actualSubPages}`);
}

const pdfManifestPath = resolve(ROOT, 'pdf-manifest.json');
if (existsSync(pdfManifestPath)) {
  const pm = JSON.parse(readFileSync(pdfManifestPath, 'utf8'));
  if (stats.pdfs.total !== pm.total) {
    errors.push(`pdfs.total: stats=${stats.pdfs.total}, manifest=${pm.total}`);
  }
} else {
  if (stats.pdfs.total !== 0) {
    errors.push(`pdfs.total: stats=${stats.pdfs.total}, but no pdf-manifest.json found`);
  }
}

if (errors.length > 0) {
  console.error('Stats drift detected:');
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
} else {
  console.log(`Stats check passed — ${actualGameCount} games, ${actualVariants} variants, ${actualComponentGames} component games, ${actualSubPages} sub-pages`);
}
