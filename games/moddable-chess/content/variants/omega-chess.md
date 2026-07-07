---
title: Omega Chess
slug: omega-chess
board: "10×10 + 4 corner wizard-cells"
players: "2"
parent: moddable-chess
win: Checkmate
special: "10×10 board with 4 special corner squares (Wizard squares). Adds Champion (R+N leap hybrid) and Wizard (B+Camel). Designed by Daniel MacDonald, 1992."
engine:
  topology:
    type: grid
    rows: 10
    cols: 10
    corner_cells: 4
  players: [white, black]
  notation: algebraic
published: false
status: stub
updated: 2026-07-07
---

## Omega Chess

Omega Chess was designed by Daniel MacDonald and published in 1992. It is played on a **10×10 board with four additional corner squares** — one at each corner, diagonally adjacent to the corner squares of the main board. Each player starts with a **Champion** and a **Wizard** in addition to the FIDE pieces.

*This file is a stub. The exact starting positions (particularly whether Wizards begin on the main back rank or in the corner squares) require verification from chessvariants.com/large.dir/omega.html (JavaScript-rendered; use Claude in Chrome). Do not publish until complete.*

### The Board

10×10 main board (files a–j, ranks 1–10) plus 4 corner squares (w1–w4), each diagonally adjacent to one corner of the main board. Only the Wizard can enter or exit these squares.

### New Pieces

**Champion (C):** Moves exactly 1 or 2 squares orthogonally, or exactly 2 squares diagonally, jumping over pieces. Combines the Wazir, Dabbaba, and Alfil leaps.

**Wizard (W):** Moves as a **Bishop** (diagonally any distance) or as a **Camel** (1+3 leap). Can enter and exit the corner Wizard squares.

### Rules

- **Pawns** promote on rank 10 (White) or rank 1 (Black). Promotion to Champion or Wizard is permitted.
- **Castling:** the King moves 3 squares toward the Rook.
- **Wizard squares:** only Wizards may enter them. Normal pieces cannot pass through.
- All standard chess rules (stalemate, repetition, 50-move) apply.

### Attribution

Omega Chess was designed by Daniel MacDonald (1992). Source: chessvariants.com/large.dir/omega.html.
