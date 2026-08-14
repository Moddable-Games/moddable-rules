---
playable: true
title: Citadel Chess
slug: citadel-chess
board: "10×10 + 4 citadel squares"
players: "2"
parent: chess
win: Checkmate or stalemate; reaching the opponent's citadel is a draw
special: "Historical Shatranj variant (Shatranj al-Husun, 'Chess of the Fortresses'). 10×10 board plus four corner citadel squares. A King entering the opponent's citadel and surviving one move achieves a draw. Stalemate is a win. War Machines move as Bishops. No bare King rule."
engine:
  topology:
    type: grid
    rows: 12
    cols: 12
    voids: [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[1,0],[1,11],[2,0],[2,11],[3,0],[3,11],[4,0],[4,11],[5,0],[5,11],[6,0],[6,11],[7,0],[7,11],[8,0],[8,11],[9,0],[9,11],[10,0],[10,11],[11,1],[11,2],[11,3],[11,4],[11,5],[11,6],[11,7],[11,8],[11,9],[11,10]]
  players: [white, black]
  render:
    cellSize: 26
    zones:
      voids: [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[1,0],[1,11],[2,0],[2,11],[3,0],[3,11],[4,0],[4,11],[5,0],[5,11],[6,0],[6,11],[7,0],[7,11],[8,0],[8,11],[9,0],[9,11],[10,0],[10,11],[11,1],[11,2],[11,3],[11,4],[11,5],[11,6],[11,7],[11,8],[11,9],[11,10]]
  setup: "12/1rndwkfwdnr1/1pppppppppp1/12/12/12/12/12/12/1PPPPPPPPPP1/1RNDWKFWDNR1/12"
  vocabulary:
    warMachine:
      symbols:
        0: D
        1: d
    elephant:
      symbols:
        0: W
        1: w
    general:
      symbols:
        0: F
        1: f
  plugins:
    chess:
      doubleStep: false
      castling: false
      enPassant: false
      pieces:
        warMachine:
          type: rider
          dirs: diagonal
        elephant:
          type: leaper
          offsets: elephant
        general:
          type: rider
          dirs: diagonal
          maxSteps: 1
---

## Citadel Chess

{{svg:citadel-chess-board.svg "Citadel Chess — starting position"}}

Citadel Chess (Shatranj al-Husun, “Chess of the Fortresses”) is a historical Shatranj variant described by Gollon (based on Murray and Pritchard). It is played on a 10×10 board augmented with four corner citadel squares. A King that reaches the opponent’s citadel and cannot be captured on the very next move secures a draw.

### The Board

The main playing area is a 10×10 grid (files b–k, ranks 2–11). Four additional citadel squares are positioned diagonally off each corner of the main grid:

- **a1** and **l1** — White’s citadels (adjacent to White’s back rank)
- **a12** and **l12** — Black’s citadels (adjacent to Black’s back rank)

Ranks 1 and 12 contain only the citadel squares (a1, l1, a12, l12); squares b1–k1 and b12–k12 do not exist. Files a and l have no squares other than the citadels. Total board size: 104 squares.

### Starting Position

**White back rank (rank 2):** Rook b2 · Knight c2 · War Machine d2 · Elephant e2 · King f2 · General g2 · War Machine h2 · Elephant i2 · Knight j2 · Rook k2

**White pawns (rank 3):** b3–k3 (10 pawns)

**Black back rank (rank 11):** Rook b11 · Knight c11 · War Machine d11 · Elephant e11 · King f11 · General g11 · War Machine h11 · Elephant i11 · Knight j11 · Rook k11

**Black pawns (rank 10):** b10–k10 (10 pawns)

*Source note: The chessvariants.com source lists “Elephant c2, i2” but c2 is also given as the Knight square. By symmetry (Rook–Knight–War Machine–Elephant–King–General–War Machine–Elephant–Knight–Rook), the Elephants occupy e2 and i2.*

### Pieces

| Piece | Movement |
|---|---|
| King (Shah) | One square in any direction |
| General (Firzan) | One square diagonally |
| Elephant (Fil) | Leaps exactly 2 squares diagonally; can jump the intervening square |
| Knight (Faras) | L-shaped leap (as in standard chess) |
| Rook (Rukh) | Slides any distance orthogonally |
| Pawn | One square forward; captures one square diagonally; no double first step; promotes to General on reaching the last rank |
| **War Machine (Dabbabah)** | Slides any distance diagonally (as a modern Bishop) |

### Citadel Rules

- A King may move into a citadel square on the **opponent’s side** of the board (a12 or l12 for White; a1 or l1 for Black).
- If the King enters the opponent’s citadel and **cannot be captured on the very next move**, the game is a **draw**.
- A player’s own citadels (on their own side) grant no special benefit.

### Special Rules

- **Stalemate** is a **win** for the stalemating player.
- **No bare King rule** — the game continues normally when a player has only the King.
- **No castling, no en passant.**
- **Promotion:** Pawns promote to Generals upon reaching the last rank.

### Attribution

Citadel Chess documented at chessvariants.com/historic.dir/citadel.html (Hans Bodlaender, from Gollon/Murray/Pritchard).
