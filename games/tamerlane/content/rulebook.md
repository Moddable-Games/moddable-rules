---
title: "Tamerlane Chess"
version: "0.1.0"
slug: "tamerlane"
players: "2"
duration: "60–120 min"
age: "14+"
tagline: "The 14th-century chess of Timur: 28 pieces per side, a larger board, and citadel squares where a cornered king may force a draw"
type: "classic"
status: "live"
updated: "2026-06-30"
published: false
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

Tamerlane Chess (Arabic: Shatranj al-Kabir, or Great Chess) is a medieval chess variant attributed to Timur, ruler of the Timurid Empire, and documented in manuscripts from 14th-century Central Asia. It expands the earlier Shatranj with a larger board, twelve distinct piece types, and two mechanics not found in any earlier known variant: a three-stage super-pawn and a citadel draw.

All rules derive from manuscripts predating 1400 and are in the public domain.

</div>

<div class="section">

## The Board

{{svg:tamerlane-board.svg "Tamerlane Chess — board layout with citadel squares at rank 2 (White) and rank 9 (Black)"}}

The board is 11 columns (files a–k) by 10 rows (ranks 1–10), giving 110 squares. Each side has one additional citadel square extending from the right of its second rank:

- White's citadel adjoins column k at rank 2.
- Black's citadel adjoins column k at rank 9.

The citadels are draw squares. They begin empty and are not starting positions for any piece.

</div>

<div class="section">

## Equipment

| Item | Count | Notes |
|---|---|---|
| **Board** | 1 | 11×10 grid plus 2 citadel squares |
| **Shah (King)** | 1 per side | |
| **Firzan (General)** | 1 per side | |
| **Wazir (Vizier)** | 1 per side | |
| **Zurafa (Giraffe)** | 2 per side | |
| **Tali'a (Scout)** | 2 per side | |
| **Asb (Horse)** | 2 per side | Moves as a modern knight |
| **Rukh (Rook)** | 2 per side | |
| **Pil (Elephant)** | 2 per side | |
| **Jamal (Camel)** | 2 per side | |
| **Dabbaba (War Engine)** | 2 per side | |
| **Baidaq (Pawn)** | 10 per side | Each assigned to a specific promotion piece |
| **Baidaq al-Bayadiq** | 1 per side | Special pawn with a multi-stage promotion sequence |

28 pieces per side, 56 total.

</div>

<div class="section">

## Setup

All pieces are placed in ranks 1–3 (White) and ranks 8–10 (Black). Citadel squares begin empty. Black mirrors White with rotation symmetry.

**Rank 1 (back rank, files a–k):**

| a | b | c | d | e | f | g | h | i | j | k |
|---|---|---|---|---|---|---|---|---|---|---|
| Pil | (empty) | Jamal | (empty) | Dabbaba | (empty) | Dabbaba | (empty) | Jamal | (empty) | Pil |

**Rank 2 (files a–k plus citadel):**

| a | b | c | d | e | f | g | h | i | j | k | citadel |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Rukh | Asb | Tali'a | Zurafa | Firzan | Shah | Wazir | Zurafa | Tali'a | Asb | Rukh | (empty) |

The Firzan (General) stands to the left of the Shah; the Wazir (Vizier) stands to the right.

**Rank 3 (pawn rank, files a–k):**

| a | b | c | d | e | f | g | h | i | j | k |
|---|---|---|---|---|---|---|---|---|---|---|
| Baidaq al-Bayadiq | Baidaq of Dabbaba | Baidaq of Jamal | Baidaq of Pil | Baidaq of Firzan | Baidaq of Shah | Baidaq of Wazir | Baidaq of Zurafa | Baidaq of Tali'a | Baidaq of Asb | Baidaq of Rukh |

</div>

<div class="section">

## Piece Movement

### Shah (King)
Moves one square in any of the eight directions. The Shah cannot move into check. See Special Rules for the Shah exchange.

### Firzan (General)
Moves exactly one square diagonally. A short-range piece, as in Shatranj.

### Wazir (Vizier)
Moves exactly one square orthogonally: forward, backward, or sideways.

