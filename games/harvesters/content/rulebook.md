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

<div class="section">

## Setup

**1. Lay the board.**
Assemble the hex terrain tiles into the standard Catan island layout. Use the beginner layout printed in the Catan rulebook for your first game. Surround the island with the sea frame tiles and place the port tokens on the harbours as normal.

**2. Place yield tokens.**
Place a yield token (Catan number token) on each non-common-land hex following the standard Catan placement rules (letter grid or random placement). Common land hexes receive no token.

**3. Prepare the Season Event deck.**
Take all 25 development cards, shuffle them face-down, and place them in a stack face-down. This is the Season Event deck. Do not deal any cards to players at this stage.

**4. Set the season.**
The game begins in Spring. Set the season clock to 3 x the number of players. Place a marker on Spring on the season track (use any spare token). Draw the top card of the Season Event deck and read it aloud. Its effect applies for all of Spring.

**5. Place the weather token.**
Place the weather token (robber) on the common land hex. It starts there and has no effect.

**6. Starting positions: first round of placement.**
Determine the starting player randomly. In clockwise order, each player places one farmstead on any unoccupied land intersection (a corner where three hexes meet) and one field boundary (road) extending from that farmstead along any adjacent edge. Farmsteads may not be placed adjacent to another farmstead (the standard Catan distance rule applies).

**7. Starting positions: second round of placement.**
In reverse order (the last player goes first), each player places a second farmstead and a second field boundary from that farmstead. After placing their second farmstead, each player collects one crop card for each terrain hex adjacent to that second farmstead. Common land hexes and hexes with the weather token produce no starting crops.

**8. Starting dice pool.**
Each player starts with a dice pool of 2 dice. Take 2 dice from the Catan dice set.

**9. Starting hand.**
Players begin with the crops collected in step 7 only. No other starting resources.

**10. Longest Boundary and Largest Herd.**
Place the Longest Boundary card (Longest Road) and Largest Herd card (Largest Army) face-up beside the board. Neither is held by any player at the start.

</div>

<div class="section">

## Turn structure

On your turn, follow these steps in order.

### Step 1: Season check

Reduce the season clock by 1. If the clock has just reached 0, the season turns:

- Advance the season marker to the next season (Spring, Summer, Autumn, Winter, Spring).
- Set the season clock to the new season's starting value (Spring: 3 x players, Summer: 4 x players, Autumn: 3 x players, Winter: 2 x players).
- Draw the top card of the Season Event deck and read it aloud. Its effect applies for the entire new season.
- If the new season is Winter, conduct the Hunger Check after reading the Season Event card (see Hunger Check below) before continuing your turn.
- If the Season Event deck is empty, shuffle all discarded Season Event cards to form a new deck.

If the clock has not reached 0, continue to Step 2.

### Step 2: Roll

Roll all the dice in your personal pool at once.

**Dice pool size** is determined by your level of farm development:

| Farm development | Dice pool size |
|---|---|
| Starting position (2 farmsteads) | 2 dice |
| 3 farmsteads or 1 established farm | 3 dice |
| 4 farmsteads or 2 established farms | 4 dice |
| 5+ farmsteads or 3+ established farms | 5 dice (maximum) |

Count your current farmsteads and established farms after each build action. Your pool size may increase mid-game.

### Step 3: Weather check

Before allocating, check for a weather event. If your pool is 2 dice and the sum equals 7, a weather event occurs. For pools of 3 or more dice, use the same sum-equals-7 rule for simplicity.

If a weather event occurs, resolve the current season's event now (see Weather Events above), move the weather token, then continue to Step 4. You still allocate all your dice.

### Step 4: Allocate

Place each die on one of your adjacent terrain hexes (a hex that has a corner touching one of your farmsteads or established farms).

Rules for allocation:
- Each hex may receive at most one die.
- You must allocate every die in your pool. If you have more dice than adjacent hexes, unallocated dice are wasted (they produce nothing).
- A hex with the weather token on it produces nothing regardless of the die placed there.
- Common land hexes produce nothing regardless of the die placed there.

