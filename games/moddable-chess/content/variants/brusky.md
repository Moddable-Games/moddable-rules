---
title: Brusky's Hexagonal Chess
slug: brusky
board: "84 hexes (horizontal, 10 files)"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Horizontal 84-hex board. 10 pawns per side. Unmoved pawns may also capture straight forward. Blockage rule applies. Invented Yakov Brusky."
engine:
  topology:
    type: hex
    cells: 84
    orientation: horizontal
    files: 10
  surface: wood-classic
  render:
    cellSize: 20
    cellColor: tricolor
    frame: true
  pieces:
    set: mce-fairy-complete
  players: [white, black]
  setup: "-1,0:q,-1,1:p,-1,6:P,-1,7:B,-2,0:b,-2,1:p,-2,6:P,-2,7:B,-3,0:n,-3,1:p,-3,6:P,-3,7:K,-4,0:r,-4,1:p,-4,6:P,-4,7:Q,-5,1:p,-5,6:P,-5,7:B,-6,6:P,-6,7:N,-7,6:P,-7,7:R,0,0:k,0,1:p,0,6:P,0,7:N,1,0:b,1,1:p,1,6:P,1,7:R,2,0:b,2,1:p,2,6:P,3,0:n,3,1:p,4,0:r,4,1:p"
published: true
---

## Brusky's Hexagonal Chess

Invented by Yakov Brusky. Played on an 84-hex horizontal board with 10 files and 10 pawns per side. Introduces an expanded pawn capture option for unmoved pawns.

### Setup

**Board:** 84-hex irregular hexagonal grid, horizontally oriented. 8 ranks with widths 9, 10, 11, 12, 12, 11, 10, 9 (bottom to top). Files a–i on the back ranks, expanding to a–l in the middle ranks.

**White pieces (rank 1, bottom):**
- King on f1
- Queen on d1
- Bishops on c1, e1, g1 (one per colour)
- Knights on b1, h1
- Rooks on a1, i1
- Pawns on a2, b2, c2, d2, e2, f2, g2, h2, i2, j2 (10 pawns on rank 2)

**Black pieces (rank 8, top — mirrored):**
- King on d8
- Queen on f8
- Bishops on c8, e8, g8 (one per colour)
- Knights on b8, h8
- Rooks on a8, i8
- Pawns on a7, b7, c7, d7, e7, f7, g7, h7, i7, j7 (10 pawns on rank 7)

{{svg:brusky-board.svg "Brusky's Hexagonal Chess — starting position"}}

### Castling

Castling is permitted. The King slides two cells toward the Rook (short) or three cells (long).

### Pawns

Pawns move one cell straight forward. They capture one cell diagonally forward.

An unmoved pawn has a third option: it may capture one cell **straight forward** (the direction of its non-capturing move). This gives unmoved pawns three distinct capture directions.

**Blockage rule:** a pawn blocked by an enemy piece in one of its forward directions is considered blocked in both forward directions. The blocked pawn cannot move straight forward even if the other forward path is clear.

A pawn on its starting rank may make an initial double step. En passant applies. Draws score 1/2 to each player.

### Rules

Identical to standard chess adapted for the hex grid except as noted.

### Win Condition

Checkmate.

### Attribution

Yakov Brusky. Public domain rules.
