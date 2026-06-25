---
title: "Standard Shogi"
slug: "standard"
board: "9×9"
players: "2"
parent: "shogi"
order: 1
win: "Checkmate the opponent's King"
special: "Captured pieces become your own and can be dropped back onto the board"
---

## Standard Shogi

The full form of Japan's classic strategy game, played since at least the 10th century. The board is 9×9 and each player commands 20 pieces. The drop mechanic (re-entering captured pieces as your own) defines every decision from opening to endgame.

{{svg:standard-board.svg "Standard Shogi — starting position"}}

### Setup

**Board:** 9×9 grid, 81 squares. Traditional boards use natural wood throughout, with no alternating square colours.

**Pieces per player:** 20, in eight types.

**Starting position:**

| Rank | Files 9–1 (left to right) |
|---|---|
| Rank 1 — White back | Lance · Knight · Silver · Gold · King · Gold · Silver · Knight · Lance |
| Rank 2 — White | Rook (file 8) · · · · · · · Bishop (file 2) |
| Rank 3 — White pawns | Pawn × 9 |
| Ranks 4–6 | Empty |
| Rank 7 — Black pawns | Pawn × 9 |
| Rank 8 — Black | Bishop (file 8) · · · · · · · Rook (file 2) |
| Rank 9 — Black back | Lance · Knight · Silver · Gold · King · Gold · Silver · Knight · Lance |

Black (Sente) moves first.

### Pieces

| Piece | Abbreviation | Movement |
|---|---|---|
| King (玉将 / 王将) | K | One square in any of the 8 directions. Cannot move into check. |
| Rook (飛車) | R | Any number of squares orthogonally. |
| Bishop (角行) | B | Any number of squares diagonally. |
| Gold General (金将) | G | One square orthogonally, or one square diagonally forward. Six directions total. Cannot move diagonally backward. |
| Silver General (銀将) | S | One square diagonally in any direction, or one square directly forward. Five directions total. |
| Knight (桂馬) | N | Jumps exactly two squares forward and one square sideways. The only piece that leaps over others. Cannot retreat. |
| Lance (香車) | L | Any number of squares directly forward. Cannot move sideways or backward. |
| Pawn (歩兵) | P | One square directly forward. Captures the same way it moves. |

### Promotion

The promotion zone is the three ranks farthest from each player (the opponent's back three ranks). A piece may promote when it moves into, out of, or entirely within the promotion zone. Promotion is optional unless the piece would be stranded with no legal move: Pawns and Lances must promote at the final rank; Knights must promote at either of the final two ranks.

**Promoted pieces:**

| Base piece | Promoted name | Movement |
|---|---|---|
| Rook | Dragon King (龍王) | Rook moves, plus one square diagonally |
| Bishop | Dragon Horse (龍馬) | Bishop moves, plus one square orthogonally |
| Silver | Promoted Silver (成銀) | Moves exactly as Gold General |
| Knight | Promoted Knight (成桂) | Moves exactly as Gold General |
| Lance | Promoted Lance (成香) | Moves exactly as Gold General |
| Pawn | Tokin (と金) | Moves exactly as Gold General |

Kings and Gold Generals do not promote.

### The Drop Mechanic

When a player captures an opponent's piece, that piece is held in hand. On any turn, instead of moving a piece on the board, the player may drop a piece from hand onto any empty square. Three restrictions apply:

1. **Nifu (二歩):** A Pawn may not be dropped on a file that already contains an unpromoted friendly Pawn.
2. **Uchifuzume (打ち詰め):** A Pawn may not be dropped to deliver immediate checkmate. Dropping to give check is legal.
3. **No dead-end drops:** Pawns and Lances cannot be dropped on the final rank. Knights cannot be dropped on the final two ranks. No legal move would exist from those squares.

Pieces always drop unpromoted, even if they were promoted when captured.

### Win Condition

Checkmate the opponent's King: attack the King such that no legal move can escape check. There is no stalemate rule in Shogi. A player with no legal move loses.

### Draws

**Sennichite (千日手):** The same position (including pieces in hand) occurs four times with the same player to move. The game is a draw. If the repetition is caused by perpetual check, the checking side loses.

**Impasse (入玉 / 持将棋):** Both Kings advance into the opponent's promotion zone and neither can be mated. Count material value: Rooks and Bishops score 5 points each; all other pieces score 1 point each (Kings excluded). A player with fewer than 24 points loses. If both players reach 24 or more points, the game is a draw.

### Attribution

Standard Shogi. Ancient origin; public domain. Sources: GNU Shogi Manual (GNU Project, public domain); mastersofgames.com rules reference; pychess.org variants documentation.
