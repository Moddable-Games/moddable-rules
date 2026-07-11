---
title: "Pachisi — Official Rulebook"
version: "0.1.0"
slug: "pachisi"
players: "2–4"
duration: "30–90 min"
age: "8+"
tagline: "The ancient Indian race game behind Ludo, Sorry!, and Trouble"
type: "classic"
status: "live"
updated: "2026-06-18"
published: true
variants: true
theme:
  tint: warm
  texture: crosshatch
  cover: ornate
  typography: classical
  accent: orange
engine:
  topology:
    type: grid
    rows: 19
    cols: 19
    layout: cross
  surface: wood-classic
  render:
    cellSize: 20
    cellColor: checkered
    labels: false
    castles: [[0,9],[3,8],[3,10],[8,3],[8,15],[9,0],[9,18],[10,3],[10,15],[15,8],[15,10],[18,9]]
  pieces:
    set: playstrategy-draughts-plain
  players: [yellow, green, red, blue]
---

<div class="section variant-hub">

## Variant Library

Pachisi is an ancient Indian cross-and-circle race game documented from approximately 500 CE, with precursor forms identified in the Painted Grey Ware period (c. 1100–800 BCE). The name derives from the Hindi word paccīs (twenty-five), the highest score achievable in the standard cowrie shell throw.

The game is the direct public domain ancestor of several major modern commercial titles:

- Ludo (1896, UK)
- Sorry! (1929, United States)
- Trouble (1965, United States)
- Aggravation (1962, United States)
- Parcheesi (US commercial edition)

This library documents only the original public domain Pachisi forms. Ludo, Sorry!, Trouble, and their commercial descendants are not included.

This library includes {{variant_count}} variants.

### Variants

<div class="variant-grid">

- [Standard Pachisi](variants/standard/) — 4 players, six cowrie shells, the foundational form
- [2-Player Pachisi](variants/two-player/) — 2-player adaptation with teams on the standard board
- [Seven-Shell Pachisi](variants/seven-shell/) — 7-cowrie variant with named throw values

</div>

</div>
