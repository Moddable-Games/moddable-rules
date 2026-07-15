---
title: Cannon Shogi
slug: cannon-shogi
board: "9×9"
players: "2"
parent: shogi
order: 50
win: Checkmate
special: "Shogi plus four Cannon types drawn from Xiangqi and Janggi, each with unique movement and capture rules. Pawns replaced with Janggi-style Soldiers. Invented by Peter Michaelsen, 1998."
engine:
  topology:
    type: grid
    rows: 9
    cols: 9
  players: [sente, gote]
  setup: "lnsgkgsnl/1rci1uab1/p1p1p1p1p/9/9/9/P1P1P1P1P/1BAU1ICR1/LNSGKGSNL"
---

## Cannon Shogi

{{svg:cannon-shogi-board.svg "Cannon Shogi — starting position"}}

Cannon Shogi is a Shogi variant invented by Peter Michaelsen in February 1998. The starting setup is the same as standard Shogi with two modifications: the nine Pawns on rank 3 are replaced by **five Soldiers** (in the Janggi style), and four Cannons of different types are placed in rank 2 between the Bishop and Rook positions.

### Setup

**Board:** Standard 9×9 grid.

**Starting position:**

| Rank | Contents |
|---|---|
| Rank 1 — Gote back | Lance · Knight · Silver · Gold · King · Gold · Silver · Knight · Lance |
| Rank 2 — Gote | Rook(b) · Copper Cannon(c) · Iron Cannon(d) · · Gold Cannon(f) · Silver Cannon(g) · Bishop(h) |
| Rank 3 — Gote Soldiers | Soldier(a) · · Soldier(c) · · Soldier(e) · · Soldier(g) · · Soldier(i) |
| Ranks 4–6 | Empty |
| Rank 7 — Sente Soldiers | Soldier(a) · · Soldier(c) · · Soldier(e) · · Soldier(g) · · Soldier(i) |
| Rank 8 — Sente | Bishop(b) · Silver Cannon(c) · Gold Cannon(d) · · Iron Cannon(f) · Copper Cannon(g) · Rook(h) |
| Rank 9 — Sente back | Lance · Knight · Silver · Gold · King · Gold · Silver · Knight · Lance |

Sente (Black) moves first.

**SFEN:** `lnsgkgsnl/1rci1uab1/p1p1p1p1p/9/9/9/P1P1P1P1P/1BAU1ICR1/LNSGKGSNL[-] b - 1`

*(Cannon letter assignments: A/a = Silver Cannon, U/u = Gold Cannon, I/i = Iron Cannon, C/c = Copper Cannon. P/p here denotes Soldier, not Pawn. Standard pieces: B/b = Bishop, R/r = Rook, L/l = Lance, N/n = Knight, S/s = Silver General, G/g = Gold General, K/k = King.)*

### Pieces

**Soldier (S/P):** Moves and captures one square **forward or sideways** (left/right). Cannot move diagonally or backward. This is the Janggi Soldier movement. Drop rules from standard Shogi do not apply to Soldiers: two Soldiers may occupy the same file, Soldier-drop checkmate is legal, Soldiers may be dropped on the last rank. Soldiers promote to **Tokin** (Gold General movement) on reaching the promotion zone.

**Gold Cannon (GC/U):** Slides any number of squares orthogonally. To **capture**, must jump over exactly one intervening piece (the screen), landing on the target. Movement without capturing is free — no screen needed. This is the Xiangqi Cannon.

**Silver Cannon (SC/A):** Moves orthogonally, but **both movement and capture** require jumping over exactly one intervening piece. It cannot slide to an empty square without a screen; it always jumps. Note: unlike in Janggi, Silver Cannons may jump over and capture other Cannons. This is the Janggi Cannon.

**Copper Cannon (CC/C):** Diagonal version of the Gold Cannon. Slides any number of squares diagonally. To capture, must jump over exactly one piece on the diagonal. Movement without capturing is free.

**Iron Cannon (IC/I):** Diagonal version of the Silver Cannon. Both movement and capture require jumping over exactly one piece diagonally. Cannot move diagonally to an empty square without a screen.

All four Cannons promote to **Flying** versions in the promotion zone:

| Base | Promoted | Added movement |
|---|---|---|
| Gold Cannon | Flying Gold Cannon | Also: Gold Cannon + Silver Cannon powers combined orthogonally; one step diagonally, jumping over any adjacent diagonal piece |
| Silver Cannon | Flying Silver Cannon | Same as Flying Gold Cannon |
| Copper Cannon | Flying Copper Cannon | Copper + Iron Cannon combined diagonally; one step orthogonally, jumping over any adjacent orthogonal piece |
| Iron Cannon | Flying Iron Cannon | Same as Flying Copper Cannon |

### Rules

All standard Shogi rules apply except as noted. Drops, the standard promotion zone (ranks 7–9 for Sente), and all other mechanics are unchanged. Soldiers replace Pawns for drop purposes: apply the Nifu and related rules to Soldiers as you would to Pawns in standard Shogi, **except** the special Soldier relaxations noted above.

### Win Conditions

Checkmate the opponent's King. Stalemate is a loss for the player who cannot move.

### Attribution

Cannon Shogi was invented by Peter Michaelsen (February 1998). Public domain. Rules documented from pychess.org/variants/cannonshogi.
