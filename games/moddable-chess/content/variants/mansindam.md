---
title: "Mansindam (Pantheon Tale)"
slug: mansindam
board: "9×9"
players: "2"
parent: moddable-chess
win: "Checkmate, Campmate, or Stalemate loss"
special: "9×9 board with Shogi-style drops and mandatory promotion in the enemy camp. Compound pieces: Cardinal (B+N), Marshal (R+N), Angel (Q+N). Campmate wins. Stalemate is a loss; no draws possible."
engine:
  topology:
    type: grid
    rows: 9
    cols: 8
  players: [white, black]
  render:
    cellSize: 38
  setup: "rncakqbm/pppppppp/9/9/9/9/9/PPPPPPPP/RNCAKQBM"
---

# Mansindam (Pantheon Tale)

*A variant that combines Shogi's drop rule with strong compound pieces, and has no draws.*

Mansindam is a chess variant designed by Couch Tomato. It takes two of Shogi's most distinctive mechanics -- dropping captured pieces back onto the board, and mandatory promotion on entering the enemy camp -- and combines them with a set of powerful compound pieces drawn from the fairy chess tradition. The result is a game with dramatically more tactical complexity than standard chess, no drawing mechanisms, and two additional win conditions beyond checkmate.

## The Board

{{svg:mansindam-board.svg "Mansindam (Pantheon Tale) — starting position"}}

Mansindam is played on a **9×9 board** (9 files × 9 ranks). Ranks are numbered 1-9 from White's side. Files are lettered a-i.

## Starting Position

**White (Yang):**
- Rank 1: Marshal(a), Knight(b), Cardinal(c), Queen(d), King(e), Angel(f), Bishop(g), Knight(h), Rook(i)
- Rank 2: empty
- Rank 3: 9 Pawns (a3-i3)

**Black (Eum):**
- Rank 7: 9 Pawns (a7-i7)
- Rank 8: empty
- Rank 9: Rook(a), Knight(b), Bishop(c), Angel(d), King(e), Queen(f), Cardinal(g), Knight(h), Marshal(i)

Each side has exactly one of each major piece type in the back rank. White (Yang) moves first.

**FEN:** `rnbakqcnm/9/ppppppppp/9/9/9/PPPPPPPPP/9/MNCQKABNR[] w - - 0 1`

## Promotion Zone

Ranks 7, 8, and 9 are the **enemy camp** for White. Ranks 1, 2, and 3 are the enemy camp for Black.

A piece promotes when it **moves to, moves from, or moves within** the enemy camp. **Promotion is mandatory** -- a piece that can be promoted must be promoted. On a physical board this is accomplished by flipping the piece upside-down, as in Shogi.

Promoted pieces revert to their pre-promotion state if captured by the opponent. Pieces are always **dropped in their pre-promotion state**.

The following pieces **do not promote:** Queen, Angel, King.

## Pieces

Every promoted piece gains the additional ability to move as a non-royal King (one square in any direction) on top of its base movement.

### Pawn (P) / Bo -- promotes to Guard

Moves one square **orthogonally forward** only. No two-square advance. No en passant.

**Promoted form -- Guard (G) / Cho:** Moves one square orthogonally or diagonally (same as a standard King, but not royal).

### Knight (N) / Gi -- promotes to Centaur

Moves as a standard chess Knight (leaps to nearest squares not on the same file, rank, or diagonal). Can jump over intervening pieces.

**Promoted form -- Centaur (E) / Wi:** Moves as Knight + King (Knight leap or one step in any direction).

### Bishop (B) / Gak -- promotes to Archer

Moves any number of squares diagonally. Cannot jump over pieces.

**Promoted form -- Archer (H) / Ma:** Moves as Bishop or King (diagonals any distance, or one step orthogonally or diagonally).

### Rook (R) / Bang -- promotes to Tiger

Moves any number of squares orthogonally. Cannot jump over pieces.

**Promoted form -- Tiger (T) / Yong:** Moves as Rook or King (orthogonals any distance, or one step in any direction).

### Cardinal (C) / Ye -- promotes to Rhino

Moves as a Bishop or Knight. Cannot jump over pieces for the Bishop component; can jump for the Knight component.

