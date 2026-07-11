---
title: "Brandubh"
slug: "brandubh"
variant_of: "tafl"
engine:
  topology:
    type: grid
    rows: 7
    cols: 7
  players: [attackers, defenders]
  setup: "3b3/3b3/3w3/bbwKwbb/3w3/3b3/3b3"
published: true
---

{{svg:board-brandubh.svg "Brandubh — starting position"}}

## Overview

Brandubh (Irish: "black raven") is the Irish form of tafl, played on a 7×7 board. The game is mentioned in several medieval Irish texts. The rules here follow the reconstruction by H.J.R. Murray (*A History of Board Games*, 1951: 35) as formalised by the Ludii Project (Maastricht University). All tafl variants other than Tablut are historical reconstructions; no original complete ruleset survives.

## Components

**Board:** 7×7 squares. The central square (d4) is restricted: no piece may land on it. The four corner squares (a1, a7, g1, g7) are restricted: only the King may enter them. Both the central square and all corner squares are hostile to all pieces for capture purposes.

**Pieces:**
- Defenders: 1 King + 4 defenders (light)
- Attackers: 8 attackers (dark)

## Starting Position

Attackers move first.

- King: d4 (centre)
- Defenders (4): c4, e4 (horizontal); d3, d5 (vertical)
- Attackers (8): a4, b4 (west arm); f4, g4 (east arm); d1, d2 (south arm); d6, d7 (north arm)

## Movement

All pieces move any distance orthogonally. No piece may land on the central square. Only the King may enter corner squares.

## Capture

A piece is captured when surrounded orthogonally on two sides by opposing pieces. Pieces may also be captured between the central square and an opposing piece, or between a corner square and an opposing piece.

## King Capture

- King on the central square: must be surrounded on all four orthogonal sides.
- King adjacent to the central square: surrounded on three sides (the central square counts as the fourth).
- King elsewhere: captured as any other piece.

## Win Conditions

- **Defenders win** if the King reaches any corner square.
- **Attackers win** if the King is captured.

## Historical Note

"Brandubh" appears in several medieval Irish texts in connection with kingship and conflict. The precise historical form of the game is uncertain. This implementation follows the Murray reconstruction as formalised by the Ludii Project, with cyningstan.com (Damian Walker) as the primary reconstructor. As with all non-Tablut tafl variants, these rules represent scholarly consensus rather than a verbatim historical source.
