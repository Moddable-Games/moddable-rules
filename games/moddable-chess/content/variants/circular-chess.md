---
title: "Circular Chess"
slug: circular-chess
board: "Circular (4 rings × 16 files)"
players: "2"
parent: moddable-chess
win: "Checkmate (snaffling permitted)"
special: "Played on a circular board of 64 squares arranged in 4 concentric rings of 16 files. No castling, no en passant. Pawns promote after travelling 6 squares. Null moves (moving a piece all the way around a ring back to its start) are illegal."
engine:
  topology:
    type: cylinder
    rows: 4
    cols: 16
  players: [white, black]
---

# Circular Chess

**Invented by David Reynolds (Lincoln, England), 1983. Circular Chess Society founded 1996.**

## Overview

Circular Chess is a modern variant inspired by the ancient Byzantine (round) chess boards depicted in historical sources. It is played on a circular board of 4 concentric rings, each containing 16 squares (64 squares total). The topology is equivalent to a cylinder: the 16 files wrap around, so file 16 is adjacent to file 1. White and Black set up on opposite sides of the circle.

The Circular Chess Society has held an annual World Championship since 1996.

## Board

The board has:
- **4 rings** (ranks): ring 1 = innermost, ring 4 = outermost
- **16 files**: numbered 1–16 going around the circumference; file 16 is adjacent to file 1
- No corners, no edges — every ring is a full loop

## Setup

The starting position is derived from orthodox chess by "folding" the FIDE board into a circle. White and Black occupy opposite sides of the ring. Each player's pieces are arranged by ring:

| Ring | White | Black |
|------|-------|-------|
| 1 (innermost) | Queen, King | Queen, King |
| 2 | Bishop, Bishop | Bishop, Bishop |
| 3 | Knight, Knight | Knight, Knight |
| 4 (outermost) | Rook, Rook | Rook, Rook |

The Queen begins on a square of the same colour as the King (as in FIDE chess). Each player's 8 Pawns are placed in the files immediately in front of their back pieces, between the two sides.

## Pieces

All pieces move as in standard FIDE chess, with adaptations for the circular board:

**Queen and Rook** may slide any number of squares along a ring or between rings, but may not make a "null move" — they cannot travel all the way around a ring to end up on the starting square.

**Bishop** slides diagonally as normal, tracing paths that change both ring and file with each step.

**Knight** leaps in the standard L-shape (2+1 squares).

**King** moves one square in any direction.

**Pawn** advances one square per move around the circumference toward the opponent's side. Pawns have no double-step move and there is no en passant. A Pawn promotes upon reaching the 6th square from its starting position (the file immediately before the opponent's back-rank pieces).

## Rules

All standard FIDE rules apply with the following changes:

**No castling.**

**No en passant.**

**Null moves are illegal.** A Rook or Queen cannot move all the way around a ring and return to its starting square.

**Announcing check is not obligatory.** If a player moves their King into check, or fails to move out of check, the opponent may immediately **snaffle** — capture the King on their next move to win the game instantly. This has decided World Championship games.

**Stalemate** is a draw, as in standard chess.

## Strategy Notes

On the circular board, the Rook and Queen have significantly enhanced range (they can sweep an entire ring), while Bishops and Knights are weaker than in FIDE chess (each can reach fewer squares). Basic checkmates that rely on cornering the opponent (King + two Bishops; King + Bishop + Knight) are impossible because there are no corners. The most reliable basic mates are King + Queen and King + Rook + minor piece.

Pawns cannot be stalemated in King-and-Pawn endings since there is no board edge to trap against; King-and-Pawn vs. King is almost always a win for the stronger side.

Opening theory is essentially nonexistent — unlike standard chess, players are largely improvising from move one.

*Sources: chessvariants.com/shape.dir/circular.html; en.wikipedia.org/wiki/Circular_chess*
