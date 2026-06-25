---
title: "Chaturanga"
slug: "chaturanga"
board: "8×8"
players: "2"
parent: "moddable-chess"
win: "Checkmate or bare king"
special: "Ancient Indian ancestor of all chess variants, c. 600 CE. Weak counsellor and leaping elephant."
---

## Chaturanga

Chaturanga (Sanskrit: चतुरङ्ग, "four divisions") is the ancient Indian predecessor of chess, Shogi, Xiangqi, and all related replacement-capture games. First attested in Sanskrit texts c. 600 CE, it is named for the four arms of the Indian army: infantry (pawns), cavalry (horses), elephants, and chariots, who protect the counsellor and the king. It is the direct ancestor of Shatranj, which became modern Western chess.

This entry documents the 2-player, no-dice form: the standard scholarly reconstruction. The older 4-player form (sometimes called Chaturaji) used a die to determine which piece type to move each turn and is a distinct game not covered here.

{{svg:chaturanga-board.svg "Chaturanga: starting position (Manasollasa)"}}

*Piece note: Gaja (Elephant) uses the E letter in FEN; Mantri (Counsellor) uses F (Fers). These reflect their actual movement rather than modern chess equivalents.*

### Setup

**Board:** Standard 8×8. The original ashtapada board was plain and uncheckered; the alternating square colouring shown here is a modern convention.

**Starting position (Manasollasa, Bock-Raming 1996):** Back rank left to right: Ratha–Ashva–Gaja–Mantri–Raja–Gaja–Ashva–Ratha. Eight Padati fill the second rank.

- White: Ratha a1, Ashva b1, Gaja c1, Mantri d1, Raja e1, Gaja f1, Ashva g1, Ratha h1; Padati a2–h2.
- Black: Ratha a8, Ashva b8, Gaja c8, Mantri d8, Raja e8, Gaja f8, Ashva g8, Ratha h8; Padati a7–h7.

**FEN:** `rnefkenr/pppppppp/8/8/8/8/PPPPPPPP/RNEFKENR w - - 0 1`
(R/r = Ratha, N/n = Ashva, E/e = Gaja, F/f = Mantri, K/k = Raja, P/p = Padati)

**Alternative starting position (al-Adli, Murray 1913):** Back rank left to right: Gaja–Ratha–Ashva–Mantri–Raja–Ashva–Ratha–Gaja. This places the Gaja on the corner files.

### Pieces

| Sanskrit name | English | Per side | Movement |
|---|---|---|---|
| Raja | King | 1 | One step in any direction (orthogonal or diagonal). No castling. |
| Mantri | Counsellor | 1 | One step diagonally only. Identical to the Ferz in Shatranj. |
| Gaja | Elephant | 2 | Leaps exactly two squares diagonally, jumping over any intervening piece. Colour-bound: reaches only 8 of the 64 squares. |
| Ashva | Horse | 2 | L-shape leap. Identical to the modern Knight. |
| Ratha | Chariot | 2 | Slides any number of squares orthogonally. Identical to the modern Rook. |
| Padati | Foot soldier | 8 | One step forward; captures one step diagonally forward. No initial double move. Promotes to Mantri on reaching the far rank. |

**Note on Gaja movement:** Three interpretations appear in ancient sources. The diagonal leap recorded here is the most widely attested and the form that became the Alfil in Shatranj and the Bishop in modern chess. An orthogonal leap (two squares along a rank or file) also appears in the Ludii Manasollasa ruleset (Bock-Raming 1996). A third interpretation, one step forward or diagonally, appears in sources related to Shogi's Silver General.

### Rules

White moves first. Players alternate one move per turn. A piece may move to an empty square or capture an opponent's piece by occupying its square, removing it from the board. A piece may not move to a square occupied by a friendly piece.

There is no castling, no en passant, and no initial double pawn advance.

When the Raja can be captured on the next turn, it is in check. A player must not end their turn with the Raja in check.

### Win Conditions

**Checkmate:** The Raja is in check with no legal escape. The opponent wins.

**Bare king:** Capturing all of the opponent's pieces except the Raja wins the game. Exception: if the opponent can bare your own Raja on the very next move in response, the result is a draw.

**Stalemate:** A Raja with no legal moves but not in check is stalemated; the stalemated player wins. This is the reverse of modern chess.

*These win conditions follow the al-Adli reconstruction (Murray 1913), the fully specified form used as standard for modern play.*

The Manasollasa text (Bock-Raming 1996) describes a simpler condition: play continues until one player's king cannot move without being captured, with no explicit distinction between check, checkmate, and stalemate. The al-Adli form is recommended for practical implementation.

### Differences from Modern Chess

- No castling
- No en passant
- No double pawn advance on the first move
- Pawns promote to Mantri only
- Stalemate is a win for the stalemated player, not a draw
- Bare king wins: reducing the opponent to only a Raja wins the game
- Mantri (Counsellor) is weak: one step diagonally only, not the modern Queen's full range
- Gaja (Elephant) is colour-bound: leaps exactly two squares diagonally, reaching only 8 of 64 squares

### Historical Context

Chaturanga was transmitted from India to Persia around the 7th century CE, where it became Shatranj. Key changes during this transition: the dice were abandoned entirely, and explicit check and checkmate rules were formalised. European chess inherited Shatranj through the Islamic world around the 10th century. In 15th-century Europe, the Mantri became the modern Queen (gaining full diagonal and orthogonal range) and the Alfil became the diagonal Bishop.

### Attribution

Rules transcribed from two sources via the Ludii Game Corpus, Maastricht University:
- Manasollasa ruleset, citing Bock-Raming 1996 (Sanskrit scholarship on the 12th-century Manasollasa text)
- al-Adli ruleset, citing H.J.R. Murray, *A History of Chess* (Oxford University Press, 1913, public domain)

Both underlying texts are public domain. Chaturanga as a game system dates to c. 600 CE and is not subject to copyright.
