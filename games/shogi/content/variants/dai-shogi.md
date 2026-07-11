---
title: Dai Shogi
slug: dai-shogi
board: "15×15"
players: "2"
parent: shogi
win: Capture all opponent royal pieces
special: "Historical Japanese 15×15 large Shogi variant; precursor to Chu Shogi. 65 pieces per side including Lion (double-mover), Kirin, Phoenix, and Drunk Elephant (promotes to Crown Prince, a second royal). No drops. Extinction royalty: player loses only when their last royal is captured."
engine:
  topology:
    type: grid
    rows: 15
    cols: 15
  players: [sente, gote]
  setup: "[ln][kn][st][ig][cg][sg][gg][ki][gg][sg][cg][ig][st][kn][ln]/[rc]1[ct]1[fl]1[bt][de][bt]1[fl]1[ct]1[rc]/1[vo]1[ab]1[ew][ph][li][kr][ew]1[ab]1[vo]1/[rk][fy][sm][vm][bi][dh][dk][fk][dk][dh][bi][vm][sm][fy][rk]/[pw][pw][pw][pw][gb][pw][pw][pw][pw][pw][gb][pw][pw][pw][pw]/15/15/15/15/15/[PW][PW][PW][PW][GB][PW][PW][PW][PW][PW][GB][PW][PW][PW][PW]/[RK][FY][SM][VM][BI][DH][DK][FK][DK][DH][BI][VM][SM][FY][RK]/1[VO]1[AB]1[EW][KR][LI][PH][EW]1[AB]1[VO]1/[RC]1[CT]1[FL]1[BT][DE][BT]1[FL]1[CT]1[RC]/[LN][KN][ST][IG][CG][SG][GG][KI][GG][SG][CG][IG][ST][KN][LN]"
  render:
    cellSize: 22
---

## Dai Shogi

Dai Shogi (大将棋, "Large Chess") is a historical Japanese chess variant played on a 15×15 board with 65 pieces per side. It is the direct predecessor of Chu Shogi and was played in Japan during the medieval period. Compared to Chu Shogi, Dai Shogi has 16 extra piece types (all promoting to Gold General) and plays significantly longer due to the larger board and slower steppers.

### Starting Position

Pieces occupy ranks 1–5 (Sente) and ranks 11–15 (Gote), mirrored.

**Rank 1 (left to right, files a–o):**
Lance · Knight · Stone General · Iron General · Copper General · Silver General · Gold General · King · Gold General · Silver General · Copper General · Iron General · Stone General · Knight · Lance

**Rank 2:**
Reverse Chariot (a2, o2) · Cat Sword (c2, m2) · Ferocious Leopard (e2, k2) · Blind Tiger (g2, i2) · Drunk Elephant (h2)

**Rank 3:**
Violent Ox (b3, n3) · Angry Boar (d3, l3) · Evil Wolf (f3, j3) · Kirin (g3) · Lion (h3) · Phoenix (i3)

**Rank 4:**
Rook (a4, o4) · Flying Dragon (b4, n4) · Side Mover (c4, m4) · Vertical Mover (d4, l4) · Bishop (e4, k4) · Dragon Horse (f4, j4) · Dragon King (g4, i4) · Free King (h4)

**Rank 5 (Pawn rank):**
Go-Betweens at e5 and k5; Pawns on all other 13 files of rank 5.

### Pieces

Most pieces are directional sliders or steppers with ranges of infinite, 2, or 1 (step). Key unique pieces:

**Lion (h3):** Double-mover. Makes up to 2 King steps per turn, changing direction freely, including returning to the starting square. Can jump on the first step. May annihilate an adjacent enemy (step there and step back without moving), make a hit-and-run (annihilate and continue to an adjacent empty square), or make a double capture.

**Kirin (g3):** Leaps to the first diagonal square or the second orthogonal square (FD).

**Phoenix (i3):** Leaps to the first orthogonal square or the second diagonal square (WA).

**Drunk Elephant (h2):** Steps in all directions except straight backward (FfsW). Promotes to Crown Prince.

**Go-Between (e5, k5):** Steps vertically only (vW). Promotes to Drunk Elephant.

**Flying Dragon (b4, n4):** Leaps to the second diagonal square in any direction (F2).

**Ferocious Leopard (e2, k2):** Steps diagonally or vertically (FvW).

**Blind Tiger (g2, i2):** Steps diagonally or sideways-backward (FbsW).

### Promotion

Pieces may promote upon entering the promotion zone (opponent's last 5 ranks, ranks 11–15 for Sente). Promotion is optional unless the piece would have no legal moves in unpromoted form. Each piece promotes at most once, to a predefined form:

Kirin → Lion · Phoenix → Free King · Dragon King → Soaring Eagle · Rook → Dragon King · Gold General → Rook · Pawn → Gold General · Dragon Horse → Horned Falcon · Bishop → Dragon Horse · Ferocious Leopard → Bishop · Vertical Mover → Flying Ox (BvR) · Silver General → Vertical Mover · Lance → White Horse (vRfB) · Reverse Chariot → Whale (vRbB) · Blind Tiger → Flying Stag (vRFsW) · Drunk Elephant → Crown Prince · Go Between → Drunk Elephant · Side Mover → Free Boar (BsR) · Copper General → Side Mover · Stone General → Gold General · Iron General → Gold General · Knight → Gold General · Angry Boar → Gold General · Cat Sword → Gold General · Evil Wolf → Gold General · Violent Ox → Gold General · Flying Dragon → Gold General

King, Lion, and Free King do not promote.

### Rules

**Win:** Capture all opponent royal pieces. A player loses only when their last royal (King or Crown Prince) is captured.

**Crown Prince / Extinction Royalty:** The Drunk Elephant promotes to Crown Prince, a second royal King. A player with both King and Crown Prince can afford to lose one — they only lose when the last royal is taken.

**No Check:** There is no prohibition against moving into or remaining in check. Stalemate (by convention) is a win for the stalemating player.

**No Drops:** Captured pieces are permanently removed from the game.

**Repetition:** Repetition of position is forbidden. A player delivering perpetual check must deviate. A player perpetually chasing (opponent is always evading, not threatening) must also deviate. Purely positional repetitions with neither side attacking are draws.

### Attribution

Historical Japanese game, medieval period. Rules documented from chessvariants.com/rules/dai-shogi (H. G. Muller, 2015).
