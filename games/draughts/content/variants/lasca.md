---
title: "Lasca"
slug: "lasca"
board: "7×7"
players: "2"
parent: "draughts"
order: 5
win: "Block or bury all opponent pieces"
special: "Column stacking. Captured pieces go underneath the captor. All 22 pieces stay in play forever."
---

## Lasca

Emanuel Lasker's 1911 column checkers. Captured pieces stack beneath the captor instead of leaving the board. All 22 pieces stay in play for the entire game. Ownership shifts as columns change hands.

{{svg:lasca-board.svg "Lasca — starting position"}}

### Setup

**Board:** 7x7 board using only the 25 diagonal squares (like draughts).

**Pieces:** Each player starts with 11 pieces. White occupies all 11 squares on rows 1, 2, and 3. Black occupies all 11 squares on rows 5, 6, and 7. The three middle-row squares (row 4) start empty.

**First move:** White moves first.

### Rules

- **Soldiers:** Unpromoted pieces (soldiers) move and capture diagonally forward only, one square at a time.
- **Officers:** When a soldier reaches the opponent's back row, it is promoted to an officer. Officers move and capture diagonally in any direction, one square at a time.
- **Column formation:** When a piece jumps an opponent's piece, the captured piece is placed underneath the capturing piece, forming a column. A column is controlled by the player whose piece is on top.
- **Column movement:** A column moves according to its top piece's rank: a soldier-led column moves forward only; an officer-led column moves in any direction.
- **Capturing a column:** When you jump over a column, you take only the top piece. That top piece goes under your jumping piece or column. The remaining column stays in place, now controlled by whatever piece is next from the top. Capturing an opponent's column can liberate your own buried pieces.
- **Multi-jump:** Multi-jumps are mandatory if available. If multiple capture sequences exist, the player has free choice (no majority rule). A piece may not jump the same column twice in one sequence.
- **Promotion during multi-jump:** If a soldier reaches the back row during a multi-jump, the sequence ends there and the soldier is promoted. If an officer-led column passes through the promotion row, the sequence continues.
- **The 22-piece invariant:** Pieces are never removed from the game. All 22 pieces remain on the board at all times, either individually or stacked within columns.
- **Officer retention:** Officers retain their rank permanently, even when buried inside a column. When liberated, they immediately function as officers again.
- **Mandatory capture:** Capturing is compulsory. If a capture is available, it must be taken.

### Win Condition

A player wins when their opponent cannot make any legal move: either all opponent pieces are buried inside columns controlled by the other player, or all opponent-controlled pieces are blocked.

### Strategy

Because pieces are never eliminated, the game is about control rather than attrition. Building tall columns creates power but also concentrates risk. Liberating buried officers can swing the game dramatically.

### Attribution

Invented by Emanuel Lasker (World Chess Champion), 1911. Public domain. Source: Wikipedia + Lasker 1911 (CC-BY-SA).
