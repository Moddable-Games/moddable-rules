---
title: "L'Attaque"
version: "0.4.0"
slug: "lattaque"
players: "2"
duration: "20–60 min"
age: "10+"
tagline: "Hidden-rank warfare — the original family that spawned Stratego"
type: "hub"
status: "live"
updated: "2026-07-08"
published: true
variants: true
how_to_play: "Hidden-information strategy where pieces have hidden ranks. Higher rank defeats lower when pieces meet. Win conditions vary by variant: capture the Flag, land on the Aerodrome, or get Flags to your Base."
mechanics: [hidden-information, grid, movement, combat, ranking, deduction]
complexity: moderate
related: [chess, xiangqi, shogi, dou-shou-qi]
theme:
  tint: cool
  texture: none
  cover: minimal
  typography: classical
  accent: navy
engine:
  topology:
    type: grid
    rows: 10
    cols: 9
  render:
    cellSize: 34
    cellColor: checkered
    labels: false
    zones:
      fill: floor
      cells:
        - type: lake
          at: [[4,2],[4,4],[4,6],[5,2],[5,4],[5,6]]
  surface:
    colors:
      floor: "#5a8a3a"
      floor-stroke: "#3d6b28"
      lake: "#4a7ab5"
      lake-stroke: "#2a5a8a"
  pieces:
    set: mce-lattaque
  players: [blue, red]
unsupported:
  _family: "No rules plugin, and the mechanic it is missing is the one the engine has least of: hidden identity. Every piece has a rank known only to its owner, and combat is resolved by comparing ranks on contact. The engine has no per-seat view of state - both players read the same slice - so there is nothing to hide a rank in."
  aviation: "Aviation additionally has ten unnumbered auxiliaries and a two-stage reveal - a Searchlight exposes a hidden piece before an anti-aircraft gun may engage it - so revelation is a move type of its own, not a consequence of contact."
  dover-patrol: "Dover Patrol additionally is capture-the-flag rather than elimination: a separate Flag piece must be seized and carried back to the player's own base, which needs a carried-piece state and a positional win condition."
  standard: "Beyond that it needs the rank table itself, with Mines beaten only by Sappers and the Spy beating the Commander-in-Chief only when the Spy attacks."
  tri-tactics: "Tri-Tactics additionally runs three services on one board with terrain that restricts which service may enter which cell, so movement legality depends on a terrain map as well as the piece."
---

# L'Attaque

L'Attaque is a hidden-information strategy game designed by Hermance Edan, patented in France in 1908 and first sold in 1910. H.P. Gibson & Sons acquired the rights in 1925 and published the game — and a family of themed variants — in Britain. All games in this hub share the same core system: pieces with hidden ranks, higher rank defeats lower, and a unique win objective per game.

## Variants in this Hub

| Variant | Players | Win Condition | Description |
|---|---|---|---|
| [Standard L'Attaque](variants/standard/) | 2 | Capture the opponent's Flag | Original 1909 rules; 36 pieces per side on a 9×10 board with three 1×2 lake areas. |
| [Dover Patrol](variants/dover-patrol/) | 2 | Get both Flags to your own Base | Naval CTF game; 40 pieces per side. Flying Boat crosses the Harbour Wall; Mine Layers are movable mines; Submarines sink all except Motor Torpedo Boats. |
| [Aviation](variants/aviation/) | 2 | Land a Troop Carrier on opponent's Aerodrome | 42 pieces including Searchlights, AAA Guns, and Observation Balloons. Searchlight + Gun ranging system. |
| [Tri-Tactics](variants/tri-tactics/) | 2 | Any of three service win conditions | 1932 combination of L'Attaque, Dover Patrol, and Aviation on a single board. |

### Attribution

L'Attaque. Invented by Hermance Edan, French patent 1908, and the ancestor of Stratego. Documented at en.wikipedia.org. Individual variant files cite the original printed rulebooks they were transcribed from. Public domain.
