---
playable: true
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
    type: graph
    structure: star
    params:
      armSize: 4
      spacing: 24
  players: [red, green, purple]
  setup: "h1:red-circle,h2:red-circle,h3:red-circle,h4:red-circle,h5:red-circle,h6:red-circle,h7:red-circle,h8:red-circle,h9:red-circle,h10:red-circle,h75:green-circle,h85:green-circle,h86:green-circle,h96:green-circle,h97:green-circle,h98:green-circle,h108:green-circle,h109:green-circle,h110:green-circle,h111:green-circle,h66:purple-circle,h76:purple-circle,h77:purple-circle,h87:purple-circle,h88:purple-circle,h89:purple-circle,h99:purple-circle,h100:purple-circle,h101:purple-circle,h102:purple-circle"
  plugins:
    stern-halma:
      vocabulary: { piece: { symbols: { 0: red-circle, 1: green-circle, 2: purple-circle } } }
      # Each side starts in its arm (the setup above) and races to the arm
      # opposite.
      goals:
        - [h112, h113, h114, h115, h116, h117, h118, h119, h120, h121]
        - [h11, h12, h13, h14, h24, h25, h26, h36, h37, h47]
        - [h20, h21, h22, h23, h33, h34, h35, h45, h46, h56]
---

## Standard 3-Player Stern-Halma

{{svg:standard-3p-board.svg "Standard 3-Player Stern-Halma — starting position"}}

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
