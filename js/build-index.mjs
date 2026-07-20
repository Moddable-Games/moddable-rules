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
    const raw = bodyLines.join(' ')
      .replace(/<[^>]+>/g, '')
      .replace(/\{\{[^}]+\}\}/g, '')
      .replace(/[*_`~\[\]()#]/g, '')
      .replace(/\|[^|]*\|/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    const snippet = raw.slice(0, 200);
    if (!snippet) return;

    const anchor = currentHeading
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    index.push({
      game: slug,
      gameTitle,
      section: currentSection || currentHeading,
      heading: currentHeading,
      content: snippet,
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
      const raw = bodyLines.join(' ')
        .replace(/<[^>]+>/g, '')
        .replace(/\{\{[^}]+\}\}/g, '')
        .replace(/[*_`~\[\]()#]/g, '')
        .replace(/\|[^|]*\|/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      const snippet = raw.slice(0, 200);
      if (!snippet) return;

      const anchor = currentHeading
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');

      index.push({
        game: slug,
        gameTitle,
        section: vtitle,
        heading: currentHeading,
        content: snippet,
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

    if (manifest.dataType === 'entity') {
      const items = Array.isArray(raw) ? raw : [];
      for (const item of items) {
        const name = item.name || item.index || '';
        if (!name) continue;

        const searchFields = cat.searchFields || ['name'];
        const searchable = searchFields.map(f => resolveField(item, f)).filter(Boolean).join(' ');

        const descArr = item.desc || item.description;
        const desc = Array.isArray(descArr) ? descArr[0] || '' : (typeof descArr === 'string' ? descArr : '');
        const snippet = desc.slice(0, 200);

        index.push({
          game: slug,
          gameTitle,
          section: cat.label,
          heading: name,
          content: snippet || searchable,
          anchor: (item.index || name.toLowerCase().replace(/[^a-z0-9]+/g, '-')),
          dataType: 'entity',
          category: cat.id,
        });
      }
    } else if (manifest.dataType === 'oracle') {
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
    }
  }
}

function resolveField(obj, path) {
  const parts = path.split('.');
  let val = obj;
  for (const p of parts) {
    if (val == null) return '';
    val = val[p];
  }
  return typeof val === 'string' ? val : '';
}

mkdirSync(DIST_DIR, { recursive: true });
writeFileSync(resolve(DIST_DIR, 'rules-index.json'), JSON.stringify(index, null, 2));
console.log(`Built dist/rules-index.json (${index.length} entries across ${new Set(index.map(e => e.game)).size} games)`);
