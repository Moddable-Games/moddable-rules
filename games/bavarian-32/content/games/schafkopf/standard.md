---
title: Schafkopf
slug: schafkopf
board: none
players: "4"
parent: bavarian-32
win: Declaring side scores 61 or more card points (out of 120)
special: "Bavaria's defining card game. 4 players, 32-card Bavarian deck, 8 cards each (all dealt, no cards set aside). Permanent trumps: all 4 Obers, all 4 Unters, then the Heart suit. Players bid to be solo declarer or partner caller. The declaring side needs 61+ of 120 card points to win. Core of Bavarian card culture."
published: true
engine:
  components:
    deck:
      type: bavarian-32
      count: 1
      jokers: 0
  topology:
    type: tableau
    layout: radial
  deal:
    minPlayers: 4
    maxPlayers: 4
    defaultPlayers: 4
    perPlayer: 8
    community: 0
---

## Schafkopf

Schafkopf (pronounced SHAHF-kopf, meaning "Sheepshead") is the defining card game of Bavaria, Germany. Played seriously in clubs, tournaments, and casual settings throughout southern Germany, it is one of the most culturally embedded regional card games in Europe. The American game **Sheepshead** is derived from Schafkopf brought by German immigrants.

### The Deck

32-card Bavarian pattern deck: 4 suits × 8 ranks. The suits are Acorns, Leaves, Hearts, and Bells (equivalent to Clubs, Spades, Hearts, and Diamonds in French-suited decks). The ranks in each suit: Ace (Sau), King, Ober, Unter, 10, 9, 8, 7.

Card point values:

| Card | Points |
|---|---|
| Ace (Sau) | 11 |
| 10 | 10 |
| King | 4 |
| Ober | 3 |
| Unter | 2 |
| 9, 8, 7 | 0 |

Total card points in the deck: **120**.

### Dealing

All 32 cards are dealt to the 4 players — **8 cards each**. No cards are set aside. Deal rotates clockwise each hand.

### Permanent Trump Hierarchy

Unlike Skat, the top 8 trumps are always fixed regardless of the declared suit or game type:

1. Ober of Acorns (highest trump)
2. Ober of Leaves
3. Ober of Hearts
4. Ober of Bells
5. Unter of Acorns
6. Unter of Leaves
7. Unter of Hearts
8. Unter of Bells (lowest of the 8 Matadors)

Below the Matadors, the **Heart suit** (or the solo-declared suit) forms the remaining trumps: Ace, 10, King, 9, 8, 7.

**Total trumps in a normal Rufspiel:** 8 Matadors + 6 Hearts = **14 trumps**.

### Game Types

**Rufspiel (Partner Game) — most common:** The declarer calls an Ace of a non-Heart suit (e.g., "I call the Ober of Leaves" or "I call the Ace of Bells"). The player holding that Ace is the secret partner. The declarer and partner work together to score 61+ card points, without revealing their partnership. The called Ace must be played if that suit is led, unless the holder plays a trump instead. Worth 2 game points per opponent.

**Solo:** One player against three, with a named trump suit replacing Hearts as the lower trumps. The 8 Matadors remain fixed. Worth 3 game points per opponent.

**Wenz (Wenzel):** Only the four Unters are trump — no Obers, no suit trumps. Solo play. Worth 5 game points per opponent.

**Farbsolo (Colour Solo):** Solo with a named non-Heart trump suit. Worth 3 game points.

### Play

The player to the dealer's left leads the first trick. Players must **follow suit** if possible; if unable, they may play any card. The highest trump wins a trump trick; the highest card of the led suit wins a plain-suit trick. The winner of each trick leads the next.

### Scoring

After 8 tricks, the declaring side's total card points determine the result:

| Card points | Result |
|---|---|
| 61–90 | Normal win for declarers |
| 91–119 | **Schneider** — declarers win double |
| 120 | **Schwarz** — declarers win triple (all tricks taken) |
| 30–60 | Schneider — defenders win double |
| 0–29 | Schwarz — defenders win triple |
| 31–60 | Normal win for defenders |

Game points are settled per player at the table (losers pay winners). A running score is kept across hands.

### Attribution

Traditional Bavarian card game. Rules documented per the Bayerischer Schafkopf-Verein (Bavarian Schafkopf Association) standard ruleset.
