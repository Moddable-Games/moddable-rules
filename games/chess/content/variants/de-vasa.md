---
title: De Vasa's Hexagonal Chess
slug: de-vasa
board: "81 hexes (rhombus, horizontal)"
players: "2"
parent: chess
win: Checkmate
special: "Horizontally-oriented rhombus board of 81 hexes. Pawns start on rank 3. Castling permitted. Invented Helge E. de Vasa."
engine:
  topology:
    type: hex
    shape: rhombus
    size: 9
    orientation: pointy
  surface:
    colors:
      cell-light: "#ffce9e"
      cell-dark: "#d18b47"
      cell-mid: "#e8ab6f"
      stroke: "rgba(0,0,0,0.15)"
      background: "#2c2c2c"
      border: "#6b4226"
  render:
    cellSize: 20
    cellColor: tricolor
    frame: true
  pieces:
    set: mce-fairy-complete
  players: [white, black]
  setup: "0,0:r,0,2:p,0,6:P,0,8:R,1,0:n,1,2:p,1,6:P,1,8:N,2,0:b,2,2:p,2,6:P,2,8:B,3,0:k,3,2:p,3,6:P,3,8:Q,4,0:b,4,2:p,4,6:P,4,8:B,5,0:q,5,2:p,5,6:P,5,8:K,6,0:b,6,2:p,6,6:P,6,8:B,7,0:n,7,2:p,7,6:P,7,8:N,8,0:r,8,2:p,8,6:P,8,8:R"
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

## De Vasa's Hexagonal Chess

Invented by Helge E. de Vasa. Played on an 81-hex rhombus board oriented horizontally, which changes the shape and feel of the game compared to the standard upright hexagonal boards.

### Setup

**Board:** 81-hex rhombus grid (9×9), horizontally oriented. Files a–i, ranks 1–9. Every file has 9 cells.

**White pieces (rank 1, bottom):**
- King on f1
- Queen on d1
- Bishops on c1, e1, g1 (one per colour)
- Knights on b1, h1
- Rooks on a1, i1
- Pawns on a3, b3, c3, d3, e3, f3, g3, h3, i3 (9 pawns on rank 3)

**Black pieces (rank 9, top — mirrored):**
- King on d9
- Queen on f9
- Bishops on c9, e9, g9 (one per colour)
- Knights on b9, h9
- Rooks on a9, i9
- Pawns on a7, b7, c7, d7, e7, f7, g7, h7, i7 (9 pawns on rank 7)

{{svg:de-vasa-board.svg "De Vasa's Hexagonal Chess — starting position"}}

### Pawns

Pawns move straight forward. They capture diagonally forward to a cell of the same colour.

Pawns begin on the 3rd rank and may make an initial double step from their starting position.

### Castling

Castling is permitted. The King slides two cells toward the Rook (short castling) or three cells (long castling).

### Rules

Identical to standard chess adapted for the hex grid except as noted. Stalemate is a draw.

### Win Condition

Checkmate.

### Attribution

Invented by Helge E. de Vasa in 1953, first published in Joseph Boyer, *Nouveaux Jeux d'Echecs Non-orthodoxes* (Paris, 1954). Documented at en.wikipedia.org/wiki/Hexagonal_chess. Public domain rules.
