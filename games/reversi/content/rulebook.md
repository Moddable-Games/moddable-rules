---
title: "Reversi — Official Rulebook"
version: "0.1.0"
slug: "reversi"
players: "2"
duration: "10–30 min"
age: "7+"
tagline: "Flip your opponent's discs to claim the board"
type: "classic"
status: "live"
updated: "2026-06-19"
published: true
variants: true
theme:
  surface: light
  tint: neutral
  texture: none
  cover: minimal
  typography: classical
  accent: blue
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  surface: felt-green
  render:
    cellSize: 40
    cellColor: uniform
    labels: true
    ops:
      - op: rect
        fill: "#2e7d32"
        scope: board
      - op: grid-lines
        grouped: false
        order: vh
        color: "#1b5e20"
        width: 1.5
      - op: hit-targets
        shape: rect
  pieces:
    set: playstrategy-flipello-classic
    vocabulary:
      b: bP
      w: wP
  players: [black, white]
how_to_play: "Place discs to flank and flip opponent pieces. Valid moves must flip at least one enemy disc by trapping it between your new disc and an existing one. The player with the most discs when no legal moves remain wins."
mechanics:
  - placement
  - flipping
  - territory
  - blocking
complexity: simple
related:
  - go
  - agon
  - morris
---

<div class="section">

## Reversi

Reversi is a two-player abstract strategy game played on a grid board with double-sided discs. Players take turns placing discs to flank and flip their opponent's pieces. The player with the most discs when no legal moves remain wins.

Invented by Lewis Waterman and John Mollett in England around 1883. Public domain. World Reversi Championships have been held annually since 1977.

### Variants

<div class="variant-grid">

- [Standard](variants/standard/) — The original 8×8 game as played in international competition
- [6×6](variants/six-by-six/) — Smaller board for quicker games; same rules throughout
- [Anti-Reversi](variants/anti-reversi/) — Misère: the player with the fewest discs wins

</div>

</div>
