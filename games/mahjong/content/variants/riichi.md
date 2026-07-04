---
title: Riichi Mahjong
slug: riichi
board: "none"
players: "4"
parent: mahjong
win: "Complete a valid hand with at least one yaku"
special: "Japanese Mahjong. 136 tiles, no bonus tiles. Yaku requirement to win. Riichi declaration locks the hand. Furiten prevents discarded-tile wins. Han and fu scoring."
engine:
  players: [east, south, west, north]
  components:
    tiles:
      suits: [characters, bamboo, circles]
      honours: [winds, dragons]
      total: 136
published: false
---

## Riichi Mahjong

The Japanese national form of Mahjong. Played with 136 tiles (no flower or season bonus tiles). Introduces the Riichi declaration, the Furiten rule, yaku requirements, and a precise han-plus-fu scoring system with named limit hands.

### Key Differences from Hong Kong

| Rule | Hong Kong | Riichi |
|------|-----------|--------|
| Tiles | 144 (with flowers/seasons) | 136 (no bonus tiles) |
| Win requirement | 3 faan minimum | At least one yaku |
| Hand locking | None | Riichi declaration locks the hand |
| Furiten | No | Yes (cannot win on a discard if your winning tile is in your discard pile) |
| Scoring | Faan table | Han + fu, with named limits |
| Dora | None | Yes (revealed indicator tiles grant bonus han) |

### Yaku

A yaku is a scoring pattern. A hand must contain at least one yaku to win. Common yaku include:

| Yaku | Han (open / closed) | Description |
|------|---------------------|-------------|
| Riichi | — / 1 | Closed tenpai hand with Riichi declaration |
| Tanyao | 1 / 1 | All simples (tiles 2–8 only, no terminals or honours) |
| Pinfu | — / 1 | All sequences, non-pair wait, non-yakuhai pair |
| Iipeiko | — / 1 | Two identical sequences |
| Yakuhai | 1 / 1 | A Pong of seat wind, round wind, or dragon |
| Chiitoi | — / 2 | Seven pairs |
| Honitsu | 2 / 3 | Half flush (one suit + honours) |
| Chinitsu | 5 / 6 | Full flush (one suit only) |

### Riichi

A player with a closed (no open melds) tenpai hand (one tile from winning) may declare Riichi by placing a 1,000-point stake in the centre. After declaring:

- The hand is locked; no tile swaps are permitted.
- Any tile drawn from the wall may be used to win.
- Uradora (hidden bonus tiles) are revealed if the player wins.
- The 1,000-point stake goes to the winner of the hand.

### Dora

Dora tiles are bonus tiles that add one han each. The dora indicator is revealed at the start of the hand; the dora is the next tile in sequence (e.g., indicator = 3 Bamboo means dora = 4 Bamboo; indicator = 9 means dora = 1 of the same suit; indicator = North wind means dora = East).

Uradora (secret dora): revealed only when a Riichi player wins. One uradora indicator is revealed per Kong declared during the hand.

Akadora (red fives): in some games, one or more of each 5-tile are red; each red five held contributes 1 han.

### Furiten

A player is in Furiten if any of their winning tiles appears in their own discard pile. A player in Furiten:

- Cannot win on another player's discard.
- Can still win by self-draw (Tsumo).

Furiten clears when the player draws a winning tile and discards it (temporary furiten) or when they declare Riichi with a hand not in furiten.

### Scoring

Hand value is determined by han (from yaku and dora) and fu (from hand structure: meld types, wait type, pairs). The han-fu table produces a point value. Named limits apply at high han counts:

| Limit | Han threshold | Value |
|-------|---------------|-------|
| Mangan | 5 han (or 4 han at 30+ fu, 3 han at 70+ fu) | 8,000 (dealer 12,000) |
| Haneman | 6–7 han | 12,000 (dealer 18,000) |
| Baiman | 8–10 han | 16,000 (dealer 24,000) |
| Sanbaiman | 11–12 han | 24,000 (dealer 36,000) |
| Yakuman | 13+ han, or special hands | 32,000 (dealer 48,000) |

**Ron** (win on discard): discarder pays the full amount.
**Tsumo** (self-draw): all three opponents pay equal shares (dealer pays double the others' share).

### Abortive Draws

A hand may end in an abortive draw (no winner) under these conditions: nine unique terminals and honours dealt to one player on the first draw (by declaration), four Kongs declared without the same player winning, all four players discard the same wind on the first go-round, or exhaustion of the wall without a winner.

### Attribution

Riichi Mahjong. Traditional game with Japanese rules codified in the 20th century. Source: Wikipedia *(Japanese Mahjong)*. Public domain rules.
