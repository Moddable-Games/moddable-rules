---
title: "Y (Small — 9)"
slug: y-small
board: "triangular hex (side 9)"
players: "2"
parent: hex
win: "Connect all 3 edges"
special: "Compact Y board. Quick games."
engine:
  topology:
    type: hex
    shape: triangular
    sideLength: 9
  render:
    cellSize: 22
    frame: triangle
  players: [black, white]
  setup: ""
---

## Y (Small)

{{svg:y-small-board.svg "Y (Small — 9) — starting position"}}

Y on a side-length 9 triangular board. Quicker games while retaining the 3-edge connection goal.
