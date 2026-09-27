---
playable: true
title: Taiwanese 16-Tile Mahjong
slug: taiwanese
board: "none"
players: "4"
parent: mahjong
win: "Complete a 16-tile hand of five sets and a pair, or seven pairs and a triplet, and declare"
special: "16-tile hands of five sets and a pair. 144 tiles with flowers and seasons. Several players may win on one discard. Scored in tai, paid by everyone on a self-drawn win and by the discarder alone otherwise."
disputed:
  - feature: "What the dealer pays and receives"
    readings:
      - source: "Rack It! Mahjong, Jesse Hagy, How to Play Taiwanese Mahjong (22 August 2025)"
        says: "the dealer pays and receives double"
        describes: "A dealer who wins receives double from each player, and a dealer who discards the winning tile pays double."
      - source: "Mahjong Time, Taiwanese Mahjong Rules and Scoring (mahjongtime.com)"
        says: "no doubling; an agreed dealer's bonus"
        describes: "The payment example in section 6 has East discard the winning tile and pay the hand's value with no doubling. Section 4.2, among optional rules: 'Taiwanese rules often pay an extra tai to an East winner', and East pays that bonus when discarding the winning tile."
    engine: "no doubling; an agreed dealer's bonus"
    because: "Mahjong Time gives the whole table of values, and its dealer's bonus is the one with a stated number. Players can switch the bonus on as an option."
  - feature: "Which pungs of honours score"
    readings:
      - source: "Rack It! Mahjong, Jesse Hagy, How to Play Taiwanese Mahjong (22 August 2025)"
        says: "dragons and the own wind"
        describes: "A pung of dragons, or of the player's own wind, earns tai. No number is given."
      - source: "Mahjong Time, Taiwanese Mahjong Scoring (mahjongtime.com)"
        says: "dragons and any wind, 1 tai each"
        describes: "'Pung/Kong of Honors (Dragons or any Winds)', 1 tai."
    engine: "dragons and any wind, 1 tai each"
    because: "Only Mahjong Time gives a value, and the engine plays its table as a whole rather than mixing two."
  - feature: "The least a winning hand earns"
    readings:
      - source: "Rack It! Mahjong, Jesse Hagy, How to Play Taiwanese Mahjong (22 August 2025)"
        says: "at least 1 tai"
        describes: "A winning hand with no special patterns earns at least 1 tai."
      - source: "Mahjong Time, Taiwanese Mahjong Scoring (mahjongtime.com)"
        says: "2 tai for winning"
        describes: "'Winning', 2 tai, in the table of special ways of going out."
    engine: "2 tai for winning"
    because: "It is part of Mahjong Time's table, which the engine plays whole."
  - feature: "The dealer's streak"
    readings:
      - source: "Rack It! Mahjong, Jesse Hagy, How to Play Taiwanese Mahjong (22 August 2025)"
        says: "a bonus growing with each consecutive win"
        describes: "A dealer who keeps winning keeps the deal and earns a bonus that grows with each consecutive win. No numbers are given."
      - source: "Mahjong Time, Taiwanese Mahjong Rules (mahjongtime.com)"
        says: "an agreed 2, 4, 6 tai for continued deals"
        describes: "Section 4.3, among optional rules: 'the bonus for winning the first extra hand is 2 tais. Winning the second successive extra hand earns 4 tais', paid when East wins, or by East when East discards the winning tile."
    engine: "an agreed 2, 4, 6 tai for continued deals"
    because: "Mahjong Time gives the numbers. It is off unless the players choose it, as the source marks it optional."
approximations:
  - feature: "Patterns that imply others"
    source: "Mahjong Time notes that some patterns 'imply' others (Fully concealed hand 'Implies Self-drawn last tile'; Exposed hand 'Implies One-chance hand and Out on a pair') and that one 'Does not imply scores for Self-drawn last tile'."
    engine: "An implied pattern is not counted as well; one that is not implied is. Graded patterns (two to five concealed triplets; the three and four winds; the chow hands; no honours and no flowers) score only their highest, and the chow hand with no honours or flowers implies the no-honours pattern."
  - feature: "Robbing the eighth flower"
    source: "'Seven Flowers and Seasons, robbing the 8th', 20 tai; 'As this is a winning hand, scores for any other patterns are ignored.' The source does not say who pays."
    engine: "It happens as soon as the eighth is drawn, and the player who drew it pays alone, as a discarder would."
  - feature: "Early winning"
    source: "'out when more than 5 but less than 10 discards have been discarded', 5 tai; 'out when 5 or less discards have been discarded', 10 tai."
    engine: "Every discard of the hand counts, including one won on."
  - feature: "Seven pairs and a triplet"
    source: "30 tai: 'Seven pairs (identical pairs are allowed, as well) and any triplet. The triplet cannot be melded before going out.'"
    engine: "It adds to the patterns about its tiles and how it was won (winning, flowers, suits and honours, the way out, early winning, blessings), not to patterns about sets or a concealed hand."
  - feature: "Optional rules"
    source: "Mahjong Time's section 4 lists optional rules: the missed-discard rule, a dealer's bonus, a bonus for continued deals, penalties and insurance penalties. Section 5.4: 'Taiwanese games are often played without applying a Limit', or with one 'e.g. at 40 tais'."
    engine: "The dealer's bonus, the continued-deal bonus and a 40-tai limit are options, all off by default; drawn deals count as continued deals. The missed-discard rule and the penalties are not offered."
  - feature: "Seats and the first dealer"
    source: "Mahjong Time's section 2 draws wind tiles and throws dice for seats and the first East."
    engine: "The first dealer is chosen by lot. Scores start at zero."
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
      minimum: 0
      rounds: 4
      deadWall: 16
      readyOnOriginal: true
      limit: 0
      dealerBonus: 0
      continuedDealBonus: 0
      options:
        rounds:
          label: Wind rounds
          values: [4, 2, 1]
        limit:
          label: Most tai a hand can score (0 for no limit)
          values: [0, 40]
        dealerBonus:
          label: Dealer's bonus, tai
          values: [0, 1]
        continuedDealBonus:
          label: Bonus per continued deal, tai
          values: [0, 2]
