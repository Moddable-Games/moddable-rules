# Moddable Rules — Dead Ends Registry

This file documents every source, game, and avenue that has been investigated and ruled out.
Every research routine must read this file before starting work.
Do not re-investigate anything listed here without a specific new reason to believe circumstances have changed.

---

## Blocked Sources (403 to automated requests)

These sources block all automated/bot requests. They may contain useful content but cannot be accessed by research routines. Desktop research only.

| Source | URL | Notes |
|---|---|---|
| BoardGameGeek | boardgamegeek.com | 403 to all bots. Useful for files, reviews, variant lists. Desktop only. |
| Wikicarpedia | wikicarpedia.com | Runs Anubis bot-detection. Carcassonne fan expansion rules. Desktop only. |
| chessvariants.com | chessvariants.com | 403 to bots. Licence unknown. Do not attempt. |
| Wikipedia | en.wikipedia.org | 403 from cloud runner environment. Accessible from Desktop via web search. |
| Google Patents | patents.google.com | 403 from cloud runner environment. Accessible from Desktop. |
| archive.org | archive.org | Blocked entirely from cloud runner. Desktop only. |
| landlordsgame.info | landlordsgame.info | 403 from cloud runner. Content available via GitHub API (hoelzl/L3). |
| Senseis Library | senseis.xmp.net | 403 to bots. Go variant rules. Desktop only. |
| Carcassonne Central | carcassonnecentral.com | Connection refused. |
| Gloomhaven Fandom | gloomhaven.fandom.com | 403 to bots. |
| Cephalofair website | cephalofair.com | 403 to bots. Fan content policy unverifiable by routine. |
| Scribd (meepleeater) | scribd.com | Account permanently deleted. |
| PrintPlayGames.com | printplaygames.com | Site shut down March 2026. |

**Note on cloud runner environment:** All outbound web traffic is blocked from the Claude Code cloud runner. This affects Wikipedia, Google Patents, archive.org, and all other external URLs. The workaround for public domain game rules is GitHub API search — many public domain rulesets have been transcribed into public GitHub repos. Always try GitHub search before declaring sources inaccessible. See research.md for the GitHub search strategy.

---

## Games Ruled Out (licensing or availability)

These games have been investigated and cannot be included in moddable-rules under current criteria.

| Game | Reason | Investigated |
|---|---|---|
| Anti-Monopoly | Commercially published (University Games). Not redistributable. | 2026-06 |
| CivRisk | Author gone, no licence, no contact possible. | 2026-06 |
| Custom World Risk | Not a real published mod — no verifiable source. | 2026-06 |
| Gloomhaven fan content | Cephalofair custom fan content policy — not standard CC. Redistribution terms unclear. Not open-licensed per our criteria. | 2026-06 |
| Carcassonne fan expansions (via Wikicarpedia) | Site is 403 to bots. Licence suspected CC BY-NC-SA — NC clause incompatible with moddable.games redistribution. Requires Desktop verification before reconsidering. | 2026-06 |
| Ultimate Monopoly (jonizaak) | Fan compilation of proprietary rulebooks (Hasbro / Winning Moves / RAD Games). Creator disclaims authorship of the text — not an original open-licensed work. Monopoly is a modern commercial game family (Hasbro trademark, active since 1935) — excluded from moddable-rules scope entirely. Open alternative identified: The Landlord's Game (see moddable-rules#65). | 2026-06 |
| Monopoly (all editions) | Modern commercial game family. Hasbro trademark active since 1935. Categorically excluded from moddable-rules scope regardless of fan licence claims. | 2026-06 |
| Catan / Settlers of Catan (all editions) | Modern commercial game family. Klaus Teuber design, 1995. Kosmos/Asmodee trademark active. No public domain precursor exists — unlike Monopoly, there is no historical equivalent to pivot to. All open-source digital implementations (JSettlers2, Pioneers, Colonist.io, etc.) implement Catan's commercially-locked rules — they are software forks, not open-licensed rulesets. The hex-based settlement and resource trading mechanic is a design pattern, not a ruleset — it cannot be documented as a moddable-rules entry. The Moddable Hexmaps "Colony" tool generates Catan-style maps but carries no associated open rulebook. | 2026-06-17 |

---

## Avenues That Produced Nothing

Searches and approaches that returned no usable results.

| Search / Approach | Result | Date |
|---|---|---|
| GitHub search: CC-licensed Carcassonne fan expansion rules | 0 results | 2026-06 |
| GitHub search: CC-licensed Gloomhaven scenario rules | 0 results | 2026-06 |
| GitHub search: CC-licensed Ultimate Monopoly rules text | 0 results — MIT licence covers code only, not rules | 2026-06 |
| Web search: open-licensed Catan alternative ruleset | No standalone open-licensed board game ruleset found. All results are proprietary digital implementations or software clones. | 2026-06-17 |

---

## Reconsidering a Dead End

Before re-investigating anything in this file, there must be a specific new reason:
- A source has changed its bot policy
- A publisher has issued new explicit CC licensing
- A new GitHub repo with verified open-licensed rules has been identified by Mark

If reconsidering, create a new issue with the specific new information. Do not simply retry a blocked URL.
