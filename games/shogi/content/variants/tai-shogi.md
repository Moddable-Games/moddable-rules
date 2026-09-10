---
playable: true
title: Tai Shogi
slug: tai-shogi
board: "25×25"
players: "2"
parent: shogi
win: Capture the King (and Crown Prince if present)
special: "25×25 historical Japanese Shogi variant. Name means 'Grand Chess.' Approximately 177 piece types per side (354 pieces total) — the largest documented chess variant with complete, verified piece movements for every piece. No drops; captured pieces removed from play. Intermediate in scale between Maka-Dai-Dai Shogi (19×19) and Taikyoku Shogi (36×36). Documented in historical Japanese manuscripts."
verified:
  date: "2026-08-31"
  method: "Desktop web research. Statements here are traceable to the sources below; anything that could not be confirmed is listed under unverified and must not be filled in from memory."
  sources:
    - "en.wikipedia.org/w/index.php?title=Tai_shogi&action=raw - the setup table gives the array by abbreviation and the piece descriptions give each movement in extended Betza. The two were joined to this file's own setup string positionally: 92 codes aligned with ZERO occupancy mismatches, which is what verifies the array here against the published one."
    - "https://en.wikipedia.org/wiki/Tai_shogi"
  confidence: "Lower than the Dai and Tenjiku tables, and deliberately recorded as such. The raw wikitext was unreachable, so what was gathered came through a summarising fetcher already shown to return contradictory notation. Fields were extracted twice with independently worded prompts and only agreeing values kept. Two arithmetic checks passed and are the strongest evidence available: the 93 counts sum to 177, the article's own stated per-side total, and the promotions partition cleanly as 14 gold-promoters, 45 non-promoters and 34 special. Treat as good but unconfirmed, and re-verify against raw wikitext before building."
  unverified:
    - "The 93-row piece table itself, which has NOT been transcribed. It was extracted and sum-verified but not recorded, so the movement of every piece remains to be gathered from raw wikitext."
    - "Vermillion sparrow (suzaku) and Turtle-snake (genbu), whose movement the article gives only as diagram images."
    - "Great elephant, the promoted lion dog, for which no notation is printed. Two passes returned two non-equivalent prose readings, so it must not be encoded."
    - "The long-nosed goblin's promotion target, which is contested. Treat as unstated."
    - "The starting position, which the article gives only as a diagram image."
approximations:
  - feature: "Promotion"
    source: "There are no promotion zones. The vast majority of pieces cannot promote; those that can must promote at the end of their first capturing move."
    engine: "No promotion: promotionZone is 0, so every piece keeps the movement it starts with."
    blocker: "Promotion triggered by the act of capturing is not something the plugin offers. It is the same gap Maka-Dai-Dai declares."
  - feature: "The Emperor's jump"
    source: "The emperor can jump to any empty square on the board."
    engine: "Played, as a universal leaper that captures nothing - so it also threatens nothing, which is why it does not put the opposing emperor in permanent check."
    blocker: "Whether it may jump into check is not stated."
disputed:
  - feature: "Reverse Chariot and Right Chariot sharing a code"
    readings:
      - source: "en.wikipedia.org/wiki/Tai_shogi setup table, where RV is the Reverse Chariot and RC the Right Chariot"
        says: "two distinct pieces"
        describes: "The published array has Reverse Chariots at both ends of the second rank and a Right Chariot at the end of the fifth."
      - source: "This file's setup string before 2026-09-10"
        says: "one piece"
        describes: "Both were written [rc], so the two would have rendered and played as the same piece."
    engine: "two distinct pieces"
    because: "The published array shows them in different places with different names and different movement. The Reverse Chariot is [rv] here now; the collision was this corpus's own and not a disagreement between sources."
