---
title: "Pathfinder 1st Edition (PFSRD)"
short_title: "Pathfinder 1e"
display_title: "Pathfinder<br>1st Edition"
version: "0.1.0"
slug: "pathfinder-1e"
players: "2–7"
duration: "varies"
age: "13+"
tagline: "Paizo's fork of D&D 3.5, the most complete open ruleset in existence"
type: "rpg"
status: "live"
updated: "2026-07-21"
published: true
variants: false
theme:
  surface: light
  tint: warm
  texture: none
  cover: cosmic
  typography: modern
  accent: gold
  section-divider: "⚜"
engine:
  topology:
    type: none
  content:
    source: data/
    schema:
      type: category-list
---

<div class="section">

## Pathfinder 1st Edition

Pathfinder is Paizo Publishing's evolution of the D&D 3.5 ruleset, first released in 2009. This hub covers the Pathfinder Roleplaying Game Reference Document: the open-licensed core rules covering character creation, classes, races, feats, spells, equipment, combat, and the Bestiary.

**Licence:** Open Game License 1.0a.
**Attribution:** Pathfinder Roleplaying Game Core Rulebook, copyright 2009, Paizo Publishing, LLC. Content sourced via the PSRD-Data project (`devonjones/PSRD-Data`), a structured extraction of the official Pathfinder SRD website.

