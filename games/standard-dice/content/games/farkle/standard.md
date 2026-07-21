---
title: Farkle
slug: farkle
board: "none"
players: "2–6"
parent: standard-dice
win: "First to reach 10,000 points; opponents each get one final turn"
special: "Roll 6 dice, bank scoring combinations, press your luck. Roll nothing that scores and lose your entire turn's points."
engine:
  components:
    dice: 6
    die_type: d6
    score_track: true
    target_score: 10000
  topology:
    type: tableau
    layout: radial
  deal:
    minPlayers: 2
    maxPlayers: 6
    defaultPlayers: 4
    perPlayer: 0
    community: 6
published: true
---

## Farkle

A press-your-luck dice game for 2–6 players. On your turn, roll 6 dice, set aside at least one scoring combination, then choose to bank your accumulated points or roll again with the remaining dice. If no dice score on any roll, you **Farkle** — losing all points accumulated that turn. First to 10,000 wins.

### Turn Structure

1. **Roll all 6 dice** (or remaining dice if some are set aside).
2. After the roll, you must **set aside at least one scoring die or combination.**
3. If no dice score — you **Farkle**: lose all unbanked points for the turn. Your turn ends.
4. If dice score, choose:
   - **Bank**: add accumulated turn points to your total score. Turn ends.
   - **Roll again**: roll remaining dice. Repeat from step 1.
5. **Hot dice:** if all 6 dice have been set aside and scored, you may roll all 6 again, adding to your turn total. The turn does not end.

### Scoring Combinations

Combinations are scored per single roll, from dice not yet set aside.

| Combination | Score |
|-------------|-------|
| Single 1 | 100 |
| Single 5 | 50 |
| Three 1s | 1,000 |
| Three 2s | 200 |
| Three 3s | 300 |
| Three 4s | 400 |
| Three 5s | 500 |
| Three 6s | 600 |
| Four of a kind | 2× three-of-a-kind value |
| Five of a kind | 3× three-of-a-kind value |
| Six of a kind | 4× three-of-a-kind value (or 3,000) |
| Straight (1–2–3–4–5–6) | 1,500 (house rule variant: 3,000) |
| Three pairs | 1,500 |

*1s and 5s only score individually when not part of a three-or-more-of-a-kind combination.*

### Getting on the Board

A player must score at least **500 points in a single turn** to record their first score (get on the board). Points below 500 cannot be banked until the first qualifying turn.

### Winning

When a player reaches 10,000 or more, each remaining player gets **one final turn** to try to exceed that score. The player with the highest score after all final turns wins. Ties are broken by a sudden-death roll-off.

### Attribution

Farkle. Traditional game; exact origin disputed. Rules in the public domain. Source: Wikipedia *(Farkle)*; Pagat.com.
