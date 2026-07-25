## Combat

Combat is often an inevitable, and exciting, part of most adventures. Because of its deadly nature, it is essential to know exactly what happens when in combat, who can act at a certain time, and what actions are possible in the amount of time provided. This section addresses the wide variety of actions that occur during a combat round.

### The Combat Round

A combat round is 12 seconds long, and in it each character can perform actions and react to other actions in an order usually determined by their DEX characteristic. A combat round consists of four phases, always occurring in the same order and repeated with each new combat round until combat is over: Statement of Intent, Movement, Actions, Resolution.

### Statement of Intent

The gamemaster and players involved in a combat round must announce what they will do. The order that actions can be attempted in is determined by each character's DEX characteristic. Players or gamemasters do not need to announce defensive actions (parries, dodges, etc.) during this phase.

Statements of intent should be handled in order of the DEX characteristic of all involved characters, highest to lowest. Usually the gamemaster counts down, from the highest DEX to the lowest, calling on each player to state their intended actions at the appropriate times, and announcing how the non-player characters will act at the appropriate DEX characteristics.

If there is a need to determine who acts first when DEX ranks are tied, use the relevant skill (missile weapons before melee weapons, for example). If both are using the same type of weapons, the character with the higher skill rating goes first. If these are still tied, the actions occur simultaneously.

Some gamemasters and players choose to forgo the verbal part of the statement of intent phase and move directly into counting down DEX and acting.

### Movement

If a character is not involved in combat, they can move around 30 meters in a combat turn if performing no actions other than defensive (parries or dodges). A character can move between 6–15 meters and still act at half their normal DEX rank. Moving between 16–29 meters in a combat round means the character acts at one-quarter their normal DEX rank.

### Actions

Characters act on their DEX rank, so someone on DEX rank 15 goes before someone on DEX rank 14. If there are multiple characters attempting to act on the same DEX rank, attacks are performed in order of weapon type: attackers armed with missile weapons (bows, guns, etc.) act before those in hand-to-hand (melee) combat, then those with long weapons (spears, lances, etc.), then medium-length weapons (swords, axes, etc.), then short weapons (daggers, etc.) or those unarmed.

If a weapon has more than one range listed, the user can choose which range to act on. Parries and dodges occur within the same DEX rank as the original attack.

### Attacking

To attack, roll D100 and try to obtain a result equal to or lower than the attack chance for the Melee Weapon, Missile Weapon, or Heavy Weapon being wielded. Lower is better. If the roll is less than 1/5 of the attack chance, a special success is achieved (see Special Successes, below).

At the gamemaster's discretion, a related specialty skill may be used as if Difficult (1/2 chance). For example, a gamemaster may allow a character to use a sword with their dagger skill, as both are Melee Weapon specialties and are similar weapons.

A special success on an attack is better than a normal success and requires an equally successful parry or Dodge roll to avoid. Any roll higher than the attack chance is a failure and does no damage to the opponent. If an attack is successful it may do damage to the intended target (see Damage and Injury, below).

### Parrying

Parrying is the act of knocking or blocking the attacking weapon out of the way using the relevant Melee Weapon skill. A parry is determined after the attack roll is made. If an attack fails, it does not need to be parried. If the attack is successful, the target of that attack may wish to parry it, and must be aware of and able to see the attack coming.

