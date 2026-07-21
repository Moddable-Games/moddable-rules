---
title: Zung Jung
slug: zung-jung
board: "none"
players: "4"
parent: mahjong
win: "Complete a valid hand with at least one scoring pattern"
special: "Alan Kwan's competition system. 44 named patterns, additive scoring, 320-point limit, no basic points. Used by World Series of Mahjong."
engine:
  players: [east, south, west, north]
  components:
    tiles:
      suits: [characters, bamboo, circles]
      honours: [winds, dragons]
      total: 136
  topology:
    type: tableau
    layout: wall
  deal:
    minPlayers: 4
    maxPlayers: 4
    defaultPlayers: 4
    perPlayer: 13
    community: 0
    remainder: wall
    tileSet: mahjong-regular
published: true
---

## Zung Jung

Designed by Alan Kwan, a statistician. Used as the official ruleset for the World Series of Mahjong. Zung Jung replaces multiplicative faan scoring with a flat additive point system across 44 named patterns, eliminating most ambiguity in hand valuation.

### Key Differences from Hong Kong

| Rule | Hong Kong | Zung Jung |
|------|-----------|----------|
| Tiles | 144 (with flowers/seasons) | 136 (no bonus tiles) |
| Scoring | Multiplicative faan | Additive points (44 patterns, fixed values) |
| Basic points | None / implicit | None |
| Income formula | Varies | Total income = 3× pattern points |
| Point limit | Limit hands | 320 points |
| Minimum to win | 3 faan | Optional 5-point minimum (competition) |

### Scoring System

Each winning hand is valued by identifying which of the 44 named patterns apply. Each pattern has a fixed point value. Values are additive, not multiplicative.

The winner's income from each opponent is the total pattern value. Total income for the winner is 3× pattern points (one payment from each of three opponents).

The 320-point limit applies per opponent; a winning hand cannot earn more than 320 points from any single opponent.

Common patterns (illustrative, not exhaustive):

| Pattern | Points | Description |
|---------|--------|-------------|
| All Simples | 2 | No terminals or honours |
| All Sequences | 5 | All four melds are sequences |
| All Pongs | 6 | All four melds are Pongs or Kongs |
| Half Flush | 6 | One suit plus honours |
| Full Flush | 24 | One suit only |
| Seven Pairs | 4 | Seven different pairs |
| All Terminals | 64 | Terminals and honours only, all Pongs |

Full pattern table: source from zj-mahjong.info (official, version 3.3, licensed CC BY-NC-SA 3.0 HK). The content builder should extract all 44 patterns with their point values.

### Same-Round Immunity

Zung Jung includes a same-round immunity rule preventing unfair double-payment in specific edge cases. Consult the official rulebook at zj-mahjong.info for the precise definition.

### Attribution

Zung Jung Mahjong, designed by Alan Kwan. Official rules at zj-mahjong.info, version 3.3. Licensed Creative Commons BY-NC-SA 3.0 Hong Kong. Used with attribution for non-commercial game reference.
