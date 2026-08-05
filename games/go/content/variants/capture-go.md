---
title: Capture Go
slug: capture-go
board: "9×9"
players: "2"
parent: go
order: 9
win: First capture wins
special: First player to capture any stone wins. No territory scoring. The universal teaching variant.
engine:
  topology:
    type: grid
    rows: 9
    cols: 9
    layout: intersections
  players: [black, white]
  setup: ""
  plugins:
    go:
      komi: 0
      scoring: "capture"
      captureTarget: 1
      allowPass: false
      superko: false
---

## Capture Go

The first player to capture any opponent stone wins immediately. No territory counting, no endgame, no passing. Also known as Atari Go. The universal introduction to Go for beginners, teaching the fundamental mechanics of liberties and capture without the complexity of territory evaluation.

{{svg:9x9-board.svg "Capture Go — typically played on 9×9"}}

### Setup

**Board:** Any size. 9×9 is standard for Capture Go; 7×7 or 5×5 for absolute beginners.

**Stones:** Standard Go stones.

**First move:** Black plays first. No komi.

### Rules

- **Placement:** Standard — one stone per turn on any empty intersection.
- **Liberties and groups:** Identical to standard Go.
- **Winning:** The first player to capture one or more opponent stones wins immediately. The game ends the moment a capture occurs.
- **No passing:** Players may not pass (the game must end in a capture, not a territory count).
- **Ko:** Standard ko rule applies.
- **Suicide:** Forbidden.

### Draws

If the board fills completely with no captures (extremely rare on standard sizes), the game is a draw.

### Strategy

Capture Go teaches the tactical fundamentals of Go: recognising atari (one liberty remaining), defending groups by extending liberties, attacking by reducing enemy liberties, and creating ladder (shicho) and net (geta) captures. Advanced Capture Go on 9×9 between experienced players becomes a tense dance of mutual threats where neither player wants to create the first vulnerability.

### Attribution

Teaching variant used worldwide. Public domain. Recommended by all major Go federations as an introductory format. Source: Sensei's Library.
