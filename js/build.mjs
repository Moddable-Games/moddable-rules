import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'fs';
import { resolve, basename } from 'path';
import matter from 'gray-matter';
import markdownIt from 'markdown-it';

const ROOT = resolve(import.meta.dirname, '..');
const GAMES_DIR = resolve(ROOT, 'games');
const SHARED_DIR = resolve(ROOT, 'shared');
const DIST_DIR = resolve(ROOT, 'dist');
const THEMES_DIR = resolve(SHARED_DIR, 'themes');
const ENGINE_BASE = 'https://engine.moddable.games/play/';
const PDF_BASE = 'https://github.com/Moddable-Games/moddable-rules/releases/download/pdfs';

function renderSvgBlock(svg, caption, family, variant, playable) {
  let captionHtml = caption ? `<p class="diagram-caption">${caption}</p>` : '';
  if (playable) {
    const engineUrl = `${ENGINE_BASE}?family=${family}&variant=${variant}`;
    const link = `<a href="${engineUrl}" class="diagram-engine-link" target="_blank" rel="noopener">${engineUrl}</a>`;
    captionHtml += `\n<p class="diagram-engine-url">${link}</p>`;
  }
  return `<div class="diagram-wrap">${svg}\n${captionHtml}</div>`;
}

// --- Incremental build helpers ---
function getNewestMtime(dir) {
  if (!existsSync(dir)) return 0;
  let newest = 0;
  const walk = (d) => {
    for (const entry of readdirSync(d, { withFileTypes: true })) {
      const full = resolve(d, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else {
        const mt = statSync(full).mtimeMs;
        if (mt > newest) newest = mt;
      }
    }
  };
  walk(dir);
  return newest;
}

function getGameSourceMtime(slug) {
  const gameDir = resolve(GAMES_DIR, slug);
  let newest = 0;
  const dirs = ['content', 'diagrams'];
  for (const sub of dirs) {
    const mt = getNewestMtime(resolve(gameDir, sub));
    if (mt > newest) newest = mt;
  }
  const rbPath = resolve(gameDir, 'content/rulebook.md');
  if (existsSync(rbPath)) {
    const mt = statSync(rbPath).mtimeMs;
    if (mt > newest) newest = mt;
  }
  return newest;
}

function getGameDistMtime(slug) {
  return getNewestMtime(resolve(DIST_DIR, slug));
}

function getChangedSlugs(allSlugs) {
  const sharedMtime = getNewestMtime(SHARED_DIR);
  return allSlugs.filter(slug => {
    const srcMtime = Math.max(getGameSourceMtime(slug), sharedMtime);
    const distMtime = getGameDistMtime(slug);
    return srcMtime > distMtime;
  });
}

// --- Parse CLI arguments ---
const args = process.argv.slice(2);
let gameSlugs = [];

const gameIdx = args.indexOf('--game');
if (gameIdx !== -1 && args[gameIdx + 1]) {
  gameSlugs = [args[gameIdx + 1]];
} else if (args.includes('--changed')) {
  const allSlugs = readdirSync(GAMES_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .filter(slug => existsSync(resolve(GAMES_DIR, slug, 'content/rulebook.md')));
  gameSlugs = getChangedSlugs(allSlugs);
  if (gameSlugs.length === 0) {
    console.log('No changes detected — nothing to build.');
    process.exit(0);
  }
} else if (args.includes('--all') || args.length === 0) {
  // Discover all games that have content/rulebook.md
  gameSlugs = readdirSync(GAMES_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .filter(slug => existsSync(resolve(GAMES_DIR, slug, 'content/rulebook.md')));
} else {
  console.error('Usage: node js/build.mjs [--all | --game <slug> | --changed]');
  process.exit(1);
}

if (gameSlugs.length === 0) {
  console.warn('No games found with content/rulebook.md');
  process.exit(0);
}

// --- Slugify heading text into a stable anchor ID ---
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// --- Markdown-it instance with custom rules ---
function createMarkdownRenderer() {
  const md = markdownIt({ html: true, typographer: true });

  // Heading anchor IDs: generate stable id from heading text, dedup per page
  let slugCounts = new Map();
  md.resetAnchors = () => { slugCounts = new Map(); };
  md.renderer.rules.heading_open = (tokens, idx) => {
    const tag = tokens[idx].tag;
    const contentToken = tokens[idx + 1];
    const text = contentToken?.children?.reduce((acc, t) => acc + (t.content || ''), '') || '';
    let slug = slugify(text);
    if (!slug) slug = 'heading';
    const count = slugCounts.get(slug) || 0;
    slugCounts.set(slug, count + 1);
    const id = count === 0 ? slug : `${slug}-${count + 1}`;
    return `<${tag} id="${id}">`;
  };

  // Custom inline rule: {nowrap|text}
  md.inline.ruler.before('emphasis', 'nowrap', (state, silent) => {
    if (state.src[state.pos] !== '{') return false;
    const match = state.src.slice(state.pos).match(/^\{nowrap\|([^}]+)\}/);
    if (!match) return false;
    if (!silent) {
      const token = state.push('html_inline', '', 0);
      token.content = `<span class="nowrap">${match[1]}</span>`;
    }
    state.pos += match[0].length;
    return true;
  });

  // Custom inline rule: {warn|text}
  md.inline.ruler.before('emphasis', 'warn', (state, silent) => {
    if (state.src[state.pos] !== '{') return false;
    const match = state.src.slice(state.pos).match(/^\{warn\|([^}]+)\}/);
    if (!match) return false;
    if (!silent) {
      const token = state.push('html_inline', '', 0);
      token.content = `<em class="warn">${match[1]}</em>`;
    }
    state.pos += match[0].length;
    return true;
  });

  return md;
}

// --- Theme layer defaults ---
const THEME_DEFAULTS = {
  surface: 'light',
  tint: 'warm',
  texture: 'grain',
  cover: 'solid',
  typography: 'classical',
  accent: 'gold',
  'accent-secondary': null,
  'section-divider': null,
};

// --- Generate composed theme CSS from frontmatter ---
function generateThemeCSS(meta, slug) {
  const theme = { ...THEME_DEFAULTS };
  if (meta.theme) {
    for (const key of Object.keys(THEME_DEFAULTS)) {
      if (meta.theme[key] !== undefined) theme[key] = meta.theme[key];
    }
  }

  const layers = [
    resolve(THEMES_DIR, 'surfaces', 'light.css'),
    resolve(THEMES_DIR, 'surfaces', 'dark.css'),
    resolve(THEMES_DIR, 'tints', `${theme.tint}.css`),
    resolve(THEMES_DIR, 'accents', `${theme.accent}.css`),
    resolve(THEMES_DIR, 'textures', `${theme.texture}.css`),
    resolve(THEMES_DIR, 'covers', `${theme.cover}.css`),
    resolve(THEMES_DIR, 'typography', `${theme.typography}.css`),
  ];

  let css = `/* Generated theme: ${slug} */\n`;
  css += `/* surface:${theme.surface} tint:${theme.tint} accent:${theme.accent} texture:${theme.texture} cover:${theme.cover} typography:${theme.typography} */\n\n`;

  for (const layerPath of layers) {
    if (existsSync(layerPath)) {
      css += readFileSync(layerPath, 'utf8') + '\n';
    } else {
      css += `/* WARNING: missing layer ${layerPath} */\n`;
    }
  }

  // Secondary accent (optional)
  if (theme['accent-secondary']) {
    const secPath = resolve(THEMES_DIR, 'accents', `${theme['accent-secondary']}.css`);
    if (existsSync(secPath)) {
      const secCSS = readFileSync(secPath, 'utf8')
        .replace(/--accent/g, '--accent-secondary');
      css += `\n/* Secondary accent: ${theme['accent-secondary']} */\n${secCSS}\n`;
    }
  }

  // Section divider (optional)
  if (theme['section-divider']) {
    css += `\n/* Section divider */\n`;
    css += `.section+.section::before{content:'${theme['section-divider']}';display:block;text-align:center;font-size:14px;color:var(--accent);opacity:.35;margin:-10px 0 0;line-height:1;}\n`;
  }

  // Game-specific overrides (if file exists)
  const overridePath = resolve(GAMES_DIR, slug, 'overrides.css');
  if (existsSync(overridePath)) {
    css += `\n/* Game-specific overrides */\n`;
    css += readFileSync(overridePath, 'utf8') + '\n';
  }

  // Print: lock to authored surface regardless of user toggle
  const printSurface = resolve(THEMES_DIR, 'surfaces', `${theme.surface}.css`);
  if (existsSync(printSurface)) {
    const printVars = readFileSync(printSurface, 'utf8')
      .replace(/\[data-surface="[^"]+"\]/, ':root');
    css += `\n/* Print: force authored surface (${theme.surface}) */\n`;
    css += `@media print {\n${printVars}\n}\n`;
  }

  return css;
}

// --- Build a single game ---
function buildGame(slug) {
  const gameDir = resolve(GAMES_DIR, slug);

  // Helper: read a file with absolute path
  const readFile = f => readFileSync(f, 'utf8');

  // --- Read content ---
  const contentPath = resolve(gameDir, 'content/rulebook.md');
  if (!existsSync(contentPath)) {
    console.warn(`  Skipping ${slug}: no content/rulebook.md`);
    return;
  }

  const src = readFile(contentPath);
  const { data: meta, content } = matter(src);

  // --- Resolve template ---
  const templatePath = existsSync(resolve(gameDir, 'templates/shell.html'))
    ? resolve(gameDir, 'templates/shell.html')
    : resolve(SHARED_DIR, 'templates/shell.html');
  const template = readFile(templatePath);

  // --- Pre-process: resolve includes (game partials first, shared fallback) ---
  function processIncludes(text) {
    return text.replace(
      /\{\{include:([^}]+)\}\}/g,
      (_, file) => {
        const name = file.trim();
        const gamPartialPath = resolve(gameDir, 'templates/partials', name);
        const sharedPartialPath = resolve(SHARED_DIR, 'templates/partials', name);
        const partialPath = existsSync(gamPartialPath) ? gamPartialPath : sharedPartialPath;
        const partialContent = readFile(partialPath);
        return partialContent.replace(/^[ ]{2,}/gm, '');
      }
    );
  }

  // --- Pre-process: inject SVGs (before markdown render to avoid typographer mangling) ---
  function processSvgIncludes(text) {
    return text.replace(
      /\{\{svg:([^\s"]+)\s*"([^"]*)"\}\}/g,
      (_, file, caption) => {
        const svgPath = resolve(gameDir, 'diagrams/svg', file);
        if (!existsSync(svgPath)) return `<!-- missing: ${file} -->`;
        const svg = readFile(svgPath).replace(/\n\s*\n/g, '\n');
        if (file.endsWith('-board.svg')) {
          const variantFromFile = file.replace(/-board\.svg$/, '');
          return renderSvgBlock(svg, caption, slug, variantFromFile, false);
        }
        return caption ? `${svg}\n<p class="diagram-caption">${caption}</p>` : svg;
      }
    );
  }

  // --- Add .rules class to <ul> ---
  function addRulesClass(html) {
    return html.replace(/<ul>\n/g, '<ul class="rules">\n');
  }

  // --- Wrap tables in overflow container and add .t class ---
  function addTableClass(html) {
    return html.replace(/<table>([\s\S]*?)<\/table>/g, '<div class="table-wrap"><table class="t">$1</table></div>');
  }

  // --- Render markdown ---
  const md = createMarkdownRenderer();
  const withIncludes = processIncludes(content);
  const withSvgs = processSvgIncludes(withIncludes);
  md.resetAnchors();
  let rendered = md.render(withSvgs);
  rendered = addRulesClass(rendered);
  rendered = addTableClass(rendered);

  // --- Assemble output ---
  let output = template.replace('{{CONTENT}}', rendered);
  output = processIncludes(output);

  // --- Resolve cover logo (inject if template has placeholder OR no cover-icon yet) ---
  const logosDir = resolve(gameDir, 'logos');
  let coverLogoHtml = '';
  if (existsSync(logosDir)) {
    const logoFiles = readdirSync(logosDir).filter(f => /logo/i.test(f) && /\.(svg|png|webp)$/.test(f));
    const logoFile = logoFiles.find(f => f.endsWith('.svg')) || logoFiles.find(f => f.endsWith('.png')) || logoFiles[0];
    if (logoFile) {
      coverLogoHtml = `<img class="cover-icon" src="logos/${logoFile}" alt="${(meta.title || slug).replace(/ — Official Rulebook$/, '')}">`;
    }
  }
  if (output.includes('{{COVER_LOGO}}')) {
    output = output.replace('{{COVER_LOGO}}', coverLogoHtml);
  } else if (coverLogoHtml && !output.includes('cover-icon')) {
    output = output.replace('<div class="cover">', `<div class="cover">\n  ${coverLogoHtml}`);
  }

  // --- Inject surface toggle if not present ---
  if (!output.includes('surface-toggle')) {
    output = output.replace(
      /<\/div>\s*\n\s*<span class="hdr-meta"/,
      `<button class="surface-toggle hdr-link" aria-label="Toggle light/dark mode" type="button">◐</button>\n  </div>\n  <span class="hdr-meta"`
    );
  }

  // --- Inject surface-toggle script if not present ---
  if (!output.includes('surface-toggle.js')) {
    output = output.replace(
      '</body>',
      '<script defer src="../../shared/js/surface-toggle.js"></script>\n</body>'
    );
  }

  // --- Replace template variables from frontmatter ---
  const variantsDir = resolve(gameDir, 'content/variants');
  const variantCount = existsSync(variantsDir)
    ? readdirSync(variantsDir).filter(f => f.endsWith('.md')).length
    : 0;

  const projectVersion = readFileSync(resolve(ROOT, 'version.txt'), 'utf8').trim();

  const isVariantHub = meta.variant_hub !== false && !!meta.variants;
  const coverSub = isVariantHub ? 'Variant Library' : 'Official Rulebook';

  // Resolve PDF link (prefer consolidated library, fall back to rulebook)
  const pdfCandidates = isVariantHub
    ? [`${slug}-variant-library.pdf`, `${slug}-complete.pdf`, `${slug}-rulebook.pdf`]
    : [`${slug}-complete.pdf`, `${slug}-rulebook.pdf`];
  const pdfName = pdfCandidates.find(f => existsSync(resolve(gameDir, 'pdf', f))) || '';
  const pdfLink = pdfName
    ? `<a href="${PDF_BASE}/${slug}--${pdfName}" class="hdr-link" target="_blank" rel="noopener">PDF</a>`
    : '';

  // Cover stats: variant hubs show Variants/Players/Age, rulebooks show Players/Duration/Age
  const coverStats = isVariantHub
    ? `<div class="cover-stat"><span class="cs-num">${variantCount}</span><span class="cs-lbl">Variants</span></div>
    <div class="cover-stat"><span class="cs-num">${meta.players || ''}</span><span class="cs-lbl">Players</span></div>
    <div class="cover-stat"><span class="cs-num">${meta.age || ''}</span><span class="cs-lbl">Age</span></div>`
    : `<div class="cover-stat"><span class="cs-num">${meta.players || ''}</span><span class="cs-lbl">Players</span></div>
    <div class="cover-stat"><span class="cs-num">${meta.duration || ''}</span><span class="cs-lbl">Minutes</span></div>
    <div class="cover-stat"><span class="cs-num">${meta.age || ''}</span><span class="cs-lbl">Age</span></div>`;

  const templateVars = {
    version: meta.version || '',
    project_version: projectVersion,
    slug: slug,
    game_slug: slug,
    game_title: meta.display_title || (meta.title || slug).replace(/ — Official Rulebook$/, ''),
    game_nav_title: meta.short_title || (meta.title || slug).replace(/ — Official Rulebook$/, '').replace(/ — Component Hub$/, ''),
    tagline: meta.tagline || '',
    players: meta.players || '',
    duration: meta.duration || '',
    age: meta.age || '',
    first_published: meta.first_published || '',
    variant_count: String(variantCount),
    cover_sub: coverSub,
    cover_title_class: meta.logo_has_title ? 'cover-title--hidden' : '',
    PDF_LINK: pdfLink,
    COVER_STATS: coverStats,
    POST_CONTENT: (meta.post_content || []).map(f => {
      const gamPath = resolve(gameDir, 'templates/partials', f);
      const shrPath = resolve(SHARED_DIR, 'templates/partials', f);
      const p = existsSync(gamPath) ? gamPath : shrPath;
      return existsSync(p) ? readFileSync(p, 'utf8') : '';
    }).join('\n'),
  };

  for (const [key, value] of Object.entries(templateVars)) {
    output = output.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), value);
  }

  // Version replacement (legacy pattern)
  if (meta.version) {
    output = output.replace(/v0\.9\.\d+/g, `v${meta.version}`);
  }

  // --- Fix asset paths for dist/{slug}/ output ---
  // Output is at dist/{slug}/index.html (2 levels deep, same as games/{slug}/)
  // Templates may use flat paths (old-style: css/, logos/, js/) or
  // already-relative paths (new-style: ../../shared/, ../theme.css).
  //
  // Strategy:
  //  - Rewrite flat paths to correct ../../ relative paths
  //  - Fix ../theme.css → ../../games/{slug}/theme.css (template is no longer in games/)
  //  - Leave ../../shared/ paths alone (same depth)

  const gameRelative = `../../games/${slug}`;

  // --- Flat CSS paths (old-style templates like nukes) ---
  output = output.replace(
    /href="css\/fonts\.css"/g,
    'href="../../shared/css/fonts.css"'
  );
  output = output.replace(
    /href="css\/style\.css"/g,
    'href="../../shared/css/style.css"'
  );

  // --- Theme CSS linking ---
  if (meta.theme) {
    // New system: link to generated theme.css in dist/{slug}/
    output = output.replace(
      /href="\.\.\/theme\.css([^"]*)"/g,
      `href="./theme.css$1"`
    );
    output = output.replace(
      /href="\.\.\/\.\.\/games\/[^/]+\/theme\.css([^"]*)"/g,
      `href="./theme.css$1"`
    );
    // Ensure theme link exists
    if (!output.includes('theme.css')) {
      output = output.replace(
        /href="\.\.\/\.\.\/shared\/css\/components\.css[^"]*"/,
        `$&>\n<link rel="stylesheet" href="./theme.css?v=${meta.version || ''}"`
      );
    }
  } else {
    // Legacy: fix ../theme.css → correct path from dist/
    output = output.replace(
      /href="\.\.\/theme\.css([^"]*)"/g,
      `href="${gameRelative}/theme.css$1"`
    );
    // Add theme.css for old-style templates that don't reference it
    const themeExists = existsSync(resolve(gameDir, 'theme.css'));
    const hasThemeLink = output.includes('theme.css');
    if (themeExists && !hasThemeLink) {
      output = output.replace(
        /href="\.\.\/\.\.\/shared\/css\/style\.css"/,
        `href="../../shared/css/style.css">\n<link rel="stylesheet" href="${gameRelative}/theme.css"`
      );
    }
  }

  // --- Flat logo/image paths (old-style: logos/foo.png) ---
  output = output.replace(
    /(?:src|href|content)="logos\//g,
    (match) => match.replace('logos/', `${gameRelative}/logos/`)
  );

  // Moddable brand logo → shared
  const moddablePattern = `${gameRelative}/logos/moddable-white.png`;
  output = output.replaceAll(moddablePattern, '../../shared/logos/moddable-white.png');

  // --- Flat PDF/content paths (old-style) ---
  output = output.replace(
    /href="pdf\//g,
    `href="${gameRelative}/pdf/`
  );
  output = output.replace(
    /href="content\//g,
    `href="${gameRelative}/content/`
  );

  // --- Flat JS paths (old-style: js/toc.js) ---
  output = output.replace(
    /src="js\//g,
    'src="../../js/'
  );

  // --- Generate theme CSS from frontmatter layers ---
  if (meta.theme) {
    const themeCSS = generateThemeCSS(meta, slug);
    const outDir2 = resolve(DIST_DIR, slug);
    mkdirSync(outDir2, { recursive: true });
    writeFileSync(resolve(outDir2, 'theme.css'), themeCSS);

    // Add data-surface attribute to <html> for CSS targeting
    const surface = meta.theme.surface || THEME_DEFAULTS.surface;
    output = output.replace('<html lang="en">', `<html lang="en" data-surface="${surface}">`);
  }

  // --- Write output ---
  const outDir = resolve(DIST_DIR, slug);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, 'index.html'), output);

  // Safety net: warn if no PDF exists at all
  if (!pdfName) {
    console.warn(`  ⚠ ${slug}: no PDF found in games/${slug}/pdf/`);
  }

  console.log(`  Built dist/${slug}/index.html`);
}

