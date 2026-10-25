#!/usr/bin/env bash
# Compatibility entry point: synchronizes the complete shared card design.
set -euo pipefail
node "$(dirname "$0")/sync-card-design.mjs" "$@"
