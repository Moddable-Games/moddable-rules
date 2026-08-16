import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { resolve } from 'path';
import matter from 'gray-matter';

const ROOT = resolve(import.meta.dirname, '..');
const GAMES_DIR = resolve(ROOT, 'games');
const DIST_DIR = resolve(ROOT, 'dist');

const allSlugs = readdirSync(GAMES_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name)
  .filter(slug => existsSync(resolve(GAMES_DIR, slug, 'content/rulebook.md')));

const SECTION_PATTERNS = [
  { type: 'setup', patterns: /^(setup|starting position|starting setup|initial setup|deal|starting moves)$/i },
  { type: 'board', patterns: /^(the board|board|board layout|playing field|components|equipment)$/i },
  { type: 'pieces', patterns: /^(pieces|piece movement|pawns|the pieces|piece types)$/i },
  { type: 'movement', patterns: /^(movement|moves|how to move|moving|turn structure|turns|turn order)$/i },
  { type: 'capture', patterns: /^(capture|capturing|captures|taking|drops)$/i },
  { type: 'winning', patterns: /^(winning|win condition|win conditions|victory|end of game|scoring|stalemate|draws|checkmate)$/i },
  { type: 'special', patterns: /^(special rules|special|promotion|king promotion|castling|en passant|variants|optional rules)$/i },
  { type: 'combat', patterns: /^(combat|attack|damage|hit points|armor|weapons)$/i },
  { type: 'strategy', patterns: /^(strategy|strategy notes|tactics|tips)$/i },
  { type: 'overview', patterns: /^(overview|introduction|about|history|rules|summary)$/i },
  { type: 'attribution', patterns: /^(attribution|credits|references|sources|bibliography)$/i },
];

function classifySection(heading) {
  for (const { type, patterns } of SECTION_PATTERNS) {
    if (patterns.test(heading)) return type;
  }
  return 'general';
}

const index = [];

