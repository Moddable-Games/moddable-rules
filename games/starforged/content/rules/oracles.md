---
title: "Starforged Oracle Tables"
slug: oracles
parent: starforged
published: true
---

## Starforged Oracle Tables

Oracle tables are the primary source of randomness and creative inspiration in Ironsworn: Starforged. When the outcome is uncertain or you need a narrative prompt, roll dice and consult the relevant table.

**Licence:** CC BY 4.0. Attribution: Ironsworn: Starforged Rulebook, Shawn Tomkin.

### How to Use Oracles

Roll the specified die type (usually d100 for a percentile roll). Find your result in the table's `min`–`max` range. Interpret the result in the context of your current situation. Oracle results are prompts, not commands: they spark ideas, not dictate outcomes.

### Oracle Files

Machine-readable oracle data is stored as JSON files in this directory. Each file follows the same oracle schema established for Ironsworn (`games/ironsworn/oracles/schema.json`), and may contain more than one related table.

| File | Category | Tables |
|------|----------|--------|
| [`core.json`](../../../../games/starforged/oracles/core.json) | Core Oracles | Action, Theme, Descriptor, Focus |
| [`campaign-launch.json`](../../../../games/starforged/oracles/campaign-launch.json) | Campaign Launch Oracles | Background Assets, Backstory Prompts, Starship History, Starship Quirks, Sector Trouble, Inciting Incident |
| [`derelicts.json`](../../../../games/starforged/oracles/derelicts.json) | Derelicts | Location, Condition, Outer/Inner First Look, Derelict Type (by location), Derelict Zones (by derelict type) |
| [`derelicts-zones.json`](../../../../games/starforged/oracles/derelicts-zones.json) | Derelict Zones | Area, Feature, Peril, and Opportunity tables for all 8 zones: Access, Community, Engineering, Living, Medical, Operations, Production, Research |
| [`misc.json`](../../../../games/starforged/oracles/misc.json) | Miscellaneous Oracles | Story Complication, Story Clue, Anomaly Effect, Combat Action |
| [`move-oracles.json`](../../../../games/starforged/oracles/move-oracles.json) | Move Oracles | Ask the Oracle (5 likelihood tables), Begin a Session, Make a Discovery, Confront Chaos, Take Decisive Action, Endure Harm, Endure Stress, Withstand Damage, Pay the Price |

More categories (Characters, Creatures, Factions, Location Themes, Planet Types, Planets, Settlements, Space, Starships, Vaults) are in progress and will be added here as each is completed.

### AI DM Integration

Oracle results feed directly into narrative generation. The integration pattern:

1. Roll oracle table(s) relevant to the situation.
2. Pass the result(s) to the AI with context (current scene, vow, location).
3. AI generates narration that incorporates the oracle result naturally.

Example prompt: `"The player Undertakes an Expedition. Oracle: Action = Explore. Theme = Discovery. Descriptor = Ancient. Focus = Archive. Generate a vivid scene description."`
