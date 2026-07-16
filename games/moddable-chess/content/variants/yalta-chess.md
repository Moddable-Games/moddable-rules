---
title: Yalta Chess
slug: yalta-chess
board: Hexagonal Y-trisection
players: 3
parent: moddable-chess
win: Be the last player with a King remaining
special: "3-player chess on a hexagonal board divided into three Y-shaped sectors, one per player, meeting at a central junction. Checkmating a player captures their army. Alliances encouraged."
engine:
  topology:
    type: hexagonal-trisection
  players: 3
  render:
    cellSize: 24
  setup_status: "not yet encoded — needs the hexagonal-trisection renderer (rules#179). Prior flat 14x14 grid FEN removed 2026-07 as confirmed incorrect against the primary source diagram."
---

## Overview

{{svg:yalta-chess-board.svg "Yalta Chess — starting position"}}

Yalta Chess is a 3-player chess variant played on a hexagonal board divided into three Y-shaped sectors. It was documented by Daniel Lindström from a small book purchased at a chess bookshop in Paris. Lindström describes it as "more about group dynamics, preferably together with a couple of beers, than as a serious competition."

## Board

The board is a **hexagon**, divided by three lines running from the centre to alternating corners into three equal Y-shaped (parallelogram/rhombus) sectors, one per player. Each sector contains a standard 8×8-equivalent chess playing area, checkered in the ordinary alternating pattern. Pieces move using standard FIDE movement within their sector; the central junction, where all three sectors meet, is the area where a piece moving from one sector toward another has a choice of path.

This matches the board graphic on the primary source page (chessvariants.com/multiplayer.dir/yalta.html, graphic by Daniel Lindström) — a hexagon, not a circle or rings. The variant is **not** circular/annular in structure, unlike Byzantine Chess or Circular Chess. It shares its fundamental hex-trisection shape with San-kwo-k'i (xiangqi hub) — see that file for a note on a possible shared renderer.

## Starting Position

Each player sets up a complete standard FIDE army in their own sector. **The Queen is placed to the LEFT of the King** (not to the right as in standard chess) to preserve symmetry across the three sectors' orientations.

Exact per-square coordinates for the hexagonal-trisection layout are not yet transcribed into this file — the primary source page includes a separate "Starting position" graphic (credited to David Howe) that has not yet been read pixel-by-pixel. A secondary, independently-built implementation exists at yalta-chess.com (documented at smlep.github.io/jekyll/update/2020/12/26/yaltachess.html) using a 96-square-total board (32 per player) with its own coordinate system, but that page explicitly notes its rules "differed depending on the articles" it drew from — treat it as a cross-reference for board shape only, not as an authoritative source for exact starting squares or total square count, which may differ from the original Lindström book.

## Rules

All standard FIDE chess rules apply within a sector, with the following modifications:

**Path choice at the center:** Pawns, Bishops, and Queens have a choice of path when passing through the central junction area. Pawns have this choice only when capturing, not when advancing.

**Knight movement:** Knights always land on a square of the opposite color to their starting square, even when crossing sectors. Their path near the junction may appear unusual, but the color-change property is preserved.

**Check response:** When a player is in check, they must resolve it on their turn as usual. The player to their left may attempt to help them by interposing a piece or capturing the checker on that player's own turn.

**Checkmate and army takeover:** When a player is checkmated, their King is removed from the board. The player who delivered the checkmate **takes control of all the checkmated player's remaining pieces** and may use them immediately. Promoting a captured pawn from the new army requires a piece sacrifice — move the pawn to the promotion rank and allow it to capture a piece placed in its path. Taking control of the new pieces does not grant an extra move.

**Alliances:** Informal alliances between players are permitted. There is no rule requiring a player to honor any agreement. All disputes about rules are resolved by majority vote among the three participants.

**Multiple-check resolution:** If a player in check is simultaneously checked by two opponents, the check delivered first takes priority for determining which player delivers the mate.

## Win Condition

The last player with a King on the board wins.

## Attribution

Yalta Chess documented by Daniel Lindström; WWW page by David Howe, created May 12, 1997. Rules and board graphic documented from chessvariants.com/multiplayer.dir/yalta.html. Board shape (hexagonal Y-trisection, not circular) confirmed against the primary source graphic, 2026-07.
