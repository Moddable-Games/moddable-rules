---
title: "Maze Rats"
version: "0.1.0"
slug: "maze-rats"
players: "2–5"
duration: "60–180 min"
age: "12+"
tagline: "A minimalist toolkit for old-school-style sandbox adventuring"
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
  accent: green
  section-divider: "✶"
how_to_play: "Roll dice and consult procedural tables to generate characters, spells, monsters, NPCs, treasure, cities, wilderness, and dungeons on the fly. One Game Master guides players through sandbox adventures using a single compact page of rules."
mechanics:
  - dice-rolling
  - procedural-generation
  - sandbox
  - gm-tools
  - story-tables
complexity: simple
related:
  - dnd-5e
  - cairn
  - knave
engine:
  topology:
    type: none
  content:
    source: data/
    schema:
      type: category-list
---

<div class="section">

## Maze Rats

An RPG and sandbox toolkit for old-school-style adventuring, by Ben Milton. Maze Rats contains a single, compact page of rules, a one-page character creation guide, and hundreds of procedural tables for generating spells, monsters, NPCs, treasure, cities, wildernesses, and dungeons on the fly. It plays with one Game Master (GM) and any number of players.

**Licence:** Creative Commons Attribution 4.0 International (CC BY 4.0).
**Attribution:** Maze Rats is created by Ben Milton (questingblog.com) and licensed under the Creative Commons Attribution 4.0 International License.

</div>

<div class="section">

### Core Rules

- [Core Rules](rules/core-rules/) — Danger Rolls, Advantage, NPC Reactions, Initiative, Combat, NPC Morale, Healing, Encumbrance, Leveling Up
- [Character Creation](rules/character-creation/) — the 12-step process, starting gear, and generating/casting spells
- [Character Sheet](rules/character-sheet/) — Blank character sheet (printable) with interactive generator

</div>

<div class="section">

### Procedural Tables

Roll dice and consult for instant content: monsters, NPCs, treasure, cities, wilderness, dungeons, and more. Machine-readable JSON, organized to match the book's own sections:

- [magic.json](../../games/maze-rats/data/magic.json) — spell formulas, mutations, insanities, omens
- [monsters-animals.json](../../games/maze-rats/data/monsters-animals.json) — animals, monster features, traits, abilities, tactics
- [characters.json](../../games/maze-rats/data/characters.json) — NPCs, names, personalities, goals, secrets
- [treasure-equipment.json](../../games/maze-rats/data/treasure-equipment.json) — items, potions, ingredients, treasure
- [city.json](../../games/maze-rats/data/city.json) — city themes, districts, buildings, factions, inns
- [wild.json](../../games/maze-rats/data/wild.json) — wilderness regions, landmarks, hazards, plants
- [maze.json](../../games/maze-rats/data/maze.json) — dungeon forms, layouts, rooms, traps

See the [tables index](../../games/maze-rats/data/index.md) for the full list and how to use them.

</div>
