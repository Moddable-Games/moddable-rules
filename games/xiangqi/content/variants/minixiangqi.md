---
title: Minixiangqi
slug: minixiangqi
board: "7×7"
players: "2"
parent: xiangqi
win: Checkmate the General
special: "Xiangqi condensed to a 7×7 board. No river, no Advisors or Elephants. Soldiers can move sideways from the start. Invented by Shigenobu Kusumoto, Osaka, 1973."
engine:
  topology:
    type: grid
    rows: 7
    cols: 7
  players: [red, black]
  setup: "rchkhcr/p1ppp1p/7/7/7/P1PPP1P/RCHKHCR"
  render:
    cellSize: 40
    ops:
      - op: cells
        pattern: uniform
        fill: "#f5deb3"
        stroke: "#4a3520"
        interactive: true
      - op: grid-lines
        color: "#4a3520"
        width: 2
        grouped: false
    decorations: []
---

## Minixiangqi

{{svg:minixiangqi-board.svg "Minixiangqi — starting position"}}

Minixiangqi is Xiangqi condensed to a 7×7 board. It was invented in 1973 by Shigenobu Kusumoto of Osaka, Japan. The game preserves the essential character of Xiangqi — the General in a palace, the screen-jumping Cannon, the blockable Horse — while removing the pieces that depend most on board depth.

### Piece Set

Minixiangqi removes the Advisor and Elephant from both sides. Each side has: **General (1), Horses (2), Chariots (2), Cannons (2), Soldiers (5)**.

### Setup

**Board:** 7 files (a–g) × 7 ranks. Pieces are placed on intersections. There is no river. Each side has a **palace**: a 3×3 box (with diagonal lines) in one corner of the board. The General cannot leave its palace.

**Starting position:**

| Rank | Contents |
|---|---|
| Rank 7 (Black back) | Chariot(a) · Cannon(b) · Horse(c) · General(d) · Horse(e) · Cannon(f) · Chariot(g) |
| Rank 6 (Black soldiers) | Soldier(a) · · Soldier(c) · Soldier(d) · Soldier(e) · · Soldier(g) |
| Ranks 3–5 | Empty |
| Rank 2 (Red soldiers) | Soldier(a) · · Soldier(c) · Soldier(d) · Soldier(e) · · Soldier(g) |
| Rank 1 (Red back) | Chariot(a) · Cannon(b) · Horse(c) · General(d) · Horse(e) · Cannon(f) · Chariot(g) |

Red moves first.

**FEN:** `rcnkncr/p1ppp1p/7/7/7/P1PPP1P/RCNKNCR w - - 0 1`

*(R/r = Chariot, C/c = Cannon, N/n = Horse, K/k = General, P/p = Soldier.)*

### Pieces

| Piece | Movement |
|---|---|
| **General (K)** | One step orthogonally or along palace diagonal lines. Confined to the palace. Flying General rule applies. |
| **Chariot (R)** | Slides any number of squares orthogonally. |
| **Cannon (C)** | Slides orthogonally freely; to capture, must jump over exactly one screen piece. |
| **Horse (N)** | One step orthogonally, then one step diagonally outward. Blocked if the orthogonal step is occupied. |
| **Soldier (P)** | One step forward or one step sideways from the start. |

### Rules

All standard Xiangqi rules apply with these differences:

**No river.** The board is undivided.

**No Advisors or Elephants.**

**Soldiers move sideways from the start.** In standard Xiangqi, Soldiers gain lateral movement only after crossing the river. Since Minixiangqi has no river, Soldiers can always move one square forward or sideways.

**Flying General rule** applies as normal: the two Generals cannot face each other on an open file.

**Stalemate is a loss** for the player who cannot move.

**Perpetual checks and chases:** A player making perpetual checks or perpetually chasing an unprotected piece is ruled to have lost unless they stop.

### Win Conditions

Checkmate the opponent's General. The General may never move into or remain in check. Stalemate is a loss.

### Attribution

Minixiangqi was invented by Shigenobu Kusumoto, Osaka, Japan, 1973. Public domain. Rules documented from pychess.org/variants/minixiangqi.
