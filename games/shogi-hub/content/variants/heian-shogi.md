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
published: true
---

## Heian Shogi

Heian Shogi (平安将棋) is the earliest documented form of Japanese chess, played during the Heian period (794–1185 CE). It is reconstructed from period manuscripts and is considered the **direct ancestor of modern Shogi**. The board has **9 files and 8 ranks** (one shorter than modern Shogi), and there is no drop rule.

### The Board

9 files (一射　9射) × 8 ranks. Sente plays from the bottom (ranks 1–2 home), Gote from the top (ranks 7–8 home).

### Starting Position

**Sente (bottom):**
- Rank 1: Lance(a) · Knight(b) · Silver(c) · Gold(d) · King(e) · Drunk Elephant(f) · Gold(g) · Silver(h) · Lance(i)
- Rank 2: empty(a) · Bishop(b) · empty(c–g) · Rook(h) · empty(i)
- Rank 3: 9 Pawns (a3–i3)

**Gote (top, mirrored):**
- Rank 8: Lance · Knight · Silver · Gold · King · Drunk Elephant · Gold · Silver · Lance
- Rank 7: empty · Rook · empty ··· Bishop · empty
- Rank 6: 9 Pawns

**SFEN:** `lnsgkedgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKEGSNL b - 1`

*(E/e = Drunk Elephant. Confirm exact position from chessvariants.com/shogi.dir/heian.html.)*

### The Drunk Elephant

The **Drunk Elephant** (酱象, Suizō) moves **one square in any direction except directly backward** — 8 directions minus the single rearward step.

The Drunk Elephant promotes to **Prince** (太子, Taishi) on entering the promotion zone. The Prince moves as a King and is a **second royal piece**: the opponent must also capture the Prince to win.

> **Historical note:** The Drunk Elephant was reportedly removed from standard Shogi at some point in history, traditionally attributed to Emperor Gomizunoo (early 17th century). Its removal is what made modern Shogi a simpler, faster game.

### Differences from Modern Shogi

| Feature | Heian Shogi | Modern Shogi |
|---|---|---|
| Board | 9×8 | 9×9 |
| Drunk Elephant | Yes | No |
| Drops | No | Yes |
| Promotion zone | Last 2 ranks | Last 3 ranks |
| Win condition | Capture the King | Checkmate the King |

### Piece Movements

All pieces move as in standard Shogi, with these historical notes:

- **Bishop and Rook** may have shorter range in some historical reconstructions — verify from chessvariants.com/shogi.dir/heian.html.
- **Lance:** Forward slide only, as in modern Shogi.
- **Knight:** Forward L-jump, as in modern Shogi.

### No Drops

Captured pieces are permanently removed. No drop mechanic exists in Heian Shogi.

### Attribution

Heian Shogi is a historical Japanese game (~10th–12th century). Reconstruction documented from chessvariants.com/shogi.dir/heian.html.
