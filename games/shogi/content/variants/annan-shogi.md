---
title: Annan Shogi
slug: annan-shogi
board: 9×9
players: 2
parent: moddable-shogi
win: Checkmate the opponent's King
special:
  - drops
  - promotion
  - borrowed-movement
engine:
  type: grid
  rows: 9
  cols: 9
---

## Overview

Annan Shogi (安南将棋), also called Korean Shogi, is a popular Shogi variant in Japan. All standard Shogi rules apply with one key change: each piece borrows the movement of the friendly piece immediately behind it.

## Setup

Nearly identical to standard Shogi, but the pawn in front of each player's Rook and the pawn in front of each player's Bishop are each shifted one rank toward the center. This prevents those pawns from wielding sliding-piece power on the very first move.

```
SFEN: lnsgkgsnl/1r5b1/p1ppppp1p/1p5p1/9/1P5P1/P1PPPPP1P/1B5R1/LNSGKGSNL b - 1
```

Reading from White's home rank (rank a) to Black's home rank (rank i), files 9→1:

| Rank | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 |
|------|---|---|---|---|---|---|---|---|---|
| a | ☗L | ☗N | ☗S | ☗G | ☗K | ☗G | ☗S | ☗N | ☗L |
| b | — | ☗R | — | — | — | — | — | ☗B | — |
| c | ☗p | — | ☗p | ☗p | ☗p | ☗p | ☗p | — | ☗p |
| d | — | ☗p | — | — | — | — | — | ☗p | — |
| e | — | — | — | — | — | — | — | — | — |
| f | — | ☙P | — | — | — | — | — | ☙P | — |
| g | ☙P | — | ☙P | ☙P | ☙P | ☙P | ☙P | — | ☙P |
| h | — | ☙B | — | — | — | — | — | ☙R | — |
| i | ☙L | ☙N | ☙S | ☙G | ☙K | ☙G | ☙S | ☙N | ☙L |

☗ = White (Gote). ☙ = Black (Sente). White's displaced pawns are at d8 and d2; Black's displaced pawns are at f8 and f2.

## Borrowed Movement

When a piece has a friendly piece on the square directly behind it (one rank toward that player's home side), the front piece moves and captures exactly like the rear piece instead of its own. The rear piece is unaffected.

- A piece with **no friendly piece directly behind it** moves with its own normal movement.
- The borrowed movement is recalculated continuously; moving the rear piece away immediately restores the front piece's own movement.
- Borrowed movement stacks through the chain: if piece A is behind piece B which is behind piece C, piece C borrows from B and B borrows from A, but C does not borrow from A.

**Example:** A Pawn with a Rook directly behind it moves and attacks along the full rank or file like a Rook, for as long as the Rook remains on that square.

## Differences from Standard Shogi

**Multiple pawns on a file:** A Pawn may maneuver (via borrowed lateral movement) onto a file already holding a friendly Pawn; such a position is legal. However, dropping a Pawn onto a file that already contains a friendly Pawn remains illegal.

**Far-rank drops and moves:** In standard Shogi, Pawns, Lances, and Knights cannot be placed on squares where they would be permanently immobile. In Annan Shogi, because borrowed movement can provide an escape, these pieces may be moved to or dropped onto any square, including ranks where they would normally lack movement.

**Resolving check:** Check may be resolved in three ways: (1) move the King, (2) capture or block the checking piece, or (3) capture the piece directly behind the checker, provided doing so eliminates the check by removing the borrowed movement that produced it.

## Drops

Standard Shogi drop rules with the following modifications:
- Pawns, Knights, and Lances may be dropped onto any rank.
- A Pawn may not be dropped onto a file that already contains a friendly Pawn (nifu prohibition applies to drops only, not to moved pieces).
- A drop that delivers immediate checkmate with a Pawn (uchifu-zume) remains illegal.

## Promotion

Standard Shogi promotion rules apply. A piece may promote upon entering, leaving, or moving within the opponent's promotion zone (the three ranks farthest from the owning player). Promotion is optional. Pieces that have borrowed movement to reach a far rank are not forced to promote simply because they reached it; the promotion option arises normally.

Promotion table:

| Piece | Promotes To |
|-------|-------------|
| Pawn (歩) | Tokin — moves as Gold |
| Lance (香) | Promoted Lance — moves as Gold |
| Knight (桂) | Promoted Knight — moves as Gold |
| Silver (銀) | Promoted Silver — moves as Gold |
| Bishop (角) | Dragon Horse — Bishop + one step orthogonal |
| Rook (飛) | Dragon King — Rook + one step diagonal |
| Gold (金) | Does not promote |
| King (王/玉) | Does not promote |
