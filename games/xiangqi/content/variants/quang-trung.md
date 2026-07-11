---
title: Quang Trung Chess
slug: quang-trung
board: 10×10
players: 2
parent: xiangqi
win: Checkmate the General, or advance a Pawn to the last rank where it cannot be immediately captured
special: "Vietnamese 10×10 variant with novel piece types. Pawns and General restricted to central files; advancing a Pawn to the last rank wins."
engine:
  topology:
    type: grid
    rows: 10
    cols: 10
  players: [red, black]
  setup: "rheaakaehr/10/1c6c1/p1p1pp1p1p/10/10/P1P1PP1P1P/1C6C1/10/RHEAAKAEHR"
  render:
    cellSize: 30
---

## Overview

Quang Trung Chess (Cờ Quang Trung) was designed by Vu Q. Vo, with the concept begun in July 1992 and the first edition completed March 3, 1999. It is named in honor of Emperor Quang Trung (Nguyễn Huệ, reigned 1788–1792), a Vietnamese military hero of the late 18th century. The game was submitted to a Chess Variant Pages contest in 1999.

Three of the seven piece types are adapted from other chess traditions: the Cannon from FIDE Chess (but moving diagonally), the Elephant from Tamerlane Chess, and the Knight from Chinese Chess. The remaining four — Chariot, General, Counsellor, and Pawn — are the designer's original inventions. The game eliminates pawn promotion entirely, replacing it with a pawn-advance victory condition.

## Board and Setup

Played on a checkered 10×10 board (files a–j, ranks 1–10). White occupies the bottom, moves first. Pieces occupy squares, not intersections.

The **General and Pawns are restricted to the middle section (files c–h) at all times.** Other pieces may occupy any file.

**White:**
- Rank 1: Chariot(a1) Knight(b1) Elephant(c1) Cannon(d1) General(e1) Counsellor(f1) Cannon(g1) Elephant(h1) Knight(i1) Chariot(j1)
- Rank 3: Pawn(c3) Pawn(d3) Pawn(e3) Pawn(f3) Pawn(g3) Pawn(h3)

**Black (mirrored):**
- Rank 10: Chariot(a10) Knight(b10) Elephant(c10) Cannon(d10) General(e10) Counsellor(f10) Cannon(g10) Elephant(h10) Knight(i10) Chariot(j10)
- Rank 8: Pawn(c8) Pawn(d8) Pawn(e8) Pawn(f8) Pawn(g8) Pawn(h8)

## Pieces

**General (royal)** — The General moves and captures by making exactly one diagonal step followed immediately by exactly one orthogonal step, in that order. Both steps must reach legal squares (first step to a vacant square, second step to a vacant or enemy square to capture). The General cannot skip the diagonal step. Because of this movement pattern, the General can naturally deliver check to the enemy General. The General must remain within files c–h throughout the game.

**Counsellor** — Jumps exactly 3 squares orthogonally (in any of the four cardinal directions) or exactly 2 squares diagonally (in any of the four diagonal directions). The Counsellor may jump over intervening pieces.

**Knight** — Moves as the Xiangqi Horse: first one square orthogonally to a vacant square, then one square diagonally outward. Can be blocked by a piece occupying the first (orthogonal) square.

**Cannon** — Moves and captures any number of squares diagonally, sliding like a FIDE Bishop. Does not jump. Note: this is not the Chinese Chess Cannon — it has no screen-capture mechanic.

**Elephant** — Jumps from its starting square to a destination that is 2 squares orthogonally and 1 square diagonally outward (equivalent to the Camel piece in Tamerlane Chess: a (2,1) jump but in a bent path). May jump over any intervening pieces.

**Chariot** — Slides any number of squares orthogonally when not capturing. To capture, the Chariot jumps over the target enemy piece and lands on the vacant square immediately beyond. The square beyond the target must be empty; otherwise the capture is illegal. (Normal sliding movement to an empty square is unaffected.)

**Pawn** — Moves and captures one square diagonally forward. On its first move only, may advance two squares straight forward without capturing or jumping. The Pawn must remain in files c–h; it cannot enter files a, b, i, or j. There is no promotion. When a Pawn reaches the opponent's last rank, see Win Conditions below.

## Rules

No castling. No en passant. No pawn promotion.

**Middle section restriction:** The General and all Pawns must remain in files c–h at all times. Any move that would take a General or Pawn outside this zone is illegal.

**Stalemate:** Draw.

## Win Conditions

1. **Checkmate the General** — the opponent's General is under attack and has no legal move to escape.
2. **Pawn advance win** — a Pawn reaches the opponent's last rank in such a position that it cannot be immediately captured on the opponent's next move. This automatically wins the game.

## Attribution

Quang Trung Chess was designed by Vu Q. Vo. WWW page created May 12, 1999; last modified November 27, 2000. Rules documented from chessvariants.com/large.dir/contest/qtchess.html.
