---
title: "Six Men's Morris"
slug: six-mens-morris
board: Two concentric squares (16 intersections)
players: "2"
parent: morris
order: 2
win: Reduce opponent to 2 pieces or block all their moves
special: "Two concentric squares with connecting lines. The medieval European standard form before Nine Men's Morris predominated."
engine:
  topology:
    type: graph
    structure: concentric-rings
    params:
      rings: 2
      midpoints: true
  players: [white, black]
  setup: ""
---

## Six Men's Morris

The medieval standard form of the Mill game family, widely played across Europe from the 12th to 15th centuries before Nine Men's Morris became dominant. Six Men's Morris uses two concentric squares joined at the midpoints of each side. With 6 pieces per side and 16 intersection points, the game is faster and more tactical than Nine Men's Morris, with less room for the extended blocking structures the larger game allows.


{{svg:six-mens-morris-board.svg "Six Men's Morris — board layout"}}
### Components

| Item | Qty | Notes |
|------|-----|-------|
| **Board** | 1 | Two concentric squares; each side of each square has 3 intersections; squares connected at midpoints |
| **Pieces** | 12 | 6 per player in contrasting colours |

### Board

The board consists of two squares — one outer, one inner — each with 8 intersection points (4 corners + 4 midpoints). The midpoint of each side of the outer square is connected to the midpoint of the corresponding side of the inner square. Total: 16 points. Mills form along each side of either square (3 points per side), giving 8 possible mills.

### Phase 1 — Placement

Players alternate placing one piece per turn onto any empty intersection until each has placed all 6 pieces.

**Mill formation during placement:** If a player places a piece to complete a mill (three in a row along any side of either square), they may immediately remove any one opponent piece that is not part of a mill. An opponent piece in a mill may only be removed if no non-mill pieces remain.

### Phase 2 — Movement

Players alternate moving one piece per turn to an adjacent empty intersection (along a connecting line on the board). Diagonal movement is not allowed.

**Mill formation during movement:** Completing a mill during a move triggers removal of one opponent piece (same rules as placement phase). A mill can be broken and reformed on subsequent turns to trigger repeated removals.

### Winning

A player wins when the opponent is reduced to 2 pieces (unable to form any mill) or when the opponent has no legal move.

### Attribution

Six Men's Morris. Traditional game, medieval Europe. Public domain. Source: Murray, H.J.R. — *A History of Board-Games Other Than Chess* (1952, Oxford University Press); Wikipedia (CC-BY-SA).
