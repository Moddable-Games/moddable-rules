---
title: Sho Shogi
slug: sho-shogi
board: "9×9"
players: "2"
parent: shogi
order: 10
win: Checkmate, or capture both royal pieces if Crown Prince promoted
special: "16th-century predecessor to modern Shogi. Adds the Drunken Elephant, which promotes to the Crown Prince — a second royal piece. No drop rule."
playable: true
engine:
  topology:
    type: grid
    rows: 9
    cols: 9
  players: [sente, gote]
  setup: "lnsgkgsnl/1r2e2b1/ppppppppp/9/9/9/PPPPPPPPP/1B2E2R1/LNSGKGSNL"
  vocabulary:
    king:
      symbols: { "0": K, "1": k }
    rook:
      symbols: { "0": R, "1": r }
    bishop:
      symbols: { "0": B, "1": b }
    gold:
      symbols: { "0": G, "1": g }
    silver:
      symbols: { "0": S, "1": s }
    knight:
      symbols: { "0": N, "1": n }
    lance:
      symbols: { "0": L, "1": l }
    pawn:
      symbols: { "0": P, "1": p }
    elephant:
      symbols: { "0": E, "1": e }
  plugins:
    shogi:
      drops: false
      pieceMoves:
        elephant:
          type: leaper
          offsets: [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,1]]
          directional: true
        promoted_elephant:
          type: rider
          dirs: all
          maxSteps: 1
---

## Sho Shogi

{{svg:sho-shogi-board.svg "Sho Shogi — starting position"}}

Shō Shogi (小将棋, "small chess") is a 16th-century form of Shogi and the immediate predecessor of the modern game. It is played on a standard 9×9 board with the same starting position as modern Shogi, with one addition: each side has a **Drunken Elephant** placed directly in front of the King. According to the *Sho Shogi Zushiki*, the Drunken Elephant was eliminated by Emperor Go-Nara (reigned 1526–1557), and the drop rule is believed to have been introduced at roughly the same time, giving rise to modern Shogi.

### Setup

**Board:** Standard 9×9 grid.

**Pieces per player:** 21 — all standard Shogi pieces plus one Drunken Elephant.

**Starting position:** Identical to Standard Shogi, except each side has a **Drunken Elephant (E)** on the square directly in front of the King.

| Rank | Contents |
|---|---|
| Rank 1 — Gote back | Lance · Knight · Silver · Gold · King · Gold · Silver · Knight · Lance |
| Rank 2 — Gote | Rook (file b) · Drunken Elephant (file e) · Bishop (file h) |
| Rank 3 — Gote pawns | Pawn × 9 |
| Ranks 4–6 | Empty |
| Rank 7 — Sente pawns | Pawn × 9 |
| Rank 8 — Sente | Bishop (file b) · Drunken Elephant (file e) · Rook (file h) |
| Rank 9 — Sente back | Lance · Knight · Silver · Gold · King · Gold · Silver · Knight · Lance |

Sente (Black) moves first.

**SFEN:** `lnsgkgsnl/1r2e2b1/ppppppppp/9/9/9/PPPPPPPPP/1B2E2R1/LNSGKGSNL[-] b - 1`

*(E/e = Drunken Elephant; all other letters match standard Shogi notation.)*

### Pieces

All standard Shogi pieces move as normal. The Drunken Elephant is the sole addition:

**Drunken Elephant (E):** Moves one square in any of the eight directions **except** directly backward. It cannot step to the square immediately behind it (seven legal directions total). Promotes to the **Crown Prince** on reaching the promotion zone.

**Crown Prince (CP):** Moves one square in any direction (like a King). The Crown Prince is also a royal piece — if both the King and Crown Prince are on the board, both must be captured or checkmated for that player to lose. A side with a Crown Prince on the board cannot be defeated by checkmate of the King alone.

### Rules

All standard Shogi rules apply, with these exceptions:

**No drops.** Captured pieces are removed from play and do not return to the board.

**Dual royalty.** A side that has promoted its Drunken Elephant to Crown Prince requires both the King and Crown Prince to be neutralised before that side loses.

### Promotion

The promotion zone is the three ranks farthest from each player (ranks 7–9 for Sente). Standard Shogi pieces promote as normal. The Drunken Elephant promotes to Crown Prince; the Crown Prince does not promote further.

### Win Conditions

**Checkmate:** The sole remaining royal piece is in check with no legal escape. If only a King remains (no Crown Prince), standard checkmate applies. If a Crown Prince remains alongside the King, both must be simultaneously without legal escape.

### Attribution

Sho Shogi is a historical game, public domain. Rules documented from pychess.org/variants/shoshogi and H.J.R. Murray, *A History of Chess* (Oxford University Press, 1913).
