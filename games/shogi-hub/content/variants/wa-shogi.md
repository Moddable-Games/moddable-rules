---
title: Wa Shogi
slug: wa-shogi
board: "11×11"
players: "2"
parent: shogi-hub
win: Checkmate the King
special: "Historical Japanese Shogi variant played on 11×11 with 27 piece types per side. All pieces are named after animals. No Rook, Bishop, or Gold/Silver Generals. No drops. Estimated 16th–17th century origin."
engine:
  topology:
    type: grid
    rows: 11
    cols: 11
    orientation: shogi
  players: [sente, gote]
  notation: shogi
  drops: false
  promotion_zone: [9, 10, 11]
published: false
status: stub
updated: 2026-07-07
---

## Wa Shogi

Wa Shogi (和将棋, "Japanese Chess" or "Harmony Chess") is a historical Japanese chess variant played on an 11×11 board. It features 27 piece types per side (54 pieces total), all named after animals. Unlike standard Shogi, there is **no Rook or Bishop**, no Gold or Silver Generals, and **no drop rule**. Its historical origin is estimated at the 16th or 17th century.

*This file is a stub. Full piece table (27 piece types), starting SFEN, and piece letter assignments require verification from chessvariants.com/shogi.dir/wa.html (JavaScript-rendered; use Claude in Chrome). Do not publish until complete.*

### The Board

11×11 grid. Standard Shogi orientation: Sente plays from the bottom, Gote from the top.

### No Drops

Captured pieces are **permanently removed** from the game. There is no drop mechanic.

### Known Pieces

The following movements have been confirmed from secondary sources:

| Piece | Movement | Promotes to |
|---|---|---|
| Crane King | One step any direction (King) | Does not promote |
| Free Eagle | King move or jumps 2 squares orthogonally | Does not promote |
| Cloud Eagle | Forward 1–2; backward 1; sideways 1 | Free Eagle |
| Swallow | One step forward (Pawn) | Goose |
| Goose | Two steps diagonally forward; one step backward | (Promoted Swallow) |

All remaining 22 piece types require verification before publication.

### Attribution

Wa Shogi is a historical Japanese variant (~16th–17th century). Source: chessvariants.com/shogi.dir/wa.html.
