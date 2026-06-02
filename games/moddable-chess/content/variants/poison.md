---
title: "Poison Chess"
slug: "poison"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 56
win: "Checkmate"
special: "Capture squares become poisoned for 3 turns — non-king pieces landing there are destroyed."
---

## Poison Chess

Captures leave toxic residue. When a piece is captured, that square becomes poisoned for 3 turns. Any non-King piece that lands on a poisoned square is destroyed.


{{svg:poison-board.svg "Poison Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess setup.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- When a capture occurs, the capture square becomes poisoned for 3 turns.
- Any non-King piece that moves onto a poisoned square is immediately destroyed (removed from the board).
- The capturing piece itself is NOT destroyed by the poison it creates — only by pre-existing poison on that square.
- Kings cannot move onto poisoned squares — moving to poison is illegal for the King.
- Poison wears off after 3 full turns (both players moving counts as one tick).
- Multiple poisons can stack on the same square.

### Win Condition

Checkmate the opponent's King.

### Strategy

Poison creates dangerous no-go zones that restrict mobility. Exchange sequences leave clouds of poison that reshape the board. Sacrifice a minor piece to poison a critical square near the enemy King. Avoid moving valuable pieces through recently contested territory.

### Attribution

Modern variant. Public domain.
