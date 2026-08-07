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
STAGING="/tmp/pdf-upload-staging"

echo "Uploading PDFs to release: $TAG"

# Create release if it doesn't exist
if ! gh release view "$TAG" --repo "$REPO" >/dev/null 2>&1; then
  echo "Creating release $TAG..."
  gh release create "$TAG" --repo "$REPO" --title "PDF Downloads" \
    --notes "Automatically updated PDF downloads for all rulebooks, variants, and sub-pages. Links from the live site point here." \
    --latest=false
fi

# Stage files with flattened names
rm -rf "$STAGING" && mkdir -p "$STAGING"
count=0
for pdf in games/*/pdf/**/*.pdf games/*/pdf/*.pdf; do
  [ -f "$pdf" ] || continue
  slug=$(echo "$pdf" | cut -d/ -f2)
  rest=$(echo "$pdf" | sed "s|games/${slug}/pdf/||")
  # Skip versioned archives
  case "$rest" in
    *-v[0-9]*) continue ;;
  esac
  # Flatten: variants/standard.pdf -> standard.pdf, rules/combat.pdf -> rules--combat.pdf
  flat=$(echo "$rest" | sed 's|/|--|g')
  asset_name="${slug}--${flat}"
  cp "$pdf" "$STAGING/$asset_name"
  count=$((count + 1))
done

echo "Staged $count PDFs for upload"

# Upload all at once (gh release upload accepts multiple files)
# Split into batches of 50 to avoid argument length limits
cd "$STAGING"
find . -name "*.pdf" -print0 | xargs -0 -n 50 gh release upload "$TAG" --repo "$REPO" --clobber

rm -rf "$STAGING"
echo "Done: $count PDFs uploaded to https://github.com/$REPO/releases/tag/$TAG"
