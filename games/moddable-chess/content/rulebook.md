---
title: "Moddable Chess — Official Rulebook"
version: "0.5.0"
slug: "moddable-chess"
players: "2–6"
duration: "10–120 min"
age: "10+"
tagline: "Every chess variant, one engine"
type: "platform"
status: "alpha"
updated: "2026-07-06"
published: true
variants: true
theme:
  surface: light
  tint: cool
  texture: none
  cover: cosmic
  typography: modern
  accent: blue
  section-divider: "♞"
---

<div class="section variant-hub">

## Variant Library

Moddable Chess includes {{variant_count}} playable variants spanning classic rules, asymmetric battles, hidden information, expanded boards, and alternative win conditions. Each variant has its own complete rules page.

### Standard Board (8×8)

<div class="variant-grid">

- [Standard Chess](variants/standard/) — Classic FIDE rules
- [Absorption Chess](variants/absorption/) — Capturing piece gains the victim's movement permanently
- [Andernach Chess](variants/andernach/) — Capturing piece changes colour
- [Atomic](variants/atomic/) — Captures explode adjacent pieces
- [Benedict Chess](variants/benedict/) — Attacked enemies convert colour
- [Berserk Chess](variants/berserk/) — Check grants a bonus move
- [Checkless Chess](variants/checkless/) — No check unless it is checkmate
- [Crazyhouse](variants/crazyhouse/) — Captured pieces switch sides and drop back onto the board
- [Cylinder Chess](variants/cylinder-chess/) — Files wrap, a-file connects to h-file
- [Dark Chess](variants/dark-chess/) — Only see squares your pieces occupy
- [Dice Chess](variants/dice-chess/) — Die roll constrains piece type
- [Displacement Chess](variants/displacement-chess/) — Swap positions with adjacent friendly pieces
- [Duck Chess](variants/duck-chess/) — Place a blocker duck after each move
- [Einstein Chess](variants/einstein-chess/) — Captures promote pieces, non-captures demote them
- [Extinction Chess](variants/extinction/) — Lose when any piece type is eliminated
- [Fischer Random](variants/fischer-random/) — 960 randomised starting positions
- [Fog of War](variants/fog-of-war/) — Only see squares your pieces attack
- [Grid Chess](variants/grid-chess/) — Moves must cross a 2×2 grid line
- [Hoppel-Poppel](variants/hoppel-poppel/) — Knights capture like bishops, bishops capture like knights
- [Horde Chess](variants/horde/) — 36 pawns vs a normal army
- [Immunization Chess](variants/immunization-chess/) — Captures make adjacent enemies immune for 2 turns
- [King of the Hill](variants/king-of-the-hill/) — King reaches centre = instant win
- [Madrasi Chess](variants/madrasi/) — Same-type opposing pieces paralyse each other
- [Maharaja & Sepoys](variants/maharaja/) — One super-piece vs a full army
- [Marseillais](variants/marseillais/) — Two moves per turn
- [Medusa Chess](variants/medusa-chess/) — Queen petrifies enemy pieces she attacks
- [No Castling](variants/no-castling/) — Standard chess, castling disabled
- [No Retreat](variants/no-retreat/) — Pieces cannot move backward
- [Patrol Chess](variants/patrol/) — Capture only when defended by a friendly piece
- [Poison Chess](variants/poison-chess/) — Capture squares become poisoned for 3 turns
- [Racing Kings](variants/racing-kings/) — No checks allowed, race King to rank 8
- [Recruitment Chess](variants/recruitment-chess/) — Captured pieces defect to the captor
- [Rifle Chess](variants/rifle/) — Capturing pieces stay on their square
- [Teleport Chess](variants/teleport-chess/) — 3 teleports per game to any empty square
- [Torpedo Chess](variants/torpedo/) — Pawns can always double-move
- [Toroidal Chess](variants/toroidal-chess/) — Board wraps in both directions forming a torus
- [Weak!](variants/weak/) — Weakest piece type must move first

