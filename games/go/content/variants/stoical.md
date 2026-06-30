---
title: Stoical Go
slug: stoical
board: "19×19"
players: "2"
parent: go
order: 11
win: Most territory at game end
special: Cannot capture if opponent captured last turn. Forces restraint and patience.
engine:
  topology:
    type: grid
    rows: 19
    cols: 19
  players: [black, white]
---

## Stoical Go

A single rule addition transforms the game: you cannot capture opponent stones on any turn immediately following a turn where your opponent captured your stones. This forced restraint prevents immediate retaliation and creates a rhythm of attack and recovery unique to this variant.

{{svg:go-19x19-board.svg "Stoical Go — standard board"}}

### Setup

Standard 19×19 board (or any size). Board starts empty. Black plays first. Standard komi.

### Rules

All standard Go rules apply, with one addition:

- **Stoical restriction:** If your opponent captured one or more of your stones on their last turn, you may NOT make a capture on your next turn. You must play a non-capturing move (or pass).
- **Delayed response:** The restriction lasts only one turn. On your following turn, you may capture normally again.
- **Ko interaction:** The stoical restriction is separate from the ko rule. Both apply independently.

### Scoring

Standard scoring (area or territory). Standard komi.

### Strategy

The stoical restriction eliminates the back-and-forth capture exchanges that define much of standard Go tactics. When your opponent captures, you cannot immediately recapture or launch a counter-capture — you must wait a full turn. This means:

- Attacks become more committal. Once you capture, your opponent gets a free "safe" turn.
- Defence becomes stronger. A player under attack knows that after losing stones, they get one turn of guaranteed safety.
- Ko fights change dramatically. The usual ko threat/response cycle is disrupted by the stoical restriction.

### Attribution

Modern variant. Public domain. Source: Sensei's Library.
