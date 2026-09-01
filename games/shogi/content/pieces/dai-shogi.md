# Dai Shogi — 29 piece types

Source: https://en.wikipedia.org/w/index.php?title=Dai_shogi&action=raw (raw wikitext, 2026-09-01)
Board 15x15, 65 pieces a side, no drops. Complete: all 29 types carry a notation, none is diagram-only.

name | romaji | count | betza | promotes to
King | osho / gyokusho | 1 | K | none
Queen (free king) | honno | 1 | Q | none
Lion | shishi | 1 | KNADcaKmcabK | none
Dragon king | ryuo | 2 | RF | soaring eagle
Dragon horse | ryuma | 2 | BW | horned falcon
Rook | hisha | 2 | R | dragon king
Bishop | kakugyo | 2 | B | dragon horse
Kirin | kirin | 1 | FD | lion
Phoenix | hoo | 1 | WA | queen
Violent ox | mogyu | 2 | R2 | gold general
Flying dragon | hiryu | 2 | B2 | gold general
Drunk elephant | suizo | 1 | FfrlW | prince
Blind tiger | moko | 2 | FrlbW | flying stag
Ferocious leopard | mohyo | 2 | FfbW | bishop
Gold general | kinsho | 2 | WfF | rook
Silver general | ginsho | 2 | FfW | vertical mover
Copper general | dosho | 2 | fKbW | side mover
Angry boar | shincho | 2 | W | gold general
Cat sword | myojin | 2 | F | gold general
Vertical mover | shugyo | 2 | WfbR | flying ox
Side mover | ogyo | 2 | WrlR | free boar
Reverse chariot | hensha | 2 | fbR | whale
Lance | kyosha | 2 | fR | white horse
Knight | keima | 2 | ffN | gold general
Evil wolf | akuro | 2 | frlK | gold general
Iron general | tessho | 2 | fK | gold general
Stone general | sekisho | 2 | fF | gold general
Go-between | chunin | 2 | fbW | drunk elephant
Pawn | fuhyo | 15 | fW | gold general

## Promoted-only
Prince | taishi | K | (from drunk elephant; counts as a second king)
Soaring eagle | hiju | RbBf[avF]fA | (from dragon king)
Horned falcon | kakuo | BrlbRf[avW]fD | (from dragon horse)
Flying stag | hiroku | fbRK | (from blind tiger)
Flying ox | higyu | BfbR | (from vertical mover)
Free boar | honcho | BrlR | (from side mover)
Whale | keigei | fRbQ | (from reverse chariot)
White horse | hakku | fQbR | (from lance)

## Setup (one player, bottom, file 15 to file 1)
rank o: L N St I C S G K(gyokusho) G S C I St N L
rank n: RC - CS - FL - BT DE BT - FL - CS - RC
rank m: - VO - AB - EW Kr Ln Ph EW - AB - VO -
rank l: R FD SM VM B DH DK Q DK DH B VM SM FD R
rank k: 15 pawns
rank j: GB on files 11 and 5

The opposing camp is a 180-degree ROTATION, not a mirror: the top player has
Phoenix / Lion / Kirin where the bottom player has Kirin / Lion / Phoenix.

## Rules
- Promotion zone: the farthest five ranks. Optional. Permanent.
- A piece that declines promotion on entering may then only promote by
  capturing - and this RESETS on leaving and re-entering the zone. That is
  per-piece state that cannot be derived from the position.
- Win: capture the opponent's sole remaining king or prince. A player need not
  move out of check and may move into it.
- Chu shogi's lion-capture restrictions explicitly do NOT apply here.
- Repetition: a position may not be repeated with the same player to move. The
  finer JCSA deviation rules are marked in the source as presumed, not attested.
- UNVERIFIED: whether the knight gets a second chance to promote on the far rank.
