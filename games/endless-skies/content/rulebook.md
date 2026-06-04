---
title: "Endless Skies — Official Rulebook"
version: "0.4.0"
slug: "endless-skies"
players: "2–8"
duration: "TBD"
age: "14+"
tagline: "4X space exploration with worker placement and fleet management"
type: "game"
status: "dev"
updated: "2026-06-04"
first_published: "January 2025"
published: false
---

<div class="section">
<div class="eyebrow">Before You Begin</div>

## How to Play in 5 Minutes

Endless Skies is a 4X board game (explore, expand, exploit, exterminate) with worker placement, based on the open-source video game Endless Sky. Two to eight players command asymmetric factions across a hex-tile galaxy, managing fleets of ships, placing workers in ship rooms and space ports, and completing contracts for victory points.

<div class="highlight">
<div class="box-title">★ Read This First — The Core Loop</div>

**1. Place diplomats.** In initiative order, place diplomat meeples in space port rooms to gain resources, buy ships, trade, or trigger special actions.

**2. Activate crew.** Move rookie and legend meeples to ship rooms — Bridge, Engine Room, Battlestations, or Storage Bay — to pilot, fight, repair, or upgrade your fleet.

**3. Resolve events.** Move asteroids and wormholes, resolve conflicts between factions, check for destroyed ships, and refresh for the next round.

**4. Complete contracts.** Score victory points by fulfilling public contracts (visible to all) and private missions (secret objectives). First to trigger the endgame condition forces a final scoring round.
</div>

### Based On

Endless Sky is an open-source space exploration video game (github.com/endless-sky/endless-sky) with public domain imagery. Endless Skies adapts its universe, factions, and ship designs into a tabletop format.

</div>

<div class="section">
<div class="eyebrow">What's in the Box</div>

## Components

| Item | Qty | Notes |
|------|-----|-------|
| **Hex System Tiles** | 113 | 91 placed during setup per faction regions |
| **Meeples — Rookies** | 80 | 10 per player in 8 colours |
| **Meeples — Legends** | 24 | 3 per player |
| **Meeples — Diplomats** | 28 | variable per player |
| **Ship Units** | 128 | 16 per player |
| **NPC Ships** | 16 | Neutral faction ships |
| **Cards — Public Contracts** | 100 | Visible VP objectives |
| **Cards — Private Missions** | 60 | Secret VP objectives |
| **Cards — Blueprints** | 500 | Ship outfits and upgrades |
| **Cards — Events** | 90 | Round events |
| **Cards — Discoveries** | 200 | Exploration rewards |
| **Player Ship Sheets** | 112 | 14 per player |
| **NPC Ship Sheets** | 16 | |
| **Space Port Sheets** | 8 | One per faction |
| **Credit Tokens** | 300 | Currency |
| **Undiscovered Tokens** | 120 | Face-down exploration markers |
| **Wormhole Tokens** | 32 | 4 types: C, M, Y, K |
| **Asteroid Tokens** | 112 | Dynamic obstacles / mining |
| **Coloured Cubes** | various | Red=hazardous, Green=bio, Blue=precious, Black=shields/hull |

</div>

<div class="section">
<div class="eyebrow">The Galaxy</div>

## System Tiles

The galaxy is built from 91 hex system tiles (drawn from 113 total) arranged by faction regions. Each tile contains:

- System name and region
- Faction affiliation
- Events (triggered on entry or by card)
- Planets with habitats
- Population
- Commodities produced
- Wormhole connections (types C, M, Y, K with range costs)

Tiles are placed during setup according to faction regions — each faction's home territory is predetermined, with contested border regions placed by mutual agreement or randomly.

### Setup Rules

- 113 tiles total, 91 placed per game
- Centre = 9th space port (shared)
- Each faction: starting system + 10 adjacent tiles (excludes asteroid belt + port)
- Asteroid belts and space ports unlocked during gameplay, not placed at setup
- Remaining spaces filled randomly from all non-starting systems + 2 empty space hexes

### Republic — Near Earth (13 systems)

| Code | Name | Ev | Disc | Val | Pla | Hab | Pop | Haz | Bio | Pre | Wormholes |
|------|------|----|------|-----|-----|-----|-----|-----|-----|-----|-----------|
| NE01 | Sol | 0 | 0 | 1 | 9 | 5 | 25 | 0 | 1 | 0 | C1, M2, Y3, K4 |
| NE02 | Orion (Asteroid Belt) | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | — |
| NE03 | Lovelace Labs (Space Port) | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | — |
| NE04 | Vega | 2 | 0 | 3 | 2 | 2 | 5 | 0 | 1 | 2 | K1, Y2 |
| NE05 | Sirius | 0 | 3 | 2 | 6 | 1 | 2 | 0 | 2 | 0 | M3 |
| NE06 | Eteron | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | C4 |
| NE07 | Denebola | 1 | 2 | 4 | 4 | 4 | 8 | 1 | 3 | 0 | M1 |
| NE08 | Altair | 0 | 0 | 1 | 1 | 1 | 2 | 0 | 0 | 1 | Y1 |
| NE09 | Alpha Centauri | 3 | 0 | 0 | 3 | 2 | 15 | 0 | 0 | 0 | C2, M1, Y2 |
| NE10 | Porrima | 1 | 0 | 2 | 2 | 1 | 3 | 0 | 1 | 1 | — |
| NE11 | Nocte | 2 | 3 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | — |
| NE12 | Muphrid | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | — |
| NE13 | Regulus | 0 | 5 | 2 | 8 | 2 | 0 | 2 | 0 | 0 | — |

