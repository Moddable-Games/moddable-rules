---
title: Shafran's Hexagonal Chess
slug: shafran
board: "70 hexes (9 files a–i)"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Smaller 70-hex board with 9 files. Castling permitted. Variable pawn initial step by file. Invented Boris Shafran."
engine:
  topology:
    type: hex
    cells: 70
    files: 9
    file_labels: ["a","b","c","d","e","f","g","h","i"]
  players: [white, black]
published: true
---

## Shafran's Hexagonal Chess

Invented by Boris Shafran. Played on a smaller 70-hex board with 9 files (a through i). Castling is permitted and the pawn initial step varies by file.

### Setup

**Board:** 70-hex hexagonal grid, 9 files (a–i).

{{svg:shafran-board.svg "Shafran's Hexagonal Chess — starting position"}}

### Pawns

Pawns capture diagonally (bishop direction, through shared corners). The initial step from the starting rank depends on the pawn's file:

| Files | Initial step |
|-------|--------------|
| d, e, f | 1, 2, or 3 cells forward |
| b, c, g, h | 1 or 2 cells forward |
| a, i | 1 cell only |

### Castling

Castling is permitted on both the Queen-side and King-side. The King moves two cells toward the Rook; the Rook moves to the other side of the King.

### Rules

Identical to standard chess adapted for the hex grid except as noted. Stalemate is a draw.

### Win Condition

Checkmate.

### Attribution

Boris Shafran. Public domain rules.
