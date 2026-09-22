---
playable: true
title: Gygax Chess
slug: gygax
board: "12×8 (three levels)"
players: "2"
parent: chess
win: Checkmate
order: 1
special: "Three stacked 12×8 boards. 42 pieces per side across 15 piece types. Air, Land, and Subterranean realms. Gary Gygax, Dragon Magazine No. 100, 1985."
engine:
  topology:
    type: grid
    rows: 8
    cols: 12
    layers: 3
    # Listed top to bottom, the order of the setup below: the source numbers
    # the boards the same way, "TOP (1)", "MIDDLE (2)", "BOTTOM (3)".
    layer_labels: ["Air", "Land", "Subterranean"]
    # The three boards are one volume: pieces cross between them as ordinary
    # moves. A direction is [row, column, level] and a positive level step is
    # downward, from the sky towards the underworld.
    layerAdjacency: stacked
  # Richard Ryley's icons, one for each of the fifteen pieces:
  # boardgamegeek.com/filepage/229556. Gold and Scarlet, as the sides are
  # named; `ryley-gygax` has the same pieces in all four colours.
  pieces:
    set: ryley-gygax-gold-scarlet
  players: [gold, scarlet]
  setup:
    - "2g3r3g1/s1s1s1s1s1s1/12/12/12/12/S1S1S1S1S1S1/2G3R3G1"
    - "ouhtcmkpthuo/wwwwwwwwwwww/12/12/12/12/WWWWWWWWWWWW/OUHTCMKPTHUO"
    - "2b3e3b1/1d1d1d1d1d1d/12/12/12/12/1D1D1D1D1D1D/2B3E3B1"
  render:
    cellSize: 24
    layerColors:
      - cell-light: "#a0c8e8"
        cell-dark: "#6a9ec8"
      - cell-light: "#a8c890"
        cell-dark: "#6d9450"
      - cell-light: "#d4a080"
        cell-dark: "#a06848"
  castling: false
  enPassant: false
  doubleStep: false
  # "The Warrior has nearly the same move as the chess Pawn ... On reaching the
  # opponent's baseline, the Warrior promotes to a Hero only."
  pawnType: warrior
  promotionChoices: [hero]
  # "Though the Basilisk is restricted to the bottom board, it has the power to
  # freeze any opposing piece on the cell directly above it on the middle
  # board." The frozen piece's offset to the Basilisk is one level down.
  freeze:
    - by: basilisk
      at: [0, 0, 1]
  regions:
    air: { layers: [0, 0] }
    land: { layers: [1, 1] }
    below: { layers: [2, 2] }
    # "any empty one of the six home cells that any friendly Sylph occupied at
    # the start of the game"
    sylphHome:
      layers: [0, 0]
      cells:
        - [[6, 0], [6, 2], [6, 4], [6, 6], [6, 8], [6, 10]]
        - [[1, 0], [1, 2], [1, 4], [1, 6], [1, 8], [1, 10]]
  vocabulary:
    # R, B and P are the Dragon, Basilisk and Paladin here.
    rook: { symbols: {} }
    bishop: { symbols: {} }
    pawn: { symbols: {} }
    sylph: { symbols: { 0: S, 1: s } }
    griffon: { symbols: { 0: G, 1: g } }
    dragon: { symbols: { 0: R, 1: r } }
    warrior: { symbols: { 0: W, 1: w } }
    oliphant: { symbols: { 0: O, 1: o } }
    unicorn: { symbols: { 0: U, 1: u } }
    hero: { symbols: { 0: H, 1: h } }
    thief: { symbols: { 0: T, 1: t } }
    cleric: { symbols: { 0: C, 1: c } }
    mage: { symbols: { 0: M, 1: m } }
    paladin: { symbols: { 0: P, 1: p } }
    basilisk: { symbols: { 0: B, 1: b } }
    elemental: { symbols: { 0: E, 1: e } }
    dwarf: { symbols: { 0: D, 1: d } }
  plugins:
    chess:
      # Every direction is listed in full. On a stacked board the named sets
      # ("orthogonal", "all", "knight") are those of a volume, and almost
      # every Gygax Chess piece moves on its own board only.
      pieces:
        warrior:
          movement: pawn
        sylph:
          directional: true
          type: positional
          cases:
            # "When not capturing, it moves one space diagonally towards the
            # opponent's side. It may capture by moving directly ahead one space
            # ... It may also capture by moving straight down to the middle
            # board."
            - in: air
              move:
                divergent:
                  move: { type: leaper, offsets: [[-1, -1], [-1, 1]] }
                  capture: { type: leaper, offsets: [[-1, 0], [0, 0, 1]] }
            # "While on the middle board, the Sylph cannot move at all except to
            # make a non-capturing move back to the top board."
            - in: land
              move:
                type: compose
                parts:
                  - divergent:
                      move: { type: leaper, offsets: [[0, 0, -1]] }
                      capture: { type: leaper, offsets: [] }
                  - { type: warp, to: sylphHome }
        griffon:
          type: positional
          cases:
            # "three squares one direction and then two squares perpendicularly
            # ... to any of the cells diagonally adjacent to the cell directly
            # below it."
            - in: air
              move:
                type: leaper
                offsets: [[-3, -2], [-3, 2], [-2, -3], [-2, 3], [2, -3], [2, 3], [3, -2], [3, 2], [-1, -1, 1], [-1, 1, 1], [1, -1, 1], [1, 1, 1]]
            # "one square diagonally, or return to the top board ... to one of
            # the cells diagonally adjacent to the cell above it."
            - in: land
              move:
                type: leaper
                offsets: [[-1, -1], [-1, 1], [1, -1], [1, 1], [-1, -1, -1], [-1, 1, -1], [1, -1, -1], [1, 1, -1]]
        # "The Dragon cannot move off the top board. It may move or capture with
        # the power of a chess Bishop or King. Instead of moving ... one enemy
        # piece that is either in the cell directly below the Dragon or
        # orthogonally adjacent to the cell below the Dragon is removed."
        dragon:
          type: compose
          parts:
            - { type: rider, dirs: [[-1, -1], [-1, 1], [1, -1], [1, 1]] }
            - { type: leaper, offsets: [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]] }
            - { type: shoot, dirs: [[0, 0, 1], [-1, 0, 1], [1, 0, 1], [0, -1, 1], [0, 1, 1]] }
        oliphant:
          type: rider
          dirs: [[-1, 0], [1, 0], [0, -1], [0, 1]]
        unicorn:
          type: leaper
          offsets: [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]
        thief:
          type: rider
          dirs: [[-1, -1], [-1, 1], [1, -1], [1, 1]]
        hero:
          type: positional
          cases:
            # "one or two cells diagonally, jumping over a piece of either color
            # ... to a cell diagonally adjacent to the cell directly above or
            # below it."
            - in: land
              move:
                type: leaper
                offsets: [[-1, -1], [-1, 1], [1, -1], [1, 1], [-2, -2], [-2, 2], [2, -2], [2, 2], [-1, -1, -1], [-1, 1, -1], [1, -1, -1], [1, 1, -1], [-1, -1, 1], [-1, 1, 1], [1, -1, 1], [1, 1, 1]]
            # "While on the top or bottom board, the Hero cannot move except to
            # return to the middle board." Every corner step off the stack is
            # dropped, so the eight leave only the four back to the middle.
            # Off the middle board: the land case above did not match.
            - move:
                type: leaper
                offsets: [[-1, -1, -1], [-1, 1, -1], [1, -1, -1], [1, 1, -1], [-1, -1, 1], [-1, 1, 1], [1, -1, 1], [1, 1, 1]]
        # "exactly as a chess King does on whichever board it happens to be on.
        # It may also move or capture to the cell directly above or below it."
        cleric:
          type: leaper
          offsets: [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1], [0, 0, -1], [0, 0, 1]]
        mage:
          type: positional
          cases:
            # "exactly as a chess Queen while on the middle board and may also
            # move and capture to the cell above and below it."
            - in: land
              move:
                type: compose
                parts:
                  - { type: rider, dirs: [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]] }
                  - { type: leaper, offsets: [[0, 0, -1], [0, 0, 1]] }
            # "one cell forward, backward, right or left ... one or two cells
            # straight up or down. It may NOT leap over a piece on the middle
            # board."
            # Off the middle board: the land case above did not match.
            - move:
                type: compose
                parts:
                  - { type: leaper, offsets: [[-1, 0], [1, 0], [0, -1], [0, 1]] }
                  - { type: rider, dirs: [[0, 0, -1], [0, 0, 1]], maxSteps: 2 }
        king:
          royal: true
          type: positional
          cases:
            # "the normal move and capture of a chess King and may also move and
            # capture to the cell above and below it."
            - in: land
              move:
                type: leaper
                offsets: [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1], [0, 0, -1], [0, 0, 1]]
            # "the ONLY thing the King may do is move or capture to the cell
            # directly above it or below it back on the middle board."
            # Off the middle board: the land case above did not match.
            - move:
                type: leaper
                offsets: [[0, 0, -1], [0, 0, 1]]
        paladin:
          type: positional
          cases:
            # "as a chess King or Knight while on the middle board ... as a
            # chess King while on the top or bottom boards. It may move or
            # capture from board to board by making a 3d Knight's move."
            - in: land
              move:
                type: leaper
                offsets: [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1], [-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1], [-2, 0, -1], [2, 0, -1], [0, -2, -1], [0, 2, -1], [-2, 0, 1], [2, 0, 1], [0, -2, 1], [0, 2, 1], [-1, 0, -2], [1, 0, -2], [0, -1, -2], [0, 1, -2], [-1, 0, 2], [1, 0, 2], [0, -1, 2], [0, 1, 2]]
            # Off the middle board: the land case above did not match.
            - move:
                type: leaper
                offsets: [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1], [-2, 0, -1], [2, 0, -1], [0, -2, -1], [0, 2, -1], [-2, 0, 1], [2, 0, 1], [0, -2, 1], [0, 2, 1], [-1, 0, -2], [1, 0, -2], [0, -1, -2], [0, 1, -2], [-1, 0, 2], [1, 0, 2], [0, -1, 2], [0, 1, 2]]
        dwarf:
          directional: true
          type: positional
          cases:
            # "capture one cell diagonally forward or move without capturing one
            # cell forward or laterally. It may move up to the middle board by
            # capturing to the cell directly above."
            - in: below
              move:
                divergent:
                  move: { type: leaper, offsets: [[-1, 0], [0, -1], [0, 1]] }
                  capture: { type: leaper, offsets: [[-1, -1], [-1, 1], [0, 0, -1]] }
            # "It may move back to the bottom board by making a non-capturing
            # move to the cell directly below."
            - in: land
              move:
                divergent:
                  move: { type: leaper, offsets: [[-1, 0], [0, -1], [0, 1], [0, 0, 1]] }
                  capture: { type: leaper, offsets: [[-1, -1], [-1, 1]] }
        # "move or capture one cell directly or diagonally forward and may also
        # move without capturing one cell straight backwards."
        basilisk:
          directional: true
          type: divergent
          divergent:
            move: { type: leaper, offsets: [[-1, 0], [-1, -1], [-1, 1], [1, 0]] }
            capture: { type: leaper, offsets: [[-1, 0], [-1, -1], [-1, 1]] }
        elemental:
          type: positional
          cases:
            # "one or two cells orthogonally. (It may NOT leap over occupied
            # cells.) It may also move but not capture one cell diagonally. It
            # may also make a capturing move to the middle board by moving one
            # cell orthogonally and then one cell up. The intermediate cell MUST
            # be empty."
            - in: below
              move:
                type: compose
                parts:
                  - { type: rider, dirs: [[-1, 0], [1, 0], [0, -1], [0, 1]], maxSteps: 2 }
                  - divergent:
                      move: { type: leaper, offsets: [[-1, -1], [-1, 1], [1, -1], [1, 1]] }
                      capture: { type: leaper, offsets: [[-1, 0, -1], [1, 0, -1], [0, -1, -1], [0, 1, -1]], lame: plane }
            # "The Elemental may not move while on the middle board except to
            # return to the bottom by moving or capturing one cell down and then
            # one cell orthogonally. The intermediate cell MUST be empty."
            - in: land
              move:
                type: leaper
                offsets: [[-1, 0, 1], [1, 0, 1], [0, -1, 1], [0, 1, 1]]
                lame: layer
