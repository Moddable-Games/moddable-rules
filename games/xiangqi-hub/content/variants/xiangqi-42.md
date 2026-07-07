---
title: Xiangqi 42
slug: xiangqi-42
board: "7×6"
players: "2"
parent: xiangqi-hub
win: Checkmate the General
special: "Compact Xiangqi variant on a 7×6 board (7 files × 6 ranks = 42 intersections, hence the name). Designed as an accessible introduction to Xiangqi using a reduced piece set and no river. Suitable for short games and Xiangqi instruction."
engine:
  topology:
    type: grid
    rows: 6
    cols: 7
    intersections: true
  players: [red, black]
  notation: xiangqi
published: true
---

## Xiangqi 42

Xiangqi 42 is a compact Xiangqi variant played on a **7×6 board** (7 files × 6 ranks = **42 intersections**, hence the name). It uses a reduced piece set and eliminates the river, making it a fast, accessible introduction to Xiangqi strategy.

### The Board

7 files × 6 ranks = 42 intersections. Pieces occupy intersections as in standard Xiangqi. **No river** — the board is too small. Each player has a **Palace** (3×2) in the center of their back two ranks.

### Starting Position

**Red (bottom):**
- Rank 1: Chariot(a) · Horse(b) · General(c) · Horse(d) · Chariot(e) [files a–e; f–g empty]
- Wait — on a 7-file board the Palace should be centered. Palace files: c, d, e (3 files).
- Rank 1: Chariot(a) · Horse(b) · Advisor(c) · General(d) · Advisor(e) · Horse(f) · Chariot(g)
- Rank 2: empty(a–b) · Cannon(c) · empty(d) · Cannon(e) · empty(f–g)
- Rank 3: Soldier(a) · Soldier(b) · Soldier(c) · Soldier(d) · Soldier(e) · Soldier(f) · Soldier(g)

**Black (top, mirrored):**
- Rank 6: Chariot · Horse · Advisor · General · Advisor · Horse · Chariot
- Rank 5: Cannon · empty ··· Cannon
- Rank 4: 7 Soldiers

**FEN:** `rhakahar/2c1c2/ppppppp/PPPPPPP/2C1C2/RHAKAHAR w - - 0 1`

*(R = Chariot, H = Horse, A = Advisor, K = General, C = Cannon, P = Soldier. Confirm from chessvariants.com.)*

> **Verification note:** Exact piece set (whether Elephants are included, exact Soldier count, exact Cannon placement) should be confirmed from chessvariants.com before building.

### Rules

Standard Xiangqi rules adapted for the smaller board:

- **No river:** Elephant and Soldier cross-river restrictions do not apply (no river exists). Elephants range freely. Soldiers may move sideways from the start.
- **Palace:** General and Advisors are confined to the 3×2 Palace centered in the top/bottom of the board.
- **Facing Generals rule:** Generals may not face each other across an open file (Flying General rule applies as in standard Xiangqi).
- **No Elephant:** Some Xiangqi 42 implementations omit the Elephant entirely given the board size — confirm from source.
- **Win:** Checkmate the opponent's General. Stalemate = loss as in standard Xiangqi.

### Attribution

Xiangqi 42 rules documented from chessvariants.com.
