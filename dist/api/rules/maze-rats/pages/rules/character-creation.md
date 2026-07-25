## Character Creation

Create your character at the beginning of a new campaign along with the other players. If your character dies during the game, you should make a new one right away. The random tables can be used to flesh out your character if you want a bit more detail. Drawing a portrait of your character is highly encouraged, as is adopting a mannerism or two when speaking in your character's voice.

### Random tables

Tables with 36 entries are organized into 6 groups of 6. To randomly pick an item, roll 2d separately: the first die points to a group, the second points to an item within that group. For example, rolling "4, 2" on a 36-entry table selects group 4, item 2. Bolded items refer you to another random table where you should roll again.

### 1. Roll or choose abilities

Your PC has 3 abilities: Strength, Dexterity, and Will. Roll 1d to find their starting values, or simply choose a row (with GM permission). You may raise one of your PC's abilities by one point at levels 2, 4, and 6. A PC's abilities may never be raised higher than +4.

| Roll | Strength | Dexterity | Will |
|------|----------|-----------|------|
| 1 | +2 | +1 | +0 |
| 2 | +2 | +0 | +1 |
| 3 | +1 | +2 | +0 |
| 4 | +0 | +2 | +1 |
| 5 | +1 | +0 | +2 |
| 6 | +0 | +1 | +2 |

If you want your abilities to be more randomized (and possibly unbalanced), the GM may also allow you to roll 1d for each ability separately:

| Roll | Ability Score |
|------|---------------|
| 1–2 | +0 |
| 3–5 | +1 |
| 6 | +2 |

### 2. Record maximum health

Your PC begins with 4 maximum health and 4 current health. PCs add 2 to their maximum health (but not current health) each time they gain a level.

### 3. Choose starting feature

Your PC begins with one of the following features:

- **Attack bonus** — add 1 to all attack rolls.
- **A single spell slot** — cast one spell per day, generated from the Magic tables.
- **A single path**, from the four options below (gain advantage on related danger rolls):
  - Briarborn: tracking, foraging, survival.
  - Fingersmith: tinkering, picking locks or pockets.
  - Roofrunner: climbing, leaping, balancing.
  - Shadowjack: moving silently, hiding in shadows.

### 4. Roll or choose six items

Record the location of all items, armor, and weapons: hands, worn, belt, or backpack. Belts carry up to two items, and backpacks can carry as much as a backpack could reasonably fit.

Animal scent, bear trap, bedroll, caltrops, chain (10 ft.), chalk, iron tongs, lantern and oil, large sack, lockpicks (3), manacles, medicine (3), chisel, crowbar, fishing net, glass marbles, glue, grappling hook, metal file, rations (3), rope (50 ft.), steel wire, shovel, steel mirror, grease, hacksaw, hammer, hand drill, horn, iron spikes, ten foot pole, tinderbox, torch, vial of acid, vial of poison, waterskin.

### 5. Choose combat gear

PCs start with light armor (+1 armor), a shield (+1 armor, 1 hand), and two weapons:

- **Light weapons** (1 hand): axes, daggers, maces, short swords, flails, one-handed spears, etc.
- **Heavy weapons** (+1 damage, 2 hands): spears, halberds, long swords, warhammers, etc.
- **Ranged weapons** (2 hands): bows, crossbows, slings, etc.

Characters have a base armor rating of 6. Wearing light armor increases it to 7, and holding a shield in one hand increases it to 8.

### 6. Roll or create appearance

See `appearances` in [characters.json](../../../games/maze-rats/tables/characters.json).

### 7. Roll or create physical detail

See `physical-details` in [characters.json](../../../games/maze-rats/tables/characters.json).

### 8. Roll or create background

A PC's background does not have any particular mechanical effects. The GM may take it into account, however, when deciding what the PC knows or who their contacts are. Roll on the `underworld-npcs`, `civilized-npcs`, or `wilderness-npcs` tables in [characters.json](../../../games/maze-rats/tables/characters.json).

### 9. Roll or create clothing

See `clothing` in [characters.json](../../../games/maze-rats/tables/characters.json).

### 10. Roll or create personality

See `personalities` in [characters.json](../../../games/maze-rats/tables/characters.json).

### 11. Roll or create mannerism

See `mannerisms` in [characters.json](../../../games/maze-rats/tables/characters.json).

### 12. Record name, level, and XP

Keep your name short and memorable. You begin at level 1 and with zero XP.

---

## Generating and Casting Spells

### Generating spells

If a PC has spell slots, its player must generate spells to fill them. This is done during character creation and every morning in-game after the PC gets a full night of rest. Spells in spell slots cannot be removed except by casting them.

To generate a spell, the player first rolls 2d on the spell formula table (`spells` in [magic.json](../../../games/maze-rats/tables/magic.json)) to find which two tables to combine. One die indicates the row, the other the column. Once the player has found the spell formula, they roll on the two indicated magic tables (Physical/Ethereal Effects, Elements, and Forms) to create the spell's name. The GM then tells the player the spell's general effects, based on its name.

Offensive spells typically allow their targets a danger roll to resist or avoid the effects. If the spell includes damage, the GM can either set a flat damage rating, or rate the damage as a number of dice from 1 to 6.

Players may also suggest uses for the spell outside of the GM's description. If the suggested effect matches the spell's name and the situation very closely, the GM should usually allow it.

The GM may also opt to roll random spells from spell lists written for other old-school games.

### Casting a spell

Casting a spell takes one action if cast during combat. The GM is the final arbiter of how the spell manifests and how it affects the current situation. After being cast, the spell is erased from the caster's spell slot and cannot be cast again.