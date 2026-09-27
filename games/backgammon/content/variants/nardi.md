---
playable: true
title: Nardi
slug: nardi
board: "24-point board"
players: "2"
parent: backgammon
order: 2
win: Bear off all 15 pieces before your opponent
special: No hitting. Both players move in the same direction. No doubling cube.
engine:
  topology:
    type: track
    positions: 24
  players: [white, black]
  plugins:
    backgammon:
      movement: same
      contact: block
      # One checker leaves the head a turn; 6-6, 4-4 or 3-3 on the first turn may take two.
      headLimit: 1
      headDoubles: [3, 4, 6]
      # No block of six with no opposing checker ahead of it.
      primeLimit: 6
      backgammons: false
  setup: "0:15W,12:15B"
---

## Nardi

The dominant Backgammon variant in Georgia, Armenia, Azerbaijan, and Russia. Also called Long Nardi to distinguish it from Short Nardi (which is closer to standard Backgammon). Without hitting, the game emphasises blocking and efficient racing over tactical aggression. Widely played in cafés and parks across the Caucasus.


{{svg:nardi-board.svg "Nardi — starting position"}}
### Components

| Item | Qty | Notes |
|------|-----|-------|
| **Board** | 1 | 24-point board |
| **Checkers** | 30 | 15 per player |
| **Dice** | 4 | 2 per player |

### Setup

Both players start with all 15 checkers on their own point 24, the head, in diagonally opposite corners of the board. Checkers move in the same direction: counter-clockwise, from point 24 to point 1 for both players.

Each player's route passes through the opponent's starting quarter, which creates blocking opportunities but eliminates hitting.

### Movement

Both players roll one die to determine first player; higher roll goes first. On each turn, roll two dice and move forward by those amounts (one checker each, or one checker twice).

**Key differences from standard Backgammon:**

- **No hitting:** You may never land on a point occupied by any opponent checker. A point with 1 or more opponent checkers is closed to you.
- **Blocking:** You may stack your own checkers on a point to block the opponent, but you cannot move through a blocked point.
- **Mars rule (optional):** If you bear off all 15 pieces before the opponent bears off any, you score a mars (double win).

- **The head:** Only one checker may leave the head each turn. The one exception is a player's first roll of 6-6, 4-4 or 3-3, which may take two checkers from the head, since one checker cannot play the whole roll.

### Prime Strategy

Building a contiguous block of points is the primary strategic concept: blocked checkers cannot advance until the block is broken. A block of 6 points is allowed only while at least one opposing checker is ahead of it; a player may not build a six-point prime that shuts in all fifteen opposing checkers.

### Bearing Off

Once all 15 of your checkers are in your home board (points 1–6 from your perspective), bear off as in standard Backgammon. If both dice can be used, you must use both.

### Winning

First player to bear off all 15 checkers wins. No doubling cube in standard Nardi.

### Attribution

Nardi (Long Nardi). Traditional game, Caucasus and Russia. Public domain. Source: Wikipedia (CC-BY-SA).
