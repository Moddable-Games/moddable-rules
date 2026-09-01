---
playable: false
title: Lasca
slug: lasca
board: "7×7"
players: "2"
parent: draughts
order: 5
win: Leave the opponent with no legal move
special: "Emanuel Lasker's column game. Same stacking as Bashni but built on ENGLISH draughts: soldiers do not capture backwards, officers do not fly, and promotion ends the turn."
verified:
  date: "2026-08-31"
  method: "Desktop web research against the sources below; every rule statement in this file is traceable to one of them."
  sources:
    - "https://en.wikipedia.org/wiki/Lasca"
    - "https://www.iggamecenter.com/en/rules/lasca"
    - "https://www.mindsports.nl/index.php/on-the-evolution-of-draughts-variants/487-lasca"
    - "https://draughts.github.io/lasca.html"
    - "https://mindsports.nl/index.php/on-the-evolution-of-draughts-variants/116-column-checkers"
  decisions:
    - "The square-by-square starting layout is derived, not quoted. On a 7x7 with 25 playable squares the rows alternate 4/3/4/3/4/3/4, so three rows nearest each player is 4+3+4 = 11 pieces, matching the sourced count, and the middle row of 3 is empty."
  unverified:
    - "Maximum column height. No source states one. lasca.org, which most likely carries Lasker's original rules, is blocked by robots.txt."
    - "Whether maximal capture is required when several captures are available. English Draughts does not require it and no source addresses it for Lasca."
    - "Timing of the prisoner transfer during a multi-jump, as with Bashni."
engine:
  topology:
    type: grid
    rows: 7
    cols: 7
  players: [white, black]
  setup: "1b1b1b1/b1b1b1b/1b1b1b1/7/1w1w1w1/w1w1w1w/1w1w1w1"
unsupported: "The same ordered-stack board as Bashni, but with an English Draughts move generator over it: soldiers do not capture backwards, officers step one square rather than flying, and promotion ends the turn immediately even if further captures appear available."
---

## Lasca

Emanuel Lasker's column game, published in 1911 and named after him. He took draughts, shrank the board to 7×7, and made captures imprison rather than remove — so material is never destroyed, only buried.

{{svg:lasca-board.svg "Lasca — starting position"}}

### Setup

7×7 board, play on 25 of the 49 squares. Eleven pieces per player on the three rows nearest them; the middle row is empty.

Pieces are **soldiers** until they reach the far rank, when they become **officers**.

### Columns

Identical in structure to Bashni:

- **A column is controlled by the player whose piece is on top**, and moves according to that piece.
- **A captured piece is placed below the capturing column**, at the bottom.
- **Only the top piece of a captured column is taken.** What remains stays on the square, under new command.
- **In a multiple capture, prisoners are placed at the bottom in the order taken.**

### Where Lasca differs from Bashni

Both games stack identically. Everything else differs, because Lasca is built on English Draughts and Bashni on Russian:

| | Lasca | Bashni |
|---|---|---|
| Board | 7×7, 25 squares | 8×8, 32 squares |
| Pieces per side | 11 | 12 |
| Soldiers capture backwards | **No** | Yes |
| Kings fly | **No** — officers step one square | Yes |
| Promotion mid-capture | **Ends the turn** | Continues (see Bashni) |

A column whose top piece is a soldier cannot capture backwards, so a player whose top man is taken cannot immediately take back — unless the piece uncovered beneath is an officer.

### Capture

Compulsory. If a further capture is available with the same piece after one is made, it must also be taken — except where promotion has ended the turn.

### Promotion

A soldier reaching the last row is crowned officer, and **the move ends there**, even if more captures appear to be available. Only the top piece of a column is crowned.

### Winning

A player wins when the opponent has no legal move, has no pieces left in play, or resigns.

### Attribution

Emanuel Lasker, 1911. Derived from Bashni. Public domain.
