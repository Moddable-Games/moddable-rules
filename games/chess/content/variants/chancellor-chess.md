---
title: Chancellor Chess
slug: chancellor-chess
board: "9×9"
players: "2"
parent: chess
win: Checkmate
special: "9×9 chess variant published by Ben Foster (1889). Adds one Chancellor (Rook+Knight compound) per side, placed to the right of the King. Black squares are in the corners. Castling: King moves 2 squares, Rook moves 3. Pawns may promote to Chancellor."
engine:
  topology:
    type: grid
    rows: 9
    cols: 9
  players: [white, black]
  render:
    cellSize: 36
  setup: "rnbqkcbnr/ppppppppp/9/9/9/9/9/PPPPPPPPP/RNBQKCBNR"
---

## Chancellor Chess

{{svg:chancellor-chess-board.svg "Chancellor Chess — starting position"}}

Chancellor Chess was published by the American Ben Foster in his 1889 book of the same name. It is played on a 9×9 board (81 squares) with black squares in the corners, and adds one **Chancellor** (a Rook+Knight compound) per side to an otherwise standard FIDE chess army, plus one extra Pawn per side. The Chancellor piece had appeared earlier in European chess literature (Pietro Carrero, 1617, called it the Centaur), and Foster’s book provided historical context for it.

### The Board

9 files (a–i) × 9 ranks = 81 squares. Black squares occupy the corners.

### Starting Position

**White (rank 1):** Rook a1 · Knight b1 · Bishop c1 · Queen d1 · King e1 · Chancellor f1 · Bishop g1 · Knight h1 · Rook i1

**White pawns (rank 2):** a2–i2 (9 pawns)

**Black (rank 9):** Rook a9 · Knight b9 · Bishop c9 · Queen d9 · King e9 · Chancellor f9 · Bishop g9 · Knight h9 · Rook i9

**Black pawns (rank 8):** a8–i8 (9 pawns)

### The Chancellor

The **Chancellor** combines the moves of a Rook and a Knight: it slides any number of squares horizontally or vertically, or leaps in an L-shape as a Knight. It is approximately equal in value to the Queen. Pawns may promote to Chancellor.

### Castling

Castling occurs under the same conditions as in orthodox chess (King not in check, neither piece has moved, no attacked squares in the King’s path). When castling, the **King moves two squares** toward the Rook, and the **Rook moves three squares** in the opposite direction. This applies to both kingside and queenside castling. The Chancellor does not participate in castling.

### Promotion

Pawns reaching the last rank may promote to **Queen, Rook, Bishop, Knight, or Chancellor**.

### Special Rules

All standard FIDE chess rules apply on the 9×9 board except where noted above. En passant applies as in standard chess.

### Attribution

Chancellor Chess by Ben Foster, published 1889. Rules from chessvariants.com/large.dir/chancellor.html (Hans Bodlaender, 1997).
