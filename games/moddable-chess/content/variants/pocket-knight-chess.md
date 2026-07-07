---
title: Pocket Knight Chess
slug: pocket-knight-chess
board: "8×8"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Standard chess with one extra Knight per side held in reserve. Each player may drop their pocket Knight onto any empty square once during the game, instead of making a normal move."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  notation: algebraic
  hand: true
  drops: true
published: true
---

## Pocket Knight Chess

Pocket Knight Chess adds a single strategic reserve to standard chess: each player starts with **one extra Knight in their pocket**. At any point during the game, instead of making a normal move, a player may **drop their pocket Knight** onto any empty square on the board.

### Setup

Standard 8×8 chess starting position. Each player has **1 Knight in hand** at the start.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR[Nn] w KQkq - 0 1`

*(N = White pocket Knight, n = Black pocket Knight.)*

### Drop Rules

- A player may drop their pocket Knight on **any empty square** on the board, on any rank.
- The drop replaces that player's normal move entirely — no piece is also moved on the same turn.
- A pocket Knight may **not** be dropped if it would immediately deliver checkmate (drop-checkmate is illegal).
- A pocket Knight may be dropped to deliver **check** (non-checkmate check is legal).
- Each player may use their pocket Knight **exactly once**. Once dropped, it is a normal piece and follows all standard rules. If captured, it is gone permanently.

### Rules

All standard chess rules apply (castling, en passant, pawn promotion, stalemate as draw, threefold repetition). The pocket Knight drop is the only addition.

### Attribution

Pocket Knight Chess rules documented from pychess.org/variants/pocketknight.
