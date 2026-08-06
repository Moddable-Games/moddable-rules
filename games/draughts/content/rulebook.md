---
title: "Draughts — Official Rulebook"
version: "0.3.1"
slug: "draughts"
players: "2"
duration: "15–60 min"
age: "6+"
tagline: "The world's oldest family of capture games"
type: "classic"
status: "live"
updated: "2026-08-06"
published: true
variants: true
how_to_play: "Move pieces diagonally and capture opponents by jumping over them. Men promote to kings with extended movement. Mandatory captures force tactical sacrifices."
mechanics: [abstract-strategy, grid, capture, movement, promotion]
complexity: moderate
related: [chess, go, xiangqi, shogi]
theme:
  surface: light
  tint: warm
  texture: grain
  cover: solid
  typography: classical
  accent: gold
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  surface: wood-classic
  render:
    cellSize: 40
    cellColor: checkered
    labels: true
    ops:
      - op: cells
        pattern: checkered
        light: "#f0d9b5"
        dark: "#b58863"
        interactive: true
  pieces:
    set: playstrategy-dameo-fabirovsky
    vocabulary:
      b: bM
      w: wM
      B: bK
      W: wK
  players: [white, black]
  unsupported:
    bashni: "column stacking: captured pieces are carried beneath the capturer rather than removed"
    lasca: "column stacking on a 7×7 board"
    dameo: "linear movement of whole rows of pieces"
    alquerque: "5×5 point-and-line board rather than a square grid"
    frisian: "mixed orthogonal and diagonal capture with a three-move king limit"
    thai: "flying kings constrained to stop immediately behind the captured piece"
    diagonal: "pieces set up along the anti-diagonal rather than in ranks"
---

<div class="section variant-hub">

## Variant Library

Draughts (Checkers) is a family of abstract strategy games with a shared core mechanic: diagonal or orthogonal movement with mandatory captures by jumping. The family traces back to Alquerque, documented in the 10th century, with regional variants evolving independently across Europe and the Middle East over the following millennium.

This library includes {{variant_count}} playable variants spanning multiple board sizes, movement systems, and capture mechanics.

### Standard Board (8×8)

<div class="variant-grid">

- [English Draughts](variants/english/) — The most widely known form: diagonal movement, no flying kings
- [Turkish Draughts](variants/turkish-draughts/) — Orthogonal movement on all 64 squares, majority capture rule
- [Russian Draughts](variants/russian/) — Men capture backwards, mid-jump promotion, free choice
- [Brazilian Draughts](variants/brazilian/) — International rules on 8×8: flying kings, majority capture, delayed removal
- [Pool Checkers](variants/pool/) — Men capture both directions, flying kings, mid-jump promotion, US tournament standard
- [Italian Draughts](variants/italian/) — Men cannot capture kings, strict capture priority hierarchy
- [Spanish Draughts](variants/spanish/) — Flying kings, men forward-only, majority rule with king preference
- [Czech Draughts](variants/czech/) — King captures take priority over man captures, mid-jump promotion
- [Thai Draughts](variants/thai/) — 8 pieces per side, flying kings must stop immediately behind captured piece
- [Bashni](variants/bashni/) — Column stacking on 8×8 with Russian movement rules
- [German Draughts](variants/german/) — Men capture in all directions, flying kings, no majority rule
- [Dameo](variants/dameo/) — Linear movement by rows of pieces, orthogonal captures on all 64 squares

</div>

### Large Board (10×10)

<div class="variant-grid">

- [International Draughts](variants/international/) — Flying kings, mandatory longest chain, the competitive standard
- [Frisian Draughts](variants/frisian/) — International rules plus orthogonal captures, 3-move king limit
- [Diagonal Draughts](variants/diagonal/) — Pieces start beside the playing anti-diagonal; majority capture rule
- [Ghanaian Draughts](variants/ghanaian/) — Men capture forwards only; reduced to one piece is a loss

</div>

### Extended Board (10×8)

<div class="variant-grid">

- [Spantsiretti](variants/spantsiretti/) — Russian Draughts rules on a wider 10×8 board, 20 pieces per side

</div>

### Large Board (12×12)

<div class="variant-grid">

- [Canadian Draughts](variants/canadian/) — International rules on the largest standard board, 30 pieces per side

</div>

### Alternative Boards

<div class="variant-grid">

- [Lasca](variants/lasca/) — 7×7 board, column stacking, pieces never leave the game
- [Alquerque](variants/alquerque/) — The common ancestor: 5×5 grid with diagonal connections

</div>

</div>
