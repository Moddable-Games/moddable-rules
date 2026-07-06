---
title: Blackjack (Twenty-One)
slug: blackjack
board: "none"
players: "2-7"
parent: standard-52
win: "Beat the dealer: reach 21 or closer to 21 without busting"
special: "Players compete individually against the dealer, not each other. Blackjack (natural 21) pays 3:2. Players may double down, split pairs, and take insurance."
engine:
  players: [dealer, player1, player2, player3, player4, player5, player6]
  components:
    deck:
      type: standard-52
      count: 6
      jokers: 0
      shuffle: continuous
published: true
---

## Blackjack (Twenty-One)

Blackjack is a casino card game in which each player competes independently against the dealer. The goal is to hold a hand with a total closer to 21 than the dealer’s without exceeding 21 (busting). Blackjack (an Ace + a 10-value card) beats a regular 21 and pays 3:2. The standard casino game uses 6–8 decks shuffled together.

### Card Values

| Card | Value |
|---|---|
| 2–10 | Face value |
| J, Q, K | 10 |
| Ace | 1 or 11 (player chooses; always the value that benefits the hand without busting) |

A **soft** hand contains an Ace counted as 11. A **hard** hand has no Ace, or an Ace counted as 1.

### Setup and Betting

- 1–6 players plus a dealer.
- Casino: 6 or 8 standard decks in a shoe. Home game: 1–2 decks.
- Each player places a bet before cards are dealt.

### Deal

Dealer deals two cards to each player face-up, then deals themselves two cards: one face-up (upcard) and one face-down (hole card).

### Blackjack (Natural)

If a player’s first two cards are an Ace and a 10-value card, they have **Blackjack**. The player wins immediately and is paid 3:2 on their bet, unless the dealer also has Blackjack (in which case it is a push — bet returned, no win or loss).

**Insurance:** If the dealer’s upcard is an Ace, players may place an insurance bet (up to half the original bet) that the dealer has Blackjack. If the dealer has Blackjack, insurance pays 2:1. If not, the insurance bet is lost and play continues.

### Player Actions

Each player acts on their hand before the dealer plays. Options:

| Action | Description |
|---|---|
| **Hit** | Take one additional card. May hit again as many times as desired (until standing or busting). |
| **Stand** | Take no more cards; end the turn. |
| **Double Down** | Double the bet and take exactly one more card. Only allowed on the initial two-card hand (some rules restrict to totals of 9, 10, or 11 only). |
| **Split** | If the first two cards are of equal value, split them into two separate hands, each with its own bet equal to the original. Each hand is then played independently. Aces may only be split once and receive one card each; no further actions allowed after splitting Aces in most casinos. |
| **Surrender** | Forfeit the hand and recover half the bet. Only on the initial two cards, before any other action. Not available at all tables. |

**Bust:** If a hand total exceeds 21, the player busts and loses the bet immediately. The dealer does not need to play.

### Dealer Play

After all players have acted, the dealer reveals the hole card.

- Dealer must **hit** on any total of 16 or less.
- Dealer must **stand** on any total of 17 or more.
- **Soft 17:** Some rules require the dealer to hit on soft 17 (Ace + 6 = 17 with the Ace as 11). Others require a stand. The rule in use should be stated.

The dealer has no choices — their play is entirely rule-determined.

### Settlement

After the dealer completes their hand:

| Result | Payout |
|---|---|
| Player total > dealer total (no bust) | Player wins 1:1 (even money) |
| Player Blackjack (natural 21) | Player wins 3:2 |
| Player total = dealer total | Push (bet returned) |
| Player busts (exceeded 21) | Player loses bet |
| Dealer busts | All remaining players win 1:1 |
| Dealer total > player total | Player loses bet |

### Basic Strategy Summary

Basic strategy is the set of statistically optimal player decisions for every hand combination given the dealer upcard. Key principles:

- Always split Aces and 8s.
- Never split 10-value cards or 5s.
- Double down on 11 against dealer’s 2–10; on 10 against dealer’s 2–9.
- Stand on hard 17+; hit on hard 8 or less.
- Stand on soft 19+; always hit soft 17 or less.

### Card Counting (Informational)

Card counting is a legal advantage technique where players track the ratio of high to low cards remaining in the shoe. A high count (more 10s and Aces remaining) favors the player; a low count favors the dealer. Casinos may bar known card counters from play but it is not illegal.

### Attribution

Blackjack (Twenty-One). Origins in 17th century France (Vingt-et-Un). Modern casino rules standardized during the 20th century. Public domain rule set. Casino rules vary by establishment; house rules should be confirmed before play.
