---
title: Block Dominoes
slug: block
board: "none"
players: "2–4"
parent: double-six-dominoes
win: "First to empty hand, or lowest pip count if game blocks"
order: 1
special: "The foundational domino game — match ends, no boneyard draws. If no one can play, the player with lowest pip count wins."
engine:
  components:
    tiles: double6
    boneyard: false
  topology:
    type: tableau
    layout: radial
  deal:
    minPlayers: 2
    maxPlayers: 4
    defaultPlayers: 2
    perPlayer: 7
    community: 0
    remainder: boneyard
published: true
---

## Block Dominoes

The simplest Western domino game and the foundation for all others. Players match tiles end-to-end to extend a chain. No drawing from the boneyard — if you cannot play, you pass. First to empty their hand wins.

{{svg:block-board.svg "Block Dominoes — table layout"}}

### Setup

Shuffle all 28 tiles face-down.

- **2 players:** draw 7 tiles each
- **3–4 players:** draw 5 tiles each

Remaining tiles are set aside face-down (not used in Block — no boneyard draws).

### Starting

The player with the **highest double** plays it first. If no player holds a double, the player with the highest single tile starts. That tile becomes the first piece of the chain.

### Turn Structure

On your turn, you must play one tile from your hand by matching one of its halves to an **open end** of the chain. The matching pip value must connect.

- **Doubles** are placed perpendicular to the chain (crosswise) and both ends remain open.
- If you **cannot play**, you pass. You may not draw.

### Winning

**Go out:** first player to play their last tile wins. They score the total pip count of all tiles remaining in opponents’ hands.

**Blocked game:** if no player can play and no one has gone out, all players reveal their hands. The player with the **lowest pip total** wins, and scores the pip totals of all other players minus their own.

### Attribution

Block Dominoes. Traditional game, public domain. Source: Pagat.com *(Domino games)*; Wikipedia *(Dominoes)*.
