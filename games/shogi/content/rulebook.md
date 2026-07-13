---
title: "Shogi — Official Rulebook"
version: "1.2.0"
slug: "shogi"
players: "2"
duration: "30–120 min"
age: "8+"
tagline: "Japan's classic strategy game where captured pieces change sides"
type: "classic"
status: "live"
updated: "2026-07-08"
published: true
variants: true
theme:
  tint: warm
  texture: grain
  cover: solid
  typography: classical
  accent: amber
engine:
  topology:
    type: grid
    rows: 9
    cols: 9
    layout: intersections
  render:
    cellSize: 36
    cellColor: uniform
    labels: false
    boardStyle: shogi
    decorations:
      - type: markers
        at: [[2,2],[2,6],[6,2],[6,6]]
        fill: hoshi
        size: 3
      - type: tint
        region:
          rows: [0, 2]
        color: promotionZone
      - type: tint
        region:
          rows: [6, 8]
        color: promotionZone
  pieces:
    set: kahu-shogi-kanji-red-wood
  players: [sente, gote]
---

<div class="section variant-hub">

## Variant Library

Shogi (将棋) is Japan's classic strategy board game, descended from the same chess lineage that spread across Asia before 1000 CE. The defining rule is the drop mechanic: captured pieces change allegiance and may be re-entered by the capturing player on any later turn, giving the game a dynamic character unlike any western chess variant. Ancient in origin and public domain in its mechanics, Shogi is governed competitively by the Japan Shogi Association, which holds no copyright over the game itself.

This library includes {{variant_count}} playable variants.

### Standard Form

<div class="variant-grid">

- [Standard Shogi](variants/standard/) — The full 9×9 game with drops, promotion, and the complete piece set

</div>

### Historical Forms

<div class="variant-grid">

- [Heian Shogi](variants/heian-shogi/) — Oldest documented Japanese chess (9×8 board, c. 1058 CE); precursor to modern Shogi
- [Sho Shogi](variants/sho-shogi/) — 16th-century predecessor with the Drunken Elephant and no drop rule; the Elephant promotes to Crown Prince, a second royal piece
- [Chu Shogi](variants/chu-shogi/) — 12×12 medieval Shogi with 46 pieces per side; the powerful Lion and no drops; Japan's dominant form for centuries
- [Dai Shogi](variants/dai-shogi/) — 15×15 large variant; 65 pieces per side including Lion, Kirin, Phoenix; precursor to Chu Shogi
- [Tenjiku Shogi](variants/tenjiku-shogi/) — 16×16 variant with Fire Demons that burn all adjacent enemies; hierarchical jumping generals
- [Maka-Dai-Dai Shogi](variants/maka-dai-dai-shogi/) — 19×19 with 96 pieces of 50 types per side; contagious promotion through Teaching King
- [Tai Shogi](variants/tai-shogi/) — 25×25 Grand Chess with approximately 177 piece types per side (354 pieces total)
- [Taikyoku Shogi](variants/taikyoku-shogi/) — 36×36 Ultimate Chess; 402 pieces per side (804 total); the largest documented chess variant

</div>

### Children & Introductory

<div class="variant-grid">

- [Dobutsu Shogi](variants/dobutsu/) — Animal chess on a 3×4 board designed for young children; each piece shows its moves printed on the face; a solved game

</div>

### Smaller Board Variants

<div class="variant-grid">

- [Judkins' Shogi](variants/judkins-shogi/) — 6×6 condensed Shogi retaining all piece types; fast tactical play
- [Kyoto Shogi](variants/kyoto-shogi/) — 5×5 game where every piece flips to its alternate face after each move
- [Minishogi](variants/minishogi/) — Standard Shogi condensed to a 5×5 board with five pieces per side
- [Gorogoro+](variants/gorogoro-plus/) — Shogi on a 5×6 board with no Bishop or Rook; Knight and Lance start in hand

</div>

### Larger / Thematic Variants

<div class="variant-grid">

- [Tori Shogi](variants/tori-shogi/) — Bird Shogi on a 7×7 board; two promotable pieces; repetition caused by your own moves is a loss; 8 Swallows per side
- [Wa Shogi](variants/wa-shogi/) — 11×11 board with animal-themed pieces; unique movement patterns including the Treacherous Fox
- [Yari Shogi](variants/yari-shogi/) — 9×7 Spear Shogi; Lances, Knights, and Soldiers replaced by spear-themed pieces with forward thrust

</div>

### Non-Standard Boards

<div class="variant-grid">

- [Hex Shogi 91](variants/hex-shogi-91/) — 91-hexagon board; all Shogi pieces adapted to hexagonal movement with drops
- [Sankaku Shogi](variants/sankaku-shogi/) — 44-cell triangular board; 13 pieces per side; captured pieces removed permanently

</div>

### Multiplayer

<div class="variant-grid">

- [Four Player Shogi](variants/four-player-shogi/) — Cross-shaped 189-square board; standard Shogi armies in four wings; team or individual play

</div>

### Distinctive Mechanics

<div class="variant-grid">

- [Annan Shogi](variants/annan-shogi/) — 9×9 standard setup; pieces move using the movement of the allied piece directly behind them
- [Cannon Shogi](variants/cannon-shogi/) — Standard 9×9 Shogi with four Cannon types drawn from Xiangqi and Janggi; Pawns replaced by Janggi-style Soldiers
- [Hasami Shogi](variants/hasami-shogi/) — 9×9 custodial-capture game with no drops, no promotion, and one piece type
- [Mortal Shogi](variants/mortal-shogi/) — Captured pieces demote one step in a ranking chain rather than returning to original form

</div>

</div>
