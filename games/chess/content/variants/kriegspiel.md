---
playable: true
title: "Kriegspiel"
slug: kriegspiel
board: "8×8"
players: "2 + referee"
parent: chess
win: "Checkmate"
special: "Fog-of-war chess. Each player sees only their own pieces. A referee manages a master board and announces partial information: legality of attempted moves, check direction, capture location, and pawn-capture availability."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
---

# Kriegspiel

**Invented by Henry Michael Temple, 1899, South Africa. Played by several famous players including Emanuel Lasker.**

## Overview

{{svg:kriegspiel-board.svg "Kriegspiel — starting position"}}

Kriegspiel is chess with incomplete information. Each player can see only their own pieces — not the opponent's position or moves. A referee maintains a third "master" board with all pieces visible and arbitrates all play. Players must deduce the opponent's position from the referee's announcements.

## Equipment

Three chess boards are needed:
- One board for White (only White pieces visible)
- One board for Black (only Black pieces visible)
- One master board for the referee (all pieces visible)

## Setup

Standard FIDE starting position on all three boards.

```
FEN: rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
```

## Rules

All standard FIDE rules apply to the actual position (as tracked by the referee). The difference is in what players can perceive:

### Turn Sequence

On their turn, a player **attempts a move**:
- If the move is **legal**, the referee announces that the player has moved, and the turn passes to the opponent.
- If the move is **illegal**, the referee announces an illegal attempt. The player must keep trying until a legal move is made.

All referee announcements are heard by both players.

### Announcements

**Check**: When a move gives check, the referee announces check and specifies the **direction**:
- Along a rank (row)
- Along a file (column)
- Along the "small diagonal" (a1–h8 direction)
- Along the "large diagonal" (h1–a8 direction)
- By a Knight

The exact location of the checking piece is not revealed.

**Capture**: When a piece is captured, the referee announces the **square where the capture occurred** (e.g., "White has captured on d3"). The type of piece doing the capturing and the type of piece captured are not revealed.

**En passant**: En passant captures are specifically announced as such (e.g., "Black has taken en passant on f3").

### Pawn Capture Query

Before attempting a move, a player may ask: **"Any?"** ("Are there any pawn captures?").
- The referee answers **"No"** if the player has no available pawn captures.
- The referee answers **"Try!"** if at least one pawn capture is available.
  - After a "Try!", the player must attempt at least one pawn capture before being allowed to try other moves. If the capture attempt is illegal (wrong square), they may try further captures or any other legal move.

### Etiquette

If a player deliberately attempts a move they know to be illegal (e.g., asking "Any?" with no pawns, or trying moves purely to confuse the opponent), the referee says **"Impossible"** so the opponent is not misled. This is considered bad manners.

## Strategy Notes

Kriegspiel rewards probabilistic reasoning and deduction. Each referee announcement narrows the possible enemy positions. Players must balance information-gathering moves (probing pawn captures, checking to reveal enemy positions) against normal strategic play. The game involves less luck and more deductive skill than the rules might initially suggest.

*Source: chessvariants.com/incinf.dir/kriegspiel.html; based on Gollon and Pritchard*
