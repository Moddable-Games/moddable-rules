## Nukes: Fallout

{{svg:fallout-board.svg "Nukes: Fallout — starting position"}}

A reskin that adds persistent, spreading Biohazard contamination to the board. Every nuclear strike or Meltdown now has long-term territorial consequences as the map degrades around the blast sites.

### Overview

In standard Nukes, Biohazard tiles are created by nuclear strikes but remain static. In Fallout, Biohazard tiles spread outward each round, converting adjacent terrain into contaminated wasteland. City tiles are immune to spread (though they can still be directly destroyed). The board shrinks over time, forcing confrontations in an ever-smaller safe zone.

### Setup Changes

No setup changes. Use standard Nukes setup for all players, board draft, and token distribution.

### Rules

#### Biohazard Spread Phase

At the end of each round (after all players have taken their turns), every existing Biohazard tile converts **one** adjacent non-city tile into Biohazard:

1. The first player (determined by turn order) chooses the spread direction for each existing Biohazard tile.
2. Newly converted tiles do **not** spread until the following round.
3. If all adjacent tiles are already Biohazard or cities, that tile does not spread.

#### City Immunity

City tiles cannot be converted by Biohazard spread. They can still be:
- Destroyed by a direct nuclear strike (target hex).
- Destroyed by a Meltdown.
- Adjacent to Biohazard without being affected.

This creates safe corridors around cities in the late game.

#### Movement Through Biohazard

In standard Nukes, Biohazard tiles are rare (only created by nuclear strikes) and treated as empty for movement purposes: no unit can stop there, and jump-based movement cannot use them as stepping stones. In Fallout, Biohazard tiles become common enough to dominate the board. The following rules **override** standard Biohazard behaviour to keep the game playable:

- **Infantry** cannot remain in Biohazard alone (destroyed at Phase 3). Can chain through Biohazard as part of a same-biome move if starting from a Biohazard region.
- **Artillery** can jump over Biohazard regions that contain units (standard jump rules apply). Cannot end its turn in Biohazard (destroyed at Phase 3).
- **Airborne** can pass over Biohazard as an intermediate step and can land in Biohazard, but is destroyed at Phase 3 if still there at end of turn.
- **Bases** cannot form in Biohazard. If a region containing a Base becomes Biohazard (via spread), all units in that region are destroyed immediately.
- **Nukes** follow standard jump rules: Biohazard regions without units still cannot be used as stepping stones.

#### Strategic Implications

**Early nukes poison the centre.** Launching nuclear strikes on contested central territory in mid-game may cut off your own movement corridors by late game. Every strike is a territorial sacrifice as well as an attack.

**Territory becomes precious.** As Biohazard zones spread, viable regions for Infantry chaining, Artillery jumping, and Airborne landing shrink. Late game forces confrontations neither player planned.

**Win before the map does.** City destruction remains the win condition. But a long game of attrition now ends with both armies squeezed into an ever-smaller safe zone where conflict is unavoidable.

### Design Notes

Fallout adds a clock to the game without changing any core mechanics. The hostage economy, fluid platoons, and nuclear strikes all work identically. The spread mechanic simply punishes nuclear usage over time, creating a tension between the immediate tactical value of a strike and its long-term territorial cost. Games tend to be shorter and more aggressive than standard Nukes.