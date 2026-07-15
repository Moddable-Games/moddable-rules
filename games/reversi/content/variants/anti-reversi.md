---
title: Anti-Reversi
slug: anti-reversi
board: "8×8"
players: "2"
parent: reversi
order: 3
win: Fewest discs on the board when no moves remain
special: Misère variant. Win condition inverted — giving up discs is the goal. Draw is possible.
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "8/8/8/3bw3/3wb3/8/8/8"
---

## Anti-Reversi

Anti-Reversi, also known as Reversed Reversi, is a variant where the player wins who has fewer own-coloured discs at the end of the game. To put a disc on the board, the same rules apply as in normal Reversi. Draw is also a possible result.

{{svg:starting-position-8x8.svg "Anti-Reversi — starting position"}}

### Setup

Identical to Standard Reversi:

**Board:** 8×8 grid (64 squares).

**Starting position:** 2 discs of each colour in the central four squares in a diagonal arrangement.

**First move:** The player with the dark pieces moves first.

### Rules

Placement and flipping rules are identical to Standard Reversi:

- **Placement:** Place a disc so it flanks one or more opponent discs in a straight line (horizontal, vertical, or diagonal), with your disc at one end and an existing disc of yours at the other. All sandwiched discs flip to your colour.
- **Passing:** You are forced to move if any legal placement exists — only pass when you genuinely have no legal placement.
- **No voluntary pass:** Same as standard Reversi.

### Winning

When no one can move, the player with the fewest discs of their colour wins. Draw is possible if both players end with equal disc counts.

This completely inverts the strategy: instead of capturing as many discs as possible, you want to minimise your own disc count. Try to force your opponent to flip your pieces to their colour. Moves that would be poor in standard Reversi — such as ceding corners — can become advantageous in Anti-Reversi because your opponent gains discs they do not want.

### Attribution

Anti-Reversi (Reversed Reversi). Public domain variant of Reversi (c. 1883).
