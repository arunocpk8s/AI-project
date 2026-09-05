# Push reviews

This repository's `pre-push` hook runs `code_review` and `security_review`
concurrently as independent Codex CLI review sessions, loading their instructions
from `.codex/agents/*.toml`. These are fresh sessions on each push, not persistent
background agents. Both must report complete coverage and zero actionable findings.
Errors, missing tools, authentication failures, invalid results, and timeouts block
the push. Each review has a 30-minute timeout.

Requires Python 3.11+ and an authenticated `codex` executable on PATH. Reviews use
the configured Codex provider and consume tokens. Raw agent logs are suppressed to
avoid reproducing secrets; on failure request an interactive review for redacted
findings. No automated review guarantees detection of every secret or bug.

The hook reviews the exact object IDs supplied by Git for every outgoing ref,
including intermediate history for secret scanning. New refs require full reachable
history review. It does not substitute a working-tree review for outgoing commits.

Installed locally with `git config --local core.hooksPath .githooks`.
After cloning, run that command again and on Unix run `chmod +x .githooks/pre-push`.
Keep the hook, runner, and agent definitions in version control.

Local hooks can be bypassed or changed by a repository owner. Remote required checks
and branch protection are needed for enforcement against bypass. Git may reject a
push before reaching the hook (for example, if the remote is unreachable).
