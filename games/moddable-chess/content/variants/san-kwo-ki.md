---
title: "San-kwo-k'i"
slug: san-kwo-ki
board: Hexagonal trisection
players: 3
parent: moddable-chess
win: Last General surviving wins
special:
  - three-player
  - captures-army
  - extended-knight
engine:
  type: hexagonal-trisection
  players: 3
---

## Overview

San-kwo-k'i (三國棋, "Game of the Three Kingdoms") is a historical Chinese three-player chess variant representing the Three Kingdoms war (220–280 CE) among Wei, Shu, and Wu. It is documented in H.J.R. Murray's *A History of Chess* (1913), citing von Möllendorff's 1876 German article "Das Schachspiel der Chinesen" published in the journal of the German Society for Natural and Cultural Science of East Asia.

Yu Ren Dong reports the game was invented during the Southern Song Dynasty (1127–1279 CE); the inventor's name and original rulebook are lost.

## Board

The board is a large hexagonal space divided into three equal sections, one per kingdom. Each section contains a Xiangqi-like grid with a 3×3 palace at its centre. The three sections meet at a central zone. The lines of the board are not straight throughout — each kingdom's territory faces the other two. A river separates each player's home territory from the central meeting area.

## Players and Armies

Three players represent three kingdoms:
- **Wei** (魏) — Blue
- **Shu** (蜀) — Red
- **Wu** (吳) — Green

Each player commands the standard 16 Xiangqi pieces: General(1), Guard(2), Elephant(2), Horse(2), Chariot(2), Cannon(2), Soldier(5).

Each player additionally has **2 special pieces** placed 2 squares directly above their Guards in the starting position:
- Wei: **Ch'i / Banner** (旗)
- Shu: **Chuo / Fire** (火)
- Wu: **Feng / Wind** (風)

## Special Piece: Banner / Fire / Wind

The special piece makes an **extended knight's move**: two steps vertically or horizontally, then one step diagonally outward. This is a leaping move — the piece jumps directly to its destination and cannot be blocked by intervening pieces. The destination square is 3 files and 1 rank away (or 1 file and 3 ranks away) from the starting square.

## Rules

Standard Xiangqi rules apply, with the following adaptations for three players:

**Turn order:** Players take turns in a fixed sequence — Wei, Shu, Wu, Wei… — clockwise around the board.

**Elimination:** When a player's General is checkmated, that player is eliminated. The player who delivered the checkmate **removes the General from the board and takes all remaining pieces of the eliminated player**, immediately adding them to their own army.

**Win condition:** The last player with a surviving General wins.

## Historical Note

The game is reported to be "very complicated and difficult, but is not considered as interesting as the ordinary chess" (Murray, citing von Möllendorff). The exact board layout and all movement rules are documented from the Murray and von Möllendorff accounts; some details of three-sector interaction at the central zone are not preserved in historical sources.

## Attribution

Rules documented from chessvariants.com/xiangqivariants.dir/chin3pl.html, citing H.J.R. Murray, *A History of Chess* (1913), pp. 133–134, and O. von Möllendorff, "Das Schachspiel der Chinesen" (1876).
