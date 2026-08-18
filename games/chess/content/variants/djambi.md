---
title: Djambi
slug: djambi
parent: chess
board: "9×9"
players: "4"
playable: false
order: 90
win: Last chief standing
special: "Captured pieces become corpses that stay on the board and block movement. Killing a chief transfers that player's surviving pieces to the killer."
engine:
  topology:
    type: grid
    rows: 9
    cols: 9
  # Seat 0 is red, matching FEN4_PREFIXES {r,y,g,b}. Turn order rotates around
  # the board; the corner each army occupies is fixed by the setup below.
  players: [red, yellow, green, blue]
  defaultSeat: 3
  render:
    cellSize: 38
    decorations:
      - type: markers
        at: [[4, 4]]
        fill: maze
        size: 14
  # Four 3x3 corner blocks, 9 pieces per army, 36 pieces. Each chief sits in
  # its own outer corner. Read from File:Djambi_tablier4.svg, the official
  # starting position on the French Wikipedia article.
  setup: "yC,yA,yM,3,gM,gA,gC/yR,yD,yM,3,gM,gD,gR/yM,yM,yN,3,gN,gM,gM/9/9/9/bM,bM,bN,3,rN,rM,rM/bR,bD,bM,3,rM,rD,rR/bC,bA,bM,3,rM,rA,rC"
  pieces:
    set: djambi-4player
  vocabulary:
    chief:       { symbols: { 0: rC, 1: yC, 2: gC, 3: bC } }
    assassin:    { symbols: { 0: rA, 1: yA, 2: gA, 3: bA } }
    reporter:    { symbols: { 0: rR, 1: yR, 2: gR, 3: bR } }
    diplomat:    { symbols: { 0: rD, 1: yD, 2: gD, 3: bD } }
    necromobile: { symbols: { 0: rN, 1: yN, 2: gN, 3: bN } }
    militant:    { symbols: { 0: rM, 1: yM, 2: gM, 3: bM } }
    corpse:      { symbols: { "-1": X } }
  plugins:
    chess:
      playerCount: 4
      castling: false
      enPassant: false
      doubleStep: false
      noCheck: true
      royalType: chief
      pieces:
        # Every piece moves as a queen. The militant is that, capped at two.
        chief:       { type: rider, dirs: all }
        assassin:    { type: rider, dirs: all }
        reporter:    { type: rider, dirs: all }
        diplomat:    { type: rider, dirs: all }
        necromobile: { type: rider, dirs: all }
        militant:    { type: rider, dirs: all, maxSteps: 2 }
---

## Djambi

Djambi, also called Machiavelli, is a four-player game of shifting alliances on
a 9×9 board. Each player commands a chief, an assassin, a reporter, a diplomat,
a necromobile and four militants.

Captured pieces are not removed. They become corpses, lying face down where
they fell, blocking movement and passage for everyone. Only the necromobile can
move them.

**Currently not playable.** The board, pieces and movement are correct, but the
action model this game depends on does not exist yet: corpse placement, the
reporter's kill at range, the diplomat's displacement, the maze, and the
transfer of a dead player's pieces to their killer. See engine issue #131.
