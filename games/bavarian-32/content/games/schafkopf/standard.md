---
playable: true
title: Schafkopf
slug: schafkopf
board: none
players: "4"
parent: bavarian-32
win: Declaring side scores 61 or more card points (out of 120)
special: "Bavaria's defining card game. 4 players, 32-card Bavarian deck, 8 cards each (all dealt, no cards set aside). Permanent trumps: all 4 Obers, all 4 Unters, then the Heart suit. Players bid to be solo declarer or partner caller. The declaring side needs 61+ of 120 card points to win. Core of Bavarian card culture."
published: true
approximations:
  - feature: "The auction"
    source: "Pagat: 'Forehand opens the bidding and may pass or call I'll play to play any contract', with contracts ranked Rufer, Wenz, Solo, Wenz Tout, Solo Tout, Sie, and 'in the case of equality priority is given to the first player in clockwise order starting from the player to dealer's left.'"
    engine: "Each player speaks once, from forehand, naming a game that outranks the one standing or passing, so an earlier player keeps a game of the same rank. The Tout games and Sie are not offered."
  - feature: "Running away with the called suit"
    source: "Pagat: the holder of the called ace may run away by leading a lower card of the suit when holding enough of it."
    engine: "The holder may lead the called suit without the ace when holding four or more cards of it, and after that may play the ace freely."
  - feature: "Laufende"
    source: "Pagat counts Laufende for a run of three or more consecutive top trumps (two or more in a Wenz), paid at the Rufer rate for each trump in the run."
    engine: "Counted from the top for whichever side holds the highest trump, and added to the game's value once there are three (two in a Wenz)."
  - feature: "Money"
    source: "Pagat's tariff is 10 cents for a Rufer and 50 for a Solo or Wenz, with schneider 10 and schwarz 20."
    engine: "Points instead of cents: 1 for a Rufer, 5 for a Solo or Wenz, 1 for schneider, 2 for schwarz, 1 for each Laufende."
  - feature: "How long a session is"
    source: "The page keeps 'a running score ... across hands'."
    engine: "The players choose how many times each deals, once by default; the highest score then wins."
engine:
  players: [player1, player2, player3, player4]
  components:
    deck:
      type: bavarian-32
      count: 1
      jokers: 0
  topology:
    type: tableau
    layout: radial
  deal:
    minPlayers: 4
    maxPlayers: 4
    defaultPlayers: 4
    perPlayer: 8
    community: 0
  plugins:
    bavarian-32:
      game: called-partner
      ober: O
      unter: U
      suitOrder: [acorns, leaves, hearts, bells]
      trumpSuit: hearts
      plainOrder: [7, 8, 9, K, 10, A]
      wenzOrder: [7, 8, 9, O, K, 10, A]
      cardPoints: { A: 11, 10: 10, K: 4, O: 3, U: 2 }
      tariff: { rufer: 1, solo: 5, wenz: 5, schneider: 1, schwarz: 2, laufende: 1 }
      laufende: { rufer: 3, solo: 3, wenz: 2 }
      runAway: 4
      rounds: 1
      options:
        rounds:
          label: Deals each
          values: [1, 2, 3, 4]
---

## Schafkopf

Schafkopf (pronounced SHAHF-kopf, meaning "Sheepshead") is the defining card game of Bavaria, played in clubs, tournaments and at home throughout southern Germany. The American game **Sheepshead** comes from it, brought by German immigrants.

{{svg:schafkopf-board.svg "Schafkopf — table layout"}}

### The Deck

The 32-card Bavarian pack: four suits, Acorns, Leaves, Hearts and Bells, each with the Ace (Sau), King, Ober, Unter, 10, 9, 8 and 7.

| Card | Points |
|---|---|
| Ace | 11 |
| 10 | 10 |
| King | 4 |
| Ober | 3 |
| Unter | 2 |
| 9, 8, 7 | 0 |

The pack holds **120** card points.

### Dealing

Four players each receive **eight cards**, dealt four at a time in two rounds, starting with forehand, the player to the dealer's left. The deal passes clockwise.

### Choosing the Game

Forehand speaks first. Each player in turn passes or names a game, and a game must outrank the one already named: a **Rufer** is lowest, then a **Wenz**, then a **Solo**. Between equal games, the player who spoke first keeps it. The player who names the highest game is the declarer. If everyone passes, the cards are thrown in and the next dealer deals.

### The Games

**Rufer (calling an ace).** The declarer calls the Ace of a suit other than Hearts, in which they hold at least one card other than an Ober or Unter, and may not call an Ace they hold. Whoever holds the called Ace is the declarer's partner, but says nothing: the partnership shows only when the Ace is played. Trumps are the four Obers, then the four Unters, then the Hearts.

**Solo.** The declarer plays alone against the other three, naming the suit that takes the place of Hearts among the trumps.

**Wenz.** The declarer plays alone, and only the four Unters are trumps. The Obers rank in their suits between the King and the 9.

### Trumps

In a Rufer or Solo, from highest: the Obers of Acorns, Leaves, Hearts and Bells; the Unters in the same order; then the trump suit, Ace, 10, King, 9, 8, 7. That is **14 trumps**. In a Wenz, the four Unters alone. Plain suits rank Ace, 10, King, 9, 8, 7, with the Ober between King and 9 in a Wenz.

### Play

Forehand leads to the first trick. Players must follow suit if they can, and trumps count as one suit; a player who cannot follow may play anything. The highest trump wins, or the highest card of the suit led. The winner of a trick leads the next.

**The called Ace** must be played to the first trick in which its suit is led, even if that trick is already trumped. Its holder may not throw it away on another suit before then, except in the last trick. A holder with four or more cards of the called suit may instead **run away**: lead a lower card of the suit, after which the Ace is free.

### Scoring

The declaring side, the declarer and partner in a Rufer or the declarer alone, needs **61** card points to win. A losing side with 30 card points or fewer is **schneider**; one that takes no trick is **schwarz**.

A game's value, in points:

| | Points |
|---|---|
| Rufer | 1 |
| Solo or Wenz | 5 |
| Schneider | +1 |
| Schwarz | +2 |
| Each Laufende | +1 |

**Laufende** are the top trumps held in an unbroken run by one side, counted from the highest. They add to the value once there are three, or two in a Wenz.

In a Rufer, each loser pays the value to one of the winners. In a Solo or Wenz, the declarer collects the value from each defender, or pays it to each. A running score is kept across hands.

### Attribution

Traditional Bavarian card game. Rules written from Pagat.com, *Bavarian Schafkopf* (Paul Eaton and John McLeod, © 2023), which is the source for the auction, calling the Ace, running away, the trumps, and the tariff given here in points rather than cents.
