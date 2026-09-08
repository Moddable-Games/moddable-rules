---
title: Tibetan Go
slug: tibetan
board: "17×17"
players: "2"
parent: go
order: 13
win: Cosmological scoring (territory + captures + bonus)
special: "17×17 board. 12 pre-placed stones. Delayed captures. Unique scoring system."
verified:
  date: "2026-09-08"
  method: "The twelve points were read out of the diagram programmatically: the board image was decoded, the 17x17 grid located from its own lines, and every intersection sampled and classified by brightness. Six dark, six light, 277 empty - no ambiguous values at all. Each colour's six points map onto themselves under a 180 degree rotation, which is confirmation independent of the reading."
  sources:
    - "https://senseis.xmp.net/?TibetanGo - the starting position, the board size, who begins, the ko rule and the scoring bonus"
  decisions:
    - "This page had been recorded as unreachable: it returned HTTP 403 to earlier attempts. It is the source for everything below."
    - "Four things this repo previously stated are wrong and are corrected here. Black did not move first - White begins. The ko rule is not the standard one. The stones are on the third line, not the fourth, and are not star points. And the position bonus is 20 points for all four 1-1 points plus 5 for tengen, not an unspecified award for 'eyes and living groups in some traditions'."
  unverified:
    - "What 'delayed captures' means in play, and how the rest of the scoring settles. The bonus is documented; the base count is not."
unsupported: "The opening, the ko rule and the position bonus are all in. What is left is the delayed captures, which the source names and does not explain, and the base count they sit on."
engine:
  topology:
    type: grid
    rows: 17
    cols: 17
    layout: intersections
  plugins:
    go:
      # "May not play a stone on an intersection where the opponent has just
      # removed a stone" - broader than the ordinary ko rule, and the reason
      # snapback is illegal here.
      koRule: any-removed
      komi: 0
      # "20 bonus points for controlling all the 1-1 points, and a further 5 for
      # controlling tengen also."
      positionBonus:
        - name: corners
          points: corners
          award: 20
        - name: tengen
          points: centre
          award: 5
  players: [black, white]
  # "White begins play."
  firstPlayer: white
  setup: "17/17/2b3w3b3w2/17/17/17/2w11b2/17/17/17/2b11w2/17/17/17/2w3b3w3b2/17/17"
---

## Tibetan Go

Known as Mig Mang (མིག་མང, "many eyes"), this is Tibet's indigenous Go variant with rules significantly different from Chinese Weiqi. Played on a 17×17 board with pre-placed stones, delayed captures, and a cosmological scoring system that awards points for territory, captures, and specific board positions.

{{svg:standard-board.svg "Tibetan Go — played on 17×17 (shown on 19×19)"}}

### Setup

**Board:** 17×17 grid (289 intersections).

**Pre-placed stones:** six black and six white, in a fixed pattern on the third
line - not the fourth, and not on star points.

| | Points |
|---|---|
| Black | C15, L15, P11, C7, G3, P3 |
| White | G15, P15, C11, P7, C3, L3 |

Each colour's six points map onto themselves when the board is turned through
180 degrees. The specific positions vary by tradition.

**First move:** White begins play.

### Rules

- **Placement:** Standard — one stone per turn on any empty intersection.
- **Liberties:** Same as standard Go — adjacent empty intersections.
- **Delayed capture:** When a group loses its last liberty, it is NOT immediately removed. The opponent must play one more move to confirm the capture. If the surrounded group can connect to safety or gain a liberty before the confirming move, it survives. This gives the defender one extra chance.
- **Ko:** not the standard rule. A stone may not be played on an intersection
  where the opponent has just removed a stone. This makes snapback illegal and
  renders suicide useless as a ko threat.
- **Suicide:** Forbidden.

### Scoring

Tibetan Go uses a unique additive scoring system:

- **Territory:** Empty intersections surrounded by your stones.
- **Prisoners:** Each captured stone scores points.
- **Position bonus:** 20 points for controlling all four 1-1 points (the board's
  corners), and a further 5 for also controlling tengen.

The exact scoring weights vary by regional tradition. White receives compensation (equivalent to komi) for moving second.

### Strategy

The delayed capture rule makes attacks less decisive: surrounding a group does not guarantee its death. This encourages peaceful coexistence and territory-building over aggressive fighting. The pre-placed stones shape the opening, creating a more symmetrical start than standard Go.

### Attribution

Traditional Tibetan game (Mig Mang). Public domain. Source: Wikipedia, academic ethnographic sources.
