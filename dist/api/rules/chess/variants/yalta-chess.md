## Overview

{{svg:yalta-chess-board.svg "Yalta Chess — starting position"}}

Yalta Chess is a 3-player chess variant played on a hexagonal board divided into three Y-shaped sectors. It was documented by Daniel Lindström from a small book purchased at a chess bookshop in Paris. Lindström describes it as "more about group dynamics, preferably together with a couple of beers, than as a serious competition."

## Board

The board is a **hexagon** of 96 quadrilateral squares — "three boards of 32 cells, one for each player" (chessvariants.com). Lines from the centre to the midpoint of every side cut it into six four-by-four quarters, each wrapped round one corner, and each player's half is two neighbouring quarters: four ranks of eight files, the ordinary half of a chessboard, with its back rank along one side of the hexagon. The squares are checkered in the ordinary alternating pattern. The three halves meet at the centre, where six squares touch at a point instead of four; this is the junction where a piece passing from one half to another may have a choice of path.

This matches the board graphic on the primary source page (chessvariants.com/multiplayer.dir/yalta.html, graphic by Daniel Lindström) — a hexagon, not a circle or rings. The variant is **not** circular/annular in structure, unlike Byzantine Chess or Circular Chess. It shares its fundamental hex-trisection shape with San-kwo-k'i (xiangqi hub) — see that file for a note on a possible shared renderer (moddable-engine#26).

## Players

Three players, distinguished by colour: **Red**, **Green**, and **Blue** (per the primary source's starting-position diagram, credited to David Howe).

## Starting Position

Each player sets up a complete standard FIDE army (8 pieces + 8 pawns) in their own sector, back rank at the outer hexagon edge. Confirmed against the source diagram, the back-rank order reading across each sector is:

**Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook**

This places the **Queen immediately to the left of the King**, matching the documented rule (queen placement was deliberately chosen "for the sake of symmetry" across the three sectors). Pawns occupy the rank immediately in front of the back rank, toward the central junction.

The board has 96 squares: each player's half is four ranks of eight files, and the three halves meet at the centre. It is the board of the independently built implementation at yalta-chess.com (documented at smlep.github.io/jekyll/update/2020/12/26/yaltachess.html), which uses "a 96-square-total board (32 per player)", and of a second at github.com/LordBaryhobal/yalta, which divides the hexagon into six four-by-four quadrilaterals round its corners, two to a player. That page also notes its rules "differed depending on the articles" it drew from, so it is the board's shape that is taken from it, not its rules.

A player's files run along its own side of the hexagon; the a-file and the h-file run up the two neighbouring sides. Crossing the centre, a player's files a–d lead into the half of the player on its left and files e–h into the half of the player on its right, each counting back down toward that player's back rank. Squares are named by sector: Red's e2 is Ae2, Green's is Be2, Blue's Ce2.

## Rules

All standard FIDE chess rules apply within a sector, with the following modifications:

**Path choice at the center:** Pawns, Bishops, and Queens have a choice of path when passing through the central junction area. Pawns have this choice only when capturing, not when advancing.

**Knight movement:** Knights always land on a square of the opposite color to their starting square, even when crossing sectors. Their path near the junction may appear unusual, but the color-change property is preserved.

**Check response:** When a player is in check, they must resolve it on their turn as usual. The player to their left may attempt to help them by interposing a piece or capturing the checker on that player's own turn.

**Checkmate and army takeover:** When a player is checkmated, their King is removed from the board. The player who delivered the checkmate **takes control of all the checkmated player's remaining pieces** and may use them immediately. Promoting a captured pawn from the new army requires a piece sacrifice — move the pawn to the promotion rank and allow it to capture a piece placed in its path. Taking control of the new pieces does not grant an extra move.

**Alliances:** Informal alliances between players are permitted. There is no rule requiring a player to honor any agreement. All disputes about rules are resolved by majority vote among the three participants.

**Multiple-check resolution:** If a player in check is simultaneously checked by two opponents, the check delivered first takes priority for determining which player delivers the mate.

## Win Condition

The last player with a King on the board wins.

## Attribution

Yalta Chess documented by Daniel Lindström; WWW page by David Howe, created May 12, 1997. Rules and board graphic documented from chessvariants.com/multiplayer.dir/yalta.html. Board shape (hexagonal Y-trisection, not circular), player colours, and back-rank order confirmed against the primary source's diagrams, 2026-07.