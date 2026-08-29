# Moddable Rules

The official rulebook system for all games published by [Moddable Games](https://moddable.games). Each game gets its own themed rulebook built from a shared design system.

**[Browse Rulebooks](https://rules.moddable.games)**

---

## Games

| Game | Version | Players | Variants | Status |
|------|---------|---------|----------|--------|
| **Nukes** | 0.9.8 | 2–3 | 4 | Live |
| **Mongo** | 0.9.2 | 2–8 | — | Dev |
| **Endless Skies** | 0.4.0 | 2–8 | — | Dev |
| **Baristasaurus** | 0.1.2 | 2–5 | — | Playtest |
| **Harvesters** | 0.1.0 | 2–4 | — | Dev |

---

## Classics (24 games, 128 variants)

| Game | Variants | Status |
|------|----------|--------|
| **Draughts** | 20 | Live |
| **Go** | 14 | Live |
| **The Landlord's Game** | 5 | Live |
| **Pachisi** | 3 | Live |
| **Chaupar** | 1 | Live |
| **Halma** | 2 | Live |
| **Stern-Halma** | 5 | Live |
| **Reversi** | 3 | Live |
| **Mancala** | 8 | Live |
| **Backgammon** | 8 | Live |
| **Nine Men's Morris** | 7 | Live |
| **Shogi** | 24 | Live |
| **Xiangqi** | 9 | Live |
| **Tafl** | 4 | Live |
| **Hex** | 8 | Live |
| **Asalto** | 2 | Live |
| **L'Attaque** | 4 | Live |
| **Royal Game of Ur** | — | Live |
| **Fanorona** | — | Live |
| **Surakarta** | — | Live |
| **Agon** | — | Live |
| **Dou Shou Qi** | — | Live |
| **Nyout** | — | Live |
| **Senet** | 1 | Live |

---

## Component Hubs (6 hubs, 38 games)

| Hub | Games | Status |
|-----|-------|--------|
| **Standard 52-Card Deck** | 18 | Live |
| **Standard Dice** | 5 | Live |
| **Double-Six Dominoes** | 4 | Live |
| **Flower 48** | 4 | Live |
| **Mahjong** | 5 | Live |
| **Bavarian 32** | 2 | Live |

---

## RPGs (10 systems, 177 pages)

| Game | Pages | Status |
|------|-------|--------|
| **D&D 5e** | 50 | Live |
| **Pathfinder 1e** | 39 | Live |
| **Ironsworn** | 6 | Live |
| **Starforged** | 12 | Live |
| **Dungeon World** | 25 | Live |
| **Fate Core** | 13 | Live |
| **Cairn** | 16 | Live |
| **Basic Roleplaying** | 8 | Live |
| **Knave** | 5 | Live |
| **Maze Rats** | 3 | Live |

---

## Mods

| Mod | Base Game | Version | Variants | Status |
|-----|-----------|---------|----------|--------|
| **Moddable Chess** | Chess | 0.6.0 | 154 | Alpha |
| **Dungeon Chess** | Chess | 0.2.1 | — | Alpha |
| **Talisman Worlds** | Talisman 4e | 0.3.0 | — | Dev |
| **Hyper Imperium** | Twilight Imperium 4e | 0.7.0 | — | Live |
| **Econopoly** | Monopoly | 0.2.0 | — | Live |

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
  chess/                 Variant library hub + 154 sub-pages (alpha) — platform
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

#### 2026-08-28
- Declared 43 unsupported variants across 17 families with _family shared reasons (refs engine#109)
- Silent gap is now zero: every unplayable variant says why, ratcheted by CI

#### 2026-08-27
- Declared 11 unsupported chess variants with specific failure modes and missing capabilities (refs engine#109)
- Corrected blind-chess identification (Banqi, not blindfold chess)
- Identified centennial-chess and grande-acedrex as vocabulary gaps, not capability gaps

#### 2026-08-19
- Removed `dist/` from all public-facing URLs — game pages now serve from root (e.g. `/chess/variants/standard/`)
- Coordinated URL migration across moddable-rules, moddable-engine, moddable-tools, moddable-web
- Fixed diagram-hashes.json hash function that was blind to nested topology/setup fields (#267)
- Fixed fairy-piece case mismatch in moddable-engine (wdE→wDE, bdE→bDE, wdH→wDH, bdH→bDH) — resolved recurring sync:boards collision
- Merged PR #266 (restore fairy-piece symbols stripped by board sync)
- Version 1.4.0

#### 2026-08-16
- Search index: removed content truncation, added type discrimination and semantic section classification
- Fixed RPG data indexing bug (cat.dataType instead of manifest.dataType) — entries jumped from 2,472 to 8,902
- Added per-variant structured JSON endpoints (/api/rules/{slug}/variants/{variant}.json)
- Added per-game enriched data endpoints (/api/rules/{slug}/data.json)
- Added global enriched data endpoint (/api/data.json) and diagrams API (/api/diagrams.json)
- Added lightweight search index for autocomplete (/api/search-index-lite.json)
- Eliminated duplicated index build logic (build.mjs delegates to build-index.mjs)
- Fixed API page local dev path resolution
- API surface expanded from 155 to 204 endpoints

#### 2026-08-15
- Four-player shogi: added per-player advancement vectors and playerCount to engine frontmatter
- Board diagram sync: 6 shogi variants refreshed (dai-shogi, maka-dai-dai-shogi, tai-shogi, taikyoku-shogi, tenjiku-shogi, wa-shogi)

#### 2026-08-14
- Fixed shinobi.md build-breaking YAML error (duplicated type: key in jonin piece definition)
- Jonin corrected to King-move only (was erroneously declared as compose with knight leap)
- Board diagram sync: 334 exported from engine (17 stale variants refreshed)
- All CI checks green: attribution, FEN, voids, stats, diagram freshness

#### 2026-08-13
- Chigorin and Legan Chess corrected and restored to playable (engine#111 closed)
- Seven files misattributed to non-existent "Corey Clark" corrected to Couch Tomato
- Removed citations to shogunofgames.com (does not resolve)
- Shafran and Legan attributions corrected
- Nukes, Econopoly, and Dungeon Chess variants marked original: true
- Attribution CI check brought to green: hub inheritance, bare-domain matching, credit consistency
- Chess pieces namespace migrated to engine.plugins.chess.pieces (engine#89)
- 35 chess variants verified playable and marked (engine#109 Tier 0, chess 100 to 135)
- Romanchenkos-chess: fixed as 10x8 grid with topology voids (was flat 8x8 with ignored broken_columns)
- Dragon-chess: added piece definition and drop config (Archbishop gating now functional)
- Non-standard board cells: topology.voids added to 11 shaped-board variants; hole-chess split into 24 voids + 2 blockers
- Omega, citadel, gustav-iii, tamerlane: topology.voids migrated (18/14/18/3 illegal moves eliminated)
- Citadel-chess and tamerlane: declared doubleStep/castling/enPassant: false (Shatranj rules)
- Added check-voids.mjs CI guard (render.zones.voids must match topology.voids in plugin families)
- Added check-dist-freshness.mjs CI guard (rebuild and diff; catches stale dist commits)
- Missing theme layers now fail the build (was silent CSS comment with absolute path)
- Created crimson and navy accent layers (BRP, L'Attaque)
- Rebuilt dist: 37 variant pages gained engine play links (Tier 0 batch)

#### 2026-08-12
- Fixed PDF stats showing 0 in deployed stats.json (PDFs are gitignored; added committed pdf-manifest.json with 665 files, 9,739 pages, by-type breakdown)
- Added diagram freshness CI guard (hashes engine: frontmatter, fails if changed without sync:boards)
- Teleport-chess rewritten with correct per-piece-token rules (sourced from chessvariants.com)
- Antichess family: comparison table and naming note added to all 4 variants; omnicide stalemate resolved as draw
- Progressive chess: attribution corrected (Scottish not Italian), added in-check-escape rule
- Created `desktop-research` label; applied to #244 and all RPG corpus issues
- Closed #179 (redundant, tracked on engine), #243 (all items applied), #249 (CI guard), #255 (PDF stats)

#### 2026-08-09
- Discovery files (llms.txt, mcp.json, server-card.json) now generated at build time from catalogue data
- Full agent-readiness discovery layer: server-card.json, api-catalog (RFC 9727), agent-skills, auth.md
- Fixed deploy.yml to include robots.txt, sitemap.xml, llms.txt, auth.md in site artifact
- All HTML pages now include `<link>` elements for MCP/API/LLM discovery
- Sitemap expanded to 565 URLs including discovery endpoints
- robots.txt updated with Content-Signal directives
- Audited cross-project staleness; filed moddable-website#147 and moddable-tools#26
- api-catalog and agent-skills/index.json now dynamically generated (no hardcoded stats)
- Added `data.rpgSystems` to api/stats.json (derived from oracle + entity system keys)
- Added CI stats freshness check (`scripts/check-stats.mjs`) in validate workflow
- Closed #251, #253, #254

#### 2026-08-07
- PDFs moved to GitHub Releases (277 MB removed from Pages payload, artifact 253 MB to 69 MB)
- Engine play links now conditional on `playable: true` (6 families); URL corrected to `?family=&variant=`
- Component hub PDFs now include cover pages between games and hub rulebook prepended
- Board diagram sync: 334 exported, 0 errors (engine YAML parser fix)
- Fixed broken YAML offset arrays in courier.md and orda-chess.md
- Talisman Worlds stripped to mod layer (removed verbatim third-party content)
- Racing Kings expanded with full no-check and equalising rule specification
- Spantsiretti corrected: 15 pieces / 3 rows per side (sourced from Games::Checkers)
- Attribution corrections across 10+ chess variants
- Deploy switched to Actions-based path with branch-based fallback documented
- Stale branches cleaned (22 deleted)

#### 2026-07-22
- Added Fate Core System (CC BY 3.0) — 13 rules pages covering all core mechanics
- Character sheet pages for all 10 RPGs with blank SVG sheets rendered by moddable-engine
- New `npm run sync:chargen` command for automated character sheet SVG export
- Build script now processes `{{svg:...}}` includes in sub-pages
- All RPG consolidated PDFs now include character sheets
- 46 games, 358 manifest entries (344 rendered)

#### 2026-07-08
- Moddable Chess: 155 variants (was 102), added 53 new variants across multiple batches
- Shogi: expanded from 4 to 24 variants (Chu, Dai, Tenjiku, Maka-Dai-Dai, Taikyoku, Wa, and more)
- Xiangqi: expanded from 2 to 8 variants (Janggi, Jieqi, Manchu+, Minixiangqi, Yang Qi, others)
- L'Attaque: expanded from 3 to 4 variants (added Aviation); rewrote Dover Patrol and Tri-Tactics from original sources
- Component hubs expanded: Standard 52 (12→18 games), Standard Dice (3→5), D6 Dominoes (3→4), Flower 48 (3→4), Mahjong (4→5), Bavarian 32 (1→2)
- Added American Mahjong Classic, Go-Stop, Chickenfoot, Schafkopf, Bunco, Craps, and 12 more card games
- Generated OG images, PDFs, and rebuilt dist for all new content
- Site version 1.3.0, 41 games, 315+ variants/games total

#### 2026-06-23 (session 2)
- Added Sittuyin (Burmese Chess) and Absorption Chess variants to moddable-chess hub (73 total)
- Merged Fanorona, Surakarta, and Shatranj PRs into production
- Auto-alphabetical variant ordering: removed all manual order: numbers, build sorts by title
- Fixed hub index page: now lists all 73 variants (was only showing 54)
- PDF pagination engine: SVG+caption grouping, H2 orphan prevention
- Build safety nets: warns on missing variants from hub, missing PDFs, missing template links
- Added PDF links to 5 game templates that were missing them
- Fixed Surakarta board SVG (arc clipping, legend centering) and logo (symmetric loop-arc icon)
- Generated board SVGs via moddable-chess engine renderer (correct piece placement)
- Regenerated all 227 PDFs (1,190 pages total); Nukes unchanged at 20pp
- Fixed variants.json: order defaults to null when frontmatter omitted
- Created Phase 1 variant pipeline design issue (#112) with cross-project links
- Site version 1.1.17, 24 games, 147 variants, 1195 search index entries

#### 2026-06-23
- Converted Stern-Halma from variant hub to standalone single-page rulebook
- Added Ninuki-Renju variant to Go hub (14 variants total, all reordered alphabetically)
- Fixed Makruk FEN characters to match engine (m→f, s→g)
- Migrated all browser JS from IIFE/globals to native ESM (`<script type="module">`)
- Generated missing PDFs for Harvesters (10pp) and Baristasaurus (10pp)
- Fixed Harvesters PDF link (pointed to wrong filename)
- Removed stale dist pages (Stern-Halma variant, Atlantic City)
- Regenerated all OG images and Go variant library PDF (41pp)
- Synced rules-index.json to moddable-website MCP worker
- Site version 1.1.16, 22 games, 144 variants, 1164 search index entries

#### 2026-06-09
- Added Draughts (English standard + Turkish Draughts and Lasca variants)
- Added Go (standard rules + Toroidal Go and Phantom Go variants)
- New "Classics" category with gold accent colour and landing page filter pill
- Nukes v0.9.6: terminology pass (token/unit/platoon), team feedback fixes, 20-page PDF
- Fixed build system table-wrap regex (broke ref-page/appendix out of page container)
- Fixed Suicide Chess variant page formatting (issue #50)
- Site version 1.1.6, search index now 540 entries across 11 games

#### 2026-06-05
- Version bumps: Econopoly 0.2.0, Endless Skies 0.4.0, Hyper Imperium 0.7.0, Mongo 0.9.2
- Rebuilt dist/ (all 9 games, 70 variant pages, 492 search index entries)
- Fixed README version table (HI and Econopoly were out of sync with frontmatter)
- Site version 1.1.5

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
