# space-hub-card-editor-navigation

Room dashboard card and the visual reference for every other card. All three directories belong to one git repository, `bitosome/space-hub-card`. Run `git -C …/space-hub-card worktree list` to see them.

<!-- workspace-pointer -->
## Shared workspace rules

Part of the bitosome Home Assistant workspace. Shared rules, access (SSH, ha-mcp) and processes
are in `../AGENTS.md` (the workspace entry point) and `../home-assistant-knowledge/`; they take
precedence over this file. Build, test, release and known gotchas for this repo:
[repo catalog](../home-assistant-knowledge/docs/repo-catalog.md#space-hub-card-three-checkouts-one-remote).

- Edit and release from this checkout; never patch production directly.
- Push, tag/release, HACS install, production changes, reloads and restarts need the owner's explicit approval.
- Shared UI comes from `@bitosome/ha-card-ui` (exact release tarball pin). Build anything two or more cards use there first; follow `../home-assistant-knowledge/docs/card-style-guide.md`.
- After a release or install, update `docs/current-state.md` and `docs/changelog.md` in the knowledge repo.
