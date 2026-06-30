---
title: Turkish Draughts
slug: turkish-draughts
board: "8×8"
players: "2"
parent: draughts
order: 2
win: Capture or block all opponent pieces
special: Orthogonal movement replaces diagonal. Majority capture rule. Immediate removal.
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
---

## Turkish Draughts

Orthogonal movement on an 8x8 board replaces the diagonal play of standard draughts. Mandatory captures, majority rule, and immediate removal create sharp tactical puzzles. World Championships held since 2014.

{{svg:turkish-board.svg "Turkish Draughts — starting position"}}

### Setup

**Board:** 8x8 mono-coloured board (not checkered). All 64 squares are used.

**Pieces:** Each player begins with 16 men arranged in two rows: White on rows 2 and 3, Black on rows 6 and 7. The back rows (1 and 8) are left vacant.

**First move:** White moves first.

### Rules

- **Men movement:** Men move orthogonally (straight forwards or sideways) by one square. Men cannot move backwards. Men cannot move diagonally.
- **Capturing:** Captures are made by jumping over an adjacent opponent piece to a vacant square beyond. Jumping is mandatory. Men can only capture forwards or sideways, never backwards or diagonally.
- **Majority rule:** When multiple capture sequences are available, the player must choose the sequence that captures the most pieces. If two or more sequences capture the same number, the player may freely choose. No distinction between Kings and men when counting.
- **Immediate removal:** Captured pieces are removed from the board immediately after being jumped. A square vacated by an earlier capture in the same sequence becomes available for the capturing piece to pass through.
- **King promotion:** When a man reaches the opponent's back row, it is promoted to a King.
- **King movement:** Kings move any number of empty squares orthogonally in all four directions (forwards, backwards, sideways).
- **King capture:** Kings capture by jumping over a single opponent piece that is any number of empty squares away, landing on any open square beyond the captured piece along the same line.
- **King turn restriction:** During a multi-capture sequence, a King cannot turn 180 degrees between two consecutive captures. It must change direction (90 degrees) or continue forward.

### Win Condition

A player wins when their opponent has no legal move available: either all pieces captured or all pieces blocked.

### Draws

A King versus a single man results in a draw.

### Attribution

Traditional variant. Public domain. Source: Wikipedia (CC-BY-SA).
