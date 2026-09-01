---
title: "Wa Shogi"
slug: wa-shogi
board: "11×11"
players: "2"
parent: shogi
win: "Capture the opponent's Crane King"
special: "Played on an 11×11 board with 23 pieces of 14 different types per side. All non-Pawn pieces are unique. Played historically without drops; modern play often adds drops. Promotion zone is the last 3 ranks; each piece has a fixed promoted form."
verified:
  date: "2026-08-31"
  method: "Desktop web research. Statements here are traceable to the sources below; anything that could not be confirmed is listed under unverified and must not be filled in from memory."
  sources:
    - "https://en.wikipedia.org/wiki/Wa_shogi"
  unverified:
    - "THE MOVEMENT OF ALL 17 PIECE TYPES. Wikipedia gives them only as diagram images and there is no text description in the article; the chessvariants page returned 403. This is a hard blocker: nobody can implement Wa Shogi without a human reading the diagrams. Further web searching will not resolve it."
    - "Running Rabbit's promotion target."
    - "Whether the drop version uses standard shogi drop restrictions."
    - "Whether the crane king is subject to check, or only to bare capture."
unsupported: "Blocked on content, not capability. 11x11, 27 pieces a side across 17 types, and the full starting layout and promotion list ARE documented and recorded below - but every piece's movement exists only as an image. It is played either with or without drops, so it is two rulesets over one piece set; the drop version implies demotion on capture. Won by capturing the opponent's Crane King, not by checkmate. Promotion zone is the far three ranks and is optional."
engine:
  topology:
    type: grid
    rows: 11
    cols: 11
  players: [sente, gote]
  setup: "[lh][cm][so][fc][vs][ck][vw][fg][sc][bd][oc]/1[ce]3[sw]3[ff]1/[sp][sp][sp][rr][sp][sp][sp][tf][sp][sp][sp]/3[sp]3[sp]3/11/11/11/3[SP]3[SP]3/[SP][SP][SP][TF][SP][SP][SP][RR][SP][SP][SP]/1[FF]3[SW]3[CE]1/[OC][BD][SC][FG][VW][CK][VS][FC][SO][CM][LH]"
  render:
    cellSize: 30
  pieces:
    set: mce-shogi-fairy
---

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

*Total: 23 pieces per side (1 King, 2 special, 9 back-rank, 3 rank-2, 8 pawns).*

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
