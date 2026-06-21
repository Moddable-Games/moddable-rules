---
title: "Harvesters — Standard Rules"
slug: "standard"
board: "Hex tile board (standard Catan layout)"
players: "3–6"
parent: "harvesters"
order: 1
win: "First to 10 Victory Points, but if the Hunger Check fails, everyone loses"
special: "Personal dice pool allocation replaces random resource generation. Seasonal weather events replace the robber. Season Event cards replace development cards."
---

## Harvesters

Harvesters is a hex farming strategy game for 3 to 6 players, playable with the components from any standard Catan box. Players build farmsteads, establish farms, and trade crops with their neighbours across a shared landscape that changes with the seasons. The first farmer to reach 10 Victory Points wins, but only if the community can survive the winter together.

### Setup

**1. Lay the board.**
Assemble the hex terrain tiles into the standard Catan island layout. Use the beginner layout printed in the Catan rulebook for your first game. Surround the island with the sea frame tiles and place the port tokens on the harbours as normal.

**2. Place yield tokens.**
Place a yield token (Catan number token) on each non-common-land hex following the standard Catan placement rules (letter grid or random placement). Common land hexes receive no token.

**3. Prepare the Season Event deck.**
Take all 25 development cards, shuffle them face-down, and place them in a stack face-down. This is the Season Event deck. Do not deal any cards to players at this stage.

**4. Set the season.**
The game begins in Spring. Set the season clock to 3 × the number of players. Place a marker on Spring on the season track (use any spare token). Draw the top card of the Season Event deck and read it aloud. Its effect applies for all of Spring.

**5. Place the weather token.**
Place the weather token (robber) on the common land hex. It starts there and has no effect.

**6. Starting positions — first round of placement.**
Determine the starting player randomly. In clockwise order, each player places one farmstead on any unoccupied land intersection (a corner where three hexes meet) and one field boundary (road) extending from that farmstead along any adjacent edge. Farmsteads may not be placed adjacent to another farmstead (the standard Catan distance rule applies).

**7. Starting positions — second round of placement.**
In reverse order (the last player goes first), each player places a second farmstead and a second field boundary from that farmstead. After placing their second farmstead, each player collects one crop card for each terrain hex adjacent to that second farmstead. Common land hexes and hexes with the weather token produce no starting crops.

**8. Starting dice pool.**
Each player starts with a dice pool of 2 dice. Take 2 dice from the Catan dice set.

**9. Starting hand.**
Players begin with the crops collected in step 7 only. No other starting resources.

**10. Longest Boundary and Largest Herd.**
Place the Longest Boundary card (Longest Road) and Largest Herd card (Largest Army) face-up beside the board. Neither is held by any player at the start.

---

### Turn structure

On your turn, follow these steps in order.

#### Step 1: Season check

Reduce the season clock by 1. If the clock has just reached 0, the season turns:

- Advance the season marker to the next season (Spring → Summer → Autumn → Winter → Spring).
- Set the season clock to the new season's starting value (Spring: 3 × players, Summer: 4 × players, Autumn: 3 × players, Winter: 2 × players).
- Draw the top card of the Season Event deck and read it aloud. Its effect applies for the entire new season.
- If the new season is Winter, conduct the Hunger Check after reading the Season Event card (see Hunger Check below) before continuing your turn.
- If the Season Event deck is empty, shuffle all discarded Season Event cards to form a new deck.

If the clock has not reached 0, continue to Step 2.

#### Step 2: Roll

Roll all the dice in your personal pool at once.

**Dice pool size** is determined by your level of farm development:

| Farm development | Dice pool size |
|---|---|
| Starting position (2 farmsteads) | 2 dice |
| 3 farmsteads or 1 established farm | 3 dice |
| 4 farmsteads or 2 established farms | 4 dice |
| 5+ farmsteads or 3+ established farms | 5 dice (maximum) |

Count your current farmsteads and established farms after each build action. Your pool size may increase mid-game.

#### Step 3: Weather check

Before allocating, check for a weather event:

- If your pool is 2 dice and the sum equals 7, a weather event occurs.
- If your pool is 3 or more dice and any single die shows a 7 (use a d12 if available, otherwise treat a 6 as a 7 on a d6 by re-rolling 6s until you get a 6 or non-6, or agree with your group to use the sum = 7 rule throughout): a weather event occurs.

**Practical note for standard Catan dice (two d6):** Use the sum-equals-7 rule for all pool sizes. This is the simplest approach and preserves the same probability as Catan's 7.

If a weather event occurs, resolve the current season's event now (see Weather Events in the rulebook), move the weather token, then continue to Step 4. You still allocate all your dice.

#### Step 4: Allocate

Place each die on one of your adjacent terrain hexes (a hex that has a corner touching one of your farmsteads or established farms).

