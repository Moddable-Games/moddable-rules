---
title: Hearts
slug: hearts
board: "none"
players: "4"
parent: standard-52
win: "Lowest score when any player reaches 100 points"
special: "Trick-avoidance game. Hearts and the Queen of Spades are penalty cards. Shooting the Moon scores all 26 points against your opponents."
engine:
  players: [player1, player2, player3, player4]
  components:
    deck:
      type: standard-52
      count: 1
      jokers: 0
published: false
---

## Hearts

Hearts is a trick-avoidance game for four players. The goal is to end the game with the lowest score. Hearts cards and the Queen of Spades carry penalty points — players want to avoid winning tricks containing these cards. However, a player who collects every penalty card in a single hand “Shoots the Moon” and scores zero while opponents each receive 26 points.

### Setup

- 4 players. Standard 52-card deck, no jokers.
- Shuffle and deal all 52 cards (13 per player).

### Passing

Before play begins, each player selects 3 cards from their hand and passes them to another player. The passing direction rotates each hand:
- Hand 1: Pass to the left
- Hand 2: Pass to the right
- Hand 3: Pass across (opposite player)
- Hand 4: No passing (hold all cards)
- Repeat cycle.

Players receive cards from the appropriate direction before looking at what they were passed.

### Lead

The player holding the 2 of Clubs leads it to begin the first trick. In subsequent tricks, the winner of the previous trick leads.

### Following Suit and Breaking Hearts

- **Must follow suit** if able. If unable to follow suit, any card may be played.
- **Hearts may not be led** until Hearts has been “broken” — that is, until a Heart has been discarded (played off-suit) on a previous trick. Exception: if a player has only Hearts remaining, they may lead a Heart regardless.
- **First trick restriction:** No penalty cards (Hearts or Queen of Spades) may be played on the first trick, unless the player has no Clubs.

### Trick Winning

Highest card of the led suit wins the trick. There is no trump suit. The winner of each trick collects the cards and leads the next trick.

### Card Rankings

Within each suit (high to low): A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2.

### Penalty Cards

| Card | Penalty Points |
|---|---|
| Each Heart | 1 point |
| Queen of Spades | 13 points |
| **Total per hand** | **26 points** |

The Jack of Diamonds (“Parker” or “Black Maria” variant) sometimes awards −10 points to whoever wins it — this is optional and not part of the standard rules.

### Shooting the Moon

If one player collects ALL 13 Hearts AND the Queen of Spades in a single hand, that player “Shoots the Moon.” Rather than scoring 26 points, the shooter may choose:
- Add 26 points to each opponent’s score (shooter scores 0), OR
- Subtract 26 points from their own score.

The shooter selects which option is more advantageous. If the shooter’s score would go below zero with the subtraction option, it becomes 0.

**Shooting the Sun (optional):** If the same player also wins all 13 tricks (not just the penalty cards), they score 0 and all others receive 52 points (double the moon). This is an optional rule.

### End of Hand

After all 13 tricks are played, each player scores penalty points for the penalty cards in their won tricks. Scores are cumulative across hands.

### End of Game

The game ends after the hand in which any player reaches 100 points or more. The player with the lowest score at that point wins. If two or more players tie for lowest, play continues until the tie is broken.

### Variations

**Omnibus Hearts:** Adds the Jack of Diamonds as a bonus card (player who wins it subtracts 10 from their score). Makes Shooting the Moon include winning the Jack of Diamonds too for the full bonus.

**3-Player Hearts:** Remove the 2 of Clubs from the deck (deal 17 cards each). The player with the 2 of Diamonds leads.

**5-Player Hearts:** Remove the 2 of Clubs and 2 of Diamonds (deal 10 cards each).

### Attribution

Hearts. Traditional American card game, widely popular from the 19th century onward. Public domain. Standard rules confirmed from Pagat.com.
