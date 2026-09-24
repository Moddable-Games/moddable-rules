---
playable: true
title: Yahtzee
slug: yahtzee
board: "none"
players: "1–4"
parent: standard-dice
win: "Highest total score after 13 rounds"
order: 1
special: "Five dice, 13 scoring categories, one shot at a Yahtzee. Fill every box across three rolls per turn."
approximations:
  - feature: "Players"
    source: "'A dice game for 1–4 players'"
    engine: "Two players."
  - feature: "Joker rules without the bonus"
    source: "'If you scored 0 in the Yahtzee box, you do not receive the bonus.' The page gives the joker rules only with the bonus."
    engine: "The joker rules apply only when the bonus does: a Yahtzee rolled after a zero in the Yahtzee box scores as ordinary dice."
engine:
  players: [player-1, player-2]
  components:
    dice: 5
    die_type: d6
    scorecard: true
  topology:
    type: tableau
    layout: radial
  deal:
    minPlayers: 1
    maxPlayers: 4
    defaultPlayers: 2
    perPlayer: 0
    community: 5
  plugins:
    standard-dice:
      game: scorecard
      dice: 5
      rolls: 3
      categories:
        aces: { count: 1 }
        twos: { count: 2 }
        threes: { count: 3 }
        fours: { count: 4 }
        fives: { count: 5 }
        sixes: { count: 6 }
        three-of-a-kind: { ofAKind: 3, score: total }
        four-of-a-kind: { ofAKind: 4, score: total }
        full-house: { pattern: [3, 2], score: 25 }
        small-straight: { straight: 4, score: 30 }
        large-straight: { straight: 5, score: 40 }
        yahtzee: { ofAKind: 5, score: 50 }
        chance: { score: total }
      bonuses:
        - { categories: [aces, twos, threes, fours, fives, sixes], atLeast: 63, score: 35 }
      repeat: { category: yahtzee, bonus: 100 }
published: true
---

## Yahtzee

A dice game for 1–4 players in which each player completes a scorecard of 13 categories over 13 rounds. Each turn allows up to three rolls of five dice, with the player choosing which dice to keep after each roll. Highest total score wins.

{{svg:yahtzee-board.svg "Yahtzee — table layout"}}

### Turn Structure

1. **Roll all 5 dice.**
2. Optionally keep any dice and **re-roll the rest** (up to 2 more times).
3. After the final roll, **choose one unfilled category** on your scorecard and record the score (which may be 0).

Each category may only be filled once per game. All 13 categories must be filled.

### Scorecard

#### Upper Section

| Category | Score |
|----------|-------|
| Aces | Sum of all 1s |
| Twos | Sum of all 2s |
| Threes | Sum of all 3s |
| Fours | Sum of all 4s |
| Fives | Sum of all 5s |
| Sixes | Sum of all 6s |
| **Upper Bonus** | **+35 if upper section total ≥ 63** |

The upper section bonus threshold of 63 corresponds to scoring exactly three of each number (3×1 + 3×2 + 3×3 + 3×4 + 3×5 + 3×6 = 63).

#### Lower Section

| Category | Requirement | Score |
|----------|-------------|-------|
| 3 of a Kind | At least three dice the same | Sum of all 5 dice |
| 4 of a Kind | At least four dice the same | Sum of all 5 dice |
| Full House | Three of one number + two of another | 25 |
| Small Straight | Four sequential values (e.g. 1–2–3–4) | 30 |
| Large Straight | Five sequential values (1–2–3–4–5 or 2–3–4–5–6) | 40 |
| Yahtzee | All five dice the same | 50 |
| Chance | Any combination | Sum of all 5 dice |

### Yahtzee Bonus

If you have already scored 50 in the Yahtzee box and roll another Yahtzee:
- Score **+100 bonus** points.
- You must also fill a category using **Joker rules:** use the Yahtzee as the matching upper section number if that box is empty; otherwise, fill any remaining lower section box (treating it as a Full House, any Straight, or 3/4 of a Kind as applicable).

If you scored 0 in the Yahtzee box, you do not receive the bonus.

### Attribution

Yahtzee. Trademarked by Hasbro. Rules in the public domain (widely documented). Standard rules via Wikipedia.
