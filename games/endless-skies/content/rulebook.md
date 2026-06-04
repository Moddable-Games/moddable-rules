---
title: "Endless Skies — Official Rulebook"
version: "0.3.0"
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
| Free Worlds | Dirt Belt | Alkaid | 200K/player | Human + Coalition |
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

## Space Port Rooms

Each faction's home space port has 8 rooms where diplomat meeples are placed in initiative order:

1. Galley
2. Marketplace
3. Guild
4. Transporter
5. Lower Decks
6. Upper Decks
7. Promenade
8. Shipyard

Space port rooms provide faction-wide benefits — recruiting crew, purchasing ships, trading commodities, and gaining intelligence.

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

Outfits are installed via the Storage Bay room (Upgrade action). Each ship has limited outfit capacity based on its class and cargo space.

<div class="highlight">
<div class="box-title">In Development</div>

The full outfittings system is defined in supplementary CSV data files (Human Outfits, Alien Outfits) which are not yet complete. The exact stats and costs are being balanced through playtesting.
</div>

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