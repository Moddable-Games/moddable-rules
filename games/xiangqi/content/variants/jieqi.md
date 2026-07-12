---
title: Jieqi
slug: jieqi
board: "9×10"
players: "2"
parent: xiangqi
win: Checkmate the General
special: "Xiangqi with hidden information: all pieces except the General start face-down and are revealed when they first move. A growing competitive variant in China and Vietnam. Also known as Dark Chess or Cờ Úhp."
engine:
  topology:
    type: grid
    rows: 10
    cols: 9
  players: [red, black]
  pieces:
    set: mce-xiangqi-fairy
    vocabulary:
      F: wFD
      f: bFD
      K: wK
      k: bK
  setup: "ffffkffff/9/1f5f1/f1f1f1f1f/9/9/F1F1F1F1F/1F5F1/9/FFFFKFFFF"
---

## Jieqi

Jieqi (揭棋, “unveiling chess”) is a Xiangqi variant with hidden information. Also known as **Dark Chess**, **Cờ Úhp** (Vietnamese), and by several other local names, it has seen rapid growth in popularity in China and Vietnam.

### Setup

The board, palace, river, and starting positions are identical to standard Xiangqi. However, at the start of the game **all pieces except the General are placed face-down** — covered so that their identity is not visible to either player. Covered pieces are placed randomly on the positions their piece type normally occupies:

- Each player’s 2 Advisors are randomly placed face-down on the Advisor squares.
- Each player’s 2 Elephants are randomly placed face-down on the Elephant squares.
- And so on for Horses, Chariots, Cannons, and Soldiers.

The **General begins face-up** in its normal starting square and is visible to both players at all times.

### The Revelation Mechanic

Covered pieces are informally called “fake pieces,” named after the starting position they occupy. For example, a covered piece on a Rook’s starting square is called a “fake Chariot.”

**First move of a covered piece:** When a covered piece makes its first move, it **must move as the piece whose starting position it occupies** — not as its true identity. A covered piece on a Chariot square must make a Chariot-legal move for its first move.

**Revelation:** After making its first move, the piece is turned face-up to reveal its true identity. From that point on, it moves as its actual piece type for the rest of the game.

### Revealed Advisors and Elephants

Unlike in standard Xiangqi, revealed **Advisors** and **Elephants** are **not** restricted by the palace or the river. They can move to any valid square anywhere on the board. This is the only rule relaxation that applies to revealed pieces.

**Generals** remain confined to their palaces. **Soldiers** follow standard Xiangqi rules: forward only on their home side, sideways and forward after crossing the river.

### Captures

- A covered piece may be captured by an opponent’s piece in the normal way.
- When a covered piece is captured, its true identity is revealed **only to the capturing player**. The opponent does not learn the captured piece’s identity.
- Once a piece is revealed and on the board, both players can see its identity normally.

### Rules

All standard Xiangqi rules apply to uncovered pieces: Flying General, palace restrictions for Generals, stalemate as a loss, perpetual check and chase rules.

### Win Conditions

Checkmate the opponent’s General. The General may never move into check. Stalemate is a loss for the player who cannot move.

### Attribution

Jieqi is a public domain variant of Xiangqi with historical roots. Rules documented from pychess.org/variants/jieqi.
