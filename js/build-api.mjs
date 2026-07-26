import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, copyFileSync } from 'fs';
import { resolve } from 'path';
import matter from 'gray-matter';

const ROOT = resolve(import.meta.dirname, '..');
const GAMES_DIR = resolve(ROOT, 'games');
const DIST_DIR = resolve(ROOT, 'dist');
const API_DIR = resolve(DIST_DIR, 'api');

mkdirSync(API_DIR, { recursive: true });

const allSlugs = readdirSync(GAMES_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name)
  .filter(slug => existsSync(resolve(GAMES_DIR, slug, 'content/rulebook.md')));

const catalogue = [];
const index = { endpoints: [], generated: new Date().toISOString().split('T')[0] };

function stripFrontmatter(raw) {
  const { content } = matter(raw);
  return content.trim();
}

function writeJson(filepath, data) {
  mkdirSync(resolve(filepath, '..'), { recursive: true });
  writeFileSync(filepath, JSON.stringify(data, null, 2));
}

function writeMd(filepath, content) {
  mkdirSync(resolve(filepath, '..'), { recursive: true });
  writeFileSync(filepath, content);
}

function trackEndpoint(path, description, type) {
  index.endpoints.push({ path, description, type });
}

// --- Per-game processing ---
for (const slug of allSlugs) {
  const rulebookPath = resolve(GAMES_DIR, slug, 'content/rulebook.md');
  const raw = readFileSync(rulebookPath, 'utf8');
  const { data: meta, content } = matter(raw);

  if (meta.published === false) continue;

  const gameTitle = (meta.title || slug).replace(/\s*[—–-]\s*Official Rulebook$/i, '');
  const gameApiDir = resolve(API_DIR, 'rules', slug);
  mkdirSync(gameApiDir, { recursive: true });

  // --- Variants ---
  const variantsDir = resolve(GAMES_DIR, slug, 'content/variants');
  const variants = [];
  if (existsSync(variantsDir)) {
    const vfiles = readdirSync(variantsDir).filter(f => f.endsWith('.md'));
    for (const vf of vfiles) {
      const vraw = readFileSync(resolve(variantsDir, vf), 'utf8');
      const { data: vmeta } = matter(vraw);
      const vslug = vmeta.slug || vf.replace('.md', '');
      variants.push({
        slug: vslug,
        title: vmeta.title || vslug,
        players: vmeta.players || null,
        board: vmeta.board || null,
        win: vmeta.win || null,
        special: vmeta.special || null,
        order: vmeta.order || 99,
      });

      const variantApiDir = resolve(gameApiDir, 'variants');
      mkdirSync(variantApiDir, { recursive: true });
      writeMd(resolve(variantApiDir, `${vslug}.md`), stripFrontmatter(vraw));
    }
    variants.sort((a, b) => a.order - b.order);

    if (variants.length > 0) {
      trackEndpoint(`/api/rules/${slug}/variants/`, `${gameTitle} variant markdown files (${variants.length})`, 'directory');
    }
  }

  // --- Component hub games ---
  const hubGamesDir = resolve(GAMES_DIR, slug, 'content/games');
  const games = [];
  if (existsSync(hubGamesDir)) {
    const gameDirs = readdirSync(hubGamesDir, { withFileTypes: true })
      .filter(d => d.isDirectory()).map(d => d.name);
    for (const gd of gameDirs) {
      const gdPath = resolve(hubGamesDir, gd);
      const mdFiles = readdirSync(gdPath).filter(f => f.endsWith('.md'));
      const standardFile = mdFiles.find(f => f === 'standard.md') || mdFiles[0];
      if (!standardFile) continue;

      const graw = readFileSync(resolve(gdPath, standardFile), 'utf8');
      const { data: gmeta } = matter(graw);
      const gslug = gmeta.slug || gd;
      games.push({
        slug: gslug,
        title: gmeta.title || gd,
        players: gmeta.players || null,
      });

      const gamesApiDir = resolve(gameApiDir, 'games');
      mkdirSync(gamesApiDir, { recursive: true });
      writeMd(resolve(gamesApiDir, `${gslug}.md`), stripFrontmatter(graw));
    }

    if (games.length > 0) {
      trackEndpoint(`/api/rules/${slug}/games/`, `${gameTitle} component games (${games.length})`, 'directory');
    }
  }

  // --- Sub-pages (RPGs, deep content) ---
  const contentDir = resolve(GAMES_DIR, slug, 'content');
  const pages = [];
  if (existsSync(contentDir)) {
    const subdirs = readdirSync(contentDir, { withFileTypes: true })
      .filter(d => d.isDirectory() && d.name !== 'variants' && d.name !== 'games')
      .map(d => d.name);

    for (const section of subdirs) {
      const sectionDir = resolve(contentDir, section);
      const mdFiles = readdirSync(sectionDir).filter(f => f.endsWith('.md'));
      for (const pf of mdFiles) {
        const praw = readFileSync(resolve(sectionDir, pf), 'utf8');
        const { data: pmeta } = matter(praw);
        if (pmeta.published === false) continue;
        const pslug = pmeta.slug || pf.replace('.md', '');
        pages.push({ section, slug: pslug, title: pmeta.title || pslug });

        const pagesApiDir = resolve(gameApiDir, 'pages', section);
        mkdirSync(pagesApiDir, { recursive: true });
        writeMd(resolve(pagesApiDir, `${pslug}.md`), stripFrontmatter(praw));
      }
    }

    if (pages.length > 0) {
      trackEndpoint(`/api/rules/${slug}/pages/`, `${gameTitle} sub-pages (${pages.length})`, 'directory');
    }
  }

  // --- Data files (passthrough) ---
  const dataDir = resolve(GAMES_DIR, slug, 'data');
  const dataFiles = [];
  if (existsSync(dataDir)) {
    const jsonFiles = readdirSync(dataDir).filter(f => f.endsWith('.json') && f !== 'schema.json');
    for (const df of jsonFiles) {
      const dataApiDir = resolve(gameApiDir, 'data');
      mkdirSync(dataApiDir, { recursive: true });
      copyFileSync(resolve(dataDir, df), resolve(dataApiDir, df));
      dataFiles.push(df.replace('.json', ''));
    }

    if (dataFiles.length > 0) {
      trackEndpoint(`/api/rules/${slug}/data/`, `${gameTitle} data files (${dataFiles.length})`, 'directory');
    }
  }

  // --- Oracle files (per-game aggregate) ---
  // Sources: dedicated oracles/ dir + table-type categories in rpg-manifest
  const oraclesDir = resolve(GAMES_DIR, slug, 'oracles');
  const oracleTables = [];

  if (existsSync(oraclesDir)) {
    const oracleFiles = readdirSync(oraclesDir).filter(f => f.endsWith('.json') && f !== 'schema.json');
    for (const of_ of oracleFiles) {
      const oraw = JSON.parse(readFileSync(resolve(oraclesDir, of_), 'utf8'));
      const tables = oraw.tables || [];
      oracleTables.push(...tables);
    }
  }

  const manifestPath = resolve(GAMES_DIR, slug, 'rpg-manifest.json');
  if (existsSync(manifestPath)) {
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    const dataBasePath = resolve(ROOT, manifest.dataPath);
    for (const cat of manifest.categories) {
      if (cat.dataType !== 'table') continue;
      const filePath = resolve(dataBasePath, cat.file);
      if (!existsSync(filePath)) continue;
      const traw = JSON.parse(readFileSync(filePath, 'utf8'));
      const tables = traw.tables || [];
      oracleTables.push(...tables);
    }
  }

  let oracleCount = oracleTables.length;
  if (oracleTables.length > 0) {
    writeJson(resolve(gameApiDir, 'oracles.json'), {
      game: slug,
      label: gameTitle,
      tableCount: oracleTables.length,
      tables: oracleTables,
    });
    trackEndpoint(`/api/rules/${slug}/oracles.json`, `${gameTitle} oracle tables (${oracleCount})`, 'json');
  }

  // --- Hub rulebook markdown ---
  writeMd(resolve(gameApiDir, 'rulebook.md'), stripFrontmatter(raw));

  // --- Per-game meta.json ---
  const sections = [];
  for (const line of content.split('\n')) {
    const h2 = line.match(/^## (.+)$/);
    if (h2) sections.push(h2[1].trim());
  }

  const gameMeta = {
    slug,
    title: gameTitle,
    players: meta.players || null,
    duration: meta.duration || null,
    age: meta.age || null,
    tagline: meta.tagline || null,
    type: meta.type || null,
    status: meta.status || null,
    updated: meta.updated || null,
    version: meta.version || null,
    mechanics: meta.mechanics || [],
    complexity: meta.complexity || null,
    how_to_play: meta.how_to_play || null,
    related: meta.related || [],
    hub_type: meta.hub_type || null,
    variants: variants.map(v => ({ slug: v.slug, title: v.title, players: v.players, board: v.board, win: v.win, special: v.special })),
    games: games.map(g => ({ slug: g.slug, title: g.title, players: g.players })),
    pages: pages,
    data: dataFiles,
    oracleCount,
    sections,
    urls: {
      rulebook: `/api/rules/${slug}/rulebook.md`,
      meta: `/api/rules/${slug}/meta.json`,
      ...(variants.length > 0 ? { variants: `/api/rules/${slug}/variants/` } : {}),
      ...(games.length > 0 ? { games: `/api/rules/${slug}/games/` } : {}),
      ...(pages.length > 0 ? { pages: `/api/rules/${slug}/pages/` } : {}),
      ...(dataFiles.length > 0 ? { data: `/api/rules/${slug}/data/` } : {}),
      ...(oracleCount > 0 ? { oracles: `/api/rules/${slug}/oracles.json` } : {}),
    },
  };

  writeJson(resolve(gameApiDir, 'meta.json'), gameMeta);
  trackEndpoint(`/api/rules/${slug}/meta.json`, `${gameTitle} metadata`, 'json');
  trackEndpoint(`/api/rules/${slug}/rulebook.md`, `${gameTitle} hub rulebook`, 'markdown');

  catalogue.push(gameMeta);
}

// --- Aggregate: catalogue.json ---
catalogue.sort((a, b) => a.title.localeCompare(b.title));
const catalogueStats = {
  totalGames: catalogue.length,
  totalVariants: catalogue.reduce((sum, g) => sum + g.variants.length, 0),
  totalComponentGames: catalogue.reduce((sum, g) => sum + g.games.length, 0),
  totalPages: catalogue.reduce((sum, g) => sum + g.pages.length, 0),
  totalOracleTables: catalogue.reduce((sum, g) => sum + g.oracleCount, 0),
  totalDataFiles: catalogue.reduce((sum, g) => sum + g.data.length, 0),
  byType: {},
  byStatus: {},
};
for (const g of catalogue) {
  const t = g.type || 'unknown';
  const s = g.status || 'unknown';
  catalogueStats.byType[t] = (catalogueStats.byType[t] || 0) + 1;
  catalogueStats.byStatus[s] = (catalogueStats.byStatus[s] || 0) + 1;
}

writeJson(resolve(API_DIR, 'catalogue.json'), {
  generated: new Date().toISOString().split('T')[0],
  stats: catalogueStats,
  games: catalogue,
});
trackEndpoint('/api/catalogue.json', `Game catalogue (${catalogue.length} games)`, 'json');

// --- Aggregate: oracles.json ---
// Sources: dedicated oracles/ dirs + table-type categories in rpg-manifests
// Categories format: { categoryName: [tableId, ...] } — derived from filenames/manifest IDs
const allOracles = {};
for (const slug of allSlugs) {
  const rulebookRaw = readFileSync(resolve(GAMES_DIR, slug, 'content/rulebook.md'), 'utf8');
  const { data: meta } = matter(rulebookRaw);
  if (meta.published === false) continue;
  const gameTitle = (meta.title || slug).replace(/\s*[—–-]\s*Official Rulebook$/i, '');

  const categories = {};
  const tables = [];

  const oraclesDir = resolve(GAMES_DIR, slug, 'oracles');
  if (existsSync(oraclesDir)) {
    const oracleFiles = readdirSync(oraclesDir).filter(f => f.endsWith('.json') && f !== 'schema.json');
    for (const of_ of oracleFiles) {
      const oraw = JSON.parse(readFileSync(resolve(oraclesDir, of_), 'utf8'));
      const catName = of_.replace('.json', '');
      const fileTables = oraw.tables || [];
      tables.push(...fileTables);
      if (fileTables.length > 0) {
        categories[catName] = fileTables.map(t => t.id || t.name);
      }
    }
  }

  const mPath = resolve(GAMES_DIR, slug, 'rpg-manifest.json');
  if (existsSync(mPath)) {
    const manifest = JSON.parse(readFileSync(mPath, 'utf8'));
    const dataBasePath = resolve(ROOT, manifest.dataPath);
    for (const cat of manifest.categories) {
      if (cat.dataType !== 'table') continue;
      const filePath = resolve(dataBasePath, cat.file);
      if (!existsSync(filePath)) continue;
      const traw = JSON.parse(readFileSync(filePath, 'utf8'));
      const fileTables = traw.tables || [];
      tables.push(...fileTables);
      if (fileTables.length > 0) {
        categories[cat.id] = fileTables.map(t => t.id || t.name);
      }
    }
  }

  if (tables.length > 0) {
    allOracles[slug] = { label: gameTitle, categories, tables };
  }
}

writeJson(resolve(API_DIR, 'oracles.json'), allOracles);
trackEndpoint('/api/oracles.json', `All oracle tables (${Object.keys(allOracles).length} games)`, 'json');

// --- Aggregate: entities.json ---
// Resolves arrayKey paths like "tables[0].entries", "monsters", or falls back to top-level array
function resolveArrayKey(data, arrayKey) {
  if (!arrayKey) return Array.isArray(data) ? data : [];
  let result = data;
  const parts = arrayKey.match(/[^.\[\]]+|\[\d+\]/g) || [];
  for (const part of parts) {
    if (result == null) return [];
    const indexMatch = part.match(/^\[(\d+)\]$/);
    if (indexMatch) {
      result = result[parseInt(indexMatch[1])];
    } else {
      result = result[part];
    }
  }
  return Array.isArray(result) ? result : [];
}

const allEntities = {};
for (const slug of allSlugs) {
  const manifestPath = resolve(GAMES_DIR, slug, 'rpg-manifest.json');
  if (!existsSync(manifestPath)) continue;

  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  const dataBasePath = resolve(ROOT, manifest.dataPath);

  const categories = {};
  for (const cat of manifest.categories) {
    if (cat.dataType === 'table' || cat.dataType === 'oracle') continue;
    const filePath = resolve(dataBasePath, cat.file);
    if (!existsSync(filePath)) continue;

    const raw = JSON.parse(readFileSync(filePath, 'utf8'));
    const items = resolveArrayKey(raw, cat.arrayKey);

    categories[cat.id] = {
      label: cat.label,
      color: cat.color || null,
      displayField: cat.displayField || 'name',
      searchFields: cat.searchFields || ['name'],
      tag: cat.tag || null,
      cardFields: cat.cardFields || null,
      linkPath: cat.linkPath || null,
      count: items.length,
      items,
    };
  }

  if (Object.keys(categories).length > 0) {
    allEntities[slug] = { label: manifest.label, categories };
  }
}

writeJson(resolve(API_DIR, 'entities.json'), allEntities);
trackEndpoint('/api/entities.json', `All RPG entities (${Object.keys(allEntities).length} games)`, 'json');

// --- Aggregate: search-index.json (delegate to existing build-index logic) ---
// The existing build-index.mjs writes dist/rules-index.json.
// We symlink/copy it into /api/ for unified access.
const existingIndex = resolve(DIST_DIR, 'rules-index.json');
if (existsSync(existingIndex)) {
  copyFileSync(existingIndex, resolve(API_DIR, 'search-index.json'));
  trackEndpoint('/api/search-index.json', 'Full-text search index', 'json');
}

// --- Compute total entities for stats ---
let totalEntities = 0;
for (const game of Object.values(allEntities)) {
  for (const cat of Object.values(game.categories)) {
    totalEntities += cat.count || 0;
  }
}
catalogueStats.totalEntities = totalEntities;

// --- Discovery: index.json ---
index.endpoints.sort((a, b) => a.path.localeCompare(b.path));
index.stats = catalogueStats;
index.deprecations = [
  { old: 'workers/mcp/rules-index.json', replacement: '/api/search-index.json', consumer: 'rules-tools.js' },
  { old: 'workers/mcp/games-meta.json', replacement: '/api/catalogue.json', consumer: 'rules-tools.js' },
  { old: 'workers/mcp/oracle-data.json', replacement: '/api/oracles.json', consumer: 'oracle-tools.js' },
  { old: 'workers/mcp/rpg-entities.json', replacement: '/api/entities.json', consumer: 'oracle-tools.js' },
  { old: 'workers/mcp/dnd-monsters.json', replacement: '/api/rules/dnd-5e/data/monsters.json', consumer: 'oracle-tools.js' },
  { old: 'workers/mcp/dnd-loot.json', replacement: '/api/rules/dnd-5e/data/loot.json', consumer: 'oracle-tools.js' },
  { old: 'workers/mcp/pf-monsters.json', replacement: '/api/rules/pathfinder-1e/data/monsters.json', consumer: 'oracle-tools.js' },
  { old: 'workers/mcp/pf-loot.json', replacement: '/api/rules/pathfinder-1e/data/loot.json', consumer: 'oracle-tools.js' },
  { old: 'dist/rules-index.json', replacement: '/api/search-index.json', consumer: 'rules-referee widget' },
];

writeJson(resolve(API_DIR, 'index.json'), index);

// --- Sitemap (covers rules pages + API endpoints) ---
const sitemapBase = 'https://rules.moddable.games';
const sitemapUrls = [`${sitemapBase}/`, `${sitemapBase}/api/index.json`];
for (const g of catalogue) {
  sitemapUrls.push(`${sitemapBase}/dist/${g.slug}/`);
  for (const v of g.variants) {
    sitemapUrls.push(`${sitemapBase}/dist/${g.slug}/variants/${v.slug}/`);
  }
  for (const game of g.games) {
    sitemapUrls.push(`${sitemapBase}/dist/${g.slug}/games/${game.slug}/`);
  }
  for (const p of g.pages) {
    sitemapUrls.push(`${sitemapBase}/dist/${g.slug}/${p.section}/${p.slug}/`);
  }
}

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(url => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`;
writeFileSync(resolve(ROOT, 'sitemap.xml'), sitemapXml);

// --- Comprehensive stats.json (single source of truth for all counts) ---
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

const diagramsManifestPath = resolve(ROOT, 'diagrams-manifest.json');
let diagramStats = { total: 0, rendered: 0, missing: 0, families: 0 };
if (existsSync(diagramsManifestPath)) {
  const dm = JSON.parse(readFileSync(diagramsManifestPath, 'utf8'));
  const rendered = dm.filter(e => e.svg);
  diagramStats = {
    total: dm.length,
    rendered: rendered.length,
    missing: dm.length - rendered.length,
    families: new Set(dm.map(e => e.family)).size,
  };
}

const totalPdfs = countFiles(resolve(ROOT, 'games'), '.pdf');
const totalHtmlPages = countFiles(DIST_DIR, '.html');

const stats = {
  generated: new Date().toISOString().split('T')[0],
  games: {
    total: catalogue.length,
    byType: catalogueStats.byType,
    byStatus: catalogueStats.byStatus,
  },
  content: {
    variants: catalogueStats.totalVariants,
    componentGames: catalogueStats.totalComponentGames,
    subPages: catalogueStats.totalPages,
    totalRulePages: catalogueStats.totalVariants + catalogueStats.totalComponentGames + catalogueStats.totalPages,
  },
  data: {
    oracleTables: catalogueStats.totalOracleTables,
    entities: totalEntities,
    dataFiles: catalogueStats.totalDataFiles,
  },
  diagrams: diagramStats,
  pdfs: {
    total: totalPdfs,
  },
  site: {
    htmlPages: totalHtmlPages,
    apiEndpoints: index.endpoints.length,
    sitemapUrls: sitemapUrls.length,
  },
};

writeJson(resolve(API_DIR, 'stats.json'), stats);
trackEndpoint('/api/stats.json', 'Comprehensive project statistics (single source of truth)', 'json');

// --- Summary ---
const endpointsByType = {};
for (const ep of index.endpoints) {
  endpointsByType[ep.type] = (endpointsByType[ep.type] || 0) + 1;
}

console.log(`Built dist/api/ — ${index.endpoints.length} endpoints`);
console.log(`  ${catalogueStats.totalGames} games, ${catalogueStats.totalVariants} variants, ${catalogueStats.totalComponentGames} component games`);
console.log(`  ${catalogueStats.totalPages} sub-pages, ${catalogueStats.totalOracleTables} oracle tables, ${catalogueStats.totalDataFiles} data files`);
console.log(`  Types: ${Object.entries(endpointsByType).map(([k,v]) => `${k}(${v})`).join(', ')}`);
console.log(`  Discovery: /api/index.json (${index.deprecations.length} tracked deprecations)`);
