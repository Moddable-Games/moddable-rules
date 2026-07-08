---
title: Los Alamos Vierschach
slug: los-alamos-vierschach
board: "84-square cross (6×6 core + 2×6 extensions)"
players: "4 (2 teams of 2)"
parent: moddable-chess
win: "Checkmate both opposing Kings"
special: "4-player chess by Jörg Knappen combining Los Alamos Chess (6×6, no Bishops, no castling) with the Vierschach 4-player format. Non-competing entry to the 84 Squares Contest. Board: a 6×6 grid extended by 2×6 squares on each of the four sides, identical to the Quintessential Chess board (84 squares total). Four Los Alamos armies arranged as in Vierschach with allied teams side by side. Pawns gain initial double-step since the promotion path is longer than in standard Los Alamos; en passant applies. No castling."
engine:
  topology:
    type: grid
    cells: 84
    shape: cross
  players: [north, east, south, west]
  notation: algebraic
published: false
---

## Los Alamos Vierschach

Los Alamos Vierschach is a 4-player chess variant by Jörg Knappen combining **Los Alamos Chess** (the famous 6×6 variant developed at Los Alamos National Laboratory in the 1950s) with the **Vierschach** 4-player format. It was submitted as a non-competing entry to the 84 Squares Contest.

### The Board

The board consists of a 6×6 checkered grid extended by 2×6 squares on each of the four sides. This gives:

- Central 6×6 area: 36 squares
- Four 2×6 arms (one per side): 4 × 12 = 48 squares
- Total: 84 squares

This board is identical to the one used in Quintessential Chess. The lower-left corner is a dark square.

### Teams and Armies

Four armies, two allied teams — arranged as in Vierschach: allies play from adjacent sides (not opposite sides). Each player commands a Los Alamos Chess army.

**Los Alamos Chess piece set (per player):**
- 1 King
- 1 Queen
- 2 Rooks
- 2 Knights
- 6 Pawns
- No Bishops (Los Alamos Chess omits Bishops)

Players are notionally: North, East, South, West. Adjacent pairs are allied per Vierschach convention.

### Starting Position

Each player's army is set up in their arm of the cross-shaped board, as in Vierschach:
- Back rank (innermost row of the arm): Rook, Knight, Queen, King, Knight, Rook
- Front rank: 6 Pawns

Pawns advance toward the centre of the board.

### Rules

All Vierschach rules apply, combined with Los Alamos Chess rules:

**From Los Alamos Chess:**
- No Bishops
- No castling
- Standard FIDE movement for all other pieces

**From Vierschach:**
- 4 players take turns in sequence
- Allied teams: checkmating one of the two opposing Kings does not immediately end the game — both opposing Kings must be checkmated for a team to win
- A player whose King is checkmated is eliminated

**Modified for the extended board:**
- **Pawns have an initial double-step move** (the path to promotion is longer than in 2-player Los Alamos Chess, so the double-step is added to compensate)
- **En passant** is possible

### Win Condition

A team wins by checkmating **both** opposing Kings.

### Notes

The combination is natural: Los Alamos Chess provides a compact, fast-playing piece set well suited to the extended 84-square cross board; Vierschach provides the 4-player relay format. The cross-shaped board accommodates 4 armies without requiring an unusually large grid.

### Attribution

Los Alamos Vierschach was designed by Jörg Knappen as a non-competing entry to the 84 Squares Contest. HTML by Hans Bodlaender. Source: chessvariants.com/large.dir/contest84/losalamos4.html
