## Teleportation Chess

Each player has 3 teleports per game. Instead of a normal move, any piece can teleport to any empty square on the board. Use them wisely — they don't come back.


{{svg:teleport-chess-board.svg "Teleportation Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess setup. Each side begins with 3 teleport charges.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- Instead of a normal move, a player may teleport any of their pieces to any empty square on the board.
- Teleportation uses one charge. Each side has exactly 3 per game.
- Teleportation does not count as capturing; you can only teleport to empty squares.
- A teleported piece cannot give check on the teleport move (it arrives but doesn't attack until the next turn).
- All other standard chess rules apply.

### Win Condition

Checkmate the opponent's King.

### Strategy

Teleports are powerful but finite; save them for decisive moments. Common uses: teleporting a Knight or Queen into a mating net, escaping a trapped piece, or repositioning the King to safety. Bluffing with teleport availability adds a psychological dimension.

### Attribution

Modern variant with invented rules. See moddable-rules#243 for correction history.