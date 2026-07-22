# RPG Manifest Schema (v2)

Universal contract for structured game data consumed by moddable-engine's RPG provider. Each game has ONE `rpg-manifest.json` at its root, referenced by the rulebook's `engine.content` frontmatter.

## Design principles

1. **Per-category data shape** — `dataType` lives on each category, not the manifest root. A single game can mix entities, roll tables, and oracle tables.
2. **Explicit data extraction** — `arrayKey` tells the engine where in the JSON file the usable array lives. No more guessing between bare arrays, `{tables: [...]}`, `{monsters: [...]}`, etc.
3. **Uniform display contract** — every category declares `displayField` (what to show in result rows) and optional `cardFields` (how to render the detail card). No hardcoded `item.result` or `item.name`.
4. **Frontmatter controls** — the rulebook `engine:` block points to the manifest; the manifest controls rendering. Engine code is generic.

## Manifest structure

```jsonc
{
  // Required metadata
  "label": "Cairn",                          // Display name in engine UI
  "version": "2",                            // Schema version (enables migration)
  "dataPath": "games/cairn/tables/",         // Base path for data files (repo-relative)
  "rulesUrl": "dist/cairn/",                 // Base URL for rules page links

  // Categories — each is independently typed and rendered
  "categories": [
    {
      "id": "bestiary",                      // Unique within this manifest
      "label": "Bestiary",                   // UI display label
      "file": "bestiary.json",              // Filename relative to dataPath
      "color": "#8d2e2e",                   // Accent colour for UI

      // --- Data shape ---
      "dataType": "entity",                  // "entity" | "table" | "oracle"
      "arrayKey": "monsters",               // JSONPath-lite to the data array
                                             //   "monsters" → json.monsters
                                             //   "tables[0].entries" → json.tables[0].entries
                                             //   null/omitted → json is the array (bare array file)

      // --- Display ---
      "displayField": "name",               // Field shown in search result rows
      "searchFields": ["name", "traits"],   // Fields indexed for search
      "tag": {                              // Optional badge/pill on result rows
        "field": "hp",
        "prefix": "HP "
      },

      // --- Card rendering ---
      "cardFields": {
        "title": "name",
        "meta": ["{stat_line}", "HP {hp} · Armor {armor}"],
        "description": "traits",
        "stats": "STR {str} DEX {dex} WIL {wil}"
      },

      // --- Links ---
      "linkPath": null                      // URL pattern for linking to rules pages
                                             // null = no link, "{name|kebabCase}/" = generated
    },
    {
      "id": "spellbooks",
      "label": "Spellbooks",
      "file": "spellbooks.json",
      "color": "#9b59b6",

      "dataType": "entity",
      "arrayKey": "tables[0].entries",      // Extracts from tables wrapper

      "displayField": "name",
      "searchFields": ["name", "effect"],
      "tag": { "field": "roll", "prefix": "#" },

      "cardFields": {
        "title": "name",
        "meta": ["Spell #{roll}"],
        "description": "effect"
      },
      "linkPath": null
    },
    {
      "id": "naming",
      "label": "Naming",
      "file": "naming-tables.json",
      "color": "#16a085",

      "dataType": "table",                  // Roll tables with string entries
      "arrayKey": "tables",                 // json.tables → [{id, name, entries: [str...]}]

      "displayField": "result",             // For tables: engine synthesises this from string entries
      "searchFields": ["result"],

      "cardFields": {
        "title": "result",
        "meta": ["{_tableName} · Roll: {_roll}"]
      },
      "linkPath": null
    },
    {
      "id": "dungeon-seeds",
      "label": "Dungeon Seeds",
      "file": "dungeon-seeds-tables.json",
      "color": "#8e44ad",

      "dataType": "table",
      "arrayKey": "tables",

      "displayField": "result",
      "searchFields": ["result"],

      "cardFields": {
        "title": "result",
        "meta": ["{_tableName} · Roll: {_roll}"]
      },
      "linkPath": null
    }
  ]
}
```

## Data type contracts

### `"entity"` — named lookup objects

Data is an array of objects. Each object has at minimum the field named in `displayField`.

