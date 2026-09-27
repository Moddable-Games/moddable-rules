---
title: "Senet"
short_title: "Senet"
display_title: "Senet"
version: "0.1.0"
slug: "senet"
players: "2"
duration: "15–30 min"
age: "8+"
tagline: "Ancient Egyptian race game (c. 3500 BCE), reconstructed from archaeological evidence"
type: "classic"
status: "live"
updated: "2026-07-21"
published: true
variants: false
board: "3×10"
theme:
  surface: light
  tint: warm
  texture: none
  cover: cosmic
  typography: modern
  accent: gold
  section-divider: "𓂀"
engine:
  topology:
    type: grid
    rows: 3
    cols: 10
  players: [cone, spool]
  # A race along the thirty squares, played by the race plugin.
  plugin: race
  plugins:
    senet:
      vocabulary: { piece: { symbols: { 0: M, 1: m } } }
      pieces: 5
      # Squares 1-10 left to right along the top row, 11-20 back along the
      # middle row, 21-30 left to right along the bottom.
      routes:
        path: [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[1,9],[1,8],[1,7],[1,6],[1,5],[1,4],[1,3],[1,2],[1,1],[1,0],[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9]]
      seatRoutes: path
      # "Cone on 1, Spool on 2, Cone on 3, Spool on 4, and so on."
      start:
        - [[0,0],[0,2],[0,4],[0,6],[0,8]]
        - [[0,1],[0,3],[0,5],[0,7],[0,9]]
      # Four sticks: the light sides up, and all dark counts 5. A 1, 4 or 5
      # throws again after moving.
      throw: { lots: 4, scores: { 0: 5 }, again: [1, 4, 5] }
      # Landing on an opponent swaps the two.
      contact: swap
      # 28 and 29 are protected, and so is a pair of one side's pieces.
      safe: [[2,7],[2,8]]
      pairsSafe: true
      blockade: 3
      # Every piece lands on 26, the House of Happiness, before going on.
      mustStop: [[2,5]]
      # The House of Water sends a piece back to the House of Rebirth.
      sendBack: { from: [2,6], to: [1,5] }
      # Off from 28 with a 3, 29 with a 2 and 30 with a 1: one past the end.
      bearOff: exact
      bearOffFrom: [[2,7],[2,8],[2,9]]
      whenBlocked: backward
how_to_play: "Race five pieces along a 30-square winding path. Throw four sticks for movement. Capture opponent pieces by swapping positions. Special squares grant protection, send pieces backward, or require exact throws to bear off. Blockades of three or more pieces cannot be passed."
mechanics:
  - race
  - dice-throwing
  - capture
  - safe-spaces
  - bearing-off
complexity: moderate
related:
  - royal-ur
  - pachisi
  - backgammon
approximations:
  - feature: "Forced backward movement"
    source: "This rulebook, Forced Backward Movement"
    says: "If your only legal move would land on a square occupied by your own piece, you must instead move one of your pieces backward to the nearest empty square."
    engine: "When no piece can move forward with the throw, a piece moves back to the nearest empty square behind it; with no such square either, the turn is forfeited."
    because: "A move onto your own piece is not a legal move, so the rule is read as applying when no forward move is left."
---

<div class="section">

## Senet

**Reconstruction notice:** No complete ancient ruleset for Senet survives. These rules follow Timothy Kendall's 1978 reconstruction (*Passing Through the Netherworld*, Kirk Game Company), supplemented by R.C. Bell's 1979 starting position and Piccione's standard square numbering. This is the most widely implemented scholarly reconstruction, used by museums and commercial editions worldwide.

Senet is a race game for two players, played on a board of 30 squares arranged in three rows of ten. Players race their pieces along a winding path, attempting to bear them all off the board. The game dates to predynastic Egypt (c. 3500 BCE) and remained popular for over three thousand years, eventually acquiring religious significance as a symbolic journey through the afterlife.

