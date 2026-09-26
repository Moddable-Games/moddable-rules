---
playable: true
title: Mexican Train
slug: mexican-train
board: "none"
players: "2–8"
parent: double-six-dominoes
win: "Lowest total of pips left in hand over thirteen hands"
special: "Hub-and-spokes layout. Each player builds their own train from the central double. The shared Mexican Train is always available to play on."
approximations:
  - feature: "When nobody holds the starting double"
    source: "Pagat: 'If no one has the double required to start, players draw equally from the boneyard until it is found.'"
    engine: "Each player in turn draws one tile until the double turns up, and whoever draws it puts it down."
  - feature: "Doubles on a first turn"
    source: "Pagat: 'From your second turn onwards, whenever you play a double you must play an extra domino.'"
    engine: "A double played as part of a first-turn train is simply part of the train: it earns no extra tile and does not have to be satisfied."
  - feature: "A blocked hand"
    source: "Pagat: the hand ends 'when the layout becomes blocked so that no one can play.'"
    engine: "The hand is blocked once every player in a row has passed with nothing left to draw."
engine:
  players: [player1, player2, player3, player4]
  components:
    deck:
      type: dominoes-28
      maxPips: 12
  pieces:
    set: mce-dominoes-double12
  topology:
    type: tableau
    layout: radial
  deal:
    minPlayers: 2
    maxPlayers: 8
    defaultPlayers: 4
    perPlayer: 15
    community: 0
    remainder: boneyard
  plugins:
    double-six-dominoes:
      game: trains
      publicTrain: true
      afterStart: holder
      tilesPerPlayer: { 2: 15, 3: 15, 4: 15, 5: 12, 6: 12, 7: 10, 8: 10 }
published: true
---

## Mexican Train

A domino game for 2–8 players using a **double-12 set** (91 tiles). All trains radiate from a central double, the **engine**. Each player builds their own train from it, and a shared **Mexican Train** is open to everyone. A full game is thirteen hands, the first started with the 12-12, then the 11-11, and so on down to the 0-0.

{{svg:mexican-train-board.svg "Mexican Train — table layout"}}

### Components

- **Double-12 set:** 91 tiles (pips 0–12 on each half)
- **Train markers:** one per player (coins or tokens) to show that a train is open to others

### Setup

Deal tiles face down to each player:

| Players | Tiles each |
|---------|-----------|
| 2–4 | 15 |
| 5–6 | 12 |
| 7–8 | 10 |

The rest form the **boneyard**. Whoever holds the starting double for the hand puts it in the centre. If nobody holds it, players take turns drawing from the boneyard until it turns up.

### First Turn

Starting with the player who put the double down and going clockwise, each player starts their own train. On this first turn only, a player may lay as many tiles as they like, as long as they make a valid chain from the engine. A player who cannot start a train draws one tile and plays it if they can; otherwise they pass and put a marker on their train.

### Turn Structure

After the first turn, a player plays **one** tile per turn, either:
- on **their own train**,
- on the **Mexican Train**, which anyone may start from the engine and anyone may extend, or
- on **another player's train**, if it carries a marker.

**If you cannot play:** draw one tile from the boneyard and play it if you can. If you still cannot, pass and put your marker on your own train, which opens it to everyone. Playing on your own marked train later takes the marker off.

### Doubles

From the second turn on, a player who plays a double must play one more tile, anywhere they are allowed to. If that tile is a double too, they play another, and so on.

A train left ending in a double must be **satisfied**: the next tile added to the layout has to go on that double. The duty falls first on the next player. If they cannot satisfy it from their hand, they draw one tile; if that does not fit either, they pass and mark their own train, and the duty moves on to the following player. A player whose last tile is a double may go out with it.

### End of a Hand

A hand ends when a player plays their last tile, or when nobody can play. Every player then adds up the pips on the tiles they still hold and adds them to their total. The player who went out adds nothing.

### Winning

After the thirteenth hand, the player with the **lowest** total wins.

### Attribution

Mexican Train. Origin disputed; popularised in the United States in the 1990s. Rules written from Pagat.com, *Mexican Train* (John McLeod, © 1997–2016), which is the source for the deal, the doubles and the scoring above; also Wikipedia, *Mexican Train*.