engine:
  topology:
    type: grid
    rows: 25
    cols: 25
  players: [sente, gote]
  setup: "[ln][wt][wl][fy][lo][dw][rk][dh][dk][fk][gg][ds][em][dv][gg][fk][dk][dh][rk][dw][lo][fy][wl][ts][ln]/[rv][si][se][kn][ps][ft][bi][fe][we][fr][sg][rg][cr][lg][sg][fr][we][fe][bi][ft][ps][kn][se][si][rv]/[sc][wh][rs][vo][cs][bb][sv][gl][bm][bt][sd][gd][nk][wr][bv][bt][bm][gl][sv][bb][cs][vo][rs][wh][sc]/[sl][wb][fl][nb][su][cc][hf][om][rb][pc][go][ph][li][kr][gt][pc][ok][om][hf][cc][eb][ws][fl][wb][sl]/[rc][vs][wo][eg][st][tg][ig][cg][or][co][rd][hm][de][cp][rd][co][or][cg][ig][tg][st][eg][wo][bd][lc]/[hd][fh][en][dy][fo][sm][vm][vb][sb][pr][ab][ew][ld][ew][ab][pr][sb][vb][vm][sm][fo][dy][en][fh][hd]/[pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw]/7[gb]9[gb]7/25/25/25/25/25/25/25/25/25/7[GB]9[GB]7/[PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW]/[HD][FH][EN][DY][FO][SM][VM][VB][SB][PR][AB][EW][LD][EW][AB][PR][SB][VB][VM][SM][FO][DY][EN][FH][HD]/[LC][BD][WO][EG][ST][TG][IG][CG][OR][CO][RD][CP][DE][HM][RD][CO][OR][CG][IG][TG][ST][EG][WO][VS][RC]/[SL][WB][FL][WS][EB][CC][HF][OM][OK][PC][GT][KR][LI][PH][GO][PC][RB][OM][HF][CC][SU][NB][FL][WB][SL]/[SC][WH][RS][VO][CS][BB][SV][GL][BM][BT][BV][WR][NK][GD][SD][BT][BM][GL][SV][BB][CS][VO][RS][WH][SC]/[RV][SI][SE][KN][PS][FT][BI][FE][WE][FR][SG][LG][CR][RG][SG][FR][WE][FE][BI][FT][PS][KN][SE][SI][RV]/[LN][TS][WL][FY][LO][DW][RK][DH][DK][FK][GG][DV][EM][DS][GG][FK][DK][DH][RK][DW][LO][FY][WL][WT][LN]"
  vocabulary:
    angry_boar: { symbols: { "0": AB, "1": ab } }
    blind_bear: { symbols: { "0": BB, "1": bb } }
    blue_dragon: { symbols: { "0": BD, "1": bd } }
    bishop: { symbols: { "0": BI, "1": bi } }
    blind_monkey: { symbols: { "0": BM, "1": bm } }
    blind_tiger: { symbols: { "0": BT, "1": bt } }
    buddhist_devil: { symbols: { "0": BV, "1": bv } }
    chinese_cock: { symbols: { "0": CC, "1": cc } }
    copper_general: { symbols: { "0": CG, "1": cg } }
    coiled_serpent: { symbols: { "0": CO, "1": co } }
    capricorn: { symbols: { "0": CP, "1": cp } }
    prince: { symbols: { "0": CR, "1": cr } }
    cat_sword: { symbols: { "0": CS, "1": cs } }
    drunken_elephant: { symbols: { "0": DE, "1": de } }
    dragon_horse: { symbols: { "0": DH, "1": dh } }
    dragon_king: { symbols: { "0": DK, "1": dk } }
    dark_spirit: { symbols: { "0": DS, "1": ds } }
    deva: { symbols: { "0": DV, "1": dv } }
    dove: { symbols: { "0": DW, "1": dw } }
    donkey: { symbols: { "0": DY, "1": dy } }
    eastern_barbarian: { symbols: { "0": EB, "1": eb } }
    earth_general: { symbols: { "0": EG, "1": eg } }
    emperor: { symbols: { "0": EM, "1": em } }
    enchanted_badger: { symbols: { "0": EN, "1": en } }
    evil_wolf: { symbols: { "0": EW, "1": ew } }
    fierce_eagle: { symbols: { "0": FE, "1": fe } }
    flying_horse: { symbols: { "0": FH, "1": fh } }
    queen: { symbols: { "0": FK, "1": fk } }
    ferocious_leopard: { symbols: { "0": FL, "1": fl } }
    flying_ox: { symbols: { "0": FO, "1": fo } }
    free_demon: { symbols: { "0": FR, "1": fr } }
    free_dream_eater: { symbols: { "0": FT, "1": ft } }
    flying_dragon: { symbols: { "0": FY, "1": fy } }
    go_between: { symbols: { "0": GB, "1": gb } }
    guardian_of_the_gods: { symbols: { "0": GD, "1": gd } }
    gold_general: { symbols: { "0": GG, "1": gg } }
    golden_deer: { symbols: { "0": GL, "1": gl } }
    golden_bird: { symbols: { "0": GO, "1": go } }
    great_dragon: { symbols: { "0": GT, "1": gt } }
    howling_dog: { symbols: { "0": HD, "1": hd } }
    horned_falcon: { symbols: { "0": HF, "1": hf } }
    hook_mover: { symbols: { "0": HM, "1": hm } }
    iron_general: { symbols: { "0": IG, "1": ig } }
    knight: { symbols: { "0": KN, "1": kn } }
    kirin: { symbols: { "0": KR, "1": kr } }
    left_chariot: { symbols: { "0": LC, "1": lc } }
    lion_dog: { symbols: { "0": LD, "1": ld } }
    left_general: { symbols: { "0": LG, "1": lg } }
    lion: { symbols: { "0": LI, "1": li } }
    lance: { symbols: { "0": LN, "1": ln } }
    long_nosed_goblin: { symbols: { "0": LO, "1": lo } }
    northern_barbarian: { symbols: { "0": NB, "1": nb } }
    neighbor_king: { symbols: { "0": NK, "1": nk } }
    old_kite: { symbols: { "0": OK, "1": ok } }
    old_monkey: { symbols: { "0": OM, "1": om } }
    old_rat: { symbols: { "0": OR, "1": or } }
    peacock: { symbols: { "0": PC, "1": pc } }
    phoenix: { symbols: { "0": PH, "1": ph } }
    prancing_stag: { symbols: { "0": PR, "1": pr } }
    poison_snake: { symbols: { "0": PS, "1": ps } }
    pawn: { symbols: { "0": PW, "1": pw } }
    rushing_bird: { symbols: { "0": RB, "1": rb } }
    right_chariot: { symbols: { "0": RC, "1": rc } }
    reclining_dragon: { symbols: { "0": RD, "1": rd } }
    right_general: { symbols: { "0": RG, "1": rg } }
    rook: { symbols: { "0": RK, "1": rk } }
    rams_head_soldier: { symbols: { "0": RS, "1": rs } }
    reverse_chariot: { symbols: { "0": RV, "1": rv } }
    standard_bearer: { symbols: { "0": SB, "1": sb } }
    racing_chariot: { symbols: { "0": SC, "1": sc } }
    she_devil: { symbols: { "0": SD, "1": sd } }
    soaring_eagle: { symbols: { "0": SE, "1": se } }
    silver_general: { symbols: { "0": SG, "1": sg } }
    side_dragon: { symbols: { "0": SI, "1": si } }
    soldier: { symbols: { "0": SL, "1": sl } }
    side_mover: { symbols: { "0": SM, "1": sm } }
    stone_general: { symbols: { "0": ST, "1": st } }
    southern_barbarian: { symbols: { "0": SU, "1": su } }
    silver_hare: { symbols: { "0": SV, "1": sv } }
    tile_general: { symbols: { "0": TG, "1": tg } }
    turtle_snake: { symbols: { "0": TS, "1": ts } }
    violent_bear: { symbols: { "0": VB, "1": vb } }
    vertical_mover: { symbols: { "0": VM, "1": vm } }
    violent_ox: { symbols: { "0": VO, "1": vo } }
    vermillion_sparrow: { symbols: { "0": VS, "1": vs } }
    water_buffalo: { symbols: { "0": WB, "1": wb } }
    white_elephant: { symbols: { "0": WE, "1": we } }
    white_horse: { symbols: { "0": WH, "1": wh } }
    whale: { symbols: { "0": WL, "1": wl } }
    wood_general: { symbols: { "0": WO, "1": wo } }
    wrestler: { symbols: { "0": WR, "1": wr } }
    western_barbarian: { symbols: { "0": WS, "1": ws } }
    white_tiger: { symbols: { "0": WT, "1": wt } }
  plugins:
    shogi:
      drops: false
      promotionZone: 0
      royalType: emperor
      pieceMoves:
        angry_boar: { betza: "W" }
        blind_bear: { betza: "FbR" }
        blue_dragon: { betza: "rlR[fr]BfbR2fF" }
        bishop: { betza: "B" }
        blind_monkey: { betza: "FrlW" }
        blind_tiger: { betza: "FrlbW" }
        buddhist_devil: { betza: "fB3rlbW" }
        chinese_cock: { betza: "rlbWfF" }
        copper_general: { betza: "fbWfF" }
        coiled_serpent: { betza: "fbWbF" }
        capricorn: { betza: "BmaB" }
        prince: { betza: "K" }
        cat_sword: { betza: "F" }
        drunken_elephant: { betza: "FfrlW" }
        dragon_horse: { betza: "WB" }
        dragon_king: { betza: "FR" }
        dark_spirit: { type: leaper, offsets: [[0,1],[1,-1]], directional: true }
        deva: { type: leaper, offsets: [[0,-1],[1,1]], directional: true }
        dove: { betza: "R2B5" }
        donkey: { betza: "WfbD" }
        eastern_barbarian: { betza: "fbR2rlWfF" }
        earth_general: { betza: "fbW" }
        # "The emperor can jump to any empty square on the board" - it moves
        # everywhere and captures nothing, so it threatens nothing either.
        emperor: { type: universal, quiet: true }
        enchanted_badger: { betza: "frlR2" }
        evil_wolf: { betza: "frlK" }
        fierce_eagle: { betza: "fKrlR2bB2" }
        flying_horse: { betza: "fB2W" }
        queen: { betza: "Q" }
        ferocious_leopard: { betza: "FfbW" }
        flying_ox: { betza: "BfbR" }
        free_demon: { betza: "rlRBfbR5" }
        free_dream_eater: { betza: "fbRBrlR5" }
        flying_dragon: { betza: "B2" }
        go_between: { betza: "fbW" }
        guardian_of_the_gods: { betza: "R3fF" }
        gold_general: { betza: "WfF" }
        golden_deer: { betza: "fBbB2" }
        golden_bird: { betza: "fbRB3rlR2" }
        great_dragon: { betza: "rlRB3fbR2" }
        howling_dog: { betza: "fRbW" }
        horned_falcon: { betza: "BrlbRf[avW]fD" }
        hook_mover: { betza: "RmaR" }
        iron_general: { betza: "fK" }
        knight: { betza: "ffN" }
        kirin: { betza: "FD" }
        left_chariot: { betza: "fR[fl][br]BbW" }
        lion_dog: { type: area, dirs: all, steps: 3, sameLine: true }
        left_general: { betza: "FfrbW" }
        lion: { betza: "NAD[aK]" }
        lance: { betza: "fR" }
        long_nosed_goblin: { betza: "WmBaB" }
        northern_barbarian: { betza: "fB2rlWF" }
        neighbor_king: { betza: "K" }
        old_kite: { betza: "R2fF" }
        old_monkey: { betza: "FbW" }
        old_rat: { betza: "fB2bR2" }
        peacock: [{ type: bent, first: [[-1,-1],[-1,1]], firstSteps: any, second: perpendicular, minSecondLeg: 0, directional: true }, { type: rider, dirs: [[1,-1],[1,1]], maxSteps: 2, directional: true }]
        phoenix: { betza: "WA" }
        prancing_stag: { betza: "rlR2FfW" }
        poison_snake: { betza: "rlWfDbA" }
        pawn: { betza: "fW" }
        rushing_bird: { betza: "BfrlR" }
        right_chariot: { betza: "fR[fr][bl]BbW" }
        reclining_dragon: { betza: "WbF" }
        right_general: { betza: "FflbW" }
        rook: { betza: "R" }
        rams_head_soldier: { betza: "fB" }
        reverse_chariot: { betza: "fbR" }
        standard_bearer: { betza: "Q2fQ" }
        racing_chariot: { betza: "RbF" }
        she_devil: { betza: "R5B2" }
        soaring_eagle: { betza: "RbBf[avF]fA" }
        silver_general: { betza: "FfW" }
        side_dragon: { betza: "frlRbW" }
        soldier: { betza: "RbB" }
        side_mover: { betza: "rlRW" }
        stone_general: { betza: "fF" }
        southern_barbarian: { betza: "bB2rlWF" }
        silver_hare: { betza: "fB2bB" }
        tile_general: { betza: "fFbW" }
        turtle_snake: { betza: "[fr][bl]BW" }
        violent_bear: { betza: "fB2rlW" }
        vertical_mover: { betza: "fbRW" }
        violent_ox: { betza: "R2" }
        vermillion_sparrow: { betza: "[fr][bl]BW[br]F" }
        water_buffalo: { betza: "rlRBfbR2" }
        white_elephant: { betza: "bBR2fB2" }
        white_horse: { betza: "fQbR" }
        whale: { betza: "fRbQ" }
        wood_general: { betza: "fB2" }
        wrestler: { betza: "B3rlW" }
        western_barbarian: { betza: "rlR2fbWfF" }
        white_tiger: { betza: "fbR[fl]BrlR2fF" }
  render:
    cellSize: 14
  pieces:
    set: mce-shogi-fairy
