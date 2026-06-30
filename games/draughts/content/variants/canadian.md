---
title: Canadian Draughts
slug: canadian
board: "12×12"
players: "2"
parent: draughts
order: 9
win: Capture or block all opponent pieces
special: Largest standard board (12×12). 30 pieces per side. International rules. Longest games.
engine:
  topology:
    type: grid
    rows: 12
    cols: 12
  players: [white, black]
---

## Canadian Draughts

International Draughts on the largest standard board: 12×12 with 30 pieces per side. The expanded board creates longer games with more complex middle-game positions and endgames that can stretch across the entire diagonal. Popular in Canada and parts of francophone Africa.

{{svg:canadian-board.svg "Canadian Draughts — starting position"}}

### Setup

**Board:** 12×12 checkered board. Only the 72 dark squares are used.

**Pieces:** 30 men per player. Place all 30 on the dark squares of your five nearest rows. The two central rows remain empty.

**First move:** White moves first.

### Rules

All International Draughts rules apply:

- **Men movement:** Men move diagonally forward only, one square at a time.
- **Men capture:** Men capture diagonally both forwards and backwards by jumping.
- **Mandatory capture:** Captures are compulsory.
- **Majority rule:** Must choose the capture sequence that takes the most pieces.
- **Delayed removal:** Captured pieces removed after the entire sequence completes.
- **No mid-jump promotion:** Man must end its turn on the back row to promote.
- **No re-jumping:** Cannot jump the same piece twice in one sequence.

### King Promotion

- **Flying kings:** Kings move any number of unoccupied squares diagonally in any direction.
- **King capture:** Kings jump at distance, landing on any open square beyond the captured piece.

### Winning

A player wins when their opponent has no legal move: all pieces captured or all pieces blocked.

### Draws

Same conditions as International Draughts. Due to the larger board, drawn endgames are more common.

### Strategy

The 12×12 board makes early development slower and the middlegame broader. Long diagonals (up to 12 squares) give flying kings enormous range. With 30 pieces per side, sacrificial combinations require deeper calculation. Material advantages translate less directly to wins because the larger board gives the defender more space to manoeuvre.

### Attribution

Traditional variant. Public domain. Source: Wikipedia (CC-BY-SA).
