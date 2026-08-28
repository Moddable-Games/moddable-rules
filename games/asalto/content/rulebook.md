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
  players: [officers, soldiers]
unsupported:
  _family: "No rules plugin, and the asymmetry is total: Officers jump to capture as in draughts, Soldiers advance without jumping and never capture at all, and the two sides win differently - Soldiers by immobilising the Officers, Officers by reducing the Soldiers below a threshold. Two seats with two different move generators and two different win conditions is a shape the engine has no plugin for."
  royal-garrison: "Three Officers against 50 Soldiers on the larger fortress; identical mechanics at greater scale, so it is blocked on exactly what standard is blocked on."
  standard: "Two Officers against 24 Soldiers on the cross-shaped board."
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
