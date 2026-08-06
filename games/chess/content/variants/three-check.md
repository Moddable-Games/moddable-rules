---
playable: true
key: threeCheck
title: Three-Check
slug: three-check
board: "8×8"
players: "2"
parent: chess
win: Checkmate or deliver 3 checks
special: First to check the opponent three times wins.
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
  plugins:
    chess:
      checkThreshold: 3
      openingBook:
        "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -":
          - "e2e4"
          - "d2d4"
          - "g1f3"
        "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3":
          - "e7e5"
          - "c7c5"
          - "e7e6"
---

## Three-Check

Deliver three checks to win. No checkmate needed. Completely changes the value of forcing moves.


{{svg:three-check-board.svg "Three-Check — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess setup.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

All standard chess rules apply. Each player's check count is tracked throughout the game.

### Win Condition

- Checkmate (as normal), OR
- Deliver check three times. Each check is counted regardless of whether it was blocked, evaded, or interposed.

### Strategy

Pieces that give check frequently (Queen, Bishops on open diagonals) become much more valuable. Sacrificing material to deliver checks becomes a core tactic. Defensive play must prioritise minimising the number of times the King is checked, not just surviving.

### Attribution

Traditional variant. Popularised on Lichess. Public domain.
