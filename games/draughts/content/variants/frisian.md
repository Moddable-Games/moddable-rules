---
title: Frisian Draughts
slug: frisian
board: "10×10"
players: "2"
parent: draughts
order: 4
win: Capture or block all opponent pieces
special: Captures in all 8 directions. 3-move king limit. King preference on equal chains.
engine:
  topology:
    type: grid
    rows: 10
    cols: 10
  players: [white, black]
  setup: "1b1b1b1b1b/b1b1b1b1b1/1b1b1b1b1b/b1b1b1b1b1/10/10/1w1w1w1w1w/w1w1w1w1w1/1w1w1w1w1w/w1w1w1w1w1"
---

## Frisian Draughts

International Draughts with one radical addition: pieces can capture orthogonally (horizontally and vertically) as well as diagonally. This expands capture directions from 4 to 8, creating far more tactical combinations. Originating in Friesland (Netherlands), it has its own World Championship (Frysk Dammjen) recognised by the World Draughts Federation.

{{svg:frisian-board.svg "Frisian Draughts — starting position"}}

### Setup

Identical to International Draughts. 10×10 checkered board, 20 men per player on the dark squares of their four nearest rows.

**First move:** White moves first.

### Rules

All International Draughts rules apply, with the following changes:

- **8-direction capture:** Both men and kings can capture in all 8 directions: diagonal (forward and backward) plus orthogonal (up, down, left, right). This is the defining feature of Frisian Draughts.
- **Movement unchanged:** Non-capturing moves remain diagonal only. Men move diagonally forward one square. Kings fly diagonally any number of squares. Orthogonal movement is only available when capturing.
- **Men capture backwards:** Men capture in all 8 directions, including backward diagonal and backward orthogonal.
- **Majority rule:** Must take the sequence that captures the most pieces (highest "shot value").
- **King preference:** If both a man and a king have capture sequences of equal value, the king must make the capture.
- **3-move king limit:** A king may make only 3 consecutive non-capturing moves. After 3, the player must move a man or make a capture. If a player has only kings remaining, this restriction is lifted.
- **King distance capture:** Kings capture at distance in any of the 8 directions (not just diagonally), jumping over a single opponent piece with empty space beyond.
- **Delayed removal:** Captured pieces remain on the board until the entire multi-jump sequence completes (same as International).

### Winning

A player wins when their opponent has no legal move available: all pieces captured or all pieces blocked.

### Draws

Same draw conditions as International Draughts.

### Strategy

The orthogonal capture dimension creates combinations invisible in standard International play. Pieces that would be safe on the diagonal are now vulnerable to horizontal and vertical jumps. The 3-move king limit prevents drawn-out endgames with aimless king manoeuvring, forcing decisive action. The king preference rule means your kings are forced into capture exchanges even when a man could take the same chain at less cost.

### Attribution

Traditional variant from Friesland, Netherlands. Public domain. Recognised by the World Draughts Federation (FMJD). Source: Wikipedia (CC-BY-SA).