**Extraction:** engine reads `json[arrayKey]` or (if `arrayKey` is null) `json` directly.

**Examples:** D&D spells, PF monsters, BRP skills, Cairn bestiary

**File formats that work:**
- Bare array: `[{name: "Fireball", ...}, ...]` → `arrayKey: null`
- Wrapped: `{monsters: [{name: "Acolyte", ...}]}` → `arrayKey: "monsters"`
- Nested in tables wrapper: `{tables: [{entries: [...]}]}` → `arrayKey: "tables[0].entries"`

### `"table"` — roll tables with simple entries

Data is an array of table objects, each containing `entries` (strings or simple objects).

**Extraction:** engine reads `json[arrayKey]` → expects `[{id, name, roll?, entries: [...]}]`

**Entry normalisation:** if entry is a string, engine wraps as `{result: entry, roll: index+1}`. If entry is an object, engine uses `displayField` to find the display value.

**Examples:** Maze Rats (pure strings), Knave traits (strings), Cairn naming tables (strings)

### `"oracle"` — weighted random tables with ranges

Same as `"table"` but entries have `min`/`max` range fields for weighted rolls.

**Extraction:** same as table. Entries expected to have `{min, max, result}` or equivalent per `displayField`.

**Examples:** Ironsworn action/theme, Starforged all categories

## Hybrid entries (table files with object entries)

Some table files have entries that are objects, not strings (e.g. Knave spells: `{roll, name, effect}`). These are declared as `dataType: "table"` with a non-default `displayField`:

```json
{
  "id": "spells",
  "dataType": "table",
  "arrayKey": "tables",
  "displayField": "name",          // ← engine shows entry.name not entry.result
  "cardFields": {
    "title": "name",
    "description": "effect"
  }
}
```

Alternatively, if the data is really entity-shaped (you'd never "roll" on it), use `dataType: "entity"` with `arrayKey: "tables[0].entries"` to extract the entries as a flat list.

The distinction: **tables** have a roll mechanic (d6, d20, d100) and the engine can offer a "roll" button. **Entities** are lookup/search only.

## Frontmatter contract

The rulebook's `engine:` block tells the engine what to load:

```yaml
engine:
  topology:
    type: none
  content:
    source: data/              # Directory containing rpg-manifest.json + data files
    schema:
      type: category-list      # Tells engine to load rpg-manifest.json from this dir
```

The `source` field is relative to the game directory. The engine resolves: `{basePath}/games/{slug}/{source}/rpg-manifest.json` — but the manifest currently lives at game root (`games/{slug}/rpg-manifest.json`). This needs reconciling:

**Option A:** Move manifests into the data directory (e.g. `games/cairn/tables/rpg-manifest.json`)
**Option B:** Engine always looks at game root for manifest, `source` just identifies the data directory

Recommend **Option B** — manifest at root, `dataPath` in manifest is authoritative for file resolution.

## Migration from v1

| v1 field | v2 equivalent |
|----------|--------------|
| `manifest.dataType` | removed — each `category.dataType` declares its own |
| `manifest.cardFields` (shared) | moved to per-category `cardFields` |
| `manifest.cardFields.title` used as display | replaced by `category.displayField` |
| engine hardcoding `item.result` | engine reads `category.displayField` |
| engine guessing array via `json.tables \|\| [json]` | explicit `category.arrayKey` |

## Validation rules

1. Every `file` referenced must exist at `{dataPath}/{file}`
2. Every `displayField` must exist on the extracted data items
3. `arrayKey` must resolve to a non-empty array
4. `searchFields` must be valid field paths on the data items
5. `cardFields` template tokens (`{field}`) must resolve on the data items

## Adding a new RPG — checklist

1. Create `games/{slug}/rpg-manifest.json` with `"version": "2"`
2. Audit each data file: what shape is it? Where is the array?
3. For each file, create a category entry with appropriate `dataType` and `arrayKey`
4. Set `displayField` to whatever field should appear in result rows
5. Define `cardFields` for the detail card
6. Ensure rulebook frontmatter has `engine.content.source` pointing to the data dir
7. Run build — manifest appears in `diagrams-manifest.json` automatically
