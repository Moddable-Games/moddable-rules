---
playable: true
key: progressive-italian
title: Progressive Italian
slug: progressive-italian
board: "8×8"
players: "2"
parent: chess
win: Checkmate
special: "Italian progressive — moves escalate (1, 2, 3...) but you may not give check until your final move of the turn."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
---

## Progressive Italian

The Italian variant of Progressive Chess. Moves per turn escalate as in standard Progressive (1, 2, 3, 4...), but with one restriction: you may not give check on any move except the last move of your turn. If you have 4 moves, moves 1-3 must not deliver check; only move 4 may.

This eliminates early-turn checking as a tactic and forces longer-range planning.

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess setup.

### Rules

All standard chess rules apply with these modifications:

- White makes 1 move, Black makes 2, White makes 3, and so on.
- You may NOT deliver check on any move except the final move of your turn.
- Checkmate ends the game immediately.
- Stalemate is a draw.
