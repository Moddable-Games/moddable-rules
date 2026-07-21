---
title: Rubber Bridge
slug: bridge
board: "none"
players: "4"
parent: standard-52
win: "First partnership to win two games (a rubber)"
special: "Partnership trick-taking with bidding, contract, and vulnerability. Scoring covers trick points, bonuses, and penalties."
engine:
  players: [north, south, east, west]
  components:
    deck:
      type: standard-52
      count: 1
      jokers: 0
  topology:
    type: tableau
    layout: radial
  deal:
    minPlayers: 4
    maxPlayers: 4
    defaultPlayers: 4
    perPlayer: 13
    community: 0
  partnerships: [[north, south], [east, west]]
published: true
---

## Rubber Bridge

Rubber Bridge is the classic home and club form of Contract Bridge, played by four players in two partnerships (North–South vs. East–West). Bridge combines a bidding phase — an auction to determine the contract — with a trick-taking phase where the declaring partnership attempts to fulfil the contract. A rubber is the best of three games.

{{svg:bridge-board.svg "Bridge — table layout"}}

### Setup

- 4 players in fixed partnerships: North–South and East–West.
- Two standard 52-card decks (alternated between deals).
- Determine the first dealer by drawing a card; high card deals. The deal rotates clockwise.

### Deal

Dealer distributes all 52 cards clockwise, one at a time, face down. Each player receives 13 cards.

### Card Rankings

Within each suit (high to low): A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2.

Suit ranking (for notrump and slam purposes): Spades > Hearts > Diamonds > Clubs.

High Card Points (HCP): Ace = 4, King = 3, Queen = 2, Jack = 1. A standard 52-card deck contains 40 HCP. An opening hand typically requires 12–13+ HCP.

### The Auction (Bidding)

Starting with the dealer, players bid in clockwise order. A bid names a number (1–7) and a strain (Clubs, Diamonds, Hearts, Spades, or Notrump). The number represents how many tricks above 6 the partnership contracts to take (e.g., a bid of 3 Hearts contracts for 9 tricks with Hearts as trump).

**Calls:** Players may bid (any legal bid higher than the previous), pass, double (if the previous call was a bid by an opponent), or redouble (if the previous call was a double by an opponent).

**Auction ends:** Three consecutive passes end the auction. The final bid becomes the contract. If all four players pass immediately (a passed-out hand), the hand is redealt with no score.

**The declarer:** The first player on the contracting partnership who named the strain of the final contract becomes the declarer. The declarer’s left-hand opponent leads the first trick.

### The Play

**Dummy:** After the opening lead, the declarer’s partner (dummy) lays all cards face-up on the table, arranged by suit. The dummy plays no active role; the declarer calls plays from dummy’s hand.

**Tricks:** Each trick consists of four cards, one per player, played clockwise. A player must follow suit if able; if unable, may play any card. The highest card of the led suit wins the trick unless a trump card has been played, in which case the highest trump wins. Winner of each trick leads the next.

**Trump:** The trump suit (if any) is named by the contract. In Notrump, there is no trump suit.

### Scoring

Scoring is cumulative on a scorecard divided into “below the line” (trick points) and “above the line” (bonuses and penalties).

**Trick points (below the line):**

| Strain | Per overtrick (value) | Per trick contracted |
|---|---|---|
| Clubs or Diamonds (minor suits) | 20 per trick | 20 per trick |
| Hearts or Spades (major suits) | 30 per trick | 30 per trick |
| Notrump | 40 for first trick, 30 per subsequent | Same |

**Game:** A partnership reaches game when their trick points below the line total 100 or more in a single game. The contract must be fulfilled to score below the line (undertricks score only penalties above the line).

**Vulnerable:** A partnership that has won one game in the current rubber is “vulnerable.” Bonuses and penalties are higher when vulnerable.

**Doubled and redoubled contracts:** A doubled contract that is made scores trick points ×2 (below the line). Redoubled: ×4. A “Insult bonus” of 50 above the line also applies for making a doubled or redoubled contract.

**Bonuses (above the line):**

| Bonus | Amount |
|---|---|
| Small Slam (12 tricks) — not vulnerable | 500 |
| Small Slam — vulnerable | 750 |
| Grand Slam (13 tricks) — not vulnerable | 1000 |
| Grand Slam — vulnerable | 1500 |
| Rubber bonus (won 2–0) | 700 |
| Rubber bonus (won 2–1) | 500 |
| Part-score if rubber unfinished | 50 |

**Overtricks (above the line):**

| Condition | Per overtrick |
|---|---|
| Undoubled | Trick value (20 or 30) |
| Doubled, not vulnerable | 100 |
| Doubled, vulnerable | 200 |
| Redoubled, not vulnerable | 200 |
| Redoubled, vulnerable | 400 |

**Undertricks (penalties, above the line against the declaring partnership):**

| Tricks short | Undoubled | Doubled NV | Doubled V | Redoubled NV | Redoubled V |
|---|---|---|---|---|---|
| 1 | 50 | 100 | 200 | 200 | 400 |
| 2 | 100 | 300 | 500 | 600 | 1000 |
| 3 | 150 | 500 | 800 | 1000 | 1600 |
| Each additional | +50 | +300 NV / +300 V | same | +600 | +600 |

### Rubber

A rubber consists of up to three games. The first partnership to win two games wins the rubber. Game points are totalled; the partnership with the higher total wins.

### Honours (Optional)

If one player holds 4 of the 5 top honours (A, K, Q, J, 10) in the trump suit, that player’s partnership scores 100 above the line. All 5 top honours in one hand: 150 above the line. In Notrump, 4 Aces in one hand: 150. Honours are scored regardless of which side wins the contract.

### Attribution

Contract Bridge. Formalized by Harold Vanderbilt, 1925–1926. Rubber Bridge scoring codified by the World Bridge Federation. Public domain rule set.