**Collecting crops:** For each die you allocate to a hex, check the die value against the hex's yield token:
- If the die value is equal to or greater than the yield token number, collect 1 crop card of that hex's type.
- If the die value is less than the yield token number, collect nothing from that hex this turn.

**Example:** You have 3 dice and roll a 4, a 6, and a 2. Your farmsteads touch an arable hex (yield token 5), a pasture hex (yield token 3), and an orchard hex (yield token 4). You place the 6 on the arable hex (6 >= 5: collect 1 grain), the 4 on the orchard (4 >= 4: collect 1 fruit), and the 2 on the pasture (2 < 3: no livestock). You collect 1 grain and 1 fruit this turn.

### Step 5: Reroll (optional)

After allocating, you may reroll any dice that produced nothing, whether because the die value was below the hex's yield threshold or because you had more dice than hexes.

- Each die you choose to reroll costs 1 crop card discarded to the supply.
- You may reroll any number of dice, paying 1 card per die.
- Each die may be rerolled only once per turn.
- After rerolling, reallocate the rerolled dice following the same rules as Step 4. You may place them on any of your adjacent hexes, including hexes already occupied by a previously placed die only if you have vacant adjacent hexes remaining. Otherwise you may swap a rerolled die for a placed die (the displaced die is then wasted).
- Collect crops from rerolled dice using the same yield threshold rules.

</div>

<div class="section">

## Trading

You may trade crops in any order and any number of times on your turn:

**Port trade (2:1):** If you have a farmstead or established farm adjacent to a port hex, you may trade 2 crop cards of that port's listed type for 1 crop card of any type from the supply. Each port enables unlimited trades of its type on your turn.

**Open trade (3:1):** Any player, any time on your turn, may trade 3 crop cards of any one type for 1 crop card of any other type from the supply. No port required.

**Player trade:** You may negotiate freely with any other player and trade any number of crop cards for any number of their crop cards. Trades must be crop-for-crop and take effect immediately. No promises about future turns are binding. Only you may trade on your turn. Other players may not trade with each other during your turn.

</div>

<div class="section">

## Building

Spend crop cards to build. You may build any number of things in any order.

| Build | Cost | Notes |
|---|---|---|
| Field boundary | 1 timber + 1 grain | Must connect to an existing farmstead or field boundary you own |
| Farmstead | 1 timber + 1 grain + 1 livestock + 1 fruit | Must be placed on an unoccupied intersection connected to your field boundaries, at least 2 edges from any other farmstead |
| Established farm | 2 grain + 3 livestock | Replace one of your existing farmsteads. Return the farmstead piece to your supply. Place an established farm piece. Your dice pool may increase; check immediately. |

Building an established farm entitles you to draw 1 Season Event card at the end of your turn.

**Longest Boundary:** After building, count your total connected field boundary segments. If you have strictly more than the current holder of the Longest Boundary card, take the card. If no one holds it, you need at least 5 segments to claim it. 2 VP while you hold it.

**Largest Herd:** After trading and building, count the livestock cards in your hand. If you have strictly more than the current holder of the Largest Herd card, take the card. If no one holds it, you need at least 3 livestock to claim it. 2 VP while you hold it.

</div>

<div class="section">

## Winning

Count your Victory Points:
- 1 VP per farmstead
- 2 VP per established farm
- 2 VP for Longest Boundary card (if held)
- 2 VP for Largest Herd card (if held)
- VP from Season Event cards (if any in hand grant VP)

The first player to reach 10 VP at the end of their turn triggers the final round. Every other player completes their current turn. The player with the most VP at the end of the final round wins.

In a tie, the player with more established farms wins. If still tied, the player with more farmsteads wins. If still tied, the player who reached the tied score first wins.

### Shared loss

If the Hunger Check fails at the start of Winter, the game ends immediately and no player wins. This is a shared loss. Record it separately if you are tracking games.

</div>

<div class="section">

