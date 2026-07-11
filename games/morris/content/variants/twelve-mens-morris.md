---
title: "Twelve Men's Morris"
slug: twelve-mens-morris
board: Three concentric squares with diagonals (24 intersections)
players: "2"
parent: morris
order: 4
win: Reduce opponent to 2 pieces or block all their moves
special: "Identical board to Nine Men's Morris but with corner diagonal connections. 12 pieces per side. No flying rule."
engine:
  topology:
    type: graph
    structure: concentric-rings
    params:
      rings: 3
      midpoints: true
      diagonals: true
  players: [white, black]
  setup: ""
---

## Twelve Men's Morris

An extension of Nine Men's Morris using the same three concentric square board but with additional diagonal connections at every corner. The diagonals give each corner piece two possible mill directions (along the square side and along the diagonal), creating more opportunities to form mills. With 12 pieces per side (instead of 9), the game is denser and the placement phase longer. The flying rule is omitted because 12 pieces rarely reduce to 3 in normal play.


{{svg:twelve-mens-morris-board.svg "Twelve Men's Morris — board layout"}}
### Components

| Item | Qty | Notes |
|------|-----|-------|
| **Board** | 1 | Three concentric squares with diagonals at all corners; 24 intersections |
| **Pieces** | 24 | 12 per player in contrasting colours |

### Board

Same structure as Nine Men's Morris (three concentric squares, midpoints connected) with additional diagonal lines connecting the corners of adjacent squares. Each corner point now has three connections: along two square sides and along one diagonal. Total possible mills: 16 orthogonal (same as Nine Men's Morris) + 8 diagonal = 24 mills.

### Phase 1 — Placement

Players alternate placing one piece per turn until each has placed all 12 pieces.

**Mill formation:** Completing a mill (three in a row along any connected line, including diagonals) lets you remove one opponent piece not in a mill.

### Phase 2 — Movement

Players alternate moving one piece to an adjacent empty intersection (along any connection line, including diagonals).

**Mill formation:** Completing a mill triggers removal of one opponent piece (same rules as placement).

### Key Difference from Nine Men's Morris

The diagonal connections mean that corner pieces participate in diagonal mills as well as orthogonal ones. A piece at the outer corner connects to the corresponding middle square corner, and that to the inner corner — three diagonal mills per corner axis, four axes = 4 diagonal mills (on the long diagonals from corner to corner across the board).

### No Flying Rule

With 12 pieces per side, the endgame rarely reaches 3 pieces. Flying is not used. A player reduced to 2 pieces loses immediately (cannot form a mill).

### Winning

A player wins when the opponent is reduced to 2 pieces or cannot move.

### Attribution

Twelve Men's Morris. Traditional game. Public domain. Source: Murray, H.J.R. — *A History of Board-Games Other Than Chess* (1952, Oxford University Press); Wikipedia (CC-BY-SA).