---

## Tai Shogi

{{svg:tai-shogi-board.svg "Tai Shogi — starting position"}}

Tai Shogi (大将棋, *Grand Chess*) is a historical Japanese Shogi variant played on a 25×25 board (625 squares) with approximately 177 piece types per side (354 pieces total). It occupies the scale tier between **Maka-Dai-Dai Shogi** (19×19, ~96 piece types) and **Taikyoku Shogi** (36×36, 402 piece types). Tai Shogi holds the distinction of being the largest chess variant with **fully documented and verified movement rules** for every piece.

No game record of Tai Shogi being played to completion has survived. Whether it was ever genuinely played at this scale is uncertain.

### The Board

25×25 grid (625 squares). Standard Shogi orientation: Sente (First Player) at the bottom, Gote (Second Player) at the top.

Each player's pieces span approximately the first 12 ranks from their side, with several ranks of empty space in the centre.

### Scale

| Dimension | Value |
|---|---|
| Board | 25×25 (625 squares) |
| Pieces per side | ~177 piece types |
| Total pieces | ~354 (both sides combined) |
| Board coverage (start) | Each player occupies roughly 12 ranks |

### Piece Set

Tai Shogi includes all pieces found in Maka-Dai-Dai Shogi (19×19) plus many additional types unique to this scale. Piece categories include:

