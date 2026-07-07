---
title: Yari Shogi
slug: yari-shogi
board: "9×9"
players: "2"
parent: shogi-hub
win: Checkmate the King
special: "9×9 Shogi variant devised by John Fairbairn. Every piece gains a Yari (spear) move: the ability to slide any number of squares directly forward, in addition to its normal movement. Drops apply as in standard Shogi."
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

## Yari Shogi

Yari Shogi (鴓将棋, "Spear Chess") is a Shogi variant devised by John Fairbairn. It is played on the standard 9×9 Shogi board and uses drops and promotion as in standard Shogi, but **every piece** — regardless of type — can slide any number of squares directly forward. This "Yari move" (named after the Japanese spear) transforms every piece into a partial Lance.

### Starting Position

Identical to standard Shogi.

**SFEN:** `lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1`

### The Yari Move

Every piece in Yari Shogi can, in addition to its normal moves, **slide any number of squares directly forward** (toward the opponent's back rank). This is the Yari/Spear move — identical to how a Lance moves in standard Shogi.

**Example:** A Gold General normally moves one step orthogonally or forward-diagonally. In Yari Shogi, it can also slide five squares directly forward in one move.

**Key implications:**
- **Pawns** gain a forward slide, making them far more dangerous (they can slide to the promotion zone in one move).
- **Lances** already have the forward slide — their Yari move is their normal move.
- **Knights** retain their specific L-shape jump; they also gain the forward slide.
- **Kings** gain the forward slide (but must not move into check).

### Drops and Promotion

Captured pieces go to hand and may be dropped as in standard Shogi. Standard drop restrictions apply.

Pieces promote in the promotion zone (last 3 ranks). Promoted pieces' movement is based on their promoted type in standard Shogi, plus the Yari move. Verify exact promoted movements from source.

### Attribution

Yari Shogi was devised by John Fairbairn. Rules documented from chessvariants.com/shogi.dir/yari.html.
