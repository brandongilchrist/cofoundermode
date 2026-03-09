# Workflow: Code Review Gate

## Overview
Every pull request must pass through this gate before merging. Combines automated CI checks,
engineering review (CTO), and conditional security review (CSO) based on file scope.

## Trigger
- Pull Request opened or updated on any repository

## Participants
| Step | Agent | Role | Required? |
|------|-------|------|-----------|
| 1 | CI System | Automated: tests, lint, build | Always |
| 2 | CTO (Forge) | Review: code quality, architecture | Always |
| 3 | CSO (Sentinel) | Review: security implications | Conditional |
| 4 | CIO (Bedrock) | Review: infrastructure impact | Conditional |

## Flow

```
┌──────────────────────┐
│  PR OPENED / UPDATED  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  AUTOMATED CHECKS     │
│  ✓ Tests pass         │
│  ✓ Lint clean         │
│  ✓ Build succeeds     │
│  ✓ Coverage ≥ 80%     │
│  ✓ No secrets in diff │
└──────────┬───────────┘
           │ (all pass)
           ▼
┌──────────────────────┐
│  FILE SCOPE ANALYSIS  │
│  Which files changed? │
└──────────┬───────────┘
           │
     ┌─────┼─────────────────────────┐
     │     │                         │
     ▼     ▼                         ▼
┌────────┐ ┌─────────────────┐ ┌──────────────┐
│ CTO    │ │ CSO (if auth/   │ │ CIO (if      │
│ Review │ │ secrets/infra/  │ │ terraform/   │
│        │ │ data storage)   │ │ CI config/   │
│ Always │ │                 │ │ infra files) │
└───┬────┘ └───────┬─────────┘ └──────┬───────┘
    │              │                   │
    └──────┬───────┴───────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│  MERGE CRITERIA                       │
│                                       │
│  Standard PR:                         │
│  ✓ CI green                           │
│  ✓ 1 approval (CTO)                  │
│                                       │
│  Security-scoped PR:                  │
│  ✓ CI green                           │
│  ✓ 1 CTO approval                    │
│  ✓ 1 CSO approval                    │
│                                       │
│  Infra-scoped PR:                     │
│  ✓ CI green                           │
│  ✓ 1 CTO approval                    │
│  ✓ 1 CIO approval                    │
│  ✓ 1 CSO approval (Terraform)        │
└──────────────────────────────────────┘
```

## Security-Scoped File Patterns
These patterns trigger mandatory CSO review:
```
**/auth/**
**/secrets/**
**/security/**
*.env*
**/middleware/auth*
**/infra/**
**/terraform/**
docker-compose*.yml
Dockerfile*
**/config/database*
**/migrations/**
```

## Infrastructure-Scoped File Patterns
These patterns trigger mandatory CIO review:
```
**/terraform/**
**/infra/**
docker-compose*.yml
Dockerfile*
.github/workflows/**
**/ci/**
**/deploy/**
```

## Review Checklists

### CTO Review
- [ ] Code quality: readable, maintainable, follows conventions
- [ ] Test coverage: new code has tests, edge cases covered
- [ ] Architecture: fits existing patterns, no unnecessary complexity
- [ ] Performance: no obvious bottlenecks, efficient queries
- [ ] Documentation: comments where needed, README updated if applicable

### CSO Review (when triggered)
- [ ] OWASP Top 10: no injection, XSS, CSRF, etc.
- [ ] Authentication: correct auth checks, no bypasses
- [ ] Authorization: proper access control, least privilege
- [ ] Secrets: no hardcoded secrets, proper env var usage
- [ ] Data handling: PII protected, encryption where needed
- [ ] Dependencies: no known vulnerable packages introduced

### CIO Review (when triggered)
- [ ] Terraform: plan reviewed, no destructive changes without approval
- [ ] CI/CD: pipeline changes tested, no security regressions
- [ ] Infrastructure: right-sized resources, cost considered
- [ ] Networking: security groups appropriate, no open ports

## SLAs
| Review Type | Deadline | Escalation |
|-------------|----------|------------|
| CTO review | 4 hours | CEO (Atlas) |
| CSO review | 8 hours | CEO (Atlas) |
| CIO review | 8 hours | CEO (Atlas) |

## Error Handling
- CI failure: PR cannot merge, author notified
- Review conflict: CEO (Atlas) arbitrates
- Emergency hotfix: CSO can bypass with post-merge review (logged + tracked)
