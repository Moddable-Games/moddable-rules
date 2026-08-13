---
title: Shafran's Hexagonal Chess
slug: shafran
board: "70 hexes (9 files a–i)"
players: "2"
parent: chess
win: Checkmate
special: "Smaller 70-hex board with 9 files. Castling permitted. Variable pawn initial step by file. Invented by Isaak Shafran, 1939."
engine:
  topology:
    type: hex
    orientation: flat
    grid: [[-4,0],[-4,1],[-4,2],[-4,3],[-4,4],[-4,5],[-3,-1],[-3,0],[-3,1],[-3,2],[-3,3],[-3,4],[-3,5],[-2,-2],[-2,-1],[-2,0],[-2,1],[-2,2],[-2,3],[-2,4],[-2,5],[-1,-3],[-1,-2],[-1,-1],[-1,0],[-1,1],[-1,2],[-1,3],[-1,4],[-1,5],[0,-4],[0,-3],[0,-2],[0,-1],[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[1,-4],[1,-3],[1,-2],[1,-1],[1,0],[1,1],[1,2],[1,3],[1,4],[2,-4],[2,-3],[2,-2],[2,-1],[2,0],[2,1],[2,2],[2,3],[3,-4],[3,-3],[3,-2],[3,-1],[3,0],[3,1],[3,2],[4,-4],[4,-3],[4,-2],[4,-1],[4,0],[4,1]]
  surface:
    colors:
      cell-light: "#ffce9e"
      cell-dark: "#d18b47"
      cell-mid: "#e8ab6f"
      stroke: "rgba(0,0,0,0.15)"
      background: "#2c2c2c"
      border: "#6b4226"
  render:
    cellSize: 22
    cellColor: tricolor
    frame: true
  pieces:
    set: mce-fairy-complete
  players: [white, black]
  setup: "-1,-2:p,-1,-3:q,-1,4:P,-1,5:Q,-2,-1:p,-2,-2:b,-2,4:P,-2,5:B,-3,-1:n,-3,0:p,-3,4:P,-3,5:N,-4,0:r,-4,1:p,-4,4:P,-4,5:R,0,-3:p,0,-4:k,0,4:P,0,5:K,1,-3:p,1,-4:b,1,3:P,1,4:B,2,-3:p,2,-4:b,2,2:P,2,3:B,3,-3:p,3,-4:n,3,1:P,3,2:N,4,-3:p,4,-4:r,4,0:P,4,1:R"
  plugins:
    chess:
      castling: false
      enPassant: false
      doubleStep: false
      hexPawnConfig:
        forwardDir:
          0: [0,-1]
          1: [0,1]
        captureDirections:
          0: [[1,-1],[-1,0]]
          1: [[-1,1],[1,0]]
playable: true
---

## Shafran's Hexagonal Chess

Invented by Isaak Grigorevich Shafran in 1939. Played on a smaller 70-hex board with 9 files (a through i). Castling is permitted and the pawn initial step varies by file.

### Setup

**Board:** 70-hex irregular hexagonal grid, 9 files (a–i), 10 ranks. File lengths: a(6), b(7), c(8), d(9), e(10), f(9), g(8), h(7), i(6). Files a–e share the bottom edge; files e–i share the top edge.

**White pieces (back rank, bottom edge):**
- King on e1
- Queen on d1
- Bishops on c1, f2, h4 (one per colour)
- Knights on b1, g3
- Rooks on a1, i5
- Pawns on a2, b2, c2, d2, e2, f3, g4, h5, i6 (9 pawns)

**Black pieces (back rank, top edge — 180° rotation):**
- King on e10
- Queen on f10
- Bishops on g10, d9, b7 (one per colour)
- Knights on h10, c8
- Rooks on i10, a6
- Pawns on i9, h9, g9, f9, e9, d8, c7, b6, a5 (9 pawns)

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

Invented by Soviet geologist Isaak Grigorevich Shafran in 1939 and registered in 1956. Documented at en.wikipedia.org/wiki/Hexagonal_chess. Public domain rules.
