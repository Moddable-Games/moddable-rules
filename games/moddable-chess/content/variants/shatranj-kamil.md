---
title: Shatranj Kamil
slug: shatranj-kamil
board: "10×10"
players: "2"
parent: moddable-chess
win: Checkmate or stalemate
special: "‘Complete Chess’ — a historical Arabic chess variant (~1000 years old) on a 10×10 board. Adds two War Machines (Dabbabah) per side to the standard Shatranj set. War Machines move as Kings but are immune to check. Unique promotion rule: a Pawn can only promote when the player has no General on the board."
engine:
  topology:
    type: grid
    rows: 10
    cols: 10
  players: [white, black]
  render:
    cellSize: 34
  setup: "rncbqkbcnr/pppppppppp/10/10/10/10/10/10/PPPPPPPPPP/RNCBQKBCNR"
---

## Shatranj Kamil

Shatranj Kamil (شطرنج كامل, “Complete Chess” or “Perfect Chess”) is a historical Arabic chess variant approximately 1000 years old, described by John Gollon based on Murray’s reconstruction from an old manuscript. It expands the standard Shatranj board from 8×8 to 10×10 and adds two War Machine (Dabbabah) pieces per side, plus two extra Pawns.

Two historical versions are documented on chessvariants.com: one adds a Camel piece (shkam1), the other — documented here — adds a War Machine (shkam2). The War Machine version has the unusual rule that the piece moves as a King but is immune to check.

### The Board

10 files (a–j) × 10 ranks = 100 squares.

### Starting Position

**White (rank 1):** Rook a1 · Knight b1 · Elephant c1 · War Machine d1 · King e1 · General f1 · War Machine g1 · Elephant h1 · Knight i1 · Rook j1

**White pawns (rank 2):** a2–j2 (10 pawns)

**Black (rank 10):** Rook a10 · Knight b10 · Elephant c10 · War Machine d10 · King e10 · General f10 · War Machine g10 · Elephant h10 · Knight i10 · Rook j10

**Black pawns (rank 9):** a9–j9 (10 pawns)

### Pieces

Standard Shatranj pieces plus the War Machine:

| Piece | Arabic | Movement |
|---|---|---|
| King (Shah) | شاه | One square in any direction |
| General (Firzan) | فرزان | One square diagonally |
| Elephant (Fil) | فيل | Leaps exactly 2 squares diagonally; can jump the intervening square |
| Knight (Faras) | فرس | L-shaped leap (as in standard chess) |
| Rook (Rukh) | رخ | Slides any distance orthogonally |
| Pawn | بيدق | One square forward; captures one square diagonally; no double first step |
| **War Machine (Dabbabah)** | دبابة | Moves one square in any direction (as a King) but is **not affected by check** |

### Promotion

A Pawn reaching the last rank promotes to a General — **only if the player currently has no General on the board**. If the player still has a General, the Pawn reaching the last rank is **removed from the board** without promotion.

### Special Rules

- **No castling, no en passant.**
- **No bare King rule** — the game continues normally even when one player has only the King remaining.
- **Win:** Checkmate the opponent’s King, or stalemate the opponent (stalemate is a win for the stalemating player).

### Attribution

Shatranj Kamil (War Machine version) documented at chessvariants.com/historic.dir/shkam2.html (Hans Bodlaender, from Gollon/Murray). Camel version at chessvariants.com/historic.dir/shkam1.html.
