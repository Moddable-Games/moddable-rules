---
title: "Byzantine Chess"
slug: byzantine-chess
board: "Circular (4 rings × 16 files)"
players: "2"
parent: moddable-chess
win: "Checkmate, stalemate the opponent, or bare the opponent's King"
special: "Played on a circular board of 4 concentric rings and 16 files (64 squares). Uses Shatranj piece movements: Bishops leap two diagonal squares, Queens move one diagonal square. Stalemate is a win. Baring the opponent's King wins unless the opponent can bare back immediately."
engine:
  topology:
    type: grid
    rows: 4
    cols: 16
    wrap: cylinder
  players: [white, black]
---

# Byzantine Chess

**Historical variant, approximately 10th century CE. Also called Round Chess.**

## Overview

Byzantine Chess is a Shatranj variant popular in 10th-century Byzantium (present-day Istanbul). It is played on a circular board of four concentric rings, each containing 16 squares, for 64 squares in total. The circular topology means file 16 (p) connects directly back to file 1 (a) around the ring.

## Board

The board consists of 4 rings (ranks) and 16 files (columns) arranged in a circle:
- **Rank 1**: innermost ring
- **Rank 4**: outermost ring
- **Files a–p**: 16 columns around the circumference; file p is adjacent to file a

## Setup

White occupies one side of the circle (files a and p), Black occupies the opposite side (files h and i). Each side has 10 pieces and 8 pawns.

**White**
- King: a4
- Queen: p4
- Rooks: a1, p1
- Bishops: a3, p3
- Knights: a2, p2
- Pawns (right-moving): b1, b2, b3, b4
- Pawns (left-moving): o1, o2, o3, o4

**Black**
- King: i4
- Queen: h4
- Rooks: h1, i1
- Bishops: h3, i3
- Knights: h2, i2
- Pawns (right-moving): g1, g2, g3, g4
- Pawns (left-moving): j1, j2, j3, j4

White pawns march toward Black's position; each player's pawns advance in one of two directions around the ring.

## Pieces

Pieces move as in Shatranj, not FIDE chess:

**King**: moves one square in any direction, as in standard chess.

**Rook**: slides any number of squares orthogonally, as in standard chess.

**Knight**: jumps in an L-shape (2+1 squares), as in standard chess.

**Bishop (Elephant)**: jumps exactly two squares diagonally (the Alfil leap). Does not slide; leaps over intervening pieces. Colour-bound.

**Queen (General/Firzan)**: moves exactly one square diagonally. Much weaker than the FIDE Queen.

**Pawn**: advances one square forward along the ring (no double push from the starting position). Captures one square diagonally forward. **Pawns cannot promote.**

### Special Pawn Rule

On a circular board, the two sets of pawns march in opposite directions. If two friendly pawns moving in opposite directions end up on mutually opposing squares such that both are blocked, the **opponent** may remove both of those pawns as a single action (this does not count as a move and requires no capture).

## Rules

**Check and checkmate** apply as in standard chess: a player in check must escape; if they cannot, they lose.

**Stalemate is a win**: a player who stalemates the opponent wins the game.

**Bare King (bareing)**: a player who captures all of the opponent's non-King pieces wins. However, if the opponent can bare the other King on their very next move, the game is drawn instead.

*Source: chessvariants.com/historic.dir/byzantine.html*