{{svg:standard-board.svg "Senet — starting position (Kendall reconstruction)"}}

### Components

- One board of 30 squares (3 rows × 10 columns)
- 5 cone-shaped pieces (one player)
- 5 spool-shaped pieces (other player)
- 4 flat throwing sticks (one side light, one side dark)

### The Board

The 30 squares are numbered along a boustrophedon (S-shaped) path:

- **Row 1 (top):** Squares 1–10, left to right
- **Row 2 (middle):** Squares 11–20, right to left
- **Row 3 (bottom):** Squares 21–30, left to right

Six squares have special properties:

| Square | Name | Effect |
|---|---|---|
| 15 | House of Rebirth | Target square for pieces sent back from the House of Water |
| 26 | House of Happiness | Mandatory stop. Every piece must land here before proceeding |
| 27 | House of Water | Piece landing here is sent back to square 15 (or the nearest empty square before 15 if occupied) |
| 28 | House of Three Truths | Piece is protected from capture. Bears off only with an exact throw of 3 |
| 29 | House of Re-Atoum | Piece is protected from capture. Bears off only with an exact throw of 2 |
| 30 | House of Horus | Bears off with an exact throw of 1. Piece can be captured here |

### Setup

Place all 10 pieces alternating on squares 1–10 of the first row: Cone on 1, Spool on 2, Cone on 3, Spool on 4, and so on. The cone player moves first.

### Throwing Sticks

Four flat wooden sticks are thrown simultaneously. Count how many land light-side up:

| Light sides up | Move value | Bonus turn |
|---|---|---|
| 1 | 1 | Yes |
| 2 | 2 | No |
| 3 | 3 | No |
| 4 (all light) | 4 | Yes |
| 0 (all dark) | 5 | Yes |

Throws of 1, 4, or 5 grant an immediate extra turn after moving.

### Movement

Move one piece forward along the path by the number of squares indicated by the throw. A piece may not land on a square occupied by a friendly piece.

**Mandatory stop:** Every piece must land exactly on square 26 (House of Happiness) before continuing. A throw that would carry a piece past square 26 without first stopping there is illegal for that piece.

### Capture

Landing on a square occupied by an opponent's piece swaps their positions: your piece takes the square, their piece moves back to the square you came from.

**Exceptions:**
- Pieces on squares 28 and 29 cannot be captured (protected)
- A pair of adjacent same-colour pieces protects both from capture (but does not block movement past them)

### Blockades

Three or more consecutive squares occupied by the same player form a blockade. Opponent pieces cannot pass a blockade. If no legal move exists, the turn is forfeited.

### Bearing Off

Pieces bear off the board (are removed and scored) from the final squares:

- From square 28: exact throw of 3
- From square 29: exact throw of 2
- From square 30: exact throw of 1

A piece cannot attempt to bear off until it has passed through square 26 (House of Happiness).

### Forced Backward Movement

If your only legal move would land on a square occupied by your own piece, you must instead move one of your pieces backward to the nearest empty square.

### Winning

The first player to bear off all five pieces wins.

### Historical Context

Senet boards have been found in tombs dating to the First Dynasty (c. 3100 BCE). The game appears in tomb paintings, and complete sets were found in Tutankhamun's tomb (c. 1323 BCE). By the New Kingdom, Senet had acquired religious overtones: the journey across the board symbolised the soul's passage through the Duat (underworld), with the special squares representing divine trials. The name "senet" means "passing" in Egyptian.

### Attribution

Reconstruction: Timothy Kendall, *Passing Through the Netherworld* (1978). Starting position: R.C. Bell, *Board and Table Games from Many Civilizations* (1979). Square numbering: Peter A. Piccione's academic standard. This synthesis represents the most widely implemented version in museums and commercial editions.

</div> Public domain. Reconstruction context at en.wikipedia.org/wiki/Senet. All Senet rule sets are modern reconstructions; no complete ancient rules survive.

