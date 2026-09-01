---
title: Dai Shogi
playable: true
slug: dai-shogi
board: "15×15"
players: "2"
parent: shogi
win: Capture all opponent royal pieces
special: "Historical Japanese 15×15 large Shogi variant; precursor to Chu Shogi. 65 pieces per side including Lion (double-mover), Kirin, Phoenix, and Drunk Elephant (promotes to Crown Prince, a second royal). No drops. Extinction royalty: player loses only when their last royal is captured."
verified:
  date: "2026-08-31"
  method: "Desktop web research. Statements here are traceable to the sources below; anything that could not be confirmed is listed under unverified and must not be filled in from memory."
  sources:
    - "https://en.wikipedia.org/wiki/Dai_shogi"
    - "https://en.wikipedia.org/w/index.php?title=Dai_shogi&action=raw (raw wikitext, 2026-09-01, source of the piece table)"
  unverified:
    - "Whether the knight gets a second chance to promote on reaching the far rank."
    - "The finer JCSA repetition deviation rules, which the source marks as presumed rather than attested."
engine:
  topology:
    type: grid
    rows: 15
    cols: 15
  players: [sente, gote]
  setup: "[ln][kn][st][ig][cg][sg][gg][ki][gg][sg][cg][ig][st][kn][ln]/[rc]1[ct]1[fl]1[bt][de][bt]1[fl]1[ct]1[rc]/1[vo]1[ab]1[ew][ph][li][kr][ew]1[ab]1[vo]1/[rk][fy][sm][vm][bi][dh][dk][fk][dk][dh][bi][vm][sm][fy][rk]/[pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw]/4[gb]5[gb]4/15/15/15/4[GB]5[GB]4/[PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW]/[RK][FY][SM][VM][BI][DH][DK][FK][DK][DH][BI][VM][SM][FY][RK]/1[VO]1[AB]1[EW][KR][LI][PH][EW]1[AB]1[VO]1/[RC]1[CT]1[FL]1[BT][DE][BT]1[FL]1[CT]1[RC]/[LN][KN][ST][IG][CG][SG][GG][KI][GG][SG][CG][IG][ST][KN][LN]"
  render:
    cellSize: 22
  vocabulary:
    king: { symbols: { "0": KI, "1": ki } }
    gold: { symbols: { "0": GG, "1": gg } }
    silver: { symbols: { "0": SG, "1": sg } }
    copper: { symbols: { "0": CG, "1": cg } }
    iron_general: { symbols: { "0": IG, "1": ig } }
    stone_general: { symbols: { "0": ST, "1": st } }
    lance: { symbols: { "0": LN, "1": ln } }
    knight: { symbols: { "0": KN, "1": kn } }
    reverse_chariot: { symbols: { "0": RC, "1": rc } }
    cat_sword: { symbols: { "0": CT, "1": ct } }
    leopard: { symbols: { "0": FL, "1": fl } }
    blind_tiger: { symbols: { "0": BT, "1": bt } }
    elephant: { symbols: { "0": DE, "1": de } }
    violent_ox: { symbols: { "0": VO, "1": vo } }
    angry_boar: { symbols: { "0": AB, "1": ab } }
    evil_wolf: { symbols: { "0": EW, "1": ew } }
    phoenix: { symbols: { "0": PH, "1": ph } }
    lion: { symbols: { "0": LI, "1": li } }
    kirin: { symbols: { "0": KR, "1": kr } }
    rook: { symbols: { "0": RK, "1": rk } }
    flying_dragon: { symbols: { "0": FY, "1": fy } }
    side_mover: { symbols: { "0": SM, "1": sm } }
    vertical_mover: { symbols: { "0": VM, "1": vm } }
    bishop: { symbols: { "0": BI, "1": bi } }
    dragon_horse: { symbols: { "0": DH, "1": dh } }
    dragon_king: { symbols: { "0": DK, "1": dk } }
    queen: { symbols: { "0": FK, "1": fk } }
    pawn: { symbols: { "0": PW, "1": pw } }
    go_between: { symbols: { "0": GB, "1": gb } }
  plugins:
    shogi:
      drops: false
      promotionZone: 5
      promotionMap:
        pawn: gold
        knight: gold
        angry_boar: gold
        cat_sword: gold
        evil_wolf: gold
        iron_general: gold
        stone_general: gold
        violent_ox: gold
        flying_dragon: gold
        kirin: lion
        phoenix: queen
        rook: dragon_king
        bishop: dragon_horse
        gold: rook
        silver: vertical_mover
        copper: side_mover
        leopard: bishop
        lance: white_horse
        reverse_chariot: whale
        blind_tiger: flying_stag
        vertical_mover: flying_ox
        side_mover: free_boar
        dragon_king: soaring_eagle
        dragon_horse: horned_falcon
        elephant: prince
        go_between: elephant
      pieceMoves:
        copper:
          type: leaper
          offsets: [[-1,-1],[-1,0],[-1,1],[1,0]]
          directional: true
        iron_general:
          type: leaper
          offsets: [[-1,-1],[-1,0],[-1,1]]
          directional: true
        stone_general:
          type: leaper
          offsets: [[-1,-1],[-1,1]]
          directional: true
        cat_sword:
          type: leaper
          offsets: [[-1,-1],[-1,1],[1,-1],[1,1]]
        angry_boar:
          type: leaper
          offsets: [[-1,0],[1,0],[0,-1],[0,1]]
        evil_wolf:
          type: leaper
          offsets: [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1]]
          directional: true
        leopard:
          type: leaper
          offsets: [[-1,-1],[-1,1],[1,-1],[1,1],[-1,0],[1,0]]
        blind_tiger:
          type: leaper
          offsets: [[-1,-1],[-1,1],[1,-1],[1,1],[0,-1],[0,1],[1,0]]
          directional: true
        elephant:
          type: leaper
          offsets: [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,1]]
          directional: true
        go_between:
          type: leaper
          offsets: [[-1,0],[1,0]]
        reverse_chariot:
          type: rider
          dirs: [[-1,0],[1,0]]
        violent_ox:
          type: rider
          dirs: orthogonal
          maxSteps: 2
        flying_dragon:
          type: rider
          dirs: diagonal
          maxSteps: 2
        kirin:
          type: compose
          parts:
            - type: leaper
              offsets: [[-1,-1],[-1,1],[1,-1],[1,1]]
            - type: leaper
              offsets: [[-2,0],[2,0],[0,-2],[0,2]]
        phoenix:
          type: compose
          parts:
            - type: leaper
              offsets: [[-1,0],[1,0],[0,-1],[0,1]]
            - type: leaper
              offsets: [[-2,-2],[-2,2],[2,-2],[2,2]]
        side_mover:
          type: compose
          parts:
            - type: rider
              dirs: [[0,-1],[0,1]]
            - type: leaper
              offsets: [[-1,0],[1,0]]
        vertical_mover:
          type: compose
          parts:
            - type: rider
              dirs: [[-1,0],[1,0]]
            - type: leaper
              offsets: [[0,-1],[0,1]]
        dragon_horse:
          type: compose
          parts:
            - type: rider
              dirs: diagonal
            - type: rider
              dirs: orthogonal
              maxSteps: 1
        dragon_king:
          type: compose
          parts:
            - type: rider
              dirs: orthogonal
            - type: rider
              dirs: diagonal
              maxSteps: 1
        queen:
          type: rider
          dirs: all
        lion:
          type: leaper
          offsets: [[-2,-2],[-2,-1],[-2,0],[-2,1],[-2,2],[-1,-2],[-1,-1],[-1,0],[-1,1],[-1,2],[0,-2],[0,-1],[0,1],[0,2],[1,-2],[1,-1],[1,0],[1,1],[1,2],[2,-2],[2,-1],[2,0],[2,1],[2,2]]
        prince:
          type: rider
          dirs: all
          maxSteps: 1
        flying_stag:
          type: compose
          parts:
            - type: rider
              dirs: [[-1,0],[1,0]]
            - type: rider
              dirs: all
              maxSteps: 1
        flying_ox:
          type: compose
          parts:
            - type: rider
              dirs: diagonal
            - type: rider
              dirs: [[-1,0],[1,0]]
        free_boar:
          type: compose
          parts:
            - type: rider
              dirs: diagonal
            - type: rider
              dirs: [[0,-1],[0,1]]
        whale:
          type: compose
          parts:
            - type: rider
              dirs: [[-1,0]]
              directional: true
            - type: rider
              dirs: [[1,0],[1,-1],[1,1]]
              directional: true
        white_horse:
          type: compose
          parts:
            - type: rider
              dirs: [[-1,0],[-1,-1],[-1,1]]
              directional: true
            - type: rider
              dirs: [[1,0]]
              directional: true
        soaring_eagle:
          type: compose
          parts:
            - type: rider
              dirs: orthogonal
            - type: rider
              dirs: [[1,-1],[1,1]]
              directional: true
            - type: leaper
              offsets: [[-1,-1],[-1,1],[-2,-2],[-2,2]]
              directional: true
        horned_falcon:
          type: compose
          parts:
            - type: rider
              dirs: diagonal
            - type: rider
              dirs: [[0,-1],[0,1],[1,0]]
              directional: true
            - type: leaper
              offsets: [[-1,0],[-2,0]]
              directional: true
  pieces:
    set: mce-shogi-fairy
