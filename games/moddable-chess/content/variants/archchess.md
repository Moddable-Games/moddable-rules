---
title: Archchess
slug: archchess
board: "10×10"
players: "2"
parent: moddable-chess
win: Checkmate (stalemate is a draw)
special: "10×10 chess variant by Dr. Francesco Piacenza (Turin, 1683). Adds two new pieces per side: the Centurion (Dabbaba + Alfil + Knight compound; can jump) and the Decurion (one square diagonally). Pawns always promote to Queen. Unusual flexible castling rules including a King’s Leap option."
engine:
  topology:
    type: grid
    rows: 10
    cols: 10
  players: [white, black]
  render:
    cellSize: 30
  setup: "rnbckqdbNR/pppppppppp/10/10/10/10/10/10/PPPPPPPPPP/RNBDQKCBNR"
---

## Archchess

{{svg:archchess-board.svg "Archchess — starting position"}}

Archchess (Italian: *Arcisacchiere*) was invented by Dr. Francesco Piacenza and described in his book *I camoeggiamenti degle Scacchi*, published in Turin in 1683. It is played on a 10×10 board and adds two new piece types — the Centurion and the Decurion — plus two extra Pawns per side, to an otherwise standard chess army.

The rules described here are based on materials written by John Gollon (draft chapters of an unpublished second chess variant book), transmitted to Hans Bodlaender via Eric Greenwood in 1997.

### The Board

10 files (a–j) × 10 ranks = 100 squares. Left corners at each player’s side are dark colored.

### Starting Position

**White (rank 1):** Rook a1 · Knight b1 · Bishop c1 · Centurion d1 · King e1 · Queen f1 · Decurion g1 · Bishop h1 · Knight i1 · Rook j1

**White pawns (rank 2):** a2–j2 (10 pawns)

**Black (rank 10):** Rook a10 · Knight b10 · Bishop c10 · Centurion d10 · King e10 · Queen f10 · Decurion g10 · Bishop h10 · Knight i10 · Rook j10

**Black pawns (rank 9):** a9–j9 (10 pawns)

### Pieces

| Piece | Movement |
|---|---|
| King | One square in any direction |
| Queen | Slides any distance orthogonally or diagonally |
| Rook | Slides any distance orthogonally |
| Bishop | Slides any distance diagonally |
| Knight | L-shaped leap |
| Pawn | One square forward; captures diagonally; double first step permitted (see en passant exception) |
| **Centurion** | Leaps exactly 2 squares horizontally, vertically, or diagonally (Dabbaba + Alfil), **or** leaps as a Knight. May jump over intervening pieces in all cases. |
| **Decurion** | Moves one square diagonally (= Fers) |

### Promotion

Pawns reaching the last rank **always promote to Queen**. No other promotion choice is available.

### Castling and the King’s Leap

Castling in Archchess is flexible: the Rook moves one or more squares toward the King’s original square, and the King moves one or more squares toward the Rook’s original square. As an alternative to castling, the King may make a **King’s Leap**: a jump of two squares straight forward or horizontally.

Conditions for either option: the King must not have moved previously; the castling Rook must not have moved; no square the King crosses is attacked by an opponent’s piece; the King does not land in check. Whether being in check prevents castling or the King’s Leap is not specified in the source.

### En Passant Exception

Pawns may make a double first step, **except** when both of the following are simultaneously true: the pawn could be captured en passant by the standard rules, and the double step would block a check on the King. In that specific case, the double step is not permitted.

### Special Rules

- **Stalemate** is a **draw**.
- **Win** by checkmate only.
- **No bare King rule.**

### Attribution

Archchess (*Arcisacchiere*) by Francesco Piacenza, 1683. Rules documented at chessvariants.com/historic.dir/arch.html (Hans Bodlaender, from Gollon via Greenwood, 1997).
