---
playable: true
title: "Gustav III's Chess"
slug: gustav-iii-chess
board: "8×8 + 4 corner extensions (68 squares)"
players: "2"
parent: chess
win: Checkmate
special: "Swedish historical chess variant also known as Shakspel. Standard 8×8 chess with four extra squares added at the corners, each occupied by an Amazon (a piece combining Queen and Knight moves). Each side has 2 Amazons in addition to the standard FIDE army. Created by Gustav Johan Billberg, 1839. Jocly implementation available on chessvariants.com."
engine:
  topology:
    type: grid
    rows: 10
    cols: 10
  players: [white, black]
  render:
    cellSize: 34
    zones:
      voids: [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[1,0],[1,9],[2,0],[2,9],[3,0],[3,9],[4,0],[4,9],[5,0],[5,9],[6,0],[6,9],[7,0],[7,9],[8,0],[8,9],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8]]
  setup: "m8m/1rnbqkbnr1/1pppppppp1/10/10/10/10/1PPPPPPPP1/1RNBQKBNR1/M8M"
---

## Gustav III's Chess

{{svg:gustav-iii-chess-board.svg "Gustav III's Chess — starting position"}}

Gustav III's Chess (also called *Shakspel*) is a historical Swedish chess variant attributed to Gustav Johan Billberg (1839). It adds four extra squares at the corners of the standard 8×8 board, each housing an Amazon — a piece that combines the moves of Queen and Knight. Each player controls two Amazons in addition to the standard FIDE army.

Despite the royal attribution in its common name, the game was designed by Billberg, not by King Gustav III himself.

### The Board

A standard 8×8 board (64 squares) with four additional squares at the corners, each directly adjacent to the corner square of the main board. Total: 68 squares.

The four corner extensions are designated squares where each player's Amazons begin the game.

### The Amazon

The **Amazon** moves and captures like a **Queen or a Knight** — combining both movement types in one piece. It is the most powerful piece in the game.

### Starting Position

| Side | Pieces |
|---|---|
| White | Standard FIDE army (8 Pawns, 2 Rooks, 2 Knights, 2 Bishops, 1 Queen, 1 King) + 2 Amazons on White's two corner extensions |
| Black | Standard FIDE army + 2 Amazons on Black's two corner extensions |

The standard FIDE setup occupies ranks 1–2 for White and ranks 7–8 for Black, as in standard chess.

### Rules

All standard FIDE rules apply:
- Castling: yes (standard conditions)
- En passant: yes
- Pawn double-move on first move: yes
- Pawn promotion: yes, on reaching the opponent's back rank

The Amazons start on the four corner extensions outside the main 8×8 grid. They move freely once the game begins.

### Win Condition

Checkmate the opponent's King.

### Attribution

Created by Gustav Johan Billberg, 1839. Jocly implementation developed by Michel Gutierrez and Jean-Louis Cazaux. Source: chessvariants.com/play/jocly/gustav3-chess
