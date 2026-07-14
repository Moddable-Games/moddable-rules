---
title: Gygax Chess
slug: gygax
board: "12×8 (three levels)"
players: "2"
parent: moddable-chess
win: Checkmate
order: 1
special: "Three stacked 12×8 boards. 42 pieces per side across 15 piece types. Air, Land, and Subterranean realms. Gary Gygax, Dragon Magazine No. 100, 1985."
engine:
  topology:
    type: grid
    rows: 8
    cols: 12
    layers: 3
    layer_labels: ["Subterranean", "Land", "Air"]
  players: [gold, scarlet]
  setup:
    - "2G3R3G1/S1S1S1S1S1S1/12/12/12/12/s1s1s1s1s1s1/2g3r3g1"
    - "OUHTCMKPTHUO/WWWWWWWWWWWW/12/12/12/12/wwwwwwwwwwww/ouhtcmkpthuo"
    - "2B3E3B1/1D1D1D1D1D1D/12/12/12/12/1d1d1d1d1d1d/2b3e3b1"
  render:
    cellSize: 24
    layerColors:
      - cell-light: "#a0c8e8"
        cell-dark: "#6a9ec8"
      - cell-light: "#a8c890"
        cell-dark: "#6d9450"
      - cell-light: "#d4a080"
        cell-dark: "#a06848"
---

## Gygax Chess

Designed by Gary Gygax and published in *Dragon Magazine* No. 100 (TSR Inc., August 1985). Two players command 42 pieces across three stacked 12×8 boards. Gold moves first.

### The Three Boards

The boards are stacked vertically and share the same 12 files (a through l) and 8 ranks. Gold occupies ranks 1 and 2 on each board; Scarlet occupies ranks 7 and 8.

| Level | Name | Theme | Piece types |
|-------|------|-------|-------------|
| 3 | Air | Blue and white | Sylph, Griffon, Dragon |
| 2 | Land | Green and amber | Warrior, Oliphant, Unicorn, Hero, Thief, Cleric, Mage, King, Paladin |
| 1 | Subterranean | Red and brown | Dwarf, Basilisk, Elemental |

### Notation

Each square is identified by its level number, file letter, and rank number. Level 3 is the Air board (upper), Level 2 is Land (middle), Level 1 is Subterranean (lower).

Examples: `3g1` is Gold's Dragon starting square on the Air board. `2g1` is Gold's King start. `1g1` is Gold's Elemental start. `2g8` is Scarlet's King start.

Piece codes used in FEN notation below: G=Griffon, R=Dragon (not Rook), S=Sylph on Level 3. O=Oliphant, U=Unicorn, H=Hero, T=Thief, C=Cleric, M=Mage, K=King, P=Paladin, W=Warrior on Level 2. B=Basilisk, E=Elemental, D=Dwarf on Level 1. Uppercase = Gold, lowercase = Scarlet.

### Starting Positions

**Level 3 — Air**

{{svg:level3-start.svg "Gygax Chess — Level 3 Air starting position"}}

```
2G3R3G1/S1S1S1S1S1S1/12/12/12/12/s1s1s1s1s1s1/2g3r3g1
```

Gold rank 1: Griffons at 3c1 and 3k1; Dragon at 3g1. Gold rank 2: Sylphs at 3a2, 3c2, 3e2, 3g2, 3i2, 3k2.

**Level 2 — Land**

{{svg:level2-start.svg "Gygax Chess — Level 2 Land starting position"}}

```
OUHTCMKPTHUO/WWWWWWWWWWWW/12/12/12/12/wwwwwwwwwwww/ouhtcmkpthuo
```

Gold rank 1 from file a: Oliphant, Unicorn, Hero, Thief, Cleric, Mage, King, Paladin, Thief, Hero, Unicorn, Oliphant. Gold rank 2: twelve Warriors.

**Level 1 — Subterranean**

{{svg:level1-start.svg "Gygax Chess — Level 1 Subterranean starting position"}}

```
2B3E3B1/1D1D1D1D1D1D/12/12/12/12/1d1d1d1d1d1d/2b3e3b1
```

Gold rank 1: Basilisks at 1c1 and 1k1; Elemental at 1g1. Gold rank 2: Dwarves at 1b2, 1d2, 1f2, 1h2, 1j2, 1l2.

### Objective and Turn Structure

Win by checkmating the opponent's King. No castling. A player who cannot make any legal move loses.

Each turn consists of exactly one move on any of the three boards, including cross-level moves where a piece transitions between boards.

### Piece Values

Relative values from Gygax's original notes, useful for evaluating exchanges.

| Piece | Value | Piece | Value |
|-------|-------|-------|-------|
| Mage | 11 | Hero | 4.5 |
| Paladin | 10 | Thief | 4 |
| Cleric | 9 | Elemental | 4 |
| Dragon | 8 | Basilisk | 3 |
| Griffon | 5 | Unicorn | 2.5 |
| Oliphant | 5 | Dwarf | 2 |
| | | Sylph | 1 |
| | | Warrior | 1 |

---

### Level 3 Pieces — Air

#### Sylph (S)

The Sylph is the Air board's pawn and uses Berolina movement: it moves diagonally forward without capturing, and captures one square straight forward (the inverse of a standard pawn). No double initial step.