Determine a successful parry just like an attack roll, rolling percentage dice below the parry skill (equal to the weapon's attack skill). A special success means an especially good parry and is required to fully counteract an attack with a special success result.

It is impossible to parry firearms or high-velocity weapons (energy weapons, etc.). Generally, one needs a shield to parry missile weapons. Weapons and shields occasionally take damage from being used to parry and can even break if their hit points are overcome.

### Dodging

Dodging is the act of getting out of the way of an oncoming attack using the Dodge skill. A Dodge is determined after the attack roll is made. If an attack fails, it does not need to be dodged. If the attack is successful, the target of that attack may wish to Dodge it, and must be aware of and able to see the attack coming.

Determine a successful dodge just like an attack roll, by rolling percentage dice below the dodge skill chance. A special success means an especially good dodge and is required to fully avoid an attack with a special success result. It is impossible to dodge firearms or high-velocity weapons, although the gamemaster may allow the character to dodge arrows and thrown weapons as if the task were Difficult (half the normal skill level), assuming the character saw the attacker's intent to fire and just got out of the way in time.

### Combat Summary

A quick means of determining who hits who in a combat is to compare levels of success, just as with skills: special success > success > failure. A success cancels out an equivalent level of success. The Attack and Defense Matrix summarizes the results in combat.

ATTACK AND DEFENSE MATRIX

| Attack Roll | Parry Roll | Dodge Roll | Result |
|---|---|---|---|
| Special | Special | Special | Defender parries or dodges attack, no other result. |
| Special | Success | Success | Attack partially parried or dodged and achieves a normal success. Defender's armor value subtracted from damage. Parrying weapon or shield takes 2 points of damage. |
| Special | Failure | Failure | Attack achieves a special success. Attack does full damage plus normal damage bonus and appropriate special result. Defender's armor value subtracted from damage. |
| Success | Special | Special | Defender blocks or dodges damage; no other result. If parried in melee combat, attacker's weapon takes 1 point of damage. |
| Success | Success | Success | Defender blocks or dodges damage, no other result. |
| Success | Failure | Failure | Attack strikes defender and rolls damage normally. Defender's armor value subtracted from damage. |
| Failure | — | — | No damage; no effect. |

### Weapons and Damage

See [weapons.json](../../../../games/brp/data/weapons.json) for the full melee and missile weapon tables as structured data.

Weapons are described by: the skill and specialty used; the base chance, which any skill points are added to; the damage the weapon does against the target, to which the attacker's damage bonus (db) is added ("½ damage bonus" means roll and divide by 2, rounding up); the number of hands needed to use the weapon properly; the hit points it has if used to parry; and, for missile weapons, the range in meters (below this range the attack chance is not modified; at up to twice the range the attack becomes Difficult, ½ skill chance; at up to three times the range the attack chance is ¼ the normal chance; beyond three times the range there is no chance of hitting the target).

MELEE WEAPONS

| Weapon | Skill Specialty | Base | Damage | Hands | Hit Points |
|---|---|---|---|---|---|
| Axe, Battle | Melee Weapon (Axe) | 15 | 1D8+2+db | 1H | 15 |
| Axe, Great | Melee Weapon (Axe) | 15 | 2D6+2+db | 2H | 15 |
| Axe, Hand | Melee Weapon (Axe) | 15 | 1D6+1+db | 1H | 12 |
| Brawl | Brawl | 25 | 1D3+db | 1H | n/a |
| Club, Heavy | Melee Weapon (Club) | 25 | 1D8+db | 2H | 22 |
| Club, Light | Melee Weapon (Club) | 25 | 1D6+db | 1H | 15 |
| Dagger | Melee Weapon (Dagger) | 25 | 1D4+db | 1H | 15 |
| Halberd | Melee Weapon (Polearm) | 15 | 3D6+db | 2H | 25 |
| Hammer | Melee Weapon (Hammer) | 25 | 1D6+db | 1H | 15 |
| Hammer, Great | Melee Weapon (Hammer) | 25 | 1D10+3+db | 2H | 15 |
| Knife | Melee Weapon (Dagger) | 25 | 1D3+1+db | 1H | 15 |
| Mace, Heavy | Melee Weapon (Mace) | 25 | 1D8+2+db | 2H | 10 |
| Mace, Light | Melee Weapon (Mace) | 25 | 1D6+2+db | 1H | 6 |
| Pike | Melee Weapon (Polearm) | 15 | 1D10+2+db | 2H | 12 |
| Staff, Quarter- | Melee Weapon (Staff) | 25 | 1D8+db | 2H | 8 |
| Spear, Long | Melee Weapon (Spear) | 15 | 1D10+db | 2H | 10 |
| Sword, Broad | Melee Weapon (Sword) | 15 | 1D8+1+db | 1H | 12 |
| Sword, Great | Melee Weapon (Sword) | 05 | 2D8+db | 2H | 12 |
| Sword, Short | Melee Weapon (Sword) | 15 | 1D6+1+db | 1H | 12 |

MISSILE WEAPONS

| Weapon | Skill Specialty | Base | Damage | Hands | Hit Points | Range |
|---|---|---|---|---|---|---|
| Axe, Hand (thrown) | Missile Weapon (Throwing Axe) | 10 | 1D6+½db | 1H | 12 | 20 meters |
| Bow, Long | Missile Weapon (Bow) | 05 | 1D8+1+½db | 2H | 10 | 90 meters |
| Crossbow, Heavy* | Missile Weapon (Crossbow) | 25 | 2D6+2 | 2H | 18 | 55 meters |
| Crossbow, Light* | Missile Weapon (Crossbow) | 25 | 1D6+2 | 2H | 10 | 40 meters |
| Dagger (thrown) | Missile Weapon (Throwing Dagger) | 15 | 1D4+½db | 1H | 15 | 10 meters |
| Knife (thrown) | Missile Weapon (Throwing Dagger) | 15 | 1D3+1+½db | 1H | 10 | 10 meters |
| Pistol** | Firearm (Pistol) | 20 | 1D8 | 1H | 8 | 20 meters |
| Pistol, Laser** | Energy Weapon (Laser Pistol) | 20 | 1D8 | 1H | 14 | 20 meters |
| Rifle** | Firearm (Rifle) | 25 | 2D6 | 2H | 12 | 80 meters |
| Rifle, Laser** | Energy Weapon (Laser Rifle) | 15 | 2D8 | 2H | 20 | 100 meters |
| Rock (thrown) | Throw | — | 1D2+½db | 1H | n/a | 20 meters |
| Sling | Missile Weapon (Sling) | 05 | 1D8+½db | 2H | 2 | 80 meters |

\* Crossbows are slower to fire than most missile weapons; each takes a full combat round to reload, so they can only be fired every other round.

\*\* Pistols and rifles hold 6 shots apiece; laser pistols and rifles have charges for 20 shots.

### Armor

See [armor.json](../../../../games/brp/data/armor.json) for the full armor table as structured data.

Armor protects its wearer from being injured. It's not invulnerable, though: light armor stops a little damage, and heavy armor stops a lot of damage. For example, soft leather armor stops 1 point of damage, while full plate armor stops 8 points of damage. When a character is hit in combat, subtract the armor points from the points of damage that have been rolled. Damage above and beyond the armor's protection value bypasses the armor and is inflicted on the character, reducing their current hit points.

'Physical' skills are Climb, Dodge, Fine Manipulation, Hide, Jump, Sleight of Hand, Stealth, Swim, and Throw, and the Agility characteristic roll, while 'perception' skills are Listen and Spot. At the gamemaster's discretion, other skills may be affected by wearing armor.

ARMOR TYPES

| Name | Armor Points | Skill Modifier |
|---|---|---|
| Bulletproof Vest | 8 | −5% to physical skills |
| Chain | 7 | −20% to physical skills |
| Flak Jacket | 4 | −10% to physical skills |
| Clothing, Heavy | 1 | None |
| Helmet, Heavy | +2 | −50% to perception skills |
| Helmet, Light | +1 | −15% to perception skills |
| Hoplite Panoply | 6 | −20% to physical skills |
| Leather, Soft | 1 | None |
| Leather, Hard | 2 | −10% to physical skills |
| Plate, Full | 8 | −25% to physical skills |
| Quilted | 2 | −5% to physical skills |
| Riot Gear | 12/6 | −10% to physical skills |

### Shields

See [shields.json](../../../../games/brp/data/shields.json) for the full shields table as structured data.

A shield is any movable, non-weapon obstacle a character uses to intercept incoming attacks. Parrying with a shield follows the same rules as parrying with a weapon, though low-velocity missile weapons (thrown, arrows, etc.) can also be parried with a shield. Generally, a target shield has a straight 15% chance to parry a missile weapon, a full (heater, kite, or round) shield has 30%, and a large (hoplite or riot-style) shield has 60%. If a character kneels behind a large shield, the chance becomes 90%.

Shields are described by their base chance to parry or attack with, damage done if used as a weapon (a shield bash, etc.), and armor points. If the shield is immobile, use its armor points to determine how many points it protects a hit location against; if damaged, reduce its hit points and armor points to represent its diminished capacity.

SHIELDS TABLE

| Name | Base Chance | Skill | Armor/Hit Points | Damage |
|---|---|---|---|---|
| Heater | 15% | Shield | 12 | 1D3+db |
| Hoplite | 15% | Shield | 16 | 1D4+db |
| Kite | 15% | Shield | 16 | 1D4+db |
| Riot | 15% | Shield | 16 | 1D3+db |
| Round | 15% | Shield | 12 | 1D3+db |
| Target | 15% | Shield | 12 | 1D2+db |

### Damage and Injury

Each character has hit points (HP) derived from the average of Constitution and Size (see Character Creation: Derived Characteristics). When a weapon successfully strikes a character (or the character suffers some other injury), damage points (after armor points) are subtracted from their current hit points.

For example, an uninjured character has 12 hit points and is wearing hard leather armor (worth 2 points). They take 6 points of damage from an attack. Two points are subtracted because of the character's armor protection, and they take the remainder, 4 hit points in damage, reducing them to 8 hit points. Any more damage is subtracted from this new total.

If a character is reduced to 2 hit points, they fall unconscious for 1D6 hours or until awakened by another character. If a character is reduced to 0 hit points and remains at 0 at the end of the combat round, they are dead. Characters can have injuries in excess of their hit points, going below 0 into negative values. First Aid attempts must be applied to these negative hit points to bring the character's hit points to a positive total.

### Special Successes

In combat, when a special success is achieved, it means the attack was exceptionally well-made, striking deep into the opponent's body or hitting perfectly. A special success is often a killing blow to most normal opponents. To determine the value of a special success, determine the maximum damage the weapon can roll, and then add the results of a normal damage roll to it, plus the damage modifier (if any) on top of that. The resulting amount of damage is then delivered to the opponent (with armor subtracted, as normal).

For example, a special success earned with a short sword deals the weapon's normal maximum damage (1D6+1, so 7), to which normal rolled damage and the damage bonus is added. The player rolls 3 for their 1D6, adds +1, and rolls a 2 on 1D4 for their damage bonus. The short sword's special success does 7+4+2 damage, a total of 13 points.

### Healing

A character usually heals 1D3 hit points per game week: at the end of a seven-day period, the gamemaster rolls 1D3 and the character has that many hit points restored, up to maximum hit points. If the character is in a hospital under ideal conditions and receiving top-notch medical treatment, the gamemaster may choose to allow the maximum healing (3) rather than rolling 1D3.

Successful use of the First Aid skill heals 1D3 hit points per injury. Keep track of each injury separately; First Aid can be applied to wounds to reduce their severity, restoring lost hit points, but can only heal the total hit points in damage for an individual wound. For example, if a character has taken 2 hit points in damage from a single wound, a successful use of First Aid can only heal 2 hit points for that wound, even if the dice indicate more.

An injury may have First Aid applied to it only once. If the roll is unsuccessful, it is still bandaged and cleaned but is not overly beneficial. First Aid takes one combat round to apply (if in a hurry); a character reduced to 0 hit points in a round of combat may be saved from death if they can be brought up to 1 hit point by the time the combat round ends.