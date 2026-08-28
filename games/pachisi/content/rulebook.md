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
  render:
    cellSize: 20
    cellColor: checkered
    labels: false
    castles: [[0,9],[3,8],[3,10],[8,3],[8,15],[9,0],[9,18],[10,3],[10,15],[15,8],[15,10],[18,9]]
    ops:
      - op: rect
        fill: transparent
        scope: board
      - op: cells
        pattern: cross
        light: cell-light
        dark: cell-dark
        castles: [[0,9],[3,8],[3,10],[8,3],[8,15],[9,0],[9,18],[10,3],[10,15],[15,8],[15,10],[18,9]]
        typeColors:
          floor: floor
          castle: castle
          home: home
        typeStrokes:
          floor: floor-stroke
          castle: castle-stroke
          home: home-stroke
        decorations:
          castle: castle-x
        castleXColor: castle-x
  surface:
    colors:
      floor: "#f0d5a0"
      floor-stroke: "#8b6545"
      castle: "#c0622f"
      castle-stroke: "#8b6545"
      castle-x: "#fff8f0"
      home: "#8b1a1a"
      home-stroke: "#6a1212"
  pieces:
    set: playstrategy-draughts-plain
  players: [yellow, green, red, blue]
how_to_play: "Race four pieces around a cross-shaped board from your home to the opposite side. Throw cowrie shells for movement, land on castle squares for safety, and capture opponent pieces to send them home. Direct ancestor of Ludo, Sorry!, and Trouble."
mechanics:
  - race
  - dice-throwing
  - capture
  - safe-spaces
  - cross-and-circle
complexity: simple
related:
  - nyout
  - chaupar
  - backgammon
unsupported:
  _family: "No rules plugin. Pachisi is a cross-and-circle race and needs a track the engine does not build: four arms joined into one circuit, each seat entering and leaving at a different point, with castle squares that grant safety and a piece sent home when landed on."
  seven-shell: "Seven shells with named throw values, so the same non-uniform generator with a different table."
  standard: "Randomisation is six cowrie shells rather than dice, with grace rolls on 0, 1 or 6 mouths up - a non-uniform generator that has to be declared rather than assumed to be a d6."
  two-player: "Each player runs two opposite arms, so one seat owns two entry points and two home paths."
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

### Attribution

Pachisi. Documented in Murray, *A History of Board Games Other Than Chess* (1952), and at en.wikipedia.org and tradgames.org.uk. Public domain.
