---
title: "Standard Dice"
version: "0.1.1"
slug: "standard-dice"
players: "1–8"
duration: "10–60 min"
age: "6+"
tagline: "Games built on standard six-sided dice"
type: "component"
status: "live"
updated: "2026-07-21"
published: true
hub_type: component
theme:
  surface: light
  tint: warm
  texture: none
  cover: cosmic
  typography: modern
  accent: red
  section-divider: "⚄"
engine:
  topology:
    type: none
  surface: felt-green
  pieces:
    set: playstrategy-backgammon
  components:
    dice:
      count: 5
      sides: 6
      type: standard
    layout:
      type: pool
  players: [player-1, player-2, player-3, player-4]
how_to_play: "Standard six-sided dice support five games spanning press-your-luck, betting, bluffing, and category-scoring families. Roll, set aside combinations, and decide whether to bank or risk it all."
mechanics:
  - dice-rolling
  - press-your-luck
  - betting
  - bluffing
  - scoring
complexity: simple
related:
  - standard-52
  - double-six-dominoes
  - backgammon
unsupported:
  _family: "No rules plugin. Unlike the card families the component is complete - component-dice rolls, detects doubles, parses expressions and computes odds. What is missing in every game here is the turn structure and the scoring built on top of a roll."
  bunco: "No plugin. Needs six rounds with a target number that changes each round, table rotation between rounds, and scoring across a group rather than a seat."
  craps: "No plugin. The dice are the least of it: needs a bet table, a point that persists across rolls, and wagers that resolve over different numbers of rolls."
  farkle: "No plugin. Needs the push-your-luck loop: re-roll what is left or bank, and lose the whole turn's score on a roll that scores nothing."
  liars-dice: "No plugin. Every seat's dice are concealed and the entire game is bidding over them, so it is blocked on private per-seat state (moddable-engine#155) more completely than any card game here."
  yahtzee: "No plugin. Needs three rolls per turn with a held subset carried between them, and a scorecard of thirteen categories each usable once, including the choice to take a zero."
---

<div class="section">

## Standard Dice

Games whose primary component is one or more standard six-sided dice (d6, pips 1-6). The shared component set:

| Component | Description |
|---|---|
| Dice | Standard d6, pips 1-6 |
| Cup | For shaking and concealing (some games) |
| Scorecard | Paper tracking (some games) |
| Chips/tokens | For betting (some games) |

</div>

<div class="section">

## Games

- [Bunco](games/bunco/) — Social dice game for 12 players (3 tables of 4). 6 rounds targeting numbers 1–6. Roll all three matching = Bunco. Fast, no strategy.
- [Craps](games/craps/) — The casino dice game. Two dice; come-out 7/11 wins, 2/3/12 loses, else set Point. Make Point before 7 to win.
- [Farkle](games/farkle/) — 6 dice, press-your-luck scoring. Set aside combinations, keep rolling, or bank. Bust and lose it all.
- [Liar's Dice](games/liars-dice/) — Hidden dice under cups. Bid on total faces across all players. Challenge or be challenged.
- [Yahtzee](games/yahtzee/) — 5 dice, 13 scoring categories, three rolls per turn. Fill every box. Highest total wins.

</div>

<div class="section">

## Attribution

All games in this hub are public domain or use mechanics in the public domain. Individual attribution in each game entry.

</div>
