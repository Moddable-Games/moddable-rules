---
title: "Hex Chess Notation Guide"
slug: notation
parent: hex-chess
published: false
---

## Hex Chess Notation Guide

Hexagonal chess boards use algebraic notation adapted for the hex grid. This guide covers the coordinate system and move notation for all six variants.

### Board Layout and Files

| Variant | Cells | Files | File labels |
|---------|-------|-------|-------------|
| Gliński | 91 | 11 | a–k |
| McCooey | 91 | 11 | a–k |
| Shafran | 70 | 9 | a–i |
| De Vasa | 81 | 9 | a–i (horizontal) |
| Brusky | 84 | 10 | a–j (horizontal) |
| Mini Hexchess | 37 | 7 | a–g |

### Algebraic Notation (91-hex boards)

Files run left to right (a through k). Ranks increase away from each player. The center file has the most ranks; corner files are shortest. White occupies the lower ranks, Black the upper ranks.

Examples: `e1` for White's Queen starting square in Gliński. `f3` for a Bishop after one move. `Nf5` for a Knight moving to f5.

### Axial Coordinate Formula

For engine representation, hexes use axial coordinates with the center at (q=0, r=0). File letters map to axial q as follows for 91-hex boards:

```
a=−5, b=−4, c=−3, d=−2, e=−1, f=0, g=+1, h=+2, i=+3, j=+4, k=+5
```

Conversion between algebraic rank and axial r:

```
axial_r = 6 − rank − max(0, axial_q)
rank    = 6 − axial_r − max(0, axial_q)
```

This formula is verified against the full 91-hex board (both pawn rows, 18 cells).

### Move Notation

Move notation follows standard chess algebraic notation:

- Piece abbreviation + destination square: `Qe1` (Queen to e1)
- Capture: `Bxf3` (Bishop captures on f3)
- Pawn move: file + rank, e.g. `e4`
- Pawn double step: `e4-e6` or simply `e6` (destination only)
- Check: `+` suffix. Checkmate: `#` suffix.

### Directions on a Hex Grid

A regular hexagon with flat-top orientation has six edge-sharing neighbours and six corner-sharing neighbours.

- **Orthogonal (rook) directions:** 6 directions, through shared edges.
- **Diagonal (bishop) directions:** 6 directions, through shared corners. Three colour-preserving diagonals and three colour-changing diagonals exist at each hex, depending on the colouring scheme used.

Gliński pawns capture orthogonally (through shared edges). McCooey, Shafran, De Vasa, Brusky, and Mini Hexchess pawns capture diagonally (through shared corners).

### Colours and Bishops

On most hexagonal boards, three colours alternate across the grid. Each Bishop is restricted to cells of one colour, so each player has three Bishops covering three distinct colour sets. This is in contrast to standard chess, where two Bishops cover two colours.
