# Moddable Rules

The official rulebook system for all games published by [Moddable Games](https://moddable.games). Each game gets its own themed rulebook built from a shared design system.

**[Browse Rulebooks](https://rules.moddable.games)**

---

## Games

| Game | Version | Players | Status |
|------|---------|---------|--------|
| **Nukes** | 0.9.5 | 2–3 | Live |
| **Mongo** | 0.9.1 | 2–8 | Dev |
| **Endless Skies** | 0.3.0 | 2–8 | Dev |
| **Baristasaurus** | 0.1.0 | 2–5 | Playtest |

---

## Mods

| Mod | Base Game | Version | Players | Status |
|-----|-----------|---------|---------|--------|
| **Moddable Chess** | Chess | 0.4.0 | 2–6 | Alpha |
| **Dungeon Chess** | Chess | 0.2.1 | 2–4 | Alpha |
| **Talisman Worlds** | Talisman 4e | 0.3.0 | 2–6 | Dev |
| **Hyper Imperium** | Twilight Imperium 4e | 2.0.1 | 3–6 | Live |
| **Econopoly** | Monopoly | 0.9.0 | 2–6 | Live |

---

## Project Structure

```
games/
  nukes/                 Full rulebook (live)
  mongo/                 Placeholder (content pending playtest)
  endless-skies/         Placeholder (content in development)
  baristasaurus/         Rulebook (playtest)
  dungeon-chess/         Full rulebook (alpha) — mod of Chess
  talisman-worlds/       Rulebook (dev) — mod of Talisman 4e
  hyper-imperium/        Full rulebook (live) — mod of TI4
  econopoly/             Full rulebook (live) — mod of Monopoly
  moddable-chess/        Variant library hub + 70 sub-pages (alpha) — platform
shared/
  css/                   Design tokens, base styles, components
  fonts/                 Self-hosted WOFF2 web fonts
  templates/             Shared fallback shell template
  logos/                 Moddable brand assets
build/
  gen-og.py             OG image generator (blueprint aesthetic, Pillow)
js/
  build.mjs             Multi-game build system (+ variant sub-pages + search index)
  build-index.mjs       Standalone search index generator
  landing.js            Landing page filter pills
  pdf.mjs               PDF generation (Puppeteer)
  pdf-paginate.mjs      Manual pagination engine
  toc.js                Client-side TOC with scroll tracking
css/
  landing.css           Landing page styles
dist/                   BUILD OUTPUT (all games)
index.html             Landing page (game selector)
version.txt            Single-source version number
bump.sh                Version bump + query string propagation
```

Each game directory contains:
```
games/{slug}/
  content/rulebook.md    Canonical rules source
  content/variants/*.md  Sub-pages (if variants: true in frontmatter)
  templates/
    shell.html           Game-specific HTML shell
    variant-shell.html   Template for variant sub-pages
    partials/            Visual components (unit cards, etc.)
  diagrams/svg/          SVG illustrations
  theme.css              Game colour palette and overrides
  logos/                 Game-specific artwork
  pdf/                   Generated PDFs
```

Games with `variants: true` in their frontmatter get individual sub-pages built to `dist/{slug}/variants/{variant-slug}/index.html`.

---

## Build

Requires Node.js 18+.

```bash
npm install --ignore-scripts
npm run build              # Build all games → dist/ (includes search index)
npm run build:game nukes   # Build one game
npm run index              # Rebuild search index only
npm run pdf                # Generate all PDFs
npm run pdf:game nukes     # Generate PDF for one game
npm run og                 # Generate all OG images (requires Pillow)
```

The build reads each game's `content/rulebook.md`, resolves includes and SVGs, renders markdown to HTML, applies the game's theme, and outputs to `dist/{slug}/index.html`. It also generates `dist/rules-index.json` — a structured search index consumed by the Rules Referee widget on moddable.games.

### Search Index API

The build outputs `dist/rules-index.json` (also available via `npm run index`), served at:

```
https://rules.moddable.games/dist/rules-index.json
```

Each entry contains:
```json
{
  "game": "nukes",
  "gameTitle": "Nukes",
  "section": "Combat",
  "heading": "Calculating Strength",
  "content": "First ~200 chars of the section body...",
  "anchor": "calculating-strength"
}
```

Links to full rules: `https://rules.moddable.games/dist/{game}/#anchor`

---

## Adding a New Game

1. Create `games/{slug}/content/rulebook.md` with YAML frontmatter:
   ```yaml
   ---
   title: "Game Name — Official Rulebook"
   version: "0.1.0"
   slug: "game-slug"
   players: "2–4"
   duration: "60 min"
   age: "12+"
   tagline: "One-line description"
   ---
   ```
2. Create `games/{slug}/theme.css` (override CSS custom properties)
3. Create `games/{slug}/templates/shell.html` (or rely on `shared/templates/shell.html`)
4. Run `npm run build` — the system auto-discovers games with `content/rulebook.md`

---

## Design System

The shared CSS uses semantic custom properties that each game's theme overrides:

| Variable | Purpose |
|----------|---------|
| `--accent` | Primary accent colour |
| `--bg-primary` | Page background |
| `--bg-dark` | Dark sections (header, ref page) |
| `--heading-color` | H2 colour |
| `--text-primary` | Body text |
| `--divider-color` | Section borders |

---

## Changelog

#### 2026-06-04
- Added Baristasaurus rulebook (playtest)
- Renamed Talisman Hexed to Talisman Worlds
- Mongo: rebuilt all 127 tile stats from verified PDF source (previous data was fabricated)
- Mongo: rebuilt unit stats with correct columns (Buy/Sell/Use/Build/Move/Hold/Attack/Defend/Range)
- Mongo: added Build/Harvest table and Faction Modifications
- Mongo: corrected city IDs (C01-C08), tile names, and commodity values
- Endless Skies: added 30 player ships across 5 factions with full stats
- Endless Skies: added 51 outfits (Human, Remnant, Wanderer, Coalition weapons)
- Endless Skies: added 9 space port board specs with room actions and income
- Endless Skies: added ship board production tracker (4/31 defined)
- Endless Skies: fixed Free Worlds starting system (Alkaid → Dabih)
- Endless Skies: added full system manifest (104 systems across 8 factions) with setup rules
- Mongo bumped to v0.9.1, Endless Skies bumped to v0.3.0

#### 2026-06-03
- PDF covers unified: dynamic print date on front, logo + first published + printed + version on back
- Fix Nukes meltdown discrepancy in Quick Reference (said surrounding destroyed; actually unaffected)
- Nukes bumped to v0.9.5
- Dungeon Chess: merged Cannon + Terrain sections (17→16 pages)
- Paginator: tighter subheading gaps, print font-size fix for ordered lists
- Landing page: reordered cards (Dungeon Chess first)
- Regenerated all PDFs with updated covers and paginator
- Refactored Nukes diagram generator: replaced eval() with proper require()

#### 2026-06-02
- Dungeon Chess: unit reference cards for all 24 units with per-species colour headers
- Dungeon Chess: polished card styling, padding, terrain info, alignment
- Back cover standardisation: logo, first published date, print date across all games
- Moddable Chess: added 6 new variant pages (70 total) — Crazyhouse, Immunization, Medusa, Poison, Recruitment, Teleportation
- All 70 variants renumbered alphabetically with SVG board diagrams
- Moddable Chess rulebook version bumped to 0.4.0
- Added `build/gen-og.py` — blueprint-style OG image generator (79 unique images)
- Per-game OG images with logo overlay, per-variant OG images with chess schematic
- Type-differentiated blueprints: red (games), blue (mods), purple (platforms), teal (variants)
- All shell templates updated to reference dedicated 1200×630 OG images
- Variant shell now uses per-variant OG images (`og-variants/{{slug}}.png`)
- PDFs regenerated at v0.4.0 (70 individual variants + 211-page combined library)
- Landing page CSS: added `text-wrap: pretty` for orphan prevention
- Site version bumped to 1.1.0

#### 2026-05-28
- Moddable Chess: synced with app v0.6.8 — added 10 new variant pages (64 total)
- New variants: Berolina, Cylinder, Displacement, Einstein, Hoppel-Poppel, Legan, Makruk, Orda, Shatar, Toroidal
- All 64 variants renumbered alphabetically, SVG board diagrams generated for new variants
- Moddable Chess rulebook version bumped to 0.3.0
- Complete OG and Twitter Card meta tags on all 8 game shell templates + variant shell
- OG/Twitter image URLs now absolute with `?v={{version}}` cache-busting
- CSS/JS `<link>` and `<script>` tags in all templates now include `?v={{version}}`
- Simplified bump.sh (game templates use build-time {{version}} placeholders, not literal strings)
- Closed #1 (orphan words — resolved via CSS `text-wrap: pretty`)
- Created #37 (dedicated 1200×630 OG images per game)

#### 2026-05-27
- Moddable Chess: added 15 new variant rulebook pages (54 total)
- New variants: Andernach, Benedict, Berserk, Checkless, Dark Chess, Dice Chess, Diana, Grid Chess, Half Chess, Madrasi, No Retreat, Omnicide, Patrol, Petty, Weak!
- All variants reordered alphabetically (Standard first, then A–Z)
- SVG board diagrams generated for all new variants including non-standard boards (Diana 6×6, Half 8×4, Petty 5×6)
- Variant PDFs regenerated for full 54-variant library
- Added `dist/rules-index.json` search index API (63 entries across published games)
- Index built as part of `npm run build` and available standalone via `npm run index`
- Serves as data source for moddable-website Rules Referee widget

#### 2026-05-26
- Moddable Chess: added 19 new variant rulebook pages (39 total), organised into categories
- All 39 variants: uniform section structure (Setup, Rules, Win Condition, Strategy, Attribution)
- All 39 variants: Staunton SVG board diagrams (matching app piece set), full-width with card frame
- All 39 variants: FEN strings for implementers
- Standard Chess: expanded with complete FIDE rules reference (piece movement, special moves, draw conditions)
- PDF generation: refactored to multi-game system, generates individual + combined variant library (118 pages)
- Dungeon Chess PDF generated (13 pages), broken PDF links removed from unpublished games
- Variant page headers: Markdown + PDF download links
- Table header contrast fix (accent-light on dark background)
- Variant count now dynamic in hub template (no hardcoded numbers)
- bump.sh now propagates version to game shell template OG image URLs

#### 2026-05-25
- Added version.txt + bump.sh cache-busting system with footer version display
- Moddable Chess: restructured as variant hub + 20 individual sub-pages with prev/next nav
- Moddable Chess: synced with app (20 variants, removed 7 rejected), added cover headers
- Moddable Chess: SVG board diagrams for Capablanca, Grand, Courier, Breakthrough
- Dungeon Chess: complete rulebook rewrite from source code (was entirely inaccurate)
- Dungeon Chess: balance pass — unique abilities and XP costs for all 24 units
- Dungeon Chess: SVG map diagrams for all 3 maps
- Build system: SVG injection moved pre-render, blank-line stripping, variant sub-page builder
- Header logo links to homepage on all pages
- Moddable Chess: synced with moddable-chess app (20 variants, removed 7 rejected variants)
- Build system: added variant sub-page generation for games with `variants: true`

#### 2026-05-23
- Added Moddable Chess combined variant library (12 variants: Regular, XiangQi, Capablanca, Hexagonal, Alice, Fog of War, 4-Player, Courier, Omega, Grand, 3-Board, 4-Board)
- GitHub Actions CI: auto-builds and deploys to Pages on push
- Live at rules.moddable.games (custom domain configured)
- RGB cube SVG favicon
- Published/unpublished filtering (only Nukes + Dungeon Chess visible in production)
- Cross-project sync script (npm run sync → moddable-website/data/games-sync.json)
- External links open in new tab (target="_blank")
- Integrated rulebook links into moddable-website game pages

#### 2026-05-22
- Restructured to multi-game ruleset system (games/, shared/, dist/)
- Added Dungeon Chess, Mongo, Endless Skies rulesets
- Added Talisman: Hexed, Hyper Imperium, Econopoly mod rulesets
- Shared design system: tokens, base, components CSS with per-game themes
- Landing page auto-generated from frontmatter with filter pills (Games/Mods)
- Multi-game build system with auto-discovery and template fallback chain
- Category colours on landing cards (red = game, blue = mod, green = expansion)
- Overhauled PDF pagination (manual JS page-break engine, 20-page A3 booklet)
- Self-hosted Google Fonts, responsive mobile breakpoints (768px/480px)
- ARIA landmarks, skip-to-content, TOC scroll highlighting

#### 2026-05-21
- Added markdown source + build system (markdown-it, gray-matter)
- PDF generation with Puppeteer (versioned output)
- Extracted images from base64, print CSS overhaul

#### 2026-05-20
- Initial commit — Nukes HTML rulebook with diagrams
- Structured for GitHub Pages (static files, relative paths)

---

## Licence

All content and artwork are copyright Moddable Games. All rights reserved.