## The Hunger Check

At the start of every Winter season (immediately after the Season Event card is drawn), conduct a Hunger Check.

1. Count the total crop cards held by all players combined.
2. If the total is less than 4 x the number of players, the community cannot survive the winter.
3. If the community cannot survive: the game ends immediately. No player wins. This is a shared loss.
4. If the community can survive: continue normally.

**Example (5 players):** The threshold is 4 x 5 = 20 crop cards. If all players together hold fewer than 20 crop cards when Winter begins, the Hunger Check fails and everyone loses.

The Hunger Check creates genuine tension throughout the game. Hoarding crops for personal Victory Points risks triggering a collective loss. Players must balance personal optimisation against community resilience.

</div>

<div class="section">

## Season Event cards

The 25 Season Event cards replace Catan's development cards. They are drawn from a shuffled deck, never purchased. One card is drawn when each season begins. Additional cards may be drawn when an established farm is built.

The deck contains the following cards. When the deck is exhausted, shuffle all discarded cards to form a new deck.

**Bumper Harvest (5 cards):**
Name one terrain type when this card is drawn. All players with farmsteads or established farms adjacent to that terrain type collect 2 additional crop cards of that type immediately.

**Poor Conditions (5 cards):**
Name one terrain type when this card is drawn. That terrain type produces no crops this season (dice allocated to those hexes produce nothing, regardless of yield threshold). Effect lasts until the next Season Event card is drawn.

**Common Grazing (4 cards):**
All players may trade livestock cards at 2:1 with the bank this season, regardless of port adjacency.

**Market Day (3 cards):**
Each player may immediately make one free 2:1 trade with the bank. This happens now, not on their turn. Any crop type, any port or not.

**Land Grant (3 cards):**
The first player to build a new farmstead this season scores 1 additional VP when they build it.

**Plague (2 cards):**
The player currently holding the Largest Herd card must discard 2 livestock cards to the supply immediately. If no one holds the Largest Herd card, no effect.

**Cooperative Harvest (2 cards):**
If the total crop cards held by all players combined is equal to or greater than 6 x the number of players when this card is drawn, each player scores 1 VP immediately.

**Great Frost (1 card):**
If this card is drawn in Winter, the Winter Frost weather event fires immediately on all arable and orchard hexes simultaneously. No die roll required, no token placement. Every arable and orchard hex on the board produces nothing this turn. Pastoral adjacency provides no protection. If this card is drawn in any other season, discard it and draw again.

</div>

<div class="section">

## Strategy notes

**Dice pool is everything.** Your pool grows from 2 to a maximum of 5 dice as you develop. A larger pool means more allocation choices and more chances to meet yield thresholds. Building established farms early, even at the cost of short-term crop income, pays off across a long game.

**Specialise, then trade.** The terrain you settle near determines what you produce. Settle near arable and orchard hexes for high-threshold, high-reward crops in Summer and Autumn. Settle near pasture for consistent low-threshold livestock year-round. Neither specialisation is self-sufficient. Trading is the primary path to the mixed crop portfolio you need to build.

**Watch the Hunger Check.** It is easy to spend Winter racing toward 10 VP while your community collectively holds 8 crop cards. If you see the total dropping below the threshold, produce livestock and resist the urge to spend everything on building. A shared loss means everyone loses, including the player who was winning.

**The weather token is a tool.** You choose where to place it when your roll triggers a weather event. Placing it on a hex that threatens no one is wasted. Placing it on the hex your most productive rival relies on is pressure.

</div>

<div class="section">

## Attribution

Harvesters. Designed by Moddable Games, 2026. Published under Creative Commons Attribution-ShareAlike 4.0 International (CC-BY-SA 4.0). You are free to play, adapt, and redistribute this game with attribution. Derivative works must be published under the same licence.

Playable with components from Catan (Klaus Teuber, 1995, Kosmos/Asmodee). Harvesters is an independent original work. It is not affiliated with, endorsed by, or derived from Catan or its publishers.

</div>

