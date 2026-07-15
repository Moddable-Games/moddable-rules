---
title: "Baristasaurus — Official Rulebook"
version: "0.1.2"
slug: "baristasaurus"
players: "2–5"
duration: "~20 min"
age: "8+"
tagline: "A prehistoric card game about fulfilling coffeeshop orders"
type: "game"
status: "alpha"
updated: "2026-07-15"
first_published: "April 2026"
published: false
logo_has_title: true
theme:
  surface: light
  tint: warm
  texture: grain
  cover: gradient
  typography: classical
  accent: brown
  section-divider: "☕"
engine:
  topology:
    type: none
  surface: felt-green
  components:
    deck:
      type: custom
    layout:
      type: fan
  players: [player-1, player-2, player-3, player-4]
---

<div class="section">
<div class="eyebrow">Before You Begin</div>

## How to Play in 5 Minutes

Baristasaurus is a competitive card game where players run dinosaur-staffed coffee shops, racing to fulfil orders. Collect ingredient cards, match them to orders on the table, and earn tips. First to complete 3 orders triggers the final round — most tips wins.

<div class="highlight">
<div class="box-title">★ Read This First — The Core Loop</div>

**1. Take 2 actions.** Pick up cards, play cards to the table, trade with other players, or fulfil an order.

**2. Watch the table.** Customers and orders are shared — anyone can fulfil them. However, your barista determines WHICH customers you can serve (herbivores vs carnivores).

**3. Fulfil orders for tips.** Match ingredient cards in your hand to an order's recipe. Satisfy the customer's extra requests for bonus tips. Add special ingredients for even more.

**4. Race to 3.** When any player fulfils their 3rd order, a final round begins. Each remaining player gets one last turn, then count tips — highest total wins.
</div>

</div>

<div class="section">
<div class="eyebrow">Getting Started</div>

## Setup

1. Shuffle the 5 Coffee Shop cards and deal 1 face-up in front of each player. Return unused shops to the box.
2. Each player takes their shop's starting ingredients from the ingredient deck.
3. Randomly select 1 Order card and 1 Customer card; place them face-up together on the table.
4. Shuffle all remaining cards and deal 5 to each player face-down.
5. Remaining cards form the draw pile (face-down).
6. First player: whoever most recently saw a dinosaur. Play proceeds clockwise.

</div>

<div class="section">
<div class="eyebrow">On Your Turn</div>

## Actions

On your turn, perform up to 2 actions. You may repeat the same action or mix different ones.

### Pickup Card

Draw 1 card from the draw pile.

Restriction: you can only do this if you have fewer than 12 cards at the start of your turn.

If the draw pile is empty, shuffle the discard pile to form a new draw pile.

### Play Card

Play a Special Action, Barista, Order, or Customer card from your hand.

**Customer placement:**
- Maximum face-up customers on table = number of players minus 1
- If below maximum, new customer goes face-up on table
- If at maximum, new customer must replace an existing one (replaced card goes to discard)

**Order placement:**
- If there are customers without orders, the order must go to one of them
- If all customers already have orders, new order replaces an existing one
- Cannot play an order if there are zero customers on table

**Barista placement:**
- May be played for ANY player (including yourself)
- Goes face-up on top of the target player's Coffee Shop, replacing their trainee barista (or current barista)
- If target already has a barista (other than the trainee), the new one replaces it (old goes to discard)

**Special Action cards:**
- Played and resolved immediately, then discarded

### Trade Cards

Either:
- Discard any 4 cards to draw 3 new cards, OR
- Negotiate a free-form trade with any other player

### Fulfil Order

Requirements:
- You must have a barista (either a trainee from your Coffee Shop or a played Barista card)
- You must have all required ingredient cards in hand
- Your barista must be able to serve the customer (type-matching — see Baristas)

On fulfilment:
- Take the order card and place it beside you (your score pile)
- Optionally: add 1 special ingredient card beneath the order for bonus tips
- If you also have the additional ingredients the customer requests, take that customer card too
- All other used cards go to the discard pile
- Once fulfilled, the order stays scored regardless of future barista changes

</div>

<div class="section">
<div class="eyebrow">Endgame</div>

## Winning

When any player fulfils their 3rd order, the **final round** begins. Each remaining player (clockwise from the triggering player) takes one last turn. The player who triggered the final round does not take another turn.

