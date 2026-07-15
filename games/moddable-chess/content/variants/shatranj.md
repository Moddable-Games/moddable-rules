---
title: Shatranj
slug: shatranj
board: "8×8"
players: "2"
parent: moddable-chess
win: Checkmate, bare king, or stalemate
special: Medieval Islamic chess. Bare king and stalemate are both wins. Ancestor of modern chess.
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rnekfenr/pppppppp/8/8/8/8/PPPPPPPP/RNEKFENR"
---

## Shatranj

The medieval Islamic form of chess, played across the Islamic world from approximately the 7th century AD. Derived from the Indian game Chaturanga and the direct ancestor of modern Western chess. Documented in medieval Arabic manuscripts and in H.J.R. Murray's *A History of Chess* (Oxford, 1913, public domain). Known in Persia as Chatrang and in the Byzantine world as Zatrikion.

{{svg:shatranj-board.svg "Shatranj — starting position"}}

### Setup

**Board:** Standard 8×8.

**Starting position:** The Shah occupies the d-file and the Ferz occupies the e-file, reversed from modern chess.

- White: Rukh a1, Faras b1, Alfil c1, Shah d1, Ferz e1, Alfil f1, Faras g1, Rukh h1; Baidaqs a2-h2.
- Black: Rukh a8, Faras b8, Alfil c8, Shah d8, Ferz e8, Alfil f8, Faras g8, Rukh h8; Baidaqs a7-h7.

**FEN:** `rnekfenr/pppppppp/8/8/8/8/PPPPPPPP/RNEKFENR w - - 0 1`

*Alternative setup:* The Shah may begin on e1 (White) or e8 (Black), with the Ferz on the adjoining d-file, provided both Shahs occupy the same file. This must be declared before play begins.

### Pieces

Each side has 16 pieces: 1 Shah, 1 Ferz, 2 Alfil, 2 Faras, 2 Rukh, and 8 Baidaq.

**Shah (King)** — moves one square in any direction, orthogonally or diagonally. May not move into, remain in, or pass through check. No castling.

**Ferz (Counsellor)** — moves exactly one square diagonally. One of the weakest pieces on the board.

**Alfil (Elephant)** — leaps exactly two squares diagonally, jumping over any intervening piece. Cannot move any other distance diagonally. Each Alfil is permanently colour-bound and can reach only 8 of the 64 squares.

**Faras (Horse)** — moves to the nearest square not on the same rank, file, or diagonal. Identical to the modern chess knight.

**Rukh (Chariot)** — moves any number of squares along a rank or file. The path must be clear.

**Baidaq (Foot Soldier)** — moves one square forward. Captures one square diagonally forward. No initial two-square advance. No en passant. Promotes to Ferz on reaching the opponent's back rank.

### Rules

White moves first. Players alternate one move per turn. A piece may not move to a square occupied by a friendly piece. Moving to a square occupied by an opponent's piece captures it and removes it from the board.

There is no castling, no en passant, and no initial double pawn advance.

### Win Conditions

**Checkmate:** The Shah is in check with no legal escape. The opponent wins.

**Bare King:** Capturing all of the opponent's pieces except the Shah wins the game. If the opponent can bare your Shah on the very next move in response, the result is a draw.

**Stalemate:** If the player to move has no legal move and the Shah is not in check, the player who delivered the stalemate wins. This is the reverse of modern chess.

### Draw Conditions

Draws occur by mutual agreement, threefold repetition of position, or the 70-move rule (no pawn move or capture in 70 consecutive moves). A simultaneous counter-bare is also a draw.

### Attribution

Rules documented in medieval Arabic manuscripts and in H.J.R. Murray, *A History of Chess* (Oxford University Press, 1913). Public domain.
