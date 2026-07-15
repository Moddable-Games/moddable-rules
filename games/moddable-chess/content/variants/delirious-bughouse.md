---
title: Delirious Bughouse
slug: delirious-bughouse
board: "8×8 (two boards)"
players: "4 (2 teams of 2)"
parent: moddable-chess
win: "Capture an opposing King (team loses if either ally's King is captured)"
special: "Bughouse variant by Alberto Monteiro (c.1984) combining relay capture, dice, and a worst-move mechanic. Two boards, 4 players, 2 allied teams. Key Bughouse modifications: Pawns drop only on ranks 2–6 (not rank 7); promoted Pawns when captured stay promoted (the promoting player recovers the original Pawn, permanently increasing piece count). Add-on layers: Dice Chess (die each turn — 1=Pawn, 2=Knight, 3=Bishop, 4=Rook, 5=Queen, 6=any); Worst Move (second die determines whether the player or opponent chooses the move); fairy pieces (Camel, Giraffe, Zebra, Cylindrical pieces, Pyramid, Atomic Bomb). Final full form adds Structures, Events, and Magic Items."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
    boards: 2
  players: [white1, black2, white3, black4]
  render:
    cellSize: 34
  setup:
    - "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
    - "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
  notation: algebraic
published: true
---

## Delirious Bughouse

{{svg:delirious-bughouse-board.svg "Delirious Bughouse — starting position"}}

Delirious Bughouse is a complex Bughouse chess variant developed by Alberto Vieira Ferreira Monteiro and Carlos Eugenio Lossio Seiblitz Filho around 1984. It evolves through several layers from standard Bughouse, adding dice, worst-move mechanics, and eventually a full set of fairy pieces, structures, events, and magic items.

### Teams and Boards

Two standard 8×8 boards. Four players in two allied teams: White1 and Black4 are allies; Black2 and White3 are allies. White1 plays against Black2 on one board; White3 plays against Black4 on the other. Play proceeds simultaneously on both boards.

### Base Bughouse Rules

Standard Bughouse (Tandem Chess) with two modifications:

1. **Pawn drop restriction:** Pawns received from a partner may only be dropped on ranks 2–6. They may not be dropped on rank 7 (unlike standard Bughouse).
2. **Promoted Pawn capture:** When a promoted Pawn is captured, it does not revert to a Pawn — the capturing player keeps the promoted piece. However, the player who originally promoted the Pawn recovers the original Pawn for future use. This means piece count on the board grows over time: promotion permanently adds one piece to the total.

All other standard Bughouse rules apply: players play simultaneously; captured pieces pass to the partner; a player may spend their turn dropping a received piece onto any legal square; pawns may not be dropped to checkmate.

### Dice Chess Layer

Before each move, the player rolls one die to determine which type of piece must be moved:
- 1 = Pawn
- 2 = Knight
- 3 = Bishop
- 4 = Rook
- 5 = Queen
- 6 = Any piece

If no legal move exists with the rolled piece type, the player may choose any legal move.

### Worst Move Layer

Two dice are rolled each turn instead of one. The second die determines whether the player plays the best or worst possible move:
- If "best": the player chooses their move freely (within the piece-type constraint)
- If "worst": the **opponent** chooses which move the player makes, subject to the piece-type constraint — selecting the worst possible option

### Bughouse Worst Move

Combining all three elements: two boards with Bughouse relay and pawn rules, plus the two-dice Dice Chess + Worst Move system applied each turn.

### Fairy Pieces

When a King is captured, the capturing player is rewarded with one or more fairy pieces from an agreed set, which may subsequently be dropped. Core fairy piece set:

| Piece | Movement |
|---|---|
| Camel | Extended Knight: leaps [3,1] |
| Giraffe | Leaps [4,1] |
| Zebra | Leaps [3,2] |
| Taxi | Modified Pawn: moves backwards; from rank 2 can leap to rank 5; capturable en passant in two ways |
| Pyramid | Drops onto any square; once placed, blocks all entry to that square permanently |
| Atomic Bomb | Drops onto any square; destroys all pieces in a 3×3 area; Kings are immune |
| Cylindrical Rook (Rc) | Rook that views the board as a cylinder — the a-file and h-file are adjacent |
| Cylindrical Knight (Nc) | Knight with cylindrical wrap |
| Cylindrical Bishop (Bc) | Bishop with cylindrical wrap |
| Cylindrical Queen (Qc) | Queen with cylindrical wrap |

**Intelligent pieces (marked "i"):** Never play the worst move — if the opponent selects "worst" for an intelligent piece, the owning player chooses the move instead.

### Structures, Events, and Magic Items (Full Delirious Bughouse)

The extended form adds:

- **Structures:** Board modifications that may occur mid-game (e.g. the board becomes cylindrical; an extra row is added)
- **Events:** Random occurrences affecting the board state (e.g. empty squares filled by bacteria that evolve like Conway's Life; the board rotates 90 degrees)
- **Magic Items:** Attachable to pieces (e.g. ring of invisibility — opponent does not know where the piece moved until it captures or checks; cloak of double strength — piece requires a double attack to be captured)

### Win Condition

Victory = capturing an opposing King. Teams: if either ally's King is captured, both team members lose.

### Scoring (Match Play)

When scoring matches:
- +1 for each victory
- +1 if the final check was given by a moving (not dropped) piece
- +1 if the checkmate uses a non-FIDE piece
- +1 if the checkmating move uses a non-attacking piece (e.g. Atomic Bomb drop)

### Attribution

Delirious Bughouse was developed by Alberto Vieira Ferreira Monteiro and Carlos Eugenio Lossio Seiblitz Filho, with earlier assistance from Oscar Luiz Vieira Ferreira and Carlos Vieira Ferreira. Final form achieved around 1984. Source: chessvariants.com/multiplayer.dir/delbug.html
