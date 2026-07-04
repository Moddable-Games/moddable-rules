# Hexagonal Chess: Notation and Coordinate Systems

A reference for the moddable-rules hex-chess hub and moddable-engine topology-hex work.

---

## The core problem

No single notation standard covers the whole hex chess family. The variants divide along two axes:

**Board orientation** determines which directions feel "forward" and "sideways":
- *Vertically oriented* (pointy-top): Gliński, McCooey, Shafran — a vertex of the hexagon faces north. Files run north-south. This is the mainstream orientation.
- *Horizontally oriented* (flat-top): De Vasa, Brusky, Wellisch — a side of the hexagon faces north. Ranks run east-west.

**Board shape** further splits things: Gliński/McCooey/Wellisch use the same 91-cell regular hexagon; Shafran uses an irregular 70-cell hexagon; De Vasa uses an 81-cell rhombus; Brusky uses an 84-cell irregular hexagon; Starchess uses a 37-cell hexagram. Each shape forces a different file/rank labelling.

The result is that notation from one variant cannot be directly read into another, even when both use the letter-number cell format.

---

## Gliński algebraic notation

The de facto standard for the 91-cell family (Gliński and McCooey).

### File labelling

The board has **11 files**, labelled **a through l with j omitted**:

```
a  b  c  d  e  f  g  h  i  k  l
```

The omission of j follows a historical convention (j was often skipped in sequences to avoid confusion with i). f is the center file.

File-to-column mapping (relevant for engine coordinate conversion):

| File | a  | b  | c  | d  | e  | f  | g  | h  | i  | k  | l  |
|------|----|----|----|----|----|----|----|----|----|----|-----|
| q    | −5 | −4 | −3 | −2 | −1 |  0 | +1 | +2 | +3 | +4 | +5 |

### Rank structure

The board has **11 ranks**, but the rank system is bent: ranks 1–6 extend across all 11 files, then the upper ranks converge toward the apex.

| Rank | Cell count | Files present        |
|------|-----------|----------------------|
| 1    | 11        | a through l (all)    |
| 2    | 11        | a through l          |
| 3    | 11        | a through l          |
| 4    | 11        | a through l          |
| 5    | 11        | a through l          |
| 6    | 11        | a through l          |
| 7    | 9         | b through k          |
| 8    | 7         | c through i          |
| 9    | 5         | d through h          |
| 10   | 3         | e through g          |
| 11   | 1         | f only (apex)        |

**Total: 91 cells.** The center of the board is **f6**. The apex is **f11**.

File lengths (ranks available per file):

| File | a | b | c | d | e | f  | g | h | i | k | l |
|------|---|---|---|---|---|----|---|---|---|---|---|
| Ranks | 1–6 | 1–7 | 1–8 | 1–9 | 1–10 | 1–11 | 1–10 | 1–9 | 1–8 | 1–7 | 1–6 |

### Move notation

Gliński uses long algebraic notation to avoid ambiguity, since short algebraic is more prone to collisions on an 11-file board:

```
1.Qe1c3   (Queen from e1 to c3)
1.b1b2    (Pawn from b1 to b2)
4.Qc3xBf9 (Queen on c3 captures Bishop on f9, checkmate)
```

Piece identifiers are the same as standard chess: K Q R B N (pawns have no letter prefix).

A numeric (ICCF-style) notation also exists, encoding cells by sequential number rather than coordinate. It is rarely used in practice.

### Starting positions

See `games/hex-chess/content/variants/glinski.md` for full verified pawn positions and confirmed piece cells. In brief: white queen at e1, white bishop at f3 (both confirmed from published game notation). Full back rank requires Ludii verification.

---

## Variant notation summaries

### McCooey

Same board, same file/rank system as Gliński. Different starting array (7 pawns per side, not 9; pawns on rank 6 not rank 7 for white). The one notation-relevant difference is pawn capture direction: McCooey pawns capture *diagonally* (bishop direction), while Gliński pawns capture *orthogonally at 60°* (rook direction). This has no effect on cell naming but matters greatly for rules encoding.

McCooey: stalemate is a draw (half point each). Gliński: stalemate scores 3/4 to deliverer, 1/4 to stalemated player.

### Shafran

**70-cell irregular hexagon, vertically oriented.**

- **Files: a through i** (9 files, no j, no k or l)
- **Ranks: 1 through 10**, running *obliquely* (10 o'clock to 4 o'clock direction, not horizontally)

This makes Shafran notation superficially similar to Gliński (letter + number) but the rank axis is diagonal rather than horizontal, so coordinates are not interchangeable.

Key cells: both kings start on **e1** and **e10**. White's rooks start on a1 and i5; Black's rooks on a6 and i10.

Castling exists in Shafran (absent in Gliński/McCooey). Notation uses Q-0-0-0 / Q-0-0 (queen's-side) or B-0-0-0 / B-0-0 (bishop's-side). Stalemate is a draw.

Pawns capture *diagonally* in Shafran (like McCooey, unlike Gliński). Pawn initial multi-step range varies by file: corner pawns (a, i) can only step one; inner pawns can step two; central pawns (d, e, f) can step three.

### De Vasa

**81-cell rhombus, horizontally oriented.**

De Vasa uses a file/rank system but the board shape is a rhombus (parallelogram), with kings starting on opposite corners. Files run a–l (j omitted), ranks 1–8. Long algebraic notation recommended to avoid ambiguity: `1.d2-f4`.

Pawn behavior is notably different: captures are *diagonally forward* to a cell of the same color, and a pawn blocked in one forward direction is also blocked in the other. Castling is permitted (king slides 2 cells short, 3 cells long).

### Brusky

**84-cell irregular hexagon, horizontally oriented.**

