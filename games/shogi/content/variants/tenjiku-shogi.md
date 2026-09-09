---
playable: true
title: Tenjiku Shogi
slug: tenjiku-shogi
board: "16×16"
players: "2"
parent: shogi
win: Capture all opponent royal pieces
special: "Medieval Japanese 16×16 Shogi variant derived from Chu Shogi. Introduces Fire Demons (burn all adjacent enemies after moving; passively burn enemies that move adjacent to them), hierarchical jumping generals, and Lion Hawk / Free Eagle double-movers. No drops. Extinction royalty."
verified:
  date: "2026-08-31"
  method: "Desktop web research. Statements here are traceable to the sources below; anything that could not be confirmed is listed under unverified and must not be filled in from memory."
  sources:
    - "https://en.wikipedia.org/wiki/Tenjiku_shogi"
    - "https://en.wikipedia.org/w/index.php?title=Tenjiku_shogi&action=raw (raw wikitext, 2026-09-01, source of the piece table)"
  decisions:
    - "Where a fire demon moves next to another fire demon, sources differ on whether other adjacent pieces also burn. The Tenjiku Shogi Association rules specify that only the moving fire demon is immolated, and that reading is the one recorded here."
  unverified:
    - "Lion-capture and lion-trading restrictions, and Tenjiku's relationship to chu shogi's lion rules."
    - "The fire demon's orthogonal range. The source contradicts itself: its disputed-moves section labels the move `BvR` while describing it as along the rank, and under standard Betza `v` is vertical. The main table's `BrlR` matches the prose and is what the table below records."
    - "What happens when both kings perish in one move, where a king captures another standing beside a friendly fire demon. The historical rules do not resolve it."
    - "Whether the free eagle sits anywhere in the jump-rank hierarchy. The source flags its absence without settling it."
approximations:
  - feature: "The heavenly tetrarch's shooting capture"
    source: "The promoted chariot soldier is B(>=2)fbR(>=2)rlR(2<=n<=3)cxK: it cannot reach an adjacent square by moving, but may capture one without moving."
    engine: "Its ranges and its shooting capture are both played. What is not modelled is the source's note that it 'has other idiosyncrasies'."
    blocker: "The article does not enumerate them."
  - feature: "Lion-trading immunity"
    source: "Tenjiku inherits Chu Shogi's restrictions on capturing a lion."
    engine: "Lions and lion hawks may be captured under the ordinary rules."
    blocker: "The rules ask whether a capture could be answered, which needs recapture analysis a ply beyond legality, and the previous move kept as state."
