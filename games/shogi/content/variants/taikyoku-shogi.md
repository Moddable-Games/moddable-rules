---
playable: true
title: Taikyoku Shogi
slug: taikyoku-shogi
board: "36×36"
players: "2"
parent: shogi
win: Capture the King and Crown Prince
special: "36×36 historical Japanese Shogi variant meaning 'Ultimate Chess.' The largest chess variant ever documented. 402 pieces per side (804 total on 1,296 squares). Whether it was ever played to completion is disputed — a single game is estimated to require 10,000+ moves. Documented in a single known Japanese manuscript. L. Lynn Smith transcription; source: chessvariants.com."
verified:
  date: "2026-08-31"
  method: "Desktop web research. Statements here are traceable to the sources below; anything that could not be confirmed is listed under unverified and must not be filled in from memory."
  sources:
    - "ja.wikipedia.org/w/index.php?title=大局将棋&action=raw - the English article gives no legend for the abbreviations in its own setup table and its setup SVG is paths rather than text, so neither names the pieces. The Japanese article carries the whole array in kanji, position by position. Joining it to this file's setup string maps all 209 codes with ZERO occupancy mismatches, and the English article's piece tables turn those kanji into names."
    - "https://en.wikipedia.org/wiki/Taikyoku_shogi"
  decisions:
    - "Promotion must be made configurable. Wikipedia states plainly that complete rules have not been found and that sources vary: either a piece promotes on its first capture, or a player must promote on entering the far 11 ranks. There is no single correct answer available, and the choice has an engine cost - the first reading requires a per-piece has-captured flag persisting across turns and the second does not."
  unverified:
    - "The complete rules. The game was rediscovered after centuries of obscurity and Wikipedia warns it is difficult to say exactly what all the rules were."
approximations:
  - feature: "Promotion"
    source: "There are no promotion zones. The vast majority of pieces cannot promote; those that can must promote at the end of their first capturing move."
    engine: "No promotion: promotionZone is 0, so every piece keeps the movement it starts with."
    blocker: "Promotion triggered by the act of capturing is not something the plugin offers. The same gap is declared on Tai and Maka-Dai-Dai."
  - feature: "Pieces shared with other variants in the family"
    source: "The article describes 246 pieces by name and does not describe every piece on the board; it notes for instance that the lance's movement is shared with the ox chariot and fierce tiger."
    engine: "Fourteen of the 209 types take their movement from the same named piece in Tai, Tenjiku, Wa or standard Shogi, where this article does not describe it. Each is the same piece under the same name in the same family."
    blocker: "Wikipedia's Taikyoku article does not restate every piece it shares with the smaller variants."
disputed:
  - feature: "Two piece types sharing one code"
    readings:
      - source: "ja.wikipedia.org/wiki/大局将棋 initial-position table, which places 山鷲 twice and 𠵇犬 twice"
        says: "left and right variants"
        describes: "The article names a left mountain eagle and a right mountain eagle with mirror-opposite moves, and a pair of howling dogs."
      - source: "This file's setup string before 2026-09-10"
        says: "one piece each"
        describes: "Both mountain eagles were [me] and both howling dogs shared a name, so each pair would have played as a single piece."
    engine: "left and right variants"
    because: "The published array places them symmetrically and the prose gives the mountain eagles opposite moves, so they are two pieces. Split here into [ml]/[mr] and left/right howling dog. The collision was this corpus's own, not a disagreement between sources."
