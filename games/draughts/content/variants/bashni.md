---
playable: false
title: Bashni
slug: bashni
board: "8×8"
players: "2"
parent: draughts
order: 15
win: Leave the opponent with no legal move
special: "Russian Draughts with towers. A captured piece is not removed: it goes to the BOTTOM of the capturing column. Only the top piece of a column is ever captured, and whoever is on top owns and commands the column."
verified:
  date: "2026-08-31"
  method: "Desktop web research against the sources below; every rule statement in this file is traceable to one of them."
  sources:
    - "https://en.wikipedia.org/wiki/Bashni"
    - "https://draughts.github.io/bashni.html"
    - "https://www.iggamecenter.com/en/rules/bashni"
    - "https://www.zpag.net/Jeux/Dame/Bashni_Towers_draughts.pdf"
    - "https://mindsports.nl/index.php/on-the-evolution-of-draughts-variants/116-column-checkers"
  unverified:
    - "Maximum column height. No source states any limit; the theoretical maximum is 24. Do not assume a cap."
    - "Whether prisoners join the capturing column after each hop of a multi-jump, or all at once at the end. This changes the resulting column ORDER and is unresolved by every source consulted."
    - "Whether the same enemy column may be jumped more than once in one sequence. Russian Draughts forbids re-jumping a piece, but here the victim's top piece changes after each jump, so the rule's application is genuinely unclear."
    - "Whether a man promoting mid-sequence continues as a king. iggamecenter says promotion works 'exactly the same way as in Russian Checkers', which implies yes, but no source states it for Bashni."
    - "Whether maximal capture is required. Russian Draughts does not require it, and no source addresses it for Bashni."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "1b1b1b1b/b1b1b1b1/1b1b1b1b/8/8/w1w1w1w1/1w1w1w1w/w1w1w1w1"
unsupported: "A square must hold an ORDERED STACK of pieces rather than one piece, and nothing is ever removed from the board. Capture moves the victim's top piece to the bottom of the capturer's column; ownership, move type and promotion all read the column's top piece. Material evaluation counts tops of columns, not pieces, because a buried man is still on the board and can be freed later."
---

## Bashni

Russian Draughts played with towers. Nothing is ever taken off the board: a captured piece is imprisoned beneath the piece that took it, and can be freed again if the jailer is itself captured. Bashni (башни, "towers") is the predecessor of Lasca.

{{svg:english-board.svg "Bashni — starting position"}}

### Setup

Ordinary 64-square board, play on the dark squares. Twelve pieces per player on the three rows nearest them. White moves first.

### Columns

A **column** is a stack of one or more pieces on a single square.

- **The column belongs to the player whose piece is on top.** Ownership changes the moment the top piece changes.
- **The column moves as its top piece moves** — as a man if a man is on top, as a king if a king is on top.
- **A column always moves as one unit.** The pieces beneath travel with it.

### Movement

- A man moves one square diagonally forward.
- A king moves diagonally, forwards or backwards, any distance across unoccupied squares. Kings fly.

### Capture

Capture is compulsory. Men capture both forwards and backwards; kings jump in both directions and may come to rest on any empty square beyond.

The stacking rules are the whole game:

- **A captured piece is not removed.** It is placed **below the capturing column**, at the bottom.
- **Only the topmost piece of a captured column is taken.** The rest of that column stays where it is, and is now commanded by whoever has been uncovered.
- **In a multiple capture, prisoners are placed at the bottom in the order they were taken.**

So a capture never reduces the number of pieces in play. It transfers one piece from the top of one column to the bottom of another, and may hand control of the remainder to the other player.

### Promotion

A man that reaches the far rank is crowned — **but only if it is the top piece of its column.** Pieces buried in a column are not promoted by the column reaching the back rank.

### Winning

A player with no legal move loses. Because pieces are never removed, this is reached by burial and blockade rather than by elimination.

### Attribution

Traditional Russian variant, public domain. Ancestor of Emanuel Lasker's Lasca.
