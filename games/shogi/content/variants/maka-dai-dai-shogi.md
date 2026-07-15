---
title: Maka-Dai-Dai Shogi
slug: maka-dai-dai-shogi
board: "19×19"
players: "2"
parent: shogi
win: Capture the last royal piece
special: "19×19 historical Japanese Shogi variant meaning 'Great Dai-Dai Chess.' One of the largest chess-family games in recorded history. 96 pieces of 50 types per side (192 pieces total). No drops; captures remove permanently. Features Lion-power pieces, Hook Movers, the Emperor (universal leaper), and contagious promotion through the Teaching King and Buddhist Spirit. Promotion triggers on any capture. Historical; source: H. G. Muller (chessvariants.com)."
engine:
  topology:
    type: grid
    rows: 19
    cols: 19
  players: [sente, gote]
  setup: "[ln][eg][st][tg][ig][cg][sg][gg][ds][ki][dv][gg][sg][cg][ig][tg][st][eg][ln]/[rc]1[ct]1[bm]1[rd][fl][bt][de][bt][fl][co]1[cc]1[ct]1[rc]/1[or]1[ab]1[bb]1[ew][ph][li][kr][ew]1[bb]1[ab]1[or]1/[dy][kn]1[vo]1[fy]1[sd][gd][ld][wr][bv][fy]1[vo]1[kn]1[dy]/[rk][rt][sm][sf][vm][bi][dh][dk][hm][fk][cp][dk][dh][bi][vm][sf][sm][lc][rk]/[pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw][pw]/5[gb]7[gb]5/19/19/19/19/19/5[GB]7[GB]5/[PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW][PW]/[RK][LC][SM][SF][VM][BI][DH][DK][CP][FK][HM][DK][DH][BI][VM][SF][SM][RT][RK]/[DY]1[KN]1[VO]1[FY][BV][WR][LD][GD][SD]1[FY]1[VO]1[KN][DY]/1[OR]1[AB]1[BB]1[EW][KR][LI][PH][EW]1[BB]1[AB]1[OR]1/[RC]1[CT]1[CC]1[CO][FL][BT][DE][BT][FL][RD]1[BM]1[CT]1[RC]/[LN][EG][ST][TG][IG][CG][SG][GG][DV][KI][DS][GG][SG][CG][IG][TG][ST][EG][LN]"
  render:
    cellSize: 18
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
| d3, p3 | Angry Boar | Steps 1 sideways | Free Boar (BsR) |
| f3, n3 | Blind Bear | Steps 1 diagonally; slides backward orthogonally | Free Bear |
| h3, l3 | Evil Wolf | Steps 1 forward diagonally or 1 forward orthogonally sideways | Free |
| i3 | Kirin | Steps 1 diagonally; leaps 2 orthogonally | Great Dragon (sRvW²F³) |
| j3 | Lion | Lion power (up to 2 King moves per turn; may capture twice; may pass) | Furious Fiend (Lion + Lion Dog) |
| k3 | Phoenix | Steps 1 orthogonally; leaps 2 diagonally | Golden Bird (vRsW²F³) |

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
