---
title: Gomoku
slug: gomoku
board: "15×15"
players: "2"
parent: go
order: 5
win: Five in an unbroken row
special: Black plays first. Stones are placed, never moved. No captures.
engine:
  topology:
    type: grid
    rows: 15
    cols: 15
    layout: intersections
  players: [black, white]
  setup: ""
---

## Gomoku

Gomoku, also known as Five in a Row, is a two-player strategy board game. Players use black and white pieces, taking turns placing them on the intersections of horizontal and vertical lines on the board. The first player to form an unbroken line of five pieces horizontally, vertically, or diagonally wins the game.

{{svg:gomoku-board.svg "Empty 15×15 board — Gomoku"}}

Since 1899, when Japanese chess player Kuroi Iwa Ruiko proved that the original rules of Gomoku guaranteed a win for the first player, Gomoku has undergone continuous improvement. After decades of modifications, verifications, and further revisions, a version with added forbidden moves was developed. This version was publicly named Renju, and the rules were formalised in Japan. The original rules are still played and are referred to as "no-ban rules" or "free-style rules".

### Setup

**Board:** 15×15 intersections. The game is also playable on a full 19×19 Go board using 15×15 of the intersecting lines.

**Pieces:** Black and white stones.

**First move:** Black plays first.

### Rules

Players take turns placing one stone per turn on any empty intersection. Stones are never moved or captured after placement.

The first player to form an unbroken line of five pieces horizontally, vertically, or diagonally wins. In the Standard version, rows of more than five consecutive pieces do not count as a win.

### Terminology

- **Five in a Row:** Five consecutive pieces of the same colour in a horizontal, vertical, or diagonal line.
- **Open Four:** A row of four pieces with both ends open, allowing for two ways to form Five in a Row.
- **Closed Four:** A row of four pieces with only one end open, allowing for one way to form Five in a Row.
- **Open Three:** A formation that can become an Open Four, including both continuous and jump open threes. A jump open three has one piece separated but still within five spaces.
- **Overline:** A line of more than five consecutive pieces of the same colour.

### Attribution

Ancient Chinese placement game. Public domain. Origin: Japan, around 1905. Source: Murray 1951: 50.
