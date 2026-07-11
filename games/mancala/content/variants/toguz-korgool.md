---
title: Toguz Korgool
slug: toguz-korgool
board: "2×9 pits + 2 kazans"
players: "2"
parent: mancala
order: 5
win: Capture 82 or more seeds (majority of 162)
special: "The tuzduk rule: landing the 3rd seed in an opponent's odd-numbered pit locks it as your permanent scoring pit."
engine:
  topology:
    type: pit
    cols: 9
  players: [south, north]
  render:
    cellSize: 20
  setup: "9,9,9,9,9,9,9,9,9;0;9,9,9,9,9,9,9,9,9;0"
---

## Toguz Korgool

The national game of Kyrgyzstan, played across Central Asia from Kyrgyzstan to Kazakhstan. The name means "nine balls" in Kyrgyz. Toguz Korgool is one of the few Mancala games to feature a permanent lock mechanic (the tuzduk), which creates long-term strategic planning entirely absent from simpler Mancala forms. The game has been played at the World Nomad Games since 2016.


{{svg:toguz-korgool-board.svg "Toguz Korgool — starting position"}}
### Components

| Item | Qty | Notes |
|------|-----|-------|
| **Board** | 1 | 2 rows of 9 pits + 1 kazan (store) at each end |
| **Seeds** | 162 | 9 seeds per pit at start |

### Setup

9 seeds in each of the 18 pits. Both kazans start empty. Each player owns the 9 pits on their side and the kazan to their left (when facing the board).

### Rules

**Sowing:** Pick up all seeds from any of your nine pits. Sow one seed per pit, moving right along your row, then continuing into the opponent's row. Do not sow into either kazan.

**Capture (scoring):** If the last seed you sow lands in an opponent's pit that now contains an even number of seeds, capture all seeds from that pit into your own kazan.

**Tuzduk:** If the last seed lands in an opponent's pit that now contains exactly 3 seeds (i.e. you sowed the 3rd seed), and the pit is not the rightmost pit (pit 9 of their row), and neither player already has a tuzduk from that side, that pit becomes your tuzduk. Mark it. All seeds that subsequently land in your tuzduk go directly into your kazan for the rest of the game. The opponent cannot capture from their own tuzduk pit.

**Tuzduk restrictions:** Each player may have at most one tuzduk at a time. A tuzduk cannot be established in the rightmost pit (pit 9) of the opponent's row.

**Sowing into kazan:** If a sow would include the kazan on a pass, skip it and continue on the other side.

### End of Game

The game ends when one player cannot move (all pits empty). The opponent captures all remaining seeds on their side into their own kazan.

### Winning

The player with 82 or more seeds in their kazan wins. If both finish on exactly 81, the game is a draw.

### Attribution

Toguz Korgool. Traditional game, Kyrgyzstan and Central Asia. Public domain. Source: Wikipedia (CC-BY-SA); World Intellectual Board Games Federation rules.
