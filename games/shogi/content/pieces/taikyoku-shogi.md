# Taikyoku Shogi — 207 piece types — NOT YET EXTRACTED

36x36, 402 pieces a side, no drops. The largest thing in this corpus.

The piece table has NOT been transcribed. Wikipedia carries it in Betza notation
per piece, which is machine-readable, so this is transcription work rather than
research - fetch the raw wikitext at
https://en.wikipedia.org/w/index.php?title=Taikyoku_shogi&action=raw
and not the rendered page, which has been observed returning contradictory
notation through summarising fetchers.

What IS established:
- Promotion has no settled answer. Wikipedia states plainly that complete rules
  have not been found and sources vary: either a piece promotes on its first
  capture, or a player must promote on entering the far 11 ranks. It also warns
  the game was rediscovered after centuries of obscurity. Promotion must
  therefore be CONFIGURABLE, and the choice has an engine cost - the first
  reading needs a per-piece has-captured flag persisting across turns and the
  second does not.
- Hook moves: the hook mover, tengu, capricorn and peacock run in a line, may
  turn 90 degrees once at any point on the route, then continue.
- Area moves: the lion and lion hawk take up to two steps, not necessarily in a
  line.
- Range capture: some pieces jump over any number of pieces.
- Win: capture the opponent's last king or crown prince.
