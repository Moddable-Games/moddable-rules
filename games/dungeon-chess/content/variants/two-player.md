---
title: "Dungeon Chess (Two Player (20×8))"
slug: two-player
board: "20x8"
players: "2"
parent: dungeon-chess
engine:
  topology:
    type: grid
    rows: 20
    cols: 8
  render:
    cellSize: 21
    cellColor: checkered
    labels: false
    zones:
      fill: floor
      voids: [[3,0],[3,1],[3,2],[3,5],[3,6],[3,7],[4,0],[4,1],[4,2],[4,5],[4,6],[4,7],[5,0],[5,1],[5,2],[5,5],[5,6],[5,7],[14,0],[14,1],[14,2],[14,5],[14,6],[14,7],[15,0],[15,1],[15,2],[15,5],[15,6],[15,7],[16,0],[16,1],[16,2],[16,5],[16,6],[16,7]]
      cells:
        - type: p2
          at: [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]]
        - type: water
          at: [[8,2],[8,3],[8,4],[8,5],[9,2],[9,3],[9,4],[9,5],[10,2],[10,3],[10,4],[10,5],[11,2],[11,3],[11,4],[11,5]]
        - type: p1
          at: [[18,0],[18,1],[18,2],[18,3],[18,4],[18,5],[18,6],[18,7],[19,0],[19,1],[19,2],[19,3],[19,4],[19,5],[19,6],[19,7]]
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
      void: "#1a1a2e"
  pieces:
    set: mce-chess
  players: [white, black]
---
