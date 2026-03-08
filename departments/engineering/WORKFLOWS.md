# Engineering Workflows

## 1. Feature Development

```
Trigger: New task assigned in Linear with label "engineering"
Steps:
  1. CTO reviews task, estimates complexity, assigns to self or sub-agent
  2. Assigned agent creates feature branch: feature/{ticket-id}-{short-desc}
  3. Agent writes tests FIRST (TDD — non-negotiable)
  4. Agent implements the feature to pass all tests
  5. Agent opens PR with description, test results, and any MEMORY.md updates
  6. CTO agent runs code review
  7. CSO agent runs security review (if PR touches auth/infra/data)
  8. Both must approve before merge
  9. Merge triggers CI/CD → deploy to staging → deploy to production
  10. Agent updates Linear ticket status and adds completion notes
```

## 2. Bug Fix

```
Trigger: Bug report in Linear with label "bug" and priority
Steps:
  1. CTO triages severity (P0-P3)
  2. P0/P1: Immediate assignment, drop current work
  3. P2/P3: Queue for next available cycle
  4. Agent writes a failing test that reproduces the bug
  5. Agent fixes the code until test passes
  6. Standard PR + review flow
  7. Post-mortem for P0/P1: root cause analysis in MEMORY.md
```

## 3. Code Review

```
Trigger: PR opened on any engineering repo
Steps:
  1. CTO agent receives notification via GitHub adapter
  2. Reviews for: correctness, performance, maintainability, test coverage
  3. If PR touches auth/infra/data → also assign to CSO for security review
  4. Approve, request changes, or escalate to board if architecturally significant
  5. Log review decision in MEMORY.md
```

## 4. Deploy Pipeline

```
Trigger: PR merged to main branch
Steps:
  1. GitHub Actions runs full test suite
  2. Security scan (dependency audit, SAST)
  3. Build Docker image / compile binary
  4. Deploy to staging environment
  5. Run smoke tests against staging
  6. If pass → deploy to production
  7. If fail → alert CTO + revert PR
  8. Monitor production metrics for 30 minutes post-deploy
```

## 5. Tech Debt Sprint

```
Trigger: Monthly, first Monday of the month
Steps:
  1. CTO reviews accumulated tech debt items
  2. Selects top 3-5 items by impact
  3. Creates sprint with tech debt label
  4. Agents execute during the week alongside regular work (20% capacity)
  5. Results reported in weekly engineering section
```
