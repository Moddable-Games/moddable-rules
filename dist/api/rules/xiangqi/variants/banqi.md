## Banqi (Half Chess)

{{svg:banqi-board.svg "Banqi — all 32 pieces face-down at the start"}}

Banqi (半棋, bànqí, "Half Chess"), also called Dark Chess (暗棋) or Blind Chess (盲棋), is a two-player Chinese game played with a Xiangqi set on half a Xiangqi board. It is a social game, usually played for fun rather than serious competition, and a game normally lasts between ten and twenty minutes.

The rules recorded here follow the Taiwanese version, which is widely played.

### The Board

The board is **8 files wide and 4 ranks deep** — 32 squares. It is one half of the Xiangqi board, taking the side on one bank of the river.

Unlike Xiangqi, the pieces stand **inside the squares** rather than on the intersections. Boards made specifically for Banqi exist, but it is common to simply use one half of a Xiangqi board.

### Pieces

Banqi uses a standard Xiangqi set: 16 Red and 16 Black, 32 in total.

| Piece | Red | Black | Count per side |
|---|---|---|---|
| General | 帥 | 將 | 1 |
| Advisor | 仕 | 士 | 2 |
| Elephant | 相 | 象 | 2 |
| Chariot | 俥 | 車 | 2 |
| Horse | 傌 | 馬 | 2 |
| Cannon | 炮 | 砲 | 2 |
| Soldier | 兵 | 卒 | 5 |
| **Total** | | | **16** |

The backs of the pieces must be indistinguishable from one another, so that a piece cannot be identified while it is face-down. Sets with international symbols printed on the back are unsuitable for this reason.

### Setup

All 32 pieces are shuffled and placed face-down, one per square, filling the board. Neither player knows what is where, and neither player has a colour yet.

### Turns

On each turn a player does exactly one of:

1. **Flip** a face-down piece, turning it face-up. The piece belongs to whichever colour it shows, regardless of who turned it over.
2. **Move** one of their own face-up pieces one square orthogonally to an empty adjacent square.
3. **Capture** an opponent's face-up piece, subject to the rules below.

The **first flip of the game decides the colours**: the player who makes it commands the colour of the piece revealed, and the opponent commands the other.

A face-down piece cannot be captured or moved. It can only be flipped.

### Movement

Every piece moves the same way: **one square up, down, left or right**. There is no piece-specific movement in Banqi — the General, the Soldier and everything between all move alike. The Cannon's capture is the only departure from this.

### Capture

Pieces are ranked, and a piece may capture an opponent's piece of **equal or lower rank**.

**Rank, highest to lowest:** General → Advisor → Elephant → Chariot → Horse → Soldier

Two rules stand outside that order:

- **The Soldier takes the General.** Despite being the lowest rank, a Soldier may capture the General, and the General may not capture a Soldier.
- **The Cannon is not ranked.** It captures a piece of any rank, but only by jumping over exactly one intervening piece — the screen. The screen may be friendly, enemy, or still face-down, and any number of empty squares may lie on either side of it. A Cannon therefore cannot capture a piece standing next to it, because there would be nothing to jump.

### Win Condition

A player who has no legal move **loses**. In practice this happens when all of their pieces have been captured.

### Repetition

If a player repeatedly chases an enemy piece that cannot be taken, producing an endless cycle, convention decides the outcome. Under Chinese Chess conventions the player doing the chasing must vary; casual play more often settles it as a draw, or requires one side to give up a piece to break the cycle.

### Relationship to Other Games

A more formal version of Banqi is held to have influenced **Jungle** (Dou Shou Qi) and the modern game **Luzhanqi**.

### What the Engine Does Not Do

Banqi is not playable here, and the reason is the game's premise rather than any
detail of it. Every position the engine can hold is fully known to both seats, so
a piece whose identity is hidden cannot be represented, and a flip cannot be a
move. Two further rules rest on that one: colours are settled by the first flip,
where the engine binds a seat to its colour when the game is created, and capture
compares the ranks of the two pieces involved, where the engine decides capture
by how a piece moves. The board and the pieces above are correct; the play is not
available. The same blocker holds Jieqi, which is this game on the full board.

### Attribution

Banqi is a traditional Chinese game with no known author and no rights holder. Rules transcribed from en.wikipedia.org/wiki/Banqi.