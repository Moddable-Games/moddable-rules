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
  generator: nukes
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
