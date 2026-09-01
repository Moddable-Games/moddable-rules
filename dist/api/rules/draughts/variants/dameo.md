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