engine:
  topology:
    type: grid
    rows: 36
    cols: 36
  players: [sente, gote]
  setup: "[ln][wt][rq][wl][fd][ml][lo][bc][rh][fr][ed][dn][ft][fk][re][rg][gg][cr][ki][gg][lg][re][fk][ft][cd][ed][fr][rh][bc][lo][mr][fd][wl][rq][ts][ln]/[rc][fp][md][fs][cf][ra][fm][ms][rp][rn][ss][gv][rj][ru][ns][gd][sg][de][nk][sg][wr][bv][ru][rj][gv][ss][rn][rp][ms][fm][ra][cf][fs][md][we][rc]/[gc][sd][rf][rl][bg][rr][rv][ri][bo][wn][fu][rb][ok][pc][wq][fi][cg][pm][km][cg][fi][wq][pc][ok][rb][fu][wn][bo][la][lt][rr][bg][rl][rf][sd][gc]/[sa][vb][kn][pg][ck][pu][hg][og][ct][si][sr][gl][li][ca][gs][vd][wx][vg][gr][wx][vd][gs][ca][li][gl][sr][si][ct][og][hg][pu][ck][pg][kn][vb][sa]/[tc][ce][bi][rk][sw][fa][mf][vr][sl][ll][cl][cu][rx][rs][vo][gt][go][ds][dv][go][gt][vo][rs][rx][cu][cl][ll][sl][vr][mf][fa][sw][rk][bi][ce][tc]/[wc][wh][hr][sm][pr][wb][fl][fe][fy][ps][fn][sc][bl][wg][fg][ph][hm][lu][gu][cp][ky][fg][wg][bl][sc][fn][ps][fy][fe][fl][wb][pr][sm][hl][wh][wc]/[tl][vw][sx][dy][fh][vi][ab][ew][lh][fc][om][cc][nb][su][va][vf][tf][cn][rm][tf][vf][va][eb][ws][cc][om][fc][lh][ew][ab][vi][fh][dy][sx][vw][tl]/[ec][vs][en][hn][so][cm][cs][wi][bm][bt][oc][sf][bb][or][sq][co][rd][fq][lw][rd][co][sq][or][bb][sf][oc][bt][bm][wi][cs][cm][so][hn][en][bd][ec]/[ch][sn][vt][wf][rw][mg][ff][hs][wo][os][eg][bs][st][ls][tg][ba][ig][ga][gm][ig][ba][tg][ls][st][bs][eg][os][wo][hs][ff][mg][rw][wf][vt][sn][ch]/[rt][sk][vm][fo][lb][vp][vh][bu][dh][dk][wd][hf][se][sp][vl][sv][sb][ro][ld][sb][sv][vl][sp][se][hf][wd][dk][dh][bu][vh][vp][lb][fo][vm][sk][lc]/[pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw]/5[dg]4[gb]3[dg]6[dg]3[gb]4[dg]5/36/36/36/36/36/36/36/36/36/36/36/36/5[DG]4[GB]3[DG]6[DG]3[GB]4[DG]5/[PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW]/[LC][SK][VM][FO][LB][VP][VH][BU][DH][DK][WD][HF][SE][SP][VL][SV][SB][LD][RO][SB][SV][VL][SP][SE][HF][WD][DK][DH][BU][VH][VP][LB][FO][VM][SK][RT]/[CH][SN][VT][WF][RW][MG][FF][HS][WO][OS][EG][BS][ST][LS][TG][BA][IG][GM][GA][IG][BA][TG][LS][ST][BS][EG][OS][WO][HS][FF][MG][RW][WF][VT][SN][CH]/[EC][BD][EN][HN][SO][CM][CS][WI][BM][BT][OC][SF][BB][OR][SQ][CO][RD][LW][FQ][RD][CO][SQ][OR][BB][SF][OC][BT][BM][WI][CS][CM][SO][HN][EN][VS][EC]/[TL][VW][SX][DY][FH][VI][AB][EW][LH][FC][OM][CC][WS][EB][VA][VF][TF][RM][CN][TF][VF][VA][SU][NB][CC][OM][FC][LH][EW][AB][VI][FH][DY][SX][VW][TL]/[WC][WH][HL][SM][PR][WB][FL][FE][FY][PS][FN][SC][BL][WG][FG][KY][CP][GU][LU][HM][PH][FG][WG][BL][SC][FN][PS][FY][FE][FL][WB][PR][SM][HR][WH][WC]/[TC][CE][BI][RK][SW][FA][MF][VR][SL][LL][CL][CU][RX][RS][VO][GT][GO][DV][DS][GO][GT][VO][RS][RX][CU][CL][LL][SL][VR][MF][FA][SW][RK][BI][CE][TC]/[SA][VB][KN][PG][CK][PU][HG][OG][CT][SI][SR][GL][LI][CA][GS][VD][WX][GR][VG][WX][VD][GS][CA][LI][GL][SR][SI][CT][OG][HG][PU][CK][PG][KN][VB][SA]/[GC][SD][RF][RL][BG][RR][LT][LA][BO][WN][FU][RB][OK][PC][WQ][FI][CG][KM][PM][CG][FI][WQ][PC][OK][RB][FU][WN][BO][RI][RV][RR][BG][RL][RF][SD][GC]/[RC][WE][MD][FS][CF][RA][FM][MS][RP][RN][SS][GV][RJ][RU][BV][WR][SG][NK][DE][SG][GD][NS][RU][RJ][GV][SS][RN][RP][MS][FM][RA][CF][FS][MD][FP][RC]/[LN][TS][RQ][WL][FD][ML][LO][BC][RH][FR][ED][CD][FT][FK][RE][LG][GG][KI][CR][GG][RG][RE][FK][FT][DN][ED][FR][RH][BC][LO][MR][FD][WL][RQ][WT][LN]"
  vocabulary:
    angry_boar: { symbols: { "0": AB, "1": ab } }
    bear_soldier: { symbols: { "0": BA, "1": ba } }
    blind_bear: { symbols: { "0": BB, "1": bb } }
    beast_cadet: { symbols: { "0": BC, "1": bc } }
    blue_dragon: { symbols: { "0": BD, "1": bd } }
    angle_general: { symbols: { "0": BG, "1": bg } }
    angle_mover: { symbols: { "0": BI, "1": bi } }
    blind_dog: { symbols: { "0": BL, "1": bl } }
    blind_monkey: { symbols: { "0": BM, "1": bm } }
    beast_officer: { symbols: { "0": BO, "1": bo } }
    boar_soldier: { symbols: { "0": BS, "1": bs } }
    blind_tiger: { symbols: { "0": BT, "1": bt } }
    cannon_soldier: { symbols: { "0": BU, "1": bu } }
    buddhist_devil: { symbols: { "0": BV, "1": bv } }
    fowl_cadet: { symbols: { "0": CA, "1": ca } }
    huai_chicken: { symbols: { "0": CC, "1": cc } }
    ceramic_dove: { symbols: { "0": CD, "1": cd } }
    cloud_eagle: { symbols: { "0": CE, "1": ce } }
    fowl_officer: { symbols: { "0": CF, "1": cf } }
    copper_general: { symbols: { "0": CG, "1": cg } }
    chariot_soldier: { symbols: { "0": CH, "1": ch } }
    chicken_general: { symbols: { "0": CK, "1": ck } }
    cloud_dragon: { symbols: { "0": CL, "1": cl } }
    climbing_monkey: { symbols: { "0": CM, "1": cm } }
    center_master: { symbols: { "0": CN, "1": cn } }
    coiled_serpent: { symbols: { "0": CO, "1": co } }
    rushing_boar: { symbols: { "0": CP, "1": cp } }
    crown_prince: { symbols: { "0": CR, "1": cr } }
    cat_sword: { symbols: { "0": CS, "1": cs } }
    center_standard: { symbols: { "0": CT, "1": ct } }
    copper_chariot: { symbols: { "0": CU, "1": cu } }
    drunken_elephant: { symbols: { "0": DE, "1": de } }
    dog: { symbols: { "0": DG, "1": dg } }
    dragon_horse: { symbols: { "0": DH, "1": dh } }
    dragon_king: { symbols: { "0": DK, "1": dk } }
    wooden_dove: { symbols: { "0": DN, "1": dn } }
    dark_spirit: { symbols: { "0": DS, "1": ds } }
    deva: { symbols: { "0": DV, "1": dv } }
    donkey: { symbols: { "0": DY, "1": dy } }
    eastern_barbarian: { symbols: { "0": EB, "1": eb } }
    earth_chariot: { symbols: { "0": EC, "1": ec } }
    earth_dragon: { symbols: { "0": ED, "1": ed } }
    earth_general: { symbols: { "0": EG, "1": eg } }
    enchanted_badger: { symbols: { "0": EN, "1": en } }
    evil_wolf: { symbols: { "0": EW, "1": ew } }
    flying_cat: { symbols: { "0": FA, "1": fa } }
    flying_chicken: { symbols: { "0": FC, "1": fc } }
    fire_demon: { symbols: { "0": FD, "1": fd } }
    fierce_eagle: { symbols: { "0": FE, "1": fe } }
    front_standard: { symbols: { "0": FF, "1": ff } }
    fire_general: { symbols: { "0": FG, "1": fg } }
    flying_horse: { symbols: { "0": FH, "1": fh } }
    fire_dragon: { symbols: { "0": FI, "1": fi } }
    free_king: { symbols: { "0": FK, "1": fk } }
    fierce_leopard: { symbols: { "0": FL, "1": fl } }
    forest_demon: { symbols: { "0": FM, "1": fm } }
    flying_goose: { symbols: { "0": FN, "1": fn } }
    flying_ox: { symbols: { "0": FO, "1": fo } }
    fragrant_elephant: { symbols: { "0": FP, "1": fp } }
    free_eagle: { symbols: { "0": FQ, "1": fq } }
    free_demon: { symbols: { "0": FR, "1": fr } }
    flying_swallow: { symbols: { "0": FS, "1": fs } }
    free_dream_eater: { symbols: { "0": FT, "1": ft } }
    free_pup: { symbols: { "0": FU, "1": fu } }
    flying_dragon: { symbols: { "0": FY, "1": fy } }
    great_standard: { symbols: { "0": GA, "1": ga } }
    go_between: { symbols: { "0": GB, "1": gb } }
    gold_chariot: { symbols: { "0": GC, "1": gc } }
    guardian_of_the_gods: { symbols: { "0": GD, "1": gd } }
    gold_general: { symbols: { "0": GG, "1": gg } }
    gold_stag: { symbols: { "0": GL, "1": gl } }
    great_master: { symbols: { "0": GM, "1": gm } }
    gold_bird: { symbols: { "0": GO, "1": go } }
    great_general: { symbols: { "0": GR, "1": gr } }
    great_stag: { symbols: { "0": GS, "1": gs } }
    great_dragon: { symbols: { "0": GT, "1": gt } }
    great_turtle: { symbols: { "0": GU, "1": gu } }
    great_dove: { symbols: { "0": GV, "1": gv } }
    horned_hawk: { symbols: { "0": HF, "1": hf } }
    horse_general: { symbols: { "0": HG, "1": hg } }
    left_howling_dog: { symbols: { "0": HL, "1": hl } }
    hook_mover: { symbols: { "0": HM, "1": hm } }
    horseman: { symbols: { "0": HN, "1": hn } }
    right_howling_dog: { symbols: { "0": HR, "1": hr } }
    horse_soldier: { symbols: { "0": HS, "1": hs } }
    iron_general: { symbols: { "0": IG, "1": ig } }
    king: { symbols: { "0": KI, "1": ki } }
    kirin_master: { symbols: { "0": KM, "1": km } }
    knight: { symbols: { "0": KN, "1": kn } }
    kirin: { symbols: { "0": KY, "1": ky } }
    left_dragon: { symbols: { "0": LA, "1": la } }
    longbow_soldier: { symbols: { "0": LB, "1": lb } }
    left_chariot: { symbols: { "0": LC, "1": lc } }
    lion_dog: { symbols: { "0": LD, "1": ld } }
    left_general: { symbols: { "0": LG, "1": lg } }
    wind_horse: { symbols: { "0": LH, "1": lh } }
    lion: { symbols: { "0": LI, "1": li } }
    little_standard: { symbols: { "0": LL, "1": ll } }
    incense_chariot: { symbols: { "0": LN, "1": ln } }
    tengu: { symbols: { "0": LO, "1": lo } }
    leopard_soldier: { symbols: { "0": LS, "1": ls } }
    left_tiger: { symbols: { "0": LT, "1": lt } }
    little_turtle: { symbols: { "0": LU, "1": lu } }
    lion_hawk: { symbols: { "0": LW, "1": lw } }
    turtle_dove: { symbols: { "0": MD, "1": md } }
    mountain_hawk: { symbols: { "0": MF, "1": mf } }
    mountain_general: { symbols: { "0": MG, "1": mg } }
    left_mountain_eagle: { symbols: { "0": ML, "1": ml } }
    right_mountain_eagle: { symbols: { "0": MR, "1": mr } }
    mountain_stag: { symbols: { "0": MS, "1": ms } }
    northern_barbarian: { symbols: { "0": NB, "1": nb } }
    neighboring_king: { symbols: { "0": NK, "1": nk } }
    nature_spirit: { symbols: { "0": NS, "1": ns } }
    ox_chariot: { symbols: { "0": OC, "1": oc } }
    ox_general: { symbols: { "0": OG, "1": og } }
    old_kite: { symbols: { "0": OK, "1": ok } }
    old_monkey: { symbols: { "0": OM, "1": om } }
    old_rat: { symbols: { "0": OR, "1": or } }
    ox_soldier: { symbols: { "0": OS, "1": os } }
    peacock: { symbols: { "0": PC, "1": pc } }
    pig_general: { symbols: { "0": PG, "1": pg } }
    phoenix: { symbols: { "0": PH, "1": ph } }
    phoenix_master: { symbols: { "0": PM, "1": pm } }
    prancing_stag: { symbols: { "0": PR, "1": pr } }
    poisonous_serpent: { symbols: { "0": PS, "1": ps } }
    pup_general: { symbols: { "0": PU, "1": pu } }
    pawn: { symbols: { "0": PW, "1": pw } }
    rain_dragon: { symbols: { "0": RA, "1": ra } }
    rushing_bird: { symbols: { "0": RB, "1": rb } }
    reverse_chariot: { symbols: { "0": RC, "1": rc } }
    reclining_dragon: { symbols: { "0": RD, "1": rd } }
    rear_standard: { symbols: { "0": RE, "1": re } }
    running_stag: { symbols: { "0": RF, "1": rf } }
    right_general: { symbols: { "0": RG, "1": rg } }
    running_horse: { symbols: { "0": RH, "1": rh } }
    right_dragon: { symbols: { "0": RI, "1": ri } }
    running_tiger: { symbols: { "0": RJ, "1": rj } }
    flying_chariot: { symbols: { "0": RK, "1": rk } }
    running_wolf: { symbols: { "0": RL, "1": rl } }
    peng_master: { symbols: { "0": RM, "1": rm } }
    running_serpent: { symbols: { "0": RN, "1": rn } }
    roaring_dog: { symbols: { "0": RO, "1": ro } }
    running_pup: { symbols: { "0": RP, "1": rp } }
    running_rabbit: { symbols: { "0": RQ, "1": rq } }
    flying_general: { symbols: { "0": RR, "1": rr } }
    ram_s_head_soldier: { symbols: { "0": RS, "1": rs } }
    right_chariot: { symbols: { "0": RT, "1": rt } }
    running_bear: { symbols: { "0": RU, "1": ru } }
    right_tiger: { symbols: { "0": RV, "1": rv } }
    river_general: { symbols: { "0": RW, "1": rw } }
    running_chariot: { symbols: { "0": RX, "1": rx } }
    silver_chariot: { symbols: { "0": SA, "1": sa } }
    crossbow_soldier: { symbols: { "0": SB, "1": sb } }
    strutting_crow: { symbols: { "0": SC, "1": sc } }
    side_dragon: { symbols: { "0": SD, "1": sd } }
    flying_eagle: { symbols: { "0": SE, "1": se } }
    side_flyer: { symbols: { "0": SF, "1": sf } }
    silver_general: { symbols: { "0": SG, "1": sg } }
    side_boar: { symbols: { "0": SI, "1": si } }
    side_monkey: { symbols: { "0": SK, "1": sk } }
    soldier: { symbols: { "0": SL, "1": sl } }
    side_mover: { symbols: { "0": SM, "1": sm } }
    side_soldier: { symbols: { "0": SN, "1": sn } }
    swooping_owl: { symbols: { "0": SO, "1": so } }
    spear_soldier: { symbols: { "0": SP, "1": sp } }
    square_mover: { symbols: { "0": SQ, "1": sq } }
    silver_rabbit: { symbols: { "0": SR, "1": sr } }
    side_serpent: { symbols: { "0": SS, "1": ss } }
    stone_general: { symbols: { "0": ST, "1": st } }
    southern_barbarian: { symbols: { "0": SU, "1": su } }
    fierce_tiger: { symbols: { "0": SV, "1": sv } }
    side_wolf: { symbols: { "0": SW, "1": sw } }
    side_ox: { symbols: { "0": SX, "1": sx } }
    stone_chariot: { symbols: { "0": TC, "1": tc } }
    treacherous_fox: { symbols: { "0": TF, "1": tf } }
    tile_general: { symbols: { "0": TG, "1": tg } }
    tile_chariot: { symbols: { "0": TL, "1": tl } }
    turtle_snake: { symbols: { "0": TS, "1": ts } }
    fierce_stag: { symbols: { "0": VA, "1": va } }
    vertical_bear: { symbols: { "0": VB, "1": vb } }
    fierce_dragon: { symbols: { "0": VD, "1": vd } }
    fierce_wolf: { symbols: { "0": VF, "1": vf } }
    vice_general: { symbols: { "0": VG, "1": vg } }
    vertical_horse: { symbols: { "0": VH, "1": vh } }
    fierce_bear: { symbols: { "0": VI, "1": vi } }
    vertical_leopard: { symbols: { "0": VL, "1": vl } }
    vertical_mover: { symbols: { "0": VM, "1": vm } }
    fierce_ox: { symbols: { "0": VO, "1": vo } }
    vertical_pup: { symbols: { "0": VP, "1": vp } }
    vertical_tiger: { symbols: { "0": VR, "1": vr } }
    vermillion_sparrow: { symbols: { "0": VS, "1": vs } }
    vertical_soldier: { symbols: { "0": VT, "1": vt } }
    vertical_wolf: { symbols: { "0": VW, "1": vw } }
    water_ox: { symbols: { "0": WB, "1": wb } }
    wood_chariot: { symbols: { "0": WC, "1": wc } }
    sword_soldier: { symbols: { "0": WD, "1": wd } }
    white_elephant: { symbols: { "0": WE, "1": we } }
    wind_general: { symbols: { "0": WF, "1": wf } }
    water_general: { symbols: { "0": WG, "1": wg } }
    white_foal: { symbols: { "0": WH, "1": wh } }
    swallow_s_wings: { symbols: { "0": WI, "1": wi } }
    whale: { symbols: { "0": WL, "1": wl } }
    wind_dragon: { symbols: { "0": WN, "1": wn } }
    wood_general: { symbols: { "0": WO, "1": wo } }
    water_dragon: { symbols: { "0": WQ, "1": wq } }
    sumo_wrestler: { symbols: { "0": WR, "1": wr } }
    western_barbarian: { symbols: { "0": WS, "1": ws } }
    white_tiger: { symbols: { "0": WT, "1": wt } }
    woodland_demon: { symbols: { "0": WX, "1": wx } }
  plugins:
    shogi:
      drops: false
      promotionZone: 0
      royalType: king
      # "so long as they don't contain a royal (king or crown prince)"
      pieceRanks:
        king: 1
        crown_prince: 1
        angle_general: 2
        flying_general: 2
      pieceMoves:
        angry_boar: [{"type":"leaper","offsets":[[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"leaper","offsets":[[0,-1],[0,1]],"directional":true}]
        bear_soldier: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,0],[-1,-1],[-1,1]],"directional":true}]
        blind_bear: [{"type":"leaper","offsets":[[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"leaper","offsets":[[0,-1],[0,1]],"directional":true}]
        beast_cadet: [{"type":"rider","dirs":[[-1,-1],[-1,1],[1,-1],[1,1]],"maxSteps":2},{"type":"rider","dirs":[[-1,0]],"maxSteps":2,"directional":true}]
        blue_dragon: [{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":2,"directional":true}]
        angle_general: [{ type: rider, dirs: diagonal }, { type: rangeCapture, dirs: diagonal }]
        angle_mover: { betza: "B" }
        blind_dog: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true}]
        blind_monkey: [{"type":"leaper","offsets":[[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"leaper","offsets":[[0,-1],[0,1]],"directional":true}]
        beast_officer: [{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1],[1,-1],[1,1]],"maxSteps":3},{"type":"rider","dirs":[[-1,0]],"maxSteps":3,"directional":true}]
        boar_soldier: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,0],[-1,-1],[-1,1]],"directional":true}]
        blind_tiger: [{"type":"leaper","offsets":[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"leaper","offsets":[[-1,0]],"directional":true}]
        cannon_soldier: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":3,"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"maxSteps":5,"directional":true},{"type":"rider","dirs":[[-1,0]],"maxSteps":7,"directional":true}]
        buddhist_devil: [{"type":"rider","dirs":[[-1,-1],[-1,1]],"maxSteps":3,"directional":true},{"type":"leaper","offsets":[[0,-1],[0,1]],"directional":true}]
        fowl_cadet: [{"type":"rider","dirs":[[-1,0]],"maxSteps":3,"directional":true}]
        huai_chicken: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true}]
        ceramic_dove: [{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1]],"maxSteps":2},{"type":"rider","dirs":[[-1,-1],[-1,1],[1,-1],[1,1]]}]
        cloud_eagle: [{"type":"leaper","offsets":[[0,-1],[0,1]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"maxSteps":3,"directional":true},{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true}]
        fowl_officer: [{"type":"rider","dirs":[[-1,0]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1],[1,-1],[1,1]],"maxSteps":3}]
        copper_general: [{"type":"leaper","offsets":[[-1,0],[1,0]],"directional":true}]
        chariot_soldier: [{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"rider","dirs":[[-1,0]],"directional":true},{"type":"rider","dirs":[[1,0]],"directional":true}]
        chicken_general: [{"type":"leaper","offsets":[[1,-1],[1,1]],"directional":true},{"type":"rider","dirs":[[-1,0]],"maxSteps":4,"directional":true}]
        cloud_dragon: [{"type":"leaper","offsets":[[-1,0]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"rider","dirs":[[1,0]],"directional":true}]
        climbing_monkey: [{"type":"leaper","offsets":[[-1,0],[1,0]],"directional":true}]
        center_master: [{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":3,"directional":true},{"type":"rider","dirs":[[1,-1],[1,1]],"maxSteps":3,"directional":true},{"type":"rider","dirs":[[1,0]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true},{"type":"leaper","offsets":[[-2,0],[2,0]],"directional":true}]
        coiled_serpent: [{"type":"leaper","offsets":[[-1,0],[1,0]],"directional":true}]
        rushing_boar: [{"type":"leaper","offsets":[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"leaper","offsets":[[1,0]],"directional":true}]
        crown_prince: [{"type":"leaper","offsets":[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]]}]
        cat_sword: [{"type":"leaper","offsets":[[-1,-1],[-1,1],[1,-1],[1,1]]}]
        center_standard: [{"type":"rider","dirs":[[-1,-1],[-1,1],[1,-1],[1,1]],"maxSteps":3},{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1]]}]
        copper_chariot: [{"type":"rider","dirs":[[-1,-1],[-1,1]],"maxSteps":3,"directional":true},{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true}]
        drunken_elephant: [{"type":"leaper","offsets":[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"leaper","offsets":[[1,0]],"directional":true}]
        dog: [{"type":"leaper","offsets":[[-1,0],[-1,-1],[-1,1]],"directional":true}]
        dragon_horse: { betza: "WB" }
        dragon_king: { betza: "FR" }
        wooden_dove: [{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1]],"maxSteps":2},{"type":"rider","dirs":[[-1,-1],[-1,1],[1,-1],[1,1]]}]
        dark_spirit: [{"type":"leaper","offsets":[[0,-1]],"directional":true},{"type":"leaper","offsets":[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true}]
        deva: [{"type":"leaper","offsets":[[0,1]],"directional":true},{"type":"leaper","offsets":[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true}]
        donkey: [{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1]],"maxSteps":2}]
        eastern_barbarian: [{"type":"rider","dirs":[[-1,0],[1,0]],"maxSteps":2,"directional":true},{"type":"leaper","offsets":[[0,-1],[0,1]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true}]
        earth_chariot: [{"type":"leaper","offsets":[[0,-1],[0,1]],"directional":true},{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true}]
        earth_dragon: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true},{"type":"rider","dirs":[[-1,0]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[1,-1],[1,1]],"directional":true}]
        earth_general: [{"type":"leaper","offsets":[[-1,0],[1,0]],"directional":true}]
        enchanted_badger: [{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1]],"maxSteps":2}]
        evil_wolf: [{"type":"leaper","offsets":[[0,-1],[0,1]],"directional":true}]
        flying_cat: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"leaper","offsets":[[1,-1],[1,1]],"directional":true},{"type":"leaper","offsets":[[-3,0]],"directional":true}]
        flying_chicken: [{"type":"leaper","offsets":[[0,-1],[0,1]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true}]
        fire_demon: [{"type":"rider","dirs":[[-1,0],[1,0]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"rider","dirs":[[0,-1],[0,1]],"directional":true}]
        fierce_eagle: [{"type":"rider","dirs":[[-1,-1],[-1,1],[1,-1],[1,1]],"maxSteps":2},{"type":"leaper","offsets":[[-1,0]],"directional":true}]
        front_standard: [{"type":"rider","dirs":[[-1,-1],[-1,1],[1,-1],[1,1]],"maxSteps":3},{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1]]}]
        fire_general: [{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true},{"type":"rider","dirs":[[-1,0],[1,0]],"maxSteps":3,"directional":true}]
        flying_horse: [{"type":"rider","dirs":[[-1,-1],[-1,1],[1,-1],[1,1]],"maxSteps":2}]
        fire_dragon: [{"type":"rider","dirs":[[1,-1],[1,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"maxSteps":4,"directional":true},{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1]]}]
        free_king: { betza: "Q" }
        fierce_leopard: [{"type":"leaper","offsets":[[-1,-1],[-1,1],[1,-1],[1,1]]}]
        forest_demon: [{"type":"rider","dirs":[[-1,0]],"maxSteps":3,"directional":true},{"type":"rider","dirs":[[1,0]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true}]
        flying_goose: [{"type":"leaper","offsets":[[-1,0],[1,0]],"directional":true}]
        flying_ox: [{"type":"rider","dirs":[[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true}]
        fragrant_elephant: [{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]],"maxSteps":2}]
        free_eagle: { betza: "QDA[aF]" }
        free_demon: [{"type":"rider","dirs":[[-1,0],[1,0]],"maxSteps":5,"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"rider","dirs":[[0,-1],[0,1]],"directional":true}]
        flying_swallow: [{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true},{"type":"leaper","offsets":[[1,0]],"directional":true}]
        free_dream_eater: [{"type":"rider","dirs":[[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":5,"directional":true}]
        free_pup: [{"type":"leaper","offsets":[[1,-1],[1,1]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true}]
        flying_dragon: [{"type":"leaper","offsets":[[-2,-2],[-2,2],[2,-2],[2,2]]},{"type":"leaper","offsets":[[0,-2],[0,2]],"directional":true}]
        great_standard: [{"type":"rider","dirs":[[1,-1],[1,1]],"maxSteps":3,"directional":true},{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1]]},{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true}]
        go_between: [{"type":"leaper","offsets":[[-1,0],[1,0]],"directional":true}]
        gold_chariot: [{"type":"leaper","offsets":[[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true}]
        guardian_of_the_gods: [{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1]],"maxSteps":3}]
        gold_general: [{"type":"leaper","offsets":[[-1,0],[1,0],[0,-1],[0,1]]},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true}]
        gold_stag: [{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true},{"type":"rider","dirs":[[1,-1],[1,1]],"maxSteps":2,"directional":true}]
        great_master: [{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":5,"directional":true},{"type":"rider","dirs":[[1,-1],[1,1]],"maxSteps":5,"directional":true},{"type":"leaper","offsets":[[-3,0],[-3,-3],[-3,3]],"directional":true},{"type":"rider","dirs":[[-1,0],[-1,-1],[-1,1]],"directional":true}]
        gold_bird: [{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":3,"directional":true},{"type":"rider","dirs":[[1,-1],[1,1]],"maxSteps":3,"directional":true},{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true}]
        great_general: { betza: "QcppQ" }
        great_stag: [{"type":"rider","dirs":[[1,-1],[1,1]],"maxSteps":2,"directional":true},{"type":"leaper","offsets":[[-2,-2],[-2,2]],"directional":true},{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1]]}]
        great_dragon: [{"type":"rider","dirs":[[-1,0],[1,0]],"maxSteps":3,"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1],[1,-1],[1,1]]}]
        great_turtle: [{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":3,"directional":true},{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true},{"type":"leaper","offsets":[[-3,0],[3,0]],"directional":true}]
        great_dove: [{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1]],"maxSteps":3},{"type":"rider","dirs":[[-1,-1],[-1,1],[1,-1],[1,1]]}]
        horned_hawk: [{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"leaper","offsets":[[-2,0]],"directional":true}]
        horse_general: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true},{"type":"rider","dirs":[[-1,0]],"maxSteps":3,"directional":true}]
        left_howling_dog: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"rider","dirs":[[-1,0]],"directional":true}]
        hook_mover: { betza: "RmaR" }
        horseman: [{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true}]
        right_howling_dog: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"rider","dirs":[[-1,0]],"directional":true}]
        horse_soldier: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":3,"directional":true},{"type":"rider","dirs":[[-1,0],[-1,-1],[-1,1]],"directional":true}]
        iron_general: [{"type":"leaper","offsets":[[-1,0],[-1,-1],[-1,1]],"directional":true}]
        king: [{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]],"maxSteps":2}]
        kirin_master: [{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":3,"directional":true},{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true},{"type":"leaper","offsets":[[-3,0],[3,0]],"directional":true}]
        knight: { betza: "ffN" }
        kirin: { betza: "FD" }
        left_dragon: [{"type":"rider","dirs":[[0,-1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,1],[1,1]],"directional":true},{"type":"rider","dirs":[[0,1]],"directional":true}]
        longbow_soldier: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"maxSteps":5,"directional":true},{"type":"rider","dirs":[[-1,0]],"directional":true}]
        left_chariot: [{"type":"rider","dirs":[[-1,0]],"directional":true},{"type":"rider","dirs":[[0,1]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true},{"type":"rider","dirs":[[0,-1]],"directional":true},{"type":"rider","dirs":[[1,-1],[1,1]],"directional":true},{"type":"leaper","offsets":[[0,-1]],"directional":true}]
        lion_dog: [{"type":"leaper","offsets":[[-3,0],[3,0],[0,-3],[0,3],[-3,-3],[-3,3],[3,-3],[3,3]]},{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]]}]
        left_general: [{"type":"leaper","offsets":[[-1,0],[1,0]],"directional":true},{"type":"leaper","offsets":[[0,1]],"directional":true},{"type":"leaper","offsets":[[0,1]],"directional":true}]
        wind_horse: [{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true},{"type":"rider","dirs":[[1,0]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,0]],"directional":true}]
        lion: [{"type":"leaper","offsets":[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"rider","dirs":[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1],[-2,-2],[-2,2],[2,-2],[2,2],[-2,0],[2,0],[0,-2],[0,2]]}]
        little_standard: [{"type":"leaper","offsets":[[1,-1],[1,1]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1]]}]
        incense_chariot: { betza: "fR" }
        tengu: { betza: "WmBaB" }
        leopard_soldier: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,0],[-1,-1],[-1,1]],"directional":true}]
        left_tiger: [{"type":"leaper","offsets":[[-1,-1],[1,-1]],"directional":true},{"type":"rider","dirs":[[-1,1],[1,1]],"directional":true},{"type":"rider","dirs":[[0,1]],"directional":true}]
        little_turtle: [{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":2,"directional":true},{"type":"leaper","offsets":[[-2,0],[2,0]],"directional":true},{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true}]
        lion_hawk: { betza: "BNAD[aK]" }
        turtle_dove: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"maxSteps":5,"directional":true}]
        mountain_hawk: [{"type":"rider","dirs":[[1,-1],[1,1]],"maxSteps":2,"directional":true},{"type":"leaper","offsets":[[-2,0]],"directional":true},{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1]]},{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true}]
        mountain_general: [{"type":"leaper","offsets":[[-1,0],[1,0]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"maxSteps":3,"directional":true}]
        left_mountain_eagle: [{"type":"rider","dirs":[[0,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[1,-1],[1,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,-1],[1,-1]],"directional":true},{"type":"rider","dirs":[[0,1]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true}]
        right_mountain_eagle: [{"type":"rider","dirs":[[0,-1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[1,-1],[1,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,1],[1,1]],"directional":true},{"type":"rider","dirs":[[0,-1]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true}]
        mountain_stag: [{"type":"leaper","offsets":[[-1,0]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"maxSteps":3,"directional":true},{"type":"rider","dirs":[[1,0]],"maxSteps":4,"directional":true}]
        northern_barbarian: [{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":2,"directional":true},{"type":"leaper","offsets":[[-1,0],[1,0]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true}]
        neighboring_king: [{"type":"leaper","offsets":[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"leaper","offsets":[[1,0]],"directional":true}]
        nature_spirit: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":3,"directional":true}]
        ox_chariot: [{"type":"rider","dirs":[[-1,0]],"directional":true}]
        ox_general: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true},{"type":"rider","dirs":[[-1,0]],"maxSteps":3,"directional":true}]
        old_kite: [{"type":"rider","dirs":[[-1,-1],[-1,1],[1,-1],[1,1]],"maxSteps":2},{"type":"leaper","offsets":[[0,-1],[0,1]],"directional":true}]
        old_monkey: [{"type":"leaper","offsets":[[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"leaper","offsets":[[1,0]],"directional":true}]
        old_rat: [{"type":"leaper","offsets":[[-1,0]],"directional":true},{"type":"leaper","offsets":[[1,-1],[1,1]],"directional":true}]
        ox_soldier: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":3,"directional":true},{"type":"rider","dirs":[[-1,0],[-1,-1],[-1,1]],"directional":true}]
        peacock: [{ type: bent, first: [[-1,-1],[-1,1]], firstSteps: any, second: perpendicular, minSecondLeg: 0, directional: true }, { type: rider, dirs: [[1,-1],[1,1]], maxSteps: 2, directional: true }]
        pig_general: [{"type":"rider","dirs":[[1,0]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"maxSteps":4,"directional":true}]
        phoenix: [{"type":"leaper","offsets":[[-1,0],[1,0],[0,-1],[0,1]]},{"type":"leaper","offsets":[[-2,-2],[-2,2],[2,-2],[2,2]]}]
        phoenix_master: [{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":3,"directional":true},{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true},{"type":"leaper","offsets":[[-3,-3],[-3,3]],"directional":true}]
        prancing_stag: [{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":2,"directional":true},{"type":"leaper","offsets":[[-1,0],[1,0]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true}]
        poisonous_serpent: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true},{"type":"rider","dirs":[[-1,0]],"maxSteps":2,"directional":true}]
        pup_general: [{"type":"leaper","offsets":[[1,-1],[1,1]],"directional":true},{"type":"rider","dirs":[[-1,0]],"maxSteps":4,"directional":true}]
        pawn: [{"type":"leaper","offsets":[[-1,0]],"directional":true}]
        rain_dragon: [{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"directional":true}]
        rushing_bird: [{"type":"leaper","offsets":[[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"leaper","offsets":[[0,-1],[0,1]],"directional":true},{"type":"rider","dirs":[[-1,0]],"maxSteps":2,"directional":true}]
        reverse_chariot: [{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true}]
        reclining_dragon: [{"type":"leaper","offsets":[[-1,0],[1,0],[0,-1],[0,1]]}]
        rear_standard: { type: rider, dirs: diagonal, maxSteps: 2 }
        running_stag: [{"type":"rider","dirs":[[1,0]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true}]
        right_general: [{"type":"leaper","offsets":[[-1,0],[1,0]],"directional":true},{"type":"leaper","offsets":[[0,-1]],"directional":true},{"type":"leaper","offsets":[[0,-1]],"directional":true}]
        running_horse: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true},{"type":"leaper","offsets":[[2,-2],[2,2]],"directional":true}]
        right_dragon: [{"type":"rider","dirs":[[0,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,-1],[1,-1]],"directional":true},{"type":"rider","dirs":[[0,-1]],"directional":true}]
        running_tiger: [{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true}]
        flying_chariot: { betza: "R" }
        running_wolf: [{"type":"leaper","offsets":[[-1,0]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true}]
        peng_master: [{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":5,"directional":true},{"type":"rider","dirs":[[1,-1],[1,1]],"maxSteps":5,"directional":true},{"type":"rider","dirs":[[1,0]],"directional":true}]
        running_serpent: [{"type":"leaper","offsets":[[0,-1],[0,1]],"directional":true},{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true}]
        roaring_dog: [{"type":"rider","dirs":[[1,-1],[1,1]],"maxSteps":3,"directional":true},{"type":"leaper","offsets":[[-3,0],[3,0],[0,-3],[0,3]]},{"type":"leaper","offsets":[[-3,-3],[-3,3]],"directional":true},{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1]]},{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true}]
        running_pup: [{"type":"leaper","offsets":[[0,-1],[0,1]],"directional":true},{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true}]
        running_rabbit: [{"type":"leaper","offsets":[[1,-1],[1,1]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true}]
        flying_general: [{ type: rider, dirs: orthogonal }, { type: rangeCapture, dirs: orthogonal }]
        ram_s_head_soldier: [{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true},{"type":"leaper","offsets":[[1,0]],"directional":true}]
        right_chariot: [{"type":"rider","dirs":[[-1,0]],"directional":true},{"type":"rider","dirs":[[0,-1]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true},{"type":"rider","dirs":[[0,1]],"directional":true},{"type":"rider","dirs":[[1,-1],[1,1]],"directional":true},{"type":"leaper","offsets":[[0,1]],"directional":true}]
        running_bear: [{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true}]
        right_tiger: [{"type":"leaper","offsets":[[-1,1],[1,1]],"directional":true},{"type":"rider","dirs":[[-1,-1],[1,-1]],"directional":true},{"type":"rider","dirs":[[0,-1]],"directional":true}]
        river_general: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true},{"type":"rider","dirs":[[-1,0]],"maxSteps":3,"directional":true}]
        running_chariot: [{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1]]}]
        silver_chariot: [{"type":"leaper","offsets":[[1,-1],[1,1]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true}]
        crossbow_soldier: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":3,"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"maxSteps":3,"directional":true},{"type":"rider","dirs":[[-1,0]],"maxSteps":5,"directional":true}]
        strutting_crow: [{"type":"leaper","offsets":[[-1,0]],"directional":true},{"type":"leaper","offsets":[[1,-1],[1,1]],"directional":true}]
        side_dragon: [{"type":"rider","dirs":[[-1,0]],"directional":true}]
        flying_eagle: [{"type":"leaper","offsets":[[-2,-2],[-2,2]],"directional":true},{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]]}]
        side_flyer: [{"type":"leaper","offsets":[[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"rider","dirs":[[0,-1],[0,1]],"directional":true}]
        silver_general: [{"type":"leaper","offsets":[[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"leaper","offsets":[[-1,0]],"directional":true}]
        side_boar: [{"type":"leaper","offsets":[[-1,0],[1,0]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"directional":true}]
        side_monkey: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"directional":true}]
        soldier: [{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1]]}]
        side_mover: [{"type":"rider","dirs":[[0,-1],[0,1]],"directional":true},{"type":"leaper","offsets":[[-1,0],[1,0]],"directional":true}]
        side_soldier: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"rider","dirs":[[-1,0]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"directional":true}]
        swooping_owl: [{"type":"leaper","offsets":[[-1,0]],"directional":true},{"type":"leaper","offsets":[[1,-1],[1,1]],"directional":true}]
        spear_soldier: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"rider","dirs":[[-1,0]],"directional":true}]
        square_mover: [{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1]]}]
        silver_rabbit: [{"type":"rider","dirs":[[-1,-1],[-1,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[1,-1],[1,1]],"directional":true}]
        side_serpent: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"rider","dirs":[[-1,0]],"maxSteps":3,"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"directional":true}]
        stone_general: [{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true}]
        southern_barbarian: [{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":2,"directional":true},{"type":"leaper","offsets":[[-1,0],[1,0]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true}]
        fierce_tiger: [{"type":"rider","dirs":[[-1,0]],"directional":true}]
        side_wolf: [{"type":"leaper","offsets":[[0,1]],"directional":true},{"type":"leaper","offsets":[[0,-1]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true},{"type":"leaper","offsets":[[1,-1],[1,1]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"directional":true}]
        side_ox: [{"type":"leaper","offsets":[[0,1]],"directional":true},{"type":"leaper","offsets":[[0,-1]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true},{"type":"leaper","offsets":[[1,-1],[1,1]],"directional":true}]
        stone_chariot: [{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":2,"directional":true}]
        treacherous_fox: [{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true}]
        tile_general: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true}]
        tile_chariot: [{"type":"leaper","offsets":[[0,1]],"directional":true},{"type":"leaper","offsets":[[0,-1]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true},{"type":"leaper","offsets":[[1,-1],[1,1]],"directional":true},{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true}]
        turtle_snake: [{"type":"rider","dirs":[[0,1]],"directional":true},{"type":"rider","dirs":[[0,-1]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true}]
        fierce_stag: [{"type":"leaper","offsets":[[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"leaper","offsets":[[-1,0]],"directional":true}]
        vertical_bear: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,0]],"directional":true}]
        fierce_dragon: [{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1]],"maxSteps":2}]
        fierce_wolf: [{"type":"leaper","offsets":[[-1,0],[1,0],[0,-1],[0,1]]},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true}]
        vice_general: [{"type":"leaper","offsets":[[-2,0],[2,0],[0,-2],[0,2]]}]
        vertical_horse: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true},{"type":"rider","dirs":[[-1,0]],"directional":true}]
        fierce_bear: [{"type":"rider","dirs":[[-1,-1],[-1,1]],"maxSteps":2,"directional":true},{"type":"leaper","offsets":[[0,-1],[0,1]],"directional":true}]
        vertical_leopard: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true},{"type":"rider","dirs":[[-1,0]],"directional":true}]
        vertical_mover: [{"type":"leaper","offsets":[[0,-1],[0,1]],"directional":true},{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true}]
        fierce_ox: [{"type":"leaper","offsets":[[-1,0],[1,0]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true}]
        vertical_pup: [{"type":"leaper","offsets":[[1,0],[1,-1],[1,1]],"directional":true},{"type":"rider","dirs":[[-1,0]],"directional":true}]
        vertical_tiger: [{"type":"rider","dirs":[[1,0]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,0]],"directional":true}]
        vermillion_sparrow: [{"type":"leaper","offsets":[[-1,0],[1,0],[0,-1],[0,1]]},{"type":"rider","dirs":[[0,1]],"directional":true},{"type":"rider","dirs":[[0,-1]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true},{"type":"rider","dirs":[[1,-1],[1,1]],"directional":true}]
        vertical_soldier: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,0]],"directional":true}]
        vertical_wolf: [{"type":"leaper","offsets":[[0,-1],[0,1]],"directional":true},{"type":"rider","dirs":[[1,0]],"maxSteps":3,"directional":true},{"type":"rider","dirs":[[-1,0]],"directional":true}]
        water_ox: [{"type":"rider","dirs":[[-1,0],[1,0]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1],[1,-1],[1,1]]},{"type":"rider","dirs":[[0,-1],[0,1]],"directional":true}]
        wood_chariot: [{"type":"leaper","offsets":[[0,1]],"directional":true},{"type":"leaper","offsets":[[0,-1]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true},{"type":"leaper","offsets":[[1,-1],[1,1]],"directional":true},{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true}]
        sword_soldier: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true}]
        white_elephant: [{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]],"maxSteps":2}]
        wind_general: [{"type":"leaper","offsets":[[1,0]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true},{"type":"rider","dirs":[[-1,0]],"maxSteps":3,"directional":true}]
        water_general: [{"type":"leaper","offsets":[[-1,0],[1,0]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"maxSteps":3,"directional":true}]
        white_foal: [{"type":"rider","dirs":[[-1,0],[1,0]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true}]
        swallow_s_wings: [{"type":"rider","dirs":[[0,-1],[0,1]],"directional":true},{"type":"leaper","offsets":[[-1,0],[1,0]],"directional":true}]
        whale: [{"type":"rider","dirs":[[-1,0]],"directional":true}]
        wind_dragon: [{"type":"leaper","offsets":[[0,-1]],"directional":true},{"type":"leaper","offsets":[[1,-1],[1,1]],"directional":true},{"type":"rider","dirs":[[0,1]],"directional":true},{"type":"rider","dirs":[[0,-1],[0,1]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true},{"type":"rider","dirs":[[1,-1],[1,1]],"directional":true}]
        wood_general: [{"type":"rider","dirs":[[-1,-1],[-1,1]],"maxSteps":2,"directional":true}]
        water_dragon: [{"type":"rider","dirs":[[-1,-1],[-1,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[1,-1],[1,1]],"maxSteps":4,"directional":true},{"type":"rider","dirs":[[-1,0],[1,0],[0,-1],[0,1]]}]
        sumo_wrestler: [{"type":"rider","dirs":[[-1,-1],[-1,1],[1,-1],[1,1]],"maxSteps":3}]
        western_barbarian: [{"type":"rider","dirs":[[-1,0],[1,0]],"maxSteps":2,"directional":true},{"type":"leaper","offsets":[[0,-1],[0,1]],"directional":true},{"type":"leaper","offsets":[[-1,-1],[-1,1]],"directional":true}]
        white_tiger: [{"type":"rider","dirs":[[0,-1],[0,1]],"directional":true},{"type":"rider","dirs":[[-1,0],[1,0]],"maxSteps":2,"directional":true}]
        woodland_demon: [{"type":"rider","dirs":[[0,-1],[0,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[1,-1],[1,1]],"maxSteps":2,"directional":true},{"type":"rider","dirs":[[-1,0]],"directional":true},{"type":"rider","dirs":[[-1,-1],[-1,1]],"directional":true}]
  render:
    cellSize: 10
  pieces:
    set: mce-shogi-fairy
---

## Taikyoku Shogi

{{svg:taikyoku-shogi-board.svg "Taikyoku Shogi — starting position"}}

Taikyoku Shogi (太局将棋, *Ultimate Chess*) is the largest chess variant ever documented. Played on a 36×36 board with 402 piece types per side (804 pieces total) on 1,296 squares, it is documented in a single known Japanese manuscript held at Osaka Municipal Central Library. Whether the game was ever actually played to completion is disputed — a single game would require an estimated 10,000+ moves. The transcription used here is by L. Lynn Smith.

### The Board

36×36 grid (1,296 squares). Standard Shogi orientation. Each player occupies the first 12 ranks from their side (Sente: ranks 1–12; Gote: ranks 25–36). Ranks 13–24 are empty at the start.

### Royals

- **King** (does not promote) — royal
- **Crown Prince** (promotes to King) — royal once promoted

Win: capture both the opponent's King and Crown Prince (or their only royal if the Crown Prince has not promoted).

---

### Piece List

All 402 pieces per side, with count and promoted form:

| Piece | Qty | Promotes to |
|---|---|---|
| King | 1 | — (does not promote) |
| Crown Prince | 1 | King |
| Gold General | 2 | Rook |
| Right General | 1 | Right Army |
| Left General | 1 | Left Army |
| Rear Standard | 2 | Center Standard |
| Free King | 2 | Great General |
| Free Tapir | 2 | Free King |
| Wooden Dove | 1 | — |
| Ceramic Dove | 1 | — |
| Earth Dragon | 2 | Rain Dragon |
| Free Demon | 2 | Free King |
| Running Horse | 2 | Free Demon |
| Beast Cadet | 2 | Beast Officer |
| Long-Nosed Goblin | 2 | — |
| Mountain Eagle | 2 | Soaring Eagle |
| Fire Demon | 2 | Free Fire |
| Whale | 2 | Great Whale |
| Running Rabbit | 2 | Treacherous Fox |
| White Tiger | 1 | Divine Tiger |
| Turtle Snake | 1 | Divine Turtle |
| Lance | 2 | White Horse |
| Reverse Chariot | 2 | Whale |
| Fragrant Elephant | 1 | Elephant King |
| White Elephant | 1 | Elephant King |
| Mountain Dove | 2 | Great Dove |
| Flying Swallow | 2 | Rook |
| Captive Officer | 2 | Captive Bird |
| Rain Dragon | 2 | Great Dragon |
| Forest Demon | 2 | Thunder Runner |
| Mountain Stag | 2 | Great Stag |
| Running Pup | 2 | Free Leopard |
| Running Serpent | 2 | Free Serpent |
| Side Serpent | 2 | Shark |
| Great Dove | 2 | Wooden Dove |
| Running Tiger | 2 | Free Tiger |
| Running Bear | 2 | Free Bear |
| Night Sword | 1 | Heavenly Tetarch |
| Buddhist Devil | 1 | Heavenly Tetarch |
| Guardian of the Gods | 1 | Heavenly Tetarch |
| Wrestler | 1 | Heavenly Tetarch |
| Silver General | 2 | Vertical Mover |
| Drunk Elephant | 1 | Crown Prince |
| Neighboring King | 1 | Front Standard |
| Gold Chariot | 2 | Playful Cockatoo |
| Side Dragon | 2 | Running Dragon |
| Running Stag | 2 | Free Stag |
| Running Wolf | 2 | Free Wolf |
| Bishop General | 2 | Rain Demon |
| Rook General | 2 | Flying Crocodile |
| Right Tiger | 1 | White Tiger |
| Left Tiger | 1 | Turtle Snake |
| Right Dragon | 1 | Blue Dragon |
| Left Dragon | 1 | Vermillion Sparrow |
| Beast Officer | 2 | Beast Bird |
| Wind Dragon | 2 | Free Dragon |
| Free Pup | 2 | Free Dog |
| Rushing Bird | 2 | Free Demon |
| Old Kite Hawk | 2 | Long-Nosed Goblin |
| Peacock | 2 | Long-Nosed Goblin |
| Water Dragon | 2 | Phoenix Master |
| Fire Dragon | 2 | Kylin Master |
| Copper General | 2 | Side Mover |
| Phoenix Master | 1 | — |
| Kylin Master | 1 | — |
| Silver Chariot | 2 | Goose Wing |
| Vertical Bear | 2 | Free Bear |
| Knight | 2 | Side Soldier |
| Pig General | 2 | Free Pig |
| Chicken General | 2 | Free Chicken |
| Pup General | 2 | Free Pup |
| Horse General | 2 | Free Horse |
| Ox General | 2 | Free Ox |
| Center Standard | 2 | Front Standard |
| Side Boar | 2 | Free Boar |
| Silver Rabbit | 2 | Whale |
| Golden Deer | 2 | White Horse |
| Lion | 2 | Furious Fiend |
| Captive Cadet | 2 | Captive Officer |
| Great Stag | 2 | Free Stag |
| Violent Dragon | 2 | Great Dragon |
| Woodland Demon | 2 | Right Phoenix |
| Vice General | 1 | Great General |
| Great General | 1 | — |
| Stone Chariot | 2 | Walking Heron |
| Cloud Eagle | 2 | Strong Eagle |
| Bishop | 2 | Dragon Horse |
| Rook | 2 | Dragon King |
| Side Wolf | 2 | Free Wolf |
| Flying Cat | 2 | Rook |
| Mountain Falcon | 2 | Horned Falcon |
| Vertical Tiger | 2 | Free Tiger |
| Soldier | 2 | Cavalier |
| Little Standard | 2 | Rear Standard |
| Cloud Dragon | 2 | Great Dragon |
| Copper Chariot | 2 | Copper Elephant |
| Running Chariot | 2 | Burning Chariot |
| Ramshead Soldier | 2 | Tiger Soldier |
| Violent Ox | 2 | Flying Ox |
| Great Dragon | 2 | Ancient Dragon |
| Golden Bird | 2 | Free Bird |
| Dark Spirit | 1 | Buddhist Spirit |
| Deva | 1 | Teaching King |
| Wood Chariot | 2 | Wind Snapping Turtle |
| White Horse | 2 | Great Horse |
| Howling Dog (Right) | 1 | Right Dog |
| Howling Dog (Left) | 1 | Left Dog |
| Side Mover | 2 | Free Boar |
| Prancing Stag | 2 | Square Mover |
| Water Buffalo | 2 | Great Tapir |
| Ferocious Leopard | 2 | Bishop |
| Fierce Eagle | 2 | Soaring Eagle |
| Flying Dragon | 2 | Dragon King |
| Poisonous Snake | 2 | Hook Mover |
| Flying Goose | 2 | Dragon King |
| Strutting Crow | 2 | Flying Falcon |
| Blind Dog | 2 | Violent Stag |
| Water General | 2 | Vice General |
| Fire General | 2 | Great General |
| Phoenix | 1 | Golden Bird |
| Kylin | 1 | Golden Bird |
| Hook Mover | 1 | — |
| Little Turtle | 1 | Treasure Turtle |
| Great Turtle | 1 | Spirit Turtle |
| Capricorn | 1 | Hook Mover |
| Tile Chariot | 2 | Running Tile |
| Vertical Wolf | 2 | Running Wolf |
| Side Ox | 2 | Flying Ox |
| Donkey | 2 | Ceramic Dove |
| Flying Horse | 2 | Free King |
| Violent Bear | 2 | Great Bear |
| Angry Boar | 2 | Free Boar |
| Evil Wolf | 2 | Venomous Wolf |
| Liberated Horse | 2 | Heavenly Horse |
| Flying Cock | 2 | Raiding Falcon |
| Old Monkey | 2 | Mountain Witch |
| Chinese Cock | 2 | Wizard Stork |
| Northern Barbarian | 1 | Wooden Dove |
| Southern Barbarian | 1 | Golden Bird |
| Western Barbarian | 1 | Lion Dog |
| Eastern Barbarian | 1 | Lion |
| Violent Stag | 2 | Rushing Boar |
| Violent Wolf | 2 | Bear's Eyes |
| Treacherous Fox | 2 | Mountain Crane |
| Center Master | 1 | — |
| Roc Master | 1 | — |
| Earth Chariot | 2 | Young Bird |
| Vermillion Sparrow | 1 | Divine Sparrow |
| Blue Dragon | 1 | Divine Dragon |
| Enchanted Badger | 2 | Ceramic Dove |
| Horseman | 2 | Cavalier |
| Swooping Owl | 2 | Cloud Eagle |
| Climbing Monkey | 2 | Violent Stag |
| Cat Sword | 2 | Dragon Horse |
| Swallow's Wings | 2 | Gliding Swallow |
| Blind Monkey | 2 | Flying Stag |
| Blind Tiger | 2 | Flying Stag |
| Ox Cart | 2 | Plodding Ox |
| Side Flier | 2 | Side Dragon |
| Blind Bear | 2 | Flying Stag |
| Old Rat | 2 | Bird of Paradise |
| Square Mover | 2 | Strong Chariot |
| Coiled Serpent | 2 | Coiled Dragon |
| Reclining Dragon | 2 | Great Dragon |
| Free Eagle | 1 | — |
| Lion Hawk | 1 | — |
| Chariot Soldier | 2 | Heavenly Tetarch King |
| Side Soldier | 2 | Water Buffalo |
| Vertical Soldier | 2 | Chariot Soldier |
| Wind General | 2 | Violent Wind |
| River General | 2 | Chinese River |
| Mountain General | 2 | Peaceful Mountain |
| Front Standard | 2 | Great Standard |
| Horse Soldier | 2 | Running Horse |
| Wood General | 2 | White Elephant |
| Ox Soldier | 2 | Running Ox |
| Earth General | 2 | White Elephant |
| Boar Soldier | 2 | Running Boar |
| Stone General | 2 | White Elephant |
| Leopard Soldier | 2 | Running Leopard |
| Tile General | 2 | White Elephant |
| Bear Soldier | 2 | Strong Bear |
| Iron General | 2 | White Elephant |
| Great Standard | 1 | — |
| Great Master | 1 | — |
| Right Chariot | 1 | Right Iron Chariot |
| Left Chariot | 1 | Left Iron Chariot |
| Side Monkey | 2 | Side Soldier |
| Vertical Mover | 2 | Flying Ox |
| Flying Ox | 2 | Fire Ox |
| Longbow Soldier | 2 | Longbow General |
| Vertical Pup | 2 | Leopard King |
| Vertical Horse | 2 | Dragon Horse |
| Burning Soldier | 2 | Burning General |
| Dragon Horse | 2 | Horned Falcon |
| Dragon King | 2 | Soaring Eagle |
| Sword Soldier | 2 | Sword General |
| Horned Falcon | 2 | Great Falcon |
| Soaring Eagle | 2 | Great Eagle |
| Spear Soldier | 2 | Spear General |
| Vertical Leopard | 2 | Great Leopard |
| Savage Tiger | 2 | Great Tiger |
| Shortbow Soldier | 2 | Shortbow General |
| Roaring Dog | 1 | Lion Dog |
| Lion Dog | 1 | Great Elephant |
| Dog | 4 | Multi-General |
| Go-Between | 2 | Drunk Elephant |
| Pawn | 36 | Tokin |

**Total: 402 pieces per side.**

---

### Starting Position (Sente)

Positions are given as (rank, column). Columns 1–36 run left to right; rank 1 is Sente's back rank. Gote's setup is the mirror: rank 36 = Gote's back rank, column positions reversed.

| Rank | Pieces and Columns |
|---|---|
| 1 | Lance (1,36), Reverse Chariot (2,35), White Elephant (3 — singular), Fragrant Elephant (34), Mountain Dove (4,33), Flying Swallow (5,32), Captive Officer (6,31), Rain Dragon (7,30), Forest Demon (8,29), Mountain Stag (9,28), Running Pup (10,27), Running Serpent (11,26), Side Serpent (12,25), Great Dove (13,24), Running Tiger (14,23), Running Bear (15,22), Night Sword (16), Rear Standard (17,20), **King (18)**, **Crown Prince (19)**, Gold General (17,20 shared), Right General (21), Left General (16 — overlaps Night Sword?), Wrestler (16)... |

*Note: The original manuscript gives setup positions by rank and column number. Rank 1 holds the outermost defensive pieces; Ranks 2–10 hold the remaining armies; Rank 11 holds all 36 Pawns; Rank 12 holds Dogs (columns 6, 15, 22, 31) and Go-Betweens (columns 11, 26).*

For the authoritative column-by-column starting position, consult chessvariants.com/shogivariants.dir/taikyoku_english.html.

---

### Piece Ranking (for Jump Captures)

The following pieces can jump over lower-ranked pieces to make captures (as in Tenjiku Shogi):

| Rank | Pieces |
|---|---|
| 1 (highest) | King, Crown Prince |
| 2 | Great General |
| 3 | Vice General |
| 4 | Bishop General, Rook General, Violent Dragon, Flying Crocodile |
| 5 (all others) | All remaining pieces |

A piece of rank R can jump over any number of pieces ranked 5 (the rank below R), continuing until making a capture.

### Promotion

- Pieces promote upon reaching any of the **opponent's 11 ranks** (ranks 26–36 for Sente)
- Captured pieces are permanently removed from play (no drops)
- Each piece promotes to its fixed promoted form (listed in the piece table above)
- Promotion is irreversible

### Historical Note

Taikyoku Shogi is documented in a manuscript held at Osaka Municipal Central Library. Its playability has been questioned by historians — some believe it was a theoretical exercise assembled by combining all known Shogi variants rather than a game designed for practical play. No game records from historical times have survived, and no mating problems have been published.

### Attribution

Taikyoku Shogi is documented in a single known Japanese manuscript. English transcription by L. Lynn Smith, with thanks to Patrick Davin. Source: chessvariants.com/shogivariants.dir/taikyoku_english.html
