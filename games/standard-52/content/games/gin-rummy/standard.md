---
playable: true
title: Gin Rummy
slug: gin-rummy
board: "none"
players: "2"
parent: standard-52
win: "First player to 100 points"
special: "Draw-and-discard melding game. Knock when deadwood is 10 or less. Going Gin (zero deadwood) earns a bonus. Undercut if the knocker's deadwood doesn't beat the opponent's."
disputed:
  - feature: "Bonus values"
    readings:
      - source: "Pagat.com, Gin Rummy (John McLeod, © 1996–2024)"
        says: "gin 20, undercut 10, box 20"
        describes: "'A player who goes gin scores a bonus 20 points'; 'the knocker's opponent scores the difference between the counts plus a 10 point bonus'; 'each player adds a further 20 points for each hand they won.' It adds: 'Some play that the bonus for an undercut, the bonus for going gin, and the box bonus for each game won are all 25 points.'"
      - source: "Wikipedia, Gin rummy"
        says: "gin 25, undercut 25, big gin 31, box 25"
        describes: "'a bonus of 25 points plus the entire count of deadwood'; 'an undercut bonus of 25 points'; Big Gin '31 points plus entire count of deadwood'; 'For every hand a player won during the game, 25 points is added.'"
    engine: "gin 25, undercut 25, big gin 31, box 25"
    because: "These are the values this page gives, and Pagat itself lists 25 for all three as a common way to play. Big Gin is not in Pagat's main rules."
  - feature: "The shutout"
    readings:
      - source: "Pagat.com, Gin Rummy (John McLeod, © 1996–2024)"
        says: "the game bonus becomes 200"
        describes: "'If the loser failed to score anything at all during the game, then the winner's bonus is 200 points.'"
      - source: "Wikipedia, Gin rummy"
        says: "the hand points are doubled"
        describes: "'the points for each hand are doubled before adding the line bonus' if one player wins every hand."
    engine: "the game bonus becomes 200"
    because: "This page gives an additional 100 for a shutout, making the game bonus 200, which is Pagat's rule."
  - feature: "Who deals the next hand"
    readings:
      - source: "Pagat.com, Gin Rummy (John McLeod, © 1996–2024)"
        says: "the winner deals"
        describes: "'the dealer is the winner of the previous hand' but 'Some books give the rule that the loser of each hand deals the next.'"
      - source: "Wikipedia, Gin rummy"
        says: "the deal alternates"
        describes: "'Dealership alternates from round to round.'"
    engine: "the winner deals"
    because: "This page does not say; the engine follows Pagat's main rule. After a drawn hand the same dealer deals again, as all sources agree."
engine:
  players: [player1, player2]
  components:
    deck:
      type: standard-52
      count: 1
      jokers: 0
  topology:
    type: tableau
    layout: radial
  deal:
    minPlayers: 2
    maxPlayers: 2
    defaultPlayers: 2
    perPlayer: 10
    community: 0
    remainder: draw
  plugins:
    standard-52:
      game: knocking
      knock: 10
      stockFloor: 2
      target: 100
      bonuses: { gin: 25, bigGin: 31, undercut: 25, game: 100, box: 25, shutout: 100 }
published: true
---

## Gin Rummy

Gin Rummy is a two-player draw-and-discard card game. Players draw and discard to build melds (sets and runs) in their hand, aiming to reduce unmatched card value (deadwood) to zero or low enough to knock. The game was created by Elwood T. Baker and his son C. Graham Baker in 1909.

{{svg:gin-rummy-board.svg "Gin Rummy — table layout"}}

### Deal

Deal 10 cards to each player. Place the remaining cards face-down as the stock. Turn the top card face-up to start the discard pile.

### Card Values (for deadwood)

- **Ace:** 1 point
- **Number cards (2–10):** Face value
- **Face cards (J, Q, K):** 10 points

### Melds

A meld is a matched set of cards that score no deadwood:

- **Set:** Three or four cards of the same rank (e.g., 7♥ 7♦ 7♣).
- **Run (Sequence):** Three or more cards of the same suit in consecutive rank order (e.g., 4♥ 5♥ 6♥). Ace is always low (A–2–3 is valid; Q–K–A is not).

A card may belong to only one meld. Unmelded cards are **deadwood**.

### Taking a Turn

On each turn, a player must:
1. **Draw:** Take the top card from either the stock or the discard pile.
2. **Discard:** Place one card face-up on top of the discard pile (may be the card just drawn from stock, but not the card drawn from the discard pile on the same turn).

**First turn exception:** The non-dealer may take the face-up card or pass. If they pass, the dealer may take it or pass. If both pass, the non-dealer draws from stock and the game begins normally.

### Knocking

After drawing (but before discarding), a player may **knock** if their deadwood totals 10 points or less. They discard one card face-down (the knock card) and lay all their melds face-up.

The opponent then lays off any cards from their hand onto the knocker’s melds (to reduce their own deadwood), then reveals their remaining deadwood.

**Scoring the knock:**
- If the knocker’s deadwood < opponent’s deadwood after layoffs: Knocker scores the difference.
- If the knocker’s deadwood ≥ opponent’s deadwood after layoffs: **Undercut.** Opponent scores the difference plus a 25-point undercut bonus.

### Going Gin

If a player knocks with zero deadwood (all 10 cards in melds), they have **gone Gin**. The opponent may not lay off cards. The Gin player scores the opponent’s full deadwood plus a 25-point Gin bonus.

### Big Gin

If a player can meld all 11 cards in hand (after drawing, before discarding) — i.e., all 11 form valid melds — they may declare **Big Gin** without discarding. Score: opponent’s deadwood + 31 points.

### End of Stock

If the stock reaches 2 cards and neither player has knocked, the hand ends in a draw with no points scored. The same dealer deals the next hand.

### Game Scoring

Play continues hand by hand until one player reaches 100 or more points.

**End-of-game bonuses:**

| Bonus | Points |
|---|---|
| Game bonus (winner) | 100 |
| Box bonus (per hand won) | 25 per hand |
| Shutout bonus (opponent scored 0) | Additional 100 (total game bonus becomes 200) |

Final score = game points + box bonuses + shutout bonus (if applicable). The player with more total points wins.

### Attribution

Gin Rummy. Created by Elwood T. Baker and C. Graham Baker, 1909. Rules checked against Pagat.com, *Gin Rummy* (John McLeod, © 1996–2024), and Wikipedia, *Gin rummy*. The two give different bonus values, and the ones used here are recorded with both readings.
