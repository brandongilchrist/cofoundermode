# Skill: Code Review

## Description
Perform a thorough code review on a pull request, checking for correctness, performance, maintainability, test coverage, and adherence to project standards.

## Trigger
PR opened on any engineering repository.

## Input
- PR diff (added/removed/modified lines)
- PR description and linked ticket
- File list and change summary
- Relevant test results

## Output
- Review verdict: APPROVE / REQUEST_CHANGES / COMMENT
- Line-by-line comments on issues found
- Summary of findings with severity (CRITICAL / HIGH / MEDIUM / LOW / STYLE)
- Test coverage assessment

## Checklist
- [ ] Does the code do what the PR description says?
- [ ] Are there edge cases not handled?
- [ ] Are error paths handled gracefully?
- [ ] Is the code readable without comments?
- [ ] Are there performance concerns at scale?
- [ ] Do tests cover the happy path AND error paths?
- [ ] Does this introduce any security concerns?
- [ ] Does this follow existing patterns in the codebase?

## Token Cost
MEDIUM — Depends on PR size, typically 2K-10K tokens per review.
