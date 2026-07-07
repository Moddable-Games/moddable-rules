---
title: FreeCell
slug: freecell
board: none
players: "1"
parent: standard-52
win: Move all 52 cards to the four foundation piles (Ace through King by suit)
special: "Solitaire variant where all 52 cards are visible from the start — no hidden cards. Four free cells provide temporary storage. Nearly all deals are solvable with correct play, making FreeCell a game of planning and skill rather than luck."
published: false
---

## FreeCell

FreeCell is a solitaire card game where all 52 cards are dealt face-up at the start. Because every card is visible, almost every deal is solvable with optimal play. The game rewards careful planning over multiple moves.

### Layout

Deal all 52 cards face-up into **8 tableau columns**:
- Columns 1–4: 7 cards each (28 cards)
- Columns 5–8: 6 cards each (24 cards)

Leave space for:
- **4 free cells** (top left): single-card temporary storage, empty at start
- **4 foundations** (top right): one per suit, empty at start

### Foundations

Build each foundation up by suit from Ace to King (A→2→3→…→K). Cards moved to a foundation may not be moved back.

### Tableau Play

Only the **bottom card** of each column is available to move. A card may be moved to:
- A **tableau column** if it is one rank lower and opposite colour (red on black, black on red)
- A **free cell** (one card per free cell, any card)
- A **foundation** if it is the correct next card for that suit

A card in a free cell may be moved to a tableau column (following the colour/rank rule), to a foundation, or to an empty column.

Any card may be moved to an **empty tableau column**.

### Supermove

A sequence of cards in alternating colour and descending rank may be moved as a unit if there is enough free space. Maximum cards movable as a unit = (free cells available + 1) × 2^(empty tableau columns). Most software handles this automatically.

### Winning

All 52 cards moved to the four foundations (each built from Ace to King by suit). The game is lost when no legal moves remain.
