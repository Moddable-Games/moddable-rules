---
title: Standard Xiangqi
playable: true
slug: standard
board: "9×10"
players: "2"
parent: xiangqi
order: 1
win: "Checkmate the opponent's General"
special: Cannon captures by jumping a screen piece. Flying General rule. Stalemate is a loss.
engine:
  topology:
    type: grid
    rows: 10
    cols: 9
  players: [red, black]
  setup: "rheakaehr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RHEAKAEHR"
  plugins:
    xiangqi:
      hasRiver: true
      flyingGeneralRule: true
      cannonJumpToMove: false
---

## Standard Xiangqi

Xiangqi (象棋, "Elephant Chess") is the classical Chinese form of chess, played in China since at least the 7th century. It is the most widely played board game in China and among the most popular strategy games in the world. Ancient public domain origin: no copyright concern.

{{svg:standard-board.svg "Standard Xiangqi — starting position"}}

### The Board

The board is a 9×10 grid. Pieces are placed on the 90 intersection points, not inside squares. A river separates the two halves of the board between ranks 5 and 6. Each side has a **palace**: a 3×3 area marked with diagonal lines at the centre of the back three ranks (files d–f, ranks 1–3 for the bottom player; ranks 8–10 for the top player).

### Pieces

Each side has 16 pieces.

| Piece | Chinese | Count | Movement |
|---|---|---|---|
| General | 帥/將 | 1 | One step horizontally or vertically within the palace only. Cannot face the enemy General on an open file (Flying General rule) |
| Advisor | 士/仕 | 2 | One step diagonally within the palace only |
| Elephant | 相/象 | 2 | Exactly two steps diagonally. Cannot jump over a blocking piece. Cannot cross the river |
| Horse | 馬/傌 | 2 | One step orthogonally, then one step diagonally outward. Blocked if the adjacent orthogonal point is occupied ("hobbling the horse") |
| Chariot | 車/俥 | 2 | Any number of points horizontally or vertically. The most powerful piece |
| Cannon | 炮/砲 | 2 | Moves like the Chariot when not capturing. To capture, must jump over exactly one intervening piece (the "screen") of either colour, with any number of empty points on either side of the screen |
| Soldier | 兵/卒 | 5 | One point forward before crossing the river. After crossing the river, may also move one point sideways. Can never move backward |

### Starting Position

- **Chariots:** a1, i1 (opponent: a10, i10)
- **Horses:** b1, h1 (opponent: b10, h10)
- **Elephants:** c1, g1 (opponent: c10, g10)
- **Advisors:** d1, f1 (opponent: d10, f10)
- **General:** e1 (opponent: e10)
- **Cannons:** b3, h3 (opponent: b8, h8)
- **Soldiers:** a4, c4, e4, g4, i4 (opponent: a7, c7, e7, g7, i7)

The player with Red pieces moves first.

### Special Rules

**Flying General:** the two Generals may never face each other on an open file with no intervening piece. A move that creates this position is illegal, even if the moving piece is not the General.

**Stalemate is a loss:** a player with no legal moves loses the game. This differs from Western chess, where stalemate is a draw.

**Perpetual check:** the checking side must vary the pattern or loses the game by repetition.

**Perpetual chase:** chasing an unprotected piece with the same piece repeatedly is restricted under tournament rules. The chasing player must break the cycle.

### Winning

Checkmate the opponent's General: place it under threat with no legal move to escape.

### Strategy

Control the cannon mounts carefully: a Cannon without a screen to jump over loses its capturing ability. The Flying General rule creates tactical opportunities to threaten the opponent's General by clearing a file. Elephants are purely defensive, confined to their own half; develop Horses and Chariots early for offensive play.

### Attribution

Xiangqi. Public domain. Ancient Chinese origin, no copyright concern. Rules in accordance with the World Xiangqi Federation (WXF) standard.
