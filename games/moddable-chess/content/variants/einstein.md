---
title: "Einstein Chess"
slug: "einstein"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 23
win: "Checkmate"
special: "Non-capturing moves demote pieces; captures promote them (Q→R→B→N→P / P→N→B→R→Q)."
---

## Einstein Chess

Pieces transform after every move. Captures promote, non-captures demote — cycling through the piece hierarchy.


{{svg:einstein-board.svg "Einstein Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess setup.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- After a piece makes a non-capturing move, it demotes one step: Q→R→B→N→P.
- After a piece makes a capture, it promotes one step: P→N→B→R→Q.
- Kings are exempt — they never transform.
- Pawns that demote have nowhere to go (they remain pawns).
- Queens that promote have nowhere to go (they remain queens).
- Transformation happens immediately after the move resolves.
- Standard promotion on the 8th rank still applies to pawns.

### Win Condition

Checkmate the opponent's King.

### Strategy

Every move changes your piece composition. Aggressive play (captures) builds stronger pieces, but quiet manoeuvring weakens them. Knights and Bishops are unstable — one capture turns them into Rooks, but one quiet move turns them into Pawns. Queens are fragile: one quiet move demotes to Rook. Material calculation is inverted.

### Attribution

Invented by B. Iqbal, 2005. Public domain.
