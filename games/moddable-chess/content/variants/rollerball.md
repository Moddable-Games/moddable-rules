---
title: Rollerball
slug: rollerball
board: "40-square ring (7×7 minus 3×3 centre)"
players: "2"
parent: moddable-chess
win: Checkmate the King, OR King clockwise-reaches opponent's King starting square
special: "Chess variant on a 40-square ring board (7×7 grid with 3×3 centre removed). Two concentric rings: outer (24 squares) and inner (16 squares). Each side has only 6 pieces: King, Bishop, 2 Rooks, 2 Pawns. Pieces move clockwise-dominant (most cannot slide backward). Jean-Louis Cazaux, 1999, 40-squares contest."
engine:
  topology:
    type: ring
    outer_squares: 24
    inner_squares: 16
    total_squares: 40
  players: [white, black]
  notation: algebraic
published: true
---

## Rollerball

Rollerball is a chess variant invented by Jean-Louis Cazaux in 1999, entered in the Chess Variant Pages 40-squares contest. It is named after the 1975 science-fiction film about a violent ring-track sport. The game is played on a **40-square double-ring board** formed by taking a 7×7 grid and removing the 3×3 centre, leaving an outer ring and an inner ring. Each player has only 6 pieces.

### The Board

The board is a 7×7 grid (files a–g, ranks 1–7) with the centre 3×3 (c3–e5) removed, leaving 40 squares in two concentric rings:

- **Outer ring:** 24 squares — the perimeter of the 7×7 grid
- **Inner ring:** 16 squares — the perimeter of the 5×5 interior region surrounding the removed centre

The board has four natural zones: **South** (White’s starting side), **North** (Black’s starting side), **West**, and **East**. White plays first; play proceeds **mostly clockwise**.

Each player starts with 6 pieces arranged in their home zone (South for White, North for Black) as shown in the interactive diagram at chessvariants.com/40.dir/rollerball/index.html.

### Pieces

Each side has: 1 King, 1 Bishop, 2 Rooks, 2 Pawns (6 pieces total).

#### King
Moves and captures one square to any adjacent square (orthogonal or diagonal), as in standard chess. The King **may not move to a square where it can be captured**. The King is the only piece with fully symmetric movement.

#### Rook
Slides any number of squares **forward** or **sideways** along its row or column. May also move **one square backward** (orthogonally only — no backward sliding). On the external ring, the Rook has **one rebound allowed on the corners** of the board.

#### Bishop
Slides diagonally **forward** any number of squares, with **one rebound allowed** on the external or internal ring sides. May also move **one square diagonally backward**. Does not slide diagonally backward beyond one square.

#### Pawn
Moves and captures **forward** (straight or diagonally). Promotes to Rook or Bishop upon reaching the starting square of the opponent’s Pawns.

### Win Conditions

There are two ways to win:

1. **Checkmate** the opponent’s King.
2. **King reaches the opponent’s King starting square** — but only if it arrived there by travelling **clockwise**.

**Draw:** stalemate or three-fold repetition.

### Attribution

Rollerball by Jean-Louis Cazaux, invented 1999, entered in the 40-squares contest. Rules documented at chessvariants.com/40.dir/rollerball/index.html.
