#!/bin/bash
# Upload all generated PDFs to the 'pdfs' GitHub Release.
# Creates the release if it doesn't exist, replaces all assets if it does.
# Run after npm run pdf to upload the generated files.
#
# Asset naming: {slug}--{filename} (flattened from games/{slug}/pdf/{path}/{file}.pdf)
# Example: games/chess/pdf/variants/standard.pdf -> chess--standard.pdf
#          games/dnd-5e/pdf/rules/combat.pdf -> dnd-5e--rules--combat.pdf
#          games/chess/pdf/chess-variant-library.pdf -> chess--chess-variant-library.pdf

set -euo pipefail

TAG="pdfs"
REPO="Moddable-Games/moddable-rules"

echo "Uploading PDFs to release: $TAG"

# Create release if it doesn't exist
if ! gh release view "$TAG" --repo "$REPO" >/dev/null 2>&1; then
  echo "Creating release $TAG..."
  gh release create "$TAG" --repo "$REPO" --title "PDF Downloads" \
    --notes "Automatically updated PDF downloads for all rulebooks, variants, and sub-pages. Links from the live site point here." \
    --latest=false
fi

# Delete existing assets (full replace on each upload)
echo "Clearing existing assets..."
gh release view "$TAG" --repo "$REPO" --json assets --jq '.assets[].name' 2>/dev/null | while read -r name; do
  gh release delete-asset "$TAG" "$name" --repo "$REPO" --yes 2>/dev/null || true
done

# Upload all PDFs with flattened names
count=0
for pdf in games/*/pdf/**/*.pdf games/*/pdf/*.pdf; do
  [ -f "$pdf" ] || continue
  # Extract slug and relative path: games/{slug}/pdf/{rest}
  slug=$(echo "$pdf" | cut -d/ -f2)
  rest=$(echo "$pdf" | sed "s|games/${slug}/pdf/||")
  # Skip versioned archives (e.g. chess-variant-library-v0.6.0.pdf)
  if echo "$rest" | grep -qE '-v[0-9]+\.[0-9]+'; then
    continue
  fi
  # Flatten path: variants/standard.pdf -> standard.pdf, rules/combat.pdf -> rules--combat.pdf
  flat=$(echo "$rest" | sed 's|/|--|g')
  asset_name="${slug}--${flat}"
  echo "  $asset_name"
  gh release upload "$TAG" "$pdf#${asset_name}" --repo "$REPO" --clobber
  count=$((count + 1))
done

echo "Done: $count PDFs uploaded to https://github.com/$REPO/releases/tag/$TAG"
