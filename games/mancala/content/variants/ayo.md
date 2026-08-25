---
playable: true
title: Ayo
slug: ayo
board: "2×6 pits"
players: "2"
parent: mancala
order: 7
win: Capture more than 24 seeds
special: Functionally identical to Oware; grand slam rule applies. Culturally distinct Yoruba tradition.
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
      # Ayo is the Yoruba game and shares Oware's capture and grand-slam rules.
      sowIntoOwnStore: false
      skipOriginOnWrap: true
      captureRule: countInEnemy
      captureCounts: [2, 3]
      captureChainBackwards: true
      grandSlamProhibited: true
      feedingObligation: true
  setup: "4,4,4,4,4,4;0;4,4,4,4,4,4;0"
---

## Ayo

The Yoruba name for the Oware family of Mancala games, played in Nigeria and among Yoruba communities worldwide. The game is culturally significant in Yoruba tradition — historically associated with philosophy, divination, and social ritual — though the rules are functionally identical to Oware. The cultural framing and terminology are distinct: seeds are called *ayo* beads, and the board (*opon ayo*) is carved with traditional motifs.


{{svg:ayo-board.svg "Ayo — starting position"}}
### Components

| Item | Qty | Notes |
|------|-----|-------|
| **Board** | 1 | 2 rows of 6 pits |
| **Seeds** | 48 | 4 seeds (*ayo* beads) per pit at start |

### Setup

48 seeds distributed equally, 4 per pit. No stores — captured seeds are held separately. Each player owns the 6 pits on their side.

### Rules

**Sowing:** Pick up all seeds from any one of your six pits. Sow counter-clockwise, one seed per pit, skipping the original pit if the circuit returns to it.

**Capture:** If the last seed lands in an opponent's pit and that pit now contains exactly 2 or 3 seeds, capture those seeds. Continue capturing backwards through consecutive pits that also contain exactly 2 or 3 seeds.

**Grand slam:** If sowing would capture every seed on the opponent's side, the move is illegal. You must choose a different pit. If no legal move avoids a grand slam, all opponent seeds remain and your turn ends.

**Feeding obligation:** If the opponent has no seeds, you must play a pit that gives them seeds. If no such move exists, the game ends and you take all remaining seeds.

### End of Game

The game ends when one player has more than 24 seeds, when fewer than 4 seeds remain on the board and both players agree, or when a position repeats. Remaining seeds go to the player who owns those pits.

### Winning

The player with more captured seeds wins. 25 or more seeds wins outright.

### Attribution

Ayo. Traditional game, Yoruba people, Nigeria. Public domain. Source: Wikipedia (CC-BY-SA); Russ, Laurence — *The Complete Mancala Games Book* (1984).
