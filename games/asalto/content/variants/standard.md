---
title: Asalto (Standard)
slug: standard
board: "asalto-standard"
players: "2"
parent: asalto
win: "Officers: capture enough Soldiers that the remaining force cannot surround both Officers. Soldiers: immobilize both Officers."
special: "Asymmetric siege game. Officers jump to capture (like draughts); Soldiers advance forward or sideways without jumping. Soldiers win by immobilizing; Officers win by reducing the Soldier force below the critical threshold."
published: true
engine:
  topology:
    type: graph
    structure: grid-cross
    params:
      rows: [[2,3,4],[2,3,4],[0,1,2,3,4,5,6],[0,1,2,3,4,5,6],[0,1,2,3,4,5,6],[2,3,4],[2,3,4]]
      fortressRows: 2
      diagonals: true
  players: [officers, soldiers]
  setup: "n4:O,n6:O,n7:S,n8:S,n12:S,n13:S,n14:S,n15:S,n16:S,n17:S,n18:S,n19:S,n20:S,n21:S,n22:S,n23:S,n24:S,n25:S,n26:S,n27:S,n28:S,n29:S,n30:S,n31:S,n32:S,n33:S"
---

## Asalto (Standard)

{{svg:standard-board.svg "Asalto (Standard) — starting position"}}

Published widely from the 1870s in Britain and Europe. Asalto is a heavily asymmetric game: 2 powerful Officers defend a small fortress against 24 Soldiers. The Officers capture by jumping; the Soldiers win by swarming and immobilizing.

### Board

The standard Asalto board has two sections connected at a junction line:

**The Fortress (upper section):** A cross-shaped grid with 9 main positions, connected to the plain below via 3 entry points along the bottom row of the fortress. Lines connect positions diagonally as well as orthogonally within the fortress.

**The Plain (lower section):** A 5×5 grid of 25 positions connected orthogonally and diagonally. The top row of the plain connects to the bottom row of the fortress.

Total positions: approximately 33 (varies slightly by edition).

### Pieces

- **2 Officers (White):** Start inside the fortress.
- **24 Soldiers (Black/Red):** Start on the plain, filling all or most plain positions.

### Movement

**Officers:**
- Move 1 step along any line (orthogonal or diagonal where connections exist) to an adjacent empty position.
- May capture by jumping over an adjacent Soldier to the next empty position along the same line (like draughts/checkers). The jumped Soldier is removed.
- Multiple captures in one turn are permitted if each jump is along a straight line extension.
- Officers may move backward.

**Soldiers:**
- Move 1 step along a line **forward or sideways only** (toward the fortress, or horizontally). Soldiers may NOT move backward (away from the fortress).
- Soldiers do NOT jump. They cannot capture.
- Soldiers may enter the fortress.

### Win Conditions

**Officers win** when they have captured enough Soldiers that the remaining Soldiers cannot simultaneously surround and immobilize both Officers. In practice, this is when fewer than ~16 Soldiers remain (the exact number depends on board position).

**Soldiers win** when both Officers are simultaneously immobilized — neither Officer has any legal move (every adjacent position is occupied by a Soldier, and no jump is available).

### Strategy

The Officers’ key challenge: jump-capture as many Soldiers as possible early while avoiding being cornered. Multiple consecutive jumps are powerful. Officers must not let both Officers become trapped in the fortress simultaneously.

The Soldiers’ key challenge: advance toward the fortress while preventing Officers from making long jump sequences. Soldiers should crowd both exits of the fortress to limit Officer mobility, while not giving the Officers easy capture sequences.

### Attribution

Asalto (Officers and Sepoys). Traditional Victorian board game, published widely from the 1870s. Predecessor: Fox and Geese. Public domain rule set.
