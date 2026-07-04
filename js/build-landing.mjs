import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { resolve } from 'path';
import matter from 'gray-matter';

const ROOT = resolve(import.meta.dirname, '..');
const GAMES_DIR = resolve(ROOT, 'games');
const INDEX_PATH = resolve(ROOT, 'index.html');

function findLogo(slug) {
  const logosDir = resolve(GAMES_DIR, slug, 'logos');
  if (!existsSync(logosDir)) return null;
  const files = readdirSync(logosDir).filter(f => /\.(svg|png|jpg|jpeg|webp)$/i.test(f));
  if (files.length === 0) return null;
  const svg = files.find(f => f.endsWith('.svg'));
  return `games/${slug}/logos/${svg || files[0]}`;
}

function countVariants(slug) {
  const variantsDir = resolve(GAMES_DIR, slug, 'content', 'variants');
  if (!existsSync(variantsDir)) return 0;
  return readdirSync(variantsDir).filter(f => f.endsWith('.md')).length;
}

function badgeClass(status) {
  switch (status) {
    case 'live': return 'badge--live';
    case 'alpha': return 'badge--alpha';
    case 'dev': return 'badge--dev';
    case 'playtest': return 'badge--dev';
    default: return 'badge--live';
  }
}

function badgeLabel(status) {
  switch (status) {
    case 'live': return 'Live';
    case 'alpha': return 'Alpha';
    case 'dev': return 'In Dev';
    case 'playtest': return 'Playtest';
    default: return 'Live';
  }
}

function typeCategory(type) {
  if (type === 'game') return 'game';
  if (type === 'mod') return 'mod';
  if (type === 'platform') return 'platform';
  if (type === 'classic') return 'classic';
  return 'game';
}

const gameSlugs = readdirSync(GAMES_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name)
  .filter(slug => existsSync(resolve(GAMES_DIR, slug, 'content/rulebook.md')));

const games = [];
for (const slug of gameSlugs) {
  const src = readFileSync(resolve(GAMES_DIR, slug, 'content/rulebook.md'), 'utf8');
  const { data } = matter(src);
  games.push({ slug, ...data, variantCount: countVariants(slug) });
}

const sortOrder = ['game', 'mod', 'platform', 'classic'];
games.sort((a, b) => {
  const typeA = sortOrder.indexOf(typeCategory(a.type));
  const typeB = sortOrder.indexOf(typeCategory(b.type));
  if (typeA !== typeB) return typeA - typeB;
  return (a.title || a.slug).localeCompare(b.title || b.slug);
});

const publishedGames = games.filter(g => g.published !== false);
const totalVariants = publishedGames.reduce((sum, g) => sum + g.variantCount, 0);

let cards = '';
for (const game of games) {
  const logo = findLogo(game.slug);
  const type = typeCategory(game.type);
  const status = game.status || 'live';
  const badge = `<span class="badge ${badgeClass(status)}">${badgeLabel(status)}</span>`;
  const logoImg = logo ? `<img class="card-logo" src="${logo}" alt="">` : '';
  const desc = game.tagline || '';
  const title = game.title ? game.title.replace(/ — Official Rulebook$/, '').replace(/: Official Rulebook$/, '') : game.slug;
  const version = game.version ? `<span class="card-version">v${game.version}</span>` : '';
  const players = game.players ? `<span>${game.players} players</span>` : '';
  const duration = game.duration ? `<span>${game.duration}</span>` : '';
  const sep = (players && duration) ? '<span class="sep">/</span>' : '';

  cards += `    <a href="dist/${game.slug}/index.html" class="game-card" data-type="${type}">
      ${badge}
      <div class="card-logo-wrap">
        ${logoImg}
        <p class="card-desc">${desc}</p>
      </div>
      <div class="card-body">
        <div class="card-header"><span class="card-title">${title}</span>${version}</div>

        <div class="card-meta">${players}${sep}${duration}</div>
      </div>
    </a>\n\n`;
}

const html = readFileSync(INDEX_PATH, 'utf8');

const statsRegex = /<div class="hero-stats">[\s\S]*?<\/div>/;
const newStats = `<div class="hero-stats">
      <span class="hero-stat"><strong>${publishedGames.length}</strong> games</span>
      <span class="hero-stat"><strong>${totalVariants}</strong> variants</span>
    </div>`;

const gridRegex = /<div class="game-grid">\s*[\s\S]*?\s*<\/div>\s*\n\s*<footer/;
const newGrid = `<div class="game-grid">\n\n${cards}  </div>\n\n  <footer`;

let updated = html.replace(statsRegex, newStats);
updated = updated.replace(gridRegex, newGrid);

writeFileSync(INDEX_PATH, updated);
console.log(`Landing page updated: ${publishedGames.length} games, ${totalVariants} variants, ${games.length} cards total.`);
