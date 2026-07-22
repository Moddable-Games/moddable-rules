---
title: "Cairn Tables"
slug: tables
parent: cairn
published: true
---

## Cairn Structured Data

Cairn's character creation revolves around 20 Backgrounds, each providing a set of suggested names, starting gear, and two 1d6 tables that add a unique item, quirk, or bit of history to the character. The Warden's Guide adds quick NPC generation tables, monster-creation combinator tables, a full bestiary, and a set of procedural generation tables for naming, spellbooks, relics, and building dungeons, forests, and settings.

**Licence:** CC BY-SA 4.0. Attribution: Cairn 2nd Edition, Yochai Gal (github.com/yochaigal/cairn).

### How to Use the Backgrounds

1. Choose (or randomly determine, e.g. via 1d20) a Background from the [Character Creation](../content/rules/character-creation/) guide.
2. Take the Background's Starting Gear, rolling 3d6 for Gold Pieces.
3. Roll 1d6 on each of the Background's two tables to determine the specific items, quirks, or history that further define the character.
4. Choose a name from the Background's Names list, or roll 1d10.

### Table Files

| File | Contents |
|------|------------|
| `backgrounds.json` | All 20 Backgrounds: Aurifex, Barber-Surgeon, Beast Handler, Bonekeeper, Cutpurse, Fieldwarden, Fletchwind, Foundling, Fungal Forager, Greenwise, Half Witch, Hexenbane, Jongleur, Kettlewright, Marchguard, Mountebank, Outrider, Prowler, Rill Runner, Scrivener |
| `npc-tables.json` | Quick NPC generation: 3 Names sets (d20 each), Quirks, Background, Goals, Virtues, Vices |
| `monster-creation-tables.json` | Monster-creation combinators: Appearance (Physique/Feature), Traits (Quirks/Weakness), Attacks (Type/Critical Damage), Abilities (Ability/Target) — see the [Creating Content](../content/rules/creating-content/) rules page for the full procedure |
| `bestiary.json` | The full Warden's Guide bestiary: a Monster Categories 1d20 lookup table plus 84 individual monster stat blocks (HP, Armor, STR/DEX/WIL, attacks, detachment flag, and flavor/tactics/special-ability/Critical Damage text) |
| `naming-tables.json` | Formulas and word lists for naming settlements, factions, realms, and forests — see [Naming Procedures](../content/rules/naming-procedures/) |
| `spellbooks.json` | 100 Spellbooks (1d100), each with a name, effect, and mundane effect |
| `reliquary.json` | 46 named Relics, each with uses, tags, effects, and recharge condition |
| `dungeon-seeds-tables.json` | Combinator tables for generating a dungeon's history, denizens, factions, room contents, and die-drop room types — see [Dungeon Seeds](../content/rules/dungeon-seeds/) |
| `forest-seeds-tables.json` | Combinator tables for generating a forest's description, spirit, trails, POIs, and wandering encounters — see [Forest Seeds](../content/rules/forest-seeds/) |
| `setting-seeds-tables.json` | Combinator tables for generating a region's culture, factions, terrain, weather, points of interest, and paths — see [Setting Seeds](../content/rules/setting-seeds/) |

Follows the [background schema](schema.json) (Backgrounds) or the shared table-file shape used by the remaining files (name/game/licence/attribution/usage_note plus either `tables[]` with id/name/roll/entries, or — for the bestiary — `monster_categories` and a `monsters[]` array).

### AI DM Integration

Table results feed directly into narrative generation, the same pattern used for other RPG hubs in this library:

1. Roll table(s) relevant to the situation (a Background's tables during character creation, or NPC/monster/procedural-generation tables during play or prep).
2. Pass the result(s) to the AI along with context (party, current scene).
3. AI weaves the rolled item/quirk/NPC trait/location detail into the narration naturally.

Example prompt: `"A new character has the Bonekeeper background. Table result: 'A Blood Pail from a local death-cult.' Generate a brief introduction hook for this character."`
