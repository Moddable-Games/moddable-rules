---
title: "Nightrider Chess"
version: "0.1.0"
slug: "nightrider-chess"
players: "2"
duration: "20–60 min"
age: "10+"
tagline: "The knight that never stops — a leaper that rides in a straight line"
type: "game"
status: "alpha"
updated: "2026-07-03"
published: false
variants: true
theme:
  surface: light
  tint: cool
  texture: none
  cover: cosmic
  typography: modern
  accent: indigo
  section-divider: "♞"
---

<div class="section variant-hub">

## Nightrider Chess

A chess variant introducing the **Nightrider** (also called the Nightrider or ∞-Knight): a fairy chess piece that extends the knight's leap into a line rider. Where a standard knight jumps to one target square, a Nightrider can make a sequence of knight-moves in the same direction, landing on any square along that line — provided all intermediate squares are unoccupied.

The piece was defined by T. R. Dawson in 1925 and is implemented in Fairy-Stockfish, GNU Chess variants, and Green Chess.

### The Nightrider Piece

A Nightrider moves in a straight line of repeated knight-steps. Each step in the sequence follows the same (±1, ±2) or (±2, ±1) vector. The piece may stop at any square along the line; it is blocked by any piece (friendly or enemy) on an intermediate square.

**Example:** a Nightrider on e4 moving in the (1, 2) direction can land on f6, g8 (if f6 is clear). It cannot reach g8 if f6 is occupied.

Capture: the Nightrider captures by landing on a square occupied by an enemy piece, the same way a rook or bishop captures along their lines.

<div class="variant-grid">

- [Standard](variants/standard/) — Replace each knight with a Nightrider on a standard 8×8 board.

</div>

</div>
