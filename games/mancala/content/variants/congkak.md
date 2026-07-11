---
title: Congkak
slug: congkak
board: "2×7 pits + 2 houses"
players: "2"
parent: mancala
order: 4
win: Have more seeds in your house than the opponent at game end
special: "Sow into your own house but skip the opponent's house. Dead pits must be bought back."
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

## Congkak

The traditional Mancala game of the Malay Archipelago, widely played in Malaysia, Indonesia, Singapore, and Brunei. The word comes from the Malay *congkak* (to count). Congkak uses a boat-shaped wooden board with seven playing pits per side and one large *rumah* (house) at each end. The game is played by women and children during festive seasons and is recognised as a traditional Malay cultural game.


{{svg:congkak-board.svg "Congkak — starting position"}}
### Components

| Item | Qty | Notes |
|------|-----|-------|
| **Board** | 1 | 2 rows of 7 playing pits + 1 house at each end |
| **Seeds** | 98 | 7 seeds per pit (98 total); cowrie shells or marbles traditionally |

### Setup

7 seeds in each of the 14 playing pits. Both houses start empty. Each player owns the 7 pits on their side and the house to their right.

### Rules

**Simultaneous start:** Both players start sowing simultaneously from any pit of their choice. The first player whose hand meets the other's hand (they collide in sowing) must stop and wait for the other player to finish their turn.

**Sowing direction:** Counter-clockwise. Sow one seed per pit along your own row, into your house, then continue along the opponent's row. Skip the opponent's house.

**House:** Drop one seed into your own house each pass. Do not drop seeds into the opponent's house.

**Landing in your house:** If the last seed lands in your house, pick up any pit of your choosing on your side and continue sowing (effectively a bonus turn from a new pit).

**Capture:** If the last seed lands in an empty pit on your side, and the opposite pit on the opponent's side is non-empty, capture all seeds from the opposite pit. Your sowing seed stays in your pit. Captured seeds go to your house.

**Landing in opponent's pit:** If the last seed lands in an opponent's pit, your turn ends.

**Landing in empty own pit with no opposite seeds:** Your turn ends. That pit becomes a dead pit.

### Dead Pits

Empty pits on your side that you have triggered (last seed landed there, no capture) become dead pits. They cannot be played from on future turns. At the start of your next round, you may buy back a dead pit by paying seeds from your house equal to the number of seeds that were originally in that pit (7).

### End of Game

The game ends when one player has no seeds on their side and cannot buy back any dead pits. Count seeds in each house.

### Winning

The player with more seeds in their house wins. With 98 seeds total, 50 or more wins.

### Attribution

Congkak. Traditional game, Malay Archipelago. Public domain. Source: Wikipedia (CC-BY-SA); Russ, Laurence — *The Complete Mancala Games Book* (1984).
