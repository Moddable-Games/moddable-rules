---
playable: true
title: Maka-Dai-Dai Shogi
slug: maka-dai-dai-shogi
board: "19×19"
players: "2"
parent: shogi
win: Capture the last royal piece
special: "19×19 historical Japanese Shogi variant meaning 'Great Dai-Dai Chess.' One of the largest chess-family games in recorded history. 96 pieces of 50 types per side (192 pieces total). No drops; captures remove permanently. Features Lion-power pieces, Hook Movers, the Emperor (universal leaper), and contagious promotion through the Teaching King and Buddhist Spirit. Promotion triggers on any capture. Historical; source: H. G. Muller (chessvariants.com)."
verified:
  date: "2026-08-31"
  method: "Desktop web research. Statements here are traceable to the sources below; anything that could not be confirmed is listed under unverified and must not be filled in from memory."
  sources:
    - "https://en.wikipedia.org/wiki/Maka_dai_dai_shogi"
  confidence: "Lower than the Dai and Tenjiku tables, and deliberately recorded as such. The raw wikitext was unreachable for this variant, so the piece table below came through a summarising fetcher already shown to return contradictory notation. Every field was extracted twice with independently worded prompts and only agreeing values kept. One arithmetic check passed and is the strongest evidence available: the 50 counts sum to 96, the article's own stated per-side total. Treat as good but unconfirmed, and re-verify against raw wikitext before building."
  unverified:
    - "Free wolf's movement. The article prints no notation for it. It must NOT be inferred from evil wolf plus free."
    - "The starting position, which the article gives only as a diagram image."
    - "ENGINE-CRITICAL. 'Pieces on the 4th, 5th, and 6th ranks which promote... promote to Gold' can mean either which piece TYPES promote to gold, identified by where they stand in the initial setup, or a positional trigger fired by promoting while standing on ranks 4 to 6. Context favours the first reading. It is not confirmed, and the two readings give completely different promotion tables. Resolve against a second source before encoding."
    - "Whether a piece that declines promotion keeps the option on a later capture. The phrasing does not say 'first', which suggests no persistent flag is needed, but this could not be confirmed."
