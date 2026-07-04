---
title: Brusky's Hexagonal Chess
slug: brusky
board: "84 hexes (horizontal, 10 files)"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Horizontal 84-hex board. 10 pawns per side. Unmoved pawns may also capture straight forward. Blockage rule applies. Invented Yakov Brusky."
engine:
  topology:
    type: hex
    cells: 84
    orientation: horizontal
    files: 10
  players: [white, black]
published: true
---

## Brusky's Hexagonal Chess

Invented by Yakov Brusky. Played on an 84-hex horizontal board with 10 files and 10 pawns per side. Introduces an expanded pawn capture option for unmoved pawns.

### Setup

**Board:** 84-hex horizontally-oriented grid, 10 files.

**Pieces per side:** King, Queen, 2 Rooks, 2 Bishops, 2 Knights, 10 Pawns.

{{svg:brusky-board.svg "Brusky's Hexagonal Chess — starting position"}}

### Castling

Castling is permitted. The King slides two cells toward the Rook (short) or three cells (long).

### Pawns

Pawns move one cell straight forward. They capture one cell diagonally forward.

An unmoved pawn has a third option: it may capture one cell **straight forward** (the direction of its non-capturing move). This gives unmoved pawns three distinct capture directions.

**Blockage rule:** a pawn blocked by an enemy piece in one of its forward directions is considered blocked in both forward directions. The blocked pawn cannot move straight forward even if the other forward path is clear.

A pawn on its starting rank may make an initial double step. En passant applies. Draws score 1/2 to each player.

### Rules

Identical to standard chess adapted for the hex grid except as noted.

### Win Condition

Checkmate.

### Attribution

Yakov Brusky. Public domain rules.
