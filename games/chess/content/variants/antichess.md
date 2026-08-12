---
playable: true
title: Antichess
slug: antichess
board: "8×8"
players: "2"
parent: chess
win: Lose all pieces or get stalemated
special: Captures are mandatory. First to lose all pieces wins.
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
      stalemateMeaning: "win"
      promotionChoices:
        - "queen"
        - "rook"
        - "bishop"
        - "knight"
        - "king"
      openingBook:
        "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -":
          - "e2e3"
          - "b2b4"
          - "g2g4"
---

## Antichess

Captures are mandatory. Lose all your pieces to win. Inverts the entire logic of chess.


{{svg:antichess-board.svg "Antichess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess setup.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- If a capture is available, you MUST capture. If multiple captures are available, you may choose which one.
- The King has no royal status — it can be captured like any other piece and there is no check or checkmate.
- No castling.
- Pawns may promote to King (in addition to the usual pieces).
- Stalemate (no legal moves) is a WIN for the stalemated player.

### Win Condition

Lose all your pieces, or be stalemated.

### Strategy

You want to force your opponent to capture your pieces while avoiding being forced to keep yours. Opening theory is highly developed — certain openings force wins within a few moves.

### The Antichess Family

| Variant | Captures forced | Stalemate | King promotion |
|---|---|---|---|
| **Antichess** | Yes | Win for the stalemated player | Yes |
| Giveaway | Yes | Loss for the stalemated player | No |
| Suicide Chess | Yes | Draw | No |
| Omnicide | No | Draw | No |

Antichess, Giveaway, Suicide Chess and Losing Chess are used interchangeably in the wider world, and different servers implement different rule combinations under each name. This library treats them as four distinct rulesets, differing on forced captures, the meaning of stalemate, and whether pawns may promote to King. Where an external source appears to contradict one of these files, it is most likely describing a different member of the family under a shared name. The table above is authoritative for this library.

### Attribution

Also known as "Losing Chess," "Giveaway Chess," or "Suicide Chess." Traditional variant, 19th century. Public domain.