Add up tips from all orders, customers, and special ingredients in your score pile. Apply any active barista bonuses at this stage.

**Winner:** Most tips.

**Tiebreaker 1:** Most ingredients remaining in hand.

**Tiebreaker 2:** Best dinosaur impression.

</div>

<div class="section">
<div class="eyebrow">What's in the Box</div>

## Components

124 cards total:

| Card Type | Count | Description |
|-----------|-------|-------------|
| Coffee Shops | 5 | Starting location with trainee barista and starting ingredients |
| Orders | 12 | Coffeeshop drink recipes with ingredient requirements |
| Customers | 12 | 6 carnivore + 6 herbivore, each with extra requests |
| Baristas | 15 | 6 carnivore + 6 herbivore + 3 mammal, each with unique ability |
| Ingredients | 60 | 10 each of Milk, Coffee, Cocoa, Ice, Cream, Syrup |
| Special Ingredients | 10 | Bonus-tip toppings played at fulfilment |
| Special Actions | 10 | Immediate-effect cards played on your turn |

</div>

<div class="section">
<div class="eyebrow">The Menu</div>

## Orders

| # | Name | Milk | Coffee | Cocoa | Ice | Cream | Syrup | Tips |
|---|------|------|--------|-------|-----|-------|-------|------|
| 1 | Flat White | 1 | 2 | 0 | 0 | 0 | 0 | 0 |
| 2 | Sweet Flat White | 1 | 2 | 0 | 0 | 0 | 1 | 1 |
| 3 | Hot Latte | 2 | 1 | 0 | 0 | 0 | 0 | 0 |
| 4 | Sweet Latte | 2 | 1 | 0 | 0 | 0 | 1 | 1 |
| 5 | Cappuccino | 1 | 1 | 1 | 0 | 1 | 0 | 1 |
| 6 | Hot Chocolate | 1 | 0 | 3 | 0 | 1 | 0 | 2 |
| 7 | Mocha | 1 | 1 | 1 | 0 | 0 | 0 | 0 |
| 8 | Babyccino | 2 | 0 | 1 | 0 | 0 | 0 | 0 |
| 9 | Iced Latte | 1 | 1 | 0 | 1 | 1 | 0 | 1 |
| 10 | Iced Coffee | 1 | 1 | 0 | 1 | 0 | 0 | 0 |
| 11 | Iced Chocolate | 0 | 0 | 3 | 1 | 0 | 0 | 1 |
| 12 | Iced Mocha | 1 | 1 | 1 | 1 | 0 | 0 | 1 |

</div>

<div class="section">
<div class="eyebrow">The Regulars</div>

## Customers

### Carnivore Customers

| # | Name | Extra Request | Tips |
|---|------|--------------|------|
| 1 | Extra Sweet | +1 Syrup | 2 |
| 2 | Cocoa Creamy | +1 Cocoa, +1 Cream | 4 |
| 3 | Strong Cocoa | +1 Coffee, +1 Cocoa | 4 |
| 4 | Creamy Sweet | +1 Cream, +1 Syrup | 4 |
| 5 | Strong Creamy | +1 Coffee, +1 Cream | 4 |
| 6 | Strong Sweet | +1 Coffee, +1 Syrup | 4 |

### Herbivore Customers

| # | Name | Extra Request | Tips |
|---|------|--------------|------|
| 7 | Iced Cocoa Syrup | +1 Cocoa, +1 Ice, +1 Syrup | 6 |
| 8 | Icey Cream | +1 Ice, +1 Cream | 4 |
| 9 | Extra Icey | +1 Ice | 2 |
| 10 | Icey Sweet | +1 Ice, +1 Syrup | 4 |
| 11 | Icey Cocoa Cream | +1 Cocoa, +1 Ice, +1 Cream | 6 |
| 12 | Sweet Ice Cream | +1 Ice, +1 Cream, +1 Syrup | 6 |

</div>

<div class="section">
<div class="eyebrow">The Staff</div>

## Baristas

### Carnivore Baristas

| # | Name | Ability |
|---|------|---------|
| 1 | T-Rex | Cannot serve herbivores; double tips for carnivores |
| 2 | Spinosaurus | Cannot serve herbivores |
| 3 | Velociraptor | Can take up to 3 actions per turn |
| 4 | Pyroraptor | Double tips from herbivores |
| 5 | Ceratosaurus | 1 extra tip for each fulfilled order |
| 6 | Compsognathus | Double tips from carnivores |

