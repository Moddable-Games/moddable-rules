---
title: Bao
slug: bao
board: "4×8 pits (2 rows per player)"
players: "2"
parent: mancala
order: 3
win: Reduce opponent to no seeds in their inner row, or leave them with no legal move
special: "Two-phase game: namua (seeding phase) then mtaji (capture phase). Multi-lap relay sowing."
engine:
  topology:
    type: pit
    rows: 4
    cols: 8
    stores: false
  players: [south, north]
  render:
    cellSize: 20
  setup: "0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2;0;2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0;0"
---

## Bao

The most strategically complex Mancala game in the world, played in Tanzania, Kenya, and across East Africa, particularly among the Swahili-speaking peoples. Bao uses a unique four-row board and a two-phase structure that gives it a depth comparable to Chess. The game has been described by game theorists as the most complex traditional African game.


{{svg:bao-board.svg "Bao — starting position"}}
### Components

| Item | Qty | Notes |
|------|-----|-------|
| **Board** | 1 | 4 rows of 8 pits: 2 rows per player (inner + outer) |
| **Seeds** | 64 | 2 seeds in each of the 32 pits |

### Setup

The board is oriented with both players' inner rows facing each other. Each pit starts with 2 seeds. The four centre pits of each inner row (positions 4 and 5 from each end) are called kimbi — they will be significant in the opening.

Each player controls their two rows: the **inner row** (facing the centre) and the **outer row** (behind it).

### Phase 1 — Namua (Seeding Phase)

Players take turns introducing seeds from a reserve of seeds outside the board.

On each turn, a player places one seed from reserve into any pit in their inner row that already contains seeds. That pit is then sown: all seeds from that pit are lifted and distributed counter-clockwise through the inner row, then outward if they reach the end.

**Relay:** If the last seed lands in a non-empty pit, pick up all seeds in that pit and continue sowing. Continue until the last seed lands in an empty pit.

**Capture in namua:** If the final seed of a sow lands in a pit directly opposite a non-empty opponent inner-row pit, capture the opponent's seeds from that pit. Place captured seeds into your kichwa (rightmost pit of your inner row). Then sow from the kichwa if it was empty before capture, or sow the captured seeds into the kichwa pit continuing the relay chain.

Namua ends when both players have distributed all reserve seeds.

### Phase 2 — Mtaji (Capture Phase)

Players alternate turns. On each turn, you must make a capturing move if one is available.

**Capture move:** Pick up seeds from any inner-row pit that, when sown, will land opposite a non-empty opponent inner-row pit. After the sow (including all relay continuations), captured seeds go into the kichwa and sowing continues from there.

**Non-capture move:** If no capture is available, sow from any non-empty pit (inner or outer row). Relay continues as in namua.

**Direction:** You choose the direction of sow at the start of each turn (clockwise or counter-clockwise along your inner row, continuing into the outer row).

### Winning

You win when your opponent's inner row has no seeds, or when your opponent has no legal move.

### Attribution

Bao. Traditional game, Tanzania and East Africa. Public domain. Sources: de Voogt, Alex — *Mancala Board Games* (1997); Wikipedia (CC-BY-SA).
