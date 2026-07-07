---
title: "Carrera's Chess"
slug: carreras-chess
board: "10×8"
players: "2"
parent: moddable-chess
win: Checkmate
special: "10×8 variant invented by Pietro Carrera (1617). Adds Champion (Rook+Knight) and Centaur (Bishop+Knight) between the existing pieces. The direct ancestor of Capablanca Chess."
engine:
  topology:
    type: grid
    rows: 8
    cols: 10
  players: [white, black]
  notation: algebraic
published: true
---

## Carrera's Chess

Carrera's Chess was invented by the Italian chess master Pietro Carrera and published in his 1617 book *Il Gioco degli Scacchi*. It extends the board to **10×8** and introduces two new compound pieces: the **Champion** (Rook + Knight) and the **Centaur** (Bishop + Knight). It is the historical ancestor of Capablanca Chess and many other 10×8 variants.

### New Pieces

**Champion (C):** Moves as a Rook **or** as a Knight — it can slide any distance orthogonally, or leap to any L-shaped Knight destination. Equivalent to what modern fairy chess calls a Marshal or Chancellor.

**Centaur (T):** Moves as a Bishop **or** as a Knight — it can slide any distance diagonally, or leap to any L-shaped Knight destination. Equivalent to what modern fairy chess calls an Archbishop or Cardinal. Not colourbound.

### Setup

10×8 board. Files are a–j.

**White (rank 1):** Rook(a) · Knight(b) · Bishop(c) · Champion(d) · Queen(e) · King(f) · Centaur(g) · Bishop(h) · Knight(i) · Rook(j)

**White pawns (rank 2):** a2–j2 (10 pawns)

**Black (rank 8, mirrored):** Rook(a) · Knight(b) · Bishop(c) · Champion(d) · Queen(e) · King(f) · Centaur(g) · Bishop(h) · Knight(i) · Rook(j)

**FEN:** `rnbcqktbnr/pppppppppp/10/10/10/10/PPPPPPPPPP/RNBCQKTBNR w KQkq - 0 1`

*(C/c = Champion, T/t = Centaur. Note: alternative letter assignments exist — confirm from source.)*

### Rules

All standard chess rules apply, adapted for 10 files:

- **Castling:** the King moves 3 squares toward the Rook. Standard castling conditions apply.
- **Pawns** promote on rank 8 (White) or rank 1 (Black). Promotion options include Champion and Centaur.
- **Stalemate**, **repetition**, and **50-move** rules apply as in standard chess.

### Attribution

Carrera's Chess was invented by Pietro Carrera, published 1617. Rules documented from chessvariants.com/historic.dir/carrera.html.
