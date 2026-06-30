---
title: English Draughts
slug: english
board: "8×8"
players: "2"
parent: draughts
order: 1
win: Capture or block all opponent pieces
special: Diagonal movement only. No flying kings. Free choice between captures.
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
---

## English Draughts

The most widely known form of draughts, and the simplest to learn. Known as "Checkers" in North America. Developed in Europe around 1100 CE, probably in southern France, by adapting the older game of Alquerque to a chessboard.

{{svg:english-board.svg "English Draughts — starting position"}}

### Setup

**Board:** 8×8 checkered board (64 squares, only 32 dark squares used). Orient the board so each player has a dark corner square on their left.

**Pieces:** 12 men per player in two distinct colours. Place all 12 on the dark squares of the three rows closest to you. The two central rows remain empty.

**First move:** The player with darker pieces moves first.

### Rules

- **Men movement:** Men move diagonally forward only, one square at a time, to an unoccupied dark square. Men cannot move backwards or sideways.
- **Capturing:** A man captures by jumping diagonally forward over an adjacent opponent piece to the vacant square beyond. The captured piece is removed from the board.
- **Mandatory capture:** If a capture is available, it must be taken.
- **Multiple captures:** If after a jump another capture is immediately available, the same piece must continue jumping. A multi-capture sequence must be completed in full.
- **Free choice:** If multiple capture options exist on a turn, the player may freely choose which one to take (no majority rule in English Draughts).

### King Promotion

When a man reaches the opponent's back row (the row furthest from where it started), it is promoted to a King. A second piece is placed on top to mark it.

- Kings move diagonally in any direction (forward or backward), one square at a time.
- Kings capture diagonally in any direction by jumping over an adjacent opponent piece.
- If a man reaches the back row during a multi-capture sequence, it is promoted immediately and the sequence ends there (the new King cannot continue capturing on the same turn).

### Winning

A player wins when their opponent has no legal move available:

- All opponent pieces have been captured, or
- All remaining opponent pieces are completely blocked from moving.

### Draws

The game is a draw when:

- Both players agree to a draw.
- The same position occurs three times with the same player to move.
- 40 consecutive moves pass with no capture and no man reaching the King row.
- Neither player can force a win (e.g. one King vs one King).

### Strategy

Control the centre early. Keep a solid back row as long as possible to deny your opponent king promotions. In the endgame, a king has enormous advantage over trapped men. Sacrifice pieces to force your opponent into positions where their remaining pieces block each other.

### Attribution

English Draughts. Public domain. Rules standardised by the World Draughts Federation (FMJD) and the English Draughts Association.
