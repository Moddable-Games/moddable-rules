---
title: "Maze Rats Tables"
slug: tables
parent: maze-rats
published: true
---

## Maze Rats Procedural Tables

Maze Rats is built around dozens of short random tables for generating spells, monsters, NPCs, treasure, cities, wilderness, and dungeons on the fly. Roll dice and consult the relevant table whenever you need instant content.

**Licence:** CC BY 4.0. Attribution: Maze Rats, Ben Milton (questingblog.com).

### How to Use the Tables

Most tables have 36 entries, organized in the source as 6 groups of 6. Roll 2d separately: the first die selects a group, the second selects an item within that group. A uniform 1d36 pick (or shuffling the list and drawing one) produces an identical distribution over the same entries, and is the simplest way to use these tables digitally.

Some entries reference another table in curly braces, e.g. `{animal}` — roll on that table instead of reading the literal text.

A few source tables have 34, 35, 37, or 38 entries rather than exactly 36. Where this happens, each table's `count_note` field states the actual count. These are preserved exactly as they appear in the source rather than padded or trimmed to a round number.

### Table Files

| File | Categories |
|------|------------|
| `magic.json` | Ethereal/Physical Effects, Elements, Forms · Spells (formula) · Mutations · Insanities · Omens |
| `monsters-animals.json` | Aerial/Terrestrial/Aquatic Animals · Monster Features, Traits, Abilities, Tactics, Personalities, Weaknesses |
| `characters.json` | NPC roles and names · Assets, Liabilities, Goals, Misfortunes, Missions, Methods · Appearance, Personality, Mannerism, Secrets, Reputation, Hobbies, Relationships, Divine Domains |
| `treasure-equipment.json` | Misc/Worn/Weapon/Tool Items · Book Subjects · Potions · Magic Ingredients · Treasure Items and Traits · Valuable Materials |
| `city.json` | City Themes and Events · District Themes · Upper/Lower Class Buildings · City Activities · Building Rooms · Street/Building Features · Factions · Inn Names, Adjectives, Nouns, Quirks |
| `wild.json` | Wilderness Regions, Landmarks, Structures, Region Traits, Discoveries, Activities, Hazards · Edible/Poisonous Plants |
| `maze.json` | Dungeon Entrances, Forms, Layouts, Ruinations, Rewards, Activities, Rooms, Room Details, Tricks, Hazards · Trap Effects and Triggers |

Each file follows the [table schema](schema.json).

### AI DM Integration

Table results feed directly into narrative generation, the same pattern used for Ironsworn/Starforged oracles:

1. Roll table(s) relevant to the situation (e.g. `wilderness-discoveries`, `dungeon-rooms`).
2. Pass the result(s) to the AI with context (current scene, location, party).
3. AI generates narration that incorporates the result naturally.

Example prompt: `"The party explores a ruined temple. Table: dungeon-room-details = Fading murals. Table: dungeon-hazards = Sinkhole. Generate a vivid room description."`
