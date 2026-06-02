---
title: "Dungeon Chess — Official Rulebook"
version: "0.2.1"
slug: "dungeon-chess"
players: "2–4"
duration: "30–120 min"
age: "12+"
tagline: "Asymmetric fantasy strategy on modular dungeon boards"
type: "mod"
base_game: "Chess"
status: "alpha"
updated: "2026-06-02"
published: true
---

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Overview</span><span class="eyebrow-line"></span></div>

## What Is Dungeon Chess?

Dungeon Chess is an asymmetric strategy board game for 2–4 players. Four fantasy factions — each with unique abilities — battle on modular dungeon maps with terrain hazards. Players draft armies from a shared XP budget, then fight to capture the enemy King.

**Core differences from standard chess:**
- **Asymmetric armies** — each faction has unique unit abilities, not just reskinned pieces
- **XP drafting** — build your army from a budget, choosing quantity vs quality
- **King capture wins** — no checkmate; you must actually take the King
- **Terrain** — water blocks movement; voids create chokepoints; gaps affect diagonal slides
- **Cannon attacks** — some units attack at range using the XiangQi screen mechanic
- **Split move/attack** — some units move in one pattern but attack in another

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Factions</span><span class="eyebrow-line"></span></div>

## The Four Factions

Each faction has 6 unit types corresponding to chess roles (Pawn, Castle, Knight, Bishop, Queen, King). Every faction plays differently.

### Human — Balanced & Reliable

Heroes, knights and archers. No gimmicks, no weaknesses. Cheap Knight (12 XP), premium Archer that pierces through pieces, and a Wizard with asymmetric threat zones. The Princess is the most mobile King. You always know what you're getting.

### Undead — Phase & Swarm

1 XP Skeletons let you field massive armies, but each dies to any adjacent touch. The Wraith moves with gaps and attacks with full slides, the Tomb phases through allies, and the Vampire moves diagonally but attacks orthogonally. Slippery, numerous, fragile.

### Redskin — Explosive Firepower

Every unit hits hard but costs dearly. Cannon-equipped Pawns and Castles, a hit-and-run Salamander, and the Demonics — which explodes on death, taking adjacent enemies with it. Iron Golem is immune to enemy cannons. Fewer units, bigger impact per piece.

### Greenskin — Attrition & Disruption

Goblins and Orcs backed by disruptive abilities. The Ogre freezes adjacent enemy Pawns. The Troll survives its first death. The Shaman can immobilise a key target. The Orc has flexible movement. Designed to grind opponents down and control the tempo.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Units</span><span class="eyebrow-line"></span></div>

## Unit Roster

All units, organised by chess role. XP cost shown in brackets.

### Pawns

| Unit | Faction | Cost | Movement | Attack | Special |
|------|---------|------|----------|--------|---------|
| Hero | Human | 2 XP | 1 square, any direction (8-way) | Same as movement (8-way) | — |
| Skeleton | Undead | 1 XP | 1 square, any direction (8-way) | Same as movement (8-way) | **Fragile:** any adjacent enemy can capture it (auto-capture) |
| Kobold | Redskin | 5 XP | 1 square, any direction (8-way) | 8-way (1 sq) + Cannon (rook line) | — |
| Goblin | Greenskin | 5 XP | 1 square, any direction (8-way) | 8-way (1 sq) + Cannon (rook line) | — |

All Pawns cannot step on water. Kobold and Goblin have an additional cannon attack along rook lines (must jump over exactly one piece to hit an enemy beyond). Skeletons cost only 1 XP but are fragile — any enemy adjacent to a Skeleton can capture it regardless of that enemy's normal attack pattern.

### Castles

| Unit | Faction | Cost | Movement | Attack | Special |
|------|---------|------|----------|--------|---------|
| Stronghold | Human | 10 XP | 1 square orthogonally | Rook slide (unlimited orthogonal) | — |
| Tomb | Undead | 12 XP | 1 square orthogonally | 1 sq ortho + Phasing rook slide | **Phase:** slides through one friendly piece, then attacks beyond it |
| Iron Golem | Redskin | 18 XP | 1 square orthogonally | Cannon (rook line) | **Cannon-proof:** cannot be targeted by cannon attacks |
| Ogre | Greenskin | 14 XP | 1 square orthogonally | Cannon (rook line) | **Intimidate:** adjacent enemies cannot attack |

Stronghold moves cautiously but attacks along full rook lines. Tomb can phase through a friendly piece and attack beyond it. Iron Golem is a fortress immune to enemy cannons. Ogre paralyses all adjacent enemies — not just Pawns.

