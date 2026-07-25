---
title: "Ironsworn"
version: "0.1.0"
slug: "ironsworn"
players: "1–4"
duration: "60–240 min"
age: "14+"
tagline: "A perilous quest through the Ironlands, guided by vows and oracle tables"
type: "rpg"
status: "live"
updated: "2026-07-04"
published: true
variants: false
how_to_play: "Roll action dice against challenge dice to resolve moves. Characters are bound to sworn vows, face peril, and mark progress. Plays solo, cooperatively, or with a guide. Oracle tables generate narrative."
mechanics: [dice, narrative, exploration, combat, oracle, solo, cooperative]
complexity: moderate
related: [starforged, cairn, dungeon-world, fate-core]
theme:
  surface: light
  tint: warm
  texture: none
  cover: cosmic
  typography: modern
  accent: blue
  section-divider: "✶"
engine:
  topology:
    type: none
  content:
    source: data/
    schema:
      type: category-list
---

<div class="section">

## Ironsworn

A tabletop roleplaying game by Shawn Tomkin set in the mythic dark fantasy world of the Ironlands. Players take on the role of Ironsworn, heroes bound to sworn vows who face peril, make allies, and explore a dangerous frontier. Ironsworn plays solo, cooperatively, or with a guide (GM).

**Licence:** Creative Commons Attribution 4.0 International (CC BY 4.0).
**Attribution:** Ironsworn is created by Shawn Tomkin and licensed under the Creative Commons Attribution 4.0 International License.

</div>

<div class="section">

### Core Rules

- [Stats and Tracks](rules/stats/) — The Basics: stats, action rolls, momentum, progress tracks, harm, stress, assets, oracles, bonds
- [Your Character](rules/vows/) — Vows, bonds, debilities, experience, character creation
- [Moves](rules/moves/) — All moves: Adventure, Relationship, Combat, Suffer, Quest, Fate
- [Combat](rules/combat/) — Enter the Fray, Strike, Clash, Turn the Tide, End the Fight, Battle
- [Foes and Encounters](rules/foes/) — NPC components, packs, creating encounters
- [Character Sheet](rules/character-sheet/) — Blank character sheet (printable) with interactive generator

</div>

<div class="section">

### Oracle Tables

Roll dice and consult for narrative inspiration. Machine-readable JSON:

- [action.json](../../games/ironsworn/oracles/action.json) · [theme.json](../../games/ironsworn/oracles/theme.json) · [combat-action.json](../../games/ironsworn/oracles/combat-action.json)
- [major-plot-twist.json](../../games/ironsworn/oracles/major-plot-twist.json) · [challenge-rank.json](../../games/ironsworn/oracles/challenge-rank.json) · [pay-the-price.json](../../games/ironsworn/oracles/pay-the-price.json)
- [schema.json](../../games/ironsworn/oracles/schema.json)

</div>

<div class="section">

### Moves and Assets (Machine-Readable)

Structured JSON data for game tools and digital character sheets:

- [moves.json](../../games/ironsworn/rules/moves.json) — All moves (Adventure, Relationship, Combat, Suffer, Quest, Fate)
- [companion.json](../../games/ironsworn/rules/assets/companion.json) — Companion assets (Cave Lion, Giant Spider, Hawk, Horse, Hound, Kindred, Mammoth, Owl, Raven, Young Wyvern)
- [path.json](../../games/ironsworn/rules/assets/path.json) — Path assets (Alchemist, Animal Kin, Banner-Sworn, and 25 more)
- [combat-talent.json](../../games/ironsworn/rules/assets/combat-talent.json) — Combat Talent assets (Archer, Berserker, Brawler, and 11 more)
- [ritual.json](../../games/ironsworn/rules/assets/ritual.json) — Ritual assets (Augur, Awakening, Bind, and 13 more)

</div>
