---
title: "Stern-Halma — Official Rulebook"
version: "0.2.0"
slug: "stern-halma"
players: "2–6"
duration: "20–45 min"
age: "8+"
tagline: "Race across the star board to claim the opposite point"
type: "classic"
status: "live"
updated: "2026-07-04"
published: true
variants: true
theme:
  surface: light
  tint: neutral
  texture: none
  cover: minimal
  typography: classical
  accent: slate
engine:
  topology:
    type: graph
    structure: star
  surface:
    colors:
      board-body: "#4a3728"
      board-rim: "#5c4636"
      board-felt: "#1a3a1a"
      centre: "#2e7d32"
      outline: "#1b5e20"
      hole: "#1b5e20"
      armN: "#f2e8d4"
      armNE: "#d4e4f0"
      armSE: "#e8d8ec"
      armS: "#f2e8d4"
      armSW: "#d4e4f0"
      armNW: "#e8d8ec"
  render:
    cellSize: 24
    labels: false
  pieces:
    set: fluent-emoji
  players: [red, blue, green, black, purple, brown]
how_to_play: "Race ten pieces from one arm of a six-pointed star to the opposite arm. Move one step or jump over adjacent pieces (yours or opponents') to reach empty spaces beyond. Chain multiple jumps in one move. First player to fill the opposite arm wins."
mechanics:
  - race
  - jumping
  - chain-movement
  - star-board
complexity: simple
related:
  - halma
  - draughts
  - go
unsupported:
  _family: "No rules plugin. The star board and pegs render; nothing steps, chains hops through a corridor of pieces, or recognises a filled destination arm as a win."
  standard-2p: "Two players use opposite arms."
  standard-3p: "Three players use alternating arms, each aiming at the arm opposite."
  standard-4p: "Four players use the diagonal arms, leaving north and south empty. Four seats also need per-seat goal zones, which nothing declares."
  standard-6p: "All six arms are occupied, so six seats need six goal zones."
  super-chinese-checkers: "Super Chinese Checkers additionally allows a hop over any distance - any number of empty cells before the hurdle and the same number after - so the hop is a ray scan rather than a fixed two-cell step."
---

<div class="section">

## Overview

Stern-Halma originated in Germany in 1892 as a variation of the older American game Halma. It supports two to six players and is played on a six-pointed star board with 121 holes. Each player fills one triangular arm with 10 pieces and races to move them all into the opposite arm.

The game is also widely known as Chinese Checkers, though it has no connection to China or to Checkers.

</div>

<div class="section">

## The Board

{{svg:standard-6p-board.svg "Stern-Halma — six-pointed star board, 121 holes"}}

The board is a six-pointed star formed by two overlapping equilateral triangles. It contains 121 holes:

- **6 triangular arms**, each with 10 holes arranged in four rows of 4, 3, 2, 1 (outermost to innermost)
- **Central hexagonal play area** with 61 holes

The arms point to six compass directions: N, NE, SE, S, SW, NW.

</div>

<div class="section">

## Variants

- [Standard 2-Player](variants/standard-2p/) — N vs S arms, 10 pieces each. The foundational form.
- [Standard 3-Player](variants/standard-3p/) — N, SE, SW arms (alternating). Each player crosses to the opposite arm.
- [Standard 4-Player](variants/standard-4p/) — NE, SE, SW, NW arms (diagonal pairs). N and S remain empty.
- [Standard 6-Player](variants/standard-6p/) — All six arms occupied. Maximum congestion in the centre.
- [Super Chinese Checkers](variants/super-chinese-checkers/) — Extended hop rule: pieces jump multiple empty spaces symmetrically across a hurdle.

</div>

<div class="section">

## Attribution

Stern-Halma. Originated in Germany, 1892. Public domain. Rules confirmed from ezekeal/bgg-get (BGG entry for Sternhalma) and Lehi-Innovation/boardgame-rules (independent jump-rule audit confirming chain hops, no forced jump, no capture). Board dimensions (121 holes, 6 &times; 10-hole arms, 61-hole centre) confirmed from mastersofgames.com and Wikipedia.

</div>
