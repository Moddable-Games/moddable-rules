---
playable: false
title: Grande Acedrex
slug: grande-acedrex
board: "12×12"
players: "2"
parent: chess
win: Checkmate, bare the King, or stalemate
special: "Large medieval Spanish chess variant from the Libro de los Juegos (Alfonso X, c. 1283). 12×12 board with six unique piece types: Griffion, Unicorn, Lion, Giraffe, Crocodile, and Rook. Pawns start on rank 4; ranks 2–3 are empty. Unique promotion rule: pawn promotes to the piece type that started on that file."
engine:
  topology:
    type: grid
    rows: 12
    cols: 12
  players: [white, black]
  render:
    cellSize: 26
  setup: "rlugckfcgulr/12/12/pppppppppppp/12/12/12/12/PPPPPPPPPPPP/12/12/RLUGCKFCGULR"
  vocabulary:
    lion:
      symbols:
        0: L
        1: l
    unicorn:
      symbols:
        0: U
        1: u
    giraffe:
      symbols:
        0: G
        1: g
    crocodile:
      symbols:
        0: C
        1: c
    griffion:
      symbols:
        0: F
        1: f
  plugins:
    chess:
      castling: false
      enPassant: false
      doubleStep: false
      stalemateMeaning: "win"
      pieces:
        # Jumps exactly three squares orthogonally.
        lion:
          type: leaper
          offsets:
            - [-3, 0]
            - [3, 0]
            - [0, -3]
            - [0, 3]
        # One square diagonally and three on, jumping: a (1,4) leap.
        giraffe:
          type: leaper
          offsets:
            - [-4, -1]
            - [-4, 1]
            - [-1, -4]
            - [-1, 4]
            - [1, -4]
            - [1, 4]
            - [4, -1]
            - [4, 1]
        # One step diagonally, may stop there, then slides outward orthogonally.
        griffion:
          type: bent
          first: diagonal
          firstSteps: 1
        crocodile:
          type: rider
          dirs: diagonal
        # Its move after the first. The first move, a non-capturing knight's
        # leap, needs move-count state: see the rulebook's unsupported reason.
        unicorn:
          type: rider
          dirs: diagonal
---

## Grande Acedrex

{{svg:grande-acedrex-board.svg "Grande Acedrex — starting position"}}

Grande Acedrex (Spanish: “Great Chess”) is a large medieval chess variant documented in the *Libro de los Juegos* (Book of Games) commissioned by King Alfonso X of Castile, c. 1283. It is played on a 12×12 board with six exotic piece types drawn from mythology and natural history as understood in 13th-century Spain. Rules are reconstructed from the Alfonso X manuscript as described by Murray, Gollon, and Pritchard.

### The Board

12 files (a–l) × 12 ranks = 144 squares.

### Starting Position

Each player has 12 pieces on their back rank and 12 pawns on rank 4. Ranks 2–3 (White) and ranks 10–11 (Black) are empty at the start.

**White (rank 1):** Rook a1 · Lion b1 · Unicorn c1 · Giraffe d1 · Crocodile e1 · King f1 · Griffion g1 · Crocodile h1 · Giraffe i1 · Unicorn j1 · Lion k1 · Rook l1

**White pawns (rank 4):** a4–l4

**Black (rank 12):** Rook a12 · Lion b12 · Unicorn c12 · Giraffe d12 · Crocodile e12 · King f12 · Griffion g12 · Crocodile h12 · Giraffe i12 · Unicorn j12 · Lion k12 · Rook l12

**Black pawns (rank 9):** a9–l9

### Pieces

| Piece | Movement |
|---|---|
| **King** | One square in any direction. On its first move only, may leap two squares horizontally, vertically, or diagonally. |
| **Rook** | Slides any distance horizontally or vertically. |
| **Griffion** | Steps one square diagonally, then slides any number of squares horizontally or vertically. Cannot jump. The diagonal step must come first; the piece may also stop after just the single diagonal step. |
| **Unicorn** | **First move:** leaps as a Knight (cannot capture on this move). **All subsequent moves:** slides any distance diagonally (as a modern Bishop). |
| **Lion** | Jumps exactly 3 squares horizontally or vertically. Jumps over intervening pieces. |
| **Giraffe** | Leaps: one diagonal step then three squares horizontally or vertically — a (1,4) displacement from the starting square. Jumps over intervening pieces. |
| **Crocodile** | Slides any distance diagonally (as a modern Bishop). |
| **Pawn** | Moves one square forward. Captures one square diagonally forward. No double first step. |

### Promotion

A pawn reaching the last rank promotes to the piece type that occupied that file in the opening setup — except on file f (the King’s file), where it promotes to a Griffion. Promotion chart for White reaching rank 12:

- a12 or l12 → Rook
- b12 or k12 → Lion
- c12 or j12 → Unicorn
- d12 or i12 → Giraffe
- e12 or h12 → Crocodile
- f12 or g12 → Griffion

### Special Rules

- **No castling.**
- **No double pawn step.**
- **Stalemate:** A player who stalemates the opponent wins.
- **Bare King:** Capturing all of the opponent’s pieces except the King is a win. Exception: if the opponent can also bare the other King on the very next move, the result is a draw.

### Attribution

Grande Acedrex is documented in the *Libro de los Juegos* by Alfonso X of Castile, c. 1283. Rules from chessvariants.com/historic.dir/acedrex.html (Hans Bodlaender, from Murray, Gollon, and Pritchard).
