---
playable: true
title: Standard 4-Player Halma
slug: standard-4p
board: "16×16"
players: "4"
parent: halma
order: 2
win: Move all your pieces into the diagonally opposite corner camp
special: Four players with 13 pieces each. Optional 2v2 team play with diagonal partners.
engine:
  topology:
    type: grid
    rows: 16
    cols: 16
  players: [red, yellow, green, blue]
  pieces:
    set: mce-cross-race
  setup: "gM,gM,gM,gM,8,bM,bM,bM,bM/gM,gM,gM,gM,8,bM,bM,bM,bM/gM,gM,gM,10,bM,bM,bM/gM,gM,12,bM,bM/16/16/16/16/16/16/16/16/yM,yM,12,rM,rM/yM,yM,yM,10,rM,rM,rM/yM,yM,yM,yM,8,rM,rM,rM,rM/yM,yM,yM,yM,8,rM,rM,rM,rM"
  plugins:
    halma:
      vocabulary: { piece: { symbols: { 0: rM, 1: yM, 2: gM, 3: bM } } }
      # One camp in each corner, clockwise from the bottom right; each player
      # races to the diagonally opposite corner.
      start:
        - [[15,15],[15,14],[15,13],[15,12],[14,15],[14,14],[14,13],[14,12],[13,15],[13,14],[13,13],[12,15],[12,14]]
        - [[15,0],[15,1],[15,2],[15,3],[14,0],[14,1],[14,2],[14,3],[13,0],[13,1],[13,2],[12,0],[12,1]]
        - [[0,0],[0,1],[0,2],[0,3],[1,0],[1,1],[1,2],[1,3],[2,0],[2,1],[2,2],[3,0],[3,1]]
        - [[0,15],[0,14],[0,13],[0,12],[1,15],[1,14],[1,13],[1,12],[2,15],[2,14],[2,13],[3,15],[3,14]]
      goals:
        - [[0,0],[0,1],[0,2],[0,3],[1,0],[1,1],[1,2],[1,3],[2,0],[2,1],[2,2],[3,0],[3,1]]
        - [[0,15],[0,14],[0,13],[0,12],[1,15],[1,14],[1,13],[1,12],[2,15],[2,14],[2,13],[3,15],[3,14]]
        - [[15,15],[15,14],[15,13],[15,12],[14,15],[14,14],[14,13],[14,12],[13,15],[13,14],[13,13],[12,15],[12,14]]
        - [[15,0],[15,1],[15,2],[15,3],[14,0],[14,1],[14,2],[14,3],[13,0],[13,1],[13,2],[12,0],[12,1]]
---

## Standard 4-Player Halma

The four-player form of Halma uses all four corner camps on the same 16&times;16 board, with 13 pieces per player.

{{svg:standard-4p-board.svg "Halma — 4-player starting position"}}

### Setup

**Board:** 16&times;16 checkered board.

**Pieces:** 13 pieces per player in four distinct colours.

**Camps:** Each of the four corners holds one camp. The 13-piece camp occupies a smaller staircase shape than the 2-player camp:

| Column (from corner edge) | Rows occupied (from edge) |
|---|---|
| Edge column | 4 squares |
| Next column inward | 4 squares |
| Next column inward | 3 squares |
| Next column inward | 2 squares |

Each player places all 13 pieces in their assigned corner camp. Players take the four corners; each player's goal camp is the diagonally opposite corner.

**First move:** Decide by mutual agreement or lot; play proceeds clockwise.

### Movement

Movement rules are identical to 2-player Halma:

- **Step:** Move to any adjacent unoccupied square in any of the eight directions.
- **Hop:** Jump over any adjacent piece &mdash; own or any opponent's &mdash; to the vacant square immediately beyond. The hopped piece is not removed.
- **Chain hop:** Continue hopping from the landing square in any direction. A player may stop a chain at any point.

A piece may step or hop but not both in the same turn.

### Camp rule

Once a piece has entered the destination (diagonally opposite) camp, it may not leave.

### Winning

The first player to fill the diagonally opposite corner camp entirely with their own 13 pieces wins.

### Team play (optional)

With four players, two teams of two may be formed: players at diagonally opposite corners form a team. Each player moves their own pieces only. The team wins when both players have each filled their respective opposite camp. Partners may use each other's pieces as stepping stones for hops.

### Attribution

Halma. Invented 1883, George Howard Monks, Boston. Public domain. Rules confirmed from Ludeme/Ludii (Maastricht University game research library) and jeromydarling/heritage-parlor (independent rules and piece count confirmation).
