## Creating Content

Warden's Guide material: guidance for designing new Backgrounds and Monsters, the meaning of Bonds and Omens, and an example party used throughout this guide's worked examples.

### About the Example Party

- **Wolfram**: A _Hexenbane_ belonging to the _Order of the Blank Eye_. Besides the usual equipment, he carries a Voidglass Shard and the _Disassemble_ Spellbook. He has taken a _Vow of Poverty_.
- **Lucius**: A _Mountebank_. Besides the usual equipment he carries Bandages (3 uses) and Miracle Oil (2 uses).
- **Freya**: A _Cutpurse_. Besides the usual equipment she carries Smoke Pellets (3 uses) and a Catring (2 charges).

### Bonds and Omens

Bonds and Omens provide new player characters with adventure hooks, starting gear, and abilities. And while they are distinct from character Backgrounds, they are equally useful for building a setting, or even a complete adventure!

#### Bonds

Bonds can often tie a player character to another PC, the setting, and its characters. A PC can resolve a Bond by discovering the truth behind its mysteries or by solving its root cause. In this case, the character should experience Growth of some kind, and the Warden can optionally create a new Bond for the PC. Player characters are not required to resolve their Bonds.

Bonds should:

- Give a character an item (often _petty_) _or_ a unique ability.
- Encourage character engagement with the implied setting.
- Flesh out a character's history without relying on events tied to specific Backgrounds.
- Provide a character with a quest, opportunity, or plan of action.

#### Omens

Omens are the seeds of an adventure yet to come, premonitions of a future disaster, or the cause of a problem the characters are currently facing. An Omen is resolved when the characters reveal the truth behind its origin or resolve its dangers. Resolving an Omen should yield Growth of some kind, either for the party as a collective or to an entangled individual. If an Omen is ignored, it should come to pass and wreak whatever havoc it may.

Omens should:

- Never rely on a specific player character for relevance.
- Always tell the characters something about the setting they did not already know.
- Reveal a pattern or other obvious indicator that something terrible is going on.

### Creating Backgrounds

In Cairn, a PC's Background is the most important element of their character, representing their past as well as their present. Backgrounds can influence a character's knowledge, expertise, their connection with the setting, and much more. Backgrounds are also a filter for interpreting the results of a dice roll, or a reason to not roll at all. A Greenwise doesn't need to save DEX when cutting leaves from a poisonous plant, just as a Scrivener knows how to read the older form of a local tongue. Most importantly, Backgrounds tell a story through the character's starting gear and unique history, connecting the PC to a setting and its themes.

#### Principles

- Players should be excited about rolling on the Background tables.
- Backgrounds can be archetypal and familiar, but leave room for alternative interpretations!
- Backgrounds should tell the player something about the implied setting.
- Each table result should be unique, so that characters with the same Background are still distinct from one another.

#### Anatomy of a Background

##### Theme

Prepare a list of common adjectives that describe your new Background. If designing a profession, ask yourself what would lead someone to take on such a career. If writing something more unique (such as the Half-Witch, for example), consider how such a person's strangeness would alienate them from others or bring them closer. And as you write the Background's starting gear and tables, keep in mind how the game world's implied setting, inspirational materials (books, film, etc.), and existing tropes might influence the results.

##### Starting Gear

Characters in Cairn are largely defined by their inventory, so starting gear should be the first place to start painting a Background's unique canvas. Each Background has:

- Gold, food, and some kind of light source. These should still be unique; a Background might start with unusual Rations, a candle helmet, and so on.
- Up to four _unique_ items that reinforce the overarching theme. At least one of these items should be a weapon of some kind.
- Starting items should occupy no more than seven slots in total, so as to not overburden a character's inventory.

##### Tables

Tables are where a character's unique story really starts to come together. They also provide a level of diversity so that no two characters are alike. Each Background has a defining question, followed by six rows of answers. The first table question should be tailored around the character's distant or recent past and what experiences led to their present circumstances. The first table should offer the character a unique item, ability, or combination of the two. The second table question focuses on who the character is _today_, and the answers are typically related to a specific item or skill that broadly defines the character.

### Creating Monsters

To create a unique monster, follow these steps:

- Roll on the Monster Appearance table.
- Roll on the Monster Traits table.
- Roll on the Monster Attacks table.
- Roll on the Monster Abilities table.
- Describe the creature's appearance, abilities, and attacks in plain English.
- Create the creature's stats according to the principles, definitions, and stat block format below.

