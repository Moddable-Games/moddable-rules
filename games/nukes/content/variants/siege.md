---
title: "Nukes: Siege"
slug: siege
players: "2"
parent: nukes
order: 1
category: Total conversion
designer: The House
version: "1.0.0"
special: Hostage mechanic replaced with own-supply recruiting. Enemy hostages only arrive through combat.
engine:
  topology:
    type: hex
    shape: hexagonal
    radius: 3
    orientation: pointy
  players: [player1, player2]
  render:
    cellSize: 24
    cellColor: terrain
    frame: true
    seed: 123
  setup: "0,0:trees,0,1:grass,1,0:grass,1,-1:sand,0,-1:water,-1,0:trees,-1,1:trees,-1,2:grass,0,2:water,1,1:water,2,0:mount,2,-1:trees,2,-2:water,1,-2:mount,0,-2:grass,-1,-1:water,-2,0:trees,-2,1:water,-2,2:mount,-1,3:grass,0,3:water,1,2:sand,2,1:trees,3,0:base,3,-1:grass,3,-2:grass,3,-3:grass,2,-3:water,1,-3:trees,0,-3:trees,-1,-2:mount,-2,-1:trees,-3,0:base,-3,1:trees,-3,2:sand,-3,3:trees,-2,3:grass"
---

## Nukes: Siege

{{svg:siege-board.svg "Nukes: Siege — starting position"}}

A total conversion of the hostage mechanic. You start with your own tokens in reserve and deploy them to build your forces. The only way to acquire enemy hostages is through combat.

### Overview

Standard Nukes gives each player a supply of their opponents' tokens from the start. Siege removes this entirely. You begin with 21 of your own tokens off-board. Return them to regions you control to earn moves, exactly like the base game, but you're fuelling yourself.

Enemy hostages enter your supply only when you win combat with excess strength. This flips the early game from a careful hostage economy into an aggressive expansion race, and the mid-game into a siege.

### Setup Changes

- Each player starts with **4 units on their city** (standard) and **21 of their own tokens** off-board in a personal supply.
- **No starting isotope.** You do not begin with any isotopes. Isotopes are earned exclusively through Base conversion during play.
- No tokens are distributed to opponents at setup.
- All other setup (board draft, biome placement, city placement) is identical to standard Nukes.

### Rules

#### Deploy from Reserve

On your turn, return 1–3 of your own tokens from your off-board supply onto regions where you already have units. Each return earns one move. This replaces the standard hostage-return mechanic for the early game.

#### Build Through Combat

The only way to get enemy hostages is to capture them mid-game. When you win combat with excess strength (attacking units minus defending units), take the excess as hostages into your off-board supply.

Once captured, enemy hostages work identically to the base game: return them to earn moves, but each return reinforces the enemy.

#### Two Economies

Your own supply tokens fuel early expansion. Enemy hostages, once captured, fuel rapid strikes in the mid-to-late game. Both follow the same return-to-move mechanic but come from different sources.

#### Endgame

Bases, isotopes, nuclear strikes, and Meltdowns all work identically to standard Nukes. Siege changes how you build momentum, not what you're fighting over. You still lose if your supply runs out entirely.

### Design Notes

Siege creates a slower, more positional early game. Without free hostages at setup, players must commit to combat earlier to unlock the faster pacing of the hostage economy. The 2-player restriction exists because the economics break down with a third player who can accumulate hostages from two opponents simultaneously.