### Zurafa (Giraffe)
A compound slider. Moves exactly one square diagonally, then continues in an orthogonal direction aligned with that diagonal step, landing on the fourth or further square of the orthogonal leg. Both legs are obstructable: a piece blocking either the diagonal step or the orthogonal path prevents movement along that ray. The Zurafa cannot jump.

### Tali'a (Scout)
Slides diagonally, with a minimum of two squares per move. The Tali'a cannot move to an adjacent diagonal square, cannot jump, and has no upper distance limit beyond the board edge.

### Asb (Horse)
Moves as the modern chess knight: one square in one direction and then one square at right angles, jumping over any piece in the way.

### Rukh (Rook)
Slides any number of squares orthogonally. Cannot jump.

### Pil (Elephant)
Jumps exactly two squares diagonally, leaping over any piece on the intervening square. Equivalent to the Alfil of Shatranj.

### Jamal (Camel)
Jumps in a 3×1 L-shape: one square diagonally and then two squares orthogonally in the same direction. May leap over any intervening piece.

### Dabbaba (War Engine)
Jumps exactly two squares orthogonally. May leap over the intervening square.

</div>

<div class="section">

## Pawns

### Baidaq (standard pawn)

A Baidaq moves one square forward orthogonally and captures one square forward diagonally. There is no two-square first move and no en passant.

Each Baidaq is assigned to one piece type before the game begins, determined by its starting file (see Setup). When a Baidaq reaches the opposite back rank, it promotes immediately to its assigned piece type; there is no choice of promotion piece.

| Starting file | Promotes to |
|---|---|
| a | Baidaq al-Bayadiq (see below) |
| b | Dabbaba |
| c | Jamal |
| d | Pil |
| e | Firzan |
| f | Shah (second Shah) |
| g | Wazir |
| h | Zurafa |
| i | Tali'a |
| j | Asb |
| k | Rukh |

The Baidaq on file f promotes to a second Shah when it reaches the opposite back rank. This additional Shah moves as the king. The opponent must capture it before checkmate can be delivered against the original Shah.

### Baidaq al-Bayadiq

The Baidaq al-Bayadiq starts on file a and moves as a standard Baidaq, but does not promote immediately upon reaching the opposite back rank. Instead, it remains on that square, immune to capture.

When a situation arises in which two of the opponent's pieces could both theoretically be captured by a pawn, the Baidaq al-Bayadiq is moved to that square. Any piece previously occupying that square, including a friendly piece, is displaced. The capture is then made on the following turn.

After completing this sequence, the Baidaq al-Bayadiq continues advancing. On its second promotion: it becomes a Shah's Baidaq and is returned to its starting square. On its third promotion: it becomes Shah Masnu'a; the original Shah's Baidaq becomes Shahzada. Both Shah Masnu'a and Shahzada move as the Shah.

</div>

<div class="section">

## Check, Checkmate, and Stalemate

**Check:** If the Shah could be captured on the opponent's next turn, it is in check. A player must resolve check on their turn.

**Checkmate:** The Shah is in check with no legal move available to resolve it. The opponent wins.

**Stalemate:** The Shah is not in check, but no legal move is available. The opponent wins. Stalemate is a loss, following Shatranj tradition, not a draw.

There is no 50-move rule, no threefold repetition rule, and baring the king is not a win condition.

</div>

<div class="section">

## Special Rules

### Shah Exchange

Once per game, when a player's Shah is in check or stalemate, that player may swap the Shah with any other friendly piece on the board. The swap constitutes the player's entire move for that turn.

### Citadel Draw

If a player moves their Shah into the citadel square on the opponent's side of the board, the game is immediately a draw. The Shah cannot enter the opponent's citadel if the opponent's Shah Masnu'a already occupies it.

A player may also move their Shah into their own citadel square; the Shah cannot be captured while it occupies its own citadel.

</div>

<div class="section">

## Attribution

Tamerlane Chess. Origin: Central Asia, 14th century, attributed to Timur (Tamerlane). Rules documented in medieval manuscripts, now in the public domain. Sources: Murray, H.J.R. — A History of Chess (1913), pp. 344–345; Maastricht University and the Ludii Project — Shatranj al-Kabir.lud (Apache 2.0, citing Murray 1913); Wikipedia — Tamerlane Chess (CC-BY-SA).

</div>