### Knights

| Unit | Faction | Cost | Movement | Attack | Special |
|------|---------|------|----------|--------|---------|
| Knight | Human | 12 XP | L-shaped jump (2+1) | Same as movement | — |
| Reaper | Undead | 15 XP | L-shaped jump (2+1) | Same as movement | — |
| Salamander | Redskin | 18 XP | L-shaped jump (2+1) | Same as movement | **Retreat:** after capturing, must move 1 square to an adjacent empty square |
| Orc | Greenskin | 14 XP | L-shaped jump (2+1) OR 2 squares orthogonally | Same as movement | **Flexible:** can also move/attack 2 squares straight (first square must be empty) |

All Knights leap over pieces and terrain (including water). Human Knight is cheap and reliable. Salamander must retreat after capturing — it cannot stay on the capture square. Orc has two movement modes for unpredictable positioning.

### Bishops

| Unit | Faction | Cost | Movement | Attack | Special |
|------|---------|------|----------|--------|---------|
| Archer | Human | 18 XP | Diagonal slide | Gapped diagonal (exactly 1 empty square between) | **Ranged:** attacks at distance — must have one empty square gap to target |
| Wraith | Undead | 15 XP | Gapped bishop (1 empty square gap to destination) | Diagonal slide (unlimited) | **Inverted:** moves with gap, attacks without |
| Fire Elem. | Redskin | 12 XP | Diagonal slide | Diagonal slide | — |
| Troll | Greenskin | 16 XP | Diagonal slide | Diagonal slide | **Thick-skinned:** first hit wounds + pushes 1 sq backward; second hit captures |

Archer attacks from a distance — exactly one empty square between it and the target. Wraith is inverted: moves gapped, attacks with full slides. Fire Elem. is cheap but water-blocked. Troll survives its first hit, pushed backward and only falling to the second.

### Queens

| Unit | Faction | Cost | Movement | Attack | Special |
|------|---------|------|----------|--------|---------|
| Wizard | Human | 20 XP | Rook slide (orthogonal) | Bishop slide (diagonal) | **Split:** moves orthogonally, attacks diagonally |
| Vampire | Undead | 20 XP | Bishop slide (diagonal) | Rook slide (orthogonal) | **Split:** moves diagonally, attacks orthogonally |
| Demonics | Redskin | 22 XP | Queen slide (all 8 directions) | Queen slide | **Volatile:** on death, explodes — destroys all adjacent enemy pieces |
| Shaman | Greenskin | 20 XP | Queen slide (all 8 directions) | Queen slide | **Hex:** once per game, hex any enemy unit — target cannot move/attack for 2 turns |

Wizard and Vampire have asymmetric threat zones — the directions they can move and attack are opposite. Demonics is expensive but its death explosion can swing the game. Shaman's one-time hex can neutralise a key enemy at a critical moment. Both Demonics and Shaman are water-blocked.

### Kings

| Unit | Faction | Cost | Movement | Attack | Bonus |
|------|---------|------|----------|--------|-------|
| Princess | Human | 15 XP | King step (1 sq, 8-way) + Bishop slide | King step only (1 sq, 8-way) | Mobile: diagonal slides for repositioning only |
| Warlock | Undead | 20 XP | King step (1 sq, 8-way) | King step + Bishop slide | Ranged: attacks along diagonal lines |
| Red Dragon | Redskin | 20 XP | King step (1 sq, 8-way) | King step + Knight jump | Strikes via L-shaped leap |
| Warlord | Greenskin | 15 XP | King step (1 sq, 8-way) | King step + Knight jump | Strikes via L-shaped leap |

Every King has a unique bonus ability beyond its basic 1-step move. Princess can slide diagonally for repositioning but only captures adjacent. Warlock and Red Dragon/Warlord have extended attack ranges. Kings are royal — lose yours and you lose the game.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Cannon</span><span class="eyebrow-line"></span></div>

## The Cannon Mechanic

Kobolds, Goblins, Iron Golems, and Ogres have cannon attacks — a ranged capture mechanic borrowed from XiangQi (Chinese Chess).

**How it works:**
- The cannon attacks along rook lines (straight orthogonal).
- It must pass over exactly ONE piece (the "screen") between itself and the target.
- The screen can be friendly or enemy — it just needs to exist.
- Without a screen piece in the line, the cannon cannot capture.
- Water squares are skipped (not treated as blockers for cannon lines).
- The cannon jumps over the screen and lands on the target's square (same as XiangQi).

