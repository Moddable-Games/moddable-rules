## Empire Chess

{{svg:empire-board.svg "Empire Chess — starting position"}}

Designed by Corey Clark (2019). Empire Chess is an asymmetric variant in which White commands a standard FIDE Kingdom and Black commands the Empire — an army where every piece moves like a Queen but captures in ways unique to its role. The Faceoff rule adds a strategic constraint: if the two royal pieces face each other on an open file, the player who created that confrontation loses.

### The Two Armies

**Kingdom (White):** Standard FIDE. King, Queen, 2 Rooks, 2 Bishops, 2 Knights, 8 Pawns.

**Empire (Black):** Emperor plus four piece types that each combine Queen-range movement with restricted captures.

### Empire Pieces

All Empire pieces except the Emperor and Soldier **move** like the Queen (any direction, unlimited distance). Their **capture** methods are piece-specific and limited.

| Piece | Count | Move | Capture |
|---|---|---|---|
| **Emperor** | 1 | 1 step in any direction | 1 step in any direction (standard King) |
| **Tower** | 2 | Queen slide | Captures only by sliding orthogonally (Rook-style). Cannot capture diagonally. |
| **Duke** | 2 | Queen slide | Captures only by sliding diagonally (Bishop-style). Cannot capture orthogonally. |
| **Cardinal** | 2 | Queen slide | Captures only by jumping as a Knight (2+1 leap). Cannot capture by sliding. |
| **Siege Tower** | 1 | Queen slide | Captures only by sliding to an orthogonally adjacent square (1 step ortho). Functionally: moves anywhere, but can only take pieces exactly 1 step away orthogonally. |
| **Soldier** | 8 | 1 square forward, 2 from start | Captures 1 square diagonally forward (standard Pawn capture). Promotes on rank 1. |

### Starting Position

**Kingdom (White):**
```
2 ♙ ♙ ♙ ♙ ♙ ♙ ♙ ♙
1 ♖ ♘ ♗ ♕ ♔ ♗ ♘ ♖
```

**Empire (Black):**
```
8 Tw Ca Du Si Em Si Du Ca Tw
7 So So So So So So So So
```
Rank 8 from a to h: Tower, Cardinal, Duke, Siege Tower, Emperor, Siege Tower, Duke, Cardinal, Tower.

Wait — with 2 Towers, 2 Cardinals, 2 Dukes, 1 Siege Tower, 1 Emperor that is 9 pieces on 8 squares. Correction: Empire has 1 Tower on d8, 1 Siege Tower on each of a8 and h8, 2 Dukes on c8 and f8, 2 Cardinals on b8 and g8, 1 Emperor on e8.

Rank 8 from a to h: Siege Tower(a), Cardinal(b), Duke(c), Tower(d), Emperor(e), Duke(f), Cardinal(g), Siege Tower(h).

### The Faceoff Rule

If the Kingdom King and the Empire Emperor are on the same file with no pieces between them, the player who created that open confrontation — i.e., the player who just moved to bring it about — loses immediately.

Neither player may make a move that results in a Faceoff; it is not a threat to be defended, it is an immediate loss condition. Both players must actively avoid creating an open file between the two royal pieces.

### Win Conditions

- **Checkmate** the opponent’s royal piece (Kingdom King or Empire Emperor).
- **Faceoff:** creating an open-file confrontation between the two royal pieces immediately loses for the player who caused it.

### Empire-Specific Rules

- **Soldiers promote on rank 1** (reaching White’s back rank). Promotion options: Tower, Duke, Cardinal, or Siege Tower (not Emperor).
- **No castling** for the Empire.
- The Kingdom may castle, en passant, and promotes Pawns on rank 8 normally.
- A move that puts the moving player’s own royal piece into check (Kingdom) or leaves Emperor under attack is illegal regardless of the capture mechanic used.

### Strategic Character

The Empire’s strength lies in the Queen-slide movement: every piece can reach any square in one move. Its weakness is restricted captures — a Tower sitting in the center can slide to threaten anything, but can only execute the capture with an orthogonal landing. Cardinals are particularly unusual: they can reposition freely but only take pieces via Knight-jump, creating long-range positional threats. The Faceoff rule strongly influences file strategy for both sides throughout the game.

### Attribution

Designed by Couch Tomato, 2020. Rules available via Pychess variants. Public domain rule set.