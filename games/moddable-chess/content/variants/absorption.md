---
title: Absorption Chess
slug: absorption
board: "8×8"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Capturing piece permanently gains the victim's movement abilities. Absorptions stack."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
---

## Absorption Chess

When a piece captures, it permanently gains the victim's movement abilities in addition to its own. Multiple absorptions stack, creating increasingly powerful compound pieces as the game progresses.

{{svg:absorption-board.svg "Absorption Chess — starting position (standard setup)"}}

### Setup

**Board:** Standard 8×8.

**Pieces:** Standard chess starting position.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

All standard chess rules apply, with the following additions:

- When a piece captures an enemy piece, the capturing piece permanently gains the movement abilities of the captured piece.
- Absorbed abilities are additive. A rook that captures a bishop can move as both a rook and a bishop (effectively a queen). If that piece later captures a knight, it gains knight movement too.
- Absorptions are permanent and stack without limit.
- The King can absorb. A king that captures gains the victim's movement, making it increasingly mobile and harder to checkmate. However, the king cannot move through or to attacked squares regardless of absorbed abilities.
- A king with absorbed abilities does give check using those abilities.
- Pawns can absorb. A pawn that absorbs rook movement can still only move as a pawn on non-capture turns, but gains the absorbed movement for captures and general movement in subsequent turns.
- A piece with absorbed pawn movement can only promote when making a pawn-type move to the last rank. Reaching the last rank via other absorbed movement does not trigger promotion.
- Promotion does not remove absorbed abilities. A promoted piece retains all previously absorbed movement.
- Castling follows standard rules. Only unmoved original rooks may castle regardless of absorbed abilities.
- En passant follows standard rules. A piece with absorbed pawn movement cannot perform en passant (only original pawns can).

### Win Condition

Checkmate the opponent's King. Because the king gains abilities through captures, checkmate becomes progressively harder to achieve as the game develops. Early aggression against the king is generally unwise since each piece it captures makes it stronger.

### Strategy

Material trades require careful calculation. Capturing a piece grants you its power, but your opponent loses a piece. The net effect depends on what abilities each side accumulates. Queens are dangerous to capture early because they grant combined rook and bishop movement. Sacrificing minor pieces to the opponent's king can backfire since the king becomes harder to trap. Endgames tend to feature powerful compound pieces with multiple movement types.

### Attribution

Described in *The Encyclopedia of Chess Variants* by David Pritchard (1994). Also known as Cannibal Chess (though that name more properly refers to the replacement variant where capturing substitutes movement rather than adding it). Public domain.
