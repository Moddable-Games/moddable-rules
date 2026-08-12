---
playable: true
title: Giveaway
slug: giveaway
board: "8×8"
players: "2"
parent: chess
win: Lose all pieces
special: Forced captures. King is not royal. Stalemate is a loss.
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
  plugins:
    chess:
      castling: false
      noCheck: true
      stalemateMeaning: "loss"
---

## Giveaway

Forced captures. Lose all your pieces to win. Stalemate counts as a loss for the stalemated player. The ultimate inversion of chess logic.


{{svg:giveaway-board.svg "Giveaway — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess starting position.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- If you can capture, you MUST capture. If multiple captures are available, you choose which one.
- The King is not royal — there is no check or checkmate. The King can be captured like any other piece.
- No castling (the King has no special status).
- Pawns promote normally (Queen, Rook, Bishop, or Knight).
- Stalemate = loss for the stalemated player (the player who cannot move loses).

### Win Condition

Lose all of your pieces (including the King).

### Strategy

You want to GIVE pieces away, not protect them. However, forced captures means your opponent can force you to capture their pieces too — creating bizarre tactical lines. The ideal position has your pieces offering themselves while your opponent's pieces have no captures available. Pawns are hard to lose (they only capture diagonally) and become liabilities in the endgame. Underpromotion to Bishop is sometimes correct to limit your own capture options.

### The Antichess Family

| Variant | Captures forced | Stalemate | King promotion |
|---|---|---|---|
| Antichess | Yes | Win for the stalemated player | Yes |
| **Giveaway** | Yes | Loss for the stalemated player | No |
| Suicide Chess | Yes | Draw | No |
| Omnicide | No | Draw | No |

Antichess, Giveaway, Suicide Chess and Losing Chess are used interchangeably in the wider world, and different servers implement different rule combinations under each name. This library treats them as four distinct rulesets, differing on forced captures, the meaning of stalemate, and whether pawns may promote to King. Where an external source appears to contradict one of these files, it is most likely describing a different member of the family under a shared name. The table above is authoritative for this library.

### Attribution

Traditional variant. Also known as "Giveaway Chess." Public domain.
