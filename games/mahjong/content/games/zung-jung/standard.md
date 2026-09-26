---
playable: true
title: Zung Jung
slug: zung-jung
board: "none"
players: "4"
parent: mahjong
win: "Complete a regular or irregular hand and declare"
special: "Alan Kwan's pattern-based scoring system, version 3.3. 44 patterns, added together, at most one from each series; a 320-point limit; the winner always collects three times the hand."
approximations:
  - feature: "How long a session is"
    source: "Zung Jung's miscellaneous rules: 'The deal is passed after every hand. East never repeats the deal. (This rule helps control the length of a session.)' No number of hands is given."
    engine: "One wind round, four hands, unless the players choose two or four. The first dealer is chosen by lot, and scores start at zero."
engine:
  players: [east, south, west, north]
  pieces:
    set: mahjong-regular
  components:
    deck:
      type: mahjong-136
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
  plugins:
    mahjong:
      game: wall
      scoring: zung-jung
      minimum: 1
      rounds: 1
      deadWall: 14
      dealerKeeps: never
      options:
        rounds:
          label: Wind rounds
          values: [1, 2, 4]
        minimum:
          label: Least a winning hand scores
          values: [1, 5]
published: true
---

## Zung Jung

Zung Jung ("the Middle Way") is a mahjong scoring system designed by the statistician Alan Kwan. It keeps enough patterns for strategic play while staying simple to learn. There are no basic points and no doubling: a hand scores the patterns it contains, added together.

{{svg:zung-jung-board.svg "Zung Jung Mahjong — table layout"}}

### The Table

Zung Jung is played with the 136-tile set: three suits numbered 1 to 9, four winds and three dragons, with no flowers. Each player is dealt 13 tiles. The last 14 tiles of the wall are the dead wall and are never drawn. The tile before them is the last one drawn (the "seabed"), and if nobody wins on the discard that follows, the hand is a draw.

The deal passes to the next player after every hand, won or drawn. East never deals twice in a row.

### Claiming Discards

- **Win:** any player. If more than one player can win, the player next after the discarder takes it, then the one opposite, then the one before (**interception**).
- **Pung or kong:** any player; this takes precedence over a chow.
- **Chow:** only the player next after the discarder.

A kong draws a supplement tile. A player adding a fourth tile to a claimed pung can be robbed by anyone who wins on that tile; a concealed kong cannot be robbed. There is no furiten or "sacred discard" rule: a player may win whenever they hold a complete hand.

### Winning Hands

A **regular hand** is four sets (sequences, triplets or kongs) and a pair. The **irregular hands** are Seven Pairs (four identical tiles not declared as a kong may count as two pairs) and Thirteen Terminals. A hand that fits neither cannot win, whatever patterns it holds.

A hand with no pattern at all, a **chicken hand**, scores 1 point. Standard Zung Jung has no minimum. In the official variant, a hand must score at least 5; players may choose it.

### Adding Up a Hand

The patterns are grouped into numbered series. A hand scores the sum of its patterns, but only one pattern from each series, the highest. The exception is Value Honor, which scores 10 for each set.

When the concealed tiles can be arranged more than one way, the winner picks the arrangement that scores best. Patterns from two different arrangements cannot both count. A triplet completed by a winning discard counts as exposed. Seven Pairs cannot count patterns that need triplets, kongs or sequences.

**The limit is 320.** A hand whose patterns add up to 320 or more scores 320. A hand holding a single pattern listed at 320 or more scores that pattern alone, the highest one it holds.

### The Patterns: Simple Hands, Suits, Honours and Sets

