#!/bin/bash
# Sync character sheet SVGs from moddable-engine.
#
# The engine reads rpg-manifest.json chargen blocks from this repo,
# renders blank A4 character sheets, and writes SVGs into
# games/*/diagrams/svg/. Same pattern as sync-boards.sh.
#
# Usage:
#   ./scripts/sync-chargen.sh              # all RPGs
#   ./scripts/sync-chargen.sh dnd-5e       # single game
#   ./scripts/sync-chargen.sh --dry-run    # report count only

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
RULES_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
ENGINE_ROOT="${MODDABLE_ENGINE:-$RULES_ROOT/../moddable-engine}"

if [ ! -d "$ENGINE_ROOT/scripts" ]; then
  echo "Error: moddable-engine not found at $ENGINE_ROOT"
  echo "Set MODDABLE_ENGINE env var to override."
  exit 1
fi

EXPORT_SCRIPT="$ENGINE_ROOT/scripts/export-chargen.mjs"

if [ ! -f "$EXPORT_SCRIPT" ]; then
  echo "Error: export-chargen.mjs not found at $EXPORT_SCRIPT"
  exit 1
fi

ARGS=""
DRY_RUN=false
GAME=""

for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=true ;;
    *) GAME="$arg" ;;
  esac
done

if [ "$DRY_RUN" = true ]; then
  RULES_ROOT="$RULES_ROOT" node "$EXPORT_SCRIPT" $GAME
else
  RULES_ROOT="$RULES_ROOT" node "$EXPORT_SCRIPT" --export $GAME
fi
