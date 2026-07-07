---
title: Heian Shogi
slug: heian-shogi
board: "9×8"
players: "2"
parent: shogi-hub
win: Capture the King
special: "Historical proto-Shogi from the Heian period (794–1185 CE). Played on a 9×8 board, one rank shorter than modern Shogi. Includes the Drunk Elephant, later removed from the game. No drops. Considered the direct ancestor of modern Shogi."
engine:
  topology:
    type: grid
    rows: 8
    cols: 9
    orientation: shogi
  players: [sente, gote]
  notation: shogi
  drops: false
  promotion_zone: [7, 8]
published: false
status: stub
updated: 2026-07-07
---

## Heian Shogi

Heian Shogi (平安将棋) is the earliest documented form of Japanese chess, played during the Heian period (794–1185 CE). It is reconstructed from period manuscripts and is considered the **direct ancestor of modern Shogi**. The board has **9 files and 8 ranks** (one shorter than modern Shogi), and there is no drop rule.

*This file is a stub. The starting SFEN and exact back rank layout require verification from chessvariants.com/shogi.dir/heian.html (JavaScript-rendered; use Claude in Chrome). Do not publish until complete.*

### The Board

9 files × 8 ranks. Sente plays from the bottom (ranks 1–2 home), Gote from the top (ranks 7–8 home).

### The Drunk Elephant

The **Drunk Elephant** (酔象, Suizō) moves **one square in any direction except directly backward** — 8 directions minus the single rearward step.

The Drunk Elephant promotes to **Prince** (太子, Taishi) on entering the promotion zone. The Prince moves as a King and is a **second royal piece**: the opponent must also capture the Prince to win.

### Differences from Modern Shogi

| Feature | Heian Shogi | Modern Shogi |
|---|---|---|
| Board | 9×8 | 9×9 |
| Drunk Elephant | Yes | No |
| Drops | No | Yes |
| Promotion zone | Last 2 ranks | Last 3 ranks |
| Win condition | Capture the King | Checkmate the King |

### No Drops

Captured pieces are permanently removed. No drop mechanic exists in Heian Shogi.

### Attribution

Heian Shogi is a historical Japanese game (~10th–12th century). Source: chessvariants.com/shogi.dir/heian.html.
