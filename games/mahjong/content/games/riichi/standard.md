---
playable: true
title: Riichi Mahjong
slug: riichi
board: "none"
players: "4"
parent: mahjong
win: "Complete a valid hand with at least one yaku"
special: "Japanese Mahjong, as the European Mahjong Association's 2016 rules play it. 136 tiles, no bonus tiles. A winning hand needs a yaku; riichi locks a waiting hand for a 1,000-point stake; furiten bars a win on a discard; han and fu make the score."
approximations:
  - feature: "Declaring a drawn hand"
    source: "EMA 3.4.2: at an exhaustive draw players announce tenpai or noten, and 'noten players (players who can't or won't show a tenpai hand) pay a penalty'."
    engine: "Every waiting hand is shown. A player cannot choose to call noten while waiting."
  - feature: "Chombo and dead hands"
    source: "EMA 3.4.6 and 3.4.7 penalise false wins, false riichi, invalid kongs and miscounted hands."
    engine: "The engine offers only legal declarations, so none of these can happen and no penalty is ever paid."
  - feature: "Uma"
    source: "EMA 3.6.1: at the end the winner receives 15,000, second 5,000, third -5,000 and last -15,000."
    engine: "The final scores are shown without uma. The order of the players, and so the winner, is the same either way."
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
      scoring: riichi
      minimum: 1
      rounds: 2
      startingPoints: 30000
      deadWall: 14
      riichi: 1000
      riichiWall: 4
      furiten: true
      counters: 300
      noten: 3000
      dealerKeeps: tenpai
      swapCalling: false
      liability: true
      lastDiscard: win
      kongAfterClaim: false
      maxKongs: 4
      multipleWinners: true
      options:
        rounds:
          label: Wind rounds
          values: [1, 2]
published: true
---

## Riichi Mahjong

The Japanese national form of mahjong. It is played with 136 tiles and no flowers or seasons. Every winning hand must contain at least one scoring pattern, a *yaku*. A player whose closed hand is waiting may declare *riichi* and lock it in exchange for a bonus. A player who has discarded a tile they are waiting on may not win on anyone else's discard (*furiten*). Hands are valued in *han* and *fu*, with named limits at the top.

These rules follow the European Mahjong Association's Riichi Competition Rules (April 2016).

{{svg:riichi-board.svg "Riichi Mahjong — table layout"}}

### The Table

Each player starts with 30,000 points. The dealer (East) is chosen by lot. The last 14 tiles of the wall are the **dead wall** and are never drawn in turn. Four of them are replacement tiles for kongs. The others hold the **dora indicators**, one turned face up at the start of the hand, with the **ura dora** indicators lying beneath them.

A game is two rounds, East then South. Each player deals at least once in each round. The dealer keeps the deal after winning, or after a drawn hand in which the dealer is waiting.

### Claiming Discards

- **Win (ron):** any player, and several may win on the same discard.
- **Pung or kong:** any player; this takes precedence over a chow.
- **Chow:** only the player to the discarder's right, who plays next.

A player who claims a tile for a pung may not then discard a tile of the same kind. A player who claims a tile for a chow may not discard the claimed kind either, nor the tile at the far end of the chow (claiming a 3 to go with 4-5 bars a 6). This is **swap-calling**, and it is not allowed.

The discard after the last tile of the wall may only be claimed to win. A kong is declared only in a turn that began with a draw, and draws a replacement tile from the dead wall. The wall's last tile then joins the dead wall, so the dead wall stays at 14. Each kong turns another dora indicator. There are never more than four kongs in a hand.

### Riichi

A player whose hand is closed (nothing claimed from a discard) and waiting may declare riichi when discarding, if at least four tiles are left in the wall. The player puts a 1,000-point stick on the table. If that discard is won on at once, the riichi does not count and the stick is not paid.

After riichi the hand is locked. Every tile drawn is discarded unless it wins. A concealed kong is allowed only with the tile just drawn, only if the three tiles held are a pung however the waiting hand is read, and only if the wait stays the same.

A riichi player who wins before their next discard, with no call made by anyone in between, scores **ippatsu**. Declaring riichi on the very first discard, before any call, scores **double riichi**. When a riichi player wins, the ura dora indicators are revealed and count as dora too.

Riichi sticks go to the next player to win. When a hand is drawn they stay on the table. When several players win on one discard, each winner who declared riichi takes their own stick back, and the winner first in turn after the discarder takes the rest. Sticks still on the table at the end go to the winner of the game.

### Furiten

A player is furiten if any tile they are waiting on is among their own discards, including discards other players have claimed. A furiten player may not win on a discard but may still win on a tile they draw.

A player who lets a winning tile go by is furiten until they next draw or claim a tile. After riichi this lasts for the rest of the hand.

### Yaku

A winning hand needs at least one yaku. Dora add han but are not yaku. Where two values are given, the second is for an open hand (one with a tile claimed from a discard). Patterns marked closed need a closed hand.

