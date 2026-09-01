# Wa Shogi

**Historical Japanese Shogi variant on an 11×11 board. Played both with and without drops in modern practice.**

## Overview

{{svg:wa-shogi-board.svg "Wa Shogi — starting position"}}

Wa Shogi uses an 11×11 board. All pieces except the Pawns are of unique types, and they are generally weaker than Shogi pieces, making the game well-suited to drops. Historical rules make no mention of drops, however, so the game is today played in two forms: with or without drops.

**Win condition**: Capture the opponent’s Crane King. No check restriction.

## Starting Setup

Pieces are listed by file (a–k from left to right, White’s perspective) and rank.

### Rank 1 (back rank)
| File | Piece | Movement (Betza) |
|------|-------|------------------|
| a1 | Oxcart | fR (forward Rook slide) |
| b1 | Blind Dog | fFbsW (fwd diagonal; back/side step) |
| c1 | Strutting Crow | fWbF (fwd step; bwd diagonal) |
| d1 | Flying Goose | fFvW (fwd diagonal; vert. step) |
| e1 | Violent Wolf | WfF (orthogonal step; fwd diagonal) |
| f1 | **Crane King** (royal) | K (one step any direction) |
| g1 | Violent Stag | FfW (diagonal; fwd orthogonal) |
| h1 | Flying Cock | fFsW (fwd diagonal; side step) |
| i1 | Swooping Owl | fWbF (fwd step; bwd diagonal) |
| j1 | Climbing Monkey | fFvW (fwd diagonal; vert. step) |
| k1 | Liberated Horse | fRbW2 (fwd Rook slide; 2-sq bwd step) |

### Rank 2
| Square | Piece | Movement (Betza) |
|--------|-------|------------------|
| b2 | Flying Falcon | BfW (diagonal slide; fwd step) |
| f2 | Swallow’s Wings | sRvW (side Rook slide; vert. step) |
| j2 | Cloud Eagle | vRsWfF3bF (vert. Rook; side step; 3-sq fwd diag; bwd diag step) |

### Ranks 3–4 (Pawns and special pieces)
| Square | Piece | Movement |
|--------|-------|----------|
| a3, b3, c3, e3, f3, g3, i3, j3, k3 | Sparrow Pawn | fW (fwd step) |
| d3 | Treacherous Fox | FAvWvD (diag step; Alfil; vert. step; Dabbaba) |
| h3 | Running Rabbit | FfRbW (diag step; fwd Rook; bwd step) |
| d4, h4 | Sparrow Pawn | fW (fwd step) |

*Total: 27 pieces per side (11 back-rank, 3 on rank 2, 11 on rank 3 including the Treacherous Fox and Running Rabbit, 2 on rank 4).*

## Promotion

The **promotion zone** is the last 3 ranks (ranks 9–11 for White). Promotion is **optional** at the end of a turn when the move starts or ends in the zone. Each piece has a fixed promoted form:

| Piece | Promotes To | Promoted Movement |
|-------|-------------|-------------------|
| Sparrow Pawn | Golden Bird | WfF |
| Running Rabbit | Treacherous Fox | FAvWvD |
| Flying Falcon | Tenacious Falcon | BvRsW |
| Swallow’s Wings | Gliding Swallow | R (Rook) |
| Violent Wolf | Bear’s Eyes | K |
| Violent Stag | Roaming Boar | FfsW |
| Flying Goose | Swallow’s Wings | sRvW |
| Climbing Monkey | Violent Stag | FfW |
| Blind Dog | Violent Wolf | WfF |
| Flying Cock | Raiding Falcon | vRfFsW |
| Liberated Horse | Heavenly Horse | vN (vertical Knight) |
| Oxcart | Plodding Ox | K |
| Strutting Crow | Flying Falcon | BfW |
| Swooping Owl | Cloud Eagle | vRsWfF3bF |

**Non-promoting**: Treacherous Fox, Cloud Eagle, Crane King.

*Note: Swooping Owl and Strutting Crow move identically (fWbF) but promote differently. Flying Goose and Climbing Monkey also move identically (fFvW) but promote differently.*

## Rules

**Repetition**: If the same position with the same player to move occurs a 4th time, the game is a draw. Exception: if one side has been delivering check on every move, that side loses.

**Impasse** (drops only): If both Crane Kings reach their respective promotion zones, the game is drawn.

**Drops**: When played with drops, captured pieces revert to their unpromoted form and cannot be promoted immediately upon being dropped, even when dropped inside the promotion zone.

*Source: chessvariants.com/rules/wa-shogi (H.G. Muller)*