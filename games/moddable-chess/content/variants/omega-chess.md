---
title: "Omega Chess"
slug: omega-chess
board: "10×10 + 4 corner squares"
players: "2"
parent: moddable-chess
win: "Checkmate"
special: "Commercial variant on a 10×10 board with 4 extra \"wizard squares\" beyond the corners (104 total squares). Adds Champion (WAD: leaps 2 ortho/diag or slides 1 ortho) and Wizard (FC: leaps (1,3)/(3,1) or slides 1 diag). Pawns may advance 1, 2, or 3 squares on first move."
engine:
  topology:
    type: grid
    rows: 10
    cols: 10
  players: [white, black]
---

# Omega Chess

**Designed by Daniel MacDonald, 1992. Endorsed by grandmasters Michael Rohde and Alex Sherzer.**

## Overview

Omega Chess is played on a 10×10 board (files A–J, ranks 0–9) with four additional “wizard squares” placed diagonally beyond each corner of the main board (W1–W4), giving 104 squares total. Two new pieces per player are added: the Champion and the Wizard.

## Board

- **Main board**: 10×10 (files A–J, ranks 0–9)
- **Wizard squares**: W1 (off corner a0), W2 (off corner j0), W3 (off corner j9), W4 (off corner a9)
- Rooks and Pawns **cannot** enter wizard squares. All other pieces can.
- Algebraic notation uses A–J for files, 0–9 for ranks. Wizard squares are W1–W4.

## Setup

**White**:
- Wizard squares W1, W2: White Wizards
- Rank 0: Champion(a0), Rook(b0), Knight(c0), Bishop(d0), Queen(e0), King(f0), Bishop(g0), Knight(h0), Rook(i0), Champion(j0)
- Rank 1: Pawns a1–j1

**Black**:
- Wizard squares W4, W3: Black Wizards
- Rank 9: Champion(a9), Rook(b9), Knight(c9), Bishop(d9), Queen(e9), King(f9), Bishop(g9), Knight(h9), Rook(i9), Champion(j9)
- Rank 8: Pawns a8–j8

## New Pieces

### Champion
A leaper placed in the corners of the 10×10 board. It can:
- **Leap** exactly 2 squares orthogonally (Dabbaba move, jumps over intervening pieces)
- **Leap** exactly 2 squares diagonally (Alfil move, jumps over intervening pieces)
- **Slide** exactly 1 square orthogonally (Wazir move)

The Champion cannot slide further than 1 square orthogonally, but its 2-square leaps cannot be blocked.

### Wizard
A color-bound leaper placed in the wizard corner squares. It can:
- **Leap** (1,3) or (3,1) squares in any of the 8 knight-like directions (Camel move)
- **Slide** exactly 1 square diagonally (Ferz move)

The Wizard is color-bound (like a Bishop) due to its Camel and Ferz components.

## Rules

All standard FIDE rules apply with the following modifications:

### Pawns

On a pawn’s **first move**, it may advance **1, 2, or 3 squares** forward. After the first move, it advances only 1 square at a time.

**En passant**: A pawn that advances 3 squares may be captured en passant on either of the two squares it passed through. A pawn that advances 2 squares may be captured en passant on the square it passed through, as in standard chess.

**Promotion**: as in standard FIDE chess, when reaching the far rank.

### Castling

Castling follows standard FIDE rules. The King moves **2 squares** toward the Rook:
- **Kingside**: King f0→h0, Rook i0→g0
- **Queenside**: King f0→d0, Rook b0→e0

### Wizard Squares

Only non-Rook, non-Pawn pieces may occupy wizard squares. A piece entering a wizard square does so by moving diagonally (since wizard squares are diagonal to the board corners).

## Endgame Notes

The four corner wizard squares create unusual endgame possibilities. Notable differences from standard chess: a lone queen can force mate without king assistance; two knights can force mate (unlike standard chess); a king and lone rook cannot force mate against a bare king (the rook cannot drive the king to the edge without the king escaping into wizard squares).

*Source: en.wikipedia.org/wiki/Omega_Chess*
