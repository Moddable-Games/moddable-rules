---
title: "Crazy 38's"
slug: crazy-38s
board: "38-square loop board"
players: "2"
parent: moddable-chess
win: "Checkmate the opponent's King OR move your King to the opponent's Home Square"
special: "38-square chess variant by Ben Good, entered in the 1998 38 Squares Contest. Uses Shogi-style drops. Unique piece set: King, Rook, Bishop, Knight, Silver General, Gold General, and 4 Pawns per side — with movements distinct from standard Shogi. The board has a built-in loop connection that Rooks can exploit. Pawns promote to Queen only on the opponent's Home Square; captured Queens revert to Pawns before being dropped. Dual win condition: checkmate OR King reaches opponent's Home Square."
engine:
  topology:
    type: grid
    cells: 38
    loop: true
    missing_squares: true
  players: [white, black]
  notation: algebraic
published: true
---

## Crazy 38's

Crazy 38's is a chess variant by Ben Good, invented as an entry for Hans Bodlaender's 38 Squares Contest (submission deadline January 31, 1998). It plays on a 38-square board with a built-in loop connection and uses Shogi-style drops.

### The Board

A 38-square checkered board. Notation uses letters a–h for rows (running down one side) and numbers 1–8 for columns (running up the other side); not every letter–number combination corresponds to an existing square. The board has a **loop-effect**: one edge of the board connects to another, enabling pieces (especially the Rook) to travel continuously around the loop.

**Home Square:** The square a King occupies at the start of the game is that player's **Home Square**. Home Squares are permanent reference points for pawn promotion and the alternative win condition.

### Starting Position

Each player begins with the following pieces:

| Piece | Quantity |
|---|---|
| King | 1 |
| Rook | 1 |
| Bishop | 1 |
| Knight | 1 |
| Silver General | 1 |
| Gold General | 1 |
| Pawn | 4 |

### Piece Movements

**King** — moves to any adjacent square (orthogonal or diagonal).

**Rook** — slides any number of squares orthogonally as long as the path is unblocked. Can exploit the board's loop connection to travel around the board.

**Bishop** — slides any number of squares diagonally as long as the path is unblocked. Additionally, may step one square orthogonally, provided: (a) the Bishop is adjacent to a friendly piece, and (b) the orthogonal step would not capture an enemy piece.

**Knight** — moves to any square reached by first stepping one square diagonally, then one square orthogonally outward from the starting square. The move is unblockable (leaps over intervening pieces).

**Silver General** — moves to any adjacent square **except** the squares diagonally ahead (forward diagonals) and diagonally behind (backward diagonals). Effectively moves to the four orthogonal squares plus the two lateral diagonal squares.

**Gold General** — moves to any adjacent square **except** the squares diagonally to either side. Note: Gold and Silver Generals have movements distinct from their Shogi counterparts.

**Pawn** — moves exactly one square in any orthogonal direction **away from the player's own side** of the board (forward and/or lateral, but not backward toward the player's own starting edge). A Pawn promotes to **Queen** only when it moves to the **opponent's Home Square** specifically. The Queen has the combined movement of Rook and Bishop. A Queen that is captured is demoted back to a Pawn before being added to the capturing player's hand for future drops.

### Drops

Crazy 38's uses Shogi-style drops: instead of making a normal move, a player may drop any piece from their hand onto any vacant square, with the following restrictions:

- A Pawn may not be dropped onto the opponent's Home Square.
- A Pawn may not be dropped in a position that immediately checkmates the opponent's King.

### Win Condition

A player wins by either:
1. **Checkmating** the opponent's King, **or**
2. **Moving their own King** onto the opponent's Home Square.

### Attribution

Crazy 38's was designed by Ben Good. Entry submitted to the 38 Squares Contest, January 1998. Source: chessvariants.com/38.dir/crazy/crazy38s.html
