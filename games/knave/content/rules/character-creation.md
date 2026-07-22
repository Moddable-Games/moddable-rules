---
title: "Character Creation"
slug: character-creation
parent: knave
published: true
---

## Character Creation

PCs have six abilities: Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma. Each ability has two related values: a defense and a bonus. When creating a PC, roll 3d6 for each of their abilities, in order. The lowest of the three dice on each roll is that ability's bonus. Add 10 to find its defense.

After you've finished rolling, you may optionally swap the scores of two abilities.

_Example: You roll a 2, 2, and 6 for Strength. The lowest die is a 2, so your PC's Strength has a bonus of +2 and a defense of 12._

Repeat this process for the rest of the abilities.

> **Designer's Note:** "Ability defense" is my term for what is normally called ability scores. I refer to them this way to make it clearer how they work during opposed saves, explained later.
>
> The rolling mechanic will make most abilities start at 11/+1. The bonus and defense of three abilities will rise by 1 point each time the PC gains a level, up to a maximum of 20/+10 by level 10. This puts everything on an intuitive ten point scale, and is intended to mirror the way that attack bonuses, hit dice, and saving throws in most OSR games increase by about one point per level.

PCs start with 2 days of rations and one weapon of their player's choice. Roll on the Starting Gear tables (see [starting-gear.json](../../../../games/knave/data/starting-gear.json)) to determine starting armor and equipment: once each on Armor and Helmets and Shields, twice on Dungeoneering Gear, and once each on General Gear 1 and General Gear 2.

> **Designer's Note:** Rolling for starting equipment dramatically speeds up the character creation process, which is important if you're playing a high-lethality game like Knave. If you want to permit shopping for equipment, however, have players roll 3d6x20 to find their starting copper pieces. Note that spell books are not normally available to new PCs, but you could always add "random spellbook" to the Dungeoneering Gear table, or simply allow new PCs to roll a random spell in exchange for not starting with any armor.

### Item Slots

PCs have a number of item slots equal to their Constitution defense, and items they carry must fit into available slots. Most items take up one slot, but some take up more. Some small items can be bundled together into a single slot. Ask the referee if you are unsure.

> **Designer's Note:** Item slots make tracking encumbrance very fast and easy, which is important since resource management is an important aspect of the game. They also represent character customization slots, since what a Knave is carrying goes a long way towards determining their playstyle and role in the party.

### Armor

Armor comes with an armor defense value. Note that value on your character sheet with its corresponding Armor bonus (always 10 less than the defense). If the PC is not wearing any armor, their armor defense is 11 and their armor bonus is +1.

> **Designer's Note:** "Armor defense" is essentially the same concept as armor class in most OSR games. It's been renamed to emphasize the connection between the way it and ability defenses work. The armor bonus exists in order to allow combat to be run entirely player-facing, as explained in the combat section.

### Hit Points and Speed

Roll 1d8 to determine your PC's starting and maximum hit points. A PC's healing rate is 1d8 + Constitution bonus. Their exploration speed is 120ft per exploration turn, and their combat speed is 40ft per round.

> **Designer's Note:** All hit dice are assumed to be d8s in Knave, for PCs, NPCs, and monsters. This simplifies the game and keeps things compatible with the stats in most OSR books. Note that a PC's Constitution bonus is not added to their hit point rolls. Referees who don't want starting PCs to be quite as fragile might want to allow starting HP to be rerolled if it is below 5.

### Traits

Invent or roll the rest of your PC's traits, physique, face, skin, hair, clothing, virtue, vice, speech, background, and alignment, using the random tables in [traits.json](../../../../games/knave/data/traits.json). Choose a gender and a name for your PC, but don't get too attached. It's a dangerous world out there.

> **Designer's Note:** Randomizing most of a PC's traits speeds up character creation, but it also has the effect of creating surprising, unique characters that most players wouldn't think to invent or play.
