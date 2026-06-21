---
title: "Harvesters"
version: "0.1.0"
slug: "harvesters"
players: "3–6"
duration: "75–90 min"
age: "12+"
tagline: "A hex farming strategy game playable with a standard Catan box"
type: "original"
status: "draft"
updated: "2026-06-21"
published: false
variants: false
---

<div class="section">

## What is Harvesters?

Harvesters is an original Moddable Games board game for 3 to 6 players. You are farmers on a shared landscape, building farmsteads, establishing farms, drawing crops from the land, and trading with your neighbours. The game ends when one farmer reaches 10 Victory Points. If the community cannot feed itself through a hard winter, everyone loses together.

Harvesters is designed to be played with the components from any standard Catan box. No additional components are required. The rules replace Catan's game entirely.

Harvesters is published under CC-BY-SA 4.0. It is free to play, free to modify, and free to redistribute with attribution. It was designed in public, built by an automated pipeline, and the full design process is documented openly at github.com/Moddable-Games/moddable-rules. If you think a rule is wrong, the issue tracker is open.

</div>

<div class="section">

## Why Harvesters exists

Catan is the most widely played modern board game in the world, with over 45 million copies sold. It has no openly licensed alternative. Every digital implementation, fan adaptation, and open-source project built around its concepts operates on a legally uncertain foundation: the rules are commercially locked.

Harvesters solves the problem Catan was never designed to solve: dice dominance. In Catan, a bad roll means nothing you can do. The dice decide your turn before it starts. Harvesters replaces this with a personal dice pool you allocate yourself. Every roll is a decision. Strategy, not luck, determines who wins.

This is the game Moddable Games was built to make possible.

</div>

<div class="section">

## Components from the Catan box

Harvesters uses these Catan components with new names and meanings. Set aside the Catan rulebook.

| Catan component | Harvesters name | Purpose |
|---|---|---|
| Hex terrain tiles | Terrain hexes | Arable, pasture, orchard, woodland, water, common land |
| Number tokens (2–12) | Yield tokens | Set minimum yield threshold for each hex |
| Resource cards | Crop cards | Grain, livestock, fruit, timber, water |
| Road pieces | Field boundaries | Connect farmsteads, score Longest Boundary |
| Settlement pieces | Farmsteads | 1 VP each; your presence on the land |
| City pieces | Established farms | 2 VP each (replaces farmstead); upgraded farm |
| Robber token | Weather token | Moves to a hex when a weather event occurs |
| Dice | Personal dice pool | You roll and allocate your own dice each turn |
| Development cards | Season Event cards | Drawn when a season turns; affect all players |
| Longest Road card | Longest Boundary card | 2 VP for most connected field boundary segments |
| Largest Army card | Largest Herd card | 2 VP for most livestock cards held |
| Harbour tokens | Port tokens | Enable 2:1 and 3:1 trades with the bank |

Shuffle the 25 development cards face-down. This becomes the Season Event deck. Do not look at them during setup.

</div>

<div class="section">

## The terrain

The six hex terrain types and their crop outputs:

| Terrain | Harvesters name | Crop produced |
|---|---|---|
| Fields (yellow) | Arable land | Grain |
| Pasture (light green) | Pasture | Livestock |
| Forest (dark green) | Woodland | Timber |
| Hills (orange/red) | Orchard | Fruit |
| Mountains (grey) | Water source | Water |
| Desert (tan) | Common land | No crop |

The sea frame, port tokens, and number tokens are placed as normal per the standard Catan setup.

**Yield tokens:** Each non-common terrain hex receives a yield token (the Catan number tokens) during setup. The number on the token is the yield threshold for that hex. When you allocate a die to a hex, you collect crops only if the die value meets or exceeds the threshold. You always collect at least 1 crop when the threshold is met.

</div>

<div class="section">

## The seasons

The game is divided into four seasons that cycle repeatedly: Spring, Summer, Autumn, Winter.

A **season clock** tracks how many player turns remain in the current season. The season clock starts at its full value when the season begins and counts down by 1 at the end of each player's turn. When it reaches 0, the season turns.

| Season | Clock duration | Season Event drawn? | Weather event |
|---|---|---|---|
| Spring | 3 turns per player | Yes (at season start) | The Flood |
| Summer | 4 turns per player | Yes (at season start) | The Drought |
| Autumn | 3 turns per player | Yes (at season start) | The Blight |
| Winter | 2 turns per player | Yes (at season start) | The Frost |

The game begins in Spring. The starting season clock is 3 × player count.

When a new season begins, the first player draws the top card of the Season Event deck and reads it aloud. Its effect applies for the entire season unless otherwise stated.

</div>

<div class="section">

## Weather events

A weather event occurs whenever any die in a player's roll shows a result of 7. On a standard two-dice start, this means when the sum of the two dice equals 7.

When a weather event occurs:

1. Resolve the current season's weather event (see below).
2. Move the weather token to the affected hex.
3. That hex produces no crops while the weather token occupies it, regardless of dice allocation.

| Season | Weather event | Effect |
|---|---|---|
| Spring | The Flood | Move the weather token to any water-adjacent hex of your choice. |
| Summer | The Drought | Move the weather token to any arable or orchard hex of your choice. Pasture hexes are immune; the weather token may not be placed there. |
| Autumn | The Blight | Move the weather token to any arable or orchard hex of your choice. Pasture hexes are immune. |
| Winter | The Frost | Move the weather token to any arable or orchard hex of your choice. Pasture hexes are only mildly affected: players with a farmstead or established farm adjacent exclusively to pasture hexes (no arable or orchard adjacency) collect 1 livestock regardless of dice result this turn only. |

The player whose roll triggered the event moves the weather token. They may not place it on a hex adjacent to their own farmstead or established farm unless no other hex is available.

The weather token remains on its hex until another weather event occurs. It is then moved to the new location. The token does not stack; only one hex is suppressed at a time.

</div>
