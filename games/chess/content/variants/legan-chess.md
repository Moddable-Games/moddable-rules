---
playable: false
key: leganChess
title: Legan Chess
slug: legan-chess
board: "8×8"
players: "2"
parent: chess
win: Checkmate
special: "Armies are set up in opposite corners and play diagonally. Pawns move one step diagonally forward and capture orthogonally."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "knbrp3/bqpp4/npp5/rp1p3P/p3P1PR/5PPN/4PPQB/3PRBNK"
  plugins:
    chess:
      setup: "knbrp3/bqpp4/npp5/rp1p3P/p3P1PR/5PPN/4PPQB/3PRBNK"
      castling: false
      enPassant: false
      pawnConfig:
        moveDirections:
          0:
            - [-1, -1]
          1:
            - [1, 1]
        captureDirections:
          0:
            - [-1, 0]
            - [0, -1]
          1:
            - [1, 0]
            - [0, 1]
        promotionCells:
          0: [0, 1, 2, 3, 8, 16, 24]
          1: [60, 61, 62, 63, 55, 47, 39]
        doubleStep: false
---

## Legan Chess

The board is played on the diagonal. Each army occupies a triangular corner, White in the bottom right and Black in the top left, and advances along the long diagonal towards the other. Pawns are reoriented to match: they step diagonally forward and capture orthogonally, the reverse of the standard pawn.


{{svg:legan-chess-board.svg "Legan Chess — starting position"}}

### Setup

**Board:** Standard 8×8, played corner to corner.

**FEN:** `knbrp3/bqpp4/npp5/rp1p3P/p3P1PR/5PPN/4PPQB/3PRBNK w - - 0 1`

White's King stands in the h1 corner with Rook, Bishop, Knight beside it and the Queen and pawns filling the triangle in front. Black's King stands in the a8 corner with the mirrored arrangement.

### Rules

- **Pawn movement.** A pawn moves one square diagonally forward: White from right to left, Black from left to right. So a White pawn on f3 moves to e4.
- **Pawn capture.** A pawn captures orthogonally, in the two component directions of its move. The White pawn on f3 captures on e3 and on f4.
- **No double step.** Pawns always move exactly one square.
- **Promotion.** A pawn promotes on the squares occupied at the start by the opponent's King, Bishops, Knights and Rooks: for White, a8, b8, c8, d8, a7, a6 and a5; for Black, e1, f1, g1, h1, h2, h3 and h4.
- **No castling** and **no en passant**.
- All other pieces move and capture exactly as in standard chess.

### Win Condition

Checkmate the opponent's King.

### Strategy

Both Kings begin in a corner, already tucked behind their own pawn triangle, so early safety is not the concern it is in standard chess. The tension is along a single long diagonal, and because pawns move and capture on different axes they cannot form protective chains the way standard pawns do. A pawn defends only by standing where it can capture, which is orthogonal to where the enemy pawn wants to go.

### Attribution

Invented by L. Legan in 1913. Rules documented at en.wikipedia.org/wiki/Legan_chess; starting position taken from the Fairy-Stockfish source (`src/variant.cpp`, `legan_variant`). Public domain rules.
