---
title: Kriegspiel
slug: kriegspiel
board: "8×8"
players: "2"
parent: moddable-chess
win: Checkmate
special: "Hidden information chess: each player sees only their own pieces and squares their pieces attack. An umpire announces captures, pawn captures available, checks, and the type of checking piece — nothing more. Invented by Henry Michael Temple (1899)."
engine:
  topology:
    type: grid
    rows: 8
    cols: 8
  players: [white, black]
  notation: algebraic
  hidden_information: true
published: true
---

## Kriegspiel

Kriegspiel (German: "War Game") was invented by Henry Michael Temple in 1899. It is chess played with **incomplete information**: each player can see only their own pieces. A neutral **umpire** (or referee, or the game engine) manages the hidden state and announces only a limited set of information.

### Setup

Standard 8×8 chess starting position. An umpire maintains the true position (known to neither player in full). Each player sees their own pieces and can infer the opponent's pieces from announcements.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### What Each Player Sees

- **Their own pieces** and which squares those pieces could move to (as if the board were otherwise empty).
- **Squares their own pieces attack** — but they do not know if those squares are empty or occupied until a capture is announced.

### The Umpire's Announcements

The umpire announces (only):

1. **Illegal move attempted:** if the player tries to move to an occupied square (blocked by own piece or an invalid direction), the umpire says "illegal" and the player must try again.
2. **Pawn capture available:** if a player's Pawn has a legal diagonal capture (an opponent piece is diagonally in front of it), the umpire announces this. The player is not told which file or how many pawns have captures.
3. **A capture occurred:** when a piece is actually captured, the umpire announces the square where the capture took place.
4. **Check:** when the opponent's King is in check, the umpire announces the check and specifies the **direction** of the checking piece: "check by rank" (Rook or Queen on same rank), "check by file" (Rook or Queen on same file), "check by long diagonal," "check by short diagonal" (Bishop or Queen), or "check by Knight."
5. **Checkmate or stalemate:** announced when reached.

The umpire does **not** announce: positions of opponent pieces, what the opponent's last move was (other than capture location), or how many pieces are in any area.

### Rules

- **Illegal moves:** a player attempting an illegal move (any kind) is told it is illegal and must try again — they may keep trying until a legal move is found.
- **Stalemate** is possible even though a player may not realise it — the umpire announces stalemate.
- **Castling:** the umpire announces if the King is in check, blocking castling, but does not announce why. A player may attempt castling; if illegal (path is attacked), the umpire says so.
- **En passant:** a player may attempt an en passant capture; the umpire confirms if legal.
- **Threefold repetition and 50-move rule** apply based on the true position, tracked by the umpire.

### Strategy Notes

Kriegspiel requires inference from negative information ("what hasn't the umpire announced?") and probabilistic reasoning about opponent piece locations. Players typically develop opening theory that aggressively probes for opponent positions through sacrificial attempts.

### Attribution

Kriegspiel was invented by Henry Michael Temple (1899). Standard rules documented from chessvariants.com/infor.dir/kriegspiel.html.
