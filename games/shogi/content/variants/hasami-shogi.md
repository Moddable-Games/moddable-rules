---
playable: false
title: Hasami Shogi
slug: hasami-shogi
board: "9×9"
players: "2"
parent: shogi
win: Reduce opponent to one remaining piece
special: Custodial sandwich capture. No drops, no promotion. All pieces are identical.
verified:
  date: "2026-08-31"
  method: "Desktop web research. Statements here are traceable to the sources below; anything that could not be confirmed is listed under unverified and must not be filled in from memory."
  sources:
    - "https://en.wikipedia.org/wiki/Hasami_shogi"
  decisions:
    - "Wikipedia documents TWO distinct published versions with different boards, piece counts, movement and win conditions. This file must commit to one before implementation; neither has been chosen yet."
  unverified:
    - "Whether diagonal sandwiches or a diagonal five-in-a-row ever count. Both versions specify 'horizontally or vertically' and neither positively excludes diagonals."
    - "The exact starting arrangement for version 2 beyond 'their two nearest ranks'."
    - "Whether version 2's jump can chain."
unsupported: "Capture is never by displacement, so the engine's 'capture = move onto the square' assumption has to be removed rather than extended. Custodial capture is evaluated only for the MOVER - a player may safely move a piece INTO a gap between two enemies without being taken - so it is a move effect, not a board scan. Corners are captured by occupying the two orthogonally surrounding cells. Version 2 additionally needs a five-in-a-row win test with a positional exclusion zone (the line must lie outside that player's own starting two rows)."
engine:
  topology:
    type: grid
    rows: 9
    cols: 9
  players: [sente, gote]
  setup: "ppppppppp/9/9/9/9/9/9/9/PPPPPPPPP"
  vocabulary:
    soldier: { symbols: { 0: P, 1: p } }
  plugins:
    shogi:
      royalType: none
      captureRule: custodian
      winCondition: reduced-to-one
      drops: false
      promotionZone: 0
      pieceMoves:
        soldier: { type: rider, dirs: orthogonal }
---

## Hasami Shogi

Hasami Shogi (はさみ将棋, "sandwiching chess") is a distinct branch of the Shogi family with a single piece type, no drops, and no promotion. Capture is by sandwiching: a piece is removed when flanked on two opposite sides by the opponent. Ancient origin; public domain.

{{svg:hasami-shogi-board.svg "Hasami Shogi — starting position"}}

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
