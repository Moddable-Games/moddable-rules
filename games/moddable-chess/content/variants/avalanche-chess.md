---
title: Avalanche Chess
slug: avalanche-chess
board: "8×8"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Standard chess with a mandatory avalanche rule: after each move, the moving player must also advance one of the opponent's pawns one square forward. No other rules change."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  notation: algebraic
published: true
---

## Avalanche Chess

Avalanche Chess is a chess variant in which, after making a normal move, the moving player must also **advance one of the opponent's pawns one square forward**. The opponent's pawn is pushed toward the moving player's back rank, creating tactical pressure and pawns that advance faster than normal.

### Setup

Standard 8×8 chess starting position. White moves first.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### The Avalanche Rule

After completing a normal move (piece move or pawn move), the moving player must **push one of the opponent's pawns** one square directly toward their own back rank:

- The pushed pawn must have a clear square directly in front of it (the square is empty).
- A pawn that has already reached the last rank (promoted) cannot be pushed.
- If **no** opponent pawn can legally be pushed (all opponent pawns are blocked or promoted), the player may skip the avalanche step.
- You cannot push an opponent pawn onto a square where it is immediately captured.
- A pushed pawn may reach the back rank through the avalanche — it **promotes** immediately, with the piece type chosen by the owner of the pawn (not the pusher).

### Rules

All standard chess rules apply: castling, en passant (a double-step pawn move during the avalanche does *not* grant en passant rights — only a double-step self-pawn move does), promotion, stalemate as draw, threefold repetition as draw.

**Check and checkmate:** if pushing an opponent pawn would deliver check to your own King, you may not make that choice. You must push a different pawn. If no safe push exists, skip the avalanche step.

### Attribution

Avalanche Chess is a chess variant with rules documented from chessvariants.com and pychess.org/variants/avalanche.
