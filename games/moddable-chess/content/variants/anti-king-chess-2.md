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
published: true
---

## Anti-King Chess II

Anti-King Chess II was developed by Robert Price. Each player commands a **standard King** (which must stay out of check) and an **Anti-King** (which must remain *in* check — attacked by at least one opponent piece — at all times).

### Setup

Standard 8×8 board. The normal King starts on its usual square. The **Anti-King** starts on the opposite-colour equivalent square — White's Anti-King at e8, Black's Anti-King at e1 — occupying the positions normally belonging to the opponent's King and Queen.

**Starting position (recommended):**

| Rank | Pieces |
|---|---|
| 8 | r n b [WK] q k b n r *(White Anti-King at d8 or e8 — confirm per source)* |
| 7 | p p p p p p p p |
| 2 | P P P P P P P P |
| 1 | R N B [BK] Q K B N R *(Black Anti-King at d1 or e1 — confirm per source)* |

> **Verification note:** Confirm exact Anti-King starting squares from chessvariants.com before building. The Anti-King positions vary in different published rules.

### The Two Kings

**Normal King (K):** Must not be in check (attacked by any opponent piece). Standard checkmate ends the game if the normal King cannot escape check.

**Anti-King (AK):** Must *always* be in check — it must be attacked by at least one opponent piece. If the Anti-King is **not** in check at the start of a player's turn, that player **must** move the Anti-King (or another piece) to place the Anti-King back in check. If that is impossible, it is a loss.

### Win Conditions

- **Checkmate** the opponent's normal King (standard win).
- The opponent's Anti-King is **not in check** at the start of their turn and cannot be placed back in check — that player loses.
- Moving the Anti-King to a square where it is **not** attacked (removing it from check) is a **losing move** if no recovery is possible.

### General Rules

- A move is **legal** only if: (1) your normal King is not left in check, AND (2) your Anti-King remains in check after the move.
- You may capture pieces normally. Capturing a piece that was the only attacker of your Anti-King is illegal if no other piece still attacks the Anti-King.
- All other standard chess rules apply (castling, en passant, pawn promotion, stalemate).

### Attribution

Anti-King Chess II was developed by Robert Price. Rules documented from chessvariants.com.
