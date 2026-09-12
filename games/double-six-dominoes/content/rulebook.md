---
title: "Double-Six Dominoes"
short_title: "D6 Dominoes"
version: "0.1.1"
slug: "double-six-dominoes"
players: "2–8"
duration: "15–60 min"
age: "7+"
tagline: "Match the pips, build the chain, score the ends"
type: "component"
status: "live"
updated: "2026-07-21"
published: true
hub_type: component
how_to_play: "The double-6 domino set (28 tiles) supports 4 games: Block, All Fives, Mexican Train, and Chickenfoot. All involve matching pip values and extending a chain."
mechanics: [tile-placement, pattern, set-collection, hand-management]
complexity: simple
related: [standard-52, mahjong, standard-dice]
theme:
  surface: light
  tint: neutral
  texture: none
  cover: cosmic
  typography: modern
  accent: slate
  section-divider: "▬"
engine:
  topology:
    type: none
  surface: felt-green
  pieces:
    set: dominoes-classic
  components:
    deck:
      type: dominoes-28
    layout:
      type: fan
  players: [south, north]
unsupported:
  _family: "No rules plugin. The 28-tile set renders, and nothing draws from the boneyard, matches an end or scores."
  all-fives: "No plugin. Block plus scoring whenever the open ends total a multiple of five, so the score is a function of the shape of the line rather than of the move that was just made."
  block: "No plugin. Needs a line of play with two open ends, matching pips to an end, and the blocked game where nobody can play and the lowest remaining pip count wins."
  chickenfoot: "No plugin. Needs the branching layout a double creates: three arms that must all be filled before play continues anywhere else, so the tableau changes shape as it is played."
  mexican-train: "No plugin. Needs a train per player plus a public train, trains that open to everyone when their owner cannot play, and the doubles rule that forces the next play - per-seat structures on a shared table."
---

<div class="section">

## Double-Six Dominoes

Games using the standard Western double-6 domino set. Dominoes are tile-matching games: players extend a chain by playing tiles whose pip values match the open ends of the layout.

### The Double-6 Set (28 tiles)

28 tiles covering every combination of two values from 0 to 6 (including doubles). Each tile is called a **bone**. Tiles with the same pip on both halves are **doubles**.

| Component | Detail |
|---|---|
| Tiles (bones) | 28 (0-0 through 6-6) |
| Pip range | 0-6 per half |
| Doubles | 7 (0-0, 1-1, 2-2, 3-3, 4-4, 5-5, 6-6) |
| Total pips | 168 |
| Boneyard | Remaining tiles after deal, drawn from face-down |

Mexican Train uses the double-12 set (91 tiles, pips 0-12) for larger player counts.

</div>

<div class="section">

## Games

- [All Fives](games/all-fives/) — Block with scoring. Score when open ends sum to a multiple of 5. First to 61 or 121.
- [Block](games/block/) — The foundation game. Match ends, no drawing from the boneyard. First to empty hand or block opponent wins.
- [Chickenfoot](games/chickenfoot/) — Each double creates a branching chickenfoot (3 open ends) that must be filled before normal play resumes. 2–8 players.
- [Mexican Train](games/mexican-train/) — Hub-and-spokes layout using double-12 set. Build personal trains from the central double. A shared Mexican Train is always open.

</div>

<div class="section">

## Attribution

All games in this hub are public domain. Individual attribution in each game entry.

</div>
