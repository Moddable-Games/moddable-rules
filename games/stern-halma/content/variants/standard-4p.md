---
title: Standard 4-Player Stern-Halma
slug: standard-4p
board: "6-pointed star (121 holes)"
players: "4"
parent: stern-halma
order: 3
win: "Move all 10 pieces into the opposite arm"
special: "Four players use diagonal arms (NE, SE, SW, NW), leaving N and S empty."
published: true
engine:
  topology:
    type: graph
    structure: star
    params:
      armSize: 4
      spacing: 24
  players: [red, blue, green, black, purple, brown]
  setup:
    arms: [N, S, NE, SW]
---

## Standard 4-Player Stern-Halma

{{svg:standard-4p-board.svg "Standard 4-Player Stern-Halma — starting position"}}

Four players occupy the diagonal arms, leaving the N and S arms empty.

### Setup

**Pieces:** 10 per player in distinct colours.

**Camp assignment:**

| Player | Starting arm | Goal arm |
|---|---|---|
| Player 1 | NE | SW |
| Player 2 | SE | NW |
| Player 3 | SW | NE |
| Player 4 | NW | SE |

Arms N and S begin empty.

**First move:** Decide by mutual agreement or lot. Play proceeds clockwise.

### Movement

Identical to 2-player rules: step, hop, or chain-hop in any of the six grid directions. Jumped pieces are never removed.

### Camp rule

Once a piece enters the destination arm, it should remain there by traditional agreement.

### Winning

The first player to place all 10 pieces in the opposite arm wins.

### Attribution

Stern-Halma. Originated in Germany, 1892. Public domain. Rules confirmed from mastersofgames.com, Wikipedia, and BGG.
