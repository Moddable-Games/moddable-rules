---
title: Dou Shou Qi (Standard)
slug: standard
board: "9×7"
players: "2"
parent: dou-shou-qi
engine:
  topology:
    type: grid
    rows: 9
    cols: 7
  render:
    cellSize: 40
    cellColor: checkered
    labels: false
    zones:
      fill: floor
      cells:
        - type: den
          at: [[0,3],[8,3]]
        - type: trap
          at: [[0,2],[0,4],[1,3],[7,3],[8,2],[8,4]]
        - type: river
          at: [[3,1],[3,2],[3,4],[3,5],[4,1],[4,2],[4,4],[4,5],[5,1],[5,2],[5,4],[5,5]]
  surface:
    colors:
      floor: "#7cb342"
      floor-stroke: "#558b2f"
      river: "#4a90c8"
      river-stroke: "#2a6a9a"
      den: "#4a3520"
      den-stroke: "#2a1a10"
      trap: "#c8963c"
      trap-stroke: "#8b6520"
  pieces:
    set: mce-jungle
    fenMap:
      E: wElephant
      e: bElephant
      L: wLion
      l: bLion
      T: wTiger
      t: bTiger
      P: wLeopard
      p: bLeopard
      D: wDog
      d: bDog
      W: wWolf
      w: bWolf
      C: wCat
      c: bCat
      R: wRat
      r: bRat
    borders:
      white: "#1565c0"
      black: "#c62828"
  players: [white, black]
  setup: "l5t/1d3c1/r1p1w1e/7/7/7/E1W1P1R/1C3D1/T5L"
---
