---
title: Toroidal Byzantine Chess
slug: toroidal-byzantine
board: "4-ring torus (4×16 circular board with radial wrap)"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Byzantine Chess (historical Shatranj on a 4×16 circular board) combined with toroidal topology: the innermost ring connects to the outermost ring radially, in addition to the standard circular wrap along each ring. A piece sliding inward past ring 4 emerges from ring 1; a piece sliding outward past ring 1 emerges from ring 4. Invented by Anatoly Khalfine and Ernst Saperow, circa 1999–2001."
engine:
  topology:
    type: torus
    variant: circular-4x16
    rings: 4
    positions_per_ring: 16
  players: [white, black]
  setup:
    - "2PRRP4prrp2"
    - "2PNNP4pnnp2"
    - "2PBBP4pbbp2"
    - "2PKQP4pkqp2"
  notation: ring-position
published: true
---

## Toroidal Byzantine Chess

Toroidal Byzantine Chess combines the historical **Byzantine Chess** board (four concentric rings of 16 squares each, 64 squares total) with **toroidal topology**: the innermost ring connects to the outermost ring radially. This creates a fully closed surface with no edges — a donut-shaped (torus) board in ring form.

Invented by Anatoly Khalfine and Ernst Saperow, documented circa 1999–2001 at chessvariants.org/shape.dir/toroidalbyzantinechess.html. The source frames it explicitly as a mathematical exploration rather than a historically-attested Byzantine-era game — a modern construction applying toroidal geometry to the historical Byzantine board.

### Starting Position

The source states piece rules are "the same as in Byzantine Chess," but the **setup differs** from plain Byzantine Chess. In ordinary Byzantine Chess, each army straddles the seam where file p meets file a; on the toroidal board that arrangement would put both Kings in mutual check immediately (the radial wrap removes the inner/outer edges that normally shield them). Instead, each army is placed in a contiguous 4-file block, positioned so that **only pawns are attacked** from the starting position.

Using the rectangular "unrolled" development of the ring board (4 rings as ranks 1–4, 16 positions as files a–p — the same convention as plain Byzantine Chess), confirmed against the source's interactive diagram:

**White** (files c–f):
- Rank 1: Rook (d1), Rook (e1); Pawns (c1, f1)
- Rank 2: Knight (d2), Knight (e2); Pawns (c2, f2)
- Rank 3: Bishop (d3), Bishop (e3); Pawns (c3, f3)
- Rank 4: King (d4), Queen (e4); Pawns (c4, f4)

**Black** (files k–n — the same pattern shifted 8 files around the ring):
- Rank 1: Rook (l1), Rook (m1); Pawns (k1, n1)
- Rank 2: Knight (l2), Knight (m2); Pawns (k2, n2)
- Rank 3: Bishop (l3), Bishop (m3); Pawns (k3, n3)
- Rank 4: King (l4), Queen (m4); Pawns (k4, n4)

Files a, b, g, h, i, j, o, p are empty at setup. The `engine.setup` array above encodes this ring-by-ring (ring 1 first), run-length style: digits are empty-square counts, uppercase is White, lowercase is Black.

### Byzantine Chess Foundation

Piece movement follows Byzantine Chess (Shatranj-era rules), per the source's direct link to that page:

| Piece | Shatranj Name | Movement |
|---|---|---|
| King | Shah | 1 step in any direction |
| Queen | Fers | 1 step diagonally |
| Bishop | Fil | Leaps exactly 2 diagonally |
| Rook | Rukh | Slides orthogonally |
| Knight | Faras | Leaps as in modern chess |
| Pawn | Baidak | Moves 1 step radially toward opponent |

In standard Byzantine Chess, pieces travel around the rings continuously: ring position 16 connects to position 1 on the same ring.

### Toroidal Addition

In Toroidal Byzantine Chess, the **radial edges** also wrap:

- A piece sliding inward from ring 4 (the innermost ring) emerges from ring 1 (the outermost ring) at the same angular position
- A piece sliding outward from ring 1 emerges from ring 4 at the same angular position
- Diagonal movement that crosses the radial boundary does so with the corresponding offset

This means there are truly no edges on the board — every ring is adjacent to two rings on both radial sides (ring 1 is adjacent to rings 2 and 4; ring 4 is adjacent to rings 3 and 1).

### Consequences for Pieces

**Rooks:** the source confirms a Rook on the toroidal board can travel either the long 16-cell circle (around a ring) or the short 4-cell circle (radially, in and out through the wrap) — it "feels itself quite well everywhere," unlike on the plain circular Byzantine board where radial movement is restricted at the inner and outer edges.

**Bishops (Fil):** the 2-step diagonal leap behaves normally within the ring structure; at the radial seam, the leap continues to the appropriate ring.

**Queen (Fers):** one step diagonally, as in Byzantine Chess — the toroidal wrap does not extend the Fers's range since it only ever moves one square.

**King:** has up to 8 neighbours in all positions (no corner or edge restrictions).

### Pawns

Pawns (Baidak) move radially "toward the opponent," one step at a time. In the toroidal version, the radial wrap means a Pawn advancing past ring 4 would emerge from ring 1 rather than being blocked — though given the contiguous starting blocks above, in practice most pawns will contact enemy pieces well before reaching that wrap.

### Win Condition

Checkmate the opponent's Shah (King). Shatranj rules may also apply: stalemate = win; bare King = win (unless opponent can bare King on the next move, in which case it is a draw).

### Attribution

Toroidal Byzantine Chess invented by Anatoly Khalfine and Ernst Saperow, circa 1999–2001. Source: chessvariants.org/shape.dir/toroidalbyzantinechess.html, including its interactive setup diagram. Byzantine Chess foundation: chessvariants.com/historic.dir/byzantine.html.
