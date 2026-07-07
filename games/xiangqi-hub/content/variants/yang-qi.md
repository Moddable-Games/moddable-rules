---
title: "Yáng Qí"
slug: yang-qi
board: "9×10"
players: "2"
parent: xiangqi-hub
win: Checkmate or stalemate the General
special: "Regional Chinese chess variant from Sichuan and surrounding areas. Played on a standard 9×10 Xiangqi board with modified Elephant movement (no river restriction) and some differences in initial piece placement. Also called Sichuan Chess."
engine:
  topology:
    type: grid
    rows: 10
    cols: 9
    intersections: true
  players: [red, black]
  notation: xiangqi
published: true
---

## Yáng Qí

Yáng Qí (洋棋) is a regional Chinese chess variant played primarily in Sichuan province and surrounding areas of southwestern China. It uses the standard 9×10 Xiangqi board and the same piece types, but differs in how some pieces move and in some starting positions.

### The Board

Standard 9×10 Xiangqi board. Pieces occupy intersections (points). The **river** runs between ranks 5 and 6, dividing the board into two halves.

### Starting Position

Generally follows the standard Xiangqi starting position. Differences in placement are the key distinction from standard Xiangqi.

**Standard Xiangqi FEN (as baseline):** `rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR w - - 0 1`

> **Verification note:** Confirm exact starting position differences from the standard Xiangqi layout via chessvariants.com. Yáng Qí's placement variations may affect Cannons, Horses, or Elephants.

### Key Differences from Standard Xiangqi

**Elephant movement:** In Yáng Qí, the Elephant is **not** restricted to its own side of the river. It may cross the river and range across the full board. The standard blocking rule (an Elephant is blocked if a piece occupies the midpoint of its diagonal jump) still applies.

> **Verification note:** Confirm all movement differences from chessvariants.com before building. River restriction for Elephant is the most commonly cited difference; additional rule differences may exist.

### Piece Set

Same piece types as standard Xiangqi:

| Piece | Symbol | Movement |
|---|---|---|
| General (King) | K | One step orthogonally within the Palace |
| Advisor (Guard) | A | One step diagonally within the Palace |
| Elephant | E | Two steps diagonally; leaps; blockable at midpoint; **no river restriction in Yáng Qí** |
| Horse | H | One step orthogonally then one step diagonally outward; blockable at orthogonal step |
| Chariot | R | Slides any distance orthogonally |
| Cannon | C | Slides freely; captures by jumping over exactly one screen piece |
| Soldier | P | One step forward before crossing river; one step forward or sideways after crossing |

### Win Condition

Checkmate or stalemate the opponent's General, as in standard Xiangqi.

### Attribution

Yáng Qí is a regional variant of Chinese chess. Rules documented from chessvariants.com.
