---
title: "Judkins' Shogi"
slug: judkins-shogi
board: "6×6"
players: "2"
parent: shogi
win: "Checkmate"
special: "Modern miniature Shogi on a 6×6 board. 7 pieces per side. Includes drops. Promotion zone is the last 2 ranks. Rook promotes to Dragon, Bishop to Horse, Knight/Silver/Pawn promote to Gold."
engine:
  topology:
    type: grid
    rows: 6
    cols: 6
  players: [sente, gote]
  setup: "rbsgkn/5p/6/6/P5/NKGSBR"
  render:
    cellSize: 40
---

# Judkins' Shogi

**Modern miniature Shogi variant on a 6×6 board. Named after its inventor.**

## Overview

{{svg:judkins-shogi-board.svg "Judkins' Shogi — starting position"}}

Judkins’ Shogi compresses modern Shogi onto a 6×6 board with 7 pieces per side, retaining drops. It plays very similarly to standard Shogi but in a much faster format.

## Setup

Each player has 7 pieces: King, Gold, Silver, Knight, Bishop, Rook, and one Pawn.

```
FEN: rbsgkn/5p/6/6/P5/NKGSBR w - - 0 1
(Approximate; pawn is on the square directly in front of the King)
```

**White (rank 1, left to right):** Rook(a1), Bishop(b1), Silver(c1), Gold(d1), King(e1), Knight(f1)
**White (rank 2):** Pawn at e2 (directly in front of the King)

Black mirrors White on the opposite side of the board.

## Pieces

All pieces move exactly as in standard Shogi:

| Piece | Movement | Promotes To |
|-------|----------|-------------|
| **King** | One step any direction | Does not promote |
| **Gold General** | One step ortho. or diagonally forward | Does not promote |
| **Rook** | Slides ortho. any distance | Dragon (Rook + diagonal step) |
| **Bishop** | Slides diagonally any distance | Horse (Bishop + ortho. step) |
| **Silver General** | One step diagonally or straight forward | Gold General |
| **Knight** | Forward L-shape only (1+2 forward, jumps over) | Gold General |
| **Pawn** | One step straight forward | Gold General |

## Promotion

The **promotion zone** is the **last 2 ranks** (ranks 5–6 for White). Promotion is optional at the end of a turn when the move enters, moves within, or leaves the promotion zone, except:
- A Pawn must promote upon reaching rank 6 (the last rank), as it could not otherwise move.
- A Knight must promote upon reaching rank 5, as it could not otherwise move forward.

## Drops

Captured pieces are held in hand and may be dropped on any empty square on the player’s turn, with these restrictions:
- A piece may not be dropped on a square from which it has no legal moves (Pawns cannot be dropped on the last rank).
- A Pawn may not be dropped into a file already containing an unpromoted friendly Pawn.
- A Pawn may not be dropped to give immediate checkmate.
- A piece dropped inside the promotion zone does **not** promote immediately; it may promote on a subsequent move.

All promoted pieces revert to their unpromoted form when captured and returned to hand.

*Source: chessvariants.com/shogivariants.dir/judkin.html*