---

## Gygax Chess

Designed by Gary Gygax and published in *Dragon Magazine* No. 100 (TSR Inc., August 1985). Two players command 42 pieces across three stacked 12×8 boards. Gold moves first.

### The Three Boards

The boards are stacked vertically and share the same 12 files (a through l) and 8 ranks. Gold occupies ranks 1 and 2 on each board; Scarlet occupies ranks 7 and 8.

| Level | Name | Theme | Piece types |
|-------|------|-------|-------------|
| 1 | Air | Blue and white | Sylph, Griffon, Dragon |
| 2 | Land | Green and amber | Warrior, Oliphant, Unicorn, Hero, Thief, Cleric, Mage, King, Paladin |
| 3 | Subterranean | Red and brown | Dwarf, Basilisk, Elemental |

### Notation

Each square is identified by its level number, file letter, and rank number. Level 1 is the Air board (upper), Level 2 is Land (middle), Level 3 is Subterranean (lower).

Examples: `1g1` is Gold's Dragon starting square on the Air board. `2g1` is Gold's King start. `3g1` is Gold's Elemental start. `2g8` is Scarlet's King start.

Piece codes used in FEN notation below: G=Griffon, R=Dragon (not Rook), S=Sylph on Level 1. O=Oliphant, U=Unicorn, H=Hero, T=Thief, C=Cleric, M=Mage, K=King, P=Paladin, W=Warrior on Level 2. B=Basilisk, E=Elemental, D=Dwarf on Level 3. Uppercase = Gold, lowercase = Scarlet.

