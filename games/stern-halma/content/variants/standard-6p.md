---
playable: true
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
    type: graph
    structure: star
    params:
      armSize: 4
      spacing: 24
  players: [red, blue, green, black, purple, brown]
  setup: "h1:red-circle,h2:red-circle,h3:red-circle,h4:red-circle,h5:red-circle,h6:red-circle,h7:red-circle,h8:red-circle,h9:red-circle,h10:red-circle,h20:blue-circle,h21:blue-circle,h22:blue-circle,h23:blue-circle,h33:blue-circle,h34:blue-circle,h35:blue-circle,h45:blue-circle,h46:blue-circle,h56:blue-circle,h75:green-circle,h85:green-circle,h86:green-circle,h96:green-circle,h97:green-circle,h98:green-circle,h108:green-circle,h109:green-circle,h110:green-circle,h111:green-circle,h112:black-circle,h113:black-circle,h114:black-circle,h115:black-circle,h116:black-circle,h117:black-circle,h118:black-circle,h119:black-circle,h120:black-circle,h121:black-circle,h66:purple-circle,h76:purple-circle,h77:purple-circle,h87:purple-circle,h88:purple-circle,h89:purple-circle,h99:purple-circle,h100:purple-circle,h101:purple-circle,h102:purple-circle,h11:brown-circle,h12:brown-circle,h13:brown-circle,h14:brown-circle,h24:brown-circle,h25:brown-circle,h26:brown-circle,h36:brown-circle,h37:brown-circle,h47:brown-circle"
  plugins:
    stern-halma:
      vocabulary: { piece: { symbols: { 0: red-circle, 1: blue-circle, 2: green-circle, 3: black-circle, 4: purple-circle, 5: brown-circle } } }
      # Each side starts in its arm (the setup above) and races to the arm
      # opposite.
      goals:
        - [h112, h113, h114, h115, h116, h117, h118, h119, h120, h121]
        - [h66, h76, h77, h87, h88, h89, h99, h100, h101, h102]
        - [h11, h12, h13, h14, h24, h25, h26, h36, h37, h47]
        - [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10]
        - [h20, h21, h22, h23, h33, h34, h35, h45, h46, h56]
        - [h75, h85, h86, h96, h97, h98, h108, h109, h110, h111]
---

## Standard 6-Player Stern-Halma

{{svg:standard-6p-board.svg "Standard 6-Player Stern-Halma — starting position"}}

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
