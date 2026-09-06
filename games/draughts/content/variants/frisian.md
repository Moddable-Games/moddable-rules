---
playable: true
title: Frisian Draughts
slug: frisian
board: "10×10"
players: "2"
parent: draughts
order: 4
win: Capture or block all opponent pieces
special: "Movement is diagonal only; capture is in all 8 directions. Maximal capture is weighted, not counted: a king is worth more than a man but less than two men. A king may make at most 3 consecutive non-capturing moves while its owner still has a man."
verified:
  date: "2026-08-31"
  method: "Desktop web research against the sources below; every rule statement in this file is traceable to one of them."
  sources:
    - "https://en.wikipedia.org/wiki/Frisian_draughts"
    - "https://www.friesdammen.nl/documenten/Frisiandraughts-briefmanual.pdf (Frisian draughts federation)"
    - "https://esportscommentator.blogspot.com/2017/02/official-rules-for-frisian-draughts-2011.html (Official Rules for Frisian Draughts, 2011)"
    - "https://lidraughts.org/variant/frisian"
    - "https://mats-winther.github.io/bg/frisian.htm"
  decisions:
    - "Multi-king capture value uses the federation's non-linear scale, value(n kings) = 2n - 0.5, so two kings are worth 3.5 men. Wikipedia states a flat 1.5 per king (2 kings = 3.0) and playstrategy.org uses 199/100 (2 kings = 3.98). The three agree only for a single king. The Frisian federation's own manual is taken as authoritative over both."
    - "King movement is diagonal only. mindsports.nl states that a Frisian king may also move orthogonally; this is contradicted by the 2011 Official Rules article 9 and by the federation manual, and is not followed."
  unverified:
    - "The explicit win and draw conditions. No source consulted states them in terms that could be quoted; the win condition below is inherited from International Draughts and should be confirmed before it is relied on."
    - "Whether a man that passes over the back rank mid-capture, without ending there, promotes. The federation manual explicitly marks this as not covered."
    - "The tie-break when two kings, or two men, each offer capture sequences of equal value."
engine:
  topology:
    type: grid
    rows: 10
    cols: 10
  players: [white, black]
  plugins:
    draughts:
      # Movement stays on the diagonals; capture runs in all eight directions,
      # for men and kings alike. The two direction sets are the whole variant.
      directions: diagonal
      captureDirections: all
      manCapture: all
      flyingKings: true
      forcedCapture: true
      # A king is worth more than a man and less than two: 2n - 0.5 for n kings,
      # added to the men. Two men and a king beats three men.
      maximalCapture: weighted
      majorityPrefersKing: true
      removeImmediately: false
      piecesPerPlayer: 20
      # The same king may not make a fourth consecutive non-capturing move while
      # its owner still has a man.
      kingMoveLimit: 3
  setup: "1b1b1b1b1b/b1b1b1b1b1/1b1b1b1b1b/b1b1b1b1b1/10/10/1w1w1w1w1w/w1w1w1w1w1/1w1w1w1w1w/w1w1w1w1w1"
---

## Frisian Draughts

International Draughts with one radical addition: pieces capture orthogonally as well as diagonally, taking capture directions from four to eight. Originating in Friesland, it has its own World Championship and is recognised by the World Draughts Federation.

{{svg:frisian-board.svg "Frisian Draughts — starting position"}}

### Setup

10×10 board, play on the dark squares, numbered 1 to 50. Twenty men per player: black on squares 1 to 20, white on squares 31 to 50 — the four rows nearest each player.

**First move:** White.

### Movement

Movement and capture are governed by different direction sets, and this is the most commonly mistaken part of the game.

- **A man moves one square diagonally forward**, with a choice of no more than two directions.
- **A king moves along the diagonals only**, any distance across unoccupied squares, with a choice of no more than four directions. It is a flying king, but it does not move orthogonally.

Orthogonal travel is available when capturing, and at no other time.

### Capture

Capture is compulsory. A capture is available whenever three consecutive squares, **in any of the eight directions**, hold your own piece, then an enemy piece, then an empty square.

- **Men capture in all eight directions** — diagonally and orthogonally, forwards and backwards.
- **Kings capture in all eight directions** at range: king, then any number of empty squares, then an enemy piece, then an empty square.
- **After capturing a man, a king may come to rest on any empty square beyond it**, and may then continue the sequence in another direction.
- **A piece may not be jumped twice** in one sequence. A square may be passed over more than once, but the same enemy piece may not.
- **Captured pieces are removed only when the whole sequence is complete.** They remain on the board during the sequence, where they continue to block.

### The weighted majority rule

A player must play the sequence of **highest value**, and value is not a count of pieces.

> A king is worth more than a man, but less than two men.

The federation's scale is non-linear once more than one king is involved:

| Kings captured | Value in men |
|---|---|
| 1 | 1½ |
| 2 | 3½ |
| 3 | 5½ |

That is, *value(n kings) = 2n − ½*, added to the number of men captured. A sequence taking two men and a king is worth 3½ and beats a sequence taking three men.

**Equal value: the king must capture.** If a man and a king can each play a sequence of equal value, the sequence must be played with the king.

### The three-move king limit

While a player still has at least one man, **the same king may not make more than three consecutive non-capturing moves.**

A fourth such move by that king is illegal. The king is released by making a capture, or by its owner moving any other piece. The restriction does not apply at all to a player who has only kings left.

### Promotion

A man that ends its move on the back rank is promoted to king.

### Winning

A player wins when the opponent has no legal move: all pieces captured, or all pieces blocked. *(Inherited from International Draughts — see `verified.unverified` above.)*

### Strategy

Orthogonal capture makes safety on the diagonal an illusion, and the weighted majority rule means a defender can sometimes force an unfavourable exchange by making the larger capture the compulsory one. The three-move limit exists to stop aimless king manoeuvring and forces decisive play in the endgame.

### Attribution

Traditional variant from Friesland, Netherlands. Public domain. Recognised by the World Draughts Federation (FMJD), which publishes the Official Rules for Frisian Draughts (2011).
