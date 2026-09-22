---
playable: true
title: Delirious Bughouse
slug: delirious-bughouse
board: "8×8 (two boards)"
players: "4 (2 teams of 2)"
parent: chess
win: "Checkmate either opposing King: if either ally is checkmated, the other loses"
special: "Bughouse by Alberto Monteiro and Carlos Seiblitz (c.1984) with two changes: pawns may only be placed on the 2nd to 6th ranks, and a captured promoted piece stays promoted while the player who promoted it gets the pawn back, so every promotion adds a piece to the game. The same page goes on to Dice Chess, Worst Move and fairy stages, which are separate games."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
    layers: 2
    layer_labels: ["Board 1", "Board 2"]
    layerSeats: [[0, 1], [2, 3]]
  # "the games were in sequence: White1, Black2, White3, Black4" - the order
  # round the table, which is the engine's own rotation.
  players: [white1, black2, white3, black4]
  render:
    cellSize: 34
  setup:
    - "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
    - "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
  notation: algebraic
  plugins:
    chess:
      playerCount: 4
      advancement: { 0: -1, 1: 1, 2: -1, 3: 1 }
      # "White1 and Black4 are allies: if either of them is checkmated, the
      # other loses."
      teams: [[0, 3], [1, 2]]
      drops: true
      capturesTo: partner
      dropRegion:
        layers: [[0, 0], [0, 0], [1, 1], [1, 1]]
      # "Pawns may be placed only from the Second to the Sixth lines"
      pawnDropRanks: [2, 6]
      # "Promoted Pawns are returned to the player that promoted the pawn, to
      # be inserted again. Captured promoted pawns do not return to pawn."
      promotionsKept: true
      matchEnds: first
approximations:
  - feature: "Simultaneous play"
    source: "chessvariants.com/multiplayer.dir/delbug.html"
    says: "The game proceeds simultaneously in the two boards."
    engine: "Seats move in turn, White1, Black2, White3, Black4, the sequence the same page gives for its example game."
    because: "Both boards live at once needs real-time sessions (engine#177). The source's own example game is recorded in that turn order."
  - feature: "The second board's orientation"
    source: "chessvariants.com/multiplayer.dir/delbug.html"
    says: "The diagram draws the second board turned round, White3 at the top, as it sits beside the first across the table."
    engine: "Both boards are drawn from White's side."
    because: "Turning the board is how the players sit, not a rule: the position is the same, and drawing it the usual way keeps castling and notation ordinary."
  - feature: "Dice Chess, Worst Move and the stages after them"
    source: "chessvariants.com/multiplayer.dir/delbug.html"
    says: "The page goes on to Dice Chess, the Worst Move game, Bughouse Worst Move with two dice, fairy pieces won by capturing a King, and finally structures, events and magic items."
    engine: "Not played. This variant is the first stage, the Bughouse rules the page gives for Delirious Bughouse itself."
    because: "Each later stage is a separate game the authors built on this one, and the last is open-ended - 'this madness was limited just to me and Carlos Seiblitz'. Bughouse Worst Move would need a turn in which the opponent chooses the move, which nothing in the engine has yet."
published: true
---
## Delirious Bughouse

{{svg:delirious-bughouse-board.svg "Delirious Bughouse — starting position"}}

Delirious Bughouse was developed by Alberto Vieira Ferreira Monteiro and Carlos Eugenio Lossio Seiblitz Filho, with earlier help from Oscar Luiz Vieira Ferreira and Carlos Vieira Ferreira. Its final step was reached around 1984.

### Teams and Boards

Two standard 8×8 boards. White1 plays against Black2, and White3 plays against Black4. **White1 and Black4 are allies, as are Black2 and White3**: if either ally is checkmated, the other loses.

### Rules

Bughouse, with two exceptions:

1. **Pawns may be placed only on the 2nd to 6th ranks.** In Bughouse they may also be placed on the 7th.
2. **Promoted pieces keep their rank.** When a promoted pawn is captured it does not turn back into a pawn: it passes to the capturer's ally as the piece it became, and the player who promoted it gets the pawn back to place again. Every promotion therefore adds a piece to the game, and it is theoretically possible for all 128 squares of the two boards to fill.

Everything else is Bughouse: each piece captured on one board goes to the ally, who may spend a move placing it on any empty square of their own board.

Example from the source: if White1 vs Black2 goes 1. e4 d5 2. exd5 while White3 vs Black4 goes 1. Nf3, Black4 may now place a pawn on e5.

### Win Condition

Checkmate either opposing King. The first checkmate decides the match.

### Later stages

The same page describes how the game kept growing. Each stage is a separate game built on this one, and none is played here:

- **Dice Chess:** before every move the player throws a die: 1 = Pawn, 2 = Knight, 3 = Bishop, 4 = Rook, 5 = Queen, 6 = any piece. If no move with that piece is possible, any move may be played.
- **Worst Move:** two dice, one as above and one deciding whether the player is entitled to the best move or the worst. On "worst", the opponent chooses the move.
- **Bughouse Worst Move:** both boards and both dice together.
- **Fairy pieces:** capturing a King earns a fairy piece, such as a Camel, Giraffe, Zebra, Taxi, Pyramid or Atomic Bomb.
- **Structures, events and magic items:** an open-ended set the authors kept to themselves.

### Attribution

Rules from chessvariants.com/multiplayer.dir/delbug.html, written by Alberto Monteiro.
