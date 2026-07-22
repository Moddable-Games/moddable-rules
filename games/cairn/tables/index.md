---
title: "Cairn Tables"
slug: tables
parent: cairn
published: true
---

## Cairn Structured Data

Cairn's character creation revolves around 20 Backgrounds, each providing a set of suggested names, starting gear, and two 1d6 tables that add a unique item, quirk, or bit of history to the character. The Warden's Guide adds quick NPC generation tables and monster-creation combinator tables.

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

Follows the [background schema](schema.json) (Backgrounds) or the shared table-file shape used by `npc-tables.json` and `monster-creation-tables.json` (name/game/licence/attribution/usage_note/tables[] with id/name/roll/entries).

### AI DM Integration

Table results feed directly into narrative generation, the same pattern used for other RPG hubs in this library:

1. Roll table(s) relevant to the situation (a Background's tables during character creation, or NPC/monster tables during play).
2. Pass the result(s) to the AI along with context (party, current scene).
3. AI weaves the rolled item/quirk/NPC trait into the narration naturally.

Example prompt: `"A new character has the Bonekeeper background. Table result: 'A Blood Pail from a local death-cult.' Generate a brief introduction hook for this character."`

### Scope Note

The large Warden's Guide procedural generation tables (dungeon seeds, forest seeds, setting seeds, naming procedures, spellbooks, reliquary) and the bestiary are tracked separately and are not yet all present in this directory; see the parent issue for current status.
