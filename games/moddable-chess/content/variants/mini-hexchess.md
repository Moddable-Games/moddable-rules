---
title: Mini Hexchess
slug: mini-hexchess
board: "37 hexes (7 files a–g)"
players: "2"
parent: moddable-chess
win: Checkmate
special: "37-hex board, 7 files, no Queen piece. All 7 opponent-side hexes are promotion squares. Promotes to R/B/N only. Invented Dave McCooey, 1997."
engine:
  topology:
    type: hex
    cells: 37
    files: 7
    file_labels: ["a","b","c","d","e","f","g"]
  surface: wood-classic
  render:
    cellSize: 28
    cellColor: tricolor
    frame: true
  pieces:
    set: mce-fairy-complete
  players: [white, black]
  setup: "-1,-2:n,-1,0:p,-1,1:P,-1,3:N,-2,-1:r,-2,0:p,-2,2:P,-2,3:R,0,-1:b,0,-2:b,0,-3:k,0,0:p,0,1:B,0,2:B,0,3:K,1,-1:p,1,-3:n,1,0:P,1,2:N,2,-2:p,2,-3:r,2,0:P,2,1:R"
published: true
---

## Mini Hexchess

Invented by Dave McCooey in 1997. A compact hexagonal chess on a 37-hex board with 7 files (a through g). The Queen is not used. Otherwise follows McCooey's hexagonal chess rules.

### Setup

**Board:** 37-hex grid, 7 files (a–g).

**Pieces per side:** King, 2 Rooks, 2 Bishops, 2 Knights, and Pawns. No Queen.

{{svg:mini-hexchess-board.svg "Mini Hexchess — starting position"}}

### Key Differences from McCooey

| Rule | McCooey | Mini Hexchess |
|------|---------|---------------|
| Board | 91 hexes | 37 hexes |
| Files | 11 (a–k) | 7 (a–g) |
| Queen | Yes | No |
| Initial double step | Allowed | None |
| En passant | Yes | No (no double step) |
| Promotion targets | Q, R, B, N | R, B, N only |
| Promotion squares | Furthest rank per file | All 7 opponent-side hexes |

### Promotion

All 7 hexes on the opponent's side of the board are promotion squares. A pawn reaching any of these hexes promotes immediately to Rook, Bishop, or Knight. Promotion to Queen is not permitted as the Queen is not part of this variant.

### Rules

All other rules follow McCooey's Hexagonal Chess. No castling. Stalemate is a draw.

### Win Condition

Checkmate.

### Attribution

Dave McCooey, 1997. Published on chessvariants.com. Public domain rules.
