---
title: Anti-King Chess II
slug: anti-king-chess-2
board: "8×8"
players: "2"
parent: moddable-chess
win: Checkmate the King, or move the Anti-King out of check
special: "Each player has a normal King (must stay out of check) and an Anti-King (must stay in check). Developed by Robert Price. Anti-King must be in check at all times — moving it out of attack is the loss condition."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  notation: algebraic
published: false
status: stub
updated: 2026-07-07
---

## Anti-King Chess II

Anti-King Chess II was developed by Robert Price. Each player commands a **standard King** (which must stay out of check) and an **Anti-King** (which must remain *in* check — attacked by at least one opponent piece — at all times).

*This file is a stub. The exact Anti-King starting squares require verification from chessvariants.com (JavaScript-rendered; use Claude in Chrome). Do not publish until complete.*

### The Two Kings

**Normal King (K):** Must not be in check. Standard checkmate ends the game if the normal King cannot escape check.

**Anti-King (AK):** Must *always* be in check — it must be attacked by at least one opponent piece. If the Anti-King is **not** in check at the start of a player's turn, that player must move the Anti-King (or another piece) to place it back in check. If that is impossible, it is a loss.

### Win Conditions

- **Checkmate** the opponent's normal King (standard win).
- The opponent's Anti-King is **not in check** at the start of their turn and cannot be placed back in check — that player loses.
- Moving the Anti-King to a square where it is not attacked is a losing move if no recovery is possible.

### General Rules

- A move is **legal** only if: (1) your normal King is not left in check, AND (2) your Anti-King remains in check after the move.
- Capturing a piece that was the only attacker of your Anti-King is illegal if no other piece still attacks the Anti-King.
- All other standard chess rules apply (en passant, pawn promotion, stalemate).

### Attribution

Anti-King Chess II was developed by Robert Price. Source: chessvariants.com.
