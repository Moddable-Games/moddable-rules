#!/usr/bin/env node
/**
 * A board that has terrain must draw it.
 *
 * Congo's rules named a river on rank 4 and a 3x3 castle at each end. Its
 * diagram was a plain 7x7 chessboard: 49 squares, ordinary chess colours, no
 * river and no castles, and no `render.zones` in its frontmatter at all. The
 * prose and the picture disagreed for two months and nothing looked.
 *
 * The pattern behind it: the same batch handled boards whose cells are ABSENT
 * (Balbo's diamond, Rollerball's ring) correctly, because a missing cell is
 * impossible to ignore - the board comes out the wrong shape. Cells that are
 * PRESENT BUT DIFFERENT are silent. The board looks fine and is wrong.
 *
 * So: if a variant's own prose gives terrain a heading or a bold label, its
 * render must declare zones - or it must say in `approximations` that the
 * terrain is not modelled. Naming a river and drawing no river, with no word
 * about it anywhere, is what this refuses.
 */

import { readFileSync, readdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const GAMES = resolve(ROOT, 'games');

// Words that name a region of the board with rules attached to it. Matched only
// where the prose gives one weight - a heading, or bold - so a passing mention
// ("across the river") does not demand a zone.
// "castle" is deliberately absent: in chess it is a verb, and every variant
// that mentions castling would be flagged for a board region it does not have.
// Congo's castles are caught by its river instead, and declared besides.
const TERRAIN = 'rivers?|palaces?|dens?|traps?|lakes?|moats?|fortress|sanctuary|citadel|swamp|marsh';
const TERM = new RegExp(`\\b(${TERRAIN})\\b`, 'i');

// Where the prose gives a word weight: a heading, or a bold run. Both are read
// as whole spans and then tested, rather than matched with one expression
// across the document - a pattern like `\\*\\*[^*]*river[^*]*\\*\\*` will happily
// treat the CLOSING delimiter of one bold run as the opening of another and
// find a "river" three sentences away. That is how Dobutsu, whose board section
// says in as many words "No river, no palace", was flagged for having one.
//
// Table rows are skipped: a row reading `| River General | 2 |` is a piece in a
// movement table, not a region of the board.
function terrainNamed(content) {
  for (const line of content.split('\n')) {
    if (line.trimStart().startsWith('|')) continue;
    const heading = line.match(/^#{2,6}\s+(.*)$/);
    if (heading) {
      const m = heading[1].match(TERM);
      if (m) return m[1].toLowerCase();
    }
    for (const bold of line.matchAll(/\*\*([^*]+)\*\*/g)) {
      const m = bold[1].match(TERM);
      if (m) return m[1].toLowerCase();
    }
  }
  return null;
}

// Family defaults, which every variant inherits unless it overrides them.
const familyRender = {};
const familyTopo = {};
for (const family of readdirSync(GAMES)) {
  const rb = resolve(GAMES, family, 'content', 'rulebook.md');
  if (!existsSync(rb)) continue;
  const engine = matter(readFileSync(rb, 'utf8')).data.engine || {};
  familyRender[family] = engine.render || {};
  familyTopo[family] = engine.topology || {};
}

const errors = [];

for (const family of readdirSync(GAMES)) {
  const dir = resolve(GAMES, family, 'content', 'variants');
  if (!existsSync(dir)) continue;

  for (const file of readdirSync(dir).filter(f => f.endsWith('.md'))) {
    const slug = file.replace(/\.md$/, '');
    const { data, content } = matter(readFileSync(resolve(dir, file), 'utf8'));

    const term = terrainNamed(content);
    if (!term) continue;

    // Resolved through the family, not read off the variant alone. A Xiangqi
    // variant draws its river and palace because the family says so; reading
    // only the variant would flag every one of them.
    const render = { ...(familyRender[family] || {}), ...(data.engine?.render || {}) };
    const topo = { ...(familyTopo[family] || {}), ...(data.engine?.topology || {}) };
    // Drawn as zones, or built into the board type itself (an intersection
    // board declares its river and palace as flags, not as cells).
    // Only grid boards. On a graph, track or hex board the terrain is the
    // structure - Asalto's fortress is nine nodes of its grid-cross graph, not
    // a tinted region of a rectangle - and there is nothing for zones to say.
    if ((topo.type || 'grid') !== 'grid') continue;

    const drawn = Boolean(render.zones) || render.river === true || render.palace === true ||
      render.boardStyle === 'xiangqi' || topo.layout === 'cross';
    if (drawn) continue;

    const declared = (data.approximations || []).some(a =>
      new RegExp(`\\b${term.replace(/s$/, '')}`, 'i').test(`${a.feature} ${a.source} ${a.engine}`));
    if (declared) continue;

    errors.push(`${family}/${slug}: prose gives "${term}" a heading or bold label, but the render declares no zones and no approximation says it is unmodelled`);
  }
}

if (errors.length) {
  console.error(`Terrain: ${errors.length} board(s) name terrain they do not draw\n`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
console.log('✓ Every board that names terrain either draws it or says it does not');
