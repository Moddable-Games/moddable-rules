---
playable: true
title: Fevga
slug: fevga
board: "24-point board"
players: "2"
parent: backgammon
order: 5
win: Bear off all 15 pieces before your opponent
special: "No blots allowed: a point with one of your pieces is immediately blocked to the opponent. No hitting."
engine:
  topology:
    type: track
    positions: 24
  players: [white, black]
  plugins:
    backgammon:
      # Both sides travel the same way round from diagonally opposite corners.
      movement: same
      start: [12, 0]
      contact: block
      firstPast: true
      gammons: false
  setup: "0:15B,12:15W"
---

## Fevga

A Greek Backgammon variant in which a point occupied by even a single piece is closed to the opponent — there is no such thing as a blot in Fevga. The result is a pure blocking and racing game. Fevga is the third game in the Greek Tavli set, played after Portes (standard Backgammon) and Plakoto.


{{svg:fevga-board.svg "Fevga — starting position"}}
### Components

| Item | Qty | Notes |
|------|-----|-------|
| **Board** | 1 | 24-point board |
| **Checkers** | 30 | 15 per player |
| **Dice** | 4 | 2 per player |

### Setup

Both players start with all 15 checkers on their own 24-point, in diagonally opposite corners of the board. Both move the same way round, counter-clockwise, so each travels through the opponent's starting quarter to reach home.

### Movement

Roll two dice each turn and move forward (toward your 1-point).

**No blots:** Every point occupied by one or more of your pieces is immediately closed to the opponent. There is no concept of a blot — you cannot be hit and you cannot hit.

**Blocking:** Since any single piece closes a point, one-piece blockades are powerful from the start of the game.

**First-piece restriction:** Before a second checker may leave your starting point, your first checker must travel past the opponent's starting point.

### Bearing Off

Once all 15 of your pieces are in your home board (points 1–6), bear off normally.

### Winning

First to bear off all 15 pieces wins.

### Attribution

Fevga. Traditional game, Greece. Part of the Tavli family. Public domain. Source: Wikipedia (CC-BY-SA).
