---
playable: true
title: Synochess
slug: synochess
board: "8×8"
players: "2"
parent: chess
win: Checkmate or Faceoff
special: "Asymmetric: Western (FIDE) vs. Eastern dynasty (Xiangqi-derived pieces, Cannon, Chariot, Soldier drops). Faceoff rule ends the game if royal pieces face each other unobstructed. Designed by Couch Tomato, 2020."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rheachhr/2n2n2/8/8/8/8/PPPPPPPP/RNBQKBNR"
  notation: algebraic
  asymmetric: true
  hand: true
  drops: true
  faceoff: true
  vocabulary:
    horse:
      symbols:
        0: H
        1: h
    xiangqiElephant:
      symbols:
        0: E
        1: e
    advisor:
      symbols:
        0: A
        1: a
    chancellor:
      symbols:
        0: C
        1: c
  plugins:
    chess:
      pieces:
        horse:
          type: leaper
          offsets: knight
        xiangqiElephant:
          type: leaper
          offsets: elephant
        advisor:
          type: rider
          dirs: diagonal
          maxSteps: 1
        chancellor:
          type: rider
          dirs: all
          maxSteps: 1
published: true
---

## Synochess

{{svg:synochess-board.svg "Synochess — starting position"}}

Designed by Couch Tomato, 2020. Synochess pits the Western chess tradition against an Eastern dynasty drawn from Xiangqi (Chinese Chess). The two armies differ completely in piece movement, and the Eastern side begins with Soldiers held in hand rather than Pawns on the board.

### The Two Armies

**Western Army (White):** Standard FIDE. King, Queen, 2 Rooks, 2 Bishops, 2 Knights, 8 Pawns. All standard chess rules apply to the Western army.

**Eastern Army (Black):** Xiangqi-derived pieces. No Pawns on the board at game start — Soldiers are held in hand and dropped during play.

### Eastern Pieces

| Piece | Symbol | Movement |
|---|---|---|
| Chancellor | C | 1 square in any direction (the Eastern royal piece). |
| Chariot | R | Slides orthogonally any distance (identical to Rook). |
| Horse | H | 1 square orthogonally then 1 square diagonally outward. Can be blocked: if the orthogonal square is occupied, the Horse cannot move in that direction. |
| Cannon | N | Slides orthogonally any distance to move. To capture, must jump over exactly one intervening piece (the "platform") and remove the first piece beyond it. |
| Elephant | E | Leaps exactly 2 squares diagonally. Can be blocked if the intermediate diagonal square is occupied. Cannot cross rank 5 (the river). |
| Advisor | A | 1 square diagonally. Confined to the palace (the 2×3 region d7–f8 for Black). |

### Eastern Starting Position

Black's starting position on ranks 7–8:

```
8 Ch H E A C A E H Ch   (Chariot-Horse-Elephant-Advisor-Chancellor-Advisor-Elephant-Horse-Chariot, 9 pieces on 8 squares)
```

Actual rank 8 from a to h: Chariot(a), Horse(b), Elephant(c), Advisor(d), Chancellor(e), Advisor(f), Horse(g), Chariot(h).
Rank 7: Cannons on c7 and f7. No other pieces on rank 7.

Black begins with 6 Soldiers in hand (off the board).

### Soldier Drops

The Eastern player's primary pawn-substitute is the Soldier, held in hand.

**Drop rules:**
- On any turn, instead of moving a piece, Black may drop one Soldier onto any empty square on rank 5 only.
- Soldiers move 1 square forward or 1 square sideways (not diagonally, not backward).
- Soldiers promote on reaching rank 1 to any Eastern piece except Chancellor.
- All 6 Soldiers must be dropped before Black's hand is empty; pieces cannot be dropped on ranks other than 5.

### The Faceoff Rule

If the Western King and the Eastern Chancellor are on the same file with no pieces between them — facing each other directly along an open file — the player who created that open-file confrontation (i.e., the player who just moved to create the faceoff) loses immediately. Both players must avoid creating or allowing this position.

This mirrors the Flying General rule in Xiangqi.

### Win Conditions

- **Checkmate** the opponent's royal piece (Western King or Eastern Chancellor).
- **Faceoff** — creating an open-file confrontation between the two royal pieces immediately loses for the player who caused it.

### Stalemate

Standard: if a player has no legal move and is not in check, the game is a draw.

### Western Army Rules

All standard FIDE rules apply: castling, en passant, pawn promotion. The Western King may not move into a faceoff position.

### Attribution

Designed by Couch Tomato, 2020. Rules published at pychess.org/variants/synochess.
