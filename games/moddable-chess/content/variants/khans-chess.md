---
title: "Khan's Chess"
slug: khans-chess
published: false
status: draft
updated: 2026-07-06
category: asymmetric-armies
order: 
tags:
  - asymmetric
  - divergent-pieces
  - campmate
  - couch-tomato
---

# Khan's Chess

Khan's Chess is an asymmetric chess variant designed in 2023–24 by Couch Tomato. It is a refined successor to Orda Chess, pitting the standard Kingdom army against a Mongol-themed Horde cavalry force. Like Orda Chess, all Horde pieces (except the Khan and Kheshig) use divergent movement—they move differently from how they capture. Unlike Orda Chess, the Horde's pawns are replaced by Scouts, faster-moving forward-only cavalry units, and the Yurt is replaced by the Khatun.

## History

Couch Tomato created Khan's Chess to address two shortcomings identified in Orda Chess through high-level NNUE (neural network) analysis under Fairy-Stockfish: the original game proved less balanced than intended at high levels of play, and the standard pawn poorly represented the Mongols' historically cavalry-dominated armies. Taking advantage of expanded Fairy-Stockfish piece-definition capabilities, the designer replaced the pawn and yurt with two new pieces—the Scout and the Khatun—and moved Scouts to the second rank, giving the Horde a faster, more thematically coherent force. Thorough NNUE testing confirmed improved balance in the final design.

## The Two Armies

Khan's Chess is played on a standard 8×8 board. White controls the **Kingdom** (standard FIDE pieces). Gold controls the **Horde** (Khan's cavalry army).

### Kingdom (White) Starting Position

Rank 1: Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook  
Rank 2: eight Pawns

### Horde (Gold) Starting Position

Rank 8: Lancer, Kheshig, Horse Archer, Khatun, Khan, Horse Archer, Kheshig, Lancer  
Rank 7: eight Scouts

The Horde back rank mirrors the Kingdom's layout: Lancers occupy the Rook squares, Kheshigs occupy the Knight squares, Horse Archers occupy the Bishop squares, Khatun occupies the Queen square, and the Khan occupies the King square.

## General Rules

1. **White (Kingdom) moves first.**
2. The **Horde cannot castle.** The Khan has no castling right.
3. **Stalemate is a loss** for the player who cannot move (not a draw as in standard chess).
4. **Campmate:** a player wins by moving their King to the opponent's back rank without moving into check.
5. Kingdom Pawns promote normally (Queen, Rook, Bishop, or Knight). **Scouts promote only to Khatun.**
6. All other rules (en passant, repetition, check and checkmate) follow standard chess.

## Horde Pieces

All Horde pieces except the Khan and Kheshig are **divergent**: their movement squares differ from their capture squares. The Horde is a cavalry force, so the Lancer, Horse Archer, and Khatun all *move* like a Knight but *capture* differently.

| Piece | Kingdom Counterpart | Moves as | Captures as | Notes |
|---|---|---|---|---|
| Khan | King | King | King | Royal; cannot castle |
| Kheshig | Knight | Knight + King | Knight + King | Strongest Horde piece; not royal |
| Khatun | Queen | Knight | King | Not royal; promotes Scouts |
| Horse Archer | Bishop | Knight | Bishop | Not colour-bound |
| Lancer | Rook | Knight | Rook | Weaker than Rook in endgame |
| Scout | Pawn | Knight (forward only—four squares) | One square forward | Promotes to Khatun only |

### Khan

The Khan is the Horde's royal piece. It moves and captures exactly as a King in standard chess. The Khan cannot castle. Checkmate of the Khan ends the game. The piece is visually distinct but functionally identical to the Kingdom's King.

### Kheshig (H)

The Kheshig moves and captures as a **Knight + King** combined (also called a centaur or mann+knight). It is the strongest piece in the Horde army and is non-royal. The Kheshig is placed on the Knight squares at the start of the game but far exceeds a Knight in value. It is extremely difficult for the Kingdom to force checkmate without eliminating at least one Kheshig. The Kheshigs represent the elite imperial guard of Mongol royalty.

### Khatun (T)

The Khatun **moves as a Knight** but **captures as a King** (one step in any direction). It is non-royal. Despite its modest capture range, the Khatun is a useful defensive piece and is the piece that Scouts promote to. Thematically, the Khatun is the Khan's consort—an analogue to the Kingdom's Queen, but considerably less powerful.

### Horse Archer (A)

The Horse Archer **moves as a Knight** but **captures as a Bishop** (diagonally, any number of squares). Because it moves as a Knight rather than sliding diagonally, it is not colour-bound, making it more valuable than a standard Bishop. Horse Archers represent the Mongol light cavalry, renowned for hit-and-run archery tactics. Their ability to quickly reposition for forks and skewers makes them a persistent tactical threat.

### Lancer (L)

The Lancer **moves as a Knight** but **captures as a Rook** (orthogonally, any number of squares). Its value is generally below that of a Rook because it cannot slide across the board in a single move. However, Lancers enter play quickly compared to Rooks and can threaten long-range captures from an early stage. Lancers represent the Mongol heavy cavalry.

### Scout (S)

The Scout replaces the pawn in the Horde army. It **moves as a forward-only Knight**—specifically, the four Knight-jump destinations that move the piece toward the opponent's side of the board (two squares forward + one to the side, or one square forward + two to the side, in either lateral direction). It does **not** jump to the two backward Knight squares.

The Scout **captures one square directly forward**, like a pawn's standard attack but without the diagonal component.

Key properties:
- Scouts cannot capture sideways or diagonally; their attack is a single forward step.
- Because of their limited attack, Scouts create weaker defensive structures than Pawns.
- Because of their Knight-based movement, Scouts reach the promotion rank far faster than Pawns.
- Scouts promote on the last rank (**rank 1 for Gold**) and can **only promote to a Khatun**.
- Scouts do not have an initial two-square advance, and en passant does not apply to them.

## Strategy Notes

**For the Horde:** Develop Kheshigs carefully—their value in the endgame is enormous and losing one makes mating the Kingdom King much harder. Use the Scouts' speed to threaten early promotion; even the threat of creating a new Khatun forces Kingdom defensive resources. Horse Archers and Lancers can open threats from the flanks much earlier than Bishops and Rooks in standard chess, due to their Knight movement.

**For the Kingdom:** The Horde lacks the Queen's long-range sliding power and cannot castle, making early central pressure effective. Target Kheshigs as priority pieces—once both are eliminated, the Kingdom's mating chances improve dramatically. Be alert to campmate: the Khan's ability to march to rank 8 for a positional win is a real endgame threat.

## Comparison with Orda Chess

Khan's Chess replaces two pieces from Orda Chess:
- The **pawn** (standard chess pawn used by both sides in Orda) is replaced by the **Scout** for the Horde, themed around Mongol cavalry.
- The **Yurt** (which moved and captured as a Queen but only one or two squares) is replaced by the **Khatun** (Knight movement, King capture).

All other Horde pieces—Lancer, Horse Archer, Kheshig—carry over from Orda Chess with the same movement and capture rules.

## Attribution

Khan's Chess was designed by Couch Tomato (2023–24). Rules documented from the PyChess variant guide at pychess.org/variants/khans.
