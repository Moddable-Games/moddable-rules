#!/usr/bin/env node
/**
 * A variant that cannot be played, or that plays differently from its own
 * rules, must say so somewhere a reader will find it.
 *
 * Three shapes for this existed before today and nothing read any of them: an
 * `unsupported:` map in each family rulebook, a top-level `approximations:`
 * list on one variant, and an `approximations:` list nested inside `engine:` on
 * another. Congo documented a river, two castles, a drowning rule, a pawn
 * retreat and a promotion in prose, declared two of those gaps, and played
 * without any of them. Rollerball declared nothing at all and could not move a
 * pawn. Blind Chess described a game on a board rotated ninety degrees from the
 * one it drew.
 *
 * So this fixes the shapes and checks them:
 *
 *   - a family rulebook's `unsupported:` map is the register of variants that
 *     cannot be played. Every slug in it must exist and be `playable: false`,
 *     and every `playable: false` variant must appear in its family's map.
 *   - a variant's top-level `approximations:` list is for a variant that IS
 *     played, but differently. Each entry needs `feature`, `source` and
 *     `engine`; `blocker` is optional. It may not sit inside `engine:`, where
 *     it would be handed to the plugin as configuration.
 */

import { readFileSync, readdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const GAMES = resolve(ROOT, 'games');
const errors = [];

// A family's playable things live in one of two shapes, and for two years this
// script only knew the first.
//
//   content/variants/<slug>.md            board families
//   content/games/<slug>/<variant>.md     component families - the six that are
//                                         a deck, a set of dice, dominoes or
//                                         mahjong tiles rather than a board
//
// The old `if (!existsSync(variantsDir)) continue` meant all six component
// families were skipped whole, so forty games could neither be reported as
// unplayable nor be required to say they were playable. They were the only
// games in the corpus outside this check, and they were outside it silently.
// engine#176.
//
// The frontmatter `slug:` is the identity in both shapes, not the filename:
// cribbage is one directory holding three games that call themselves
// `cribbage`, `three-player-cribbage` and `four-player-cribbage`, and those are
// the names the site and the unsupported map use.
function collectVariants(family) {
  const found = new Map();
  let any = false;

  const boardDir = resolve(GAMES, family, 'content', 'variants');
  if (existsSync(boardDir)) {
    any = true;
    for (const file of readdirSync(boardDir).filter(f => f.endsWith('.md'))) {
      const data = matter(readFileSync(resolve(boardDir, file), 'utf8')).data;
      found.set(data.slug || file.replace(/\.md$/, ''), data);
    }
  }

  const gamesDir = resolve(GAMES, family, 'content', 'games');
  if (existsSync(gamesDir)) {
    any = true;
    for (const entry of readdirSync(gamesDir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const sub = resolve(gamesDir, entry.name);
      for (const file of readdirSync(sub).filter(f => f.endsWith('.md'))) {
        const data = matter(readFileSync(resolve(sub, file), 'utf8')).data;
        found.set(data.slug || `${entry.name}/${file.replace(/\.md$/, '')}`, data);
      }
    }
  }

  return any ? found : null;
}

const families = readdirSync(GAMES).filter(f =>
  existsSync(resolve(GAMES, f, 'content', 'rulebook.md')));

for (const family of families) {
  const rulebook = matter(readFileSync(resolve(GAMES, family, 'content', 'rulebook.md'), 'utf8')).data;
  const unsupported = rulebook.unsupported || {};

  const variants = collectVariants(family);
  if (variants === null) continue;

  for (const [slug, reason] of Object.entries(unsupported)) {
    // `_family` and friends are notes about the family itself, not a variant.
    if (slug.startsWith('_')) continue;
    if (!variants.has(slug)) {
      errors.push(`${family}: rulebook lists "${slug}" as unsupported, but no such variant exists`);
      continue;
    }
    if (variants.get(slug).playable === true) {
      errors.push(`${family}/${slug}: listed as unsupported but declares playable: true`);
    }
    if (typeof reason !== 'string' || reason.trim().length < 20) {
      errors.push(`${family}/${slug}: unsupported entry needs a reason saying what is missing`);
    }
  }

  for (const [slug, meta] of variants) {
    if (meta.playable !== true && !(slug in unsupported)) {
      errors.push(`${family}/${slug}: not playable and not in the family's unsupported map - say why`);
    }
    const approx = meta.approximations;
    if (approx === undefined) continue;
    if (meta.playable !== true) {
      errors.push(`${family}/${slug}: has approximations but is not playable - an unplayable variant belongs in the family's unsupported map`);
    }
    if (!Array.isArray(approx)) {
      errors.push(`${family}/${slug}: approximations must be a list`);
      continue;
    }
    approx.forEach((entry, i) => {
      const minimum = { feature: 3, source: 20, engine: 10 };
      for (const key of ['feature', 'source', 'engine']) {
        if (!entry[key] || String(entry[key]).trim().length < minimum[key]) {
          errors.push(`${family}/${slug}: approximations[${i}] needs a "${key}" that says something`);
        }
      }
    });
    if (meta.engine && meta.engine.approximations) {
      errors.push(`${family}/${slug}: approximations must be top-level, not inside engine: (the plugin receives everything under engine: as configuration)`);
    }
  }

  // `disputed:` is for a rule the SOURCES disagree about, as opposed to
  // `approximations:`, which is for a rule the sources agree about and the
  // engine plays differently. Maka-Dai-Dai's free boar is BrlR in two Edo-era
  // manuscripts and fQ in a third; Tenjiku's fire demon burns differently
  // depending on whose rules you read.
  //
  // These rulebooks are meant to be the authority someone else can rely on, so
  // recording only the reading we play makes the next person repeat the
  // research. Every reading is written down with the source that gives it, the
  // engine takes one, and the reason is stated.
  //
  // The check that matters is the last one: what the engine plays must be one
  // of the readings recorded. That is what makes it impossible to quietly play
  // a rule no source describes - which is how Chu Shogi ended up with six
  // pieces moving as the wrong piece.
  for (const [slug, meta] of variants) {
    const disputed = meta.disputed;
    if (disputed === undefined) continue;
    if (!Array.isArray(disputed)) {
      errors.push(`${family}/${slug}: disputed must be a list`);
      continue;
    }
    if (meta.engine && meta.engine.disputed) {
      errors.push(`${family}/${slug}: disputed must be top-level, not inside engine: (the plugin receives everything under engine: as configuration)`);
    }
    disputed.forEach((entry, i) => {
      const where = `${family}/${slug}: disputed[${i}]`;
      for (const [key, min] of [['feature', 3], ['engine', 2], ['because', 20]]) {
        if (!entry[key] || String(entry[key]).trim().length < min) {
          errors.push(`${where} needs a "${key}" that says something`);
        }
      }
      const readings = entry.readings;
      if (!Array.isArray(readings) || readings.length < 2) {
        errors.push(`${where} needs at least two "readings" - one reading is not a dispute`);
        return;
      }
      readings.forEach((r, j) => {
        if (!r.source || String(r.source).trim().length < 10) {
          errors.push(`${where}.readings[${j}] needs a "source" naming who says it`);
        }
        if (!r.says || String(r.says).trim().length < 2) {
          errors.push(`${where}.readings[${j}] needs a "says" - what that source states`);
        }
      });
      // The engine's choice must be one of the readings, or explicitly neither
      // with the reason carrying the weight.
      const said = readings.map(r => String(r.says).trim());
      const chosen = String(entry.engine).trim();
      if (chosen !== 'neither' && !said.includes(chosen)) {
        errors.push(
          `${where}: engine plays "${chosen}", which is not among the readings recorded ` +
          `(${said.map(x => `"${x}"`).join(', ')}). Record it as a reading, pick one of them, ` +
          `or say "neither" and explain in "because".`
        );
      }
    });
  }
}

// Seven variants are unplayable with no reason recorded, and writing a reason
// means finding out why rather than guessing. They are a shrink-only ratchet:
// the backlog stays visible, cannot grow, and every one that gets a reason
// lowers the number for good. Anything that is not that class fails outright.
const BACKLOG = new Set([
  'chess/crazy-38s',
  'chess/flip-chess',
  'econopoly/standard',
  'landlords-game/1906-commercial',
  'landlords-game/monarch-of-the-world',
  'landlords-game/prosperity',
  'landlords-game/single-tax',
]);
const UNDECLARED = /^(\S+): not playable and not in the family's unsupported map/;

const known = [];
const fresh = [];
for (const e of errors) {
  const m = e.match(UNDECLARED);
  if (m && BACKLOG.has(m[1])) known.push(m[1]);
  else fresh.push(e);
}

if (fresh.length) {
  console.error(`Gap declarations: ${fresh.length} problem(s)\n`);
  for (const e of fresh) console.error(`  ${e}`);
  if (known.length) console.error(`\n(${known.length} known undeclared variants ignored - see BACKLOG)`);
  process.exit(1);
}

const gone = [...BACKLOG].filter(k => !known.includes(k));
if (gone.length) {
  console.error(`These variants now declare a reason. Remove them from BACKLOG in ${'scripts/check-gap-declarations.mjs'}:\n`);
  for (const k of gone) console.error(`  ${k}`);
  process.exit(1);
}

console.log(`✓ Gap declarations are complete and well-formed (${known.length} undeclared variants held in the backlog)`);
