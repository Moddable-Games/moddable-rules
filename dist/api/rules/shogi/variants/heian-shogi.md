# Heian Shogi

**The earliest known form of Japanese chess, first documented in the *Nichureki* (1126–1130). Historically of the 8th–9th century. Primarily of historical interest.**

## Overview

{{svg:heian-shogi-board.svg "Heian Shogi — starting position"}}

Heian Shogi is played on a 9×8 board (9 files, 8 ranks) with 18 pieces per side. There are no Rooks, no Bishops, and no drops. All pieces (except the King) promote to Gold General upon reaching the promotion zone. The game is considerably slower than later Shogi variants.

## Setup

```
FEN: lnsgkgsnl/9/ppppppppp/9/9/PPPPPPPPP/9/LNSGKGSNL w - - 0 1
```

**Back rank (White rank 1):** Lance(a1), Knight(b1), Silver(c1), Gold(d1), King(e1), Gold(f1), Silver(g1), Knight(h1), Lance(i1)

**Third rank (White rank 3):** Pawns a3–i3 (9 pawns)

Black mirrors White’s setup on the opposite side of the board.

## Pieces

| Piece | Movement | Promotes To |
|-------|----------|-------------|
| **King** | One step any direction | Does not promote |
| **Gold General** | One step ortho. or diagonally forward (not diag. backward) | Does not promote |
| **Silver General** | One step diagonally or straight forward (not sideways or backward) | Gold General |
| **Knight** | Forward L-shape only: 1 ortho. + 1 diag. forward (jumps over) | Gold General |
| **Lance** | Slides straight forward any distance (no backward or sideways) | Gold General |
| **Pawn** | One step straight forward | Gold General (Tokin) |

The Knight is the only piece that can jump over other pieces.

## Promotion

The **promotion zone** is the three ranks furthest from each player (White: ranks 6–8). Promotion to **Gold General** is optional at the end of a turn when the piece enters, moves within, or leaves the promotion zone, with these exceptions:

- A **Pawn** or **Lance** must promote upon reaching the last rank (rank 8 for White), as it could not otherwise make a legal move.
- A **Knight** must promote upon reaching the 2nd-to-last rank (rank 7 for White), as it could not otherwise make a legal move.

All promotions are to **Gold General** (or Tokin for Pawns, which is functionally identical).

## Win Conditions

**Checkmate**: If a player’s King is in check and no legal move can escape the check, that player loses.

**Bare King** (bareing): A player wins by capturing all of the opponent’s pieces except the King. However, a bare King may secure a **draw** by also baring the opponent’s King on the immediately following move.

**No drops**: Captured pieces are permanently removed from the game.

## Notes

- The game was reconstructed from the *Nichureki* (1126–1130) and other historical sources. The *Nichureki* describes piece movements and states that all pieces promote to Gold General upon reaching the 3rd rank, and that baring the King wins the game.
- An 8×8 variant also exists but is less commonly reconstructed.
- Notation uses Japanese-style: files numbered 1–9 (right to left), ranks lettered a–h (top to bottom from Black’s view).

*Source: chessvariants.com/shogivariants.dir/heian.html; based on John Fairbairn, “Shogi History & the Variants,” Shogi magazine, September 1980*