---
title: Stupidhouse
slug: stupidhouse
board: "2× 8×8"
players: "4 (2 teams of 2)"
parent: chess
win: Checkmate either opposing King
special: "Bughouse chess variant where received pieces are placed on a randomly selected empty square rather than a player-chosen square. When a player captures a piece, it passes to their partner — but when the partner uses it, it lands on a random legal empty square instead of a chosen one. Removes strategic drop placement and replaces it with chaos."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
    boards: 2
  players: [white1, black1, white2, black2]
  render:
    cellSize: 34
  setup:
    - "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
    - "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
  notation: algebraic
published: true
---

## Stupidhouse

{{svg:stupidhouse-board.svg "Stupidhouse — starting position"}}

Stupidhouse is a Bughouse chess variant that modifies the drop mechanic: when a player uses a received piece, it is placed on a **randomly selected legal empty square** rather than on a square of the player's choosing. This removes the strategic core of Bughouse — targeted drops — and replaces it with unpredictable chaos.

### Setup and Teams

Identical to Bughouse / Tandem Chess:
- Two standard 8×8 boards
- Four players in two teams: Team A (White on Board 1, Black on Board 2) vs Team B (Black on Board 1, White on Board 2)
- Partners play on different boards with opposite colours

### Play

As in Bughouse:
1. Games run simultaneously
2. On your turn you may make a normal chess move, or drop a received piece onto the board
3. When you capture an enemy piece, it passes face-down to your partner

**The Stupidhouse twist:** When a player drops a received piece, they do not choose the square. The piece lands on a randomly determined empty square from all legal drop squares. (Standard drop restrictions apply: no Pawn on the 1st or 8th rank, no dropping into check.)

### Win Condition

Checkmate either opposing King. The first team to checkmate an opposing King wins.

### Attribution

Stupidhouse is a Bughouse variant documented on chessvariants.com.