### Alphas — Far North (13 systems)

| Code | Name | Ev | Disc | Val | Pla | Hab | Pop | Haz | Bio | Pre | Wormholes |
|------|------|----|------|-----|-----|-----|-----|-----|-----|-----|-----------|
| — | Prime | 0 | 0 | 1 | 7 | 2 | 30 | 1 | 0 | 0 | C1, M2, Y3, K1 |
| — | Rigel (Asteroid Belt) | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | — |
| — | Megaparsec Inc (Space Port) | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | — |
| — | Almaaz | 1 | 0 | 1 | 1 | 2 | 5 | 0 | 0 | 1 | M1, Y2, K3 |
| — | Danoa | 0 | 0 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | C4 |
| — | Cardax | 0 | 3 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | — |
| — | Canopus | 2 | 0 | 3 | 2 | 1 | 5 | 1 | 2 | 0 | Y1 |
| — | Alnitak | 1 | 3 | 3 | 3 | 4 | 5 | 2 | 0 | 1 | K2, M4 |
| — | Elnath | 1 | 0 | 2 | 3 | 4 | 5 | 0 | 0 | 2 | — |
| — | Mebsuta | 2 | 2 | 1 | 2 | 4 | 5 | 1 | 0 | 0 | C2 |
| — | Nihal | 1 | 2 | 2 | 5 | 2 | 5 | 2 | 0 | 0 | — |
| — | Phact | 1 | 5 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | K1 |
| — | Ultima Thule | 0 | 0 | 2 | 3 | 0 | 0 | 2 | 0 | 0 | — |

### Syndicate — The Core (13 systems)

| Code | Name | Ev | Disc | Val | Pla | Hab | Pop | Haz | Bio | Pre | Wormholes |
|------|------|----|------|-----|-----|-----|-----|-----|-----|-----|-----------|
| — | Markab (Starting System) | 0 | 0 | 1 | 2 | 2 | 20 | 1 | 0 | 0 | C1, M2 |
| — | Gamma Cassiopeiae (Asteroid Belt) | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | — |
| — | Lionheart Industries (Space Port) | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | — |
| — | Hamal | 1 | 0 | 3 | 1 | 0 | 0 | 1 | 0 | 2 | Y3 |
| — | Kugel | 0 | 5 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | K4 |
| — | Achernar | 2 | 3 | 3 | 2 | 2 | 10 | 1 | 0 | 2 | K1 |
| — | Matar | 1 | 0 | 0 | 3 | 2 | 2 | 0 | 0 | 0 | Y2, M3 |
| — | Menkar | 1 | 3 | 0 | 6 | 3 | 6 | 0 | 0 | 0 | — |
| — | Moktar | 0 | 1 | 1 | 3 | 0 | 0 | 0 | 0 | 1 | M1 |
| — | Persian | 1 | 0 | 1 | 3 | 0 | 0 | 0 | 0 | 1 | Y2 |
| — | Polaris | 2 | 3 | 2 | 6 | 4 | 10 | 0 | 2 | 0 | — |
| — | Sheratan | 0 | 0 | 3 | 2 | 4 | 4 | 1 | 1 | 1 | — |
| — | Ruchbah | 1 | 0 | 1 | 1 | 1 | 8 | 0 | 1 | 0 | C2, M3, Y1, K2 |

### Free Worlds — Dirt Belt (13 systems)

| Code | Name | Ev | Disc | Val | Pla | Hab | Pop | Haz | Bio | Pre | Wormholes |
|------|------|----|------|-----|-----|-----|-----|-----|-----|-----|-----------|
| — | Dabih (Starting System) | 0 | 0 | 1 | 5 | 3 | 16 | 0 | 1 | 0 | M1, Y1 |
| — | Alnasl (Asteroid Belt) | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | — |
| — | Wyvern Station (Space Port) | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | — |
| — | Alpha Arae | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | M2, Y4, K2 |
| — | Alphecca | 1 | 1 | 3 | 5 | 2 | 10 | 1 | 2 | 0 | C2 |
| — | Ascella | 2 | 5 | 3 | 2 | 2 | 10 | 0 | 1 | 2 | M4 |
| — | Cor Caroli | 0 | 0 | 1 | 2 | 2 | 4 | 0 | 1 | 0 | C3 |
| — | Delta Sagittarii | 2 | 1 | 3 | 4 | 3 | 8 | 1 | 2 | 0 | M2 |
| — | Eltanin | 0 | 2 | 2 | 5 | 1 | 2 | 1 | 0 | 1 | C4, K4 |
| — | Delta Velorum | 2 | 1 | 1 | 4 | 3 | 6 | 0 | 1 | 0 | — |
| — | Gacrux | 2 | 5 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | — |
| — | Fala | 0 | 0 | 1 | 3 | 2 | 4 | 0 | 0 | 1 | — |
| — | Eber | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | — |

### Pirates — The Rim (13 systems)

