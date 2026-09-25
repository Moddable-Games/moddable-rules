---
playable: true
title: Big 2
slug: big2
board: "none"
players: "4"
parent: standard-52
win: "First to empty hand"
special: "Climbing card game where 2 is the highest rank. Play singles, pairs, triples, or five-card poker hands."
approximations:
  - feature: "Comparing five-card hands of one kind"
    source: "'Five-card hand: By poker hand type, then by highest card.'"
    engine: "By kind in the order straight, flush, full house, four of a kind, straight flush; then a straight or flush by its highest card (rank, then suit), a full house by its triple and four of a kind by its four, as Pagat gives it. The royal flush is the highest straight flush rather than a kind of its own."
  - feature: "Which five cards make a straight"
    source: "The page names straights and does not say where the 2 may stand in one."
    engine: "Five ranks in a row in the game's own order, 3 up to 2, without wrapping round: J-Q-K-A-2 is a straight and A-2-3-4-5 is not."
  - feature: "The opening lead"
    source: "'Player with the 3 of Diamonds leads the first round.'"
    engine: "That player leads anything; the 3 of Diamonds need not be in it. The game is a single hand, won by the first player out."
engine:
  players: [player1, player2, player3, player4]
  components:
    deck:
      type: standard-52
      jokers: 0
  topology:
    type: tableau
    layout: radial
  deal:
    minPlayers: 4
    maxPlayers: 4
    defaultPlayers: 4
    perPlayer: all
    community: 0
  plugins:
    standard-52:
      game: climbing
      rankOrder: [3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A, 2]
      suitOrder: [diamonds, clubs, hearts, spades]
      combinations: [single, pair, triple, five-card]
      fiveCardHands: [straight, flush, full-house, four-of-a-kind, straight-flush]
      firstLead: 3-diamonds
published: true
---

## Big 2

Also known as Deuces, Pusoy Dos, or Chinese Poker. A climbing card game for exactly four players. Each player receives 13 cards and tries to be the first to empty their hand by playing progressively higher combinations.

{{svg:big2-board.svg "Big 2 — table layout"}}

### Setup

- 4 players. Deal all 52 cards evenly (13 each).
- Player with the 3 of Diamonds leads the first round.
- Subsequent rounds: loser of previous round leads.

### Card Ranking

**Rank (low to high):** 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A, 2

**Suit (low to high):** Diamonds, Clubs, Hearts, Spades

The 2 of Spades is the highest card in the game.

### Combination Types

| Type | Cards | Ranking |
|---|---|---|
| Single | 1 card | By rank, then suit |
| Pair | 2 same rank | By rank of pair, then highest suit |
| Triple | 3 same rank | By rank |
| Five-card hand | 5 cards | By poker hand type, then by highest card |

**Five-card hand ranking (low to high):** Straight, Flush, Full House, Four of a Kind, Straight Flush, Royal Flush.

### Rules

1. Lead player plays any valid combination.
2. Each subsequent player must play the same combination type at a higher value, or pass.
3. When all other players pass, the last player who played leads the next trick.
4. The first player to empty their hand wins.
5. Remaining players are ranked by finishing order.

### Passing

A player who passes may play again when the turn comes back around (unless the trick is already won). Passing is strategic, not permanent.

### Attribution

Big 2. Traditional Chinese climbing card game, widespread across East and Southeast Asia. Public domain. Rules confirmed from Pagat.com and Wikipedia.
