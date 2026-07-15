---
title: "Pocket Knight Chess"
slug: pocket-knight
board: "8×8"
players: "2"
parent: moddable-chess
win: "Checkmate"
special: "Each player holds one extra Knight in reserve (the \"pocket\"). Once per game, instead of making a normal move, a player may drop their pocket Knight onto any empty square."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
  drops: true
---

# Pocket Knight Chess

**By Ed Friedlander, 2001.**

## Overview

{{svg:pocket-knight-board.svg "Pocket Knight Chess — starting position"}}

Pocket Knight Chess is standard chess with one addition: each player begins the game holding a spare Knight in their "pocket." Once in the game, a player may spend their move to drop this Knight onto any empty square instead of moving a piece on the board.

## Setup

Standard FIDE starting position. Each player also holds one Knight in reserve (not on the board).

```
FEN: rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
(Plus one White Knight and one Black Knight in pocket)
```

## Rules

All standard FIDE rules apply, with the following addition:

### The Pocket Drop

- Once per game, on their turn, a player may **drop their pocket Knight** onto any empty square on the board instead of making a normal move.
- The square must be empty.
- A drop counts as a full move.
- Each player may only do this **once** in the game.
- A player who drops their Knight may not do so again, even if the Knight is later captured.

### All Other Rules

Castling, en passant, promotion, and all other FIDE rules apply normally.

## Strategy Notes

The pocket Knight provides a powerful surprise weapon: it can be dropped on any empty square, making it useful for outpost manoeuvres, sudden forks, or reinforcing a collapsing defense. Because the drop can only happen once, timing is crucial — spending it too early may waste the element of surprise; spending it too late may be too little.

*Source: chessvariants.com/play/erf/PocketKt.html*