engine:
  topology:
    type: grid
    rows: 16
    cols: 16
  players: [sente, gote]
  setup: "[ln][kn][fl][ig][cg][sg][gg][de][ki][gg][sg][cg][ig][fl][kn][ln]/[rc]1[cs][cs]1[bt][ph][fk][li][kr][bt]1[cs][cs]1[rc]/[ss][vt][bi][dh][dk][wb][fd][fe][lw][fd][wb][dk][dh][bi][vt][ss]/[sm][vm][rk][hf][se][bg][rg][vg][gr][rg][bg][se][hf][rk][vm][sm]/[pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw]/4[dg]6[dg]4/16/16/16/16/4[DG]6[DG]4/[PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW]/[SM][VM][RK][HF][SE][BG][RG][GR][VG][RG][BG][SE][HF][RK][VM][SM]/[SS][VT][BI][DH][DK][WB][FD][LW][FE][FD][WB][DK][DH][BI][VT][SS]/[RC]1[CS][CS]1[BT][KR][LI][FK][PH][BT]1[CS][CS]1[RC]/[LN][KN][FL][IG][CG][SG][GG][KI][DE][GG][SG][CG][IG][FL][KN][LN]"
  render:
    cellSize: 20
  vocabulary:
    lance: { symbols: { "0": LN, "1": ln } }
    knight: { symbols: { "0": KN, "1": kn } }
    leopard: { symbols: { "0": FL, "1": fl } }
    iron_general: { symbols: { "0": IG, "1": ig } }
    copper: { symbols: { "0": CG, "1": cg } }
    silver: { symbols: { "0": SG, "1": sg } }
    gold: { symbols: { "0": GG, "1": gg } }
    king: { symbols: { "0": KI, "1": ki } }
    elephant: { symbols: { "0": DE, "1": de } }
    reverse_chariot: { symbols: { "0": RC, "1": rc } }
    chariot_soldier: { symbols: { "0": CS, "1": cs } }
    blind_tiger: { symbols: { "0": BT, "1": bt } }
    kirin: { symbols: { "0": KR, "1": kr } }
    lion: { symbols: { "0": LI, "1": li } }
    queen: { symbols: { "0": FK, "1": fk } }
    phoenix: { symbols: { "0": PH, "1": ph } }
    side_soldier: { symbols: { "0": SS, "1": ss } }
    vertical_soldier: { symbols: { "0": VT, "1": vt } }
    bishop: { symbols: { "0": BI, "1": bi } }
    dragon_horse: { symbols: { "0": DH, "1": dh } }
    dragon_king: { symbols: { "0": DK, "1": dk } }
    water_buffalo: { symbols: { "0": WB, "1": wb } }
    fire_demon: { symbols: { "0": FD, "1": fd } }
    lion_hawk: { symbols: { "0": LW, "1": lw } }
    free_eagle: { symbols: { "0": FE, "1": fe } }
    side_mover: { symbols: { "0": SM, "1": sm } }
    vertical_mover: { symbols: { "0": VM, "1": vm } }
    rook: { symbols: { "0": RK, "1": rk } }
    horned_falcon: { symbols: { "0": HF, "1": hf } }
    soaring_eagle: { symbols: { "0": SE, "1": se } }
    bishop_general: { symbols: { "0": BG, "1": bg } }
    rook_general: { symbols: { "0": RG, "1": rg } }
    great_general: { symbols: { "0": GR, "1": gr } }
    vice_general: { symbols: { "0": VG, "1": vg } }
    pawn: { symbols: { "0": PW, "1": pw } }
    dog: { symbols: { "0": DG, "1": dg } }
    prince: { symbols: { "0": PR, "1": pr } }
    heavenly_tetrarch: { symbols: { "0": HT, "1": ht } }
    flying_ox: { symbols: { "0": FO, "1": fo } }
    flying_stag: { symbols: { "0": FS, "1": fs } }
    free_boar: { symbols: { "0": FB, "1": fb } }
    multi_general: { symbols: { "0": MG, "1": mg } }
    whale: { symbols: { "0": WH, "1": wh } }
    white_horse: { symbols: { "0": WT, "1": wt } }
  plugins:
    shogi:
      drops: false
      promotionZone: 5
      royalType: king
      # "They may only jump over other pieces of lower rank, whether
      # friend or foe. None may jump a king or prince." 1 is highest;
      # anything unlisted is beneath all of them and may be jumped.
      pieceRanks:
        king: 1
        prince: 1
        great_general: 2
        vice_general: 3
        rook_general: 4
        bishop_general: 4
      # A fire demon removes every adjacent enemy wherever it stops, and
      # anything that stops beside one is removed too. Both are the same sweep.
      burn:
        type: fire_demon
      promotionMap:
        pawn: gold
        dog: multi_general
        iron_general: vertical_soldier
        knight: side_soldier
        lance: white_horse
        side_soldier: water_buffalo
        vertical_soldier: chariot_soldier
        reverse_chariot: whale
        side_mover: free_boar
        vertical_mover: flying_ox
        copper: side_mover
        silver: vertical_mover
        gold: rook
        leopard: bishop
        blind_tiger: flying_stag
        elephant: prince
        phoenix: queen
        kirin: lion
        bishop: dragon_horse
        rook: dragon_king
        dragon_horse: horned_falcon
        dragon_king: soaring_eagle
        chariot_soldier: heavenly_tetrarch
        water_buffalo: fire_demon
        lion: lion_hawk
        queen: free_eagle
        rook_general: great_general
        bishop_general: vice_general
      pieceMoves:
        lance: { betza: "fR" }
        knight: { betza: "ffN" }
        leopard: { betza: "FfbW" }
        iron_general: { betza: "fK" }
        copper: { betza: "fKbW" }
        silver: { betza: "FfW" }
        gold: { betza: "WfF" }
        king: { betza: "K" }
        elephant: { betza: "FfrlW" }
        reverse_chariot: { betza: "fbR" }
        chariot_soldier: { betza: "BfbRrlR2" }
        blind_tiger: { betza: "FrlbW" }
        kirin: { betza: "FD" }
        lion: { betza: "NAD[aK]" }
        queen: { betza: "Q" }
        phoenix: { betza: "WA" }
        side_soldier: { betza: "WfR2rlR" }
        vertical_soldier: { betza: "WfRrlR2" }
        bishop: { betza: "B" }
        dragon_horse: { betza: "WB" }
        dragon_king: { betza: "FR" }
        water_buffalo: { betza: "BrlRfbR2" }
        fire_demon: { betza: "BrlR[mKa3K]xK" }
        lion_hawk: { betza: "BNAD[aK]" }
        free_eagle: { betza: "QDA[aF]" }
        side_mover: { betza: "WrlR" }
        vertical_mover: { betza: "WfbR" }
        rook: { betza: "R" }
        horned_falcon: { betza: "BrlbRf[avW]fD" }
        soaring_eagle: { betza: "RbBf[avF]fA" }
        bishop_general: { betza: "BcppB" }
        rook_general: { betza: "RcppR" }
        great_general: { betza: "QcppQ" }
        vice_general: { betza: "BcppB[mKa3K]" }
        pawn: { betza: "fW" }
        dog: { betza: "fWbF" }
        prince: { betza: "K" }
        heavenly_tetrarch: { betza: "B(>=2)fbR(>=2)rlR(2<=n<=3)cxK" }
        flying_ox: { betza: "BfbR" }
        flying_stag: { betza: "fbRK" }
        free_boar: { betza: "BrlR" }
        multi_general: { betza: "fRbB" }
        whale: { betza: "fRbQ" }
        white_horse: { betza: "fQbR" }
  pieces:
    set: mce-shogi-fairy
