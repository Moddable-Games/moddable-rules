---
title: Russian Draughts
slug: russian
board: "8×8"
players: "2"
parent: draughts
order: 7
win: Capture or block all opponent pieces
special: Men capture backwards. Mid-jump promotion. No majority rule. Free choice between captures.
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "1b1b1b1b/b1b1b1b1/1b1b1b1b/8/8/w1w1w1w1/1w1w1w1w/w1w1w1w1"
---

## Russian Draughts

The dominant form of draughts across Russia and the former Soviet states. Distinguished by three features that create a more tactical game than English Draughts: men can capture backwards, promotion happens mid-sequence, and players freely choose between available captures.

{{svg:english-board.svg "Russian Draughts — starting position"}}

### Setup

**Board:** 8×8 checkered board, dark squares only. Same as English Draughts.

**Pieces:** 12 men per player on dark squares of the three nearest rows.

**First move:** White moves first.

### Rules

- **Men movement:** Men move diagonally forward only, one square at a time.
- **Men capture:** Men capture diagonally by jumping over an adjacent opponent piece. Men can capture both forwards AND backwards.
- **Mandatory capture:** If a capture is available, it must be taken.
- **Free choice:** When multiple capture sequences are available, the player may freely choose which to take. No majority rule.
- **Mid-jump promotion:** If a man reaches the opponent's back row during a multi-jump sequence, it is promoted to a king immediately and continues jumping as a king (with king movement) in the same turn.
- **Immediate removal:** Captured pieces are removed immediately after each individual jump (not delayed until end of sequence).

### King Promotion

- **Flying kings:** Kings move any number of unoccupied squares diagonally in any direction.
- **King capture:** Kings capture by jumping over a single opponent piece that is any distance away along a diagonal, landing on any open square beyond.
- **King continuation:** After capturing, a king can continue capturing in any direction (including the direction it came from, provided it does not jump the same piece twice).

### Winning

A player wins when their opponent has no legal move: all pieces captured or all pieces blocked.

### Draws

The game is a draw when:

- Both players agree.
- The same position occurs three times.
- A player with three or more kings cannot win against a lone king within 15 moves.

### Strategy

Mid-jump promotion is the defining tactical element. Sacrifice sequences that push a man to the back row mid-capture create devastating king attacks. The lack of a majority rule means you can choose captures that set up combinations rather than being forced into the longest chain.

### Attribution

Traditional variant. Public domain. Governed by the Russian Draughts Federation. Source: Wikipedia (CC-BY-SA).
