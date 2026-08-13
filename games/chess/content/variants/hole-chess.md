---
playable: true
title: Hole Chess
slug: hole-chess
board: "44 squares (custom board with 2 holes)"
players: "2"
parent: chess
win: Capture or checkmate the opponent's King
special: "44-square chess variant on a custom board with two permanent holes — squares pieces cannot occupy, but through which pieces can be 'sucked.' The Queen, Rook, and PS-Bishop (Dragon Horse) each have a Two-Action Rule: they may move normally AND pull an enemy piece in their line of fire into a hole on the same turn. Named for the 44-square contest. Gary K. Gifford, 2003."
engine:
  topology:
    type: grid
    rows: 10
    cols: 7
  players: [white, black]
  render:
    cellSize: 36
    zones:
      voids: [[0,0],[0,1],[0,2],[0,4],[0,5],[0,6],[1,0],[1,1],[1,5],[1,6],[2,0],[2,6],[3,3],[6,3],[7,0],[7,6],[8,0],[8,1],[8,5],[8,6],[9,0],[9,1],[9,2],[9,4],[9,5],[9,6]]
  setup: "3k3/2rqb2/1ppppp1/7/7/7/7/1PPPPP1/2RQB2/3K3"
---

## Hole Chess

{{svg:hole-chess-board.svg "Hole Chess — starting position"}}

Hole Chess is a chess variant created by Gary K. Gifford in December 2003 for the Chess Variants 44-Square Contest. The game is played on a custom 44-square board that includes two permanent holes — squares that pieces cannot occupy, but through which pieces can be captured by being pulled in. The defining mechanic is the Two-Action Rule: three piece types (Queen, Rook, and PS-Bishop) may both move and pull an enemy piece into a hole on the same turn.

### The Board

A custom 44-square board with two holes. The two holes are located centrally — the central pawn on each side is blocked by a hole directly in front of it. A physical board can be made by cutting holes in an actual board and placing it over an open box, so pieces sucked into holes fall through.

### Pieces

Each player begins with:
- 1 **King**
- 1 **Queen**
- 1 **Rook**
- 1 **PS-Bishop** (Promoted Shogi Bishop = Dragon Horse: moves as a King or a Bishop)
- 5 **Pawns**

### Starting Position

**Yellow (light):**
- King: d1
- Queen: d2
- Rook: c2
- PS-Bishop: e2
- Pawns: b3, c3, d3, e3, f3

**Red (dark):**
- King: d10
- Queen: d9
- Rook: e9
- PS-Bishop: c9
- Pawns: b8, c8, d8, e8, f8

Holes are located at d4 and d7. The central pawns (d3 and d8) cannot advance because a hole is directly in front of them; they can only move by capturing diagonally.

### The Two-Action Rule

The **Queen, Rook, and PS-Bishop** each have two actions available on a turn when they are the moved piece. Either or both actions may be used; but at least one must be used.

**Action 1 (movement):** The piece moves and possibly captures as in standard chess (PS-Bishop moves as King or Bishop).

**Action 2 (hole pull):** The piece targets an enemy piece in its direct line of fire. If exactly one hole exists between the attacker and the target piece (along a straight line), the target is pulled toward the attacker along that line until it falls through the hole — eliminating it. Action 2 cannot be used if two or more holes exist between attacker and target, or if no hole is in line.

**Result:** A piece using Action 2 after Action 1 can eliminate two pieces in one turn — one by standard capture, one by pulling into a hole.

A piece may also remain stationary and use only Action 2 (no movement on that turn).

### Pawns

Pawns move and capture as in standard chess. On their first move they may advance two squares — except the central pawns (d3/d8) which cannot advance at all (holes block them). En passant applies.

Promotion: if a Pawn reaches the opponent's third rank (the furthest reachable rank), it must promote to a Queen, Rook, or PS-Bishop.

### Kings

Kings move as in standard chess. Unlike standard chess, **Kings can be captured** (not just checkmated). If a King would have to move into or be exposed to the enemy line of fire (a potential stalemate), it must do so — there is no stalemate. A King may move adjacent to the enemy King, but the enemy King then captures it, ending the game.

### Holes

Holes are permanent features of the board. Pieces cannot move onto holes voluntarily. A piece that is pulled into a hole via Action 2 is eliminated. It is **illegal** to move onto a hole under normal movement; a piece can only enter a hole by being pulled.

### Win Condition

Capture the opponent's King, checkmate the opponent's King, or force resignation.

### Attribution

Hole Chess was created by Gary K. Gifford, December 2003. Entry in the Chess Variants 44-Square Contest. Source: chessvariants.com/44.dir/hole-chess.html
