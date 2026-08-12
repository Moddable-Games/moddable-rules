#!/bin/bash
# Sync board SVG diagrams from moddable-engine.
#
# The engine reads frontmatter from this repo's variant files, resolves
# through its cascade pipeline, and writes self-contained SVGs into
# games/*/diagrams/svg/. Pieces are embedded inline — no external deps.
#
# Usage:
#   ./scripts/sync-boards.sh              # all families
#   ./scripts/sync-boards.sh chess        # single family filter
#   ./scripts/sync-boards.sh --dry-run    # report count only

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
RULES_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
ENGINE_ROOT="${MODDABLE_ENGINE:-$RULES_ROOT/../moddable-engine}"

if [ ! -d "$ENGINE_ROOT/scripts" ]; then
  echo "Error: moddable-engine not found at $ENGINE_ROOT"
  echo "Set MODDABLE_ENGINE env var to override."
  exit 1
fi

EXPORT_SCRIPT="$ENGINE_ROOT/scripts/export-boards.mjs"

if [ ! -f "$EXPORT_SCRIPT" ]; then
  echo "Error: export-boards.mjs not found at $EXPORT_SCRIPT"
  exit 1
fi

ARGS=""
DRY_RUN=false
FAMILY=""

for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=true ;;
    *) FAMILY="$arg" ;;
  esac
done

if [ "$DRY_RUN" = true ]; then
  RULES_ROOT="$RULES_ROOT" node "$EXPORT_SCRIPT" $FAMILY
else
  RULES_ROOT="$RULES_ROOT" node "$EXPORT_SCRIPT" --export $FAMILY
  # Update diagram freshness hashes after successful sync
  node "$RULES_ROOT/scripts/check-diagram-freshness.mjs" --update
fi
