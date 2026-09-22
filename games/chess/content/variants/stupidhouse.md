---
playable: true
title: Stupidhouse
slug: stupidhouse
board: "2× 8×8"
players: "4 (2 teams of 2)"
parent: chess
win: Checkmate either opposing King
special: "Double Bughouse where partners play the same colour. A captured piece is handed to the partner, who must place it on their own board instead of making a normal move - and since partners share a colour, the piece they must place belongs to their opponent. Described by John Beasley from a variants weekend in Geneva, 1999."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
    layers: 2
    layer_labels: ["Board A", "Board B"]
    layerSeats: [[0, 1], [2, 3]]
  players: [white1, black1, white2, black2]
  # The turn-based order chessvariants.com gives for playing Bughouse by
  # e-mail, as Tandem Chess uses: each board still alternates White and Black.
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
      # "The players of a team have pieces of the same color."
      teams: [[0, 2], [1, 3]]
      drops: true
      capturesTo: partner
      dropRegion:
        layers: [[0, 0], [0, 0], [1, 1], [1, 1]]
      # "he gives the piece to his partner, that must place the piece on the
      # board instead of making a normal move" - and the piece is the
      # opponent's colour, so it goes down as the opponent's.
      dropsFor: opponent
      dropsCompulsory: true
      matchEnds: first
disputed:
  - feature: "Which bughouse rules apply"
    readings:
      - source: "chessvariants.com/multiplayer.dir/stupidhouse.html (Bodlaender, from John Beasley in Variant Chess, Autumn 1999)"
        says: "Double Bughouse"
        describes: "In the Autumn 1999 issue of Variant Chess, there is a description of John Beasley of a weekend in Geneva ... including a Double Bughouse tournament. One of the games ... is Stupidhouse."
      - source: "chessvariants.com/multiplayer.dir/tandem.html, the Tandem Chess amendments the same page's 'or Tandem Chess' would bring in"
        says: "Tandem Chess"
        describes: "One is not allowed to give check or mate with a dropped piece. The match continues until both games are completed."
    engine: "Double Bughouse"
    because: "The page says to follow 'Double Bughouse (or Tandem Chess)' as if they were one game, and they differ on exactly these two points. It was played at a Double Bughouse tournament, so the first mate decides the match and a placed piece may give check."
approximations:
  - feature: "A piece that cannot be placed"
    source: "chessvariants.com/multiplayer.dir/stupidhouse.html"
    says: "he gives the piece to his partner, that must place the piece on the board instead of making a normal move."
    engine: "When no square will legally take the piece, the player makes a normal move instead and keeps it."
    because: "The source does not say what happens when every square is illegal - a placed enemy piece may not leave the placer in check. Moving normally is the reading that keeps the game going."
  - feature: "Simultaneous play"
    source: "chessvariants.com/multiplayer.dir/tandem.html"
    says: "Bughouse is best played with clocks and with little time per player."
    engine: "The turn-based order the same source gives for e-mail play."
    because: "The live game runs both boards at once against clocks. Real-time sessions are engine#177."
published: true
---
## Stupidhouse

{{svg:stupidhouse-board.svg "Stupidhouse — starting position"}}

Stupidhouse is a Double Bughouse variant described by John Beasley in the Autumn 1999 issue of *Variant Chess*, from a weekend in Geneva organised by Fabrice Liardet where eighteen players took part in several chess variants, including a Double Bughouse tournament.

### Setup and Teams

Two standard 8×8 boards and four players in two teams. Unlike Bughouse, **the players of a team have pieces of the same colour**: both White players are partners, and both Black players are partners.

### Play

The rules of Double Bughouse are followed, with one difference. When a player captures one of their opponent's pieces, they give it to their partner, who **must place it on their own board instead of making a normal move**.

Because partners share a colour, the captured piece belongs to the partner's opponent. Every capture you make forces your partner to put an enemy piece onto their board. A piece may not be placed where it would leave the placer's own King in check, and a pawn may not be placed on the first or eighth rank.

### Win Condition

Checkmate either opposing King. The first checkmate decides the match.

### Comment

Beasley writes: "This is a really stupid game, and panic-stricken instructions to partners not to do so-and-so could be heard echoing round the room."

### Attribution

Rules from chessvariants.com/multiplayer.dir/stupidhouse.html (Hans Bodlaender, 1999), after John Beasley, *Variant Chess*, Autumn 1999.
