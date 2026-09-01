---
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
unsupported: "16x16, 78 pieces a side across 36 types, no drops. The Wikipedia piece table is in Betza notation and is directly machine-readable. Three mechanics: FIRE DEMON BURNING - wherever a fire demon stops, every adjacent enemy piece except another fire demon is removed, and any piece that stops next to an enemy fire demon is removed after making its capture, so this is a post-move board pass that also destroys the mover's own pieces; JUMPING GENERALS - when capturing, a great general may jump any number of LOWER-RANKING pieces, which needs a piece-rank comparison table in move generation; and AREA MOVES - the vice general and fire demon may step up to three times in one turn, stopping on capture. No per-piece persistent state is needed: burning is positional, not a status effect."
engine:
  topology:
    type: grid
    rows: 16
    cols: 16
  players: [sente, gote]
  setup: "[ln][kn][fl][ig][cg][sg][gg][de][ki][gg][sg][cg][ig][fl][kn][ln]/[rc]1[cs][cs]1[bt][ph][fk][li][kr][bt]1[cs][cs]1[rc]/[ss][vt][bi][dh][dk][wb][fd][fe][lw][fd][wb][dk][dh][bi][vt][ss]/[sm][vm][rk][hf][se][bg][rg][vg][gr][rg][bg][se][hf][rk][vm][sm]/[pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw]/4[dg]6[dg]4/16/16/16/16/4[DG]6[DG]4/[PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW]/[SM][VM][RK][HF][SE][BG][RG][GR][VG][RG][BG][SE][HF][RK][VM][SM]/[SS][VT][BI][DH][DK][WB][FD][LW][FE][FD][WB][DK][DH][BI][VT][SS]/[RC]1[CS][CS]1[BT][KR][LI][FK][PH][BT]1[CS][CS]1[RC]/[LN][KN][FL][IG][CG][SG][GG][KI][DE][GG][SG][CG][IG][FL][KN][LN]"
  render:
    cellSize: 20
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
