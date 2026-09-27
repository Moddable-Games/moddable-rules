// Component hub games: games/{hub}/content/games/{dir}/*.md
//
// A game directory holds its game in standard.md, and may hold further games
// played with the same equipment beside it: Cribbage for three and for four
// sit in cribbage/ next to the two-player game. Each file is a game of its own
// with its own page, PDF, API file and board.
//
// Every consumer (pages, gallery manifest, API, search index, PDFs) reads the
// list from here, so none of them can quietly go back to reading standard.md
// alone and leave the other games without a page.

import { readFileSync, readdirSync, existsSync } from 'fs';
import { resolve, basename } from 'path';
import matter from 'gray-matter';

/**
 * @param {string} gamesDir  absolute path to a hub's content/games directory
 * @returns {Array<{dir: string, file: string, key: string, slug: string,
 *   path: string, raw: string, meta: object, content: string}>}
 *
 * `key` is how the game's board diagram is named ({key}-board.svg): the
 *   directory for standard.md, `{dir}-{file}` for any other file. The engine
 *   files a second game in one directory the same way.
 * `slug` is the page's URL segment: the frontmatter slug, else the key.
 */
export function listComponentGames(gamesDir) {
  if (!existsSync(gamesDir)) return [];
  const games = [];
  const dirs = readdirSync(gamesDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .sort();

  for (const dir of dirs) {
    const files = readdirSync(resolve(gamesDir, dir))
      .filter(f => f.endsWith('.md'))
      .sort((a, b) => (a === 'standard.md' ? -1 : b === 'standard.md' ? 1 : a.localeCompare(b)));
    // A directory with no standard.md has no game to anchor the others.
    if (!files.includes('standard.md')) continue;

    for (const file of files) {
      const path = resolve(gamesDir, dir, file);
      const raw = readFileSync(path, 'utf8');
      const { data: meta, content } = matter(raw);
      const key = file === 'standard.md' ? dir : `${dir}-${basename(file, '.md')}`;
      games.push({ dir, file, key, slug: meta.slug || key, path, raw, meta, content });
    }
  }
  return games;
}
