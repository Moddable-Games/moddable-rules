---
title: American Mahjong (Classic)
slug: american-classic
board: none
players: "4"
parent: mahjong
win: Complete a valid hand and declare Mahjong before any other player
order: 5
special: "The Babcock-era form of American Mahjong, standardised 1920–1935. 152 tiles including 8 jokers. Defines the Charleston passing ritual and joker mechanics that distinguish American Mahjong from all other variants. Winning hands use fixed classical pattern structure rather than the annually-changing NMJL card."
engine:
  players: [east, south, west, north]
  components:
    tiles:
      suits: [characters, bamboo, circles]
      honours: [winds, dragons]
      bonus: [flowers, seasons]
      jokers: 8
      total: 152
published: false
---

## American Mahjong (Classic)

American Mahjong is the distinctly American adaptation of Chinese Mahjong, shaped by a specific chain of people and events between 1920 and 1937. Joseph Park Babcock, a Standard Oil representative in Shanghai, began importing Mahjong sets to the United States in large numbers around 1920 and wrote simplified English rules — the **Red Book** — to make the game accessible to American players.

The 1920s saw a nationwide Mahjong craze. By the mid-1920s, so many regional variations had developed that the **1924 Standardization Committee** consolidated the *American Official Laws of Mah-Jongg*. The National Mah Jongg League published its own *Official American Rules* in 1935. Both sources form the basis of this Classic variant.

In 1937, the NMJL introduced its annually-changing scorecard of winning hands, which has defined modern American Mahjong ever since. **American Mahjong (Classic)** preserves the pre-card-era game: the same 152-tile set, the same Charleston, the same joker rules — but with fixed classical hand patterns rather than a subscription card.

---

### The Tile Set (152 tiles)

| Category | Tiles | Detail |
|---|---|---|
| Dots (Circles) | 36 | Ranks 1–9, 4 tiles each |
| Bamboo (Bams) | 36 | Ranks 1–9, 4 tiles each; the 1-Bam tile traditionally shows a crane |
| Characters (Craks) | 36 | Ranks 1–9, 4 tiles each |
| Winds | 16 | East/South/West/North, 4 each |
| Dragons | 12 | Red (中), Green (發), White (白/Soap), 4 each |
| Flowers | 4 | Plum, Orchid, Chrysanthemum, Bamboo (numbered 1–4) |
| Seasons | 4 | Spring, Summer, Autumn, Winter (numbered 1–4) |
| Jokers | 8 | Wild; may substitute for any tile in a meld |
| **Total** | **152** | |

American Mahjong sets are identified by Arabic numerals on all tiles and English letters for wind direction (E/S/W/N).

---

### Melds and Tile Groups

| Group | Tiles | Notes |
|---|---|---|
| Pair | 2 identical | Cannot include a joker |
| Pung | 3 identical | May include jokers |
| Kong | 4 identical | May include jokers |
| Quint | 5 identical | Requires jokers |
| Sextet | 6 identical | Requires jokers |
| Sequence | 3+ consecutive, same suit | May include jokers |

---

### Jokers

Jokers are wild and may substitute for any tile within a pung, kong, quint, sextet, or sequence. Restrictions:
- A joker **cannot** be used in a pair
- A joker **cannot** be passed during the Charleston
- Any player on their own turn may **exchange** a real matching tile for a joker in an exposed meld, taking the joker into their hand

---

### Setup

1. Shuffle all 152 tiles face-down. Each player builds a row of **19 tiles stacked two high** (38 tiles per wall section, 152 total forming a square wall)
2. Roll dice to determine **East** (dealer). East rolls again to find the **break point** in the wall
3. Deal clockwise from the break point: each player draws **13 tiles**; East draws **14**
4. Tiles are held upright on a rack, hidden from opponents

---

### The Charleston

The Charleston is the defining pre-game ritual of American Mahjong, conducted before the first discard. It does not exist in any Asian Mahjong variant.

**First Charleston:**

| Pass | Direction | Notes |
|---|---|---|
| 1st | Right | Each player passes 3 unwanted tiles face-down to the right |
| 2nd | Across | Each player passes 3 unwanted tiles face-down to the player opposite |
| 3rd | Left | Each player passes 3 unwanted tiles face-down to the left; blind pass permitted |

**Blind pass:** On the third pass of each Charleston, a player may take 1, 2, or 3 of the tiles just received and pass them on without looking at them.

**Second Charleston (optional):** If all four players agree, a second Charleston proceeds in reverse: Left → Across → Right. The same blind pass rule applies to the last pass.

**Courtesy Pass (optional):** After the Charleston(s), players may agree to exchange 0–3 tiles with the player across. Both must agree on the number before passing. No blind tiles.

---

### Gameplay

East discards a tile face-up to start play. Thereafter play proceeds clockwise.

**On your turn:**
1. **Draw** the top tile from the wall
2. **Discard** one tile from your hand face-up to the centre, or declare **Mahjong** if your hand is complete

**Claiming a discard:** Any player may claim the most recent discard (before the next player draws) to complete a meld or declare Mahjong. Announce the claim, take the tile, expose the completed meld on the rack, and discard. Mahjong claim takes priority over all other claims.

Discards may only be claimed to complete an exposed meld or declare Mahjong — not to draw ahead in sequence.

---

### Flowers and Seasons

Flowers and Seasons are bonus tiles. When drawn, place the tile face-up on the rack and draw a replacement from the **dead wall** (the reserved end tiles). They score bonus points and are not part of the hand structure.

---

### Winning

A player wins by declaring Mahjong with a complete valid hand.

**Standard hand:** 4 melds + 1 pair = 14 tiles (plus any declared kongs).

**Classic Special Hands:**

| Hand | Description |
|---|---|
| All Pungs | Four pungs + one pair; no sequences |
| All Sequences | Four sequences + one pair; no pungs |
| All One Suit | Entire hand (excluding honours) in a single suit |
| Honour Hand | Hand composed entirely of winds and dragons |
| Mixed Honour | One suit plus winds and/or dragons |
| All Green | 2, 3, 4, 6, 8 Bamboo and Green Dragon only |
| Nine Gates | 1-1-1-2-3-4-5-6-7-8-9-9-9 in one suit + any tile of that suit |

---

### Scoring

The winning player collects from all three opponents. The player whose discard completes a winning hand pays double.

| Element | Points |
|---|---|
| Winning (base) | 20 |
| Self-draw win | +10 |
| Each pung of simples (2–8) | +2 |
| Each pung of terminals/honours | +4 |
| Each kong (exposed) | ×2 on pung value |
| Each kong (concealed) | ×4 on pung value |
| Matching flower/season | +4 |
| All Pungs hand | ×2 multiplier |
| All One Suit hand | ×4 multiplier |
| Fully concealed hand | ×2 multiplier |

Minimum to win: **25 points**.

---

### End of Hand

If all wall tiles are drawn without a Mahjong declaration, the hand is a **draw** (goulash) — no points are exchanged. East retains the deal on a draw; otherwise the deal passes left.

---

### Attribution

Sources (all public domain):
- Joseph Park Babcock, *Babcock's Rules for Mah-Jongg: The Red Book of Rules* (1920, revised 1923)
- 1924 Standardization Committee, *American Official Laws of Mah-Jongg*
- NMJL, *Official American Rules* (1935, pre-card era)
