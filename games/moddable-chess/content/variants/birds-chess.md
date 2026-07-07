---
title: "Bird's Chess"
slug: birds-chess
board: "10×8"
players: "2"
parent: moddable-chess
win: Checkmate
special: "10×8 variant invented by Henry Bird (1874). Adds the Archbishop (Bishop+Knight) to each player's inner corners. Standard FIDE pieces otherwise. Predates Capablanca Chess."
engine:
  topology:
    type: grid
    rows: 8
    cols: 10
  players: [white, black]
  notation: algebraic
published: true
---

## Bird's Chess

Bird's Chess was invented by the English chess master Henry Bird and published in 1874. It extends the standard board to **10×8** and places an **Archbishop** (Bishop + Knight) in each player's inner corner positions, flanking the standard FIDE back rank.

### The Archbishop

The **Archbishop (A)** moves as a **Bishop combined with a Knight** — it can slide any number of squares diagonally and also jump to any of the 8 Knight-move destinations. It is not colourbound. Known in other variants as the Cardinal, Janus, or Princess.

### Setup

10×8 board. Files are a–j.

**White (rank 1):** Archbishop(a) · Rook(b) · Knight(c) · Bishop(d) · Queen(e) · King(f) · Bishop(g) · Knight(h) · Rook(i) · Archbishop(j)

**White pawns (rank 2):** a2–j2 (10 pawns)

**Black (rank 8, mirrored):** Archbishop(a) · Rook(b) · Knight(c) · Bishop(d) · Queen(e) · King(f) · Bishop(g) · Knight(h) · Rook(i) · Archbishop(j)

**FEN:** `arbnqkbnra/pppppppppp/10/10/10/10/PPPPPPPPPP/ARBNQKBNRA w KQkq - 0 1`

*(A/a = Archbishop, otherwise standard FIDE letters.)*

### Rules

All standard chess rules apply:

- **Castling:** the King moves 3 squares toward the Rook. The Archbishop is not a castling piece.
- **Pawns** promote on rank 8 (White) or rank 1 (Black). Promotion to Archbishop is permitted.
- **Stalemate**, **repetition**, and **50-move** rules as standard.

### Attribution

Bird's Chess was invented by Henry Bird (1874). Rules documented from chessvariants.com/historic.dir/bird.html.
