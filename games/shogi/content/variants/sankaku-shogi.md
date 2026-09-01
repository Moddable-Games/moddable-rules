---
title: Sankaku Shogi
slug: sankaku-shogi
board: "44-cell triangular"
players: "2"
parent: shogi
win: Capture the opponent's Emperor
special: "Modern Shogi variant on a 44-cell triangular board. 13 pieces per side: Emperor (leaps to any cell), Chariot (slides orthogonally, runs down Soldiers), Cavalry (leaps to second orthogonal), General (steps to any adjacent cell), and Soldiers. Captured pieces are removed permanently. Soldiers and Cavalry promote to General upon any capture."
verified:
  date: "2026-08-31"
  method: "Desktop web research. Statements here are traceable to the sources below; anything that could not be confirmed is listed under unverified and must not be filled in from memory."
  sources:
    - "https://www.chessvariants.com/44.dir/sankaku-shogi.html"
  unverified:
    - "The exact row-by-row board shape and triangle orientations. The total of 44 cells is stated twice; a per-row breakdown obtained once summed to 23 and is not trusted."
    - "The true neighbour count per triangular cell under each relation."
    - "What 'the second orthogonal' means on a triangular grid - two edge-steps in a line, and how a line is defined at all. This is geometrically non-obvious and the engine cannot be written without it."
    - "Whether the Chariot's 'run down' can take several Soldiers in one slide."
unsupported: "A triangular tiling with TWO different adjacency relations that different pieces use - edge-sharing only for 'orthogonal', edge-or-vertex for 'adjacent'. Also needs a rock-paper-scissors capture immunity (Soldiers cannot capture Chariots; Chariots capture Soldiers and continue sliding), promotion triggered by CAPTURE rather than by zone, and an Emperor that leaps to any cell but may not capture a defended enemy Emperor, which requires evaluating defendedness. No drops: captures leave play permanently."
engine:
  topology:
    type: triangular
    cells: 44
  players: [black, white]
  notation: algebraic
  drops: false
published: true
---

## Sankaku Shogi

{{svg:sankaku-shogi-board.svg "Sankaku Shogi — starting position"}}

Sankaku Shogi (三角将棋, "Triangle Shogi") is a modern Shogi-inspired variant designed by L. Lynn Smith in 2004. It is played on a field of 44 triangular cells. Each player controls 13 pieces. Unlike standard Shogi, captured pieces are permanently removed from play — there are no drops.

### Board

The playing field consists of 44 triangular cells in a diamond pattern with the four extreme corners removed to reduce choke points. Files are labeled a–g; ranks 1–8. The field is narrowest at ranks 1 and 8 (2 cells wide) and widest at ranks 4 and 5 (4 cells wide).

Orthogonal movement is through shared sides (each step from one cell to the next sharing a complete side). Adjacent movement includes cells connected by either side or point — giving each interior cell up to 5 neighbours.

### Starting Position

**Black:**
- Emperor: d1
- Chariots: c1, e1
- Cavalry: b2, c2, e2, f2
- General: d2
- Soldiers: b3, c3, d3, e3, f3

**White:**
- Emperor: d8
- Chariots: c8, e8
- Cavalry: b7, c7, e7, f7
- General: d7
- Soldiers: b6, c6, d6, e6, f6

### Pieces

**Emperor:** Leaps to any cell on the entire board. Cannot capture an opponent Emperor that is defended (any opponent piece could recapture on that square).

**Chariot:** Slides orthogonally any number of cells. Cannot be captured by Soldiers. Can "run down" a Soldier: captures the Soldier and continues sliding to end on a vacant cell or capture another piece.

**General:** Steps to any adjacent cell (connected by side or point — up to 5 cells).

**Cavalry:** Leaps to the second orthogonal cell. If that cell is occupied by a friendly piece, the Cavalry makes one additional leap in any direction (not returning to start). The second leap must land on a vacant or enemy-occupied cell.

**Soldier:** Steps one orthogonal. May capture on the second orthogonal cell if the first orthogonal cell is vacant. Cannot capture Chariots. Mandatorily promotes to General upon making any capture.

### Promotion

Soldiers and Cavalry **promote to General immediately and mandatorily upon making any capture**. There is no optional promotion and no promotion zone. Generals, Emperors, and Chariots do not promote.

### Rules

- Black moves first.
- Each player must move every turn — passing is not allowed.
- All captured pieces are permanently removed (no drops, no recycling).
- **Win:** Capture the opponent's Emperor.
- **Repetition:** A player may not repeat a position solely to avoid capture.

### Attribution

Designed by L. Lynn Smith, 2004. Rules documented from chessvariants.com/44.dir/sankaku-shogi.html.
