---
title: "Bavarian 32-Card Games"
short_title: "Bavarian 32"
version: "0.1.1"
slug: "bavarian-32"
players: "3"
duration: "30–60 min"
age: "12+"
tagline: "Trick-taking games for the 32-card Skat deck"
type: "component"
status: "live"
updated: "2026-07-21"
published: true
hub_type: component
how_to_play: "The 32-card German deck (Skat deck) supports 2 games: Schafkopf and Skat. Both are trick-taking games with permanent trumps and card-point scoring."
mechanics: [trick-taking, hand-management, betting, card-play]
complexity: complex
related: [standard-52, flower-48, mahjong]
theme:
  surface: light
  tint: neutral
  texture: none
  cover: minimal
  typography: classical
  accent: green
engine:
  topology:
    type: none
  surface: felt-green
  pieces:
    set: mfrasca-skat
  components:
    deck:
      type: bavarian-32
    layout:
      type: fan
  players: [south, north, east, west]
unsupported:
  _family: "No rules plugin. The 32-card Bavarian deck is declared and shipped, and nothing plays either game on it."
  schafkopf: "No plugin. The partnership is secret: the seat holding the called Ace is a partner nobody may name, and it becomes public only when that card is played. That is hidden information about who is on whose side, not about which cards are held."
  skat: "No plugin. Three seats where one plays alone against the other two, decided by an auction in game values, with a two-card skat picked up and discarded. Seats made asymmetric at run time by bidding is a shape nothing models."
---

# Bavarian 32-Card Games

This hub covers games played with the 32-card German deck, commonly called the Skat deck. The deck contains four suits — Clubs (Kreuz), Spades (Pik), Hearts (Herz), Diamonds (Karo) — each with 8 cards ranked 7, 8, 9, 10, Jack, Queen, King, Ace.

## The Deck

| Property | Value |
|---|---|
| Cards | 32 |
| Suits | Clubs, Spades, Hearts, Diamonds |
| Ranks per suit | 7, 8, 9, 10, Jack, Queen, King, Ace |
| Jokers | None |

Card point values vary by game. In Skat, the highest-value cards are Ace (11), Ten (10), King (4), Queen (3), Jack (2), with 7–9 worth zero points.

## Games

| Game | Players | Description |
|---|---|---|
| [Schafkopf](games/schafkopf/) | 4 | Bavaria’s defining card game. Permanent trumps (Obers, Unters, Hearts). Declaring side needs 61+ of 120 card points. |
| [Skat](games/skat/) | 3 | Germany’s national card game. Solo declarer bids to win against two defenders. Jacks are always top trumps. |

## Hub Notes

Future additions to this hub may include Doppelkopf (4 players, 48-card double deck) and Sheepshead (American variant of Schafkopf).
