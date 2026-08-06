## Shako

{{svg:shako-board.svg "Shako — starting position"}}

Designed by Jean-Louis Cazaux (2000). Shako extends standard chess to a 10×10 board and introduces two new pieces — the Cannon (borrowed from Chinese Chess) and the Elephant — while retaining all standard FIDE piece identities. The name means “chess” in Esperanto.

### New Pieces

| Piece | Movement | Capture |
|---|---|---|
| **Cannon** | Slides orthogonally any distance (like a Rook) to move to an empty square. | Captures by sliding orthogonally, jumping over exactly one intervening piece (the “platform”, friend or foe), and removing the first enemy piece beyond it. Cannot capture without a platform; cannot move by jumping. |
| **Elephant** | Leaps exactly 2 squares diagonally in any diagonal direction. The intervening square is irrelevant (the Elephant jumps). | Same as movement — captures the piece on the destination square. |

### Starting Position

The board uses files a–j (10 files) and ranks 1–10.

**White (rank 1):**
```
1  R  Ca El  B  Q  K  B  El Ca  R
   a  b  c  d  e  f  g  h  i  j
```
From a to j: Rook, Cannon, Elephant, Bishop, Queen, King, Bishop, Elephant, Cannon, Rook.

**Black** mirrors on rank 10. Pawns occupy ranks 2 and 9 respectively.

White has 10 Pawns on rank 2 (a2 through j2); Black has 10 Pawns on rank 9.

Piece set per player: 2 Rooks, 2 Cannons, 2 Elephants, 2 Bishops, 1 Queen, 1 King = 10 back-rank pieces.

### Cannon — Detailed Rules

The Cannon’s movement and capture are separated:

**To move (non-capture):** The Cannon slides to any empty square along a rank or file, exactly as a Rook would, provided no piece is between the Cannon and the destination. The Cannon cannot pass through pieces to reach an empty square.

**To capture:** The Cannon slides along a rank or file, jumps over exactly one piece of either color (the platform), and lands on the first enemy piece beyond that platform, removing it. If there is no platform between the Cannon and an enemy piece, the Cannon cannot capture that piece. If there is more than one piece between the Cannon and the target, the Cannon cannot make that capture.

The Cannon cannot capture its own pieces. A friendly piece can serve as the platform for a capture without being taken.

### Elephant — Detailed Rules

The Elephant leaps exactly 2 squares diagonally — landing on a square 2 diagonal steps away in any of the four diagonal directions. The Elephant always jumps: the square it passes through is irrelevant. It captures by occupying the square of the target piece.

The Elephant cannot make the jump if the destination square is occupied by a friendly piece.

### Standard Rules

All standard FIDE rules apply with these adaptations for 10×10:
- **Pawns:** Move 1 or 2 squares forward from starting position. En passant applies if a Pawn advances 2 squares and an opposing Pawn could have captured it on the first square. Pawns promote on rank 10 (White) or rank 1 (Black).
- **Castling:** The King may castle with either Rook on the same rank, provided neither has moved, the squares between them are empty, and the King does not pass through check. Kingside castling: King moves from f1 to h1; Queenside: King moves from f1 to d1.
- **Check, checkmate, stalemate:** Standard rules. Stalemate is a draw.

### Attribution

Designed by Jean-Louis Cazaux, 1990. Published online 2000. Cazaux, J.L. and Schmittberger, R., “A World of Chess,” McFarland, 2017. Public domain rule set.