---
title: Sunjang Baduk
slug: sunjang
board: "19×19"
players: "2"
parent: go
order: 12
win: Most territory at game end
special: Korean historical Go. 16 pre-placed stones. Prisoners ignored. No komi.
engine:
  topology:
    type: grid
    rows: 19
    cols: 19
  players: [black, white]
---

## Sunjang Baduk

Korea's historical form of Go (순장바둑), the dominant version played in Korea before Japanese rules were introduced in the early 20th century. Sixteen stones are pre-placed in a fixed diagonal pattern, prisoners are not counted in scoring, and there is no komi. This creates a radically different opening theory with immediate territorial frameworks from move one.

{{svg:go-19x19-board.svg "Sunjang Baduk — 19×19 with pre-placed stones"}}

### Setup

**Board:** Standard 19×19 grid.

**Pre-placed stones:** 8 black stones and 8 white stones are placed before play begins, in fixed positions on the star points (4-4 intersections) and key approach points. The standard placement creates a diagonal symmetry.

**First move:** Black plays first. No komi (the pre-placed stones are considered balanced).

### Rules

All standard Go rules apply with these modifications:

- **Capture scoring:** Captured stones are simply removed from the board. They do NOT count as prisoners and are NOT subtracted from the opponent's score. Only territory (surrounded empty intersections) is scored.
- **No komi:** The pre-placed symmetric position is considered fair. White receives no compensation.
- **Ko:** Standard ko rule.
- **Suicide:** Forbidden.

### Scoring

**Territory only:** Score = empty intersections surrounded by your stones. Captures affect the board position (removing stones opens territory) but dead stones themselves have no point value.

### Strategy

The pre-placed stones create immediate territorial frameworks. Opening theory revolves around how to exploit or undermine the pre-established positions. The lack of prisoner scoring means capturing stones is only valuable for the territory it reveals, not for the stones themselves. This discourages pointless capture races and rewards efficient territory-building.

### Attribution

Traditional Korean variant. Public domain. Historically the dominant form of Go in Korea until approximately 1920. Source: Wikipedia, Korean Baduk Association historical archives.
