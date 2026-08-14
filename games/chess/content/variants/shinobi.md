---
playable: true
title: Shinobi Chess
slug: shinobi
board: "8×8"
players: "2"
parent: chess
win: Checkmate
special: "Asymmetric: FIDE Kingdom vs. Shinobi Clan. Shinobi starts with fewer pieces but gains new pieces by dropping clan members held in hand. Shinobi pieces promote on reaching the promotion zone. Designed by Couch Tomato, 2021."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "cmujumc1/2pppp2/8/8/8/8/PPPPPPPP/RNBQKBNR"
  notation: algebraic
  asymmetric: true
  hand: true
  drops: true
  promotion_zone: [6, 7, 8]
  vocabulary:
    chunin:
      symbols:
        0: C
        1: c
    monk:
      symbols:
        0: M
        1: m
    kunoichi:
      symbols:
        0: U
        1: u
    jonin:
      symbols:
        0: J
        1: j
  plugins:
    chess:
      pieces:
        chunin:
          type: rider
          dirs: [[-1, 0]]
          directional: true
        monk:
          type: leaper
          offsets: knight
        kunoichi:
          type: rider
          dirs: diagonal
        jonin:
          type: rider
          dirs: all
          maxSteps: 1
          type: compose
          parts:
            - type: rider
              dirs: diagonal
              maxSteps: 1
            - type: leaper
              offsets: knight
published: true
---

## Shinobi Chess

{{svg:shinobi-board.svg "Shinobi Chess — starting position"}}

Designed by Couch Tomato, 2021. Shinobi Chess is asymmetric: White commands a standard FIDE Kingdom; Black commands a Shinobi Clan that begins with fewer pieces on the board but holds a hand of additional clan members that can be dropped during play, Shogi-style.

### The Two Armies

**Kingdom (White):** Standard FIDE. King, Queen, 2 Rooks, 2 Bishops, 2 Knights, 8 Pawns.

**Shinobi Clan (Black):** Starts with fewer pieces on the board; holds additional pieces in hand for dropping. Shinobi pieces promote automatically on entering ranks 6, 7, or 8.

### Shinobi Pieces

| Base Piece | Count on Board | In Hand (drops) | Movement | Promoted Form | Promoted Movement |
|---|---|---|---|---|---|
| **Jonin** (Captain, royal) | 1 | — | 1 step any direction (King) | — (does not promote) | — |
| **Chunin** (Lance) | 2 | 0 | Slides forward any distance; cannot move sideways or backward. | Ninja | 1 step diag or 1 step forward (Gold General) |
| **Monk** | 2 | 2 | Jumps as Knight. | Sacred Horse | Slides diagonally unlimited (Bishop). |
| **Ninja** | 0 | 2 | 1 step diagonally, OR jumps as Knight (combined ferz + Knight). | Jonin | Promotes to Jonin form on reaching zone. |
| **Kunoichi** | 1 | 1 | Slides diagonally unlimited (Bishop). | Kunoichi+ | Adds 1-step orthogonal moves. |
| **Pawn** | 4 | 4 | 1 square forward; captures 1 diagonal forward. No double step. Promotes on rank 8. | Pawn+ | 1 step ortho forward or backward, 1 step diag forward (Gold Pawn). |

### Shinobi Starting Position (Black)

```
8  .  Mn  Cn  Jn  Cn  Mn  .
7  .  .   Pa  Pa  Pa  Pa  .  .
```
Rank 8 from a to h: empty, Monk(b), Chunin(c), Jonin(d)... (exact arrangement: Chunin(a), Monk(b), empty(c), Jonin(d), empty(e), Monk(f), Chunin(g), empty(h) — 7 pieces for 8 squares with one gap.)

Actual Shinobi back rank (rank 8): Chunin(a), Monk(b), Kunoichi(c), Jonin(d), Kunoichi(e), Monk(f), Chunin(g) — with h8 empty.
Rank 7: Pawns on c7, d7, e7, f7; a7, b7, g7, h7 are empty.

Hand at game start: 2 Ninjas, 2 Monks, 4 Pawns.

### Kingdom Starting Position (White)

Standard FIDE:
```
1 ♖ ♘ ♗ ♕ ♔ ♗ ♘ ♖
2 ♙ ♙ ♙ ♙ ♙ ♙ ♙ ♙
```

### Drop Rules

On any turn, instead of moving a board piece, the Shinobi player may drop one piece from hand onto any empty square subject to:
- Drops may not be made onto the promotion zone (ranks 6–8).
- Pawns may not be dropped onto a file already containing a friendly Pawn.
- A Pawn drop cannot deliver immediate checkmate (check without checkmate is permitted).
- Dropped pieces enter at their base (unpromoted) form and do not promote until they move into the zone.

### Promotion

Shinobi pieces promote automatically on entering or moving within ranks 6, 7, or 8. Promotion is mandatory and immediate. Captured promoted pieces revert to base form and are not added to the hand (only base Shinobi pieces are captured and held).

### Check, Checkmate, Stalemate

The Jonin is the royal piece — check, checkmate, and stalemate rules apply to the Jonin as they would to a King. The FIDE King is subject to standard rules. Stalemate is a draw.

### Attribution

Designed by Couch Tomato, 2021. Rules published at pychess.org/variants/shinobi. Public domain rule set.