| Code | Name | Ev | Disc | Val | Pla | Hab | Pop | Haz | Bio | Pre | Wormholes |
|------|------|----|------|-----|-----|-----|-----|-----|-----|-----|-----------|
| — | Alkaid (Starting System) | 0 | 0 | 1 | 4 | 1 | 2 | 1 | 0 | 0 | M2, Y3 |
| — | Minkar (Asteroid Belt) | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | — |
| — | Tarazed Corporation (Space Port) | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | — |
| — | Acrux | 0 | 0 | 1 | 3 | 1 | 2 | 0 | 1 | 0 | — |
| — | Gamma Corvi | 2 | 1 | 2 | 5 | 5 | 15 | 0 | 1 | 1 | K4 |
| — | Spica | 1 | 2 | 1 | 4 | 3 | 8 | 0 | 0 | 1 | K1 |
| — | Hadar | 1 | 2 | 2 | 3 | 2 | 7 | 1 | 1 | 0 | — |
| — | Ildaria | 1 | 2 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | Y2 |
| — | Kochab | 1 | 0 | 2 | 3 | 1 | 2 | 1 | 1 | 0 | M3 |
| — | Kraz | 1 | 0 | 2 | 3 | 3 | 8 | 1 | 0 | 1 | C4 |
| — | Zeta Centauri | 1 | 3 | 0 | 2 | 1 | 8 | 0 | 0 | 0 | — |
| — | Mimosa | 0 | 0 | 2 | 4 | 2 | 8 | 0 | 2 | 0 | — |
| — | Zubenelhakrabi | 1 | 5 | 2 | 2 | 0 | 0 | 2 | 0 | 0 | C4, M3, Y2, K1 |

### Remnant — Ember Waste (13 systems)

| Code | Name | Ev | Disc | Val | Pla | Hab | Pop | Haz | Bio | Pre | Wormholes |
|------|------|----|------|-----|-----|-----|-----|-----|-----|-----|-----------|
| — | Arculus (Starting System) | 0 | 0 | 1 | 9 | 9 | 25 | 1 | 0 | 0 | — |
| — | Caeculus (Asteroid Belt) | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | — |
| — | Ssil Vida (Space Port) | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | C1, M1, Y1, K1 |
| — | Postverta | 0 | 3 | 1 | 15 | 0 | 0 | 1 | 0 | 0 | C1, M1, Y1, K1 |
| — | Peragenor | 1 | 1 | 1 | 0 | 1 | 2 | 0 | 1 | 0 | C1, M2 |
| — | Vaticanus | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | M1, Y2 |
| — | Statina | 2 | 3 | 1 | 0 | 1 | 3 | 0 | 0 | 1 | C2, Y1 |
| — | Pantica | 2 | 4 | 3 | 5 | 3 | 15 | 0 | 1 | 2 | — |
| — | Cinxia | 2 | 2 | 2 | 3 | 3 | 15 | 1 | 1 | 0 | — |
| — | Convector | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | C2 |
| — | Edusa | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | M2 |
| — | Farinus | 0 | 0 | 2 | 0 | 0 | 0 | 2 | 0 | 0 | Y2 |
| — | Insitor | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | — |

### Coalition — Paradise Planets (13 systems)

| Code | Name | Ev | Disc | Val | Pla | Hab | Pop | Haz | Bio | Pre | Wormholes |
|------|------|----|------|-----|-----|-----|-----|-----|-----|-----|-----------|
| — | Talita (Starting System) | 0 | 0 | 1 | 5 | 3 | 15 | 0 | 0 | 1 | C4, M3, Y2, K1 |
| — | Tejat (Asteroid Belt) | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | — |
| — | Betelgeuse (Space Port) | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | — |
| — | Phurad | 0 | 3 | 2 | 4 | 3 | 10 | 0 | 1 | 1 | — |
| — | Castor | 1 | 1 | 2 | 3 | 2 | 5 | 1 | 0 | 1 | M3 |
| — | Capella | 2 | 1 | 1 | 3 | 1 | 3 | 1 | 0 | 0 | M1 |
| — | Alphard | 2 | 4 | 2 | 3 | 2 | 5 | 0 | 1 | 1 | C3 |
| — | Alhena | 1 | 3 | 1 | 7 | 2 | 2 | 1 | 0 | 0 | C1, K4 |
| — | Aldebaran | 2 | 2 | 1 | 2 | 1 | 8 | 0 | 0 | 1 | M2, Y3 |
| — | Kursa | 1 | 0 | 0 | 1 | 1 | 5 | 0 | 0 | 0 | C1, M2 |
| — | Menkalinan | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | Y3 |
| — | Phurad | 0 | 0 | 2 | 2 | 2 | 2 | 0 | 1 | 1 | K4 |
| — | Pollux | 0 | 1 | 3 | 3 | 2 | 5 | 0 | 1 | 2 | — |

### Wanderers — Wanderer Space (13 systems)

| Code | Name | Ev | Disc | Val | Pla | Hab | Pop | Haz | Bio | Pre | Wormholes |
|------|------|----|------|-----|-----|-----|-----|-----|-----|-----|-----------|
| — | Ka'ch'chrai (Starting System) | 0 | 0 | 1 | 8 | 3 | 28 | 0 | 1 | 0 | M3, Y3 |
| — | Varu Ek'lai'lai (Asteroid Belt) | 2 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 1 | C2 |
| — | Starlight (Space Port) | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | M1 |
| — | Iyech'yek | 1 | 0 | 2 | 2 | 1 | 8 | 1 | 1 | 0 | Y2 |
| — | Es'sprak'ai | 3 | 1 | 2 | 3 | 3 | 8 | 0 | 2 | 0 | Y1 |
| — | Ap'arak | 1 | 3 | 2 | 7 | 4 | 6 | 0 | 0 | 2 | C4 |
| — | Ek'kek'ru | 0 | 5 | 1 | 8 | 2 | 2 | 1 | 0 | 0 | Y4, K3 |
| — | Prakacha'a | 1 | 3 | 1 | 0 | 1 | 2 | 0 | 0 | 1 | K2 |
| — | Chy'chra | 1 | 0 | 2 | 1 | 1 | 1 | 2 | 0 | 0 | K1 |
| — | Ka'pru | 0 | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | — |
| — | Kiro'ku | 1 | 1 | 1 | 1 | 2 | 2 | 1 | 0 | 0 | — |
| — | Si'yak'ku | 0 | 1 | 1 | 2 | 1 | 1 | 0 | 0 | 1 | — |
| — | Sko'karak | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | K4 |

