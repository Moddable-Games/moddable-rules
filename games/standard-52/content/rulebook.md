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
  pieces:
    set: letele-cards
  components:
    deck:
      type: standard-52
    layout:
      type: fan
  players: [south, north, east, west]
how_to_play: "A standard French-suited deck supports 18 games spanning climbing, trick-taking, draw-and-discard, poker, pegging, banking, and solitaire families. Four suits (Spades, Hearts, Diamonds, Clubs), thirteen ranks per suit."
mechanics:
  - trick-taking
  - melding
  - shedding
  - betting
  - hand-management
complexity: moderate
related:
  - flower-48
  - mahjong
  - standard-dice
unsupported:
  _family: "No rules plugin. Each game declares its deck, table layout and deal in full and nothing consumes any of it: `deal:` is read in one place, produce-layout.js, and only for layout. Every game here also needs private per-seat state (moddable-engine#155) before a hand can be held rather than shown."
  big2: "No plugin. It declares `plugins: big2` and no such plugin exists - the only big2 in moddable-engine is a fixture defined inside core's own proof test, so one of SPEC's seven proof games is proven by code that exists nowhere else. Needs climbing combinations and poker-hand comparison on top of private hands."
  blackjack: "No plugin. The dealer is declared as a seat but is not a participant in the sense the player system means - it follows a fixed house rule and makes no choices, the same shape problem as the Kriegspiel referee in moddable-engine#155. Also needs bets, the six-deck continuous shoe it declares, and splitting a hand in two."
  bridge: "No plugin. Three phases the engine has no model for: a bidding auction that sets a contract, fixed partnerships scoring jointly, and a dummy hand that becomes public and is played by its partner."
  canasta: "No plugin. Needs melds owned by a partnership, wild cards that substitute within a meld, and a discard pile that freezes and is taken whole - a shared pile with state of its own rather than a stack of cards."
  crazy-eights: "No plugin. Needs a wild rank whose player names the suit in play, so the legal-move test depends on a declaration made alongside the move rather than on the cards alone."
  cribbage: "No plugin. Scoring is the game, it happens on a separate peg track, and it runs in three distinct phases: the discard to the crib, the pegging count to 31, and the show. The crib is a fourth hand belonging to the dealer, which is neither a seat's hand nor a community pile."
  euchre: "No plugin. Needs a trump-making auction over the turned card, and trump that re-ranks the deck as it is named: the Jack of trump and the Jack of the same colour outrank the Ace, so card order is a function of the contract rather than of the deck."
  four-player-cribbage: "No plugin, and blocked on everything standard Cribbage is. Adds fixed partnerships pegging a combined score on one track."
  freecell: "No plugin. One seat and nothing hidden from an opponent, so it is blocked on the plugin alone - it needs free cells, ordered stacking on the tableau, and the supermove limit that follows from how many cells are empty."
  gin-rummy: "No plugin. Needs melds, deadwood counted against the holder, and knocking - ending a hand on a threshold rather than on a terminal position."
  hearts: "No plugin. Needs trick-taking with a led suit, penalty scoring that inverts the usual goal, the pass between hands, and shooting the moon, which reverses the score for everyone at once."
  klondike: "No plugin. One seat and no opponent, but the stock, the waste and the face-down tableau cards are hidden from the player - the same per-seat visibility problem seen from one side."
  poker: "No plugin. Betting is the game: rounds of wagering, a pot, chip stacks and side pots, none of which is a card operation. Hand ranking over two hole cards and five community cards is declared in `deal:` and read by nothing."
  president: "No plugin. Declares the same missing big2 plugin, and adds the card exchange between the highest and lowest finishers at the start of each hand - a between-hands phase nothing models."
  rummy: "No plugin. Needs melds laid to the table, laying off onto another player's meld, and a discard pile that can be drawn from."
  spades: "No plugin. Needs a bid in tricks per seat, partnership scoring against the combined bid, bags accumulating across hands, and the nil bid that scores by taking nothing."
  spider-solitaire: "No plugin. Declares two decks and ten columns; needs same-suit ordered sequences that lift as a unit, eight foundations that clear a completed suit, and dealing one card to every column at once."
  three-player-cribbage: "No plugin, and blocked on everything standard Cribbage is. Adds a crib that receives a card dealt straight from the deck, and rotates each hand."
  war: "No plugin. The only card game here with no decision in it at all, which makes it the cheapest possible proof that the deal, the turn order and the terminal test work - and nothing runs it."
  whist: "No plugin. Needs trick-taking with a trump suit turned from the deck, and fixed partnerships scoring over the odd tricks."
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
