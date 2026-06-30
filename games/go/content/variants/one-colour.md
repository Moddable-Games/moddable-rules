---
title: One-Colour Go
slug: one-colour
board: "19×19"
players: "2"
parent: go
order: 7
win: Most territory at game end
special: Both players use identical stones. Must remember which are yours. Extreme memory challenge.
engine:
  topology:
    type: grid
    rows: 19
    cols: 19
  players: [black, white]
---

## One-Colour Go

Both players use stones of the same colour. All other rules are unchanged. Players must remember which stones belong to whom. A referee (or agreed record) tracks ownership secretly. The ultimate memory and visualisation challenge.

{{svg:go-19x19-board.svg "One-Colour Go — standard board"}}

### Setup

Standard board (any size). All stones are the same colour (traditionally all black or all white). A referee or written record tracks which stones belong to which player. Black plays first as normal.

### Rules

All standard Go rules apply. The only change is visual: both players' stones look identical on the board.

- Captures still work normally: a group with zero liberties is removed regardless of appearance.
- Ko applies normally: the referee tracks the position.
- If a player attempts an illegal move (placing on an occupied intersection, violating ko, or suicide), the referee informs them and they must choose a different move.

### Practical Implementation

- **With referee:** One person sits between players, marks ownership on a hidden diagram.
- **Online:** Software tracks ownership and displays an undifferentiated board to both players.
- **Training solo:** Play both sides using one colour. Strong professionals use this as a reading exercise.

### Strategy

One-Colour Go rewards players who naturally visualise board positions without relying on colour cues. It exposes whether your reading is truly deep (based on understanding group structure) or shallow (based on pattern-matching colours). Strong professionals can play full 19×19 games this way. For most players, 9×9 is a challenging starting point.

### Attribution

Training variant used by professional Go players. Public domain. Source: Sensei's Library.
