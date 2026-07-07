---
title: "Carrera's Chess"
slug: carrera
board: "10×8"
players: "2"
parent: moddable-chess
win: "Checkmate"
special: "1617 historical variant on a 10×8 board. Adds Champion (Rook+Knight) and Centaur (Bishop+Knight). No castling, no en passant. A pawn double move is forbidden if it would both block a check and pass through an enemy pawn’s capture square."
engine:
  topology:
    type: grid
    rows: 8
    cols: 10
  players: [white, black]
---

# Carrera's Chess

**Invented by Pietro Carrera, 1617. Described in *Il Gioco de gli Scacchi*. One of the earliest large-board chess variants with compound pieces.**

## Overview

Carrera’s Chess extends standard chess to a 10×8 board by adding two compound pieces per side: the Champion (Rook + Knight) and the Centaur (Bishop + Knight). It predates Capablanca’s Chess by three centuries and uses the same general concept.

## Setup

10-file board (files a–j), 8 ranks. The right corner on each player’s side is light-coloured. The Centaur is placed between the Rook and Knight on the Queen-side; the Champion is placed between the Knight and Rook on the King-side.

```
FEN: rAnbqkbnCr/pppppppppp/10/10/10/10/PPPPPPPPPP/RANBQKBNCR w - - 0 1
(A/a = Centaur, C/c = Champion)
```

**White (rank 1, a–j):** Rook(a1), Centaur(b1), Knight(c1), Bishop(d1), Queen(e1), King(f1), Bishop(g1), Knight(h1), Champion(i1), Rook(j1)
**White Pawns (rank 2):** a2–j2

**Black (rank 8, a–j):** Rook(a8), Centaur(b8), Knight(c8), Bishop(d8), Queen(e8), King(f8), Bishop(g8), Knight(h8), Champion(i8), Rook(j8)
**Black Pawns (rank 7):** a7–j7

## Pieces

All standard FIDE pieces move as usual. Two additional pieces:

### Champion (Campione)
Moves as a **Rook** (slides orthogonally any distance) **or** a **Knight** (L-shape leap). Also known as Chancellor.

### Centaur (Centauro)
Moves as a **Bishop** (slides diagonally any distance) **or** a **Knight** (L-shape leap). Also known as Archbishop. Not colour-bound due to the Knight component.

## Rules

### No Castling

Castling is not used in Carrera’s Chess. Murray confirms Carrera followed Sicilian rules in which the King had no power to leap.

### No En Passant

En passant captures are not used. Italian Chess of Carrera’s era did not permit en passant.

### Restricted Pawn Double Move

Pawns may make an initial double-step move from their starting rank, with one restriction: **a double move is forbidden if it would simultaneously block a check against the player’s own King AND would land on a square where an enemy Pawn in an adjacent file could capture it.** In that specific situation only, the double move is not permitted.

### Pawn Promotion

A Pawn reaching the far rank promotes to a Queen. Whether promotion to Champion or Centaur is permitted is historically uncertain; playing promotion to Queen, Champion, or Centaur is recommended.

### Draw Conditions

Stalemate (draw), insufficient mating material, perpetual check, threefold repetition, and the 50-move rule all apply as in modern chess.

## Modern Variant

**Modern Carrera’s Chess** uses the same setup but applies Capablanca’s Chess rules: castling is permitted (King moves 3 squares toward the Rook), and promotion may include Champion and Centaur.

*Source: chessvariants.com/historic.dir/carrera.html*
