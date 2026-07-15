---
title: Centennial Chess
slug: centennial-chess
board: "10×10"
players: "2"
parent: moddable-chess
win: Checkmate
special: "10×10 chess variant with four new pieces: the Steward (quadra-pawn, moves as pawn in all 4 directions), the Camel (2+1 oblique leap, colorbound), the Murray Lion (leaps to 2nd square orthogonally/diagonally or captures as King), and the Rotating Spearman (slides forward/backward and rotates between 3 orientations). Two moves per turn until first capture. En passant disabled. Created by John William Brown, 1999. Entry in the 1999 Large Variant Contest."
engine:
  topology:
    type: grid
    rows: 10
    cols: 10
  players: [white, black]
  render:
    cellSize: 30
  setup: "rcnbsqksbcr/pppppppppp/10/10/10/10/10/10/PPPPPPPPPP/RCNBSQKSBCR"
---

## Centennial Chess

{{svg:centennial-chess-board.svg "Centennial Chess — starting position"}}

Centennial Chess is a 10×10 chess variant with 100 squares — one for each year of the 20th century. Created by John William Brown in 1999 as an entry in the Large Variant Contest, it adds four new pieces to the FIDE set and modifies several rules, including a two-move privilege that is lost upon the first capture.

### New Pieces

**Steward:** A *quadra-pawn* — moves as a Pawn in all four orthogonal directions (forward, backward, left, right). Can also move two squares in any direction on its first move. Two Stewards in mutual coverage form a strong barrier.

**Camel:** Leaps two squares orthogonally then one square diagonally (a 2+1 oblique leaper, never blocked by intervening pieces). Longer stride than a Knight but colorbound — always remains on the same board-colour.

**Murray Lion:** Leaps to any square in the 5×5 area centered on itself (i.e. up to 2 squares orthogonally or diagonally), or moves one square in any direction only to capture. Named for chess historian H.J.R. Murray, who erred in describing the Chu Shogi Lion in his 1931 book.

**Rotating Spearman:** Slides any number of squares forward (when upright) or along the forward diagonal it faces (when rotated). At the end of its move, it may rotate to any of three headings — forward-upright, left-diagonal, or right-diagonal. It may also rotate in place without moving. It cannot rotate before moving. Captures only on the advance direction, not on retreat.

### Starting Position

Files a–j (10 files); ranks 1–10.

| Rank | White | Black |
|---|---|---|
| 1 | R C B L K Q L B C R | (same, mirrored as rank 10) |
| 2 | — Sp N — S S — N Sp — | (same, mirrored as rank 9) |
| 3 | P P P P P P P P P P | (same, mirrored as rank 8) |

Key: R=Rook, C=Camel, B=Bishop, L=Murray Lion, K=King, Q=Queen, N=Knight, S=Steward, Sp=Rotating Spearman (facing centre), P=Pawn.

Black occupies ranks 8–10 (mirror).

### Special Rules

**Two-move privilege:** Each player may make two consecutive moves per turn — until they make a capture. Upon capturing for the first time, the player permanently loses the two-move privilege; thereafter that player makes only one move per turn. A capture must be made on the first and only move of a turn (cannot capture on the first of two moves).

**Pawns and Stewards:** Both may advance 1 or 2 squares on their first individual move.

**En passant:** Disabled.

**Castling:** King moves to the vacated Bishop's square; Rook moves to the vacated Lion's square. Both kingside and queenside castling are available.

**Pawn promotion:** On reaching rank 10, a Pawn may promote to any piece.

### Piece Values (10×10 adjusted)

| Piece | Value |
|---|---|
| Pawn | 0.6 |
| Steward | 0.9 |
| Camel | 2.5 |
| Rotating Spearman | 2.5 |
| Knight | 2.6 |
| Bishop | 3.1 |
| Murray Lion | 4.4 |
| Rook | 5.0 |
| Queen | 9.1 |

### Win Condition

Checkmate the opponent's King.

### Attribution

Centennial Chess was created by John William Brown. Entry in the 1999 Large Variant Contest. Source: chessvariants.com/large.dir/contest/cenchess.html