disputed:
  - feature: "Deva"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "f[br]FlW"
        describes: "It can move one square diagonally backward to the right. (f[br]FlW)"
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "This is the description of the deva found in the SSZ. However, the SZ has the backward diagonal to the left rather than to the right (f[bl]FlW), while the SRZ shows a step in all four orthogonals and the two left-hand diagonals (W"
    engine: "f[br]FlW"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
  - feature: "Teaching King"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "as described in prose"
        describes: "The teaching king can move as either a lion dog or as a queen."
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "In the SZ and SSZ, the power of the teaching king is described as 狛犬と奔王をあわせた動き 'the combined movement of a lion-dog and a queen'. Western descriptions claim this, or various variations of this, such as the power of a lion and a vi"
    engine: "as described in prose"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
  - feature: "Dark Spirit"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "f[bl]FrW"
        describes: "It can move one square diagonally backward to the left. (f[bl]FrW)"
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "This is the description of the dark spirit in the SSZ. However, the SZ has the backward diagonal to the right rather than to the left (f[br]FrW), and the SRZ has it step in all four orthogonals and the two right-hand diagonals (Wr"
    engine: "f[bl]FrW"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
  - feature: "Buddhist Spirit"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "as described in prose"
        describes: "The Buddhist spirit can move as a lion or as a queen."
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "In the SZ and SSZ, the power of the Buddhist spirit is described as 獅子と奔王をあわせた動き 'the combined movement of a lion and a queen'."
    engine: "as described in prose"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
  - feature: "Coiled Serpent"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "fbWbF"
        describes: "The coiled serpent can move one square orthogonally forward or backward; or diagonally backward. (fbWbF)"
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "This is the description of the coiled serpent in the SZ and SSZ. However, the SRZ omits the backward orthogonal. (fWbF) This may be a copying error, as the free serpent moves directly backward in all three sources."
    engine: "fbWbF"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
  - feature: "Reclining Dragon"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "WbF"
        describes: "The reclining dragon can move one square in one of the four orthogonal directions or diagonally backward. (WbF)"
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "This is the description of the reclining dragon found in the SZ and SSZ. However, the SRZ describes it as moving like a silver general (FfW)."
    engine: "WbF"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
  - feature: "Free Dragon"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "RbB"
        describes: "The free dragon can move any number of squares in any of the four orthogonal directions, or diagonally backward. (RbB)"
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "In the SZ and SSZ, the free dragon is described as ranging forward and stepping backward, in both cases either orthogonally or diagonally (fQbK); this move was adopted by the TSA. In the SRZ it is described as ranging orthogonally"
    engine: "RbB"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
  - feature: "Old Monkey"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "FbW"
        describes: "Step: The old monkey can move one square in one of the four diagonal directions or orthogonally backward. (FbW)"
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "This is the description of the old monkey in the SZ and SSZ. However, the SRZ has the reverse, describing it as moving like a silver general. (FfW)"
    engine: "FbW"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
  - feature: "Mountain Witch"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "BbRfW"
        describes: "It can step one square directly forward. (BbRfW)"
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "This is the description in the SZ and SSZ. However, the SRZ describes the mountain witch as moving like a bishop (B)."
    engine: "BbRfW"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
  - feature: "Chinese Cock"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "rlbWfF"
        describes: "The Chinese cock can move one square orthogonally sideways or backward; or diagonally forward. (rlbWfF)"
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "This is the description of the Chinese cock found in the SZ and SSZ. However, the SRZ describes it moving in any diagonal or directly backwards, but not to the sides. (FbW)"
    engine: "rlbWfF"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
  - feature: "Furious Fiend"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "NADaKafavK"
        describes: "The furious fiend can move as a lion or as a lion dog. (NADaKafavK)"
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "獅子に白犬の動きを兼ねたもの」 per the SZ and SSZ. The only advantage this confers is moving to a third square in any one direction. Western sources have it range three squares in addition to the lion's move, but this is based on the same misund"
    engine: "NADaKafavK"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
  - feature: "Free Wolf"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "as described in prose"
        describes: "The free wolf can move any number of squares orthogonally sideways or forward; or diagonally forward."
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "The SZ says it can move any number of squares in any direction but orthogonally sideways, where it is restricted to move (not jump) up to five squares (BfbRrlR5); the SSZ says that it can move up to five squares orthogonally sidew"
    engine: "as described in prose"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
  - feature: "Blind Bear"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "FbR"
        describes: "It can move one square in one of the four diagonal directions. (FbR)"
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "This is the description of the blind bear in the SZ and SSZ. However, the SRZ has a move of one square in all directions (K)."
    engine: "FbR"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
  - feature: "Free Bear"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "BrlR"
        describes: "The free bear can move any number of free squares in the four diagonal directions or orthogonally sideways. (BrlR)"
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "The SZ and SSZ also allow a jump to the second square diagonally (BrlRfA), but this is not mentioned in the SRZ, and is quite unusual for a shogi variant. In that case it is not clear if the free bear can clear two pieces (BpBp2Br"
    engine: "BrlR"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
  - feature: "Free Boar"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "BrlR"
        describes: "The free boar can move any number of free squares in the four diagonal directions or orthogonally sideways. (BrlR)"
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "This is the description of the free boar in the SZ and SSZ. However, in the SRZ it instead has ranging moves in the forward directions, orthogonal and diagonal. (fQ)"
    engine: "BrlR"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
  - feature: "Old Rat"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "fB2bR2"
        describes: "The old rat may move one or two squares diagonally forward or orthogonally backward. (fB2bR2)"
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "The movement of the old rat is not described in SZ or SSZ. The movement given here is its power in dai dai shogi."
    engine: "fB2bR2"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
  - feature: "Lion Dog"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "KavKafavK"
        describes: "It is not required to take all three steps. (KavKafavK)"
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "Western sources only let the lion dog range three squares in any direction (Q3), but that makes the teaching king's move (lion dog plus queen) pleonastic."
    engine: "KavKafavK"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
  - feature: "Wrestler"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "B3rlW"
        describes: "It can move one square orthogonally sideways. (B3rlW)"
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "This is the description in the SZ and SSZ. However, the SRZ says the wrestler may move up to three squares diagonally or one square orthogonally, without restricting the latter to the sides (B3W)."
    engine: "B3rlW"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
  - feature: "She-Devil"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "R5B2"
        describes: "It can move up to five squares in one of the four orthogonal directions. (R5B2)"
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "This is the description of the she-devil in the SZ and SSZ. However, the SRZ does not mention the orthogonal move, only the one-to-two-step diagonal move (B2)."
    engine: "R5B2"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
  - feature: "Donkey"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "WfbD"
        describes: "It can jump to the second square orthogonally forward or backward. (WfbD)"
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "This is the description of the donkey in the SZ and SSZ, while the SRZ says 「上下踊り二目、踊らざれば一目、猛牛のごとし」, suggesting that it can jump to the second square 'above or under', otherwise it can move like violent ox does, but only for one s"
    engine: "WfbD"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
  - feature: "Capricorn"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "BmaB"
        describes: "It may only capture once, and cannot continue after capturing. (BmaB)"
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "The Edo-era rules appear to say only that the capricorn and hook mover move two times as a bishop (aB) or rook (aR), implying that they may capture twice. There also appears to be no mention of needing to capture in order to move,"
    engine: "BmaB"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
  - feature: "Side Flier"
    readings:
      - source: "Shogi Zushiki and Sho Shogi Zushiki (SZ, SSZ) as reported by en.wikipedia.org/wiki/Maka_dai_dai_shogi"
        says: "rlRF"
        describes: "It can move one square in one of the four diagonal directions. (rlRF)"
      - source: "The other manuscript or Western sources, as reported by the same article"
        says: "see describes"
        describes: "This is the description of the side flier found in the SZ and SSZ. However, the SRZ describes the diagonal step only in the forward directions (rlRfF)."
    engine: "rlRF"
    because: "Where the Edo-era manuscripts disagree this corpus follows the reading two of the three share, which is also the one the article prints in its main table. The dissenting reading is recorded above in full so that anyone building from these rules can choose it instead."
