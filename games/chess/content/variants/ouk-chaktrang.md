---
title: Ouk Chaktrang (Cambodian Chess)
slug: ouk-chaktrang
board: "8×8"
players: "2"
parent: chess
win: Checkmate
special: "Cambodian chess. Koul leaps 1 or 2 squares diagonally; King may jump as a Knight on its first move. Pawns promote on rank 6. Codified by the Asian Chess Federation."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rnbqkbnr/8/pppppppp/8/8/PPPPPPPP/8/RNBQKBNR"
  notation: algebraic
published: true
---

## Ouk Chaktrang (Cambodian Chess)

{{svg:ouk-chaktrang-board.svg "Ouk Chaktrang (Cambodian Chess) — starting position"}}

Ouk Chaktrang is the traditional chess of Cambodia. It belongs to the Makruk family — the Southeast Asian branch of chess descended from Indian Chaturanga — and is the closest living relative of the medieval game that spread from India across Asia. Modern rules are codified by the Asian Chess Federation and the Cambodian Chess Federation.

### Pieces

| Khmer name | Piece | Movement |
|---|---|---|
| Sdech (ស្តេច) | King | 1 square in any direction. Special first move: if the King has not yet moved, it may instead jump as a Knight (once only, provided the King is not in check). |
| Neang/Met (នាង) | Queen | 1 square diagonally, OR 1 square straight forward. |
| Koul (គោល) | Bishop | 1 square diagonally, OR leaps exactly 2 squares diagonally (can jump over an intervening piece). |
| Ses (សេះ) | Knight | Standard L-shape: 2 squares orthogonally then 1 square perpendicularly. Jumps over intervening pieces. |
| Touk (តឺក) | Rook | Slides any number of squares orthogonally. |
| Trey (ត្រី) | Pawn | Moves 1 square straight forward. Captures 1 square diagonally forward. No double first move. Promotes on reaching rank 6. |

### Starting Position

Identical to Makruk. Pawns begin on ranks 3 (White) and 6 (Black), not rank 2/7.

```
8 ♜ ♞ ♝ ♛ ♚ ♝ ♞ ♜
7 . . . . . . . .
6 ♟ ♟ ♟ ♟ ♟ ♟ ♟ ♟
5 . . . . . . . .
4 . . . . . . . .
3 ♙ ♙ ♙ ♙ ♙ ♙ ♙ ♙
2 . . . . . . . .
1 ♖ ♘ ♗ ♛ ♔ ♗ ♘ ♖
  a b c d e f g h
```

Neang (Queen) begins beside the Sdech (King): White's Neang on d1 (to King's left from White's perspective), Black's Neang on e8.

### Pawn Promotion

A Trey reaching rank 6 (for White) or rank 3 (for Black) promotes immediately to a Neang. There is no choice — promotion to Neang is the only option.

### King's First Move

On the Sdech's very first move of the game, if it has not previously moved, the player may instead move the King as a Knight (the standard L-shape jump). This privilege is lost permanently after the King moves or after the King is in check.

### Koul Movement Detail

The Koul (Bishop) may move either:
- 1 square diagonally (standard ferz-style step), OR
- Exactly 2 squares diagonally, leaping over any piece on the intermediate square.

It cannot slide any further — it is not a long-range diagonal slider like the FIDE Bishop.

### Check and Checkmate

A player whose King is in check must resolve the check on the next move. Checkmate — where the King is in check and no legal move resolves it — ends the game; the checkmated player loses.

### Stalemate

Stalemate (player has no legal move but is not in check) is a loss for the stalemated player, not a draw.

### Counting Rules (Draw Mechanism)

When one player has no remaining Pawns, the opponent must deliver checkmate within a set number of moves or the game is drawn:

| Opponent's dominant piece | Moves allowed |
|---|---|
| Rooks only | 8 moves |
| Bishops and/or Knights only | 16 moves |
| Neang only | 22 moves |

The count begins the moment the last Pawn is captured. If the count expires without checkmate, the game is drawn. The count resets if a piece is captured during the countdown.

### Differences from Makruk

| Feature | Makruk (Thai) | Ouk Chaktrang (Cambodian) |
|---|---|---|
| Koul/Bishop | 1 step diagonally only | 1 step or 2-square diagonal leap |
| King's first move | No special rule | May jump as Knight once |
| Counting rules | Makruk counting system | Streamlined system above |

### Attribution

Traditional Cambodian game. Modern competitive rules codified by the Asian Chess Federation. Fully public domain.
