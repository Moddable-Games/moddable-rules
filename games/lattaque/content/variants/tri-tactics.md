---
title: Tri-Tactics
slug: tri-tactics
board: "12×12 (combined land/sea terrain)"
players: "2"
parent: lattaque
win: "Occupy the opponent's H.Q. with a Land Infantry piece, OR occupy the opponent's Lake (Naval Base) with a Ship"
special: "Combined-arms hidden-rank game by H.P. Gibson & Sons. 56 pieces per player across three services: Land (Infantry + Artillery), Naval (Ships + Flying Boats + Submarine), and Air Force, plus 8 Searchlights. All three services operate on a single board with land, sea, river, lake, and H.Q. terrain. Pieces caught out of their element are immediately forfeit when attacked. The Searchlight may move any number of squares in a straight line to attack. Combat outcomes between all 18 piece types are resolved via a published Value Table."
published: false
---

## Tri-Tactics

Also titled **The Great Game of Tactics on Land, Sea and in the Air**. Published by H.P. Gibson & Sons Ltd., London. Revised edition. A combination of the three Gibson hidden-rank games — Dover Patrol (Naval), Battle of Britain (Air), and L'Attaque (Army) — played simultaneously on a single board.

Two editions exist:
- **Older edition**: Air pieces named Scout/Bomber/Battle Plane/Sea Plane; naval named Destroyer/Cruiser/Dreadnought/Flagship.
- **Revised edition** (this file): Air pieces named Reconnaissance Plane/Bomber/Two-Seat Fighter; naval named Destroyer/Cruiser/Battleship/Aircraft Carrier plus Flying Boats and Submarine.

---

### Board

**12 columns (A–L) × 12 rows (1–12).** A custom printed board combining land (green) and sea (blue), bilaterally symmetric. Each player's half of the board contains an equal portion of both. The coastline is **irregular** (not a straight vertical line); the rules specify squares that are mostly-sea count as SEA, mostly-land as LAND.

**Terrain types:**

| Type | Description |
|---|---|
| **LAND** | Green squares. Infantry and Artillery’s native element. |
| **SEA** | Blue squares. Naval pieces’ native element. |
| **RIVER** | Channel connecting the Sea to the Lake on each player’s side. Takes the element of whichever piece currently occupies it. |
| **LAKE** | Player’s Naval Base — 1 square. Victory capture point for Ships (including Submarine, excluding Flying Boat). Cannot be permanently occupied (max 1 move transit). |
| **H.Q.** | Player’s Headquarters — 1 square. Victory capture point for Land Infantry (1–5) only. Cannot be permanently occupied. |

**Approximate terrain layout (based on physical board):**

The sea area on each player’s half occupies approximately **8 columns wide × 6 rows deep**, with the land on the remaining 4 columns. The coastline is irregular and expands: narrower at the front rank, wider toward the center of the board. H.Q. is in the center of each player’s back rank (front rank from their perspective) — column 6 (on the land side at the coastline). Each River is **4 squares long**, running from the sea area toward the Lake; the Lake is **1 square** at the end of the River.

**Key squares (Player 1 perspective, rows 1–12 with row 1 = Player 1’s front rank):**

| Feature | Square | Notes |
|---------|--------|---------|
| Player 1 H.Q. | F1 (col 6, row 1) | Land side; center of front rank |
| Player 1 Lake (Naval Base) | Approx. B6 (col 2, row 6) | Sea side; 1 sq at end of River |
| Player 1 River | Approx. B2–B5 (col 2, rows 2–5) | 4 squares; connects Sea to Lake |
| Player 2 H.Q. | G12 (col 7, row 12) | Land side; center of back rank |
| Player 2 Lake (Naval Base) | Approx. K7 (col 11, row 7) | Sea side; mirrored from Player 1 |
| Player 2 River | Approx. K8–K11 (col 11, rows 8–11) | 4 squares; mirrored |

