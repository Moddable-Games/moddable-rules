---
title: Sungka
slug: sungka
board: "2×7 pits + 2 heads"
players: "2"
parent: mancala
order: 8
win: Have more seeds in your head at game end
special: "Simultaneous start; sow only into your own head, never the opponent's."
engine:
  topology:
    type: pit
    cols: 7
  players: [south, north]
  render:
    cellSize: 18
    boardShape: ellipse
  setup: "7,7,7,7,7,7,7;0;7,7,7,7,7,7,7;0"
---

## Sungka

The traditional Mancala game of the Philippines, played across the archipelago for centuries. The board (*sungkaan*) is traditionally carved from a single piece of wood in a boat shape, with seven playing pits per side and a large pit at each end called the *ulo* (head). Sungka is considered a national cultural game and is played at social gatherings, particularly among women.


{{svg:sungka-board.svg "Sungka — starting position"}}
### Components

| Item | Qty | Notes |
|------|-----|-------|
| **Board** | 1 | 2 rows of 7 playing pits + 1 ulo (head) at each end |
| **Seeds** | 98 | 7 shells or stones per pit at start; both heads start empty |

### Setup

7 seeds in each of the 14 playing pits. Both heads start empty. Each player owns the 7 pits on their side and the head to their left.

### Rules

**Simultaneous start:** Both players simultaneously pick up all seeds from any one of their seven pits and begin sowing. Continue until one player's hand meets the other's, at which point the player whose hand is met stops and waits.

**Sowing direction:** Counter-clockwise. Sow one seed per pit along your row, drop one seed into your head, then continue along the opponent's row back toward their end of the board. Skip the opponent's head entirely.

**Your head:** You may only deposit seeds into your own head, never the opponent's. Sow past the opponent's head without depositing.

**Relay:** If the last seed lands in a non-empty pit on either side, pick up all seeds from that pit and continue sowing. Continue relaying until the last seed lands in an empty pit.

**Capture:** If the last seed lands in an empty pit on your side, and the directly opposite pit on the opponent's side contains seeds, capture all seeds from the opposite pit into your head. The sowing seed remains in your now-occupied pit (no capture of the sowing seed itself).

**Landing in head:** If the last seed lands in your head, you may begin a new sow from any non-empty pit on your side.

### End of Game

The game ends when one player's seven pits are all empty and they cannot continue. The opposing player sweeps all remaining seeds into their own head.

### Winning

The player with more seeds in their head wins.

### Attribution

Sungka. Traditional game, Philippines. Public domain. Source: Wikipedia (CC-BY-SA); Russ, Laurence — *The Complete Mancala Games Book* (1984).
