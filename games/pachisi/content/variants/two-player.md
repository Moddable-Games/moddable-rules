---
playable: true
title: "2-Player Pachisi"
slug: two-player
board: Cross-shaped cloth board
players: "2"
parent: pachisi
order: 2
win: Move all eight pieces (two colours) home before your opponent
special: Each player controls two opposite arms. Rules otherwise identical to standard.
engine:
  topology:
    type: grid
    rows: 19
    cols: 19
  players: [red, yellow]
  # Two sides, drawn light and dark.
  pieces:
    set: playstrategy-draughts-plain
  plugins:
    pachisi:
      vocabulary: { piece: { symbols: { 0: M, 1: m } } }
      # Each player runs two opposite arms, one piece of each starting active.
      seatRoutes: [[south, north], [west, east]]
      start: [[[11,9],[7,9]], [[9,7],[9,11]]]
---

## 2-Player Pachisi

The two-player form of Pachisi, played with the same board, cowrie shells, and rules as the standard four-player game. Each player controls two sets of pieces, managing the arms on opposite sides of the board.

{{svg:two-player-board.svg "Pachisi — cross-shaped board layout with Charkoni and castle squares"}}

### Setup

**Players:** Two players.

**Piece allocation:** One player controls Yellow and Black pieces; the other controls Red and Green. Each player therefore manages eight pieces in total.

All eight pieces per player begin in the Charkoni. One piece per colour starts active (two active pieces per player at the start); remaining pieces require a grace throw to enter play.

**Equipment and cowrie shell system:** Identical to [Standard Pachisi](standard/). See the Standard rules for the full cowrie shell throw table.

### Movement

Each player may move pieces of either of their two colours on each turn. The movement path, castle squares, capture rules, and grace rules are identical to the standard four-player game.

**Capture:** A player's own pieces of different colours may not capture each other. Only opponent pieces are subject to capture.

### Winning

The first player to return all eight of their pieces (four of each colour) to the Charkoni wins.

### Attribution

Pachisi. Public domain. Two-player rules from Wikipedia (CC-BY-SA).