---

## Tenjiku Shogi

{{svg:tenjiku-shogi-board.svg "Tenjiku Shogi — starting position"}}

Tenjiku Shogi (天竺将棋) is a medieval Japanese chess variant played on a 16×16 board. It is derived from Chu Shogi, expanding the board from 12×12 to 16×16 to accommodate powerful new pieces — most critically the Fire Demon. Despite the larger board, games tend to be shorter than Chu Shogi due to the Fire Demon's destructive reach.

### Starting Position

Pieces occupy ranks 1–6 (Sente) and ranks 11–16 (Gote), mirrored. Files run a–p (16 files).

**Rank 1 (back rank, files a–p):**
Lance · Knight · Ferocious Leopard · Iron General · Copper General · Silver General · Gold General · King · Drunk Elephant · Gold General · Silver General · Copper General · Iron General · Ferocious Leopard · Knight · Lance

**Rank 2:**
Reverse Chariot (a2, p2) · Chariot Soldiers (c2, d2, m2, n2) · Blind Tiger (f2, k2) · Kirin (g2) · Lion (h2) · Free King (i2) · Phoenix (j2)

**Rank 3:**
Side Soldier (a3, p3) · Vertical Soldier (b3, o3) · Bishop (c3, n3) · Dragon Horse (d3, m3) · Dragon King (e3, l3) · Water Buffalo (f3, k3) · Fire Demon (g3, j3) · Lion Hawk (h3) · Free Eagle (i3)

**Rank 4:**
Side Mover (a4, p4) · Vertical Mover (b4, o4) · Rook (c4, n4) · Horned Falcon (d4, m4) · Soaring Eagle (e4, l4) · Bishop General (f4, k4) · Rook General (g4, j4) · Great General (h4) · Vice General (i4)

**Rank 5:** Pawns on all 16 files.

**Rank 6:** Dog at e6 and l6.

### Key Pieces