approximations:
  - feature: "Promotion by capture, and promotion to Gold from the middle ranks"
    source: "There are no promotion zones. A piece promotes when it makes a capture, and pieces standing on the 4th, 5th and 6th ranks promote to Gold General."
    engine: "No promotion at all: promotionZone is 0, so every piece keeps the movement it starts with. All the promoted forms are declared and reachable the moment the rule is built."
    blocker: "The plugin offers promotion by zone. Promotion triggered by the act of capturing, and a promotion target that depends on which rank the piece stands on rather than which piece it is, are both new."
  - feature: "Contagious promotion"
    source: "Capturing a Deva promotes the CAPTURER to Teaching King, and capturing a Dark Spirit promotes it to Buddhist Spirit - so the promotion target depends on what was taken, not on what took it."
    engine: "Not played. A captured Deva or Dark Spirit is an ordinary capture."
    blocker: "Every promotion rule in the plugin is a property of the moving piece. This one is a property of the victim, which nothing expresses yet."
  - feature: "The Emperor's jump"
    source: "The emperor can jump to any empty square on the board."
    engine: "Played, as a universal leaper that may not capture. Its own restrictions - whether it may jump into check, and how the win condition treats it alongside the king and prince - are not separately modelled."
    blocker: "The article does not state them."
engine:
  topology:
    type: grid
    rows: 19
    cols: 19
  players: [sente, gote]
  setup: "[ln][eg][st][tg][ig][cg][sg][gg][ds][ki][dv][gg][sg][cg][ig][tg][st][eg][ln]/[rc]1[ct]1[bm]1[rd][fl][bt][de][bt][fl][co]1[cc]1[ct]1[rc]/1[or]1[ab]1[bb]1[ew][ph][li][kr][ew]1[bb]1[ab]1[or]1/[dy][kn]1[vo]1[fy]1[sd][gd][ld][wr][bv][fy]1[vo]1[kn]1[dy]/[rk][rt][sm][sf][vm][bi][dh][dk][hm][fk][cp][dk][dh][bi][vm][sf][sm][lc][rk]/[pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw]/5[gb]7[gb]5/19/19/19/19/19/5[GB]7[GB]5/[PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW]/[RK][LC][SM][SF][VM][BI][DH][DK][CP][FK][HM][DK][DH][BI][VM][SF][SM][RT][RK]/[DY]1[KN]1[VO]1[FY][BV][WR][LD][GD][SD]1[FY]1[VO]1[KN][DY]/1[OR]1[AB]1[BB]1[EW][KR][LI][PH][EW]1[BB]1[AB]1[OR]1/[RC]1[CT]1[CC]1[CO][FL][BT][DE][BT][FL][RD]1[BM]1[CT]1[RC]/[LN][EG][ST][TG][IG][CG][SG][GG][DV][KI][DS][GG][SG][CG][IG][TG][ST][EG][LN]"
  render:
    cellSize: 18
  vocabulary:
    lance: { symbols: { "0": LN, "1": ln } }
    earth_general: { symbols: { "0": EG, "1": eg } }
    stone_general: { symbols: { "0": ST, "1": st } }
    tile_general: { symbols: { "0": TG, "1": tg } }
    iron_general: { symbols: { "0": IG, "1": ig } }
    copper_general: { symbols: { "0": CG, "1": cg } }
    silver_general: { symbols: { "0": SG, "1": sg } }
    gold_general: { symbols: { "0": GG, "1": gg } }
    deva: { symbols: { "0": DV, "1": dv } }
    king: { symbols: { "0": KI, "1": ki } }
    dark_spirit: { symbols: { "0": DS, "1": ds } }
    reverse_chariot: { symbols: { "0": RC, "1": rc } }
    cat_sword: { symbols: { "0": CT, "1": ct } }
    chinese_cock: { symbols: { "0": CC, "1": cc } }
    coiled_serpent: { symbols: { "0": CO, "1": co } }
    ferocious_leopard: { symbols: { "0": FL, "1": fl } }
    blind_tiger: { symbols: { "0": BT, "1": bt } }
    drunk_elephant: { symbols: { "0": DE, "1": de } }
    reclining_dragon: { symbols: { "0": RD, "1": rd } }
    blind_monkey: { symbols: { "0": BM, "1": bm } }
    old_rat: { symbols: { "0": OR, "1": or } }
    angry_boar: { symbols: { "0": AB, "1": ab } }
    blind_bear: { symbols: { "0": BB, "1": bb } }
    evil_wolf: { symbols: { "0": EW, "1": ew } }
    kirin: { symbols: { "0": KR, "1": kr } }
    lion: { symbols: { "0": LI, "1": li } }
    phoenix: { symbols: { "0": PH, "1": ph } }
    donkey: { symbols: { "0": DY, "1": dy } }
    knight: { symbols: { "0": KN, "1": kn } }
    violent_ox: { symbols: { "0": VO, "1": vo } }
    flying_dragon: { symbols: { "0": FY, "1": fy } }
    buddhist_devil: { symbols: { "0": BV, "1": bv } }
    wrestler: { symbols: { "0": WR, "1": wr } }
    lion_dog: { symbols: { "0": LD, "1": ld } }
    guardian_of_the_gods: { symbols: { "0": GD, "1": gd } }
    she_devil: { symbols: { "0": SD, "1": sd } }
    rook: { symbols: { "0": RK, "1": rk } }
    left_chariot: { symbols: { "0": LC, "1": lc } }
    side_mover: { symbols: { "0": SM, "1": sm } }
    side_flyer: { symbols: { "0": SF, "1": sf } }
    vertical_mover: { symbols: { "0": VM, "1": vm } }
    bishop: { symbols: { "0": BI, "1": bi } }
    dragon_horse: { symbols: { "0": DH, "1": dh } }
    dragon_king: { symbols: { "0": DK, "1": dk } }
    capricorn: { symbols: { "0": CP, "1": cp } }
    queen: { symbols: { "0": FK, "1": fk } }
    hook_mover: { symbols: { "0": HM, "1": hm } }
    right_chariot: { symbols: { "0": RT, "1": rt } }
    pawn: { symbols: { "0": PW, "1": pw } }
    go_between: { symbols: { "0": GB, "1": gb } }
  plugins:
    shogi:
      drops: false
      promotionZone: 0
      royalType: king
      promotionMap:
        king: emperor
        deva: teaching_king
        dark_spirit: buddhist_spirit
        gold_general: free_gold
        silver_general: free_silver
        copper_general: free_copper
        iron_general: free_iron
        tile_general: free_tile
        stone_general: free_stone
        earth_general: free_earth
        blind_tiger: free_tiger
        ferocious_leopard: free_leopard
        coiled_serpent: free_serpent
        reclining_dragon: free_dragon
        chinese_cock: wizard_stork
        cat_sword: free_cat
        lion: furious_fiend
        kirin: great_dragon
        phoenix: golden_bird
        evil_wolf: free_wolf
        blind_bear: free_bear
        angry_boar: free_boar
        old_rat: bat
        go_between: free_goer
      pieceMoves:
        lance: { betza: "fR" }
        earth_general: { betza: "fbW" }
        stone_general: { betza: "fF" }
        tile_general: { betza: "fFbW" }
        iron_general: { betza: "fK" }
        copper_general: { betza: "fbWfF" }
        silver_general: { betza: "FfW" }
        gold_general: { betza: "WfF" }
        deva: { type: leaper, offsets: [[0,-1],[1,1]], directional: true }
        king: { betza: "K" }
        dark_spirit: { type: leaper, offsets: [[0,1],[1,-1]], directional: true }
        reverse_chariot: { betza: "fbR" }
        cat_sword: { betza: "F" }
        chinese_cock: { betza: "rlbWfF" }
        coiled_serpent: { betza: "fbWbF" }
        ferocious_leopard: { betza: "FfbW" }
        blind_tiger: { betza: "FrlbW" }
        drunk_elephant: { betza: "FfrlW" }
        reclining_dragon: { betza: "WbF" }
        blind_monkey: { betza: "FbW" }
        old_rat: { betza: "fB2bR2" }
        angry_boar: { betza: "W" }
        blind_bear: { betza: "FbR" }
        evil_wolf: { betza: "frlK" }
        kirin: { betza: "FD" }
        lion: { betza: "NAD[aK]" }
        phoenix: { betza: "WA" }
        donkey: { betza: "WfbD" }
        knight: { betza: "ffN" }
        violent_ox: { betza: "R2" }
        flying_dragon: { betza: "B2" }
        buddhist_devil: { betza: "fB3rlbW" }
        wrestler: { betza: "B3rlW" }
        lion_dog: { type: area, dirs: all, steps: 3, sameLine: true }
        guardian_of_the_gods: { betza: "R3fF" }
        she_devil: { betza: "R5B2" }
        rook: { betza: "R" }
        left_chariot: { betza: "fR[fl][br]BbW" }
        side_mover: { betza: "rlRW" }
        side_flyer: { betza: "rlRF" }
        vertical_mover: { betza: "fbRW" }
        bishop: { betza: "B" }
        dragon_horse: { betza: "WB" }
        dragon_king: { betza: "FR" }
        capricorn: { betza: "BmaB" }
        queen: { betza: "Q" }
        hook_mover: { betza: "RmaR" }
        right_chariot: { betza: "fR[fr][bl]BbW" }
        pawn: { betza: "fW" }
        go_between: { betza: "fbW" }
        emperor: { type: universal, quiet: true }
        teaching_king: [{ type: area, dirs: all, steps: 3, sameLine: true }, { type: rider, dirs: all }]
        buddhist_spirit: [{ betza: "NAD[aK]" }, { type: rider, dirs: all }]
        free_gold: { betza: "RfB" }
        free_silver: { betza: "BfR" }
        free_copper: { betza: "fbRfB" }
        free_iron: { betza: "fQ" }
        free_tile: { betza: "fBbR" }
        free_stone: { betza: "fB" }
        free_earth: { betza: "fbR" }
        prince: { betza: "K" }
        free_tiger: { betza: "BrlbR" }
        free_leopard: { betza: "BfbR" }
        free_serpent: { betza: "fbRbB" }
        free_dragon: { betza: "RbB" }
        wizard_stork: { betza: "BfRbW" }
        mountain_witch: { betza: "BbRfW" }
        free_cat: { betza: "B" }
        furious_fiend: [{ betza: "NAD[aK]" }, { type: area, dirs: all, steps: 3, sameLine: true }]
        great_dragon: { betza: "rlRfbR2B3" }
        golden_bird: { betza: "fbRrlR2B3" }
        free_wolf: { betza: "BfbRrlR5" }
        free_bear: { betza: "BrlR" }
        free_boar: { betza: "BrlR" }
        bat: { betza: "fRbB" }
        free_goer: { betza: "fbR" }
  pieces:
    set: mce-shogi-fairy
