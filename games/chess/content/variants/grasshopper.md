---
playable: true
title: Standard Grasshopper Chess
slug: grasshopper
board: "8x8"
players: "2"
parent: chess
win: "Checkmate the opponent's king"
order: 1
special: "Each queen is replaced by a Grasshopper — a piece that must hop over a hurdle to move."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  setup: "rnbgkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBGKBNR"
  notes: "G/g = Grasshopper. Queens replaced 1-for-1."
  plugins:
    chess:
      pieces:
        grasshopper:
          movement: hopper
          base_lines: queen
          hurdle_count: 1
          land: immediately_beyond_hurdle
          notation: G
published: true
---

## Standard Grasshopper Chess

{{svg:grasshopper-board.svg "Standard Grasshopper Chess — starting position"}}

Played on an 8×8 board with all standard chess rules, except: **both queens are replaced by Grasshoppers.** All other pieces and rules are unchanged.

### Starting Position

```
rnbgkbnr
pppppppp
........
........
........
........
PPPPPPPP
RNBGKBNR
```

Where `G`/`g` = Grasshopper (d1/d8).

### The Grasshopper

| Property | Rule |
|----------|------|
| Move lines | Queen lines (rank, file, diagonal) |
| Requirement | Must hop over exactly one piece (the hurdle) |
| Hurdle | Any piece of either colour |
| Landing | Immediately beyond the hurdle (one square past it) |
| Capture | Landing on an enemy piece captures it |
| Blocked landing | If the square beyond the hurdle is occupied by a friendly piece, the move is illegal |
| No hurdle | If no piece exists in a direction, the Grasshopper cannot move that way |
| Range | Always lands exactly one square past the hurdle — no choice of range |

**Tactical implications:** the Grasshopper grows weaker as pieces are captured (fewer hurdles), and stronger in crowded positions. It can be its own hurdle — a Grasshopper cannot hop over itself.

### Promotion

Pawns promote to: Queen, Rook, Bishop, Knight, or **Grasshopper**.

### All Other Rules

Castling, en passant, stalemate, and draw rules apply without modification.

### Attribution

Grasshopper invented by T. R. Dawson, *Fairy Chess Review* (1913, problem no. 1). Public domain. Implemented in Fairy-Stockfish and Zillions of Games.
