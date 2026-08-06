## Racing Kings

No checks allowed. Race your King to rank 8. A pure positional race with no violence.


{{svg:racing-kings-board.svg "Racing Kings — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** All pieces start on ranks 1–2 in a specific non-standard arrangement. No pawns.

**FEN:** `8/8/8/8/8/8/krbnNBRK/qrbnNBRQ w - - 0 1`

### Rules

Pieces move and capture exactly as in standard chess. There are no pawns, no castling, and no promotion.

**The no-check rule.** No move may result in either King standing in check. This has two components:

1. **You may not give check.** No move may place the opponent's King under attack. This is the variant's distinctive restriction and has no equivalent in standard chess.
2. **You may not move into check.** As in standard chess, no move may leave your own King under attack, and the King may not move to a square attacked by an enemy piece.

Because both components apply to every move, check never occurs in a legal game. There is consequently no checkmate, and no concept of escaping check.

A King cannot advance to a rank-8 square that is defended by an enemy piece, so the eighth rank can be contested by defending its squares rather than by blocking the path.

### Win Condition

A player wins by moving their King to the eighth rank, subject to the equalising rule below.

**The equalising rule.** Black moves second and is compensated as follows:

- If White's King reaches the eighth rank, Black immediately takes one further turn. If on that turn Black legally moves their King to the eighth rank, the game is a **draw**. If Black does not or cannot, **White wins**.
- If Black's King reaches the eighth rank first, **Black wins immediately**. White has no equalising move.

The rule is deliberately asymmetric. It exists solely to offset White's first-move advantage.

**When Black cannot equalise.** Black's equalising move is an ordinary legal move and is subject to every normal restriction. Black therefore fails to equalise, and White wins, if:

- No rank-8 square is reachable by Black's King in one move.
- Every reachable rank-8 square is attacked by a White piece, since the King may not move into check.
- Moving the King to rank 8 would give check to White's King (e.g. by discovery), since giving check is illegal.

**Stalemate.** A player with no legal move, who by definition cannot be in check, draws. Stalemate is a draw, as in standard chess.

### Strategy

Block your opponent's King path while clearing your own. Rooks and Queens control files; Bishops control diagonals. The constraint against giving check makes many "obvious" blocking moves illegal.

### Attribution

Vernon R. Parton, 1961. Public domain. Sources: Chess.com Racing Kings rules page; Chess.com Help Center "What is Racing Kings chess?"; Wikibooks Chess Variants/Racing Kings; playstrategy.org Racing Kings variant page; lichess forum discussions on stalemate in Racing Kings.