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
published: false
status: stub
updated: 2026-07-07
---

## Circular Chess

Circular Chess is played on a **circular board of 4 concentric rings**, each containing 16 squares, for 64 squares total. It revives a medieval variant depicted in the 13th-century Alfonsine manuscript *Libro de los juegos*. The board has no corners, no edges, and movement wraps fully around the outermost ring.

*This file is a stub. The exact starting position (sequential vs. alternating layout across the ring) requires verification from chessvariants.com/other.dir/circular.html (JavaScript-rendered; use Claude in Chrome). Do not publish until complete.*

### The Board

Four rings labeled 1 (innermost) to 4 (outermost). Each ring has 16 positions labeled A–P.

- **Orthogonal** movement: along a ring (tangential) or between adjacent rings (radial).
- **Diagonal** movement: simultaneously tangential and radial — one step tangentially and one step radially inward or outward.
- Pieces slide along their movement directions, wrapping around the ring on the outermost ring.
- The innermost ring wraps; pieces moving inward from ring 1 cannot go further.

### Starting Layout

Each player occupies two rings. White starts on rings 1–2, Black on rings 3–4. Each player has the standard 16 FIDE pieces: 8 back-rank pieces on their inner ring, 8 Pawns on their outer ring. Exact position assignments within each ring require verification.

### Rules

- **Pawns** advance radially outward (White) or inward (Black). They capture diagonally (one step radial + one step tangential).
- **Promotion:** When a Pawn reaches the outermost ring (for White) or innermost ring (for Black), it promotes.
- **Castling** is not available.
- **Check and checkmate** apply normally.
- **Stalemate** is a draw.

### Attribution

Circular Chess historical origins: medieval Islamic chess (~13th century, Alfonsine manuscript). Source: chessvariants.com/other.dir/circular.html.
