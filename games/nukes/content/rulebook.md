---
title: "Nukes: Official Rulebook"
version: "0.9.8"
slug: "nukes"
players: "2–3"
duration: "45+ min"
age: "12+"
tagline: "Cold-war territory control on a hex map with nuclear brinkmanship"
type: "game"
status: "live"
updated: "2026-06-27"
first_published: "January 2012"
published: true
variants: true
variant_hub: false
logo_has_title: true
post_content:
  - ref-page.html
  - appendix.html
theme:
  surface: light
  tint: warm
  texture: grain
  cover: gradient
  typography: classical
  accent: amber
  accent-secondary: teal
  section-divider: "☢"
how_to_play: "Command armies across hex terrain, managing platoons that change type based on unit count. Return hostages to earn moves, but every return strengthens your opponent. Build bases to convert units into isotopes for nuclear strikes. Win by destroying or occupying an opponent's city."
mechanics:
  - territory
  - hostage-economy
  - fluid-units
  - nuclear-strikes
  - hex-grid
complexity: complex
related:
  - harvesters
  - hyper-imperium
  - endless-skies
engine:
  surface:
    colors:
      stroke: "rgba(0,0,0,0.2)"
      border: "#6b4226"
      water: "#2196F3"
      trees: "#4CAF50"
      mount: "#795548"
      grass: "#8BC34A"
      sand: "#FFC107"
      base: "#F44336"
---

<div class="section">
<div class="eyebrow">Before You Begin</div>

## How to Play in 5 Minutes

Nukes is a 2–3 player strategy game played on a board of hexagonal regions. You command armies across varied terrain, build fortified bases, and threaten opponents with nuclear strikes, all while managing a precarious supply of hostages that is simultaneously your resource and your countdown timer.

<div class="highlight">
<div class="box-title">★ Read This First: The Two Core Ideas</div>

**1. Platoons are fluid.** Tokens have no fixed type. The number of units in a region determines the platoon type: 1 = Infantry, 2 = Artillery, 3 = Airborne, 4+ = Base. This changes constantly as units join or leave regions, and it governs movement, combat, and terrain {nowrap|safety.}

**2. Hostages are your engine.** You hold your opponents' tokens. Each turn you must return 1–3 of them to their owner's forces on the board. This earns you moves, but also reinforces your enemy. Your hostage supply is finite. When it runs out, you {nowrap|lose.}
</div>

### The Core Loop

- **Return 1–3 hostages** to regions where their owner already has units, earning one move per token returned. You choose which of your units to move.
- **Move your platoons.** Infantry chains through same-biome terrain. Artillery fires in straight lines over occupied regions. Airborne drops exactly two regions away and can slingshot through friendly Airborne or Bases.
- **Attack** by moving into an enemy region, but only if you have strictly greater strength than the defender.
- **Capture enemy units** as hostages instead of destroying them, sacrificing your own units to do so.
- **Build Bases** (4+ units in one region) to convert units into isotopes and {nowrap|unlock additional nuclear strikes.}
- **Win** by destroying or occupying an opponent's city, or outlasting everyone else.

<div class="designer-note">
<p>Nukes was designed around a single question: <em>what if every aggressive move also strengthened your opponent?</em> The hostage mechanic creates this tension. You need to return tokens to move, but every return reinforces the enemy. The game rewards players who find the tipping point between building momentum and over-extending.</p>
</div>

</div>

<div class="section">
<div class="eyebrow">What's in the Box</div>

## Components

| Item | Qty | Notes |
|------|-----|-------|
| **Hex Tiles** | 44 | Each is a region. Biohazard printed on the reverse. |
| **Tokens** | 75 | 25 per player in 3 distinct colours. |
| **Bookmark Reference Cards** | 3 | One per player. See the Quick Reference section of this rulebook. |
| **Rulebook** | 1 | This document. |

### Tokens

There are 25 tokens in 3 different colours for a total of 75 tokens. Depending upon where those tokens are located or how many are placed together, they can represent:

- **Hostages** – tokens belonging to you that are owned by someone else
- **Isotopes** – tokens belonging to you that are not on the board
- **Units** – tokens belonging to you that are on the board
- **Bases** – 4 or more units within a single region on the board

