---
title: President
slug: president
board: "none"
players: "4–8"
parent: standard-52
win: "Finish first (across rounds)"
special: "Role-based climbing game with card trading between rounds. Positions persist. Tests multi-round state and asymmetric deals."
engine:
  players: [player1, player2, player3, player4]
  components:
    deck:
      type: standard-52
      jokers: 0
  plugins:
    big2:
      variant: president
      rounds: multi
      roles: true
      trading: true
      passReset: true
---

## President

Also known as Scum, Asshole, or Capitalism. A multi-round climbing card game where finishing position in each round determines your role (and advantages) in the next.

### Setup

- 4 to 8 players
- Standard 52-card deck (no jokers), dealt evenly (discard remainders or give to President)
- First round: player with 3 of clubs leads. Subsequent rounds: Scum leads

### Roles (from previous round)

| Position | Role | Advantage |
|----------|------|-----------|
| 1st out | President | Receives 2 best cards from Scum |
| 2nd out | Vice President | Receives 1 best card from Vice Scum |
| 2nd last | Vice Scum | Gives 1 best card to Vice President |
| Last out | Scum | Gives 2 best cards to President |

Middle positions (in 5+ player games) have no trading obligation.

### Rules

1. Lead player plays any valid combination (single, pair, triple, or sequence)
2. Each subsequent player must play the same combination type but higher value, or pass
3. When all players pass consecutively, the last player who played leads the next trick
4. First player to empty their hand finishes 1st, second finishes 2nd, etc.
5. Round ends when all but one player has emptied their hand — that player is Scum
6. Roles are assigned based on finishing order
7. Card trading occurs before the next round begins
8. Game continues for a set number of rounds or until a player accumulates enough "President" wins

### Card Ranking

2 > A > K > Q > J > 10 > 9 > 8 > 7 > 6 > 5 > 4 > 3

(Same as Big 2 — 2 is highest)

### Key Differences from Big 2

| Concept | Big 2 | President |
|---------|-------|-----------|
| Players | 4 (fixed) | 4–8 (variable) |
| Rounds | Single | Multi-round with persistent roles |
| Card trading | None | Forced exchange based on roles |
| Who leads | 3 of diamonds | Scum (lowest rank) |
| Win condition | First to empty hand | Accumulate President wins |
| Deck | Standard 52 | Standard 52 (split evenly) |
| Combinations | Singles, pairs, 5-card hands | Singles, pairs, triples, sequences |

### Why This Tests the Engine

President forces the engine to handle:
- **Multi-round persistence** — roles and scores carry between rounds
- **Asymmetric card dealing** — trading phase modifies hands before play
- **Variable player count** — same rules scale from 4 to 8
- **Role-based turn order** — who leads depends on previous round outcome
- **State between rounds** — not just within a single game
- **Component interaction** — deck (deal) + player state (roles) + game flow (rounds)
