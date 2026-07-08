---
title: Tenjiku Shogi
slug: tenjiku-shogi
board: "16×16"
players: "2"
parent: shogi
win: Capture all opponent royal pieces
special: "Medieval Japanese 16×16 Shogi variant derived from Chu Shogi. Introduces Fire Demons (burn all adjacent enemies after moving; passively burn enemies that move adjacent to them), hierarchical jumping generals, and Lion Hawk / Free Eagle double-movers. No drops. Extinction royalty."
engine:
  topology:
    type: grid
    rows: 16
    cols: 16
    orientation: shogi
  players: [sente, gote]
  notation: shogi
  drops: false
  promotion_zone: [12, 13, 14, 15, 16]
published: true
---

## Tenjiku Shogi

Tenjiku Shogi (天竺将棋) is a medieval Japanese chess variant played on a 16×16 board. It is derived from Chu Shogi, expanding the board from 12×12 to 16×16 to accommodate powerful new pieces — most critically the Fire Demon. Despite the larger board, games tend to be shorter than Chu Shogi due to the Fire Demon's destructive reach.

### Starting Position

Pieces occupy ranks 1–6 (Sente) and ranks 11–16 (Gote), mirrored. Files run a–p (16 files).

**Rank 1 (back rank, files a–p):**
Lance · Knight · Ferocious Leopard · Iron General · Copper General · Silver General · Gold General · King · Drunk Elephant · Gold General · Silver General · Copper General · Iron General · Ferocious Leopard · Knight · Lance

**Rank 2:**
Reverse Chariot (a2, p2) · Chariot Soldiers (c2, d2, m2, n2) · Blind Tiger (f2, k2) · Kirin (g2) · Lion (h2) · Free King (i2) · Phoenix (j2)

**Rank 3:**
Side Soldier (a3, p3) · Vertical Soldier (b3, o3) · Bishop (c3, n3) · Dragon Horse (d3, m3) · Dragon King (e3, l3) · Water Buffalo (f3, k3) · Fire Demon (g3, j3) · Lion Hawk (h3) · Free Eagle (i3)

**Rank 4:**
Side Mover (a4, p4) · Vertical Mover (b4, o4) · Rook (c4, n4) · Horned Falcon (d4, m4) · Soaring Eagle (e4, l4) · Bishop General (f4, k4) · Rook General (g4, j4) · Great General (h4) · Vice General (i4)

**Rank 5:** Pawns on all 16 files.

**Rank 6:** Dog at e6 and l6.

### Key Pieces

**Fire Demon (g3, j3):** The most powerful piece. After moving, burns (removes) all enemy pieces on any of the 8 squares adjacent to its destination. Additionally, any enemy piece that moves adjacent to a stationary Fire Demon is immediately burned by the Demon passively — the moving piece is destroyed before it can attack. A Fire Demon moving adjacent to another Fire Demon is burned (the moving Demon loses). Fire Demons can also make an area move of up to 3 King steps in freely chosen directions, stopping after capturing; burning only occurs after the final step. When a Water Buffalo promotes to a Fire Demon, all adjacent enemy pieces are immediately burned.

**Jumping Generals — Great General (h4), Vice General (i4), Rook General (g4/j4), Bishop General (f4/k4):** All slide as Queen, Bishop/Rook respectively, but may also jump over any number of pieces when capturing. Jump-capture is restricted by a hierarchy:
- Rank 3 (highest among generals): Great General
- Rank 2: Vice General
- Rank 1: Rook General and Bishop General
- Rank 0: all other pieces
- Rank 4 (highest of all): King and Crown Prince — cannot be jump-captured

A general may jump over only those with rank lower than itself, but may capture any piece regardless of rank (except royals). The Vice General may also make up to 3 King steps as an area move (no jumping; stops after capture).

**Lion (h2):** Double-mover as in Chu Shogi — up to 2 King steps per turn, freely changing direction, including returning to start, annihilating adjacent enemies, or making double captures. No Lion-trading restrictions apply in Tenjiku (unlike Chu Shogi).

**Lion Hawk (h3):** Lion double-move combined with Bishop slide.

**Free Eagle (i3):** Queen slide combined with diagonal double-move (Lion-style restricted to diagonal directions). Can annihilate diagonally adjacent enemies without moving.

**Soaring Eagle / Horned Falcon:** Slide as Queen, but in certain directions have a stinging move: can move to or jump to the second square, jump to the second while annihilating the first, or annihilate the first without moving. Soaring Eagle does this diagonally forward; Horned Falcon straight forward.

### Promotion

The last 5 ranks form the promotion zone. Pieces promote optionally when entering the zone or moving within it to make a capture. Each piece promotes at most once:

Water Buffalo → Fire Demon · Vertical Soldier → Water Buffalo · Iron General → Vertical Soldier · Lion → Lion Hawk · Kirin → Lion · Free King → Free Eagle · Phoenix → Free King · Rook General → Great General · Soaring Eagle → Rook General · Dragon King → Soaring Eagle · Rook → Dragon King · Gold General → Rook · Pawn → Gold General · Dog → Multi-General (fRbB) · Reverse Chariot → Whale (vRbB) · Bishop General → Vice General · Horned Falcon → Bishop General · Dragon Horse → Horned Falcon · Bishop → Dragon Horse · Ferocious Leopard → Bishop · Chariot Soldier → Heavenly Tetrarchs · Side Soldier → Chariot Soldier · Knight → Side Soldier · Vertical Mover → Flying Ox (BvR) · Silver General → Vertical Mover · Lance → White Horse (vRfB) · Blind Tiger → Flying Stag (vRFsW) · Drunk Elephant → Crown Prince · Side Mover → Free Boar (BsR) · Copper General → Side Mover

King, Fire Demon, Great General, Vice General, Lion Hawk, and Free Eagle do not promote.

### Rules

**Win:** Capture all opponent royal pieces. Royals are the King and Crown Prince (Drunk Elephant's promoted form). A player with both survives losing one; they lose only when the last royal is captured or burned.

**No Drops:** Captured pieces are permanently removed.

**No Check Rule:** No prohibition against moving into or remaining in check. Stalemate cannot occur in practical play.

**Repetition:** Perpetual check is forbidden — the checker must deviate. Perpetual chasing also requires the chaser to deviate. Pure positional repetitions (neither side attacking) are draws.

### Attribution

Medieval Japanese game. Rules documented from chessvariants.com/rules/tenjiku-shogi (H. G. Muller; revised A. M. DeWitt, 2026).
