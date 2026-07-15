---
title: Hexapawn
slug: hexapawn
board: "3×3"
players: "2"
parent: moddable-chess
win: Advance a Pawn to the last rank, OR leave opponent with no legal moves
special: "3×3 pawn-only game invented by Martin Gardner (Scientific American, March 1962) as a teaching tool for minimax strategy and machine learning. Six pawns total (3 per side). Solved game: Black wins with perfect play. No double-step; reaching the far rank wins immediately."
engine:
  topology:
    type: grid
    rows: 3
    cols: 3
  players: [white, black]
  render:
    cellSize: 50
  setup: "ppp/3/PPP"
---

## Hexapawn

{{svg:hexapawn-board.svg "Hexapawn — starting position"}}

Hexapawn is a minimal chess variant invented by Martin Gardner and published in his *Mathematical Games* column in *Scientific American*, March 1962. It is played on a 3×3 board using only Pawns — three per side. Gardner designed it as an educational tool: the game tree is small enough that a child (or an assembly of matchboxes, each representing one board position) can learn to play perfectly through reinforcement.

### The Board

3 files (a–c) × 3 ranks = 9 squares.

### Starting Position

**White:** Pawns on a1, b1, c1 (rank 1)

**Black:** Pawns on a3, b3, c3 (rank 3)

### Pieces

Only Pawns. Pawns move as in standard chess:

- One square forward (toward the opponent’s back rank).
- Capture one square diagonally forward.
- **No double first step** (the board is too small for it to matter).
- **No promotion** (reaching the far rank is already a win condition).

### Win Conditions

A player wins by:

1. Advancing one Pawn to the opponent’s back rank (rank 3 for White, rank 1 for Black).
2. Leaving the opponent with no legal moves on their turn.

A player with no legal moves on their turn loses.

### Game Theory

Hexapawn is a solved game. With perfect play, **Black always wins**. The total game tree is small enough to analyze completely by hand. Gardner famously used it to demonstrate machine learning: a set of matchboxes (one per board position) filled with beads (one per legal move) could “learn” to play perfectly by removing beads from losing positions after each defeat.

The perfect strategy for Black: if White advances a side Pawn, Black captures; if White advances the centre Pawn, Black captures with either adjacent Pawn and can force a stalemate or promotion.

Variants on larger boards (3×4, 4×4, and up to 8×8) have been analyzed. On a 3×4 board, Black still wins; on a 4×4 board, White wins. See chessvariants.com/small.dir/hexapawn.html for a complete table of winners by board size and pawn type.

### Attribution

Hexapawn was invented by Martin Gardner, published in *Scientific American*, March 1962 (reprinted in *The Unexpected Hanging and Other Mathematical Diversions*). Chessvariants.com page written by Robert Price.
