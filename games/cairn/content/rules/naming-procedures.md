---
title: "Naming Procedures"
slug: naming-procedures
parent: cairn
published: true
---

## Naming Procedures

- Settlements are often named after their unique features: the shape of the river nearby, or the large windmill in the town center. The residents then add a noun or adjective: _Windy Gulch_, _Black Tree Fort_, etc.
- Important places should have important names, like those of heroes, religious or political figures, and other events. _The Chalet of Saint Ibiz, Queen's Harvest, Light of the Nine_, etc.
- Proper nouns can be added to or even replace parts of a name, e.g. **Bruna's Ugly Gulch**.
- Wild and dangerous places are named after obvious hazards: _Poison Lake_, _Foggy Cliffs_, etc.
- Some names tell a story: _Luka's Folly, Dead Man's Path_, etc.
- Use the region's local terrain and the location's details where appropriate.

### Generating Names

- Roll on `names-formula` for each POI.
- Roll on `adjectives` and `nouns` where appropriate.
- To roll **1d100**, roll **2d10**, using one die for the tens place, and one die for the ones place.

> To name regions based on Terrain, swap out "POI" with the terrain type, and consult `terrain-synonyms` for inspiration.

### Faction Names

1. Roll on `faction-names-formula`.
2. Roll on `adjectives`, `nouns`, and `group-types` where appropriate.

### Realm Names

1. Roll on `ruler-names-formula`.
2. Roll on `adjectives`, `nouns`, `terrain-synonyms`, and `ruler-types`, and add "of" or "the" where appropriate.

Optionally, replace any value with the dominant terrain synonym, e.g. "_The Misty Bluffs_".

### Forest Names

- For the adjective, roll a **d10** twice, first for the **tens** place, and then another for the **ones** place. Then repeat the process for the noun (see `forest-name-adjectives` and `forest-name-nouns`).
- Change it up! The name _Welcoming Grove_ might be more appropriate than _Beckoning Copse_ for your setting.
- Use contrasting words (e.g. _Twisted Canopy_) to evoke an interesting point about the location.
- Make it sound nice. Alliteration and pleasing combinations can create pleasant sounds. _Whispering Woods_ is more pleasing to the ear than _Tangled Woods._

All of the tables referenced above (Names Formula, Adjectives, Nouns, Terrain Synonyms, Group Types, Faction Names Formula, Ruler Types, Realm Names Formula, Forest Name Adjectives/Nouns) are published as structured data — see [`naming-tables.json`](../../../games/cairn/tables/naming-tables.json) in the Cairn tables index.
