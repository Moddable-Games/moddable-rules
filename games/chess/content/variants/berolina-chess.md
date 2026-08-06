---
playable: true
key: berolinaChess
title: Berolina Chess
slug: berolina-chess
board: "8×8"
players: "2"
parent: chess
win: Checkmate
special: Pawns move diagonally forward and capture straight forward — the inverse of normal.
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
  plugins:
    chess:
      pawnConfig:
        forwardDir:
          0: [-1, 0]
          1: [1, 0]
        startCells:
          0: [48,49,50,51,52,53,54,55]
          1: [8,9,10,11,12,13,14,15]
        promotionCells:
          0: [0,1,2,3,4,5,6,7]
          1: [56,57,58,59,60,61,62,63]
        captureDirections:
          0:
            - [-1, 0]
          1:
            - [1, 0]
        moveDirections:
          0:
            - [-1,-1]
            - [-1,1]
          1:
            - [1,-1]
            - [1,1]
        doubleStep: true
---

## Berolina Chess

Pawns are inverted: they advance diagonally and capture straight ahead. Named after Berlin, where it was invented in 1926.


{{svg:berolina-chess-board.svg "Berolina Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess setup (pawns use Berolina movement rules).

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- Pawns move one or two squares diagonally forward (instead of straight forward).
- Pawns capture one square straight forward (instead of diagonally).
- En passant applies to Berolina pawn double-moves.
- Promotion occurs on the 8th rank as normal.
- All other pieces move and capture as standard chess.

### Win Condition

Checkmate the opponent's King.

### Strategy

Berolina pawns control different squares than normal pawns. A pawn on e2 can advance to d3 or f3 (and double-move to c4 or g4), but captures on e3. This makes pawn chains behave very differently — adjacent pawns no longer protect each other. Bishops become relatively weaker since pawns compete for diagonal space.

### Attribution

Invented by Edmund Nebermann in Berlin, 1926. Public domain.
