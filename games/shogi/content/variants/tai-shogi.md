---
title: Tai Shogi
slug: tai-shogi
board: "25×25"
players: "2"
parent: shogi
win: Capture the King (and Crown Prince if present)
special: "25×25 historical Japanese Shogi variant. Name means 'Grand Chess.' Approximately 177 piece types per side (354 pieces total) — the largest documented chess variant with complete, verified piece movements for every piece. No drops; captured pieces removed from play. Intermediate in scale between Maka-Dai-Dai Shogi (19×19) and Taikyoku Shogi (36×36). Documented in historical Japanese manuscripts."
engine:
  topology:
    type: grid
    rows: 25
    cols: 25
  players: [sente, gote]
  setup: "[ln][wt][wl][fy][lo][dw][rk][dh][dk][fk][gg][ds][em][dv][gg][fk][dk][dh][rk][dw][lo][fy][wl][ts][ln]/[rc][si][se][kn][ps][ft][bi][fe][we][fr][sg][rg][cr][lg][sg][fr][we][fe][bi][ft][ps][kn][se][si][rc]/[sc][wh][rs][vo][cs][bb][sv][gl][bm][bt][sd][gd][nk][wr][bv][bt][bm][gl][sv][bb][cs][vo][rs][wh][sc]/[sl][wb][fl][nb][su][cc][hf][om][rb][pc][go][ph][li][kr][gt][pc][ok][om][hf][cc][eb][ws][fl][wb][sl]/[rc][vs][wo][eg][st][tg][ig][cg][or][co][rd][hm][de][cp][rd][co][or][cg][ig][tg][st][eg][wo][bd][lc]/[hd][fh][en][dy][fo][sm][vm][vb][sb][pr][ab][ew][ld][ew][ab][pr][sb][vb][vm][sm][fo][dy][en][fh][hd]/[pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw]/7[gb]9[gb]7/25/25/25/25/25/25/25/25/25/7[GB]9[GB]7/[PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW]/[HD][FH][EN][DY][FO][SM][VM][VB][SB][PR][AB][EW][LD][EW][AB][PR][SB][VB][VM][SM][FO][DY][EN][FH][HD]/[LC][BD][WO][EG][ST][TG][IG][CG][OR][CO][RD][CP][DE][HM][RD][CO][OR][CG][IG][TG][ST][EG][WO][VS][RC]/[SL][WB][FL][WS][EB][CC][HF][OM][OK][PC][GT][KR][LI][PH][GO][PC][RB][OM][HF][CC][SU][NB][FL][WB][SL]/[SC][WH][RS][VO][CS][BB][SV][GL][BM][BT][BV][WR][NK][GD][SD][BT][BM][GL][SV][BB][CS][VO][RS][WH][SC]/[RC][SI][SE][KN][PS][FT][BI][FE][WE][FR][SG][LG][CR][RG][SG][FR][WE][FE][BI][FT][PS][KN][SE][SI][RC]/[LN][TS][WL][FY][LO][DW][RK][DH][DK][FK][GG][DV][EM][DS][GG][FK][DK][DH][RK][DW][LO][FY][WL][WT][LN]"
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

Win: capture both the opponent's King and Crown Prince (or the King alone if the Drunk Elephant has not promoted).

### Promotion

- Pieces promote upon entering the opponent's promotion zone (the opponent's ranks, approximately the last 10 ranks from their perspective)
- No drops — captured pieces are permanently removed from play
- Each piece has a fixed promoted form
- Promotion on capture applies to contagious pieces (Teaching King, Buddhist Spirit)

### General Movement Categories

Pieces in Tai Shogi fall into these broad movement categories:
- **Generals:** steppers that move 1 square in limited directions (Gold, Silver, Copper, Iron, Stone, Tile, Elephant, Earth generals)
- **Riders:** unlimited sliders (Rook, Bishop, Lance, Reverse Chariot, Side Mover, Vertical Mover)
- **Hoppers:** leap over intervening pieces (Knight, Kirin, Phoenix)
- **Lion-power pieces:** take two moves per turn; may capture twice; may pass
- **Lion Dog class:** up to 3 steps along any ray
- **Ultra-powerful sliders:** can turn corners in their path (Hook Mover, Capricorn)
- **Universal leaper** (Emperor): can jump to any square on the board

### Historical Context

Tai Shogi is documented in historical Japanese manuscripts alongside the other large Shogi variants. The chessvariants.com entry for Tai Shogi links only to an external Japanese-language source (the shogi.net documentation). Murray's *A History of Chess* covers the Shogi variant family including large games in this scale range.

The game represents the theoretical maximum scale at which complete move documentation was maintained in historical records. Taikyoku Shogi (36×36) exceeds it in scale but is documented in only one known manuscript.

### Attribution

Tai Shogi is documented in historical Japanese manuscripts. English documentation is limited; the primary Japanese-language source is referenced via chessvariants.com/link/TaiShogi.