A **Platoon** is a unit or group of units that move as one:

- **Infantry** – 1 unit moving from a single region on the board
- **Artillery** – 2 units moving from a single region on the board
- **Airborne** – 3 units moving from a single region on the board
- **Nukes** – 1 unit emerging from a Base that has spent at least 1 isotope

### Hex Tiles by Biome

| Biome | Count | Colour |
|-------|-------|--------|
| Fields | 13 | Light green |
| Forests | 9 | Dark green |
| Mountains | 7 | Grey |
| Water | 7 | Light blue |
| Deserts | 5 | Yellow |
| Cities | 3 | Light red |

</div>

<div class="section">
<div class="eyebrow">Before the First Turn</div>

## Setting Up the Board

### Building the Board

The board uses 37 of the 44 tiles and can be built three ways:

- **Symmetrical:** A pre-agreed mirrored layout. Visit moddable.games/tool/nukes {nowrap|for templates.}
- **Pre-defined:** All players agree on a specific arrangement before play begins.
- **Drafted:** Each player places their City at the board edge first. Randomly choose a starting player who picks the central region. Players then alternate placing tiles adjacent to their city, the central region, or any {nowrap|already-placed tile.}

<div class="two-col">
<div>

#### 2-Player Tile Counts

| Biome | Per Side | Total |
|-------|----------|-------|
| Fields | 5 | 10 |
| Forests | 4 | 8 |
| Mountains | 3 | 6 |
| Water | 3 | 6 |
| Deserts | 2 | 4 |
| Cities | 1 | 2 |
| **Centre** | — | **1** |

</div>
<div>

#### 3-Player Tile Counts

| Biome | Per Side | Total |
|-------|----------|-------|
| Fields | 4 | 12 |
| Forests | 2 | 6 |
| Mountains | 2 | 6 |
| Water | 2 | 6 |
| Deserts | 1 | 3 |
| Cities | 1 | 3 |
| **Centre** | — | **1** |

</div>
</div>

<p class="table-note">★ The central region may be any biome except a City. It is chosen by the first player (drafted) or agreed upon (symmetrical/pre-defined). 36 tiles are split evenly between sides; the centre tile is the 37th.</p>

### Starting Positions

- Place your **City tile** at the edge of the board, equally spaced from all other cities and the central region.
- Place **4 of your tokens** in your city as starting units.
- Place **1 token** beside the board as your starting **isotope**.
- In a **2-player game:** take all 20 of your opponent's tokens as hostages.
- In a **3-player game:** take 10 tokens from each other player as hostages (20 total).

</div>

<div class="section">
<div class="eyebrow">Winning the Game</div>

## Victory Conditions

The game ends **immediately** the moment any condition below is met. No further {nowrap|turns are taken.}

- **Destroy an opponent's city** via a Nuke strike or a Meltdown on their city hex.
- **Establish a Base on an opponent's city** by moving 4 or more of your units onto their {nowrap|city tile.}
- **Outlast all opponents** by being the last player with hostages to return and units on {nowrap|the board.}

### Elimination

A player is eliminated when **either** of the following {nowrap|occurs independently:}

- {warn|Hostage Attrition:} You have no hostages to return at the start of your turn. Your city is immediately destroyed and all your units removed from the game.
- {warn|Total Annihilation:} You have no units left on the board at any point. All your tokens everywhere (on the board and held as hostages by others) are immediately removed from the game.

<div class="box red">
<div class="box-title">⚠ 3-Player Eliminations</div>

When a player is eliminated, any of their tokens held as hostages by surviving players are also removed from the game immediately. Surviving players lose that portion of their hostage supply. The two remaining players continue normally.
</div>
</div>

<div class="section">
<div class="eyebrow">How Turns Work</div>

## Turn Structure

Turns proceed clockwise. Each turn has three phases, always in this order.

{{include:turn-flow.html}}

### Phase 1: Return Hostages

<div class="highlight">
<div class="box-title">✦ Understanding the Hostage Mechanic</div>

