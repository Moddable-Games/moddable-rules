# Authentication

No authentication required. All content on rules.moddable.games is freely accessible.

## Static API

All endpoints under `/api/` are open. No API keys, tokens, or headers needed.

- Discovery: `GET /api/index.json`
- Catalogue: `GET /api/catalogue.json`
- Per-game: `GET /api/rules/{slug}/meta.json`

## MCP Tools

The MCP endpoint at `https://tools.moddable.games/mcp` is also open access with no authentication.

## Rate Limits

No rate limits. This is a static site hosted on GitHub Pages. Standard CDN caching applies.
