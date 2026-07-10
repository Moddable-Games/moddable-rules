---
title: Fanorona Chess
slug: fanorona-chess
board: "5×9 double Alquerque"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Chess variant on the double Alquerque board used in Fanorona (the traditional Malagasy game of Madagascar). Captures are by approach and withdrawal, not replacement: moving toward an enemy piece captures it; moving away from an enemy piece also captures it. If a capture is available, it must be made. Stalemate is a loss. No castling; no en passant; Pawn promotes only to previously captured pieces. Created by Peter Aronson, 2004."
engine:
  topology:
    type: grid
    rows: 5
    cols: 9
  players: [white, black]
  render:
    cellSize: 36
  setup: "ppppppppp/ppppppppp/pppp1PPPP/PPPPPPPPP/PPPPPPPPP"
---

## Fanorona Chess

Fanorona Chess is a chess variant by Peter Aronson (2004) played on the double Alquerque board used for **Fanorona** — the traditional strategy game of Madagascar. The key innovation: captures follow Fanorona's **approach and withdrawal** mechanics instead of chess's normal replacement capture.

### The Board

A 5×9 double Alquerque board (45 points total). Only **every other point** has diagonal connectivity — points alternate between those that are connected diagonally (have 8 neighbours including diagonals) and those that are connected orthogonally only (have 4 neighbours, no diagonals). Pieces may only move along existing connecting lines.

Effectively: think of the board as a grid where the diagonal moves are selectively available, creating a rich tactical texture where the type of square your piece occupies matters.

### Starting Position

**Yellow (standard setup):**
- Rank 1: Knight, Rook, King, Rook, Knight (a1–e1)
- Rank 2: [empty], Bishop, Queen, Bishop, [empty] (b2, c2, d2)
- Rank 3: 5 Pawns (a3–e3)

**Red:** Ranks 9, 8, 7 (mirror).

*Alternate setup: Bishop, Rook, King, Rook, Bishop (rank 1); Knight, [empty], Queen, [empty], Knight (rank 2). Allows all pieces to move on the first turn but was found inferior in testing.*

### Movement

All pieces move along the connecting lines of the board (ortho + diagonal where available). Pieces cannot enter a point not connected by a line.

- **King:** 1 step in any connected direction. May make a non-capturing Knight’s move as its **first move** if not in check
- **Queen, Rook, Bishop:** slide along connected lines (stops at captures or blockers)
- **Knight:** traces a path (not a leap) — 1 step diag then 1 step ortho outward, OR 1 step ortho then 1 step diag outward; first square may be occupied
- **Pawn:** 1 step forward or forward-diagonally (where lines exist); no double step; no en passant

### Capture: Approach and Withdrawal

This is the core mechanic. **Replacement capture does not exist** — pieces cannot move onto occupied squares.

- **Approach capture:** when a piece moves toward an adjacent enemy piece (in the same direction of movement), that enemy piece is captured
- **Withdrawal capture:** when a piece moves away from an adjacent enemy piece (directly opposite its direction of movement), that enemy piece is captured
- Only **one type** of capture may be chosen per move — approach OR withdrawal, not both
- Only the **first piece** in the line is captured (not the entire line, as in traditional Fanorona)

**Capture is mandatory** if any capture is possible with the piece being moved. A player is not required to choose a move that enables a capture, but if the piece they move could capture, they must do so.

### Rules

- **No castling**
- **No en passant**
- **No double Pawn first step**
- **Pawn promotion:** upon reaching the far rank, the Pawn promotes to any piece previously captured by the opponent. If no such pieces exist, the Pawn cannot enter the last rank
- **Stalemate:** a stalemated player **loses** (not a draw)
- Win: Checkmate the opponent's King

### Double Fanorona Chess

A larger variant by Peter Aronson using a 9×9 quadruple Alquerque board. Adds the **Chancellor** (moves as Rook or Knight) and allows initial double Pawn steps (non-capturing only).

Setup: Rook, Knight, Bishop, Queen, King, Chancellor, Bishop, Knight, Rook on rank 1; Pawns on rank 2.

### Attribution

Fanorona Chess was created by Peter Aronson, 2004. Source: chessvariants.com/other.dir/fanorona-chess.html