for (const slug of allSlugs) {
  const src = readFileSync(resolve(GAMES_DIR, slug, 'content/rulebook.md'), 'utf8');
  const { data: meta, content } = matter(src);

  if (meta.published === false) continue;

  const gameTitle = (meta.title || slug).replace(/\s*[—–-]\s*Official Rulebook$/i, '');

  const lines = content.split('\n');
  let currentSection = '';
  let currentHeading = '';
  let bodyLines = [];

  function flush() {
    if (!currentHeading) return;
    const tableRows = [];
    const textLines = [];
    for (const line of bodyLines) {
      if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
        if (line.includes('---')) continue;
        const cells = line.split('|').slice(1, -1).map(c => c.trim()).filter(Boolean);
        if (cells.length) tableRows.push(cells.join(' — '));
      } else {
        textLines.push(line);
      }
    }
    const textRaw = textLines.join(' ')
      .replace(/<[^>]+>/g, '')
      .replace(/\{\{[^}]+\}\}/g, '')
      .replace(/[*_`~\[\]()#]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    const tableText = tableRows.join('\n');
    const raw = textRaw + (tableText ? '\n' + tableText : '');
    if (!raw) return;

    const anchor = currentHeading
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    index.push({
      game: slug,
      gameTitle,
      type: 'section',
      sectionType: classifySection(currentHeading),
      section: currentSection || currentHeading,
      heading: currentHeading,
      content: raw,
      anchor
    });
  }

  for (const line of lines) {
    const h2Match = line.match(/^## (.+)$/);
    const h3Match = line.match(/^### (.+)$/);
    const h4Match = line.match(/^#### (.+)$/);

    if (h2Match) {
      flush();
      currentSection = h2Match[1].trim();
      currentHeading = h2Match[1].trim();
      bodyLines = [];
    } else if (h3Match) {
      flush();
      currentHeading = h3Match[1].trim();
      bodyLines = [];
    } else if (h4Match) {
      flush();
      currentHeading = h4Match[1].trim();
      bodyLines = [];
    } else if (currentHeading) {
      bodyLines.push(line);
    }
  }
  flush();
}

// --- Index variant sub-pages ---
for (const slug of allSlugs) {
  const variantsDir = resolve(GAMES_DIR, slug, 'content/variants');
  if (!existsSync(variantsDir)) continue;

  const src = readFileSync(resolve(GAMES_DIR, slug, 'content/rulebook.md'), 'utf8');
  const { data: meta } = matter(src);
  if (meta.published === false) continue;

  const gameTitle = (meta.title || slug).replace(/\s*[—–-]\s*Official Rulebook$/i, '');

  const variantFiles = readdirSync(variantsDir).filter(f => f.endsWith('.md'));
  for (const vf of variantFiles) {
    const vsrc = readFileSync(resolve(variantsDir, vf), 'utf8');
    const { data: vmeta, content: vcontent } = matter(vsrc);
    const vslug = vmeta.slug || vf.replace('.md', '');
    const vtitle = vmeta.title || vslug;

    const vlines = vcontent.split('\n');
    let currentSection = vtitle;
    let currentHeading = '';
    let bodyLines = [];

    function flushVariant() {
      if (!currentHeading) return;
      const tableRows = [];
      const textLines = [];
      for (const line of bodyLines) {
        if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
          if (line.includes('---')) continue;
          const cells = line.split('|').slice(1, -1).map(c => c.trim()).filter(Boolean);
          if (cells.length) tableRows.push(cells.join(' — '));
        } else {
          textLines.push(line);
        }
      }
      const textRaw = textLines.join(' ')
        .replace(/<[^>]+>/g, '')
        .replace(/\{\{[^}]+\}\}/g, '')
        .replace(/[*_`~\[\]()#]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
      const tableText = tableRows.join('\n');
      const raw = textRaw + (tableText ? '\n' + tableText : '');
      if (!raw) return;

      const anchor = currentHeading
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');

      index.push({
        game: slug,
        gameTitle,
        type: 'variant',
        sectionType: classifySection(currentHeading),
        section: vtitle,
        heading: currentHeading,
        content: raw,
        anchor,
        variant: vslug,
        variantUrl: `dist/${slug}/variants/${vslug}/`
      });
    }

    for (const line of vlines) {
      const h2Match = line.match(/^## (.+)$/);
      const h3Match = line.match(/^### (.+)$/);
      const h4Match = line.match(/^#### (.+)$/);

      if (h2Match) {
        flushVariant();
        currentSection = h2Match[1].trim();
        currentHeading = h2Match[1].trim();
        bodyLines = [];
      } else if (h3Match) {
        flushVariant();
        currentHeading = h3Match[1].trim();
        bodyLines = [];
      } else if (h4Match) {
        flushVariant();
        currentHeading = h4Match[1].trim();
        bodyLines = [];
      } else if (currentHeading) {
        bodyLines.push(line);
      }
    }
    flushVariant();
  }
}

// --- Index component hub game sub-pages (content/games/<game>/*.md) ---
for (const slug of allSlugs) {
  const gamesDir = resolve(GAMES_DIR, slug, 'content/games');
  if (!existsSync(gamesDir)) continue;

  const src = readFileSync(resolve(GAMES_DIR, slug, 'content/rulebook.md'), 'utf8');
  const { data: meta } = matter(src);
  if (meta.published === false) continue;

  const gameTitle = (meta.title || slug).replace(/\s*[—–-]\s*Official Rulebook$/i, '');

  const gameDirs = readdirSync(gamesDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
  for (const gameDir of gameDirs) {
    const gameFiles = readdirSync(resolve(gamesDir, gameDir)).filter(f => f.endsWith('.md'));
    for (const gf of gameFiles) {
      const gsrc = readFileSync(resolve(gamesDir, gameDir, gf), 'utf8');
      const { data: gmeta, content: gcontent } = matter(gsrc);
      const gslug = gmeta.slug || gameDir;
      const gtitle = gmeta.title || gameDir;

      const glines = gcontent.split('\n');
      let currentSection = gtitle;
      let currentHeading = '';
      let bodyLines = [];

      function flushGame() {
        if (!currentHeading) return;
        const tableRows = [];
        const textLines = [];
        for (const line of bodyLines) {
          if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
            if (line.includes('---')) continue;
            const cells = line.split('|').slice(1, -1).map(c => c.trim()).filter(Boolean);
            if (cells.length) tableRows.push(cells.join(' — '));
          } else {
            textLines.push(line);
          }
        }
        const textRaw = textLines.join(' ')
          .replace(/<[^>]+>/g, '')
          .replace(/\{\{[^}]+\}\}/g, '')
          .replace(/[*_`~\[\]()#]/g, '')
          .replace(/\s+/g, ' ')
          .trim();
        const tableText = tableRows.join('\n');
        const raw = textRaw + (tableText ? '\n' + tableText : '');
        if (!raw) return;

        const anchor = currentHeading.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        index.push({
          game: slug,
          gameTitle,
          type: 'game',
          sectionType: classifySection(currentHeading),
          section: gtitle,
          heading: currentHeading,
          content: raw,
          anchor,
          variant: gslug,
          variantUrl: `dist/${slug}/games/${gslug}/`
        });
      }

      for (const line of glines) {
        const h2Match = line.match(/^## (.+)$/);
        const h3Match = line.match(/^### (.+)$/);
        const h4Match = line.match(/^#### (.+)$/);
        if (h2Match) { flushGame(); currentSection = h2Match[1].trim(); currentHeading = h2Match[1].trim(); bodyLines = []; }
        else if (h3Match) { flushGame(); currentHeading = h3Match[1].trim(); bodyLines = []; }
        else if (h4Match) { flushGame(); currentHeading = h4Match[1].trim(); bodyLines = []; }
        else if (currentHeading) { bodyLines.push(line); }
      }
      flushGame();
    }
  }
}

// --- Index RPG manifest data (entities + oracles) ---
for (const slug of readdirSync(GAMES_DIR, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name)) {
  const manifestPath = resolve(GAMES_DIR, slug, 'rpg-manifest.json');
  if (!existsSync(manifestPath)) continue;

  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  const dataBasePath = resolve(ROOT, manifest.dataPath);
  const gameTitle = manifest.label;

  for (const cat of manifest.categories) {
    const filePath = resolve(dataBasePath, cat.file);
    if (!existsSync(filePath)) continue;

    const raw = JSON.parse(readFileSync(filePath, 'utf8'));

    if (cat.dataType === 'entity') {
      const items = Array.isArray(raw) ? raw : [];
      for (const item of items) {
        const name = item.name || item.index || '';
        if (!name) continue;

        const searchFields = cat.searchFields || ['name'];
        const searchable = searchFields.map(f => resolveField(item, f)).filter(Boolean).join(' ');

        const descArr = item.desc || item.description;
        const desc = Array.isArray(descArr) ? descArr.join(' ') : (typeof descArr === 'string' ? descArr : '');

        const anchor = item.index || name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const variantUrl = cat.linkPath
          ? `dist/${slug}/${resolveLinkPath(cat.linkPath, item)}`
          : null;

        index.push({
          game: slug,
          gameTitle,
          type: 'entity',
          section: cat.label,
          heading: name,
          content: desc || searchable,
          anchor,
          variantUrl,
          dataType: 'entity',
          category: cat.id,
        });
      }
    } else if (cat.dataType === 'oracle') {
      const tables = raw.tables || [];
      for (const table of tables) {
        const tableName = table.name || table.id || '';
        const entries = table.entries || [];
        for (const entry of entries) {
          const result = entry.result || '';
          if (!result) continue;
          const desc = entry.description || '';
          index.push({
            game: slug,
            gameTitle,
            type: 'oracle',
            section: cat.label,
            heading: result,
            content: desc || `${tableName} — ${result}`,
            anchor: result.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            dataType: 'oracle',
            category: cat.id,
            tableName,
          });
        }
      }
    } else if (cat.dataType === 'table') {
      const tables = raw.tables || [];
      for (const table of tables) {
        const tableName = table.name || table.id || '';
        const entries = table.entries || [];
        index.push({
          game: slug,
          gameTitle,
          type: 'table',
          section: cat.label,
          heading: tableName,
          content: entries.join(', '),
          anchor: (table.id || tableName).toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          dataType: 'table',
          category: cat.id,
        });
      }
    }
  }
}

function resolveLinkPath(template, item) {
  return template.replace(/\{([^}]+)\}/g, (_, expr) => {
    const [field, transform] = expr.split('|');
    const raw = resolveField(item, field);
    const val = raw != null ? String(raw) : '';
    switch (transform) {
      case 'levelSlug': return `level-${val}`;
      case 'alphaGroup': {
        const letter = (val[0] || 'a').toLowerCase();
        const groups = ['a-c','d-f','g-i','j-l','m-o','p-r','s-u','v-z'];
        return groups.find(g => letter >= g[0] && letter <= g[2]) || 'a-c';
      }
      case 'kebabCase': return val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
      default: return val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
    }
  });
}

function resolveField(obj, path) {
  const parts = path.split('.');
  let val = obj;
  for (const p of parts) {
    if (val == null) return '';
    val = val[p];
  }
  return typeof val === 'string' ? val : (val != null ? val : '');
}

mkdirSync(DIST_DIR, { recursive: true });
writeFileSync(resolve(DIST_DIR, 'rules-index.json'), JSON.stringify(index, null, 2));

const liteIndex = index.map(e => ({
  game: e.game,
  gameTitle: e.gameTitle,
  type: e.type,
  ...(e.sectionType ? { sectionType: e.sectionType } : {}),
  section: e.section,
  heading: e.heading,
  content: e.content.slice(0, 200),
  anchor: e.anchor,
  ...(e.variant ? { variant: e.variant } : {}),
  ...(e.variantUrl ? { variantUrl: e.variantUrl } : {}),
  ...(e.dataType ? { dataType: e.dataType } : {}),
  ...(e.category ? { category: e.category } : {}),
}));
writeFileSync(resolve(DIST_DIR, 'rules-index-lite.json'), JSON.stringify(liteIndex, null, 2));

console.log(`Built dist/rules-index.json (${index.length} entries, ${(JSON.stringify(index).length / 1024).toFixed(0)} KB)`);
console.log(`Built dist/rules-index-lite.json (${liteIndex.length} entries, ${(JSON.stringify(liteIndex).length / 1024).toFixed(0)} KB)`);

// --- Build games-meta.json ---
const gamesMeta = [];

for (const slug of allSlugs) {
  const src = readFileSync(resolve(GAMES_DIR, slug, 'content/rulebook.md'), 'utf8');
  const { data: meta, content } = matter(src);
  if (meta.published === false) continue;

  const gameTitle = (meta.title || slug).replace(/\s*[—–-]\s*Official Rulebook$/i, '');

  const variantsDir = resolve(GAMES_DIR, slug, 'content/variants');
  const hubGamesDir = resolve(GAMES_DIR, slug, 'content/games');
  const variants = [];
  if (existsSync(variantsDir)) {
    const vfiles = readdirSync(variantsDir).filter(f => f.endsWith('.md'));
    for (const vf of vfiles) {
      const vsrc = readFileSync(resolve(variantsDir, vf), 'utf8');
      const { data: vmeta } = matter(vsrc);
      variants.push({
        slug: vmeta.slug || vf.replace('.md', ''),
        title: vmeta.title || vf.replace('.md', ''),
      });
    }
  }
  if (existsSync(hubGamesDir)) {
    const gameDirs = readdirSync(hubGamesDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
    for (const gd of gameDirs) {
      const standardFile = resolve(hubGamesDir, gd, 'standard.md');
      const firstFile = resolve(hubGamesDir, gd, readdirSync(resolve(hubGamesDir, gd)).filter(f => f.endsWith('.md'))[0] || 'standard.md');
      const gf = existsSync(standardFile) ? standardFile : firstFile;
      if (!existsSync(gf)) continue;
      const gsrc = readFileSync(gf, 'utf8');
      const { data: gmeta } = matter(gsrc);
      variants.push({
        slug: gmeta.slug || gd,
        title: gmeta.title || gd,
      });
    }
  }

  const lines = content.split('\n');
  const sections = [];
  for (const line of lines) {
    const h2 = line.match(/^## (.+)$/);
    if (h2) sections.push(h2[1].trim());
  }

  const variantHub = sections.length === 1 && sections[0] === 'Variant Library';

  let howToPlay = null;
  const htpSection = sections.find(s => s.toLowerCase().includes('how to play'));
  if (htpSection) {
    let capturing = false;
    const htpLines = [];
    for (const line of lines) {
      if (line.match(/^## /) && capturing) break;
      if (line.match(/^## /) && line.includes(htpSection)) { capturing = true; continue; }
      if (capturing) htpLines.push(line);
    }
    howToPlay = htpLines.join('\n')
      .replace(/<[^>]+>/g, '')
      .replace(/\{\{[^}]+\}\}/g, '')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/\s*\{nowrap\|([^}]+)\}/g, '$1')
      .trim()
      .slice(0, 2000);
  }

  gamesMeta.push({
    slug,
    title: gameTitle,
    players: meta.players || null,
    duration: meta.duration || null,
    age: meta.age || null,
    tagline: meta.tagline || null,
    type: meta.type || null,
    status: meta.status || null,
    updated: meta.updated || null,
    variantHub,
    variants,
    sections,
    howToPlay,
  });
}

writeFileSync(resolve(DIST_DIR, 'games-meta.json'), JSON.stringify(gamesMeta, null, 2));
console.log(`Built dist/games-meta.json (${gamesMeta.length} games, ${gamesMeta.filter(g => g.howToPlay).length} with howToPlay)`);