**Fire Demon (g3, j3):** The most powerful piece. After moving, burns (removes) all enemy pieces on any of the 8 squares adjacent to its destination. Additionally, any enemy piece that moves adjacent to a stationary Fire Demon is immediately burned by the Demon passively — the moving piece is destroyed before it can attack. A Fire Demon moving adjacent to another Fire Demon is burned (the moving Demon loses). Fire Demons can also make an area move of up to 3 King steps in freely chosen directions, stopping after capturing; burning only occurs after the final step. When a Water Buffalo promotes to a Fire Demon, all adjacent enemy pieces are immediately burned.

**Jumping Generals — Great General (h4), Vice General (i4), Rook General (g4/j4), Bishop General (f4/k4):** All slide as Queen, Bishop/Rook respectively, but may also jump over any number of pieces when capturing. Jump-capture is restricted by a hierarchy:
- Rank 3 (highest among generals): Great General
- Rank 2: Vice General
- Rank 1: Rook General and Bishop General
- Rank 0: all other pieces
- Rank 4 (highest of all): King and Crown Prince — cannot be jump-captured

A general may jump over only those with rank lower than itself, but may capture any piece regardless of rank (except royals). The Vice General may also make up to 3 King steps as an area move (no jumping; stops after capture).

**Lion (h2):** Double-mover as in Chu Shogi — up to 2 King steps per turn, freely changing direction, including returning to start, annihilating adjacent enemies, or making double captures. No Lion-trading restrictions apply in Tenjiku (unlike Chu Shogi).

**Lion Hawk (h3):** Lion double-move combined with Bishop slide.

**Free Eagle (i3):** Queen slide combined with diagonal double-move (Lion-style restricted to diagonal directions). Can annihilate diagonally adjacent enemies without moving.

**Soaring Eagle / Horned Falcon:** Slide as Queen, but in certain directions have a stinging move: can move to or jump to the second square, jump to the second while annihilating the first, or annihilate the first without moving. Soaring Eagle does this diagonally forward; Horned Falcon straight forward.

### Piece Table

All 44 types (36 starting and 8 promoted-only) carry a notation in the source.
Movement is in extended Betza notation — see Reading the Piece Tables in the
Shogi rulebook. The source carries a standing caveat that Tenjiku's historical
rules are unclear and that sources differ; what follows is its reconstruction
from chu shogi.

| Piece | Romaji | Count | Movement | Promotes to |
|---|---|---|---|---|
| King | osho / gyokusho | 1 | `K` | none |
| Great general | taisho | 1 | `QcppQ` + restrictions | none |
| Vice general | fukusho | 1 | `BcppB[mKa3K]` + restrictions | none |
| Rook general | hisho | 2 | `RcppR` + restrictions | great general |
| Bishop general | kakusho | 2 | `BcppB` + restrictions | vice general |
| Free eagle | honju | 1 | `QDA[aF]` | none |
| Queen | honno | 1 | `Q` | free eagle |
| Soaring eagle | hiju | 2 | `RbBf[avF]fA` | rook general |
| Horned falcon | kakuo | 2 | `BrlbRf[avW]fD` | bishop general |
| Water buffalo | suigyu | 2 | `BrlRfbR2` | fire demon |
| Chariot soldier | shahei | 4 | `BfbRrlR2` | heavenly tetrarch |
| Fire demon | kaki | 2 | `BrlR[mKa3K]` + immediate `xK` | none |
| Lion hawk | shio | 1 | `BNAD[aK]` | none |
| Lion | shishi | 1 | `NAD[aK]` | lion hawk |
| Dragon king | ryuo | 2 | `FR` | soaring eagle |
| Dragon horse | ryume | 2 | `WB` | horned falcon |
| Rook | hisha | 2 | `R` | dragon king |
| Bishop | kakugyo | 2 | `B` | dragon horse |
| Kirin | kirin | 1 | `FD` | lion |
| Phoenix | hoo | 1 | `WA` | queen |
| Drunk elephant | suizo | 1 | `FfrlW` | prince |
| Blind tiger | moko | 2 | `FrlbW` | flying stag |
| Ferocious leopard | mohyo | 2 | `FfbW` | bishop |
| Gold general | kinsho | 2 | `WfF` | rook |
| Silver general | ginsho | 2 | `FfW` | vertical mover |
| Copper general | dosho | 2 | `fKbW` | side mover |
| Vertical mover | shugyo | 2 | `WfbR` | flying ox |
| Side mover | ogyo | 2 | `WrlR` | free boar |
| Reverse chariot | hensha | 2 | `fbR` | whale |
| Vertical soldier | shuhei | 2 | `WfRrlR2` | chariot soldier |
| Side soldier | ohei | 2 | `WfR2rlR` | water buffalo |
| Lance | kyosha | 2 | `fR` | white horse |
| Knight | keima | 2 | `ffN` | side soldier |
| Iron general | tessho | 2 | `fK` | vertical soldier |
| Dog | inu | 2 | `fWbF` | multi general |
| Pawn | fuhyo | 16 | `fW` | gold general |