> **Engine note:** The exact per-square terrain map requires measurement from the physical board (photos available). The above coordinates are the best approximation from available photo references. The coastline is the primary uncertainty; all other rules are exact.

**Setup:** Each player places their 56 pieces face-down on their nearest 5 rows (rows 1–5 for Player 1; rows 8–12 for Player 2), excluding H.Q. and Lake squares. Exactly 2 squares per player will be left empty after placing all 56 pieces.

---

### Pieces (56 per player)

**LAND FORCE — Infantry** (native element: Land):

| Count | Name | ID |
|---|---|---|
| 5 | Battalion | 1 |
| 4 | Brigade | 2 |
| 3 | Division | 3 |
| 2 | Army Corps | 4 |
| 1 | Army | 5 |

**LAND FORCE — Artillery** (native element: Land):

| Count | Name | ID |
|---|---|---|
| 4 | Anti-Aircraft Gun | AA |
| 3 | Field Artillery | FA |
| 2 | Heavy Artillery | HA |

**NAVAL FORCE** (native element: Sea; Flying Boat is exempt from out-of-element forfeiture):

| Count | Name | ID |
|---|---|---|
| 4 | Destroyers | 1 |
| 3 | Cruisers | 2 |
| 2 | Battleships | 3 |
| 1 | Aircraft Carrier | 4 |
| 1 | Submarine | SM |
| 4 | Flying Boats | FB |

**AIR FORCE** (native element: Air; operates on both Land and Sea without out-of-element forfeiture):

| Count | Name | ID |
|---|---|---|
| 4 | Reconnaissance Planes | 1 |
| 3 | Bombers | 2 |
| 2 | Two-Seat Fighters | 3 |

**AUXILIARY** (no native element; immune to out-of-element forfeiture; may operate on Land or Sea):

| Count | Name | ID |
|---|---|---|
| 8 | Searchlights | SL |

**Total per player: 56 pieces.**

---

### Movement

- One square per turn: backwards, forwards, or sideways. **Never diagonally.**
- Pieces move onto unoccupied squares only.
- **Searchlight exception**: may move any number of squares in a straight orthogonal line, provided all intervening squares are vacant. This extended move may **only be used to attack a piece** (destination must be adjacent to an enemy piece being attacked). Searchlights **may not** use the extended move as a positional move without attacking.
- Players alternate turns; one piece per turn.
- First move settled by lot; no advantage to moving first.

---

### Attack

- Optional: when adjacent to an enemy piece, a player may say **“Attack!”** or **“No Attack.”**
- On “Attack!”: both players reveal their pieces; lower-valued piece is removed; higher piece remains on its current square.
- Equal values: both pieces removed (**X**).
- If a player declines to attack (“No Attack”), the opponent **cannot** attack that piece in return without first moving one of their own pieces. You must move a piece in order to attack.
- A player cannot ask an opponent to declare a piece’s value without attacking.
- Attacker has no inherent advantage — purely value-based.

---

### Out-of-Element Forfeiture

Pieces may move out of their native element for tactical purposes, but are **immediately forfeit (removed)** if attacked while out of element:

- **Land piece (Infantry or Artillery) on Sea**, attacked by: ANY Naval piece, ANY Aircraft, or Searchlight → Land piece forfeit.
- **Naval piece (excluding Flying Boat) on Land**, attacked by: Infantry, Artillery, Aircraft, or Searchlight → Naval piece forfeit.

**Exempt from forfeiture:**
- Flying Boats: may go on land without out-of-element penalty.
- Air Force pieces (Recon, Bomber, TSF): operate over both Land and Sea without penalty.
- Searchlights: no native element; immune to forfeiture.

These forfeiture rules override the Value Table entirely.

---

### The Lake (Naval Base)

