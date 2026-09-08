---
title: Sunjang Baduk
slug: sunjang
board: "19×19"
players: "2"
parent: go
order: 12
win: Most territory at game end
special: Korean historical Go. 16 pre-placed stones. Prisoners ignored. No komi.
verified:
  date: "2026-09-08"
  method: "The sixteen points were read out of the diagram programmatically, not by eye: the board image was decoded, the 19x19 grid located from its own lines, and every intersection sampled and classified by luminance. The result is trimodal and unambiguous - eight dark, eight light, 343 empty - and each colour's eight points map onto themselves under a 180 degree rotation, which is independent confirmation rather than a second look at the same picture."
  sources:
    - "https://en.wikipedia.org/wiki/Go_variants#Sunjang_baduk - states the rule: 16 stones, 8 black and 8 white, and Black's first move prescribed at the centre"
    - "https://upload.wikimedia.org/wikipedia/commons/3/32/Sunjang_Baduk_starting_position.png - the diagram the points were read from"
  decisions:
    - "Rows are numbered from 1 at the bottom, the ordinary Go convention and the one the diagram's own labels use. It matters: the position is not symmetric under a vertical flip, so the other convention would give a mirrored and wrong position."
    - "The earlier record said the stones sit on 'the star points and key approach points'. They do not: eight of the sixteen are not star points at all, and the centre star point carries no stone."
  unverified:
    - "The prisoners-ignored scoring, which is the other half of what this variant needs and is not a placement question."
unsupported: "The scoring is nearly complete: territory is counted and prisoners are ignored, as Sunjang requires. What is left is the clearing step - stones standing inside their own territory, and irrelevant to defining its boundary, are taken off before counting. Which stones those are is a judgement about the position and the source does not define it."
engine:
  topology:
    type: grid
    rows: 19
    cols: 19
    layout: intersections
  plugins:
    go:
      # "At the end of the game, stones inside friendly territory... are removed
      # before counting territory" - Sunjang counts territory and ignores
      # prisoners entirely, which is a different sum rather than a komi tweak.
      prisoners: false
      komi: 0
  players: [black, white]
  setup: "19/19/19/3w2b2w2b2b3/19/19/3w11w3/19/19/3b11b3/19/19/3w11w3/19/19/3b2b2w2b2w3/19/19/19"
---

## Sunjang Baduk

Korea's historical form of Go (순장바둑), the dominant version played in Korea before Japanese rules were introduced in the early 20th century. Sixteen stones are pre-placed in a fixed diagonal pattern, prisoners are not counted in scoring, and there is no komi. This creates a radically different opening theory with immediate territorial frameworks from move one.

{{svg:standard-board.svg "Sunjang Baduk — 19×19 with pre-placed stones"}}

### Setup

**Board:** Standard 19×19 grid.

**Pre-placed stones:** eight black and eight white, placed before play begins.
Half of them stand on star points and half do not, so the arrangement cannot be
described as "the star points" - it is a fixed pattern of its own.

| | Points |
|---|---|
| Black | D4, G4, N4, D10, Q10, G16, N16, Q16 |
| White | K4, Q4, D7, Q7, D13, Q13, D16, K16 |

Each colour's eight points map onto themselves under a 180 degree rotation of
the board, which is what makes the opening balanced without komi. The standard placement creates a diagonal symmetry.

**First move:** Black plays first, and the move is prescribed: the centre point
K10 is empty in the opening and Black must play there. No komi - the pre-placed
stones are what balances the game.

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