---

## Dai Shogi

{{svg:dai-shogi-board.svg "Dai Shogi — starting position"}}

Dai Shogi (大将棋, "Large Chess") is a historical Japanese chess variant played on a 15×15 board with 65 pieces per side. It is the direct predecessor of Chu Shogi and was played in Japan during the medieval period. Compared to Chu Shogi, Dai Shogi has 16 extra piece types (all promoting to Gold General) and plays significantly longer due to the larger board and slower steppers.

### Starting Position

Pieces occupy ranks 1–5 (Sente) and ranks 11–15 (Gote). The opposing camp is a 180-degree rotation rather than a mirror: where the bottom player has Kirin · Lion · Phoenix, the top player has Phoenix · Lion · Kirin.

**Rank 1 (left to right, files a–o):**
Lance · Knight · Stone General · Iron General · Copper General · Silver General · Gold General · King · Gold General · Silver General · Copper General · Iron General · Stone General · Knight · Lance

**Rank 2:**
Reverse Chariot (a2, o2) · Cat Sword (c2, m2) · Ferocious Leopard (e2, k2) · Blind Tiger (g2, i2) · Drunk Elephant (h2)

**Rank 3:**
Violent Ox (b3, n3) · Angry Boar (d3, l3) · Evil Wolf (f3, j3) · Kirin (g3) · Lion (h3) · Phoenix (i3)

