---
playable: false
title: Djambi
slug: djambi
board: 9×9
players: 4
parent: chess
win: Be the last player with a Chief remaining
special: "4-player political strategy on a 9×9 grid. Killed pieces remain as impassable corpses; the center Maze grants extra turns and immunities."
engine:
  topology:
    type: grid
    rows: 9
    cols: 9
  players: [red, yellow, green, blue]
  defaultSeat: blue
  render:
    cellSize: 38
  setup: "yC,yA,yM,3,gM,gA,gC/yT,yD,yM,3,gM,gD,gT/yM,yM,yX,3,gX,gM,gM/9/9/9/bM,bM,bX,3,rX,rM,rM/bT,bD,bM,3,rM,rD,rT/bC,bA,bM,3,rM,rA,rC"
  vocabulary:
    chief:
      symbols: { 0: rC, 1: yC, 2: gC, 3: bC }
    assassin:
      symbols: { 0: rA, 1: yA, 2: gA, 3: bA }
    reporter:
      symbols: { 0: rT, 1: yT, 2: gT, 3: bT }
    diplomat:
      symbols: { 0: rD, 1: yD, 2: gD, 3: bD }
    necromobile:
      symbols: { 0: rX, 1: yX, 2: gX, 3: bX }
    militant:
      symbols: { 0: rM, 1: yM, 2: gM, 3: bM }
  plugins:
    chess:
      pieces:
        chief:
          type: rider
          dirs: all
          maxSteps: 1
        assassin:
          type: rider
          dirs: all
        reporter:
          type: rider
          dirs: all
        diplomat:
          type: rider
          dirs: all
        necromobile:
          type: rider
          dirs: all
        militant:
          type: rider
          dirs: all
          maxSteps: 2
---

## Overview

{{svg:djambi-board.svg "Djambi — starting position"}}

Djambi (also called Blocus) is a 4-player abstract strategy game designed by Jean Anesto and published in France in 1975. It is a chess-adjacent game: each player has a royal piece (the Chief), pieces with defined movement types, and a grid board. Its defining mechanic is that **killed pieces remain on the board as corpses** — immovable blocks that obstruct movement and become strategic terrain.

A second distinctive element is the **Maze** (the center square), which grants special powers to the player whose Chief occupies it.

## Board and Setup

Played on a 9×9 grid. The center square (e5) is the Maze. Each player begins with 9 pieces arranged in one corner.

The four players occupy the four corners. Each army's pieces fill a roughly L-shaped zone in the corner:

| Piece | Count |
|-------|-------|
| Chief (C) | 1 |
| Assassin (A) | 1 |
| Reporter (R) | 1 |
| Troublemaker (T) | 1 |
| Necromobile (N) | 1 |
| Militant (M) | 4 |
| **Total** | **9** |

## Movement

- **Chief, Assassin, Reporter, Troublemaker, Necromobile** — move like a Queen: any number of squares orthogonally or diagonally.
- **Militants** — move like a Queen but at most 2 squares per move.

No piece may enter or jump over a square containing a dead piece (corpse/block).

## Capture and Corpses

When a piece is killed, it becomes a **corpse** — it remains on the board as an impassable block. No piece may enter or jump over a corpse. The capturing player chooses where to place the corpse (on any free square), except where noted by piece type.

**Chief** — moves to the target's square (queen-style). The dead piece is then moved by the capturing player to any empty square on the board as a corpse.

**Militant** — same as Chief but limited to ≤2 squares. The dead piece is moved to any empty square as a corpse.

**Reporter** — does not capture by moving to the target. Instead, when the Reporter lands on a destination square, it kills **all live enemy pieces on squares orthogonally adjacent** to that destination. Each killed piece becomes a corpse and remains on the square where it was standing (it is not moved).

**Assassin** — moves to the target's square (queen-style). The dead piece is placed as a corpse on the square the Assassin started from (not the square of the kill).

**Troublemaker** — does not kill. When the Troublemaker moves to a square containing any live piece (friend or enemy), it moves that piece to any other free square on the board. The displaced piece remains alive.

**Necromobile** — does not kill. When the Necromobile moves to a square containing a corpse (block), it moves that block to any other free square on the board.

## Eliminating a Player

When a player's Chief is captured, that player is eliminated. The player who captured the Chief **immediately takes control of all surviving pieces** of the eliminated player, adding them to their own army.

A player is also eliminated if their Chief is surrounded on all sides by corpses and they have no Necromobile — **unless** the Chief is in the Maze (see below).

## The Maze

The Maze is the center square (e5). Rules:

- All pieces may **pass through** the Maze during a move, provided it is unoccupied at that moment.
- Only the **Chief may stop** in the Maze.
- A Chief resting in the Maze is **in power**, gaining:
  - **Extra turns:** The in-power player takes one additional turn after each other player's turn.
  - **Militant immunity:** The Chief in the Maze cannot be captured by a Militant (but can be captured by other piece types).
  - **Control of blocked chiefs:** Any player eliminated by block-surrounding (while the Maze is occupied) has their surviving pieces taken by the in-power player.
  - **Blocking immunity:** The in-power Chief cannot be eliminated by being surrounded by blocks.

**Leaving the Maze:** An Assassin or Troublemaker that moves the Chief out of the Maze must immediately make a second move to leave the Maze themselves. A Necromobile that enters the Maze to move a block must also immediately leave the Maze.

## Three-Player Variant

With three players, the standard four-player starting setup is used. The fourth army has no controlling player. Its pieces can be moved and captured by any of the three active players following standard rules. Any player may take control of that army's surviving pieces as they would in a standard elimination.

## Win Condition

The last player with a Chief on the board wins.

## Attribution

Djambi was designed by Jean Anesto (1975). Rules documented from chessvariants.com/multiplayer.dir/djambi.html (Hans Bodlaender, January 11, 2012).
