---
title: "Chu Shogi"
slug: chu-shogi
board: "12×12"
players: "2"
parent: moddable-shogi
win: "Capture all opponent royal pieces (King and any Prince)"
special: "Historical Japanese chess, dominant for centuries before modern Shogi. 46 pieces of 21 types per side on a 12×12 board. No drops. Features the powerful Lion (double-move, can capture twice) with special trading restrictions. Optional promotion to predetermined promoted forms in the far 4 ranks."
engine:
  topology:
    type: grid
    rows: 12
    cols: 12
  players: [white, black]
---

# Chu Shogi

**Chu Shogi (中将棋, Middle Shogi). First documented ~1350 AD. The dominant form of chess in Japan for centuries until modern Shogi replaced it.**

## Overview

Chu Shogi is played on a 12×12 board with 46 pieces of 21 different types per side. Unlike modern Shogi, there are no drops. The defining piece is the **Lion**, a double-move piece so powerful that special rules govern its capture to prevent quick trades.

**Win condition**: Capture all of the opponent’s royal pieces. There is no check or checkmate — the game continues until the last royal is captured. Stalemate is assumed to be a win for the side delivering it.

## Starting Setup

Pieces are listed by file (a–l = left to right from White’s perspective) and rank. White occupies ranks 1–5, Black mirrors on ranks 8–12.

### Rank 1 (back rank)
| Square | Piece | Movement (Betza) |
|--------|-------|-------------------|
| a1, l1 | Lance | fR (forward slide only) |
| b1, k1 | Ferocious Leopard | FvW (diagonal step + vert. step) |
| c1, j1 | Copper General | fFvW (fwd diagonal + vert. step) |
| d1, i1 | Silver General | FfW (diagonal + fwd step) |
| e1, h1 | Gold General | WfF (orthogonal + fwd diagonal) |
| f1 | King | K (one step any direction) |
| g1 | Drunk Elephant | FfsW (diagonal + fwd/side step) |

### Rank 2
| Square | Piece | Movement (Betza) |
|--------|-------|-------------------|
| a2, l2 | Reverse Chariot | vR (vertical slide only) |
| c2, j2 | Bishop | B (diagonal slider) |
| e2, h2 | Blind Tiger | FbsW (diagonal + back/side step) |
| f2 | Kirin | FD (diagonal step + Dabbaba leap) |
| g2 | Phoenix | WA (orthogonal step + Alfil leap) |

### Rank 3
| Square | Piece | Movement (Betza) |
|--------|-------|-------------------|
| a3, l3 | Side Mover | sRvW (sideways slide + vert. step) |
| b3, k3 | Vertical Mover | vRsW (vert. slide + side step) |
| c3, j3 | Rook | R (orthogonal slider) |
| d3, i3 | Dragon Horse | BW (Bishop + ortho. step) |
| e3, h3 | Dragon King | RF (Rook + diagonal step) |
| f3 | **Lion** | KNAD (see below) |
| g3 | Queen | Q (Rook + Bishop) |

### Ranks 4–5
| Square | Piece | Movement |
|--------|-------|----------|
| a4–l4 | Pawn | fW (forward single step) |
| d5, i5 | Go Between | vW (vertical step, either direction) |

## Key Pieces

### Lion
The Lion makes up to **two moves per turn**, independently in any direction (even changing direction after the first). It may:
- Move or capture to any square within a 5×5 area around it
- Capture a piece, then move or capture again as a King
- Move to an adjacent empty square and return (passing the turn)
- Hop over a square (if moving to the same destination in one leap, with the middle square occupied)

### Kirin
Leaps diagonally one square (Ferz) OR leaps exactly two squares orthogonally (Dabbaba). Promotes to **Lion**.

### Phoenix
Moves one square orthogonally (Wazir) OR leaps exactly two squares diagonally (Alfil). Promotes to **Queen**.

### Drunk Elephant
Moves one step diagonally in any direction, or one step forward/sideways orthogonally (cannot step backward). Promotes to **Prince** (a second King).

## Promotion

Promotion is **optional** and occurs when a piece **enters** the promotion zone (the four ranks farthest from the player: ranks 9–12 for White). A piece can also promote when it **captures** inside the zone. Each piece may promote **at most once** regardless of its position.

Pawns may promote even without a capture upon reaching the last rank.

King, Lion, and Queen do not promote.

| Piece | Promotes To | Promoted Move |
|-------|-------------|---------------|
| Pawn | Gold General | WfF |
| Gold General | Rook | R |
| Rook | Dragon King | RF |
| Dragon King | Soaring Eagle | RbBfFfA + limited Lion power fwd |
| Silver General | Vertical Mover | vRsW |
| Vertical Mover | Flying Ox | BvR |
| Copper General | Side Mover | sRvW |
| Side Mover | Free Boar | BsR |
| Ferocious Leopard | Bishop | B |
| Bishop | Dragon Horse | BW |
| Dragon Horse | Horned Falcon | BbsRfWfD + limited Lion power fwd |
| Lance | White Horse | vRfB |
| Reverse Chariot | Whale | vRbB |
| Blind Tiger | Flying Stag | FbWfsW |
| Drunk Elephant | **Prince** (royal) | K |
| Go Between | Elephant (= Drunk Elephant) | FfsW |
| Phoenix | Queen | Q |
| Kirin | **Lion** | KNAD |

**Horned Falcon** and **Soaring Eagle** have limited Lion power in one/two directions respectively: they may make two consecutive steps along the same ray, continuing after a capture.

## Prince (Two Royal Pieces)

A Drunk Elephant that promotes becomes a **Prince** — a second royal King. When a player has two royals, losing one is non-fatal; only losing the **last** royal loses the game.

## Lion Capture Restrictions

To prevent quick Lion trades, two rules apply:

1. **No protected trade**: A Lion may not capture a protected enemy Lion if doing so exposes it to recapture (as if it were an absolute royal for one move).
 - Exception: A Lion may always capture an adjacent enemy Lion (which could take it “in passing” regardless).
 - Exception: A Lion capturing the enemy Lion together with at least one other non-trivial piece (not a Pawn or Go Between) may do so even if exposed to recapture.

2. **Counter-strike rule**: A non-Lion may not capture the enemy Lion if on the immediately preceding turn the enemy captured a friendly Lion using a non-Lion.
 - Exception: Promotion to Lion during such a capture allows the fresh Lion to be recaptured.

## Repetition Rules

Repeating a position (same side to move) is forbidden. Per the Japanese Chu Shogi Association:
- Perpetual check: the checking side must vary.
- If only one side is attacking with all moves since the prior occurrence, the attacker must vary.
- If both sides are only passing, the side that began passing must vary.
- If neither side attacks anything, a draw may be claimed.
- Otherwise, the side whose move caused the repetition loses.

(Rules trigger on the 4th repetition, as in modern Shogi.)

## Baring Rule

King + any piece vs. lone King is a win, by convention, for the stronger side. Some interpretations extend this to a full bare-king rule (any pieces remaining = win), but this is disputed.

*Source: chessvariants.com/rules/chu-shogi (H.G. Muller)*