**Rank 4:**
Rook (a4, o4) · Flying Dragon (b4, n4) · Side Mover (c4, m4) · Vertical Mover (d4, l4) · Bishop (e4, k4) · Dragon Horse (f4, j4) · Dragon King (g4, i4) · Free King (h4)

**Rank 5 (Pawn rank):**
Pawns on all 15 files.

**Rank 6:**
Go-Betweens at e6 and k6, on their own rank ahead of the pawns, as in Chu Shogi.

### Pieces

Most pieces are directional sliders or steppers with ranges of infinite, 2, or 1 (step). Key unique pieces:

**Lion (h3):** Double-mover. Makes up to 2 King steps per turn, changing direction freely, including returning to the starting square. Can jump on the first step. May annihilate an adjacent enemy (step there and step back without moving), make a hit-and-run (annihilate and continue to an adjacent empty square), or make a double capture.

**Kirin (g3):** Leaps to the first diagonal square or the second orthogonal square (FD).

**Phoenix (i3):** Leaps to the first orthogonal square or the second diagonal square (WA).

**Drunk Elephant (h2):** Steps in all directions except straight backward (FfsW). Promotes to Crown Prince.

**Go-Between (e6, k6):** Steps vertically only (vW). Promotes to Drunk Elephant.

**Flying Dragon (b4, n4):** Leaps to the second diagonal square in any direction (F2).

**Ferocious Leopard (e2, k2):** Steps diagonally or vertically (FvW).

**Blind Tiger (g2, i2):** Steps diagonally or sideways-backward (FbsW).

### Piece Table

All 29 types carry a notation in the source; none is diagram-only. Movement is in
extended Betza notation — see Reading the Piece Tables in the Shogi rulebook.

