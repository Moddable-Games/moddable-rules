---
title: McCooey's Hexagonal Chess
slug: mccooey
board: "91 hexes (11 files a–k)"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Same 91-hex board as Gliński, but diagonal pawn captures, 7 pawns per side, and stalemate is a draw. Invented Dave McCooey."
engine:
  topology:
    type: hex
    shape: hexagonal
    radius: 5
    orientation: flat
  surface:
    colors:
      cell-light: "#ffce9e"
      cell-dark: "#d18b47"
      cell-mid: "#e8ab6f"
      stroke: "rgba(0,0,0,0.15)"
      background: "#2c2c2c"
  render:
    cellSize: 22
    cellColor: tricolor
    frame: true
  pieces:
    set: mce-fairy-complete
  players: [white, black]
  setup: "-1,-1:p,-1,-4:q,-1,2:P,-1,5:Q,-2,-1:p,-2,-3:n,-2,3:P,-2,5:N,-3,-1:p,-3,-2:r,-3,4:P,-3,5:R,0,-1:p,0,-3:b,0,-4:b,0,-5:b,0,1:P,0,3:B,0,4:B,0,5:B,1,-2:p,1,-5:k,1,1:P,1,4:K,2,-3:p,2,-5:n,2,1:P,2,3:N,3,-4:p,3,-5:r,3,1:P,3,2:R"
published: true
---

## McCooey's Hexagonal Chess

Invented by Dave McCooey and published on chessvariants.com. Played on the same 91-hex board as Gliński but with different pawn rules and 7 pawns per side.

### Setup

**Board:** 91-hex hexagonal grid, same as Gliński.

**Pieces per side:** King, Queen, 2 Rooks, 2 Bishops, 2 Knights, 7 Pawns (15 pieces total).

{{svg:mccooey-board.svg "McCooey's Hexagonal Chess — starting position"}}

### Key Differences from Gliński

| Rule | Gliński | McCooey |
|------|---------|--------|
| Pawns per side | 9 | 7 |
| Pawn capture direction | Orthogonal (rook, 60°) | Diagonal (bishop, 60°) |
| Center pawn double step | Allowed | Not allowed (f-file pawn cannot double-step) |
| Stalemate | 3/4 to 1/4 split | Draw (1/2 each) |

### Pawns

Pawns move one cell straight forward. They capture one cell **diagonally forward** (through a shared corner, bishop direction). The f-file pawn (center pawn) may not make an initial double step.

All other pawns may make an initial double step from their starting position. En passant applies.

Promotion: same as Gliński — on reaching the opponent's furthest rank in that file.

### Rules

Identical to standard chess and Gliński except as noted above. Stalemate is a draw. No castling.

### Win Condition

Checkmate.

### Attribution

Dave McCooey. Published on chessvariants.com. Public domain rules.
