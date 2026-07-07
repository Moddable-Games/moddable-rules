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
published: false
status: stub
updated: 2026-07-07
---

## Raumschach

Raumschach (German: "Space Chess") is the most historically significant three-dimensional chess variant. It was invented by Ferdinand Maack in 1907 and played in Germany until the 1920s. It is played on a **5×5×5 cube** — five 5×5 boards stacked vertically — and adds a unique new piece, the **Unicorn**, which moves along the three-dimensional diagonal.

*This file is a stub. The exact starting position and 3D FEN letter assignments require verification from chessvariants.com/3d.dir/spatial.html (JavaScript-rendered; use Claude in Chrome). Do not publish until complete.*

### The Board

Five 5×5 boards labeled A (bottom) through E (top). Squares are identified by file (a–e), rank (1–5), and level (A–E). For example, a3B is file a, rank 3, level B.

### Pieces

The following movements are mathematically derivable from the 3D grid geometry and are not in dispute:

| Piece | Symbol | Moves |
|---|---|---|
| King | K | One step in any of up to 26 directions (all combinations of ±1 on each of 3 axes) |
| Queen | Q | Slides on orthogonals, face-diagonals, and triagonals |
| Rook | R | Slides orthogonally (6 directions: ±file, ±rank, ±level) |
| Bishop | B | Slides on the 12 face-diagonals (changes 2 coordinates simultaneously) |
| Unicorn | U | Slides on the 8 triagonals (changes all 3 coordinates simultaneously by ±1) |
| Knight | N | Standard L-shape jump within a single level |
| Pawn | P | Advances toward the opponent; promotes on reaching the far end |

**No castling.** Standard chess rules otherwise adapted for 3D geometry.

### Attribution

Raumschach was invented by Ferdinand Maack (1907). Source: chessvariants.com/3d.dir/spatial.html.