---

## Maka-Dai-Dai Shogi

{{svg:maka-dai-dai-shogi-board.svg "Maka-Dai-Dai Shogi — starting position"}}

Maka-Dai-Dai Shogi (摩訶大大将棋, *Great Dai-Dai Chess*) is a historical Japanese Shogi variant played on a 19×19 board — the same dimensions as a Go board. Each side starts with 96 pieces of 50 different types (192 pieces total), making it double the size of Chu Shogi. No drops; captured pieces are permanently removed.

### The Board

19×19 grid. Standard Shogi orientation (sente at bottom). Files are labelled a–s (19 files); ranks 1–19. Pieces start on ranks 1–7 (Sente) and 13–19 (Gote); ranks 8–12 are empty at the start.

### Royals

Three piece types are royal (their capture wins or advances the win condition):
- **King** (j1) — standard King; promotes to **Emperor** (universal leaper)
- **Drunk Elephant** (j2) — promotes to **Crown Prince** (royal King) on capture
- **Emperor** (promoted King) — cannot be captured if protected

Win: capture the opponent's last royal. If the opponent has both a King and a Crown Prince (promoted Drunk Elephant), both must be captured.

---

### Starting Setup

Only Sente's side is given; Gote's setup is Sente's rotated 180°.

**Rank 1 (back rank):**

