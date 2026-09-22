---
playable: true
title: Tandem Chess
slug: tandem-chess
board: "8×8 (two boards)"
players: "4 (2 teams of 2)"
parent: chess
win: Checkmate either opposing King across both boards
special: "Team chess variant for 2×2 players on two simultaneous boards. Captured pieces are passed to the partner for dropping on the partner's board. Also known as Siamese Chess. Key differences from Bughouse: (1) no check or checkmate by drop; (2) match continues until both games complete. Invented ~1960s."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
    layers: 2
    layer_labels: ["Board A", "Board B"]
    # Each board is played by its own two seats, and each is written as an
    # ordinary FEN: White and Black on Board B are seats 2 and 3.
    layerSeats: [[0, 1], [2, 3]]
  players: [white1, black1, white2, black2]
  # The turn-based order the source gives for playing by e-mail: "South begins
  # by moving a white piece. North replies by moving a black piece followed by
  # a white piece. South replies by moving a white piece followed by a black
  # piece." South is White on Board A and Black on Board B; North the other two.
  turnOrder:
    opening: [0]
    cycle: [1, 2, 0, 3]
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
      # "For each team, one player plays with white pieces and the other plays
      # with black." Partners sit on different boards.
      teams: [[0, 3], [1, 2]]
      # "All captured pieces are given to ones partner. Once received they
      # become ... pieces that may be dropped onto an empty square on the board
      # to be used as ones own."
      drops: true
      capturesTo: partner
      dropRegion:
        layers: [[0, 0], [0, 0], [1, 1], [1, 1]]
      # "One is not allowed to give check or mate with a dropped piece."
      dropMayNotCheck: true
      # "The match continues until both games are completed."
      matchEnds: all
approximations:
  - feature: "A Rook dropped on its home square"
    source: "chessvariants.com/multiplayer.dir/tandem.html"
    says: "A Rook dropped onto either Rook home square is considered not to have moved; so one may castle with such a Rook."
    engine: "A dropped Rook never restores a castling right."
    because: "Castling rights are kept per side and lost for good when the King or that side's Rook moves or is taken. Whether the King itself has moved is not recorded separately, so the engine cannot tell when a dropped Rook should bring a right back."
  - feature: "Simultaneous play"
    source: "chessvariants.com/multiplayer.dir/tandem.html"
    says: "Bughouse is best played with clocks and with little time per player."
    engine: "The turn-based order the same source gives for e-mail play."
    because: "The live game runs both boards at once against clocks. Real-time sessions are engine#177; until then the published turn-based order keeps each board alternating White and Black."
published: true
---

## Tandem Chess

{{svg:tandem-chess-board.svg "Tandem Chess — starting position"}}

Tandem Chess (also known as Siamese Chess) is a 4-player team chess variant played on two simultaneous standard boards. It is closely related to Bughouse Chess and shares most of its rules, with two key distinctions. It is one of the most widely played team chess formats internationally.

### Setup

Two standard 8×8 boards:
- **Board A:** White1 (Team A) vs Black1 (Team B)
- **Board B:** White2 (Team A) vs Black2 (Team B)

Teams: White1 + Black2 vs Black1 + White2. Partners sit on the same side of the table, on different boards: for each team, one partner plays White and the other plays Black, so a piece captured from one colour arrives as the partner's own.

### The Relay Mechanic

When a player captures an enemy piece, it is **passed to their partner** on the other board. The partner may **drop** (place) the received piece onto any empty square on their board in lieu of making a normal move.

Drop restrictions:
- A Pawn may not be dropped on the 1st or 8th rank.
- A piece may not be dropped on an occupied square.
- Special rule: **A player may not give check or checkmate by dropping a piece** (this is the key Tandem Chess restriction that distinguishes it from Bughouse).

Additional drop rules:
- A Rook dropped on either of its home squares (a1/h1 for White, a8/h8 for Black) is treated as unmoved and may be used for castling.
- A Pawn dropped on the 2nd rank inherits the two-step advance option and is subject to en passant capture.

### Win Condition

The match continues until **both boards have been completed** (not just the first checkmate). After both games end, the score is counted:
- 1 point for a win on a board
- ½ point for a draw
- 0 points for a loss

The team with the higher total score wins. If teams score 1–1, the match is a draw.

### Turn Order

Play proceeds as in standard chess on each board — White1 and Black1 alternate on Board A; White2 and Black2 alternate on Board B. Partners may not advise each other, but may request a specific piece type (e.g., "Partner, I need a Knight").

### Key Differences from Bughouse Chess

Tandem Chess differs from Bughouse in two rules:
1. **No check or checkmate by drop** — dropped pieces may not place the enemy King in check.
2. **Both games must complete** — the match is not decided by the first checkmate; both boards are played to completion.

### Attribution

Rules documented from chessvariants.com/multiplayer.dir/tandem.html (Hans Bodlaender, 1996; edited John William Brown).
