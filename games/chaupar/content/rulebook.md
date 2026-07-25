---
title: "Chaupar — Official Rulebook"
version: "0.1.0"
slug: "chaupar"
players: "4"
duration: "45–120 min"
age: "10+"
tagline: "The ancient Indian game of the Mahabharata — three long dice, super-pieces, and split throws"
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
    set: playstrategy-draughts-plain
  players: [yellow, green, red, blue]
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
