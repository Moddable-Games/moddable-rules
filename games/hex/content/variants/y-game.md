---
title: "Y"
slug: y-game
board: "triangular hex"
players: "2"
parent: hex
win: "Connect all 3 edges"
special: "Triangular board. Win by connecting all three sides with a single chain. Generalises Hex to 3-edge connection."
engine:
  topology:
    type: hex
    shape: triangular
    sideLength: 12
  players: [black, white]
  plugins:
    hex:
      winCondition: connect-all-edges
      edgeCount: 3
      swapRule: true
---

## Y

Invented by Claude Shannon and Craige Schensted in the 1950s. Played on a triangular board of hexagonal cells. Two players alternate placing stones. The first player to form a connected group touching all three edges of the triangle wins.

### Board

A triangular grid of hexagonal cells. Standard sizes range from side-length 9 to 15. Each edge of the triangle is one "side" — there are three sides total.

Corner cells touch two edges simultaneously.

### Setup

The board starts empty. Black plays first.

### Rules

1. Players alternate placing one stone of their colour on any empty cell
2. Stones never move or are captured once placed
3. The first player to form a single connected group of their stones that touches all three edges wins
4. The swap rule applies: after Black's first move, White may choose to swap colours instead of placing a stone

### Key Differences from Hex

| Concept | Hex | Y |
|---------|-----|---|
| Board shape | Rhombus/parallelogram | Equilateral triangle |
| Edges | 4 (2 per player) | 3 (shared) |
| Win condition | Connect YOUR 2 opposite edges | Connect ALL 3 edges |
| Corner ownership | Corners belong to one player's edges | Corners touch 2 edges (valuable) |
| Draw possibility | Impossible (Hex property) | Impossible (same topological guarantee) |

### Why This Tests the Engine

Y generalises the connection-win mechanic from "2 edges, each owned by a player" to "3 edges, first to touch all three". The engine's `hasPath()` traversal needs to detect multi-target connectivity — not just "does a path exist from edge A to edge B" but "does a single group touch edges A AND B AND C".

The topology must support a triangular hex grid (not just hexagonal or rhombus). The win-detection rule must be parametric over edge count, not hardcoded to 2.
