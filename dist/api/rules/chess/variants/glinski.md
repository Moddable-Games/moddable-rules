## Glinski's Hexagonal Chess

{{svg:glinski-board.svg "Glinski's Hexagonal Chess — starting position"}}

Created by Wladyslaw Glinski in 1936, this is the most popular hexagonal chess variant. Played on a 91-cell hexagonal board (radius 5 in axial coordinates), it adapts all standard chess pieces to hex geometry.

### Board

A regular hexagon composed of 91 hexagonal cells arranged in concentric rings. Cells come in three colours (light, medium, dark) following the hex-alternation pattern — each bishop is bound to one colour.

### Setup

**White pieces (starting from the bottom):**
- King on f1
- Queen on e1  
- Bishops on d1, f2, g2 (one per colour)
- Knights on c1, g1
- Rooks on b1, h1
- Pawns on b2, c2, d2, e2, f3, g3, h3, i2, j2 (9 pawns)

**Black pieces (mirrored at the top):**
- King on f11
- Queen on g11
- Bishops on h11, f10, e10 (one per colour)
- Knights on i11, e11
- Rooks on j11, d11
- Pawns on j10, i10, h10, g10, f9, e9, d9, c10, b10 (9 pawns)

### Pieces

**Rook** — slides along any of 6 orthogonal hex edges (the 6 directions adjacent cells touch). Equivalent to a rook on a square board but with 6 directions instead of 4.

**Bishop** — slides along any of 6 diagonal hex directions (vertex-to-vertex, skipping the adjacent cell). Colour-bound — never leaves its starting cell colour.

**Queen** — combines rook and bishop movement (all 12 hex directions).

**King** — moves one step in any of the 12 directions (6 edges + 6 vertices).

**Knight** — leaps to any cell exactly 2 orthogonal steps and 1 turn away. From a centre cell, a knight threatens 12 cells (compared to 8 on a square board). Offsets in axial coordinates: (2,-1), (1,-2), (-1,-1), (-2,1), (-1,2), (1,1) and their reflections.

**Pawn** — advances toward the opponent's edge of the board. Can move one hex forward (toward far edge) or capture one hex diagonally-forward. No double-step and no en passant in Glinski's original rules. Promotion occurs when a pawn reaches any cell on the far edge of the board.

### Rules

- Standard chess rules apply for check, checkmate, and stalemate
- No castling (king starts centrally, no rook-corner relationship)
- No en passant (no double pawn step)
- Pawns promote on the far edge (the opposite rim of the hexagon from their starting position)
- Three bishops per side — one for each hex cell colour
- Stalemate is a draw

### Key Differences from Square Chess

| Concept | Square board | Hex board |
|---------|-------------|-----------|
| Rook directions | 4 (orthogonal) | 6 (hex edges) |
| Bishop directions | 4 (diagonal) | 6 (hex vertices) |
| Knight targets | 8 | 12 |
| Bishop colours | 2 | 3 |
| Pawns per side | 8 | 9 |
| Board cells | 64 | 91 |