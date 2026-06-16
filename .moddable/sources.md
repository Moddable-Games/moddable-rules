# Moddable Rules — Sources Registry

This file documents verified, accessible sources for rules research.
Every research routine should consult this file first before searching.
Sources are listed by game family with reliability notes.

---

## Source Reliability Tiers

| Tier | Meaning |
|---|---|
| ✅ Reliable | Consistently accessible to automated requests. Use as primary source. |
| ⚠️ Intermittent | Sometimes accessible, sometimes 403. Try, but have a fallback. |
| 🔴 Desktop only | Blocked to bots. Mark must access manually. Do not attempt in routines. |

---

## General Sources (all game families)

| Source | Tier | URL | Notes |
|---|---|---|---|
| Wikipedia | ⚠️ Intermittent | en.wikipedia.org | Good for history, overview, variant lists. Try archive.org mirror if 403. |
| Internet Archive | ✅ Reliable | archive.org | Mirrors of pages that may be inaccessible directly. |
| GitHub (code search) | ✅ Reliable | github.com | Search for CC-licensed rules documents. Filter by LICENSE file. |
| Project Gutenberg | ✅ Reliable | gutenberg.org | Historical game rulebooks in public domain. |
| archive.org texts | ✅ Reliable | archive.org/details/texts | Scanned historical rulebooks, public domain. |

---

## Chess Family

| Source | Tier | URL | Notes |
|---|---|---|---|
| FIDE Laws of Chess | ✅ Reliable | fide.com/fide/handbook | Authoritative standard rules |
| The Chess Variant Pages | 🔴 Desktop only | chessvariants.com | 403 to bots. Rich variant content but inaccessible to routines. |
| Wikipedia chess variants | ⚠️ Intermittent | en.wikipedia.org/wiki/Chess_variant | Good starting point for variant lists |

---

## Draughts / Checkers Family

| Source | Tier | URL | Notes |
|---|---|---|---|
| World Draughts Federation | ✅ Reliable | fmjd.org | Official international draughts rules |
| Wikipedia Draughts | ⚠️ Intermittent | en.wikipedia.org/wiki/Draughts | Good variant overview |
| Wikipedia Turkish Draughts | ⚠️ Intermittent | en.wikipedia.org/wiki/Turkish_draughts | Verified working in prior research |
| Wikipedia Lasca | ⚠️ Intermittent | en.wikipedia.org/wiki/Lasca | Verified working in prior research |
| Wikipedia Frisian Draughts | ⚠️ Intermittent | en.wikipedia.org/wiki/Frisian_draughts | Verified working in prior research |

---

## Go Family

| Source | Tier | URL | Notes |
|---|---|---|---|
| British Go Association rules | ✅ Reliable | britgo.org/rules | Clear public domain rules |
| American Go Association | ✅ Reliable | usgo.org | Rules + variants |
| Sensei's Library | 🔴 Desktop only | senseis.xmp.net | 403 to bots. Comprehensive Go variant wiki. Desktop only. |
| Wikipedia Go | ⚠️ Intermittent | en.wikipedia.org/wiki/Go_(game) | Good overview |

---

## Mancala Family

| Source | Tier | URL | Notes |
|---|---|---|---|
| Wikipedia Mancala | ⚠️ Intermittent | en.wikipedia.org/wiki/Mancala | Overview + variant list |
| Wikipedia Oware | ⚠️ Intermittent | en.wikipedia.org/wiki/Oware | Most widely played variant |
| Wikipedia Kalah | ⚠️ Intermittent | en.wikipedia.org/wiki/Kalah | Western commercial variant, rules clear |
| Wikipedia Bao | ⚠️ Intermittent | en.wikipedia.org/wiki/Bao_(game) | East African variant |
| Wikipedia Congkak | ⚠️ Intermittent | en.wikipedia.org/wiki/Congkak | Southeast Asian variant |

---

## Backgammon Family

| Source | Tier | URL | Notes |
|---|---|---|---|
| US Backgammon Federation | ✅ Reliable | usbgf.org | Official rules |
| Wikipedia Backgammon | ⚠️ Intermittent | en.wikipedia.org/wiki/Backgammon | Rules + variants |
| Wikipedia Nackgammon | ⚠️ Intermittent | en.wikipedia.org/wiki/Nackgammon | Popular variant |
| Wikipedia Hypergammon | ⚠️ Intermittent | en.wikipedia.org/wiki/Hypergammon | Fast variant |

---

## Nine Men's Morris Family

| Source | Tier | URL | Notes |
|---|---|---|---|
| Wikipedia Nine Men's Morris | ⚠️ Intermittent | en.wikipedia.org/wiki/Nine_men%27s_morris | Full rules + all variants (Three, Six, Twelve Men's Morris) |

---

## Royal Game of Ur

| Source | Tier | URL | Notes |
|---|---|---|---|
| British Museum (Irving Finkel) | ✅ Reliable | britishmuseum.org | Finkel's reconstructed rules. Video + written documentation available. |
| Wikipedia Royal Game of Ur | ⚠️ Intermittent | en.wikipedia.org/wiki/Royal_Game_of_Ur | Good summary of Finkel reconstruction |

---

## Shogi Family

| Source | Tier | URL | Notes |
|---|---|---|---|
| Japan Shogi Association | ✅ Reliable | shogi.or.jp | Official rules (may need translation) |
| Wikipedia Shogi | ⚠️ Intermittent | en.wikipedia.org/wiki/Shogi | English rules + variant list |
| Wikipedia Shogi variants | ⚠️ Intermittent | en.wikipedia.org/wiki/Shogi_variants | Chu Shogi, Kyoto Shogi, etc |

---

## Xiangqi Family

| Source | Tier | URL | Notes |
|---|---|---|---|
| World Xiangqi Federation | ✅ Reliable | wxf.org | Official rules |
| Wikipedia Xiangqi | ⚠️ Intermittent | en.wikipedia.org/wiki/Xiangqi | English rules + variants |

---

## Research Routine Instructions

When researching any game family:

1. Check this file first for known reliable sources
2. Check `.moddable/dead-ends.md` for ruled-out sources before searching
3. Attempt ✅ Reliable sources first, then ⚠️ Intermittent
4. Never attempt 🔴 Desktop only sources — they will 403
5. Must successfully fetch and verify at least 2 independent sources before labelling `ready`
6. If fewer than 2 sources accessible, label `needs-decision` and explain which sources were tried
7. Add any newly discovered reliable sources to this file as part of the research comment