</div>

### Multi-Move Variants

<div class="variant-grid">

- [Monster Chess](variants/monster-chess/) — White gets 2 moves, Black gets 1
- [Progressive](variants/progressive/) — Escalating moves per turn (1, 2, 3, 4...)

</div>

### Alternative Win Conditions

<div class="variant-grid">

- [Antichess](variants/antichess/) — Forced captures, lose all pieces to win
- [Chak](variants/chak/) — 9×9 Mesoamerican chess; win by checkmate or landing promoted Ajaw on the opponent’s temple square
- [Chennis](variants/chennis/) — 7×7 tennis chess; net divides the board; win by racing a Pawn to the opponent’s back rank
- [Codrus](variants/codrus/) — Lose your King to win, no check concept
- [Five-Check](variants/five-check/) — Five checks to win
- [Giveaway](variants/giveaway/) — Forced captures, lose all pieces to win (stalemate = loss)
- [Omnicide](variants/omnicide/) — Lose all pieces to win, captures NOT forced
- [Single-Check](variants/single-check/) — One check wins instantly
- [Stalemate Wins](variants/stalemate-wins/) — Stalemating your opponent wins
- [Suicide Chess](variants/suicide-chess/) — Forced captures, lose all pieces to win (stalemate = draw)
- [Three-Check](variants/three-check/) — Deliver three checks to win
- [Ultima](variants/ultima/) — Seven unique capture methods, one per piece type; win by capturing the opponent’s King. Designed by Robert Abbott, 1962

</div>

### Piece Replacement & Movement Variants

<div class="variant-grid">

- [Alice Chess](variants/alice/) — Pieces shift between two linked boards after each move; only pieces on the same board interact
- [Almost Chess](variants/almost-chess/) — One queen replaced by Chancellor (R+N)
- [Amazon Chess](variants/amazon-chess/) — Queens replaced by Amazons (Q+N)
- [Berolina Chess](variants/berolina-chess/) — Pawns move diagonally and capture straight (inverted)
- [Chigorin](variants/chigorin/) — White has 4 knights instead of bishops
- [Grasshopper Chess](variants/grasshopper/) — Adds the Grasshopper: must hop over exactly one piece and land immediately beyond it
- [Knightmate](variants/knightmate/) — Knight is royal, King moves like a knight
- [Nightrider Chess](variants/nightrider/) — Adds the Nightrider: makes consecutive Knight jumps in a single direction without stopping
- [Orda Chess](variants/orda-chess/) — Asymmetric: FIDE Kingdom vs Horde army with move≠capture pieces
- [Orda Mirror](variants/orda-mirror/) — Both sides command the Horde army; all non-royal pieces move as Knight, capture as FIDE counterpart. Designed by Corey Clark, 2020
- [Wildebeest Chess](variants/wildebeest/) — 11×10 board; adds the Wildebeest (Camel+Knight compound) and replaces Queens with Chancellors

</div>

### Starting Position Variants

<div class="variant-grid">