| # | Pattern | Points | Condition |
|---|---------|--------|-----------|
| 1.1 | All Sequences | 5 | Four sequences |
| 1.2 | Concealed Hand | 5 | A regular hand with nothing claimed before the win (a concealed kong is fine) |
| 1.3 | No Terminals | 5 | Only tiles 2 to 8 |
| 2.1.1 | Mixed One-Suit | 40 | One suit and honours |
| 2.1.2 | Pure One-Suit | 80 | One suit only |
| 2.2 | Nine Gates | 480 | 1112345678999 of one suit in hand, winning on any tile of that suit |
| 3.1 | Value Honor | 10 per set | A triplet or kong of dragons or of the seat wind (the prevailing wind does not count) |
| 3.2.1 | Small Three Dragons | 40 | Two dragon sets and a dragon pair |
| 3.2.2 | Big Three Dragons | 130 | Three dragon sets |
| 3.3.1 | Small Three Winds | 30 | Two wind sets and a wind pair |
| 3.3.2 | Big Three Winds | 120 | Three wind sets |
| 3.3.3 | Small Four Winds | 320 | Three wind sets and a wind pair |
| 3.3.4 | Big Four Winds | 400 | Four wind sets |
| 3.4 | All Honors | 320 | Only honour tiles |
| 4.1 | All Triplets | 30 | Four triplets or kongs |
| 4.2.1 | Two Concealed Triplets | 5 | |
| 4.2.2 | Three Concealed Triplets | 30 | |
| 4.2.3 | Four Concealed Triplets | 125 | |
| 4.3.1 | One Kong | 5 | Open or concealed, as below |
| 4.3.2 | Two Kong | 20 | |
| 4.3.3 | Three Kong | 120 | |
| 4.3.4 | Four Kong | 480 | |

### The Patterns: Sequences, Terminals, Luck and Irregular Hands

| # | Pattern | Points | Condition |
|---|---------|--------|-----------|
| 5.1.1 | Two Identical Sequences | 10 | The same sequence twice |
| 5.1.2 | Two Identical Sequences Twice | 60 | Two such pairs |
| 5.1.3 | Three Identical Sequences | 120 | |
| 5.1.4 | Four Identical Sequences | 480 | |
| 6.1 | Three Similar Sequences | 35 | The same sequence in all three suits |
| 6.2.1 | Small Three Similar Triplets | 30 | Triplets of one number in two suits, the pair of that number in the third |
| 6.2.2 | Three Similar Triplets | 120 | Triplets of one number in all three suits |
| 7.1 | Nine-Tile Straight | 40 | 123, 456 and 789 of one suit |
| 7.2.1 | Three Consecutive Triplets | 100 | Three triplets of consecutive numbers in one suit |
| 7.2.2 | Four Consecutive Triplets | 200 | Four of them |
| 8.1.1 | Mixed Lesser Terminals | 40 | Every set and the pair hold a terminal or honour |
| 8.1.2 | Pure Lesser Terminals | 50 | Every set and the pair hold a terminal |
| 8.1.3 | Mixed Greater Terminals | 100 | An All Triplets or Seven Pairs hand of terminals and honours only |
| 8.1.4 | Pure Greater Terminals | 400 | Terminals only |
| 9.1.1 | Final Draw | 10 | Self-drawn on the seabed tile |
| 9.1.2 | Final Discard | 10 | Won on the discard after the seabed tile |
| 9.2 | Win on Kong | 10 | Self-drawn on a kong's supplement tile |
| 9.3 | Robbing a Kong | 10 | Won on a tile added to a claimed pung |
| 9.4.1 | Blessing of Heaven | 155 | East wins on the first 14 tiles, with no concealed kong |
| 9.4.2 | Blessing of Earth | 155 | Another player wins on East's very first discard |
| 10.1 | Thirteen Terminals | 160 | One of each terminal and honour, with one of them paired |
| 10.2 | Seven Pairs | 30 | Seven pairs |


### Paying

The winner always collects **three times** the hand's value. Each of the other three pays the hand's value, except on a discard of a hand over 25 points: then the two not responsible pay 25 each and the responsible player pays the rest (a 70-point hand is paid 25, 25 and 160). Win on Kong counts as self-drawn, Robbing a Kong as a discard.

**Same-round immunity.** Of the discards since the winner's own last discard, that one included, the first of the winning kind makes its discarder responsible; a player who only followed with the same tile is immune. If the winner threw it first, nobody is responsible.

### Attribution

Zung Jung Mahjong Scoring System v3.3, with its basic and miscellaneous rules, by Alan Kwan (© 1997, 2011 Alan Kwan Shiu Ho), zj-mahjong.info. Licensed CC BY-NC-SA 3.0 Hong Kong; restated here in our own words.