You hold your opponents' tokens as hostages in your supply. When you return a hostage, you take one of your opponent's tokens from your own supply and place it on a region where **that opponent already has at least one unit**, physically joining that region and potentially upgrading its platoon type. Returning hostages earns you moves, but directly strengthens your enemy's forces.
**This tension is the engine of the game.**
</div>

- You **must** return between 1 and 3 hostage tokens each turn. At least 1 is mandatory.
- Each token goes to a region where **that token's owner already has units present**. You cannot return a token to an empty region or to one of your own regions.
- The returned token **physically joins that region**, increasing the unit count. A 2-unit Artillery may become a 3-unit Airborne. A 3-unit Airborne may become a 4-unit Base, with all {nowrap|consequences that follow.}
- You may return **no more than 1 token per region** per turn.
- The number of tokens returned equals the number of **moves earned** this turn.
- {warn|If you have no hostages to return}, your city is immediately destroyed and you {nowrap|are eliminated.}

### Phase 2: Move Units

- You earn **one move per hostage returned**, between 1 and 3 moves total.
- Moves are **optional**. You may use fewer than you earned. Only return as many hostages as moves you actually need; every returned token costs you.
- You may move a **maximum of 3 units in total** per turn. Valid combinations: 1 Airborne (3 units), 1 Artillery + 1 Infantry, or up to 3 Infantry.
- Each move is: moving a platoon into any empty region, into a region containing friendly units, or attacking an enemy-occupied region.
- The **same unit(s) cannot move more than once** per turn, except within an Airborne Slingshot. This includes units that changed platoon type mid-turn: if Infantry moves into a region and becomes part of an Artillery (2 units), that Artillery cannot then move. None of the units in the destination region may move again {nowrap|that turn.}

### Phase 3: End-of-Turn Resolution

After all moves and combat are resolved, any units resting in restricted terrain they cannot safely occupy are destroyed. Only the **final resting position** matters for destruction. If a platoon's movement path legally passes through a restricted region (see each unit type's movement rules for what they can and cannot pass through) and ends in a safe region, no penalty applies.

<div class="box teal">
<div class="box-title">✦ Immediate vs End-of-Turn Destruction</div>

Nuke blasts and Meltdowns destroy units **immediately** when triggered, not at end of turn. Everything else (a platoon stranded in terrain it cannot safely occupy) is resolved during Phase 3 only.
</div>
</div>

<div class="section">
<div class="eyebrow">Your Forces</div>

## Units & Platoons

Platoon type is determined solely by the **current unit count** in a region. This fluidity is fundamental: platoons change type as units {nowrap|join or leave regions.}

<div class="box teal">
<div class="box-title">✦ The Fluid Platoon Principle</div>

If 1 unit (Infantry) moves into a region containing 2 units (Artillery), those 3 units are now Airborne, with all of Airborne's permissions and restrictions. At end of turn, a region with 3 units in water is Airborne (safe). Two units in water is Artillery (destroyed). Always ask: **how many units are here, and {nowrap|what platoon does that make?}**
</div>

{{include:unit-cards.html}}

### Infantry: Movement & Rules

<div class="diagrams-grid">
<div class="diagram-box">
<div class="diagram-title">Same-Biome Flood Fill</div>
{{svg:infantry_floodfill_v2.svg "Infantry reaches every connected field hex in one move with no distance limit. Adjacent mountains are also reachable as a final step into a different biome. The mountain with a red mark has no adjacent field and cannot be reached."}}
</div>
<div class="diagram-box">
<div class="diagram-title">Can Enter, Cannot Pass Through</div>
{{svg:infantry_blocking_v2.svg "Infantry can move into a friendly Artillery region (tokens merge). It cannot move through it. Mountains seal the corridor: the fields beyond the Artillery are unreachable."}}
</div>
</div>

