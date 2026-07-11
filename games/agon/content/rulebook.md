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
---

## Agon

Amon is one of the oldest abstract strategy games with fully recorded rules, documented in France in 1842. It is played on a hexagonal board of 91 hexagons and won by being the first player to maneuver their Queen into the center hexagon surrounded by all six Guards.

### Board

The board is a regular hexagon composed of 91 smaller hexagons, arranged in 6 concentric rings around a single center hexagon.

- Center hex: 1
- Ring 1: 6 hexes
- Ring 2: 12 hexes
- Ring 3: 18 hexes
- Ring 4: 24 hexes
- Ring 5: 30 hexes

Total: 91 hexes.

The **center hex** (ring 0) is the goal. The **outer ring** (ring 5) is the perimeter — it is where pieces enter play and where captured pieces return.

### Pieces

Each player has:
- 1 **Queen** (distinct color and shape)
- 6 **Guards**

Pieces are differentiated by color (e.g., White and Black).

### Starting Position

Both players’ Queens start on the outer ring, on opposite sides of the board. The 6 Guards of each player occupy 6 of the remaining outer-ring positions near their Queen, spread symmetrically. The center hexes begin empty.

*In some editions, pieces are placed during the first moves of the game rather than from a fixed starting position. Either method is acceptable; fix one method before play begins.*

### Movement

On each turn, a player moves one of their pieces to an adjacent hex. A piece may move to any of the up to 6 hexes surrounding its current position, provided that hex is either empty or occupied by an opponent’s piece (to capture).

There is no jumping, no sliding beyond 1 hex. Both Queens and Guards move identically: 1 step to any adjacent hex.

**Restriction:** A player’s own pieces may not move onto a hex occupied by another of their own pieces.

### Capture

Capture in Agon is by **custodianship**: a piece is captured when, as a result of the moving player’s move, it is flanked on two opposite sides along one of the three hex axes by two enemy pieces.

- The captured piece must be between two enemy pieces along a straight hex line (one of the six straight-line directions of the hex grid).
- The capture is triggered by the flanking player moving one of their pieces into position — an already-flanked piece is not captured until an enemy actively completes the flank.
- A player may move a piece between two enemy pieces without being captured — custodian capture only occurs when an enemy piece moves to create the flank, not when the surrounded piece moves into the flank.

**Multiple captures:** If one move simultaneously creates custodian captures on multiple opponent pieces (across different axes), all captured pieces are removed.

### Returning to Play

A captured piece does not leave the game permanently. On the capturing player’s subsequent turn, instead of moving a piece already on the board, the capturing player must **return the captured piece to any empty square on the outer ring** (ring 5). (If multiple pieces have been captured and not yet returned, one is returned per turn in place of a normal move.)

The returning piece is under the control of its original owner from the moment it re-enters the board.

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

Agon. Documented in France, 1842; described in British and American game books from the 1870s onward. Public domain. Rules confirmed from historical game literature and Sid Sackson’s *A Gamut of Games* (1969).
