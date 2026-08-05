---
title: Czech Draughts
slug: czech
board: "8×8"
players: "2"
parent: draughts
order: 13
win: Capture or block all opponent pieces
special: King captures take priority over man captures. Mid-jump promotion. No majority rule for men.
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "1b1b1b1b/b1b1b1b1/1b1b1b1b/8/8/w1w1w1w1/1w1w1w1w/w1w1w1w1"
  plugins:
    draughts:
      piecesPerPlayer: 12
      directions: "diagonal"
      manCapture: "forward"
      manMove: "forward"
      forcedCapture: true
      maximalCapture: false
      kingCapturePriority: true
      flyingKings: true
      promotionDuring: true
---

## Czech Draughts

The Czech and Slovak national variant with a distinctive rule: if a king can capture, it must — even if a man has a longer available chain. This creates a unique dynamic where king positioning is both an asset and a liability, since your king can be forced into unfavourable captures.

{{svg:english-board.svg "Czech Draughts — starting position"}}

### Setup

**Board:** 8×8 checkered board, dark squares only. Same layout as English Draughts.

**Pieces:** 12 men per player on dark squares of the three nearest rows.

**First move:** White moves first.

### Rules

- **Men movement:** Men move diagonally forward only, one square at a time.
- **Men capture:** Men capture diagonally forward only by jumping. Men cannot capture backwards.
- **Mandatory capture:** Captures are compulsory.
- **King priority:** If a king has any capture available, the king MUST make the capture — even if a man has a longer chain available elsewhere. Kings always take priority.
- **No majority rule for men:** If only men have captures, the player may freely choose which man captures and which path to take (no longest-chain requirement).
- **Mid-jump promotion:** If a man reaches the back row during a multi-jump sequence, it is promoted immediately and continues jumping as a king.

### King Promotion

- **Flying kings:** Kings move any number of unoccupied squares diagonally in any direction.
- **King capture:** Kings capture by jumping over a single opponent piece at any distance along a diagonal, landing on any open square beyond.

### Winning

A player wins when their opponent has no legal move: all pieces captured or all pieces blocked.

### Strategy

The king priority rule cuts both ways. Your king dominates the board but can be lured into captures that leave it exposed. Opponents can sacrifice pieces along your king's diagonal, forcing it to capture away from a critical position. Meanwhile, men have complete freedom of choice, allowing intricate sacrificial combinations without being forced into suboptimal chains.

### Attribution

Traditional variant. Public domain. Source: Wikipedia (CC-BY-SA).