### Herbivore Baristas

| # | Name | Ability |
|---|------|---------|
| 7 | Stegosaurus | Cannot serve carnivores |
| 8 | Triceratops | Can take up to 3 actions per turn |
| 9 | Ankylosaurus | Double tips from carnivores |
| 10 | Brachiosaurus | Double tips from herbivores |
| 11 | Diplodocus | Cannot serve carnivores; double tips for herbivores |
| 12 | Bajadasaurus | 1 extra tip for each fulfilled order |

### Mammal Baristas

| # | Name | Ability |
|---|------|---------|
| 13 | Smilodon | 1 extra tip for every barista in your hand at the end of the game |
| 14 | Titanoboa | Take any card from the discard pile when completing an order |
| 15 | Woolly Mammoth | 1 extra tip for every ice in your hand at the end of the game |

<div class="designer-note">
<p>Type-matching rule: Herbivore baristas cannot serve carnivore customers, and carnivore baristas cannot serve herbivore customers — unless their ability text does not include the "cannot serve" restriction. Mammal baristas and baristas without a "cannot serve" restriction may serve any customer type.</p>
</div>

</div>

<div class="section">
<div class="eyebrow">Bonus Cards</div>

## Specials

### Special Ingredients

Played at the moment of fulfilment only — added beneath the order for bonus tips.

| # | Name | Bonus |
|---|------|-------|
| 1 | Choccy Sprinkles | Double tips if added to a creamy drink |
| 2 | Rainbow Dust | Add 3 to tips if added to babyccino |
| 3 | Twisty Straws | Add 1 to tips if added to an icy drink |
| 4 | Marshmallows | Add 2 to tips if added to a cocoa drink |
| 5 | Raspberry Syrup | 1 tip if added to milky drink, or 2 tips with chocolate syrup too |
| 6 | Chocolate Syrup | 1 tip if added to milky drink, or 2 tips with raspberry syrup too |
| 7 | Double Cream | A single cream can count as 2 cream, or no cream can count as 1 cream |
| 8 | Dry Ice | Any number of ice ingredients can count as any ingredients |
| 9 | Condensed Milk | Counts as one milk and one syrup; gains 1 extra tip on orders |
| 10 | Decaf | Counts as 2 coffee when added to an order |

### Special Actions

Played and resolved immediately on your turn, then discarded.

| # | Name | Effect |
|---|------|--------|
| 11 | Recycle | Pick any 1 card from the discard pile |
| 12 | Bully | Pick 1 player, look at their hand and take 1 card |
| 13 | Slow Poke | Fulfil someone else's order and take the tips with it |
| 14 | Internship | Fulfil an order with up to 1 missing ingredient |
| 15 | Delivery | Draw 3 new cards |
| 16 | Shakeup | Switch any active barista with another active barista |
| 17 | Protection | Play when someone plays a special action against you; cancels that action |
| 18 | Re-Order | Replace any order on the table with one from the discard pile |
| 19 | Returnee | Replace any customer on the table with one from the discard pile |
| 20 | Loyalist | Replace any barista on the table with one from the discard pile |

</div>

<div class="section">
<div class="eyebrow">Your Shop</div>

## Coffee Shops

Each player begins the game with a randomly assigned Coffee Shop placed face-up in front of them. The shop provides starting ingredients and a trainee barista with conditions. When a Barista card is played on a player, it is placed on top of the Coffee Shop, replacing the trainee.

| Shop | Milk | Coffee | Cocoa | Ice | Cream | Syrup | Total | Trainee Barista |
|------|------|--------|-------|-----|-------|-------|-------|-----------------|
| Lava Joes | 0 | 3 | 2 | 0 | 0 | 0 | 5 | Cannot earn tips from customers; only from orders and specials |
| Polo Cove | 1 | 0 | 0 | 3 | 1 | 0 | 5 | Cannot earn tips from customers; only from orders and specials |
| Herbies Shakes | 1 | 0 | 0 | 0 | 1 | 3 | 5 | Cannot serve carnivores |
| Carnies Cuppa | 1 | 1 | 1 | 0 | 1 | 1 | 5 | Cannot serve herbivores |
| Stone Ducks | 0 | 0 | 0 | 0 | 0 | 0 | 0 | Can fulfil orders or satisfy customers with one missing ingredient |

</div>
