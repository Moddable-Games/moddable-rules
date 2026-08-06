---
title: Ghanaian Draughts
playable: true
slug: ghanaian
board: "10×10"
players: "2"
parent: draughts
order: 19
win: Capture or block all opponent pieces
special: Men do not capture backwards. No majority rule. A player reduced to one piece loses.
engine:
  topology:
    type: grid
    rows: 10
    cols: 10
  players: [white, black]
  setup: "1b1b1b1b1b/b1b1b1b1b1/1b1b1b1b1b/b1b1b1b1b1/10/10/1w1w1w1w1w/w1w1w1w1w1/1w1w1w1w1w/w1w1w1w1w1"
  plugins:
    draughts:
      extends: "international"
      manCapture: "forward"
      captureBackward: false
      loseOnSinglePiece: true
---

## Ghanaian Draughts

Also known as Damii or Dame, Ghanaian Draughts is the traditional form of draughts played in Ghana and parts of West Africa. It uses the same 10×10 board and 20-piece setup as International Draughts but differs in three significant ways: men cannot capture backwards, there is no majority capture rule (any available capture satisfies the obligation), and a player who is reduced to a single piece (whether man or king) loses immediately.

{{svg:ghanaian-board.svg "Ghanaian Draughts — starting position"}}

### Setup

**Board:** 10×10 checkered board. Only the 50 dark squares are used. Orient the board so each player has a dark corner square on their lower left.

**Pieces:** 20 men (mma) per player in two distinct colours, placed on the dark squares of the four rows closest to each player. The two central rows remain empty.

**First move:** White moves first.

### Rules

- **Men movement:** Men move diagonally forward only, one square at a time, to an unoccupied dark square.
- **Men capture:** Men capture by jumping diagonally over an adjacent opponent piece to the vacant square beyond. Men can only capture **forwards**; backward capture is not permitted for men.
- **Mandatory capture:** If a capture is available, it must be taken.
- **No majority rule:** When multiple capture sequences are available, the player may freely choose which to take. The longest chain is not required.
- **Multi-capture:** After each jump, if another forward capture is immediately available, the sequence continues. A man cannot reverse direction to capture backwards during a multi-jump.
- **Piece removal:** Captured pieces are removed from the board at the end of the complete capture sequence.

### King Promotion

When a man reaches the opponent's back row at the end of its turn, it is promoted to a Dame (flying king).

- **Flying kings:** Dames move any number of unoccupied squares diagonally in any direction.
- **King capture:** Dames capture by jumping over a single opponent piece at any distance along a diagonal, landing on any empty square beyond.
- **Kings may capture in any direction,** including backwards.

### The Singleton Rule

A player who is reduced to a **single piece** (whether a man or a king) loses immediately, regardless of whether that piece still has legal moves. This rule is unique to Ghanaian Draughts and is not found in International Draughts.

### Winning

A player wins when:

- All opponent pieces have been captured, or
- The opponent is reduced to a single piece (singleton rule), or
- All remaining opponent pieces are blocked from moving.

### Draws

The game is drawn when both players agree, or when neither player can force a win.

### Attribution

Traditional variant. Public domain. Sources: Damii Ghana Draughts History &amp; Rules (gamesfromeverywhere.com, archived via docslide.us); apkpure.com — X Ghanaian Draughts app description (mkisly.bcheckers).
