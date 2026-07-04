# D&D 5e SRD — Data Directory

This directory contains machine-readable JSON files for all SRD 5.1 entities. These files power search, filtering, and tool integrations on the moddable.games platform.

## Source

Data sourced from [`5e-bits/5e-database`](https://github.com/5e-bits/5e-database), `src/2014/en/` directory. Licence: CC BY 4.0 (inherits from SRD 5.1).

Attribution: Dungeons & Dragons 5th Edition System Reference Document 5.1, copyright 2016 Wizards of the Coast LLC. Licensed under CC BY 4.0.

## Files

| File | Source file | Description |
|------|-------------|-------------|
| `ability-scores.json` | `AbilityScores.json` | Six ability score definitions |
| `classes.json` | `Classes.json` | 12 character classes with features and progression |
| `conditions.json` | `Conditions.json` | Status condition definitions |
| `equipment.json` | `Equipment.json` | Weapons, armour, and adventuring gear |
| `features.json` | `Features.json` | Class and subclass feature descriptions |
| `magic-items.json` | `MagicItems.json` | All magic items with rarity and attunement |
| `monsters.json` | `Monsters.json` | All monsters with stat blocks |
| `races.json` | `Races.json` | Character races and subraces |
| `spells.json` | `Spells.json` | All spells with level, school, and components |

## Schema

All files are JSON arrays of entity objects. Each entity has at minimum:

```json
{
  "index": "string",
  "name": "string",
  "url": "string"
}
```

Entity-specific fields vary by type. Examples:

### Spell

```json
{
  "index": "fireball",
  "name": "Fireball",
  "level": 3,
  "school": { "name": "Evocation" },
  "casting_time": "1 action",
  "range": "150 feet",
  "components": ["V", "S", "M"],
  "material": "A tiny ball of bat guano and sulfur.",
  "duration": "Instantaneous",
  "concentration": false,
  "ritual": false,
  "desc": ["A bright streak flashes..."],
  "higher_level": ["When cast at 4th level..."],
  "classes": [{"name": "Sorcerer"}, {"name": "Wizard"}],
  "url": "/api/2014/spells/fireball"
}
```

### Monster

```json
{
  "index": "goblin",
  "name": "Goblin",
  "size": "Small",
  "type": "humanoid",
  "alignment": "neutral evil",
  "armor_class": [{"type": "dex", "value": 15}],
  "hit_points": 7,
  "hit_dice": "2d6",
  "speed": {"walk": "30 ft."},
  "strength": 8, "dexterity": 14, "constitution": 10,
  "intelligence": 10, "wisdom": 8, "charisma": 8,
  "challenge_rating": 0.25,
  "xp": 50,
  "actions": [{"name": "Scimitar", "desc": "..."}],
  "url": "/api/2014/monsters/goblin"
}
```

### Class

```json
{
  "index": "wizard",
  "name": "Wizard",
  "hit_die": 6,
  "proficiency_choices": [...],
  "proficiencies": [...],
  "saving_throws": [{"name": "INT"}, {"name": "WIS"}],
  "starting_equipment": [...],
  "class_levels": "/api/2014/classes/wizard/levels",
  "subclasses": [{"name": "Evocation"}],
  "url": "/api/2014/classes/wizard"
}
```

## Builder Instructions

To populate this directory:

1. Clone `5e-bits/5e-database` (CC BY 4.0).
2. Copy files from `src/2014/en/` to this directory, renaming to lowercase with hyphens.
3. Validate JSON is well-formed and matches schema above.
4. Do not include `src/2024/en/` files (One D&D content is out of scope for now).

Do not edit the JSON content — these are canonical SRD data files. Errors should be reported upstream to `5e-bits/5e-database`.
