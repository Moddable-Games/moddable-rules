---
title: Go-Stop
slug: go-stop
board: none
players: "2–3"
parent: flower-48
win: First player to reach an agreed point total (typically 3 or 7 points) and declare Stop
special: "Korean hanafuda variant played with the Hwatu deck. The most popular card game in South Korea. Match cards from hand to field by month; collect scoring combinations. Core mechanic: after reaching the threshold, declare 'Stop' to collect winnings or 'Go' to press on for bigger rewards at the risk of penalty if another player stops first."
published: true
engine:
  components:
    cards:
      deck: hanafuda-48
  topology:
    type: tableau
    layout: radial
  deal:
    minPlayers: 2
    maxPlayers: 3
    defaultPlayers: 2
    perPlayer: 7
    community: 6
    remainder: draw
---

## Go-Stop

Go-Stop (고스톱, also called Godori or Hwatu) is the most popular card game in South Korea, played with a Hwatu deck — the Korean version of the Japanese hanafuda deck. Like Koi-Koi, it uses matching by month and collection of scoring combinations. Its defining mechanic is the **Go/Stop decision**: after reaching a scoring threshold, the current player must choose whether to declare "Stop" (take winnings) or "Go" (continue for bigger rewards at increasing risk).

{{svg:go-stop-board.svg "Go-Stop — table layout"}}

### The Deck

48 Hwatu cards in 12 suits (months), 4 cards per month. Card types by value:
- **Bright (광, Gwang):** 5 cards, one each in January (Pine), March (Cherry Blossom), August (Full Moon), November (Rain), and December (Phoenix)
- **Animal (열끻, Yeolggeut):** 9 cards
- **Ribbon (때, Ddi):** 10 cards, in three types: Red Poetry (Jan, Feb, Mar), Blue (Jun, Sep, Oct), and Plain
- **Junk (피, Pi):** 24 cards; some months have a bonus double-junk card worth 2 junk

### The Deal (3-Player)

Each player is dealt **7 cards**. **6 cards** are placed face-up on the field. Remaining cards form the draw pile.

### The Turn

1. **Play a card from hand:** if it matches a field card's month, capture both; if no match, place it on the field
2. **Draw from the pile:** if the drawn card matches a field card's month, capture both; if no match, place it on the field
3. **Check for Go/Stop:** if the player now meets the scoring threshold, they must declare Go or Stop

### Special Captures

**Ttadak (따닥):** if the card played from hand AND the drawn card both match field cards of the **same month** (capturing two separate pairs in one turn), the player earns a bonus and each opponent pays 1 chip penalty.

**Triple field capture:** if three cards of the same month are already on the field when you play the fourth, you capture all four.

### Scoring Combinations

**Brights:**
- 3 non-Rain Brights = 3 pts
- 3 Brights including Rain (November) = 2 pts
- 4 Brights = 4 pts
- 5 Brights = 15 pts

**Animals:**
- 5 animals = 1 pt; +1 pt per additional animal
- Godori (고도리): Cuckoo (February) + Bush Warbler (April) + Geese (August) = 5 pts

**Ribbons:**
- 5 ribbons = 1 pt; +1 pt per additional ribbon
- Red Poetry ribbons (Jan + Feb + Mar) = 3 pts
- Blue ribbons (Jun + Sep + Oct) = 3 pts

**Junk:**
- 10 junk cards = 1 pt; +1 pt per additional junk
- Double-junk cards count as 2

### The Go/Stop Decision

When a player reaches **3 points** (or the agreed threshold), they must announce:
- **"Stop" (스톱):** collect winnings. Other players pay the stopping player. Round ends.
- **"Go" (고):** continue. Scoring accumulates. A player who has said "Go" cannot later collect fewer points than accrued.

**Risk of "Go":** If another player stops first, or the draw pile is exhausted before the Go-player stops, the player who said "Go" pays **double penalties** to the winner. Each additional "Go" declaration multiplies the payout by 2.

If the "Go" player successfully stops later without another player stopping first, they collect at a multiplied rate.

### Penalties

Other players pay the winner chips based on the winner's total points. Bonus payments apply for winning with 7+ points, for opponents holding only junk, and for multiple "Go" declarations.

### 2-Player Go-Stop

Each player receives **10 cards**; 8 cards are placed on the field. Otherwise identical to 3-player.