- All standard Shogi pieces and their promoted forms
- All Chu Shogi additions (including Lion power pieces)
- Additional pieces from Dai Shogi, Taikyoku-Dai Shogi, and larger variants
- Pieces with unique movement patterns documented only in Tai Shogi and Taikyoku
- Ultra-powerful pieces: pieces that can reach any square in a direction without stopping
- Contagious-promotion pieces (as in Maka-Dai-Dai: Teaching King, Buddhist Spirit)

### Royals

- **King** — royal; does not promote
- **Crown Prince** (promoted Drunk Elephant) — royal once promoted

Win: capture the opponent's sole remaining Emperor or Prince. Because the Drunken Elephant also promotes to Prince, as many as three royal pieces may need capturing. While a player holds more than one royal there is no check obligation; royals are simply capturable.

### Promotion

- There are **no promotion zones**. Promotion is compulsory, at the end of a piece's first capturing move
- This needs a per-piece "has captured" flag persisting across turns, since the trigger is the piece's first capture rather than anything readable from the position
- Promotion resolves at **end of turn**, not at the moment of capture. A Lion capturing twice makes both captures unpromoted and promotes once, afterwards. An engine promoting mid-move gets this wrong
- No drops — captured pieces are permanently removed from play
- Each piece has a fixed promoted form

