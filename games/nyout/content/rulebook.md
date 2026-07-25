---
title: "Nyout (유놓이 / Yut Nori)"
short_title: "Nyout"
version: "0.1.0"
slug: "nyout"
players: "2–4"
duration: "20–40 min"
age: "6+"
tagline: "Korean stick-throwing race across a circular track"
type: "standalone"
status: "live"
updated: "2026-07-06"
published: true
theme:
  surface: light
  tint: warm
  texture: none
  cover: minimal
  typography: modern
  accent: red
engine:
  topology:
    type: graph
    structure: perimeter-cross
    params:
      sides: 4
      nodesPerSide: 5
      diagonals: true
      intermediatesPerDiagonal: 2
  surface:
    colors:
      background: "#f5f0e8"
      line: "#8b7355"
      point: "#8b7355"
      junction: "#c0622f"
      centre: "#8b1a1a"
  render:
    cellSize: 24
  pieces:
    set: playstrategy-go-classic
  players: [white, black]
how_to_play: "Throw four sticks to generate movement values. Race tokens around a circular track with shortcut branches. Capture opponent tokens to send them back to start. Stack tokens for combined movement but risk losing multiple at once. First team to move all tokens home wins."
mechanics:
  - dice-throwing
  - race
  - capture
  - stacking
  - shortcuts
complexity: simple
related:
  - pachisi
  - royal-ur
  - backgammon
---

## Nyout (Yut Nori / 유놓이)

{{svg:standard-board.svg "Nyout — circular track board with shortcut branches"}}

Nyout (also called Yut Nori) is Korea’s most beloved traditional board game, played especially during the Lunar New Year (Seollal) and Korean New Year celebrations. The game uses four flat throwing sticks to generate random movement; the board is a circular track with branching shortcuts. Players race teams of tokens around the track, with the goal of getting all tokens safely home.

### Equipment

- 4 **yut sticks** (traditional: flat on one side, rounded on the other; each stick is half flat and half rounded when cast). One side is marked (the flat/light side); the other is unmarked (the rounded/dark side).
- A **nyout board** (traditional: round cloth or paper with 29 marked positions in a circular track with shortcut branches).
- 4 tokens per team (typically 4 for a 2-player game; 2 tokens each for a 4-player game in some versions).

### The Board

The nyout board has 29 positions arranged in a circular outer track plus shortcut paths through the center:

- **Outer track:** 20 positions around the perimeter. The Start/End position is shared.
- **Center crossing:** 4 positions in the center of the board forming an X, reachable from the corner positions of the outer track.
- **Shortcut branches:** Tokens entering the outer track at certain positions (roughly at the four cardinal points) may branch inward through the center shortcuts, reducing the total path.

The exact number of positions and shortcut layout varies by region; 29 is the most common count.

### The Throw

On each turn, a player throws all 4 yut sticks simultaneously. The result is determined by how many sticks land flat-side up:

| Flat sides up | Name | Korean | Meaning | Spaces moved | Bonus throw? |
|---|---|---|---|---|---|
| 1 | **Do** | 도 | Pig | 1 | No |
| 2 | **Gae** | 개 | Dog | 2 | No |
| 3 | **Guel** | 걸 | Sheep/Goat | 3 | No |
| 4 | **Yut** | 윤 | Cow | 4 | **Yes — throw again** |
| 0 | **Mo** | 모 | Horse | 5 | **Yes — throw again** |

**Bonus throw:** When a Yut (4) or Mo (5) is thrown, the player takes an additional throw immediately. The player may apply the throws to different tokens if desired. A player may continue throwing as long as they keep rolling Yut or Mo.

### Movement

- Tokens move clockwise around the outer track (from Start, proceeding around).
- A player may move any of their tokens by the result of a throw. If multiple throws resulted from bonus throws, each throw may be applied to a different token, or all throws may be combined onto a single token.
- **Shortcuts:** If a token lands on one of the four diagonal corner positions (at roughly the N, E, S, W positions on the outer track), it may take a shortcut through the center on subsequent moves, saving several steps. This is optional — the player chooses whether to branch inward when the token reaches a shortcut entry point.
- Tokens that have entered a shortcut path continue to move inward, through the center, and out to the exit.

### Capturing

If a player’s token lands on a space occupied by an opponent’s token, the opponent’s token is captured and returned to the start. The capturing player earns one bonus throw.

### Stacking (Horses)

If a player’s token lands on a space already occupied by one or more of their own team’s tokens, the tokens form a **horse** (combined piece). All stacked tokens move together as one unit with the speed of the stack.

- If a horse is captured, all tokens in the stack return to start.
- Stacking is strategic: faster combined movement vs. risk of losing multiple tokens at once.

### Winning

A token completes the circuit when it passes through the Start/End position (or the equivalent exit point after a shortcut path). A token that passes or lands on Start exits the board.

The first team (or player) to move all their tokens off the board wins.

### Teams and Players

**2 players:** Each player has 4 tokens. Players take turns throwing.

**4 players (2 teams of 2):** Partners sit opposite each other. Team members share tokens — either player on the team may move any of the team’s tokens. Partners alternate throwing within their team’s turn.

### Attribution

Nyout (Yut Nori / 유놓이). Traditional Korean game with history spanning over 1,500 years. Associated with Lunar New Year celebrations. Public domain. Rules confirmed from Korean Cultural Heritage Foundation documentation and Pagat.com.
