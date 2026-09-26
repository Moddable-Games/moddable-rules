---
playable: true
title: Rummy
slug: rummy
board: none
players: "2–6"
parent: standard-52
win: First to 100 points, scored from the cards left in other players' hands
special: "Classic draw-and-discard game. Players draw from the stock or discard pile, form melds (sets and runs), and lay them face-up on the table. Unlike Gin Rummy, melds are laid during play and opponents may extend them (lay off). Going rummy, going out in one turn without having melded before, doubles the score for the hand."
approximations:
  - feature: "How long a game is"
    source: "Pagat: 'Either a fixed number of deals are played, or the game is played to a target score. The number of deals or the target score needs to be agreed before beginning to play.'"
    engine: "The game is played to 100. If two players pass 100 on the same hand with equal scores, another hand is dealt."
  - feature: "Aces"
    source: "Pagat: 'In the standard game, aces are low. A-2-3 is a valid run but Q-K-A is not.' Some play them high or low."
    engine: "Low, and worth 1, as in the standard game."
published: true
engine:
  players: [player1, player2, player3, player4]
  components:
    deck:
      type: standard-52
      count: 1
      jokers: 0
  topology:
    type: tableau
    layout: radial
  deal:
    minPlayers: 2
    maxPlayers: 6
    defaultPlayers: 4
    perPlayer: 7
    community: 0
    remainder: draw
  plugins:
    standard-52:
      game: laying
      dealByPlayers: { 2: 10, 3: 7, 4: 7, 5: 6, 6: 6 }
      rummyDoubles: true
      target: 100
---

## Rummy

Rummy (also called Basic Rummy or Standard Rummy) is the foundational draw-and-discard game from which Gin Rummy, Canasta, and many other games descend. Unlike Gin Rummy, melds are placed face-up on the table during play and anyone may extend them.

{{svg:rummy-board.svg "Rummy — table layout"}}

### Players and Cards

2–6 players. Standard 52-card deck. Aces are low: A-2-3 is a run, Q-K-A is not. Aces count 1, court cards 10, and number cards their face value.

### The Deal

| Players | Cards dealt |
|---|---|
| 2 | 10 each |
| 3–4 | 7 each |
| 5–6 | 6 each |

The rest of the pack is the **stock**, face down. Its top card is turned up to start the **discard pile**.

### Melds

A **meld** is either:
- **Set (Group):** 3 or 4 cards of the same rank (e.g., three 7s)
- **Run (Sequence):** 3 or more consecutive cards of the same suit (e.g., 4♥–5♥–6♥)

### The Turn

On each turn a player:
1. **Draws** the top card of the stock or the top card of the discard pile
2. **Melds**, if they wish, laying one or more melds face up on the table
3. **Lays off**, if they wish, adding cards to any meld on the table, their own or anyone else's
4. **Discards** one card face up on the discard pile

A player who took the top discard may not discard that same card on the same turn. If the stock has run out, the discard pile is turned over, without shuffling, to make a new stock.

### Going Out

A player goes out when they have no cards left, by melding, laying off or discarding their last card.

### Scoring

When a player goes out, the cards left in everyone else's hands are counted, and the total is added to the winner's score. A player who goes out in a single turn, without having melded or laid off anything before, has **gone rummy**, and the score for that hand is doubled. The first player to reach 100 wins.

### Attribution

Rummy. Rules written from Pagat.com, *Rummy* (John McLeod, © 2003–2012), which is the source for the deal, the turn, going rummy and the scoring above.
