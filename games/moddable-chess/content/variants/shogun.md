---
title: Shogun Chess
slug: shogun
board: "8×8"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Zone-triggered automatic promotion and Shogi-style drops from captured pieces. Designed by Corey Clark, 2020."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  notation: algebraic
  hand: true
  drops: true
  promotion_zone: [6, 7, 8]
published: true
---

## Shogun Chess

Designed by Corey Clark (2020). Shogun Chess grafts the drop mechanic from Shogi onto a standard chess board: captured pieces switch sides and can be returned to play, and pieces automatically promote when they enter the opponent's half of the board.

### Promotion Zone

Ranks 6, 7, and 8 (for White) — the opponent's half of the board — form the promotion zone. Any piece that enters a promotion-zone square, or that starts a turn already in the zone, promotes immediately and automatically. Captured promoted pieces revert to their base form.

Black's promotion zone is ranks 3, 2, and 1.

### Piece Promotions

| Base Piece | Promoted Name | Promoted Movement |
|---|---|---|
| Pawn | Pawn+ (Gold General) | One step in any orthogonal direction, or one step diagonally forward (6 directions total). |
| Knight | Monk | All 8 standard Knight jumps, plus one step orthogonally in any direction. |
| Bishop | Ninja | Bishop diagonal slides (unlimited), plus one step orthogonally in any direction. |
| Rook | Fortress | Rook orthogonal slides (unlimited), plus one step diagonally in any direction. |
| Queen | Shogun | Queen moves (any direction, unlimited) plus one Knight jump per move. |
| King | Does not promote | — |

### Drop Mechanic

When a player captures an opponent's piece, that piece is added to the capturing player's hand in its base (unpromoted) form. On any turn, instead of moving a piece already on the board, the player may drop one piece from their hand onto any empty square, subject to the restrictions below.

**Drop restrictions:**
- Drops may not be made into the promotion zone (ranks 6–8 for White; ranks 1–3 for Black).
- A dropped Pawn cannot be placed on a file already containing a friendly Pawn.
- A Pawn may not be dropped to deliver immediate checkmate. (A Pawn drop that gives check without checkmate is legal.)
- Drops do not trigger promotion — a piece dropped in a legal zone square enters as its base form and only promotes when it subsequently moves into the promotion zone.

### Starting Position

Standard FIDE starting position. Both hands begin empty.

```
8 ♜ ♞ ♝ ♛ ♚ ♝ ♞ ♜
7 ♟ ♟ ♟ ♟ ♟ ♟ ♟ ♟
6 . . . . . . . .
5 . . . . . . . .
4 . . . . . . . .
3 . . . . . . . .
2 ♙ ♙ ♙ ♙ ♙ ♙ ♙ ♙
1 ♖ ♘ ♗ ♕ ♔ ♗ ♘ ♖
  a b c d e f g h
```

### Standard Rules

Castling applies under standard FIDE conditions (neither King nor Rook has previously moved; squares between them are empty; King does not pass through check). En passant applies. Pawn promotion on reaching rank 8 follows standard rules — the player chooses Queen, Rook, Bishop, or Knight in their Shogun promoted forms.

### Check and Checkmate

Standard rules. A player in check must resolve it immediately. Dropping a piece to interpose between the attacking piece and the King is legal. Checkmate ends the game; the checkmated player loses.

### Stalemate

Standard: stalemate is a draw.

### Attribution

Designed by Corey Clark. Published via Shogun of Games. Official rules at shogunofgames.com.
