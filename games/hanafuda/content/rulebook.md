---
title: "Hanafuda"
version: "0.1.0"
slug: "hanafuda"
players: "2–4"
duration: "15–60 min"
age: "10+"
tagline: "Japanese flower cards: match the months, score the patterns"
type: "game"
status: "alpha"
updated: "2026-07-03"
published: true
variants: true
theme:
  surface: light
  tint: warm
  texture: none
  cover: cosmic
  typography: modern
  accent: red
  section-divider: "♥"
---

<div class="section variant-hub">

## Hanafuda

A Japanese playing card game using a deck of 48 cards divided into 12 suits, one for each month of the year. Each suit depicts a seasonal flower or plant. Players match cards by suit and collect them to score points through named patterns called yaku.

The deck is also the foundation for Oicho-Kabu, a betting game using the cards' month values rather than their imagery.

### The 48-Card Deck

The deck has 12 suits of 4 cards each. Within each suit, cards are ranked by type: Bright → Animal → Ribbon → Plain.

| Month | Suit (Flower) | Bright | Animal | Ribbon | Plains |
|-------|--------------|--------|--------|--------|--------|
| January | Pine | Crane + Sun | — | Red Poetry | 2 |
| February | Plum Blossom | — | Bush Warbler | Red Poetry | 2 |
| March | Cherry Blossom | Cherry Curtain | — | Red Poetry | 2 |
| April | Wisteria | — | Cuckoo | Red | 2 |
| May | Iris | — | Bridge | Red | 2 |
| June | Peony | — | Butterflies | Blue | 2 |
| July | Bush Clover | — | Boar | Red | 2 |
| August | Pampas Grass | Full Moon | Geese | — | 2 |
| September | Chrysanthemum | — | Sake Cup | Blue | 2 |
| October | Maple | — | Deer | Blue | 2 |
| November | Willow | Rain Man | Swallow | Lightning | 1 |
| December | Paulownia | Phoenix | — | — | 3 |

**Totals:** 5 Brights, 9 Animals, 10 Ribbons, 24 Plains = 48 cards.

**Ribbon types:**
- **Red Poetry (Akatan):** Pine, Plum, Cherry — marked with *shi-ku-ku* calligraphy
- **Plain Red:** Wisteria, Iris, Bush Clover
- **Blue (Aotan):** Peony, Chrysanthemum, Maple — marked with *ki-ri-su* calligraphy
- **Lightning (special):** Willow (November)

**Card identifier system:** Each card is identified as `{Month}-{Type}`, e.g. `Jan-Bright`, `Jun-Animal`, `Sep-Animal` (the Sake Cup), `Nov-Bright` (the Rain Man). Plains are numbered: `Aug-Plain-1`, `Aug-Plain-2`.

<div class="variant-grid">

- [Koi-Koi](variants/koi-koi/) — The most popular two-player game. Complete a yaku, then choose to continue or declare your win.
- [Hana-Awase](variants/hana-awase/) — The base matching game. Collect cards, highest value wins.
- [Oicho-Kabu](variants/oicho-kabu/) — Betting game using the cards’ month values. Closest to 9 wins.

</div>

**Not in scope:** Go-Stop (Hwatu) — the Korean variant played with Hwatu cards uses significantly different yaku and multi-winner mechanics. Separate hub required.

</div>
