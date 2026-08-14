---
playable: true
title: Four Player Shogi
slug: four-player-shogi
board: "cross-shaped, 189 squares (9×9 centre + four 3×9 wings)"
players: "4"
parent: shogi
win: Checkmate both enemy Kings (team); or capture all other Kings (individual)
special: "4-player Shogi on a cross-shaped board. Each player commands a standard Shogi army in one 3×9 wing. East and West players swap their Rook and Bishop starting positions. Drops apply with team restrictions. Three game styles: Team-Orthogonal, Team-Diagonal, and Individual. Michael Shipley, 1999."
engine:
  topology:
    type: grid
    rows: 15
    cols: 15
    voids: [[0,0],[0,1],[0,2],[0,12],[0,13],[0,14],[1,0],[1,1],[1,2],[1,12],[1,13],[1,14],[2,0],[2,1],[2,2],[2,12],[2,13],[2,14],[12,0],[12,1],[12,2],[12,12],[12,13],[12,14],[13,0],[13,1],[13,2],[13,12],[13,13],[13,14],[14,0],[14,1],[14,2],[14,12],[14,13],[14,14]]
    layout: cells
  players: [red, yellow, green, blue]
  pieces:
    set: mce-4player-shogi
  setup: "3,yL,yN,yS,yG,yK,yG,yS,yN,yL,3/3,1,yB,5,yR,1,3/3,yP,yP,yP,yP,yP,yP,yP,yP,yP,3/rL,1,rP,9,bP,1,bL/rN,rR,rP,9,bP,bB,bN/rS,1,rP,9,bP,1,bS/rG,1,rP,9,bP,1,bG/rK,1,rP,9,bP,1,bK/rG,1,rP,9,bP,1,bG/rS,1,rP,9,bP,1,bS/rN,rB,rP,9,bP,bR,bN/rL,1,rP,9,bP,1,bL/3,gP,gP,gP,gP,gP,gP,gP,gP,gP,3/3,1,gR,5,gB,1,3/3,gL,gN,gS,gG,gK,gG,gS,gN,gL,3"
  render:
    cellSize: 22
    cellColor: checkered
    labels: false
    decorations: []
    zones:
      voids: [[0,0],[0,1],[0,2],[0,12],[0,13],[0,14],[1,0],[1,1],[1,2],[1,12],[1,13],[1,14],[2,0],[2,1],[2,2],[2,12],[2,13],[2,14],[12,0],[12,1],[12,2],[12,12],[12,13],[12,14],[13,0],[13,1],[13,2],[13,12],[13,13],[13,14],[14,0],[14,1],[14,2],[14,12],[14,13],[14,14]]
    ops:
      - op: cells
        pattern: checkered
        light: cell-light
        dark: cell-dark
        interactive: true
  pieceRotations:
    red: 90
    yellow: 180
    blue: 270
    green: 0
  surface:
    colors:
      cell-light: "#f0d9b5"
      cell-dark: "#b58863"
  notation: shogi
  drops: true
published: true
---

## Four Player Shogi

{{svg:four-player-shogi-board.svg "Four Player Shogi — starting position"}}

Four Player Shogi is a 4-player adaptation of standard Shogi designed by Michael Shipley in 1999. It is played on a cross-shaped board with a 9×9 central area and a 3×9 wing on each edge, giving 189 playable squares. The overall bounding box is 15×15 with the four 3×3 corner sections off the board.

### Starting Position

Each player occupies one 3×9 wing and commands a standard Shogi army, facing inward toward the centre.

**North and South wings (back rank, inner to outer):**
Lance · Knight · Silver · Gold · King · Gold · Silver · Knight · Lance (back rank) · Rook and Bishop on 2nd rank (North: Rook on b-file, Bishop on h-file; South: Bishop on b-file, Rook on h-file) · 9 Pawns on 3rd rank.

**East and West wings:** Same army as North/South, but with **Rook and Bishop positions swapped** relative to North/South. (East: Bishop left, Rook right; West: Rook left, Bishop right, reading outward.)

No pieces may move through the 3×3 void squares at the four corners of the bounding box.

### Piece Movement

All pieces move as in standard Shogi:
- **Pawn:** one square forward
- **Lance:** any number of squares forward
- **Knight:** two squares forward + one square sideways (can jump)
- **Silver General:** one square diagonally or one square forward
- **Gold General:** one square orthogonally or one square diagonally forward
- **Bishop:** any number of squares diagonally
- **Rook:** any number of squares orthogonally
- **King:** one square in any direction

"Forward" is always toward the opponent's side (inward toward the board centre, away from each player's own wing).

### Promotion

A player may promote a piece when it **enters, moves within, or leaves any opponent's 3×9 wing**. A piece **must** promote if moved to a square from which it has no legal moves in unpromoted form.

Promoted movement follows standard Shogi:
- Pawn, Lance, Knight, Silver → move as Gold General
- Bishop → Dragon Horse (Bishop + one orthogonal step)
- Rook → Dragon King (Rook + one diagonal step)
- Gold General and King do not promote

### Drops

Captured pieces may be dropped on any empty square in lieu of a move, with restrictions:
- Pieces are always dropped in their unpromoted state.
- A piece may not be dropped where it would have no legal moves (e.g., a Pawn cannot be dropped on the opponent's back rank).
- A Pawn may not be dropped to give checkmate.
- A player may not have more than one unpromoted Pawn on the same file; therefore a player may never have more than 15 non-promoted Pawns on the board at once.
- **Pieces captured by a teammate cannot be transferred** — captured pieces belong only to the player who captured them.

### Game Styles

**Team-Orthogonal:** North + South vs East + West. Turn order: North → East → South → West. Partners may not capture each other's pieces. A team wins when **both enemy Kings are in checkmate** simultaneously.

**Team-Diagonal:** North + East vs South + West. Turn order: North → South → East → West. Otherwise identical to Team-Orthogonal.

**Individual:** Each player fights all three others. Turn order: North → East → South → West. A player who checkmates an enemy King may capture that King on their next turn — the captured King is removed from play. Remaining pieces of the eliminated player stay on the board until captured; captured pieces in the eliminated player's hand are removed. The last player with a surviving King wins.

**Alternative individual variant:** Check is not announced and the King is treated as a normal piece that may be captured and dropped as an additional King. The game ends when one player possesses all four Kings.

### Attribution

Designed by Michael Shipley, 1999. Rules documented from chessvariants.com/shogivariants.dir/fourplayer.html.
