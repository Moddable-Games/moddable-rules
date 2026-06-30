---
title: Diagonal Draughts
slug: diagonal
board: "10×10"
players: "2"
parent: draughts
order: 17
win: Capture or block all opponent pieces
special: Pieces start along the diagonal. The long diagonal of the board is empty at setup.
engine:
  topology:
    type: grid
    rows: 10
    cols: 10
  players: [white, black]
---

## Diagonal Draughts

A 19th-century variant of International Draughts in which the starting position is rotated: instead of filling the first four rows, players arrange their pieces along the sides of the board's main diagonal, leaving the long diagonal itself empty. The result is an unusual opening geometry that dissolves into standard International play once the first captures are made.

{{svg:diagonal-board.svg "Diagonal Draughts — starting position"}}

### Setup

**Board:** 10×10 checkered board. Only the 50 dark squares are used. Orient the board so the long diagonal runs from each player's lower-left to upper-right corner.

**Pieces:** 20 men per player. Instead of filling rows, pieces are placed on all dark squares **except** those on the long diagonal (the diagonal running from corner a1 to corner j10). Each player's pieces occupy the dark squares on their own side of that diagonal: one player on the lower-right triangle, the other on the upper-left triangle.

**First move:** White (lower-right) moves first.

### Rules

- **Men movement:** Men move diagonally forward one square at a time, following the same movement rules as International Draughts.
- **Men capture:** A man captures by jumping diagonally over an adjacent opponent piece to the vacant square beyond. Captures may be made in any diagonal direction.
- **Mandatory capture:** If a capture is available, it must be taken.
- **Majority rule:** When multiple capture sequences are available, the player must take the sequence that captures the maximum number of pieces. If sequences are tied in length, the player may freely choose.
- **Multi-capture:** After each jump, if another capture is immediately available, the sequence continues.

### King Promotion

When a man ends its turn on the opponent's back row (the far edge of the board), it is promoted to a king.

- **Flying kings:** Kings move any number of unoccupied squares diagonally in any direction.
- **King capture:** Kings capture by jumping over a single opponent piece at any distance along a diagonal, landing on any empty square beyond.
- **No mid-sequence promotion:** A man passing through the back row during a multi-jump sequence is not promoted unless it stops there.

### Winning

A player wins by capturing all opponent pieces or blocking all remaining opponent pieces from moving.

### Attribution

Historical variant, documented from at least the 19th century. Public domain. Sources: Ludeme/Ludii — Diagonal Draughts.lud (SHA 9405c8a7, Maastricht University Ludii Project); J.P. Neto, *World Abstract Games* — Checkers page (jpneto.github.io).
