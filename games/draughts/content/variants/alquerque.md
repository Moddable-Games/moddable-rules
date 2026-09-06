---
title: Alquerque
slug: alquerque
board: "5×5"
players: "2"
parent: draughts
order: 6
win: Capture or block all opponent pieces
playable: true
special: "A 25-point line board where not every point carries diagonals. Movement and capture both run along the drawn lines, so this is a graph, not a grid. There is no authoritative historical ruleset: the 13th-century source gives no rules."
verified:
  date: "2026-08-31"
  method: "Desktop web research against the sources below. Note the finding that no authoritative ruleset exists."
  sources:
    - "https://en.wikipedia.org/wiki/Alquerque"
    - "https://www.mastersofgames.com/rules/alquerque-rules.htm"
    - "http://www.cyningstan.com/games/604/alquerque-games"
    - "https://jpneto.github.io/world_abstract_games/alquerque.htm"
  decisions:
    - "Compulsory capture with a huff penalty is adopted as the Moddable ruleset, because it is the common modern convention and the one Wikipedia and Cyningstan present as the rule. This is a DECISION, not a finding: Masters of Games presents it as a variant, and jpneto states the mandatory-capture rule is a later addition. A historical reconstruction would omit it."
    - "R. C. Bell's three reconstruction rules are NOT adopted: no backward movement, back-row pieces may only capture, and no piece may return to a point it has occupied. The last would require per-piece visited-point history for the whole game. All three are one modern author's reconstruction, not historical rules."
  unverified:
    - "RESOLVED 2026-09-06. The adjacency derived from the sourced construction is: orthogonal everywhere, diagonal only where the coordinate sum is even. That gives four diagonals at the interior even points, two at the side midpoints, one at each corner and none at the odd points - 16 diagonal segments in all. It is no longer a reading held against a board image: the engine asserts that the lines it draws and the lines a piece may move along are the same set, in both directions."
    - "Whether captured pieces are removed immediately or at the end of a chain."
    - "Whether any form of promotion exists. No source mentions one, and none states that it is absent."
    - "The win condition where neither side can capture. One source adds a material-count tiebreak; two do not."
engine:
  surface:
    colors:
      cell-light: "#d9b483"
      stroke: "rgba(0,0,0,0.1)"
  topology:
    type: grid
    rows: 5
    cols: 5
    layout: intersections
    diagonals: alternating
  render:
    cellSize: 48
    pieceScale: 0.78
    boardStyle: alquerque
    ops:
      - op: rect
        fill: cell-light
        scope: board
        rx: 4
      - op: grid-lines
        grouped: false
        order: hv
        color: stroke
        width: 2
      - op: diagonals
        pattern: alternating
        color: stroke
        width: 1.5
      - op: markers
        allCells: true
        radius: 3
        fill: stroke
        hits:
          radiusFactor: 0.4
          idStyle: algebraic
  pieces:
    set: playstrategy-go-classic
    vocabulary:
      b: bS
      w: wS
  players: [white, black]
  setup: "bbbbb/bbbbb/bb1ww/wwwww/wwwww"
  plugins:
    draughts:
      directions: all
      manMove: all
      manCapture: all
      promotion: false
      forcedCapture: true
      piecesPerPlayer: 12
---

## Alquerque

The common ancestor of the draughts family, recorded in Alfonso X's *Libro de los Juegos* in 1283. It is the oldest game in this hub and the least certainly known: the medieval source shows the board and names the game but **does not give the rules**, most likely because they were common knowledge at the time.

Everything below beyond "move along a line, capture by jumping" is modern reconstruction, and the sources disagree with one another. Where they do, the choice this project has made is recorded in the frontmatter rather than hidden in the prose.

{{svg:alquerque-board.svg "Alquerque — starting position"}}

### The board

Twenty-five points, and **the lines matter more than the points**. The board is drawn by:

1. a 5×5 orthogonal grid,
2. both long diagonals, corner to corner,
3. four more diagonals joining the midpoints of the four sides.

The result is that **not every point has diagonal connections**. Points alternate: some carry eight lines, some only four. A piece may move only along a line that is actually drawn, so this board is a **graph**, not a grid with a direction offset.

### Setup

Twelve pieces each. Each player fills the two rows nearest them plus the two rightmost points of the middle row, as that player looks at the board. **The centre point is the only empty one**, and the position has 180° rotational symmetry.

### Movement

A piece moves from its point to any empty adjacent point connected by a drawn line.

### Capture

A piece captures by jumping an adjacent enemy piece along a drawn line to the empty point directly beyond. **Multiple jumps may be chained**, and need not continue in the same direction.

**Capture is compulsory.** A player who fails to capture when able may have the offending piece removed by the opponent before the next move — the **huff**. *(See the frontmatter: this is the modern convention and a Moddable decision, not a historical fact.)*

### Promotion

None. There are no kings in Alquerque.

### Winning

A player wins by capturing all the opponent's pieces, or by leaving the opponent unable to move.

### Attribution

Traditional, recorded in the *Libro de los Juegos* commissioned by Alfonso X of Castile, 1283. Public domain. The playable ruleset is a modern reconstruction, R. C. Bell's being the best known.
