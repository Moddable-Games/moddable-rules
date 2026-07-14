---
title: Alquerque
slug: alquerque
board: "5×5"
players: "2"
parent: draughts
order: 6
win: Capture or block all opponent pieces
special: The common ancestor. Movement along lines (orthogonal and diagonal). No promotion.
engine:
  surface:
    colors:
      cell-light: "#d9b483"
      stroke: "rgba(0,0,0,0.1)"
  topology:
    type: grid
    rows: 5
    cols: 5
    layout: intersections
  render:
    cellSize: 48
    boardStyle: alquerque
    ops:
      - op: rect
        fill: monoSquare
        scope: board
        rx: 4
      - op: grid-lines
        grouped: false
        order: hv
        color: gridLine
        width: 2
      - op: diagonals
        pattern: alternating
        color: gridLine
        width: 1.5
      - op: markers
        allCells: true
        radius: 3
        fill: gridLine
        hits:
          radiusFactor: 0.4
          idStyle: algebraic
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
  setup: "bbbbb/bbbbb/bb1ww/wwwww/wwwww"
---

## Alquerque

The common ancestor of all draughts variants. First documented by Abu al-Faraj al-Isfahani in the 10th century, with detailed rules recorded in Alfonso X's Libro de los Juegos (1283, Spain). Played on a 5×5 grid of intersecting lines rather than on squares, with movement along the connections.

{{svg:alquerque-board.svg "Alquerque — starting position"}}

### Setup

**Board:** 5×5 grid of 25 intersection points, connected by orthogonal lines (horizontal and vertical) and diagonal lines on alternating 2×2 squares. Not all points have diagonal connections: some intersections have 8 lines leading from them, others only 4.

**Pieces:** 12 per player (24 total on a 25-point board). Each player occupies their two nearest rows (10 pieces) plus the two points on their side of the middle row. The centre point starts empty.

**First move:** Players agree or draw lots.

### Rules

- **Movement:** Pieces move one point along any connected line (orthogonal or diagonal) to an adjacent empty point. Movement is allowed in any direction, including backwards.
- **Capture:** A piece captures by jumping over an adjacent opponent piece along a connected line to the empty point directly beyond. The captured piece is removed.
- **Mandatory capture:** Captures are compulsory. If a capture is available, it must be taken.
- **Multiple captures:** If after a jump another capture is immediately available along any connected line, the piece must continue jumping. A multi-capture sequence must be completed in full.
- **No promotion:** There is no king or officer rank. All pieces move identically throughout the game.
- **Line constraint:** Movement and capture can only occur along lines drawn on the board. A diagonal move is only legal at intersections connected by a diagonal line.

### Winning

A player wins when their opponent has no legal move: all pieces captured or all remaining pieces blocked.

### Historical Note

The rules above follow the Alfonso X source (1283). R.C. Bell's widely cited modern reconstruction (1960s) adds restrictions: no backward movement for men, and no revisiting a previously occupied point in the same turn. Both versions are historically attested. The unrestricted version better represents the original game from which draughts evolved.

### Strategy

With no promotion and symmetric piece capabilities, position is everything. The centre point controls the most lines and is the strongest position on the board. Force your opponent into corners where their pieces have fewer connections and fewer escape routes.

### Attribution

Traditional game. Public domain. Documented in Libro de los Juegos (Alfonso X, 1283). Source: Wikipedia (CC-BY-SA), Murray's A History of Board Games Other Than Chess (1952).
