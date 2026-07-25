## Gorogoro+

{{svg:gorogoro-plus-board.svg "Gorogoro+ — starting position"}}

Gorogoro+ is a compact Shogi variant played on a 5×6 board. It follows standard Shogi rules but with a reduced piece set — the Bishop and Rook are removed entirely. Each player begins with one Knight and one Lance in hand (available for drops from the first move). Promotion occurs only in the last two ranks.

### Setup

**Board:** 5 files (a–e) × 6 ranks.

**Pieces per player on board:** 9 — King, 2 Gold Generals, 2 Silver Generals, 2 Knights, 2 Lances. No Rook, no Bishop, no Pawns on board at start.

**Pieces per player in hand at start:** 1 Knight (N), 1 Lance (L).

**Starting position:**

| Rank | Contents |
|---|---|
| Rank 1 — Gote back | Silver · Gold · King · Gold · Silver |
| Rank 2 — Gote | (empty) |
| Rank 3 — Gote pawns | · Pawn · Pawn · Pawn · (files b, c, d) |
| Rank 4 — Sente pawns | · Pawn · Pawn · Pawn · (files b, c, d) |
| Rank 5 — Sente | (empty) |
| Rank 6 — Sente back | Silver · Gold · King · Gold · Silver |

Gote starts with Knight (n) and Lance (l) in hand. Sente starts with Knight (N) and Lance (L) in hand. Gote moves first.

**SFEN:** `sgkgs/5/1ppp1/1PPP1/5/SGKGS[LNln] w 0 1`

*(S/s = Silver General, G/g = Gold General, K/k = King, P/p = Pawn, L/l = Lance, N/n = Knight. [LNln] = Sente hand: Lance + Knight; Gote hand: lance + knight.)*

### Pieces

All standard Shogi pieces except the Rook and Bishop are used. Movement is identical to standard Shogi.

| Piece | Abbreviation | Movement | Promotes to |
|---|---|---|---|
| King | K | One square any direction | — |
| Gold General | G | One square orthogonally or diagonally forward | — |
| Silver General | S | One square diagonally or directly forward | Promoted Silver (moves as Gold) |
| Knight | N | Two squares forward, one sideways; jumps | Promoted Knight (moves as Gold) |
| Lance | L | Any number of squares directly forward | Promoted Lance (moves as Gold) |
| Pawn | P | One square directly forward | Tokin (moves as Gold) |

### Rules

All standard Shogi drop rules apply:
- No two Pawns of the same player may occupy the same file (Nifu).
- A Pawn may not be dropped to deliver immediate checkmate.
- Pawns and Lances cannot be dropped on the final rank; Knights cannot be dropped on the final two ranks.

**Promotion zone:** the last **two ranks** (ranks 5–6 for Sente, ranks 1–2 for Gote). Pieces may promote when moving into, out of, or within the promotion zone.

**Starting hand:** Both players begin with a Knight and Lance in hand. These may be dropped on any eligible empty square from the first move.

### Win Conditions

Checkmate the opponent's King. Stalemate is a loss for the player who cannot move.

### Attribution

Gorogoro+ is a Shogi family variant. Rules documented from pychess.org/variants/gorogoroplus.