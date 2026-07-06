---
title: Chennis
slug: chennis
board: "7×7"
players: "2"
parent: moddable-chess
win: Pawn reaches opponent baseline
special: "Tennis-themed chess on a 7×7 board. Win by advancing a Pawn to the opponent's back rank. A net across rank 4 prevents most pieces from crossing. Knights may jump the net freely. Designed by Corey Clark."
engine:
  topology:
    type: grid
    rows: 7
    cols: 7
  players: [white, black]
  notation: algebraic
  net: 4
published: true
---

## Chennis

Designed by Corey Clark. Chennis adapts chess to a tennis-themed format on a 7×7 board. The net divides the board between ranks 4 and 5. Victory is achieved by getting a Pawn to the opponent’s back rank, not by checkmate — though check and piece capture remain mechanically active.

### Board Layout

The board is 7×7 (files a–g, ranks 1–7). A net runs across the middle of the board, forming a barrier between ranks 4 and 5. This net restricts most pieces to their own half unless they can jump (Knights) or the rules explicitly permit crossing.

### Win Condition

The game is won by advancing any Pawn to the opponent’s back rank:
- White wins by placing a Pawn on rank 7.
- Black wins by placing a Pawn on rank 1.

Checkmate is NOT a win condition in Chennis. However, check and piece capture are legal actions — they affect material balance and legal moves.

### Pieces

| Piece | Count | Movement | Net Rule |
|---|---|---|---|
| **King** | 1 | 1 step any direction | Cannot cross the net. |
| **Queen** | 1 | Any distance, any direction | Cannot cross the net. |
| **Rook** | 2 | Orthogonal slide, unlimited | Cannot cross the net. |
| **Bishop** | 2 | Diagonal slide, unlimited | Cannot cross the net. |
| **Knight** | 2 | (2+1) jump; leaps over pieces | **May cross the net freely.** A Knight can land on either side of the net at will. |
| **Pawn** | 7 | 1 square forward; captures 1 diagonal forward | **Must cross the net to win.** Pawns cross the net by advancing from rank 4 to rank 5, or rank 5 to rank 4 (for Black). |

### The Net Rule

All pieces except the Knight and Pawn are confined to their half of the board and may not slide, step, or capture across the net boundary:
- White’s pieces (except Knight and Pawn) are confined to ranks 1–4.
- Black’s pieces (except Knight and Pawn) are confined to ranks 4–7.
- A piece at rank 4 cannot slide to rank 5, and vice versa, except for Knights (which jump) and Pawns (which advance).
- A piece cannot capture across the net unless it is a Knight.

Note: rank 4 is accessible to both sides. The net prevents crossing rank 4 → rank 5 (or 5 → 4 for sliding pieces).

### Check and the King

The King may be placed in check by opponent pieces, including Knights that have crossed the net. The owner must resolve any check on their turn, even though checkmate is not the win condition. If the King cannot escape check and has no legal moves, it is checkmated — this does NOT end the game in the standard sense. The game ends only when a Pawn reaches the opponent’s back rank.

(If a player is checkmated and cannot resolve it, they have no legal move; the convention is that the game continues with the checkmated state as a loss for that player in most implementations, but the primary win condition remains the Pawn race.)

### Pawn Rules

- No double first move.
- No en passant.
- A Pawn reaching rank 7 (White) or rank 1 (Black) wins the game immediately — it does not promote.
- A Pawn at rank 4 may advance to rank 5 on its normal forward move; this constitutes crossing the net.

### Starting Position

White (ranks 1–2):
```
2 Pa Pa Pa Pa Pa Pa Pa
1  R  N  B  K  Q  B  N  R
```
Rank 1 from a to g: Rook, Knight, Bishop, King, Queen, Bishop, Knight, Rook.
Rank 2: 7 Pawns.

Black mirrors on ranks 6–7.

### Attribution

Designed by Corey Clark. Published via Shogun of Games. Public domain rule set.
