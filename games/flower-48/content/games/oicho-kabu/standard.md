---
playable: true
title: Oicho-Kabu
slug: oicho-kabu
board: "none"
players: "2–8"
parent: flower-48
win: "Closest hand value to 9 beats the banker"
special: "A betting game using Hanafuda’s month numbers, not suit imagery. Closest to 9 wins. Similar to Baccarat."
approximations:
  - feature: "Ties"
    source: "English Wikipedia: 'If both the dealer and player have the same value, it is a draw, but there is a rule that states the dealer wins.' Japanese Wikipedia: ties are usually split, with some rules favouring the dealer."
    engine: "A tie goes to the dealer, as the page says."
  - feature: "The second card"
    source: "Japanese Wikipedia: the dealer gives each bettor a second card (打ち札)."
    engine: "The second card is dealt face up to its tableau, where every player sees it."
  - feature: "Kuppin against Shippin"
    source: "Kuppin (9 and 1) wins for the dealer and Shippin (4 and 1) for a player; neither source says which wins when both are dealt."
    engine: "Kuppin wins against every tableau, Shippin's included."
  - feature: "Chips and the dealer"
    source: "English Wikipedia: the dealer changes after a set number of deals, on going bankrupt, or on certain results."
    engine: "Play chips only: every player starts with 100 and bets 1, 2, 5 or 10 on a tableau. The deal passes to the next player every round, and after the chosen number of rounds the player with the most chips wins."
engine:
  players: [player1, player2, player3, player4]
  components:
    deck:
      type: hanafuda-48
      months: [January, February, March, April, May, June, July, August, September, October]
  topology:
    type: tableau
    layout: radial
  deal:
    minPlayers: 2
    maxPlayers: 8
    defaultPlayers: 4
    perPlayer: 2
    community: 0
    remainder: draw
  plugins:
    flower-48:
      game: tableaus
      chips: { start: 100, bets: [1, 2, 5, 10] }
      rounds: 8
      options:
        rounds:
          label: Deals
          values: [4, 8, 12]
published: true
---

## Oicho-Kabu

A Japanese banking card game played with Hanafuda (or dedicated Kabufuda) cards. It uses the cards’ **month numbers as values**, not their suit imagery. The goal is a hand whose last digit is as close to **9** as possible: *kabu* (カブ) means 9, and *oicho* (オイチョ) 8, both from Portuguese.

{{svg:oicho-kabu-board.svg "Oicho-Kabu — table layout"}}

### The Cards

Forty cards: the Hanafuda pack without November and December, or a Kabufuda pack. Each card is worth its month, January 1 to October 10, and a hand is worth the **last digit** of its total: 15 counts as 5, and 10 or 20 as 0.

### The Deal

The dealer lays **four cards face up** in a row, the four tableaus, and takes one card face down. Each player then bets on a tableau. Several players may back the same tableau.

### Third Cards

Each tableau with a bet on it is dealt a second card. Then:

- a total of **3 or less** must take a third card;
- a total of **7 or more** may not, except a tableau of two 9s;
- a total of **4 to 6** takes a third card or stands, as the tableau's first bettor decides.

The dealer then turns up their card, takes a second, and draws a third by the same rules.

### Winning

Each tableau is compared with the dealer's hand: the one closer to 9 wins, and **a tie goes to the dealer**. A winning tableau's bettors are paid their bet by the dealer; a losing tableau's bettors pay theirs to the dealer.

### Special Hands

| Hand | Cards | Effect |
|---|---|---|
| **Kuppin** (クッピン) | The dealer's first two cards, 9 and 1 | The dealer wins every tableau, paid double |
| **Shippin** (シッピン) | A tableau's first two cards, 4 and 1 | The tableau wins, paid double, and takes no third card |
| **Arashi** (嵐) | Three cards of one value | Paid triple |

Many other special hands are played regionally.

### Attribution

Oicho-Kabu ・おいちょかぶ. Traditional Japanese card game. Rules written from Wikipedia, *Oicho-Kabu*, and Japanese Wikipedia, *おいちょかぶ*, which agree on the tableaus, the third-card rules and the special hands; Pagat.com confirms that it is played with 40 of the cards.
