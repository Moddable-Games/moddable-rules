---
title: Raumschach
slug: raumschach
board: "5×5×5"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Three-dimensional chess on a 5×5×5 cube. Invented by Ferdinand Maack (1907). Adds the Unicorn piece (moves through cube corners, triagonal). No special rules for the third axis — standard chess rules applied to 3D geometry."
engine:
  topology:
    type: grid-3d
    rows: 5
    cols: 5
    levels: 5
  players: [white, black]
  notation: algebraic-3d
published: true
---

## Raumschach

Raumschach (German: "Space Chess") is the most historically significant three-dimensional chess variant. It was invented by Ferdinand Maack in 1907 and played in Germany until the 1920s. It is played on a **5×5×5 cube** — five 5×5 boards stacked vertically — and adds a unique new piece, the **Unicorn**, which moves along the three-dimensional diagonal.

### The Board

Five 5×5 boards labeled A (bottom) through E (top). Squares are identified by file (a–e), rank (1–5), and level (A–E). For example, a3B is file a, rank 3, level B.

### Starting Position

**White (levels A and B):**

- Level A (rank 1): Rook(a1A) · Knight(b1A) · King(c1A) · Knight(d1A) · Rook(e1A)
- Level A (rank 2): Bishop(a2A) · Unicorn(b2A) · Queen(c2A) · Unicorn(d2A) · Bishop(e2A)
- Level B (ranks 1–2): 10 Pawns covering b-d files

> **Verification note:** Confirm exact White and Black starting positions from chessvariants.com/3d.dir/spatial.html. The layout above is the commonly cited one; variations exist in print editions.

**FEN (3D notation):** Not universally standardized. Record board state by level:
- Level A: `rnknnr/bumbub/5/5/5` (bottom)
- Level B: `PPPPP/PPPPP/5/5/5` (White pawns)
- Level D: `5/5/5/ppppp/ppppp` (Black pawns)
- Level E: `BUMBUB/RNKNNR/5/5/5` (top, reversed for Black)

*(R = Rook, N = Knight, K = King, Q = Queen, B = Bishop, U/u = Unicorn, M = ? — confirm exact letter assignments.)*

### Pieces

| Piece | Symbol | Moves |
|---|---|---|
| King | K | One step in any of 26 directions (all combinations of ±1 on each of 3 axes) |
| Queen | Q | Slides on orthogonals, diagonals (2D), and triagonals (3D) |
| Rook | R | Slides orthogonally (6 directions: ±x, ±y, ±z) |
| Bishop | B | Slides on the 12 face-diagonals (2D diagonals within same level or through levels staying on same file/rank) |
| Unicorn | U | Slides on the 8 triagonals — simultaneously changes all three coordinates by ±1 (corner diagonals of the cube) |
| Knight | N | Standard L-shape jump, within a single level |
| Pawn | P | Moves one square forward (increasing level for White, decreasing for Black); captures diagonally forward on the same level |

**Promotion:** Pawns promote upon reaching level E (White) or level A (Black).

**No castling.** Standard chess rules otherwise adapted for 3D geometry.

### Attribution

Raumschach was invented by Ferdinand Maack (1907). Rules documented from chessvariants.com/3d.dir/spatial.html.
