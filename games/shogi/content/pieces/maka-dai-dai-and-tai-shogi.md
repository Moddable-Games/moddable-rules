# Maka Dai Dai (50 types) and Tai Shogi (93 types)

Sources: en.wikipedia.org/wiki/Maka_dai_dai_shogi and /wiki/Tai_shogi, 2026-09-01.

CONFIDENCE WARNING, and it is different from the dai and tenjiku tables. The raw
wikitext was NOT reachable for these two; only the rendered articles were, through
a summarising fetcher already shown to return contradictory notation. Every field
below was extracted twice with independently worded prompts and only agreeing
values are recorded. Two arithmetic checks passed and are the strongest evidence
available: Maka's 50 counts sum to 96, its stated per-side total, and Tai's 93
counts sum to 177, its stated total. Tai's promotions also partition cleanly as
14 gold-promoters + 45 non-promoters + 34 special = 93.

Treat these as good but unconfirmed, and re-verify against raw wikitext before
building. The dai and tenjiku tables in this directory do not carry this caveat.

## Maka Dai Dai — 19x19, 96 pieces a side, no drops

name | count | betza | promotes to
King | 1 | K | Emperor
Hook mover | 1 | RmaR | Gold general
Capricorn | 1 | BmaB | Gold general
Queen | 1 | Q | none
Dragon king | 2 | FR | none
Dragon horse | 2 | WB | none
Rook | 2 | R | Gold general
Bishop | 2 | B | Gold general
Side flier | 2 | rlRF | Gold general
Lion | 1 | NADaK | Furious fiend
Lion dog | 1 | KavKafavK | Gold general
She-devil | 1 | R5B2 | Gold general
Wrestler | 1 | B3rlW | Gold general
Guardian of the Gods | 1 | R3fF | Gold general
Buddhist devil | 1 | fB3rlbW | Gold general
Violent ox | 2 | R2 | Gold general
Flying dragon | 2 | B2 | Gold general
Old rat | 2 | fB2bR2 | Bat
Right chariot | 1 | fR[fr][bl]BbW | Gold general
Left chariot | 1 | fR[fl][br]BbW | Gold general
Vertical mover | 2 | fbRW | Gold general
Side mover | 2 | rlRW | Gold general
Phoenix | 1 | WA | Golden bird
Kirin | 1 | FD | Great dragon
Donkey | 2 | WfbD | Gold general
Knight | 2 | ffN | Gold general
Drunken elephant | 1 | FfrlW | Prince
Blind tiger | 2 | FrlbW | Free tiger
Ferocious leopard | 2 | FfbW | Free leopard
Reclining dragon | 1 | WbF | Free dragon
Gold general | 2 | WfF | Free gold
Silver general | 2 | FfW | Free silver
Copper general | 2 | fbWfF | Free copper
Tile general | 2 | fFbW | Free tile
Evil wolf | 2 | frlK | Free wolf
Iron general | 2 | fK | Free iron
Stone general | 2 | fF | Free stone
Reverse chariot | 2 | fbR | Gold general
Lance | 2 | fR | Gold general
Earth general | 2 | fbW | Free earth
Go-between | 2 | fbW | Free goer
Blind bear | 2 | FbR | Free bear
Chinese cock | 1 | rlbWfF | Wizard stork
Old monkey | 1 | FbW | Mountain witch
Angry boar | 2 | W | Free boar
Cat sword | 2 | F | Free cat
Coiled serpent | 1 | fbWbF | Free serpent
Dark spirit | 1 | f[bl]FrW | Buddhist spirit
Deva | 1 | f[br]FlW | Teaching king
Pawn | 19 | fW | Gold general

Promoted-only: Emperor (teleport, see below) | Prince K | Teaching king QavKafavK |
Buddhist spirit QNADaK | Furious fiend NADaKafavK | Golden bird fbRrlR2B3 |
Great dragon rlRfbR2B3 | Bat fRbB | Mountain witch BbRfW | Wizard stork BfRbW |
Free gold RfB | Free silver BfR | Free copper fbRfB | Free iron fQ | Free tile fBbR |
Free stone fB | Free earth fbR | Free goer fbR | Free tiger BrlbR | Free leopard BfbR |
Free serpent fbRbB | Free dragon RbB | Free cat B | Free bear BrlR | Free boar BrlR |
Free wolf NONE PRINTED

MISSING: Free wolf has no notation in the article. Do NOT infer it from
"evil wolf plus free". Starting position is DIAGRAM ONLY.

## Tai Shogi — 25x25, 177 pieces a side, no drops

The 93 rows are omitted here for length; they were extracted and sum-verified.
DIAGRAM ONLY: Vermillion sparrow (suzaku), Turtle-snake (genbu).
NONE PRINTED: Great elephant (promoted lion dog) - two passes returned two
NON-EQUIVALENT prose readings, so it must not be encoded.
CONTESTED: long-nosed goblin's promotion target - treat as unstated.
Starting position is DIAGRAM ONLY.

## Promotion — neither variant has promotion zones
Maka: optional when capturing an UNPROMOTED piece, COMPULSORY when capturing a
promoted one. Tai: compulsory, at the end of the first capturing move.

ENGINE-CRITICAL AMBIGUITY (Maka). "Pieces on the 4th, 5th, and 6th ranks which
promote... promote to Gold" can mean either (a) which piece TYPES promote to
gold, identified by where they stand in the initial setup, or (b) a positional
trigger fired by promoting while standing on rank 4-6. Context favours (a). It is
NOT confirmed, and the two readings give completely different promotion tables.
Resolve against a second source before encoding.

ALSO UNRESOLVED (Maka): whether a piece that declines promotion keeps the option
on a later capture. The phrasing does not say "first", which suggests no
persistent flag is needed - but this could not be verified.

## Contagious promotion (Maka only)
Any piece, promoted or not, that captures a Deva or a teaching king becomes a
teaching king. Any piece that captures a dark spirit or Buddhist spirit becomes
a Buddhist spirit. The CAPTURER transforms, whatever it was.

## Emperor teleport (both)
Jumps to any empty square on the board; may jump to and capture any non-royal
piece anywhere; may capture a royal piece anywhere ONLY if it is unprotected.
The `(U)` in the articles is a page-local shorthand for this, not a Betza atom.

## Per-piece state
Tai requires a per-piece "has captured" flag, because promotion is compulsory on
the FIRST capturing move. Tai also resolves promotion at END OF TURN, not at the
moment of capture - so a lion capturing twice makes both captures unpromoted and
promotes once, afterwards. An engine promoting mid-move gets this wrong.

## Win conditions
Maka: capture the sole remaining king, emperor or prince. Tai: capture the sole
remaining emperor or prince - and since the drunken elephant also promotes to
prince, up to three royal pieces may need capturing. While a player holds more
than one royal there is no check obligation; royals are simply capturable.
