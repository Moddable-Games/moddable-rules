---
title: Minishogi
slug: minishogi
board: "5×5"
players: "2"
parent: shogi
win: "Checkmate the opponent's King"
special: Standard Shogi on a 5×5 board. Single-rank promotion zone. No Knights or Lances.
engine:
  topology:
    type: grid
    rows: 5
    cols: 5
  players: [player1, player2]
---

## Minishogi

Minishogi was invented (or rediscovered) around 1970 by Shigenobu Kusumoto of Osaka, Japan. It applies Standard Shogi rules to a 5×5 board, reducing each player's force to five pieces and the promotion zone to the single back rank. Game mechanics are not copyrightable; the rules have been freely published for over 50 years.

{{svg:minishogi-board.svg "Minishogi — starting position"}}

### Setup

**Board:** 5×5 grid, 25 squares.

**Pieces per player:** 6 (King, Rook, Bishop, Gold General, Silver General, one Pawn). No Knights or Lances: the board is too small for their jump.

**Starting position:**

| Player | Rank | Pieces (files 5–1, left to right) |
|---|---|---|
| White (top) | Rank 5 | Rook · Bishop · Silver · Gold · King |
| White | Rank 4 | Pawn at file 1 only |
| Black (bottom) | Rank 1 | King · Gold · Silver · Bishop · Rook |
| Black | Rank 2 | Pawn at file 5 only |

### Pieces

| Piece | Movement |
|---|---|
| King | One square in any direction. Cannot move into check. |
| Rook | Any number of squares orthogonally. |
| Bishop | Any number of squares diagonally. |
| Gold General | One step orthogonally or diagonally forward. Six directions. |
| Silver General | One step diagonally, or one step forward. Five directions. |
| Pawn | One step directly forward. |

### Promotion

The promotion zone is the final rank only (rank 5 for Black, rank 1 for White). A piece may promote when it moves into or within the promotion zone. Promotion is mandatory when the Pawn reaches the final rank with no other legal move.

**Promoted pieces:**

| Base piece | Movement when promoted |
|---|---|
| Rook | Dragon King: Rook moves plus one square diagonally |
| Bishop | Dragon Horse: Bishop moves plus one square orthogonally |
| Silver General | Moves as Gold General |
| Pawn | Tokin: moves as Gold General |

Kings and Gold Generals do not promote.

### Drops

The drop mechanic applies as in Standard Shogi. Captured pieces are held in hand and may be dropped onto any empty square on a later turn, unpromoted. Restrictions: no Pawn drop on a file already containing a friendly unpromoted Pawn; no Pawn drop for immediate checkmate; no drop where the piece would have no legal move.

### Win Condition

Checkmate the opponent's King. A player with no legal moves loses.

### Draws

**Sennichite:** The same position (including pieces in hand) occurs four times with the same player to move. Draw. If caused by perpetual check, the checking side loses.

**Impasse:** Both Kings enter the promotion zone and neither can be mated. Count material: Rooks and Bishops score 5 points each; all others score 1 point each. A player with fewer than 24 points loses. If both reach 24 or more, the game is a draw.

### Attribution

Minishogi. Invented (or rediscovered) c. 1970 by Shigenobu Kusumoto of Osaka. Rules freely published since then; game mechanics are not copyrightable. Sources: pychess.org/variants/minishogi; Fairy-Stockfish variants.ini engine definition.