**Scope note:** This hub covers the Core Rulebook only, the same scope the "5e SRD" label implies for D&D 5e. Later Paizo splatbooks (Advanced Player's Guide, Advanced Race Guide, Bestiary 2-4, Ultimate Combat/Magic/Equipment/Campaign) are out of scope and would be tracked separately if pursued.

</div>

<div class="section">

### Rules

- [Getting Started](rules/getting-started/) — Playing the game, common terms, character generation steps, ability scores
- [Races](rules/races/) — Dwarves, elves, gnomes, half-elves, half-orcs, halflings, humans
- [Skills](rules/skills/) — Skill mechanics, Acrobatics through Intimidate
- [Skills (continued)](rules/skills-2/) — Knowledge through Use Magic Device
- [Classes](rules/classes/) — The 11 core classes, character advancement, multiclassing, favored class, prestige classes
- [Fighter](rules/fighter/) — Full class write-up: role, class features, weapon training groups
- [Ranger](rules/ranger/) — Full class write-up: favored enemy/terrain, combat styles, hunter's bond
- [Monk](rules/monk/) — Full class write-up: flurry of blows, ki pool, unarmed strike progression
- [Paladin](rules/paladin/) — Full class write-up: smite evil, lay on hands, mercies, divine bond
- [Rogue](rules/rogue/) — Full class write-up: sneak attack, rogue talents, trapfinding
- [Bard](rules/bard/) — Full class write-up: bardic performance, spells known, versatile performance
- [Barbarian](rules/barbarian/) — Full class write-up: rage, all 24 rage powers, damage reduction
- [Wizard](rules/wizard/) — Full class write-up: arcane bond, all 9 arcane schools, familiars
- [Druid](rules/druid/) — Full class write-up: nature bond, wild shape, animal companion mechanics
- [Sorcerer](rules/sorcerer/) — Full class write-up: bloodlines, spells known, eschew materials
- [Cleric](rules/cleric/) — Full class write-up: channel energy, all 32 domains, spontaneous casting
- [Combat Feats](rules/feats-combat/) — All 101 core Combat feats, alphabetized
- [General Feats](rules/feats-general/) — All 49 core General feats, alphabetized (including Leadership)
- [Metamagic, Critical & Item Creation Feats](rules/feats-other/) — The remaining 25 core feats across three smaller categories
- [Combat](rules/combat/) — Turn structure, initiative, attack rolls, AC, damage, saving throws
- [Actions in Combat](rules/combat-actions/) — Every standard, move, full-round, swift, immediate, and free action
- [Special Attacks & Maneuvers](rules/combat-maneuvers/) — Charges, combat maneuvers, mounted combat, cover, concealment, injury and death
- [Magic](rules/magic/) — Casting spells, concentration, counterspells, arcane vs divine casting, special abilities
- [Spell Statistics](rules/magic-spell-statistics/) — How to read a spell's stat block: school, components, range, area, duration, saving throw
- [Additional Rules](rules/additional-rules/) — Alignment, aging, height and weight, carrying capacity, movement, vision and light, breaking objects
- [Dungeons & Traps](rules/environment-dungeons/) — Dungeon types and terrain, trap design and mechanics, sample traps
- [Wilderness & Urban Adventures](rules/environment-wilderness/) — All 7 wilderness terrain types, getting lost, city adventuring, siege engines
- [Weather, Planes & Environmental Rules](rules/environment-weather-planes/) — Weather and storms, the planes of existence, falling, drowning, heat and cold
- [Gamemastering](rules/gamemastering/) — Designing encounters, awarding experience, placing treasure, creating NPCs, beyond 20th level
- [Special Abilities](rules/glossary-special-abilities/) — Extraordinary, spell-like, and supernatural abilities; curses, diseases, and poison
- [Conditions](rules/glossary-conditions/) — The standardized status conditions referenced throughout the rules

All 11 core classes, all 175 core feats, and the full Combat, Magic, Additional Rules, Environment, Gamemastering, and Glossary chapters are now complete, and all 623 core spells are now available as structured data below. Only Equipment remains before the Core Rulebook is fully covered (Bestiary excluded — tracked separately).

</div>

<div class="section">

### Machine-Readable Data

Structured JSON, sourced from `devonjones/PSRD-Data` (OGL 1.0a).

- [ability-scores.json](../../games/pathfinder-1e/data/ability-scores.json) — The six abilities and their effects
- [races.json](../../games/pathfinder-1e/data/races.json) — The seven core races and their racial traits
- [skills.json](../../games/pathfinder-1e/data/skills.json) — All 26 skills with key ability and training requirements
- [classes.json](../../games/pathfinder-1e/data/classes.json) — All 11 core classes with hit die, BAB, saves, and skill ranks
- [conditions.json](../../games/pathfinder-1e/data/conditions.json) — All 34 standardized conditions
- [feats.json](../../games/pathfinder-1e/data/feats.json) — All 173 core feats (combat, general, metamagic, critical, item creation)

**Spells** — all 623 core spells, split by spell level into 34 part files:

- Level 0 (cantrips/orisons): [part 1](../../games/pathfinder-1e/data/spells/level-0-part1.json), [part 2](../../games/pathfinder-1e/data/spells/level-0-part2.json)
- Level 1: [part 1](../../games/pathfinder-1e/data/spells/level-1-part1.json), [part 2](../../games/pathfinder-1e/data/spells/level-1-part2.json), [part 3](../../games/pathfinder-1e/data/spells/level-1-part3.json), [part 4](../../games/pathfinder-1e/data/spells/level-1-part4.json)
- Level 2: [part 1](../../games/pathfinder-1e/data/spells/level-2-part1.json), [part 2](../../games/pathfinder-1e/data/spells/level-2-part2.json), [part 3](../../games/pathfinder-1e/data/spells/level-2-part3.json), [part 4](../../games/pathfinder-1e/data/spells/level-2-part4.json), [part 5](../../games/pathfinder-1e/data/spells/level-2-part5.json)
- Level 3: [part 1](../../games/pathfinder-1e/data/spells/level-3-part1.json), [part 2](../../games/pathfinder-1e/data/spells/level-3-part2.json), [part 3](../../games/pathfinder-1e/data/spells/level-3-part3.json), [part 4](../../games/pathfinder-1e/data/spells/level-3-part4.json), [part 5](../../games/pathfinder-1e/data/spells/level-3-part5.json)
- Level 4: [part 1](../../games/pathfinder-1e/data/spells/level-4-part1.json), [part 2](../../games/pathfinder-1e/data/spells/level-4-part2.json), [part 3](../../games/pathfinder-1e/data/spells/level-4-part3.json), [part 4](../../games/pathfinder-1e/data/spells/level-4-part4.json)
- Level 5: [part 1](../../games/pathfinder-1e/data/spells/level-5-part1.json), [part 2](../../games/pathfinder-1e/data/spells/level-5-part2.json), [part 3](../../games/pathfinder-1e/data/spells/level-5-part3.json), [part 4](../../games/pathfinder-1e/data/spells/level-5-part4.json)
- Level 6: [part 1](../../games/pathfinder-1e/data/spells/level-6-part1.json), [part 2](../../games/pathfinder-1e/data/spells/level-6-part2.json), [part 3](../../games/pathfinder-1e/data/spells/level-6-part3.json), [part 4](../../games/pathfinder-1e/data/spells/level-6-part4.json)
- Level 7: [part 1](../../games/pathfinder-1e/data/spells/level-7-part1.json), [part 2](../../games/pathfinder-1e/data/spells/level-7-part2.json)
- Level 8: [part 1](../../games/pathfinder-1e/data/spells/level-8-part1.json), [part 2](../../games/pathfinder-1e/data/spells/level-8-part2.json)
- Level 9: [part 1](../../games/pathfinder-1e/data/spells/level-9-part1.json), [part 2](../../games/pathfinder-1e/data/spells/level-9-part2.json)

Equipment and monsters are pending ingestion from PSRD-Data and will be added as each batch completes.

</div>
