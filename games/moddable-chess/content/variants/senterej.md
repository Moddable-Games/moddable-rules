---
title: Senterej
slug: senterej
board: "8×8"
players: "2"
parent: moddable-chess
win: Checkmate, or bare the King (capture all other opponent pieces)
special: "Ethiopian chess. Shatranj-derived with an extended opening deployment phase. Pieces begin on the back four ranks and are moved into position before the first capture is allowed. Played historically in Ethiopia."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  notation: algebraic
published: true
---

## Senterej

Senterej (also spelled Senterej or Senturge) is the traditional chess game of Ethiopia. It descends from **Shatranj** (medieval Islamic chess) and retains Shatranj's weaker piece movements, but adds a distinctive **opening deployment phase** in which pieces are maneuvered into position before the first capture is permitted.

### Setup

Pieces start on the back four ranks for each side.

**White (ranks 1–4) and Black (ranks 5–8):** All 16 pieces per side are placed within their respective half of the board. The exact starting arrangement follows a set opening convention.

**Standard starting position:**

| Rank | White |
|---|---|
| 1 | Rook · Knight · Fil · Ferz · King · Fil · Knight · Rook |
| 2 | empty |
| 3 | empty |
| 4 | 8 Soldiers (Pawns) |

*(Black mirrors on ranks 8, 7, 6, 5 respectively.)*

**FEN (Shatranj piece notation):** `rnfqkfnr/8/8/pppppppp/PPPPPPPP/8/8/RNFQKFNR w - - 0 1`

*(F/f = Fil (Bishop-like), Q/q = Ferz (weak Queen). Note: standard FEN letters B/Q used in systems that substitute modern names: `rnbqkbnr/8/8/pppppppp/PPPPPPPP/8/8/RNBQKBNR w - - 0 1`)*

### The Opening Phase (Werar)

Before the first capture takes place, both players are in the **Werar** (mobilisation) phase. During Werar:

- Players move their pieces freely within the constraints of legal piece movement.
- **No captures** are permitted during Werar.
- Werar ends the moment either player makes the **first capture** of the game. From that point, all captures are legal.

### Pieces (Shatranj movements)

| Piece | Ethiopian Name | Movement |
|---|---|---|
| King (K) | Negus | One square any direction |
| Ferz (F) | Wazir | One square diagonally only |
| Fil (B) | Fil | Two squares diagonally, leaping |
| Knight (N) | Ferese | Standard L-shape leap |
| Rook (R) | Dabbaba | Slides orthogonally |
| Soldier (P) | Medeq | Advances one square forward; captures diagonally forward |

**Promotion:** Soldiers promote upon reaching the last rank. They promote to **Ferz** (one-square diagonal mover) only.

### Win Conditions

**Checkmate:** standard win. **Baring the King:** if you capture all of the opponent's pieces except the King, you win (if the opponent cannot bare your King in their next move — simultaneous baring is a draw).

### Attribution

Senterej is a traditional Ethiopian chess game, historical origins via Shatranj (~1000+ CE). Rules documented from chessvariants.com/historic.dir/senterej.html.
