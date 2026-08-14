## Orda Chess

An asymmetric variant where White plays standard chess and Black commands the Mongol Horde — pieces that move differently from how they capture.


{{svg:orda-chess-board.svg "Orda Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**White (standard):** Standard chess setup.

**Black (Horde):** Pawns on rank 7. Back rank: Lancer, Archer, Kheshig, Yurt, Khan, Kheshig, Archer, Lancer.

**FEN:** `lhaykahl/8/pppppppp/8/8/PPPPPPPP/8/RNBQKBNR w KQ - 0 1`

### Rules

**Yurt (y)** — Moves one square diagonally. Captures one square orthogonally. (Replaces the Queen.)

**Lancer (l)** — Moves like a Knight (L-shaped jump). Captures like a Rook (slides orthogonally). Cannot jump to capture.

**Archer (h)** — Moves like a Knight (L-shaped jump). Captures like a Bishop (slides diagonally). Cannot jump to capture.

**Khan (k)** — Moves and captures as a standard King.

**Kheshig (a)** — Moves and captures as a Knight and King combined.

- White can castle. Black cannot (the Khan starts on e8).
- Black's Lancers and Archers are divergent: they jump (like a Knight) for non-capturing moves but must slide to capture.
- Standard pawns for both sides.

### Win Condition

Checkmate the opponent's King/Khan.

### Strategy

Black's Lancers and Archers are mobile repositioners (knight-jump for moves) but devastating long-range attackers (rook/bishop capture). White must avoid open lines where Horde pieces can capture at distance, while exploiting their inability to slide for repositioning.

### Attribution

Designed by Couch Tomato (2020). Popularised on Pychess. Public domain.