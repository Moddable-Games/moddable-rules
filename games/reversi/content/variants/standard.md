---
title: Standard Reversi
slug: standard
board: "8×8"
players: "2"
parent: reversi
order: 1
win: Most discs on the board when no moves remain
special: The original 8×8 game as played in international competition since 1977.
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "8/8/8/3bw3/3wb3/8/8/8"
---

## Standard

Reversi is a game purportedly invented in the early nineteenth century by either Lewis Waterman or John W. Mollett, but may actually be an older game. It is played on an 8×8 board with double-sided pieces — discs with each side distinct in some way from the other, each side designating ownership to a certain player when face-up.

Reversi was invented by Lewis Waterman and John Mollett in England around 1883. World Reversi Championships have been held annually since 1977.

{{svg:starting-position-8x8.svg "Reversi — starting position"}}

### Setup

**Board:** 8×8 grid (64 squares).

**Pieces:** A supply of double-sided discs — one side dark, one side light. Each player claims one colour.

**Starting position:** Place 2 discs of each colour in the central four squares in a diagonal arrangement: one colour at d4 and e5, the other at d5 and e4.

**First move:** The player with the dark pieces moves first.

### Rules

- **Placement:** On your turn, place a disc so it flanks one or more of your opponent's discs in a straight line (horizontal, vertical, or diagonal) — with your newly placed disc at one end and an existing disc of yours at the other end, with the opponent's discs between them.
- **Flipping:** All flanked discs flip to your colour immediately.
- **Multiple lines:** A single placement may flank opponent discs in more than one direction simultaneously. All flanked discs in all directions flip.
- **Passing:** If you cannot make any legal placement — no position on the board would flank at least one opponent disc — you must pass your turn.
- **No voluntary pass:** You are forced to move if you have any legal placement available.

{{svg:flip-example.svg "Reversi — flanking and flipping"}}

### Winning

Play continues until the board is full or neither player can make a legal move. The player with the most discs of their colour on the board wins.

### Attribution

Reversi. Public domain. Invented by Lewis Waterman and John Mollett, England, c. 1883.
