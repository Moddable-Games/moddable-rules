---
title: "Nine Men's Morris — Official Rulebook"
version: "0.1.1"
slug: "morris"
players: "2"
duration: "15–45 min"
age: "7+"
tagline: "The ancient mill game, played on stone, cloth, and wood across five continents"
type: "classic"
status: "live"
updated: "2026-06-15"
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
    type: graph
    structure: concentric-rings
    params:
      rings: 3
      midpoints: true
  surface:
    colors:
      background: "#f5e6c8"
      line: "#4a3520"
      point: "#4a3520"
  render:
    cellSize: 24
    cellColor: uniform
    labels: false
  pieces:
    set: playstrategy-go-classic
    vocabulary:
      b: bS
      w: wS
  players: [white, black]
---

<div class="section variant-hub">

## Variant Library

Nine Men's Morris — also called Mills or Mühle — is one of the oldest known strategy games, with boards scratched into Roman stone floors, Egyptian temple rooftops, and medieval wooden cathedral furniture. The game belongs to a family called Mill games: placement and movement games in which the goal is to form three-in-a-row lines (mills) and remove opponent pieces. Variants range from the tiny Three Men's Morris (a 3×3 grid) to the elaborate Twelve Men's Morris with diagonal connections.

This library includes {{variant_count}} playable variants from the Mill game family.

### Classic Sizes

<div class="variant-grid">

- [Three Men's Morris](variants/three-mens-morris/) — The 3×3 ancestor: 3 pieces per side, no movement phase, pieces teleport
- [Six Men's Morris](variants/six-mens-morris/) — Two concentric squares; the medieval European standard before Nine was codified
- [Nine Men's Morris](variants/nine-mens-morris/) — Three concentric squares; the definitive and most widely played form
- [Twelve Men's Morris](variants/twelve-mens-morris/) — Three concentric squares with added diagonal connections; 12 pieces per side

</div>

### Modern Variants

<div class="variant-grid">

- [Lasker Morris](variants/lasker-morris/) — Move or place on each turn (not sequential phases); designed by World Chess Champion Emanuel Lasker

</div>

### African Forms

<div class="variant-grid">

- [Morabaraba](variants/morabaraba/) — South African national game: cows instead of men, additional three-piece ending rules
- [Shax](variants/shax/) — Somali: capture instead of forming a mill during the placement phase

</div>

</div>