Rules for allocation:
- Each hex may receive at most one die.
- You must allocate every die in your pool. If you have more dice than adjacent hexes, unallocated dice are wasted (they produce nothing).
- A hex with the weather token on it produces nothing regardless of the die placed there.
- Common land hexes produce nothing regardless of the die placed there.

**Collecting crops:** For each die you allocate to a hex, check the die value against the hex's yield token:
- If the die value is equal to or greater than the yield token number, collect 1 crop card of that hex's type.
- If the die value is less than the yield token number, collect nothing from that hex this turn.

**Example:** You have 3 dice and roll a 4, a 6, and a 2. Your farmsteads touch an arable hex (yield token 5), a pasture hex (yield token 3), and an orchard hex (yield token 4). You place the 6 on the arable hex (6 ≥ 5: collect 1 grain), the 4 on the orchard (4 ≥ 4: collect 1 fruit), and the 2 on the pasture (2 < 3: no livestock). You collect 1 grain and 1 fruit this turn.

#### Step 5: Reroll (optional)

After allocating, you may reroll any dice that produced nothing, whether because the die value was below the hex's yield threshold or because you had more dice than hexes.

- Each die you choose to reroll costs 1 crop card discarded to the supply.
- You may reroll any number of dice, paying 1 card per die.
- Each die may be rerolled only once per turn.
- After rerolling, reallocate the rerolled dice following the same rules as Step 4. You may place them on any of your adjacent hexes, including hexes already occupied by a previously placed die only if you have vacant adjacent hexes remaining. Otherwise you may swap a rerolled die for a placed die (the displaced die is then wasted).
- Collect crops from rerolled dice using the same yield threshold rules.

#### Step 6: Trade (optional)

You may trade crops in any order and any number of times:

**Port trade (2:1):** If you have a farmstead or established farm adjacent to a port hex, you may trade 2 crop cards of that port's listed type for 1 crop card of any type from the supply. Each port enables unlimited trades of its type on your turn.

**Open trade (3:1):** Any player, any time on your turn, may trade 3 crop cards of any one type for 1 crop card of any other type from the supply. No port required.

**Player trade:** You may negotiate freely with any other player and trade any number of crop cards for any number of their crop cards. Trades must be crop-for-crop and take effect immediately. No promises about future turns are binding. Only you may trade on your turn. Other players may not trade with each other during your turn.

#### Step 7: Build (optional)

Spend crop cards to build. You may build any number of things in any order.

| Build | Cost | Notes |
|---|---|---|
| Field boundary | 1 timber + 1 grain | Must connect to an existing farmstead or field boundary you own |
| Farmstead | 1 timber + 1 grain + 1 livestock + 1 fruit | Must be placed on an unoccupied intersection connected to your field boundaries, at least 2 edges from any other farmstead |
| Established farm | 2 grain + 3 livestock | Replace one of your existing farmsteads. Return the farmstead piece to your supply. Place an established farm piece. Your dice pool may increase; check immediately. |

Building an established farm entitles you to draw 1 Season Event card at the end of your turn (Step 9).

**Longest Boundary:** After building, count your total connected field boundary segments. If you have strictly more than the current holder of the Longest Boundary card, take the card. If no one holds it, you need at least 5 segments to claim it. 2 VP while you hold it.

**Largest Herd:** After trading and building, count the livestock cards in your hand. If you have strictly more than the current holder of the Largest Herd card, take the card. If no one holds it, you need at least 3 livestock to claim it. 2 VP while you hold it.

#### Step 8: Victory check

Count your Victory Points:
- 1 VP per farmstead
- 2 VP per established farm
- 2 VP for Longest Boundary card (if held)
- 2 VP for Largest Herd card (if held)
- VP from Season Event cards (if any in hand grant VP)

If you have reached 10 VP, announce it. The current round continues until every other player has completed their turn. After the final player's turn, the player with the most VP wins. Ties are broken by most established farms, then most farmsteads.

#### Step 9: Draw Season Event card (conditional)

If you built an established farm this turn, draw 1 Season Event card from the deck and keep it face-down in your hand. Some Season Event cards grant VP when held. These are revealed and scored immediately when drawn. Others are played on a future turn as described on the card.

---

### The Hunger Check

At the start of every Winter season (immediately after the Season Event card is drawn), conduct a Hunger Check.

1. Count the total crop cards held by all players combined.
2. If the total is less than 4 × the number of players, the community cannot survive the winter.
3. If the community cannot survive: the game ends immediately. No player wins. This is a shared loss.
4. If the community can survive: continue normally.

**Example (5 players):** The threshold is 4 × 5 = 20 crop cards. If all players together hold fewer than 20 crop cards when Winter begins, the Hunger Check fails and everyone loses.

The Hunger Check creates genuine tension throughout the game. Hoarding crops for personal Victory Points risks triggering a collective loss. Players must balance personal optimisation against community resilience.

