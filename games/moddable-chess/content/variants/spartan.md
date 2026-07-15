---
title: Spartan Chess
slug: spartan
board: "8×8"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Asymmetric: Persian (standard FIDE) vs. Spartan army with two Kings and unique pieces. Designed by Steven Streetman, 2010."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "lwgkkgwl/hhhhhhhh/8/8/8/8/PPPPPPPP/RNBQKBNR"
  notation: algebraic
  asymmetric: true
  dual_king: true
published: true
---

## Spartan Chess

{{svg:spartan-board.svg "Spartan Chess — starting position"}}

Designed by Steven Streetman (2010). Spartan Chess is asymmetric: White commands a standard FIDE Persian army; Black commands a Spartan army with two Kings and a unique roster of pieces. The armies differ fundamentally in their check rules, pieces, and win conditions.

### The Two Armies

**Persian Army (White):** Standard FIDE. One King; standard checkmate and stalemate rules apply.

**Spartan Army (Black):** Two Kings; unique pieces; no standard Queen, Rook, Bishop, or Knight.

### Spartan Pieces

| Piece | Count | Movement |
|---|---|---|
| King | 2 | 1 square in any direction |
| Warlord | 1 | Jumps as a Knight or steps 1 square in any direction (Knight + King compound) |
| General | 2 | Slides diagonally as a Bishop, or steps 1 square in any direction (Bishop + King compound) |
| Lieutenant | 2 | Slides orthogonally as a Rook, OR jumps as a Knight (not both in one move) |
| Captain | 2 | Moves 1 or 2 squares orthogonally in any direction (does not slide beyond 2) |
| Hoplite | 8 | Moves 1 square straight forward; captures 1 square diagonally forward; OR moves 1 square sideways (not both in one move). Promotes on rank 8. |

### Starting Positions

**White (Persian) — standard FIDE:**
```
1 ♖ ♘ ♗ ♕ ♔ ♗ ♘ ♖
2 ♙ ♙ ♙ ♙ ♙ ♙ ♙ ♙
```

**Black (Spartan):**
```
8 Lt Wr Gn Kg Kg Gn Wr Lt
7 Ho Ho Ho Ho Ho Ho Ho Ho
```
Rank 8 from a to h: Lieutenant, Warlord, General, King, King, General, Warlord, Lieutenant.
Rank 7: 8 Hoplites.

### Check Rules — The Dual-King Mechanic

The Spartan check system differs completely from standard chess:

- **Both Spartan Kings must be simultaneously in check** before Black is considered to be in check. A single Spartan King under attack does not constitute check.
- Black must not end a move with both Kings simultaneously attacked.
- If only one Spartan King is attacked, Black may ignore it and make any legal move (including moves that keep that one King under attack).
- If both Spartan Kings are simultaneously attacked, Black is in check and must resolve it on the next move.

**Checkmate:** Black is checkmated when both Kings are simultaneously in check and no legal move resolves it. Black loses.

**Win by capture:** If the Persian player captures one Spartan King, Black is reduced to one King, and standard single-King check rules then apply to the remaining King.

### Persian Win Condition

White wins by:
1. Checkmating Black (both Kings simultaneously in check with no legal escape), OR
2. Capturing one Spartan King (after which the remaining King is under standard check rules and must be checkmated).

### Spartan Win Condition

Black wins by checkmating the single Persian King under standard chess rules.

### Stalemate

- Persian stalemate (White has no legal move): White loses.
- Spartan stalemate (Black has no legal move but not in check): Draw.

### Hoplite Promotion

A Hoplite reaching rank 8 promotes to any Spartan piece (Warlord, General, Lieutenant, or Captain) — not to a King.

### Castling and En Passant

White may castle under standard FIDE conditions. Black has no castling privilege. En passant applies to Hoplites in the same way as standard Pawns (a Hoplite that moved two squares forward may be captured en passant on the following move — noting that Hoplites have no double first-move step in standard Spartan Chess, so en passant opportunities are rare).

### Attribution

Designed by Steven Streetman. Published 2010. Official rules at spartanchess.com. Public domain rule set.
