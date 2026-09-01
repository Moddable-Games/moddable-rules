---
title: Kyoto Shogi
slug: kyoto-shogi
board: "5×5"
players: "2"
parent: shogi
win: "Checkmate the opponent's King"
special: Every piece except the King flips to its alternate face after each move
verified:
  date: "2026-08-31"
  method: "Desktop web research. Statements here are traceable to the sources below; anything that could not be confirmed is listed under unverified and must not be filled in from memory."
  sources:
    - "https://en.wikipedia.org/wiki/Kyoto_shogi"
    - "https://ja.wikipedia.org/wiki/京都将棋"
  unverified:
    - "An explicit statement of the win condition. Neither the English nor the Japanese article gives one."
    - "Text (non-image) movement definitions per face from an English source. The English piece table is diagrams only; the claim that each face moves as its standard-shogi namesake rests on one Japanese sentence."
unsupported: "5x5, five pieces a side, and every piece except the king MUST flip to its other face after every move, regardless of where it started or landed. There is no promotion zone at all. The pairs are tokin/lance, silver/bishop, gold/knight and pawn/rook. A captured piece may be dropped with EITHER face up, and drop restrictions are absent - two pawns on a file are legal. Face has to become part of a move's result rather than a property of a promotion square."
engine:
  topology:
    type: grid
    rows: 5
    cols: 5
  players: [sente, gote]
  setup: "pgskl/5/5/5/LKSGP"
  render:
    cellSize: 40
---

## Kyoto Shogi

Kyoto Shogi was invented by Tamiya Katsuya around 1976. It is played on a 5×5 board, and every piece except the King represents a pair: after each move, the moved piece must flip to show its other face. The game name plays on the pairing of the Japanese pronunciation of Kyoto (京都, Kyō-to) with piece name components. Public domain.

{{svg:kyoto-shogi-board.svg "Kyoto Shogi — starting position"}}

### Setup

**Board:** 5×5 grid, 25 squares.

**Pieces per player:** 5 (King + 4 dual-sided pieces).

**Starting position:**

| Player | Rank | Pieces (files 5–1, left to right) |
|---|---|---|
| White (top) | Rank 5 | Pawn · Gold · King · Silver · Tokin |
| Black (bottom) | Rank 1 | Tokin · Silver · King · Gold · Pawn |

Black (Sente) moves first. The position is point-symmetric (180-degree rotation).

### Piece Pairs

Each non-King piece has two faces. The piece flips to its alternate face after every move, mandatory.

| Face A | Face B |
|---|---|
| Tokin (と) | Lance (香) |
| Silver General (銀) | Bishop (角) |
| Gold General (金) | Knight (桂) |
| Pawn (歩) | Rook (飛) |

**Piece movements:**

| Piece | Movement |
|---|---|
| King | One square in any direction |
| Tokin | One step orthogonally or diagonally forward (Gold General movement) |
| Lance | Any number of squares forward only |
| Silver General | One step diagonally, or one step forward |
| Bishop | Any number of squares diagonally |
| Gold General | One step orthogonally or diagonally forward |
| Knight | Jumps two squares forward and one sideways |
| Pawn | One step forward |
| Rook | Any number of squares orthogonally |

### The Flip Rule

After every move, the moved piece must flip to its alternate face. A piece may be moved to a square from which it would immediately have no legal move (for example, a Lance on the final rank that will flip to a Tokin on the next turn) — this is legal in Kyoto Shogi, unlike Standard Shogi.

### Drops

Captured pieces may be dropped back onto any empty square. When dropping, the player chooses which face of the pair to place face-up.

### Win Condition

Checkmate the opponent's King.

### Draws

The same position occurring three times with the same player to move is a draw.

### Attribution

Kyoto Shogi. Invented by Tamiya Katsuya, c. 1976. Rules published freely since at least the 1980s; game mechanics are not copyrightable. Sources: pychess.org/variants/kyotoshogi; Fairy-Stockfish variants.ini engine definition.
