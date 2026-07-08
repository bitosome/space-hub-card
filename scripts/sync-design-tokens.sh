#!/usr/bin/env bash
#
# Sync the canonical design tokens from this repo (the source of truth) into the
# sibling bitosome card repos so every card shares one look & feel.
#
# Usage:
#   ./scripts/sync-design-tokens.sh
#
# Run this whenever src/shared/design-tokens.ts changes here.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
SIBLINGS_ROOT="$(cd "$REPO_ROOT/.." && pwd)"

SOURCE="$REPO_ROOT/src/shared/design-tokens.ts"

if [[ ! -f "$SOURCE" ]]; then
  echo "error: source of truth not found: $SOURCE" >&2
  exit 1
fi

BANNER="// AUTO-SYNCED from space-hub-card/src/shared/design-tokens.ts — DO NOT EDIT.
// Run space-hub-card/scripts/sync-design-tokens.sh to update.
"

# TypeScript/Lit consumers that vendor a copy of the module.
TS_TARGETS=(
  "$SIBLINGS_ROOT/real-electricity-price-card/src/shared/design-tokens.ts"
)

updated=0
for target in "${TS_TARGETS[@]}"; do
  target_dir="$(dirname "$target")"
  if [[ ! -d "$target_dir" ]]; then
    echo "skip (missing dir): $target"
    continue
  fi
  { printf '%s' "$BANNER"; cat "$SOURCE"; } > "$target"
  echo "synced -> $target"
  updated=$((updated + 1))
done

echo
echo "Synced $updated TypeScript target(s)."
echo "NOTE: smartevse-dual-charger-card is vanilla JS and embeds the tokens inline"
echo "      in the :host block of smartevse-dual-charger-card.js. Keep the token"
echo "      values in that file in sync with $SOURCE manually until it is migrated"
echo "      to the TS/Lit build (see README)."
