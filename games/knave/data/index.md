---
title: "Knave Tables"
slug: tables
parent: knave
published: true
---

## Knave Structured Data

Knave keeps its randomness compact: eleven character trait tables, five starting-gear tables, and a single 100-entry spell list. Roll dice and consult the relevant table for instant character detail, starting kit, or a spell's effect.

**Licence:** CC BY 4.0. Attribution: Knave (1st edition), Ben Milton (questingbeast.com / questingblog.com).

### How to Use the Tables

Most tables are flat 1d20 lists: roll 1d20 and read the matching entry. A few tables (Alignment, starting Armor, Helmets and Shields) are range tables: roll 1d20 and find the row whose `min`–`max` span contains the result. The Dungeoneering Gear table is rolled twice; General Gear 1 and General Gear 2 are each rolled once, per the Starting Gear procedure in [Character Creation](../content/rules/character-creation/). The 100 Classless Spells table is rolled with 1d100 (roll 1d10 twice: once for the tens digit, once for the ones digit, treating a 0 as the corresponding tens/ones value, or roll 2d10 and read the higher/lower die by convention agreed at the table).

### Table Files

| File | Contents |
|------|------------|
| `traits.json` | Physique, Face, Skin, Hair, Clothing, Virtue, Vice, Speech, Background, Misfortune (all 1d20), and Alignment (1d20 range table: Law/Neutrality/Chaos) |
| `starting-gear.json` | Starting Armor (range table), Helmets and Shields (range table), Dungeoneering Gear (1d20, roll twice), General Gear 1 (1d20), General Gear 2 (1d20) |
| `spells.json` | The 100 Classless Spells (1d100), each with a name and effect |

Each file follows the [table schema](schema.json).

### AI DM Integration

Table results feed directly into narrative generation, the same pattern used for other RPG hubs in this library:

1. Roll table(s) relevant to the situation (trait tables during character creation, a spell during casting).
2. Pass the result(s) to the AI along with context (party, current scene).
3. AI weaves the rolled trait, item, or spell effect into the narration naturally.

Example prompt: `"A new character rolled 'Cursed' on the Misfortune table and 'Gaunt' on Physique. Generate a brief introduction hook for this character."`
