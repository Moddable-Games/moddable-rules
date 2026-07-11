---
title: "The Landlord's Game — Official Rulebook"
version: "0.2.0"
slug: "landlords-game"
players: "2–6"
duration: "60–120 min"
age: "10+"
tagline: "Elizabeth Magie's 1904 economic satire — five variants spanning the game's full history from patent to Prosperity"
type: "classic"
status: "live"
updated: "2026-07-04"
published: true
variants: true
theme:
  surface: light
  tint: neutral
  texture: none
  cover: solid
  typography: classical
  accent: green
engine:
  topology:
    type: track
    positions: 40
    shape: circuit
  surface: parchment
  render:
    trackStyle: perimeter
  players: [player1, player2, player3, player4, player5, player6]
---

<div class="section">

## History

The Landlord's Game was designed by Elizabeth J. Magie (May 9, 1866 — March 2, 1948) as, in her own words, "a practical demonstration of the present system of land grabbing with all its usual outcomes and consequences." Playtested in Arden, Delaware, from 1902–1903, the game embodies the economic philosophy of Henry George, whose single-tax theory held that land rents enrich property owners at the expense of tenants and the broader public.

The patent was filed on March 23, 1903, and granted on January 5, 1904, as US Patent 748,626. The design is notable for including two sets of rules from the outset: a Monopolist version, in which individual accumulation is the goal, and an Anti-Monopolist (later named Prosperity) version, in which players win collectively when the poorest player doubles their starting wealth. Magie considered the Prosperity version the game's true purpose — the Monopolist version was intended to demonstrate the injustice of the current system, not to celebrate it.

In 1906, Magie and fellow Georgists formed the Economic Game Company in New York, publishing the first commercial edition with Chance cards bearing quotations from Thomas Jefferson, John Ruskin, and Andrew Carnegie, along with houses, auction mechanics, and railroad monopoly pricing. The game spread through left-wing intellectual circles in the northeastern United States — Scott Nearing, socialist economics professor at Wharton, taught it to students from 1906–1915. Hand-copied boards circulated under names including Monopoly, Finance, and Auction.

The 1904 patent expired in 1921. Magie applied for a second patent in 1923; it was granted on September 23, 1924 (US Patent 1,509,312). In 1932, the Adgame Company published "Landlord's Game and Prosperity" under this patent — the first confirmed publication naming the Prosperity rules as a distinct variant with an explicit win condition.

Ruth Hoskins brought a hand-copied version of the game to Atlantic City in 1929, renaming properties after local streets. Jesse Raiford grouped them by colour and assigned prices. This Atlantic City folk version was the game Charles Darrow encountered around 1933 and sold to Parker Brothers in 1935 as his own invention. Parker Brothers subsequently acquired Magie's 1924 patent for $500, with no royalties, to secure their rights. They printed a small run of The Landlord's Game to assert the purchase, then sidelined it for Darrow's version by 1936. Magie gave two newspaper interviews — in the Washington Post and the Evening Star — displaying her original boards and documenting that Darrow was not the inventor.

</div>

<div class="section">

## The Board

The Landlord's Game uses a continuous circular track of 40 spaces. Unlike Monopoly's colour-grouped properties, the board is not divided into sections by colour — instead, spaces alternate between lot spaces, railroads, franchises, and special spaces arranged around the perimeter.

{{svg:landlords-game-board.svg "The Landlord's Game — board layout, 40 spaces"}}

**Corner spaces:**

| Position | Name | Effect |
|---|---|---|
| 1 | **MOTHER EARTH** | Starting point. "LABOR UPON MOTHER EARTH PRODUCES WAGES." Each pass earns $100 wages. |
| 11 | **JAIL / JUST VISITING** | Players sent here remain until throwing a double or paying a $50 fine to the Public Treasury. |
| 21 | **CENTRAL PARK** | Free space. No payment required. (1904 patent: Public Park.) |
| 31 | **No Trespassing / Go to Jail** | Player immediately goes to Jail. |

**Space types:**

| Type | Colour | Effect |
|---|---|---|
| Lot spaces (22 total) | Green | For sale or rent; rent paid to owner, or to Public Treasury if unowned |
| Absolute Necessities | Blue | Food, Fuel, Shelter, Clothing — tax paid to Public Treasury |
| Railroad spaces | Pink | Fare paid to Railroad fund; monopoly pricing in 1906 edition |
| Franchise spaces | Yellow | Soakum Lighting System; Slambang Trolley |
| Luxury spaces | Purple | Pay $50 to Public Treasury; receive luxury ticket (1904 patent only) |
| Chance | — | Draw a card; follow instructions |
| Speculation | — | Optional gambling mechanic (1906 edition only) |
| Poor House | — | Refuge for players who cannot continue |
| Legacy | — | Receive $100 cash and a legacy ticket (1904 patent only) |

**Confirmed lot names — 1906 edition:**

