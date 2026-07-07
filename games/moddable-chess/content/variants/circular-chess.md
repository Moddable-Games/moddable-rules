---
title: Circular Chess
slug: circular-chess
board: "4-ring circular"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Chess played on a circular board of 4 concentric rings, each with 16 squares (64 total). Pieces move along the rings or radially. The board has no corners and wraps fully around. Revival of a historical medieval variant."
engine:
  topology:
    type: circular
    rings: 4
    positions_per_ring: 16
  players: [white, black]
  notation: circular
published: true
---

## Circular Chess

Circular Chess is played on a **circular board of 4 concentric rings**, each containing 16 squares, for 64 squares total. It revives a medieval variant depicted in the 13th-century Alfonsine manuscript *Libro de los juegos*. The board has no corners, no edges, and movement wraps fully around the outermost ring.

### The Board

Four rings labeled 1 (innermost) to 4 (outermost). Each ring has 16 positions labeled A–P. Movement is along rings (tangentially) or between adjacent rings (radially).

- **Orthogonal** movement: along a ring (tangential) or between adjacent rings (radial).
- **Diagonal** movement: simultaneously tangential and radial — one step tangentially and one step radially inward or outward.
- Pieces slide as many squares as possible in a direction (for sliders), wrapping around the ring on the outermost ring.
- The innermost ring wraps; pieces moving inward from ring 1 cannot go further (no inner ring exists).

### Starting Position

Each player occupies two rings. White starts on rings 1–2, Black on rings 3–4.

**White:**
- Ring 1 (inner): Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook (positions A, C, E, G, I, K, M, O — every other position)
- Ring 2: 8 Pawns on positions B, D, F, H, J, L, N, P (alternating positions)

**Black (mirrored, outer):**
- Ring 4 (outer): Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook
- Ring 3: 8 Pawns

> **Verification note:** Confirm exact position assignments from chessvariants.com/other.dir/circular.html. The alternating vs. sequential starting layout varies in sources.

### Rules

- **Pawns** advance radially outward (White) or inward (Black). They capture diagonally (one step radial + one step tangential).
- **Promotion:** When a Pawn reaches the outermost ring (for White) or innermost ring (for Black), it promotes.
- **Castling** is not available.
- **Check and checkmate** apply normally.
- **Stalemate** is a draw.

### Attribution

Circular Chess historical origins: medieval Islamic chess (~13th century, Alfonsine manuscript). Modern revival rules documented from chessvariants.com/other.dir/circular.html.
