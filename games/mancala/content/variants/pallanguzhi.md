---
title: Pallanguzhi
slug: pallanguzhi
board: "2×7 pits"
players: "2"
parent: mancala
order: 6
win: Capture all 168 seeds (opponent cannot fill pits to play)
special: "Multi-lap sowing: the last seed always triggers pickup of the next pit, creating long relay chains."
unsupported: "The skip-one relay capture (skip an empty pit, take the pit beyond it) is not expressible in the current mancala plugin configuration."
engine:
  topology:
    type: pit
    cols: 7
    stores: false
  players: [south, north]
  render:
    cellSize: 18
  setup: "12,12,12,12,12,12,12;0;12,12,12,12,12,12,12;0"
---

## Pallanguzhi

A traditional South Indian Mancala game played predominantly in Tamil Nadu and Kerala, as well as among Tamil-speaking communities in Sri Lanka, Singapore, and Malaysia. The name comes from Tamil: *pallam* (pit) and *kuzhi* (hole). Pallanguzhi uses 14 seeds per pit — significantly more than other Mancala variants — and features a continuous relay mechanic that creates long, unbroken sowing chains.


{{svg:pallanguzhi-board.svg "Pallanguzhi — starting position"}}
### Components

| Item | Qty | Notes |
|------|-----|-------|
| **Board** | 1 | 2 rows of 7 pits |
| **Seeds** | 146 | Traditionally cowrie shells or tamarind seeds; 14 per pit at start (not counting the initial relay) |

### Setup

Place 12 seeds in each of the 14 pits (168 seeds total). No stores on the board — captured seeds are held separately.

### Rules

**Sowing:** Pick up all seeds from any pit on your side. Sow one seed per pit, moving counter-clockwise (right along your row, then into the opponent's row).

**Relay:** After sowing, pick up all seeds from the very next pit in sequence (the pit immediately after the last seed was placed) and continue sowing. This relay continues without interruption.

**Capture:** If the next pit in sequence (after the last seed) is empty, skip that empty pit and look at the one beyond it. If that pit contains seeds, capture them. If the pit beyond the empty one is also empty, no capture occurs and the turn ends.

**Consecutive captures:** After a capture, check the next pit again: if it too is followed by an empty pit and then a seeded pit, capture again. Continue until the pattern breaks.

**Empty pits:** If the relay lands the last seed in a pit and the next pit is empty but no capture follows, the turn ends.

### End of Game

The game ends when a player cannot fill seven pits to begin their turn. Seeds are returned from the store at a cost of 12 seeds per pit (to fill pits from store). When a player cannot afford to fill any pit, they have lost.

### Winning

The player who captures all 168 seeds wins (the opponent cannot refill any pit to continue playing).

### Attribution

Pallanguzhi. Traditional game, Tamil Nadu, India. Public domain. Source: Wikipedia (CC-BY-SA); Russ, Laurence — *The Complete Mancala Games Book* (1984).
