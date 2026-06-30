---
title: Six-by-Six Reversi
slug: six-by-six
board: "6×6"
players: "2"
parent: reversi
order: 2
win: Most discs on the board when no moves remain
special: Smaller board for shorter games or competitive solving. Identical rules to standard Reversi.
engine:
  topology:
    type: grid
    rows: 6
    cols: 6
  players: [black, white]
---

## Six-by-Six

Boards of other sizes are used for simplified games; in particular, a 6×6 board is a common simplification for beginners or for solving the game by computer. All placement, flipping, passing, and winning rules are identical to the standard 8×8 game.

{{svg:starting-position-6x6.svg "Reversi — 6×6 starting position"}}

### Setup

**Board:** 6×6 grid (36 squares).

**Pieces:** A supply of double-sided discs — one side dark, one side light.

**Starting position:** Place 2 discs of each colour in the central four squares in a diagonal arrangement: one colour at c3 and d4, the other at c4 and d3.

**First move:** The player with the dark pieces moves first.

### Rules

All rules are identical to Standard Reversi:

- **Placement:** Place a disc so it flanks one or more opponent discs in a straight line (horizontal, vertical, or diagonal), with your disc at one end and an existing disc of yours at the other.
- **Flipping:** All flanked discs flip to your colour immediately. A single placement may flank in multiple directions simultaneously.
- **Passing:** If no legal placement is available, you must pass. You are forced to move if any legal placement exists.

### Winning

Play continues until the board is full or neither player can make a legal move. The player with the most discs of their colour wins. With 36 squares and only 4 starting discs, the game resolves quickly and is well-suited to tournament play in multiple rounds.

### Attribution

Six-by-Six Reversi. Public domain variant. Rules identical to Reversi (c. 1883).
