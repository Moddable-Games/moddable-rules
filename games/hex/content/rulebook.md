---
title: "Hex — Official Rulebook"
version: "0.1.0"
slug: "hex"
players: "2"
duration: "15–45 min"
age: "8+"
tagline: "Connect your two edges across a diamond of hexagons"
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
    type: hex
    shape: rhombus
    orientation: pointy
  surface: slate
  render:
    cellSize: 20
    cellColor: uniform
    frame: rhombus
    labels: false
  pieces:
    set: playstrategy-go-classic
  players: [black, white]
---

<div class="section">

## Overview

Hex is a two-player connection game played on a rhombus-shaped board of hexagonal cells. Each player is assigned two opposite edges of the board and takes turns placing a stone of their colour on any empty cell. The first player to form a connected chain of their stones linking their two edges wins. A draw is impossible due to the board's topology.

Independently invented by Piet Hein (1942) and John Nash (1948). The game has deep mathematical properties and was one of the earliest games proven to have a first-player winning strategy (by strategy-stealing argument), though no efficient strategy is known.

</div>

<div class="section">

## Variants

- [Y](variants/y-game/) — Triangular hex board. Win by connecting all three edges with a single chain.

</div>

<div class="section">

## Attribution

Hex. Invented independently by Piet Hein (1942, Denmark) and John Nash (1948, Princeton). Public domain. Rules confirmed from Wikipedia and BGG.

</div>