Column key: Ev = Events, Disc = Discoveries, Val = Value, Pla = Planets, Hab = Habitats, Pop = Population, Haz = Hazardous commodities, Bio = Biodegradable, Pre = Precious. Wormholes show type (C/M/Y/K) and range cost.

</div>

<div class="section">
<div class="eyebrow">Choose Your Faction</div>

## Factions

There are eight asymmetric factions, each with unique starting credits, technology access, and meeple abilities.

| Faction | Region | Starting System | Starting Credits | Tech Access |
|---------|--------|-----------------|-----------------|-------------|
| Republic | Near Earth | Sol | 500K | Human |
| Alphas | Far North | Prime | 300K/player | Human + Core |
| Syndicate | The Core | Markab | 2M | Human + Core |
| Free Worlds | Dirt Belt | Dabih | 200K/player | Human + Coalition |
| Pirates | The Rim | (any) | 100K/player | Any (in play) |
| Remnant | Ember Wastes | Arculus | 1M | Remnant + Wanderers |
| Coalition | Paradise | Talita | 1.5M | Coalition + Human |
| Wanderers | Wanderer Space | Ka'ch'chrai | 1M | Remnant + Wanderers |

Each faction has unique starting credits that scale differently — some are fixed (Republic: 500K, Syndicate: 2M) while others scale by player count (Alphas: 300K/player, Free Worlds: 200K/player). This creates different strategic pressures at different player counts.

</div>

<div class="section">
<div class="eyebrow">Your Fleet</div>

## Ships

Ships are grouped into four classes:

### Ship Classes

| Class | Min Crew | Max Bunks | Cost Range | Role |
|-------|----------|-----------|------------|------|
| Fighters | 1 | 1–5 | 0.2–0.5M | Combat, escort |
| Freighters | 1–5 | 1–10 | varies | Cargo hauling |
| Transports | 1–3 | 1–10 | varies | Long-range movement |
| Warships | 3–5 | 3–10 | 2–15M | Heavy combat, capital ships |

Each ship has an individual Ship Sheet tracking:
- Shields and Hull (black cubes)
- Cargo capacity
- Crew bunks (meeple slots)
- Equipped outfits (from Blueprint cards)

There are 30 playable ship types across 5 technology trees (Human, Core, Coalition, Remnant, Wanderer).

### Coalition Ships (4)

| Class | Name | Cost | Crew | Bunks | Cargo | Shields | Hull | Outfit Cap | Fuel | Turrets | Guns |
|-------|------|------|------|-------|-------|---------|------|------------|------|---------|------|
| Freighter | Arach Courier | 1M | 1 | 1 | 2 | 1 | 1 | 3 | 3 | 0 | 2 |
| Transport | Kimek Thorn | 1M | 1 | 10 | 1 | 2 | 2 | 4 | 6 | 0 | 2 |
| Freighter | Arach Hulk | 3M | 5 | 5 | 6 | 5 | 5 | 21 | 5 | 4 | 2 |
| Transport | Saryd Visitor | 3M | 3 | 10 | 3 | 4 | 4 | 8 | 4 | 1 | 2 |

### Core Ships (6)

| Class | Name | Cost | Crew | Bunks | Cargo | Shields | Hull | Outfit Cap | Fuel | Turrets | Guns |
|-------|------|------|------|-------|-------|---------|------|------------|------|---------|------|
| Transport | Shuttle | 0.3M | 1 | 5 | 1 | 5 | 5 | 1 | 4 | 0 | 1 |
| Freighter | Clipper | 0.6M | 3 | 5 | 2 | 3 | 3 | 6 | 5 | 0 | 4 |
| Freighter | Container Transporter | 1.5M | 3 | 10 | 5 | 3 | 3 | 18 | 6 | 5 | 2 |
| Transport | Blackbird | 3M | 3 | 10 | 2 | 4 | 4 | 9 | 7 | 2 | 1 |
| Warship | Rainmaker | 3M | 3 | 5 | 1 | 4 | 4 | 7 | 5 | 0 | 6 |
| Warship | Firebird | 5M | 5 | 10 | 1 | 6 | 6 | 16 | 4 | 2 | 4 |

### Human Ships (8)

