---
title: Royal Game of Ur (Standard)
slug: standard
board: "3×8 with voids"
players: "2"
parent: royal-ur
engine:
  topology:
    type: grid
    rows: 3
    cols: 8
  render:
    cellSize: 40
    cellColor: checkered
    labels: false
    zones:
      cells:
        - type: rosette
          at: [[0,0],[0,6],[1,3],[2,0],[2,6]]
        - type: floor
          at: [[0,1],[0,2],[0,3],[0,7],[1,0],[1,1],[1,2],[1,4],[1,5],[1,6],[1,7],[2,1],[2,2],[2,3],[2,7]]
  surface:
    colors:
      floor: "#d4b896"
      floor-stroke: "#8b7355"
      rosette: "#c4956a"
      rosette-stroke: "#8b5a3a"
  pieces:
    set: playstrategy-draughts-plain
  players: [white, black]
---
