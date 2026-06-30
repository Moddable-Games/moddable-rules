---
title: German Draughts
slug: german
board: "8×8"
players: "2"
parent: draughts
order: 18
win: Capture or block all opponent pieces
special: Men capture both forwards and backwards. Flying kings. No majority capture rule.
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
---

## German Draughts

Also known as Damenspiel ("lady's game"), German Draughts is the traditional form of draughts played across Germany. It sits between English and International Draughts in complexity: men capture in all four diagonal directions (unlike English, where men only capture forwards), but there is no majority capture rule (unlike International, where the longest chain is mandatory).

{{svg:german-board.svg "German Draughts — starting position"}}

### Setup

**Board:** 8×8 checkered board. Orient the board so each player has a dark corner square on their lower left.

**Pieces:** 12 men per player in two distinct colours, placed on the dark squares of the three rows closest to each player. The two central rows remain empty.

**First move:** White moves first.

### Rules

- **Men movement:** Men move diagonally forward only, one square at a time, to an unoccupied dark square.
- **Men capture:** Men capture by jumping diagonally over an adjacent opponent piece to the vacant square beyond. Unlike English Draughts, men can capture both **forwards and backwards**.
- **Mandatory capture:** If a capture is available, it must be taken.
- **Free choice:** When multiple capture sequences are available, the player may freely choose which to take. There is no majority rule; the longest chain is not required.
- **Multi-capture:** After completing a jump, if another capture is immediately available with the same piece, the sequence must continue until no further capture is possible.

### King Promotion

When a man reaches the opponent's back row, it stops immediately and is promoted to a Dame (queen/flying king). A second piece is placed on top to mark it.

- **Promotion ends the turn:** If a man reaches the back row during a multi-capture sequence, it is promoted immediately and the turn ends. The new king cannot continue capturing in the same move.
- **Flying kings:** A Dame moves any number of unoccupied squares diagonally in any direction.
- **King capture:** A Dame captures by jumping over a single opponent piece at any distance along a diagonal, landing on any empty square beyond the captured piece.
- **No majority rule for kings either:** Even when multiple king captures are available, the player may freely choose which sequence to take.

### Winning

A player wins when their opponent has no legal move:

- All opponent pieces have been captured, or
- All remaining opponent pieces are completely blocked from moving.

### Draws

The game is drawn when:

- Both players agree to a draw.
- The same position occurs three times with the same player to move.
- Neither player can force a win.

### How it differs from other 8×8 variants

| Rule | English | German | Russian |
|---|---|---|---|
| Men capture backwards | No | **Yes** | Yes |
| Flying kings | No | **Yes** | Yes |
| Majority capture rule | No | **No** | No |
| Mid-sequence promotion continues | No | **No** | Yes |

German Draughts occupies a distinctive position: its flying kings give it more endgame depth than English, while the absence of a majority rule keeps the midgame more intuitive than International Draughts.

### Attribution

Traditional variant. Public domain. Rules documented in Parlett, D. (1999) *The Oxford History of Board Games*, p. 252. Sources: Ludeme/Ludii — Damenspiel.lud (SHA 47b7ccc6, Maastricht University Ludii Project); Checkers &amp; Draughts Wiki — Deutsches Damespiel article.