| Class | Name | Cost | Crew | Bunks | Cargo | Shields | Hull | Outfit Cap | Fuel | Turrets | Guns |
|-------|------|------|------|-------|-------|---------|------|------------|------|---------|------|
| Fighter | Finch | 0.2M | 1 | 1 | 0 | 1 | 1 | 2 | 0 | 0 | 2 |
| Fighter | Dropship | 0.3M | 1 | 5 | 1 | 2 | 2 | 2 | 0 | 0 | 2 |
| Freighter | Star Barge | 0.4M | 1 | 3 | 2 | 1 | 1 | 2 | 3 | 1 | 0 |
| Transport | Flivver | 0.4M | 1 | 3 | 1 | 2 | 2 | 2 | 5 | 0 | 2 |
| Transport | Bounder | 1.5M | 1 | 10 | 1 | 2 | 2 | 5 | 8 | 2 | 1 |
| Warship | Headhunter | 2M | 3 | 3 | 2 | 4 | 4 | 6 | 4 | 1 | 4 |
| Freighter | Behemoth | 2.5M | 5 | 10 | 5 | 8 | 8 | 2 | 6 | 6 | 2 |
| Warship | Dreadnaught | 10M | 5 | 10 | 3 | 18 | 18 | 3 | 6 | 4 | 4 |

### Remnant Ships (8)

| Class | Name | Cost | Crew | Bunks | Cargo | Shields | Hull | Outfit Cap | Fuel | Turrets | Guns |
|-------|------|------|------|-------|-------|---------|------|------------|------|---------|------|
| Transport | Puffin | 0.2M | 1 | 1 | 1 | 1 | 1 | 0 | 7 | 0 | 1 |
| Fighter | Petrel | 0.4M | 1 | 3 | 1 | 1 | 1 | 3 | 1 | 1 | 2 |
| Fighter | Smew | 0.5M | 1 | 5 | 2 | 2 | 2 | 1 | 1 | 0 | 1 |
| Transport | Penguin | 0.5M | 1 | 3 | 1 | 3 | 3 | 3 | 8 | 1 | 1 |
| Freighter | Gull | 1M | 3 | 10 | 3 | 6 | 6 | 8 | 6 | 1 | 3 |
| Freighter | Pelican | 2M | 5 | 10 | 4 | 10 | 10 | 15 | 6 | 3 | 2 |
| Warship | Starling | 4M | 3 | 5 | 1 | 10 | 10 | 9 | 9 | 1 | 5 |
| Warship | Albatross | 12M | 5 | 10 | 3 | 35 | 35 | 23 | 6 | 5 | 7 |

### Wanderer Ships (4)

| Class | Name | Cost | Crew | Bunks | Cargo | Shields | Hull | Outfit Cap | Fuel | Turrets | Guns |
|-------|------|------|------|-------|-------|---------|------|------------|------|---------|------|
| Freighter | Earth Shaper | 0.3M | 1 | 1 | 1 | 1 | 1 | 1 | 3 | 0 | 1 |
| Freighter | Deep River | 5M | 3 | 10 | 10 | 17 | 17 | 17 | 5 | 0 | 6 |
| Warship | Summer Leaf | 8M | 3 | 10 | 1 | 15 | 15 | 8 | 8 | 0 | 2 |
| Warship | Derecho | 15M | 5 | 10 | 2 | 50 | 50 | 34 | 8 | 4 | 4 |

### NPC Ships

| Class | Name | Cost | Faction | Crew | Bunks | Cargo | Shields | Outfit Cap | Fuel | Turrets | Guns |
|-------|------|------|---------|------|-------|-------|---------|------------|------|---------|------|
| Warship | Maeri | 10M | Kahet | 1 | 1 | 4 | 17 | 30 | 8 | 4 | 2 |

</div>

<div class="section">
<div class="eyebrow">Worker Placement</div>

## Ship Rooms

Each ship has rooms where crew meeples are placed to activate abilities:

| Room | Slots | Abilities |
|------|-------|-----------|
| Bridge | 3 | Pilot, Tactical, Transport |
| Engine Room | 3 | Pilot, Transport, Repair |
| Battlestations | 4 | Tactical, Tactical, Pilot, Repair |
| Storage Bay | 1 | Upgrade |

Placing a meeple in a room activates that ability for the round. Legends (experienced crew) may have enhanced versions of abilities.

### Ship Board Layout

Every ship board has:
- **Shield/Hull tracks** (0–9, damage values: 10, 20, 30, 40, 50, 50, 40, 30, 20, 10)
- **Bunk slots** for crew meeples
- **Cargo slots**
- **Turret and Gun mount indicators**
- **Storage slot** (for outfits/cargo overflow)

Room allocation depends on ship size:
- **Fighters/Transports/Freighters (small)**: Bridge + Storage Bay only
- **Warships/Freighters (large)**: Bridge + Engine Room + Battlestations + Storage Bay

### Ship Board Specs

