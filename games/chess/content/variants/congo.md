---
playable: true
title: Congo
slug: congo
board: "7×7"
players: "2"
parent: chess
win: Capture the Lion
special: "7×7 chess variant by Demian Freeling (1982, age 7). Six unique piece types: Lion (King, confined to castle), Zebra (Knight), Giraffe (2-step jump + king move), Elephant (1–2 step ortho leaper), Crocodile (king move + rook toward/in river), Monkey (capturing draughts-leaper). River rank in the centre. Drowning rule: non-Crocodile pieces left in the river for a full turn are removed. No check or checkmate — capture the Lion to win."
engine:
  topology:
    type: grid
    rows: 7
    cols: 7
  players: [white, black]
  setup: "gmelecz/ppppppp/7/7/7/PPPPPPP/GMELECZ"
  vocabulary:
    giraffe:
      symbols:
        0: G
        1: g
    monkey:
      symbols:
        0: M
        1: m
    elephant:
      symbols:
        0: E
        1: e
    lion:
      symbols:
        0: L
        1: l
    crocodile:
      symbols:
        0: C
        1: c
    zebra:
      symbols:
        0: Z
        1: z
  plugins:
    chess:
      pieces:
        giraffe:
          divergent:
            move:
              type: compose
              parts:
                - type: leaper
                  offsets: dabbaba
                - type: leaper
                  offsets: elephant
                - type: rider
                  dirs: all
                  maxSteps: 1
            capture:
              type: compose
              parts:
                - type: leaper
                  offsets: dabbaba
                - type: leaper
                  offsets: elephant
        monkey:
          divergent:
            move:
              type: rider
              dirs: all
              maxSteps: 1
            capture:
              type: locust
              dirs: king
        crocodile:
          type: rider
          dirs: all
          maxSteps: 1
        elephant:
          type: compose
          parts:
            - type: rider
              dirs: orthogonal
              maxSteps: 1
            - type: leaper
              offsets: dabbaba
        lion:
          type: rider
          dirs: all
          maxSteps: 1
        zebra:
          type: leaper
          offsets: knight
---

## Congo

{{svg:congo-board.svg "Congo — starting position"}}

Congo is a chess variant invented by Demian Freeling at age seven in the Christmas holidays of 1982–83. His father Christian Freeling (designer of Grand Chess) set the constraints — a 7×7 board, seven pawns, a king in the middle, and six pieces to the left and right — and Demian designed everything else in about an hour. The game went on to become the second most popular chess variant at the games club Fanatic at Twente University.

Congo features no check or checkmate. You win by capturing the opponent’s Lion.

### The Board

7 files (a–g) × 7 ranks = 49 squares.

The **river** occupies rank 4 (the middle rank). Each side has a **castle**: a 3×3 area at their end of the board.

- White’s castle: c1–e3
- Black’s castle: c5–e7

### Starting Position

**White (rank 1):** Giraffe a1 · Monkey b1 · Elephant c1 · Lion d1 · Elephant e1 · Crocodile f1 · Zebra g1

**White pawns (rank 2):** a2–g2 (7 pawns)

**Black (rank 7):** Giraffe a7 · Monkey b7 · Elephant c7 · Lion d7 · Elephant e7 · Crocodile f7 · Zebra g7

**Black pawns (rank 6):** a6–g6 (7 pawns)

### Pieces

#### Lion
Moves one square in any direction (as a chess king), but may **not leave its castle**. Exception: if the two Lions are aligned along a file or diagonal with no pieces in between, the Lion may jump to the other Lion and capture it (the “facing Lions” rule). The game ends immediately when a Lion is captured.

#### Zebra
Leaps in an L-shape, exactly as a standard chess Knight.

#### Giraffe
Jumps to the second square in any direction (orthogonal or diagonal) — a 2-step leap that cannot be blocked by intervening pieces. Also has a non-capturing King move (one square in any direction without capturing).

#### Elephant
Moves to the first or second square in any straight (orthogonal) direction. The second-square move is a jump and cannot be blocked.

#### Crocodile
Moves one square in any direction (king move). In addition:
- **Outside the river:** can also slide along any file **toward** the river (including the river square itself) as a rook.
- **Inside the river:** can also slide to other squares in the same river rank as a rook.
- A Crocodile cannot drown (see terrain rules).

#### Monkey
Moves (without capturing) one square in any direction. **Captures** by jumping over an adjacent piece (orthogonal or diagonal) to the vacant square immediately beyond — exactly as in draughts. Multiple consecutive captures are allowed in a single turn, switching between orthogonal and diagonal jumps freely. All captured pieces are removed simultaneously after the move. The Monkey may visit the same square twice in a multiple capture but may not capture the same piece twice. If the Lion is captured during a multiple capture, the game ends immediately.

#### Pawn
Moves and captures **straight forward or diagonally forward** (unlike standard chess pawns). **Across the river:** may also retreat one or two squares straight backward (no capture or jump on the retreat). Promotes to **Superpawn** on reaching the last rank.

**Superpawn:** gains the additional ability to move and capture sideways (one square), and to retreat one or two squares diagonally backward (no capture). The right to retreat applies anywhere on the board.

### Terrain Rules

**The river (rank 4):** Non-Crocodile pieces that move into the river survive one turn there. If the piece is not moved out of the river on the owner’s very next turn, it **drowns** and is removed from play. A piece moved into the river and immediately moved out on the next turn does not drown.

**The castles:** The Lion may not move outside its own castle under any circumstances, except to execute the facing-Lions capture.

### Win Condition

Capture the opponent’s Lion. There is no check or checkmate. Stalemate does not exist (if a player has no legal moves, they have lost their Lion, which is impossible, or the position is otherwise terminal).

### Attribution

Congo was invented by Demian Freeling in 1982. Rules copyright Mindsports, used with permission. Documented at chessvariants.com/ms.dir/congo.html (by Christian Freeling and Hans Bodlaender).
