---
title: Oblong Chess
slug: oblong-chess
board: "4×16"
players: "2"
parent: moddable-chess
win: Checkmate (or bare King)
special: "Historical chess variant on a 4×16 board (four files, sixteen ranks). Approximately one thousand years old. A variant of Shatranj — the Arabic predecessor of modern chess — using the full Shatranj piece set. Seven different starting setups are documented. Often played with dice that determine which piece type may move each turn. The extreme rectangular board shifts piece values significantly: Rooks are very strong on the long 16-rank axis."
engine:
  topology:
    type: grid
    rows: 16
    cols: 4
  players: [white, black]
  notation: algebraic
published: false
---

## Oblong Chess

Oblong Chess is a historical chess variant played on a 4×16 board (four files, sixteen ranks). Approximately one thousand years old, it is a variant of **Shatranj** — the Arabic predecessor of modern chess — using the full Shatranj piece set and movement rules. Seven different starting setups are documented in historical sources. The game was often played with dice that determined which piece type the player could move on each turn.

### The Board

4 columns × 16 ranks (64 squares total — same as a standard chessboard, but extremely elongated). The narrow shape gives Rooks enormous value along the 16-rank axis, while Bishops (Elephants) are severely restricted by the 4-file width.

### Pieces (Shatranj Set)

Each player commands the same forces as in Shatranj:

| Piece | Shatranj Name | Movement | Count |
|---|---|---|---|
| King | Shah | Moves 1 square in any direction | 1 |
| General | Firzan | Moves 1 square diagonally | 1 |
| Elephant | Fil | Leaps exactly 2 squares diagonally (may jump) | 2 |
| Knight | Asp/Faras | Leaps as in modern chess | 2 |
| Rook | Rukh | Slides any distance orthogonally | 2 |
| Pawn | Baidak | Moves 1 square forward; no double first move; promotes | 8 |

*Note: The General (Firzan) and Elephant (Fil) differ significantly from their modern Queen and Bishop equivalents: the Firzan moves only 1 diagonal square, and the Fil leaps exactly 2 diagonal squares.*

### Starting Position (First Setup)

The source documents 7 different opening setups for White. The primary setup:

| Rank 1 | a1 | b1 | c1 | d1 |
|---|---|---|---|---|
| Pieces | Elephant | General | King | Elephant |

| Rank 2 | a2 | b2 | c2 | d2 |
|---|---|---|---|---|
| Pieces | Rook | Knight | Knight | Rook |

Ranks 3–10: empty.

Black starts on ranks 15–16 (mirror).

*Pawns occupy ranks 3 and 14 (adjacent to the piece ranks), one per file.*

### Movement Rules

Pieces move as in Shatranj:
- **Shah (King):** 1 square in any direction
- **Firzan (General):** 1 square diagonally
- **Fil (Elephant):** leaps exactly 2 diagonal squares; may jump over an intervening piece
- **Asp (Knight):** as in modern chess
- **Rukh (Rook):** any distance orthogonally
- **Pawn:** 1 square forward; no double first move; promotes to Firzan (General) on reaching the last rank

### Win Conditions

- **Checkmate** wins
- **Stalemate** is believed to win (Shatranj convention), though the precise rule has not survived
- **Bare King:** capturing all pieces except the King also wins, unless the opponent can bare YOUR King on their next move — in that case it is a draw

### Dice Play

Oblong Chess was often played with a six-sided die:
- Roll 6: move the Shah (King)
- Roll 5: move the Firzan (General)
- Roll 4: move an Elephant
- Roll 3: move a Knight
- Roll 2: move a Rook
- Roll 1: move a Pawn

If no legal move exists for the rolled piece type, the turn is lost. Moving is not obligatory. In the dice version, the game is won by capturing the opponent's King (not by checkmate).

### Attribution

Oblong Chess is a historical Shatranj variant approximately one thousand years old. Written by Hans Bodlaender. Source: chessvariants.com/historic.dir/oblong.html (created November 1995).
