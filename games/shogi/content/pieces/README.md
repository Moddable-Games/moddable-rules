# Large-variant piece tables

Movement for the large shogi variants, transcribed from Wikipedia's raw
wikitext (`?action=raw`) on 2026-09-01, in the extended Betza notation those
articles define.

Read the extension rules before implementing: `xxxaK` is an `xxxK` move
optionally followed by a `yyyK` move, not necessarily in the same direction;
`a3K` is up to three king steps; `v` restricts a continuation leg to one line;
default leg modality is move-and-capture, so `mKa3K` means up to three king
steps that must stop on first capture; square brackets group what `a` chains
(`DaK` is not `D[aK]`); `R(2<=n<=4)` is a rook limited to 2-4 squares; `pn`
jumps at most n pieces and `pp` is `p-infinity`; `x` is "shooting", so `xK` can
capture an adjacent enemy without moving.

`DIAGRAM ONLY` means the article gives that piece's movement as an image and no
notation exists in text. `NONE PRINTED` means the article omits it. Neither may
be filled in from the piece's name.

The rendered Wikipedia pages were found to return contradictory notation
through summarising fetchers - the same piece coming back as two different
strings. Only the raw wikitext is trustworthy, and these tables come from it.
