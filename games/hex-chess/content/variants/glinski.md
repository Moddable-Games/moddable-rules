---
title: Gliński's Hexagonal Chess
slug: glinski
board: "91 hexes (11 files a–k)"
players: "2"
parent: hex-chess
win: Checkmate
order: 1
special: "The original hexagonal chess. 9 pawns and 3 bishops per side. Pawns capture orthogonally. Stalemate splits 3/4 to 1/4. Invented Władysław Gliński, 1936."
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

**Pieces per side:** King, Queen, 2 Rooks, 3 Bishops, 2 Knights, 9 Pawns (18 pieces total).

{{svg:glinski-board.svg "Gliński's Hexagonal Chess — starting position"}}

**White pawn positions (confirmed):** b1, c2, d3, e4, f5, g4, h3, i2, j1. The pawn diagonal follows each file's second cell from the board edge, cresting at f5 (centre file, rank 5). The f5/f7 pawns have no empty cells between them — Gliński's setup brings the centre into contact earliest.

**White Queen:** e1 (confirmed from published Fool's mate: 1.Qe1c3 …).

**White centre Bishop:** f3 (confirmed from published Fool's mate: 3.Bf3b1 …). One Bishop begins on the f-file at rank 3, not at rank 1. This is the source of the "unoccupied spaces" McCooey noted behind Gliński's pawns — the f3 Bishop leaves f1 open.

> **Back rank:** Remaining back-rank piece positions (Rooks, Knights, 2nd and 3rd Bishops, King) require verification against Ludii `Glinski Chess.lud` before this file is published. White Queen at e1 and centre Bishop at f3 are source-confirmed.

### Pieces

All standard chess pieces with movement adapted for the hex grid. Three colours alternate on the board (light, mid-tone, dark). Each Bishop covers exactly one colour set.

- **Rook:** moves any number of cells orthogonally (through shared edges, along a file or rank)
- **Bishop:** moves any number of cells diagonally (through shared corners, restricted to one colour)
- **Queen:** combines Rook and Bishop movement (nine directions)
- **Knight:** unblockable (1,2) leap — always lands on a different colour
- **King:** moves one cell in any direction (six directions)

### Pawns

Pawns move one cell straight forward (through a shared edge, along the file). They capture one cell **orthogonally at 60°** — through a shared edge in a forward direction, perpendicular to the file. This is rook-direction movement, not diagonal.

A pawn on its starting rank (or on the starting rank of any friendly pawn) may move two cells straight forward. En passant applies: if a pawn makes a double step crossing an opposing pawn's attack square, the opposing pawn may capture en passant on the immediately following move.

Pawns promote upon reaching the opponent's furthest rank in their file (the 11 hexes forming the opponent's far edge).

### Rules

Identical to standard chess with these exceptions:

- **Stalemate:** the stalemated player scores 3/4 point; the player who caused the stalemate scores 1/4 point. Stalemate is not a draw.
- **No castling.**
- Check, checkmate, and all other rules follow standard chess.

### Win Condition

Checkmate.

### Attribution

Władysław Gliński, *Szachy Sześcioboczne* (Hexagonal Chess), 1936. Public domain. Sources: Wikipedia (Hexagonal chess); McCooey (chessvariants.com, 1995–2001) — back-rank structure confirmed via published Fool's mate (Glinski, *First Theories of Hexagonal Chess*, 1974, pp. 53–54).
