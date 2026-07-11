---
title: Agon (Standard)
slug: standard
board: "hex radius 5"
players: "2"
parent: agon
engine:
  topology:
    type: hex
    shape: hexagonal
    radius: 5
    orientation: flat
  render:
    cellSize: 20
  surface:
    colors:
      cell-light: "#e6a817"
      cell-dark: "#8b2240"
      stroke: "rgba(0,0,0,0.25)"
      background: "#2a1a0a"
  pieces:
    set: mce-chess
  players: [white, black]
---
