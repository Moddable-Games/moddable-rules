---
title: Banqi (Half Chess)
slug: banqi
board: "8×4"
players: "2"
parent: xiangqi
win: Opponent has no legal move (usually because every piece has been captured)
special: "Xiangqi pieces on half a Xiangqi board, played inside the squares rather than on the intersections. All 32 pieces start face-down and are revealed one at a time, so neither player knows what stands where. The first piece flipped decides which colour that player commands. Also known as Dark Chess (暗棋), Blind Chess (盲棋) or Half Chess (半棋)."
playable: true
engine:
  topology:
    type: grid
    rows: 4
    cols: 8
    layout: cells
  players: [red, black]
  notation: algebraic
  render:
    cellSize: 44
    pieceScale: 0.86
    cellColor: uniform
    labels: true
    boardStyle: plain
    river: false
    palace: false
    zones:
      fill: board
    ops:
      # The family's ops draw a Xiangqi board: intersection lines split at the
      # river. Banqi is played inside the squares of half that board, so it
      # needs its own - a plain 8x4 grid, no river, no palace.
      - op: cells
        pattern: uniform
        fill: board
        interactive: true
      - op: grid-lines
        color: board-stroke
        width: 1
        grouped: false
  surface:
    colors:
      board: "#f5deb3"
      board-stroke: "#4a3520"
      cell-light: "#f5deb3"
      stroke: "#4a3520"
  pieces:
    set: mce-xiangqi-trad
    fenMap:
      x: facedown
  # A face-down piece belongs to nobody: owner -1, the same convention Duck
  # Chess uses for its blocker. It gains a colour when it is turned over.
  vocabulary:
    general: { symbols: { 0: K, 1: k } }
    advisor: { symbols: { 0: A, 1: a } }
    elephant: { symbols: { 0: E, 1: e } }
    chariot: { symbols: { 0: R, 1: r } }
    horse: { symbols: { 0: H, 1: h } }
    cannon: { symbols: { 0: C, 1: c } }
    soldier: { symbols: { 0: P, 1: p } }
    covered: { symbols: { "-1": x } }
  setup: "xxxxxxxx/xxxxxxxx/xxxxxxxx/xxxxxxxx"
  plugins:
    xiangqi:
      # Nothing is royal. Losing the General loses a piece, not the game, so
      # there is no check and the only way to lose is to have no move.
      royal: false
      winCondition: no-moves
      covered:
        type: covered
        ownerless: true
        flip: true
        # "A face-down piece cannot be captured or moved. It can only be
        # flipped." Jieqi is the opposite - a covered piece there is captured
        # in the normal way - so neither is assumed.
        capturable: false
        colourFromFirstFlip: true
        # There are no home squares in Banqi, so there is no array to deal
        # from: all 32 pieces are shuffled across the whole board, and nothing
        # about a square tells you what stands on it.
        pool:
          general: 1
          advisor: 2
          elephant: 2
          chariot: 2
          horse: 2
          cannon: 2
          soldier: 5
      # Every piece moves one square orthogonally - the General, the Soldier
      # and everything between move alike. The Cannon is the only departure:
      # it moves like the rest and captures by jumping exactly one screen.
      pieceMoves:
        general: { type: rider, dirs: orthogonal, maxSteps: 1 }
        advisor: { type: rider, dirs: orthogonal, maxSteps: 1 }
        elephant: { type: rider, dirs: orthogonal, maxSteps: 1 }
        chariot: { type: rider, dirs: orthogonal, maxSteps: 1 }
        horse: { type: rider, dirs: orthogonal, maxSteps: 1 }
        soldier: { type: rider, dirs: orthogonal, maxSteps: 1 }
        cannon:
          divergent:
            move: { type: rider, dirs: orthogonal, maxSteps: 1 }
            # Any number of empty squares may lie on either side of the
            # screen, so the capture slides past it rather than landing
            # on the square immediately beyond.
            capture: { type: hopper, dirs: orthogonal, captureSlide: true }
      # Capture compares the two pieces rather than asking how the attacker
      # moves. A piece takes an equal or lower rank, with two rules standing
      # outside the order and the unranked Cannon outside it entirely.
      capture:
        by: rank
        order: [general, advisor, elephant, chariot, horse, soldier]
        allow: [[soldier, general]]
        deny: [[general, soldier]]
        unranked: [cannon]
