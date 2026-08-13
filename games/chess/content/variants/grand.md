---
playable: true
title: Grand Chess
slug: grand
board: "10×10"
players: "2"
parent: chess
win: Checkmate
special: Marshal and Cardinal on a 10×10 board, pawns start on rank 3.
engine:
  topology:
    type: grid
    rows: 10
    cols: 10
  players: [white, black]
  render:
    cellSize: 34
  setup: "r8r/1nbqkmcbn1/pppppppppp/10/10/10/10/PPPPPPPPPP/1NBQKMCBN1/R8R"
  promotionChoices: [queen, rook, bishop, knight, cardinal, marshal]
  castling: false
  pawnStartRow:
    0: 7
    1: 2
  vocabulary:
    marshal:
      symbols:
        0: M
        1: m
    cardinal:
      symbols:
        0: C
        1: c
  plugins:
    chess:
      pieces:
        marshal:
          type: compose
          parts: [rook, knight]
        cardinal:
          type: compose
          parts: [bishop, knight]
---

## Grand Chess

A 10×10 variant that adds the Archbishop and Chancellor without changing any existing piece rules. Considered one of the cleanest large-board variants — no special rules, just a bigger stage.

### Setup

**Board:** 10×10 (100 squares).

{{svg:grand-board.svg "Grand Chess — starting position (10×10)"}}

### Pieces

**Pieces (per side):** 1 King, 1 Queen, 1 Marshal, 1 Cardinal, 2 Rooks, 2 Bishops, 2 Knights, 10 Pawns.
- **Marshal** (♖+♞) — Rook + Knight compound.
- **Cardinal** (♗+♞) — Bishop + Knight compound.

**Setup:** Pawns on rank 3. Back two ranks arranged: empty corners, pieces spread across ranks 1–2 with King and Queen central.

**FEN:** `r8r/1nbqkmcbn1/pppppppppp/10/10/10/10/PPPPPPPPPP/1NBQKMCBN1/R8R w - - 0 1`

### Rules

- **No castling.** The wider board makes it unnecessary.
- **Pawn promotion:** Pawns reaching rank 8 or 9 MAY promote. Pawns reaching rank 10 MUST promote. Promotion to any captured piece only — you cannot promote if all pieces of that type are on the board.
- **En passant** works normally.
- All other standard chess rules apply.

### Win Condition

Checkmate.

### Strategy

With no castling, King safety comes from piece coordination rather than a pawn shelter. The Archbishop excels in closed positions, the Chancellor on open files. The promotion restriction (captured pieces only) means trading pieces has promotion implications — don't trade your last Knight if you might need one back via promotion.

### Attribution

Christian Freeling, 1984. Public domain.
