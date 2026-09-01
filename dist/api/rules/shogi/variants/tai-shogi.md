## Tai Shogi

{{svg:tai-shogi-board.svg "Tai Shogi — starting position"}}

Tai Shogi (大将棋, *Grand Chess*) is a historical Japanese Shogi variant played on a 25×25 board (625 squares) with approximately 177 piece types per side (354 pieces total). It occupies the scale tier between **Maka-Dai-Dai Shogi** (19×19, ~96 piece types) and **Taikyoku Shogi** (36×36, 402 piece types). Tai Shogi holds the distinction of being the largest chess variant with **fully documented and verified movement rules** for every piece.

No game record of Tai Shogi being played to completion has survived. Whether it was ever genuinely played at this scale is uncertain.

### The Board

25×25 grid (625 squares). Standard Shogi orientation: Sente (First Player) at the bottom, Gote (Second Player) at the top.

Each player's pieces span approximately the first 12 ranks from their side, with several ranks of empty space in the centre.

### Scale

| Dimension | Value |
|---|---|
| Board | 25×25 (625 squares) |
| Pieces per side | ~177 piece types |
| Total pieces | ~354 (both sides combined) |
| Board coverage (start) | Each player occupies roughly 12 ranks |

### Piece Set

Tai Shogi includes all pieces found in Maka-Dai-Dai Shogi (19×19) plus many additional types unique to this scale. Piece categories include:

- All standard Shogi pieces and their promoted forms
- All Chu Shogi additions (including Lion power pieces)
- Additional pieces from Dai Shogi, Taikyoku-Dai Shogi, and larger variants
- Pieces with unique movement patterns documented only in Tai Shogi and Taikyoku
- Ultra-powerful pieces: pieces that can reach any square in a direction without stopping
- Contagious-promotion pieces (as in Maka-Dai-Dai: Teaching King, Buddhist Spirit)

### Royals

- **King** — royal; does not promote
- **Crown Prince** (promoted Drunk Elephant) — royal once promoted

Win: capture the opponent's sole remaining Emperor or Prince. Because the Drunken Elephant also promotes to Prince, as many as three royal pieces may need capturing. While a player holds more than one royal there is no check obligation; royals are simply capturable.

### Promotion

- There are **no promotion zones**. Promotion is compulsory, at the end of a piece's first capturing move
- This needs a per-piece "has captured" flag persisting across turns, since the trigger is the piece's first capture rather than anything readable from the position
- Promotion resolves at **end of turn**, not at the moment of capture. A Lion capturing twice makes both captures unpromoted and promotes once, afterwards. An engine promoting mid-move gets this wrong
- No drops — captured pieces are permanently removed from play
- Each piece has a fixed promoted form

### General Movement Categories

Pieces in Tai Shogi fall into these broad movement categories:
- **Generals:** steppers that move 1 square in limited directions (Gold, Silver, Copper, Iron, Stone, Tile, Elephant, Earth generals)
- **Riders:** unlimited sliders (Rook, Bishop, Lance, Reverse Chariot, Side Mover, Vertical Mover)
- **Hoppers:** leap over intervening pieces (Knight, Kirin, Phoenix)
- **Lion-power pieces:** take two moves per turn; may capture twice; may pass
- **Lion Dog class:** up to 3 steps along any ray
- **Ultra-powerful sliders:** can turn corners in their path (Hook Mover, Capricorn)
- **Universal leaper** (Emperor): jumps to any empty square, may jump to and capture any non-royal piece anywhere, and may capture a royal only if that royal is unprotected. The `(U)` in the source is a page-local shorthand for this, not a Betza atom

### Historical Context

Tai Shogi is documented in historical Japanese manuscripts alongside the other large Shogi variants. The chessvariants.com entry for Tai Shogi links only to an external Japanese-language source (the shogi.net documentation). Murray's *A History of Chess* covers the Shogi variant family including large games in this scale range.

The game represents the theoretical maximum scale at which complete move documentation was maintained in historical records. Taikyoku Shogi (36×36) exceeds it in scale but is documented in only one known manuscript.

### Attribution

Tai Shogi is documented in historical Japanese manuscripts. English documentation is limited; the primary Japanese-language source is referenced via chessvariants.com/link/TaiShogi.