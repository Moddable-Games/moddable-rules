---
title: Sittuyin
slug: sittuyin
board: "8×8"
players: "2"
parent: chess
win: Checkmate
special: Burmese chess. Placement opening phase. Pawns promote on the diagonal. No castling or en passant.
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
---

## Sittuyin (Burmese Chess)

The traditional chess of Myanmar (Burma), distinguished by its placement opening phase where players freely position pieces on their own half of the board before play begins.

{{svg:sittuyin-board.svg "Sittuyin — pawn starting positions (remaining pieces placed freely during setup phase)"}}

### Setup

**Board:** Standard 8×8. Traditionally played on a monochromatic board with two diagonal lines running corner-to-corner forming an X (the sit-ke-myin, or general's lines). These diagonals mark the promotion squares.

**Pawns (fixed positions):**

- White: a3, b3, c3, d3, e4, f4, g4, h4
- Black: a5, b5, c5, d5, e6, f6, g6, h6

Pawns are staggered across two ranks per side (not all on one rank as in Makruk).

**Placement phase:** After pawns are set, players alternate placing their remaining pieces on their own half of the board:

- White places on ranks 1, 2, and 3
- Black places on ranks 6, 7, and 8
- Rooks must be placed on the back rank (rank 1 for White, rank 8 for Black)
- King, General, Elephants, and Horses may be placed on any empty square within the drop region
- All pieces must be placed before normal play begins

### Pieces

| Burmese Name | Role | Movement |
|---|---|---|
| Min-gyi | King | One step in any direction |
| Sit-ke | General | One step diagonally only |
| Sin | Elephant | One step diagonally or one step forward |
| Myin | Horse | L-shaped knight move (can jump) |
| Yahhta | Chariot | Any number of squares orthogonally |
| Ne | Pawn | One square forward; captures one square diagonally forward |

All piece movements are identical to Makruk (Thai Chess). The General is a weak piece (one diagonal step only). The Elephant moves one step diagonally in any direction or one step straight forward.

### Rules

- No double-step pawn move. Pawns always move one square forward.
- No castling.
- No en passant.
- Stalemate is a draw.
- 50-move rule applies (50 moves without capture or pawn advance).

### Promotion

Pawns promote on specific diagonal squares forming a V-shape across the board:

- **White promotes on:** a8, b7, c6, d5, e5, f6, g7, h8
- **Black promotes on:** a1, b2, c3, d4, e4, f3, g2, h1

Promotion rules:

- A pawn reaching a promotion square does not promote immediately. Promotion occurs on a subsequent turn.
- Pawns promote to General (Sit-ke) only.
- Only one General may exist per side at any time. A pawn cannot promote if the player's General is still on the board.
- Promotion cannot capture an enemy piece, attack an enemy piece, or deliver check.
- If only one pawn remains for a player, it may promote on any square (relaxed rule).

### Win Condition

Checkmate the opponent's King.

### Counting Rules

When one player has only a bare King remaining, the opponent must deliver checkmate within a limited number of moves based on remaining material:

- 16 moves with a Chariot (Rook)
- 44 moves with an Elephant
- 64 moves with a Horse (Knight)

If checkmate is not delivered within the limit, the game is drawn.

### Strategy

The placement phase is the defining strategic feature. Experienced players position pieces to control key diagonals and prepare attacks from the opening. Since all pieces start in custom positions, there is no opening theory in the traditional sense. The weak General and promotion restrictions make endgames slow and technical. Chariots (Rooks) dominate as the strongest piece on the board.

### Attribution

Traditional Burmese chess, played for centuries in Myanmar. Public domain.