- **Same-biome chaining:** Infantry may travel through any number of connected regions sharing their starting biome in a single move, with no distance limit. At the end they may optionally step into one adjacent region of a different biome.
- **Blocked by friendly Infantry and Artillery:** Infantry cannot pass through any region containing your own Infantry or Artillery. Your own Artillery blocks your own Infantry just as firmly as an enemy would. Enemy units of any type block Infantry.
- **Bridges:** Your own Airborne, Bases, and Cities count as any biome for infantry chaining and may be passed through freely. An Airborne on a mountain connects two field regions on either side of it as if the mountain were also a field.
- **Restricted terrain:** A region ending the turn with 1 unit (Infantry) in water or desert is destroyed at Phase 3 {nowrap|resolution.} Infantry cannot transit through water or desert unless friendly units already in that region will raise the combined count to a safe platoon type.
- **Combat bonus:** Each friendly Base infantry passes *through* en route to an attack {nowrap|adds +1 to combat strength.} The starting Base {nowrap|does not count.}

### Artillery: Movement & Rules

<div class="diagrams-grid">
<div class="diagram-box">
<div class="diagram-title">Jump Mechanics</div>
{{svg:artillery_jumpmechanics_v2.svg "Four jump attempts from the same position. Enemy Infantry and own Airborne are valid stepping stones. An empty intermediate prevents any jump. Enemy Airborne blocks the jump despite the hex being occupied."}}
</div>
<div class="diagram-box">
<div class="diagram-title">Pivot at a Friendly Base</div>
{{svg:artillery_pivot_v2.svg "Artillery arrives at the friendly Base (gold border). From the Base it can reach 8 destinations: the Base itself, 5 adjacent hexes (excluding where it came from), and 2 hexes beyond the friendly infantry via continued jumps."}}
</div>
</div>

- **Straight-line jumps:** Artillery moves by jumping to the directly opposing region across a hex axis. Intermediate regions must contain units at the moment of the jump. Units placed there earlier in the same {nowrap|turn count.}
- **Multiple jumps:** Artillery can chain multiple jumps in one move, using each occupied region as a stepping stone.
- **Direction changes (pivots):** When artillery jumps over your own Airborne or a Base, it may change to any new hex direction and {nowrap|continue from there.} From the pivot point, artillery may: land on the pivot Base or Airborne itself; land on any hex adjacent to the pivot point (empty or friendly, where units merge via fluid rules); or jump over any occupied hex adjacent to the pivot point to land beyond it. Multiple pivots are permitted in one move.
- **Enemy blockers:** Artillery cannot jump over enemy Airborne or enemy Bases. It can jump over enemy Infantry and enemy Artillery.
- **Forest:** Artillery starting in a forest cannot attack that turn. It may still move to any unoccupied region or join a friendly platoon.
- **Water:** A region ending with 2 units (Artillery) alone in water is destroyed at Phase 3. Cannot pass through water unless friendly units already there will raise the count to a safe platoon type.
- **Combat bonus:** Each friendly Base passed over en route adds +1. The starting Base {nowrap|does not count.}

### Airborne: Movement & Rules

<div class="diagrams-grid">
<div class="diagram-box">
<div class="diagram-title">Exactly 2 Steps, Not Adjacent</div>
{{svg:airborne_exactly2_v2.svg "Airborne lands exactly 2 steps away in any direction. The path need not be straight. Adjacent hexes cannot be landed on. Mountains without a friendly Base cannot be passed through or landed in."}}
</div>
<div class="diagram-box">
<div class="diagram-title">Slingshot Chain</div>
{{svg:airborne_slingshot_v2.svg "All valid destinations shown across the full slingshot chain, from start directly, or via either Base as a launch point. Each Base may only serve as a launch point once per chain."}}
</div>
</div>

