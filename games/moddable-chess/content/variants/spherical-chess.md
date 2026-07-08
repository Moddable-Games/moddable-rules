---
title: Spherical Chess
slug: spherical-chess
board: "8×8 (played on flat board, spherical topology)"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Chess on a sphere — a surface with no edges and no corners, where ranks and files meet at poles. The standard 8×8 board is played with two wrapping rules: ranks wrap horizontally (left-right, as in Cylindrical Chess), and files meet at polar singularities where a piece crossing the pole continues four files away. Multiple documented versions from 1950–2014; this file documents the family and the most widely agreed rules. Bishops are colourbound. Knights have 8 possible moves from any position."
engine:
  topology:
    type: spherical
    rows: 8
    cols: 8
  players: [white, black]
  notation: algebraic
published: true
---

## Spherical Chess

Spherical Chess is a family of chess variants adapted to spherical topology — a surface with no edges, where all directions eventually curve back to their origin. Multiple independent inventors have designed spherical chess between 1950 and 2014. The variants share a common framework but differ in how the Bishop and Knight handle the polar singularities.

### The Board and Topology

Spherical Chess is played on a standard **8×8 board**, but the board is conceived as a sphere:

**Horizontal wrap (as in Cylindrical Chess):** Ranks loop back into themselves. The a-file connects to the h-file — a Rook moving right off the h-file reappears on the a-file at the same rank.

**Polar wrap:** The board does not wrap vertically in a simple torus manner. Instead, files are treated as **lines of longitude** that meet at the poles (rank 1 and rank 8). When a piece crosses a pole:
- A Rook moving forward off rank 8 continues from **rank 8 on the file four files away** (e.g., Ra3-a1-e1-e4)
- The shift is always exactly **4 files** (half the board width)

This means:
- There are no edge squares — every rank wraps
- There are no corner squares — the poles are where all files converge
- Pieces near the poles have reduced move counts (fewer unique destination squares)

### Piece Movement Near the Poles

**Rook:** Crosses the pole by continuing 4 files away on the same rank, then continues moving away from the pole. Example: Ra3 → a2 → a1 (pole crossed) → e1 → e2 → e3...

**Bishop (most versions):** Crosses the pole and continues on **the same diagonal colour** (colourbound). Moving diagonally into the pole, it exits directly across, then reverses its diag direction. The exact rule differs by version:

| Version | Transpolar Bishop rule |
|---|---|
| Grayber/Miller (1950s/1965) | Complex zig-zag; not colourbound |
| Yapsan (1971) | Crosses directly across pole (same file shifted 4); colourbound; reverses direction |
| Nadvorney (1975) | Shifts **3 files** (not 4), changes colour; complex path |
| Boholy/Welman/Chao (1987–2008) | Same as Yapsan; colourbound |

The **majority of versions** (Yapsan, Boholy, Global Chess, Chess on the Dot) use the Yapsan-style colourbound Bishop: crosses the pole directly 4 files away, reverses diagonal direction, stays on the same colour.

**Knight:** In most versions (Yapsan, Nadvorney, Global Chess, Chao), the Knight has exactly **8 possible moves from any position** on the board, including those near the poles, by applying the L-shaped leap with polar adjustment.

**King and Queen:** Move as derived from Rook and Bishop above. King near a pole has 6 possible moves (not 8).

**Pawn:** Moves as in Cylindrical Chess — forward only, no trans-polar movement until promotion.

### Castling

In the Yapsan, Nadvorney, and Chao versions, two extra castling options are available: the King may castle with a Rook by approaching it from **either side** (not just the standard approach). The usual castling conditions must still be met.

### Key Versions

| Year | Inventor | Key feature |
|---|---|---|
| 1950s | H. D. Grayber | First documented; complex non-colourbound Bishop |
| 1965 | Don Miller | Knight near pole gains extra move (8 moves) |
| 1971 | Peter Yapsan | Colourbound Bishop; 8-move Knight; extra castling |
| 1975 | Leo Nadvorney | Bishop changes colour at pole; 8-move Knight |
| 1987 | János Boholy | Pole is a neutral passing space; 6-move Knight near pole |
| 1989 | Welman & Welman | Global Chess; 8-move Knight (orig.); later reduced |
| 2008 | Joshua Chao | Chess on the Dot; Yapsan-style; forbids stationary moves |

### Rules

- Standard FIDE starting position
- Standard FIDE rules apply, except as modified by spherical topology
- No stationary moves (pieces may not make a complete loop and return to their starting square) — in most versions
- Win: Checkmate

### Attribution

Spherical Chess is a family of chess variants invented independently multiple times between 1950 and 2014. Surveyed by Fergus Duniho. Source: chessvariants.com/boardrules.dir/spherical.html (last modified July 29, 2021).
