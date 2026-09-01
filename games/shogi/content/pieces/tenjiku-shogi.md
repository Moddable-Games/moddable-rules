# Tenjiku Shogi — 36 piece types

Source: https://en.wikipedia.org/w/index.php?title=Tenjiku_shogi&action=raw (raw wikitext, 2026-09-01)
Board 16x16, 78 pieces a side, no drops. Complete: all 44 types (36 starting + 8 promoted-only) carry a notation.

The article carries a standing caveat that Tenjiku's historical rules are not
clear and sources differ; what follows is its reconstruction from chu shogi.

name | romaji | count | betza | promotes to
King | osho / gyokusho | 1 | K | none
Great general | taisho | 1 | QcppQ + restrictions | none
Vice general | fukusho | 1 | BcppB[mKa3K] + restrictions | none
Rook general | hisho | 2 | RcppR + restrictions | great general
Bishop general | kakusho | 2 | BcppB + restrictions | vice general
Free eagle | honju | 1 | QDA[aF] | none
Queen | honno | 1 | Q | free eagle
Soaring eagle | hiju | 2 | RbBf[avF]fA | rook general
Horned falcon | kakuo | 2 | BrlbRf[avW]fD | bishop general
Water buffalo | suigyu | 2 | BrlRfbR2 | fire demon
Chariot soldier | shahei | 4 | BfbRrlR2 | heavenly tetrarch
Fire demon | kaki | 2 | BrlR[mKa3K] + immediate xK | none
Lion hawk | shio | 1 | BNAD[aK] | none
Lion | shishi | 1 | NAD[aK] | lion hawk
Dragon king | ryuo | 2 | FR | soaring eagle
Dragon horse | ryume | 2 | WB | horned falcon
Rook | hisha | 2 | R | dragon king
Bishop | kakugyo | 2 | B | dragon horse
Kirin | kirin | 1 | FD | lion
Phoenix | hoo | 1 | WA | queen
Drunk elephant | suizo | 1 | FfrlW | prince
Blind tiger | moko | 2 | FrlbW | flying stag
Ferocious leopard | mohyo | 2 | FfbW | bishop
Gold general | kinsho | 2 | WfF | rook
Silver general | ginsho | 2 | FfW | vertical mover
Copper general | dosho | 2 | fKbW | side mover
Vertical mover | shugyo | 2 | WfbR | flying ox
Side mover | ogyo | 2 | WrlR | free boar
Reverse chariot | hensha | 2 | fbR | whale
Vertical soldier | shuhei | 2 | WfRrlR2 | chariot soldier
Side soldier | ohei | 2 | WfR2rlR | water buffalo
Lance | kyosha | 2 | fR | white horse
Knight | keima | 2 | ffN | side soldier
Iron general | tessho | 2 | fK | vertical soldier
Dog | inu | 2 | fWbF | multi general
Pawn | fuhyo | 16 | fW | gold general

## Promoted-only
Prince | taishi | K
Heavenly tetrarch | shitenno | B(>=2)fbR(>=2)rlR(2<=n<=3)cxK
Flying ox | higyu | BfbR
Flying stag | hiroku | fbRK
Free boar | honcho | BrlR
Multi general | suisho | fRbB
Whale | keigei | fRbQ
White horse | hakku | fQbR

## Setup (files 16 to 1; a is White's back rank, p is Black's)
a: L N FL I C S G DE K G S C I FL N L
b: RC - CS CS - BT Ph Q Ln Kr BT - CS CS - RC
c: SS VS B DH DK WB FD FE LH FD WB DK DH B VS SS
d: SM VM R HF SE BG RG VG GG RG BG SE HF R VM SM
e: 16 pawns
f: D on files 12 and 5
k: D on files 12 and 5
l: 16 pawns
m: SM VM R HF SE BG RG GG VG RG BG SE HF R VM SM
n: SS VS B DH DK WB FD LH FE FD WB DK DH B VS SS
o: RC - CS CS - BT Kr Ln Q Ph BT - CS CS - RC
p: L N FL I C S G K DE G S C I FL N L

Note the deliberate camp asymmetry: GG/VG, LH/FE and K/DE swap between the two
camps, and Ph/Q/Ln/Kr mirror.

## Fire demon
- Burn on landing: wherever it stops, every adjacent OPPOSING piece except
  another fire demon is removed, plus whatever it displaced. Up to eight pieces
  in one turn.
- Passive burn: any piece stopping next to an opposing fire demon is removed
  after making its capture. This does not use the demon owner's turn.
- Demon meets demon: only the MOVING demon is immolated. The stationary one
  survives, as do all other adjacent pieces. (TSA rules. Some computer
  implementations burn the others too; the article calls that not widely
  followed.)
- Promotion counts as part of the move, so a water buffalo promoting to fire
  demon burns everything adjacent at that moment.
- CONTRADICTION IN SOURCE: the disputed-moves section labels the demon's
  orthogonal range `BvR` while calling it "along the rank"; under standard Betza
  `v` is vertical. The main table's `BrlR` matches the prose. Both are recorded.

## Range-jumping generals
Great, vice, rook and bishop generals may jump any number of pieces of LOWER
RANK, friend or foe, but only when capturing. Ranking:
  1 King, prince  2 Great general  3 Vice general  4 Rook general, bishop general
They may still CAPTURE an equal or higher-ranked piece; they simply may not jump
over one. The free eagle is not in the hierarchy, which the article flags.

## Area moves
Lion (2 steps, may continue after a capture, has igui), lion hawk (full lion
powers), vice general (3 steps, must stop on capture, may null-move), fire demon
(3 steps, must stop on capture, may null-move, NO igui).

## Rules
- Promotion zone: the far five ranks. Trigger: starts outside and ends inside,
  or is a capture starting inside. Igui does not qualify if the move begins and
  ends outside. Optional, permanent.
- Same per-piece latch as dai shogi: declining promotion inside the zone
  restricts later promotion to captures, and RESETS on leaving and re-entering.
- Win: capture the sole remaining king or prince. A player need not move out of
  check. An illegal move loses immediately.
- Unresolved in the historical rules: both kings perishing in one move, where a
  king captures another standing beside a friendly fire demon.
