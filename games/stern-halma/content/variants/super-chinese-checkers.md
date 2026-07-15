---
title: Super Chinese Checkers
slug: super-chinese-checkers
board: "6-pointed star (121 holes)"
players: "2–6"
parent: stern-halma
order: 5
win: "Move all 10 pieces into the opposite arm"
special: "Extended hop: pieces may jump multiple empty spaces in a line before and after clearing a hurdle."
published: true
engine:
  topology:
    type: graph
    structure: star
    params:
      armSize: 4
      spacing: 24
  players: [red, blue, green, black, purple, brown]
  setup:
    arms: [N, S]
---

## Super Chinese Checkers

{{svg:super-chinese-checkers-board.svg "Super Chinese Checkers — starting position"}}

A faster variant using the same star board but with an extended hopping rule that allows pieces to travel much further in a single move.

### Setup

Same board and camp assignments as standard Stern-Halma for any player count (2, 3, 4, or 6). Each player has 10 pieces.

### Movement

On each turn a player moves one piece. A piece may:

- **Step:** Move to any adjacent empty hole (same as standard).
- **Super hop:** A piece may jump over exactly one other piece (own or opponent) in a straight line, regardless of the number of empty spaces before the hurdle. The piece lands an equal number of spaces beyond the hurdle. The spaces before the hurdle and the landing space must all be empty.

In other words: if a piece has N empty spaces between itself and the hurdle piece, it lands N spaces beyond the hurdle (the landing space must be empty and all intermediate spaces on both sides must be empty).

- **Chain super hop:** After a super hop, the piece may continue with additional super hops in any direction, provided each individual hop satisfies the symmetry rule above.

### Camp rule

Same as standard: once in the destination arm, a piece should remain there.

### Winning

First player to place all 10 pieces in the opposite arm wins.

### Attribution

Super Chinese Checkers. Variant of Stern-Halma with extended hop rule. Public domain. Rules confirmed from BGG (BoardGameGeek Sternhalma variants discussion).
