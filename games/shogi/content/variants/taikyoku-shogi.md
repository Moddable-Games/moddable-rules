---
title: Taikyoku Shogi
slug: taikyoku-shogi
board: "36×36"
players: "2"
parent: shogi
win: Capture the King and Crown Prince
special: "36×36 historical Japanese Shogi variant meaning 'Ultimate Chess.' The largest chess variant ever documented. 402 pieces per side (804 total on 1,296 squares). Whether it was ever played to completion is disputed — a single game is estimated to require 10,000+ moves. Documented in a single known Japanese manuscript. L. Lynn Smith transcription; source: chessvariants.com."
engine:
  topology:
    type: grid
    rows: 36
    cols: 36
  players: [sente, gote]
  setup: "[ln][wt][rq][wl][fd][me][lo][bc][rh][fr][ed][dn][ft][fk][re][rg][gg][cr][ki][gg][lg][re][fk][ft][cd][ed][fr][rh][bc][lo][me][fd][wl][rq][ts][ln]/[rc][fp][md][fs][cf][ra][fm][ms][rp][rn][ss][gv][rj][ru][ns][gd][sg][de][nk][sg][wr][bv][ru][rj][gv][ss][rn][rp][ms][fm][ra][cf][fs][md][we][rc]/[gc][sd][rf][rl][bg][rr][rv][ri][bo][wn][fu][rb][ok][pc][wq][fi][cg][pm][km][cg][fi][wq][pc][ok][rb][fu][wn][bo][la][lt][rr][bg][rl][rf][sd][gc]/[sa][vb][kn][pg][ck][pu][hg][og][ct][si][sr][gl][li][ca][gs][vd][wx][vg][gr][wx][vd][gs][ca][li][gl][sr][si][ct][og][hg][pu][ck][pg][kn][vb][sa]/[tc][ce][bi][rk][sw][fa][mf][vr][sl][ll][cl][cu][rx][rs][vo][gt][go][ds][dv][go][gt][vo][rs][rx][cu][cl][ll][sl][vr][mf][fa][sw][rk][bi][ce][tc]/[wc][wh][hr][sm][pr][wb][fl][fe][fy][ps][fn][sc][bl][wg][fg][ph][hm][lu][gu][cp][ky][fg][wg][bl][sc][fn][ps][fy][fe][fl][wb][pr][sm][hl][wh][wc]/[tl][vw][sx][dy][fh][vi][ab][ew][lh][fc][om][cc][nb][su][va][vf][tf][cn][rm][tf][vf][va][eb][ws][cc][om][fc][lh][ew][ab][vi][fh][dy][sx][vw][tl]/[ec][vs][en][hn][so][cm][cs][wi][bm][bt][oc][sf][bb][or][sq][co][rd][fq][lw][rd][co][sq][or][bb][sf][oc][bt][bm][wi][cs][cm][so][hn][en][bd][ec]/[ch][sn][vt][wf][rw][mg][ff][hs][wo][os][eg][bs][st][ls][tg][ba][ig][ga][gm][ig][ba][tg][ls][st][bs][eg][os][wo][hs][ff][mg][rw][wf][vt][sn][ch]/[rt][sk][vm][fo][lb][vp][vh][bu][dh][dk][wd][hf][se][sp][vl][sv][sb][ro][ld][sb][sv][vl][sp][se][hf][wd][dk][dh][bu][vh][vp][lb][fo][vm][sk][lc]/[pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw]/5[dg]4[gb]3[dg]6[dg]3[gb]4[dg]5/36/36/36/36/36/36/36/36/36/36/36/36/5[DG]4[GB]3[DG]6[DG]3[GB]4[DG]5/[PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW]/[LC][SK][VM][FO][LB][VP][VH][BU][DH][DK][WD][HF][SE][SP][VL][SV][SB][LD][RO][SB][SV][VL][SP][SE][HF][WD][DK][DH][BU][VH][VP][LB][FO][VM][SK][RT]/[CH][SN][VT][WF][RW][MG][FF][HS][WO][OS][EG][BS][ST][LS][TG][BA][IG][GM][GA][IG][BA][TG][LS][ST][BS][EG][OS][WO][HS][FF][MG][RW][WF][VT][SN][CH]/[EC][BD][EN][HN][SO][CM][CS][WI][BM][BT][OC][SF][BB][OR][SQ][CO][RD][LW][FQ][RD][CO][SQ][OR][BB][SF][OC][BT][BM][WI][CS][CM][SO][HN][EN][VS][EC]/[TL][VW][SX][DY][FH][VI][AB][EW][LH][FC][OM][CC][WS][EB][VA][VF][TF][RM][CN][TF][VF][VA][SU][NB][CC][OM][FC][LH][EW][AB][VI][FH][DY][SX][VW][TL]/[WC][WH][HL][SM][PR][WB][FL][FE][FY][PS][FN][SC][BL][WG][FG][KY][CP][GU][LU][HM][PH][FG][WG][BL][SC][FN][PS][FY][FE][FL][WB][PR][SM][HR][WH][WC]/[TC][CE][BI][RK][SW][FA][MF][VR][SL][LL][CL][CU][RX][RS][VO][GT][GO][DV][DS][GO][GT][VO][RS][RX][CU][CL][LL][SL][VR][MF][FA][SW][RK][BI][CE][TC]/[SA][VB][KN][PG][CK][PU][HG][OG][CT][SI][SR][GL][LI][CA][GS][VD][WX][GR][VG][WX][VD][GS][CA][LI][GL][SR][SI][CT][OG][HG][PU][CK][PG][KN][VB][SA]/[GC][SD][RF][RL][BG][RR][LT][LA][BO][WN][FU][RB][OK][PC][WQ][FI][CG][KM][PM][CG][FI][WQ][PC][OK][RB][FU][WN][BO][RI][RV][RR][BG][RL][RF][SD][GC]/[RC][WE][MD][FS][CF][RA][FM][MS][RP][RN][SS][GV][RJ][RU][BV][WR][SG][NK][DE][SG][GD][NS][RU][RJ][GV][SS][RN][RP][MS][FM][RA][CF][FS][MD][FP][RC]/[LN][TS][RQ][WL][FD][ME][LO][BC][RH][FR][ED][CD][FT][FK][RE][LG][GG][KI][CR][GG][RG][RE][FK][FT][DN][ED][FR][RH][BC][LO][ME][FD][WL][RQ][WT][LN]"
  render:
    cellSize: 10
---

## Taikyoku Shogi

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
