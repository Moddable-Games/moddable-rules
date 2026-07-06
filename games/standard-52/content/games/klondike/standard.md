---
title: Klondike Solitaire
slug: klondike
board: "none"
players: "1"
parent: standard-52
win: "Move all 52 cards to the four foundations, sorted by suit from Ace to King"
special: "Classic patience game. Seven tableau columns; cards dealt face-down with top card revealed. Draw 1 or Draw 3 from stock. Build tableau in descending rank, alternating colors."
engine:
  players: [player1]
  components:
    deck:
      type: standard-52
      count: 1
      jokers: 0
published: false
---

## Klondike Solitaire

Klondike is the most widely played solitaire (patience) game in the world and the game most people mean when they say “Solitaire.” The goal is to move all 52 cards to four foundation piles, one per suit, built from Ace to King.

### Setup

**Foundations (4 piles, top right):** Start empty. Each foundation is built up in suit from Ace (↓) to King (↑). Completed foundation: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K.

**Tableau (7 columns):**
- Column 1: 1 card (face-up)
- Column 2: 2 cards (1 face-down, 1 face-up)
- Column 3: 3 cards (2 face-down, 1 face-up)
- Column 4: 4 cards (3 face-down, 1 face-up)
- Column 5: 5 cards (4 face-down, 1 face-up)
- Column 6: 6 cards (5 face-down, 1 face-up)
- Column 7: 7 cards (6 face-down, 1 face-up)

Total dealt: 28 cards. The remaining 24 cards form the **stock**.

### Building the Tableau

Face-up cards in the tableau may be moved according to these rules:

- Cards are stacked in **descending rank** (King = high, Ace = low).
- Colors must **alternate**: a red card on a black card, or a black card on a red card.
- A face-up card (or sequence of face-up cards) may be moved onto any tableau card that is one rank higher and of the opposite color.
- An empty tableau column may only receive a **King** (or a sequence headed by a King).
- When a face-down card is exposed (all face-up cards above it have been moved), it is turned face-up.

Example: A red 7 may be placed on a black 8. A black 6 may then be placed on that red 7, and so on.

### The Stock and Waste Pile

When no more moves are available in the tableau, the player draws from the stock.

**Draw 1:** Flip one card at a time from the stock to the waste pile. The top card of the waste pile is always available to play.

**Draw 3:** Flip three cards at a time from the stock to the waste pile. Only the top card of the waste pile is available. This is the traditional rule and makes the game significantly harder.

**Recycling the stock:** When the stock is exhausted, flip the waste pile over (without shuffling) to form a new stock and continue drawing. In classic Klondike, the stock may be recycled an unlimited number of times (infinite pass) — though many competitive versions limit redeals to 3 passes (Draw 3) or 1 pass (Draw 1) for scoring purposes.

### Moving to Foundations

Any available Ace may be moved to an empty foundation at any time. Subsequent cards move to a foundation only when they are one rank higher than the top card of that foundation and of the same suit.

Cards may be moved from foundations back to the tableau if needed, though this is rarely advantageous.

### Winning

The game is won when all 52 cards are on the four foundations (each foundation completed from A to K).

### Scoring (Microsoft / Classic)

Many digital implementations use a point system:

| Action | Points |
|---|---|
| Moving a card from stock to tableau | 5 |
| Moving a card to a foundation | 10 |
| Flipping a face-down tableau card | 5 |
| Moving a card from waste to tableau | 5 |
| Moving a card back from foundation to tableau | ∡5 |
| Each 10 seconds elapsed | ∡2 (timed scoring) |

Untimed scoring: Bonus = 700 − (total time in seconds), multiplied by some factor in some implementations.

### Variants

**Vegas Scoring:** Players “buy” a deck for $52 and earn $5 per card moved to the foundations (maximum $260). Recycling the stock costs $0 (Draw 1) or is not permitted (Draw 3). Net profit/loss is tracked.

**Thoughtful Klondike:** All face-down cards are revealed at the start. Useful for analysis; reduces luck significantly.

**Double Klondike:** Two decks, 9 or 10 tableau columns, 8 foundations. Harder; longer game.

### Attribution

Klondike. Name associated with the Klondike Gold Rush (1896–1899); exact origin unclear. Popularized globally through Microsoft Solitaire (Windows 3.0, 1990). Public domain rule set.
