---
title: "Metamachy"
slug: metamachy
board: "12×12"
players: "2"
parent: moddable-chess
win: "Checkmate"
special: "12×12 board with 12 piece types. Variable starting position: King, Queen, Lion, Eagle may be placed in any arrangement on their four squares; Black decides, White mirrors. Cannon slides/Xiangqi-captures; Camel leaps (1,3); Eagle bends diagonal then slides orthogonal; Lion leaps anywhere within 2 King steps."
engine:
  topology:
    type: grid
    rows: 12
    cols: 12
  players: [white, black]
  render:
    cellSize: 26
  setup: "rnbclqklcbnr/pppppppppppp/12/12/12/12/12/12/12/12/PPPPPPPPPPPP/RNBCLQKLCBNR"
---

# Metamachy

Metamachy is a large chess variant designed by Jean-Louis Cazaux in 2012. It is played on a 12×12 board (files a–l, ranks 1–12) and features 12 piece types drawn from across the history of chess variants. One of Metamachy's most distinctive features is its **variable starting position**: the four most powerful pieces (King, Queen, Lion, and Eagle) may be arranged in any of twelve possible orders on their four starting squares. Black chooses first; White mirrors the arrangement.

## The Board

{{svg:metamachy-board.svg "Metamachy — starting position"}}

Standard 12×12 grid, files a–l, ranks 1–12. White occupies ranks 1–3 at the start; Black occupies ranks 10–12.

## Starting Position

### Fixed pieces (same in all setups)

**White Rank 1 (fixed):**
- a1: Cannon, b1: Camel, [c1–e1 empty], [f1–g1 variable], [h1–j1 empty], k1: Camel, l1: Cannon

**White Rank 2 (fixed):**
- a2: Elephant, b2: Rook, c2: Knight, d2: Bishop, e2: Prince, [f2–g2 variable], h2: Prince, i2: Bishop, j2: Knight, k2: Rook, l2: Elephant

**White Rank 3:** 12 Pawns (a3–l3)

### Variable squares

The four squares **f1, g1** (rank 1) and **f2, g2** (rank 2) hold the King, Queen, Lion, and Eagle in any combination. Black decides the arrangement; White places the same four pieces mirrored symmetrically.

For example, one legal setup: Queen(f1), King(g1), Lion(f2), Eagle(g2). Any of the 12 arrangements of these four pieces across these four squares is legal, provided each side mirrors the other.

### Black's setup

Black's pieces are the mirror image of White's across the centre of the board (symmetric along ranks). Black's fixed squares:
- Rank 12 (= White's rank 1 mirrored): Cannon(a12), Camel(b12), variable at f12–g12, Camel(k12), Cannon(l12)
- Rank 11 (= White's rank 2 mirrored): Elephant(a11), Rook(b11), Knight(c11), Bishop(d11), Prince(e11), variable at f11–g11, Prince(h11), Bishop(i11), Knight(j11), Rook(k11), Elephant(l11)
- Rank 10: 12 Pawns

## Pieces

### Pawn

Moves as a standard chess Pawn, **except** the double push is available from any rank (not just the initial rank). Pawns capture en passant in the usual way after any double push. Pawns promote on the opponent's last rank to **Queen, Lion, or Eagle only** (not Rook, Bishop, or Knight).

### Prince

Moves as a **King** (one step in any direction), but is not royal — losing the Prince does not end the game. The Prince also has a **non-capturing double push available from any rank**, exactly like the Pawn's extended double push. A Prince that has just made a double push may be captured en passant on the passed square. The Prince promotes to **Queen, Lion, or Eagle** on the opponent's last rank.

### Knight

Standard chess Knight: leaps to any square 2 steps in one direction and 1 step in another.

### Bishop

Slides any number of squares diagonally. Cannot jump over pieces.

### Rook

Slides any number of squares orthogonally. Cannot jump over pieces.

### Camel

Leaps to any square that is **1 step in one direction and 3 steps in another** (the (1,3) analogue of a Knight). Can jump over pieces. Has 8 possible destinations from a central square.

### Elephant

Leaps to any **2nd diagonal square** (the Alfil jump), OR moves **1 step diagonally**. Can always jump for the long leap. This combines the historic Shatranj Alfil with a short diagonal step.

### Cannon

Moves as a Rook (slides orthogonally any distance) **without capturing**. To **capture**, the Cannon must jump over exactly one piece (the "screen" or "platform") and land on the first enemy piece beyond it. Borrowed from Xiangqi.

### Eagle

A bent slider: moves **one step diagonally**, then continues **outward orthogonally** for any number of squares. Cannot jump over pieces on the orthogonal leg. This piece is known as the Aanca in Grant Acedrex and is often called a Gryphon in chess variant literature.

### Lion

Leaps to any square that can be reached by **at most two King steps** in any directions — orthogonal, diagonal, or a combination. This gives a range of up to 24 squares, including the same squares a Knight can reach. Unlike the Chu Shogi Lion, the Metamachy Lion **cannot** capture one piece and continue moving (no locust capture).

### Queen

Combines Rook and Bishop: slides any number of squares orthogonally or diagonally. Standard chess Queen.

### King

Moves one step in any direction (orthogonal or diagonal), as in standard chess. **On its very first move**, the King may instead make a single **non-capturing leap of exactly two squares** in any direction — including hippogonal (Knight-like) directions. After using this leap or after making any ordinary move, the special leap is no longer available. There is **no castling** in Metamachy.

## Special Rules

- **No castling.** The King has an initial 2-square leap instead.
- **En passant** applies after any Pawn or Prince double push.
- **Stalemate is a draw.**
- **Variable starting position:** Black decides the arrangement of King, Queen, Lion, Eagle on their four squares; White mirrors it. The setup is agreed before play begins.

## Attribution

Metamachy was designed by Jean-Louis Cazaux (France, 2012). Rules sourced from The Chess Variant Pages at chessvariants.com/rules/metamachy.
