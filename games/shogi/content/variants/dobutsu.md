---
title: Dobutsu Shogi
slug: dobutsu
board: "3×4"
players: "2"
parent: shogi
order: 20
win: Capture the enemy Lion, or move your Lion to the opponent's back rank without it being in immediate danger
special: "Animal-themed introductory Shogi on a 3×4 board, designed for young children. Invented by professional Shogi player Madoka Kitao. All pieces show their moves printed on the piece face. A solved game."
engine:
  topology:
    type: grid
    rows: 4
    cols: 3
  players: [sente, gote]
  setup: "gle/1c1/1C1/ELG"
---

## Dobutsu Shogi

Dobutsu Shogi (どうぶつしょうぎ, "animal chess") is a Shogi variant for young children invented by female professional Shogi player Madoka Kitao, in part to attract young girls to the game. Played on a 3×4 board, it uses a minimal piece set with animal characters; each piece's legal moves are printed on the piece itself. It is a **solved game** — optimal play by the second player guarantees a win — but remains engaging for beginners and young players.

### Setup

**Board:** 3 files (a–c) × 4 ranks. No river, no palace.

**Pieces per player:** 4 — one Lion, one Giraffe, one Elephant, one Chick.

**Starting position:**

```
   a      b      c
1  GIR    LIO    ELE   ← Gote (White)
2   ·     CHI     ·
3   ·     CHI     ·
4  ELE    LIO    GIR   ← Sente (Black)
```

Sente (Black) moves first.

**SFEN:** `gle/1c1/1C1/ELG[-] b - 1`

*(G/g = Giraffe, L/l = Lion, E/e = Elephant, C/c = Chick, H/h = Hen.)*

### Pieces

| Piece | Symbol | Movement |
|---|---|---|
| **Lion** | L | One step in any of the 8 directions. Royal piece. |
| **Giraffe** | G | One step orthogonally (forward, backward, left, or right). |
| **Elephant** | E | One step diagonally (four diagonal directions). |
| **Chick** | C | One step directly forward only. Promotes to **Hen** on reaching the last rank. |
| **Hen** | +C | One step in any direction except diagonally backward (six directions). |

### Rules

**Drops:** Captured pieces go to the capturing player's hand and may be dropped on any empty square on a later turn, exactly as in standard Shogi. There are no Chick drop restrictions — two Chicks may share a file, Chick drop checkmate is legal, and Chicks may be dropped on the last rank.

**Promotion:** A Chick reaching the last rank must promote to Hen. No other pieces promote.

**Win conditions:**

1. **Capture the enemy Lion.** If you can capture the Lion, you win immediately. (Checking the Lion is equivalent to check in chess; capturing it wins.)
2. **Campmate.** Move your own Lion to the opponent's last rank (rank 1 for Sente, rank 4 for Gote) without it being in a square the opponent can immediately capture it on their next move. This wins the game.
3. **Stalemate.** If a player has no legal move, that player loses.

**Draws:** Threefold repetition of the same position (including the same pieces in hand and the same player to move) is a draw. Perpetual check through repetition is also a draw.

### Attribution

Dobutsu Shogi was invented by Madoka Kitao (北尾まどか). Public domain. Rules documented from pychess.org/variants/dobutsu.
