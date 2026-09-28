---
title: "Chaupar — Official Rulebook"
version: "0.1.0"
slug: "chaupar"
players: "4"
duration: "45–120 min"
age: "10+"
tagline: "The ancient Indian game of the Mahabharata: three long dice, super-pieces and split throws"
type: "classic"
status: "live"
updated: "2026-06-18"
published: true
variants: false
how_to_play: "Team race game on a cross-shaped board. Roll three long dice, split the result among your pieces, and race to return all pieces to the center. Pieces combine into super-pieces for capture immunity."
mechanics: [dice, race, capture, movement, team-play]
complexity: moderate
related: [pachisi, backgammon, royal-ur, nyout]
theme:
  tint: cool
  texture: crosshatch
  cover: ornate
  typography: classical
  accent: indigo
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
    ops:
      - op: rect
        fill: transparent
        scope: board
      - op: cells
        pattern: cross
        light: cell-light
        dark: cell-dark
        castles: []
        typeColors:
          floor: floor
          home: home
        typeStrokes:
          floor: floor-stroke
          home: home-stroke
  surface:
    colors:
      floor: "#d4d8f0"
      floor-stroke: "#2d3a8c"
      home: "#1a1a6b"
      home-stroke: "#12124a"
  pieces:
    set: mce-cross-race
  players: [yellow, green, red, blue]
  # Pachisi's cross with long dice and no castles, played by the race plugin.
  plugin: race
  plugins:
    chaupar:
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
      # Two pieces on squares 6 and 7 of the middle column, two on 23 and 24,
      # in the outer row of the next arm.
      start:
        - [[16,9],[17,9],[10,17],[10,18]]
        - [[9,2],[9,1],[17,8],[18,8]]
        - [[2,9],[1,9],[8,1],[8,0]]
        - [[9,16],[9,17],[1,10],[0,10]]
      # Three long dice showing 1, 2, 5 and 6, and the throw "may be split
      # across multiple pieces in any way the player chooses".
      throw: { dice: [[1,2,5,6],[1,2,5,6],[1,2,5,6]], split: true }
      contact: capture
      # Two or more on one square move as one, and a group may only be taken
      # by one at least as large.
      stack: together
      immunity: size
      # Tohd: no piece finishes before its side has captured.
      captureToFinish: true
      # Partners opposite; "all Black pieces must finish before any Yellow
      # piece, all Red before any Green". Blue sits in Black's seat.
      teams: [[0, 2], [3, 1]]
      teamOrder: true
approximations:
  - feature: "Returning to the Charkoni"
    source: "Chaupar (Standard), Movement"
    says: "Pieces travel ... back up the home arm's middle column to the Charkoni."
    engine: "A piece reaches the Charkoni only with the exact throw, as in Pachisi."
    because: "The variant does not say whether a throw may carry a piece past the Charkoni; Pachisi's rule, which this game shares its board and route with, is used."
---

<div class="section">

## History

Chaupar (also spelled Chaupad, Chopad, or Caupar; IAST: caupaṛ) is an ancient Indian cross-and-circle board game closely related to Pachisi, played across India and Pakistan. It is generally considered the older of the two games — Wikipedia notes that "Pachisi is originated from chaupar."

Chaupar is the game described in the Mahabharata epic, where the kingdom of the Pandavas was famously gambled away in a game of dice. Abul Fazl's Āĭn-i-Akbarī (c. 1590) records that Mughal Emperor Akbar played both Chaupar and Pachisi at his court.

The game is fully public domain. Earliest secure historical documentation predates the common era in legendary accounts; Mughal court records provide the first detailed description.

</div>

<div class="section">

## The Board

The board is identical to the Pachisi board: a cross-shaped cloth board, each arm divided into three columns of eight squares, with the Charkoni (the large central square) in the centre.

{{svg:standard-board.svg "Chaupar — cross-shaped board layout"}}

The Charkoni functions as the re-entry point for captured pieces. Unlike Pachisi, pieces do not start in the Charkoni.

</div>

<div class="section">

## Equipment

