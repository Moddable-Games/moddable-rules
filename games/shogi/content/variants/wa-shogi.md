---
playable: true
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
    - "https://en.wikipedia.org/w/index.php?title=Wa_shogi&action=raw - the article gives every piece's movement as prose AND a parenthesised Betza string, e.g. the running rabbit's (fRFbW). The claim that it was diagram-only was wrong; each of the seventeen types below was compared against it on 2026-09-09 and every one agrees, allowing for Betza's redundant spellings - the source writes the tenacious falcon fbRBW where this table writes BvRsW, and the W steps it adds forward and backward are already covered by the fbR."
  unverified:
    - "Whether the drop version uses standard shogi drop restrictions. The engine plays the historical drop-free form."
    - "Whether the crane king is subject to check, or only to bare capture. The engine treats it as bare capture, which is what the article states."
engine:
  topology:
    type: grid
    rows: 11
    cols: 11
  players: [sente, gote]
  setup: "[lh][cm][so][fc][vs][ck][vw][fg][sc][bd][oc]/1[ce]3[sw]3[ff]1/[sp][sp][sp][rr][sp][sp][sp][tf][sp][sp][sp]/3[sp]3[sp]3/11/11/11/3[SP]3[SP]3/[SP][SP][SP][TF][SP][SP][SP][RR][SP][SP][SP]/1[FF]3[SW]3[CE]1/[OC][BD][SC][FG][VW][CK][VS][FC][SO][CM][LH]"
  render:
    cellSize: 30
  vocabulary:
    liberated_horse: { symbols: { "0": LH, "1": lh } }
    climbing_monkey: { symbols: { "0": CM, "1": cm } }
    swooping_owl: { symbols: { "0": SO, "1": so } }
    flying_cock: { symbols: { "0": FC, "1": fc } }
    violent_stag: { symbols: { "0": VS, "1": vs } }
    crane_king: { symbols: { "0": CK, "1": ck } }
    violent_wolf: { symbols: { "0": VW, "1": vw } }
    flying_goose: { symbols: { "0": FG, "1": fg } }
    strutting_crow: { symbols: { "0": SC, "1": sc } }
    blind_dog: { symbols: { "0": BD, "1": bd } }
    oxcart: { symbols: { "0": OC, "1": oc } }
    cloud_eagle: { symbols: { "0": CE, "1": ce } }
    swallows_wings: { symbols: { "0": SW, "1": sw } }
    flying_falcon: { symbols: { "0": FF, "1": ff } }
    sparrow_pawn: { symbols: { "0": SP, "1": sp } }
    running_rabbit: { symbols: { "0": RR, "1": rr } }
    treacherous_fox: { symbols: { "0": TF, "1": tf } }
    golden_bird: { symbols: { "0": GB, "1": gb } }
    tenacious_falcon: { symbols: { "0": TN, "1": tn } }
    gliding_swallow: { symbols: { "0": GS, "1": gs } }
    bears_eyes: { symbols: { "0": BE, "1": be } }
    roaming_boar: { symbols: { "0": RB, "1": rb } }
    raiding_falcon: { symbols: { "0": RF, "1": rf } }
    heavenly_horse: { symbols: { "0": HH, "1": hh } }
    plodding_ox: { symbols: { "0": PO, "1": po } }
  plugins:
    shogi:
      drops: false
      promotionZone: 3
      royalType: crane_king
      winCondition: capture
      promotionMap:
        sparrow_pawn: golden_bird
        running_rabbit: treacherous_fox
        flying_falcon: tenacious_falcon
        swallows_wings: gliding_swallow
        violent_wolf: bears_eyes
        violent_stag: roaming_boar
        flying_goose: swallows_wings
        climbing_monkey: violent_stag
        blind_dog: violent_wolf
        flying_cock: raiding_falcon
        liberated_horse: heavenly_horse
        oxcart: plodding_ox
        strutting_crow: flying_falcon
        swooping_owl: cloud_eagle
      pieceMoves:
        liberated_horse: { betza: fRbW2 }
        climbing_monkey: { betza: fFvW }
        swooping_owl: { betza: fWbF }
        flying_cock: { betza: fFsW }
        violent_stag: { betza: FfW }
        crane_king: { betza: K }
        violent_wolf: { betza: WfF }
        flying_goose: { betza: fFvW }
        strutting_crow: { betza: fWbF }
        blind_dog: { betza: fFbsW }
        oxcart: { betza: fR }
        cloud_eagle: { betza: vRsWfF3bF }
        swallows_wings: { betza: sRvW }
        flying_falcon: { betza: BfW }
        sparrow_pawn: { betza: fW }
        running_rabbit: { betza: FfRbW }
        treacherous_fox: { betza: FAvWvD }
        golden_bird: { betza: WfF }
        tenacious_falcon: { betza: BvRsW }
        gliding_swallow: { betza: R }
        bears_eyes: { betza: K }
        roaming_boar: { betza: FfsW }
        raiding_falcon: { betza: vRfFsW }
        heavenly_horse: { betza: vN }
        plodding_ox: { betza: K }
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
