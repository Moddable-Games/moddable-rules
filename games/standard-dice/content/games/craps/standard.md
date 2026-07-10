---
title: Craps
slug: craps
board: none
players: "1 or more"
parent: standard-dice
win: Shooters win by rolling 7 or 11 on the come-out, or making their point before rolling 7
special: "The definitive casino dice game. Two dice. Come-out roll: 7 or 11 wins (Pass), 2/3/12 loses (craps), any other number becomes the Point. Point phase: match the Point before rolling 7 to win; roll 7 first (seven-out) to lose. Pass and Don't Pass are the core bets; the Odds bet behind them carries no house edge."
published: true
engine:
  topology:
    type: none
  components:
    dice:
      type: standard
      count: 2
      sides: 6
---

## Craps

Craps is the definitive casino dice game, played with two six-sided dice. At a casino table, one player (the shooter) rolls while others bet on the outcomes. It can also be played informally without a table (street craps).

### The Shooter

The **shooter** is the player rolling the dice. In a casino, players take turns as shooter; the dice pass clockwise after a seven-out.

### Come-Out Roll

Each round begins with the **come-out roll**:

| Result | Outcome |
|---|---|
| 7 or 11 (natural) | **Pass** — Pass bettors win; Don't Pass bettors lose |
| 2 or 3 (craps) | **Don't Pass** — Pass bettors lose; Don't Pass bettors win |
| 12 (craps) | Pass bettors lose; Don't Pass bettors **push** (tie, money returned) |
| 4, 5, 6, 8, 9, or 10 | That number becomes the **Point** |

### The Point Phase

Once a Point is established, the shooter continues rolling:

| Result | Outcome |
|---|---|
| Point number again | **Pass** — Pass bettors win; round ends; shooter keeps dice |
| 7 (**Seven-Out**) | **Don't Pass** — Pass bettors lose; Don't Pass bettors win; round ends; dice pass |
| Any other number | No decision; shooter rolls again |

### Core Bets

**Pass Line:** Bet before the come-out. Wins on natural; loses on craps; wins if Point is made before 7; loses on seven-out. Pays 1:1. House edge: **1.41%**.

**Don't Pass:** Opposite of Pass Line (with the 12-push on the come-out). House edge: **1.36%**.

**Come / Don't Come:** Same as Pass / Don't Pass but placed after the Point is established; each come bet sets its own personal point.

**Odds Bet:** Placed behind Pass/Don't Pass or Come/Don't Come after a Point is set. Pays **true odds** with zero house edge — the best bet in the casino:

| Point | Odds pay (Pass/Come) |
|---|---|
| 4 or 10 | 2:1 |
| 5 or 9 | 3:2 |
| 6 or 8 | 6:5 |

### Other Bets (casino table)

| Bet | Description | Approx. house edge |
|---|---|---|
| Place (6 or 8) | That number before 7 | 1.52% |
| Place (5 or 9) | That number before 7 | 4.0% |
| Place (4 or 10) | That number before 7 | 6.67% |
| Field | Next roll is 2,3,4,9,10,11,12 | 2.8–5.6% |
| Hardways (6 or 8) | Doubles before 7 or easy way | 9.09% |
| Hardways (4 or 10) | Doubles before 7 or easy way | 11.1% |
| Any 7 | Next roll is 7 | 16.67% |
| Any Craps | Next roll is 2, 3, or 12 | 11.11% |

**Rule of thumb:** stick to Pass/Don't Pass with max Odds. Avoid proposition bets.
