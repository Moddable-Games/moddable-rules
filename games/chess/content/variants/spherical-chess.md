---
playable: true
title: Spherical Chess
slug: spherical-chess
board: "8×8 (played on flat board, spherical topology)"
players: "2"
parent: chess
win: Checkmate
special: "Chess on a sphere — a surface with no edges and no corners, where ranks and files meet at poles. The standard 8×8 board is played with two wrapping rules: ranks wrap horizontally (left-right, as in Cylindrical Chess), and files meet at polar singularities where a piece crossing the pole continues four files away. Multiple documented versions from 1950–2014; this file documents the family and the most widely agreed rules. Bishops are colourbound. Knights have 8 possible moves from any position."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
    wrap: spherical
  players: [white, black]
  setup: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
  notation: algebraic
disputed:
  - feature: "Bishop crossing a pole"
    readings:
      - source: "Grayber (1950s) and Miller (1965), via Pritchard and Dickins as quoted by Fergus Duniho, chessvariants.com/boardrules.dir/spherical.html (last modified 29 July 2021)"
        says: "two files back, keeping its file direction"
        describes: "The trans-polar move of a B forms a loop, its path re-crossing the 2nd/7th rank square (Bh3-a2-b1-h1-a2-b3)."
      - source: "Yapsan (1971), Boholy (1987), Welman Global Chess (1989-1997) and Chao (2008-2014), as reported by Fergus Duniho, chessvariants.com/boardrules.dir/spherical.html (last modified 29 July 2021)"
        says: "straight across the pole, then fully reversed"
        describes: "a diagonal move crosses the pole vertically to a space of the same color, which is four spaces away in the same rank, then continues in the opposite direction it was going in. If it was going north west, it would go south east after crossing the pole."
      - source: "Nadvorney (1975), as reported by Fergus Duniho, chessvariants.com/boardrules.dir/spherical.html (last modified 29 July 2021)"
        says: "three files back, changing colour"
        describes: "Unlike the Bishop in Miller's version, the Bishop in this version changes color when it makes a trans-polar move ... moving three spaces back along the rank, changing latitudinal direction, and continuing in the same longitudinal direction."
    engine: "straight across the pole, then fully reversed"
    because: "Four of the seven versions surveyed share it, and it is the only colourbound reading. The survey calls it the most popular diagonal move and plays it in its own recommended version."
  - feature: "Knight beside a pole"
    readings:
      - source: "Grayber (1950s), via Pritchard as quoted by Fergus Duniho, chessvariants.com/boardrules.dir/spherical.html (last modified 29 July 2021)"
        says: "six moves on the two ranks by a pole"
        describes: "Ng2: a1,a3,h4,f4,e3,e1 Ng1: a2,b2,h3,f3,e2,d2."
      - source: "Miller (1965), via Pritchard as quoted by Fergus Duniho, chessvariants.com/boardrules.dir/spherical.html (last modified 29 July 2021)"
        says: "six on the end rank, eight on the next"
        describes: "a Knight on g1 can move to a2, b2, h3, f3, e2 or d2. In another example, a Knight can move from g2 to a1, a3, h4, f4, e3, e1, b1 or d1."
      - source: "Yapsan (1971), Nadvorney (1975), the original Global Chess rules card and Chao, as reported by Fergus Duniho, chessvariants.com/boardrules.dir/spherical.html (last modified 29 July 2021)"
        says: "eight from every square"
        describes: "The knight moves one space in a circumpolar (radial) direction and two spaces in a radial (circumpolar) direction, or vice versa, always in the same general direction. The knight can move even when the intervening spaces are occupied."
      - source: "Boholy, Globe Chess optimal version, as reported by Fergus Duniho, chessvariants.com/boardrules.dir/spherical.html (last modified 29 July 2021)"
        says: "six, counting the pole as a space"
        describes: "a Knight may move to h3, a2, b1, d1, e2, and f3 ... because Boholy is counting the pole as one of the spaces the Knight leaps over."
    engine: "eight from every square"
    because: "The most common reading, and the one on the rules card Global Chess shipped with. From g1 that is a1, a2, b2, d2, e1, e2, f3 and h3: the card's diagram includes the two squares two files along the same rank, which the survey notes the later web rules dropped."
  - feature: "Castling"
    readings:
      - source: "Yapsan (1971), Nadvorney (1975) and Chao, as reported by Fergus Duniho, chessvariants.com/boardrules.dir/spherical.html (last modified 29 July 2021)"
        says: "also towards a Rook from its far side"
        describes: "White has a King on e1 and a Rook on h1, but castles by moving to c1 and the Rook from h1 moving to d1."
      - source: "Grayber, Miller, Welman and Boholy, as summarised by Fergus Duniho, chessvariants.com/boardrules.dir/spherical.html (last modified 29 July 2021)"
        says: "as in Chess"
        describes: "For castling, the most popular option seems to be to castle as in Chess without any extra option of castling with a Rook on its other side."
    engine: "as in Chess"
    because: "The majority reading, and the one the original Global Chess card plays. The survey itself prefers the extra castling, which is recorded above for a table that wants it."
  - feature: "A move that returns to its own square"
    readings:
      - source: "Yapsan (1971), as reported by Fergus Duniho, chessvariants.com/boardrules.dir/spherical.html (last modified 29 July 2021)"
        says: "legal"
        describes: "When a Bishop, Rook, or Queen can make a move completely around the board that is able to return to its original space, Yapsan counts such a move as legal."
      - source: "Nadvorney (1975) and Chao, as reported by Fergus Duniho, chessvariants.com/boardrules.dir/spherical.html (last modified 29 July 2021)"
        says: "forbidden"
        describes: "A piece cannot move into a square which is the very same square it comes from by walking a loop, because such movement leads to no change."
    engine: "forbidden"
    because: "Only Yapsan allows it, two versions forbid it outright, and the survey reads the silence of the rest as not allowing it: a move that changes nothing is not a move."
  - feature: "King crossing a pole"
    readings:
      - source: "Grayber, Miller, Yapsan, Nadvorney, Global Chess and Chao, as summarised by Fergus Duniho, chessvariants.com/boardrules.dir/spherical.html (last modified 29 July 2021)"
        says: "freely"
        describes: "the pole is just an intersection between spaces, and the King may move across the pole as freely as it may move across a diagonal that is controlled by the opponent."
      - source: "Boholy, Globe Chess, as reported by Fergus Duniho, chessvariants.com/boardrules.dir/spherical.html (last modified 29 July 2021)"
        says: "only when the pole is not attacked"
        describes: "Because the poles are treated as neutral spaces, a King may pass over a pole only if it is not attacked by an enemy piece."
      - source: "Welman, Sphere Chess (2009), as reported by Fergus Duniho, chessvariants.com/boardrules.dir/spherical.html (last modified 29 July 2021)"
        says: "never"
        describes: "The King is now as immobile as the Chess King. It cannot cross the pole or the a/h divide."
    engine: "freely"
    because: "Six of the eight versions surveyed let the King cross a pole like any other line."
