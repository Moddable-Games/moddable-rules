---
title: Hex Shogi 91
slug: hex-shogi-91
board: "91-cell hexagonal"
players: "2"
parent: shogi
win: Checkmate the King
special: "2-player Shogi variant on a 91-hexagon board (same shape as Glinski's Hexagonal Chess, differently oriented). All Shogi pieces adapted to hexagonal movement. Drops apply with hex-specific Pawn rules: no two-Pawn-per-file restriction (left out); Pawn drop may not check the King (stricter than Shogi). Promotion zone is 4 ranks. Fergus Duniho."
engine:
  topology:
    type: hex
    shape: hexagonal
    radius: 5
    orientation: pointy
  render:
    cellSize: 22
    cellColor: tricolor
  surface:
    colors:
      cell-light: "#d4a76a"
      cell-dark: "#8b6535"
      cell-mid: "#b88b50"
      stroke: "rgba(0,0,0,0.2)"
      background: "#3a2a1a"
      border: "#6b4226"
  pieces:
    set: kahu-shogi-international
  players: [sente, gote]
  setup: "-5,5:L,-4,5:N,-3,5:G,-2,5:G,-1,5:N,0,5:L,-4,4:R,-3,4:S,-2,4:K,-1,4:S,0,4:B,-5,2:P,-4,2:P,-3,2:P,-2,2:P,-1,2:P,0,2:P,1,2:P,2,2:P,3,2:P,5,-5:l,4,-5:n,3,-5:g,2,-5:g,1,-5:n,0,-5:l,4,-4:r,3,-4:s,2,-4:k,1,-4:s,0,-4:b,5,-2:p,4,-2:p,3,-2:p,2,-2:p,1,-2:p,0,-2:p,-1,-2:p,-2,-2:p,-3,-2:p"
published: true
---

## Hex Shogi 91

{{svg:hex-shogi-91-board.svg "Hex Shogi 91 — starting position"}}

Hex Shogi 91 is a Shogi variant for two players, played on a 91-hexagon board. It was invented by Fergus Duniho and is part of the Hex Shogi family of games. The board is the same shape used for Glinski's Hexagonal Chess and McCooey's Hexagonal Chess, but oriented differently. The game plays very much like Shogi, with pieces and rules adapted for the hexagonal board geometry.

### Board

The board consists of 91 hexagonal cells. Movement on a hexagonal board differs from a square board: hexagons are **orthogonally adjacent** when they share a side (each hexagon has 6 orthogonal neighbours), and **diagonally adjacent** when connected at corners (not sharing sides). The board uses three colors so that orthogonally adjacent cells are never the same color and diagonally adjacent cells are always the same color — diagonal movement is colorbound.

### Drops and Promotion

As in Shogi, captured pieces are held in hand and may be dropped on any empty square in lieu of a move. The following rules differ from standard Shogi:

- **No two-Pawn-per-file restriction:** The standard Shogi rule against dropping a Pawn on a file already occupied by a friendly Pawn is omitted, because Pawns have two forward directions on a hexagonal board and can share a file.
- **No Pawn drop to check:** Rather than Shogi's rule against checkmate by Pawn drop, Hex Shogi 91 uses the stricter rule: a Pawn may not be dropped to **check** (not just checkmate) the enemy King.
- **Promotion zone:** A piece may promote when it moves through, from, or into any of the **4 ranks** on the opponent's side of the board (rather than Shogi's 3 ranks).

### Pieces and Movement

All standard Shogi pieces are used, adapted for hexagonal movement:

**King:** Moves to any adjacent hexagon, orthogonal or diagonal — up to 12 possible squares. May not move into check. Does not promote.

**Rook:** Slides in a straight line along orthogonal directions. On the Hex Shogi 91 board this gives 6 directions (left, right, left-forward, right-forward, left-backward, right-backward). Promotes to **Dragon King** (Rook + one diagonal step).

**Bishop:** Slides in a straight line along diagonal directions. On this board this gives 6 directions including up and down — but remains colorbound despite this range. Promotes to **Dragon Horse** (Bishop + one orthogonal step).

**Gold General:** Moves one square in any orthogonal direction, plus one square in any diagonally forward direction — up to 9 squares. Does not promote.

**Silver General:** Moves one square in any diagonal direction, plus one square in any orthogonally forward direction — up to 8 squares. Promotes to a piece that moves like the Gold General.

**Lance:** Slides orthogonally forward only. On the hex board there are **two** forward directions, giving wider coverage than Shogi. Must promote upon reaching the last rank. Promotes to a piece that moves like the Gold General.

**Knight:** Leaps one square orthogonally forward, then one square diagonally outward (or equivalently: two steps in the same orthogonal-forward direction, then one step 60 degrees left or right). With two orthogonal-forward directions, a Knight can reach up to 4 squares. Must promote upon reaching either of the last two ranks. Promotes to Gold General movement.

**Pawn:** Moves and captures one square orthogonally forward. On the hex board there are **two** orthogonal-forward directions, so a Pawn can move to up to 2 squares. Must promote upon reaching the last rank. Promotes to **Tokin** (Gold General movement).

### Rules

**Win:** Checkmate the opponent's King.

All other Shogi rules apply: no passing, Sente (Black) moves first, pieces promote at most once.

### Attribution

Designed by Fergus Duniho. Rules documented from chessvariants.com/hexagonal.dir/hexshogi/hexshogi91.html.

*Note: The original build spec described this as a 3-player game. The actual game is 2-player.*
