---
title: Crazyhouse
slug: crazyhouse
board: "8×8"
players: "2"
parent: chess
win: Checkmate
special: Captured pieces switch sides and can be dropped back onto the board.
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
---

## Crazyhouse

Captured pieces join the captor's reserve. Instead of moving, you may drop a piece from your hand onto any empty square. The most popular chess variant online.


{{svg:crazyhouse-board.svg "Crazyhouse — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess setup. Each player begins with an empty hand (reserve).

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- When you capture an opponent's piece, it switches colour and enters your hand (reserve).
- Instead of making a normal move, you may drop a piece from your hand onto any empty square.
- Pawns cannot be dropped on the first or eighth rank (no drop-promotions).
- Promoted pieces revert to pawns when captured.
- Dropped pieces have full movement on the following turn.
- All other standard chess rules apply (check, castling, en passant).

### Win Condition

Checkmate the opponent's King.

### Strategy

Piece drops create explosive tactical possibilities — no piece is ever truly lost. Material advantage matters less than board control and king safety. Early attacks are common because captured pieces immediately reinforce the attack. Pawn structure is less important since pawns can appear anywhere.

### Attribution

Traditional variant. Derives from Shogi's drop mechanic applied to Western chess. Popularised on Lichess and FICS. Public domain.