---

### Season Event cards

The 25 Season Event cards replace Catan's development cards. They are drawn from a shuffled deck, never purchased. One card is drawn when each season begins (by the current active player or by the player who just triggered the season turn). Additional cards may be drawn when an established farm is built.

The deck contains the following cards. When the deck is exhausted, shuffle all discarded cards to form a new deck.

**Bumper Harvest (5 cards)**
Name one terrain type when this card is drawn. All players with farmsteads or established farms adjacent to that terrain type collect 2 additional crop cards of that type immediately.

**Poor Conditions (5 cards)**
Name one terrain type when this card is drawn. That terrain type produces no crops this season (dice allocated to those hexes produce nothing, regardless of yield threshold). Effect lasts until the next Season Event card is drawn.

**Common Grazing (4 cards)**
All players may trade livestock cards at 2:1 with the bank this season, regardless of port adjacency.

**Market Day (3 cards)**
Each player may immediately make one free 2:1 trade with the bank. This happens now, not on their turn. Any crop type, any port or not.

**Land Grant (3 cards)**
The first player to build a new farmstead this season scores 1 additional VP when they build it.

**Plague (2 cards)**
The player currently holding the Largest Herd card must discard 2 livestock cards to the supply immediately. If no one holds the Largest Herd card, no effect.

**Cooperative Harvest (2 cards)**
If the total crop cards held by all players combined is equal to or greater than 6 × the number of players when this card is drawn, each player scores 1 VP immediately.

**Great Frost (1 card)**
If this card is drawn in Winter, the Winter Frost weather event fires immediately on all arable and orchard hexes simultaneously. No die roll required, no token placement. Every arable and orchard hex on the board produces nothing this turn. Pastoral adjacency provides no protection. If this card is drawn in any other season, discard it and draw again.

---

### Winning

The first player to reach 10 VP at the end of their turn triggers the final round. Every other player completes their current turn. The player with the most VP at the end of the final round wins.

In a tie, the player with more established farms wins. If still tied, the player with more farmsteads wins. If still tied, the player who reached the tied score first wins.

### Shared loss

If the Hunger Check fails at the start of Winter, the game ends immediately and no player wins. This outcome is not a draw. It is a shared loss. Record it separately if you are tracking games.

### Other endings

If the crop supply is exhausted (all cards of a type have been taken), trades and production of that type are simply unavailable until crops are returned to the supply through discards or Plague. The game does not end due to supply exhaustion.

---

### Strategy notes

**Dice pool is everything.** Your pool grows from 2 to a maximum of 5 dice as you develop. A larger pool means more allocation choices and more chances to meet yield thresholds. Building established farms early, even at the cost of short-term crop income, pays off across a long game.

**Specialise, then trade.** The terrain you settle near determines what you produce. Settle near arable and orchard hexes for high-threshold, high-reward crops in Summer and Autumn. Settle near pasture for consistent low-threshold livestock year-round. Neither specialisation is self-sufficient. Trading is the primary path to the mixed crop portfolio you need to build.

**Watch the Hunger Check.** It is easy to spend Winter racing toward 10 VP while your community collectively holds 8 crop cards. If you see the total dropping below the threshold, produce livestock and resist the urge to spend everything on building. A shared loss means everyone loses, including the player who was winning.

**Season Event cards matter.** Bumper Harvest and Poor Conditions can swing a season significantly. If you hear "Poor Conditions: grain" immediately before your turn, a hand full of timber and fruit is suddenly valuable. Pay attention to what everyone else is producing.

**The weather token is a tool.** You choose where to place it when your roll triggers a weather event. Placing it on a hex that threatens no one is wasted. Placing it on the hex your most productive rival relies on is pressure.

---

### Variants and expansions

The following mechanics are not included in the base game but are planned for the first Harvesters expansion:

- Weather mitigation through resource spending into a common pool
- Scaling weather severity costs per season
- Common Land shared hex mechanics (the common land hex produces crops for all adjacent farmers collectively)
- Land exhaustion tracking (hexes become less productive over multiple seasons of intensive use)
- Differentiated dice faces for pastoral and arable specialisations
- Seasonal yield tables replacing fixed yield tokens

---

### Attribution

Harvesters. Designed by Moddable Games, 2026. Published under Creative Commons Attribution-ShareAlike 4.0 International (CC-BY-SA 4.0). You are free to play, adapt, and redistribute this game with attribution. Derivative works must be published under the same licence.

Playable with components from Catan (Klaus Teuber, 1995, Kosmos/Asmodee). Harvesters is an independent original work. It is not affiliated with, endorsed by, or derived from Catan or its publishers.

Design process documented at github.com/Moddable-Games/moddable-rules. Issue tracker open for contributions and rule challenges.
