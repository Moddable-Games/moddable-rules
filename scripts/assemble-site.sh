#!/bin/bash
# Assemble the deployable site tree into _site/.
#
# Production copies `diagrams/` and `dist/*` into the SAME root, so a gallery
# card's `../chess/variants/x/index.html` resolves. Serving the repo root
# locally puts them in different places - the built pages are under dist/ - so
# every Rules link in the diagrams gallery 404s locally and works in production,
# which reads as a broken link rather than a different tree.
#
# The steps lived only in .github/workflows/deploy.yml, where local dev could
# not run them. They live here now and the workflow calls this, so the tree you
# test is the tree that deploys.
#
# Usage:
#   ./scripts/assemble-site.sh          # build into _site/
#   npm run site                        # same, after a fresh npm run build

set -euo pipefail
cd "$(cd "$(dirname "$0")/.." && pwd)"

rm -rf _site
mkdir -p _site

cp .nojekyll _site/ 2>/dev/null || true
cp CNAME _site/ 2>/dev/null || true
cp -r .well-known _site/ 2>/dev/null || true
cp robots.txt _site/ 2>/dev/null || true
cp sitemap.xml _site/ 2>/dev/null || true
cp llms.txt _site/ 2>/dev/null || true
cp auth.md _site/ 2>/dev/null || true
cp diagrams-manifest.json _site/ 2>/dev/null || true
cp -r diagrams _site/
cp -r dist/* _site/
cp -r shared _site/ 2>/dev/null || true
rsync -a --exclude='pdf/' games/ _site/games/
cp -r js _site/
cp -r css _site/

echo "Assembled _site/ ($(find _site -type f | wc -l | tr -d ' ') files)"
echo "Serve it with:  npx serve _site   (or any static server rooted there)"
