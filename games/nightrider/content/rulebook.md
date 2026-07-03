---
title: "Nightrider Chess"
version: "0.1.0"
slug: "nightrider"
players: "2"
duration: "20–60 min"
age: "10+"
tagline: "Chess with knights that never stop moving"
type: "classic"
status: "live"
updated: "2026-07-03"
published: true
variants: false
theme:
  surface: light
  tint: warm
  texture: grain
  cover: solid
  typography: classical
  accent: blue
---

<div class="section">

## History

The Nightrider was invented by W. S. Andrews in 1907 as a fairy chess piece capable of making any number of consecutive knight-leaps in the same direction. Thomas Rayner Dawson named the piece and popularised it in fairy chess problems from 1925 onward. Nightrider Chess applies the piece to a full game: every Knight on both sides is replaced by a Nightrider, with all other chess rules unchanged.

All rules are in the public domain.

</div>

<div class="section">

## Equipment

| Item | Count | Notes |
|---|---|---|
| **Board** | 1 | Standard 8×8 chessboard |
| **Nightrider** | 2 per side | Replaces the Knight. White on b1 and g1, Black on b8 and g8 |
| King, Queen, Rook, Bishop, Pawn | Standard counts | Unchanged from standard chess |

</div>

<div class="section">

## Setup

Set up the board exactly as in standard chess, with Nightriders standing in the squares where Knights would normally begin: White on b1 and g1, Black on b8 and g8.

{{svg:nightrider-board.svg "Nightrider Chess — starting position"}}

</div>

<div class="section">

## The Nightrider

The Nightrider is a leaprider: a piece that picks one of the eight knight-leap directions, two squares in one direction and one square perpendicular, and repeats that same leap any number of times in a single move.

**Movement rules:**

- The Nightrider makes one or more consecutive knight-leaps, all in the same direction, in a single move.
- It is blocked if any intermediate knight-landing square along its chosen direction is occupied by any piece, friendly or enemy. It cannot jump over an occupied intermediate square.
- It may capture the first enemy piece it reaches along its path, stopping on that square.
- It may not land on or pass through a square occupied by a friendly piece.

Betza notation: N0.

{{svg:nightrider-movement.svg "Nightrider on e4 — reachable squares on an otherwise empty board"}}

</div>

<div class="section">

## Gameplay

All standard chess rules apply, with one exception to the promotion rule.

- **Castling:** permitted under standard conditions: King and Rook unmoved, King not in check, no attacked squares along the King's path.
- **En passant:** permitted under standard conditions.
- **Promotion:** a pawn reaching the eighth rank promotes to Queen, Rook, Bishop, or Nightrider. There is no Knight in this variant to promote to, since every Knight has been replaced by a Nightrider.
- **Check and checkmate:** standard rules apply. The Nightrider can give check along its extended knight-line.
- **Draws:** stalemate, insufficient material, threefold repetition, the fifty-move rule, and draw by agreement all apply as in standard chess.

</div>

<div class="section">

## Winning

Checkmate the opponent's King. The Nightrider's ability to project force across the board creates tactical patterns not found in standard chess, including long-range pins, multi-square forks, and skewers along its extended knight-lines.

</div>

<div class="section">

## Attribution

Nightrider Chess. The Nightrider piece: invented by W. S. Andrews, 1907, named and popularised by Thomas Rayner Dawson from 1925. Public domain. Sources: morganthomas/fairy-chess, rules.jade; fairy-stockfish/Fairy-Stockfish, variant.cpp; Wikipedia, Nightrider (chess) (CC-BY-SA).

</div>
