---
playable: true
title: Shatar
slug: shatar
board: "8×8"
players: "2"
parent: chess
win: Checkmate (with restrictions)
special: Mongolian chess. Check exists (shak/dug/tsod). Mate must include a shak. Knight cannot deliver mate. Bare king is a draw. Obligatory opening 1.d4 d5.
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
  plugins:
    chess:
      noCheck: true
---

## Shatar (Mongolian Chess)

The traditional chess of Mongolia. Distinguished from Western chess by its mate restrictions, obligatory opening, and the rule that bare king is a draw.


{{svg:shatar-board.svg "Shatar — starting position"}}

### Setup

**Board:** Standard 8×8.

**Starting position:** Standard chess arrangement. Pieces use Mongolian names: Noyon (King), Bers (Queen), Teme (Rook), Mori (Knight), Teme-tse (Bishop), Khuu (Pawn).

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w - - 0 1`

### Pieces

All pieces move as in standard chess. The Bers (Queen) is sometimes described as a combined Rook-Fers in older sources, but the modern tournament form uses full Queen movement.

### Rules

- **Check exists** and is named by the checking piece: *shak* (Queen or Rook), *dug* (Bishop), *tsod* (Pawn). Announcing check is customary.
- **The Knight's check also counts as shak.** Sources disagree on this point (traditional rules may have excluded it), but modern tournament practice and Fairy-Stockfish's implementation include knight checks as valid shak. This implementation follows the modern rule.
- **The opening two moves are obligatory**: 1. d2-d4 d7-d5.
- The King may not castle.
- No en passant.
- Promotion works as in standard chess.

### Win Condition

Checkmate, called *mat*, subject to the restrictions below.

**Valid mate.** A mate counts only if it is delivered by a *shak*, or if it concludes a series of checks that included at least one *shak*.

**Niol (invalid mate).** A mate delivered without satisfying that condition, for example by a Bishop or Pawn alone, or at the end of a sequence containing only *dug* and *tsod* checks, does not win. The game is a **draw**.

**The Knight may not deliver mate.** A position where only the Knight gives check and there is no legal escape is a draw (niol), not checkmate.

**Robado (bare king).** A player reduced to a bare King does not lose. The game is a **draw**.

### Strategy

The mate restrictions make Shatar deeply strategic. You cannot simply checkmate with minor pieces; the final blow must involve the Queen or Rook (or follow a sequence that did). This makes heavy pieces more valuable than in standard chess and creates unique endgame theory where bare king is drawn despite material advantage.

### Attribution

Traditional Mongolian chess. Sources: Wikipedia (Shatar); chessvariants.org (Shatar — Mongolian Chess); history.chess.free.fr (Mongolian Chess). Public domain.
