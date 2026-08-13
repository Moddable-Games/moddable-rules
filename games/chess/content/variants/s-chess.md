---
title: S-Chess (Seirawan Chess)
slug: s-chess
board: "8×8"
players: "2"
parent: chess
win: Checkmate
special: "Two new compound pieces — Hawk and Elephant — enter the board via a gating mechanic when back-rank pieces leave their starting squares. Designed by Yasser Seirawan and Bruce Harper, 2007."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
  notation: algebraic
  hand: true
  gating: true
published: true
---

## S-Chess (Seirawan Chess)

{{svg:s-chess-board.svg "S-Chess (Seirawan Chess) — starting position"}}

Designed by Yasser Seirawan and Bruce Harper (2007). S-Chess enriches orthodox chess with two powerful new fairy pieces — the Hawk and the Elephant — without changing the starting position. Instead, these pieces enter play through a gating mechanic: when any back-rank piece leaves its home square for the first time, the owner may simultaneously place one reserve piece onto the vacated square.

### New Pieces

| Piece | Symbol | Movement |
|---|---|---|
| Hawk | H | Leaps 1 or 2 squares in any diagonal direction, AND jumps as a Knight. Combines Bishop-leap-1-or-2 with Knight. |
| Elephant | E | Slides orthogonally as a Rook (unlimited), AND jumps as a Knight. Combines Rook with Knight (the Chancellor compound). |

Both pieces leap over intervening pieces for all their moves.

### Starting Position and the Hand

The board begins in the standard FIDE position. Each player holds one Hawk and one Elephant in reserve — they do not appear on the board at game start.

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
White hand: Hawk (H), Elephant (E)
Black hand: Hawk (H), Elephant (E)
```

### The Gate

Whenever a back-rank piece moves off its starting square for the first time, the moving player may optionally place one piece from their hand onto the square just vacated. This simultaneous placement is the gate.

**Gate rules:**
- Gating is optional. The player may choose not to gate and keep the piece in hand.
- The gated piece must go onto the square the moving piece just left — not any other square.
- Pawns cannot trigger a gate. Only pieces that began the game on rank 1 (White) or rank 8 (Black) can gate.
- On castling, the player may gate one piece: either onto the King's starting square or onto the Rook's starting square — not both.
- A player may gate even if the gated piece would give check.
- Hand pieces are never lost from the hand except by gating. They may be held indefinitely.
- Once a piece has been gated it is in normal play on the board.

### Piece Movement Reference

All standard FIDE pieces move as in orthodox chess.

| Piece | Movement |
|---|---|
| King | 1 square any direction; castling as in FIDE |
| Queen | Any distance, any direction |
| Rook | Any distance, orthogonally |
| Bishop | Any distance, diagonally |
| Knight | (2,1) jump; leaps over other pieces |
| Pawn | 1 forward (2 from start); diagonal capture; en passant; promotes on rank 8 |
| Hawk | Leap 1 or 2 diagonally in any direction, or jump as Knight |
| Elephant | Slide orthogonally unlimited, or jump as Knight |

### Check, Checkmate, and Stalemate

Standard FIDE rules. Gating a piece that puts the opponent's King in check is legal. A player may not gate a piece that leaves their own King in check.

### Notation

Standard algebraic notation with a gating suffix. After the moving piece's destination square, add a slash and the gated piece symbol followed by the square gated to.

Example: `1. e4/He1` — pawn moves e2–e4, Hawk gated onto e1.

If no gate occurs: standard notation with no suffix.

### Strategy Notes

The Hawk and Elephant are among the most powerful pieces possible on an 8×8 board — each substantially stronger than a Rook. Their arrival through gating means the opening resembles standard chess, but mid-game character shifts sharply when they enter behind an advancing front line. Key decisions: when to gate (too early risks the piece to early attack; too late wastes development tempo), and where (which home square to vacate first determines which piece can be gated and at what tempo).

The Hawk's combined diagonal-leap-and-knight threat creates forks across long ranges. The Elephant's Rook-plus-Knight compound threatens simultaneously along ranks and files and from Knight-jump distance, making it devastatingly effective in open positions.

### Attribution

Designed by Yasser Seirawan and Bruce Harper. Publicly released 2007. Open rules available at seirawanchess.com. Public domain rule set.
