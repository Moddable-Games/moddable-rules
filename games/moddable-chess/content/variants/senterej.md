---
title: "Senterej"
slug: senterej
board: "8×8"
players: "2"
parent: moddable-chess
win: "Checkmate"
special: "Ethiopian Shatranj variant with a unique mobilization phase: before the first capture, both players move simultaneously without turns. Shatranj-style pieces (Fil leaps diagonally 2, Ferz moves 1 diagonal). No castling, no en passant."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rnbkqbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
---

# Senterej

**Senterej (Amharic: ሰንጣረሥ) — Ethiopian and Eritrean chess. The last popular survival of Shatranj; became extinct after the Italian invasion of Ethiopia in the 1930s.**

## Overview

{{svg:senterej-board.svg "Senterej — starting position"}}

Senterej is the traditional chess of Ethiopia and Eritrea, descended directly from Shatranj. Its most distinctive feature is the **werera** (mobilization) phase: before the first capture, both players move simultaneously and freely, watching each other and adjusting their positions. Turn-based play begins only after a piece is first captured.

## Setup

Each King stands just to the right of the centerline from its player's point of view; the Ferz stands to the King's left.

```
FEN: rnbkqbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w - - 0 1
(Piece legend: Q/q = Ferz, B/b = Fil, N/n = Feresenya)
```

**White (rank 1):** Rook(a1), Feresenya(b1), Fil(c1), Ferz(d1), King(e1), Fil(f1), Feresenya(g1), Rook(h1)
**White (rank 2):** Pawns a2–h2

**Black (rank 8):** Rook(a8), Feresenya(b8), Fil(c8), King(d8), Ferz(e8), Fil(f8), Feresenya(g8), Rook(h8)
**Black (rank 7):** Pawns a7–h7

*Note: Black’s King (d8) and Ferz (e8) are swapped compared to standard chess, as each King is to the right of its Ferz from that player’s perspective.*

## Pieces

**King (Negus)**: moves one step in any direction, as in standard chess.

**Ferz**: moves exactly one square diagonally. (Regional variation: some sources say it moves one step in any direction but can only *capture* diagonally.)

**Fil / Alfil (Saba)**: leaps exactly two squares diagonally (the Alfil leap). Jumps over intervening pieces. Colour-bound.

**Feresenya (Horseman)**: moves as a standard chess Knight (L-shape leap).

**Der (Rook)**: slides any distance orthogonally, as in standard chess.

**Medeq (Pawn)**: advances one square forward; captures one square diagonally forward. No double first move, no en passant. Promotes to Ferz upon reaching the farthest rank. (Some sources: promotes to the rank of any piece already captured.)

## Rules

### Werera — Mobilization Phase

Before the first capture, **both players move simultaneously and freely**. There are no turns: each player may move any of their pieces as many times as they wish, watching the opponent’s moves and adjusting their own accordingly. Moves may be retracted and substituted at will during this phase. The werera ends the moment any piece is captured; from that point on, players alternate turns as in standard chess.

### Turn-Based Play

After the werera ends, all remaining rules are standard Shatranj-style:
- Players alternate turns; each turn one piece moves.
- No castling.
- No en passant.
- No pawn double push.

### Win and Draw Conditions

**Win**: Checkmate the opponent’s King.

**Draw — Bare King**: A King that has been stripped of all pieces (excluding Pawns) cannot be mated; the game is drawn. (Only Pawns remaining — does not count as sufficient support.)

**Draw — Lone Support**: A King with only a single supporting piece (excluding Pawns) can only be mated before that piece has made **seven moves**. If seven moves elapse and no mate is delivered, the game is drawn.

## Customs

Traditionally the board is an uncheckered red cloth marked with black or blue strips. Play is sociable: bystanders (including historically even slaves) may call out suggestions and demonstrate moves on the board. Checkmate etiquette is specific: mating with a Rook or Knight is considered inartistic; mating with a Ferz or Fil is respectable; mating with a combination of Pawns is the most praiseworthy finish.

*Sources: en.wikipedia.org/wiki/Senterej; Murray, A History of Chess (1913), pp. 362–64; Pritchard, Encyclopedia of Chess Variants, p. 104*
