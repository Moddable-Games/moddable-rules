---
title: Euchre
slug: euchre
board: "none"
players: "4"
parent: standard-52
win: "First partnership to 10 points"
special: "Partnership trick-taking on a 24-card deck (9 through Ace). Trump is selected each round via an upcard and bidding. The Right Bower (Jack of trump) is the highest card; Left Bower (Jack of same-color suit) is second-highest."
engine:
  players: [player1, player2, player3, player4]
  components:
    deck:
      type: standard-52
      count: 1
      jokers: 0
      subset: [9, 10, J, Q, K, A]
  partnerships: [[player1, player3], [player2, player4]]
published: true
---

## Euchre

Euchre is a partnership trick-taking game for four players using only the 24 highest-ranked cards from a standard deck (remove all 2s through 8s). It is especially popular in the American Midwest and Ontario, Canada. The critical Euchre rule is the **Bower system**: the two Jacks of the trump suit (and its same-color counterpart suit) are the two most powerful cards in the game.

### Deck

Remove all 2s, 3s, 4s, 5s, 6s, 7s, and 8s. Play with the remaining 24 cards:

| Suit | Cards |
|---|---|
| Each of 4 suits | 9, 10, J, Q, K, A |

### Partnerships and Seating

- 4 players in fixed partnerships: Player 1 & Player 3 vs. Player 2 & Player 4.
- Partners sit opposite each other.
- Dealer rotates clockwise each hand.

### Deal

Deal 5 cards to each player (20 total) in two rounds of dealing — typically 2–3 or 3–2 cards per player per round (exact dealing pattern is regional but the result is always 5 cards each).

Turn the 21st card face-up on the table to propose trump. The remaining 3 cards are set aside (the kitty or blind) and are not used.

### Selecting Trump

**Round 1:** Starting with the player left of the dealer, each player may **order up** (tell the dealer to take the upcard, making its suit trump) or **pass**. If a player orders up:
- The dealer takes the upcard into hand and discards one card face-down (the kitty).
- The suit of the upcard becomes trump for this hand.
- The player who ordered up (or their partner) becomes the **maker**.

**Round 2 (if all pass in Round 1):** The upcard is turned face-down and play proceeds to Round 2. Starting with the player left of the dealer, each player may name any suit (except the suit of the turned-down upcard) as trump or pass. The dealer must name trump if all others pass (**stuck the dealer**). The player who names trump becomes the maker.

### Trump and the Bower System

Once trump is set, the trump suit card rankings change:

| Card | Rank (in trump suit) |
|---|---|
| **Right Bower** — Jack of trump suit | Highest trump card |
| **Left Bower** — Jack of the same-color suit (e.g., if trump is Hearts, the Jack of Diamonds is Left Bower) | Second-highest trump card; treated as trump (not as its original suit) |
| Ace of trump | Third-highest trump card |
| K, Q, 10, 9 of trump | In descending order |

**The Left Bower belongs to the trump suit for all purposes** — it is played as trump, not as its original suit. Its original suit effectively loses its Jack for that hand.

**Non-trump suit rankings (high to low):** A, K, Q, J (if not Left Bower), 10, 9.

### Playing Tricks

The player to the left of the dealer leads the first trick. Players must follow suit if able. If unable, they may play any card including trump. The highest card of the led suit wins the trick, unless trump has been played, in which case the highest trump wins.

The winner of each trick leads the next.

### Going Alone

When a player orders up or names trump, they may declare “Going Alone” before the first lead. Their partner sits out the hand (discards hand face-down). The lone player competes against both opponents.

If a lone player wins all 5 tricks, they score 4 points. Winning 3–4 tricks: 1 point. Losing: opponents score 2 points.

### Scoring

| Result | Points |
|---|---|
| Makers win 3 or 4 tricks | 1 point |
| Makers win all 5 tricks (March) | 2 points |
| Makers go alone and win 3–4 tricks | 1 point |
| Makers go alone and win all 5 tricks | 4 points |
| Makers win fewer than 3 tricks (Euchre) | Opponents score 2 points |

### First to 10 Points

The first partnership to reach 10 points wins the game. Scoring is tracked with cards (5 of a suit covering a 6, or a 3 and 4 held together) or any scoring method agreed upon.

### Variants

**Bid Euchre (Pepper):** Players bid the exact number of tricks they expect to take; no upcard / Round 2 selection. Wider bidding options.

**Stick the Dealer:** A mandatory rule in some regions — if all three players pass in Round 2, the dealer is forced to name trump (cannot pass). This prevents passed-out hands and is common in North American play.

**No-trump declaration:** In some variants, players may call “No Trump” in Round 2, in which case there is no trump suit for the hand.

### Attribution

Euchre. Traditional card game, likely descended from the Alsatian game Juckerspiel. Widely played in North America since the 19th century. Public domain rule set confirmed from Pagat.com.
