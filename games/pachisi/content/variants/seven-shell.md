---
title: Seven-Shell Pachisi
slug: seven-shell
board: Cross-shaped cloth board
players: "2–4"
parent: pachisi
order: 3
win: Move all pieces home before your opponents
special: Uses seven cowrie shells with named throw values. Higher potential scores than the standard six-shell form.
engine:
  topology:
    type: track
    positions: 68
  players: [red, yellow, green, blue]
  setup: "home:4Y,home:4G,home:4R,home:4B"
---

## Seven-Shell Pachisi

A documented variant of Pachisi played with seven cowrie shells rather than six. Each throw value carries a traditional Hindi name. The seven-shell system produces a different probability distribution and enables higher-scoring throws, with a maximum of 35 (Paintees) compared to 25 in the standard game.

{{svg:pachisi-board.svg "Pachisi — cross-shaped board layout with Charkoni and castle squares"}}

### Seven-Shell Throw Table

Seven cowrie shells are thrown together. The number of shells landing with the mouth (opening) facing up determines the move value:

| Mouths up | Traditional name | Move value | Grace (extra throw)? |
|-----------|-----------------|------------|----------------------|
| 0 | Sat | 7 | Yes |
| 1 | Dus | 10 | Yes |
| 2 | Dooga | 2 | No |
| 3 | Teeni | 3 | No |
| 4 | Chari | 4 | No |
| 5 | Pachees | 25 | Yes |
| 6 | Paintees | 35 | Yes |
| 7 | Chaudah | 14 | Yes |

**Grace:** A grace throw is earned on results of 0, 1, 5, 6, or 7 mouths up.

### Rules

All other rules are identical to [Standard Pachisi](standard/): the board layout, castle squares, Charkoni, movement path, capture mechanics, and winning condition are unchanged. Only the randomisation system differs.

### Attribution

Seven-Shell Pachisi. Public domain. Throw table from Wikipedia (CC-BY-SA), Pachisi article, seven-cowrie variant section.