| Ship | Faction | Rooms | Turrets | Guns | Board Status |
|------|---------|-------|---------|------|--------------|
| Finch | Human | Bridge, Storage | 0 | 2 | Defined |
| Dropship | Human | Bridge, Storage | 0 | 2 | Defined |
| Star Barge | Human | — | 1 | 0 | Missing |
| Flivver | Human | — | 0 | 2 | Missing |
| Bounder | Human | — | 2 | 1 | Missing |
| Headhunter | Human | — | 1 | 4 | Missing |
| Behemoth | Human | — | 6 | 2 | Missing |
| Dreadnaught | Human | — | 4 | 4 | Missing |
| Petrel | Remnant | Bridge, Storage | 1 | 2 | Defined |
| Puffin | Remnant | — | 0 | 1 | Missing |
| Smew | Remnant | — | 0 | 1 | Missing |
| Penguin | Remnant | — | 1 | 1 | Missing |
| Gull | Remnant | — | 1 | 3 | Missing |
| Pelican | Remnant | — | 3 | 2 | Missing |
| Starling | Remnant | — | 1 | 5 | Missing |
| Albatross | Remnant | Bridge, Engine, Battlestations, Storage | 5 | 7 | Defined |
| Shuttle | Core | — | 0 | 1 | Missing |
| Clipper | Core | — | 0 | 4 | Missing |
| Container Transporter | Core | — | 5 | 2 | Missing |
| Blackbird | Core | — | 2 | 1 | Missing |
| Rainmaker | Core | — | 0 | 6 | Missing |
| Firebird | Core | — | 2 | 4 | Missing |
| Arach Courier | Coalition | — | 0 | 2 | Missing |
| Kimek Thorn | Coalition | — | 0 | 2 | Missing |
| Arach Hulk | Coalition | — | 4 | 2 | Missing |
| Saryd Visitor | Coalition | — | 1 | 2 | Missing |
| Earth Shaper | Wanderers | — | 0 | 1 | Missing |
| Deep River | Wanderers | — | 0 | 6 | Missing |
| Summer Leaf | Wanderers | — | 0 | 2 | Missing |
| Derecho | Wanderers | — | 4 | 4 | Missing |
| Maeri (NPC) | Kahet | Bridge, Engine, Battlestations, Storage | 4 | 2 | Defined |

4 of 31 ship boards defined. 27 remaining.

## Space Port Boards

There are 9 space ports, each with 8 rooms. Diplomats are placed in initiative order. Each room has a player-count requirement (3/4, 5/6, or 7/8 players needed to unlock), an initiative slot, an action, and an income value. Ports also provide Blueprint purchase slots and Contract/Mission slots.

### Lovelace Labs — Republic (Initiative #1)

| Slot | Action | Income | Blueprint Costs |
|------|--------|--------|-----------------|
| #1 | Galley | 100K | 300K, 200K, 100K |
| #2 | Marketplace | 200K | |
| #3 | Guild | 300K | |
| #4 | Transporter | 400K | |
| #5 | Lower Decks | 500K | |
| #6 | Upper Decks | 600K | |
| #7 | Promenade | 700K | |
| #8 | Shipyard | 800K | |

Contracts: 2 Public, 1 Secret Mission (400K)

### Lionheart Industries — Syndicate (Initiative #2)

| Slot | Action | Income | Blueprint Costs |
|------|--------|--------|-----------------|
| #1 | Construct | 100K | 300K, 200K, 100K |
| #2 | Trade | 200K | |
| #3 | Spy | 300K | |
| #4 | Transport | 400K | |
| #5 | Sabotage | 500K | |
| #6 | Upgrade | 600K | |
| #7 | Promote | 700K | |
| #8 | Propose | 800K | |

Contracts: 0 Public, 2 Secret Missions (200K each)

### Tarazed Corporation — Pirates (Initiative #3)

| Slot | Action | Income | Blueprint Costs |
|------|--------|--------|-----------------|
| #1 | Propose | 0 | 200K, 200K, 200K |
| #2 | Trade | 200K | |
| #3 | Spy | 400K | |
| #4 | Transport | 600K | |
| #5 | Sabotage | 600K | |
| #6 | Upgrade | 400K | |
| #7 | Promote | 200K | |
| #8 | Construct | 0 | |

Contracts: 0 Public, 3 Secret Missions (100K each)

### Megaparsec Inc — Alphas (Initiative #4)

| Slot | Action | Income | Blueprint Costs |
|------|--------|--------|-----------------|
| #1 | Promote | -1M | FREE, FREE, FREE |
| #2 | Trade | -900K | |
| #3 | Spy | -800K | |
| #4 | Transport | -700K | |
| #5 | Sabotage | -600K | |
| #6 | Upgrade | -500K | |
| #7 | Propose | -400K | |
| #8 | Construct | -300K | |

Contracts: 2 Public, 1 Secret Mission (FREE)

### Wyvern Station — Free Worlds (Initiative #5)

| Slot | Action | Income | Blueprint Costs |
|------|--------|--------|-----------------|
| #1 | Promote | -1M | FREE, FREE, FREE |
| #2 | Trade | -900K | |
| #3 | Spy | -800K | |
| #4 | Transport | -700K | |
| #5 | Sabotage | -600K | |
| #6 | Upgrade | -500K | |
| #7 | Propose | -400K | |
| #8 | Construct | -300K | |

Contracts: 2 Public, 1 Secret Mission (FREE)

### Ssil Vida — Remnant (Initiative #6)

| Slot | Action | Income | Blueprint Costs |
|------|--------|--------|-----------------|
| #1 | Promote | -1M | FREE, FREE, FREE |
| #2 | Trade | -900K | |
| #3 | Spy | -800K | |
| #4 | Transport | -700K | |
| #5 | Sabotage | -600K | |
| #6 | Upgrade | -500K | |
| #7 | Propose | -400K | |
| #8 | Construct | -300K | |

Contracts: 2 Public, 1 Secret Mission (FREE)

### Betelgeuse — Coalition (Initiative #7)

| Slot | Action | Income | Blueprint Costs |
|------|--------|--------|-----------------|
| #1 | Promote | -1M | FREE, FREE, FREE |
| #2 | Trade | -900K | |
| #3 | Spy | -800K | |
| #4 | Transport | -700K | |
| #5 | Sabotage | -600K | |
| #6 | Upgrade | -500K | |
| #7 | Propose | -400K | |
| #8 | Construct | -300K | |

Contracts: 2 Public, 1 Secret Mission (FREE)

### Starlight — Wanderers (Initiative #8)

