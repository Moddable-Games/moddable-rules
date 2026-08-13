---
playable: true
title: Ultima (Baroque Chess)
slug: ultima
board: "8×8"
players: "2"
parent: chess
win: Capture opponent King
special: "All seven piece types use entirely different capture mechanics. No check: win by physically capturing the opponent's King. Designed by Robert Abbott, 1962."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "cilwklhc/pppppppp/8/8/8/8/PPPPPPPP/CIHLKLIC"
  notation: algebraic
published: true
---

## Ultima (Baroque Chess)

{{svg:ultima-board.svg "Ultima (Baroque Chess) — starting position"}}

Designed by Robert Abbott and published in 1962 as Ultima (later popularized as Baroque Chess). Ultima is built on one radical premise: every piece has a unique capture method. No two pieces share the same way of taking. The King is won by capturing it outright — there is no check, no checkmate, no stalemate.

### Piece Movement and Capture

All pieces except the King slide like the Queen — any number of squares in any of the eight directions — to reach their destination. (They slide without capturing en route; the capture occurs as a result of where they land or what they leave behind.) The King moves one step in any direction. Capture methods are entirely independent of movement methods.

| Piece | Starting Squares | Movement | Capture Method |
|---|---|---|---|
| **King** | e1 / e8 | 1 step, any direction | Displacement: physically move onto the opponent King’s square. Win by capturing the opponent King. |
| **Withdrawer** | d1 / d8 | Queen slide | **Withdrawal:** if the Withdrawer moves directly away from an adjacent opponent piece (along the same line it occupied when adjacent), that piece is captured. Moving toward an adjacent piece, or along any other line, captures nothing. |
| **Coordinator** | a1, h1 / a8, h8 | Queen slide | **Coordinate capture:** when the Coordinator moves to square X, any opponent piece that occupies the same rank as your King and the same file as X is captured; and any opponent piece that occupies the same file as your King and the same rank as X is also captured. Multiple captures possible per move. |
| **Long Leaper** | c1, f1 / c8, f8 | Queen slide | **Leap capture:** the Long Leaper may jump over one opponent piece along a rank, file, or diagonal, landing on the next empty square beyond it; the jumped piece is captured. Multiple leaps in one move are permitted, each over a separate opponent piece on the same or different lines. |
| **Immobilizer** | g1 / g8 | Queen slide | **Immobilization:** the Immobilizer does not capture. Instead, any opponent piece that is orthogonally or diagonally adjacent to the Immobilizer at the end of its move is frozen and may not move until the Immobilizer moves away. An Immobilizer adjacent to an opponent Immobilizer is itself immobilized. |
| **Chameleon** | b1 / b8 | Queen slide | **Mimicry:** the Chameleon captures using the capture method of whichever type of piece it is targeting. To capture a Withdrawer, it withdraws from it. To capture a Long Leaper, it leaps over it. To capture a Coordinator, it coordinates with your King against it. To capture an Immobilizer, it immobilizes it (both are immobilized). To capture a Pincer Pawn, it flanks it. Cannot capture a King by displacement (Chameleon has no displacement method). |
| **Pincer Pawn** | a2–h2 / a7–h7 | Queen slide | **Custodian (flank) capture:** when the Pincer Pawn moves, any opponent piece now sandwiched between the Pincer and another friendly piece along the same rank or file is captured. Multiple custodian captures are possible from one move. |

### Starting Position

The formation mirrors standard FIDE, with pieces assigned as follows:

```
8 Co Ch Lp Wd Kg Lp Im Co
7 Pp Pp Pp Pp Pp Pp Pp Pp
6 . . . . . . . .
5 . . . . . . . .
4 . . . . . . . .
3 . . . . . . . .
2 Pp Pp Pp Pp Pp Pp Pp Pp
1 Co Im Lp Wd Kg Lp Ch Co
  a  b  c  d  e  f  g  h
```

Key: Co=Coordinator, Ch=Chameleon, Lp=Long Leaper, Wd=Withdrawer, Kg=King, Im=Immobilizer, Pp=Pincer Pawn.

### Win Condition

Win by capturing the opponent’s King on your turn. There is no check or checkmate. A player who faces an opponent King threatening to land on their King’s square should move their King away, but the game does not require this — if the opponent can execute the capture, they win.

### No Stalemate as Draw

If a player has no legal move, that player loses.

### Immobilizer Interactions

- A piece adjacent to a friendly Immobilizer is not affected; only opponent pieces are immobilized.
- An immobilized piece that is also capturable by other means can still be captured normally.
- The Chameleon adjacent to an opponent Immobilizer becomes immobilized itself (both are frozen). The Chameleon adjacent to a friendly Immobilizer is unaffected.
- Coordinator captures are not blocked by immobilized pieces — immobilized pieces can still be captured by the Coordinator.

### Notation

Standard algebraic notation suffices for most moves. Captures may be annotated by listing captured piece coordinates in parentheses. Because multiple captures can occur from one move, annotation can become complex; many players record only the moving piece’s origin and destination.

### Attribution

Designed by Robert Abbott. Published in 1962 in Abbott’s New Card Games. Public domain.
