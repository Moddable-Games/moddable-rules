---
title: Metamachy
slug: metamachy
board: "12×12"
players: "2"
parent: moddable-chess
win: Checkmate
special: "12×12 large-board variant by Jean-Louis Cazaux (2001). Ten piece types including Gryphon, Aanca, Lion, Eagle, and Lancer. Designed to showcase the richest possible fairy piece set on a large board."
engine:
  topology:
    type: grid
    rows: 12
    cols: 12
  players: [white, black]
  notation: algebraic
published: true
---

## Metamachy

Metamachy was designed by Jean-Louis Cazaux and published in 2001. It is played on a **12×12 board** and features **ten distinct piece types**, including historical fairy pieces from Tamerlane Chess and large-board variants. The goal is to combine the most interesting piece types from the chess tradition into a single playable game.

### Setup

**White (ranks 1–3):**

- Rank 1: Rook(a) · Knight(b) · Bishop(c) · Gryphon(d) · Aanca(e) · Queen(f) · King(g) · Aanca(h) · Gryphon(i) · Bishop(j) · Knight(k) · Rook(l)
- Rank 2: Lion(a) · Eagle(b) · Lancer(c–j, 8 Lancers) · Eagle(k) · Lion(l)
- Rank 3: 12 Pawns (a3–l3)

> **Verification note:** Confirm exact starting positions from chessvariants.com/large.dir/metamachy.html. The rank 2 layout with Lion, Eagle, and Lancers is commonly cited but verify exact file positions.

**FEN (ranks 1–3):** `rnbgaqkaqbnr/lexxxxxxxxel/PPPPPPPPPPPP/...` (x = Lancer)

*(G/g = Gryphon, A/a = Aanca, L/l = Lion, E/e = Eagle, X/x = Lancer — confirm letter assignments.)*

### Pieces

| Piece | Movement |
|---|---|
| **King** | One step any direction |
| **Queen** | Slides any distance orthogonally or diagonally |
| **Rook** | Slides any distance orthogonally |
| **Bishop** | Slides any distance diagonally |
| **Knight** | Standard L-shape leap |
| **Gryphon** | One step diagonally, then any number of squares orthogonally outward (a bending slider) |
| **Aanca** | One step orthogonally, then any number of squares diagonally outward (bending slider, diagonal version) |
| **Lion** | Moves to any square within two King-steps (as in Chu Shogi); may capture one or two pieces in one move |
| **Eagle** | Moves 1–2 squares orthogonally, or 1–2 squares diagonally — a short-range version of the Queen |
| **Lancer** | Slides any distance in one specific direction determined at game start (Lance equivalent) |
| **Pawn** | One or two squares forward on first move, one square thereafter; promotes on rank 12 |

> **Verification note:** Exact movement rules for Gryphon, Aanca, Eagle, and Lancer should be confirmed from chessvariants.com/large.dir/metamachy.html.

### Rules

- **Promotion:** Pawns promote on rank 12 (White) or rank 1 (Black). Any captured piece type may be chosen.
- **Castling** may apply — verify from source.
- **Stalemate**, **repetition**, and standard end conditions apply.

### Attribution

Metamachy was designed by Jean-Louis Cazaux (2001). Rules documented from chessvariants.com/large.dir/metamachy.html.
