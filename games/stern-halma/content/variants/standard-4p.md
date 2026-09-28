---
playable: true
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
  players: [blue, green, purple, brown]
  setup: "h20:blue-circle,h21:blue-circle,h22:blue-circle,h23:blue-circle,h33:blue-circle,h34:blue-circle,h35:blue-circle,h45:blue-circle,h46:blue-circle,h56:blue-circle,h75:green-circle,h85:green-circle,h86:green-circle,h96:green-circle,h97:green-circle,h98:green-circle,h108:green-circle,h109:green-circle,h110:green-circle,h111:green-circle,h66:purple-circle,h76:purple-circle,h77:purple-circle,h87:purple-circle,h88:purple-circle,h89:purple-circle,h99:purple-circle,h100:purple-circle,h101:purple-circle,h102:purple-circle,h11:brown-circle,h12:brown-circle,h13:brown-circle,h14:brown-circle,h24:brown-circle,h25:brown-circle,h26:brown-circle,h36:brown-circle,h37:brown-circle,h47:brown-circle"
  plugins:
    stern-halma:
      vocabulary: { piece: { symbols: { 0: blue-circle, 1: green-circle, 2: purple-circle, 3: brown-circle } } }
      # Each side starts in its arm (the setup above) and races to the arm
      # opposite.
      goals:
        - [h66, h76, h77, h87, h88, h89, h99, h100, h101, h102]
        - [h11, h12, h13, h14, h24, h25, h26, h36, h37, h47]
        - [h20, h21, h22, h23, h33, h34, h35, h45, h46, h56]
        - [h75, h85, h86, h96, h97, h98, h108, h109, h110, h111]
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