**Example:** A Kobold on a1 wants to capture an enemy on a5. There must be exactly one piece on a2, a3, or a4 (the screen). If the line is empty or has two pieces between them, the cannon cannot fire.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Terrain</span><span class="eyebrow-line"></span></div>

## Terrain

Dungeon maps use three terrain types:

### Floor (Normal)
Standard passable squares. No restrictions.

### Water
- Most units CANNOT step onto or slide through water squares.
- Knights CAN leap over water (their jump ignores terrain).
- Tomb phasing ignores water (slides through it).
- Cannon lines skip over water (ranged attacks are not blocked by water).
- Placed as 4×4 blocks in the centre of maps.

### Void
- Off-board squares. Cannot be entered by any unit.
- Creates the dungeon's corridors and chokepoints.
- All sliding pieces stop at void boundaries — voids block slides for every unit equally.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Drafting</span><span class="eyebrow-line"></span></div>

## Army Drafting

Before each game, players secretly build their army from an XP budget. Draft on paper or use the companion app — reveal your army only at deployment.

**Budget:** 80 XP

**Constraints:**
- Must include exactly 1 King
- Must include at least 1 Pawn
- Your army must fit within your deployment zone (varies by map)
- Duplicates are allowed (e.g. 3 Knights is legal)

**Example armies:**
- Skeleton swarm: Warlock (20) + 15 Skeletons (15) + Tomb (12) + Reaper (15) + Wraith (15) + 3 Skeletons (3) = 80 XP
- Human balanced: Princess (15) + Wizard (20) + Archer (18) + Knight (12) + 7 Heroes (14) = 79 XP
- Redskin elite: Red Dragon (20) + Demonics (22) + Iron Golem (18) + 4 Kobolds (20) = 80 XP
- Greenskin midrange: Warlord (15) + Shaman (20) + Troll (16) + Orc (14) + 3 Goblins (15) = 80 XP

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Playing</span><span class="eyebrow-line"></span></div>

## How to Play

### Setup

1. Agree on a map and lay it out between all players
2. Each player chooses a faction (no duplicates)
3. Each player secretly drafts their army within the 80 XP budget
4. Determine turn order (youngest first, or roll a die)
5. Starting with the first player, each player deploys their army in their spawn zone (the 2 rows nearest their edge of the board)

Deployment is simultaneous if all players agree, or sequential in turn order if preferred.

### On Your Turn

Each turn you perform exactly one action: **move or attack with one unit.** If a unit's movement brings it onto an enemy-occupied square, that is both a move and a capture in a single action.

Play proceeds clockwise. In a 2-player game, turns simply alternate.

### Check

- A King is in check if an enemy unit could capture it next turn.
- You cannot make a move that leaves your own King in check.
- You must resolve check on your turn — move your King, block the threat, or capture the attacker.
- There is no checkmate or stalemate. The game ends only when a King is actually captured.

### Winning the Game

**Capture an enemy King.** The game ends immediately when any King is taken.

In a 4-player game, an eliminated player removes all their remaining pieces from the board. Play continues among surviving players until one King remains.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Maps</span><span class="eyebrow-line"></span></div>

## Maps

Choose one map before the game begins. Each map uses square tiles laid out in the specified pattern. Water tiles are placed face-up; void spaces are simply left empty.

### Compact Skirmish (2 players)

{{svg:compact-skirmish.svg "Compact Skirmish — 10×10 arena with central water hazard"}}

A 10×10 open arena with a 4×4 water block in the centre. Each player deploys in the 2 rows nearest their edge. Fast, aggressive games where the water forces armies to split and flank.

### Two Player Dungeon (2 players)

{{svg:two-player-dungeon.svg "Two Player Dungeon — cross-shaped with narrow corridors"}}

A cross-shaped dungeon with three chambers connected by narrow 2-wide corridors:
- **North & South chambers:** 8×2 (deployment zones, one per player)
- **Centre chamber:** 8×8 with 4×4 water in the middle
- **Corridors:** 2 squares wide, connecting chambers vertically

Chokepoints force careful army composition. Knights and leaping units are valuable for bypassing the narrow passages.

### Four Player Dungeon (4 players)

{{svg:four-player-dungeon.svg "Four Player Dungeon — symmetric cross with four deployment zones"}}

A symmetric cross with four arms. Each player claims one arm as their deployment zone (2 rows at the end of each arm). A central 8×8 arena with 4×4 water connects all four corridors.

The largest and most complex map. Multi-front warfare, temporary alliances, and last-player-standing dynamics.

</div>
