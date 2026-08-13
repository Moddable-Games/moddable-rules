---
playable: false
title: Chigorin
slug: chigorin
board: "8×8"
players: "2"
parent: chess
win: Checkmate
special: "Unequal armies. White has four Knights and a Chancellor; Black has four Bishops and a Queen."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rbbqkbbr/pppppppp/8/8/8/8/PPPPPPPP/RNNCKNNR"
  pieces:
    chancellor:
      type: compose
      parts: [rook, knight]
  vocabulary:
    chancellor:
      symbols:
        0: C
        1: c
---

## Chigorin Chess

An unequal-armies variant: White fields leapers, Black fields sliders. White's Bishops become Knights and White's Queen becomes a Chancellor (Rook + Knight), giving four Knights backed by a piece that leaps. Black's Knights become Bishops, giving four Bishops backed by a Queen. Both sides keep their Rooks, King and eight Pawns.

The name honours Mikhail Chigorin's reputation for preferring Knights to Bishops. Chigorin himself had no hand in the design.


{{svg:chigorin-board.svg "Chigorin Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup (FEN):** `rbbqkbbr/pppppppp/8/8/8/8/PPPPPPPP/RNNCKNNR`

White: Rook, Knight, Knight, Chancellor, King, Knight, Knight, Rook (+ 8 pawns).
Black: Rook, Bishop, Bishop, Queen, King, Bishop, Bishop, Rook (+ 8 pawns).

### Rules

- All standard chess rules apply, including castling for both sides.
- The Chancellor moves as a Rook or a Knight.
- **Promotion is restricted by army.** A pawn may promote only to a piece its own side held at the start of the game, King excepted. White pawns promote to Knight, Rook or Chancellor. Black pawns promote to Bishop, Rook or Queen.

### Win Condition

Checkmate, same as standard chess.

### Strategy

White's Knights are superb in closed positions with stable outposts and weak on open boards where Bishops dominate, so White should keep pawn chains intact and fight for closed structures. Black should open the position and trade pawns to give the four Bishops long diagonals. The Chancellor is White's compensation for having no long-range diagonal piece at all. Betza observed that White can castle as early as move three while Black cannot before move five, which gives White a real opening tempo advantage.

### Attribution

Invented by Ralph Betza, 2002, and named after Mikhail Ivanovich Chigorin. Rules documented at abstractgames.org/chigorinchess.html and chessvariants.org/diffsetup.dir/chigorin.html. Public domain rules.