// --- Build variant sub-pages for games with variants: true ---
function buildVariants(slug) {
  const gameDir = resolve(GAMES_DIR, slug);
  const variantsDir = resolve(gameDir, 'content/variants');
  if (!existsSync(variantsDir)) return;

  const parentSrc = readFileSync(resolve(gameDir, 'content/rulebook.md'), 'utf8');
  const { data: parentMeta } = matter(parentSrc);
  if (!parentMeta.variants) return;

  const variantTemplatePath = resolve(gameDir, 'templates/variant-shell.html');
  const fallbackTemplatePath = resolve(SHARED_DIR, 'templates/variant-shell.html');
  const templatePath = existsSync(variantTemplatePath) ? variantTemplatePath : fallbackTemplatePath;
  const template = readFileSync(templatePath, 'utf8');

  const md = createMarkdownRenderer();

  const variantFiles = readdirSync(variantsDir).filter(f => f.endsWith('.md'));

  const variants = variantFiles.map(file => {
    const src = readFileSync(resolve(variantsDir, file), 'utf8');
    const { data: meta, content } = matter(src);
    return { file, meta, content, slug: meta.slug || file.replace('.md', '') };
  });

  variants.sort((a, b) => {
    const ao = a.meta.order ?? Infinity;
    const bo = b.meta.order ?? Infinity;
    if (ao !== bo) return ao - bo;
    return (a.meta.title || a.slug).localeCompare(b.meta.title || b.slug);
  });

  for (let i = 0; i < variants.length; i++) {
    const { meta, content, slug: variantSlug } = variants[i];

    const withSvgs = content.replace(
      /\{\{svg:([^\s"]+)\s*"([^"]*)"\}\}/g,
      (_, file, caption) => {
        const svgPath = resolve(gameDir, 'diagrams/svg', file);
        if (!existsSync(svgPath)) return `<!-- missing: ${file} -->`;
        const svg = readFileSync(svgPath, 'utf8').replace(/\n\s*\n/g, '\n');
        return renderSvgBlock(svg, caption, slug, variantSlug, !!meta.playable);
      }
    );

    md.resetAnchors();
    let rendered = md.render(withSvgs);
    rendered = rendered.replace(/<ul>\n/g, '<ul class="rules">\n');
    rendered = rendered.replace(/<table>/g, '<div class="table-wrap"><table class="t">')
                       .replace(/<\/table>/g, '</table></div>');

    const prev = variants[i - 1];
    const next = variants[i + 1];
    const prevLink = prev
      ? `<a href="../${prev.slug}/" class="variant-pager-prev">← ${prev.meta.title}</a>`
      : '<span class="variant-pager-spacer"></span>';
    const nextLink = next
      ? `<a href="../${next.slug}/" class="variant-pager-next">${next.meta.title} →</a>`
      : '<span class="variant-pager-spacer"></span>';

    const gameTitle = parentMeta.title?.replace(/ — Official Rulebook$/, '') || slug;
    const board = meta.board || '';
    const players = meta.players || '';
    const coverLabel = `${gameTitle} · Variant ${meta.order || i + 1} of ${variants.length}`;
    const statsHtml = [];
    if (board) statsHtml.push(`<span class="variant-stat"><span class="variant-stat-val">${board}</span><span class="variant-stat-lbl">Board</span></span>`);
    if (players) statsHtml.push(`<span class="variant-stat"><span class="variant-stat-val">${players}</span><span class="variant-stat-lbl">Players</span></span>`);
    const coverStats = statsHtml.length ? `<div class="variant-cover-stats">${statsHtml.join('\n      ')}</div>` : '';

    let output = template.replace('{{CONTENT}}', rendered);
    output = output.replace(/\{\{variant_title\}\}/g, meta.title || variantSlug);
    output = output.replace(/\{\{variant_slug\}\}/g, variantSlug);
    output = output.replace(/\{\{cover_label\}\}/g, coverLabel);
    output = output.replace('{{cover_stats}}', coverStats);
    const projVer = readFileSync(resolve(ROOT, 'version.txt'), 'utf8').trim();
    output = output.replace(/\{\{version\}\}/g, parentMeta.version || '');
    output = output.replace(/\{\{project_version\}\}/g, projVer);
    output = output.replace(/\{\{game_title\}\}/g, gameTitle);
    output = output.replace(/\{\{game_nav_title\}\}/g, parentMeta.short_title || gameTitle);
    output = output.replace(/\{\{slug\}\}/g, slug);
    output = output.replace(/\{\{hub_label\}\}/g, 'All Variants');
    output = output.replace(/\{\{markdown_path\}\}/g, `games/${slug}/content/variants/${variantSlug}.md`);
    output = output.replace(/\{\{pdf_path\}\}/g, `${PDF_BASE}/${slug}--variants--${variantSlug}.pdf`);
    output = output.replace('{{PREV_LINK}}', prevLink);
    output = output.replace('{{NEXT_LINK}}', nextLink);

    // Theme handling for variant pages
    if (parentMeta.theme) {
      const surface = parentMeta.theme.surface || THEME_DEFAULTS.surface;
      output = output.replace('<html lang="en">', `<html lang="en" data-surface="${surface}">`);
      // Fix theme.css path to point to generated file at dist/{slug}/theme.css
      output = output.replace(
        /href="[^"]*theme\.css([^"]*)"/g,
        `href="../../theme.css$1"`
      );
    }

    const outDir = resolve(DIST_DIR, slug, 'variants', variantSlug);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(resolve(outDir, 'index.html'), output);
  }

  console.log(`  Built ${variants.length} variant pages for ${slug}`);

  // Safety net: warn if any variant files are not linked from the hub rulebook
  const parentContent = readFileSync(resolve(gameDir, 'content/rulebook.md'), 'utf8');
  const linkedSlugs = new Set([...parentContent.matchAll(/variants\/([^/)"]+)/g)].map(m => m[1]));
  const unlisted = variants.filter(v => v.slug !== 'standard' && !linkedSlugs.has(v.slug));
  if (unlisted.length > 0) {
    console.warn(`  ⚠ ${unlisted.length} variant(s) not linked from hub page:`);
    unlisted.forEach(v => console.warn(`    - ${v.slug}`));
  }
}

// --- Generate landing page from frontmatter ---
function buildLanding() {
  const allSlugs = readdirSync(GAMES_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .filter(slug => existsSync(resolve(GAMES_DIR, slug, 'content/rulebook.md')));

  const games = allSlugs.map(slug => {
    const src = readFileSync(resolve(GAMES_DIR, slug, 'content/rulebook.md'), 'utf8');
    const { data } = matter(src);
    return { slug, ...data };
  });

  const isProduction = process.env.NODE_ENV === 'production' || process.env.CI === 'true';
  const visible = isProduction ? games.filter(g => g.published !== false) : games;
  const published = games.filter(g => g.published !== false);
  visible.sort((a, b) => (b.updated || '').localeCompare(a.updated || ''));

  const statusLabels = { live: 'Live', alpha: 'Alpha', playtest: 'Playtest', dev: 'In Dev' };
  const statusClasses = { live: 'badge--live', alpha: 'badge--alpha', playtest: 'badge--playtest', dev: 'badge--dev' };

  const version = readFileSync(resolve(ROOT, 'version.txt'), 'utf8').trim();

  function logoPath(slug) {
    const dir = resolve(GAMES_DIR, slug, 'logos');
    if (!existsSync(dir)) return '';
    const files = readdirSync(dir).filter(f => /\.(png|jpg|svg|webp)$/.test(f) && f !== '.gitkeep');
    if (!files.length) return '';
    const named = files.filter(f => f.startsWith(slug));
    const pool = named.length > 0 ? named : files.filter(f => /logo/i.test(f));
    const logo = pool.find(f => f.endsWith('.svg'))
      || pool.find(f => f.endsWith('.png'))
      || pool.find(f => f.endsWith('.jpg') || f.endsWith('.jpeg'))
      || pool[0] || files[0];
    return `games/${slug}/logos/${logo}`;
  }

  // Count total variants and component games across all games
  let totalVariants = 0;
  for (const slug of allSlugs) {
    const varDir = resolve(GAMES_DIR, slug, 'content/variants');
    if (existsSync(varDir)) {
      totalVariants += readdirSync(varDir).filter(f => f.endsWith('.md')).length;
    }
    const compDir = resolve(GAMES_DIR, slug, 'content/games');
    if (existsSync(compDir)) {
      totalVariants += readdirSync(compDir, { withFileTypes: true })
        .filter(d => d.isDirectory()).length;
    }
  }

  const cards = visible.map(g => {
    const logo = logoPath(g.slug);
    const logoImg = logo ? `<img class="card-logo" src="${logo}" alt="">` : '';
    const metaType = g.type === 'mod' && g.base_game ? `<span class="card-base">Mod of ${g.base_game}</span>` : '';
    const badge = statusLabels[g.status] || g.status || '';
    const badgeClass = statusClasses[g.status] || 'badge--dev';
    const title = g.short_title || (g.title ? g.title.replace(/\s*[—–:]\s*Official Rulebook$/i, '').replace(/\s*[—–]\s*Component Hub$/i, '') : g.slug);
    return `    <a href="dist/${g.slug}/index.html" class="game-card" data-type="${g.type || 'game'}">
      <span class="badge ${badgeClass}">${badge}</span>
      <div class="card-logo-wrap">
        ${logoImg}
        <p class="card-desc">${g.tagline || ''}</p>
      </div>
      <div class="card-body">
        <div class="card-header"><span class="card-title">${title}</span><span class="card-version">v${g.version || '0.0.0'}</span></div>
        ${metaType}
        <div class="card-meta"><span>${g.players || ''} players</span><span class="sep">/</span><span>${g.duration || ''}</span></div>
      </div>
    </a>`;
  }).join('\n\n');

  const html = `<!DOCTYPE html>
<html lang="en" data-surface="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Moddable Rules — Game Rulebooks</title>
<meta name="description" content="Official rulebooks for games published by Moddable Games.">
<meta property="og:title" content="Moddable Rules — Game Rulebooks">
<meta property="og:description" content="Official rulebooks for games published by Moddable Games.">
<meta property="og:image" content="https://rules.moddable.games/shared/og-image.png?v=${version}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="https://rules.moddable.games/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Moddable Rules">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Moddable Rules — Game Rulebooks">
<meta name="twitter:description" content="Official rulebooks for games published by Moddable Games.">
<meta name="twitter:image" content="https://rules.moddable.games/shared/og-image.png?v=${version}">
<link rel="icon" type="image/svg+xml" href="shared/logos/favicon.svg">
<link rel="stylesheet" href="css/landing.css?v=${version}">
<script defer src="shared/js/analytics.js"></script>
</head>
<body>

<div class="landing">

  <header class="landing-header">
    <a href="https://moddable.games" target="_blank" rel="noopener"><img class="landing-logo" src="shared/logos/moddable-white.png" alt="Moddable Games"></a>
    <button class="surface-toggle" aria-label="Toggle light/dark mode" type="button">◐</button>
  </header>

  <section class="hero">
    <h1 class="hero-title">Game Rulebooks</h1>
    <p class="hero-desc">Open rulebooks for original games, creative mods of published titles, and encyclopaedic coverage of public domain classics. Every rule documented, every variant preserved.</p>
    <div class="hero-stats" id="hero-stats">
      <span class="hero-stat"><strong id="stat-games">${published.length}</strong> games</span>
      <span class="hero-stat"><strong id="stat-variants">${totalVariants}</strong> variants</span>
    </div>
    <div class="hero-actions">
      <a href="diagrams/" class="hero-link">Diagrams</a>
      <a href="api/" class="hero-link">API</a>
    </div>
  </section>

  <div class="toolbar">
    <div class="filter-bar">
      <button class="filter-pill filter-pill--all active" data-filter="all">All</button>
      <button class="filter-pill filter-pill--game" data-filter="game">Games</button>
      <button class="filter-pill filter-pill--mod" data-filter="mod">Mods</button>
      <button class="filter-pill filter-pill--platform" data-filter="platform">Platforms</button>
      <button class="filter-pill filter-pill--classic" data-filter="classic">Classics</button>
      <button class="filter-pill filter-pill--component" data-filter="component">Components</button>
      <button class="filter-pill filter-pill--rpg" data-filter="rpg">RPGs</button>
    </div>
    <div class="search-bar">
      <svg class="search-icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"/></svg>
      <input type="search" class="search-input" placeholder="Search games..." aria-label="Search games">
    </div>
  </div>

  <div class="game-grid">

${cards}

  </div>

  <footer class="landing-footer">
    <div class="footer-columns">
      <div class="footer-col">
        <h4 class="footer-heading">Moddable Games</h4>
        <a href="https://moddable.games" target="_blank" rel="noopener">Homepage</a>
        <a href="https://moddable.games/about/" target="_blank" rel="noopener">About</a>
        <a href="https://moddable.games/news/" target="_blank" rel="noopener">News</a>
        <a href="https://moddable.games/about/roadmap/" target="_blank" rel="noopener">Roadmap</a>
      </div>
      <div class="footer-col">
        <h4 class="footer-heading">Play</h4>
        <a href="https://moddable.games/games/" target="_blank" rel="noopener">Games</a>
        <a href="https://moddable.games/engines/" target="_blank" rel="noopener">Engines</a>
        <a href="https://tools.moddable.games" target="_blank" rel="noopener">Tools</a>
        <a href="https://moddable.games/developers/" target="_blank" rel="noopener">Developers</a>
      </div>
      <div class="footer-col">
        <h4 class="footer-heading">Community</h4>
        <a href="https://moddable.games/community/" target="_blank" rel="noopener">Community</a>
        <a href="https://discord.gg/VhsVGNq6Za" target="_blank" rel="noopener">Discord</a>
        <a href="https://github.com/Moddable-Games" target="_blank" rel="noopener">GitHub</a>
        <a href="https://moddable.games/submit/" target="_blank" rel="noopener">Submit a Mod</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2012&ndash;2026 Moddable Games. All Rights Reserved.</span>
      <span class="footer-version">v${version}</span>
    </div>
  </footer>

</div>

<script defer src="js/landing.js?v=${version}"></script>
<script defer src="shared/js/surface-toggle.js"></script>
</body>
</html>
`;

  writeFileSync(resolve(ROOT, 'index.html'), html);
  console.log('  Built index.html (landing page)');
}

// --- Build component hub game sub-pages (content/games/{game}/) ---
function buildComponentGames(slug) {
  const gameDir = resolve(GAMES_DIR, slug);
  const gamesDir = resolve(gameDir, 'content/games');
  if (!existsSync(gamesDir)) return;

  const parentSrc = readFileSync(resolve(gameDir, 'content/rulebook.md'), 'utf8');
  const { data: parentMeta } = matter(parentSrc);
  if (parentMeta.hub_type !== 'component') return;

  const variantTemplatePath = resolve(gameDir, 'templates/variant-shell.html');
  const fallbackTemplatePath = resolve(SHARED_DIR, 'templates/variant-shell.html');
  const templatePath = existsSync(variantTemplatePath) ? variantTemplatePath : fallbackTemplatePath;
  const template = readFileSync(templatePath, 'utf8');

  const md = createMarkdownRenderer();

  const gameDirs = readdirSync(gamesDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  const games = [];
  for (const gameSlug of gameDirs) {
    const standardPath = resolve(gamesDir, gameSlug, 'standard.md');
    if (!existsSync(standardPath)) continue;
    const src = readFileSync(standardPath, 'utf8');
    const { data: meta, content } = matter(src);
    games.push({ meta, content, slug: meta.slug || gameSlug });
  }

  games.sort((a, b) => {
    const ao = a.meta.order ?? Infinity;
    const bo = b.meta.order ?? Infinity;
    if (ao !== bo) return ao - bo;
    return (a.meta.title || a.slug).localeCompare(b.meta.title || b.slug);
  });

  for (let i = 0; i < games.length; i++) {
    const { meta, content, slug: gameSlug } = games[i];

    const withSvgs = content.replace(
      /\{\{svg:([^\s"]+)\s*"([^"]*)"\}\}/g,
      (_, file, caption) => {
        const svgPath = resolve(gameDir, 'diagrams/svg', file);
        if (!existsSync(svgPath)) return `<!-- missing: ${file} -->`;
        const svg = readFileSync(svgPath, 'utf8').replace(/\n\s*\n/g, '\n');
        return renderSvgBlock(svg, caption, slug, gameSlug, false);
      }
    );

    md.resetAnchors();
    let rendered = md.render(withSvgs);
    rendered = rendered.replace(/<ul>\n/g, '<ul class="rules">\n');
    rendered = rendered.replace(/<table>/g, '<div class="table-wrap"><table class="t">')
                       .replace(/<\/table>/g, '</table></div>');

    const prev = games[i - 1];
    const next = games[i + 1];
    const prevLink = prev
      ? `<a href="../${prev.slug}/" class="variant-pager-prev">← ${prev.meta.title}</a>`
      : '<span class="variant-pager-spacer"></span>';
    const nextLink = next
      ? `<a href="../${next.slug}/" class="variant-pager-next">${next.meta.title} →</a>`
      : '<span class="variant-pager-spacer"></span>';

    const gameTitle = parentMeta.title?.replace(/ — Component Hub$/, '').replace(/ — Official Rulebook$/, '') || slug;
    const players = meta.players || '';
    const coverLabel = `${gameTitle} · Game ${i + 1} of ${games.length}`;
    const statsHtml = [];
    if (players) statsHtml.push(`<span class="variant-stat"><span class="variant-stat-val">${players}</span><span class="variant-stat-lbl">Players</span></span>`);
    const coverStats = statsHtml.length ? `<div class="variant-cover-stats">${statsHtml.join('\n      ')}</div>` : '';

    let output = template.replace('{{CONTENT}}', rendered);
    output = output.replace(/\{\{variant_title\}\}/g, meta.title || gameSlug);
    output = output.replace(/\{\{variant_slug\}\}/g, gameSlug);
    output = output.replace(/\{\{cover_label\}\}/g, coverLabel);
    output = output.replace('{{cover_stats}}', coverStats);
    const projVer = readFileSync(resolve(ROOT, 'version.txt'), 'utf8').trim();
    output = output.replace(/\{\{version\}\}/g, parentMeta.version || '');
    output = output.replace(/\{\{project_version\}\}/g, projVer);
    output = output.replace(/\{\{game_title\}\}/g, gameTitle);
    output = output.replace(/\{\{game_nav_title\}\}/g, parentMeta.short_title || gameTitle);
    output = output.replace(/\{\{slug\}\}/g, slug);
    output = output.replace(/\{\{hub_label\}\}/g, 'All Games');
    output = output.replace(/\{\{markdown_path\}\}/g, `games/${slug}/content/games/${gameSlug}/standard.md`);
    output = output.replace(/\{\{pdf_path\}\}/g, `${PDF_BASE}/${slug}--games--${gameSlug}.pdf`);
    output = output.replace('{{PREV_LINK}}', prevLink);
    output = output.replace('{{NEXT_LINK}}', nextLink);

    if (parentMeta.theme) {
      const surface = parentMeta.theme.surface || THEME_DEFAULTS.surface;
      output = output.replace('<html lang="en">', `<html lang="en" data-surface="${surface}">`);
      output = output.replace(
        /href="[^"]*theme\.css([^"]*)"/g,
        `href="../../theme.css$1"`
      );
    }

    const outDir = resolve(DIST_DIR, slug, 'games', gameSlug);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(resolve(outDir, 'index.html'), output);
  }

  console.log(`  Built ${games.length} game pages for component hub ${slug}`);
}

// --- Build sub-pages from content subdirectories (rules/, classes/, spells/, etc.) ---
function buildPages(slug) {
  const gameDir = resolve(GAMES_DIR, slug);
  const contentDir = resolve(gameDir, 'content');
  if (!existsSync(contentDir)) return;

  const parentSrc = readFileSync(resolve(gameDir, 'content/rulebook.md'), 'utf8');
  const { data: parentMeta } = matter(parentSrc);

  const skipDirs = new Set(['variants', 'games']);
  const subdirs = readdirSync(contentDir, { withFileTypes: true })
    .filter(d => d.isDirectory() && !skipDirs.has(d.name));

  if (subdirs.length === 0) return;

  const variantTemplatePath = resolve(gameDir, 'templates/variant-shell.html');
  const fallbackTemplatePath = resolve(SHARED_DIR, 'templates/variant-shell.html');
  const templatePath = existsSync(variantTemplatePath) ? variantTemplatePath : fallbackTemplatePath;
  const template = readFileSync(templatePath, 'utf8');

  const md = createMarkdownRenderer();
  let totalPages = 0;

  for (const subdir of subdirs) {
    const dirPath = resolve(contentDir, subdir.name);
    const files = readdirSync(dirPath).filter(f => f.endsWith('.md'));

    for (const file of files) {
      const src = readFileSync(resolve(dirPath, file), 'utf8');
      const { data: meta, content } = matter(src);
      const pageSlug = meta.slug || file.replace('.md', '');

      const withSvgs = content.replace(
        /\{\{svg:([^\s"]+)\s*"([^"]*)"\}\}/g,
        (_, svgFile, caption) => {
          const svgPath = resolve(gameDir, 'diagrams/svg', svgFile);
          if (!existsSync(svgPath)) return `<!-- missing: ${svgFile} -->`;
          const svg = readFileSync(svgPath, 'utf8').replace(/\n\s*\n/g, '\n');
          const engineUrl = `https://engine.moddable.games/play/?game=${slug}&variant=character-sheet`;
          return `<div class="diagram-wrap">${svg}\n<p class="diagram-caption">${caption}</p>\n<p class="diagram-engine-url"><a href="${engineUrl}" class="diagram-engine-link" target="_blank" rel="noopener">${engineUrl}</a></p></div>`;
        }
      );

      md.resetAnchors();
      let rendered = md.render(withSvgs);
      rendered = rendered.replace(/<ul>\n/g, '<ul class="rules">\n');
      rendered = rendered.replace(/<table>/g, '<div class="table-wrap"><table class="t">')
                         .replace(/<\/table>/g, '</table></div>');

      const gameTitle = parentMeta.title?.replace(/ — Official Rulebook$/, '') || slug;
      const coverLabel = gameTitle;

      let output = template.replace('{{CONTENT}}', rendered);
      output = output.replace(/\{\{variant_title\}\}/g, meta.title || pageSlug);
      output = output.replace(/\{\{variant_slug\}\}/g, pageSlug);
      output = output.replace(/\{\{cover_label\}\}/g, coverLabel);
      output = output.replace('{{cover_stats}}', '');
      const projVer = readFileSync(resolve(ROOT, 'version.txt'), 'utf8').trim();
      output = output.replace(/\{\{version\}\}/g, parentMeta.version || '');
      output = output.replace(/\{\{project_version\}\}/g, projVer);
      output = output.replace(/\{\{game_title\}\}/g, gameTitle);
      output = output.replace(/\{\{game_nav_title\}\}/g, parentMeta.short_title || gameTitle);
      output = output.replace(/\{\{slug\}\}/g, slug);
      output = output.replace(/\{\{hub_label\}\}/g, 'Contents');
      output = output.replace(/\{\{markdown_path\}\}/g, `games/${slug}/content/${subdir.name}/${file}`);
      output = output.replace(/\{\{pdf_path\}\}/g, `${PDF_BASE}/${slug}--${subdir.name}--${pageSlug}.pdf`);
      output = output.replace('{{PREV_LINK}}', '<span class="variant-pager-spacer"></span>');
      output = output.replace('{{NEXT_LINK}}', '<span class="variant-pager-spacer"></span>');

      if (parentMeta.theme) {
        const surface = parentMeta.theme.surface || THEME_DEFAULTS.surface;
        output = output.replace('<html lang="en">', `<html lang="en" data-surface="${surface}">`);
        output = output.replace(
          /href="[^"]*theme\.css([^"]*)"/g,
          `href="../../theme.css$1"`
        );
      }

      const outDir = resolve(DIST_DIR, slug, subdir.name, pageSlug);
      mkdirSync(outDir, { recursive: true });
      writeFileSync(resolve(outDir, 'index.html'), output);
      totalPages++;
    }
  }

  if (totalPages > 0) {
    console.log(`  Built ${totalPages} sub-pages for ${slug}`);
  }
}

// --- Build search index for cross-site API ---
function buildSearchIndex() {
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
    let currentLevel = 0;
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
        currentLevel = 2;
        bodyLines = [];
      } else if (h3Match) {
        flush();
        currentHeading = h3Match[1].trim();
        currentLevel = 3;
        bodyLines = [];
      } else if (h4Match) {
        flush();
        currentHeading = h4Match[1].trim();
        currentLevel = 4;
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

    const vsrc = readFileSync(resolve(GAMES_DIR, slug, 'content/rulebook.md'), 'utf8');
    const { data: vmeta } = matter(vsrc);
    if (vmeta.published === false) continue;

    const vGameTitle = (vmeta.title || slug).replace(/\s*[—–-]\s*Official Rulebook$/i, '');

    const variantFiles = readdirSync(variantsDir).filter(f => f.endsWith('.md'));
    for (const vf of variantFiles) {
      const vfsrc = readFileSync(resolve(variantsDir, vf), 'utf8');
      const { data: vfmeta, content: vfcontent } = matter(vfsrc);
      const vslug = vfmeta.slug || vf.replace('.md', '');
      const vtitle = vfmeta.title || vslug;

      const vlines = vfcontent.split('\n');
      let vSection = vtitle;
      let vHeading = '';
      let vBody = [];

      function flushV() {
        if (!vHeading) return;
        const raw = vBody.join(' ')
          .replace(/<[^>]+>/g, '')
          .replace(/\{\{[^}]+\}\}/g, '')
          .replace(/[*_`~\[\]()#]/g, '')
          .replace(/\|[^|]*\|/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
        const snippet = raw.slice(0, 200);
        if (!snippet) return;

        const anchor = vHeading
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');

        index.push({
          game: slug,
          gameTitle: vGameTitle,
          section: vtitle,
          heading: vHeading,
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
          flushV();
          vSection = h2Match[1].trim();
          vHeading = h2Match[1].trim();
          vBody = [];
        } else if (h3Match) {
          flushV();
          vHeading = h3Match[1].trim();
          vBody = [];
        } else if (h4Match) {
          flushV();
          vHeading = h4Match[1].trim();
          vBody = [];
        } else if (vHeading) {
          vBody.push(line);
        }
      }
      flushV();
    }
  }

  // --- Index RPG manifest data (entities + oracles) ---
  for (const slug of readdirSync(GAMES_DIR, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name)) {
    const manifestPath = resolve(GAMES_DIR, slug, 'rpg-manifest.json');
    if (!existsSync(manifestPath)) continue;

    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    const dataBasePath = resolve(ROOT, manifest.dataPath);
    const rpgTitle = manifest.label;

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
          const searchable = searchFields.map(f => resolveFieldForIndex(item, f)).filter(Boolean).join(' ');

          const descArr = item.desc || item.description;
          const desc = Array.isArray(descArr) ? descArr[0] || '' : (typeof descArr === 'string' ? descArr : '');
          const snippet = desc.slice(0, 200);

          const anchor = item.index || name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          const variantUrl = cat.linkPath
            ? `dist/${slug}/${resolveLinkPathForIndex(cat.linkPath, item)}`
            : null;

          index.push({
            game: slug,
            gameTitle: rpgTitle,
            section: cat.label,
            heading: name,
            content: snippet || searchable,
            anchor,
            variantUrl,
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
              gameTitle: rpgTitle,
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

  function resolveLinkPathForIndex(template, item) {
    return template.replace(/\{([^}]+)\}/g, (_, expr) => {
      const [field, transform] = expr.split('|');
      const raw = resolveFieldForIndex(item, field);
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

  function resolveFieldForIndex(obj, path) {
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
  console.log(`  Built dist/rules-index.json (${index.length} entries)`);
}

// --- Build board gallery ---
function buildBoards() {
  const allSlugs = readdirSync(GAMES_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .filter(slug => existsSync(resolve(GAMES_DIR, slug, 'content/rulebook.md')));

  const index = [];

  for (const family of allSlugs) {
    const rbPath = resolve(GAMES_DIR, family, 'content/rulebook.md');
    const rbSrc = readFileSync(rbPath, 'utf8');
    const { data: rbMeta } = matter(rbSrc);
    const familyTitle = (rbMeta.title || family).replace(/\s*[—–:]\s*Official Rulebook$/i, '').replace(/\s*[—–]\s*Component Hub$/i, '');
    const familyTopo = rbMeta.engine?.topology?.type || null;
    const hubType = rbMeta.hub_type || null;

    const svgDir = resolve(GAMES_DIR, family, 'diagrams/svg');
    const svgFiles = existsSync(svgDir)
      ? readdirSync(svgDir).filter(f => f.endsWith('-board.svg'))
      : [];
    const svgSlugs = new Set(svgFiles.map(f => f.replace(/-board\.svg$/, '')));

    // Collect variant metadata
    const varDir = resolve(GAMES_DIR, family, 'content/variants');
    const variantMeta = {};
    if (existsSync(varDir)) {
      for (const f of readdirSync(varDir).filter(f => f.endsWith('.md'))) {
        const slug = basename(f, '.md');
        const { data } = matter(readFileSync(resolve(varDir, f), 'utf8'));
        variantMeta[slug] = data;
      }
    }

    // Collect component hub games
    const compDir = resolve(GAMES_DIR, family, 'content/games');
    const compGames = {};
    if (existsSync(compDir)) {
      for (const g of readdirSync(compDir, { withFileTypes: true }).filter(d => d.isDirectory())) {
        const stdPath = resolve(compDir, g.name, 'standard.md');
        if (existsSync(stdPath)) {
          const { data } = matter(readFileSync(stdPath, 'utf8'));
          compGames[g.name] = data;
        }
      }
    }

    // Entries for SVGs that exist
    for (const svgFile of svgFiles) {
      const varSlug = svgFile.replace(/-board\.svg$/, '');
      const vm = variantMeta[varSlug] || {};
      const gm = compGames[varSlug];
      const topo = vm.engine?.topology?.type || gm?.engine?.topology?.type || familyTopo || 'unknown';
      const varTitle = vm.title || gm?.title || varSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

      let rulesUrl = '';
      if (existsSync(resolve(varDir || '', `${varSlug}.md`))) {
        rulesUrl = `dist/${family}/variants/${varSlug}/index.html`;
      }

      const svgEntry = {
        family,
        familyTitle,
        variant: varSlug,
        variantTitle: varTitle,
        topology: topo,
        svg: `games/${family}/diagrams/svg/${svgFile}`,
        rulesUrl,
        status: vm.engine?.generator ? 'generator' : 'rendered',
      };
      if (vm.engine?.generator) {
        const gen = vm.engine.generator;
        svgEntry.reason = 'hex-generator';
        svgEntry.generator = typeof gen === 'object' ? gen.id : gen;
        if (typeof gen === 'object' && gen.size) svgEntry.generatorSize = gen.size;
      }
      if (gm) {
        svgEntry.reason = 'component-game';
        svgEntry.rulesUrl = `dist/${family}/games/${varSlug}/index.html`;
        const deckType = rbMeta.engine?.components?.deck?.type || null;
        if (deckType) svgEntry.deckType = deckType;
      }
      if (vm.engine?.handicaps) svgEntry.handicaps = vm.engine.handicaps;
      if (vm.players || gm?.players) svgEntry.players = vm.players || gm.players;
      index.push(svgEntry);
    }

    // Entries for variants WITHOUT an SVG
    for (const [slug, vm] of Object.entries(variantMeta)) {
      if (svgSlugs.has(slug)) continue;
      const topo = vm.engine?.topology?.type || familyTopo || 'unknown';
      const varTitle = vm.title || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const hasTopo = !!(vm.engine?.topology?.type || familyTopo);

      const SUPPORTED_TOPOS = ['grid', 'hex', 'graph', 'track', 'pit'];
      let reason = 'pending';
      if (!hasTopo) reason = 'no-topology';
      else if (!SUPPORTED_TOPOS.includes(topo)) reason = 'unsupported-topology';
      else if (vm.engine?.topology?.layers > 1) reason = 'multi-board';

      index.push({
        family,
        familyTitle,
        variant: slug,
        variantTitle: varTitle,
        topology: topo,
        svg: null,
        rulesUrl: `dist/${family}/variants/${slug}/index.html`,
        status: 'missing',
        reason,
      });
    }

    // Entries for component hub games WITHOUT an SVG
    for (const [slug, gm] of Object.entries(compGames)) {
      if (svgSlugs.has(slug)) continue;
      const varTitle = gm.title || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const componentType = hubType === 'component' ? (rbMeta.component_type || 'cards') : 'unknown';
      const deckType = rbMeta.engine?.components?.deck?.type || null;

      const entry = {
        family,
        familyTitle,
        variant: slug,
        variantTitle: varTitle,
        topology: componentType,
        svg: null,
        rulesUrl: `dist/${family}/games/${slug}/index.html`,
        status: 'missing',
        reason: 'component-game',
      };
      if (deckType) entry.deckType = deckType;
      if (gm.players) entry.players = gm.players;
      index.push(entry);
    }

    // RPG reference tools — provider + chargen entries per game
    if (rbMeta.type === 'rpg') {
      const existing = index.find(e => e.family === family && e.reason === 'rpg-provider');
      if (!existing) {
        index.push({
          family,
          familyTitle,
          variant: 'reference',
          variantTitle: familyTitle,
          topology: 'rpg',
          svg: null,
          rulesUrl: `dist/${family}/index.html`,
          status: 'generator',
          reason: 'rpg-provider',
        });
      }
      const rpgManifestPath = resolve(GAMES_DIR, family, 'rpg-manifest.json');
      if (existsSync(rpgManifestPath)) {
        const rpgManifest = JSON.parse(readFileSync(rpgManifestPath, 'utf8'));
        if (rpgManifest.chargen) {
          const chargenSvg = `games/${family}/diagrams/svg/${family}-character-sheet.svg`;
          const chargenSvgPage1 = `games/${family}/diagrams/svg/${family}-character-sheet-page-1.svg`;
          const hasChargenSvg = existsSync(resolve(GAMES_DIR, '..', chargenSvg)) || existsSync(resolve(GAMES_DIR, '..', chargenSvgPage1));
          const chargenExisting = index.find(e => e.family === family && e.reason === 'rpg-chargen');
          if (!chargenExisting) {
            index.push({
              family,
              familyTitle,
              variant: 'character-sheet',
              variantTitle: 'Character Sheet',
              topology: 'rpg',
              svg: hasChargenSvg ? (existsSync(resolve(GAMES_DIR, '..', chargenSvg)) ? chargenSvg : chargenSvgPage1) : null,
              rulesUrl: `dist/${family}/rules/character-sheet/index.html`,
              status: hasChargenSvg ? 'rendered' : 'generator',
              reason: 'rpg-chargen',
            });
          } else if (hasChargenSvg && chargenExisting.status === 'generator') {
            chargenExisting.svg = existsSync(resolve(GAMES_DIR, '..', chargenSvg)) ? chargenSvg : chargenSvgPage1;
            chargenExisting.status = 'rendered';
            chargenExisting.rulesUrl = `dist/${family}/rules/character-sheet/index.html`;
          }
        }
      }
    }

    // Hex-generator games — games with hex topology but no variants/SVGs that use procedural generation
    const isHexGenerator = familyTopo === 'hex'
      && Object.keys(variantMeta).length === 0
      && Object.keys(compGames).length === 0
      && svgFiles.length === 0;
    if (isHexGenerator) {
      index.push({
        family,
        familyTitle,
        variant: 'standard',
        variantTitle: familyTitle,
        topology: 'hex',
        svg: null,
        rulesUrl: `dist/${family}/index.html`,
        status: 'generator',
        reason: 'hex-generator',
        generator: (typeof rbMeta.engine?.generator === 'object' ? rbMeta.engine.generator.id : rbMeta.engine?.generator) || family,
      });
    }
  }

  index.sort((a, b) => {
    if (a.status !== b.status) return a.status === 'rendered' ? -1 : 1;
    return a.family.localeCompare(b.family) || a.variant.localeCompare(b.variant);
  });

  const rendered = index.filter(b => b.status === 'rendered').length;
  const missing = index.filter(b => b.status === 'missing').length;
  writeFileSync(resolve(ROOT, 'diagrams-manifest.json'), JSON.stringify(index, null, 2));
  console.log(`  Built diagrams-manifest.json (${rendered} rendered, ${missing} pending — ${index.length} total)`);
}

// --- Main ---
console.log(`Building ${gameSlugs.length} game(s): ${gameSlugs.join(', ')}`);

for (const slug of gameSlugs) {
  buildGame(slug);
  buildVariants(slug);
  buildComponentGames(slug);
  buildPages(slug);
}

buildLanding();
buildBoards();
buildSearchIndex();

// API generation runs after search index is built (it copies rules-index.json)
import { execSync } from 'child_process';
execSync('node js/build-api.mjs', { cwd: ROOT, stdio: 'inherit' });

console.log('Build complete.');
