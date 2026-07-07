---
title: Byzantine Chess
slug: byzantine-chess
board: "4-ring circular (4×16)"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Medieval circular chess variant from the Byzantine Empire (~10th–12th century). Played on 4 concentric rings of 16 squares (64 total). The earliest historically documented circular chess form."
engine:
  topology:
    type: circular
    rings: 4
    positions_per_ring: 16
  players: [white, black]
  notation: circular
published: true
---

## Byzantine Chess

Byzantine Chess is a circular chess variant documented in Byzantine manuscripts, most notably described around the 10th–12th century CE. It is played on a board of **4 concentric rings, each with 16 squares (64 total)**. This is the earliest historically attested form of circular chess.

See also: [Circular Chess](variants/circular-chess/) — the modern revival with the same board topology.

### The Board

Four concentric rings labeled 1 (innermost) to 4 (outermost). Each ring has 16 positions. Movement is tangential (along a ring) or radial (between rings).

### Starting Position

Each player occupies two rings:
- **White:** inner two rings (rings 1–2). Back pieces on ring 1, Pawns on ring 2.
- **Black:** outer two rings (rings 3–4). Back pieces on ring 4, Pawns on ring 3.

Back rank layout (8 pieces per player on their inner ring): Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook — distributed across 8 of the 16 positions (every other position), with 8 Pawns filling the ring toward the opponent.

> **Verification note:** Confirm the exact starting positions from chessvariants.com/other.dir/byzantine.html. Byzantine sources use Arabic piece names (Rukh, Faras, Fil, Wazir, Shah) with movement rules that may differ slightly from FIDE chess in the Bishop (Fil) movement.

### Key Historical Differences from Modern Chess

Byzantine Chess predates modern chess piece movements. The original Byzantine pieces:

| Byzantine | Modern Equiv. | Original Movement |
|---|---|---|
| Shah (King) | King | One step any direction |
| Wazir (Queen) | Ferz | One step diagonally only |
| Fil (Bishop) | Bishop | Two squares diagonally, leaping (Alfil) |
| Faras (Knight) | Knight | Standard L-shape leap |
| Rukh (Rook) | Rook | Slides orthogonally |
| Soldier (Pawn) | Pawn | Advances radially toward opponent |

**Note:** Modern reconstructions of Byzantine Chess sometimes substitute modern FIDE piece movements for accessibility. Confirm which rule set applies before building.

### Rules

Check and checkmate apply. Pawns advance radially outward (White) or inward (Black). Sliders wrap around rings. No castling (historically not part of Byzantine Chess). En passant and double Pawn move are not historically documented for this variant.

### Attribution

Byzantine Chess: historical origin ~10th–12th century Byzantine Empire. Rules documented from chessvariants.com/other.dir/byzantine.html.
