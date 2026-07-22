---
title: "Dungeon World"
version: "0.1.0"
slug: "dungeon-world"
players: "2-5"
duration: "varies"
age: "13+"
tagline: "Powered by the Apocalypse fantasy dungeon-crawling, fiction-first play"
type: "rpg"
status: "live"
updated: "2026-07-22"
published: true
variants: false
theme:
  surface: light
  tint: warm
  texture: none
  cover: cosmic
  typography: modern
  accent: red
  section-divider: "⚔"
engine:
  topology:
    type: none
  content:
    source: data/
    schema:
      type: category-list
---

<div class="section">

## Dungeon World

Dungeon World is a tabletop RPG by Sage LaTorra and Adam Koebel that applies the Powered by the Apocalypse (PbtA) engine, originated by D. Vincent Baker's *Apocalypse World*, to fantasy dungeon-crawling. Instead of a GM adjudicating a rules simulation, players and GM narrate the fiction first; when a character's action fits a move's trigger, the player rolls 2d6 and the result (10+, 7-9, 6-) determines the outcome in evocative, fiction-forward language. The GM never rolls dice — instead they make moves of their own, following an explicit agenda and set of principles.

**Licence:** Creative Commons Attribution 3.0 Unported (CC BY 3.0).
**Attribution:** Dungeon World is created by Sage LaTorra and Adam Koebel. Content sourced from the authors' own GitHub repository (`Sagelt/Dungeon-World`), the canonical text of the book.

</div>

<div class="section">

### Rules

**Getting Started**

- [Introduction](rules/introduction/) — What Dungeon World is, per-class flavor, how to use the book, setting up a session
- [Playing the Game](rules/playing-the-game/) — Ability scores, making moves, harm and healing, magic, leveling up, bonds, alignment, hirelings
- [Basic Moves](rules/basic-moves/) — Hack and Slash, Volley, Defy Danger, Defend, Spout Lore, Discern Realities, Parley, Aid or Interfere, with worked examples
- [Special Moves](rules/special-moves/) — Last Breath, Encumbrance, Make Camp, Take Watch, Undertake a Perilous Journey, End of Session, Level Up, Carouse, Supply, Recover, Recruit, Outstanding Warrants, Bolster
- [Character Creation](rules/character-creation/) — The 13-step process, ability score modifiers, worked example

**Classes**

- [Bard](rules/bard/) — Arcane Art, Bardic Lore, Charming and Open, A Port in the Storm
- [Cleric](rules/cleric/) — Deity, Divine Guidance, Turn Undead, Commune, Cast a Spell, full spell list
- [Druid](rules/druid/) — Born of the Soil, Shapeshifter, Spirit Tongue, Studied Essence
- [Fighter](rules/fighter/) — Bend Bars Lift Gates, Armored, Signature Weapon
- [Paladin](rules/paladin/) — Lay on Hands, I Am the Law, Quest
- [Ranger](rules/ranger/) — Hunt and Track, Called Shot, Animal Companion, Command
- [Thief](rules/thief/) — Trap Expert, Tricks of the Trade, Backstab, Poisoner
- [Wizard](rules/wizard/) — Spellbook, Prepare Spells, Cast a Spell, Ritual, full spell list

**Running the Game**

- [The GM](rules/the-gm/) — Agenda, principles, GM moves, dungeon moves, dealing with common situations
- [Fronts](rules/fronts/) — Dangers, grim portents, impending dooms, stakes, a worked example front
- [The World](rules/the-world/) — Steadings, campaign maps, steading tags, making villages/towns/keeps/cities
- [First Session](rules/first-session/) — Prep, getting started, the first adventure, GM goals
- [Example of Play](rules/example-of-play/) — An annotated play transcript from a goblin ambush
- [Advanced Delving](rules/advanced-delving/) — Hacking the game: custom moves, new classes, compendium classes, adventure moves, monster hacking

**Equipment**

- [Equipment](rules/equipment/) — Tags, weapons, armor, dungeon gear, poisons, services, magic items

**Bestiary**

- [Monsters](rules/monsters/) — Monster tags, making monsters, treasure, the nine monster settings

**Appendices**

- [Adventure Conversion](rules/conversion/) — Converting published adventures and other-system monsters to Dungeon World
- [Instant NPCs](rules/instant-npcs/) — 100 instincts, 100 knacks, and a name list for improvised NPCs
- [Teaching the Game](rules/teaching-the-game/) — Pitching the game, presenting classes, running a first session
- [Character Sheet](rules/character-sheet/) — Blank character sheet (printable) with interactive generator

</div>

<div class="section">

### Machine-Readable Data

Structured JSON, sourced from `Sagelt/Dungeon-World` (CC BY 3.0).

- [classes.json](../../games/dungeon-world/data/classes.json) — Full class data: starting moves, advanced moves (2-5 and 6-10), races, alignments, bonds, gear, names
- [moves.json](../../games/dungeon-world/data/moves.json) — 21 basic and special moves with triggers and outcomes
- [cavern-dwellers.json](../../games/dungeon-world/data/cavern-dwellers.json) — Goblins, ankhegs, gargoyles, purple worms, and other cave and tunnel dwellers
- [lower-depths.json](../../games/dungeon-world/data/lower-depths.json) — Aboleths, dragons, minotaurs, nagas, and the deep-dwelling terrors of ancient ruins
- [twisted-experiments.json](../../games/dungeon-world/data/twisted-experiments.json) — Chimeras, golems, manticores, owlbears, and other creations of arcane hubris
- [folk-of-the-realm.json](../../games/dungeon-world/data/folk-of-the-realm.json) — Bandits, knights, nobles, spies, and the ordinary (and not-so-ordinary) people of the world
- [ravenous-hordes.json](../../games/dungeon-world/data/ravenous-hordes.json) — Formians, gnolls, orcs, and tritons organized for war and conquest
- [planar-powers.json](../../games/dungeon-world/data/planar-powers.json) — Angels, devils, djinn, and the other creatures that slip through from beyond this world
- [swamp-denizens.json](../../games/dungeon-world/data/swamp-denizens.json) — Basilisks, hydras, lizardmen, trolls, and the rot and ruin of the fens
- [undead-legions.json](../../games/dungeon-world/data/undead-legions.json) — Ghosts, liches, vampires, zombies, and the many shapes death's magic takes
- [dark-woods.json](../../games/dungeon-world/data/dark-woods.json) — Centaurs, dryads, treants, werewolves, and the sylvan monsters of the ancient forest

</div>
