---
playable: false
title: Xiang Fu
slug: xiang-fu
board: "9×9"
players: "2"
parent: chess
win: Duple Checkmate, or capture one Champion then checkmate the remaining one
special: "Xiangqi/chess hybrid by Eventlesstew for the PyChess Variant Design Contest. 9×9 board, dual Champions (royal), Crossbow (diagonal Cannon), piece drops within first two ranks, captures go to hand."
engine:
  topology:
    type: grid
    rows: 9
    cols: 9
    layout: intersections
  players: [red, black]
  pieces:
    set: mce-xiangqi-fairy
  render:
    cellSize: 38
    cellColor: xiangqi
    inset: 20
    river: false
    palace: false
    zones:
      lake:
        fill: "#6b8fb8"
        opacity: 0.5
        cells: [[2,2],[2,3],[2,4],[2,5],[2,6],[3,2],[3,3],[3,4],[3,5],[3,6],[4,2],[4,3],[4,4],[4,5],[4,6],[5,2],[5,3],[5,4],[5,5],[5,6],[6,2],[6,3],[6,4],[6,5],[6,6]]
      drops:
        fill: "#ffffff"
        opacity: 0.55
        cells: [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8]]
    ops:
      - op: rect
        fill: cell-light
        scope: board
      - op: zone-cells
        zones:
          - fill: "#6b8fb8"
            opacity: 0.5
            cells: [[2,2],[2,3],[2,4],[2,5],[2,6],[3,2],[3,3],[3,4],[3,5],[3,6],[4,2],[4,3],[4,4],[4,5],[4,6],[5,2],[5,3],[5,4],[5,5],[5,6],[6,2],[6,3],[6,4],[6,5],[6,6]]
          - fill: "#ffffff"
            opacity: 0.55
            cells: [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8]]
      - op: rect
        fill: none
        scope: board
        stroke: stroke
        stroke-width: 2
      - op: grid-lines
        grouped: true
        order: hv
        color: stroke
        width: 1
      - op: hit-targets
        grouped: true
        radiusFactor: 0.4
  setup: "2rbm4/2cwn4/2g1g4/9/9/9/4G1G2/4NWC2/4MBR2"
  vocabulary:
    mahout:
      symbols:
        0: M
        1: m
    cannon:
      symbols:
        0: C
        1: c
    crossbow:
      symbols:
        0: W
        1: w
    champion:
      symbols:
        0: G
        1: g
  plugins:
    chess:
      pieces:
        mahout:
          type: rider
          dirs: all
          maxSteps: 2
        cannon:
          divergent:
            move:
              type: rider
              dirs: orthogonal
            capture:
              type: hopper
              dirs: orthogonal
              captureSlide: true
        crossbow:
          divergent:
            move:
              type: rider
              dirs: diagonal
            capture:
              type: hopper
              dirs: diagonal
              captureSlide: true
        champion:
          type: rider
          dirs: all
          maxSteps: 1
---

## Xiang Fu

{{svg:xiang-fu-board.svg "Xiang Fu — starting position"}}

Xiang Fu (象孚) is a Xiangqi/chess hybrid created by Eventlesstew for the PyChess Variant Design Contest. It combines Xiangqi's ranging pieces with a dual-Champion checkmate system inspired by Spartan Chess. Piece drops and the Crossbow (a diagonal Cannon) add further tactical depth.

### The Board

A 9×9 grid. Each side's two **Champions** are confined to a **Ring** — a designated zone in each player's territory — and cannot leave it.

### Starting Position

Pieces occupy only the outer quadrants of the board at the start, with the centre empty.

**Black (top-left quadrant, ranks 1–3):**
- Rank 1: Chariot(c) · Bishop(d) · Mahout(e)
- Rank 2: Cannon(c) · Crossbow(d) · Horse(e)
- Rank 3: Champion(c) · · Champion(e)

**Red (bottom-right quadrant, ranks 7–9):**
- Rank 7: Champion(e) · · Champion(g)
- Rank 8: Horse(e) · Crossbow(f) · Cannon(g)
- Rank 9: Mahout(e) · Bishop(f) · Chariot(g)

**FEN:** `2rbm4/2cwn4/2+g1+g4/9/9/9/4+G1+G2/4NWC2/4MBR2[] w - 0 1`

*(+G/+g = Champion (royal), R/r = Chariot, B/b = Bishop, M/m = Mahout, C/c = Cannon, W/w = Crossbow, N/n = Horse. Empty hand []. Red (w) moves first.)*

### Win Conditions (Spartan-style)

Each side has **two Champions** (royal pieces):

- To win, either: **capture one of the opponent’s Champions** (reducing them to a single Champion), then checkmate the remaining one in the standard way; OR
- Achieve **Duple Checkmate** — simultaneously attack both Champions so that neither can escape on the opponent's next move.

### Piece Drops

Pieces you capture go to your hand. On any turn, instead of moving a piece on the board, you may **drop a captured piece** onto any empty square within your own **first two ranks**.

### Pieces

| Piece | Symbol | Movement |
|---|---|---|
| **Champion** | +G | Moves one square any direction. Royal. Confined to the Ring. |
| **Pupil** | G | Moves one square any direction. Non-royal. (A captured Champion enters hand as a Pupil.) |
| **Chariot** | R | Slides any number of squares orthogonally (Xiangqi Chariot = Rook). |
| **Horse** | N | One step orthogonally then one step diagonally outward (Xiangqi Horse). Blockable. |
| **Cannon** | C | Slides orthogonally freely; to capture, must jump over exactly one screen piece. |
| **Crossbow** | W | Slides **diagonally** freely; to capture, must jump over exactly one screen piece on the diagonal. Diagonal version of the Cannon. |
| **Mahout** | M | Moves two squares in any direction (orthogonally or diagonally). Not a jump; blocked by intervening pieces. |
| **Bishop** | B | Slides any number of squares diagonally (chess Bishop). Not blockable by intervening pieces for diagonal slides. |

### Rules

- **Champions** are confined to the Ring at all times and cannot move outside it.
- **Drops** are limited to the dropping player’s own first two ranks.
- When a Champion is captured, it enters the opponent’s hand as a **Pupil** (non-royal) and may be dropped later.
- **Stalemate and repetition** work as in standard chess (draw), not Xiangqi rules.
- The Flying General rule (Generals cannot face each other on an open file) does **not** apply.

### Attribution

Xiang Fu was designed by Eventlesstew for the PyChess Variant Design Contest. Board corrected to 9×9 (not 9×10 as originally described). Rules documented from pychess.org/variants/xiangfu.
