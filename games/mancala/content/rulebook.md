---
title: "Mancala — Official Rulebook"
version: "0.1.1"
slug: "mancala"
players: "2"
duration: "5–30 min"
age: "6+"
tagline: "The world's most-played family of count-and-capture games"
type: "classic"
status: "live"
updated: "2026-06-15"
published: true
variants: true
theme:
  surface: light
  tint: warm
  texture: grain
  cover: solid
  typography: classical
  accent: orange
engine:
  topology:
    type: pit
    rows: 2
    cols: 6
    stores: true
  surface: earth
  render:
    cellSize: 22
  pieces:
    set: playstrategy-oware
  players: [south, north]
---

<div class="section variant-hub">

## Variant Library

Mancala is a family of count-and-capture games originating in Africa and the Middle East, with a history spanning at least 3,000 years. Players sow seeds or stones around a board of pits, capturing when sowing lands in the right conditions. The same fundamental mechanic produces dozens of culturally distinct games across Africa, Asia, and the Caribbean.

This library includes {{variant_count}} playable variants from across the Mancala family.

### West Africa

<div class="variant-grid">

- [Oware](variants/oware/) — The most widely known Mancala game: 2×6 pits, single-lap sowing, grand slam rule
- [Ayo](variants/ayo/) — Yoruba (Nigerian) form of Oware with identical rules and deep cultural tradition

</div>

### East Africa

<div class="variant-grid">

- [Bao](variants/bao/) — The most complex Mancala: 4-row board, multi-lap sowing, relay captures

</div>

### Southeast Asia

<div class="variant-grid">

- [Congkak](variants/congkak/) — Malaysian 2×7 board with two houses; sow into own store, skip opponent's
- [Sungka](variants/sungka/) — Philippine 2×7 board; simultaneous start, sow into own head only

</div>

### South Asia

<div class="variant-grid">

- [Pallanguzhi](variants/pallanguzhi/) — Tamil Nadu: 2×7 pits, 12 seeds per pit, multi-lap sowing with relay capture

</div>

### Central Asia

<div class="variant-grid">

- [Toguz Korgool](variants/toguz-korgool/) — Kyrgyz national game: 2×9 pits, tuzduk rule locks one opponent pit

</div>

### Western Standard

<div class="variant-grid">

- [Kalah](variants/kalah/) — The 1940s Western standardisation: 2×6 pits plus two stores, accessible and fast

</div>

</div>
