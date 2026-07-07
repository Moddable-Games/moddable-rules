---
title: "Khan's Chess"
slug: khans-chess
board: "8×8"
players: "2"
parent: moddable-chess
win: "Checkmate or campmate (King reaches opponent's back rank)"
special: "Standard FIDE Kingdom vs Mongol Horde cavalry with divergent pieces. Scouts replace Pawns, Khatun replaces Yurt. Campmate and stalemate-loss. Designed by Couch Tomato, 2023–24."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  notation: algebraic
  asymmetric: true
published: true
status: draft
updated: 2026-07-07
category: asymmetric-armies
tags:
  - asymmetric
  - divergent-pieces
  - campmate
  - couch-tomato
---

## Khan's Chess

Khan's Chess is an asymmetric chess variant designed in 2023–24 by Couch Tomato. It is a refined successor to Orda Chess, pitting the standard Kingdom army against a Mongol-themed Horde cavalry force. Like Orda Chess, all Horde pieces (except the Khan and Kheshig) use divergent movement — they move differently from how they capture. Unlike Orda Chess, the Horde's pawns are replaced by Scouts and the Yurt by the Khatun.

### The Two Armies

**Kingdom (White):** Standard FIDE — King, Queen, 2 Rooks, 2 Bishops, 2 Knights, 8 Pawns.

**Horde (Gold, Black):** Khan, Khatun, 2 Kheshigs, 2 Horse Archers, 2 Lancers, 8 Scouts.

### Starting Position

**Kingdom (White):**
- Rank 1: Rook · Knight · Bishop · Queen · King · Bishop · Knight · Rook
- Rank 2: 8 Pawns

**Horde (Gold/Black):**
- Rank 8: Lancer(a) · Kheshig(b) · Horse Archer(c) · Khatun(d) · Khan(e) · Horse Archer(f) · Kheshig(g) · Lancer(h)
- Rank 7: 8 Scouts

**FEN:** `lhatkahl/ssssssss/8/8/8/8/PPPPPPPP/RNBQKBNR w KQ - 0 1`

*(L/l = Lancer, H/h = Kheshig, A/a = Horse Archer, K = Khan (Horde royal) / King (Kingdom royal), T/t = Khatun, S/s = Scout. White (Kingdom) moves first.)*

### Horde Pieces

All Horde pieces except the Khan and Kheshig are **divergent**: they move differently from how they capture.

| Piece | Kingdom Counterpart | Moves as | Captures as |
|---|---|---|---|
| Khan | King | King | King |
| Kheshig (H) | Knight | Knight + King | Knight + King |
| Khatun (T) | Queen | Knight | King |
| Horse Archer (A) | Bishop | Knight | Bishop |
| Lancer (L) | Rook | Knight | Rook |
| Scout (S) | Pawn | Knight (4 forward destinations only) | One square directly forward |

**Khan:** Royal piece. Moves and captures as a King. Cannot castle.

**Kheshig:** Moves and captures as Knight + King (Centaur). The strongest Horde piece; non-royal.

**Khatun:** Moves as a Knight but captures as a King (one step any direction). Non-royal. Scouts promote only to Khatun.

**Horse Archer:** Moves as a Knight but captures as a Bishop (diagonally any distance). Not colourbound.

**Lancer:** Moves as a Knight but captures as a Rook (orthogonally any distance).

**Scout:** Moves using only the four forward-facing Knight jump destinations. Captures one square directly forward. Promotes to Khatun only on reaching rank 1.

### General Rules

1. **White (Kingdom) moves first.**
2. **Horde cannot castle.** The Khan has no castling right.
3. **Stalemate is a loss** for the player who cannot move.
4. **Campmate:** move your King/Khan to the opponent's back rank without moving into check — this wins immediately.
5. Kingdom Pawns promote normally (Queen, Rook, Bishop, or Knight). **Scouts promote only to Khatun.**
6. All other rules (en passant, repetition, check and checkmate) follow standard chess.

### Attribution

Khan's Chess was designed by Couch Tomato (2023–24). Rules documented from pychess.org/variants/khans.
