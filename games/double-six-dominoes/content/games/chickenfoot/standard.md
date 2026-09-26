---
playable: true
title: Chickenfoot
slug: chickenfoot
board: none
players: "2–6"
parent: double-six-dominoes
win: Lowest total of pips left in hand over ten hands
special: "Dominoes variant where each double creates a 'chickenfoot' — 3 open ends branching from that double, all of which must be filled before normal play resumes. Branching layout with multiple simultaneous chains. 2–6 players."
approximations:
  - feature: "Where the next tile goes after a double"
    source: "Pagat: the toes 'must be filled with three more dominoes before tiles can be played elsewhere.'"
    engine: "While any toe of a double is unfilled, only a toe may be played on, and toes showing the same number are one choice. The toes can only be filled with tiles carrying the double's number, and there is no second tile carrying it on both ends, so a double can never be a toe."
  - feature: "When nobody holds the starting double"
    source: "Pagat: 'all players draw one extra tile and repeat this until the starting double is drawn.'"
    engine: "Each player in turn draws one tile until the double turns up, and whoever draws it leads it."
engine:
  players: [player1, player2, player3, player4]
  components:
    deck:
      type: dominoes-28
      maxPips: 9
  pieces:
    set: mce-dominoes-double12
  topology:
    type: tableau
    layout: radial
  deal:
    minPlayers: 2
    maxPlayers: 6
    defaultPlayers: 4
    perPlayer: 11
    community: 0
    remainder: boneyard
  plugins:
    double-six-dominoes:
      game: branching
      openingArms: 4
      doubleToes: 3
      afterStart: next
      blankDouble: 50
      tilesPerPlayer: { 2: 20, 3: 14, 4: 11, 5: 9, 6: 7 }
published: true
---

## Chickenfoot

Chickenfoot is a domino game in which every double opens a three-pronged branch, the **chicken foot**. All three prongs must be filled before play can go on anywhere else. It is usually played with a **double-nine set** (55 tiles), one hand for each double from 9-9 down to 0-0, so a full game is ten hands.

{{svg:chickenfoot-board.svg "Chickenfoot — table layout"}}

### Setup

Deal tiles face down to each player:

| Players | Tiles each |
|---|---|
| 2 | 20 |
| 3 | 14 |
| 4 | 11 |
| 5 | 9 |
| 6 | 7 |

The rest form the boneyard, called the chicken yard.

### Starting a Hand

The player holding the **9-9** leads it in the first hand, the 8-8 in the second, and so on down to the 0-0. If nobody holds the double needed, every player draws one more tile, and this is repeated until someone draws it.

### The Opening Double

The first double has **four** arms. A tile must be played on each of the four before any arm is extended by a second tile.

### The Chicken Foot

When any later double is played, it becomes a chicken foot with **three** toes. All three must be filled, each with a tile matching the double's number, before anyone may play elsewhere in the layout.

### Normal Play

When no chicken foot is waiting to be filled, a player may play a tile on any open end of the layout, one tile per turn. A player who cannot play draws one tile from the chicken yard as their turn and may play it at once if it fits. With nothing left to draw, a player who cannot play misses their turn.

### Scoring

A hand ends when one player plays their last tile, or when the chicken yard is empty and nobody can play. Each player adds the pips left in their hand to their total, the **0-0 counting 50**. After the hand started with the 0-0, the player with the **lowest** total wins.

### Attribution

Chickenfoot. Rules written from Pagat.com, *Chicken Foot* (Joe Celko and John McLeod, © 2001–2009), which is the source for the set, the deal, the opening double, the chicken foot and the scoring above.
