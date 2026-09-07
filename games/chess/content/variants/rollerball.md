---
playable: true
title: Rollerball
slug: rollerball
board: "40-square ring (7×7 minus 3×3 centre)"
players: "2"
parent: chess
win: Checkmate the King, OR King clockwise-reaches opponent's King starting square
special: "Chess variant on a 40-square ring board (7×7 grid with 3×3 centre removed). Two concentric rings: outer (24 squares) and inner (16 squares). Each side has only 6 pieces: King, Bishop, 2 Rooks, 2 Pawns. Pieces move clockwise-dominant (most cannot slide backward). Jean-Louis Cazaux, 1999, 40-squares contest."
approximations:
  - feature: "The Rook's and Bishop's rebound"
    source: "On the external ring the Rook has one rebound allowed on the corners of the board, and the Bishop one rebound on the sides, external and internal. A Rook on g1 therefore sweeps the whole of rank 1, turns at a1 and continues up the entire a-file."
    engine: "Not modelled. A slide stops at the edge."
    blocker: "A ray that turns when it reaches the edge of the board is a new kind of ray. Every primitive walks a fixed direction until something stops it."
  - feature: "Pawn promotion"
    source: "When reaching the starting square of opposite Pawns a pawn promotes to either a Rook or a Bishop."
    engine: "Not implemented. A pawn that reaches those squares stays a pawn."
    blocker: "This pawn is declared as an ordinary piece, because its movement turns with the zone and the pawn generator has one forward direction per seat. Promotion lives in that generator."
  - feature: "Winning by circuit"
    source: "A player also wins when their King reaches the starting square of the opposite King, but only if it had turned clockwise."
    engine: "Not implemented. Only checkmate ends the game."
    blocker: "Needs a per-piece record of the direction it has travelled around the ring, which no piece carries."
engine:
  topology:
    type: grid
    rows: 7
    cols: 7
    voids: [[2,2],[2,3],[2,4],[3,2],[3,3],[3,4],[4,2],[4,3],[4,4]]
  players: [white, black]
  notation: algebraic
  render:
    zones:
      voids: [[2,2],[2,3],[2,4],[3,2],[3,3],[3,4],[4,2],[4,3],[4,4]]
  plugins:
    chess:
      # Rollerball has no castling. It was being offered one, inherited from the
      # chess family's default.
      castling: false
      # The board is a racetrack and play runs clockwise, so "forward" is a
      # property of the square a piece stands on rather than of the seat that
      # owns it - both players move the same way round. The four zones the
      # source names are wedges of the ring: a square belongs to its nearest
      # edge, and a corner belongs to the zone it turns INTO going clockwise
      # (North -> East -> South -> West).
      #
      # Verified against all five pawn diagrams published with the rules at
      # chessvariants.com/40.dir/rollerball/: c1, c2, b1, a1 and b2.
      regions:
        north: { cells: [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [1, 3], [1, 4]] }
        east: { cells: [[0, 6], [1, 5], [1, 6], [2, 5], [2, 6], [3, 5], [3, 6], [4, 5], [4, 6], [5, 5], [5, 6], [6, 6]] }
        south: { cells: [[5, 2], [5, 3], [5, 4], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5]] }
        west: { cells: [[0, 0], [1, 0], [1, 1], [2, 0], [2, 1], [3, 0], [3, 1], [4, 0], [4, 1], [5, 0], [5, 1], [6, 0]] }
      pieces:
        # "Rook: slides any number of squares forward or sideways along the row
        # or column. Also, it can move 1 square only orthogonally backward. It
        # never slides backward." Sideways is the axis across the direction of
        # travel, so it turns with the zone exactly as forward does.
        rook:
          type: positional
          cases:
            - in: north
              move:
                type: compose
                parts:
                  - { type: rider, dirs: [[0, 1]] }
                  - { type: rider, dirs: [[-1, 0], [1, 0]] }
                  - { type: leaper, offsets: [[0, -1]] }
            - in: east
              move:
                type: compose
                parts:
                  - { type: rider, dirs: [[1, 0]] }
                  - { type: rider, dirs: [[0, -1], [0, 1]] }
                  - { type: leaper, offsets: [[-1, 0]] }
            - in: south
              move:
                type: compose
                parts:
                  - { type: rider, dirs: [[0, -1]] }
                  - { type: rider, dirs: [[-1, 0], [1, 0]] }
                  - { type: leaper, offsets: [[0, 1]] }
            - in: west
              move:
                type: compose
                parts:
                  - { type: rider, dirs: [[-1, 0]] }
                  - { type: rider, dirs: [[0, -1], [0, 1]] }
                  - { type: leaper, offsets: [[1, 0]] }
        # "Bishop: slides diagonally forward any number of squares... Also, it
        # can move 1 square diagonally backward. It never slides diagonally
        # backward."
        bishop:
          type: positional
          cases:
            - in: north
              move:
                type: compose
                parts:
                  - { type: rider, dirs: [[-1, 1], [1, 1]] }
                  - { type: leaper, offsets: [[-1, -1], [1, -1]] }
            - in: east
              move:
                type: compose
                parts:
                  - { type: rider, dirs: [[1, -1], [1, 1]] }
                  - { type: leaper, offsets: [[-1, -1], [-1, 1]] }
            - in: south
              move:
                type: compose
                parts:
                  - { type: rider, dirs: [[-1, -1], [1, -1]] }
                  - { type: leaper, offsets: [[-1, 1], [1, 1]] }
            - in: west
              move:
                type: compose
                parts:
                  - { type: rider, dirs: [[-1, -1], [-1, 1]] }
                  - { type: leaper, offsets: [[1, -1], [1, 1]] }
        # "Pawn: moves and captures forward straight or diagonally." Forward is
        # clockwise, so it turns with the zone. Not a chess pawn in any respect
        # except that it is the weakest piece: it captures the way it moves, has
        # no double step, and no en passant.
        pawn:
          type: positional
          cases:
            - in: north
              move: { type: leaper, offsets: [[0, 1], [-1, 1], [1, 1]] }
            - in: east
              move: { type: leaper, offsets: [[1, 0], [1, -1], [1, 1]] }
            - in: south
              move: { type: leaper, offsets: [[0, -1], [-1, -1], [1, -1]] }
            - in: west
              move: { type: leaper, offsets: [[-1, 0], [-1, -1], [-1, 1]] }
  setup: "2rbp2/2rkp2/7/7/7/2PKR2/2PBR2"
