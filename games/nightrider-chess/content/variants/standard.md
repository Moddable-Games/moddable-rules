---
title: Standard Nightrider Chess
slug: standard
board: "8x8"
players: "2"
parent: nightrider-chess
win: "Checkmate the opponent's king"
order: 1
special: "Knights are replaced by Nightriders — riders that chain knight-leaps in a single direction."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  pieces:
    nightrider:
      movement: rider
      base_leap: [1,2]
      directions: all
      notation: N
  setup: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
  notes: "N in FEN = Nightrider throughout. Standard knights replaced 1-for-1."
published: false
---

## Standard Nightrider Chess

Played on a standard 8×8 board with all standard chess rules, except: **both knights on each side are replaced by Nightriders.** All other pieces and rules are unchanged.

### Starting Position

Identical to standard chess:

```
rnbqkbnr
pppppppp
........
........
........
........
PPPPPPPP
RNBQKBNR
```

Where `N`/`n` = Nightrider.

### The Nightrider

| Property | Rule |
|----------|------|
| Move pattern | Repeated knight-steps (1,2) in a fixed direction |
| Directions | 8 directions (all knight-step vectors: ±1/±2, ±2/±1) |
| Range | Unlimited (up to board edge) |
| Blocking | Blocked by any piece on an intermediate square |
| Capture | Lands on occupied enemy square (cannot jump over to continue) |
| Check/mate | Nightriders can deliver check and checkmate along their ride lines |

**Nightrider directions (from origin):** (1,2), (2,1), (2,−1), (1,−2), (−1,−2), (−2,−1), (−2,1), (−1,2). Each is a distinct ride line.

### Promotion

Pawns may promote to: Queen, Rook, Bishop, or **Nightrider**. Promotion to Nightrider is legal and encouraged — it is generally stronger than a rook in open positions.

### All Other Rules

Castling, en passant, stalemate, and the fifty-move rule all apply without modification.

### Engine Notes

The Nightrider is implemented in Fairy-Stockfish (`-piece nightrider`), GNU Chess fairy extensions, and Green Chess. FEN notation: `N`/`n` throughout (same glyph as standard knight — disambiguate via variant flag).

### Attribution

Nightrider piece invented by T. R. Dawson, 1925. Public domain. Rules in the public domain. Implemented in Fairy-Stockfish, Green Chess, and Zillions of Games.
