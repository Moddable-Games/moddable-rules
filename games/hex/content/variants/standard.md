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

Standard Hex on an 11×11 rhombus board. Two players alternate placing stones. First to connect their two opposite edges wins. Swap rule balances first-player advantage.
