---
title: L'Attaque (Standard)
slug: standard
board: "9×10"
players: "2"
parent: lattaque
win: "Capture the opponent's Flag, or leave them with no movable pieces"
special: "Hidden-information land warfare game by Hermance Edan (1909). 36 pieces per player on a 9×10 board with three 1×2 lake areas. Higher rank defeats lower; Mines defeat all except Sappers; Spy defeats Commander-in-chief when Spy attacks."
published: true
engine:
  topology:
    type: grid
    rows: 10
    cols: 9
  players: [blue, red]
  render:
    ops:
      - op: rect
        fill: transparent
        scope: board
      - op: cells
        pattern: cellMap
        light: cell-light
        dark: cell-dark
        defaultFill: floor
        zones:
          cells:
            - type: lake
              at: [[4,2],[4,4],[4,6],[5,2],[5,4],[5,6]]
        typeColors:
          floor: floor
          lake: lake
        typeStrokes:
          floor: floor-stroke
          lake: lake-stroke
---

## L'Attaque (Standard)

{{svg:standard-board.svg "L'Attaque (Standard) — starting position"}}

Designed by Hermance Edan. Patent filed France 26 November 1908; game first sold 1910 by Au Jeu Retrouvé. Rights acquired 1925 by H.P. Gibson & Sons, London, who published it in Britain until at least the 1970s. The first mass-market hidden-information rank game; direct ancestor of Stratego.

### Board

9 columns × 10 rows. Three lake areas in the centre of the board are impassable — no piece may enter or pass through a lake square. Each lake occupies 1 column × 2 rows. The three lakes are positioned in the two middle rows (rows 5–6), spaced across the board at columns 3, 5, and 7, with two clear columns on each outer edge and one clear column between each lake. This layout is distinct from the 2×2 lake blocks of Stratego (1946).

### Piece Set (36 per player)

| Rank | Piece | Count | Movement | Special Ability |
|---|---|---|---|---|
| 10 | **Commander-in-chief** | 1 | 1 step ortho | Defeated only by Mine or by an attacking Spy. Beats Spy if Commander-in-chief attacks first. |
| 9 | **Brigadier General** | 1 | 1 step ortho | Standard capture. |
| 8 | **Colonel** | 2 | 1 step ortho | Standard capture. |
| 7 | **Commandant** | 2 | 1 step ortho | Standard capture. |
| 6 | **Captain** | 4 | 1 step ortho | Standard capture. |
| 5 | **Lieutenant** | 4 | 1 step ortho | Standard capture. |
| 4 | **Sergeant** | 4 | 1 step ortho | Standard capture. |
| 3 | **Sapper** | 4 | 1 step ortho | Only piece that can capture a Mine without being removed. |
| 2 | **Scout** | 8 | Slides unlimited ortho | May not leap over pieces or lake squares. |
| 1 | **Spy** | 1 | 1 step ortho | Defeats the Commander-in-chief when the Spy attacks. Loses to the Commander-in-chief if Commander-in-chief attacks first; loses to all other pieces. |
|  | **Flag** | 1 | Immovable | Capturing the opponent's Flag wins the game. |
|  | **Mine** | 4 | Immovable | Any piece attacking a Mine is removed — except a Sapper, which captures the Mine safely. |

**Total: 36 per player.** (Commander-in-chief 1 + Brigadier General 1 + Colonel 2 + Commandant 2 + Captain 4 + Lieutenant 4 + Sergeant 4 + Sapper 4 + Scout 8 + Spy 1 + Flag 1 + Mine 4 = 36)

### Setup

Each player positions all 36 pieces face-down on their own half of the board (the four rows nearest their side), in any arrangement they choose. The opponent cannot see piece ranks. Lake squares remain empty.

### Movement

Players alternate turns. On each turn, a player moves one piece:
- **Most pieces:** 1 step orthogonally (up, down, left, right). Cannot enter a lake square or a square occupied by any piece.
- **Scout:** Slides any number of squares orthogonally in one direction. Cannot leap over other pieces or lake squares; must stop before any occupied square or lake.
- **Mines and Flag:** May not move.

### Combat

Pieces cannot move into a square occupied by another piece. Instead, when a player moves a piece adjacent to an enemy piece (back to back), the active player may **choose to attack**.

If the player chooses to attack:
1. Both pieces are flipped face-up and ranks are revealed.
2. The lower-ranked piece is permanently removed from the board.
3. Equal rank: both pieces are removed.

**Special combat rules:**
- **Spy vs. Commander-in-chief:** If the Spy attacks the Commander-in-chief, the Spy wins. If the Commander-in-chief attacks the Spy, the Commander-in-chief wins.
- **Any piece vs. Mine:** Any piece (except Sapper) that attacks a Mine is removed; the Mine remains in place. A Sapper attacking a Mine captures the Mine safely.
- Capturing the Flag immediately wins the game.

### Hidden Information

Piece ranks remain hidden from the opponent until revealed in combat. Once a piece has been revealed in combat, its identity is known to both players.

### Win Conditions

- Capture the opponent's Flag: immediate win.
- Leave the opponent with no movable pieces (all remaining pieces are Mines and Flag): win.

### Attribution

L'Attaque. Designed by Hermance Edan. French patent No. 396,795 filed 26 November 1908. First published 1910 by Au Jeu Retrouvé, France. Rights acquired 1925 by H.P. Gibson & Sons, London. Public domain rule set. Sources: Wikipedia (L'Attaque); Solomon, Eric, *Games & Puzzles* No. 24 (May 1974); V&A Museum collection; patent diagram (lake positions confirmed from original patent No. 396,795).
