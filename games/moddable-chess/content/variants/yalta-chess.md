---
title: Yalta Chess
slug: yalta-chess
board: Circular Y-trisection
players: 3
parent: moddable-chess
win: Be the last player with a King remaining
special: "3-player chess on a circular board divided into Y-shaped sectors. Checkmating a player captures their army. Alliances encouraged."
engine:
  topology:
    type: grid
    rows: 14
    cols: 14
  players: [white, black]
  render:
    cellSize: 24
  setup: "14/14/14/3rnbqkbnr3/3pppppppp3/14/14/14/14/3PPPPPPPP3/3RNBQKBNR3/14/14/14"
---

## Overview

Yalta Chess is a 3-player chess variant played on a circular board divided into three Y-shaped sectors. It was documented by Daniel Lindström from a small book purchased at a chess bookshop in Paris. Lindström describes it as "more about group dynamics, preferably together with a couple of beers, than as a serious competition."

## Board

The board is circular and divided into three equal Y-shaped sectors radiating from a central junction, one sector per player. Each sector contains a standard chess playing area. Pieces move using standard FIDE movement within their sector; the central Y-junction is the area where a piece moving from one sector toward another has a choice of path.

## Starting Position

Each player sets up a complete standard FIDE army in their own sector. **The Queen is placed to the LEFT of the King** (not to the right as in standard chess) to preserve symmetry across the three sectors' orientations.

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

Yalta Chess documented by Daniel Lindström; WWW page by David Howe, created May 12, 1997. Rules documented from chessvariants.com/multiplayer.dir/yalta.html.