| Position | Piece | Movement | Promotes to |
|---|---|---|---|
| a1, s1 | Lance | Slides forward orthogonally | Gold General |
| b1, r1 | Earth General | Steps 1 backward or forward orthogonally | Free (slider in each step direction) |
| c1, q1 | Stone General | Steps 1 forward diagonally | Free |
| d1, p1 | Tile General | Steps 1 forward diagonally or 1 backward orthogonally | Free |
| e1, o1 | Iron General | Steps 1 forward orthogonally or forward diagonally | Free |
| f1, n1 | Copper General | Steps 1 forward diagonally or 1 vertical | Free |
| g1, m1 | Silver General | Steps 1 diagonally or 1 forward orthogonally | Free |
| h1, l1 | Gold General | Steps 1 orthogonally or 1 forward diagonally | Free |
| i1 | Deva | Steps 1 forward diagonally or 1 left or right or 1 forward left; | Teaching King |
| j1 | King | Steps 1 in any direction | Emperor |
| k1 | Dark Spirit | Steps 1 forward diagonally or 1 right or 1 left back | Buddhist Spirit |

**Rank 2:**

| Position | Piece | Movement | Promotes to |
|---|---|---|---|
| a2, s2 | Reverse Chariot | Slides forward or backward orthogonally | Gold General |
| c2, q2 | Cat Sword | Steps 1 diagonally | Free |
| e2 | Chinese Cock | Steps 1 forward diagonally or 1 backward sideways | Wizard Stork (fRbWB) |
| g2 | Coiled Serpent | Steps 1 backward diagonally or 1 vertical | Free |
| h2, l2 | Ferocious Leopard | Steps 1 diagonally or 1 vertically | Free |
| i2, k2 | Blind Tiger | Steps 1 diagonally or 1 backward sideways | Free |
| j2 | Drunk Elephant | Steps 1 forward ortho/sideways or diagonal | Crown Prince (royal King) |
| m2 | Reclining Dragon | Steps 1 orthogonally or 1 backward diagonally | Free |
| o2 | Blind Monkey | Steps 1 diagonally or 1 backward orthogonally | Mountain Witch (bRfWB) |