- **No permanent occupation**: a piece may move onto the Lake square but must move off on its very next turn. Any piece remaining on the Lake for more than one move is forfeit.
- **Entry restriction**: to capture the opponent’s Lake, a Ship must enter from the **River mouth** and move up the River. A Ship that went on Land and returns to a River space **may not** then attack the Lake — it may only use the River to return to Sea.
- **River combat**: while a Ship is on a River space, it captures all Land pieces (when attacked or attacking) **except Heavy Artillery** — Heavy Artillery beats Ships on River spaces.
- **Naval victory**: only Ships (Destroyers, Cruisers, Battleships, Aircraft Carrier, Submarine) may capture the Lake. Flying Boats are **excluded**.

---

### H.Q. (Headquarters)

- **No permanent occupation**: same rule as the Lake. Piece may transit through but must move off next turn; any piece remaining more than one move is forfeit.
- **Infantry victory only**: only Land Infantry pieces (Battalion 1, Brigade 2, Division 3, Army Corps 4, Army 5) can capture the H.Q. Artillery pieces **cannot** capture the H.Q.

---

### River

- River squares may be used by Land, Sea, or Air pieces.
- The element of a River square is **dynamically determined** by whichever piece currently occupies it.
- If a Land piece is on the River mouth, that square is Land, and its connection to the Sea counts as Coastline.
- If a Ship is on a River square, that square is Sea, and Ship-on-River rules apply.

---

### Coastline Rules

