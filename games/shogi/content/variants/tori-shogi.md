---
title: Tori Shogi
slug: tori-shogi
board: "7×7"
players: "2"
parent: shogi
order: 40
win: Checkmate the Phoenix
special: "Bird Shogi, invented 1799. 7×7 board, bird-themed pieces, drop rules. Only two pieces promote. Repetition caused by your own moves is a loss. One of the oldest Shogi variants with the drop rule."
playable: true
engine:
  topology:
    type: grid
    rows: 7
    cols: 7
  players: [sente, gote]
  setup: "rpckcpl/3f3/sssssss/2s1S2/SSSSSSS/3F3/LPCKCPR"
  pieces:
    set: mce-shogi-fairy
    fenMap:
      C: wtC
      c: btC
      F: wtF
      f: btF
  render:
    cellSize: 40
  vocabulary:
    phoenix:
      symbols: { "0": K, "1": k }
    crane:
      symbols: { "0": C, "1": c }
    pheasant:
      symbols: { "0": P, "1": p }
    left_quail:
      symbols: { "0": L, "1": l }
    right_quail:
      symbols: { "0": R, "1": r }
    falcon:
      symbols: { "0": F, "1": f }
    swallow:
      symbols: { "0": S, "1": s }
  plugins:
    shogi:
      promotionZone: 2
      royalType: phoenix
      dropCheckmateLimit: true
      noDropLastRank: [swallow]
      nifuType: swallow
      nifuLimit: 2
      pieceMoves:
        phoenix:
          type: rider
          dirs: all
          maxSteps: 1
        crane:
          type: leaper
          offsets: [[-1,-1],[-1,0],[-1,1],[1,-1],[1,0],[1,1]]
        pheasant:
          type: compose
          directional: true
          parts:
            - type: leaper
              offsets: [[1,-1],[1,1]]
            - type: leaper
              offsets: [[-2, 0]]
        left_quail:
          type: compose
          directional: true
          parts:
            - type: rider
              dirs: [[-1, 0]]
            - type: rider
              dirs: [[1, 1]]
            - type: leaper
              offsets: [[1, -1]]
        right_quail:
          type: compose
          directional: true
          parts:
            - type: rider
              dirs: [[-1, 0]]
            - type: rider
              dirs: [[1, -1]]
            - type: leaper
              offsets: [[1, 1]]
        falcon:
          type: leaper
          offsets: [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,1]]
          directional: true
        swallow:
          type: leaper
          offsets: [[-1, 0]]
          directional: true
        promoted_falcon:
          type: compose
          directional: true
          parts:
            - type: rider
              dirs: [[-1,-1],[-1,1],[1,0]]
            - type: rider
              dirs: [[1,-1],[1,1]]
              maxSteps: 2
            - type: leaper
              offsets: [[-1,0],[0,-1],[0,1],[1,-1],[1,1]]
        promoted_swallow:
          type: leaper
          offsets: [[-2,-1],[-2,1],[2,0]]
          directional: true
---

## Tori Shogi

{{svg:tori-shogi-board.svg "Tori Shogi — starting position"}}

Tori Shogi (禽将棋, "Bird Shogi") is a Shogi variant invented by Toyota Genryu in 1799, traditionally attributed to his master Ohashi Soei. Played on a 7×7 board with a bird-themed piece set, Tori Shogi has sustained popularity, English-language books, and active tournaments. It is one of the oldest Shogi variants to use the drop rule. The goal is to checkmate the opposing **Phoenix** (the royal piece).

### Setup

**Board:** 7 files (a–g) × 7 ranks.

**Pieces per player:** 16 — 1 Phoenix, 1 Left Quail, 1 Right Quail, 2 Cranes, 2 Pheasants, 1 Falcon, 8 Swallows.

**Starting position:**

| Rank | Contents |
|---|---|
| Rank 1 — Gote back | Right Quail(a) · Pheasant(b) · Crane(c) · Phoenix(d) · Crane(e) · Pheasant(f) · Left Quail(g) |
| Rank 2 — Gote | · · · Falcon(d) · · · |
| Rank 3 — Gote Swallows | Swallow × 7 (all files) |
| Rank 4 — Advanced | Gote Swallow(c) · · · Sente Swallow(e) |
| Rank 5 — Sente Swallows | Swallow × 7 (all files) |
| Rank 6 — Sente | · · · Falcon(d) · · · |
| Rank 7 — Sente back | Left Quail(a) · Pheasant(b) · Crane(c) · Phoenix(d) · Crane(e) · Pheasant(f) · Right Quail(g) |

Each side's 8 Swallows: 7 on their home Swallow rank + 1 advanced to rank 4. Gote moves first.

**SFEN:** `rpckcpl/3f3/sssssss/2s1S2/SSSSSSS/3F3/LPCKCPR[-] w 0 1`

*(Piece letter assignments — r/R = Right Quail, l/L = Left Quail, p/P = Pheasant, c/C = Crane, k/K = Phoenix (royal), f/F = Falcon, s/S = Swallow. Empty hand at start: [-].)*

### Pieces

| Piece | Symbol | Movement |
|---|---|---|
| **Phoenix** | K | One step in any of the 8 directions. Royal piece. |
| **Crane** | C | One step in any direction **except** left or right (six directions: forward, backward, four diagonals). |
| **Pheasant** | P | One step diagonally **backward** (two diagonal directions), OR jumps **two squares straight forward** (cannot be blocked). |
| **Left Quail** | L | Slides any number of squares straight forward; slides any number of squares diagonally right-backward; one step diagonally left-backward. |
| **Right Quail** | R | Mirror of Left Quail: slides forward; slides diagonally left-backward; one step diagonally right-backward. |
| **Falcon** | F | One step in any of the 8 directions **except** straight backward (seven directions). Promotes to **Eagle**. |
| **Swallow** | S | One step directly forward. Promotes to **Goose**. |
| **Goose** (+S) | +S | Jumps exactly two squares diagonally forward (either direction), OR exactly two squares straight backward. Cannot be blocked. |
| **Eagle** (+F) | +F | Slides any number of squares diagonally forward or straight backward; one step in any direction; up to two squares diagonally backward (not a jump; can be blocked). Strongest piece in the game. |

**Only the Swallow and Falcon promote.** Phoenix, Cranes, Pheasants, and Quails never promote.

### Rules

**Drops:** Captured pieces go to the capturing player's hand and may be dropped on any empty square on a later turn, with the following restrictions specific to Swallows:
- A Swallow may not be dropped to give immediate checkmate.
- A Swallow may not be dropped on a file that already contains **two** friendly Swallows.
- A Swallow may not be dropped on the last rank (rank 1 for Gote, rank 7 for Sente).

**Promotion zone:** the last two ranks (ranks 6–7 for Sente). Promotion is compulsory when a Swallow or Falcon reaches the promotion zone.

**Repetition:** If the same position occurs three times with the same player to move and the same pieces in hand, the player who **caused** the repetition loses. This is the reverse of the standard Shogi draw rule.

**Perpetual check** is likewise a loss for the player causing it.

**Stalemate:** A player with no legal move loses.

### Win Conditions

Checkmate the opponent's Phoenix — attack it such that no legal move can escape. A player with no legal move loses.

### Attribution

Tori Shogi was invented by Toyota Genryu (1799). Public domain. Rules documented from pychess.org/variants/torishogi.