| Yaku | Han | Condition |
|------|-----|-----------|
| Riichi | 1 (closed) | Declared a locked waiting hand |
| Ippatsu | 1 | Won before the riichi player's next discard, uninterrupted |
| Double riichi | 1 | Riichi declared on the first discard, uninterrupted (2 in all with riichi) |
| Fully concealed hand | 1 (closed) | Won on a self-drawn tile |
| Pinfu | 1 (closed) | Four chows, a pair worth no fu, won on a two-sided wait |
| Pure double chow | 1 (closed) | Two identical chows |
| All simples | 1 | No terminals or honours |
| Mixed triple chow | 2 / 1 | The same chow in each suit |
| Pure straight | 2 / 1 | 1-2-3, 4-5-6 and 7-8-9 of one suit |
| Dragon pung | 1 each | A pung or kong of dragons |
| Seat wind, prevalent wind | 1 each | A pung or kong of that wind |
| Outside hand | 2 / 1 | Every set and the pair hold a terminal or honour, with a chow |
| After a kong | 1 | Won on a kong's replacement tile |
| Robbing the kong | 1 | Won on the tile another player adds to a pung |
| Under the sea | 1 | Won on the last tile of the wall |
| Under the river | 1 | Won on the discard after the last tile |
| Seven pairs | 2 (closed) | Seven different pairs; always 25 fu |
| Triple pung | 2 | The same pung in each suit |
| Three concealed pungs | 2 | Three pungs or kongs not claimed |
| Three kongs | 2 | Three kongs, claimed or concealed |
| All pungs | 2 | Four pungs or kongs and a pair |
| Half flush | 3 / 2 | One suit with honours |
| Little three dragons | 2 | Two dragon pungs and a dragon pair |
| All terminals and honours | 2 | Only terminals and honours |
| Terminals in all sets | 3 / 2 | Every set and the pair hold a terminal, with a chow |
| Twice pure double chow | 3 (closed) | Two pairs of identical chows |
| Full flush | 6 / 5 | One suit only |

**Blessing of Man**, a win on a discard before the player's first turn with no call made, is a mangan. It is not added to other yaku or dora; the hand scores whichever is higher.

### Yakuman

A yakuman is the maximum, and yakuman are not added together: Thirteen Orphans, Nine Gates (1112345678999 of one suit and one more of that suit, closed), Blessing of Heaven (the dealer's first draw wins), Blessing of Earth (a non-dealer's first draw wins, uninterrupted), Four Concealed Pungs, Four Kongs, All Green (2, 3, 4, 6 and 8 of bamboo and green dragons), All Terminals, All Honours, Big Three Dragons, Little Four Winds and Big Four Winds.

A player who discards the third dragon to an opponent already showing two claimed dragon sets, or the fourth wind to one showing three claimed wind sets, is **liable**. If the Big Three Dragons or Big Four Winds is then won on a self-drawn tile, the liable player pays all of it. If another player discards the winning tile, that player and the liable player pay half each, and the discarder alone pays for counters.

### Dora

Each dora indicator points to the next tile: the next number in its suit (9 goes to 1), the next wind (east, south, west, north, east) or the next dragon (white, green, red, white). Every tile of that kind in the winning hand is one han.

### Fu

Seven pairs is always 25 fu. Pinfu is 30 fu on a discard and 20 self-drawn. Any other hand starts at 20 and adds:

| For | Fu |
|-----|----|
| A closed hand won on a discard | 10 |
| Pung of 2-8, open / concealed | 2 / 4 |
| Pung of terminals or honours, open / concealed | 4 / 8 |
| Kong of 2-8, open / concealed | 8 / 16 |
| Kong of terminals or honours, open / concealed | 16 / 32 |
| A pair of dragons, of the seat wind, of the prevalent wind | 2 each |
| Winning on an edge, closed or pair wait | 2 |
| Winning on a self-drawn tile | 2 |
| An open hand worth nothing more (open pinfu) | 2 |

A pung completed by a discard counts as open. When the winning tile could complete the hand in more than one way, the way that scores most is taken. The total is rounded up to the next 10.

### Scoring

The basic points are fu × 2^(2 + han), up to 2,000. At the top are the limits:

| Limit | Han | Basic points |
|-------|-----|--------------|
| Mangan | 5, or when fu and han pass 2,000 | 2,000 |
| Haneman | 6–7 | 3,000 |
| Baiman | 8–10 | 4,000 |
| Sanbaiman | 11 or more | 6,000 |
| Yakuman | | 8,000 |

**On a discard (ron),** the discarder pays 6 × basic to a dealer and 4 × basic to anyone else. **Self-drawn (tsumo),** the dealer pays or is paid 2 × basic, and everyone else 1 × basic. Each payment is rounded up to the next 100.

**Counters.** A counter goes on the table when the dealer wins or a hand is drawn. Each counter adds 300 to a win: 300 from the discarder, or 100 from each player on a self-drawn win. When a player other than the dealer wins, the counters are cleared.

### A Drawn Hand

If the wall runs out and nobody wins on the last discard, the waiting players are shown. Those not waiting pay those who are, 3,000 in all: one waiting player takes 1,000 from each of the others; two take 1,500 each from the two not waiting; three take 1,000 each from the one left. If all four or none are waiting, nothing is paid.

### Attribution

Riichi mahjong is a traditional Japanese game. These rules follow the European Mahjong Association's *Riichi Competition Rules*, April 2016 (mahjong-europe.org), with the yaku and scoring checked against Wikipedia's *Japanese mahjong*, *Yaku (Japanese mahjong)* and *Japanese mahjong scoring rules*. The EMA document is licensed CC BY-NC-SA 4.0; this page restates its rules in its own words.
