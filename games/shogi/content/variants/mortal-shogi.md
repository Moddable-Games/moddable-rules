---
title: Mortal Shogi
slug: mortal-shogi
board: "9×9"
players: "2"
parent: shogi
win: Checkmate the King
special: "Modern 9×9 Shogi variant by Roberto Lavieri and Fergus Duniho. Captured pieces demote one step in a fixed ranking chain (Dragon King → Dragon Horse → Rook → Bishop → Gold General → Silver General → Lance → Knight → removed) rather than returning to their original form. Promotes of sub-Gold pieces are flexible: any higher piece up to Gold General."
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

## Mortal Shogi

Mortal Shogi is a modern Shogi variant created collaboratively by Roberto Lavieri and Fergus Duniho. It introduces **mortality** to Shogi pieces: instead of reverting to their original form when captured, pieces demote one rank down a fixed chain and change sides. When a Pawn is captured, it is removed from the game entirely.

### Starting Position

Identical to standard Shogi.

**SFEN:** `lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1`

### Piece Ranking and Demotion

Pieces are ranked high to low. When a piece is captured, it demotes one step:

1. Dragon King → demotes to Dragon Horse
2. Dragon Horse → demotes to Rook
3. Rook → demotes to Bishop
4. Bishop → demotes to Gold General
5. Gold General → demotes to Silver General
6. Silver General → demotes to Lance
7. Lance → demotes to Knight
8. Knight → demotes to Pawn
9. Pawn → **removed from the game permanently**

After demotion, the piece changes sides and goes to the capturing player's hand for dropping. This replaces the standard Shogi rule of promoted pieces reverting to their unpromoted form.

### Piece Movement

All pieces move as in standard Shogi. The standard Shogi promoted forms for Pawn, Knight, Lance, and Silver (Tokin, etc.) are not used.

- **Dragon King:** Rook + one diagonal step (as standard Shogi).
- **Dragon Horse:** Bishop + one orthogonal step (as standard Shogi).
- **Rook:** Slides orthogonally. Promotes to Dragon King.
- **Bishop:** Slides diagonally. Promotes to Dragon Horse.
- **Gold General:** Steps forward, orthogonally, or diagonally forward (not diagonally backward). Does not promote.
- **Silver General:** Steps diagonally or straight forward. Promotes to Gold General.
- **Lance:** Slides straight forward. Promotes to Silver General or Gold General.
- **Knight:** Leaps to either of the two forward-most Knight squares (two forward, one sideways). Promotes to Lance, Silver General, or Gold General.
- **Pawn:** Steps and captures one square straight forward. Promotes to Knight, Lance, Silver General, or Gold General.

### Promotion

Promotion zone is the last 3 ranks (ranks 7–9 for Sente). A piece may optionally promote when it enters, exits, or moves within the zone. A piece **must promote** if it would otherwise have no legal moves from that square.

Rooks promote to Dragon King and Bishops to Dragon Horse, as in standard Shogi.

For all pieces below Gold General, promotion is **flexible**: the piece may promote to any higher-ranked piece up to and including Gold General, provided the promoted form has at least one legal move from that square. This means a Knight may promote to Lance, Silver General, or Gold General (not Dragon Horse or higher).

**Mandatory promotions by position:**
- Lance must promote upon reaching rank 9.
- Knight must promote upon reaching rank 8 or 9.
- Pawn must promote upon reaching rank 9.

### Drops

Drop rules follow standard Shogi:
- Any piece in hand may be dropped on any empty square, subject to restrictions.
- Pawns: not on rank 9; not on a file already containing a friendly Pawn; not to give checkmate.
- Lances: not on rank 9.
- Knights: not on rank 8 or 9.
- Any drop must leave the dropped piece with at least one legal move from that square.

### Rules

**Win:** Checkmate the opponent's King. All standard Shogi check rules apply.

Black (Sente) moves first.

### Attribution

Designed by Roberto Lavieri and Fergus Duniho. Rules documented from chessvariants.com/shogivariants.dir/mortalshogi.html.
