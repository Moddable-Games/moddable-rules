---
playable: true
title: "Shinobi+"
slug: shinobiplus
board: "8×8"
players: "2"
parent: chess
win: Checkmate or campmate (King/Kage reaches opponent's last rank)
special: "Rebalanced Shinobi Chess. The Clan (Pink) moves first, starts with most pieces in hand including a new Fox piece (Bishop+King hybrid). Kingdom Pawns promote on rank 6. Perpetual check is a loss. Designed by Couch Tomato, 2021."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [kingdom, clan]
  notation: algebraic
  asymmetric: true
  hand: true
  drops: true
  setup: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/4K3"
published: true
---

## Shinobi Chess+

{{svg:shinobiplus-board.svg "Shinobi+ — starting position"}}

Shinobi Chess+ (Shinobi+) is the rebalanced edition of Shinobi Chess, designed by Couch Tomato (2021). NNUE engine analysis revealed the Clan had a significant advantage in the base game, so Shinobi+ redistributes the Clan's starting pieces and adds a new Fox piece. The Clan now moves first.

See also: [Shinobi Chess](variants/shinobi/) — the base game.

### The Two Armies

**Kingdom (Black):** Standard FIDE army — King, Queen, 2 Rooks, 2 Bishops, 2 Knights, 8 Pawns. Kingdom Pawns promote on reaching **rank 6** of the board (earlier than standard chess rank 8).

**Clan (White/Pink, moves first):** Shogi-inspired army with most pieces starting in hand.

### Starting Position

**Kingdom (Black) on board:** Standard FIDE setup on ranks 7–8.

**Clan (White/Pink) on board:**
- Kage (K) — royal piece, moves as King — starts at **e1**
- 8 Clan Pawns — on rank 2 (a2–h2)

**Clan hand (available for drops from move 1):**
- 1 Ninja (J) — Archbishop (Bishop+Knight)
- 1 Dragon (D) — Dragon King (Rook+King)
- 1 Fox (F) — Dragon Horse (Bishop+King) — new piece in Shinobi+
- 1 Captain (C) — King movement, non-royal
- 1 Lance (L) — forward-only slider
- 1 Wooden Horse (H) — forward-only Knight
- 1 Monk (M) — Ferz (one square diagonally)

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/4K3[JDFCLHM] w kq - 0 1`

*(Uppercase = Clan/White. [JDFCLHM] = Clan hand: Ninja, Dragon, Fox, Captain, Lance, Wooden Horse, Monk. `w` = Clan moves first. `kq` = Kingdom castling rights.)*

### Key Differences from Base Shinobi

| Feature | Shinobi | Shinobi+ |
|---|---|---|
| First mover | Kingdom | **Clan** |
| Clan starting layout | More on board | Most in hand |
| Clan promotion ranks | 6–8 | 7–8 |
| Kingdom pawn promotion | Rank 8 | **Rank 6** |
| Fox piece | No | **Yes** |
| Perpetual check | Draw | **Loss** for checker |

### Clan Pieces

**Kage (K):** Moves as King. Royal piece. Wins via campmate (reach rank 8 safely).

**Pawn (P):** Moves as a standard chess Pawn. Promotes to **Captain** on reaching rank 7 or 8.

**Ninja (J):** Moves as Bishop or Knight (Archbishop). Does not promote.

**Dragon (D):** Moves as Rook or King (Dragon King). Does not promote.

**Fox (F):** Moves as Bishop or King (Dragon Horse). Does not promote. New in Shinobi+.

**Captain (C):** Moves as King, non-royal. Does not promote.

**Lance (L):** Slides any number of squares forward. Promotes to Knight on reaching ranks 7–8.

**Wooden Horse (H):** Jumps forward and sideways like a Knight, but only the two forward-moving Knight destinations. Promotes to Knight on reaching ranks 7–8.

**Monk (M):** Moves one square diagonally (Ferz). Promotes to Bishop on reaching ranks 7–8.

### Drop Rules

Clan pieces drop on the Clan's own half of the board (ranks 1–4) only. No piece may be dropped on a square that places the dropping player's own royal piece in check. Standard restrictions apply: Pawns cannot be dropped on rank 1 (no forward move), Lances cannot be dropped on rank 1, Wooden Horses cannot be dropped on ranks 1–2.

### General Rules

1. **Clan moves first.**
2. **Campmate:** moving your Kage or King to the opponent's last rank without landing in check wins.
3. **Stalemate:** loss for the player who cannot move.
4. **Perpetual check** (same position checked 4 times) is a loss for the checker.
5. **Non-check repetition** is a draw.
6. Clan cannot castle.

### Attribution

Shinobi Chess+ was designed by Couch Tomato (2021). Rules documented from pychess.org/variants/shinobiplus.
