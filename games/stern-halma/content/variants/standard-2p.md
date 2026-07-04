---
title: Standard 2-Player Stern-Halma
slug: standard-2p
board: "6-pointed star (121 holes)"
players: "2"
parent: stern-halma
order: 1
win: "Move all 10 pieces into the opposite arm"
special: "Step or chain-hop in six directions. No capture. Jumped pieces remain."
published: true
engine:
  topology:
    type: hex-star
    arms: 6
    arm_size: 10
    centre_size: 61
    total_positions: 121
  players: [player1, player2]
  arms:
    player1: N
    player2: S
---

## Standard 2-Player Stern-Halma

The classic two-player configuration. Each player occupies one triangular arm and races to fill the opposite arm.

### Setup

**Board:** Six-pointed star, 121 holes total. Six triangular arms (10 holes each) surrounding a central hexagonal area (61 holes).

**Pieces:** 10 per player in distinct colours.

**Camp assignment:**

| Player | Starting arm | Goal arm |
|---|---|---|
| Player 1 | N | S |
| Player 2 | S | N |

Each arm's 10 holes are arranged in rows radiating from the tip: 1, 2, 3, 4 (innermost row nearest the centre).

**First move:** Decide by mutual agreement or lot. Play proceeds clockwise.

### Movement

On each turn a player moves one piece. A piece may:

- **Step:** Move to any adjacent hole in any of the six grid directions, provided it is empty.
- **Hop:** Jump over any adjacent piece (own or opponent) to the empty hole immediately beyond in the same line.
- **Chain hop:** After a hop, the same piece may continue hopping in any direction. Direction may change between hops. A player may stop at any point.

Hops are never forced. Jumped pieces are never removed.

### Camp rule

Once a piece enters the destination arm, it should remain there. By traditional agreement, a piece in the goal arm may not be voluntarily moved out.

### Winning

The first player to place all 10 pieces in the opposite arm wins.

### Attribution

Stern-Halma. Originated in Germany, 1892. Public domain. Rules confirmed from mastersofgames.com, Wikipedia, and BGG.
