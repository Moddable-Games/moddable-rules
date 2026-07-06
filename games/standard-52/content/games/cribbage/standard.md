---
title: Cribbage
slug: cribbage
board: "none"
players: "2"
parent: standard-52
win: "First player to peg 121 points"
special: "Pegging game scored on a cribbage board. Features a crib (extra hand), pegging phase, and the show (hand scoring using a starter card)."
engine:
  players: [player1, player2]
  components:
    deck:
      type: standard-52
      count: 1
      jokers: 0
    board:
      type: cribbage
      holes: 121
published: false
---

## Cribbage

Cribbage is a two-player card game in which the primary goal is to be the first to peg 121 points on a cribbage board. Points are scored in three phases: the deal (crib), the pegging phase (playing out cards alternately), and the show (hand counting after play). Attributed to the poet Sir John Suckling (England, early 17th century).

### The Cribbage Board

Each player has a track of 120 holes (pegging twice around a 60-hole board) plus a game hole at 121. Two pegs per player allow tracking from 0 to 121. The game ends immediately when any player’s front peg reaches or passes hole 121.

### Card Values

- **Number cards (A–10):** Face value (Ace = 1).
- **Face cards (J, Q, K):** All worth 10.
- **Ranking** (for sequences and cutting): A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K (Ace is always low).

### Deal

Deal 6 cards each. Each player discards 2 cards face-down to the crib — a second hand owned by the dealer. The crib is scored by the dealer at the end of the round.

**Strategy note:** The non-dealer (pone) generally avoids giving good cards to the crib; the dealer welcomes strong crib contributions.

### The Cut (Starter Card)

After discarding, the non-dealer cuts the remaining deck. The dealer reveals the top card of the lower half — this is the **starter card** (also called the turn-up). It is used in scoring all hands during the show.

**Nibs (Heels):** If the starter card is a Jack, the dealer immediately pegs 2 points (“Two for his heels”).

### Pegging Phase

Alternating starting with the non-dealer, players lay cards one at a time face-up, calling out the cumulative running total (never exceeding 31).

**Pegging scores during play:**

| Event | Points |
|---|---|
| Reaching exactly 15 (cumulative total) | 2 |
| Reaching exactly 31 | 2 |
| “Go” (opponent cannot play without exceeding 31) | 1 |
| Last card played (if total is not 31) | 1 |
| Pair (consecutive same-rank card) | 2 |
| Three of a kind (three consecutive same rank) | 6 |
| Four of a kind (four consecutive same rank) | 12 |
| Run of 3 (consecutive ranks in last 3+ cards played) | 3 |
| Run of 4 | 4 |
| Run of 5 | 5 |

**Go rule:** When a player cannot play without exceeding 31, they say “Go.” The opponent continues playing cards if they can. After a Go (or when 31 is reached), the running total resets to 0 and the player who did not last play begins a new sequence.

### The Show (Hand Scoring)

After pegging, players score their hands using the starter card as a fifth card. The pone (non-dealer) scores first, then the dealer, then the dealer scores the crib.

**Scoring combinations (each combination scores separately):**

| Combination | Points | Notes |
|---|---|---|
| **Fifteen:** Any combination of cards summing to 15 | 2 per fifteen | Ace=1, J/Q/K=10 |
| **Pair:** Two cards of the same rank | 2 per pair | |
| **Pair Royal (Three of a kind):** | 6 (three pairs) | |
| **Double Pair Royal (Four of a kind):** | 12 (six pairs) | |
| **Run of 3:** Three cards in sequence | 3 | |
| **Run of 4:** Four cards in sequence | 4 | |
| **Run of 5:** Five cards in sequence | 5 | |
| **Flush (4 cards same suit in hand):** | 4 | Starter card not required. Not counted in crib unless all 5 cards match. |
| **Flush (5 cards same suit, including starter):** | 5 | |
| **Nobs:** Jack of same suit as starter card | 1 | One Jack in hand matching starter suit. |

**Maximum hand:** 29 points (three 5s and a Jack in hand, starter is the 5 of the same suit as the Jack — allowing 8 fifteens, 6 pairs, one nobs).

### Muggins (Optional)

If a player fails to peg points they earned, the opponent may call “Muggins” and claim those points. Commonly used in competitive play; optional in casual games.

### Game Variants

**Three-player Cribbage:** 5 cards dealt each, 1 discarded to crib; extra card dealt directly to crib. Play proceeds clockwise. First to 121 wins.

**Four-player Cribbage:** Teams of two (partners sitting opposite). 5 cards each, 1 discarded to crib. Partners’ scores are combined. First team to 121 wins.

**Six-card Cribbage:** Standard two-player game where 6 cards are dealt and 2 are discarded to the crib (same as standard rules above).

### Attribution

Cribbage. Attributed to Sir John Suckling, England, early 17th century. Public domain. Standard rules confirmed from Pagat.com and the American Cribbage Congress.