**Rank 3:**

| Position | Piece | Movement | Promotes to |
|---|---|---|---|
| b3, r3 | Old Rat | Leaps 2 forward diagonally or 2 backward orthogonally | Bat (fRbB) |
| d3, p3 | Angry Boar | Steps 1 in any of the four orthogonal directions (W) | Free Boar (BrlR) |
| f3, n3 | Blind Bear | Steps 1 diagonally; slides backward orthogonally | Free Bear |
| h3, l3 | Evil Wolf | Steps 1 forward diagonally or 1 forward orthogonally sideways | Free |
| i3 | Kirin | Steps 1 diagonally; leaps 2 orthogonally | Great Dragon (sRvW²F³) |
| j3 | Lion | Lion power (up to 2 King moves per turn; may capture twice; may pass) | Furious Fiend (Lion + Lion Dog) |
| k3 | Phoenix | Steps 1 orthogonally; leaps 2 diagonally | Golden Bird (vRsW²F³) |

*The Angry Boar was recorded here as "Steps 1 sideways". The source is explicit:
"The angry boar can move one square in one of the four orthogonal directions. (W)".
Corrected 2026-09-09 by cross-checking this table against Wikipedia's, which
agreed on every other comparable piece.*

*The Free Boar differs between manuscripts: the SZ and SSZ give it the diagonals
plus orthogonally sideways (BrlR), while the SRZ gives it ranging moves forward,
orthogonal and diagonal (fQ). BrlR is recorded above.*

**Rank 4:**