| Slot | Action | Income | Blueprint Costs |
|------|--------|--------|-----------------|
| #1 | Promote | -1M | FREE, FREE, FREE |
| #2 | Trade | -900K | |
| #3 | Spy | -800K | |
| #4 | Transport | -700K | |
| #5 | Sabotage | -600K | |
| #6 | Upgrade | -500K | |
| #7 | Propose | -400K | |
| #8 | Construct | -300K | |

Contracts: 2 Public, 1 Secret Mission (FREE)

### Kraken Station — Shared (Initiative #9)

| Slot | Action | Income (2P) | Income (4P) | Income (6P) | Income (8P) | Blueprint Costs |
|------|--------|-------------|-------------|-------------|-------------|-----------------|
| #1 | Galley | 100K | -100K | -300K | -500K | 200K, 100K, FREE |
| #2 | Marketplace | 200K | 0 | -200K | -400K | |
| #3 | Guild | 300K | 100K | -100K | -300K | |
| #4 | Transporter | 400K | 200K | 0 | -200K | |
| #5 | Lower Decks | 500K | 300K | 100K | -100K | |
| #6 | Upper Decks | 600K | 400K | 200K | 0 | |
| #7 | Promenade | 700K | 500K | 300K | 100K | |
| #8 | Shipyard | 800K | 600K | 400K | 200K | |

Contracts: 2 Public, 1 Secret Mission (500K)

</div>

<div class="section">
<div class="eyebrow">The Round</div>

## Order of Play

Each round follows three phases:

### 1. Diplomatic Phase

In initiative order, players place diplomat meeples in space port rooms. Each room has limited slots — early placement secures the best positions.

### 2. Action Phase

Players activate their crew by moving rookie and legend meeples to ship rooms. Ships with activated crew can then:

- Move through systems (Pilot)
- Engage in combat (Tactical)
- Carry cargo and passengers (Transport)
- Repair damage (Repair)
- Install new outfits (Upgrade)

### 3. Event Phase

- Resolve conflicts (ships in same system from hostile factions)
- Move asteroids (dynamic map element)
- Check for destroyed ships/rooms
- Refresh — return meeples to ready positions

</div>

<div class="section">
<div class="eyebrow">Combat</div>

## Ship Combat

Combat uses a D10 inaccuracy system. When ships from hostile factions occupy the same system:

- Attacker rolls D10 — higher rolls indicate inaccuracy (misses)
- Damage is applied to shields first, then hull
- Ships with destroyed hull are removed from play
- Crew on destroyed ships are lost unless escape pods are equipped

<div class="highlight">
<div class="box-title">In Development</div>

Full combat timing and resolution details are being finalised. Some edge cases around multi-faction conflicts and simultaneous engagement are noted as unresolved in the current design.
</div>

</div>

<div class="section">
<div class="eyebrow">Contracts & Trade</div>

## Scoring

### Contracts

- **Public Contracts** — visible to all players. Completing one earns VP and may trigger new contracts.
- **Private Missions** — secret objectives unique to each player. Some factions have "questionable" morality — certain factions can/cannot score certain contract types.

### Victory

The endgame is triggered when either:
- 5 × PlayerCount public contracts have been discarded, OR
- All space ports have been destroyed

A penultimate round is announced. After that point, contracts are worth double VP. The player with the most VP wins. Tiebreaker: initiative token holder, then most credits.

</div>

<div class="section">
<div class="eyebrow">Wormholes & Movement</div>

## Wormhole Network

Four types of wormholes connect distant systems:

| Type | Colour | Range Cost |
|------|--------|-----------|
| C | Cyan | Low |
| M | Magenta | Medium |
| Y | Yellow | High |
| K | Black | Very High |

Wormholes allow instantaneous travel between connected systems at the cost of range/energy. The wormhole network is semi-random — some connections are fixed by faction regions, others are placed during setup.

</div>

<div class="section">
<div class="eyebrow">Dynamic Elements</div>

## Asteroids

112 asteroid tokens move across the map each event phase. Asteroids:

- Block movement through their system
- Can be mined for Discovery cards (precious minerals, rare tech)
- May destroy ships that fail to evade (Pilot check)

Asteroid movement patterns are determined by event cards, creating an ever-shifting map.

</div>

<div class="section">
<div class="eyebrow">Ship Modifications</div>

## Outfits

Ships can be upgraded with outfits from Blueprint cards across 5 technology trees:

- **Human** — balanced weapons and shields
- **Core** — advanced energy systems
- **Coalition** — defensive specialisation
- **Remnant** — ancient recovered technology
- **Wanderer** — biological / organic systems

Outfits are installed via the Storage Bay room (Upgrade action). Each ship has limited outfit capacity based on its class and cargo space. Each outfit has a mass value that counts against the ship's Outfit Capacity.

### Human Guns

| Name | Cost | Mass | Range | Dmg (S) | Dmg (H) | Inaccuracy | Shots |
|------|------|------|-------|---------|---------|------------|-------|
| Energy Blaster | 0.1M | 1 | 5 | 1 | 1 | 6 | 1 |
| Mining Laser | 0.1M | 1 | 1 | 0 | 0 | 4 | 1 |
| Twin Modified Blaster | 0.2M | 2 | 4 | 2 | 2 | 8 | 1 |
| Grappler | 0.2M | 1 | 1 | 0 | 0 | 4 | 1 |
| Flamethrower | 0.3M | 1 | 2 | 0 | 0 | 9 | 1 |
| Proton Gun | 0.4M | 3 | 6 | 4 | 2 | 8 | 1 |
| Plasma Cannon | 0.6M | 2 | 4 | 6 | 4 | 4 | 1 |

