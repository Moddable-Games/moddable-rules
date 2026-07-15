---
title: Toroidal Byzantine Chess
slug: toroidal-byzantine
board: "4-ring torus (4×16 circular board with radial wrap)"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Byzantine Chess (historical Shatranj on a 4×16 circular board) combined with toroidal topology: the innermost ring connects to the outermost ring radially, in addition to the standard circular wrap along each ring. A piece sliding inward past ring 4 emerges from ring 1; a piece sliding outward past ring 1 emerges from ring 4. Combines the historical Byzantine board with a fully toroidal surface."
engine:
  topology:
    type: torus
    variant: circular-4x16
    rings: 4
    positions_per_ring: 16
  players: [white, black]
  setup: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
  notation: ring-position
published: true
---

## Toroidal Byzantine Chess

Toroidal Byzantine Chess combines the historical **Byzantine Chess** board (four concentric rings of 16 squares each, 64 squares total) with **toroidal topology**: the innermost ring connects to the outermost ring radially. This creates a fully closed surface with no edges — a donut-shaped (torus) board in ring form.

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

**Rooks:** can slide continuously inward/outward, wrapping from ring 4 to ring 1 and back. A Rook can reach any position on the same angular position.

**Bishops (Elephants):** the 2-step diagonal leap behaves normally within the ring structure; at the radial seam, the leap continues to the appropriate ring.

**King:** has up to 8 neighbours in all positions (no corner or edge restrictions).

### Pawns

Pawns move radially “toward the opponent” in standard Byzantine Chess. In the toroidal version, the radial wrap means Pawns traveling inward past ring 4 emerge from ring 1 — effectively completing a full radial circuit rather than being blocked at the inner boundary.

### Win Condition

Checkmate the opponent's Shah (King). Shatranj rules may also apply: stalemate = win; bare King = win (unless opponent can bare King on the next move, in which case it is a draw).

### Attribution

Toroidal Byzantine Chess applies toroidal topology to the historical Byzantine Chess circular board. Rules derived from Byzantine Chess (chessvariants.com/historic.dir/byzantine.html) and toroidal topology principles.
