---
title: Dover Patrol
slug: dover-patrol
board: "8×12"
players: "2"
parent: lattaque
win: "Get both Flags — your own and the opponent's — onto your own Base"
special: "Naval CTF (Capture the Flag) game by H.P. Gibson & Sons. 40 pieces per player plus a separate Flag clip. The Flag starts on the Base inside the walled Harbour; seizing the enemy Flag and conveying it to your own Base wins. The Flying Boat uniquely crosses the Harbour Wall and moves 2 squares; Mine Layers are movable floating mines; Submarines sink all ships except Mine Layers and Motor Torpedo Boats."
published: true
engine:
  topology:
    type: grid
    rows: 12
    cols: 8
  render:
    cellSize: 34
    zones:
      fill: sea
      cells:
        - type: base
          at: [[0,5],[11,2]]
        - type: harbour
          at: [[0,6],[0,7],[1,5],[1,6],[1,7],[2,5],[2,6],[2,7],[9,0],[9,1],[9,2],[10,0],[10,1],[10,2],[11,0],[11,1]]
    ops:
      - op: rect
        fill: transparent
        scope: board
      - op: cells
        pattern: cellMap
        light: cell-light
        dark: cell-dark
        defaultFill: sea
        zones:
          cells:
            - type: base
              at: [[0,5],[11,2]]
            - type: harbour
              at: [[0,6],[0,7],[1,5],[1,6],[1,7],[2,5],[2,6],[2,7],[9,0],[9,1],[9,2],[10,0],[10,1],[10,2],[11,0],[11,1]]
        typeColors:
          sea: sea
          base: base
          harbour: harbour
        typeStrokes:
          sea: sea-stroke
          base: base-stroke
          harbour: harbour-stroke
  surface:
    colors:
      sea: "#3a6e9e"
      sea-stroke: "#2a5580"
      harbour: "#5a8ab5"
      harbour-stroke: "#3a6a95"
      base: "#c8a832"
      base-stroke: "#9a8020"
  players: [blue, red]
---

## Dover Patrol

{{svg:dover-patrol-board.svg "Dover Patrol — starting position"}}

