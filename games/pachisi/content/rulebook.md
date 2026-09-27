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
    set: mce-cross-race
  players: [yellow, green, red, blue]
  # A race round the cross, played by the race plugin.
  plugin: race
  plugins:
    pachisi:
      # Each arm's route: down its own middle column from the Charkoni,
      # anticlockwise round the outer columns of the board (turning each
      # corner of the Charkoni diagonally), and back up the middle column.
      # 83 squares; the tip of the arm before home is 25 from the Charkoni.
      routes:
        south: [[11,9],[12,9],[13,9],[14,9],[15,9],[16,9],[17,9],[18,9],[18,10],[17,10],[16,10],[15,10],[14,10],[13,10],[12,10],[11,10],[10,11],[10,12],[10,13],[10,14],[10,15],[10,16],[10,17],[10,18],[9,18],[8,18],[8,17],[8,16],[8,15],[8,14],[8,13],[8,12],[8,11],[7,10],[6,10],[5,10],[4,10],[3,10],[2,10],[1,10],[0,10],[0,9],[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,7],[8,6],[8,5],[8,4],[8,3],[8,2],[8,1],[8,0],[9,0],[10,0],[10,1],[10,2],[10,3],[10,4],[10,5],[10,6],[10,7],[11,8],[12,8],[13,8],[14,8],[15,8],[16,8],[17,8],[18,8],[18,9],[17,9],[16,9],[15,9],[14,9],[13,9],[12,9],[11,9]]
        west: [[9,7],[9,6],[9,5],[9,4],[9,3],[9,2],[9,1],[9,0],[10,0],[10,1],[10,2],[10,3],[10,4],[10,5],[10,6],[10,7],[11,8],[12,8],[13,8],[14,8],[15,8],[16,8],[17,8],[18,8],[18,9],[18,10],[17,10],[16,10],[15,10],[14,10],[13,10],[12,10],[11,10],[10,11],[10,12],[10,13],[10,14],[10,15],[10,16],[10,17],[10,18],[9,18],[8,18],[8,17],[8,16],[8,15],[8,14],[8,13],[8,12],[8,11],[7,10],[6,10],[5,10],[4,10],[3,10],[2,10],[1,10],[0,10],[0,9],[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,7],[8,6],[8,5],[8,4],[8,3],[8,2],[8,1],[8,0],[9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7]]
        north: [[7,9],[6,9],[5,9],[4,9],[3,9],[2,9],[1,9],[0,9],[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,7],[8,6],[8,5],[8,4],[8,3],[8,2],[8,1],[8,0],[9,0],[10,0],[10,1],[10,2],[10,3],[10,4],[10,5],[10,6],[10,7],[11,8],[12,8],[13,8],[14,8],[15,8],[16,8],[17,8],[18,8],[18,9],[18,10],[17,10],[16,10],[15,10],[14,10],[13,10],[12,10],[11,10],[10,11],[10,12],[10,13],[10,14],[10,15],[10,16],[10,17],[10,18],[9,18],[8,18],[8,17],[8,16],[8,15],[8,14],[8,13],[8,12],[8,11],[7,10],[6,10],[5,10],[4,10],[3,10],[2,10],[1,10],[0,10],[0,9],[1,9],[2,9],[3,9],[4,9],[5,9],[6,9],[7,9]]
        east: [[9,11],[9,12],[9,13],[9,14],[9,15],[9,16],[9,17],[9,18],[8,18],[8,17],[8,16],[8,15],[8,14],[8,13],[8,12],[8,11],[7,10],[6,10],[5,10],[4,10],[3,10],[2,10],[1,10],[0,10],[0,9],[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,7],[8,6],[8,5],[8,4],[8,3],[8,2],[8,1],[8,0],[9,0],[10,0],[10,1],[10,2],[10,3],[10,4],[10,5],[10,6],[10,7],[11,8],[12,8],[13,8],[14,8],[15,8],[16,8],[17,8],[18,8],[18,9],[18,10],[17,10],[16,10],[15,10],[14,10],[13,10],[12,10],[11,10],[10,11],[10,12],[10,13],[10,14],[10,15],[10,16],[10,17],[10,18],[9,18],[9,17],[9,16],[9,15],[9,14],[9,13],[9,12],[9,11]]
      vocabulary: { piece: { symbols: { 0: rM, 1: yM, 2: gM, 3: bM } } }
      seatRoutes: [south, west, north, east]
      pieces: 4
      # "A piece can only return to the Charkoni by a direct throw."
      bearOff: exact
      # "One piece per player starts active": on the first square of its arm.
      start: [[[11,9]], [[9,7]], [[7,9]], [[9,11]]]
      # Six cowries: the mouths up, 0 counting 25 and 1 counting 10. A grace
      # (25, 10 or 6) throws again after moving, and only a grace brings a
      # piece out of the Charkoni, onto the first square of its arm.
      throw: { lots: 6, scores: { 0: 25, 1: 10 }, again: [25, 10, 6] }
      enterWith: [25, 10, 6]
      enterAt: first
      # A piece landed on goes back to the Charkoni, except on a castle, and
      # the capturer throws again. A side's pieces may share a square.
      contact: capture
      safe: [[0,9],[3,8],[3,10],[8,3],[8,15],[9,0],[9,18],[10,3],[10,15],[15,8],[15,10],[18,9]]
      captureRethrow: true
      stack: share
      # "A player may refuse to move any counter on his or her turn after
      # their throw." (Board and Pieces, Pachisi)
      mayDecline: true
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
