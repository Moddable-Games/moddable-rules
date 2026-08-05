---
playable: true
key: medusaChess
title: Medusa Chess
slug: medusa-chess
original: true
board: "8×8"
players: "2"
parent: chess
win: Checkmate
special: After the queen moves, all enemy pieces she attacks become petrified for 2 turns. Kings immune.
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
---

## Medusa Chess

The Queen has the Medusa's gaze. After she moves, all enemy pieces she attacks (along her lines of sight) become petrified for 2 turns. Petrified pieces cannot move.


{{svg:medusa-chess-board.svg "Medusa Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess setup.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- After the Queen moves, every enemy piece she attacks becomes petrified for 2 turns.
- Petrified pieces cannot move but still block movement and deliver check normally.
- Kings cannot be petrified.
- Petrification wears off after 2 full turns.
- A piece that is already petrified does not have its timer reset by additional Queen moves.
- Petrified pieces can still be captured normally.
- All other standard chess rules apply.

### Win Condition

Checkmate the opponent's King (petrified pieces count as immovable for escape purposes).

### Strategy

Queen positioning becomes paramount — move her to lines that freeze the most enemy pieces, then exploit the frozen position. An exposed Queen, however, is still vulnerable to capture. Petrifying defenders before launching an attack is the key pattern. Trade Queens early if you're losing the petrification war.

### Attribution

Moddable Games original. No external provenance is claimed. Designed as a queen-centric status-effect variant to exercise the engine's timed-effect system.