Promoted-only forms:

| Piece | Romaji | Movement |
|---|---|---|
| Prince | taishi | `K` |
| Heavenly tetrarch | shitenno | `B(>=2)fbR(>=2)rlR(2<=n<=3)cxK` |
| Flying ox | higyu | `BfbR` |
| Flying stag | hiroku | `fbRK` |
| Free boar | honcho | `BrlR` |
| Multi general | suisho | `fRbB` |
| Whale | keigei | `fRbQ` |
| White horse | hakku | `fQbR` |

The two camps are deliberately asymmetric: Gold General and Vice General, Lion
Hawk and Free Eagle, and King and Drunk Elephant each swap sides between them,
while Phoenix, Queen, Lion and Kirin mirror.

### Promotion

The last 5 ranks form the promotion zone. Pieces promote optionally when entering the zone or moving within it to make a capture. Each piece promotes at most once:

Water Buffalo → Fire Demon · Vertical Soldier → Water Buffalo · Iron General → Vertical Soldier · Lion → Lion Hawk · Kirin → Lion · Free King → Free Eagle · Phoenix → Free King · Rook General → Great General · Soaring Eagle → Rook General · Dragon King → Soaring Eagle · Rook → Dragon King · Gold General → Rook · Pawn → Gold General · Dog → Multi-General (fRbB) · Reverse Chariot → Whale (vRbB) · Bishop General → Vice General · Horned Falcon → Bishop General · Dragon Horse → Horned Falcon · Bishop → Dragon Horse · Ferocious Leopard → Bishop · Chariot Soldier → Heavenly Tetrarchs · Side Soldier → Chariot Soldier · Knight → Side Soldier · Vertical Mover → Flying Ox (BvR) · Silver General → Vertical Mover · Lance → White Horse (vRfB) · Blind Tiger → Flying Stag (vRFsW) · Drunk Elephant → Crown Prince · Side Mover → Free Boar (BsR) · Copper General → Side Mover

King, Fire Demon, Great General, Vice General, Lion Hawk, and Free Eagle do not promote.

### Rules

**Win:** Capture all opponent royal pieces. Royals are the King and Crown Prince (Drunk Elephant's promoted form). A player with both survives losing one; they lose only when the last royal is captured or burned.

**No Drops:** Captured pieces are permanently removed.

**Promotion Trigger:** A move qualifies when it starts outside the zone and ends inside it, or is a capture starting inside. Igui does not qualify, since the piece begins and ends outside. As in Dai Shogi, a piece that declines promotion may afterwards promote only by capturing, and that restriction resets when it leaves the zone and re-enters — per-piece state that cannot be derived from the position.

**No Check Rule:** No prohibition against moving into or remaining in check. Stalemate cannot occur in practical play.

**Repetition:** Perpetual check is forbidden — the checker must deviate. Perpetual chasing also requires the chaser to deviate. Pure positional repetitions (neither side attacking) are draws.

### Attribution

Medieval Japanese game. Rules documented from chessvariants.com/rules/tenjiku-shogi (H. G. Muller; revised A. M. DeWitt, 2026).
