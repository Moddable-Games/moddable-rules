---
title: "Balbo's Chess"
slug: balbos-chess
board: "Diamond-shaped, 70 squares (ranks 3-5-7-9-11-11-9-7-5-3, centred on file f)"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Chess on an unusual diamond-shaped board invented by M.G. Balbo (1974). Ten ranks of widths 3-5-7-9-11-11-9-7-5-3, all centred on file f, giving 70 squares across files a-k. Promotion rules are location-dependent: corner promotion squares allow minor pieces only. Pritchard warns that both sides have a third-move mate available from the starting position."
engine:
  topology:
    type: grid
    rows: 10
    cols: 11
  players: [white, black]
  render:
    cellSize: 28
    zones:
      voids: [[0,0],[0,1],[0,2],[0,3],[0,7],[0,8],[0,9],[0,10],[1,0],[1,1],[1,2],[1,8],[1,9],[1,10],[2,0],[2,1],[2,9],[2,10],[3,0],[3,10],[6,0],[6,10],[7,0],[7,1],[7,9],[7,10],[8,0],[8,1],[8,2],[8,8],[8,9],[8,10],[9,0],[9,1],[9,2],[9,3],[9,7],[9,8],[9,9],[9,10]]
  setup: "4kbq4/3rnbnr3/2ppppppp2/11/11/11/11/2PPPPPPP2/3RNBNR3/4KBQ4"
---

## Balbo’s Chess

Balbo’s Chess was invented by M.G. Balbo in 1974 and is mentioned in Pritchard’s *Encyclopedia of Chess Variants*. It is played on an unusual **diamond-shaped board** with ten ranks of increasing then decreasing width, all centred on file f. All standard chess rules apply, but the board shape creates unusual opening dynamics and position-dependent promotion rules.

### The Board

The board has 10 ranks, each centred on file f. The number of squares per rank (and the files present) is:

| Rank | Width | Files present |
|---|---|---|
| 1 | 3 | e, f, g |
| 2 | 5 | d, e, f, g, h |
| 3 | 7 | c, d, e, f, g, h, i |
| 4 | 9 | b, c, d, e, f, g, h, i, j |
| 5 | 11 | a, b, c, d, e, f, g, h, i, j, k |
| 6 | 11 | a, b, c, d, e, f, g, h, i, j, k |
| 7 | 9 | b, c, d, e, f, g, h, i, j |
| 8 | 7 | c, d, e, f, g, h, i |
| 9 | 5 | d, e, f, g, h |
| 10 | 3 | e, f, g |

Total: 3+5+7+9+11+11+9+7+5+3 = **70 squares**. Files a–k (11 files at widest), ranks 1–10.

### Starting Position

**White:**
- King e1 · Queen g1
- Bishop f1 · Bishop f2
- Rook d2 · Rook h2
- Knight e2 · Knight g2
- Pawns c3–i3 (7 pawns)

**Black (mirror on ranks 8–10):**
- King e10 · Queen g10
- Bishop f10 · Bishop f9
- Rook d9 · Rook h9
- Knight e9 · Knight g9
- Pawns c8–i8 (7 pawns)

**Warning:** Pritchard notes that both sides have an immediate N×f3/f8 mate in three moves available from the starting position. Players should be aware of this.

### Promotion

Promotion rules depend on which square the Pawn reaches:

- **Rank 10 (e10, f10, g10), d9, or h9** (the furthest reachable squares on files d and h, which disappear before rank 10): Pawn promotes to any piece — Queen, Rook, Bishop, or Knight.
- **c8 or i8** (the furthest reachable squares on files c and i): Pawn may only promote to a **minor piece** (Knight or Bishop).

*Note: Files c, d, h, and i do not reach rank 10 — they end at ranks 8 or 9 as the diamond narrows. Squares on those files at the edge of the board are the promotion squares for pawns on those files.*

### Rules

All standard chess rules apply (checkmate wins, stalemate is a draw, en passant, castling if reachable). The unusual board shape means there is no central pawn battle in the traditional sense — the two armies meet obliquely as the board narrows toward the centre of each side.

### Attribution

Balbo’s Chess by M.G. Balbo, 1974. Documented at chessvariants.com/shape.dir/balbo.html (Hans Bodlaender and Fergus Duniho, from Pritchard’s *Encyclopedia of Chess Variants*).