The four combinator tables (Appearance, Traits, Attacks, Abilities) are published as structured data — see `monster-creation-tables.json` in the Cairn tables index.

#### Principles

- Use **Critical Damage** to lean into the threat or strangeness of any aggressive NPC.
- Use flavor and style to help creatures stand out. Players will remember a pig-faced humanoid looking for his missing sheep more easily than a generic goblin archer.
- Always adjust creature stats based on what is fun and interesting.

#### Hit Protection

A creature's ability to avoid danger, whether through toughness, speed, or skill. Give average creatures 3 HP, give hardier ones 6 HP, and give serious threats 10 or higher.

#### Armor

For some creatures, this represents their natural toughness; for others, it may be from something that is worn or carried. If a creature is able to withstand an attack without moving, raise this number.

#### Ability Score

3 is deficient, 6 is weak, 10 is average, 14 is noteworthy, and 18 is legendary.

#### Strength

Tracks overall health, physical power, and resistance to poisons. It is the ability of a creature to survive a direct hit, not its ability to avoid danger!

#### Dexterity

Start with **10** as a base, and if the creature is particularly quick, agile, or nimble, increase the number as necessary. If it is slow to respond, bulky, or clumsy, lower the number.

#### Willpower

Determines a creature's ability to withstand the influence of another, as well as their power over others. It also acts as a measurement of their defense in magical or spiritual matters.

#### Attacks

Typically an object (e.g. sword or bow) or a natural weapon (e.g. claws or teeth).

#### Abilities

A unique action or power the creature can utilize both in and out of combat.

- If an ability can be meaningfully avoided or defended against through traditional means, it is an Attack and interacts with HP.
- If an ability cannot be meaningfully avoided or defended against through traditional means, it is an Ability.
- If an ability only affects a single PC, it should generally have an immediate effect with no chance to Save in that round (possibly not at all).
- If an ability is capable of affecting a group of PCs, it should generally call for an immediate Save.

#### Monster Stat Block Format

X HP, X Armor, X STR, X DEX, X WIL, Attack (dX, special items, _qualities_)

- An engaging descriptor of appearance, demeanor, or living habits.
- A quirk, tactic, or peculiarity that distinguish this creature.
- Special effect or consequence of critical damage.

#### Monster Example

- **Appearance**: _Hunched_ + _Carapace_.
- **Traits**: _Moves in a straight line_ + _Weak Spot_
- **Attack**: _Smashes_ + _Grapples_.
- **Abilities**: _Disables_ + _Hearing_

_A snail-like creature with a hard shell. It moves only in straight lines, and has a soft underbelly. It rolls into opponents, pulling them into its wild orbit. The roar of its movement drowns out any other sounds._

This creature is physically tough, with higher than average **STR** and strong armor. It is probably fast but not maneuverable, and likely doesn't rely on skill or dexterity to avoid danger. It is brutish, but it is still a wild beast and only as willful as any creature just looking for its next meal. It attacks by rolling in a straight line and should impact multiple targets.

##### Thunder Snail

6 HP, 2 Armor, 14 STR, 6 DEX, 4 WIL, smash & roll (d10, _blast_)

- Thick-shelled beasts that attack by rolling over their opponents in a straight line. The noise of their tumbling shells is deafening.
- **Critical Damage**: Target is pulled into its rolling momentum, losing an additional 1 STR per round until freed (STR save to escape).

#### Converting Monsters

There is no perfect system for converting from other systems. Here are some tips that might help with the process!

- **Hit Protection**: A good rule of thumb is to give the creature +1 HP for every **HD**, on top of a minimum **3 HP** (the average person). HD is equivalent to a d6, which has a _mean_ of 3.5. Always start with a creature's **HP** _first_, _then_ do their **STR**.
- **Armor**: Look for phrases like "as leather" and "as plate" in the original stat blocks. When converting from B/X style games like Old School Essentials, ignore THAC0 and use descending AC whenever possible (7 = Leather, 5 = Chainmail, 3 = Plate mail). If only ascending AC is given, you can use (12 = Leather, 14 = Chainmail, 16 = Plate mail). Whichever system you're converting from, the Armor values range from 1-3 only.
- **Strength**: Look at the creature's **HD** and **HP**. If a creature is difficult to kill but _not_ because they are nimble or skilled, give them more **STR** (but _not_ more **HP**). Start with 10 **STR** (the average) and go up or down from there.
- **Dexterity**: Start with **10** as a base, and if the creature is particularly quick (often referred to as "speed" or SP), agile, or nimble-fingered, raise the number. If it is slow to respond, bulky, or clumsy, lower the number.
- **Willpower**: **Morale** (**ML**) can be a good guidepost, and it typically ranges between 2-12. The greater the creature's personality, spirit, or presence, the higher the WIL they should have. The following table offers a decent guide on converting **ML** to **WIL**.

