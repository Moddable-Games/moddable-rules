---
title: Oicho-Kabu
slug: oicho-kabu
board: "none"
players: "2–8"
parent: flower-48
win: "Closest hand value to 9 beats the banker"
special: "A betting game using Hanafuda’s month numbers, not suit imagery. Closest to 9 wins. Similar to Baccarat."
engine:
  players: [banker, player1, player2, player3]
  components:
    cards:
      deck: hanafuda-48
      values: month-numeric
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
published: true
---

## Oicho-Kabu

A Japanese betting and gambling card game played with Hanafuda (or dedicated Kabufuda) cards. Unlike the matching games, Oicho-Kabu uses the cards’ **month numbers as numeric values**, not their suit imagery. The goal is to hold cards whose values sum to as close to **9** as possible — the word *Kabu* (カブ) means 9.

The game is structurally similar to Baccarat and is the origin of the word *Yakuza* (literally “8-9-3,” a losing hand).

{{svg:oicho-kabu-board.svg “Oicho-Kabu — table layout”}}

### Card Values

Each card’s value is the numeric value of its month:

| Month | Value |
|-------|-------|
| January | 1 |
| February | 2 |
| March | 3 |
| April | 4 |
| May | 5 |
| June | 6 |
| July | 7 |
| August | 8 |
| September | 9 |
| October | 10 → 0 |
| November | 11 → 0 |
| December | 12 → 0 |

All four cards in a suit share the same value. October, November, and December count as zero.

Hand value = sum of all card values **mod 10**. Only the final digit matters.

### Setup

One player is the **banker** (parent / oya). All other players are punters (ko). Players place bets against the banker before cards are dealt.

Shuffle all 48 cards. Deal **two cards face-down** to each player and the banker.

### Play

1. Players look at their two cards privately and calculate their hand value (sum mod 10).
2. Each player may request a **third card** (face-up) to improve their hand, or stand.
3. The banker also has the option to draw a third card.
4. All hands are revealed. The player closest to **9** beats the banker.
5. An exact tie goes to the banker.

### Special Hands (Yaku)

Certain hand combinations pay out at a bonus multiplier:

| Yaku | Condition | Payout |
|------|-----------|--------|
| Kabu ・カブ | Hand = 9 (two cards) | 2× |
| Oicho ・おいちょ | Hand = 8 (two cards) | 2× |
| Shichisan ・七三 | Two cards totaling 7 and 3 (i.e. one 7-value + one 3-value) | varies |
| Arashi ・嵐 (Storm) | Three cards of the same value (triplet) | 3× |
| Shippin ・四アイテン | Hand = 4 | varies |
| Yakuza ・ヤクザ | Hand = 8-9-3 specific combo (original meaning) | loses |

*Exact payout rules and yaku lists vary significantly by house rules. The above represents the most commonly documented version.*

### Settlement

All players who beat the banker receive their bet back plus an equal amount from the banker. Players who tie or lose pay their bet to the banker. Special hands pay at the applicable multiplier.

### Attribution

Oicho-Kabu ・おいちょかぶ. Traditional Japanese card game. Public domain. Sources: Wikipedia *(Oicho-Kabu)*; Pagat.com *(Hanafuda)*. Note: detailed payout tables and regional yaku variations require a Japan-specific primary source for full accuracy.
