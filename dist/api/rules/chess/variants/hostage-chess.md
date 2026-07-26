# Hostage Chess

**Invented by John Leslie. Named “chess variant of the decade” by David Pritchard in Variant Chess, Summer 1999.**

## Overview

{{svg:hostage-chess-board.svg "Hostage Chess — starting position"}}

Hostage Chess introduces Shogi-style dropping using a single standard chess set. Captured pieces do not change sides (unlike Chessgi/Bughouse); instead they are held as **hostages** in the captor’s prison. An exchange mechanism lets players rescue their hostages by releasing enemy hostages in return, then immediately deploy the rescued piece.

## Setup

Standard FIDE starting position. Each player also has two off-board areas:
- **Prison** (player’s right): holds captured enemy pieces as hostages
- **Airfield** (player’s left): holds rescued pieces waiting to be dropped

```
FEN: rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
(Prisons and airfields start empty)
```

## Piece Values (for exchanges)

In ascending order: **Pawn** < **Knight = Bishop** < **Rook** < **Queen**

## Rules

All standard FIDE rules apply with the following additions:

### Hostage Exchange

At the **start of your turn** (before making any move), you may choose to rescue one of your pieces from your opponent’s prison. To do so:

1. Choose which of your pieces to rescue from the opponent’s prison.
2. Select a piece from your own prison of **equal or greater value** to release in exchange.
3. Place your released piece in the **opponent’s airfield** (they may drop it later).
4. **Immediately drop** your rescued piece onto any legal vacant square.
5. This drop ends your turn. You make no other move.

Your opponent cannot prevent the exchange.

If you do not perform an exchange, your turn proceeds with a normal move or a drop from your airfield.

### Dropping (Parachuting)

Instead of making a regular move, you may **drop** one piece from your **airfield** onto any vacant square. Restrictions:
- A Pawn may **not** be dropped on rank 1 or rank 8.
- No other restrictions on drop squares (e.g., two Bishops may end up on the same colour).
- Dropped pieces are subject to normal castling and en-passant rules as if they had always been part of the game.

### Pawn Promotion

Promotion works differently:
- A seventh-rank pawn **may only advance** to rank 8 if the **opponent’s prison contains at least one Queen, Rook, Bishop, or Knight**.
- When it does: the pawn leaves the board and enters **your own prison**. You immediately fill the promotion square with one piece of your choice from the opponent’s prison.
- **If no promotable pieces are in the opponent’s prison**: the pawn is blocked and cannot advance to rank 8. It also cannot capture diagonally forward (since it cannot land there), so a king on a diagonally adjacent rank-8 square is not in check from such a pawn.

### Castling and En Passant

Both are permitted under normal conditions and apply to dropped pieces as if they were part of the original setup.

## Notation

- `N*c7`: a Knight from the airfield drops onto c7
- `(B–N)N*c7`: a Bishop is released from prison, a Knight is rescued, the Knight drops onto c7
- `(R–P)*c7`: a Rook is released, a Pawn is rescued, the Pawn drops onto c7

*Source: chessvariants.com/difftaking.dir/hostage.html*