| Item | Quantity | Notes |
|------|----------|-------|
| **Board** | 1 | Cross-shaped cloth board; three columns of eight squares per arm; Charkoni in centre |
| **Pieces** | 16 | 4 per player in four distinct colours |
| **Long dice** | 3 | Four-sided oblong dice; each face values 1, 2, 5, or 6 (or 1, 3, 5, 6 in some sets) |

**Long dice:** Each die is oblong (rectangular prism) with four playing faces. The faces typically show values 1 and 6 on opposing long faces, and 2 and 5 (or 3 and 4) on the other pair. All three dice are thrown together each turn.

</div>

<div class="section">

## Setup

**Players:** Four players in two teams. Black and Yellow form one team; Red and Green form the other.

**Starting positions:** Pieces do not start in the Charkoni. Before play begins, each player places their four pieces on specific starting squares. Counting from the Charkoni exit along each player’s middle column, pieces are placed on squares 6 and 7 (in the middle column of the player’s own arm). The other two pieces are placed on squares 23 and 24 from the same exit point, which fall in the outer row of an adjacent arm.

</div>

<div class="section">

## Throwing the Dice

All three long dice are thrown together each turn. The total of the three dice is the move value. There is no pre-defined table: any sum is valid. Range: 3 (minimum, 1+1+1) to 18 (maximum, 6+6+6).

**No graces:** Unlike Pachisi, there are no grace rolls in Chaupar. An extra throw is never earned.

**Split throws:** A throw may be split among multiple pieces. For example, a throw of 1, 2, and 6 may be used to move one piece 9 squares, or to move two pieces by 3 and 6, or to move three pieces by 1, 2, and 6 separately. Any partition of the total across active pieces is permitted.

</div>

<div class="section">

## Movement

Pieces move along the same counter-clockwise path as in Pachisi: down the middle column of the player’s own arm, then around the outer columns of the other three arms, and finally back up the home arm’s middle column to finish.

**No castle squares:** Chaupar does not use castle squares. No square is a safe refuge; any piece on any square may be captured.

**Entering the Charkoni:** A piece finishes by re-entering the Charkoni with an exact throw. It may not overshoot.

</div>

<div class="section">

## Super-Pieces (Conglomerate Pieces)

This mechanic is unique to Chaupar and absent from Pachisi.

If two pieces of the same colour land on the same square, they combine into a single double piece. Triple and quadruple pieces form in the same way if additional same-colour pieces join.

**Movement:** A conglomerate piece moves using the full throw as if it were a single piece.

**Capture immunity:** Conglomerate pieces can only be captured by a conglomerate of equal or greater size:

- A double piece is only vulnerable to a double, triple, or quadruple piece.
- A triple piece is only vulnerable to a triple or quadruple piece.
- A quadruple piece is only vulnerable to another quadruple piece.

A single piece cannot capture a double, triple, or quadruple piece.

</div>

<div class="section">

## Capture

Landing on a square occupied by an opponent piece or conglomerate (of equal or lesser size, per the super-piece immunity rules above) captures it. Captured pieces return to the Charkoni and must re-enter the board from the beginning of their path.

**Must capture before finishing:** Before a player may bring any of their pieces home (into the Charkoni to finish), they must have captured at least one opponent piece. This is called a tohd.

</div>

<div class="section">

## Team Home Order

Within a team, pieces must finish in a fixed sequence:

- All Black pieces must reach the Charkoni before any Yellow piece may finish.
- All Red pieces must reach the Charkoni before any Green piece may finish.

</div>

<div class="section">

## Winning

The first team to return all eight of their combined pieces to the Charkoni wins. Individual players finish their own pieces; the team wins when both players have finished all their pieces.

</div>

<div class="section">

## Attribution

Chaupar. Public domain (ancient Indian origin, Mughal court documentation c. 1590). Sources: Wikipedia (CC-BY-SA), Chaupar article; mastersofgames.com, Chaupar rules; trackawesomelist Chaupar entry; labforadvancedstudy/books (historical and Mahabharata context).

</div>
