---
title: "Cylindrical Chess"
slug: cylindrical-chess
board: "8×8 (cylindrical)"
players: "2"
parent: moddable-chess
win: "Checkmate"
special: "The board is treated as a cylinder: file a connects directly to file h. Pieces can move and attack across the edge. Bishops and queens are significantly stronger than in standard chess."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
    wrap: cylinder
  players: [white, black]
  setup: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
---

# Cylindrical Chess

## Overview

Cylindrical Chess is played on a standard 8×8 board, but the board is treated as a cylinder: the left and right edges are connected. File a is adjacent to file h. A piece that moves off one edge of the board reappears from the other side.

## Setup

Standard FIDE starting position.

```
FEN: rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
```

## Rules

All standard FIDE rules apply with the following modifications for the cylindrical board:

### Cylindrical Movement

All pieces may move and attack across the board edge. File a and file h are adjacent:

- A **Rook** on a3 may slide left (away from the board edge) to h3, g3, f3, etc. — provided those squares are not blocked.
- A **Bishop** on c1 may move diagonally through a3 and continue to h4 (wrapping around the edge).
- A **Knight** on h2 may jump to squares on the a-file side of the board.
- A **Queen** combines Rook and Bishop cylindrical movement.

### En Passant

En passant works normally across the cylinder. For example: if White has a pawn on a5 and Black plays h7–h5, White may capture en passant with a5×h6.

### Castling

Castling is permitted under standard FIDE conditions. The Rook does not cross the board edge during castling — only standard castling (not over the edge) is allowed.

### Null Moves

A piece may not make a null move — it cannot travel all the way around the board to return to its starting square. (Such moves are only allowed in some problem contexts.)

### Stalemate

Stalemate is a draw, as in standard chess.

## Strategy Notes

**Piece values** are significantly different from standard chess:

| Piece | Approx. value |
|-------|---------------|
| Pawn | 1 |
| Knight | 3.25 |
| Bishop | 4 |
| Rook | 5 |
| Queen | 11 |

Bishops are considerably stronger than in standard chess because they can reach more squares via the wrap. Queens gain even more. Knights and Rooks benefit only modestly.

Center control is less important — advancing a central pawn exposes the position to diagonal attacks via the edges.

**Endgame**: King and Rook alone cannot force checkmate against a lone King (the defending King can always escape around the cylinder). Two Rooks can deliver a ladder mate along the ranks (but not along the files).

*Sources: en.wikipedia.org/wiki/Cylinder_chess; Pritchard, The Encyclopedia of Chess Variants, p. 79*
