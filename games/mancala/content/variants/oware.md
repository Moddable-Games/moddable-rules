---
playable: true
title: Oware
slug: oware
board: "2×6 pits"
players: "2"
parent: mancala
order: 2
win: Capture more than 24 seeds
special: Grand slam rule prevents a player from clearing all opponent seeds in a single turn.
engine:
  topology:
    type: pit
    cols: 6
    stores: false
  players: [south, north]
  render:
    cellSize: 24
  plugins:
    mancala:
      # Oware: no store on the board, captured seeds are held by the player.
      # The last seed making 2 or 3 in an enemy pit captures it, then chains
      # backwards while the count holds. A move that would strip the opponent
      # bare is illegal, and feeding them when they are bare is compulsory.
      sowIntoOwnStore: false
      skipOriginOnWrap: true
      captureRule: countInEnemy
      captureCounts: [2, 3]
      captureChainBackwards: true
      grandSlamProhibited: true
      feedingObligation: true
  setup: "4,4,4,4,4,4;0;4,4,4,4,4,4;0"
---

## Oware

The most internationally recognised Mancala variant, originating in Ghana and widely played across West Africa, the Caribbean, and the Ghanaian diaspora. Known under many regional names including Awale (Côte d'Ivoire), Wari (Senegal), and Ayo (Yoruba, Nigeria). The game is a national sport in several West African countries.


{{svg:oware-board.svg "Oware — starting position"}}
### Components

| Item | Qty | Notes |
|------|-----|-------|
| **Board** | 1 | 2 rows of 6 pits |
| **Seeds** | 48 | 4 seeds per pit at start |

### Setup

48 seeds distributed equally, 4 per pit. No stores on the board; captured seeds are held separately by each player. Each player owns the 6 pits on their side.

### Rules

**Sowing:** Pick up all seeds from any one of your six pits. Sow counter-clockwise, one seed per pit, skipping the pit you lifted from if the circuit returns to it (only relevant with large counts).

**Capture:** If the last seed sown lands in an opponent's pit and that pit now contains exactly 2 or 3 seeds, capture those seeds. If the pit before it also has 2 or 3 seeds, capture those too, and continue backwards capturing consecutive pits with 2 or 3 seeds.

**Grand slam:** If sowing would capture all seeds on the opponent's side, the capture is illegal. You must choose a different pit that does not result in a grand slam. If no legal move avoids a grand slam, all opponent seeds are left in place and your turn ends.

**Feeding obligation:** If the opponent has no seeds, you must make a move that gives them seeds if possible. If no such move exists, the game ends.

### End of Game

The game ends when one player captures more than 24 seeds (majority of 48), when both players agree to end with fewer than 4 seeds remaining on the board, or when the same board position repeats. Remaining seeds go to the player who owns those pits.

### Winning

The player with more captured seeds wins. 25 or more seeds wins outright.

### Attribution

Oware. Traditional game, Ghana and West Africa. Public domain. Source: Wikipedia (CC-BY-SA); Russ, Laurence — *The Complete Mancala Games Book* (1984).
