---
title: Rollerball
slug: rollerball
board: "40-square ring (7×7 minus 3×3 centre)"
players: "2"
parent: chess
win: Checkmate the King, OR King clockwise-reaches opponent's King starting square
special: "Chess variant on a 40-square ring board (7×7 grid with 3×3 centre removed). Two concentric rings: outer (24 squares) and inner (16 squares). Each side has only 6 pieces: King, Bishop, 2 Rooks, 2 Pawns. Pieces move clockwise-dominant (most cannot slide backward). Jean-Louis Cazaux, 1999, 40-squares contest."
engine:
  topology:
    type: grid
    rows: 7
    cols: 7
  players: [white, black]
  notation: algebraic
  render:
    zones:
      voids: [[2,2],[2,3],[2,4],[3,2],[3,3],[3,4],[4,2],[4,3],[4,4]]
  setup: "2rbp2/2rkp2/7/7/7/2PKR2/2PBR2"
published: true
---

## Rollerball

Rollerball is a chess variant invented by Jean-Louis Cazaux in 1999, entered in the Chess Variant Pages 40-squares contest. It is named after the 1975 science-fiction film about a violent ring-track sport. The game is played on a **40-square double-ring board** formed by taking a 7×7 grid and removing the 3×3 centre, leaving an outer ring and an inner ring. Each player has only 6 pieces.

### The Board

The board is a 7×7 grid (files a–g, ranks 1–7) with the centre 3×3 (c3–e5) removed, leaving 40 squares in two concentric rings:

- **Outer ring:** 24 squares — the perimeter of the 7×7 grid
- **Inner ring:** 16 squares — the perimeter of the 5×5 interior region surrounding the removed centre

The board has four natural zones: **South** (White's starting side), **North** (Black's starting side), **West**, and **East**. White plays first; play proceeds **mostly clockwise**.

### Starting Position

Each side starts with 6 pieces occupying two ranks at their home zone, arranged point-symmetrically (180° rotation) rather than mirrored — White's arrangement is Black's arrangement rotated, not reflected. Transcribed from the starting-position diagram at chessvariants.com/40.dir/rollerball/index.html:

| Square | Piece |
|--------|-------|
| c7 | Rook (Black) |
| d7 | Bishop (Black) |
| e7 | Pawn (Black) |
| c6 | Rook (Black) |
| d6 | King (Black) |
| e6 | Pawn (Black) |
| c2 | Pawn (White) |
| d2 | King (White) |
| e2 | Rook (White) |
| c1 | Pawn (White) |
| d1 | Bishop (White) |
| e1 | Rook (White) |

All other squares (including the full inner ring and the remainder of the outer ring) are empty at setup.

### Pieces

Each side has: 1 King, 1 Bishop, 2 Rooks, 2 Pawns (6 pieces total).

#### King
Moves and captures one square to any adjacent square (orthogonal or diagonal), as in standard chess. The King **may not move to a square where it can be captured**. The King is the only piece with fully symmetric movement.

#### Rook
Slides any number of squares **forward** or **sideways** along its row or column. May also move **one square backward** (orthogonally only — no backward sliding). On the external ring, the Rook has **one rebound allowed on the corners** of the board. The source notes the Rook is especially powerful on b2 (and, by the board's rotational symmetry, a6, f7, g2), where it can deliver mate unassisted.

#### Bishop
Slides diagonally **forward** any number of squares, with **one rebound allowed** on the external or internal ring sides. May also move **one square diagonally backward**. Does not slide diagonally backward beyond one square. The white diagonals form a secondary ring joining the mid-points of the external sides, where the Bishop is especially strong.

#### Pawn
Moves and captures **forward** (straight or diagonally). Promotes to Rook or Bishop upon reaching the starting square of the opponent's Pawns. Promotion to a Bishop on a dark square is not recommended (per the source).

### Win Conditions

There are two ways to win:

1. **Checkmate** the opponent's King.
2. **King reaches the opponent's King starting square** — but only if it arrived there by travelling **clockwise**.

**Draw:** stalemate or three-fold repetition.

### Attribution

Rollerball by Jean-Louis Cazaux, invented 1999, entered in the 40-squares contest. Rules and starting-position diagram documented at chessvariants.com/40.dir/rollerball/index.html.
