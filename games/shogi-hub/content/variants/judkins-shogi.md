---
title: "Judkin's Shogi"
slug: judkins-shogi
board: "6×6"
players: "2"
parent: shogi-hub
win: Checkmate the King
special: "Compact 6×6 Shogi variant devised by Peter Judkins. Uses 6 piece types (King, Rook, Bishop, Gold, Silver, Pawn). No Lance or Knight. Drops apply as in standard Shogi. Promotion zone is the last 2 ranks."
engine:
  topology:
    type: grid
    rows: 6
    cols: 6
    orientation: shogi
  players: [sente, gote]
  notation: shogi
  drops: true
  promotion_zone: [5, 6]
published: true
---

## Judkin's Shogi

Judkin's Shogi is a compact Shogi variant played on a 6×6 board, devised by Peter Judkins. It is designed as an accessible introduction to Shogi mechanics — particularly the drop rule — without the complexity of the full 9×9 game. It uses 6 piece types and retains the essential tactical character of Shogi.

### Starting Position

**Sente (bottom):**
- Rank 1: Rook(a) · Bishop(b) · Silver(c) · Gold(d) · King(e) · empty(f)
- Rank 2: empty(a–e) · Pawn(f)

**Gote (top, mirrored):**
- Rank 6: empty(a) · King(b) · Gold(c) · Silver(d) · Bishop(e) · Rook(f)
- Rank 5: Pawn(a) · empty(b–f)

**SFEN:** `1kgsbr/p5/6/6/5P/RBSGK1 b - 1`

*(K = King, R = Rook, B = Bishop, G = Gold, S = Silver, P = Pawn. Confirm exact layout from chessvariants.com/shogi.dir/judkins.html.)*

### Pieces

| Piece | Movement | Promotes to |
|---|---|---|
| King (K) | One step any direction | Does not promote |
| Rook (R) | Slides orthogonally any distance | Dragon King (Rook + King step) |
| Bishop (B) | Slides diagonally any distance | Dragon Horse (Bishop + King step) |
| Gold General (G) | One step: orthogonally or forward diagonally | Does not promote |
| Silver General (S) | One step: diagonally or directly forward | Gold General |
| Pawn (P) | One step forward | Gold General |

### Drops

Captured pieces go to the capturing player's hand and may be dropped on any empty square on any subsequent turn. Standard Shogi drop restrictions:
- Pawns cannot be dropped on the last rank (rank 6 for Sente, rank 1 for Gote).
- No two unpromoted Pawns on the same file for one player.
- No checkmate by Pawn drop.

### Promotion Zone

The promotion zone is the **last 2 ranks** (ranks 5–6 for Sente; ranks 1–2 for Gote). Pieces promote on entering or moving within the zone. Promotion is mandatory if a piece cannot otherwise move.

### Attribution

Judkin's Shogi was devised by Peter Judkins. Rules documented from chessvariants.com/shogi.dir/judkins.html.
