---
title: "Cairn Tables"
slug: tables
parent: cairn
published: true
---

## Cairn Structured Data

Cairn's character creation revolves around 20 Backgrounds, each providing a set of suggested names, starting gear, and two 1d6 tables that add a unique item, quirk, or bit of history to the character.

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

Follows the [background schema](schema.json).

### AI DM Integration

Background rolls feed directly into narrative generation, the same pattern used for other RPG hubs in this library:

1. A player selects a Background and rolls its two tables.
2. Pass the results to the AI along with context (party, current scene).
3. AI weaves the rolled item/quirk into the character's introduction or an early scene.

Example prompt: `"A new character has the Bonekeeper background. Table result: 'A Blood Pail from a local death-cult.' Generate a brief introduction hook for this character."`

### Scope Note

This file covers the Player's Guide Backgrounds only. The Warden's Guide (bestiary, procedural generation tables for dungeons/forests/settings, spellbooks, reliquary, naming procedures, NPC tables) is a separate, larger body of content and is tracked as a follow-up.
