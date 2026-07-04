---
title: Standard 3-Player Stern-Halma
slug: standard-3p
board: "6-pointed star (121 holes)"
players: "3"
parent: stern-halma
order: 2
win: "Move all 10 pieces into the opposite arm"
special: "Alternating arms used. Each player's goal is the arm directly opposite their start."
published: true
engine:
  topology:
    type: hex-star
    arms: 6
    arm_size: 10
    centre_size: 61
    total_positions: 121
  players: [player1, player2, player3]
  arms:
    player1: N
    player2: SE
    player3: SW
---

## Standard 3-Player Stern-Halma

Three players occupy alternating arms of the star, leaving three arms empty.

### Setup

**Pieces:** 10 per player in distinct colours.

**Camp assignment:**

| Player | Starting arm | Goal arm |
|---|---|---|
| Player 1 | N | S |
| Player 2 | SE | NW |
| Player 3 | SW | NE |

Arms NE, S, and NW begin empty.

**First move:** Decide by mutual agreement or lot. Play proceeds clockwise.

### Movement

Identical to 2-player rules: step, hop, or chain-hop in any of the six grid directions. Jumped pieces are never removed.

### Camp rule

Once a piece enters the destination arm, it should remain there by traditional agreement.

### Winning

The first player to place all 10 pieces in the opposite arm wins.

### Attribution

Stern-Halma. Originated in Germany, 1892. Public domain. Rules confirmed from mastersofgames.com, Wikipedia, and BGG.
