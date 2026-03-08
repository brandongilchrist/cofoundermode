# Skill: Deploy Pipeline

## Description
Execute a full deployment pipeline from code merge through production release, including build, test, security scan, staging deploy, and production cutover.

## Trigger
- PR merged to main branch
- Manual deploy request from CTO
- Hotfix deployment

## Input
- Commit SHA or PR reference
- Target environment (staging / production)
- Deployment type (regular / hotfix / rollback)
- Change description

## Output
- Build artifacts (Docker image, binary, etc.)
- Test results (unit, integration, e2e)
- Security scan results
- Deployment confirmation with:
  - Deployed version
  - Environment
  - Timestamp
  - Health check status
  - Rollback instructions

## Pipeline Steps
1. Checkout code at specified commit
2. Run full test suite
3. Run security scan (dependency audit, SAST)
4. Build deployment artifact
5. Deploy to staging
6. Run smoke tests against staging
7. If pass → deploy to production
8. Run health checks against production
9. Monitor for 30 minutes
10. If degradation → automatic rollback

## Token Cost
LOW — Pipeline is mostly automated; agent orchestration is 1K-3K tokens.