**Promoted form -- Rhino (I) / Seong:** Moves as Cardinal (Bishop + Knight) plus one step orthogonally (adds the King's orthogonal reach).

### Marshal (M) / Su -- promotes to Ship

Moves as a Rook or Knight. Cannot jump over pieces for the Rook component; can jump for the Knight component.

**Promoted form -- Ship (S) / Myeong:** Moves as Marshal (Rook + Knight) plus one step diagonally (adds the King's diagonal reach).

### Queen (Q) / Bun -- does not promote

Moves any number of squares orthogonally or diagonally. Cannot jump over pieces. Equivalent to a standard chess Queen.

### Angel (A) / Cheon -- does not promote

Moves as a Queen or Knight (orthogonals any distance, diagonals any distance, or Knight leap). The most powerful piece in the game.

### King (K) / Ok

Moves one square orthogonally or diagonally. Royal piece -- if checkmated, the game is lost. White's King is called Yang; Black's King is called Eum. In notation both are written as K.

## Piece Summary Table

| English | Korean | Symbol | Moves as | Promotes to |
|---|---|---|---|---|
| Pawn | Bo | P | One step forward (ortho) | Guard |
| Guard | Cho | G | King (non-royal) | -- promoted form |
| Knight | Gi | N | Knight leap | Centaur |
| Centaur | Wi | E | Knight + King | -- promoted form |
| Bishop | Gak | B | Bishop (diagonals) | Archer |
| Archer | Ma | H | Bishop + King | -- promoted form |
| Rook | Bang | R | Rook (orthogonals) | Tiger |
| Tiger | Yong | T | Rook + King | -- promoted form |
| Cardinal | Ye | C | Bishop + Knight | Rhino |
| Rhino | Seong | I | Bishop + Knight + ortho-step | -- promoted form |
| Marshal | Su | M | Rook + Knight | Ship |
| Ship | Myeong | S | Rook + Knight + diag-step | -- promoted form |
| Queen | Bun | Q | Rook + Bishop | does not promote |
| Angel | Cheon | A | Rook + Bishop + Knight | does not promote |
| King | Ok | K | King (royal) | does not promote |

## Rules

### Basic Movement

- A piece cannot move to a square occupied by a friendly piece.
- A piece that moves to a square occupied by an enemy piece captures that enemy piece.
- All pieces except the Knight cannot jump over intervening pieces on their path.
- There is no castling.
- There is no passing a turn.
- There is no 50-move rule.

### The King and Check

The state in which the King is attacked by an opponent's piece is **check**. A player in check must resolve it immediately. The King may never move to or remain on a square attacked by an opponent's piece. A player who cannot escape check loses by **checkmate**.

### Drops

Any piece a player captures is a **hand piece**, held in reserve. On any turn, instead of moving a piece on the board, a player may **drop** a hand piece onto any empty square.

Drop rules:
- Only one piece may be dropped per turn.
- Pieces are always dropped in their **pre-promotion state**.
- A piece dropped in the enemy camp is **not automatically promoted** -- it can only promote when subsequently moved from that square.
- A player may deliver check or checkmate by dropping a piece.

### Pawn Drop Restrictions

- Two or more of a player's unpromoted Pawns may not occupy the same file. (Prohibition of Two Pawns)
- Pawns cannot be dropped on the last rank (rank 9 for White; rank 1 for Black), as a Pawn dropped there could never move.
- Unlike Shogi, delivering **checkmate by dropping a Pawn is legal**.

### Stalemate -- Loss

A player who has no legal move and no legal drop **loses**. Stalemate is not a draw.

### Campmate -- Win

A player who successfully moves their **King to the opponent's last rank** without landing on a square attacked by an opponent's piece wins by **campmate**. For White: reach rank 9. For Black: reach rank 1.

### Prohibition of Threefold Repetition

Neither player may cause the same position (including hand pieces and side to move) to occur three times. If a position has occurred twice, the player whose move would create the third occurrence is forbidden from making that move. A player unable to block or avoid a perpetual check due to this rule also loses.

### No Draws

Because stalemate is a loss, the 50-move rule does not exist, and threefold repetition is prohibited rather than drawn, **Mansindam has no drawing mechanism**. Every game ends in victory for one player.

### Defeat Conditions

A player loses when:
1. Their King is checkmated.
2. The opponent's King reaches their last rank (campmate).
3. They cannot move or drop any piece (stalemate).
4. They declare resignation (by placing their King on their piece stand, on their turn).
5. They violate a rule of the game.
6. They forfeit on time.

## Attribution

Mansindam (Pantheon Tale) was designed by Couch Tomato. Rules documented from the PyChess variant guide at pychess.org/variants/mansindam. Piece names use both the English labels and Korean/Chinese character names as given in that source.
