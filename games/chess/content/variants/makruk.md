---
title: Makruk
slug: makruk
board: "8×8"
players: "2"
parent: chess
win: Checkmate
special: Thai chess. Khon moves 5 directions (silver general). Pawns promote on rank 6 to Met. No castling or en passant.
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rngkfgnr/8/pppppppp/8/8/PPPPPPPP/8/RNGKFGNR"
---

## Makruk (Thai Chess)

The traditional chess of Thailand, played since at least the 16th century. Distinctive for its silver-general piece (Khon), early pawn promotion, and endgame counting rules that force resolution.


{{svg:makruk-board.svg "Makruk — starting position"}}

### Setup

**Board:** Standard 8×8.

**Starting position:** Pawns on the 3rd rank. Back rank (a1–h1 for White): Rook, Knight, Khon, Khun (King), Met, Khon, Knight, Rook.

- White: Rua a1, Ma b1, Khon c1, Khun d1, Met e1, Khon f1, Ma g1, Rua h1; Bia a3–h3
- Black: Rua a8, Ma b8, Khon c8, Khun d8, Met e8, Khon f8, Ma g8, Rua h8; Bia a6–h6

**FEN:** `rngkfgnr/8/pppppppp/8/8/PPPPPPPP/8/RNGKFGNR w - - 0 1`

(R/r = Rua, N/n = Ma, G/g = Khon, K/k = Khun, F/f = Met, P/p = Bia)

### Pieces

| Thai name | English | Per side | Movement |
|---|---|---|---|
| Khun | King | 1 | One step in any direction. No castling. |
| Met | Queen/Seed | 1 | One step diagonally only (4 directions). A weak piece. |
| Khon | Bishop/Silver General | 2 | One step diagonally in any direction OR one step straight forward (5 directions). |
| Ma | Knight/Horse | 2 | L-shaped leap, identical to the modern Knight. |
| Rua | Rook/Chariot | 2 | Slides any number of squares orthogonally. |
| Bia | Pawn | 8 | One step forward. Captures one step diagonally forward. No initial double move. |

**Note on the Khon:** the five-direction movement (four diagonal + one forward) is the defining piece of Makruk. It is the same as shogi's Silver General. The forward step is relative to the owning player's advancement direction.

### Rules

- No castling.
- No en passant.
- Pawns do not have a two-square initial move.
- Pawns promote on reaching the sixth rank from their own side (rank 6 for White, rank 3 for Black) and always promote to Met.

### Counting Rules

Makruk uses two counting systems to force resolution in endgames. Both end the game in a draw if the stronger side fails to checkmate within the limit. The weaker side counts aloud and may stop counting at any point, restarting later if desired.

**Board counting** (นับกระดาน). Applies once neither side has any unpromoted pawns remaining. The stronger side must checkmate within **64 moves**, counted by the weaker side. Reaching 64 without checkmate is a draw.

**Pieces counting** (นับศักดิ์หมาก). Applies once the weaker side has only a bare King, that is, their last piece other than the King has been captured. The count begins at the total number of pieces remaining on the board plus one, and the limit is set by the strongest material the stronger side holds:

| Stronger side holds | Move limit |
|---|---|
| Two or more Rooks | 8 |
| One Rook | 16 |
| Two or more Khon | 22 |
| Two or more Knights | 32 |
| One Khon | 44 |
| One Knight, or only Met and promoted pawns | 64 |

Only the most valuable unit is considered; other material does not change the limit. Reaching the limit without checkmate is a draw.

### Win Condition

Checkmate the opponent's King.

### Strategy

With no Queen and only the weak Met, Rooks are by far the most powerful pieces. The Khon's forward step makes it more useful in attack than defence. Pawn promotion comes earlier (rank 6) but the promoted piece is weak. Endgames are critical: counting rules force the stronger side to deliver mate within a fixed window or accept a draw.

### Attribution

Traditional Thai chess. Played for over 500 years in Thailand. Public domain.
