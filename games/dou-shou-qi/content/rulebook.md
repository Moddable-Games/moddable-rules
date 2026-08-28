---
title: "Dou Shou Qi (斗兽棋 / Jungle)"
short_title: "Jungle"
version: "0.1.0"
slug: "dou-shou-qi"
players: "2"
duration: "20–40 min"
age: "8+"
tagline: "Animals battle across rivers and traps to reach the enemy den"
type: "standalone"
status: "live"
updated: "2026-07-06"
published: true
how_to_play: "Move your 8 ranked animal pieces (Rat to Elephant) toward the opponent's Den. Higher rank captures lower, but the Rat defeats the Elephant. Traps weaken defenders, rivers block most pieces."
mechanics: [abstract-strategy, grid, movement, capture, ranking]
complexity: simple
related: [xiangqi, shogi, chess, fanorona]
theme:
  surface: light
  tint: warm
  texture: none
  cover: minimal
  typography: modern
  accent: green
engine:
  topology:
    type: grid
    rows: 9
    cols: 7
  surface: jungle
  render:
    cellSize: 40
    cellColor: uniform
    labels: false
    ops:
      - op: rect
        fill: "#d9b483"
        scope: board
      - op: grid-lines
        grouped: false
        order: vh
        color: "#8b6914"
        width: 1.5
      - op: hit-targets
        shape: rect
  pieces:
    set: mce-jungle
  players: [white, black]
unsupported:
  _family: "No rules plugin. Dou Shou Qi ranks eight animals, lets the Rat swim and the Rat alone attack the Elephant, drowns other pieces that enter water, weakens a piece standing in the opponent's trap, and is won by reaching the opponent's den. Terrain that changes a piece's strength and legality is not modelled anywhere."
  standard: "Blocked on the plugin alone."
---

## Dou Shou Qi (斗兽棋 / Jungle)

{{svg:standard-board.svg "Dou Shou Qi — starting position"}}

Dou Shou Qi (also called Jungle, Animal Chess, or The Jungle Game) is a traditional Chinese two-player strategy game. Each player commands 8 animal pieces ranked 1–8; higher rank defeats lower rank, with two key exceptions: the Rat defeats the Elephant, and the Tiger and Lion can jump rivers. Victory is achieved by entering the opponent’s Den.

### Board

7 columns (a–g) × 9 rows (1–9). 

**Special squares:**
- **White’s Den (White’s home):** d1 (center of White’s back rank)
- **Black’s Den:** d9 (center of Black’s back rank)
- **Traps:** Three squares adjacent to each Den:
  - White’s traps: c1, e1, d2
  - Black’s traps: c9, e9, d8
- **Rivers (water):** Two rectangular water sections in the center:
  - Left river: b4, b5, b6, c4, c5, c6
  - Right river: e4, e5, e6, f4, f5, f6
  - Column d (rows 4–6) is a land bridge between the rivers.
  - Columns a and g (rows 4–6) are land.

### Animals (Piece Rankings)

| Rank | Animal | Chinese | Special Abilities |
|---|---|---|---|
| 8 | **Elephant** (象) | Xiàng | Cannot enter rivers. |
| 7 | **Lion** (狮) | Shī | May leap across rivers (see River Leaping). |
| 6 | **Tiger** (虎) | Hǔ | May leap across rivers. |
| 5 | **Leopard** (豹) | Bào | Standard movement. |
| 4 | **Wolf** (狼) | Láng | Standard movement. |
| 3 | **Dog** (狗) | Gǒu | Standard movement. |
| 2 | **Cat** (猫) | Māo | Standard movement. |
| 1 | **Rat** (鼠) | Shǔ | Only piece that may enter rivers. Defeats Elephant. Cannot capture from water to land or land to water. |

### Starting Position

White controls rows 1–3 (bottom); Black controls rows 7–9 (top). Each player’s animals are placed as follows:

**White (bottom):**
- a1: Lion, g1: Tiger
- b2: Rat, f2: Elephant
- c3: Dog, d3: Leopard (sometimes Wolf, varies by edition), e3: Wolf (or Cat), g3: Cat

*Note: Exact positions c3–g3 vary by edition. The canonical arrangement places Dog and Cat on the b/f files and Wolf and Leopard centrally.*

**Black (top):** mirrors White’s position on rows 7–9.

### Movement

- All animals move 1 step orthogonally (up, down, left, right) per turn.
- Animals may not move diagonally.
- Animals may not enter their own Den.
- **Elephant** may not enter river squares.
- **Rat** is the only animal that may enter river squares.

### River Leaping (Tiger and Lion)

Tigers and Lions may leap over an entire river in one move:
- A Tiger or Lion on a land square adjacent to a river may leap in the direction of the river, crossing all river squares in that direction, and land on the first land square on the other side.
- **Blocked leap:** If a Rat is anywhere in the river squares along the leap path, the Tiger or Lion cannot make that leap. The Rat blocks the leap (regardless of which player controls it).
- A leaping Tiger or Lion may capture an opponent’s animal on the landing square, subject to normal rank rules.

### Capture

A piece captures by moving onto an opponent’s piece’s square:
- **Higher rank captures lower rank.** A rank 5 Leopard can capture ranks 1–4 but not 6–8.
- **Rat vs. Elephant (rank 1 vs. rank 8):** Rat captures Elephant. Elephant does NOT capture Rat.
  - A Rat in a river cannot capture an Elephant on land, and an Elephant cannot capture a Rat in a river.
- **Equal rank:** In most editions, equal rank captures (the attacker wins). Some editions deny equal-rank capture.
- **Rat vs. Rat:** Rat captures the opponent’s Rat normally.

### Traps

When an animal enters an opponent’s trap square, it loses all rank advantages:
- A trapped piece may be captured by any opponent’s piece, regardless of rank.
- A trapped piece regains its rank if it moves off the trap square.
- Pieces cannot enter their own trap squares (they are only dangerous to the opponent).

### Win Conditions

- A player wins by moving one of their animals into the opponent’s Den.
- A player also wins if the opponent has no legal moves (all their animals are captured).

**Den entry:** A player’s animal may not enter their own Den under any circumstances.

### Attribution

Dou Shou Qi (斗兽棋). Traditional Chinese game, commercially produced circa 1900–1920. Also known as Jungle or The Jungle Game. Public domain rule set confirmed from Pagat.com and multiple commercial editions. Public domain. Documented at en.wikipedia.org/wiki/Jungle_(board_game) and mastersofgames.com.

