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
  pieces:
    set: playstrategy-flipello-classic
  players: [black, white]
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
