---
playable: true
title: "Anti-King Chess II"
slug: anti-king-chess-2
board: "8×8"
players: "2"
parent: chess
win: "Checkmate the opponent's King or Anti-King"
special: "Each player adds an Anti-King — a royal piece in check whenever it is NOT attacked by enemy pieces. Win by checkmating either the King or the Anti-King. Anti-Kings cannot capture enemy pieces."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rnbqkbnr/pppppppp/3A4/8/8/3a4/PPPPPPPP/RNBQKBNR"
---

# Anti-King Chess II

**Invented by Peter Aronson, 2002.**

## Overview

{{svg:anti-king-chess-2-board.svg "Anti-King Chess II — starting position"}}

Anti-King Chess II adds an Anti-King to each side's standard FIDE army. The Anti-King is a royal piece with inverted check: it is in check when it is *not* attacked by any enemy piece. A player who ends their turn with their Anti-King unattacked is checkmated and loses. Win by checkmating either the opponent's King or the opponent's Anti-King.

## Setup

Standard 8×8 board. Each side begins with the normal FIDE complement plus an Anti-King placed in the center files.

```
FEN: rnbqkbnr/pppppppp/3A4/8/8/3a4/PPPPPPPP/RNBQKBNR w KQkq - 0 1
```

- **White**: King e1, Anti-King d6, Queen d1, Rooks a1/h1, Bishops c1/f1, Knights b1/g1, Pawns a2–h2
- **Black**: King e8, Anti-King d3, Queen d8, Rooks a8/h8, Bishops c8/f8, Knights b8/g8, Pawns a7–h7

*FEN notation: A = White Anti-King, a = Black Anti-King.*

## Pieces

All FIDE pieces move and capture as normal. The Anti-King is a special royal piece:

### Anti-King
- Moves one square in any direction (like a King).
- **Is in check when it is NOT attacked by any enemy piece.**
- Cannot capture enemy pieces; may only capture friendly pieces.
- Cannot be captured — it can only be mated.
- Does not give check to the friendly King.
- A hostile King adjacent to the Anti-King does not count as attacking it (Kings do not attack Anti-Kings).

## Rules

All standard FIDE rules apply with these modifications:

**Check and checkmate apply to both royal pieces.** A player is in check if their King is attacked by an enemy piece, or if their Anti-King is not attacked by any enemy piece. A player must escape check on their turn; if they cannot, they are checkmated and lose.

**Winning**: Checkmate the opponent's King (King attacked and unable to escape) or checkmate the opponent's Anti-King (Anti-King unattacked and unable to reach an attacked square).

**Pawns** follow standard FIDE rules: double push from the starting rank, en passant, and promotion to Queen, Rook, Bishop, or Knight.

**Castling** is permitted under standard conditions.

**Stalemate**: a player with no legal moves but not in check is stalemated (drawn, as in standard chess).

## Notes

The Anti-Kings start on d6 and d3 — directly in the path of development — so they tend to be well-covered early by natural piece deployment. This makes the opening phase more conservative than Anti-King Chess I (which uses Berolina Pawns and a scattered setup). Players must maintain coverage of their Anti-King while simultaneously pressing for mate on either of the opponent's royal pieces.

*Source: chessvariants.com/diffobjective.dir/anti-king-chess.html*
