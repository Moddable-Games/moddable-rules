---
title: "Janggi"
slug: "janggi"
board: "9×10"
players: "2"
parent: "xiangqi"
win: "Checkmate the opponent’s General"
special: "Cannon must jump a non-Cannon piece to both move and capture; passing is always legal; bikjang creates a draw or material count"
---

## Janggi

Janggi (장기, Korean Chess) descended from the same historical lineage as Xiangqi but diverged in ways that fundamentally change the game. There is no river, the Elephant follows a longer path, the Cannon must jump to both move and capture rather than only to capture, and passing is always a legal move. The bikjang rule, in which facing Generals create an unusual draw mechanism, has no equivalent in any other major chess variant.

{{svg:janggi-board.svg "Janggi — starting position (inner elephant setup)"}}

### The Board

The board is a 9×10 grid. Pieces are placed on intersection points. There is no river. A 3×3 palace, marked by diagonal lines, sits at each end on files d–f (ranks 1–3 for Cho, ranks 8–10 for Han). The General begins at the centre of the palace: e1 for Cho and e10 for Han.

### Pieces

Each player commands 16 pieces. Cho (Blue, lower) moves first. Han (Red, upper) receives 1.5 compensation points (deom) for moving second.

| Piece | Korean | Count | Movement |
|---|---|---|---|
| General | 將/帥 | 1 | One step orthogonally or diagonally within the 3×3 palace. May also move along the palace diagonal lines |
| Advisor | 士 | 2 | Moves exactly as the General: one step orthogonally or diagonally within the palace |
| Elephant | 象 | 2 | One step orthogonally then two steps diagonally outward. Blocked if any intermediate point on the path is occupied. May move anywhere on the board |
| Horse | 馬 | 2 | One step orthogonally then one step diagonally outward. Blocked if the first orthogonal step is occupied |
| Chariot | 車 | 2 | Slides any number of points orthogonally. May also move along the palace diagonal lines |
| Cannon | 砲 | 2 | Must jump over exactly one non-Cannon piece to both move and capture. Cannot jump another Cannon or use a Cannon as its screen |
| Soldier | 卒/兵 | 5 | One step forward or one step sideways from the very start of the game. No river-crossing promotion mechanic |

### Key Differences from Xiangqi

| Rule | Xiangqi | Janggi |
|---|---|---|
| River | Divides board; restricts Elephants and Soldiers | None |
| Soldier | Sideways only after crossing river | Sideways from the start |
| Elephant | Two diagonal steps; cannot cross river | One orthogonal then two diagonal; unrestricted |
| Cannon movement | Moves freely like a Chariot | Must jump one non-Cannon piece to move |
| Cannon capture | Jumps one piece (any colour) to capture | Jumps one non-Cannon piece; cannot use Cannon as screen |
| General position | Back edge of palace | Centre of palace |
| Passing | Not permitted | Always a legal option |
| Stalemate | Loss for the stalemated player | Impossible (passing prevents it) |

### Starting Position

Before play begins, each player independently selects the arrangement of their Horses and Elephants. Four configurations exist per side:

| Configuration | Files b–c | Files g–h | Name |
|---|---|---|---|
| Inner elephants (most common) | Horse, Elephant | Elephant, Horse | An Sang Charim |
| Outer elephants | Elephant, Horse | Horse, Elephant | Bakkat Sang Charim |
| Left elephant out | Elephant, Horse | Elephant, Horse | Oen Sang Charim |
| Right elephant out | Horse, Elephant | Horse, Elephant | Oreun Sang Charim |

Han (Red) places pieces first; Cho (Blue) places second and may respond to Han’s configuration. After placement, Cho moves first.

All other pieces are fixed across all configurations:

| Rank | a | b | c | d | e | f | g | h | i |
|---|---|---|---|---|---|---|---|---|---|
| 10 | 車 | H/E | E/H | 士 | 將 | 士 | H/E | E/H | 車 |
| 9 | | 砲 | | | | | | 砲 | |
| 8 | 卒 | | 卒 | | 卒 | | 卒 | | 卒 |
| 7–4 | | | | | | | | | |
| 3 | 兵 | | 兵 | | 兵 | | 兵 | | 兵 |
| 2 | | 砲 | | | | | | 砲 | |
| 1 | 車 | H/E | E/H | 士 | 帥 | 士 | H/E | E/H | 車 |

H = Horse (馬), E = Elephant (象). Inner elephant arrangement: b=H, c=E, g=E, h=H.

### Bikjang (Laughing Generals)

Bikjang (비장) occurs when both Generals face each other on the same file with no intervening piece. Unlike the Flying General rule in Xiangqi, this is not immediately illegal in Janggi.

When bikjang occurs, the player to move has two choices:

1. **Break bikjang:** move the General or place a piece between them
2. **Pass:** decline to move, ending the game immediately in a draw

If both players pass consecutively, the game is drawn at once. A player in a losing position may use bikjang to force a draw by manoeuvring their General into a facing position.

**Simultaneous check and bikjang:** if both occur at the same time, bikjang takes priority.

**Tournament resolution:** competitions that do not permit draws resolve bikjang by material counting.

| Piece | Value (jeom) |
|---|---|
| Chariot (안/자) | 13 |
| Cannon (포) | 7 |
| Horse (마) | 5 |
| Elephant (상) | 3 |
| Advisor (사) | 3 |
| Soldier (졸/병) | 2 |
| General | Not counted |

Han (Red) receives 1.5 bonus points (deom) because Cho moves first. The 0.5 prevents a tie. The player with the higher total wins.

### Passing

A player may pass their turn at any time. Because passing is always available, stalemate is impossible in Janggi.

### Win Condition

Checkmate the opponent’s General: place it under attack with no legal escape. Because passing is available, a checkmated General cannot simply pass; the player must make a move that relieves check, and if none exists, it is checkmate.

### Attribution

Janggi. Ancient Korean origin, public domain. Sources: Atvriders/cards-and-such janggi/index.ts (MIT), gbtami/pychess-variants janggi.md, Desktop gap-fill 2026-06-25 — all embedded in ops#18.
