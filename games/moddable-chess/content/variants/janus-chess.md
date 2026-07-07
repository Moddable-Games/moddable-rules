---
title: Janus Chess
slug: janus-chess
board: "10×8"
players: "2"
parent: moddable-chess
win: Checkmate
special: "10×8 chess variant invented by Werner Schöndorf (1978). Adds the Janus piece (Archbishop = Bishop+Knight) to each side, placed on the b- and i-files. Standard chess rules otherwise."
engine:
  topology:
    type: grid
    rows: 8
    cols: 10
  players: [white, black]
  notation: algebraic
published: true
---

## Janus Chess

Janus Chess was invented by Werner Schöndorf in 1978. It extends the standard chessboard to **10×8** and adds a new piece — the **Janus** (Archbishop: Bishop + Knight combined) — to each side's flanks.

### The Janus

The **Janus (J)** moves as a **Bishop combined with a Knight** — it can slide any number of squares diagonally and also jump to any of the eight Knight-move destinations. It is not colourbound (Knight moves reach both colours). The Janus is the equivalent of what is called an Archbishop or Cardinal in other extended chess variants.

### Setup

Pieces on a 10×8 board. Files are labeled a–j.

**White (rank 1):** Rook(a) · Janus(b) · Knight(c) · Bishop(d) · Queen(e) · King(f) · Bishop(g) · Knight(h) · Janus(i) · Rook(j)

**White pawns (rank 2):** a2–j2 (10 pawns)

**Black (rank 8, mirrored):** Rook(a) · Janus(b) · Knight(c) · Bishop(d) · Queen(e) · King(f) · Bishop(g) · Knight(h) · Janus(i) · Rook(j)

**Black pawns (rank 7):** a7–j7 (10 pawns)

**FEN:** `rjnbqkbnjr/pppppppppp/10/10/10/10/PPPPPPPPPP/RJNBQKBNJR w KQkq - 0 1`

*(J/j = Janus, otherwise standard FIDE piece letters.)*

### Rules

All standard chess rules apply, adapted for 10×8:

- **Castling:** the King moves 3 squares toward the Rook (not 2). White King-side: Ke1–Kg1, Rook j1–Rh1. White Queen-side: Ke1–Kc1, Rook a1–Rd1. Standard castling conditions apply (no pieces between, King not in check, King and Rook haven't moved).
- **Pawns** promote on rank 8 (for White) or rank 1 (for Black). Promotion options: Queen, Rook, Bishop, Knight, or Janus.
- **Stalemate**, **threefold repetition**, and **fifty-move rule** apply as in standard chess.
- **Check and checkmate** apply normally.

### Attribution

Janus Chess was invented by Werner Schöndorf (1978). Rules documented from chessvariants.com/large.dir/janus.html.
