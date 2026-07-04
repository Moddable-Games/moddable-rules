---
title: Koi-Koi
slug: koi-koi
board: "none"
players: "2"
parent: flower-48
win: "First to reach target score across 12 rounds, or highest score"
order: 1
special: "The most popular Hanafuda game. Complete a yaku and declare win, or say ‘Koi-Koi’ to keep playing for more — at the risk of losing the bonus."
engine:
  players: [player1, player2]
  components:
    cards:
      deck: hanafuda-48
published: true
---

## Koi-Koi

The most widely played Hanafuda game. Two players compete over 12 rounds (one per month). Each round, players match cards from their hand to the table by suit, building a captured pile. When a player completes a scoring pattern (yaku), they choose: declare a win and collect points, or say **“Koi-Koi”** (「こいこい」, “come on”) to continue playing for a higher score — at the cost of losing the bonus if the opponent scores first.

### Setup

Shuffle the 48-card deck. Deal:
- 8 cards face-down to each player (hand)
- 8 cards face-up to the centre (field/table)
- Remaining 24 cards face-down as the draw pile

If either player is dealt a dealt yaku (Teshi or Kuttsuki, see below), they may declare it immediately for an automatic win.

### Turn Structure

Players alternate. On your turn:

1. **Play from hand:** choose one card from your hand and place it face-up.
   - If it matches a field card by suit (month), take both and add to your capture pile.
   - If two field cards match, you choose which to capture; if three match, you capture all three.
   - If no match, the card remains in the field.

2. **Draw from pile:** flip the top card of the draw pile.
   - Apply the same matching rules.
   - If it matches a field card, capture it. If not, it stays in the field.

3. **Check for yaku:** if your captures now complete one or more yaku, you must choose:
   - **Declare win:** the round ends; you score your yaku points.
   - **Say Koi-Koi:** play continues. If you later complete additional yaku, your total score grows.

If you said Koi-Koi and the opponent completes a yaku before the round ends, the opponent scores **double** for that round.

A round also ends when both players exhaust their hands and the draw pile. If neither player declared a win, the round is a draw (no points scored).

### Yaku (Scoring Patterns)

#### Bright Yaku

| Yaku | Cards Required | Points |
|------|---------------|--------|
| Goko ・五光 (Five Brights) | All 5 Brights | 10 |
| Shiko ・四光 (Four Brights) | Any 4 Brights, excluding Rain Man | 8 |
| Ame-Shiko ・雨四光 (Rainy Four Brights) | Any 4 Brights, including Rain Man | 7 |
| Sanko ・三光 (Three Brights) | Any 3 Brights, excluding Rain Man | 5 |

#### Viewing Yaku

| Yaku | Cards Required | Points |
|------|---------------|--------|
| Tsukimi-de-Ippatsu ・月見で一杯 (Moon Viewing) | Full Moon (Aug) + Sake Cup (Sep) | 5 |
| Hanami-de-Ippatsu ・花見で一杯 (Blossom Viewing) | Cherry Curtain (Mar) + Sake Cup (Sep) | 5 |

*Note: Viewing yaku may be disabled by house rules in competitive play.*

#### Animal Yaku

| Yaku | Cards Required | Points |
|------|---------------|--------|
| Ino-Shika-Cho ・猪鹿蝶 (Boar–Deer–Butterfly) | Boar (Jul) + Deer (Oct) + Butterflies (Jun) | 5 |
| Tane ・種 (Animals) | Any 5 Animals | 1 (+1 per additional) |

#### Ribbon Yaku

| Yaku | Cards Required | Points |
|------|---------------|--------|
| Akatan Aotan no Chofuku ・赤短・青短の重複 | All 3 Red Poetry + all 3 Blue ribbons | 10 |
| Akatan ・赤短 (Red Poetry) | Pine + Plum + Cherry Poetry ribbons | 5 |
| Aotan ・青短 (Blue Ribbons) | Peony + Chrysanthemum + Maple ribbons | 5 |
| Tan ・短 (Ribbons) | Any 5 Ribbons | 1 (+1 per additional) |

#### Plain Yaku

| Yaku | Cards Required | Points |
|------|---------------|--------|
| Kasu ・カス (Plains) | Any 10 Plains | 1 (+1 per additional) |

*The Sake Cup (Sep-Animal) counts as both an Animal and a Plain in some house rules.*

### Dealt Yaku

Declared before play begins if dealt in the initial hand:

| Yaku | Condition | Points |
|------|-----------|--------|
| Teshi ・手四 | Four cards of the same month dealt to one player | 6 (or automatic win) |
| Kuttsuki ・くっつき | Four pairs (8 cards, 4 matched suits) dealt to one player | 6 (or automatic win) |

If a dealt yaku occurs, the round is redealt or scored immediately per house rules.

### Scoring and Rounds

A standard game is **12 rounds**, one for each month. The player who dealt first in round 1 switches each round, or the previous round’s winner deals.

If you declared Koi-Koi and won the round, your score is **doubled**.

If you said Koi-Koi and the opponent wins the round, the opponent’s score is doubled.

A target score (e.g. 50 or 100 points over 12 rounds) determines the match winner, or simply the highest total after 12 rounds.

### Attribution

Koi-Koi ・こいこい. Traditional Japanese card game. Rules in the public domain. Primary source: Wikipedia *(Koi-Koi)*; secondary: Pagat.com *(Hanafuda)*.
