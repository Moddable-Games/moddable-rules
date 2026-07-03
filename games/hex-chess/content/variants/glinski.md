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

**Board:** 91-hex hexagonal grid. White occupies the lower ranks, Black the upper ranks. File lengths: a=6, b=7, c=8, d=9, e=10, f=11, g=10, h=9, i=8, j=7, k=6. All files begin at rank 1.

**Pieces per side:** King, Queen, 2 Rooks, 3 Bishops, 2 Knights, 9 Pawns (18 pieces total).

{{svg:glinski-board.svg "Gliński's Hexagonal Chess — starting position"}}

**White starting positions:**

| Piece | Square |
|-------|--------|
| Rook | a1, k1 |
| Knight | c1, h1 |
| Bishop | d1, g1, f3 |
| Queen | e1 |
| King | f1 |
| Pawns | b1, c2, d3, e4, f5, g4, h3, i2, j1 |

Black's setup mirrors White's symmetrically. Black Queen at e10, centre Bishop at f9, King at f11.

The pawn diagonal crests at f5 (centre file). The f5 and f7 pawns are separated by a single empty hex (f6), bringing the centre into contact earlier than in McCooey's variant. The centre Bishop at f3 (not f1) leaves f1 open — the source of the "unoccupied spaces behind the pawns" noted by McCooey.

### Pieces

All standard chess pieces with movement adapted for the hex grid. Three colours alternate on the board (light, mid-tone, dark). Each Bishop covers exactly one colour set.

- **Rook:** moves any number of cells orthogonally (through shared edges)
- **Bishop:** moves any number of cells diagonally (through shared corners, colour-bound)
- **Queen:** combines Rook and Bishop — nine directions of movement
- **Knight:** unblockable (1,2) leap — always lands on a different colour
- **King:** one cell in any direction (six directions)

### Pawns

Pawns move one cell straight forward (along the file, through a shared edge). They capture one cell **orthogonally at 60°** — through a shared edge in a forward-lateral direction. This is rook-direction movement, not diagonal. This is the primary difference from McCooey's variant, where pawns capture diagonally (bishop-direction).

A pawn on its starting rank, or on the starting rank of any friendly pawn, may advance two cells. En passant applies: a pawn making a double step that crosses an opposing pawn's attack square may be captured en passant on the immediately following move.

Pawns promote on reaching the opponent's furthest rank in their file.

### Rules

Identical to standard chess with these exceptions:

- **Stalemate:** the stalemated player scores 3/4 point; the player who caused the stalemate scores 1/4 point. Not a draw.
- **No castling.**

### Win Condition

Checkmate.

### Attribution

Władysław Gliński, *Szachy Sześcioboczne* (Hexagonal Chess), 1936. Public domain. Starting position verified from the moddable-engine implementation and confirmed against published Fool's mate (*First Theories of Hexagonal Chess*, Gliński, 1974, pp. 53–54).
