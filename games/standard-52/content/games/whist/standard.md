---
title: Whist
slug: whist
board: none
players: "4"
parent: standard-52
win: First partnership to win a rubber (best of 3 games) or reach 5 points in Short Whist
special: "Classic 4-player partnership trick-taking game and direct ancestor of Bridge. No bidding — trump is determined by the last card dealt. 13 tricks per hand; 1 point per trick above 6. Dominant card game in Europe and North America from 1750 to ~1900."
published: true
engine:
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
---

## Whist

Whist is a classic 4-player partnership trick-taking game played with a standard 52-card deck. It is the direct ancestor of Bridge — Bridge added bidding and a dummy hand to Whist's core structure. Whist dominated European and North American card culture from approximately 1750 to 1900, documented in Edmond Hoyle's 1742 *A Short Treatise on the Game of Whist*.

{{svg:whist-board.svg "Whist — table layout"}}

### Teams

Four players in two partnerships: North/South vs East/West. Partners sit opposite each other.

### The Deal

The entire deck is dealt clockwise, one card at a time, to all four players (13 cards each). The **last card dealt** — given to the dealer — is turned face-up to establish the **trump suit**, then taken into the dealer's hand. Trumps beat all non-trump cards.

### The Play

The player to the dealer's left leads any card. Each player must **follow suit** if possible. If unable to follow suit, a player may play any card (including a trump). The highest card of the led suit wins the trick unless a trump was played — the highest trump wins. The winner of each trick leads the next.

### Scoring

A **book** is the first 6 tricks won by a partnership. Points are scored only for tricks **above the book**:
- Each trick above 6 = **1 point**
- Maximum: 7 points per hand (all 13 tricks)

**Honors (optional):** The four highest trumps (Ace, King, Queen, Jack) are honors. A partnership holding 3 of the 4 honors scores 2 points; holding all 4 scores 4 points (in some rules, 2 points). Honor scoring must be agreed before the game.

### Game and Rubber

**Short Whist:** First partnership to **5 points** wins the game.

**Long Whist:** First partnership to **9 points** wins.

A **rubber** is the best of three games. The first partnership to win two games wins the rubber.

### Variants

- **Long Whist:** 9-point game
- **Short Whist:** 5-point game (standard above)
- **Bid Whist:** adds a bidding round before play, transitional form toward Bridge
