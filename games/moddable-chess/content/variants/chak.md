---
title: Chak
slug: chak
board: "9×9"
players: "2"
parent: moddable-chess
win: Checkmate or Temple Capture
special: "Mesoamerican-themed chess on a 9×9 board. Win by mating the Ajaw or landing your promoted Ajaw on the opponent's temple square. Pieces promote when crossing the river. Designed by Corey Clark, 2020."
engine:
  topology:
    type: grid
    rows: 9
    cols: 9
  players: [white, black]
  notation: algebraic
  promotion_zone: [6, 7, 8, 9]
  temple: true
published: true
---

## Chak

Designed by Corey Clark (2020). Chak is played on a 9×9 board with a Mesoamerican theme inspired by the Maya. The river divides the board at rank 5; pieces gain power by crossing it. Victory is achieved by either mating the opponent’s Ajaw or landing your own promoted Ajaw on the opponent’s sacred temple square and holding it for one full round.

### Board Layout

The board is 9×9 (files a–i, ranks 1–9). The river runs between ranks 5 and 6, dividing the board into two halves. Each player’s temple is the center square of their back rank: e1 (White’s temple) and e9 (Black’s temple).

### Pieces

| Piece | Count | Movement | Promotion |
|---|---|---|---|
| **Ajaw** (Royal) | 1 | 1 step in any direction (King-move). | Becomes Warrior Ajaw on crossing the river. |
| **Warrior Ajaw** | — | Promoted form: 1 step any direction OR 1 step diagonally (same as Ajaw, but also wins by temple). | Already promoted. |
| **Shaman** | 2 | 1 step diagonally, OR 1 step straight forward. After crossing the river: promotes to Shaman+, adding the ability to also move 1 step straight backward. | Shaman+ |
| **Vulture** | 2 | Slides any number of squares diagonally (Bishop). After crossing the river: promotes to Vulture+, also adding 1-step orthogonal moves. | Vulture+ |
| **Serpent** | 2 | Slides any number of squares orthogonally (Rook). After crossing the river: promotes to Serpent+, also adding 1-step diagonal moves. | Serpent+ |
| **Jaguar** | 2 | Slides orthogonally any distance OR moves 1 step diagonally. After crossing the river: promotes to Jaguar+, adding unlimited diagonal slides. | Jaguar+ |
| **Pawn** | 7 | 1 square forward; captures 1 square diagonally forward. No double first move. Promotes on reaching the last rank to any non-royal piece. | Choice of piece |

### The River

The river is the boundary between ranks 5 and 6. When a piece crosses the river (moves from rank 5 to rank 6, or rank 6 to rank 5 for Black), it immediately promotes to its “+” form. Promotion is automatic and permanent — crossing the river never allows a choice. Captured promoted pieces revert to their base form.

The Ajaw becomes the Warrior Ajaw upon crossing the river.

### Temple Victory

A player’s Warrior Ajaw (promoted Ajaw) may land on the opponent’s temple square (e9 for White, e1 for Black) to trigger a temple victory, subject to these conditions:

1. The Warrior Ajaw must land on the temple square.
2. The opponent must then take their turn.
3. If, after the opponent’s turn, the Warrior Ajaw is still on the temple square (i.e., the opponent could not or did not capture it), the player with the Warrior Ajaw on the temple wins.

If the opponent captures the Warrior Ajaw on the temple square, no temple victory occurs and play continues.

### Checkmate Victory

A player also wins by checkmating the opponent’s Ajaw (whether base or Warrior form). The Ajaw is in check when attacked; the owner must resolve it. Checkmate (check with no legal escape) wins immediately.

### Stalemate

If a player has no legal move but is not in check, the game is a draw.

### Starting Position

White (ranks 1–2):
```
2 Pa Pa Pa Pa Pa Pa Pa Pa Pa
1 Se Vu Sh Aj Sh Vu Se
```
Rank 1 from a to i: Serpent(a), Jaguar(b), Vulture(c), Shaman(d), Ajaw(e), Shaman(f), Vulture(g), Jaguar(h), Serpent(i).
Rank 2: 7 Pawns on b2–h2; a2 and i2 are empty.

Black mirrors on ranks 8–9.

### Attribution

Designed by Corey Clark. Published via Shogun of Games. Official rules at shogunofgames.com. Public domain rule set.
