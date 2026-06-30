---
title: Dameo
slug: dameo
board: "8×8"
players: "2"
parent: draughts
order: 16
win: Opponent has no legal move
special: "Phalanx movement: lines of men slide together. Orthogonal captures only. 18 pieces per side."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
---

## Dameo

Invented by Christian Freeling in 2000. Dameo introduces two innovations to the draughts family: the phalanx, which lets a line of friendly pieces slide forward together as a unit, and a purely orthogonal capture system where all jumps go along ranks and files, never diagonally. The result is a game that rewards formation-building over the individual-piece tactics of most draughts variants.

{{svg:dameo-board.svg "Dameo — starting position"}}

### Setup

**Board:** 8×8 board. Unlike most draughts variants, Dameo is played on **all 64 squares**, not just the dark ones.

**Pieces:** 18 men per player, arranged in a trapezoidal formation:

- **Row 1 (closest row):** all 8 squares occupied
- **Row 2:** the 6 inner squares occupied (b2–g2)
- **Row 3:** the 4 innermost squares occupied (c3–f3)

White occupies rows 1–3. Black occupies rows 6–8 (mirror image).

**First move:** White moves first.

### Rules

**Men movement:**

Men move **forward only**, either straight ahead (orthogonally) or diagonally forward. They cannot move sideways or backward.

In addition to single-step moves, a man may perform a **linear move**: if one or more friendly men are lined up directly behind it in a straight line (along a rank, file, or diagonal), the entire line slides forward by one square, provided the square at the front of the line is empty. A man cannot use a linear move to push into an occupied square.

**King movement:**

Kings move like queens in chess: any number of squares in any of the eight directions (orthogonal or diagonal), as long as the path is clear.

### Capture

**All captures in Dameo are orthogonal only**, along ranks and files, never diagonally.

- A man (or king) captures an adjacent opponent piece by jumping over it to the empty square directly beyond, along a rank or file.
- Kings capture from any distance: the king jumps over a single opponent piece that lies any number of empty squares away along a rank or file, landing on any empty square beyond the captured piece on the same line.
- **Mandatory capture:** If a capture is available, it must be taken.
- **Majority rule:** When multiple capture sequences are available, the piece that can make the maximum number of captures must be used, and the longest sequence must be completed.
- **Delayed removal:** Captured pieces are removed at the **end of the entire multi-capture sequence**, not after each individual jump. A piece that has been jumped but not yet removed still physically blocks the line and cannot be jumped again in the same sequence.

### King Promotion

When a man reaches the opponent's back row (row 8 for White, row 1 for Black), it is promoted to a king at the end of its turn.

- If a man reaches the back row during a multi-capture sequence without stopping there, it is not promoted until it ends its turn on the back row.

### Winning

A player wins when their opponent has no legal move: either all pieces have been captured, or all remaining pieces are blocked.

### Draws

The game is drawn when:

- Both players agree.
- The same position occurs three times with the same player to move (not necessarily consecutive).
- Neither player can force a win.

### Attribution

Dameo. Invented by Christian Freeling (2000). Rules in the public domain; game rules are not subject to copyright. Source: Wikipedia — Dameo article (CC-BY-SA 4.0).
