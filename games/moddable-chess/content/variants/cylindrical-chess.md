---
title: Cylindrical Chess
slug: cylindrical-chess
board: "8×8 (cylindrical)"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Standard 8×8 chess where the board is treated as a cylinder: the a-file and h-file are adjacent. Pieces can move off one side and appear on the other. No other rule changes."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
    wrap_horizontal: true
  players: [white, black]
  notation: algebraic
published: true
---

## Cylindrical Chess

Cylindrical Chess is standard chess played on an 8×8 board that is conceptually rolled into a cylinder: **the a-file and h-file are treated as adjacent**. A piece moving off the h-file reappears on the a-file (and vice versa). Ranks 1 and 8 are not joined — only the files wrap.

### Setup

Standard 8×8 chess starting position. White moves first.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

*(The FEN is identical to standard chess. The cylindrical topology is a board property, not reflected in the position string.)*

### Cylindrical Topology

- **Files wrap:** a-file and h-file are adjacent. A piece on a1 attacks/moves to h1 as if h-file were adjacent to a-file. Similarly b8 is adjacent to a8 and so forth across any rank.
- **Ranks do not wrap:** rank 1 and rank 8 are independent edges.
- **All piece movement** extends naturally through the wrap: a Rook on a1 can slide to h1, g1, f1, etc. by wrapping; a Bishop on a1 attacks b2 and h2 (because h-file wraps to be adjacent to a-file).

### Key Differences from Standard Chess

- **Bishops:** No longer colourbound — by wrapping, a Bishop can eventually reach any colour square.
- **Rooks and Queens** have extended attack ranges along ranks (can threaten from both directions of a wrap).
- **Castling:** Standard castling is legal. Because files wrap, a Queen-side castling works normally (King moves to c1, Rook to d1).
- **En passant**, **stalemate**, **pawn promotion** all apply as in standard chess.

### Attribution

Cylindrical Chess rules documented from chessvariants.com/other.dir/cylindrical.html and pychess.org/variants/cylindrical.