| Position | Piece | Movement | Promotes to |
|---|---|---|---|
| a4, s4 | Donkey | Leaps 2 orthogonally; steps 1 sideways | Gold General |
| c4, r4 | Knight | Leaps 2 forward then 1 side (Shogi knight) | Gold General |
| e4, p4 | Violent Ox | Steps 2 orthogonally | Gold General |
| g4, n4 | Flying Dragon | Leaps 2 diagonally | Gold General |
| h4 | Buddhist Devil | Steps 3 forward diagonally; steps 1 backward sideways | Gold General |
| i4 | Wrestler | Steps 3 diagonally | Gold General |
| j4 | Lion Dog | Up to 3 steps along any ray; may hop; may capture adjacent without moving | Gold General |
| k4 | Guardian of the Gods | Steps 3 orthogonally; steps 1 forward diagonally | Gold General |
| l4 | She-Devil | Steps 5 orthogonally; leaps 2 diagonally | Gold General |

**Rank 5:**

| Position | Piece | Movement | Promotes to |
|---|---|---|---|
| a5, s5 | Rook | Slides orthogonally | Gold General |
| b5 | Left Chariot | Slides forward ortho; steps 1 backward; slides left-forward and right-backward diagonally | Gold General |
| c5, q5 | Side Mover | Slides sideways; steps 1 vertically | Gold General |
| d5, p5 | Side Flyer | Leaps diagonally; slides sideways | Gold General |
| e5, o5 | Vertical Mover | Slides vertically; steps 1 sideways | Gold General |
| f5, n5 | Bishop | Slides diagonally | Gold General |
| g5, m5 | Dragon Horse | Steps 1 orthogonally; slides diagonally | Does not promote |
| h5, l5 | Dragon King | Steps 1 diagonally; slides orthogonally | Does not promote |
| i5 | Capricorn | Bishop that may make one 90° turn in its path | Gold General |
| j5 | Queen | Slides orthogonally or diagonally | Does not promote |
| k5 | Hook Mover | Rook that may make one 90° turn in its path | Gold General |
| r5 | Right Chariot | Slides forward ortho; steps 1 backward; slides right-forward and left-backward diagonally | Gold General |

**Ranks 6–7:**

| Position | Piece | Promotes to |
|---|---|---|
| a6–s6 | Pawn (steps 1 forward orthogonally) | Gold General |
| f7, n7 | Go-Between (steps 1 forward or backward orthogonally) | Free (slider version) |

---

### Key Piece Descriptions

**Lion:** Moves up to twice per turn in independent directions. The second move may be a capture, pass, or hop. Can capture two pieces in one turn or pass its turn by moving to an adjacent empty square and back. The strongest piece in Chu Shogi; in Maka-Dai-Dai there are no restrictions on capturing Lions.

**Lion Dog:** Takes up to three steps along any ray through its position. Each step may be a move, capture, or hop. Can return to the starting square but cannot overshoot it. Effectively attacks up to 3 squares in any direction with line-of-sight modification.

**Teaching King (promoted Deva):** Moves as Lion Dog or Queen. Contagious: any piece that captures the Teaching King promotes to Teaching King (except royals, which promote to their own promoted form).

**Buddhist Spirit (promoted Dark Spirit):** Moves as Lion or Queen. Same contagious promotion rule as Teaching King.

**Furious Fiend (promoted Lion):** Moves as Lion Dog or Lion.

**Emperor (promoted King):** Universal Leaper — can move to any square on the board. Cannot capture a protected piece (any piece the opponent could recapture if play continued). Both Emperors can only capture each other if unprotected.

**Hook Mover:** A Rook that may make one 90° turn anywhere in its path (but is not required to turn). Like a Rook, it stops at the point of capture.

**Capricorn:** A Bishop that may make one 90° turn anywhere in its path.

---

### Piece Table

Movement is in extended Betza notation — see Reading the Piece Tables in the
Shogi rulebook. Read the confidence note in this variant's `verified` block
before relying on these values.

