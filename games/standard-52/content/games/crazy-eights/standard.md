---
playable: true
title: Crazy Eights
slug: crazy-eights
board: none
players: "2–5"
parent: standard-52
win: First to empty their hand
special: "Shedding card game. Players match the top discard by suit or rank. Eights are wild — playing an 8 lets you name the next suit. The direct ancestor of Uno. 2–5 players, fast and accessible."
published: true
approximations:
  - feature: "Players and the deal"
    source: "'2–5 players.' '2: 7 each; 3–5: 5 each.'"
    engine: "Four players, five cards each."
  - feature: "Scoring across hands"
    source: "'Scoring (optional): The winner scores points equal to the cards remaining in opponents' hands ... Play to 100 or 200 points across multiple hands.'"
    engine: "One hand, won by the first player out. The page marks the scoring optional."
  - feature: "A blocked game"
    source: "'If the stock is exhausted and they still cannot play, they pass.' The page does not say what happens when every player passes."
    engine: "When every player passes in turn with the stock empty, the hand ends and the player holding the fewest cards wins; a tie for fewest is a draw."
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
    minPlayers: 2
    maxPlayers: 5
    defaultPlayers: 4
    perPlayer: 5
    community: 0
    remainder: draw
  plugins:
    standard-52:
      game: shedding
      wild: 8
      starterSkips: 8
---

## Crazy Eights

Crazy Eights is a shedding-type card game where players race to empty their hand by matching the top card of the discard pile by suit or rank. Eights are wild. It is the direct ancestor of Uno and Skip-Bo.

{{svg:crazy-eights-board.svg "Crazy Eights — table layout"}}

### Players and Cards

2–5 players. Standard 52-card deck (use two decks for 5+ players).

### The Deal

| Players | Cards dealt |
|---|---|
| 2 | 7 each |
| 3–5 | 5 each |

Remaining cards form the stock face-down. Top card is turned face-up to start the discard pile. If it is an 8, bury it and reveal the next card.

### The Turn

On each turn, a player must play one card from their hand onto the discard pile. A card is legal if it:
- Matches the **suit** of the top discard, OR
- Matches the **rank** of the top discard, OR
- Is an **8** (wild — always playable)

When playing an **8**, the player declares any suit. The next player must play a card of that declared suit, or another 8.

If a player cannot play, they **draw** from the stock one card at a time until they can play or the stock is exhausted. If the stock is exhausted and they still cannot play, they pass.

### Winning

The first player to empty their hand wins the round.

### Scoring (optional)

The winner scores points equal to the cards remaining in opponents' hands: each 8 = 50 points, face cards = 10 points, numbered cards = face value. Play to 100 or 200 points across multiple hands.
