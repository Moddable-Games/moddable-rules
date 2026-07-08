---
title: Yáng Qí
slug: yang-qi
board: 9×10
players: 2
parent: xiangqi
win: Checkmate the opponent's King
special: "Western-influenced Xiangqi redesign with FIDE-style pieces plus Vaos (diagonal screen-capture). King may swap with adjacent pieces."
engine:
  type: grid
  rows: 10
  cols: 9
---

## Overview

Yáng Qí (also spelled Yang Qi, Yangqi, or Yang Chi) was designed by Fergus Duniho in 2001 as a Western-influenced redesign of Chinese Chess. While classified under the Xiangqi family, Yáng Qí plays closer to orthodox FIDE chess: it replaces most Xiangqi-specific pieces with Western equivalents, removes river and fortress restrictions, and extends the Cannon's screen-capture mechanic to both orthogonal and diagonal pieces.

The name uses the Chinese cosmological concept of Yáng (active, strong, masculine), indicating pieces are generally stronger than in Xiàng Qí. The game may also be called Yankee — the creator is a Yankee, and the transliteration is a happy coincidence.

## Board and Setup

Played on a checkered 9×10 board (files a–i, ranks 1–10). White occupies the bottom (ranks 1–4), Black the top (ranks 7–10). Pieces occupy squares, not intersections.

White starting position:

| Rank | a | b | c | d | e | f | g | h | i |
|------|---|---|---|---|---|---|---|---|---|
| 4 | — | P | — | P | — | P | — | P | — |
| 3 | P | — | P | — | P | — | P | — | P |
| 2 | — | C | — | — | — | — | — | C | — |
| 1 | R | N | B | V | K | V | B | N | R |

Black mirrors on ranks 10 (back rank), 9 (Cannons), 8 (odd-file Pawns), 7 (even-file Pawns).

**Piece key:** R = Rook, N = Knight, B = Bishop, V = Canon/Vao, K = King, C = Cannon, P = Pawn

Setup notes:
- Rank 1 (White): R(a1) N(b1) B(c1) V(d1) K(e1) V(f1) B(g1) N(h1) R(i1)
- Rank 2 (White Cannons): C(b2), C(h2)
- Rank 3 (White Pawns on odd files): P(a3) P(c3) P(e3) P(g3) P(i3)
- Rank 4 (White Pawns on even files): P(b4) P(d4) P(f4) P(h4)

Each player has 9 Pawns arranged in a staggered two-rank pattern. Pawns on rank 3 may double-advance; Pawns on rank 4 may not.

## Pieces

**King (K)** — moves one square in any direction. Cannot move into check. No castling. Has a special swap move (see below).

**Canon / Vao / Arrow (V)** — slides any number of squares diagonally (like a FIDE Bishop) when not capturing. To capture, must jump over exactly one intervening piece (the screen) and land on the first enemy piece beyond it along the same diagonal. Cannot capture without a screen.

**Bishop / Sage (B)** — slides any number of squares diagonally. Captures normally by moving to the target square. No screen mechanic — this is the standard FIDE Bishop.

**Knight / Horse (N)** — jumps in an L-shape (two squares in one direction, one square perpendicular), leaping over intervening pieces. This is the leaping FIDE Knight, not the blockable Xiangqi Horse.

**Rook / Chariot (R)** — slides any number of squares orthogonally. Captures normally.

**Cannon / Pao (C)** — slides any number of squares orthogonally (like a Rook) when not capturing. To capture, must jump over exactly one intervening piece (the screen) and land on the first enemy piece beyond it along the same rank or file. Cannot capture without a screen.

**Pawn (P)** — moves one square forward. Captures one square diagonally forward (not straight, unlike Xiangqi). Pawns starting on rank 3 may advance two squares on their first move; Pawns starting on rank 4 do not get a double advance. En passant applies when a rank-3 Pawn double-advances past a square adjacent to an enemy Pawn on rank 5. Promotes on reaching the last rank.

## Special Rules

**King Swap:** When the King is not in check, it may swap places with any adjacent friendly piece except a Pawn. This counts as the entire turn. The swap may be used any number of times throughout the game. Its primary purpose is to allow Bishops and Canons to change the color of squares they control, and to give flexible defensive options.

**Pawn Promotion:** A Pawn reaching the opponent's last rank (rank 10 for White, rank 1 for Black) promotes to any one of the player's currently captured pieces. If no captured pieces are available, the Pawn cannot advance to the last rank.

**No castling.**

**Stalemate:** draw (standard FIDE convention applies for cases not otherwise specified).

## Notation

Algebraic notation as in FIDE Chess. Per the Fairy Alphabet (Anthony Dickins, *A Guide to Fairy Chess*): P denotes the Cannon/Pao, V denotes the Canon/Vao. Pawn moves are recorded without a piece letter. A King swap may be recorded as a King move with a semicolon and the other piece's move to the King's former square for fuller notation.

## Attribution

Yáng Qí was designed by Fergus Duniho. WWW page created June 9, 2001; last modified June 21, 2001. Rules documented from chessvariants.com/xiangqivariants.dir/yangqi.html.