- **Exactly two regions:** Airborne moves in two steps, each to an adjacent region. The two steps can go in any direction; there is no requirement to move in a straight line. The only restriction is that the final landing region cannot be directly adjacent to the starting region. Any region that is two steps away via any path, and not adjacent to the start, is a {nowrap|valid landing spot.}
- **Mountains:** Airborne cannot pass through a mountain region as an intermediate step unless one of your own Bases is already present there. Airborne cannot safely rest alone in mountains (destroyed at Phase 3). Landing on a mountain with any friendly units present is safe, since the combined count (3+) always forms a Base.
- **Biohazard:** Airborne can pass over Biohazard regions as an intermediate step. Airborne cannot end its turn in a Biohazard region (destroyed at Phase 3).
- **Enemy blockers:** Airborne cannot pass over regions containing enemy Infantry or enemy Artillery. It can pass over enemy Airborne and enemy Bases freely.
- **Slingshot:** If Airborne lands on a region containing your own Airborne or a Base, it may immediately launch again. Declare the entire chain at once. Each intermediate Airborne or Base may only serve as a launch point once per chain. Every leg must obey the "exactly 2, not adjacent" rule. The entire chain counts as only 3 {nowrap|units toward the turn's maximum.} Slingshotting is the only way for Airborne to end its turn on a region adjacent to where {nowrap|it started.}
- **Combat bonus:** Each friendly Base slingshot over en route {nowrap|adds +1 to combat strength.}

### Nukes: Movement & Rules

<div class="diagrams-grid">
<div class="diagram-box">
<div class="diagram-title">Valid Targets</div>
{{svg:nuke_targets_v2.svg "Nuke hops over the infantry, pivots at the friendly Airborne, then can reach the green-highlighted regions. Enemy Airborne blocks the path beyond. Targeting the enemy Airborne (strength 3) requires 3 isotopes to exceed its strength, and your own Airborne is in the blast radius."}}
</div>
<div class="diagram-box">
<div class="diagram-title">After the Strike</div>
{{svg:nuke_afterstrike_v2.svg "The target hex becomes Biohazard. All units in the target and its 6 surrounding hexes are destroyed. The surrounding hexes themselves remain unchanged. Five enemy units eliminated, but 3 friendly Airborne units caught in the blast radius are also destroyed (gold X)."}}
</div>
</div>

- **Requires a Base:** A nuke can only be launched from a region containing one of your Bases. The Base remains after launch.
- **Must jump at least once:** A nuke must cross over at least one occupied intermediate region. It cannot fire into an adjacent hex.
- **Isotopes:** Before firing, place at least 1 isotope from your supply into the target region. You may place multiple; each adds +1 to nuke strength beyond the {nowrap|base of 2.}
- **Strength:** Starts at 2 (nuke unit + 1 isotope minimum). Add +1 per additional isotope placed in the target. Add +1 per friendly Base passed over en route.
- **Movement:** Same jump rules as artillery. Direction changes at your own Airborne or Bases. Can jump over enemy Infantry only; cannot jump over enemy Artillery, Airborne, or Bases. Biohazards block movement (treated as empty for jump purposes and cannot be jumped over).
- **Legal targets:** Any region except empty water and biohazard regions. Empty land regions and your own units are valid targets.
- **Enemy targets:** Your nuke strength must strictly exceed the defender's strength to target an enemy-occupied region.
- **Blast effect (immediate):** Target region becomes Biohazard permanently. All units on the target region and all units in the 6 surrounding regions are {nowrap|destroyed immediately,} including your own. The surrounding regions do not change biome.
- **No hostage capture.** A nuke only destroys.

### Bases: Full Rules

- A Base forms **immediately** when a 4th unit joins a region, mid-turn during Phase 2.
- **Maximum 9 units.** Voluntarily moving your own platoon into a full Base is illegal. If an opponent returns a hostage to your full Base, the Meltdown rule applies.
- **Isotope conversion:** Each time *you* add units to your own Base (including the move that forms it) you may immediately convert 1 unit into an isotope. Triggers once per event: two separate moves adding to bases in one turn means two conversion opportunities. Does not trigger when an opponent returns a token to your Base.
- Bases provide **+1 combat strength** to your platoons passing through or over them en route to combat. Units starting their move *from within* a Base do not {nowrap|receive this bonus.}
- Bases also provide **+1 defensive strength** to your units in any adjacent region that is attacked. Plain units adjacent to a defender do not provide this bonus; only Bases do.
- A Base cannot move, but **any number of units may leave**, including all of them, leaving the {nowrap|region empty.}

### Cities: Full Rules

- Cities act as Bases **for movement purposes only** regardless of unit count. Infantry can pass through freely (Cities count as any biome for infantry chaining), Artillery and Nukes can change direction when passing over, and Airborne can slingshot from them.
- With **fewer than 4 units**: no combat adjacency bonus.
- With **4 or more units**: a real Base is present, providing all normal {nowrap|Base combat bonuses.}
- The pass-through combat bonus (+1 for platoons moving through or over) does not apply to units beginning their move from within that city.

</div>

<div class="section">

### Meltdown

A Meltdown occurs when a hostage token is returned to a region already at its maximum capacity of 9 units. This is a legal and intentional offensive tactic.

<div class="meltdown-box">
<div class="box-title">☢ Meltdown Effect (Immediate)</div>

**Target hex:** Converted to Biohazard immediately. All units on the target hex are {nowrap|destroyed immediately.}

**Surrounding hexes:** Completely unaffected. Units in the 6 surrounding regions are not destroyed and those hexes do not change biome.

This is the key distinction from a Nuke, which destroys units in all {nowrap|surrounding hexes too.}
</div>

- Triggered during **Phase 1** (Return Hostages), not during Phase 2.
- The destruction is **immediate**, not delayed to Phase 3.
- The return that triggers a Meltdown still counts as one of your 1–3 returns. You still **earn a move** from it.
- All units on the target hex are {nowrap|destroyed immediately.}
- If a Meltdown destroys a City, that city's owner is eliminated and the player who triggered the Meltdown wins (city destruction is {nowrap|a victory condition).}

</div>

<div class="section">
<div class="eyebrow">Resolving Battles</div>

## Combat

A platoon may only move into an enemy-occupied region if it can win. You must have **strictly greater strength** than the defender. A tie is not sufficient to attack.

### Calculating Strength

{{include:strength-grid.html}}

- The surrounding bonus for the attacker is calculated relative to the **target region's 6 adjacent hexes**.
- If the attacker wins, all defending units in the target region are **destroyed and removed from the game** by default. The attacker occupies the region.

### Capturing Hostages

Instead of destroying enemy units, you may capture them as hostages, adding to your supply and extending your opponent's time in the game (while {nowrap|extending your own).}

- For each point of **excess strength** (beyond what was needed to win), you may capture one of the defender's units instead of destroying it.
- To capture one enemy unit, you must **sacrifice one of your own units** from the attacking platoon or from an adjacent region that contributed {nowrap|support strength.}
- The **attacker chooses** which specific enemy units to capture versus destroy.
- You may capture up to your total excess strength, limited by the number of physical units in the defending region. You may also choose not to capture at all.

<div class="box">
<div class="box-title">✦ Example</div>

Attacker strength 5 vs defender strength 3 (Artillery with +1 Base adjacency bonus, so 2 physical units in the region). Excess strength is 2. The attacker may capture up to 2 units, but only 2 physical units exist, so both can be captured. Each capture costs one of the attacker's own units. The attacker sacrifices 2, captures 2 as hostages, and occupies the region with their remaining forces.
</div>
</div>

<div class="section">
<div class="eyebrow">The Battlefield</div>

## Biomes

Each region belongs to one of seven biome types. Terrain restrictions apply based on the **{nowrap|platoon type the units form}**, not how they arrived. A region with 3 units in water is Airborne, which has no water restriction. Always evaluate the {nowrap|unit count.}

{{include:biome-grid.html}}

{{include:terrain-table.html}}

<div class="box teal">
<div class="box-title">✦ "Needs Support to Pass": What This Means</div>

A platoon can transit through a restricted terrain region if **friendly units already stationed there raise the total unit count above the danger threshold**. For example, Infantry (1 unit) can safely end in desert if friendly Artillery (2 units) is already there. Combined they form Airborne (3 units), which has no desert restriction. Any friendly presence that changes the platoon type to a safe one {nowrap|counts as support.}
</div>
</div>

<div class="section">
<div class="eyebrow">Mods by The House</div>

## Variants

Each variant modifies one aspect of the base game. All other rules remain identical to standard Nukes.

<div class="variant-grid">

- [Siege](variants/siege/) — Own-supply recruiting replaces the hostage economy
- [Asymmetric Powers](variants/asymmetric-powers/) — Per-player Power Cards drawn at setup
- [Fallout](variants/fallout/) — Spreading Biohazard tiles shrink the board over time

</div>
</div>

