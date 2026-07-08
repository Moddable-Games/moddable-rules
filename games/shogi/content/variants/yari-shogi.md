---
title: "Yari Shogi"
slug: yari-shogi
board: "9×7"
players: "2"
parent: shogi
win: "Checkmate"
special: "Invented by Christian Freeling, 1981. ‘Yari’ means lance. All unpromoted pieces except Pawns include a forward-Lance movement. Extreme forward orientation. Includes drops; unlike standard Shogi, Pawns may drop to give checkmate."
engine:
  topology:
    type: grid
    rows: 9
    cols: 7
  players: [white, black]
  drops: true
---

# Yari Shogi

**Invented by Christian Freeling (Netherlands), 1981. “Yari” means lance in Japanese.**

## Overview

Yari Shogi takes Shogi’s characteristic forward orientation to an extreme: every unpromoted piece (except the General) includes a forward-Lance component in its movement. Captures happen the same way as regular moves. Drops are included; the only rule difference from standard Shogi drops is that Pawn drops that immediately deliver checkmate are **allowed**.

## Setup

9-row × 7-column board.

**White**
- Rank 1: Forward Rook(a1), Bishop(b1), Bishop(c1), General(d1), Knight(e1), Knight(f1), Forward Rook(g1)
- Rank 3: Pawns a3–g3

**Black**
- Rank 9: Forward Rook(a9), Knight(b9), Knight(c9), General(d9), Bishop(e9), Bishop(f9), Forward Rook(g9)
- Rank 7: Pawns a7–g7

## Pieces

### General
Moves one square in any direction (as a King). Does not promote.

### Forward Rook
Slides along the rank (sideways) or forward along the file — but **not backward**. Effectively a Rook without the backward move.

**Promotes to**: Full Rook (slides orthogonally in all four directions).

### Bishop (Yari)
Slides forward along the file (fR component), **or** steps one square diagonally forward (fF component). Cannot move backward or sideways.

**Promotes to**: Gold.

### Knight (Yari)
Slides forward along the file (fR component), **or** makes a forward L-shape leap — two squares forward then one square sideways (the standard Shogi knight leap, forward only, jumps over pieces).

**Promotes to**: Gold.

### Pawn
Moves one square straight forward. Captures by the same move.

**Promotes to**: Silver.

### Gold (promoted Bishop or Knight)
Moves one square forward, diagonally forward, or sideways **or** slides backward along the file (backward Lance). Combined: any Shogi-Gold step plus a backward file slide.

### Silver (promoted Pawn)
Moves one square straight forward or diagonally forward **or** slides backward along the file (backward Lance). Cannot move sideways or step backward.

## Promotion

The **promotion zone** is the three ranks furthest from each player (White: ranks 7–9). Promotion is optional unless it would leave the piece immobile:
- Bishop, Knight, and Pawn **must** promote if moved to the last rank (rank 9 for White).

Pieces are dropped unpromoted and do not promote upon being dropped even inside the promotion zone.

## Drops

Captured pieces change sides and may be dropped on a vacant square as a turn, with these restrictions:
- A piece may not be dropped where it would have no legal moves. (Bishop, Knight, and Pawn cannot be dropped on the last rank.)
- A Pawn may not be dropped in a file already containing an unpromoted friendly Pawn.
- **Pawns may drop to give checkmate** (unlike in standard Shogi).

*Source: chessvariants.com/ms.dir/yarishogi.html; rules by Christian Freeling*
