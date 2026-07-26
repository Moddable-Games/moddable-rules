---
title: "Gadsden's Toroidal Chess"
slug: toroidal-chess
board: "8×8 torus"
players: "2"
parent: chess
win: Checkmate
special: "Chess on a torus — all four edges wrap. Moving off the right edge (h-file) reappears on the left (a-file); moving off rank 8 reappears on rank 1. Every square has exactly 8 neighbours; there are no edge squares and no corner squares. Uses a three-rank starting position per side with an extra set of pawns (32 pawns total). Invented around 1990 by Richard Gadsden and Phil Roberts as a variant of Cylindrical Chess."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
    wrap: torus
  players: [white, black]
  setup: "pppppppp/rnbqkbnr/pppppppp/8/8/PPPPPPPP/RNBQKBNR/PPPPPPPP"
  notation: algebraic
published: true
---

## Gadsden's Toroidal Chess

Gadsden's Toroidal Chess is chess played on an 8×8 torus — a surface where all four edges connect to the opposite edge. Moving off the right edge (past the h-file) reappears at the a-file on the same rank; moving off rank 8 reappears at rank 1 on the same file. Diagonal moves wrap in both dimensions simultaneously. The game was invented around 1990 by Richard Gadsden and Phil Roberts as a natural extension of Cylindrical Chess, and played by the inventors at school.

The topology is equivalent to wrapping an 8×8 chessboard around itself in both directions, like a donut. Every square is equivalent: there are no edge squares and no corner squares. Every piece on every square has access to its full normal move range (modulo the board wrapping).

Gadsden, describing the game himself: "It's a bit like cylindrical chess, but even worse." And: "We played several games, and it's fun, but I've regularly put someone into check and not realised. This is a problem."

### Equipment

A standard 8×8 board plus an extra set of 16 pawns (32 pawns total, 16 per side). Note this is a genuinely larger army than standard chess — not a cosmetic difference from the frontmatter's board dimensions.

### Starting Position

Each side occupies three ranks at their end of the board:

| Rank | White | Black |
|---|---|---|
| 1 / 8 | Pawns (a1–h1) | Pawns (a8–h8) |
| 2 / 7 | Rook a2, Knight b2, Bishop c2, Queen d2, King e2, Bishop f2, Knight g2, Rook h2 | Rook a7, Knight b7, Bishop c7, Queen d7, King e7, Bishop f7, Knight g7, Rook h7 |
| 3 / 6 | Pawns (a3–h3) | Pawns (a6–h6) |

The `engine.setup` FEN above encodes this rank-by-rank: rank 8 pawns, rank 7 pieces, rank 6 pawns, ranks 5–4 empty, rank 3 pawns, rank 2 pieces, rank 1 pawns. Confirmed directly against the source's interactive setup diagram, 2026-07.

### Pawn Rules

- **Front-rank pawns** (rank 1 for White, rank 8 for Black): may advance only one square on their first move (not two)
- **Rear-rank pawns** (rank 3 for White, rank 6 for Black): may advance two or three squares on their first move
- Pawns move forward only; they treat the board as a cylinder since they have no backward movement

### Wrapping

All pieces — including sliders — wrap in all directions:
- A Rook on a4 moving left exits the a-file and reappears on h4, then g4, etc.
- A Rook on e8 moving forward exits rank 8 and reappears on e1, then e2, etc.
- A Bishop on h1 moving diagonally exits the corner and reappears on a2 (wrapping both dimensions simultaneously)
- Knights wrap normally; a Knight on b1 can leap to a square on rank 8 via the vertical wrap

### Other Rules

All standard FIDE chess rules apply except as modified by the wrapping edges. Castling and en passant apply on standard conditions.

The game plays significantly differently from standard chess: long-range pieces can attack from seemingly unrelated directions, discovered checks can come from unexpected angles, and the king can never retreat to a 'safe corner' since there are no corners. Players regularly put each other in check without realising it due to the unfamiliar attack vectors — a problem the inventor himself noted.

### Attribution

Gadsden's Toroidal Chess was invented around 1990 by Richard Gadsden and Phil Roberts. Source: chessvariants.com/other.dir/torus.html, including the inventor's own description and interactive setup diagram.
