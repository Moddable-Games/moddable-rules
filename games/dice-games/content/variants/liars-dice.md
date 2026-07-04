---
title: Liar's Dice
slug: liars-dice
board: "none"
players: "2–6"
parent: dice-games
win: "Last player with dice remaining"
special: "Hidden dice under cups. Bid on what the combined dice show. Call liar to challenge — and risk a die of your own."
engine:
  components:
    dice_per_player: 5
    die_type: d6
    cup_per_player: true
published: true
---

## Liar’s Dice

A bluffing game for 2–6 players. Each player has 5 dice hidden under a cup. Players bid on how many dice of a given face value exist across **all players’ dice combined** — without seeing anyone else’s dice. Challenge a bid or raise it. The player who is wrong loses a die. Last player with at least one die wins.

### Setup

Each player takes 5 dice and a cup. All players simultaneously shake their dice under their cups, then lift to view their own dice only — keeping them hidden from others.

### Turn Structure

The starting player makes a **bid**. Play proceeds clockwise. On your turn you must either:

**Raise the bid** — the new bid must be strictly higher than the current one. A bid is higher if:
- The quantity is higher (any face), **or**
- The quantity is the same and the face value is higher.

**Challenge** (“Liar!”) — declare the current bid false. All players reveal their dice. Count the total number of dice showing the bid’s face value:
- If the count **meets or exceeds** the bid → the **challenger** loses one die.
- If the count is **less than** the bid → the **bidder** loses one die.

After a challenge, all players re-roll their remaining dice and a new round begins. The player who lost a die makes the first bid.

### Elimination

A player with 0 dice is eliminated. The last player with any dice wins.

### Aces Wild (Perudo variant)

In the Perudo variant, 1s (aces) are wild and count as any face value. When bidding aces, the quantity threshold is halved (rounded up). Bidding can switch between aces and another face value with specific raising rules. This variant is optional; standard Liar’s Dice uses no wild faces.

### Attribution

Liar’s Dice. Traditional game; modern form popularised as Perudo (Milton Bradley, 1993). Rules in the public domain. Source: Wikipedia *(Liar’s dice)*; Pagat.com.
