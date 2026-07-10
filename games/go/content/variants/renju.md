---
title: Renju
slug: renju
board: "15×15"
players: "2"
parent: go
order: 10
win: Five in an unbroken row (exactly five for Black)
special: Competitive Gomoku with forbidden moves for Black. Governed by the Renju International Federation.
engine:
  topology:
    type: grid
    rows: 15
    cols: 15
    layout: intersections
  players: [black, white]
  setup: ""
---

## Renju

Renju is a professional variant of Gomoku. It was named renju by Japanese journalist Ruikou Kuroiwa on December 6, 1899. The name "renju" means "connected pearls" in Japanese. The game is played with black and white stones on a 15×15 board. Renju weakens the first-player advantage for Black by adding special restrictions.

{{svg:go-15x15-board.svg "Empty 15×15 board — Renju"}}

There are two key differences between Renju and Gomoku. First, Renju has forbidden moves to limit Black's advantage. Second, Renju uses special opening rules to balance the starting positions of games.

### Setup

**Board:** 15×15. Black plays first.

**Pieces:** Black and white stones.

### Rules

Players alternate placing one stone per turn on an empty intersection. Black plays first; stones alternate strictly by move order. Stones are never moved or captured after placement.

**Winning:**
- Black wins only on exactly five in a row; an overline (six or more consecutive stones) is a loss for Black.
- White wins on five or more in a row (overlines count as a win for White).

**Forbidden moves for Black only:**
- **Overline:** Black may not form six or more consecutive stones in a row.
- **Double-four:** Black may not place a stone that simultaneously creates two or more fours.
- **Double-three:** Black may not place a stone that simultaneously creates two or more open threes.

White has no forbidden moves. The asymmetric restrictions offset Black's first-move advantage.

### Opening Rules

Competitive Renju uses a special opening protocol to further balance the starting position. The current official rule for World Championships is Soosõrv-8 (adopted 2017). The Taraguchi-10 opening, used in earlier championships, proceeds as follows:

Move 1 (Black) is placed at the centre intersection. A swap option is available for either player after each of moves 1 through 4. Move 2 must be placed within the central 3×3 area; move 3 within the central 5×5; move 4 within the central 7×7.

After move 4, Black either continues (Branch A: place move 5 within the central 9×9, after which White has a swap option, then White plays move 6 anywhere) or offers ten alternative fifth moves anywhere on the board, no two symmetric, from which White selects one, then plays move 6 anywhere. After move 6, normal play resumes, with Black bound by forbidden-move restrictions.

### Strategy

Under standard rules, unless one side makes a mistake by not blocking a closed four or open three, Black can only win through a four-three combination. White can win through four-three, three-three, four-four, or by forcing Black to make a forbidden move.

### Attribution

Competitive variant of Gomoku. Rules governed by the Renju International Federation. Public domain. The Renju International Federation was founded in Stockholm, Sweden on August 8, 1988.
