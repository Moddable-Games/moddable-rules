---
title: Chess in the Round
slug: chess-in-the-round
board: "Circular 4-ring (64 squares)"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Chess played on a circular board with four concentric rings of squares (64 squares total, the same count as a standard chessboard). Standard chess setup and rules. Four variants are defined, three of which extend certain pieces to follow the circular rings in a continuous slide: Traditional (standard chess), Roving Rook, Wild Queen, and combined Rook+Queen. Copyrighted 1972 by Saxon Agencies Ltd., Vancouver, B.C., Canada."
engine:
  topology:
    type: cylinder
    rows: 4
    cols: 16
  players: [white, black]
  notation: ring-position
  render:
    mode: annular
published: true
---

## Chess in the Round

Chess in the Round is a commercial chess variant played on a circular board with four concentric rings of squares (64 squares total). It was copyrighted in 1972 by Saxon Agencies Ltd. of Vancouver, B.C., Canada. The game was sold in Canadian drug stores into the late 1970s.

*This is a distinct game from the Byzantine/circular chess variants that use Shatranj-era pieces. Chess in the Round uses standard FIDE pieces and rules.*

### The Board

A circular board divided into four concentric rings. Each ring contains 16 squares, arranged like the 64 squares of a standard chessboard mapped onto a circular pattern. The board uses soft yellow and brown colouring. The corner-equivalent squares (where the rings meet at diagonal extremes) are designated by triangular shapes.

In standard orthogonal/diagonal movement: the board is **functionally identical** to a standard 8×8 chess board — mechanically a 4×16 grid that wraps horizontally (cylinder topology), same underlying structure as Circular Chess and Byzantine Chess. The circular shape is a rendering choice, not a distinct board structure.

### Starting Position

Identical to standard chess. The starting position maps directly to the circular board in the same relative arrangement.

### The Four Variants

**1. Traditional Chess**

Standard FIDE chess rules with standard piece movements. The circular board is cosmetic — if orthogonal and diagonal movement rules are observed, the game is identical to standard chess.

**2. Roving Rook**

All standard movement applies, except the **Rook gains an additional ability**: it may follow the concentric rings in a continuous circular slide, turning corners where the rings curve. A Rook moving along a ring does not change rings — it slides around the same ring. This circular slide wraps continuously around the board, potentially attacking from behind.

**3. Wild Queen**

All standard movement applies, except the **Queen gains the same circular sliding ability** as the Roving Rook. The Queen can follow a concentric ring in a continuous circular slide as well as moving orthogonally and diagonally.

**4. Rook + Queen Combination**

Both the Roving Rook and Wild Queen circular abilities are in effect simultaneously.

### Win Condition

Checkmate the opponent's King.

### Attribution

Chess in the Round was copyrighted 1972 by Saxon Agencies Ltd., Vancouver, B.C., Canada. Description by Barry Yoner. Source: chessvariants.com/shape.dir/chess_in_the_round.html
