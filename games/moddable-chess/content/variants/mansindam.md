---
title: "Mansindam (Pantheon Tale)"
slug: mansindam
board: "9×9"
players: "2"
parent: moddable-chess
win: "Checkmate, campmate (King reaches opponent's last rank), or stalemate-loss"
special: "9×9 board with powerful compound pieces (Cardinal, Marshal, Angel), Shogi-style drops, mandatory promotion, campmate, and no draws. Designed by Couch Tomato."
engine:
  topology:
    type: grid
    rows: 9
    cols: 9
  players: [white, black]
  notation: algebraic
  drops: true
  promotion_zone: [7, 8, 9]
published: true
status: draft
updated: 2026-07-07
category: drop-mechanics
tags:
  - drops
  - campmate
  - no-draws
  - shogi-inspired
  - couch-tomato
---

## Mansindam (Pantheon Tale)

*A variant that combines Shogi's drop rule with strong compound pieces, and has no draws.*

Mansindam is a chess variant designed by Couch Tomato. It takes two of Shogi's most distinctive mechanics — dropping captured pieces back onto the board, and mandatory promotion on entering the enemy camp — and combines them with a set of powerful compound pieces drawn from the fairy chess tradition. The result is a game with dramatically more tactical complexity than standard chess, no drawing mechanisms, and two additional win conditions beyond checkmate.

### The Board

Mansindam is played on a **9×9 board** (9 files × 9 ranks). Ranks are numbered 1–9 from White's side. Files are lettered a–i.

### Starting Position

**White (Yang):**
- Rank 1: Marshal(a) · Knight(b) · Cardinal(c) · Queen(d) · King(e) · Angel(f) · Bishop(g) · Knight(h) · Rook(i)
- Rank 2: empty
- Rank 3: 9 Pawns (a3–i3)

**Black (Eum):**
- Rank 9: Rook(a) · Knight(b) · Bishop(c) · Angel(d) · King(e) · Queen(f) · Cardinal(g) · Knight(h) · Marshal(i)
- Rank 8: empty
- Rank 7: 9 Pawns (a7–i7)

**FEN:** `rnbakqcnm/9/ppppppppp/9/9/9/PPPPPPPPP/9/MNCQKABNR[] w - - 0 1`

*(R/r = Rook, N/n = Knight, B/b = Bishop, A/a = Angel, K/k = King, Q/q = Queen, C/c = Cardinal, M/m = Marshal, P/p = Pawn. [] denotes empty drop pocket. White (Yang) moves first.)*

### Promotion Zone

Ranks 7–9 are the **enemy camp** for White. Ranks 1–3 are the enemy camp for Black.

A piece promotes when it **moves to, moves from, or moves within** the enemy camp. **Promotion is mandatory.** On a physical board, the piece is flipped upside-down as in Shogi.

Promoted pieces revert to their pre-promotion state if captured. Pieces are always **dropped in their pre-promotion state**.

The following pieces **do not promote:** Queen, Angel, King.

### Pieces

Every promoted piece gains the ability to move as a non-royal King (one square any direction) in addition to its base movement.

| English | Symbol | Moves as | Promotes to |
|---|---|---|---|
| Pawn | P | One step orthogonally forward | Guard (King non-royal) |
| Knight | N | L-shaped leap | Centaur (Knight + King) |
| Bishop | B | Any number diagonally | Archer (Bishop + King) |
| Rook | R | Any number orthogonally | Tiger (Rook + King) |
| Cardinal | C | Bishop + Knight | Rhino (Bishop + Knight + orthogonal step) |
| Marshal | M | Rook + Knight | Ship (Rook + Knight + diagonal step) |
| Queen | Q | Rook + Bishop | Does not promote |
| Angel | A | Rook + Bishop + Knight | Does not promote |
| King | K | One square any direction (royal) | Does not promote |

### The Drop Mechanic

Any piece a player captures goes to their hand. On any turn instead of moving, a player may **drop a hand piece** onto any empty square.

**Drop rules:**
- One piece per turn.
- Always dropped in pre-promotion state.
- A drop in the enemy camp is **not** automatically promoted; it only promotes when subsequently moved.
- Delivering check or checkmate by drop is legal.
- Pawns: may not be dropped if two unpromoted Pawns already occupy the same file. May not be dropped on the last rank. **Delivering checkmate by Pawn drop is legal** (unlike Shogi).

### Win Conditions

**Checkmate:** King has no legal escape from attack. **Campmate:** move your King to the opponent's last rank without landing in check. **Stalemate-loss:** a player with no legal move and no legal drop loses.

**No draws.** Threefold repetition is prohibited rather than drawn (the player who would create the third occurrence must play a different move or loses). No 50-move rule.

### Attribution

Mansindam (Pantheon Tale) was designed by Couch Tomato. Rules documented from pychess.org/variants/mansindam.
