---
title: "San-kwo-k'i"
slug: san-kwo-ki
board: Hexagonal trisection
players: 3
parent: xiangqi
order: 9
win: Last General surviving wins
special: "Three Kingdoms 3-player Xiangqi on a hexagonal trisected board. Eliminating a General captures that player's entire army."
engine:
  topology:
    type: hexagonal-trisection
  players: [wei, shu, wu]
---

## Overview

{{svg:san-kwo-ki-board.svg "San-kwo-k'i — starting position"}}

San-kwo-k'i (三國棋, "Game of the Three Kingdoms") is a historical Chinese three-player chess variant representing the Three Kingdoms war (220–280 CE) among Wei, Shu, and Wu. It is documented in H.J.R. Murray's *A History of Chess* (1913), citing von Möllendorff's 1876 German article "Das Schachspiel der Chinesen" published in the journal of the German Society for Natural and Cultural Science of East Asia.

Yu Ren Dong reports the game was invented during the Southern Song Dynasty (1127–1279 CE); the inventor's name and original rulebook are lost.

## Board

The board is a large hexagonal space divided into three equal sections, one per kingdom. Each section contains a Xiangqi-like grid with a 3×3 palace at its centre. The three sections meet at a central zone. The lines of the board are not straight throughout — each kingdom's territory faces the other two. A river separates each player's home territory from the central meeting area. Pieces sit on line intersections (points), as in standard Xiangqi, not in cell centres.

This board shares its fundamental shape (a hexagon divided into three Y-symmetric sectors) with Yalta Chess (chess hub), confirmed against Yalta's primary source diagram 2026-07. The two variants are strong candidates for a single shared `hexagonal-trisection` engine renderer rather than two separate implementations, though San-kwo-k'i's board is point/intersection-based (Xiangqi convention) while Yalta's is cell-based (FIDE chess convention) — the renderer would need to support both point and cell modes on the same underlying hex-trisection geometry.

## Players and Armies

Three players represent three kingdoms:
- **Wei** (魏) — Blue
- **Shu** (蜀) — Red
- **Wu** (吳) — Green

Each player commands the standard 16 Xiangqi pieces: General(1), Guard(2), Elephant(2), Horse(2), Chariot(2), Cannon(2), Soldier(5).

Each player additionally has **2 special pieces** placed 2 squares directly above their Guards in the starting position:
- Wei: **Ch'i / Banner** (旗)
- Shu: **Chuo / Fire** (火)
- Wu: **Feng / Wind** (風)

## Starting Position

Confirmed against two independent diagram sources: the original 1876/1913 illustration (Murray, *A History of Chess*, p. 133, reproducing von Möllendorff's diagram) and a clearer modern redraw by Hans Bodlaender (Steven Leary's Chinese Chess FAQ). Both agree on the following arrangement, identical for all three kingdoms (only rotated to face the centre):

**Back row (row 1), left to right:** Chariot (Rook), Horse (Knight), Elephant, Guard, General (King), Guard, Elephant, Horse (Knight), Chariot — 9 pieces.

**Row 2:** Cannon, then the two special pieces (Banner/Fire/Wind, one per side of centre), then Cannon — 4 pieces.

**Row 3 (fanning forward from row 2):** 5 Soldiers (Pawns), arranged in a triangular spread — one at the centre-front point, two at the next rank back, and the outer two aligned with the Cannons.

The special piece (Banner/Ch'i for Wei, Fire/Chuo for Shu, Wind/Feng for Wu) sits two spaces directly above its army's Guards, matching the frontmatter's existing description.

## Special Piece: Banner / Fire / Wind

The special piece makes an **extended knight's move**: two steps vertically or horizontally, then one step diagonally outward. This is a leaping move — the piece jumps directly to its destination and cannot be blocked by intervening pieces. The destination square is 3 files and 1 rank away (or 1 file and 3 ranks away) from the starting square.

## Rules

Standard Xiangqi rules apply, with the following adaptations for three players:

**Turn order:** Players take turns in a fixed sequence — Wei, Shu, Wu, Wei… — clockwise around the board.

**Elimination:** When a player's General is checkmated, that player is eliminated. The player who delivered the checkmate **removes the General from the board and takes all remaining pieces of the eliminated player**, immediately adding them to their own army.

**Win condition:** The last player with a surviving General wins.

## Historical Note

The game is reported to be "very complicated and difficult, but is not considered as interesting as the ordinary chess" (Murray, citing von Möllendorff). The back-row/cannon/pawn arrangement above is now confirmed by two independent diagrams; what remains unresolved in the sources is the exact line-connectivity at the very centre of the board where all three sectors meet — the historical diagrams show converging dashed lines there but do not fully specify square-by-square movement legality across that junction.

## Attribution

Rules documented from chessvariants.com/xiangqivariants.dir/chin3pl.html, citing H.J.R. Murray, *A History of Chess* (1913), pp. 133–134, and O. von Möllendorff, "Das Schachspiel der Chinesen" (1876). Starting position cross-checked against Murray's reproduced diagram and Hans Bodlaender's redrawn version (Steven Leary's Chinese Chess FAQ), 2026-07.
