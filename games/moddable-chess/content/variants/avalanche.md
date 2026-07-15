---
title: "Avalanche Chess"
slug: avalanche
board: "8×8"
players: "2"
parent: moddable-chess
win: "Checkmate"
special: "Each turn has two parts: first make a legal chess move, then push one of the opponent's pawns one square forward. The push is obligatory. If pushing a pawn leaves your King in check, you lose immediately."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
---

# Avalanche Chess

**Invented by Ralph Betza, 1977. One of the most popular postal Chess variants, described in Pritchard's *Encyclopedia of Chess Variants* and *Popular Chess Variants*, and in Schmittberger's *New Rules for Classic Games*.**

## Overview

{{svg:avalanche-board.svg "Avalanche Chess — starting position"}}

Avalanche Chess adds a compulsory obligation to every move: after making a normal chess move, you must push one of your opponent's pawns one square toward you. This "pawn push" creates an avalanche of pressure as the opponent's pawns steadily advance.

## Setup

Standard FIDE starting position.

```
FEN: rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
```

## Rules

All standard FIDE rules apply, with the following modifications:

### The Two-Part Turn

Each turn consists of **two parts, both of which must be completed**:

1. **Move**: Make any legal chess move (normal move, capture, castling, etc.).
2. **Push**: Advance one of the opponent's pawns one square forward (toward yourself). The push is a single square only and is never a capture.

### Constraints on the Push

- The push is **obligatory** unless the opponent has no pawn that can legally be advanced (all pawns blocked).
- The pawn being pushed must have a clear square immediately in front of it (no piece in the way).
- A player's first part of the turn (the move) must be legal according to standard rules. A player **cannot** leave their King in check after part 1, planning to escape check in part 2 — the two parts do not interact: check must be resolved in part 1.

### Losing by Push

- If pushing an opponent's pawn causes the pushing player's own King to be in check (i.e., the moved pawn reveals or creates a check against the pusher), that player **loses immediately**, even if they checked or mated the opponent in part 1 of the same turn.

### Promotion by Push

- If a pushed pawn reaches the last rank (promotion rank), the **pawn's owner** chooses what piece it promotes to.
- If the promotion results in a check against the player who did the pushing, that player **loses immediately**.

### No En Passant

En passant captures are not used in Avalanche Chess.

## Balanced Avalanche Chess

White has a substantial first-move advantage in standard Avalanche Chess. To compensate, **Balanced Avalanche Chess** (Alessandro Castelli) removes White's pawn push on the very first move: White's first turn consists of the move only; from White's second turn onward, both parts are required.

## Strategy Notes

The pawn push dramatically changes strategy. A player must think not only about their own position but also which of their pawns are most dangerous when advanced. Passed pawns become double-edged: your opponent can race them to promotion. Check threats must be calculated with great care since a push that exposes your own King loses the game instantly.

*Source: chessvariants.com/mvopponent.dir/avalanche.html*
