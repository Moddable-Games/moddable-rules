---
title: "Glinski's Hexagonal Chess"
slug: glinski
parent: hex-chess
order: 1
players: 2
win: checkmate
board:
  topology: hex
  shape: hexagonal
  radius: 5
  cells: 91
  colors: 3
  files: [a, b, c, d, e, f, g, h, i, k, l]
  note: "j is omitted by convention"
  ranks: 11
  center: f6
special_rules:
  castling: false
  en_passant: true
  double_pawn_step: true
  stalemate: "3/4 to deliverer, 1/4 to stalemated player"
pieces_per_side:
  pawn: 9
  knight: 2
  bishop: 3
  rook: 2
  queen: 1
  king: 1
sources:
  - "Wladyslaw Glinski, Rules of Hexagonal Chess (1973)"
  - "https://www.chessvariants.com/hexagonal.dir/hexagonal.html"
  - "https://en.wikipedia.org/wiki/Hexagonal_chess"
  - "https://ludii.games/ (Glinski Chess.lud)"
---

## Board

A regular hexagon of side 6, comprising 91 cells in three colours (light, mid, dark). The board is vertically oriented: files run north-south, and pawns advance straight north (toward the opponent's back rank) through shared cell sides.

**Files:** a b c d e f g h i k l (11 files; j is omitted)  
**Ranks:** 1 through 11  
**Center cell:** f6  
**Apex:** f11

Rank 6 spans all 11 files. Ranks 7-11 converge toward the apex: rank 7 has 9 cells (b-k), rank 8 has 7 (c-i), rank 9 has 5 (d-h), rank 10 has 3 (e-g), rank 11 has 1 (f only). Ranks 1-6 each span all 11 files.

File lengths: a and l have 6 ranks, b and k have 7, c and i have 8, d and h have 9, e and g have 10, f has 11.

## Coordinate system

The engine uses axial coordinates (q, r). Center cell f6 maps to (0, 0).

**File to q:**

| File | a  | b  | c  | d  | e  | f | g  | h  | i  | k  | l  |
|------|----|----|----|----|----|----|----|----|----|----|-----|
| q    | -5 | -4 | -3 | -2 | -1 | 0 | +1 | +2 | +3 | +4 | +5 |

**Rank to r:**

```
axial_r = 6 - rank - max(0, q)
```

The ranks bend 60 degrees at file f. Left of center (q <= 0), moving between adjacent files at the same rank is a (+1, 0) step. Right of center (q > 0), it is a (+1, -1) step.

**Inverse:**

```
rank = 6 - axial_r - max(0, axial_q)
file_q = axial_q
```

**Verified anchor points:**

| Cell | q  | rank | axial_r |
|------|----|------|---------|
| f6   | 0  | 6    | 0       |
| f11  | 0  | 11   | -5      |
| f1   | 0  | 1    | +5      |
| b7   | -4 | 7    | -1      |
| f7   | 0  | 7    | -1      |
| g7   | +1 | 7    | -2      |
| k7   | +4 | 7    | -5      |

## Starting position

### White pawns

One pawn per file b-k, on ranks 1,2,3,4,5,4,3,2,1 respectively:

| File | b  | c  | d  | e  | f  | g  | h  | i  | k  |
|------|----|----|----|----|----|----|----|----|-----|
| Rank | 1  | 2  | 3  | 4  | 5  | 4  | 3  | 2  | 1  |

In axial coordinates: (-4,+5), (-3,+4), (-2,+3), (-1,+2), (0,+1), (+1,+1), (+2,+1), (+3,+1), (+4,+1)

### Black pawns

All 9 on rank 7 (files b-k):

| File | b  | c  | d  | e  | f  | g  | h  | i  | k  |
|------|----|----|----|----|----|----|----|----|-----|
| Rank | 7  | 7  | 7  | 7  | 7  | 7  | 7  | 7  | 7  |

In axial coordinates: (-4,-1), (-3,-1), (-2,-1), (-1,-1), (0,-1), (+1,-2), (+2,-3), (+3,-4), (+4,-5)

### Back rank pieces

White queen starts at e1, black queen at e10 (confirmed from published game notation).  
White bishop at f3, black bishop at f9 (confirmed from published game notation).  
Full back rank positions for both sides should be verified against `Glinski Chess.lud` in the Ludii repository. The standard array places rooks at the outer files, knights inward, bishops on the three cell colours, queen and king centrally — such that every piece is free to move immediately and the king and queen together defend all three bishops.

## Piece movement

All six orthogonal directions (through shared cell sides) and six diagonal directions (through shared corners) are available to most pieces.

**Rook:** slides any number of cells orthogonally (6 directions).

**Bishop:** slides any number of cells diagonally (6 directions). Always colour-bound. Three bishops per side, one on each board colour.

**Queen:** slides any number of cells orthogonally or diagonally (all 12 directions).

**King:** steps one cell orthogonally or diagonally (all 12 directions). No castling.

**Knight:** moves two cells orthogonally in one direction then one cell orthogonally at 60 degrees, leaping over intervening pieces. Equivalently: moves to the nearest cell not on any orthogonal or diagonal line it currently occupies.

**Pawn:**

- Advances one cell straight forward (orthogonally north).
- From its starting cell, or from the starting cell of any other friendly pawn, may advance two cells straight forward (double step).
- Captures one cell orthogonally forward at 60 degrees — to the NE or NW (NOT diagonally; this is an orthogonal rook-direction move at 60 degrees from vertical, NOT a bishop-direction diagonal move).
- En passant applies to pawns captured via the double step.
- Promotes upon reaching any cell on the opponent's back rank (the 11 cells forming the far border of the board).

> The pawn capture direction is the most commonly misrepresented rule. Gliński pawns capture in the rook's direction (through a shared side), not the bishop's direction (through a corner). This is the primary difference from McCooey's variant, where pawns capture diagonally.

## Special rules

**En passant:** applies. If a pawn makes a double step and passes through a cell where an enemy pawn could have captured it, that enemy pawn may capture en passant on the following move.

**Double step eligibility:** a pawn may make a double step from its own starting cell. It also regains double step eligibility if it lands on any other friendly pawn's starting cell, since such a move does not advance it closer to the promotion rank.

**Castling:** not available.

**Stalemate:** not a draw. The player who delivers stalemate (leaves the opponent with no legal moves but not in check) scores 3/4 point. The stalemated player scores 1/4 point. This scoring applies in tournament play; in casual play stalemate is typically treated as equivalent to checkmate for the stalemating player.

**Check, checkmate, and promotion** otherwise follow standard chess rules.

## Notable endgame properties

- King + two knights can checkmate a lone king (unlike standard chess).
- King + two bishops cannot reliably checkmate a lone king (unlike standard chess).
- King + bishop + knight cannot reliably checkmate a lone king.
- A knight can triangulate (has an odd-step path back to the same cell).
- The three bishops, confined to different colours, can never directly defend each other.
