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
  setup_status: "not yet verified against primary source — prior flat 8x8 FEN removed 2026-07 as it did not represent the ring/torus structure. Source page (chessvariants.org/shape.dir/toroidalbyzantinechess.html) did not return readable text on fetch; exact starting squares still need pulling from a rendered copy or mirror."
  notation: ring-position
published: true
---

## Toroidal Byzantine Chess

Toroidal Byzantine Chess combines the historical **Byzantine Chess** board (four concentric rings of 16 squares each, 64 squares total) with **toroidal topology**: the innermost ring connects to the outermost ring radially. This creates a fully closed surface with no edges — a donut-shaped (torus) board in ring form.

Invented by Anatoly Khalfine and Ernst Saperow, documented circa 1999–2001. The source frames it explicitly as a mathematical exploration ("this variant belongs better to the scope of mathematics rather than sport or game") rather than a historically-attested Byzantine-era game — it is a modern construction applying toroidal geometry to the historical Byzantine board, not itself a historical variant.

**Design intent of the starting setup:** per the source, the starting position is deliberately chosen so that the *only* pieces initially under attack are pawns — no piece more valuable than a pawn is en prise from the opening position. This is a meaningful constraint on the exact setup (it isn't simply Byzantine Chess's own setup reused unchanged, since the added radial wrap would put non-pawn pieces under attack if the layout weren't adjusted for it) and is the main reason the exact coordinates still need to be pulled from source rather than assumed.

### Byzantine Chess Foundation

Byzantine Chess is a medieval circular chess variant played on a 4×16 ring board using Shatranj-era pieces:

| Piece | Shatranj Name | Movement |
|---|---|---|
| King | Shah | 1 step in any direction |
| General | Fers | 1 step diagonally |
| Elephant | Fil | Leaps exactly 2 diagonally |
| Rook | Rukh | Slides orthogonally |
| Knight | Faras | Leaps as in modern chess |
| Pawn | Baidak | Moves 1 step radially toward opponent |

In standard Byzantine Chess, pieces travel around the rings continuously: ring position 16 connects to position 1 on the same ring. This gives the game a circular character, with no left/right edges.

### Toroidal Addition

In Toroidal Byzantine Chess, the **radial edges** also wrap:

- A piece sliding inward from ring 4 (the innermost ring) emerges from ring 1 (the outermost ring) at the same angular position
- A piece sliding outward from ring 1 emerges from ring 4 at the same angular position
- Diagonal movement that crosses the radial boundary does so with the corresponding offset

This means there are truly no edges on the board — every ring is adjacent to two rings on both radial sides (ring 1 is adjacent to rings 2 and 4; ring 4 is adjacent to rings 3 and 1).

### Consequences for Pieces

**Rooks:** the source confirms a Rook on the toroidal board can travel either the long 16-cell circle (around a ring) or the short 4-cell circle (radially, in and out through the wrap) — it "feels itself quite well everywhere," unlike on the plain circular Byzantine board where radial movement is restricted at the inner and outer edges.

**Bishops (Elephants):** the 2-step diagonal leap behaves normally within the ring structure; at the radial seam, the leap continues to the appropriate ring. The source notes the wrap means a Bishop can end up attacking both of a side's pawns simultaneously from the setup position, consistent with the "only pawns under attack" design intent above.

**Queen:** slides orthogonally or diagonally exactly as on the plain circular board, gaining the same edge-free mobility as the Rook and Bishop once the radial wrap is added.

**King:** has up to 8 neighbours in all positions (no corner or edge restrictions).

### Pawns

Pawns move radially "toward the opponent" in standard Byzantine Chess. In the toroidal version, the radial wrap means Pawns traveling inward past ring 4 emerge from ring 1 — effectively completing a full radial circuit rather than being blocked at the inner boundary.

### Win Condition

Checkmate the opponent's Shah (King). Shatranj rules may also apply: stalemate = win; bare King = win (unless opponent can bare King on the next move, in which case it is a draw).

### Attribution

Toroidal Byzantine Chess invented by Anatoly Khalfine and Ernst Saperow, circa 1999–2001. Source: chessvariants.org/shape.dir/toroidalbyzantinechess.html. Byzantine Chess foundation: chessvariants.com/historic.dir/byzantine.html. Note: the exact starting-square list from the primary Khalfine/Saperow page still needs to be re-fetched and verified in full (see `engine.setup_status` above) — this update adds confirmed design intent and piece-behaviour detail but not yet the coordinates themselves.
