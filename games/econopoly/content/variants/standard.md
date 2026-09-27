---
original: true
title: Econopoly (Standard)
slug: standard
board: "perimeter track"
players: "2-6"
parent: econopoly
unsupported: "Uses the 1932 Prosperity board, so it shares landlords-game/prosperity's blockers. The 1932 rules (landlordsgame.info/games/lgp-1932/lgp-1932_rules.pdf) are complete as rules but give no lot prices or rents: those are printed on the board and the 34 hand cards (20 green title deeds, 8 idle-land deeds, 3 local and 3 interstate franchises), so they have to be read from images of the board and cards, and only two of the twenty lots are priced in the data so far. The engine also lacks what the rules need beyond Monopoly-style play: the two rulesets (Landlord's Game and Prosperity) on one board, bidding at the Real Estate Offices, a wages table keyed to the dice, and the Prosperity fund buying out utilities (moddable-engine#186)."
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