A Sylph may also capture an enemy piece on the Level 2 square directly below it, moving down one level. Once on Level 2, a Sylph may return to Level 3 only by moving to one of its six starting squares (3a2, 3c2, 3e2, 3g2, 3i2, or 3k2). This return move is not a capture. The Sylph has no promotion.

#### Griffon (G)

On Level 3, the Griffon makes an unblockable (3,2) leap: three squares in one orthogonal direction and two squares perpendicularly, or two squares in one direction and three perpendicularly. The Griffon may also move or capture via a space diagonal: one step diagonally on Level 3 and then one step down to the same file-and-rank position on Level 2.

On Level 2, the Griffon may only move or capture one square diagonally, or return to Level 3 via a space diagonal.

#### Dragon (R)

The Dragon never leaves Level 3. On its own board it moves and captures as a dragon horse: any number of squares diagonally (like a bishop), or exactly one square orthogonally.

**Remote capture:** without moving, the Dragon may capture any enemy piece on the Level 2 square directly below it, or on any of the four orthogonally adjacent Level 2 squares. A remote capture constitutes the Dragon's full move.

---

### Level 2 Pieces — Land

Level 2 is the primary battleground. The King begins here and is most commonly found here. Pieces with no cross-level move listed below are restricted to Level 2.

#### Warrior (W)

Standard pawn on Level 2. Moves one square straight forward without capturing; captures one square diagonally forward. No double initial step, no en passant. Promotes to Hero on reaching the furthest rank.

#### Oliphant (O)

Moves and captures as a chess Rook: any number of squares orthogonally. Restricted to Level 2.

#### Unicorn (U)

Moves and captures as a chess Knight: an unblockable (1,2) leap. Restricted to Level 2.

#### Hero (H)

On Level 2, the Hero moves or captures one or two squares diagonally, leaping over any intervening piece (unblockable). It may also cross to Level 1 or Level 3 via a space diagonal: one diagonal step on Level 2 followed by one level up or down.

On Level 1 or Level 3, the Hero may only move or capture back to Level 2 via a space diagonal from its current square.

#### Thief (T)

Moves and captures as a chess Bishop: any number of squares diagonally. Restricted to Level 2.

#### Cleric (C)

Moves and captures exactly one square in any direction (orthogonally or diagonally) on whichever board it occupies. It may also move or capture to the square directly above or below it on the adjacent level.

#### Mage (M)

On Level 2, the Mage moves and captures as a chess Queen: any number of squares orthogonally or diagonally. It may also step directly to the square above it (Level 3) or below it (Level 1).

On Level 1 or Level 3, the Mage may only move or capture one square orthogonally on that board. It may also move or capture one or two levels straight up or down from its position. When moving two levels (Level 1 to Level 3 or vice versa in a single move), the Level 2 square between them must be empty; the Mage cannot leap over an occupied middle-board square.

#### King (K)

On Level 2, the King moves and captures one square in any direction and may also step to the square directly above it (Level 3) or directly below it (Level 1). The King is in check whenever it could be captured.

On Level 1 or Level 3, the King's only legal action is to move or capture back to Level 2, returning to the square directly above or below. The King remains vulnerable to check on outer boards. No castling.

#### Paladin (P)

On Level 2, the Paladin moves and captures as a chess King (one step in any direction) or a chess Knight (an unblockable (1,2) leap).

On Level 1 or Level 3, the Paladin moves and captures as a chess King only.

From any level, the Paladin may make an unblockable three-dimensional knight move: two squares in any direction followed by one square perpendicularly (or one then two), crossing one or two levels. This cross-level move may be either a move or a capture.

---

### Level 1 Pieces — Subterranean

#### Dwarf (D)

On Level 1 or Level 2, the Dwarf moves without capturing one square straight forward or one square sideways. It captures one square diagonally forward. It cannot move backward.

Cross-level: the Dwarf captures upward from Level 1 to Level 2 by moving one square straight up. It moves downward from Level 2 to Level 1 without capturing. It has no promotion.

#### Basilisk (B)

Restricted to Level 1. The Basilisk moves or captures one square diagonally forward or one square straight forward. It may move (but not capture) one square straight backward.

**Freeze:** any enemy piece occupying the Level 2 square directly above a Basilisk is automatically immobilised and cannot move for as long as the Basilisk remains on that square. The freeze takes effect immediately when a piece moves onto the square above an existing Basilisk, and lifts the moment the Basilisk moves or is captured.

#### Elemental (E)

On Level 1, the Elemental moves or captures one or two squares orthogonally. It cannot leap over an occupied square when moving two squares. It may also move one square diagonally without capturing.

Cross-level capture from Level 1 to Level 2: the Elemental moves one square orthogonally on Level 1 and then one square straight up to Level 2. The Level 1 square it passes through must be empty.

On Level 2, the Elemental may only return to Level 1: it moves one square straight down and then one square orthogonally on Level 1. The Level 1 square directly below must be empty. This return may be a capture if an enemy piece occupies the final destination.

---

### Attribution

Designed by Gary Gygax. Published in *Dragon Magazine* No. 100 (TSR Inc., August 1985), pages 34–40. Game rules are not subject to copyright.

Authoritative secondary source: Edward Jackman with Hans Bodlaender, *Dragonchess*, chessvariants.com (1995–1996), which addresses ambiguities in Gygax's original description. This rulebook follows chessvariants.com where it conflicts with later re-descriptions, including a naming correction for Hero, Thief, Cleric, and Paladin relative to the Wikipedia article on Dragonchess.
