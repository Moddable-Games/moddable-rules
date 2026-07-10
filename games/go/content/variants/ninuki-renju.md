---
title: Ninuki-Renju
slug: ninuki-renju
board: "15×15"
players: "2"
parent: go
order: 6
win: Five in an unbroken row (exactly five) or five pairs captured
special: Japanese precursor to Pente. Custodial captures. Two win conditions. Active 1923-1940.
engine:
  topology:
    type: grid
    rows: 15
    cols: 15
    layout: intersections
  players: [black, white]
  setup: ""
---

## Ninuki-Renju

Ninuki-Renju is a Japanese placement game in the Gomoku family that adds custodial capture to the five-in-a-row objective. It is the direct historical precursor to Pente (1977); Pente's designer Gary Gabrel explicitly cites it as inspiration. The game was organised as a competitive sport in Japan by the Ninuki Renju Sha from 1923 to 1940.

{{svg:go-15x15-board.svg "Empty 15×15 board — Ninuki-Renju"}}

### Setup

**Board:** 15×15.

**Pieces:** Black and white stones.

**First move:** Black plays first.

### Rules

Players alternate placing one stone per turn on any empty intersection.

**Capture:** A pair of opponent stones may be captured by custodial capture: sandwiching exactly two opponent stones lengthwise between two of your own in a single move. Captured stones are removed from the board.

**Win conditions:**
Either of the following wins the game:
1. Form exactly five stones in an unbroken row (horizontally, vertically, or diagonally).
2. Capture five pairs (ten stones total).

**Overline:** Six or more stones in a row does not win. The line is neutral and play continues.

**Restrictions on Black:** Black may not form a double-three (two simultaneous open lines of three) unless doing so is required to destroy an unperfect five (see below).

**Unperfect five:** If a player forms five in a row and their opponent immediately captures a pair across that line on the very next move, the five is nullified. It is called an unperfect five and play continues. The capture must come on the move immediately following the five.

**Draw:** If a player's fifth capture removes one stone from an opponent's six-in-a-row, leaving exactly five in a row, the game is a draw.

### Attribution

Japanese competitive game. Organised by the Ninuki Renju Sha, Japan, 1923-1940. Direct historical precursor to Pente (1977). Public domain. Sources: Renju International Federation (renju.se); Wikipedia (Pente article, Gomoku article).
