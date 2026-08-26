---
title: "Hnefatafl"
slug: "hnefatafl"
parent: tafl
engine:
  topology:
    type: grid
    rows: 11
    cols: 11
  players: [attackers, defenders]
  render:
    cellSize: 34
    zones:
      fill: floor
      cells:
        - type: throne
          at: [[5,5]]
        - type: corner
          at: [[0,0],[0,10],[10,0],[10,10]]
    ops:
      - op: rect
        fill: transparent
        scope: board
      - op: cells
        pattern: cellMap
        light: cell-light
        dark: cell-dark
        defaultFill: floor
        zones:
          cells:
            - type: throne
              at: [[5,5]]
            - type: corner
              at: [[0,0],[0,10],[10,0],[10,10]]
        typeColors:
          floor: floor
          throne: throne
          corner: corner
        typeStrokes:
          floor: floor-stroke
          throne: throne-stroke
          corner: corner-stroke
  setup: "3bbbbb3/5b5/11/b4w4b/b3www3b/bb1wwKww1bb/b3www3b/b4w4b/11/5b5/3bbbbb3"
published: true
---

{{svg:board-hnefatafl.svg "Hnefatafl — starting position"}}

## Overview

Hnefatafl (Old Norse: "king's table") is the primary form of the tafl family, played across Norse and Celtic Northern Europe from around 400 AD. No original written rules survive. All rules are reconstructed from Tablut (Linnaeus 1732) extrapolated to an 11×11 board, from archaeological game sets, and from saga references. This variant follows the Historical Hnefatafl rules documented by Aage Nielsen (aagenielsen.dk, 2016). The Copenhagen rules (2012), which add shield wall mechanics, are a modern tournament variant and are not included here.

## Components

**Board:** 11×11 squares. The central square (f6) is the throne: restricted to all except the King, though all pieces may pass through it when empty. The four corner squares (a1, k1, a11, k11) are restricted: only the King may enter them.

**Pieces:**
- Defenders: 1 King + 12 defenders (light)
- Attackers: 24 attackers (dark)

## Starting Position

Attackers move first.

- King: f6 (centre)
- Defenders (12): d6, e6, g6, h6 (horizontal arm); f4, f5, f7, f8 (vertical arm); e5, g5, e7, g7 (flanking squares)
- Attackers (24): d1, e1, f1, g1, h1, f2 (south); d11, e11, f11, g11, h11, f10 (north); a4, a5, a6, a7, a8, b6 (west); k4, k5, k6, k7, k8, j6 (east)

## Movement

All pieces move any number of empty squares orthogonally. No jumping. Only the King may occupy the throne or corner squares; all pieces may pass through the empty throne.

## Restricted Squares

The throne is always hostile to attackers. The throne is hostile to defenders only when empty. Corner squares are always hostile to both sides. A hostile square counts as an enemy piece for capture purposes.

## Capture

A piece is captured when sandwiched orthogonally between two enemy pieces, or between one enemy piece and a hostile square.

## King Capture

- King on the throne: surrounded on all four sides by attackers.
- King adjacent to the throne: surrounded on three sides (the throne counts as the fourth).
- King elsewhere: sandwiched between two enemies, or between one enemy and a hostile square.

## Win Conditions

- **Defenders win** if the King reaches any corner square.
- **Attackers win** if the King is captured.
- **Draw** by perpetual repetition, or if neither side can achieve their objective.

## Historical Note

No original written rules for Hnefatafl survive. The game is known from archaeological finds, saga references in Old Norse literature, and extrapolation of the Tablut rules recorded by Linnaeus in 1732. The reconstruction presented here follows Aage Nielsen's Historical Hnefatafl rules. As with all non-Tablut tafl variants, these rules represent current scholarly consensus rather than a verbatim historical source.
