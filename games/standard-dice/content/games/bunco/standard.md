---
playable: true
title: Bunco
slug: bunco
board: none
players: "12 (or multiples of 4)"
parent: standard-dice
win: Team with most wins after 6 rounds; individual prizes for most Buncos, most wins, and most losses
special: "Social dice game for 12 players in 3 tables of 4 (2 teams of 2 per table). 6 rounds, each targeting a number 1–6. Roll 3 dice; score 1 point per die showing the target number. Roll all three matching the target = Bunco (21 points, round ends). Fast, social, no strategy."
published: true
approximations:
  - feature: "When a round ends"
    source: "The page: 'A set ends when one team reaches 21 points', and 'the team with more set wins at the end of the round wins that round'; it does not say when the round ends. Wikipedia: 'Each round ends when a player has scored 21 points.'"
    engine: "A round ends when a team at the head table reaches 21 points, and each table's team with more points at that moment wins the round there. A table tied at that moment records no result, and its first team moves as the winner."
  - feature: "Three of a kind"
    source: "Wikipedia: '5 points are awarded if all three dice match each other, but do not match the current round number.' The page does not mention it."
    engine: "As Wikipedia: three of a kind of another number scores 5."
  - feature: "Tables playing at once"
    source: "Every table plays the round at the same time."
    engine: "The tables take one roll each in turn, so that play goes on at every table while the head table plays."
  - feature: "Moving between tables"
    source: "The page: 'At the Head Table, the winning team stays; the losing team moves down. At other tables, the winning team moves up and the losing team moves down.' It does not say whether partners change."
    engine: "As the page, with each pair moving together and keeping their partnership."
  - feature: "The winner"
    source: "The page gives prizes for 'most wins, most Buncos, and a booby prize for most losses'. Wikipedia: 'The player with the most rounds won is the overall game winner, with ties typically broken by comparing total points scored.'"
    engine: "Most rounds won, then most points, as Wikipedia; since partners move and score together here, the game is won by a pair. Buncos and losses are counted for each player."
engine:
  players: [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12]
  components:
    dice:
      type: standard
      count: 3
      sides: 6
  topology:
    type: tableau
    layout: radial
  deal:
    minPlayers: 4
    maxPlayers: 12
    defaultPlayers: 12
    playerCounts: [4, 8, 12]
    perPlayer: 0
    community: 3
  plugins:
    standard-dice:
      game: rolling-rounds
      dice: 3
      rounds: 6
      bunco: 21
      threeOfAKind: 5
      roundEnds: 21
---

## Bunco

Bunco is a social dice game for 12 players (or any multiple of 4), organised into 3 tables of 4 players each. It is fast-paced, requires no skill, and is designed for social gatherings — parties, charity events, and group outings throughout North America.

{{svg:bunco-board.svg "Bunco — table layout"}}

### Setup

- **12 players** at **3 tables**: Head Table, Middle Table, and Losing Table
- Each table has **2 teams of 2** — partners sit across from each other
- Each table has **3 dice** and a scorekeeper

### The Six Rounds

The game has **6 rounds**. The **target number** for each round matches the round number: Round 1 targets 1, Round 2 targets 2, …, Round 6 targets 6.

### Rolling

Players take turns rolling the 3 dice, and each roll scores for the roller's team. Each die showing the **target number** scores **1 point**. Three of a kind of any other number scores **5 points**. A player who scores keeps rolling; a roll that scores nothing passes the dice to the next player.

**Bunco:** Rolling all 3 dice showing the target number scores **21 points**, and the player records a Bunco.

### Winning a Round

The round ends when a team at the **Head Table** reaches **21 points**. At every table, the team with more points at that moment wins the round. At the **Head Table**, the winning team stays; the losing team moves down. At other tables, the winning team moves up and the losing team moves down.

### Scoring

After all 6 rounds, each player totals:
- Number of **round wins**
- Number of **round losses**
- Number of **Buncos**

Typical prizes: most wins, most Buncos, and a booby prize for most losses.

### Winning the Game

The player who won the most rounds wins the game; a tie is broken by the most points scored.

### Attribution

Bunco. A traditional parlour dice game, popular in North America. Rules checked against Wikipedia, *Bunco*, which is the source for three of a kind, the end of a round and the winner.

### Notes

Bunco requires no strategy. The table rotation ensures players interact with all participants over the course of the game.
