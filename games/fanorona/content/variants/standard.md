---
title: Fanorona (Standard)
slug: standard
board: "5×9"
players: "2"
parent: fanorona
engine:
  topology:
    type: grid
    rows: 5
    cols: 9
    layout: intersections
  render:
    cellSize: 40
    pieceScale: 0.78
    cellColor: uniform
    decorations:
      - type: diagonals
        pattern: alternating
  surface:
    colors:
      cell-light: "#d9b483"
      stroke: "#7a4510"
  pieces:
    set: playstrategy-go-classic
  players: [white, black]
  setup: "bbbbbbbbb/bbbbbbbbb/bwbw1bwbw/wwwwwwwww/wwwwwwwww"
---

## Fanorona (Standard)

{{svg:standard-board.svg "Fanorona (Standard) — starting position"}}
