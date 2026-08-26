---
playable: true
title: "Y (Large — 15)"
slug: y-large
board: "triangular hex (side 15)"
players: "2"
parent: hex
win: "Connect all 3 edges"
special: "Large Y board. Deep strategic play."
engine:
  topology:
    type: hex
    shape: triangular
    sideLength: 15
  render:
    cellSize: 14
    frame: triangle
  players: [black, white]
  plugins:
    hex:
      # Y on the 15-row board.
  setup: ""
---

## Y (Large)

{{svg:y-large-board.svg "Y — side-length 15 triangular board"}}

Y on a side-length 15 triangular board. With significantly more cells than the standard size, games develop greater strategic depth and allow more complex multi-edge threats.

### Rules

Same as standard Y: two players alternate placing stones on empty cells of a triangular hex board. The first player to form a connected group touching all three edges wins. The swap rule applies.

### Differences from Standard Y

The larger board means single-edge contact is easy to achieve, but completing the three-edge connection requires sustained positional pressure. Defensive play is more viable at this scale. Games run considerably longer.
