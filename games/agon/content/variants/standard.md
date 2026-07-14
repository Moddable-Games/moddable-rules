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
    orientation: pointy
  render:
    cellSize: 22
    cellColor: rings
    centreMarker: "★"
  surface:
    colors:
      cell-light: "#e6a817"
      cell-dark: "#8b2240"
      stroke: "rgba(0,0,0,0.25)"
      background: "#2a1a0a"
      border: "#6b4226"
  pieces:
    set: mce-chess
  players: [white, black]
  setup: "-5,0:Q,5,0:q,4,-5:P,5,-2:P,3,2:P,-1,5:P,-5,4:P,-1,-4:P,1,-5:p,5,-4:p,1,4:p,-4,5:p,-5,2:p,-3,-2:p"
---
