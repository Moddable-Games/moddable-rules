#!/usr/bin/env node
/**
 * Generates pdf-manifest.json from local PDF files.
 * Run after generating PDFs: node scripts/gen-pdf-manifest.mjs
 * The manifest is committed to the repo so CI can report accurate stats
 * even though the PDFs themselves are gitignored.
 */
import { readdirSync, readFileSync, existsSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { execSync } from 'child_process';

const ROOT = resolve(import.meta.dirname, '..');
const GAMES_DIR = resolve(ROOT, 'games');
const OUT = resolve(ROOT, 'pdf-manifest.json');

const pdfs = [];
const walk = (dir) => {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = resolve(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.pdf')) pdfs.push(full);
  }
};
walk(GAMES_DIR);

// A rulebook bump writes new `-vX.Y.Z` files and leaves the old ones on disk,
// and this reads whatever is on disk: the manifest counted 686 PDFs on
// 2026-09-27 when there were 667, and stats.json, checked only against this
// file, agreed. A versioned file counts only at its family's current version.
const currentVersion = {};
function isSuperseded(pdf) {
  const m = pdf.match(/-v(\d+\.\d+\.\d+)\.pdf$/);
  if (!m) return false;
  const family = pdf.replace(GAMES_DIR + '/', '').split('/')[0];
  if (!(family in currentVersion)) {
    const rb = resolve(GAMES_DIR, family, 'content/rulebook.md');
    const vm = existsSync(rb) && readFileSync(rb, 'utf8').match(/^version:\s*["']?([^"'\n]+)/m);
    currentVersion[family] = vm ? vm[1].trim() : null;
  }
  return currentVersion[family] !== null && m[1] !== currentVersion[family];
}
const superseded = pdfs.filter(isSuperseded);
if (superseded.length) {
  console.log(`Skipping ${superseded.length} superseded versioned PDF(s), e.g. ${superseded[0].replace(ROOT + '/', '')}`);
}
pdfs.splice(0, pdfs.length, ...pdfs.filter(p => !superseded.includes(p)));

let totalPages = 0;
const entries = [];

for (const pdf of pdfs) {
  const rel = pdf.replace(GAMES_DIR + '/', '');
  const family = rel.split('/')[0];

  let pages = 0;
  try {
    const info = execSync(`pdfinfo "${pdf}" 2>/dev/null`, { encoding: 'utf8' });
    const match = info.match(/Pages:\s+(\d+)/);
    if (match) pages = parseInt(match[1], 10);
  } catch { /* pdfinfo unavailable */ }

  let type = 'other';
  if (rel.includes('/variants/')) type = 'variant';
  else if (rel.includes('/games/')) type = 'componentGame';
  else if (rel.includes('-library')) type = 'library';
  else if (rel.includes('rulebook')) type = 'rulebook';
  else if (rel.includes('-complete')) type = 'complete';
  else type = 'subPage';

  totalPages += pages;
  entries.push({ path: rel, family, type, pages });
}

const byType = {};
for (const e of entries) {
  byType[e.type] = (byType[e.type] || 0) + 1;
}

const families = new Set(entries.map(e => e.family));

const manifest = {
  generated: new Date().toISOString().split('T')[0],
  total: entries.length,
  totalPages,
  families: families.size,
  byType,
  files: entries,
};

writeFileSync(OUT, JSON.stringify(manifest, null, 2) + '\n');
console.log(`PDF manifest: ${entries.length} files, ${totalPages} pages, ${families.size} families → pdf-manifest.json`);
