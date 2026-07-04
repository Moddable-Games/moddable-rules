---
title: Standard Wildebeest Chess
slug: wildebeest
board: "11x10"
players: "2"
parent: moddable-chess
win: "Checkmate the opponent's king"
order: 1
special: "An 11×10 board. Camels replace bishops; Wildebeests (Knight+Camel compound) flank the queen."
engine:
  topology:
    type: grid
    rows: 10
    cols: 11
  pieces:
    camel:
      movement: leaper
      leap: [3,1]
      notation: C
    wildebeest:
      movement: compound
      components: [knight, camel]
      notation: W
  setup: "rncwqkwcnr/ppppppppppp/11/11/11/11/11/11/PPPPPPPPPPP/RNCWQKWCNR"
  notes: "C = Camel, W = Wildebeest. Board is 11 files (a–k) × 10 ranks."
published: true
---

## Standard Wildebeest Chess

Played on an **11×10 board** (files a–k, ranks 1–10). Each side has 11 pawns and an expanded back rank including two new fairy pieces.

### Starting Position

```
r n c w q k w c n r  (rank 10 — Black)
p p p p p p p p p p p  (rank 9)
. . . . . . . . . . .  (ranks 8–3)
. . . . . . . . . . .
. . . . . . . . . . .
. . . . . . . . . . .
. . . . . . . . . . .
. . . . . . . . . . .
P P P P P P P P P P P  (rank 2)
R N C W Q K W C N R  (rank 1 — White)
```

**Back rank (a–k):** Rook, Knight, Camel, Wildebeest, Queen, King, Wildebeest, Camel, Knight, Rook (11 squares, no bishop slot — Camels fill that role).

### Pieces

#### Camel (C)

| Property | Rule |
|----------|------|
| Leap | (3,1) — 3 squares in one direction, 1 perpendicular |
| Jumping | Yes — cannot be blocked |
| Colour-binding | Yes — always lands on same colour |
| Capture | Lands on target square |

The Camel is the (3,1) analogue of the Knight (2,1). With two Camels per side (one on each colour binding), both colours of Camel square are covered.

#### Wildebeest (W)

| Property | Rule |
|----------|------|
| Move | Any Knight leap (2,1) OR any Camel leap (3,1) |
| Jumping | Yes — leaps |
| Colour-binding | No — alternates colours on knight moves, maintains colour on camel moves |
| Capture | Lands on target square |

The Wildebeest is roughly equivalent in value to a rook.

### Standard Pieces

Rooks, Knights, Queen, and King move and capture as in standard chess.

### Pawns

- **11 pawns per side** (one per file, a–k)
- May advance one or two squares from starting position (rank 2 / rank 9)
- Capture diagonally forward
- **En passant** applies
- **Promotion** on ranks 10 (Black) / 1 (White) to: Queen, Rook, Camel, Knight, or Wildebeest

### Castling

Castling is **not available** in the standard Wildebeest Chess setup (the King is not adjacent to a corner Rook in the same way; no castling rule has been defined by Schmittberger for this layout).

### Win Condition

Checkmate the opponent's King. Stalemate = draw.

### Engine Notes

Implemented in: Jocly (open source, JavaScript), zrflib (Zillions of Games), chess-programming wiki examples. FEN: standard coordinate system extended to 11 files (`a`–`k`). The board is 11 × 10; rank and file notation follows the same conventions as standard chess.

### Attribution

Wildebeest Chess designed by R. Wayne Schmittberger. Published in *New Rules for Classic Games* (Wiley, 1992). Rules described as public domain by multiple open-source implementations (Jocly, zrflib). Primary sources: Wikipedia *(Wildebeest chess)*; Jocly source (`wildebeest.js`).