| Piece | Count | Movement | Promotes to |
|---|---|---|---|
| King | 1 | `K` | Emperor |
| Hook mover | 1 | `RmaR` | Gold general |
| Capricorn | 1 | `BmaB` | Gold general |
| Queen | 1 | `Q` | none |
| Dragon king | 2 | `FR` | none |
| Dragon horse | 2 | `WB` | none |
| Rook | 2 | `R` | Gold general |
| Bishop | 2 | `B` | Gold general |
| Side flier | 2 | `rlRF` | Gold general |
| Lion | 1 | `NADaK` | Furious fiend |
| Lion dog | 1 | `KavKafavK` | Gold general |
| She-devil | 1 | `R5B2` | Gold general |
| Wrestler | 1 | `B3rlW` | Gold general |
| Guardian of the Gods | 1 | `R3fF` | Gold general |
| Buddhist devil | 1 | `fB3rlbW` | Gold general |
| Violent ox | 2 | `R2` | Gold general |
| Flying dragon | 2 | `B2` | Gold general |
| Old rat | 2 | `fB2bR2` | Bat |
| Right chariot | 1 | `fR[fr][bl]BbW` | Gold general |
| Left chariot | 1 | `fR[fl][br]BbW` | Gold general |
| Vertical mover | 2 | `fbRW` | Gold general |
| Side mover | 2 | `rlRW` | Gold general |
| Phoenix | 1 | `WA` | Golden bird |
| Kirin | 1 | `FD` | Great dragon |
| Donkey | 2 | `WfbD` | Gold general |
| Knight | 2 | `ffN` | Gold general |
| Drunken elephant | 1 | `FfrlW` | Prince |
| Blind tiger | 2 | `FrlbW` | Free tiger |
| Ferocious leopard | 2 | `FfbW` | Free leopard |
| Reclining dragon | 1 | `WbF` | Free dragon |
| Gold general | 2 | `WfF` | Free gold |
| Silver general | 2 | `FfW` | Free silver |
| Copper general | 2 | `fbWfF` | Free copper |
| Tile general | 2 | `fFbW` | Free tile |
| Evil wolf | 2 | `frlK` | Free wolf |
| Iron general | 2 | `fK` | Free iron |
| Stone general | 2 | `fF` | Free stone |
| Reverse chariot | 2 | `fbR` | Gold general |
| Lance | 2 | `fR` | Gold general |
| Earth general | 2 | `fbW` | Free earth |
| Go-between | 2 | `fbW` | Free goer |
| Blind bear | 2 | `FbR` | Free bear |
| Chinese cock | 1 | `rlbWfF` | Wizard stork |
| Old monkey | 1 | `FbW` | Mountain witch |
| Angry boar | 2 | `W` | Free boar |
| Cat sword | 2 | `F` | Free cat |
| Coiled serpent | 1 | `fbWbF` | Free serpent |
| Dark spirit | 1 | `f[bl]FrW` | Buddhist spirit |
| Deva | 1 | `f[br]FlW` | Teaching king |
| Pawn | 19 | `fW` | Gold general |

Promoted-only forms: Emperor (teleport, described above) · Prince `K` ·
Teaching king `QavKafavK` · Buddhist spirit `QNADaK` · Furious fiend
`NADaKafavK` · Golden bird `fbRrlR2B3` · Great dragon `rlRfbR2B3` · Bat `fRbB` ·
Mountain witch `BbRfW` · Wizard stork `BfRbW` · Free gold `RfB` · Free silver
`BfR` · Free copper `fbRfB` · Free iron `fQ` · Free tile `fBbR` · Free stone
`fB` · Free earth `fbR` · Free goer `fbR` · Free tiger `BrlbR` · Free leopard
`BfbR` · Free serpent `fbRbB` · Free dragon `RbB` · Free cat `B` · Free bear
`BrlR` · Free boar `BrlR` · Free wolf, for which the article prints no notation.

The Emperor's `(U)` in the source is a page-local shorthand for its teleport, not
a Betza atom: it jumps to any empty square, may jump to and capture any non-royal
piece anywhere, and may capture a royal only if that royal is unprotected.

---

### Promotion

- Promotion may occur **anywhere on the board**, triggered by **making a capture** (not by entering a zone)
- Each piece has a fixed promoted form — there is no choice
- Promoted condition is **contagious for Teaching King and Buddhist Spirit**: any piece that captures TK or BS promotes to that piece (royals are immune, promoting to their own form instead)
- When capturing a promoted piece, you **must** promote
- When capturing an unpromoted piece, promotion is optional
- Promotion is irreversible
- The Deva and Dark Spirit (unpromoted) also trigger contagious promotion on capture

### Repetition

Repetition is forbidden. The convention (following Asian chess traditions) is that the player giving perpetual check or perpetually chasing must be the one to deviate.

### Attribution

Maka-Dai-Dai Shogi is a historical Japanese chess variant of unknown precise origin. Rules documented from chessvariants.com/rules/maka-dai-dai-shogi, authored by H. G. Muller.
