#!/bin/bash
# Upload generated PDFs to the 'pdfs' GitHub Release.
# Creates the release if it doesn't exist, replaces the assets it uploads.
# Run after npm run pdf to upload the generated files.
#
#   ./scripts/upload-pdfs.sh              every game
#   ./scripts/upload-pdfs.sh chess        one game
#   ./scripts/upload-pdfs.sh chess shogi  several
#
# A release asset is replaced individually, so re-publishing one changed
# rulebook does not need all 582 files and 168MB to go up with it.
#
# Asset naming: {slug}--{filename} (flattened from games/{slug}/pdf/{path}/{file}.pdf)
# Example: games/chess/pdf/variants/standard.pdf -> chess--standard.pdf
#          games/dnd-5e/pdf/rules/combat.pdf -> dnd-5e--rules--combat.pdf
#          games/chess/pdf/chess-variant-library.pdf -> chess--chess-variant-library.pdf

set -euo pipefail

TAG="pdfs"
REPO="Moddable-Games/moddable-rules"
STAGING="/tmp/pdf-upload-staging"

echo "Uploading PDFs to release: $TAG"

# Create release if it doesn't exist
if ! gh release view "$TAG" --repo "$REPO" >/dev/null 2>&1; then
  echo "Creating release $TAG..."
  gh release create "$TAG" --repo "$REPO" --title "PDF Downloads" \
    --notes "Automatically updated PDF downloads for all rulebooks, variants, and sub-pages. Links from the live site point here." \
    --latest=false
fi

# Stage files with flattened names.
#
# The naming rule lives in scripts/lib/pdf-assets.mjs, which check-pdf-release
# also reads. It used to live here alone, so anything else that wanted to reason
# about the published PDFs had to re-derive it - and the check that tells you
# the release is stale must agree with the uploader about which file is which,
# or it reports drift that is only a difference of opinion about names.
rm -rf "$STAGING" && mkdir -p "$STAGING"
count=0
while IFS=$'\t' read -r pdf asset_name; do
  [ -f "$pdf" ] || continue
  cp "$pdf" "$STAGING/$asset_name"
  count=$((count + 1))
done < <(node "$RULES_ROOT/scripts/lib/pdf-assets.mjs" "$@")

if [ "$count" -eq 0 ]; then
  echo "No PDFs matched${*:+ for: $*}. Nothing uploaded."
  rm -rf "$STAGING"
  exit 0
fi

echo "Staged $count PDFs for upload${*:+ (games: $*)}"

# Upload all at once (gh release upload accepts multiple files)
# Split into batches of 50 to avoid argument length limits
cd "$STAGING"
find . -name "*.pdf" -print0 | xargs -0 -n 50 gh release upload "$TAG" --repo "$REPO" --clobber

rm -rf "$STAGING"
echo "Done: $count PDFs uploaded to https://github.com/$REPO/releases/tag/$TAG"
