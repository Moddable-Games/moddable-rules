---
title: "Nukes: Asymmetric Powers"
slug: asymmetric-powers
players: "2–3"
parent: nukes
order: 2
category: Rebalance
designer: The House
version: "1.0.0"
special: Each player draws one Power Card at setup. No two players hold the same card.
engine:
  topology:
    type: hex
    shape: hexagonal
    radius: 3
    orientation: pointy
  players: [player1, player2, player3]
  render:
    cellSize: 24
    cellColor: terrain
    frame: true
    seed: 256
  setup: "0,0:water,0,1:trees,1,0:grass,1,-1:mount,0,-1:mount,-1,0:trees,-1,1:grass,-1,2:trees,0,2:mount,1,1:grass,2,0:water,2,-1:sand,2,-2:water,1,-2:trees,0,-2:mount,-1,-1:grass,-2,0:water,-2,1:trees,-2,2:trees,-1,3:water,0,3:trees,1,2:mount,2,1:mount,3,0:base,3,-1:water,3,-2:grass,3,-3:water,2,-3:grass,1,-3:trees,0,-3:base,-1,-2:trees,-2,-1:sand,-3,0:mount,-3,1:trees,-3,2:water,-3,3:base,-2,3:grass"
---

## Nukes: Asymmetric Powers

A rebalance mod that adds one unique Power Card per player at setup. Standard Nukes underneath, explicit asymmetry on top.

### Overview

Before setup, each player draws one Power Card from a deck of three. Powers are revealed simultaneously and remain public for the entire game. No two players hold the same card. All other rules, including the hostage economy, fluid platoons, biome interactions, and nuclear mechanics, are identical to base Nukes.

### Setup Changes

- Shuffle the three Power Cards face-down.
- Each player draws one card. In a 2-player game, one card is removed from the game unseen.
- Reveal all drawn cards simultaneously. Powers are public from this point.
- Proceed with standard Nukes setup.

### The Three Power Cards

#### Covert Network

**Effect:** Once per turn, after completing your moves, you may swap the positions of any two of your opponent's platoons on the board. Both platoons must be in regions adjacent to at least one of your units.

**Frequency:** Once per turn, used after Phase 2 (Move Units) resolves.

**Strategic impact:** Enables aggressive repositioning of enemy forces. Pull defenders away from their city. Strand artillery in hostile biomes. Force opponents to keep their units clustered or risk being rearranged.

#### Arms Industry

**Effect:** When you build a Base (4+ units in a region), one of the units that formed the Base is immediately converted into an isotope and placed off-board. No additional tokens are needed; this is a free conversion that does not consume your normal isotope conversion action for that event. You still gain isotopes through the standard conversion action as well.

**Frequency:** Triggers each time you form a new Base. If you form two Bases in one turn, you gain two free isotopes. Does not trigger when adding units to an existing Base.

**Strategic impact:** Enables faster nuclear escalation. An Arms Industry player forming Bases aggressively can stockpile isotopes faster than opponents expect. Opponents must pressure Base formation early or face an early nuclear threat.

#### Airborne Corps

**Effect:** Your Airborne platoons (3 units) may drop exactly three hexes away instead of two. The "not adjacent" restriction still applies (cannot land adjacent to starting region). Slingshot range through friendly Bases is also extended: each leg covers three hexes instead of two.

**Frequency:** Passive. Applies to every Airborne movement you make.

**Strategic impact:** Enables longer slingshot chains and harder-to-predict troop movements. The extended range makes it harder for opponents to calculate safe distances and creates more aggressive flanking opportunities.

### Rules

#### Reading Your Opponents

Knowing their power changes how you play:

- An **Arms Industry** opponent needs to be pressured before their isotope count grows. Prevent Base formation or destroy Bases early.
- A **Covert Network** opponent threatens to strand your units in hostile terrain. Keep platoons near friendly territory or maintain redundant positioning.
- An **Airborne Corps** opponent has longer reach. Buffer zones that are safe against standard Airborne may not be safe here.

#### No Stacking

Powers do not combine. Each player has exactly one Power Card for the entire game. Powers cannot be traded, discarded, or hidden.

### Design Notes

Asymmetric Powers is designed to layer on top of standard Nukes with zero rule changes to the core systems. The power cards create different strategic pressures from the first turn without requiring players to learn new mechanics. In 2-player games, the removed card creates uncertainty about what your opponent drew until reveal.
