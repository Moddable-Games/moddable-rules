---
title: Spantsiretti
playable: true
slug: spantsiretti
board: "10×8"
players: "2"
parent: draughts
order: 20
win: Capture or block all opponent pieces
special: Russian Draughts rules on a wider 10×8 board. 20 pieces per side.
engine:
  topology:
    type: grid
    rows: 8
    cols: 10
  players: [white, black]
  setup: "1b1b1b1b1b/b1b1b1b1b1/1b1b1b1b1b/10/10/w1w1w1w1w1/1w1w1w1w1w/w1w1w1w1w1"
  plugins:
    draughts:
      extends: "russian"
      piecesPerPlayer: 15
---

## Spantsiretti

Spantsiretti is Russian Draughts played on a wider 10×8 board rather than the standard 8×8. The rules are identical to Russian Draughts (backward capture for men, mid-jump promotion, flying kings, no majority rule) but the extra two columns and the resulting 20 pieces per side create a more open game with greater room for long-range tactics.

{{svg:spantsiretti-board.svg "Spantsiretti — starting position"}}

### Setup

**Board:** 10×8 checkered board (10 columns, 8 rows). Only the dark squares are used. Orient the board so each player has a dark corner square on their lower left.

**Pieces:** 20 men per player (five per row, four rows each). White occupies the dark squares of rows 1–4. Black occupies the dark squares of rows 5–8. There are no empty rows between the players at the start.

**First move:** White moves first.

### Rules

- **Men movement:** Men move diagonally forward only, one square at a time, to an unoccupied dark square.
- **Men capture:** Men capture by jumping diagonally over an adjacent opponent piece to the vacant square beyond. Men can capture both **forwards and backwards**.
- **Mandatory capture:** If a capture is available, it must be taken.
- **Free choice:** When multiple capture sequences are available, the player may freely choose which to take. There is no majority rule.
- **Multi-capture:** After each jump, if another capture is immediately available with the same piece, the sequence continues.
- **Immediate removal:** Captured pieces are removed from the board immediately after each individual jump, not held until the end of the sequence.

### King Promotion

- **Flying kings:** Kings move any number of unoccupied squares diagonally in any direction.
- **Mid-jump promotion:** If a man reaches the opponent's back row during a multi-capture sequence, it is promoted to a king **immediately** and continues jumping as a king (with king movement rules) in the same turn.
- **King capture:** Kings capture by jumping over a single opponent piece at any distance along a diagonal, landing on any empty square beyond.
- Kings may continue capturing in any direction after each jump, including reversing direction, provided they do not jump the same piece twice.

### Winning

A player wins when their opponent has no legal move: all pieces captured or all pieces blocked.

### Draws

The game is drawn when:

- Both players agree.
- The same position occurs three times.
- A player with three or more kings cannot win against a lone opposing king within 15 moves.

### Attribution

Traditional variant. Public domain. Sources: Checkers &amp; Draughts Wiki — Portable Draughts Notation article (GameType 41: Spantsiretti, Russian draughts 10×8); mlwi.magix.net — international/Polish checkers variants page; mig0/Games-Checkers repository (lists russian_10x8 / spantsiretti as a supported variant).
