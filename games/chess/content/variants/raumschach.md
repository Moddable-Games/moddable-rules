---
title: "Raumschach"
slug: raumschach
board: "5×5×5 (3D)"
players: "2"
parent: chess
win: "Checkmate"
special: "Three-dimensional chess on five stacked 5×5 boards. Adds the Unicorn (triagonal slider). Pawns move forward or upward; capture diagonally. No castling, no en passant, no double push."
engine:
  topology:
    type: grid
    rows: 5
    cols: 5
    layers: 5
    layer_labels: ["A", "B", "C", "D", "E"]
  players: [white, black]
  setup:
    - "5/5/5/PPPPP/RNKNR"
    - "5/5/5/PPPPP/BUQBU"
    - "5/5/5/5/5"
    - "buqbu/ppppp/5/5/5"
    - "rnknr/ppppp/5/5/5"
  render:
    cellSize: 24
  notation: level-file-rank
  rendering_note: "This layered setup uses the same engine.topology pattern already live for Gygax Chess (grid + layers, one FEN string per layer) and should render the static starting-position diagram now, the same way Gygax's is rendered. This does NOT solve piece movement/play: Raumschach's Rook, Bishop, and Unicorn slide arbitrary distances along the level axis and combinations of axes, which Gygax's per-piece single-step cross-level moves do not support. Play/move-generation remains a separate, larger engine task -- this frontmatter change only unblocks the rulebook diagram."
published: true
status: draft
updated: 2026-07-16
category: expanded-boards
order:
tags:
  - 3d
  - spatial
  - unicorn
  - historical
---

# Raumschach

Raumschach ("Space Chess" in German) is a three-dimensional chess variant invented by Ferdinand Maack in 1907. It is played on five stacked 5×5 boards, each called a **level**, giving a total space of 5×5×5 = 125 squares. Raumschach adds one new piece to the standard set: the **Unicorn**, which slides along the triagonal axes of the three-dimensional board.

## The Board

The board consists of five levels, labelled **A** through **E** from bottom (White's side) to top (Black's side). Each level is a 5×5 grid with files **a–e** and ranks **1–5**.

Squares are written as **Level + file + rank**. For example, **Bc3** means Level B, file c, rank 3. **Aa1** is the bottom-left corner of the lowest level.

White's pieces occupy levels A and B at the start; Black's occupy levels D and E. Level C is empty.

## Starting Position

### White (ranks 1–2 of levels A and B)

**Level A, Rank 1:** Rook(a), Knight(b), King(c), Knight(d), Rook(e)
**Level A, Rank 2:** five Pawns (Aa2–Ae2)

**Level B, Rank 1:** Bishop(a), Unicorn(b), Queen(c), Bishop(d), Unicorn(e)
**Level B, Rank 2:** five Pawns (Ba2–Be2)

### Black (ranks 4–5 of levels D and E)

**Level D, Rank 5:** Bishop(a), Unicorn(b), Queen(c), Bishop(d), Unicorn(e)
**Level D, Rank 4:** five Pawns (Da4–De4)

**Level E, Rank 5:** Rook(a), Knight(b), King(c), Knight(d), Rook(e)
**Level E, Rank 4:** five Pawns (Ea4–Ee4)

Each side begins with 20 pieces: 2 Rooks, 2 Knights, 2 Bishops, 2 Unicorns, 1 Queen, 1 King, and 10 Pawns.

The `engine.setup` array above encodes this as one FEN-style row-group per level (A through E), matching the pattern already proven for Gygax Chess's three-level board, using U for Unicorn to avoid clashing with Knight's standard N.

## Piece Movement

In three-dimensional chess, movement is defined by how many of the three axes (rank, file, level) change simultaneously:

- **Orthogonal (1 axis):** only rank, only file, or only level changes
- **Diagonal (2 axes):** any two axes change simultaneously
- **Triagonal (3 axes):** all three axes change simultaneously, one step each

### Rook

Slides any number of squares along a **single axis** (rank, file, or level). Cannot jump over pieces. In 3D space the Rook has 6 orthogonal sliding directions (±rank, ±file, ±level).

### Bishop

Slides any number of squares along a **two-axis diagonal** (rank+file, rank+level, or file+level, in any combination of signs). Cannot jump over pieces. In 3D space the Bishop has 12 diagonal sliding directions.

### Unicorn (U)

The Unicorn slides any number of squares along a **triagonal** — moving simultaneously one step in all three axes with each step. Cannot jump over pieces. In 3D space the Unicorn has 8 triagonal directions (all 8 combinations of ±rank, ±file, ±level).

The Unicorn is colour-bound within the 3D lattice: on a 5×5×5 board, triagonals partition squares into two disjoint sets. A Unicorn can never change its triagonal colour.

### Queen

Combines the Rook and Bishop (orthogonal and two-axis diagonal slides). Does **not** include the Unicorn's triagonal move. Cannot jump over pieces.

### Knight

Leaps to any square exactly **2 steps in one axis and 1 step in another** (the standard chess knight jump, extended to 3D). This gives up to 24 destinations from a central square. Always jumps over intervening pieces.

### King

Moves one step in any direction — orthogonal, two-axis diagonal, or triagonal — giving up to 26 possible destinations from an interior square. Cannot move into check.

### Pawn

White Pawns move toward Black's starting area (increasing rank and/or increasing level).

**Non-capturing moves (White):**
- **Straight-forward:** advance one rank on the same level (e.g., Aa2 → Aa3)
- **Straight-upward:** advance one level at the same file and rank (e.g., Aa2 → Ba2)

**Capturing moves (White):**
- **Diagonally-forward:** advance one rank while also moving one step in file (same level, e.g., Aa2 → Ab3)
- **Diagonally-forward-upward:** advance one rank and one level simultaneously (e.g., Aa2 → Bb3)

Black Pawns move in the opposite direction (decreasing rank and/or decreasing level), with equivalent capture directions.

**Pawn rules:**
- No initial two-square advance. All Pawn moves are one step.
- No en passant.
- White Pawns promote on **rank 5 of level A or B**. Black Pawns promote on **rank 1 of level D or E**. Pawns that move into levels C, D, or E without reaching rank 5 of a qualifying level do not promote there.

## Special Rules

- **No castling.**
- **No en passant.**
- **No double pawn push.**
- Stalemate is a draw.

## Notation

Squares are written as Level (A–E), file (a–e), rank (1–5). Examples:
- **Aa1** — Level A, file a, rank 1 (White's back-left corner)
- **Bc3** — Level B, file c, rank 3 (centre of level B)
- **Ec5** — Level E, file c, rank 5 (Black's back-centre)

Moves: piece letter, origin square, hyphen, destination. Example: **R Aa1–Aa4** (Rook from Aa1 to Aa4).

## Attribution

Raumschach was invented by Ferdinand Maack (Germany, 1907). Rules sourced from The Chess Variant Pages at chessvariants.com/3d.dir/3d5.html.
