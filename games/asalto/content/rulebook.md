---
title: "Asalto"
version: "0.1.0"
slug: "asalto"
players: "2"
duration: "15–30 min"
age: "8+"
tagline: "Officers defend a fortress against a siege of soldiers"
type: "hub"
status: "live"
updated: "2026-07-06"
published: true
variants: true
how_to_play: "Asymmetric Victorian-era game where a small defending force (the Officers) holds off a larger attacking force (the Soldiers) on a fortress-and-plain board."
mechanics: [abstract-strategy, asymmetric, movement, capture, grid]
complexity: moderate
related: [tafl, fanorona, morris, agon]
theme:
  tint: warm
  texture: none
  cover: minimal
  typography: classical
  accent: orange
engine:
  topology:
    type: graph
    structure: grid-cross
  surface:
    colors:
      background: "#f5e6c8"
      line: "#2a2a2a"
      point: "#2a2a2a"
      fortress: "rgba(40,80,180,0.15)"
      fortress-border: "#3355aa"
  render:
    cellSize: 24
  pieces:
    set: playstrategy-go-classic
    # Officers light (w), Soldiers dark (b).
    vocabulary:
      w: wS
      b: bS
  players: [officers, soldiers]
  # Played by the hop plugin, with each side's pieces declared separately:
  # Officers step along any line and jump Soldiers to take them, a chain of
  # jumps stopping where it likes; Soldiers step forward or sideways and never
  # jump. The Soldiers win by filling the fortress or leaving the Officers no
  # move; the Officers by leaving too few Soldiers to fill it.
  plugin: hop
  plugins:
    asalto:
      vocabulary: { piece: { symbols: { 0: w, 1: b } } }
      seats:
        - { steps: all, hops: capture }
        - { steps: { rows: [-1, 0] }, hops: none }
      noMovesLoses: true
disputed:
  - feature: "Which way a Soldier may step"
    readings:
      - source: "This rulebook, Asalto (Standard), Movement"
        says: "Forward or sideways"
        describes: "Move 1 step along a line forward or sideways only (toward the fortress, or horizontally)."
      - source: "https://en.wikipedia.org/wiki/Asalto, checked 2026-09-28"
        says: "Only towards the fortress"
        describes: "Rebel pieces may move one space along any line on the board, but only in the direction of the fortress."
    engine: "Forward or sideways"
    because: "The rulebook states it outright and Wikipedia's wording can be read as excluding only retreat."
approximations:
  - feature: "When the Officers have won"
    source: "This rulebook, Win Conditions"
    says: "Officers win when they have captured enough Soldiers that the remaining Soldiers cannot simultaneously surround and immobilize both Officers. In practice, this is when fewer than ~16 Soldiers remain (the exact number depends on board position)."
    engine: "The Officers win when fewer Soldiers remain than there are fortress points, so the Soldiers can no longer fill it."
    because: "The rulebook gives no exact number. Wikipedia says the Officers win by capturing enough rebels to make the rebels' goals impossible; filling the fortress is the goal that has an exact count."
  - feature: "Huffing"
    source: "https://en.wikipedia.org/wiki/Asalto"
    says: "Rebels ... cannot capture directly but may do so through huffing."
    engine: "Not played: an Officer who passes up a capture is not removed."
    because: "Neither this rulebook nor Wikipedia says how huffing works."
---

# Asalto

Asalto (also known as Officers and Sepoys, or The Fortress Game) is a Victorian-era asymmetric game in which a small defending force (the Officers) must hold off a much larger attacking force (the Soldiers). The game was widely sold in Britain and continental Europe from the 1870s onward.

The board consists of a fortress in the upper portion (a 3×3 grid with specific connection points) joined to a plain in the lower portion (a 5×5 grid). Officers start inside the fortress; Soldiers start on the plain.

## Variants in this Hub

| Variant | Officers | Soldiers | Description |
|---|---|---|---|
| [Standard Asalto](variants/standard/) | 2 | 24 | Classic Victorian rules; Officers must eliminate enough Soldiers to prevent being surrounded; Soldiers win by immobilizing Officers. |
| [Royal Garrison](variants/royal-garrison/) | 3 | 50 | Larger board; three Officers defend against a greater force. |

### Attribution

Asalto. A member of the fox-and-geese hunt-game family, documented in Murray, *A History of Board Games Other Than Chess* (1952), and at en.wikipedia.org and tradgames.org.uk. Public domain.
