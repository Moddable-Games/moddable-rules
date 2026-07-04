# The Landlord's Game — Board Data

Machine-readable board layout data for diagram generation. Rules and game mechanics live in the variant markdown files under `content/variants/`.

## Source

Transcribed from original photographs, patent drawings, and rulebooks at [landlordsgame.info](https://landlordsgame.info/) plus US Patents 748,626 (1904) and 1,509,312 (1924). Cross-referenced with the 1906 EGC rulebook.

## Files

| File | Description |
|------|-------------|
| `boards.json` | Board layout data for all three editions (1904, 1906, 1932) |

## Schema

`boards.json` contains position, type, and pricing data for every space on each board edition. This data drives the SVG diagram generator (moddable-engine landlords provider).

Each board entry has:

```json
{
  "title": "string",
  "year": 1904,
  "patent": "US 748,626 | null",
  "designer": "string",
  "direction": "clockwise | counter-clockwise",
  "totalSpaces": 40,
  "corners": 4,
  "spaces": [...]
}
```

Each space entry:

```json
{
  "pos": 1,
  "name": "MOTHER EARTH",
  "type": "corner | lot | necessity | railroad | franchise | luxury | go-to-jail | ...",
  "side": "bottom | left | top | right | corner",
  "price": 100,
  "rent": 10
}
```

## Remaining Unknowns

- 1906 Chance card deck: count unverified (claimed 13), only 1 card text known
- 1906 Luxury card deck: only 2 names known
- 1906 money piece quantities (denominations/colours known, counts unknown)