Also titled **Naval Tactics**. Published by H.P. Gibson & Sons, London. One of the four games in the Gibson hidden-rank warfare series (alongside L'Attaque, Aviation, and Tri-Tactics).

Dover Patrol is a Capture the Flag game, not a piece-elimination game. The object is to seize the opponent's Flag from their Base and convey it to your own Base, while keeping your own Flag safe.

An Australian edition was published under licence by Moldex Ltd as **Pacific Patrol**, using HMAS ship names at equivalent ranks.

---

### Board

**8 columns (A–H) × 12 rows (1–12).** The entire playing surface is Sea; there is no land terrain. All movement and combat uses naval rules throughout.

Each player's side has a **Harbour** — a 3×3 walled area in the corner of their side of the board. The Harbours are in **opposite corners** of the board (not symmetric on the same side). Within each Harbour is the **Base**: the single square where the Admiral's Flag is placed at the start of the game.

**Harbour positions (1-indexed, A=col 1, H=col 8):**

| Player | Harbour columns | Harbour rows | Base square |
|--------|----------------|-------------|-------------|
| Player 1 | A–C (cols 1–3) | Rows 1–3 | C3 (inner corner, facing open sea) |
| Player 2 | F–H (cols 6–8) | Rows 10–12 | F10 (inner corner, facing open sea) |

The **Harbour Wall** runs along the open faces of the 3×3 Harbour area (the top and right faces for Player 1; the bottom and left faces for Player 2), forming a partial enclosure. The single gap or the Wall itself blocks normal piece movement. Only the **Flying Boat** can cross the Harbour Wall via its 2-square jumping move.

**Setup:** Each player places their 40 pieces face-down on their nearest 5 rows. Player 1 sets up on rows 1–5 (the Flag on Base = C3); Player 2 sets up on rows 8–12 (Flag on Base = F10). Rows 6–7 are the open contest zone. Each player has their Harbour on the left (row 1 or row 12).

---

### Pieces (40 per player, plus 1 Flag)

**The FLAG** is a separate clip (not a standing piece). It is placed on the Base at the start of the game. It is not a piece in its own right but is clipped to whichever ship carries it.

**Fleet — 30 numbered ships:**

| Count | Vessel | Value |
|---|---|---|
| 1 | Flagship | 10 |
| 1 | Vice-Flagship | 9 |
| 1 | Battle Squadron | 8 |
| 2 | Battleship | 7 |
| 3 | Battle Cruisers | 6 |
| 4 | Light Cruisers | 5 |
| 4 | Destroyers | 4 |
| 4 | Auxiliary Cruisers | 3 |
| 5 | Motor Torpedo Boats | 2 |
| 5 | Patrol Vessels | 1 |

**Fleet Auxiliaries — 6 unnumbered ships** (part of the 36-piece Fleet):

| Count | Vessel | Role |
|---|---|---|
| 1 | Mine Layer | Movable floating mine |
| 2 | Mine Sweepers | Remove Mines; carry the Flag |
| 3 | Submarines | Sink all ships except Mine Layers and Motor Torpedo Boats |

**Special pieces — 4 pieces** (outside the Fleet):

| Count | Piece | Role |
|---|---|---|
| 1 | Flying Boat | Crosses Harbour Wall; 2-square move; Scout |
| 3 | Mines | Stationary; blow up any ship that approaches |

**Total per player: 40 ships + 1 Flag clip.**

---

### Movement

Players alternate turns. Each piece moves **one square** — forwards, backwards, or sideways. **Never diagonally.** This applies even when carrying a Flag.

**Flying Boat exception**: The Flying Boat moves **two squares** in a straight line (as in Draughts when taking a piece — it physically passes through the intermediate square). It can move two squares backwards, forwards, or sideways, but not diagonally. This two-square move allows it to cross the Harbour Wall, which blocks all other pieces.

---

### Combat

Pieces cannot move into an occupied square. When a piece moves adjacent (back to back) to an enemy piece, the player **may choose to attack** by declaring “Attack!” Attacking is optional; the move passes whether or not an attack is declared. A player who declines to attack cannot be attacked back by that same piece without the opponent first moving away.

**Combat result**: Both pieces are revealed. The lower-valued ship is **sunk** (removed). The higher-valued ship remains on the square from which it attacked. Equal values: both sunk.

This rule applies to numbered Fleet pieces. For Auxiliaries, see special rules below.

---

### Special Piece Rules

**MINES** (stationary):
- Mines never move. Pretending to move a Mine to deceive the opponent is not permitted.
- Any ship — except Mine Sweepers, Mine Layers, and Flying Boats — that moves into the attacking position adjacent to a Mine is immediately **blown up**. This is automatic regardless of whether “Attack!” is declared.
- Mine Sweeper declares “Attack!” on a Mine: Mine is **destroyed** (removed).
- Flying Boat moves adjacent to a Mine: nothing happens.

**MINE SWEEPERS** (unnumbered):
- Used primarily to destroy Mines.
- Also useful for carrying the Flag.
- Cannot be sunk by Mine Layers, other Mine Sweepers, or Flying Boats (nothing happens).
- Any other piece sinks them.

**MINE LAYERS** (unnumbered):
- Act as **floating Mines**: any ship (other than another Mine Layer) that moves into attacking position adjacent to a Mine Layer is **blown up**.
- May move like any other ship.
- **Cannot attack** — Mine Layers never declare “Attack!”
- Can only be sunk by a **Destroyer (4)**.
- Mines have no effect on Mine Layers.
- Mine Sweepers, Submarines, and Flying Boats adjacent to Mine Layers: nothing happens.

**SUBMARINES** (unnumbered):
- Sink **all ships** except Mine Layers (see above) and **Motor Torpedo Boats (2)**, which sink Submarines instead.
- Submarines are blown up by Mines.
- Submarine vs Submarine, Submarine vs Mine Sweeper, Submarine vs Flying Boat: nothing happens.

**FLYING BOAT** (special):
- Moves **two squares** in a straight orthogonal line only; always moves two squares.
- The only piece that can **cross the Harbour Wall**, enabling it to reach the Base from outside.
- When flying over the Harbour Wall, this must be declared.
- May fly over a Mine if desired.
- Can be **brought down only by a Motor Torpedo Boat (2) or a Destroyer (4)**.
- Used as a **Scout**: when it attacks or is attacked by any piece other than 2s or 4s (including Mines), nothing happens and both remain — but both pieces must be shown, revealing their identities.

---

### The Flag and the Harbour

**Capturing the Flag:**
- The Flag remains on the Base until a ship moves onto the Base square to capture it.
- Only the Flying Boat can approach the Base through the Harbour Wall. All other ships must enter the Harbour from the open side.
- The capturing ship must move off the Base on its **next move**, carrying the Flag. If enemy pieces prevent this, the ship is **run aground** (removed) and the Flag remains on the Base.

**Carrying the Flag:**
- A ship carrying a Flag cannot attack the ship carrying the other Flag.
- If a Flag-carrying ship is attacked by an equal-valued ship: both are sunk. The Flag is placed on the square the escort had occupied.
- If a Flag-carrying ship is blown up by a Mine: the Flag is placed on the escort’s square. Only a Mine Sweeper can then recover it from this position.
- Once the Flag has left the Base, the holder may transfer it to any adjacent ship (not diagonally) — this counts as a move.

**Winning:**
- A player wins by getting **both Flags** — their own and the enemy’s — onto their own Base.
- A player **cannot** deposit the enemy Flag on their Base unless their own Flag is already in their possession and on their own side of the board.
- A player also wins if their opponent cannot move any piece on their turn, **provided** the winner’s own Flag is on their own Base. If not, the game is a draw.

---

### Shorter Game Variants

The rulebook includes four shorter variants:

1. **First Capture**: Same rules but the winner is the first player to capture the opponent’s Flag (occupy the opponent’s Base).
2. **Flagship Hunt**: Ignore the Harbour Wall; the first player to capture the opponent’s Flagship wins.
3. **Pitched Battle**: Ignore the Harbour Wall; victory goes to the side that sinks the entire opposing Fleet and Auxiliaries (excluding Mines).
4. **Capturing the Base** (24 pieces each): A reduced-set game using 3 back rows for setup. No Flag; win by first occupying the opponent’s Base. Attack declaration is mandatory (not optional). Piece set: 1 Vice-Flagship, 1 Battle Squadron, 1 Battleship, 2 Battle Cruisers, 2 Light Cruisers, 2 Destroyers, 1 Auxiliary Cruiser, 4 Motor Torpedo Boats, 3 Patrol Vessels, 1 Mine Sweeper, 1 Mine Layer, 2 Mines, 2 Submarines, 1 Flying Boat.

---

### Attribution

The “Dover Patrol” or Naval Tactics. Published by H.P. Gibson & Sons Ltd., London. Part of the Gibson hidden-rank warfare series alongside L’Attaque, Aviation, and Tri-Tactics. Public domain rule set. Source: original H.P. Gibson & Sons rulebook (scanned from physical copy).
