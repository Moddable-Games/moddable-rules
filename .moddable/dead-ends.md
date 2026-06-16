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
| Wikipedia | en.wikipedia.org | Intermittently 403. If blocked, try archive.org mirror. |
| Senseis Library | senseis.xmp.net | 403 to bots. Go variant rules. Desktop only. |
| Carcassonne Central | carcassonnecentral.com | Connection refused. |
| Gloomhaven Fandom | gloomhaven.fandom.com | 403 to bots. |
| Cephalofair website | cephalofair.com | 403 to bots. Fan content policy unverifiable by routine. |
| Scribd (meepleeater) | scribd.com | Account permanently deleted. |
| PrintPlayGames.com | printplaygames.com | Site shut down March 2026. |

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
| Ultimate Monopoly (jonizaak) | Fan compilation of proprietary rulebooks (Hasbro / Winning Moves / RAD Games). Creator disclaims authorship of the text — not an original open-licensed work. Monopoly is a modern commercial game family (Hasbro trademark, active since 1935) — excluded from moddable-rules scope entirely. DeviantArt, BGG, and direct PDF CDN all 403 to bots; rules PDF unreadable as binary. Open alternative identified: The Landlord's Game (see moddable-rules#65). | 2026-06 |
| Monopoly (all editions) | Modern commercial game family. Hasbro trademark active since 1935. Categorically excluded from moddable-rules scope regardless of fan licence claims. Note: the website mod library may list Monopoly mods as externally-linked community content without hosting rules — that is acceptable. Only moddable-rules is restricted. | 2026-06 |

---

## Avenues That Produced Nothing

Searches and approaches that returned no usable results.

| Search / Approach | Result | Date |
|---|---|---|
| GitHub search: CC-licensed Carcassonne fan expansion rules | 0 results | 2026-06 |
| GitHub search: CC-licensed Gloomhaven scenario rules | 0 results | 2026-06 |
| GitHub search: CC-licensed Ultimate Monopoly rules text | 0 results — MIT licence covers code only, not rules | 2026-06 |

---

## Reconsidering a Dead End

Before re-investigating anything in this file, there must be a specific new reason:
- A source has changed its bot policy
- A publisher has issued new explicit CC licensing
- A new GitHub repo with verified open-licensed rules has been identified by Mark

If reconsidering, create a new issue with the specific new information. Do not simply retry a blocked URL.
