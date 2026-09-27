---
title: "Agon"
version: "0.1.0"
slug: "agon"
players: "2"
duration: "20–40 min"
age: "10+"
tagline: "Guide your Queen to the centre of a 91-hex board"
type: "standalone"
status: "live"
updated: "2026-07-06"
published: true
how_to_play: "Maneuver your Queen to the center hexagon and surround it with all six Guards. Pieces move one step to adjacent hexes, capturing by custodianship when flanking opponents on opposite sides."
mechanics: [abstract-strategy, movement, capture, hex, territory]
complexity: moderate
related: [fanorona, halma, tafl, surakarta]
theme:
  surface: light
  tint: cool
  texture: none
  cover: minimal
  typography: modern
  accent: purple
engine:
  topology:
    type: hex
    shape: hexagonal
    orientation: pointy
    radius: 5
  surface: cosmic
  render:
    cellSize: 22
    cellColor: bicolor
    frame: true
  pieces:
    set: playstrategy-go-classic
  players: [white, black]
  # A queen and six guards stepping on a hex board, played by the chess plugin
  # with the declarations below.
  plugin: chess
  plugins:
    agon:
      castling: false
      enPassant: false
      noCheck: true
      regions:
        throne: { ring: [0, 0] }
        outerRing: { ring: [5, 5] }
        notThrone: { not: [throne] }
      vocabulary:
        pawn: { symbols: {} }
        queen: { symbols: { 0: Q, 1: q } }
        guard: { symbols: { 0: P, 1: p } }
      pieces:
        # "Pieces move one step at a time to an adjacent cell, either sideways
        # in the same ring, or towards the throne to the next ring. The cell
        # moved to must be vacant. Only the queen may move to the throne."
        queen: { type: rider, dirs: orthogonal, maxSteps: 1, inward: true }
        guard: { type: rider, dirs: orthogonal, maxSteps: 1, inward: true, confine: notThrone }
      custodial: { dirs: orthogonal, displacement: false }
      # A captured piece goes back to its owner, who must return it on their
      # next turn: a guard to the outer ring, the queen anywhere, queen first.
      drops: true
      capturesTo: owner
      dropsCompulsory: true
      dropFirst: [queen]
      dropRegions:
        guard: outerRing
      goal: { piece: queen, in: throne, escort: guard }
verified:
  date: "2026-09-27"
  sources:
    - "https://en.wikipedia.org/wiki/Agon_(game)"
    - "https://www.bead.game/games/traditional/agon"
    - "https://www.mastersofgames.com/cat/board/agon-hexagon-game.htm (search summary only)"
  decisions:
    - "Movement, capture and the return of captured pieces are corrected from all three sources, which agree: pieces move sideways or inward and never outward, only the Queen enters the throne, capture is custodial, and a captured piece is put back by its owner on their next turn (a Guard on the outer ring, the Queen anywhere). The earlier text had capture by displacement and the capturer returning the piece."
    - "No source found for a rule that a piece moved to the outermost ring must move toward the centre on its next turn. It is not played."
disputed:
  - feature: "Moving between two enemy pieces"
    readings:
      - source: "https://en.wikipedia.org/wiki/Agon_(game), checked 2026-09-27"
        says: "Not forbidden"
        describes: "A piece is captured when two enemy pieces are on adjacent sides of it, in a straight line."
      - source: "https://www.bead.game/games/traditional/agon, checked 2026-09-27"
        says: "Forbidden"
        describes: "Pieces cannot move between two opponent beads."
    engine: "Not forbidden, and the piece is not captured"
    because: "Wikipedia and this rulebook both allow it, and custodial capture is made by the move that completes the line."
approximations:
  - feature: "A drawn game"
    source: "This rulebook, Draw"
    says: "Players may agree to a draw. No mandatory draw rule exists in the classic rules."
    engine: "A hundred plies without a capture is a draw."
    because: "The engine cannot ask two players to agree."
---

## Agon

{{svg:standard-board.svg "Agon — hexagonal board with 91 cells"}}

Agon is one of the oldest abstract strategy games with fully recorded rules, documented in France in 1842. It is played on a hexagonal board of 91 hexagons and won by being the first player to maneuver their Queen into the center hexagon surrounded by all six Guards.

### Board

The board is a regular hexagon composed of 91 smaller hexagons, arranged in 6 concentric rings around a single center hexagon.

- Center hex: 1
- Ring 1: 6 hexes
- Ring 2: 12 hexes
- Ring 3: 18 hexes
- Ring 4: 24 hexes
- Ring 5: 30 hexes

Total: 91 hexes.

The **center hex** (ring 0) is the goal. The **outer ring** (ring 5) is the perimeter, where the pieces start and where a captured Guard returns.

### Pieces

Each player has:
- 1 **Queen** (distinct color and shape)
- 6 **Guards**

Pieces are differentiated by color (e.g., White and Black).

### Starting Position

Both players’ Queens start on the outer ring, on opposite sides of the board. The 6 Guards of each player occupy 6 of the remaining outer-ring positions near their Queen, spread symmetrically. The center hexes begin empty.

*In some editions, pieces are placed during the first moves of the game rather than from a fixed starting position. Either method is acceptable; fix one method before play begins.*

### Movement

On each turn, a player moves one of their pieces one step to an adjacent vacant hex, either sideways within the same ring or inward to the next ring. A piece never moves outward, and never onto an occupied hex.

Only a Queen may enter the centre hex (the throne).

### Capture

Capture in Agon is by **custodianship**: a piece is captured when two enemy pieces stand on either side of it in a straight line.

- The capture is made by the move that completes the line. A player may move a piece between two enemy pieces without it being captured.
- If one move completes lines on more than one side, every piece so flanked is captured.

### Returning to Play

A captured piece does not leave the game. On their next turn, instead of moving a piece, its **owner** must put it back:

- a captured **Guard** goes on any vacant hex of the outer ring;
- a captured **Queen** goes on any vacant hex of the board.

If more than one piece was captured, the owner returns one per turn, and the Queen first.

### Win Condition

A player wins by achieving the following position simultaneously:
- Their **Queen** is on the center hex, AND
- All **six Guards** occupy the six hexes adjacent to the center (ring 1).

The center hex and its six neighbors must be entirely occupied by one player’s pieces: Queen in center, Guards surrounding.

This position must be achieved at the end of the winning player’s turn.

### Draw

If neither player can achieve the winning position and the game has been going on for a very long time without progress, players may agree to a draw. No mandatory draw rule exists in the classic rules.

### Strategy Notes

Achieving the win requires coordinating the Queen’s journey to the center with positioning all six Guards around the center simultaneously. Because Guards that are captured are returned to the outer ring (not permanently lost), the opponent can persistently disrupt the approach by capturing Guards and forcing the player to spend turns returning them rather than advancing.

The key strategic challenge: advance Guards toward the center while protecting them from custodian captures, and time the Queen’s arrival at the center with the Guards’ positioning.

### Attribution

Agon. Documented in France, 1842; described in British and American game books from the 1870s onward. Public domain. Documented at en.wikipedia.org/wiki/Agon_(game) and cyningstan.com. Rules confirmed from historical game literature and Sid Sackson’s *A Gamut of Games* (1969).
