---
title: Dameo
slug: dameo
board: "8×8"
players: "2"
parent: draughts
order: 16
win: Opponent has no legal move
playable: false
special: "Phalanx movement: an unbroken line of men slides one square forward along its own axis. Men move diagonally and orthogonally forward but capture ORTHOGONALLY ONLY; kings move queenwise but capture rookwise. 18 pieces per side on all 64 squares."
verified:
  date: "2026-08-31"
  method: "Desktop web research against the sources below; every rule statement in this file is traceable to one of them."
  sources:
    - "https://www.mindsports.nl/index.php/on-the-evolution-of-draughts-variants/draughts-variants/509-dameo (Christian Freeling, the inventor)"
    - "https://mindsports.nl/index.php/arena/dameo/65-rules (Freeling)"
    - "https://en.wikipedia.org/wiki/Dameo"
    - "http://mrraow.com/uploads/AiAiReports/Dameo/Dameo.html"
  decisions:
    - "King capture is ORTHOGONAL ONLY, per Freeling's own page: kings move queenwise but capture rookwise. Wikipedia describes king movement as all eight directions and does not state the capture restriction, so a Wikipedia-only reading gives eight-directional king capture. Freeling is the inventor and is followed."
    - "A horizontal line of men cannot make a linear move. This follows from combining two sourced rules - the line moves along its own axis, and that direction must be forward - but no source states it in those words."
  unverified:
    - "Maximum phalanx length. No source states one; presumably up to 8."
    - "Whether a sub-run of a longer line may move, leaving a gap. No source addresses it."
    - "Whether a phalanx may capture as a unit. Every source describes linear movement under movement only, and capture always as a single piece jumping."
    - "Whether a man promoting mid-capture continues the chain as a king."
    - "Whether all 64 squares are used. Strongly implied by the a1-h1 starting row spanning both colours and by orthogonal capture, but never stated."
unsupported: "The phalanx move is a new move type: one move relocates a man from the rear of an unbroken forward line to the empty square beyond its head, so move generation must walk each of the three forward axes collecting same-colour runs. Separately, the engine must not reuse a diagonal capture generator here - men capture orthogonally while moving diagonally, and kings move queenwise while capturing rookwise. Majority capture is a plain count, unlike Frisian."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  setup: "bbbbbbbb/1bbbbbb1/2bbbb2/8/8/2wwww2/1wwwwww1/wwwwwwww"
---

## Dameo

Christian Freeling's 2000 redesign of draughts, built to remove the drawishness of the classical game. Two mechanics do the work: men move in **phalanxes**, so a wall of men can advance as a unit, and capture is **orthogonal** while movement is not.

{{svg:dameo-board.svg "Dameo — starting position"}}

### Setup

8×8 board, **all 64 squares in play**. Eighteen men per side in a trapezoid: the full back row a1–h1, six men on b2–g2, four on c3–f3.

### Movement

**A single man** moves one square forward — straight ahead or diagonally forward. Never sideways, never backwards.

**A line of men** moves as one. A straight unbroken line of men of the same colour may slide **one square forward along the axis it occupies**, provided the square in front of the head of the line is vacant.

The net effect on the board is easier to see than the description: the **rearmost man of the line relocates to the empty square just beyond the head**. Wikipedia describes the same rule the other way round — a man jumping over one or more adjacent friendly men in a straight line — and the two produce identical positions.

Because the move must be both along the line's own axis and forward, a **horizontal** line cannot make a linear move.

**A king** moves like a chess queen: any distance, any of the eight directions, unobstructed.

### Capture

Capture is compulsory, and it is **orthogonal for everything**.

- **A man captures** an adjacent enemy piece forwards, backwards or sideways, jumping to the empty square directly beyond. **Not diagonally.**
- **A king captures rookwise** — along a rank or file only, at any distance, jumping a single enemy piece to any empty square beyond.

So men move diagonally but cannot capture diagonally, and kings move queenwise but capture rookwise. This inversion is the most commonly mis-implemented part of the game.

**Majority capture takes precedence:** where a player has a choice of captures, the one taking the largest number of pieces must be played. Unlike Frisian Draughts, this is a **plain count** — kings and men are worth the same.

**Captured pieces are removed at the end of the turn**, not during the sequence. During a multi-jump they remain on the board.

### Promotion

A man reaching the opponent's back row is crowned king.

### Winning

A player with no legal move loses — whether through having no pieces left, or through every piece being blocked.

### Attribution

Christian Freeling, 2000. Rules published at mindsports.nl by the inventor.
