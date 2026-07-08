---
title: "Romanchenko's Chess"
slug: romanchenkos-chess
board: "Modified 8×8 (broken columns)"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Standard FIDE chess pieces and rules on a board with 'broken columns' — certain file columns are displaced or interrupted at specific ranks, breaking the standard 8×8 grid alignment and preventing rote pattern memorization. Designed by Soviet chess trainer V. Romanchenko as a pedagogical tool: players must reason from first principles rather than imitate memorized openings. Jocly implementation on chessvariants.com."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
    broken_columns: true
  players: [white, black]
  notation: algebraic
published: true
---

## Romanchenko's Chess

Romanchenko's Chess is a chess variant by Soviet chess trainer V. Romanchenko that uses **standard FIDE chess pieces and rules** on a board with modified geometry. The board has **broken columns** — certain file columns are displaced or interrupted at specific ranks, breaking the standard 8×8 grid alignment. The game was designed as a **pedagogical tool**: by making standard opening patterns inapplicable, it forces students to think analytically from first principles rather than relying on memorized theory.

### The Board

The board retains 64 squares but has a non-standard column structure — some files are offset or broken at specific ranks. This creates a board where:
- Rooks and Queens cannot travel along a continuous straight file through the whole board
- Standard opening patterns do not apply
- Players must evaluate each position on its own merits

The exact column geometry is visible in the Jocly implementation at chessvariants.com/play/jocly/romanchenko-chess.

### Rules

All standard FIDE chess rules apply without modification:
- **Castling:** permitted
- **En passant:** permitted
- **Pawn double move:** permitted on first move
- **Promotion:** standard
- **Win:** Checkmate the opponent's King

Only the board geometry differs from Orthodox chess.

### Pedagogical Purpose

Romanchenko used this setup to train his pupils to "think rather than imitate." By breaking the standard column structure, familiar tactical motifs (pins, skewers, files) must be recalculated. The game is not designed as a standalone variant for competitive play, but as a training exercise.

### Attribution

Romanchenko's Chess was created by Soviet chess trainer V. Romanchenko. Jocly implementation by Michel Gutierrez and Jérôme Choain. Source: chessvariants.com/play/jocly/romanchenko-chess
