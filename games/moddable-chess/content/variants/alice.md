---
title: Alice Chess
slug: alice
board: "Two 8×8 boards (Board A and Board B)"
players: "2"
parent: moddable-chess
win: Checkmate
order: 1
special: "After every move, the moving piece transfers to the corresponding square on the other board. A move is only legal if the transfer square is vacant. Invented V. R. Parton, 1953."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
    layers: 2
    layer_labels: ["Board A", "Board B"]
    physical_representation: one-board
  players: [white, black]
  setup:
    - "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
    - "8/8/8/8/8/8/8/8"
  notation: alice-algebraic
published: true
---

## Alice Chess

Invented by V. R. Parton in 1953. Named after Lewis Carroll's *Through the Looking-Glass* — pieces step through the mirror and emerge on the other side. Alice Chess uses two standard 8×8 chessboards played simultaneously.

### The Two Boards

**Board A** begins with the standard chess starting position. **Board B** begins empty.

Boards share the same square coordinates. A piece on Board A at e4 and a piece on Board B at e4 occupy the same coordinate but are on different boards and do not interact directly.

### The Transfer Rule

After every move (including captures), the piece that moved transfers to the **corresponding square on the other board**.

- A piece on Board A at e4 transfers to Board B e4 after moving.
- A piece on Board B at f6 transfers to Board A f6 after moving.

**A move is legal only if the transfer square is vacant.** If the transfer square is occupied (by any piece of either colour), the move is illegal and cannot be made. This applies to all moves, including captures: capturing an opponent's piece does not free the transfer square if that square is occupied.

A piece cannot move at all if every otherwise-legal destination would place it on a square whose mirror is occupied.

### Setup

Board A: standard chess starting position.
Board B: empty.

All White and Black pieces begin on Board A.

### Physical Representation

Alice Chess is commonly played on a single physical board with a distinguishing marker — traditionally a checker piece placed underneath — to indicate which squares are Board B. An unmarked piece occupies Board A; a piece with a checker underneath occupies Board B.

This one-board representation is fully equivalent to the two-board game and does not require a second physical set.

### Piece Movement

All pieces move exactly as in standard chess **on their current board**. The movement rules for each piece are unchanged; only the legality check (is the transfer square empty?) is added.

| Piece | Moves as in standard chess |
|-------|---------------------------|
| King | One step in any direction |
| Queen | Any distance, any direction |
| Rook | Any distance, orthogonally |
| Bishop | Any distance, diagonally |
| Knight | (2,1) jump, unblockable |
| Pawn | Forward one (or two from start); captures diagonally |

### Check and Checkmate

A King is in **check** when it is on a square that would be attacked by an opponent's piece **after that piece completes its transfer**. In other words: a piece threatens the King's square on the board the piece will land on after moving through the looking-glass.

Consequences:
- A King on Board A can only be in check from pieces that, after moving and transferring, land on Board B — specifically, a piece currently on Board B whose move would place it on the King's Board-A square (since it would then transfer to Board A).
- A piece that cannot transfer after moving cannot deliver check with that move.

You may not make any move that leaves your King in check after the full move (including transfer) resolves.

**Checkmate:** the King is in check and no legal move (including transfer) can remove it.

### Castling

Castling is permitted under the standard chess conditions, with the transfer rule applied to both pieces:

- The King castles on its current board, then transfers to the other board.
- The Rook also moves on its current board, then transfers to the other board.
- All transfer squares (for both King and Rook) must be vacant on the other board.
- No square the King passes through or lands on may be under attack (on the board where the King would be after transfer).
- Neither King nor Rook may have previously moved.

### En Passant

En passant is not legal in Alice Chess. The complexities introduced by transfer make the en passant capture undefined in Parton's original rules.

### Pawn Promotion

A pawn promotes upon reaching the opponent's back rank **on whichever board it is currently on**. Standard promotion rules apply (Queen, Rook, Bishop, or Knight). The promoted piece transfers to the other board on the promotion move.

### Notation

Standard algebraic notation with a suffix indicating the destination board after transfer:

- `/A` — piece transfers to Board A after moving
- `/B` — piece transfers to Board B after moving

Example: `1.e4/B` — pawn moves to e4 on Board A and transfers to Board B e4.

The `/A` or `/B` suffix is determined by which board the piece **lands on** after transfer (i.e., the opposite of the board it started on).

### Strategy Notes

- The transfer rule creates a constantly shifting layer of blocked squares. Squares that appear open may be unreachable because their mirror is occupied.
- Pieces on Board B are often harder to coordinate in the opening, when Board A is crowded and most mirror squares are occupied.
- The King's safety must be evaluated across both boards: threats exist from pieces on either board whose transfer would land them on the King's square.
- Knights are particularly powerful because their (2,1) jump ignores blocking pieces; whether the knight can transfer is the only additional check needed.

### Attribution

Alice Chess, invented by V. R. Parton, 1953. Published in *Alices Abenteuer im Schachland* and referenced in Hooper &amp; Whyld, *The Oxford Companion to Chess* (1987, p. 10) and Pritchard, *Encyclopedia of Chess Variants* (1994, pp. 3–5). Public domain. Fairy-Stockfish implements Alice Chess under the same rules.
