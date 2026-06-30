---
title: Standard Go (19×19)
slug: standard
board: "19×19"
players: "2"
parent: go
order: 1
win: Most territory at game end
special: Full tournament game. 361 intersections. Komi 6.5. Area or territory scoring.
engine:
  topology:
    type: grid
    rows: 19
    cols: 19
  players: [black, white]
---

## Standard Go (19×19)

The full tournament game played on a 19×19 grid with 361 intersections. One fundamental rule — capture by surrounding — produces extraordinary strategic depth. Games last 60–180 minutes at tournament level.

{{svg:go-19x19-board.svg "Go — 19×19 board"}}

### Components

| Item | Qty | Notes |
|------|-----|-------|
| **Board** | 1 | 19×19 grid (361 intersections) |
| **Black stones** | 181 | Enough to cover slightly more than half the board |
| **White stones** | 180 | One fewer than Black (Black plays first) |

### Setup

The board starts empty. Black plays first. Stones are placed on intersections (where lines cross), not inside squares.

### Rules

**Placement:** On each turn, a player places one stone of their colour on any empty intersection, or passes.

**Liberties and capture:**
- An empty intersection adjacent to a stone (horizontally or vertically) is a liberty.
- Adjacent same-colour stones form a group and share liberties.
- A group with zero liberties is captured and removed from the board.
- A stone may be placed on a zero-liberty intersection if doing so captures opponent stones.

**Ko rule:** A move that returns the board to the immediately previous position is forbidden. If one player captures a single stone, the opponent must play elsewhere before recapturing.

**Suicide:** A move that would leave your own group with zero liberties without capturing any opponent stones is forbidden.

### Scoring

The game ends when both players pass consecutively.

**Area scoring (Chinese):** Score = your stones on the board + empty intersections surrounded only by your stones.

**Territory scoring (Japanese):** Score = empty intersections you surround − your captured stones (prisoners).

Both methods produce the same winner in nearly all cases.

### Komi

White receives 6.5 points of compensation for moving second. The half-point prevents draws.

### Attribution

Traditional game originating in China approximately 4,000 years ago. Known as Weiqi (Chinese), Baduk (Korean), Igo (Japanese). Public domain. Rules standardised by the International Go Federation.