published: true
---

## Banqi (Half Chess)

{{svg:banqi-board.svg "Banqi — all 32 pieces face-down at the start"}}

Banqi (半棋, bànqí, "Half Chess"), also called Dark Chess (暗棋) or Blind Chess (盲棋), is a two-player Chinese game played with a Xiangqi set on half a Xiangqi board. It is a social game, usually played for fun rather than serious competition, and a game normally lasts between ten and twenty minutes.

The rules recorded here follow the Taiwanese version, which is widely played.

### The Board

The board is **8 files wide and 4 ranks deep** — 32 squares. It is one half of the Xiangqi board, taking the side on one bank of the river.

Unlike Xiangqi, the pieces stand **inside the squares** rather than on the intersections. Boards made specifically for Banqi exist, but it is common to simply use one half of a Xiangqi board.

### Pieces

Banqi uses a standard Xiangqi set: 16 Red and 16 Black, 32 in total.

| Piece | Red | Black | Count per side |
|---|---|---|---|
| General | 帥 | 將 | 1 |
| Advisor | 仕 | 士 | 2 |
| Elephant | 相 | 象 | 2 |
| Chariot | 俥 | 車 | 2 |
| Horse | 傌 | 馬 | 2 |
| Cannon | 炮 | 砲 | 2 |
| Soldier | 兵 | 卒 | 5 |
| **Total** | | | **16** |

The backs of the pieces must be indistinguishable from one another, so that a piece cannot be identified while it is face-down. Sets with international symbols printed on the back are unsuitable for this reason.

### Setup

All 32 pieces are shuffled and placed face-down, one per square, filling the board. Neither player knows what is where, and neither player has a colour yet.

### Turns

On each turn a player does exactly one of:

1. **Flip** a face-down piece, turning it face-up. The piece belongs to whichever colour it shows, regardless of who turned it over.
2. **Move** one of their own face-up pieces one square orthogonally to an empty adjacent square.
3. **Capture** an opponent's face-up piece, subject to the rules below.

The **first flip of the game decides the colours**: the player who makes it commands the colour of the piece revealed, and the opponent commands the other.

A face-down piece cannot be captured or moved. It can only be flipped.

### Movement

Every piece moves the same way: **one square up, down, left or right**. There is no piece-specific movement in Banqi — the General, the Soldier and everything between all move alike. The Cannon's capture is the only departure from this.

### Capture

Pieces are ranked, and a piece may capture an opponent's piece of **equal or lower rank**.

**Rank, highest to lowest:** General → Advisor → Elephant → Chariot → Horse → Soldier

Two rules stand outside that order:

- **The Soldier takes the General.** Despite being the lowest rank, a Soldier may capture the General, and the General may not capture a Soldier.
- **The Cannon is not ranked.** It captures a piece of any rank, but only by jumping over exactly one intervening piece — the screen. The screen may be friendly, enemy, or still face-down, and any number of empty squares may lie on either side of it. A Cannon therefore cannot capture a piece standing next to it, because there would be nothing to jump.

### Win Condition

A player who has no legal move **loses**. In practice this happens when all of their pieces have been captured.

### Repetition

If a player repeatedly chases an enemy piece that cannot be taken, producing an endless cycle, convention decides the outcome. Under Chinese Chess conventions the player doing the chasing must vary; casual play more often settles it as a draw, or requires one side to give up a piece to break the cycle.

### Relationship to Other Games

A more formal version of Banqi is held to have influenced **Jungle** (Dou Shou Qi) and the modern game **Luzhanqi**.

### Attribution

Banqi is a traditional Chinese game with no known author and no rights holder. Rules transcribed from en.wikipedia.org/wiki/Banqi.