published: true
---

## Rollerball

Rollerball is a chess variant invented by Jean-Louis Cazaux in 1999, entered in the Chess Variant Pages 40-squares contest. It is named after the 1975 science-fiction film about a violent ring-track sport. The game is played on a **40-square double-ring board** formed by taking a 7×7 grid and removing the 3×3 centre, leaving an outer ring and an inner ring. Each player has only 6 pieces.

### The Board

The board is a 7×7 grid (files a–g, ranks 1–7) with the centre 3×3 (c3–e5) removed, leaving 40 squares in two concentric rings:

- **Outer ring:** 24 squares — the perimeter of the 7×7 grid
- **Inner ring:** 16 squares — the perimeter of the 5×5 interior region surrounding the removed centre

The board has four natural zones: **South** (White's starting side), **North** (Black's starting side), **West**, and **East**. White plays first; play proceeds **mostly clockwise**.

### Starting Position

Each side starts with 6 pieces occupying two ranks at their home zone, arranged point-symmetrically (180° rotation) rather than mirrored — White's arrangement is Black's arrangement rotated, not reflected. Transcribed from the starting-position diagram at chessvariants.com/40.dir/rollerball/index.html:

| Square | Piece |
|--------|-------|
| c7 | Rook (Black) |
| d7 | Bishop (Black) |
| e7 | Pawn (Black) |
| c6 | Rook (Black) |
| d6 | King (Black) |
| e6 | Pawn (Black) |
| c2 | Pawn (White) |
| d2 | King (White) |
| e2 | Rook (White) |
| c1 | Pawn (White) |
| d1 | Bishop (White) |
| e1 | Rook (White) |

All other squares (including the full inner ring and the remainder of the outer ring) are empty at setup.

### Pieces

Each side has: 1 King, 1 Bishop, 2 Rooks, 2 Pawns (6 pieces total).

#### King
Moves and captures one square to any adjacent square (orthogonal or diagonal), as in standard chess. The King **may not move to a square where it can be captured**. The King is the only piece with fully symmetric movement.

#### Rook
Slides any number of squares **forward** or **sideways** along its row or column. May also move **one square backward** (orthogonally only — no backward sliding). On the external ring, the Rook has **one rebound allowed on the corners** of the board. The source notes the Rook is especially powerful on b2 (and, by the board's rotational symmetry, a6, f7, g2), where it can deliver mate unassisted.

#### Bishop
Slides diagonally **forward** any number of squares, with **one rebound allowed** on the external or internal ring sides. May also move **one square diagonally backward**. Does not slide diagonally backward beyond one square. The white diagonals form a secondary ring joining the mid-points of the external sides, where the Bishop is especially strong.

#### Pawn
Moves and captures **forward** (straight or diagonally). Promotes to Rook or Bishop upon reaching the starting square of the opponent's Pawns. Promotion to a Bishop on a dark square is not recommended (per the source).

### Win Conditions

There are two ways to win:

1. **Checkmate** the opponent's King.
2. **King reaches the opponent's King starting square** — but only if it arrived there by travelling **clockwise**.

**Draw:** stalemate or three-fold repetition.

### Attribution

Rollerball by Jean-Louis Cazaux, invented 1999, entered in the 40-squares contest. Rules and starting-position diagram documented at chessvariants.com/40.dir/rollerball/index.html.
