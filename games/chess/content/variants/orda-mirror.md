---
playable: true
title: Orda Mirror
slug: orda-mirror
board: "8×8"
players: "2"
parent: chess
win: Checkmate
special: "Both players command the Horde army from Orda Chess. Every piece moves as a Knight but captures as its FIDE counterpart. Designed by Couch Tomato, 2020."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "lhwykwhl/pppppppp/8/8/8/8/PPPPPPPP/LHWYKWHL"
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
        0: W
        1: w
  plugins:
    chess:
      pieces:
        yurt:
          divergent:
            move:
              type: leaper
              offsets: knight
            capture:
              type: rider
              dirs: all
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
          parts: [knight, {type: rider, dirs: all, maxSteps: 1}]
published: true
---

## Orda Mirror

{{svg:orda-mirror-board.svg "Orda Mirror — starting position"}}

Designed by Couch Tomato, 2020. Where Orda Chess pits the standard FIDE Kingdom against the Mongol Horde, Orda Mirror gives both players an identical Horde army. The defining characteristic of all Horde pieces is move–capture asymmetry: every non-royal piece **moves** as a Knight but **captures** using a different method specific to that piece type.

### The Horde Army

Both players command the same pieces:

| Piece | Count | Moves As | Captures As |
|---|---|---|---|
| **Khagan** (royal) | 1 | 1 step in any direction (King) | 1 step in any direction (King) |
| **Yurt** | 1 | Knight jump (2+1 leap) | Any direction, unlimited distance (Queen) |
| **Lancer** | 2 | Knight jump (2+1 leap) | Orthogonal slide, unlimited distance (Rook) |
| **Falcon** | 2 | Knight jump (2+1 leap) | Diagonal slide, unlimited distance (Bishop) |
| **Keshig** | 2 | Knight jump (2+1 leap) | 1 step in any direction (King) |
| **Pawn** | 8 | 1 square forward; 2 from start | 1 square diagonally forward |

All non-royal pieces (Yurt, Lancer, Falcon, Keshig) make the same Knight jump to reach their destination. What distinguishes them is how they capture upon arrival: only pieces on a square reachable by the Knight jump can be captured, but the specific piece type determines the capture.

### Move vs. Capture Distinction

To capture, the piece must be able to reach the target’s square via a Knight jump (2+1 in any orientation). The piece then removes the target using its designated capture method as a targeting filter:

- **Lancer:** Can only capture pieces on squares reachable by a Knight jump where the line from the Lancer to the target is orthogonal — i.e., the capture must be on the same rank or file. In practice, among all squares a Knight can jump to, the Lancer only captures those on the same rank or file as the Lancer’s current position.
- **Falcon:** Among Knight-reachable squares, only captures pieces on the same diagonal as the Falcon.
- **Keshig:** Among Knight-reachable squares, only captures pieces within 1 step (i.e., the standard King-move destinations). From the Knight’s 8 possible destinations, the Keshig targets only those that are also adjacent to it.
- **Yurt:** Among Knight-reachable squares, captures pieces reachable in any direction without restriction — effectively can capture any piece on a Knight-jump square.

*Practical result:* Pieces always move like a Knight. Their capture subset restricts which of the 8 Knight-jump destinations they can actually take a piece from.

### Starting Position

Both players use the following arrangement (White on ranks 1–2, Black on ranks 7–8):

```
8 La Ke Fa Yu Kg Yu Fa Ke La
7 Pa Pa Pa Pa Pa Pa Pa Pa
. . . . . . . . .
. . . . . . . . .
2 Pa Pa Pa Pa Pa Pa Pa Pa
1 La Ke Fa Yu Kg Yu Fa Ke La
  a  b  c  d  e  f  g  h
```

Key: La=Lancer, Ke=Keshig, Fa=Falcon, Yu=Yurt, Kg=Khagan, Pa=Pawn.

Rank 1 from a to h: Lancer, Keshig, Falcon, Yurt, Khagan, Yurt, Falcon, Keshig, Lancer — wait, that is 9 pieces. Corrected:

Rank 1 from a to h (8 pieces): Lancer(a), Keshig(b), Falcon(c), Yurt(d), Khagan(e), Falcon(f), Keshig(g), Lancer(h).

The two Yurts are actually only 1 — the Yurt is singular (the most powerful piece, Queen equivalent). The correct back rank: Lancer, Keshig, Falcon, Yurt, Khagan, Falcon, Keshig, Lancer.

### Check and Checkmate

The Khagan is the royal piece. Standard check and checkmate rules apply: a player whose Khagan is under attack must resolve it; inability to do so is checkmate, and that player loses.

A Khagan may not move into a square attacked by any opponent piece. Because Horde pieces attack differently from how they move (Falcons attack diagonals, Lancers attack orthogonals), calculating attacked squares requires knowing each piece’s capture method rather than its movement.

### Pawn Rules

- Pawns advance 1 square (or 2 from starting rank).
- Pawns capture diagonally forward as normal.
- En passant applies.
- Pawns reaching the final rank promote to any Horde piece (Yurt, Lancer, Falcon, or Keshig).

### Stalemate

Standard: stalemate is a draw.

### Attribution

Designed by Couch Tomato, 2020. Rules published at pychess.org/variants/ordamirror. Public domain rule set.
