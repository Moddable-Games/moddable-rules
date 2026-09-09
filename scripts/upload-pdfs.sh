#!/bin/bash
# Upload generated PDFs to the 'pdfs' GitHub Release.
# Creates the release if it doesn't exist, replaces the assets it uploads.
# Run after npm run pdf to upload the generated files.
#
#   ./scripts/upload-pdfs.sh              every game
#   ./scripts/upload-pdfs.sh chess        one game
#   ./scripts/upload-pdfs.sh chess shogi  several
#   ./scripts/upload-pdfs.sh --dry-run go  stage and report, upload nothing
#   ./scripts/upload-pdfs.sh --record      write the source record only, no PDFs
#
# A release asset is replaced individually, so re-publishing one changed
# rulebook does not need all 582 files and 168MB to go up with it.
#
# Asset naming: {slug}--{filename} (flattened from games/{slug}/pdf/{path}/{file}.pdf)
# Example: games/chess/pdf/variants/standard.pdf -> chess--standard.pdf
#          games/dnd-5e/pdf/rules/combat.pdf -> dnd-5e--rules--combat.pdf
#          games/chess/pdf/chess-variant-library.pdf -> chess--chess-variant-library.pdf

set -euo pipefail

# Where the repo is, asked of this script's own location rather than an
# environment variable. $RULES_ROOT was never set by anything, and because the
# failure happened inside a process substitution it killed only that subshell:
# the loop read nothing, count stayed 0, and the script exited 0 saying
# "nothing uploaded". A no-op that reports success is how a release drifts.
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# --dry-run stages the files and prints the count, but talks to no release.
# check-pdf-upload.mjs uses it to prove the staging loop still reads anything
# at all.
DRY_RUN=0
RECORD_ONLY=0
ARGS=()
for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=1 ;;
    --record)  RECORD_ONLY=1 ;;
    *)         ARGS+=("$arg") ;;
  esac
done
set -- ${ARGS[@]+"${ARGS[@]}"}

TAG="pdfs"
REPO="Moddable-Games/moddable-rules"
STAGING="/tmp/pdf-upload-staging"

echo "Uploading PDFs to release: $TAG"

# Create release if it doesn't exist
if [ "$DRY_RUN" -eq 0 ] && ! gh release view "$TAG" --repo "$REPO" >/dev/null 2>&1; then
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

# --record republishes only the source record, for when the PDFs on the release
# have been verified as current but predate the record itself.
if [ "$RECORD_ONLY" -eq 1 ]; then
  node "$ROOT/scripts/build-release-manifest.mjs" "$STAGING/release-manifest.json" "$@"
  gh release upload "$TAG" --repo "$REPO" --clobber "$STAGING/release-manifest.json"
  rm -rf "$STAGING"
  echo "Done: source record updated on https://github.com/$REPO/releases/tag/$TAG"
  exit 0
fi

count=0
while IFS=$'\t' read -r pdf asset_name; do
  [ -f "$pdf" ] || continue
  cp "$pdf" "$STAGING/$asset_name"
  count=$((count + 1))
done < <(node "$ROOT/scripts/lib/pdf-assets.mjs" "$@")

# Nothing staged is a failure, not a quiet success. Either the names given
# match no game, or the listing itself broke - both need saying out loud.
if [ "$count" -eq 0 ]; then
  echo "No PDFs matched${*:+ for: $*}. Nothing uploaded." >&2
  rm -rf "$STAGING"
  exit 1
fi

# Beside the PDFs goes the record of what content they were built from. Two
# producers now build these - this machine and the runner - and their bytes
# differ for identical text, so the release check asks whether the published
# PDF came from the current source rather than whether it matches local bytes.
node "$ROOT/scripts/build-release-manifest.mjs" "$STAGING/release-manifest.json" "$@"

echo "Staged $count PDFs for upload${*:+ (games: $*)}"

if [ "$DRY_RUN" -eq 1 ]; then
  rm -rf "$STAGING"
  echo "Dry run: nothing uploaded."
  exit 0
fi

# Upload all at once (gh release upload accepts multiple files)
# Split into batches of 50 to avoid argument length limits
cd "$STAGING"
find . -name "*.pdf" -print0 | xargs -0 -n 50 gh release upload "$TAG" --repo "$REPO" --clobber

rm -rf "$STAGING"
echo "Done: $count PDFs uploaded to https://github.com/$REPO/releases/tag/$TAG"
