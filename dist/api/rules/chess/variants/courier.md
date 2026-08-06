## Courier Chess

A medieval large-board variant documented since 1202, predating the modern Queen and Bishop moves. One of the oldest recorded chess variants in Europe.

### Setup

**Board:** 12×8 (96 squares).

**Back rank, a-file to l-file:** Rook, Knight, Alfil, Courier, Mann, King, Fers, Schleich, Courier, Alfil, Knight, Rook. Twelve Pawns on the second rank.

- White: Rook a1 l1, Knight b1 k1, Alfil c1 j1, Courier d1 i1, Mann e1, King f1, Fers g1, Schleich h1; Pawns a2–l2
- Black mirrors on ranks 8 and 7

**FEN:** `rnebmkfsbenr/pppppppppppp/12/12/12/12/PPPPPPPPPPPP/RNEBMKFSBENR w - - 0 1`

(R = Rook, N = Knight, E = Alfil, B = Courier, M = Mann, K = King, F = Fers, S = Schleich)

{{svg:courier-board.svg "Courier Chess — starting position (12×8)"}}

### Pieces

| Piece | Movement |
|-------|----------|
| King | One step any direction. Royal. No castling |
| Fers (Queen) | One step diagonally only. The medieval Queen, very weak |
| Courier | Slides diagonally any distance. The modern Bishop |
| Mann (counsellor) | One step any direction, as the King, but not royal |
| Schleich (sneak) | **One step orthogonally only.** No diagonal movement. The weakest piece |
| Alfil (Elephant) | Leaps exactly two squares diagonally, over any intervening piece. Colour-bound |
| Rook | Slides orthogonally any distance |
| Knight | L-shaped leap, as standard |
| Pawn | One step forward, captures diagonally forward. No double step. Promotes to Fers only |

### Rules

Standard chess movement applies per the table above. No castling. No pawn double-step. No en passant.

**Stalemate:** The file's original claim that "stalemate counts as a win (medieval rules)" is unsourced. Medieval practice varied by region. Marked `rulebook-ambiguous`; do not implement as a win without a primary source.

### Win Condition

Checkmate the opponent's King.

**Historical note:** The Courier was the first piece to move like a modern Bishop. This game introduced unlimited diagonal sliding to European chess centuries before it was adopted into the standard game.

### Strategy

The Fers (proto-Queen) is extremely weak: one diagonal step. The Couriers (modern Bishops) are the strongest attacking pieces. The wide board makes Knight development slow. Alfils can leap but are colour-bound, creating gaps. The Schleich is nearly useless offensively but can block. Rooks dominate open files as in standard chess.

### Attribution

First documented 1202 (Wirnt von Gravenberg, *Wigalois*). Public domain.