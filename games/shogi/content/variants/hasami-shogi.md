---
title: "Hasami Shogi"
slug: "hasami-shogi"
board: "9×9"
players: "2"
parent: "shogi"
win: "Reduce opponent to one remaining piece"
special: "Custodial sandwich capture. No drops, no promotion. All pieces are identical."
---

## Hasami Shogi

Hasami Shogi (はさみ将棋, "sandwiching chess") is a distinct branch of the Shogi family with a single piece type, no drops, and no promotion. Capture is by sandwiching: a piece is removed when flanked on two opposite sides by the opponent. Ancient origin; public domain.

{{svg:hasami-board.svg "Hasami Shogi — starting position"}}

### Setup

**Board:** 9×9 grid, 81 squares.

**Pieces:** 9 per player, all identical. Player 1 places 9 pieces on the nearest rank; Player 2 places 9 pieces on the far rank.

### Rules

**Movement:** Pieces move orthogonally any number of empty squares, in any direction. This is the same range as a Rook in chess. A piece cannot jump over another piece.

**Capture (custodial sandwich):** A piece is captured when an opponent moves a piece to flank it on two opposite sides along a row or column. The moving piece must close the trap: moving between two opponents does not capture the mover. One move may sandwich and capture multiple pieces simultaneously if several are flanked at once.

**Corner capture:** A piece on a corner square is captured when both adjacent squares (one on the row, one on the column) are occupied by opponent pieces.

**Self-protection:** A player cannot lose their own pieces on their own turn. If a move sandwiches a friendly piece between two opponents, that friendly piece is not captured.

No drops. No promotion.

### Win Condition

The player whose pieces are reduced to one remaining piece loses.

### Attribution

Hasami Shogi (Variant 1). Public domain. Sources: steventran619/Hasami-Shogi implementation documentation; ryan-gallagher-atx/Hasami-Shogi-Game (OSU CS162 final project); OlliePoole/Hasami-Shogi iOS implementation.
