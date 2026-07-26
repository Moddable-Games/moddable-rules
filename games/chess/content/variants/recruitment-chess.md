---
title: Recruitment Chess
slug: recruitment-chess
board: "8×8"
players: "2"
parent: chess
win: Checkmate
special: Captured pieces defect to the captor and appear on the vacated square.
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
---

## Recruitment Chess

Captured pieces switch sides. When you capture, the taken piece flips colour and appears on the square your capturing piece vacated. The board fills with turncoats.


{{svg:recruitment-chess-board.svg "Recruitment Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess setup.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- When a piece captures, the captured piece switches colour and is placed on the square the capturing piece moved from.
- Kings cannot be recruited (capturing the King ends the game normally).
- En passant captures also recruit — the captured pawn appears on the captor's starting square.
- Recruited pieces can move on the very next turn.
- All other standard chess rules apply.

### Win Condition

Checkmate the opponent's King.

### Strategy

Every capture is a double swing — you gain a piece AND the opponent gains a defector behind your lines. This makes tactical exchanges far more complex. Avoid capturing pieces that would create dangerous recruits in your back rank. Sometimes not capturing is the best move.

### Attribution

Modern variant. Public domain.
