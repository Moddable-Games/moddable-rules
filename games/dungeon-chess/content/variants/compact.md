---
title: "Dungeon Chess (Compact Skirmish (10×10))"
slug: compact
board: "10x10"
players: "2"
parent: dungeon-chess
engine:
  topology:
    type: grid
    rows: 10
    cols: 10
  render:
    cellSize: 24
    cellColor: checkered
    labels: false
    zones:
      fill: floor
      cells:
        - type: p2
          at: [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9]]
        - type: water
          at: [[3,3],[3,4],[3,5],[3,6],[4,3],[4,4],[4,5],[4,6],[5,3],[5,4],[5,5],[5,6],[6,3],[6,4],[6,5],[6,6]]
        - type: p1
          at: [[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9]]
  surface:
    colors:
      floor: "#d4c4a8"
      floor-stroke: "#2a2a2a"
      p1: "#f0d080"
      p1-stroke: "#c08820"
      p2: "#f0b0b0"
      p2-stroke: "#c05050"
      water: "#4a90c8"
      water-stroke: "#2a2a2a"
      
  pieces:
    set: mce-chess
  players: [white, black]
---
