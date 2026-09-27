#!/usr/bin/env node
/**
 * A table written in markdown must render as a table.
 *
 * When markdown-it rejects a table (a header with fewer cells than its
 * separator, a missing separator row) it does not fail: it renders the rows
 * as one run-on paragraph of pipe-separated text. Nine Pathfinder tables did
 * this, one of them 169 rows long, and it showed only because that paragraph
 * was too tall for a PDF page and lost 2,534px off it (#285).
 *
 * So: no rendered paragraph in dist/ may hold two or more pipes outside code.
 * Run after npm run build.
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { resolve, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = resolve(ROOT, 'dist');

function* pages(dir) {
  for (const name of readdirSync(dir)) {
    const full = resolve(dir, name);
    if (statSync(full).isDirectory()) yield* pages(full);
    else if (name === 'index.html') yield full;
  }
}

const failures = [];
for (const page of pages(DIST)) {
  const html = readFileSync(page, 'utf8').replace(/<pre[\s\S]*?<\/pre>|<code[\s\S]*?<\/code>/g, '');
  for (const [, body] of html.matchAll(/<p>([\s\S]*?)<\/p>/g)) {
    if ((body.match(/\|/g) || []).length >= 2) {
      const text = body.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
      failures.push(`${relative(DIST, page)}: "${text.slice(0, 70)}"`);
    }
  }
}

if (failures.length) {
  console.error(`${failures.length} table(s) rendered as text:\n`);
  for (const f of failures) console.error(`  ${f}`);
  console.error('\nGive each a header row with as many cells as its separator, e.g. "|  | A | B |" then "|---|---|---|".');
  process.exit(1);
}
console.log('Every markdown table renders as a table');
