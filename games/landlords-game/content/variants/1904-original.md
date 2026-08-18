---
title: "1904 Original"
slug: "1904-original"
board: Circular 40-space track
players: "2–6"
parent: landlords-game
order: 1
win: Complete 5 circuits with the highest total wealth (lots + cash + luxuries)
special: The pure patent ruleset — no houses, no Chance cards, lot tickets drawn at start. The ur-game.
engine:
  topology:
    type: track
    positions: 40
  players: [player1, player2]
  setup: ""
  surface:
    colors:
      board: "#f0e4c8"
      border: "#5a4a30"
      innerBg: "#f0e4c8"
      spaceStroke: "#5a4a30"
      cornerStroke: "#5a4a30"
      text: "#3a2a15"
      titleText: "#3a2a15"
      lot: "#f0e4c8"
      necessity: "#f0e4c8"
      railroad: "#f0e4c8"
      franchise: "#f0e4c8"
      luxury: "#f0e4c8"
      legacy: "#f0e4c8"
      go-to-jail: "#e8d8b8"
      corner: "#e8d8b8"
  render:
    overflow: visible
  content:
    source: landlords-game-boards.json
    board: 1904-patent
---

## 1904 Original

This is the ruleset as described in US Patent 748,626, granted January 5, 1904. It predates houses, Chance cards, and auctions. Players begin by drawing lot tickets rather than purchasing lots as they land, and the game ends after all players complete five circuits of the board.

{{svg:1904-original-board.svg "1904 Patent — board layout"}}

### Setup

- Each player begins with $500.
- Shuffle the 22 lot tickets. Players draw one at a time, taking turns, until 12 tickets in total have been taken. Remaining tickets are returned to the Wages box.
- All checkers start on MOTHER EARTH.
- Determine first player by highest dice throw.

### Rules

**Movement:** On each turn, throw both dice and move forward the combined number of spaces. Follow the rule for the space landed on.

**MOTHER EARTH:** Receive $100 wages from the Wages box each time this space is reached or passed. Recorded on a tally sheet.

**Lot spaces:** If a player lands on a lot for which they hold the lot ticket, other players landing on that lot pay rent to the ticket holder at the lowest marked price. If the landing player holds no ticket for that lot, they may purchase it at the highest marked price (paid to the Public Treasury). If two players land on the same lot, the second pays half rent. A third player cannot occupy — they must stop one space before and count their throw one less.

**Absolute Necessities (Food, Fuel, Shelter, Clothing):** Pay $5 to the Public Treasury.

**No Trespassing:** Player goes to Jail. Remains there until throwing a double on a subsequent turn or paying a $50 fine to the Public Treasury.

**Railroad spaces:** Pay $5 to the Railroad fund. Throwing a double on a Railroad space grants a pass: the player may jump once between railroad spaces when passing one in normal movement.

**Luxury spaces:** Pay $50 to the Public Treasury and receive a luxury ticket worth $60 at the end of the game. This is optional — if not purchased, the player loses their move.

**Franchise spaces:** The first player to stop on a franchise space places a charter on it. All subsequent players pay $5 to the charter holder whenever stopping there. Placing a charter costs nothing and the charter counts nothing at end of game.

**Public Park:** No payment required.

**Legacy:** Receive $100 cash and a legacy ticket.

**Poor House:** A player with no money and no mortgageable property goes here and remains until able to resume play.

**Borrowing from the Bank:** In $100 increments. The bank takes a mortgage on property worth at least $10 more than the amount borrowed. The player pays $5 interest per bank note each time wages are received at MOTHER EARTH.

**Player-to-player loans:** Any terms agreed between the two players.

**Five circuits:** After completing 5 circuits of the board while clear of debt, a player may move in either direction on subsequent turns. Wages from MOTHER EARTH cease after a player completes the required number of circuits.

### Winning

The game ends when the last player passes MOTHER EARTH for the fifth time. Each player counts their total wealth:

- Lot card values (face value of each lot ticket held)
- Cash on hand
- Luxury tickets (each worth $60)

The player with the highest total wins.

**Optional variant (from the patent):** Play without drawing lot tickets at start. Players purchase lots as they land on them, each beginning with $100 instead of $500.

### Attribution

1904 Original. Rules from US Patent 748,626, granted January 5, 1904. Designed by Elizabeth J. Magie. Public domain (patent expired 1921). Sources: US Patent 748,626 (public domain); hoelzl/L3 GitHub repository patent transcription, sourced from landlordsgame.info.
