---
title: "Standard 52-Card Deck"
short_title: "52 Cards"
version: "0.2.1"
slug: "standard-52"
players: "1–8"
duration: "10–120 min"
age: "6+"
tagline: "Every game a standard deck of cards can play"
type: "component"
status: "live"
updated: "2026-07-21"
published: true
hub_type: component
theme:
  surface: light
  tint: neutral
  texture: none
  cover: minimal
  typography: classical
  accent: red
engine:
  topology:
    type: none
  surface: felt-green
  components:
    deck:
      type: standard-52
    layout:
      type: fan
  players: [south, north, east, west]
---

<div class="section">

## Standard 52-Card Deck

Games played with the standard French-suited 52-card deck. Four suits (Spades, Hearts, Diamonds, Clubs), thirteen ranks per suit (A, 2-10, J, Q, K). Some games add 1-2 jokers or use multiple decks.

### The Deck

| Component | Detail |
|---|---|
| Cards | 52 (+ optional jokers) |
| Suits | 4 (Spades, Hearts, Diamonds, Clubs) |
| Ranks | 13 per suit (A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K) |
| Colours | Red (Hearts, Diamonds), Black (Spades, Clubs) |

</div>

<div class="section">

## Games

### Climbing / Shedding

- [Big 2](games/big2/) — Climbing card game where 2 is highest. Play singles, pairs, or poker hands to empty your hand first. 4 players.
- [President](games/president/) — Multi-round climbing game with role-based card trading. Finish first to become President.

### Partnership Trick-Taking

- [Bridge — Rubber](games/bridge/) — Contract bridge for 4 players (2 partnerships). Bidding, declarer, dummy, and rubber scoring. Casting for a rubber requires winning 2 games.
- [Euchre](games/euchre/) — 24-card trick-taking game (9 through Ace). Trump selected each round; Right Bower (Jack of trump) is highest. First to 10 points wins. 4 players.
- [Spades](games/spades/) — Partnership trick-taking; Spades always trump. Bid predicted tricks; bags accumulate penalties. First partnership to 500 points wins. 4 players.

### Individual Trick-Taking

- [Hearts](games/hearts/) — Trick-avoidance game; Hearts and Queen of Spades score penalty points. Shoot the Moon to score zero and penalise opponents. First to 100 loses. 4 players.

### Draw-and-Discard / Melding

- [Canasta](games/canasta/) — Partnership melding game using 2 decks + 4 jokers (108 cards). Build Canastas of 7+ cards. Wild cards may substitute. First to 5000 points wins. 4 players.
- [Gin Rummy](games/gin-rummy/) — Two-player draw-and-discard melding game. Knock when deadwood is ≤10; go Gin for zero deadwood bonus. First to 100 points wins.

### Poker

- [Texas Hold'em](games/poker/) — Community card poker. Two private hole cards + five shared community cards; four betting rounds (preflop, flop, turn, river). Best 5-card hand wins. 2–10 players.

### Pegging / Counting

- [Cribbage](games/cribbage/) — Two-player pegging game scored on a cribbage board. Features the crib, pegging phase, and the show. First to peg 121 points wins.

### Banking / Casino

- [Blackjack](games/blackjack/) — Beat the dealer: get closer to 21 without busting. Blackjack (natural 21) pays 3:2. Multiple decks; player options include double down, split, and surrender. 1–6 players vs dealer.

### Shedding

- [Crazy Eights](games/crazy-eights/) — Match the discard by suit or rank; Eights are wild. Direct ancestor of Uno. 2–5 players.

### Partnership Trick-Taking (Classic)

- [Whist](games/whist/) — Classic trick-taking game and ancestor of Bridge. No bidding; trump set by last card dealt. Dominant 1750–1900. 4 players.

### Draw-and-Discard / Melding

- [Rummy](games/rummy/) — Classic draw-and-discard melding game. Lay melds during play; opponents may extend them. Going Rummy doubles penalties. 2–6 players.

### Patience / Solitaire

- [FreeCell](games/freecell/) — Open solitaire (all 52 cards visible). Four free cells for temporary storage. Nearly all deals solvable with correct play. 1 player.
- [Klondike](games/klondike/) — Classic one-player patience game. Build four foundations by suit from Ace to King. Seven tableau columns; draw 1 or draw 3 from stock.
- [Spider Solitaire](games/spider-solitaire/) — Two-deck solitaire with 10 tableau columns. Complete in-suit King-to-Ace sequences. 1, 2, or 4-suit difficulty. 1 player.

### Children's / Simple

- [War](games/war/) — Pure-chance game for 2 players. Higher card wins both; ties trigger War. No decisions required.

</div>

<div class="section">

## Attribution

All games in this hub use public domain mechanics. Individual attribution in each game entry.

</div>
