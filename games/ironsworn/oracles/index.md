---
title: "Ironsworn Oracle Tables"
slug: oracles
parent: ironsworn
published: true
---

## Ironsworn Oracle Tables

Oracle tables are the primary source of randomness and creative inspiration in Ironsworn. When the outcome is uncertain or you need a narrative prompt, roll dice and consult the relevant table.

**Licence:** CC BY 4.0. Attribution: Ironsworn SRD, Shawn Tomkin.

### How to Use Oracles

Roll the specified die type (usually d100 for a percentile roll). Find your result in the table's `min`–`max` range. Interpret the result in the context of your current situation. Oracle results are prompts, not commands: they spark ideas, not dictate outcomes.

### Oracle Files

Machine-readable oracle data is stored as JSON files in this directory. Each file follows the [oracle schema](schema.json).

| File | Oracle | Roll |
|------|--------|------|
| `action.json` | Action | d100 |
| `theme.json` | Theme | d100 |
| `region.json` | Region | d100 |
| `location.json` | Location | d100 |
| `location-descriptor.json` | Location Descriptor | d100 |
| `settlement-name.json` | Settlement Name | d100 |
| `ironlander-names.json` | Ironlander Names | d100 |
| `elf-names.json` | Elf Names | d100 |
| `other-names.json` | Giant, Varou, Troll Names | d100 |
| `combat-action.json` | Combat Action | d100 |
| `trap-or-peril.json` | Trap or Peril | d100 |
| `wilderness-feature.json` | Wilderness Feature | d100 |
| `pay-the-price.json` | Pay the Price | d100 |

### AI DM Integration

Oracle results feed directly into narrative generation. The integration pattern:

1. Roll oracle table(s) relevant to the situation.
2. Pass the result(s) to the AI with context (current scene, vow, location).
3. AI generates narration that incorporates the oracle result naturally.

Example prompt: `"The player Undertakes a Journey. Oracle: Region = Barrier Hills. Location = Flooded Lowlands. Location Descriptor = Haunted. Generate a vivid scene description."`
