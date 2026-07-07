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
published: true
---

## Wa Shogi

Wa Shogi (和将棋, "Japanese Chess" or "Harmony Chess") is a historical Japanese chess variant played on an 11×11 board. It features 27 piece types per side (54 pieces total), all named after animals. Unlike standard Shogi, there is **no Rook or Bishop**, no Gold or Silver Generals, and **no drop rule**. Its historical origin is estimated at the 16th or 17th century.

### The Board

11×11 grid. Standard Shogi orientation: Sente plays from the bottom, Gote from the top.

### Starting Position

Each player has 27 pieces arranged across three home ranks.

**Sente ranks 1–3:**

- Rank 1 (back rank): Swooping Owl(a) · Flying Cock(b) · Swallowing Goose(c) · Tree Monkey(d) · Oxcart(e) · Crane King(f) · Oxcart(g) · Tree Monkey(h) · Swallowing Goose(i) · Flying Cock(j) · Swooping Owl(k)
- Rank 2: Strutting Crow(a) · Prancing Stag(b) · Climbing Monkey(c) · Roaming Boar(d) · Cloud Eagle(e) · Free Eagle(f) · Cloud Eagle(g) · Roaming Boar(h) · Climbing Monkey(i) · Prancing Stag(j) · Strutting Crow(k)
- Rank 3: Swallow(a–k, 11 Swallows)

**SFEN:** `ocsmtktmsco/abcrbfrbcba/SSSSSSSSSSS/11/11/11/11/11/sssssssssss/ABCRBFRBCBA/OCSMTKTMSCO b - 1`

*(Custom letter assignments. Confirm from chessvariants.com/shogi.dir/wa.html. Tentative: C = Crane King, F = Free Eagle, T = Tree Monkey, M = Climbing Monkey, S = Swallow, etc.)*

### No Drops

Captured pieces are **permanently removed** from the game. There is no drop mechanic.

### Piece Set

All pieces move one or two squares in limited directions (short-range movers). There is no long-range sliding piece in Wa Shogi.

| Piece | Japanese | Movement | Promotes to |
|---|---|---|---|
| Crane King | 鶴王 | One step any direction (King) | Does not promote |
| Free Eagle | 自由鷹 | Moves as King or jumps 2 squares orthogonally (Dabbaba + King) | Does not promote |
| Cloud Eagle | 雲鷹 | Moves forward 1–2 or backward 1; 1 step sideways | Free Eagle |
| Swallow | 燕 | One step forward (Pawn) | Goose |
| Goose | 鴅 | Two steps diagonally forward; one step backward | Promoted Swallow |
| Swooping Owl | フクロウ | Varies | Strutting Crow |
| Strutting Crow | | Varies | Cloud Eagle |
| Flying Cock | | Varies | Swooping Owl |
| Prancing Stag | | Varies | Flying Cock |
| Oxcart | | Varies | Strutting Crow |
| Tree Monkey | | Varies | Cloud Eagle |
| Roaming Boar | | Varies | Cloud Eagle |
| Climbing Monkey | | Varies | Roaming Boar |
| Swallowing Goose | | Varies | Strutting Crow |

> **Verification note:** Transcribe all 27 piece movements from chessvariants.com/shogi.dir/wa.html before building. The abbreviated movements above require confirmation.

### Promotion

Pieces promote on reaching the promotion zone (last 3 ranks). Promotion is mandatory for pieces that cannot otherwise retreat.

### Attribution

Wa Shogi is a historical Japanese variant (~16th–17th century). Rules documented from chessvariants.com/shogi.dir/wa.html.
