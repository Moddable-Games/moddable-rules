#!/usr/bin/env node
/**
 * A variant with a board diagram must show it.
 *
 * Board SVGs arrive from moddable-engine's sync, and nothing adds the
 * {{svg:...}} line that puts one on the page: that is written by hand. In
 * September 2026, 31 variants had a synced `{variant}-board.svg` that neither
 * their web page nor their PDF displayed. Most were showing another variant's
 * board instead: Italian Draughts, whose board is turned the other way, was
 * illustrated with the English one, and Tibetan Go with a 19x19 board and a
 * caption apologising for it.
 *
 * So for every `{key}-board.svg`, the content file it belongs to must include
 * it, or say in frontmatter why not: `board_hidden: "<reason>"`.
 *
 *   variants:        games/{family}/content/variants/{key}.md
 *   component games: games/{hub}/content/games/{dir}/{file}.md, keyed as in
 *                    js/component-games.mjs
 *
 * A board with no content file (a standalone game's) is not this check's
 * business.
 */

import { readFileSync, readdirSync, existsSync } from 'fs';
import { resolve, dirname, relative } from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { listComponentGames } from '../js/component-games.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const GAMES = resolve(ROOT, 'games');

const failures = [];
let checked = 0;

for (const family of readdirSync(GAMES).filter(d => !d.startsWith('.'))) {
  const svgDir = resolve(GAMES, family, 'diagrams/svg');
  if (!existsSync(svgDir)) continue;

  // Every content file a board could belong to, by the key its board uses.
  const owners = new Map();
  const variantsDir = resolve(GAMES, family, 'content/variants');
  if (existsSync(variantsDir)) {
    for (const f of readdirSync(variantsDir).filter(f => f.endsWith('.md'))) {
      owners.set(f.replace(/\.md$/, ''), resolve(variantsDir, f));
    }
  }
  for (const g of listComponentGames(resolve(GAMES, family, 'content/games'))) {
    owners.set(g.key, g.path);
  }

  for (const svg of readdirSync(svgDir).filter(f => f.endsWith('-board.svg'))) {
    const key = svg.replace(/-board\.svg$/, '');
    const path = owners.get(key);
    if (!path) continue;
    checked++;

    const { data, content } = matter(readFileSync(path, 'utf8'));
    if (content.includes(`{{svg:${svg} `)) continue;
    if (typeof data.board_hidden === 'string' && data.board_hidden.trim()) continue;
    failures.push(`${relative(ROOT, path)}: has ${svg} and does not show it`);
  }
}

if (failures.length) {
  console.error(`${failures.length} board diagram(s) not shown:\n`);
  for (const f of failures) console.error(`  ${f}`);
  console.error(`\nAdd {{svg:<key>-board.svg "<caption>"}} where the setup is described,`);
  console.error(`or give the reason in frontmatter: board_hidden: "<why>".`);
  process.exit(1);
}

console.log(`Board diagrams shown: ${checked} of ${checked}`);
