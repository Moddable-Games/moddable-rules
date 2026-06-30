---
title: Morabaraba
slug: morabaraba
board: Three concentric squares (24 intersections)
players: "2"
parent: morris
order: 6
win: Reduce opponent to 2 cows or block all their moves
special: South African national game. Cows instead of men. Special rules for the three-cow endgame.
engine:
  topology:
    type: graph
    nodes: [a1, a4, a7, d7, g7, g4, g1, d1, b2, b4, b6, d6, f6, f4, f2, d2, c3, c4, c5, d5, e5, e4, e3, d3]
    edges:
      - [a1, d1]
      - [d1, g1]
      - [g1, g4]
      - [g4, g7]
      - [g7, d7]
      - [d7, a7]
      - [a7, a4]
      - [a4, a1]
      - [b2, d2]
      - [d2, f2]
      - [f2, f4]
      - [f4, f6]
      - [f6, d6]
      - [d6, b6]
      - [b6, b4]
      - [b4, b2]
      - [c3, d3]
      - [d3, e3]
      - [e3, e4]
      - [e4, e5]
      - [e5, d5]
      - [d5, c5]
      - [c5, c4]
      - [c4, c3]
      - [d1, d2]
      - [d2, d3]
      - [g4, f4]
      - [f4, e4]
      - [d7, d6]
      - [d6, d5]
      - [a4, b4]
      - [b4, c4]
  players: [white, black]
---

## Morabaraba

The national board game of South Africa, played across the country and particularly popular among Zulu, Sotho, and Ndebele communities. The game is a direct descendent of Nine Men's Morris brought to southern Africa during colonial trade contact, but it has developed distinct rules and a rich local tradition. It is played as a recognised sport with national championships. Pieces are called *cows* (*inkomo*) rather than men.


{{svg:morabaraba-board.svg "Morabaraba — board layout"}}
### Components

| Item | Qty | Notes |
|------|-----|-------|
| **Board** | 1 | Three concentric squares joined at midpoints; 24 intersections |
| **Cows** | 24 | 12 per player in contrasting colours |

### Phase 1 — Placement

Players alternate placing one cow per turn onto any empty intersection until each has placed all 12 cows. Completing a mill (three cows in a row along a board line) during placement lets you remove any one opponent cow not in a mill.

### Phase 2 — Movement

Players alternate moving one cow to an adjacent empty intersection (along a connecting line).

**Mill and removal:** Completing a mill during movement triggers removal of one opponent cow (same rules as placement).

**Protected mills:** A cow in a mill may not be captured unless all opponent cows not in mills have already been captured.

### The Three-Cow Endgame (Flying)

When a player is reduced to exactly 3 cows, they may move any cow to any empty intersection on the board — not just adjacent ones. This mirrors Nine Men's Morris flying.

**Special three-cow rule:** When both players have 3 cows, if a player forms a mill, they may remove any opponent cow, including one in a mill. The mill protection rule is suspended in the three-cow endgame.

### Winning

A player wins when the opponent is reduced to 2 cows (cannot form a mill) or cannot move.

### Draws

The game is a draw when a position repeats five times (more lenient than international chess draw rules), or when both players agree.

### Attribution

Morabaraba. South African national game. Public domain. Source: Mind Sports South Africa official rules; Wikipedia (CC-BY-SA).
