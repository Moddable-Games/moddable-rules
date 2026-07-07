---
title: Annan Shogi
slug: annan-shogi
board: "9×9"
players: "2"
parent: shogi-hub
win: Checkmate the King
special: "9×9 modern Shogi variant. Each piece borrows the movement of the friendly piece directly behind it (same file, one rank closer to that player's home). Pieces with nothing behind them move normally. Drops and standard promotion apply."
engine:
  topology:
    type: grid
    rows: 9
    cols: 9
    orientation: shogi
  players: [sente, gote]
  notation: shogi
  drops: true
  promotion_zone: [7, 8, 9]
published: true
---

## Annan Shogi

Annan Shogi (アンナン将棋) is a modern Shogi variant played on the standard 9×9 board with the same starting position and piece set as standard Shogi. The one defining rule: **each piece moves according to the movement of the friendly piece directly behind it on the same file.**

### Starting Position

Identical to standard Shogi.

**SFEN:** `lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1`

### The Annan Rule

A piece **does not use its own movement** unless it is unsupported. Instead:

- A piece **with a friendly piece on the adjacent square directly behind it** (one rank closer to that player's back rank, same file) uses the movement and capture method of that **supporting piece**.
- A piece **with no friendly piece directly behind it** uses its **own standard Shogi movement**.

**Examples:**
- A Gold General with a Rook directly behind it → moves and captures as a Rook.
- A Pawn with a Silver General behind it → moves and captures as a Silver General.
- A Lance at the back rank (nothing behind it) → moves normally as a Lance.

### Drops

Captured pieces go to the capturing player's hand. On any turn, instead of moving, a player may drop a hand piece onto any empty square following standard Shogi drop restrictions:
- Pawns: not on the last rank; not two unpromoted Pawns on the same file; no drop-checkmate.
- Lances: not on the last rank.
- Knights: not on the last two ranks.

Dropped pieces begin using their own movement type until they gain a supporter.

### Promotion

Pieces promote in the promotion zone (ranks 7–9 for Sente). A piece's promoted form is always tied to its **own piece type** (not the supporter's type). Promotion is optional in the zone; mandatory if no other move is available.

### Additional Notes

- Only the **immediately adjacent** piece behind (one rank back, same file) confers movement — not the whole column.
- If the piece directly behind is itself supported, it does not chain: only one level of support applies.
- Kings always use their own movement.

### Attribution

Annan Shogi is a modern variant. Rules documented from chessvariants.com and pychess.org/variants/annanshogi.
