---
title: "Hex (11×11)"
slug: standard
board: "11×11 rhombus"
players: "2"
parent: hex
order: 1
win: "Connect opposite edges"
special: "Standard tournament size. 121 cells. First player advantage offset by swap rule."
engine:
  topology:
    type: hex
    shape: rhombus
    rows: 11
    cols: 11
  render:
    cellSize: 20
  players: [black, white]
  setup: ""
---

## Hex (11×11)

{{svg:standard-board.svg "Hex (11×11) — standard tournament board"}}

The standard tournament size for Hex, used in all major competitions and online play. The 11×11 board provides 121 cells, offering enough depth for strategic play while keeping games to a manageable length (typically 20-40 minutes for experienced players).

### Rules

Two players (Black and White) alternate turns placing one stone of their colour on any empty hexagonal cell. Black connects the top-left and bottom-right edges; White connects the top-right and bottom-left edges. The first player to complete an unbroken chain of their stones linking their two assigned edges wins.

A draw is mathematically impossible: every completed board has exactly one winner (proven by the hex theorem).

### Swap Rule

To offset the proven first-player advantage, the swap rule (also called the pie rule) is standard. After Black's first move, White may choose to either play normally (place a White stone) or swap colours, taking ownership of Black's opening stone. This discourages Black from opening with an obviously strong move.

### Strategy Notes

Centre cells are strongest. The acute corners (where your two edges are closest) are critical defensive positions. Ladder formations, bridges (two stones one apart that cannot both be blocked), and edge templates are fundamental tactical tools.
