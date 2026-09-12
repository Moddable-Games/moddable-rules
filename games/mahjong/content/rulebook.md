---
title: "Mahjong"
version: "0.1.1"
slug: "mahjong"
players: "4"
duration: "30–120 min"
age: "10+"
tagline: "A tile-matching game of skill, strategy, and fortune"
type: "component"
status: "live"
updated: "2026-07-21"
published: true
hub_type: component
how_to_play: "The 136-tile Mahjong set supports 5 regional variants: Hong Kong, Riichi, Taiwanese, Zung Jung, and American Classic. All involve drawing and discarding tiles to complete winning hands of melds and a pair."
mechanics: [tile-placement, set-collection, hand-management, pattern, betting]
complexity: complex
related: [standard-52, flower-48, double-six-dominoes, bavarian-32]
theme:
  surface: light
  tint: warm
  texture: none
  cover: cosmic
  typography: modern
  accent: red
  section-divider: "◇"
engine:
  topology:
    type: none
  surface: felt-green
  pieces:
    set: mahjong-regular
  components:
    deck:
      type: mahjong-136
    layout:
      type: wall
  players: [east, south, west, north]
unsupported:
  _family: "No rules plugin. The 136-tile set and the table layout are declared, and nothing builds a wall, draws, melds or scores. All four games have four seats with concealed hands and need private per-seat state (moddable-engine#155)."
  american-classic: "No plugin, and blocked on content as well as code: hands are set by a published card that changes annually and must be matched exactly. Also needs jokers and the Charleston passing phase."
  hong-kong: "No plugin. Needs a wall with dead-wall replacement for flowers, claiming a discard out of turn for pung, kong or chow, and faan scoring with a payment table."
  riichi: "No plugin. More scoring machinery than anything else in the corpus: the riichi declaration and its stick, dora indicators including the ura-dora nobody sees until the end, furiten locking a player out of a win, and han and fu counted together."
  taiwanese: "No plugin. Sixteen-tile hands rather than thirteen, with its own tai scoring and flower replacement."
  zung-jung: "No plugin. A scoring system built to be exhaustive and non-overlapping across about seventy patterns. That system is the whole of what distinguishes the game, and none of it is modelled."
---

<div class="section variant-hub">

## Mahjong

A tile game originating in China and played worldwide in many regional forms. Players draw and discard tiles from a shared wall to complete a winning hand of melds and a pair. The 136-tile core, three numerical suits, wind tiles, and dragon tiles, is common to most variants.

<div class="variant-grid">

- [Hong Kong Mahjong](games/hong-kong/) — The most widely played Cantonese ruleset. 144 tiles including 8 flower and season bonus tiles. Faan-based scoring with a minimum hand value to win.
- [Riichi (Japanese)](games/riichi/) — 136 tiles, no bonus tiles. Yaku requirement, Riichi declaration, Furiten rule, han and fu scoring with named limits.
- [Taiwanese 16-Tile](games/taiwanese/) — 144 tiles, 16-tile hands requiring five melds and one pair. Multiple winners from a single discard are possible.
- [Zung Jung](games/zung-jung/) — 136 tiles. Alan Kwan's competition system. 44 named patterns, additive scoring, 320-point limit.
- [American Mahjong (Classic)](games/american-classic/) — The Babcock-era form (1920–1935). 152 tiles with 8 jokers and the Charleston passing ritual. Fixed classical winning hand patterns; pre-dates the annual NMJL card system.

</div>

<div class="section variant-note">

### American Mahjong (Modern / NMJL)

Modern American Mahjong uses an annually-updated scorecard published by the National Mah Jongg League (NMJL), copyrighted each year. The specific winning hands on the current card cannot be reproduced without a licence. Moddable instead implements the Classic (Babcock-era) variant, which pre-dates the card system. See [American Mahjong (Classic)](games/american-classic/).

</div>

</div>
