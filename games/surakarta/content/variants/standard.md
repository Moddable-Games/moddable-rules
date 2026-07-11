---
title: Surakarta (Standard)
slug: standard
board: "6×6"
players: "2"
parent: surakarta
engine:
  topology:
    type: grid
    rows: 6
    cols: 6
    layout: intersections
  render:
    cellSize: 50
    cellColor: uniform
    decorations:
      - type: arcs
  surface:
    colors:
      cell-light: "#d9c5a0"
      stroke: "#8b7355"
  pieces:
    set: playstrategy-go-classic
    vocabulary:
      w:
        type: stone
        color: white
      b:
        type: stone
        color: black
  players: [white, black]
  setup: "bbbbbb/bbbbbb/6/6/wwwwww/wwwwww"
---