### Starting Positions

**Level 1 — Air**

{{svg:gygax-board.svg "Gygax Chess — three-level starting position"}}

```
2g3r3g1/s1s1s1s1s1s1/12/12/12/12/S1S1S1S1S1S1/2G3R3G1
```

Gold rank 1: Griffons at 1c1 and 1k1; Dragon at 1g1. Gold rank 2: Sylphs at 1a2, 1c2, 1e2, 1g2, 1i2, 1k2.

**Level 2 — Land**

```
ouhtcmkpthuo/wwwwwwwwwwww/12/12/12/12/WWWWWWWWWWWW/OUHTCMKPTHUO
```

Gold rank 1 from file a: Oliphant, Unicorn, Hero, Thief, Cleric, Mage, King, Paladin, Thief, Hero, Unicorn, Oliphant. Gold rank 2: twelve Warriors.

**Level 3 — Subterranean**

```
2b3e3b1/1d1d1d1d1d1d/12/12/12/12/1D1D1D1D1D1D/2B3E3B1
```

Gold rank 1: Basilisks at 3c1 and 3k1; Elemental at 3g1. Gold rank 2: Dwarves at 3b2, 3d2, 3f2, 3h2, 3j2, 3l2.

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

### Level 1 Pieces — Air

#### Sylph (S)

