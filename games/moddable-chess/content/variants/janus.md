---
title: "Janus Chess"
slug: janus
board: "10×8"
players: "2"
parent: moddable-chess
win: "Checkmate"
special: "Played on a 10×8 board. Each player adds two Januses (Archbishop: Bishop + Knight combined) between the Rooks and Knights. Castling sends the King to the b-file (3 squares) or i-file (4 squares)."
engine:
  topology:
    type: grid
    rows: 8
    cols: 10
  players: [white, black]
---

# Janus Chess

**Variant Chess, issues 18 and 20. Played by several chess grandmasters, including Viktor Korchnoi.**

## Overview

Janus Chess extends standard chess to a 10×8 board by adding two Januses per side. The Janus combines the powers of a Bishop and a Knight. The game closely resembles Capablanca's Chess in concept but has a distinct starting arrangement.

## Setup

10-file board (files a–j), 8 ranks.

```
FEN: rjnbkqbnjr/pppppppppp/10/10/10/10/PPPPPPPPPP/RJNBKQBNJR w - - 0 1
(J/j = Janus)
```

**White (rank 1):** Rook(a1), Janus(b1), Knight(c1), Bishop(d1), King(e1), Queen(f1), Bishop(g1), Knight(h1), Janus(i1), Rook(j1)
**White Pawns (rank 2):** a2–j2

**Black (rank 8):** Rook(a8), Janus(b8), Knight(c8), Bishop(d8), King(e8), Queen(f8), Bishop(g8), Knight(h8), Janus(i8), Rook(j8)
**Black Pawns (rank 7):** a7–j7

## Pieces

All standard FIDE pieces move as normal. The Janus is an additional piece:

### Janus (Archbishop)
Moves as a **Bishop** (slides diagonally any distance) **or** a **Knight** (leaps in an L-shape). It combines both powers in a single piece. The Janus cannot be blocked on its Knight move (it leaps). It is not colour-bound because of its Knight component.

## Rules

All standard FIDE rules apply with the following modifications:

### Castling

Castling works as in standard chess (King and Rook have not moved, no pieces between them, King not in check, King does not cross check), but the King travels further:

- **Short castling** (queenside, toward a1): King moves from e1 to **b1** (three squares). Rook moves from a1 to c1.
- **Long castling** (kingside, toward j1): King moves from e1 to **i1** (four squares). Rook moves from j1 to h1.

The same applies symmetrically for Black.

The squares the King passes through and lands on must not be attacked by an enemy piece.

### All Other Rules

En passant, promotion, stalemate (draw), and all other FIDE rules apply normally. Pawns promote on rank 8 (White) or rank 1 (Black) to any piece including Janus.

## Strategy Notes

The Janus is a powerful compound piece — roughly comparable in value to a Queen in the endgame — and its early development is often a key strategic concern. Because the Januses start adjacent to the Rooks rather than in the center, opening development patterns differ from Capablanca’s Chess. The wider board slightly reduces the early influence of Rooks and Queens while enhancing the Knights and Bishops.

*Source: chessvariants.com/large.dir/janus.html*