- Squares mostly-Sea = SEA; mostly-Land = LAND.
- **Cross-coastline attack (Ship vs Land or Land vs Ship)**: the **attacker** is forfeit and removed — EXCEPT:
  - Heavy Artillery attacking Ships across the Coastline: HA wins (ships forfeit). (**#** in table)
  - Ships attacking Anti-Aircraft Guns across the Coastline: Ships win (AA forfeit). (**+** in table)
- **Anti-coastal-defence exception**: Bombers and Flying Boats may destroy Infantry 1–5 AND Field Artillery across the Coastline. (**&** in table)
- **Aircraft vs Aircraft over Coastline**: when Flying Boats and Air Force are in conflict across the Coastline, nothing happens; both remain. (**\*** at coastline)

---

### Searchlights: Special Rules

- Can move any number of squares in a straight orthogonal line (not diagonal) to **attack only**.
- May operate on **Sea as well as Land** without penalty.
- Trigger out-of-element forfeiture when attacking out-of-element pieces.
- From Value Table: defeated by Flying Boats (FB wins). Defeats Reconnaissance Planes (value 1) and Battalions (value 1).

---

### Win Conditions

**First player to achieve either of the following wins:**

1. Occupy the opponent’s **H.Q.** with a Land Infantry piece (Battalion 1, Brigade 2, Division 3, Army Corps 4, or Army 5). Artillery cannot capture H.Q.
2. Occupy the opponent’s **Lake** with a Ship (Destroyer 1, Cruiser 2, Battleship 3, Aircraft Carrier 4, or Submarine SM). Flying Boats cannot capture the Lake.

Only one base needs to be captured.

---

### Value Table

Full cross-service combat resolution table. **Row = Attacker; Column = Defender.**

Table key:
- **[blank]** = nothing happens, both pieces remain.
- **X** = both pieces removed.
- **Piece ID** (e.g. `4`, `FA`, `SM`) = that piece wins; the other is removed.
- **&** = Coastline special: Bomber or Flying Boat destroys Infantry (1–5) or Field Artillery across the Coastline.
- **\*** = Element-conditional: Flying Boat wins over Recon/Bomber/TSF **on Sea**; Recon/Bomber/TSF win over Flying Boat **on Land**; nothing happens **over the Coastline**.
- **#** = River/Coastline special: only in conflict on a River space or with Coastline between; Heavy Artillery sinks the Ship.
- **+** = River/Coastline special: only in conflict on a River space or with Coastline between; Ship destroys the Anti-Aircraft Gun.
- **FB** = Flying Boat wins.
- **SM** = Submarine wins.

```
ATTACKER          Bat1 Brig2 Div3 AC4 Army5  AA   FA   HA  Rec1 Bom2 TSF3  FB   SM  Des1 Cru2 Bat3 AiC4   SL
------------------+----+-----+----+---+-----+----+----+----+----+----+----+----+----+----+----+----+----+----
Battalion (1)     |  X |  2  |  3 | 4 |  5  |  1 | FA |    |    |  2 |    |  & |    |    |    |    |    |  1
Brigade (2)       |  2 |  X  |  3 | 4 |  5  |    | FA | HA |    |  & |  3 |  & |    |    |    |    |    |
Division (3)      |  3 |  3  |  X | 4 |  5  |    |  X | HA |    |  2 |    |  & |    |    |    |    |    |
Army Corps (4)    |  4 |  4  |  4 | X |  5  |  4 |    | HA |    |  & |    |  & |    |    |    |    |    |
Army (5)          |  5 |  5  |  5 | 5 |  X  |    |  5 | HA |    |  & |    |  & |    |    |    |    |    |
Anti-Aircraft AA  |  1 |     |    |   |     |    | FA |    | AA | AA | AA | AA |  + |  + |  + |  + |  + |
Field Artillery FA| FA | FA  |  X | 4 |  5  | FA |  X | HA |    |  & |  3 |  & |    |    |    |    |    |
Heavy Artillery HA| HA | HA  | HA |HA | HA  |    | HA |  X |    |  2 |    |    |  # |  # |  # |  # |  # |
Recon Plane (1)   |    |     |    |   |     | AA |    |    |  X |  2 |  3 |  * |    |    |    |    |    |  1
Bomber (2)        |  2 |  &  |  2 |  &|  &  | AA |  & |  2 |  2 |  X |  3 |  * |    |    |    |    |    |
Two-Seat Ftr (3)  |    |  3  |    |   |     | AA |  3 |    |  3 |  3 |  X |  * |    |    |    |    |    |
Flying Boat FB    |  & |  &  |  & |  &|  &  | AA |  & |    |  * |  * |  * |  X | FB |  1 |    |    |    | FB
Submarine SM      |    |     |    |   |     |  + |    |  # |    |    |    | FB |    | SM | SM | SM | SM |
Destroyer (1)     |    |     |    |   |     |  + |    |  # |    |    |    |  1 | SM |  X |  2 |  3 |  4 |
Cruiser (2)       |    |     |    |   |     |  + |    |  # |    |    |    |    | SM |  2 |  X |  3 |  4 |
Battleship (3)    |    |     |    |   |     |  + |    |  # |    |    |    |    | SM |  3 |  3 |  X |  4 |
Aircraft Carrier 4|    |     |    |   |     |  + |    |  # |    |    |    |    | SM |  4 |  4 |  4 |  X |
Searchlight SL    |  1 |     |    |   |     |    |    |    |  1 |    |    | FB |    |    |    |    |    |
```

**Key interactions summary for engine:**
- Anti-Aircraft (AA) defeats all Air Force (Recon, Bomber, TSF, Flying Boat) in normal combat.
- AA loses to Battalion (1) in direct combat; Infantry 2–4 do not interact with AA (blank).
- Heavy Artillery (HA) beats all Infantry and FA, ties HA, loses to Bomber (2); has River/Coastline (#) rule vs Ships.
- Flying Boat (FB) beats Submarines (SM) and Destroyers (1) in naval combat.
- Submarine (SM) beats all other Ships but loses to Flying Boat.
- Searchlight defeats Battalions (1) and Reconnaissance Planes (1); is defeated by Flying Boats (FB).
- Division (3) vs Field Artillery (FA): X (both removed).

---

### Attribution

“Tri-Tactics” or The Great Game of Tactics on Land, Sea and in the Air (Revised Edition). Published by H.P. Gibson & Sons Ltd., London. Part of the Gibson hidden-rank warfare series alongside L’Attaque, Dover Patrol, and Aviation/Battle of Britain. Public domain rule set. Source: original H.P. Gibson & Sons revised-edition rulebook (scanned from physical copy) and Value Table card.
