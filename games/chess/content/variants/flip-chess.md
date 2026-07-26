---
title: Flip Chess
slug: flip-chess
board: "38 squares (unusual shape)"
players: "2"
parent: chess
win: Bare King loses
special: "Chess variant on a 38-square board with an unusual shape. 'Bare king loses' — a player whose King is the only piece remaining loses immediately, regardless of whether they are in check. No initial double Pawn moves. Companion to Crazy 38's (both are 38-square chess variants by John William Brown). Acclaimed 38-square variant; Java applet implementation by Ed Friedlander on chessvariants.com. Created 1999."
engine:
  topology:
    type: grid
    cells: 38
    missing_squares: true
  players: [white, black]
  setup: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
  notation: algebraic
published: true
---

## Flip Chess

{{svg:flip-chess-board.svg "Flip Chess — starting position"}}

Flip Chess is a chess variant played on a **38-square board** with an unusual shape. Created by John William Brown in 1999, it is a companion game to **Crazy 38's** — both are 38-square chess variants in the tradition of exploring compact, non-standard board geometries. A Java applet implementation by Ed Friedlander is available on chessvariants.com.

### The Board

A 38-square board with an unusual non-rectangular shape. The board has 38 squares — 6 fewer than a standard 8×8 chess board. The compact geometry brings all pieces into conflict earlier in the game and reduces the positional depth of standard chess openings.

### The Bare King Rule

Flip Chess does **not** use standard checkmate as its win condition. Instead:

**A player whose King is the only piece remaining on the board loses immediately.**

This applies regardless of whether the King is in check. Once all other pieces have been captured, the lone King loses. This shifts strategy significantly: rather than manoeuvring toward checkmate, players focus on eliminating all enemy pieces, and Kings become active fighting pieces since their loss is a forfeit condition once they are the last piece.

### Special Rules

- **No initial double Pawn move.** Pawns may advance only one square on their first move, as in Shatranj. There is consequently no en passant.
- **Win condition:** Bare King (reduce opponent to King only); standard checkmate does not apply
- All other standard chess movement rules apply unless modified above

### Piece Set

Standard FIDE piece set (King, Queen, Rooks, Bishops, Knights, Pawns).

### Attribution

Flip Chess was created by John William Brown, 1999. Described as an 'acclaimed 38 square variant.' Java applet implementation by Ed Friedlander. Source: chessvariants.com/play/erf/FlipChss.html
