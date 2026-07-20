---
title: "Starforged"
version: "0.1.0"
slug: "starforged"
players: "1–4"
duration: "60–240 min"
age: "14+"
tagline: "A perilous journey through the Forge, guided by moves and oracle tables"
type: "rpg"
status: "live"
updated: "2026-07-19"
published: true
variants: false
theme:
  surface: light
  tint: cool
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

## Ironsworn: Starforged

A tabletop roleplaying game by Shawn Tomkin, set in the Forge — a chaotic, unexplored galaxy of dangerous frontiers, ancient mysteries, and desperate settlements. Players take on the role of spacefaring Ironsworn, bound to sworn vows, piloting starships and forging their own path across the stars. Starforged plays solo, cooperatively, or with a guide (GM).

**Licence:** Creative Commons Attribution 4.0 International (CC BY 4.0).
**Attribution:** Ironsworn: Starforged is created by Shawn Tomkin and licensed under the Creative Commons Attribution 4.0 International License.

</div>

<div class="section">

### Core Rules

- [The Basics](rules/basics/) — The action roll, momentum, progress tracks, condition meters, impacts, equipment, and oracles
- [Your Character](rules/character/) — Stats, condition meters, momentum, assets, vehicles, legacy tracks, and character creation
- [Moves](rules/moves/) — All 56 moves across 12 categories: Session, Adventure, Quest, Connection, Exploration, Combat, Suffer, Recover, Threshold, Legacy, Fate, Scene Challenge
- [Setting Truths](rules/truths/) — 14 categories that define your campaign's history, culture, and technology
- [Encounters](rules/encounters/) — 23 sample NPCs, creatures, machines, and horrors for GMs to draw on
- [Vehicle Assets](rules/assets-vehicles/) — Command vehicles and support vehicles
- [Deed Assets](rules/assets-deed/) — Earned through play, not chosen at creation
- [Companion Assets](rules/assets-companion/) — Allies, pets, bots, and symbiotes
- [Module Assets](rules/assets-module/) — Starship upgrades and add-ons
- [Path Assets](rules/assets-path/) — All 46 character specializations, from Ace to Weapon Master
- [Oracle Tables](rules/oracles/) — Randomness and creative prompts (Core and Campaign Launch categories so far; more to come)

More oracle categories are in progress and will be added here as each is completed.

</div>

<div class="section">

### Rules Data

Machine-readable JSON for tools and widgets:

- [moves.json](../../games/starforged/moves/moves.json) — structured moves data: typed triggers, roll options, and strong/weak/miss outcomes
- [rules.json](../../games/starforged/rules/rules.json) — condition meters, impacts, progress tracks, stats, and tags
- [truths.json](../../games/starforged/rules/truths.json) — the 14 setting truth categories, their options, and quest starters
- [encounters.json](../../games/starforged/rules/encounters.json) — the 23 sample NPCs, their features, drives, tactics, and variants
- [command-vehicle.json](../../games/starforged/rules/assets/command-vehicle.json) / [support-vehicle.json](../../games/starforged/rules/assets/support-vehicle.json) — vehicle assets
- [deed.json](../../games/starforged/rules/assets/deed.json) — deed assets
- [companion.json](../../games/starforged/rules/assets/companion.json) — companion assets
- [module.json](../../games/starforged/rules/assets/module.json) — module assets
- [path-1.json](../../games/starforged/rules/assets/path-1.json), [path-2.json](../../games/starforged/rules/assets/path-2.json), [path-3.json](../../games/starforged/rules/assets/path-3.json), [path-4.json](../../games/starforged/rules/assets/path-4.json) — path assets (split across 4 files, 46 assets total)
- [core.json](../../games/starforged/oracles/core.json) — Action, Theme, Descriptor, Focus
- [campaign-launch.json](../../games/starforged/oracles/campaign-launch.json) — Background Assets, Backstory Prompts, Starship History, Starship Quirks, Sector Trouble, Inciting Incident

More oracle category JSON is in progress and will be added here as each is completed.

</div>