### Human Missiles and Rockets

| Name | Cost | Mass | Range | Dmg (S) | Dmg (H) | Inaccuracy | Shots |
|------|------|------|-------|---------|---------|------------|-------|
| Light Rocket x5 | 0.1M | 0 | 5 | 4 | 2 | 3 | 1 |
| Heavy Rocket x5 | 0.2M | 0 | 5 | 2 | 4 | 3 | 1 |
| Sidewinder Missile x5 | 0.5M | 0 | 20 | 2 | 4 | 6 | 1 |
| Nuclear Missile x5 | 5M | 0 | 10 | 10 | 8 | 6 | 1 |

### Human Turrets

| Name | Cost | Mass | Range | Dmg (S) | Dmg (H) | Inaccuracy | Shots |
|------|------|------|-------|---------|---------|------------|-------|
| Mining Laser Turret | 0.2M | 2 | 2 | 0 | 0 | 2 | 2 |
| Blaster Turret | 0.2M | 2 | 2 | 1 | 1 | 4 | 2 |
| Anti-Rocket Turret | 0.3M | 2 | 1 | 0 | 0 | 2 | 2 |
| Anti-Missile Turret | 0.4M | 3 | 2 | 0 | 0 | 2 | 2 |
| Quad Blaster Turret | 0.4M | 2 | 5 | 4 | 2 | 6 | 2 |
| Proton Turret | 0.5M | 3 | 6 | 2 | 4 | 6 | 2 |
| Tractor Beam | 1M | 2 | 3 | 0 | 0 | 2 | 2 |
| Plasma Turret | 1M | 6 | 4 | 6 | 2 | 2 | 2 |

### Human Launchers

| Name | Cost | Mass | Range | Max Capacity |
|------|------|------|-------|--------------|
| Rocket Launcher | 0.5M | 2 | 4 | 10 |
| Missile Launcher | 1M | 1 | 8 | 20 |

### Remnant Weapons

| Class | Name | Cost | Mass | Range | Dmg (S) | Dmg (H) | Inaccuracy | Shots |
|-------|------|------|------|-------|---------|---------|------------|-------|
| Gun | Thraser Cannon | 0.5M | 1 | 3 | 2 | 4 | 9 | 1 |
| Gun | Inhibitor Cannon | 0.9M | 2 | 8 | 2 | 2 | 2 | 1 |
| Turret | Thraser Turret | 2M | 5 | 3 | 2 | 4 | 8 | 2 |
| Turret | Inhibitor Turret | 2.6M | 4 | 8 | 2 | 2 | 1 | 2 |
| Turret | Point Defense Turret | 2.2M | 3 | 2 | 0 | 0 | 1 | 1 |
| Torpedo | EMP Torpedo x5 | 1.5M | 0 | 10 | 10 | 0 | 6 | 1 |
| Launcher | EMP Torpedo Launcher | 1.5M | 2 | 10 | — | — | 6 | 1 |

### Wanderer Weapons

| Class | Name | Cost | Mass | Range | Dmg (S) | Dmg (H) | Inaccuracy | Shots |
|-------|------|------|------|-------|---------|---------|------------|-------|
| Gun | Moonbeam | 1.4M | 2 | 4 | 4 | 2 | 4 | 1 |
| Gun | Sunbeam | 2.6M | 3 | 5 | 4 | 4 | 2 | 1 |
| Turret | Double Moonbeam Turret | 3.4M | 3 | 4 | 6 | 6 | 3 | 2 |
| Turret | Double Sunbeam Turret | 4M | 4 | 5 | 8 | 8 | 1 | 2 |
| Turret | Anti-Projectile Turret | 1.6M | 2 | 3 | 0 | 0 | 1 | 1 |
| Missile | Thunderhead Missiles x5 | 1M | 0 | 10 | 2 | 6 | 9 | 5 |
| Launcher | Thunderhead Missile Launcher | 1.5M | 2 | 10 | — | — | 9 | 5 |

### Coalition Weapons

| Class | Name | Cost | Mass | Range | Dmg (S) | Dmg (H) | Inaccuracy | Shots |
|-------|------|------|------|-------|---------|---------|------------|-------|
| Gun | MCS Extractor | 0.2M | 2 | 5 | 0 | 0 | 2 | 1 |
| Gun | Bombardment Cannon | 0.8M | 1 | 9 | 1 | 4 | 4 | 1 |
| Turret | Bombardment Turret | 1.3M | 4 | 9 | 2 | 4 | 3 | 2 |
| Turret | Heliarch Attractor | 2M | 5 | 6 | 0 | 0 | 1 | 1 |
| Torpedo | Finisher Torpedo x5 | 0.5M | 0 | 20 | 2 | 4 | 7 | 7 |
| Launcher | Finisher Maegrolain | 5M | 7 | 20 | — | — | 6 | 6 |

</div>

<div class="section">
<div class="eyebrow">Advanced Rules</div>

## Diplomatic Voting

Players can negotiate treaties via treaty cards. Voting occurs during certain event triggers and follows the initiative order. Treaties can establish:

- Non-aggression pacts
- Trade routes (reduced commodity exchange costs)
- Technology sharing (access to another faction's tech tree)
- Alliance (shared victory conditions for specific contracts)

</div>