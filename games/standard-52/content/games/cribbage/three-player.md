---
title: 3-Player Cribbage
slug: three-player-cribbage
board: none
players: "3"
parent: standard-52
win: First to 121 points
special: "Cribbage for three players. Each player receives 5 cards and discards 1 to the crib; 1 additional card is dealt from the deck directly to the crib. The crib rotates clockwise each hand. Scoring is identical to standard Cribbage."
published: true
engine:
  topology:
    type: none
  components:
    deck:
      type: standard-52
---

## 3-Player Cribbage

3-Player Cribbage adapts standard Cribbage for three players. The scoring and pegging rules are identical to the 2-player game; only the deal and crib construction differ.

### The Deal

Each player is dealt **5 cards**. Each player discards **1 card** face-down to the crib. One additional card is dealt from the top of the deck directly to the crib, face-down. The crib contains 4 cards (1 from each player + 1 from the deck) — the same size as in standard 2-player Cribbage.

The crib belongs to the dealer and is scored by the dealer at the end of the hand. Deal rotates clockwise each hand.

### Turn-Up (Starter Card)

After discarding to the crib, the player to the dealer's left cuts the deck. The dealer turns up the top card of the lower half as the **starter card**. If it is a Jack, the dealer scores 2 points immediately (His Heels).

### Pegging

Players peg in clockwise order (the player left of the dealer leads first). Rules are identical to 2-player Cribbage:
- Play a card and announce the running total
- Score points for pairs, runs, fifteens, and reaching exactly 31
- Say "Go" if unable to play without exceeding 31; the last player to play scores 1 point
- After "Go", the count resets to zero
- Last card played at the end of pegging scores 1 point (Go or 31)

### The Show

After pegging, each player scores their hand (4 cards + starter), in clockwise order starting from the dealer's left. The dealer scores last, then turns up and scores the crib.

Scoring is identical to standard Cribbage: fifteens (2 pts each), pairs/three-of-a-kind/four-of-a-kind, runs, flush (4+ cards of same suit in hand; 5 if starter matches), and Nobs (Jack of starter's suit in hand = 1 pt).

### Game

First player to reach **121 points** wins. If a player reaches 121 during pegging, the game ends immediately.

### Skunk Rule (optional)

A player not yet past 90 points when the winner reaches 121 is **skunked** (loses double). Not yet past 60 is **double-skunked** (loses triple).
