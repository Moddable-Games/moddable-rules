---
playable: false
title: Taiwanese 16-Tile Mahjong
slug: taiwanese
board: "none"
players: "4"
parent: mahjong
win: "Complete a valid 16-tile hand and declare"
special: "16-tile hands requiring five melds and one pair. Multiple players can win from a single discard. 144 tiles with flowers and seasons."
engine:
  players: [east, south, west, north]
  pieces:
    set: mahjong-planar
  components:
    deck:
      type: mahjong-136
      flowers: 8
  topology:
    type: tableau
    layout: wall
  deal:
    minPlayers: 4
    maxPlayers: 4
    defaultPlayers: 4
    perPlayer: 16
    community: 0
    remainder: wall
    flowers: 8
  plugins:
    mahjong:
      game: wall
      scoring: taiwanese
      handSize: 16
      multipleWinners: true
      minimum: 1
      tai:
        base: 1
        bonusTile: 1
published: true
---

## Taiwanese 16-Tile Mahjong

The dominant Mahjong form in Taiwan. Played with 144 tiles. Each player holds 16 tiles and forms five melds plus one pair, rather than the four melds plus one pair of Hong Kong Mahjong.

{{svg:taiwanese-board.svg "Taiwanese Mahjong — table layout"}}

### Key Differences from Hong Kong

| Rule | Hong Kong | Taiwanese 16-Tile |
|------|-----------|-------------------|
| Tiles in hand | 13 (14 to win) | 16 (17 to win) |
| Hand structure | 4 melds + 1 pair | 5 melds + 1 pair |
| Multiple winners | No | Yes (multiple players can claim a single discard to win) |
| All 8 bonus tiles | 5+5 faan | Automatic win |
| Dealing | 13 tiles each + dealer draws first | 16 tiles each |

### Dealing

Each player draws 16 tiles at the start. Bonus tiles are set aside immediately and replacements drawn. East begins with 17 tiles effectively (or draws first to reach 17).

### Hand Structure

A winning hand consists of **5 melds + 1 pair = 17 tiles** (16 in hand + the winning tile).

### Multiple Winners

When a tile is discarded, multiple players may declare a win on that tile simultaneously. All winning declarations are honoured; the discarder pays each winner. Turn order does not restrict who can win.

### Bonus Tiles

All 8 bonus tiles in hand is an automatic win. Seat-matching bonus tiles and partial sets score faan per Hong Kong rules.

### Scoring

Scoring is in **tai** (台), and a tai's value is usually agreed before play. What the source below states:

- A winning hand with no special patterns earns at least **1 tai**.
- Each flower or season in the winning hand adds **1 tai**.
- A pung of dragons, or of your own wind, earns tai; All Pungs (碰碰胡, five pungs and a pair) earns significant tai; All Chows (平胡, five chows and a pair) also earns points. The source gives no numbers for these three.
- **Self-draw:** all three other players pay. **Win on a discard:** only the discarder pays.
- **The dealer:** a dealer who wins receives double from each player; a dealer who discards the winning tile pays double.
- **Dealer's streak:** a dealer who keeps winning keeps the deal and earns a bonus that grows with each consecutive win.

### Attribution

Taiwanese 16-Tile Mahjong. Traditional game. Scoring from Jesse Hagy, *How to Play Taiwanese Mahjong: Your Comprehensive Guide to the 16-Tile Hand* (Rack It! Mahjong, 22 August 2025). English Wikipedia has no Taiwanese mahjong article, and the Chinese one (台灣麻將) gives no table of patterns.
