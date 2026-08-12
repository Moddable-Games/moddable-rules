## Teleportation Chess

Each piece begins with a one-use teleport ability. Instead of moving normally, a piece may relocate to any empty square on the board, but it can never teleport again.


{{svg:teleport-chess-board.svg "Teleportation Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess setup. A checker or counter is placed beneath every piece except pawns and the King. The checker marks that the piece has not yet used its teleport.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- Each piece begins the game with a **teleport token**. Physically this is a checker or counter placed beneath the piece.
- Instead of making a normal move, a player may **teleport** one of their pieces that still holds its token: remove the token and relocate that piece to any unoccupied square on the board.
- A piece that has teleported has spent its token and **may never teleport again**.
- Teleporting is a complete turn. It does not capture, and the destination must be empty.
- **Pawns and the King cannot teleport.** They have no token at setup.
- A teleported piece may deliver check or checkmate on arrival.
- A piece may teleport to block a check.
- All other rules follow standard chess.

### Win Condition

Checkmate the opponent's King.

### Strategy

The one-per-piece limit means teleportation is distributed across the army, not pooled. Early teleports sacrifice future flexibility for that piece. Common threats: teleporting a Rook or Queen into a mating net, repositioning a Bishop to an open diagonal, or teleporting a piece to block an attack. Because the King cannot teleport, king safety relies entirely on conventional defence.

### Attribution

Variant of unknown origin. Rules transcribed from chessvariants.com/diffmove.dir/teleportation.html, whose author states: "I found [this] in a library book at some point. Most unfortunately, I can remember neither the title nor the author."