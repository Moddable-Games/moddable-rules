---
title: Sankaku Shogi
slug: sankaku-shogi
board: "44-cell triangular"
players: "2"
parent: shogi
playable: true
win: Capture the opponent's Emperor
special: "Modern Shogi variant on a 44-cell triangular board. 13 pieces per side: Emperor (leaps to any cell), Chariot (slides orthogonally, runs down Soldiers), Cavalry (leaps to second orthogonal), General (steps to any adjacent cell), and Soldiers. Captured pieces are removed permanently. Soldiers and Cavalry promote to General upon any capture."
verified:
  date: "2026-09-24"
  method: "The source page read in full from a screenshot supplied by the maintainer: its ASCII board diagram, its three movement-pattern diagrams, its piece rules, its set-up list and its starting-position picture. The diagram, the set-up list and the picture were checked against each other cell by cell."
  sources:
    - "https://www.chessvariants.com/44.dir/sankaku-shogi.html"
  findings:
    - "The board is ranks of 3, 5, 7, 7, 7, 7, 5 and 3 triangles from rank 8 to rank 1, 44 in all, on files a-g. The widest ranks are seven cells, not four; the per-row breakdown that summed to 23 had counted only one orientation."
    - "Orthogonal movement follows three strips of triangles - one along the ranks, one along each slant - 'with each step being from one cell to another which shares a complete side'. A cell has at most three orthogonal neighbours and six orthogonal directions, two along each strip."
    - "The second orthogonal is two steps along one strip."
    - "Adjacent is 'connected either by side or point': every cell sharing a corner, up to twelve. The page's six-triangle diagram illustrates it around one corner, which is where an earlier reading of 'up to 5' came from."
approximations:
  - feature: "How many Soldiers a Chariot may run down"
    source: "'A Chariot can also run down an opponent Soldier, capturing it and continuing its slide whether to a vacant or enemy-occupied cell.'"
    engine: "One Soldier per slide, as the sentence describes. The slide then ends on a vacant cell beyond it or by capturing the next enemy piece it meets, which may be another Soldier."
  - feature: "The Soldier's single step"
    source: "'The Soldier steps one orthogonal. May capture to the second orthogonal if the first is vacant.'"
    engine: "The step may capture as well as move, as a Shogi step does, in any of the three orthogonal directions: the page gives the Soldier no forward. The capture two cells along is capture-only."
  - feature: "Repetition"
    source: "'Repetition of position merely to avoid a capture is not allowed.'"
    engine: "Not enforced."
engine:
  topology:
    type: triangular
    cells: 44
    # One string per rank from rank 8, one character per file a-g: A a
    # triangle with its apex up, V apex down, . no cell. Read cell by cell
    # from the source's ASCII diagram.
    shape:
      - "..AVA.."
      - ".AVAVA."
      - "AVAVAVA"
      - "VAVAVAV"
      - "AVAVAVA"
      - "VAVAVAV"
      - ".VAVAV."
      - "..VAV.."
  players: [black, white]
  notation: algebraic
  setup: "2[cs][ep][cs]2/1[hn][hn][gj][hn][hn]1/1[sl][sl][sl][sl][sl]1/7/7/1[SL][SL][SL][SL][SL]1/1[HN][HN][GJ][HN][HN]1/2[CS][EP][CS]2"
  vocabulary:
    emperor: { symbols: { 0: EP, 1: ep } }
    chariot: { symbols: { 0: CS, 1: cs } }
    cavalry: { symbols: { 0: HN, 1: hn } }
    general: { symbols: { 0: GJ, 1: gj } }
    soldier: { symbols: { 0: SL, 1: sl } }
  pieces:
    set: mce-shogi-fairy
  render:
    cellSize: 44
    labels: true
  plugins:
    shogi:
      royalType: emperor
      # Won by taking the Emperor, so leaving it where it can be taken is a
      # legal move that loses.
      noCheck: true
      drops: false
      promotionZone: 0
      pieceMoves:
        emperor: { type: universal }
        chariot: { type: rider, dirs: orthogonal, runDown: { types: [soldier] } }
        cavalry: { type: leaper, offsets: second-orthogonal, relay: true }
        general: { type: leaper, offsets: adjacent }
        soldier:
          - { type: rider, dirs: orthogonal, maxSteps: 1 }
          - divergent:
              capture: { type: rider, dirs: orthogonal, minSteps: 2, maxSteps: 2 }
      promoteOnCapture:
        soldier: general
        cavalry: general
      captureImmunity:
        - { by: soldier, target: chariot }
        - { by: emperor, target: emperor, when: defended }
published: true
---

## Sankaku Shogi

{{svg:sankaku-shogi-board.svg "Sankaku Shogi — starting position"}}

Sankaku Shogi (三角将棋, "Triangle Shogi") is a modern Shogi-inspired variant designed by L. Lynn Smith in 2004. It is played on a field of 44 triangular cells. Each player controls 13 pieces. Unlike standard Shogi, captured pieces are permanently removed from play — there are no drops.

### Board

The playing field is 44 triangular cells on files a–g and ranks 1–8. It began as a diamond: "the two far cells were removed to limit 'choke' points and create a form of first rank for each player", and "the two cells on each side were removed to prevent direct lines of attack on the initial position of the Emperors". From rank 8 down to rank 1 the ranks hold 3, 5, 7, 7, 7, 7, 5 and 3 cells. Along a rank the triangles alternate apex up and apex down, so neighbouring files share a slanted side.

**Orthogonal** movement is "through the above patterns of triangles", the three strips the source draws: one along a rank and one along each slant, "with each step being from one cell to another which shares a complete side". A cell has at most three orthogonal neighbours and six orthogonal directions, two along each strip. The **second orthogonal** is two steps along one strip.

**Adjacent** movement is "the translation from one cell to another which connected either by side or point": every cell touching it at a side or a corner, up to twelve. The source illustrates it with the six triangles round one corner, any of which "could adjacently move to any of the other five cells".

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

**General:** Steps to any adjacent cell (connected by side or point — up to 12 cells).

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
