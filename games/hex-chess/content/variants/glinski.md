---
title: Gliński's Hexagonal Chess
slug: glinski
board: "91 hexes (11 files a–k)"
players: "2"
parent: hex-chess
win: Checkmate
order: 1
special: "The original hexagonal chess. 9 pawns per side. Pawns capture orthogonally. Stalemate splits 3/4 to 1/4. Invented Władysław Gliński, 1936."
engine:
  topology:
    type: hex
    cells: 91
    files: 11
    file_labels: ["a","b","c","d","e","f","g","h","i","j","k"]
  players: [white, black]
published: false
---

## Gliński's Hexagonal Chess

Invented by Polish architect Władysław Gliński and first published in 1936. Played on a 91-hex board with 11 files (a through k). The most widely played hexagonal chess variant.

### Setup

**Board:** 91-hex hexagonal grid. White occupies the lower ranks, Black the upper ranks.

**Pieces per side:** King, Queen, 2 Rooks, 2 Bishops, 2 Knights, 9 Pawns (17 pieces total).

{{svg:glinski-board.svg "Gliński's Hexagonal Chess — starting position"}}

> Back rank arrangement: White's Queen confirmed at e1 (from published Fool's mate). Full back rank arrangement of remaining pieces requires verification against Ludii `Glinski Chess.lud`. Do not publish until confirmed.

### Pieces

All standard chess pieces with movement adapted for the hex grid:

- **Rook:** moves any number of cells orthogonally (through shared edges, along a file or rank)
- **Bishop:** moves any number of cells diagonally (through shared corners, restricted to one colour)
- **Queen:** combines Rook and Bishop movement
- **Knight:** unblockable (1,2) leap, always landing on a different colour
- **King:** moves one cell in any direction

Three colours alternate on the board. Each Bishop covers one colour set only.

### Pawns

Pawns move one cell straight forward (through a shared edge, along the file). They capture one cell **orthogonally at 60°** — through a shared edge in a forward direction, perpendicular to the file. This is rook-direction movement, not diagonal.

A pawn on its starting rank may move two cells straight forward (double step). En passant applies. Pawns promote on reaching the opponent's furthest rank in their file.

### Rules

Identical to standard chess with these exceptions:

- **Stalemate:** the stalemated player scores 3/4 point; the player who caused the stalemate scores 1/4 point. Stalemate is not a draw.
- No castling.
- Check, checkmate, and all other rules follow standard chess.

### Win Condition

Checkmate.

### Attribution

Władysław Gliński, *Szachy Sześcioboczne* (Hexagonal Chess), 1936. Public domain.
