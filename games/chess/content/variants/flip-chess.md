---
title: Flip Chess
slug: flip-chess
board: "38 squares (unusual shape)"
players: "2"
parent: chess
win: Bare King loses
special: "Chess variant on a 38-square board with an unusual shape, created by John William Brown, author of Meta-Chess, as an entry in Hans Bodlaender's 38-challenge (chessvariants.com/38.dir/flip.html, page created 1998-01-05). The mechanic it is named for: a non-King piece may transform into the corresponding piece of the other side at the end of its move. Pawns promote to Princes on the final rank, not Queens. 'Bare king loses' - a player whose King is the only piece remaining loses immediately, whether or not they are in check. A companion Flip Shogi adds drops of captured pieces."
unsupported: "`missing_squares: true` is a boolean rather than a cell list and `setup` is the standard 64-square FEN, so this loads as ordinary 8x8 chess - 64 cells, 32 pieces, 20 opening moves, measured. `voids` is the supported declaration and is honoured in play, as romanchenkos-chess demonstrates. Blocked on content, not on the engine: the 38-square shape exists only as a diagram image on chessvariants.com and cannot be read from the page text, so which 26 of the 64 squares are absent is still unknown. Beyond the shape it needs the flip transformation, promotion to Prince, and the bare-king loss condition. The attribution conflict is resolved against the sources: this variant is John William Brown's and Crazy 38s is Ben Good's, so the earlier claim that Brown wrote both was wrong."
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