### General Movement Categories

Pieces in Tai Shogi fall into these broad movement categories:
- **Generals:** steppers that move 1 square in limited directions (Gold, Silver, Copper, Iron, Stone, Tile, Elephant, Earth generals)
- **Riders:** unlimited sliders (Rook, Bishop, Lance, Reverse Chariot, Side Mover, Vertical Mover)
- **Hoppers:** leap over intervening pieces (Knight, Kirin, Phoenix)
- **Lion-power pieces:** take two moves per turn; may capture twice; may pass
- **Lion Dog class:** up to 3 steps along any ray
- **Ultra-powerful sliders:** can turn corners in their path (Hook Mover, Capricorn)
- **Universal leaper** (Emperor): jumps to any empty square, may jump to and capture any non-royal piece anywhere, and may capture a royal only if that royal is unprotected. The `(U)` in the source is a page-local shorthand for this, not a Betza atom

### Historical Context

Tai Shogi is documented in historical Japanese manuscripts alongside the other large Shogi variants. The chessvariants.com entry for Tai Shogi links only to an external Japanese-language source (the shogi.net documentation). Murray's *A History of Chess* covers the Shogi variant family including large games in this scale range.

The game represents the theoretical maximum scale at which complete move documentation was maintained in historical records. Taikyoku Shogi (36×36) exceeds it in scale but is documented in only one known manuscript.

### Attribution

Tai Shogi is documented in historical Japanese manuscripts. English documentation is limited; the primary Japanese-language source is referenced via chessvariants.com/link/TaiShogi.
