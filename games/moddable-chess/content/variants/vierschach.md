---
title: Vierschach
slug: vierschach
board: "cross-shaped, 160 squares (8×8 centre + four 3×8 extensions)"
players: "4"
parent: moddable-chess
win: Checkmate the last surviving enemy King
special: "Traditional German 4-player chess invented by Dr. G. Arthur Lutze (1813–1870). Cross-shaped 160-square board. Two teams of two, allied armies placed side by side. Standard FIDE movement. First enemy King may be captured normally; second enemy King must be checkmated."
engine:
  topology:
    type: grid
    rows: 14
    cols: 14
  players: [white, black]
  render:
    cellSize: 24
  setup: "14/14/14/3rnbqkbnr3/3pppppppp3/14/14/14/14/3PPPPPPPP3/3RNBQKBNR3/14/14/14"
---

## Vierschach

Vierschach (German: "Four Chess", also Viererschach) is a traditional German 4-player chess variant invented by Dr. G. Arthur Lutze (1813–1870) and documented by Theodor Müller-Alfeld. It was widely played in the 19th century and is one of the most historically established 4-player chess forms.

### The Board

A standard 8×8 chessboard is extended on each side by a 3×8 strip, creating a cross-shaped (+) board with **160 playable squares**. The overall bounding box is 14×14, with the four 3×3 corner sections off the board.

### Players and Teams

Four players:
- **South — White A** (back rank at bottom)
- **West — White B** (back rank at left)
- **North — Black A** (back rank at top)
- **East — Black B** (back rank at right)

**Teams:** White A + White B vs Black A + Black B. Crucially, allied armies are placed **side by side** (adjacent sides of the board), not opposite each other.

**Turn order:** White A → Black A → White B → Black B (alternating teams).

### Starting Position

Each player commands a complete FIDE chess army (King, Queen, 2 Rooks, 2 Bishops, 2 Knights, 8 Pawns).

**South (White A) — back rank left to right:** Rook · Knight · Bishop · King · Queen · Bishop · Knight · Rook, then Pawns on rank above.

**North (Black A) — back rank left to right:** rook · knight · bishop · king · queen · bishop · knight · rook, then Pawns on rank below.

**West (White B) — back rank top to bottom (leftmost column):** Rook · Knight · Bishop · Queen · King · Bishop · Knight · Rook, then Pawns in the next column.

**East (Black B) —** mirror of West in the right extension.

Queens start on their own color (black queens on black squares, white queens on white squares).

### Rules

All standard FIDE piece movement applies.

**En passant from the side:** En passant captures work in all directions. Example: if White A has a Pawn on l2 and Black B has a Pawn on m4, after 1. l2–l4 Black B may play m4×l3 e.p.

**Castling:** Allowed in both directions. Players generally prefer to castle toward their allied side.

**Pawn promotion (White A):** Pawns promote when they reach squares a11, b11, c11, m11, n11, o11 (the side-wing ranks of North's territory) or d14–h14 (North's back rank).

**Elimination:** If one King of a team is captured (which can happen normally, like any piece), the surviving forces of the captured King's team continue playing to support their remaining allied King.

### Win Condition

**Checkmate the last surviving enemy King.** The first enemy King may be captured at any point like a normal piece. The second (surviving) enemy King must be **checkmated** — not just captured — to win the game.

### Attribution

Invented by Dr. G. Arthur Lutze (1813–1870). Documented by Theodor Müller-Alfeld and Heinz Machatscheck. Rules documented from chessvariants.com/multiplayer.dir/vierschach.html (Jörg Knappen, 2002).
