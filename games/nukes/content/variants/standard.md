---
title: "Nukes: Standard"
slug: standard
players: "2–3"
parent: nukes
order: 1
category: Standard
designer: The House
version: "1.0.0"
special: Standard 3-ring hex map with seeded terrain generation. 2-player default.
engine:
  topology:
    type: hex
    shape: hexagonal
    radius: 3
    orientation: pointy
  players: [player1, player2]
  render:
    cellSize: 24
    cellColor: terrain
    frame: true
    seed: 42
  setup: "0,0:mount,0,1:grass,1,0:grass,1,-1:trees,0,-1:trees,-1,0:sand,-1,1:grass,-1,2:water,0,2:grass,1,1:trees,2,0:sand,2,-1:grass,2,-2:water,1,-2:mount,0,-2:trees,-1,-1:grass,-2,0:mount,-2,1:trees,-2,2:trees,-1,3:grass,0,3:grass,1,2:sand,2,1:grass,3,0:base,3,-1:grass,3,-2:water,3,-3:sand,2,-3:water,1,-3:water,0,-3:grass,-1,-2:grass,-2,-1:water,-3,0:base,-3,1:water,-3,2:water,-3,3:trees,-2,3:trees"
---

## Nukes: Standard

{{svg:standard-board.svg "Nukes: Standard — starting position"}}

The default Nukes map. A 3-ring hexagonal battlefield with seeded random terrain and two opposing bases.

### Setup

Terrain is generated from seed 42. Bases are placed at opposing edges of the outer ring.

### Terrain Types

| Terrain | Effect |
|---|---|
| Grass (Fields) | Open ground, standard movement |
| Trees (Forest) | Cover, restricted line of sight |
| Mountains | Impassable, blocks LOS |
| Water | Impassable |
| Sand (Desert) | Open ground, fatigue penalty |
| Base | Player starting position, must be defended |
