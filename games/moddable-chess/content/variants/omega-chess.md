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
published: true
---

## Omega Chess

Omega Chess was designed by Daniel MacDonald and published in 1992. It is played on a **10×10 board with four additional corner squares** — one at each corner, diagonally adjacent to the corner squares of the main board. These extra squares are called **Wizard squares**. Each player starts with a **Champion** and a **Wizard** in addition to the FIDE pieces.

### The Board

10×10 main board (files a–j, ranks 1–10) plus 4 corner squares:
- **w1** (below-left of a1)
- **w2** (below-right of j1)
- **w3** (above-left of a10)
- **w4** (above-right of j10)

The Wizard squares are only diagonally adjacent to the a1, j1, a10, and j10 corners respectively. Only the **Wizard** can enter or exit these squares (in addition to Kings on their initial move — verify).

### New Pieces

**Champion (C):** Moves exactly 1 or 2 squares orthogonally, or exactly 2 squares diagonally (without direction restriction) — combining the Wazir, Dabbaba, and Alfil leaps. It jumps over pieces. Equivalent to combining several fairy leapers.

**Wizard (W):** Moves as a **Bishop** (diagonally any distance) or as a **Camel** (1+3 leap, the elongated knight). The Wizard can enter and exit the corner Wizard squares.

### Setup

**White (ranks 1–2):**
- Rank 1 (left to right): Wizard(a) · Rook(b) · Knight(c) · Bishop(d) · Champion(e) · Queen(f) · King(g) · Bishop(h) · Knight(i) · Rook(j) · Wizard(k)
- Wizard squares (below corners): Wizard pieces start on the w1 and w2 corner squares
- Rank 2: 10 Pawns (a2–j2)

> **Verification note:** Confirm exact starting positions from chessvariants.com. The Champion and Wizard starting squares, and whether Wizards start on the corner squares or on the back rank, vary in sources. Confirm from chessvariants.com/large.dir/omega.html.

**FEN (standard 10×10 main board only):** `wr/nb/ic/bd/ce/qf/kg/bh/ni/rj/wr` per rank notation varies — use a notation that supports the corner squares.

### Rules

- **Pawns** promote on rank 10 (White) or rank 1 (Black). Promotion to Champion or Wizard is permitted.
- **Castling:** the King moves 3 squares toward the Rook. Standard conditions apply.
- **Wizard squares:** only Wizards (and per some rules, Kings) may enter them. Normal pieces cannot pass through corner squares.
- All standard chess rules (stalemate, repetition, 50-move) apply.

### Attribution

Omega Chess was designed by Daniel MacDonald (1992). Rules documented from chessvariants.com/large.dir/omega.html.