| Piece | Romaji | Count | Movement | Promotes to |
|---|---|---|---|---|
| King | osho / gyokusho | 1 | `K` | none |
| Queen (free king) | honno | 1 | `Q` | none |
| Lion | shishi | 1 | `KNADcaKmcabK` | none |
| Dragon king | ryuo | 2 | `RF` | soaring eagle |
| Dragon horse | ryuma | 2 | `BW` | horned falcon |
| Rook | hisha | 2 | `R` | dragon king |
| Bishop | kakugyo | 2 | `B` | dragon horse |
| Kirin | kirin | 1 | `FD` | lion |
| Phoenix | hoo | 1 | `WA` | queen |
| Violent ox | mogyu | 2 | `R2` | gold general |
| Flying dragon | hiryu | 2 | `B2` | gold general |
| Drunk elephant | suizo | 1 | `FfrlW` | prince |
| Blind tiger | moko | 2 | `FrlbW` | flying stag |
| Ferocious leopard | mohyo | 2 | `FfbW` | bishop |
| Gold general | kinsho | 2 | `WfF` | rook |
| Silver general | ginsho | 2 | `FfW` | vertical mover |
| Copper general | dosho | 2 | `fKbW` | side mover |
| Angry boar | shincho | 2 | `W` | gold general |
| Cat sword | myojin | 2 | `F` | gold general |
| Vertical mover | shugyo | 2 | `WfbR` | flying ox |
| Side mover | ogyo | 2 | `WrlR` | free boar |
| Reverse chariot | hensha | 2 | `fbR` | whale |
| Lance | kyosha | 2 | `fR` | white horse |
| Knight | keima | 2 | `ffN` | gold general |
| Evil wolf | akuro | 2 | `frlK` | gold general |
| Iron general | tessho | 2 | `fK` | gold general |
| Stone general | sekisho | 2 | `fF` | gold general |
| Go-between | chunin | 2 | `fbW` | drunk elephant |
| Pawn | fuhyo | 15 | `fW` | gold general |

Two pieces are approximated by the engine, and both are the same class of gap
Chu Shogi already ships with. The Lion is modelled as a leaper reaching all 24
squares within two steps, which is the right reach, but its double move is not
modelled, so it cannot capture twice in a turn, make a hit-and-run, or return to
its own square. The Soaring Eagle and Horned Falcon are given their slides plus
the forward squares they reach, without the area-move continuation.

Promoted-only forms:

| Piece | Romaji | Movement | Promotes from |
|---|---|---|---|
| Prince | taishi | `K` | drunk elephant (counts as a second king) |
| Soaring eagle | hiju | `RbBf[avF]fA` | dragon king |
| Horned falcon | kakuo | `BrlbRf[avW]fD` | dragon horse |
| Flying stag | hiroku | `fbRK` | blind tiger |
| Flying ox | higyu | `BfbR` | vertical mover |
| Free boar | honcho | `BrlR` | side mover |
| Whale | keigei | `fRbQ` | reverse chariot |
| White horse | hakku | `fQbR` | lance |

### Promotion

Pieces may promote upon entering the promotion zone (opponent's last 5 ranks, ranks 11–15 for Sente). Promotion is optional unless the piece would have no legal moves in unpromoted form. Each piece promotes at most once, to a predefined form:

Kirin → Lion · Phoenix → Free King · Dragon King → Soaring Eagle · Rook → Dragon King · Gold General → Rook · Pawn → Gold General · Dragon Horse → Horned Falcon · Bishop → Dragon Horse · Ferocious Leopard → Bishop · Vertical Mover → Flying Ox (BvR) · Silver General → Vertical Mover · Lance → White Horse (vRfB) · Reverse Chariot → Whale (vRbB) · Blind Tiger → Flying Stag (vRFsW) · Drunk Elephant → Crown Prince · Go Between → Drunk Elephant · Side Mover → Free Boar (BsR) · Copper General → Side Mover · Stone General → Gold General · Iron General → Gold General · Knight → Gold General · Angry Boar → Gold General · Cat Sword → Gold General · Evil Wolf → Gold General · Violent Ox → Gold General · Flying Dragon → Gold General

King, Lion, and Free King do not promote.

### Rules

**Win:** Capture all opponent royal pieces. A player loses only when their last royal (King or Crown Prince) is captured.

**Crown Prince / Extinction Royalty:** The Drunk Elephant promotes to Crown Prince, a second royal King. A player with both King and Crown Prince can afford to lose one — they only lose when the last royal is taken.

**No Check:** There is no prohibition against moving into or remaining in check. Stalemate (by convention) is a win for the stalemating player.

**No Drops:** Captured pieces are permanently removed from the game.

**Declining Promotion:** A piece that declines promotion on entering the zone may afterwards promote only by capturing, and that restriction resets when it leaves the zone and re-enters. This is per-piece state and cannot be derived from the position alone.

**Repetition:** Repetition of position is forbidden. A player delivering perpetual check must deviate. A player perpetually chasing (opponent is always evading, not threatening) must also deviate. Purely positional repetitions with neither side attacking are draws.

### Attribution

Historical Japanese game, medieval period. Rules documented from chessvariants.com/rules/dai-shogi (H. G. Muller, 2015).
