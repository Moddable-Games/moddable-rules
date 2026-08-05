---
playable: true
title: Makpong
slug: makpong
board: "8×8"
players: "2"
parent: chess
win: Checkmate
special: King cannot move out of check. You must block or capture instead.
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
  plugins:
    chess:
      setup: "rngkfgnr/8/pppppppp/8/8/PPPPPPPP/8/RNGKFGNR"
      castling: false
      enPassant: false
      doubleStep: false
      promotionChoices:
        - "ferz"
      pieces:
        ferz:
          type: "leaper"
          offsets:
            - [-1,-1]
            - [-1,1]
            - [1,-1]
            - [1,1]
        khon:
          type: "leaper"
          offsets:
            - [-1,-1]
            - [-1,0]
            - [-1,1]
            - [1,-1]
            - [1,1]
          directional: true
      vocabulary:
        ferz:
          symbols:
            "0": "F"
            "1": "f"
        khon:
          symbols:
            "0": "G"
            "1": "g"
      pawnConfig:
        forwardDir:
          0: [-1, 0]
          1: [1, 0]
        startCells:
          0: [40,41,42,43,44,45,46,47]
          1: [16,17,18,19,20,21,22,23]
        promotionCells:
          0: [16,17,18,19,20,21,22,23]
          1: [40,41,42,43,44,45,46,47]
        captureDirections:
          0:
            - [-1,-1]
            - [-1,1]
          1:
            - [1,-1]
            - [1,1]
        doubleStep: false
---

## Makpong

A Thai chess (Makruk) variant where the King cannot move out of check. When in check, you must block or capture the checking piece — the King stays put.


{{svg:makpong-board.svg "Makpong — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess starting position.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`
### Rules

All standard chess rules apply, except:
- When in check, the King CANNOT move. You must resolve the check by:
  - Capturing the checking piece (with any piece other than the King), OR
  - Blocking the check (interposing a piece between the King and the attacker).
- If neither blocking nor capturing is possible, it is checkmate.
- When NOT in check, the King moves normally.
- Double checks are always checkmate (since you can't capture or block two attackers simultaneously without moving the King).

### Win Condition

Checkmate (which is much easier to achieve due to the King's inability to flee).

### Strategy

Double check is instantly lethal — any discovered check where the moving piece also gives check is mate. This makes batteries (aligned pieces that can deliver discovered check) extremely dangerous. Knights giving check are nearly unstoppable since they can't be blocked. Positional play revolves around creating situations where the King has no blockers or capturers available. Keeping pieces near your King for defensive blocking is critical.

### Attribution

Traditional Thai variant of Makruk. Public domain.
