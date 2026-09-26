---
playable: true
title: American Mahjong (Classic)
slug: american-classic
board: none
players: "4"
parent: mahjong
win: Complete a hand of four sets and a pair and declare Mah-Jongg
order: 5
special: "American mahjong as Babcock's Red Book of Rules (1923) taught it, the book packed with the sets that started the American craze. 136 tiles, every hand scored, the losers settling among themselves, and East paying and receiving double."
approximations:
  - feature: "The Lucky Thirteen"
    source: "Red Book, Standard Score Sheet: a player whose original thirteen tiles are ready 'may declare his intention to win on his original thirteen tiles', and winning without changing them scores one-third the Limit."
    engine: "Not offered. No declaration can be made, so the hand is never scored."
  - feature: "No score other than game"
    source: "'This special bonus score of 10 points can only be claimed when the hand contains no score whatever other than for winning the Game (MAH-JONGG).'"
    engine: "The bonus is given only when the hand earns no points and no doubles besides the 20 for Mah-Jongg."
  - feature: "How long a game is"
    source: "'Any number of Hands may be played, but before play begins it is usually decided to complete a certain number of Rounds or at an agreed time.'"
    engine: "One round unless the players choose two or four; the highest total then wins. Each player starts with 2,000 points, the counters the Red Book hands out."
engine:
  players: [east, south, west, north]
  pieces:
    set: mahjong-planar
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
      scoring: red-book
      minimum: 0
      rounds: 1
      startingPoints: 2000
      deadWall: 14
      limit: 300
      kongAfterClaim: false
      options:
        rounds:
          label: Rounds
          values: [1, 2, 4]
published: true
---

## American Mahjong (Classic)

Joseph Park Babcock, a Standard Oil representative in Shanghai, brought mahjong to America around 1920 and wrote the rules that went into the box with the sets: *Babcock's Rules for Mah-Jongg*, the **Red Book**. This page plays its second edition (1923), which is in the public domain. It is the game Americans learned in the 1920s craze, before the National Mah Jongg League's yearly card of winning hands.

The Red Book game has no Charleston and no jokers. Modern American mahjong uses both, along with the card; none of them appear in these rules.

{{svg:american-classic-board.svg "American Classic Mahjong — table layout"}}

### The Set

136 tiles: three suits, bamboo, dots and characters, each numbered 1 to 9; four winds; and red, green and white dragons. There are four of each tile. The Red Book mentions the eight season tiles found in some sets but says "they are not recommended for play", and the standard game leaves them out. Each player starts with 2,000 points in counters.

### The Deal

The tiles are shuffled face down and built into a wall. The dice choose East, who deals and plays first; South sits to East's right, West opposite, North to the left. East takes fourteen tiles and the others thirteen. The last fourteen tiles of the wall, including the loose tiles, are the **dead portion** and are never drawn.

### Play

East discards first. Play then passes to the right: East, South, West, North. On a turn a player draws from the wall and discards.

- **Pung:** any player holding a pair may take the last discard to make three of a kind, out of turn, and discards. Players in between lose their turn. A player holding three may pung the fourth for four of a kind.
- **Chow:** only the next player may take the last discard to complete a run. A pung comes before a chow.
- **Mah-Jongg:** any player may take the last discard to complete the hand, even to finish the pair. This beats any pung or chow. If two or three players could win on it, the one next in turn after the discarder takes it.

Taken tiles are laid face up as exposed combinations. Only the last discard can be taken; the rest are dead.

**Four of a kind** is declared in the player's own turn after drawing (never straight after a pung or chow) and laid on the table, with one tile turned down if it was drawn rather than punged. The player then draws a **loose tile** and discards. A fourth tile drawn to go with an exposed pung may be added to it. Another player who needs that very tile may take it to win: **stealing the fourth**. No four of a kind may be declared once the last tile of the live wall has been drawn.

A complete hand is four combinations (three or four of a kind, or runs of three in one suit) and a pair.

### A Drawn Game

If nobody has gone Mah-Jongg when only the dead fourteen tiles are left, the hand is a draw. No scores count, and East deals again.

### Scoring

Every hand is scored, the losers' as well as the winner's. Runs score nothing.

| Combination | Exposed | Concealed |
|---|---|---|
| Three of a kind, 2 to 8 | 2 | 4 |
| Three ones or nines, winds or dragons | 4 | 8 |
| Four of a kind, 2 to 8 | 8 | 16 |
| Four ones or nines, winds or dragons | 16 | 32 |
| A pair of dragons or of the player's own wind | 2 | 2 |

A combination completed by a punged or chowed tile is exposed; one completed by a drawn tile is concealed. **The winner only** adds, before doubling:

| Bonus | Points |
|---|---|
| Mah-Jongg | 20 |
| Winning tile drawn | 2 |
| Winning on a loose tile after four of a kind | 8 more, 10 in all |
| Filling the only possible place to win (one tile alone would complete the hand) | 2 |
| No runs, concealed or exposed | 10 |
| Stealing the fourth to win | 10 |
| Mah-Jongg on the last tile drawn | 10 |
| No score at all other than Mah-Jongg | 10 |


**Doubles, for every hand:** once for each set of dragons, once for a set of the own wind, once for one suit with honours; three times for one suit only or honours only.

A losing hand counts its exposed combinations and its concealed tiles grouped as well as they can be: three or more of a kind as a concealed three (four scores only when declared), and a pair of dragons or own wind as a pair.

**The limit is 300 points** for any hand. The **Hand from Heaven** (East's first fourteen tiles complete) scores the limit; the **Hand from Earth** (another player winning on East's first discard with the first thirteen) half of it.

### Settling

Each loser pays the winner the winner's whole score; the three losers then pay each loser with a higher score the difference. East pays and receives double in every settlement (only the stakes, not East's score). While East wins, East deals again; otherwise the deal passes to the right.

### Attribution

J. P. Babcock, *Babcock's Rules for Mah-Jongg: The Red Book of Rules*, second edition (1923). Public domain; scanned at the Internet Archive (babcock_202209).