published: true
---

## Taiwanese 16-Tile Mahjong

The mahjong played in Taiwan. It uses all 144 tiles, flowers and seasons included. Each player holds 16 tiles and goes out with five sets and a pair, one set more than in Hong Kong mahjong. Scoring is in **tai**, and a hand is worth the sum of its patterns.

These rules and values follow Mahjong Time's *Taiwanese Mahjong Rules* and *Taiwanese Mahjong Scoring*. Where another source differs, both readings are recorded.

{{svg:taiwanese-board.svg "Taiwanese Mahjong — table layout"}}

### The Deal

A game is ordinarily 16 hands: each player deals at least once in each of the four wind rounds. The dealer keeps the deal after winning and after a drawn hand, so a game may run longer.

The last 16 tiles of the wall are the **dead wall**. Replacement tiles for kongs, flowers and seasons come from it, and it is kept at 16 by taking tiles from the end of the live wall. Each player is dealt 16 tiles and the dealer 17. Flowers and seasons are laid face up as they come and replaced at once.

### Play and Claims

The dealer discards first; play passes to the right. A discard may be claimed:

- **to win**, by any player. If several can win on it, **they all win**.
- **for a kong or a pung**, by any player.
- **for a chow**, only by the next player in turn.

A win beats a kong, a kong beats a pung, and a pung beats a chow. If the live wall runs out, the hand is drawn.

A winning hand is five sets (chows, pungs or kongs) and a pair, 17 tiles, or the irregular **seven pairs and a triplet**: seven pairs (identical pairs allowed) and a triplet not melded before going out.

**Ready on the original hand.** A player whose dealt 16 tiles already wait may declare it with their first discard, throwing the tile just drawn (the dealer may throw any tile). The hand is then locked, and winning with it scores 15 tai.

### Scoring

The winner scores the total of these patterns. Where patterns are graded (for example two, three, four or five concealed triplets), only the highest counts. A pattern that implies another includes it.

| Flowers and seasons | Tai |
|---|---|
| Each flower or season | 1 |
| No flowers or seasons | 1 |
| All eight flowers and seasons: a winning hand by itself | 30 |
| Seven flowers and seasons, robbing the eighth when another player draws it: a winning hand by itself | 20 |

| The hand | Tai |
|---|---|
| Pung or kong of honours (dragons or any wind), each | 1 |
| Melded kong, each | 1 |
| Concealed kong, each | 2 |
| 1-2-3, 4-5-6 and 7-8-9 of one suit (10 if all concealed) | 5 |
| Two / three / four / five concealed triplets (concealed kongs count) | 2 / 5 / 15 / 40 |
| Little three dragons (two dragon sets and a dragon pair) | 15 |
| Little three winds (two wind sets and a wind pair) | 5 |
| Big three winds (three wind sets) | 15 |
| Exposed hand: every set melded, out on the pair | 10 |
| Concealed hand, won on a discard | 1 |
| Fully concealed hand, self-drawn | 3 |
| Chow hand (no pungs or kongs) | 3 |
| Chow hand with no honours and no flowers | 10 |
| Pung hand (no chows) | 10 |
| No honours | 1 |
| No flowers and no honours | 3 |
| One suit and honours | 10 |
| One suit only | 40 |

| Going out | Tai |
|---|---|
| Winning | 2 |
| Self-drawn last tile | 1 |
| Out on a one-chance chow (an edge or middle wait) | 1 |
| Out on a pair | 1 |
| Out on the last tile of the wall | 1 |
| Out by robbing a kong (counts as a discard) | 1 |
| Out on the last discard | 1 |
| Early winning, 6 to 9 discards made | 5 |
| Early winning, 5 or fewer discards made | 10 |
| Ready on the original hand | 15 |

| Limit hands, added to the rest | Tai |
|---|---|
| Three Great Scholars (big three dragons) | 30 |
| Little four winds | 30 |
| Big four winds | 40 |
| Seven pairs and a triplet | 30 |
| Heavenly Hand: the dealer wins on the dealt hand | 40 |
| Earthly Hand: another player wins on the dealer's first discard | 40 |

There is normally no limit. Players may agree on one, such as 40 tai.

### Paying

- **Self-drawn:** each of the other three pays the winner the hand's tai.
- **On a discard:** the discarder alone pays, just for themself. Each winner on the same discard is paid in full.
- Losers do not pay each other.

Two optional bonuses may be agreed before play. A **dealer's bonus**: extra tai on any hand the dealer wins, which the dealer pays when discarding the winning tile. A **continued-deal bonus**: 2 tai for the dealer's first continued deal, 4 for the second, 6 for the third, paid the same way.

### Attribution

Rules and scoring from Mahjong Time, *Taiwanese Mahjong Rules* and *Taiwanese Mahjong Scoring* (mahjongtime.com, © Mahjong Time), restated here in our own words. Rack It! Mahjong, Jesse Hagy, *How to Play Taiwanese Mahjong: Your Comprehensive Guide to the 16-Tile Hand* (22 August 2025), is recorded where it differs.
