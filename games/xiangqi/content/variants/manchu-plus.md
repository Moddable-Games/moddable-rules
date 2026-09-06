---
playable: true
title: "Manchu+"
slug: manchu-plus
board: "9×10"
players: "2"
parent: xiangqi
win: Checkmate the General
special: "Asymmetric Xiangqi variant from the Qing Dynasty. The Manchu side loses its Horses, second Chariot, and both Cannons, gaining a single Banner piece that combines Chariot, Cannon, and Horse movement."
engine:
  topology:
    type: grid
    rows: 10
    cols: 9
  pieces:
    set: mce-xiangqi-fairy
    vocabulary:
      Z: wZ
      z: bZ
  players: [red, black]
  vocabulary:
    general: { symbols: { 0: K, 1: k } }
    advisor: { symbols: { 0: A, 1: a } }
    elephant: { symbols: { 0: E, 1: e } }
    horse: { symbols: { 0: H, 1: h } }
    chariot: { symbols: { 0: R, 1: r } }
    cannon: { symbols: { 0: C, 1: c } }
    soldier: { symbols: { 0: P, 1: p } }
    banner: { symbols: { 0: Z, 1: z } }
  plugins:
    xiangqi:
      pieceMoves:
        banner:
          type: compose
          parts:
            - { type: rider, dirs: orthogonal }
            - { type: hopper, dirs: orthogonal, captureSlide: true }
            - { type: leaper, offsets: knight, lame: orthogonal }
  setup: "r1eakae1z/9/9/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RHEAKAEHR"
---

## Manchu+

{{svg:manchu-plus-board.svg "Manchu+ — starting position"}}

Manchu Chess (満洲棋, Mǎnzhŏuqí), also known as Yitong Chess (一统棋, Yītǒngqí), is an asymmetric variant of Xiangqi created during the Qing Dynasty by the Bannermen, among whom it was one of the most popular board games. The version on PyChess is **Manchu+** — a rebalanced adaptation in which **Black** plays the Manchu side.

### The Two Armies

**Red (Standard Xiangqi):** General, 2 Advisors, 2 Elephants, 2 Horses, 2 Chariots, 2 Cannons, 5 Soldiers.

Red starts in the standard Xiangqi position.

**Black (Manchu):** General, 2 Advisors, 2 Elephants, 1 Chariot, 1 Banner, 5 Soldiers. Black has no Horses and no Cannons.

Black’s starting position mirrors standard Xiangqi except: both Horses are removed; both Cannons are removed; one Chariot is replaced by the **Banner** (placed on its starting Chariot square); the remaining Chariot stays at the other Chariot square. Black’s 5 Soldiers start on their standard Soldier squares.

### Setup

The board is the standard 9×10 Xiangqi grid with river at ranks 5–6 and palaces (a 3×3 area with diagonals) at each end.

**Red back rank (rank 1, bottom):** Chariot(a) · Horse(b) · Elephant(c) · Advisor(d) · General(e) · Advisor(f) · Elephant(g) · Horse(h) · Chariot(i)

**Red rank 3:** Cannon(b) · Cannon(h)

**Red rank 4 (Soldiers):** a4, c4, e4, g4, i4

**Black rank 10 (top, back rank):** Chariot(a) · · Elephant(c) · Advisor(d) · General(e) · Advisor(f) · Elephant(g) · · Banner(i)

*(Positions b10 and h10 are empty — no Horses.)*

**Black rank 8 (Soldiers):** a8, c8, e8, g8, i8

*(No Cannons — Black's rank 9 is empty.)*

### The Banner

The **Banner** is Black's single super-piece. It combines the movement of three standard pieces and may use any mode on any turn:

- **Chariot mode:** slides any number of squares orthogonally (like a Rook).
- **Cannon mode:** captures by jumping over exactly one screen piece; slides freely without capturing.
- **Horse mode:** one step orthogonally then one step diagonally outward (can be blocked on the orthogonal step).

The Banner may not combine modes in a single move; it chooses one mode per turn.

### Rules

All standard Xiangqi rules apply: river, palace restrictions, Flying General rule, Soldier movement (forward and sideways after crossing the river), stalemate is a loss, perpetual check is a loss for the checking side. There is no difference in rules for the two sides beyond their differing piece sets.

### Attribution

Manchu Chess is a historical Qing Dynasty game, public domain. The Manchu+ adaptation is documented from pychess.org/variants/manchu.
