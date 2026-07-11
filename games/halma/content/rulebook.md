---
title: "Halma — Official Rulebook"
version: "0.1.0"
slug: "halma"
players: "2–4"
duration: "15–45 min"
age: "8+"
tagline: "Race your pieces across the board before your opponent"
type: "classic"
status: "live"
updated: "2026-06-19"
published: true
variants: true
theme:
  tint: warm
  texture: grain
  cover: solid
  typography: classical
  accent: brown
engine:
  topology:
    type: grid
    rows: 16
    cols: 16
  render:
    cellSize: 20
    cellColor: checkered
    labels: false
  surface:
    colors:
      cell-light: "#f5e6c8"
      cell-dark: "#e8d4a8"
  pieces:
    set: playstrategy-draughts-plain
    vocabulary:
      b: bM
      w: wM
  players: [white, black]
---

<div class="section variant-hub">

## Variant Library

Halma is an abstract strategy race game invented in 1883 by George Howard Monks, an American surgeon in Boston. Played on a 16&times;16 checkered board, each player occupies a triangular corner camp and races all their pieces to the diagonally opposite camp. Pieces may step to any adjacent square or chain-hop over any adjacent piece without capturing.

This library includes {{variant_count}} playable variants.

<div class="variant-grid">

- [Standard 2-Player](variants/standard-2p/) &mdash; 19 pieces per player on a 16&times;16 board, two opposing corner camps
- [Standard 4-Player](variants/standard-4p/) &mdash; 13 pieces per player, one camp in each of the four corners

</div>

</div>
