---
title: Brazilian Draughts
slug: brazilian
board: "8×8"
players: "2"
parent: draughts
order: 8
win: Capture or block all opponent pieces
special: International rules on 8×8 board. Flying kings. Majority capture. Delayed removal.
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "1b1b1b1b/b1b1b1b1/1b1b1b1b/8/8/w1w1w1w1/1w1w1w1w/w1w1w1w1"
---

## Brazilian Draughts

International Draughts rules applied to an 8×8 board. Combines the smaller board's faster gameplay with the tactical depth of flying kings, mandatory longest-chain capture, and delayed removal. The standard competitive game in Brazil.

{{svg:english-board.svg "Brazilian Draughts — starting position"}}

### Setup

**Board:** 8×8 checkered board, dark squares only. Same layout as English Draughts.

**Pieces:** 12 men per player on dark squares of the three nearest rows.

**First move:** White moves first.

### Rules

- **Men movement:** Men move diagonally forward only, one square at a time.
- **Men capture:** Men capture by jumping diagonally over an adjacent opponent piece. Men can capture both forwards and backwards.
- **Mandatory capture:** Captures are compulsory.
- **Majority rule:** When multiple capture sequences are available, the player must choose the sequence that captures the most pieces.
- **Delayed removal:** Captured pieces remain on the board until the entire multi-jump sequence is complete. A jumped piece cannot be jumped again, but it still physically occupies its square during the sequence.
- **No mid-jump promotion:** If a man passes through the back row during a multi-jump (without ending there), it is NOT promoted. Promotion only occurs when the piece ends its turn on the back row.

### King Promotion

- **Flying kings:** Kings move any number of unoccupied squares diagonally in any direction.
- **King capture:** Kings capture by jumping over a single opponent piece at any distance along a diagonal, landing on any open square beyond.

### Winning

A player wins when their opponent has no legal move: all pieces captured or all pieces blocked.

### Draws

Same conditions as International Draughts.

### Strategy

The majority rule on a smaller board makes combinations more immediately available than in 10×10 International. Flying kings dominate the endgame decisively. The delayed removal rule creates situations where a "dead" piece still blocks a capture path within the same sequence.

### Attribution

Traditional variant. Public domain. Governed by the Confederação Brasileira de Jogo de Damas. Source: Wikipedia (CC-BY-SA).
