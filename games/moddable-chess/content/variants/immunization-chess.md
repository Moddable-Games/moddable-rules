---
title: "Immunization Chess"
slug: "immunization-chess"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 35
win: "Checkmate"
special: "When a capture occurs, adjacent enemy pieces become immune to capture for 2 turns."
---

## Immunization Chess

Captures trigger an immune response in nearby pieces. When a piece is captured, all enemy pieces adjacent to the capture square become immune to capture for 2 turns.


{{svg:immunization-chess-board.svg "Immunization Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess setup.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- When a capture occurs, all enemy (defender's) pieces on squares adjacent to the capture square become immune for 2 turns.
- Immune pieces cannot be captured but can still be blocked, checked, and moved normally.
- Kings cannot become immune.
- Immunity wears off after 2 full turns.
- Immune pieces still deliver check and control squares normally.
- You cannot capture an immune piece — the move is illegal.
- All other standard chess rules apply.

### Win Condition

Checkmate the opponent's King.

### Strategy

Captures create a defensive shield around the victim's neighbours — making exchanges near clustered pieces dangerous. Isolated pieces are more vulnerable since they have fewer neighbours to immunize. Plan captures carefully: taking a piece that immunizes a more valuable neighbour is often a mistake.

### Attribution

Modern variant. Public domain.
