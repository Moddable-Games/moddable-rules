---
playable: true
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
    type: graph
    structure: star
    params:
      armSize: 4
      spacing: 24
  players: [red, black]
  setup: "h1:red-circle,h2:red-circle,h3:red-circle,h4:red-circle,h5:red-circle,h6:red-circle,h7:red-circle,h8:red-circle,h9:red-circle,h10:red-circle,h112:black-circle,h113:black-circle,h114:black-circle,h115:black-circle,h116:black-circle,h117:black-circle,h118:black-circle,h119:black-circle,h120:black-circle,h121:black-circle"
  plugins:
    stern-halma:
      vocabulary: { piece: { symbols: { 0: red-circle, 1: black-circle } } }
      # Each side starts in its arm (the setup above) and races to the arm
      # opposite.
      goals:
        - [h112, h113, h114, h115, h116, h117, h118, h119, h120, h121]
        - [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10]
---

## Standard 2-Player Stern-Halma

{{svg:standard-2p-board.svg "Standard 2-Player Stern-Halma — starting position"}}

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
