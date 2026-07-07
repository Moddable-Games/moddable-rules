---
title: Chu Shogi
slug: chu-shogi
board: "12×12"
players: "2"
parent: shogi-hub
win: Capture the King (or Lion per variant rules)
special: "Historical Japanese Shogi variant played on 12×12 with 46 piece types per side (92 total). Introduces the Lion — the strongest piece in any historical chess variant, able to move to any square within 2 king-steps. Played in Japan ~1300 to the 20th century. No drops."
engine:
  topology:
    type: grid
    rows: 12
    cols: 12
    orientation: shogi
  players: [sente, gote]
  notation: shogi-japanese
  drops: false
  promotion_zone: [10, 11, 12]
published: true
---

## Chu Shogi

Chu Shogi (中将棋, "Middle Chess") is a historical Japanese chess variant played on a 12×12 board with 46 piece types per side (92 pieces total). It was widely played in Japan from approximately 1300 through the 20th century and is one of the most complex historical board games ever devised. Unlike standard Shogi, **there are no drops** — captured pieces are removed from the game.

### The Board

12×12 grid. Standard Shogi orientation: Sente (first player) plays from the bottom ranks, Gote from the top.

### Starting Position

Each player starts with 46 pieces arranged across the three home ranks (ranks 1–3 for Sente, ranks 10–12 for Gote).

**Sente back rank (rank 1, a–l):** Chariot · Leopard · Bishop · Tiger · Phoenix · Kirin · King · Phoenix · Tiger · Bishop · Leopard · Chariot

**Sente rank 2:** Side Mover · Copper General · Silver General · Gold General · Lion · Free King · Free King · Lion · Gold General · Silver General · Copper General · Side Mover

**Sente rank 3:** Flying Dragon · Vertical Mover · Drunk Elephant · Ferocious Leopard · Flying Cat · Horned Falcon · Vice General · Flying Cat · Ferocious Leopard · Drunk Elephant · Vertical Mover · Flying Dragon

**Sente rank 4:** 12 Pawns (a4–l4)

**SFEN:** `rcbtxkkxbtcr/scsglffglscs/dvdpfhvfpdvd/pppppppppppp/12/12/12/12/PPPPPPPPPPPP/DVDPFHVFPDVD/SCSGLFFGLSCS/RCBTXKKXBTCR b - 1`

*(Custom letter assignments — confirm exact mapping from source. R = Chariot, C = Leopard, B = Bishop, T = Tiger, X = Phoenix, K = King, etc. See Pieces section.)*

### The Lion

The **Lion** (獅子, Shishi) is the defining piece of Chu Shogi. In one move, the Lion may:

- Move to **any square within two king-steps** — i.e., move one square in any direction, then move again from that new square in any direction (landing on the second square); OR
- **Leap directly** two squares in any direction (jumping over an intervening piece); OR
- Use **Igui** (staying capture): capture a piece adjacent to it and return to its original square.

The Lion can capture **two pieces in one move** (the intermediate square and the landing square, if both are occupied by enemy pieces). Its range covers all 24 squares within a 5×5 centered area.

**Special Lion rule:** A Lion may generally not capture the opponent's Lion unless (a) the capturing Lion is in danger itself, or (b) the capture is via a two-step move where the first step is an empty square. (Exact rule varies by source — verify.)

### Pieces

| Piece | Japanese | Movement | Promotes to |
|---|---|---|---|
| King | 王将/玉将 | One step any direction | Does not promote |
| Lion | 獅子 | Two-step king-move or direct 2-square leap (see above) | Does not promote |
| Free King | 奔王 | Slides any distance orthogonally or diagonally (= Queen) | Does not promote |
| Gold General | 金将 | One step: orthogonally or forward diagonally | Does not promote |
| Silver General | 銀将 | One step: diagonally or directly forward | Gold General |
| Copper General | 銅将 | One step: forward, or one step sideways | Silver General |
| Bishop | 角行 | Slides diagonally | Promotes to Bishop+King |
| Rook/Chariot | 飛車 | Slides orthogonally | Promotes to Rook+King |
| Vertical Mover | 鴶行 | Slides forward/backward; one step sideways | Free King |
| Side Mover | 横行 | Slides sideways; one step forward/backward | Vertical Mover |
| Ferocious Leopard | 猛豹 | One step diagonally or directly forward/backward | Bishop |
| Leopard (豹) | 金将 equiv. | Varies | Varies |
| Drunk Elephant | 酱象 | One step any direction except directly backward | Prince |
| Flying Dragon | 飛竜 | Slides diagonally; leaps orthogonally two squares | Varies |
| Flying Cat | | Varies | Varies |
| Horned Falcon | 角鷹 | One step + forward unlimited slide | Free King |
| Tiger | | Varies | Varies |
| Phoenix | | Varies | Varies |
| Kirin | | Varies | Varies |
| Pawn | 歩兵 | One step forward | Gold General |

> **Note:** Chu Shogi has 46 piece types. The table above lists the primary pieces. Verify all 46 movements from chessvariants.com/shogi.dir/chu.html before build.

### Promotion

Pieces promote when they **move into, out of, or within** the promotion zone (the last 4 ranks of the opponent's side, ranks 9–12 for Sente). Promotion is mandatory for pieces that cannot otherwise move. The Lion and Free King do not promote.

### No Drops

Captured pieces are permanently removed. There is no drop mechanic in Chu Shogi.

### Attribution

Chu Shogi is a historical Japanese variant, origins ~13th century. Rules documented from chessvariants.com/shogi.dir/chu.html.
