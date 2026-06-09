---
title: "Go — Official Rulebook"
version: "0.1.0"
slug: "go"
players: "2"
duration: "30–180 min"
age: "8+"
tagline: "Four thousand years of emergent complexity from one rule"
type: "classic"
status: "live"
updated: "2026-06-09"
published: true
variants: true
---

## Standard Go

Go is a territorial strategy game for two players. Black and White take turns placing stones on the intersections of a grid, attempting to surround more territory than their opponent. Despite having only one type of piece and one fundamental rule (capture by surrounding), Go produces extraordinary strategic depth.

### Components

| Item | Qty | Notes |
|------|-----|-------|
| **Board** | 1 | 19x19 grid (361 intersections). 13x13 and 9x9 also standard for shorter games. |
| **Black stones** | 181 | Enough to cover slightly more than half the board |
| **White stones** | 180 | One fewer than Black (Black plays first) |
| **Bowls** | 2 | One per player to hold unplayed stones |
| **Lids** | 2 | Used to hold captured stones (prisoners) |

### Setup

The board starts empty. Black plays first. Stones are placed on intersections (where lines cross), not inside squares.

### Placement

On each turn, a player places one stone of their colour on any empty intersection. A player may also pass instead of placing a stone. Stones do not move once placed unless captured.

### Liberties and Capture

- An empty intersection adjacent to a stone (horizontally or vertically, not diagonally) is called a **liberty**.
- Adjacent stones of the same colour form a **group** and share their liberties.
- If a group has zero liberties remaining (all adjacent intersections occupied by the opponent), it is **captured** and removed from the board.
- A stone may be placed on an intersection with no liberties if doing so captures opponent stones, restoring liberties after removal.

### Ko Rule

A player may not make a move that returns the board to the immediately previous position. In practice: if one player captures a single stone, the opponent cannot immediately recapture that same stone. They must play elsewhere first. This prevents infinite loops.

### Suicide

A move that would leave your own stone or group with zero liberties without capturing any opponent stones is **forbidden** (under Japanese and Chinese rules). The stone simply cannot be placed there.

### Scoring

The game ends when both players pass consecutively.

**Area scoring (Chinese rules):** Your score equals the number of your stones on the board plus the number of empty intersections surrounded only by your stones.

**Territory scoring (Japanese rules):** Your score equals the empty intersections you surround minus your captured stones (prisoners).

Both methods produce the same winner in nearly all cases.

### Komi

White receives **6.5 points** of compensation (komi) for moving second on a 19x19 board. The half-point prevents draws. Common komi values: 6.5 (19x19), 5.5 (13x13), 5.5 (9x9).

### Endgame

When both players believe no more profitable moves remain, they pass. Dead stones (stones that cannot avoid capture) are removed by agreement. If players disagree about which stones are dead, play resumes to demonstrate.

### Board Sizes

| Size | Intersections | Typical Duration | Notes |
|------|---------------|------------------|-------|
| 19x19 | 361 | 60–180 min | Tournament standard |
| 13x13 | 169 | 30–60 min | Intermediate games |
| 9x9 | 81 | 15–30 min | Beginners and quick games |

### Attribution

Traditional game originating in China approximately 4,000 years ago. Known as Weiqi (Chinese), Baduk (Korean), Igo (Japanese). Public domain. Rules standardised by the International Go Federation.
