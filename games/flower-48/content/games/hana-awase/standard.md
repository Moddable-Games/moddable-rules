---
title: Hana-Awase
slug: hana-awase
board: "none"
players: "2–4"
parent: flower-48
win: "Highest captured value after all cards are played"
special: "The base Hanafuda matching game. No yaku — card values only. Simplest entry point to the deck."
engine:
  players: [player1, player2]
  components:
    cards:
      deck: hanafuda-48
published: true
---

## Hana-Awase

The foundational Hanafuda card-matching game from which Koi-Koi and other variants are derived. Players match cards by suit (month) and collect them; the player with the highest captured value at the end of the round wins.

### Setup

**2 players:** deal 8 cards to each player, 8 to the field, 24 as draw pile.
**3 players:** deal 7 cards to each player, 6 to the field, 27 as draw pile.
**4 players (partnership):** deal 5 cards to each, 8 to the field, 20 as draw pile.

### Turn Structure

Identical to Koi-Koi without the yaku declaration step:

1. Play a card from hand to the field. If it matches a field card by suit, capture both.
2. Flip the top draw card. If it matches a field card, capture both.
3. Unmatched cards remain in the field.

Repeat until all hands and the draw pile are exhausted.

### Card Values

| Type | Points |
|------|--------|
| Bright | 20 |
| Animal | 10 |
| Ribbon | 5 |
| Plain | 1 |

Sum all captured card values. Highest total wins the round.

**Scoring benchmark:** the full deck totals 264 points (5×20 + 9×10 + 10×5 + 24×1). In a two-player game, each player can score up to 132 points. Scores above 132 are a win; below 132 is a loss.

### Attribution

Hana-Awase ・花合わせ. Traditional Japanese card game. Rules in the public domain. Source: Pagat.com *(Hanafuda)*.
