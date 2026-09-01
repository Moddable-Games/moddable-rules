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

**Go-Between (e5, k5):** Steps vertically only (vW). Promotes to Drunk Elephant.

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