The Sylph is the Air board's pawn and uses Berolina movement: it moves diagonally forward without capturing, and captures one square straight forward (the inverse of a standard pawn). No double initial step.

A Sylph may also capture an enemy piece on the Level 2 square directly below it, moving down one level. Once on Level 2, a Sylph cannot move at all except back up to Level 1: to the square directly above it, or to any empty one of the six starting squares (1a2, 1c2, 1e2, 1g2, 1i2, or 1k2). This return move is not a capture. The Sylph has no promotion.

#### Griffon (G)

On Level 1, the Griffon makes an unblockable (3,2) leap: three squares in one orthogonal direction and two squares perpendicularly, or two squares in one direction and three perpendicularly. The Griffon may also move or capture via a space diagonal: one step diagonally on Level 1 and then one step down to the same file-and-rank position on Level 2.

On Level 2, the Griffon may only move or capture one square diagonally, or return to Level 1 via a space diagonal.

#### Dragon (R)

The Dragon never leaves Level 1. On its own board it moves and captures as a dragon horse: any number of squares diagonally (like a bishop), or exactly one square orthogonally.

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

On Level 2, the Hero moves or captures one or two squares diagonally, leaping over any intervening piece (unblockable). It may also cross to Level 3 or Level 1 via a space diagonal: one diagonal step on Level 2 followed by one level up or down.