published: true
---

## Spherical Chess

Spherical Chess is a family of chess variants adapted to spherical topology — a surface with no edges, where all directions eventually curve back to their origin. Multiple independent inventors have designed spherical chess between 1950 and 2014. The variants share a common framework but differ in how the Bishop and Knight handle the polar singularities.

### The Board and Topology

Spherical Chess is played on a standard **8×8 board**, but the board is conceived as a sphere:

**Horizontal wrap (as in Cylindrical Chess):** Ranks loop back into themselves. The a-file connects to the h-file — a Rook moving right off the h-file reappears on the a-file at the same rank.

**Polar wrap:** The board does not wrap vertically in a simple torus manner. Instead, files are treated as **lines of longitude** that meet at the poles (rank 1 and rank 8). When a piece crosses a pole:
- A Rook moving forward off rank 8 continues from **rank 8 on the file four files away** (e.g., Ra3-a1-e1-e4)
- The shift is always exactly **4 files** (half the board width)

This means:
- There are no edge squares — every rank wraps
- There are no corner squares — the poles are where all files converge
- Pieces near the poles have reduced move counts (fewer unique destination squares)

### Piece Movement Near the Poles

**Rook:** Crosses the pole by continuing 4 files away on the same rank, then continues moving away from the pole. Example: Ra3 → a2 → a1 (pole crossed) → e1 → e2 → e3...

**Bishop (most versions):** Crosses the pole and continues on **the same diagonal colour** (colourbound). Moving diagonally into the pole, it exits directly across, then reverses its diag direction. The exact rule differs by version:

| Version | Transpolar Bishop rule |
|---|---|
| Grayber/Miller (1950s/1965) | Complex zig-zag; not colourbound |
| Yapsan (1971) | Crosses directly across pole (same file shifted 4); colourbound; reverses direction |
| Nadvorney (1975) | Shifts **3 files** (not 4), changes colour; complex path |
| Boholy/Welman/Chao (1987–2008) | Same as Yapsan; colourbound |

The **majority of versions** (Yapsan, Boholy, Global Chess, Chess on the Dot) use the Yapsan-style colourbound Bishop: crosses the pole directly 4 files away, reverses diagonal direction, stays on the same colour.

**Knight:** In most versions (Yapsan, Nadvorney, Global Chess, Chao), the Knight has exactly **8 possible moves from any position** on the board, including those near the poles, by applying the L-shaped leap with polar adjustment.

**King and Queen:** Move as derived from Rook and Bishop above. King near a pole has 6 possible moves (not 8).

**Pawn:** Moves as in Cylindrical Chess — forward only, no trans-polar movement until promotion.

### Castling

In the Yapsan, Nadvorney, and Chao versions, two extra castling options are available: the King may castle with a Rook by approaching it from **either side** (not just the standard approach). The usual castling conditions must still be met.

### Key Versions

| Year | Inventor | Key feature |
|---|---|---|
| 1950s | H. D. Grayber | First documented; complex non-colourbound Bishop |
| 1965 | Don Miller | Knight near pole gains extra move (8 moves) |
| 1971 | Peter Yapsan | Colourbound Bishop; 8-move Knight; extra castling |
| 1975 | Leo Nadvorney | Bishop changes colour at pole; 8-move Knight |
| 1987 | János Boholy | Pole is a neutral passing space; 6-move Knight near pole |
| 1989 | Welman & Welman | Global Chess; 8-move Knight (orig.); later reduced |
| 2008 | Joshua Chao | Chess on the Dot; Yapsan-style; forbids stationary moves |

### Rules

- Standard FIDE starting position
- Standard FIDE rules apply, except as modified by spherical topology
- No stationary moves (pieces may not make a complete loop and return to their starting square) — in most versions
- Win: Checkmate

### Attribution

Spherical Chess is a family of chess variants invented independently multiple times between 1950 and 2014. Surveyed by Fergus Duniho. Source: chessvariants.com/boardrules.dir/spherical.html (last modified July 29, 2021).