The Pike ($25), Goat Alley ($50), Lonely Lane ($25), Beggarman's Court ($50), The Bowery ($75), Boomtown ($50), Fairhope Avenue ($75), George Street ($75), Easy Street ($75), Cottage Terrace ($50), Market Place ($50), Grand Boulevard ($100), Wall Street ($100), Broadway ($100), Fifth Avenue ($100).

Additional named spaces: Soakum Lighting System ($50), Slambang Trolley ($50), Royal Rusher R.R. ($50), Gee Whiz R.R. ($50), Shooting Star R.R. ($50), P.D.Q. R.R. ($50), D.F. Hogg's Game Preserves (No Trespassing), Lord Blueblood's Estate (No Trespassing), Poor House, Speculation.

**Note:** The full 40-space clockwise sequence is not explicitly listed in the surviving 1906 rules text. The names above are confirmed from rules references and average hand descriptions in the 1906 edition. The board SVG is a separate deliverable; see `diagrams/`.

### 1906 edition differences

The 1906 Economic Game Company edition introduced several changes from the 1904 patent:

- Property names changed from 1904 patent versions
- Houses added, with a rent table (land rent doubles per house added, maximum 3 houses per lot)
- Chance cards introduced (red pack) with quotations from Thomas Jefferson, John Ruskin, and Andrew Carnegie
- Speculation space added with a bidding and gambling mechanic
- Auction mechanic introduced for lot purchasing
- Railroad monopoly pricing: 2 railroads owned = $10 fare, 3 = $20, 4 = $50
- Municipal Cinch rule: owning both franchise spaces raises franchise rates to $25
- Trust rule: two players owning all railroads may pool and charge $40
- Taxes on Absolute Necessities raised to $10 (was $5 in 1904 patent)
- Jail rule clarified: maximum 3 turns missed if player has sufficient property
- Section rent doubling: when all lots between two railroads each have at least 1 house, land rent in that section doubles
- Tax escalation: 10 houses on board doubles taxes to $20; 25 or more houses raises taxes to $40
- Education and Professor cards added (Single Tax mode only)

</div>

<div class="section">

## Equipment

### 1904 Patent edition

| Item | Notes |
|---|---|
| Board | 40-space circular track |
| Dice | Four pairs; four shaking boxes |
| Playing pieces | Four checkers, one per player |
| Lot tickets | 22 total; each player draws until 12 total taken at start |
| Money | $500 starting cash per player |
| Deeds | Title to purchasable lot spaces |
| Notes | Bank mortgage instruments ($100 increments; $5 interest per wages receipt) |
| Individual mortgages | Player-to-player loan instruments |
| Bank mortgages | Bank-issued loan instruments |
| Charters | Placed on franchise spaces by first player to stop there |
| Legacies | Received when landing on a Legacy space ($100 cash + ticket) |
| Luxury tickets | Purchased for $50; worth $60 at end of game |

Four boxes in the centre: **Bank**, **Wages**, **Public Treasury**, **Railroad**.

### 1906 Commercial edition additions

- Houses (up to 3 per lot; $10 rent per house per player stopping there)
- Chance cards (red pack)
- Starting cash varies by player count: $600 (2 players), $500 (3 players), $400 (4 players)

</div>

<div class="section variant-hub">

## Variant Library

The Landlord's Game spans over a century of editions, from Elizabeth Magie's 1904 patent to the Quaker community versions that became the direct ancestor of Monopoly. This library documents five historically significant rulesets — from the austere patent original to Magie's intended Prosperity mode to the pedagogical Monarch of the World demonstration.

This library includes {{variant_count}} variants.

<div class="variant-grid">

- [1904 Original](variants/1904-original/) — The pure patent ruleset: lot tickets drawn at start, 5 circuits to complete, luxury tickets
- [1906 Commercial Edition](variants/1906-commercial/) — Houses, Chance cards, auctions, railroad monopoly pricing, Speculation space
- [Single Tax](variants/single-tax/) — Mid-game voting switch; land rents fund progressive public ownership of utilities and railroads
- [Prosperity](variants/prosperity/) — Collective win: the poorest player must double their starting wealth while no player goes bankrupt
- [Monarch of the World](variants/monarch-of-the-world/) — Demonstration proving Magie's thesis: one player holds all land; they win despite holding no wages

</div>

</div>

<div class="section">

## Board Data

Machine-readable JSON containing the complete board layout for all three editions (1904, 1906, 1932). Every space with its position, name, type, price, and rent. Used for diagram generation by moddable-engine.

- [boards.json](../../games/landlords-game/data/boards.json)

</div>

<div class="section">

## Attribution

The Landlord's Game. Designed by Elizabeth J. Magie. Original patent: US748626, granted 5 January 1904, expired 1921. Public domain. Sources: US Patent 748,626 (public domain); Wikipedia: The Landlord's Game (CC-BY-SA); landlordsgame.info (transcriptions of original patent and 1906 rulebook).

</div>
