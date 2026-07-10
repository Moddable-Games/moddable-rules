---
title: Dragon Chess
slug: dragon-chess
board: "8×8"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Created by Grandmaster Miguel Illescas. Standard chess with two Dragons (Bishop+Knight = Archbishop) held in reserve; at any point instead of a move, gate one onto any empty square on your own first rank."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
  notation: algebraic
  hand: true
  gating: true
published: true
---

## Dragon Chess

Dragon Chess is a chess variant created by Grandmaster Miguel Illescas. The game begins in the standard chess starting position. Each player holds **two Dragon pieces in reserve** and may gate one onto any empty square on their own first rank at any point during the game instead of making a normal move.

### The Dragon

The **Dragon (D)** moves as a **Bishop combined with a Knight** — it can slide diagonally any number of squares and also jump to any of the 8 Knight destination squares. This piece is known in fairy chess as the **Archbishop** or **Cardinal**. The Dragon is not colourbound (its Knight moves can reach squares of either colour). It is stronger than a Rook but slightly weaker than a Queen in most positions.

### Setup

Standard 8×8 chess starting position. Each player begins with **2 Dragons in reserve** (off the board).

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR[DDdd] w KQkq - 0 1`

*(D/d = Dragon. [DDdd] = White has 2 Dragons in hand, Black has 2 Dragons in hand.)*

### Rules

- On any turn, instead of moving a piece on the board, a player may **gate** one of their reserve Dragons onto any **empty square on their own first rank** (rank 1 for White, rank 8 for Black).
- A Dragon cannot be gated onto an occupied square.
- Once gated, a Dragon moves and captures as any other piece on subsequent turns.
- A player may gate their Dragons on any turn — there is no obligation to gate early or late.
- Each player has exactly 2 Dragons for the entire game; once both are on the board, no more gating is possible.
- If a Dragon on the board is captured, it is gone permanently (no return to hand).
- All standard chess rules apply: castling, en passant, promotion (Pawns may promote to Queen, Rook, Bishop, Knight, or Dragon), stalemate is a draw.

### Attribution

Dragon Chess was created by Grandmaster Miguel Illescas. Rules documented from pychess.org/variants/dragon.