- [Endgame Chess](variants/endgame-chess/) — Only pawns and Kings from the start
- [Legan Chess](variants/legan-chess/) — Berolina pawns, King and Queen swap starting squares
- [Pawns Only](variants/pawns-only/) — Only pawns, first promotion wins
- [Peasants' Revolt](variants/peasants-revolt/) — King + pawns vs King + knights
- [Placement Chess](variants/placement-chess/) — Players alternate placing back-rank pieces before the game begins; Bishops must be on opposite-coloured squares. Bronstein version included
- [Upside-Down](variants/upside-down/) — Pieces start on opponent's rank

</div>

### Regional & Historical Variants

<div class="variant-grid">

- [ASEAN Chess](variants/asean/) — Standardized Southeast Asian chess; Makruk-family; Pawns start rank 2, promote rank 6 to Ferz; streamlined counting draw rules
- [Chaturanga](variants/chaturanga/) — Indian ancestor of chess, c. 600 CE. Weak counsellor and leaping elephant
- [Makpong](variants/makpong/) — Thai variant, King cannot move out of check
- [Makruk](variants/makruk/) — Thai chess, pawns promote on rank 6 to Met
- [Ouk Chaktrang](variants/ouk-chaktrang/) — Cambodian chess; King may jump as Knight on first move; Koul leaps 1 or 2 diagonally; counting draw rules
- [Shatar](variants/shatar/) — Mongolian chess, win by baring the opponent’s King
- [Shatranj](variants/shatranj/) — Medieval Islamic chess, ancestor of modern chess
- [Sittuyin](variants/sittuyin/) — Burmese chess, placement opening phase
- [Tamerlane Chess](variants/tamerlane/) — 11×10 medieval Islamic variant attributed to Timur; Pawns promote to the piece on their starting file

</div>

### Expanded Boards

<div class="variant-grid">

- [Capablanca Chess](variants/capablanca/) — 10×8 with Archbishop + Chancellor
- [Courier Chess](variants/courier/) — 12×8, medieval variant from 1202
- [Grand Chess](variants/grand/) — 10×10, same new pieces, bigger stage
- [Shako](variants/shako/) — 10×10; adds Cannon (Xiangqi-style platform capture) and Elephant (2-diagonal leap). Designed by Jean-Louis Cazaux, 2000

</div>

### Small Boards

<div class="variant-grid">

- [Breakthrough](variants/breakthrough/) — 7×7, pawns only, first to far rank wins
- [Diana Chess](variants/diana/) — 6×6, no queens or knights
- [Half Chess](variants/half-chess/) — 8×4, armies start adjacent
- [Los Alamos](variants/los-alamos/) — 6×6, no bishops, first computer chess (1956)
- [Minichess](variants/minichess/) — 5×5, full piece types on tiny board
- [Petty Chess](variants/petty/) — 5×6, all piece types, single copies

</div>

### Asymmetric Armies

<div class="variant-grid">

- [Empire Chess](variants/empire/) — FIDE Kingdom vs Empire dynasty: all Empire pieces move as Queen, capture piece-specifically; Faceoff rule eliminates the player who creates an open-file confrontation. Designed by Corey Clark, 2019
- [Shinobi Chess](variants/shinobi/) — FIDE Kingdom vs Shinobi Clan; Clan holds pieces in hand and drops them during play; automatic promotion on entering opponent’s half. Designed by Corey Clark, 2021
- [Spartan Chess](variants/spartan/) — FIDE Persians vs Spartan army with two Kings; both Kings must be simultaneously in check for Black to be in check. Designed by Steven Streetman, 2010
- [Synochess](variants/synochess/) — FIDE Kingdom vs Xiangqi-derived Eastern dynasty; Cannon, Chariot, Horse, and Soldier drops; Faceoff rule. Designed by Corey Clark, 2020

</div>

### Gating & Drop Mechanics

<div class="variant-grid">

- [S-Chess](variants/s-chess/) — Adds Hawk (diagonal leaps + Knight) and Elephant (Rook + Knight) to hand; pieces gate onto vacated home squares when back-rank pieces make their first move. Designed by Yasser Seirawan and Jonathan Tisdall, 2007
- [Shogun Chess](variants/shogun/) — Captured pieces switch sides and can be dropped back into play; automatic promotion on entering opponent’s half. Designed by Corey Clark, 2020

</div>

### Hexagonal Board

<div class="variant-grid">

- [Hex Chess Hub](../../hex-chess/content/rulebook/) — Dedicated hub for hexagonal chess variants: Glinśki (most-played hex chess), McCooey, De Vasa, Brusky, Shafran, Mini Hexchess. Pieces move on triangular hex adjacency

</div>

</div>
