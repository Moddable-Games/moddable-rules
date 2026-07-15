---
title: "Go — Official Rulebook"
version: "0.3.0"
slug: "go"
players: "2"
duration: "15–180 min"
age: "8+"
tagline: "Four thousand years of emergent complexity from one rule"
type: "classic"
status: "live"
updated: "2026-06-22"
published: true
variants: true
theme:
  tint: neutral
  texture: none
  cover: minimal
  typography: classical
  accent: green
engine:
  topology:
    type: grid
    rows: 19
    cols: 19
    layout: intersections
  surface:
    colors:
      cell-light: "#dcb35c"
      cell-dark: "#d4a843"
      stroke: "#3d2b1a"
      label-text: "#5a4020"
      star-point: "#3d2b1a"
  render:
    cellSize: 20
    labels: true
    inset: 15
    idStyle: go
    ops:
      - op: rect
        fill: cell-light
        scope: board
      - op: rect
        fill: cell-dark
        scope: grid
        rx: 2
      - op: grid-lines
        grouped: true
        order: hv
        color: stroke
        width: 0.8
      - op: markers
        grouped: true
        fill: star-point
        at: auto-star-points
        radius: 3
      - op: hit-targets
        grouped: true
        radiusFactor: 0.45
  pieces:
    set: playstrategy-go-classic
    vocabulary:
      b: bS
      w: wS
  players: [black, white]
  setup: ""
---

<div class="section variant-hub">

## Variant Library

Go (Weiqi/Baduk/Igo) is a territorial strategy game originating in China approximately 4,000 years ago. Two players take turns placing stones on grid intersections, surrounding territory and capturing opponent groups by filling their liberties. From one fundamental rule emerges extraordinary strategic depth.

This library includes {{variant_count}} playable variants spanning different board sizes, information models, team formats, and rule modifications.

### Standard Boards

<div class="variant-grid">

- [Standard Go (19×19)](variants/standard/) — The full tournament game: 361 intersections, komi 6.5
- [13×13 Go](variants/13x13/) — Intermediate board for 30–60 minute games
- [9×9 Go](variants/9x9/) — Quick games and beginners, tactical focus

</div>

### Hidden Information

<div class="variant-grid">

- [Phantom Go](variants/phantom-go/) — See only your own stones, referee mediates captures
- [One-Colour Go](variants/one-colour/) — Same colour stones for both players, remember which are yours

</div>

### Team Play

<div class="variant-grid">

- [Rengo](variants/rengo/) — Team Go (2v2 or 3v3), partners alternate turns, no consultation

</div>

### Historical

<div class="variant-grid">

- [Tibetan Go](variants/tibetan/) — 17×17 board, pre-placed stones, delayed captures
- [Sunjang Baduk](variants/sunjang/) — Korean historical Go with 16 pre-placed stones

</div>

### Rule Variants

<div class="variant-grid">

- [Capture Go](variants/capture-go/) — First capture wins: the universal teaching variant
- [Toroidal Go](variants/toroidal-go/) — Edges wrap: no corners, no sides, no safe edges
- [Stoical Go](variants/stoical/) — Cannot capture if opponent captured last turn

</div>

### Placement Games

Five-in-a-row placement games played on the Go board.

<div class="variant-grid">

- [Gomoku](variants/gomoku/) — Ancient placement game: five in a row wins
- [Ninuki-Renju](variants/ninuki-renju/) — Custodial captures added to Gomoku; historical precursor to Pente
- [Renju](variants/renju/) — Competitive Gomoku with forbidden moves for Black

</div>

</div>
