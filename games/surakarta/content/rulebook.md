---
title: "Surakarta — Official Rulebook"
version: "0.1.0"
slug: "surakarta"
players: "2"
duration: "10–30 min"
age: "8+"
tagline: "The loop-capture game of Java: capture through the corner arcs"
type: "classic"
status: "live"
updated: "2026-06-23"
published: true
variants: false
theme:
  surface: light
  tint: neutral
  texture: none
  cover: minimal
  typography: classical
  accent: blue
engine:
  topology:
    type: grid
    rows: 6
    cols: 6
    layout: intersections
  surface:
    colors:
      cell-light: "#d9c5a0"
      stroke: "#8b7355"
      inner-arc: "#8b7355"
      outer-arc: "#8b7355"
  render:
    cellSize: 50
    cellColor: uniform
    boardStyle: surakarta
    ops:
      - op: cells
        pattern: uniform
        fill: "#d9c5a0"
        stroke: "#8b7355"
        interactive: true
      - op: grid-lines
        color: "#8b7355"
        width: 2
        grouped: false
    decorations:
      - type: arcs
        rings: 2
        cornerOffset: 2
      - type: markers
        auto: all-cells
        size: 3.5
  pieces:
    set: playstrategy-go-classic
    vocabulary:
      b: bS
      w: wS
  players: [white, black]
how_to_play: "Move pieces one step in any direction. Capture by routing your path through one or more of the eight corner loop arcs that extend outside the grid boundary. First player to capture all twelve opponent pieces wins."
mechanics:
  - grid-movement
  - loop-capture
  - unique-mechanics
complexity: moderate
related:
  - go
  - agon
  - morris
unsupported:
  _family: "No rules plugin. Surakarta captures by travelling around one of the eight loop arcs at the board's edge and striking the first piece met on the way back in - so a capture is a path along a rail rather than a move to a cell. Nothing in the topology models the arcs, which today are drawn and nothing more."
  standard: "Blocked on the plugin alone."
---

<div class="section">

## History

Surakarta is a two-player abstract strategy game named after the royal city of Surakarta (also called Solo) in Central Java, Indonesia. The game was introduced to European audiences by Ravensberger (Germany, 1971) and published in France in 1970. Games historian R.C. Bell provided the first English-language description of the game. In Sid Sackson's *The Book of Classic Board Games*, the game appears under the name Roundabouts. In Java it is sometimes called *dam-daman*.

The Ludii Project at Maastricht University notes that the claim of Indonesian origins "may have been a marketing ploy by Ravensberger." Regardless of its origins, the game mechanics are entirely public domain.

The game is notable for its capture mechanic. Wikipedia describes it as "possibly unique" among all recorded board games: pieces can only capture by routing their path through one or more of the circular loop arcs at the corners of the board.

</div>

<div class="section">

## The Board

{{svg:standard-board.svg "Surakarta board: 6×6 grid with 8 corner loop arcs and starting position"}}

The board is a 6×6 grid of **36 intersection points**, connected by horizontal and vertical lines. Pieces are placed on intersections, not inside squares.

At each of the four corners of the board, two concentric **three-quarter-circle arcs** extend outside the grid boundary:

- **Inner loop** (blue): connects the 2nd intersection from the corner along each adjacent edge
- **Outer loop** (red): connects the 3rd intersection from the corner along each adjacent edge

The board has eight loop arcs in total: four inner and four outer, one pair at each corner.

</div>

<div class="section">

## Equipment

| Item | Qty | Notes |
|------|-----|-------|
| **Board** | 1 | 6×6 grid of 36 intersections with 8 corner loop arcs |
| **Pieces** | 24 | 12 per player, in contrasting colours (dark and light) |

Traditional pieces are shells (light) versus pebbles or stones (dark).

</div>

<div class="section">

## Setup

Each player takes 12 pieces of one colour. Place all 12 dark pieces on the 12 intersections of rows 1 and 2 (the two rows closest to the dark player's side). Place all 12 light pieces on the 12 intersections of rows 5 and 6 (the two rows closest to the light player's side). Rows 3 and 4 start empty. Players sit on opposite sides of the board, each nearest their own pieces.

</div>

<div class="section">

## Movement

Players alternate turns. On each turn, a player moves exactly one piece.

### Non-Capturing Move

Move one piece one step to any adjacent empty intersection. Movement is permitted in all eight directions: horizontally, vertically, and diagonally. A piece cannot move onto an occupied intersection.

### Capturing Move

A capturing move must pass through at least one corner loop arc. Captures are optional: a player is never forced to capture even when a capturing move is available.

The path of a capturing move:

1. The piece travels along a grid line (horizontally or vertically) away from its starting intersection.
2. When it reaches an intersection where a loop arc begins, it follows the arc around the corner.
3. After exiting the arc, the piece continues along the perpendicular grid line.
4. A single move may pass through more than one loop arc in sequence.
5. The piece lands on the first opponent piece it reaches, capturing it by displacement. The captured piece is removed from the board.
6. Every intersection along the path, except the destination, must be empty. The capturing piece cannot pass through or jump over any piece.

The four corner intersection points cannot serve as the starting point of a capturing move.

</div>

<div class="section">

## Winning

The player who captures all 12 of the opponent's pieces wins.

**Stalemate:** If no further progress can be made, the game ends by mutual agreement. The player with more pieces remaining wins. If both players have equal pieces, the game is a draw.

</div>

<div class="section">

## Attribution

Surakarta. Traditional game attributed to Surakarta (Solo), Central Java, Indonesia. European publication by Ravensberger, Germany, 1971. Public domain. Documented at en.wikipedia.org/wiki/Surakarta_(game) and mastersofgames.com. Sources: Ludii Project, Maastricht University (ludii.games, academic game corpus); rubysash/site.hollowedstone implementation reference (MIT licence); Wikipedia, Surakarta (game) (CC-BY-SA 4.0); Masters of Games (mastersofgames.com).

</div>
