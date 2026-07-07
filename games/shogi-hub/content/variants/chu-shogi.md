---
title: Chu Shogi
slug: chu-shogi
board: "12×12"
players: "2"
parent: shogi-hub
win: Capture the King (or Lion per variant rules)
special: "Historical Japanese Shogi variant played on 12×12 with 46 piece types per side (92 total). Introduces the Lion — the strongest piece in any historical chess variant, able to move to any square within 2 king-steps. Played in Japan ~1300 to the 20th century. No drops."
engine:
  topology:
    type: grid
    rows: 12
    cols: 12
    orientation: shogi
  players: [sente, gote]
  notation: shogi-japanese
  drops: false
  promotion_zone: [10, 11, 12]
published: false
status: stub
updated: 2026-07-07
---

## Chu Shogi

Chu Shogi (中将棋, "Middle Chess") is a historical Japanese chess variant played on a 12×12 board with 46 piece types per side (92 pieces total). It was widely played in Japan from approximately 1300 through the 20th century and is one of the most complex historical board games ever devised. Unlike standard Shogi, **there are no drops** — captured pieces are removed from the game.

*This file is a stub. Full piece table and starting SFEN require verification from chessvariants.com/shogi.dir/chu.html (JavaScript-rendered; use Claude in Chrome). Do not publish until complete.*

### The Board

12×12 grid. Standard Shogi orientation: Sente (first player) plays from the bottom ranks, Gote from the top.

### The Lion

The **Lion** (獅子, Shishi) is the defining piece of Chu Shogi. In one move, the Lion may:

- Move to **any square within two king-steps** — i.e., move one square in any direction, then move again from that new square in any direction; OR
- **Leap directly** two squares in any direction (jumping over an intervening piece); OR
- Use **Igui** (staying capture): capture a piece adjacent to it and return to its original square.

The Lion can capture **two pieces in one move** (the intermediate square and the landing square, if both are occupied by enemy pieces). Its range covers all 24 squares within a 5×5 centred area.

### No Drops

Captured pieces are permanently removed. There is no drop mechanic in Chu Shogi.

### Attribution

Chu Shogi is a historical Japanese variant, origins ~13th century. Source: chessvariants.com/shogi.dir/chu.html.
