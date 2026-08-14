---
playable: true
title: Orda Chess
slug: orda-chess
board: "8×8"
players: "2"
parent: chess
win: Checkmate
special: "Asymmetric: White plays standard. Black commands the Horde — divergent movers that move one way and capture another."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "lhaykahl/8/pppppppp/8/8/PPPPPPPP/8/RNBQKBNR"
  castling: false
  vocabulary:
    yurt:
      symbols:
        0: Y
        1: y
    lancer:
      symbols:
        0: L
        1: l
    archer:
      symbols:
        0: H
        1: h
    kheshig:
      symbols:
        0: A
        1: a
  plugins:
    chess:
      pieces:
        yurt:
          divergent:
            move:
              type: leaper
              offsets: [[-1,-1],[-1,1],[1,-1],[1,1]]
            capture:
              type: leaper
              offsets: [[-1,0],[1,0],[0,-1],[0,1]]
        lancer:
          divergent: 
            move:
              type: leaper
              offsets: knight
            capture:
              type: rider
              dirs: orthogonal
        archer:
          divergent: 
            move:
              type: leaper
              offsets: knight
            capture:
              type: rider
              dirs: diagonal
        kheshig:
          type: compose
          parts:
            - type: leaper
              offsets: knight
            - type: rider
              dirs: all
              maxSteps: 1
---

## Orda Chess

An asymmetric variant where White plays standard chess and Black commands the Mongol Horde — pieces that move differently from how they capture.


{{svg:orda-chess-board.svg "Orda Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**White (standard):** Standard chess setup.

**Black (Horde):** Pawns on rank 7. Back rank: Lancer, Archer, Kheshig, Yurt, Khan, Kheshig, Archer, Lancer.

**FEN:** `lhaykahl/8/pppppppp/8/8/PPPPPPPP/8/RNBQKBNR w KQ - 0 1`

### Rules

**Yurt (y)** — Moves one square diagonally. Captures one square orthogonally. (Replaces the Queen.)

**Lancer (l)** — Moves like a Knight (L-shaped jump). Captures like a Rook (slides orthogonally). Cannot jump to capture.

**Archer (h)** — Moves like a Knight (L-shaped jump). Captures like a Bishop (slides diagonally). Cannot jump to capture.

**Khan (k)** — Moves and captures as a standard King.

**Kheshig (a)** — Moves and captures as a Knight and King combined.

- White can castle. Black cannot (the Khan starts on e8).
- Black's Lancers and Archers are divergent: they jump (like a Knight) for non-capturing moves but must slide to capture.
- Standard pawns for both sides.

### Win Condition

Checkmate the opponent's King/Khan.

### Strategy

Black's Lancers and Archers are mobile repositioners (knight-jump for moves) but devastating long-range attackers (rook/bishop capture). White must avoid open lines where Horde pieces can capture at distance, while exploiting their inability to slide for repositioning.

### Attribution

Designed by Couch Tomato (2020). Popularised on Pychess. Public domain.