On Level 3 or Level 1, the Hero may only move or capture back to Level 2 via a space diagonal from its current square.

#### Thief (T)

Moves and captures as a chess Bishop: any number of squares diagonally. Restricted to Level 2.

#### Cleric (C)

Moves and captures exactly one square in any direction (orthogonally or diagonally) on whichever board it occupies. It may also move or capture to the square directly above or below it on the adjacent level.

#### Mage (M)

On Level 2, the Mage moves and captures as a chess Queen: any number of squares orthogonally or diagonally. It may also step directly to the square above it (Level 1) or below it (Level 3).

On Level 3 or Level 1, the Mage may only move or capture one square orthogonally on that board. It may also move or capture one or two levels straight up or down from its position. When moving two levels (Level 3 to Level 1 or vice versa in a single move), the Level 2 square between them must be empty; the Mage cannot leap over an occupied middle-board square.

#### King (K)

On Level 2, the King moves and captures one square in any direction and may also step to the square directly above it (Level 1) or directly below it (Level 3). The King is in check whenever it could be captured.

On Level 3 or Level 1, the King's only legal action is to move or capture back to Level 2, returning to the square directly above or below. The King remains vulnerable to check on outer boards. No castling.

#### Paladin (P)

On Level 2, the Paladin moves and captures as a chess King (one step in any direction) or a chess Knight (an unblockable (1,2) leap).

On Level 3 or Level 1, the Paladin moves and captures as a chess King only.

From any level, the Paladin may make an unblockable three-dimensional knight move: two squares in any direction followed by one square perpendicularly (or one then two), crossing one or two levels. This cross-level move may be either a move or a capture.

---

### Level 3 Pieces — Subterranean

#### Dwarf (D)

On Level 3 or Level 2, the Dwarf moves without capturing one square straight forward or one square sideways. It captures one square diagonally forward. It cannot move backward.

Cross-level: the Dwarf captures upward from Level 3 to Level 2 by moving one square straight up. It moves downward from Level 2 to Level 3 without capturing. It has no promotion.

#### Basilisk (B)

Restricted to Level 3. The Basilisk moves or captures one square diagonally forward or one square straight forward. It may move (but not capture) one square straight backward.

**Freeze:** any enemy piece occupying the Level 2 square directly above a Basilisk is automatically immobilised and cannot move for as long as the Basilisk remains on that square. The freeze takes effect immediately when a piece moves onto the square above an existing Basilisk, and lifts the moment the Basilisk moves or is captured.

#### Elemental (E)

On Level 3, the Elemental moves or captures one or two squares orthogonally. It cannot leap over an occupied square when moving two squares. It may also move one square diagonally without capturing.

Cross-level capture from Level 3 to Level 2: the Elemental moves one square orthogonally on Level 3 and then one square straight up to Level 2. The Level 3 square it passes through must be empty.

On Level 2, the Elemental may only return to Level 3: it moves one square straight down and then one square orthogonally on Level 3. The Level 3 square directly below must be empty. This return may be a capture if an enemy piece occupies the final destination.

---

### Attribution

Designed by Gary Gygax. Published in *Dragon Magazine* No. 100 (TSR Inc., August 1985), pages 34–40. Game rules are not subject to copyright.

Authoritative secondary source: Edward Jackman with Hans Bodlaender, *Dragonchess*, chessvariants.com (1995–1996), which addresses ambiguities in Gygax's original description. This rulebook follows chessvariants.com where it conflicts with later re-descriptions, including a naming correction for Hero, Thief, Cleric, and Paladin relative to the Wikipedia article on Dragonchess.
