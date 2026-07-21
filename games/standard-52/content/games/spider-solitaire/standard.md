---
title: Spider Solitaire
slug: spider-solitaire
board: none
players: "1"
parent: standard-52
win: Complete all 8 sequences (King down to Ace in the same suit)
special: "Two-deck solitaire with 10 tableau columns. Complete in-suit sequences of 13 cards (King to Ace) are automatically removed. Three difficulty levels: 1-suit (easy), 2-suit (medium), 4-suit (hard). The 4-suit version is highly challenging. One of the most popular computer solitaire games."
published: true
engine:
  components:
    deck:
      type: standard-52
      count: 2
      jokers: 0
  topology:
    type: tableau
    layout: tableau
    columns: 10
    cascade: [6, 5, 5, 6, 5, 5, 6, 5, 5, 6]
    foundations: 8
  deal:
    minPlayers: 1
    maxPlayers: 1
    defaultPlayers: 1
    perPlayer: 0
    community: 0
    remainder: draw
---

## Spider Solitaire

Spider Solitaire is a two-deck solitaire game played across 10 tableau columns. Complete 13-card sequences in the same suit (King down to Ace) are removed from play. It is one of the most widely played solitaire variants, popularised by its inclusion in Microsoft Windows.

{{svg:spider-solitaire-board.svg "Spider Solitaire — table layout"}}

### Decks and Difficulty

Uses **2 standard 52-card decks** (104 cards total). Three difficulty settings:
- **1-suit (easy):** only rank matters; suit is ignored for all rules
- **2-suit (medium):** two suits in play
- **4-suit (hard):** all four suits; full rules below

### Layout

Deal **54 cards** face-down into 10 tableau columns:
- Columns 1–4: 6 cards each
- Columns 5–10: 5 cards each

Flip the **top card of each column face-up**. The remaining **50 cards** form the stock in 5 groups of 10.

### Tableau Rules

Only **face-up cards at the bottom of a column** are in play. Face-down cards are revealed when the card above them is moved.

You may:
- Move a **single face-up card** onto any face-up card that is **one rank higher** (suit need not match for placement)
- Move a **same-suit descending sequence** (e.g., Q♥–J♥–10♥) as a unit onto a card one rank higher than the sequence's top card
- Move any card or same-suit sequence to an **empty column**

### Completing a Sequence

When a complete 13-card sequence in the **same suit** (King at bottom through Ace on top) is formed in a column, it is immediately removed as a completed sequence. 8 completed sequences = win.

### The Stock

At any time, you may deal **10 cards** from the stock — one face-up to each column. The stock may only be dealt when no column is empty. Five stock deals are available (50 cards).

### Winning

All 8 sequences completed and removed from play.
