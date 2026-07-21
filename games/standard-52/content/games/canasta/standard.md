---
title: Canasta (Classic)
slug: canasta
board: "none"
players: "4"
parent: standard-52
win: "First partnership to 5000 points"
special: "Partnership melding game using two standard decks plus jokers (108 cards). Melds of 7+ cards form canastas. Wild cards (jokers and 2s) may substitute. Black 3s block the discard pile."
engine:
  players: [player1, player2, player3, player4]
  components:
    deck:
      type: standard-52
      count: 2
      jokers: 4
  topology:
    type: tableau
    layout: radial
  deal:
    minPlayers: 4
    maxPlayers: 4
    defaultPlayers: 4
    perPlayer: 11
    community: 0
    remainder: draw
  partnerships: [[player1, player3], [player2, player4]]
published: true
---

## Canasta (Classic)

Canasta is a partnership rummy-style game for four players (two teams of two). The game uses two standard 52-card decks plus 4 Jokers (108 cards total). Players build melds — groups of three or more cards of the same rank — aiming to form Canastas (melds of 7 or more cards). The first partnership to reach 5000 points wins.

Canasta originated in Uruguay in the 1940s and became internationally popular in the 1950s.

{{svg:canasta-board.svg "Canasta — table layout"}}

### Card Values

| Card | Point Value |
|---|---|
| Joker | 50 |
| Ace or 2 | 20 |
| K, Q, J, 10, 9, 8 | 10 |
| 7, 6, 5, 4 | 5 |
| Black 3 (bonus/block card) | 5 |
| Red 3 (bonus card) | 100 (or 200 if all four are held) |

### Wild Cards

**Wild cards:** All four Jokers and all eight 2s (Deuces) are wild. Wild cards may substitute for any natural card in a meld.

**Rules for wild cards in melds:**
- A meld may contain at most 3 wild cards.
- A meld must always contain more natural cards than wild cards (e.g., 2 natural + 1 wild is fine; 2 natural + 2 wild is the maximum and only legal if there are 3 natural cards total).

### Special Cards

**Red 3s:** When drawn or dealt, a Red 3 must be placed face-up on the table immediately and replaced by drawing from the stock. Red 3s score a bonus at the end of the game (100 each; 800 for all four held by one partnership). Red 3s count for the partnership only if they have at least one canasta; otherwise they count against.

**Black 3s:** May not be melded during play (except as the final card in a hand, see Going Out). Black 3s may be discarded to freeze the pile for one turn against the next player (a one-turn block). Cannot be used as wild cards.

### Setup

- 4 players in fixed partnerships. Partners sit opposite.
- Shuffle both decks together with all 4 Jokers for a 108-card deck.
- Deal 11 cards each (44 total). Place the remaining cards as the stock.
- Turn over the top card to begin the discard pile (the pack).
- If the initial upcard is a Joker, 2, or Red 3: bury it in the stock and turn another.
- If the initial upcard is a Black 3: the first player may not pick up the pack on their first turn; the Black 3 remains.

### Taking a Turn

Each turn consists of:
1. **Draw:** Take the top card from the stock OR take the entire discard pile (the pack) — subject to restrictions below.
2. **Meld:** Optionally create or extend melds on the table. Red 3s must be immediately placed.
3. **Discard:** Place one card face-up onto the discard pile. (Exception: do not discard when going out by melding all cards.)

### Taking the Pack (Discard Pile)

A player may take the entire discard pile if:
- The top card of the pile is a natural card (not wild, not Black 3).
- The player holds at least two natural cards of the same rank as the top card and can immediately use them to meld with the top card.
- The partnership has already made its initial meld (see Initial Meld Requirement).

**Frozen Pack:** The discard pile is frozen when a wild card or Red 3 has been placed on it. To take a frozen pack, the player must hold two natural cards matching the top card (not just one plus a wild) and the rules above still apply. The pile unfreezes when picked up.

### Initial Meld Requirement

A partnership’s first meld(s) of the game must meet a minimum point value based on their current score:

| Partnership’s current score | Minimum initial meld value |
|---|---|
| Negative | 15 |
| 0–1499 | 50 |
| 1500‒2999 | 90 |
| 3000+ | 120 |

Once the initial meld is made, subsequent melds have no minimum.

### Melds

A meld is three or more cards of the same rank, placed face-up in front of the partnership. Valid ranks: 4 through Ace (2s and Jokers are wild; 3s are special). Natural melds contain no wild cards. Mixed melds contain 1–3 wild cards.

Partners share their melds: either partner may extend any of their partnership’s melds on their turn.

### Canastas

A **Canasta** is a complete meld of 7 or more cards. It is squared into a pile:
- **Natural Canasta (Clean):** 7 or more natural cards (no wild cards). Marked with a red card on top. Bonus: **500 points**.
- **Mixed Canasta (Dirty):** 7 or more cards including at least one wild card. Marked with a black card on top. Bonus: **300 points**.

A partnership must have at least one complete Canasta to go out.

### Going Out

A player goes out by melding all remaining cards from their hand (including the final discard, or by melding all without discarding). The partnership must have at least one Canasta.

**Asking permission:** A player may ask their partner “Can I go out?” before going out; the partner must answer yes or no, and the decision is binding. This optional courtesy prevents surprise endings.

**Going out concealed:** If a player melds their entire hand in one turn without having previously melded any cards, they have gone out concealed. Bonus: **100 extra points** (in addition to the standard 100 go-out bonus).

### Scoring (End of Hand)

**Going-out bonus:** 100 points.

Each partnership scores:
- Value of all cards in completed melds and canastas
- Canasta bonuses (500 per natural, 300 per mixed)
- Red 3 bonuses (if at least one canasta held)
- Going-out bonus (if applicable)

Minus:
- Value of cards remaining in hand (cards not melded)
- Red 3 penalties (if no canasta held, Red 3s count against)

### End of Game

The first partnership to accumulate 5000 or more points at the end of a hand wins.

### Attribution

Canasta. Originated in Montevideo, Uruguay, approximately 1939. Popularized internationally in the 1950s. Standard North American rules confirmed from Pagat.com and Hoyle’s Rules of Games. Public domain rule set.