Similar algebraic convention to De Vasa: files a–l (j omitted), ranks 1–8 horizontal. 10 pawns per side (not 9). Castling permitted. Stalemate is a half-point draw (not the 3/4 rule).

### Mini Hexchess (McCooey, 1997)

Smaller board using the same algebraic convention as McCooey/Gliński, applied to the reduced cell set. Pieces: K, Q, R, B, N only (3 per side each of the latter). Faster game, useful for introductory play.

### Starchess (Polgár, ~2004)

**37-cell hexagram (six-pointed star), horizontally oriented.**

Starchess abandons file/rank notation entirely: cells are numbered **1 through 37** sequentially. The board has three-fold rotational symmetry, which makes letter-number notation awkward. Players place their non-pawn pieces freely in the starting zone (Chess960-style), so there is no fixed starting array to annotate.

Pawns move vertically forward and capture orthogonally at 60° (like Gliński), but there is no en passant. A pawn that has made a capture becomes a "limping pawn" and loses its initial double-step option.

---

## Engine coordinate systems

### Cube coordinates

The mathematically cleanest internal representation for any hex grid. Every cell is identified by three integers **(q, r, s)** subject to the constraint **q + r + s = 0**. This means only two values are free; the third is always derived.

The six orthogonal neighbors of any cell (q, r, s) in cube space:

```
(+1, −1,  0)
(+1,  0, −1)
( 0, +1, −1)
(−1, +1,  0)
(−1,  0, +1)
( 0, −1, +1)
```

The six diagonal neighbors (corner-to-corner, bishop direction in Gliński's terms):

```
(+2, −1, −1)
(+1, +1, −2)
(−1, +2, −1)
(−2, +1, +1)
(−1, −1, +2)
(+1, −2, +1)
```

Distance between two cells: `(|Δq| + |Δr| + |Δs|) / 2`.

### Axial coordinates

A simplification of cube: drop *s* (always derivable as `s = −(q+r)`). Store only **(q, r)**.

This is what moddable-engine topology-hex should use internally.

### Conversion: Gliński algebraic → axial

For the Gliński/McCooey 91-cell board, with the center cell **f6 mapped to axial (0, 0)**:

**File → q:**

```
a→−5, b→−4, c→−3, d→−2, e→−1, f→0, g→+1, h→+2, i→+3, k→+4, l→+5
```

**Rank → r:**

```
axial_r = 6 − rank − max(0, q)
```

The bend occurs at file f (q = 0). Left of center (q ≤ 0): moving between adjacent files at the same rank is a (+1, 0) step. Right of center (q > 0): it is a (+1, −1) step.

Verified against black pawn row (rank 7, files b–k):

| Cell | q   | rank | r = 6−rank−max(0,q) | Expected |
|------|-----|------|----------------------|----------|
| b7   | −4  | 7    | 6−7−0 = **−1**       | −1 ✓     |
| f7   | 0   | 7    | 6−7−0 = **−1**       | −1 ✓     |
| g7   | +1  | 7    | 6−7−1 = **−2**       | −2 ✓     |
| k7   | +4  | 7    | 6−7−4 = **−5**       | −5 ✓     |

Verified against white pawn row (ranks 1,2,3,4,5,4,3,2,1 for files b–k):

| Cell | q   | rank | r = 6−rank−max(0,q) | Expected |
|------|-----|------|----------------------|----------|
| b1   | −4  | 1    | 6−1−0 = **+5**       | +5 ✓     |
| f5   | 0   | 5    | 6−5−0 = **+1**       | +1 ✓     |
| g4   | +1  | 4    | 6−4−1 = **+1**       | +1 ✓     |
| k1   | +4  | 1    | 6−1−4 = **+1**       | +1 ✓     |

**Inverse:**

```
rank   = 6 − axial_r − max(0, axial_q)
file_q = axial_q
```

### Shafran axial mapping

Shafran's oblique ranks mean the axial mapping is rotated relative to Gliński's. Derive from `Shafran Chess.lud` in the Ludii repository.

### Starchess

37 numbered cells require a custom lookup table; there is no algebraic formula.

---

## Summary table

| Variant       | Cells | Orientation | Files      | Ranks        | Castling | Stalemate  |
|---------------|-------|-------------|------------|--------------|----------|------------|
| Gliński       | 91    | Vertical    | a–l (−j)   | 1–11 bent    | No       | ¾ / ¼      |
| McCooey       | 91    | Vertical    | a–l (−j)   | 1–11 bent    | No       | Draw (½)   |
| Shafran       | 70    | Vertical    | a–i        | 1–10 oblique | Yes      | Draw (½)   |
| De Vasa       | 81    | Horizontal  | a–l (−j)   | 1–8          | Yes      | ?          |
| Brusky        | 84    | Horizontal  | a–l (−j)   | 1–8          | Yes      | Draw (½)   |
| Mini Hexchess | small | Vertical    | a–l subset | subset       | No       | Draw (½)   |
| Starchess     | 37    | Horizontal  | Numeric    | n/a          | No       | ?          |

---

## Notes for moddable-engine

- topology-hex stores cells in axial (q, r). All movement rules operate on axial deltas.
- Each variant config supplies a `coordinateMap` translating its notation to axial pairs.
- The Gliński pawn's orthogonal-at-60° capture vs. McCooey's diagonal capture should be a named enum in piece-behaviour, not a magic angle value.
- The three-bishop constraint is a consequence of the three-coloring of hex grids; enforce at topology level.

---

*Sources: Wikipedia "Hexagonal chess" (retrieved 2026-07-01); chessvariants.com Gliński page (retrieved 2026-07-01); Pritchard, Encyclopedia of Chess Variants (1994, 2007).*