| ML | 4 | 8 | 10 | 12 |
|---|---|---|---|---|
| WIL | 6 | 12 | 15 | 18 |

##### Saving Throws

- You can rely on _saving throws_ to glean more information about a creature's abilities, specifically their ability to avoid death by physical trauma, magic, or poison.
- Stat blocks will use a shorthand like (E1) or (F1) (Level 1 Elf or Fighter respectively). These are really helpful for quickly identifying the creature's abilities.
- Consider adding descriptive tags such as "immune to toxic gas" or "good at dodging" based on the saving throws. The following table should help determine which saving throws should result in an increase in one of the relevant ability scores.

| Save type | Ability score |
|---|---|
| Death or Poison | STR |
| Wands | DEX |
| Paralysis or Petrification | WIL or STR |
| Breath Attacks | DEX or STR |
| Spells, Rods or Staves | WIL |

##### Combat

- **Damage Die**: Can typically be copied "as is" from most OSR systems, but it's a good idea to check with the weapons listed in the Marketplace first.
- **Multiple attacks**: Convert to _blast_ or to multiple dice (e.g. d6+d6).
- **Devastating Attacks**: Consider making the damage _enhanced_, assign the _blast_ tag, or giving the attack multiple dice.

##### Abilities

- Sometimes the mechanics of the original system simply _do not translate_. That's OK! Try to focus on what's most interesting about the creature, and write a "version" of their ability more appropriate to Cairn.
- Abilities can sometimes be made into attacks (with a damage die), leaving Critical Damage to reveal the real impact.
- If the monster has an attack that asks the PCs to attempt to dodge or save against some ability, consider making the ability an out-of-combat "trap" that the PCs can trigger. Otherwise, make it succeed automatically. Combat is dangerous, and it is up to the Warden to properly telegraph danger before the fighting begins.

##### Magic

- Magical creatures can "know" a bunch of spells without needing to carry Spellbooks. In this case, make their corpses magical (and dangerous)!
- Spells are tricky; you can give magic-users Spellbooks, but remember, they might _drop_ them when defeated.
- Consider making some of the dropped Spellbooks implode (use the Die of Fate to determine which).

##### Use the Fiction

The easiest way to convert a monster from another system is to read the original stat block and any associated text, then write a few sentences about the creature in plain English. Finally, convert what you've written to the Cairn monster stat block.

Take for example this creature:

###### Foxwoman (source stat block)

Can take the form of a fox or a 7' tall fox-headed woman.
_HD 5, Speed 120', Armor 14, Morale 11, Attack: +4 d8hp (claw, bite or choke)_

- Defense: Cannot be harmed by metal
- Special: Can transform into a fox or a maiden with one fox leg hidden (same stats) at will

**Using the example above, we can see that she:**

- Appears as a 7-foot tall human woman with the head of a fox.
- Doesn't have super high HP, and she's quite fast.
- Has a pretty high **ML**, and she's obviously quite willful.
- Is agile and lithe.
- Attacks with teeth and claws (choking her prey if possible).
- Can transform into a fox at will.
- Is immune to metal weapons.

**What can we learn from this?**

- She's fast, and probably savvy in a fight. If we start from **3 HP** and add 1 **HP** per **HD**, that means she has **8 HP**.
- Foxes don't have protective hides, and she's otherwise human beside her head. **No Armor**.
- She is decently strong. A normal human has 10 **STR** and she's a little bigger. **12 STR**.
- She's fast, hunting prey over the snowy tundra. **14 DEX**.
- Her **ML** is high, and foxes are known for their cunning. **15 WIL**.
- For her attacks: claws (d6+d6) and bite (d8).

**The final result:**

###### Foxwoman

8 HP, 12 STR, 14 DEX, 15 WIL, claws (d6+d6), bite (d8)

- Can take the form of a fox or a woman with a hidden fox leg.
- Immune to attacks from metal weapons.
- **Critical Damage**: Victim is choked unconscious.