## Brusky's Hexagonal Chess

Invented by Yakov Brusky. Played on an 84-hex horizontal board with 10 files and 10 pawns per side. Introduces an expanded pawn capture option for unmoved pawns.

### Setup

**Board:** 84-hex irregular hexagonal grid, horizontally oriented. 8 ranks with widths 9, 10, 11, 12, 12, 11, 10, 9 (bottom to top). Files a–i on the back ranks, expanding to a–l in the middle ranks.

**White pieces (rank 1, bottom):**
- King on f1
- Queen on d1
- Bishops on c1, e1, g1 (one per colour)
- Knights on b1, h1
- Rooks on a1, i1
- Pawns on a2, b2, c2, d2, e2, f2, g2, h2, i2, j2 (10 pawns on rank 2)

**Black pieces (rank 8, top — mirrored):**
- King on d8
- Queen on f8
- Bishops on c8, e8, g8 (one per colour)
- Knights on b8, h8
- Rooks on a8, i8
- Pawns on a7, b7, c7, d7, e7, f7, g7, h7, i7, j7 (10 pawns on rank 7)

{{svg:brusky-board.svg "Brusky's Hexagonal Chess — starting position"}}

### Castling

Castling is permitted. The King slides two cells toward the Rook (short) or three cells (long).

### Pawns

Pawns move one cell straight forward. They capture one cell diagonally forward.

An unmoved pawn has a third option: it may capture one cell **straight forward** (the direction of its non-capturing move). This gives unmoved pawns three distinct capture directions.

**Blockage rule:** a pawn blocked by an enemy piece in one of its forward directions is considered blocked in both forward directions. The blocked pawn cannot move straight forward even if the other forward path is clear.

A pawn on its starting rank may make an initial double step. En passant applies. Draws score 1/2 to each player.

### Rules

Identical to standard chess adapted for the hex grid except as noted.

### Win Condition

Checkmate.

### Attribution

Invented by Yakov Brusky in 1966. Documented at en.wikipedia.org/wiki/Hexagonal_chess. Public domain rules.