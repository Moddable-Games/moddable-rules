---
title: Standard 6-Player Stern-Halma
slug: standard-6p
board: "6-pointed star (121 holes)"
players: "6"
parent: stern-halma
order: 4
win: "Move all 10 pieces into the opposite arm"
special: "All six arms occupied. Maximum interaction; every path crosses contested territory."
published: true
engine:
  topology:
    type: hex-star
    arms: 6
    arm_size: 10
    centre_size: 61
    total_positions: 121
  players: [player1, player2, player3, player4, player5, player6]
  arms:
    player1: N
    player2: NE
    player3: SE
    player4: S
    player5: SW
    player6: NW
---

## Standard 6-Player Stern-Halma

The full six-player game uses every arm on the board.

### Setup

**Pieces:** 10 per player in distinct colours (60 pieces total on the board).

**Camp assignment:**

| Player | Starting arm | Goal arm |
|---|---|---|
| Player 1 | N | S |
| Player 2 | NE | SW |
| Player 3 | SE | NW |
| Player 4 | S | N |
| Player 5 | SW | NE |
| Player 6 | NW | SE |

All 60 arm positions are occupied at the start. Only the 61 central hexagonal holes are initially empty.

**First move:** Decide by mutual agreement or lot. Play proceeds clockwise.

### Movement

Identical to 2-player rules: step, hop, or chain-hop in any of the six grid directions. Jumped pieces are never removed.

### Camp rule

Once a piece enters the destination arm, it should remain there by traditional agreement.

### Winning

The first player to place all 10 pieces in the opposite arm wins. The game may continue to determine second, third place, etc.

### Attribution

Stern-Halma. Originated in Germany, 1892. Public domain. Rules confirmed from mastersofgames.com, Wikipedia, and BGG.
