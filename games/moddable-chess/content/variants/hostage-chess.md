---
title: Hostage Chess
slug: hostage-chess
board: "8×8"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Invented by John Leslie (1997). Captured pieces become hostages in the opponent's prison. Ransom a hostage by dropping a piece of the same type from your own captured set. Combining drop mechanics with strategic prisoner exchange."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  notation: algebraic
  hand: true
  drops: true
published: true
---

## Hostage Chess

Hostage Chess was invented by John Leslie and published in 1997. It is standard chess with a **prisoner exchange** mechanic: when you capture an opponent's piece, it becomes your **hostage**. To get one of your own captured pieces back, you must **ransom** it by giving the opponent one of their pieces from your hostage collection.

### Terminology

- **Prison:** the collection of opponent pieces you have captured (your "hostages").
- **Hostage:** a piece held in the opponent's prison.
- **Drop:** placing a freed piece back onto the board instead of making a normal move.

### Setup

Standard 8×8 chess starting position. Both prisons start empty. White moves first.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR[] w KQkq - 0 1`

*(Empty hand notation `[]` for both sides.)*

### Capture and Ransom

When you **capture** an opponent's piece:
- The captured piece goes into **your prison** (your collection of opponent hostages).
- The captured piece is immediately available for ransom by the opponent.

To **ransom** one of your own captured pieces (retrieve it from the opponent's prison):
- On your turn, instead of making a normal move, you **give the opponent one piece from your prison** (matching or non-matching type, as agreed — see variant rules below).
- The ransom piece goes into the opponent's prison.
- You then **drop your freed piece** onto any empty square on the board.
- The drop follows standard drop restrictions: Pawns may not be dropped on rank 1 or rank 8; you may not drop into checkmate.

### Ransom Restriction

**Type-for-type ransom** (standard rule): to free one of your pieces from the opponent's prison, the piece you pay as ransom must be of **the same type** as the piece you are freeing. E.g., to retrieve your captured Queen, you must give the opponent a Queen from their pieces in your possession. If you don't have a matching type, you cannot ransom that piece.

**Free ransom** (variant): any piece may be given for any piece. Confirm which rule is in use.

### Drop Rules

- Drops occur on the same turn as the ransom payment.
- A freed piece drops **onto any empty square** (not just your own territory).
- Pawns may not be dropped on ranks 1 or 8.
- Drop-checkmate is **legal**.
- A dropped Pawn does not have double-step rights (it moves one square forward).

### General Rules

All standard chess rules otherwise apply: castling, en passant, pawn promotion (promoted pieces are handled as Queens for prison purposes — verify exact rule), stalemate as draw, threefold repetition as draw, 50-move rule.

**Check:** you may not make a move (including a ransom-and-drop) that leaves your King in check.

### Attribution

Hostage Chess was invented by John Leslie (1997). Rules documented from chessvariants.com/other.dir/hostage.html.
