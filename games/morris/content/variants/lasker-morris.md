---
title: Lasker Morris
slug: lasker-morris
board: Three concentric squares (24 intersections)
players: "2"
parent: morris
order: 5
win: Reduce opponent to 2 pieces or block all their moves
special: "Each turn: either place a new piece OR move an existing piece. No sequential placement phase."
engine:
  topology:
    type: graph
    structure: concentric-rings
    params:
      rings: 3
      midpoints: true
  players: [white, black]
  setup: ""
---

## Lasker Morris

A variant of Nine Men's Morris designed by Emanuel Lasker, World Chess Champion from 1894 to 1921. Lasker modified the game to eliminate the sequential two-phase structure: instead of a placement phase followed by a movement phase, each player may on any turn either place a new piece from reserve or move an existing piece already on the board. With 10 pieces per side (one more than standard), the game creates richer interaction as both options remain available throughout most of the game.


{{svg:lasker-morris-board.svg "Lasker Morris — board layout"}}
### Components

| Item | Qty | Notes |
|------|-----|-------|
| **Board** | 1 | Three concentric squares joined at midpoints; 24 intersections |
| **Pieces** | 20 | 10 per player in contrasting colours |

### Setup

All 20 pieces begin off the board in each player's reserve. The board starts empty.

### Turns

On each turn, a player must either:

**Option A — Place:** Place one piece from reserve onto any empty intersection on the board.

**Option B — Move:** Move one piece already on the board to an adjacent empty intersection (along a connecting line).

Both options are available on every turn until all reserve pieces have been placed. Once a player's reserve is empty, they can only move existing pieces.

### Mill Formation

Completing a mill (three in a row along a board line) on any turn — whether by placing or moving — lets you remove one opponent piece not in a mill. The same mill protection and reopening rules as Nine Men's Morris apply.

### Flying

When a player is reduced to exactly 3 pieces, they may move any piece to any empty intersection (same as Nine Men's Morris).

### Winning

A player wins when the opponent is reduced to 2 pieces or has no legal move.

### Strategic Note

The key difference from standard Nine Men's Morris is that early placements and early movements are interleaved. A player can begin positional movement before all pieces are placed, opening more complex strategic lines.

### Attribution

Lasker Morris. Designed by Emanuel Lasker, World Chess Champion. Public domain rules. Source: Wikipedia (CC-BY-SA); Murray, H.J.R. — *A History of Board-Games Other Than Chess* (1952, Oxford University Press).
