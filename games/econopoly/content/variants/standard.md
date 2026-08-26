---
original: true
title: Econopoly (Standard)
slug: standard
board: "perimeter track"
players: "2-6"
parent: econopoly
unsupported: "Uses the 1932 Prosperity board. Its rules are published and complete, but need two rulesets, bidding at the Real Estate Offices, a wages table keyed to the dice throw, and 34 title-deed cards. The cards are deeds rather than a draw deck, so this is buildable once someone transcribes them."
engine:
  topology:
    type: track
    positions: 40
  surface:
    base: parchment
    colors:
      board: "#f8f4ec"
      border: "#2a4a7a"
      inner-bg: "#f8f4ec"
      space-stroke: "#2a4a7a"
      corner-stroke: "#2a4a7a"
      text: "#1a2a40"
      title-text: "#6b2020"
      lot: "#ffffff"
      taxes: "#ffffff"
      franchise: "#ffffff"
      railroad: "#ffffff"
      luxury: "#ffffff"
      broker: "#ffffff"
      jail: "#ffffff"
      corner: "#ffffff"
      go-to-jail: "#ffffff"
      lot-stripe: "#3a8a3a"
      taxes-stripe: "#2a5a9a"
      franchise-stripe: "#d4a030"
      railroad-stripe: "#3a8a3a"
      broker-stripe: "#c8b020"
      luxury-stripe: "#d4708a"
      jail-stripe: "#808080"
      go-to-jail-stripe: "#808080"
      corner-arc: "#8c2020"
  render:
    trackStyle: perimeter
  content:
    source: econopoly-boards.json
    board: 1932-prosperity
  players: [red, blue, green, yellow]
---

## Econopoly (Standard)

{{svg:standard-board.svg "Econopoly (Standard) — starting position"}}

### Attribution

Moddable Games original. Econopoly is an original Moddable Games modification for use with a Monopoly set; it defines only its own changes and reproduces no Monopoly rules text. Monopoly is a trademark of Hasbro, Inc., which is not affiliated with Moddable Games. No external provenance is claimed for the modification itself.
