---
title: Tibetan Go
slug: tibetan
board: "17×17"
players: "2"
parent: go
order: 13
win: Cosmological scoring (territory + captures + bonus)
special: "17×17 board. 12 pre-placed stones. Delayed captures. Unique scoring system."
engine:
  topology:
    type: grid
    rows: 17
    cols: 17
    layout: intersections
  players: [black, white]
  setup: ""
---

## Tibetan Go

Known as Mig Mang (མིག་མང, "many eyes"), this is Tibet's indigenous Go variant with rules significantly different from Chinese Weiqi. Played on a 17×17 board with pre-placed stones, delayed captures, and a cosmological scoring system that awards points for territory, captures, and specific board positions.

{{svg:standard-board.svg "Tibetan Go — played on 17×17 (shown on 19×19)"}}

### Setup

**Board:** 17×17 grid (289 intersections).

**Pre-placed stones:** Before play begins, 6 white stones and 6 black stones are placed in fixed positions on the 4th-line star points (similar to handicap placement). The specific positions vary by tradition.

**First move:** Black plays first.

### Rules

- **Placement:** Standard — one stone per turn on any empty intersection.
- **Liberties:** Same as standard Go — adjacent empty intersections.
- **Delayed capture:** When a group loses its last liberty, it is NOT immediately removed. The opponent must play one more move to confirm the capture. If the surrounded group can connect to safety or gain a liberty before the confirming move, it survives. This gives the defender one extra chance.
- **Ko:** Standard ko rule applies.
- **Suicide:** Forbidden.

### Scoring

Tibetan Go uses a unique additive scoring system:

- **Territory:** Empty intersections surrounded by your stones.
- **Prisoners:** Each captured stone scores points.
- **Position bonus:** Specific board patterns (eyes, living groups in corners) award additional points in some traditions.

The exact scoring weights vary by regional tradition. White receives compensation (equivalent to komi) for moving second.

### Strategy

The delayed capture rule makes attacks less decisive: surrounding a group does not guarantee its death. This encourages peaceful coexistence and territory-building over aggressive fighting. The pre-placed stones shape the opening, creating a more symmetrical start than standard Go.

### Attribution

Traditional Tibetan game (Mig Mang). Public domain. Source: Wikipedia, academic ethnographic sources.
