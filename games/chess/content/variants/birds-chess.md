---
title: "Bird's Chess"
slug: birds-chess
board: "10×8"
players: "2"
parent: chess
win: "Checkmate"
special: "1874 variant on a 10×8 board. Adds Guard (Rook+Knight) and Equerry (Bishop+Knight). A predecessor to Capablanca’s Chess. Castling: King moves three squares, Rook jumps over to the adjacent square."
engine:
  topology:
    type: grid
    rows: 8
    cols: 10
  players: [white, black]
  render:
    cellSize: 36
  setup: "rnbgqkebnr/pppppppppp/10/10/10/10/PPPPPPPPPP/RNBGQKEBNR"
---

# Bird's Chess

**Invented by Henry Bird, 1874. Published in the City of London Chess Magazine. A predecessor to Capablanca’s Chess.**

## Overview

{{svg:birds-chess-board.svg "Bird's Chess — starting position"}}

Bird’s Chess extends standard chess to a 10×8 board by adding two compound pieces per side: the Guard (Rook + Knight) and the Equerry (Bishop + Knight). Capablanca likely drew inspiration from this game when designing Capablanca’s Chess.

## Setup

10-file board (files a–j), 8 ranks.

```
FEN: rnbgqkebnr/pppppppppp/10/10/10/10/PPPPPPPPPP/RNBGQKEBNR w - - 0 1
(G/g = Guard, E/e = Equerry)
```

**White (rank 1, a–j):** Rook(a1), Knight(b1), Bishop(c1), Guard(d1), Queen(e1), King(f1), Equerry(g1), Bishop(h1), Knight(i1), Rook(j1)
**White Pawns (rank 2):** a2–j2

**Black (rank 8, a–j):** Rook(a8), Knight(b8), Bishop(c8), Guard(d8), Queen(e8), King(f8), Equerry(g8), Bishop(h8), Knight(i8), Rook(j8)
**Black Pawns (rank 7):** a7–j7

*Alternative: Black’s back rank may mirror White’s (with Black’s Queen on the same file as White’s Queen). Either setup is playable.*

## Pieces

All standard FIDE pieces move as usual. Two additional pieces:

### Guard
Moves as a **Rook** (slides orthogonally any distance) **or** a **Knight** (L-shape leap). Equivalent to the Chancellor.

### Equerry
Moves as a **Bishop** (slides diagonally any distance) **or** a **Knight** (L-shape leap). Equivalent to the Archbishop. Not colour-bound.

## Rules

All standard FIDE rules apply with the following modifications:

### Castling

Castling uses a modified rule. The King moves **three squares** toward the Rook; the Rook then jumps over the King to land on the square immediately adjacent to the King on the side toward center:

- **Queenside castling** (toward a1): King moves f1→c1 (three squares left); Rook moves a1→d1.
- **Kingside castling** (toward j1): King moves f1→i1 (three squares right); Rook moves j1→h1.

The same applies symmetrically for Black. Standard castling conditions apply: neither King nor Rook may have moved previously; no pieces between them; King not in check; King does not pass through check.

### Pawn Promotion

Pawns reaching the far rank may promote to: Queen, Guard, Equerry, Bishop, Rook, or Knight.

### All Other Rules

En passant, stalemate (draw), and all other FIDE rules apply normally.

*Source: chessvariants.com/large.dir/bird.html; based on Gollon manuscript sent to Greenwood, 1976*
