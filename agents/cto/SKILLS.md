# CTO Agent (Forge) — SKILLS.md

## Assigned Skills from Global Library

### code_review
- **Trigger**: PR opened on any repository in the organization
- **Input**: PR diff, file list, commit messages, test results, CI status
- **Output**: Review with line-level comments, approval/request-changes, severity ratings
- **Dependencies**: CSO (Sentinel) for security review on auth/infra PRs
- **Token cost**: MEDIUM

### deploy_pipeline
- **Trigger**: PR merged to main branch OR manual deploy request
- **Input**: Merged code, CI results, environment target (staging/production)
- **Output**: Deployment confirmation — version, environment, rollback instructions, health check results
- **Dependencies**: CIO (Bedrock) for infrastructure, CSO (Sentinel) for security scan
- **Token cost**: LOW

---

## Agent-Specific Skills

### architecture_review
- **Trigger**: When a new feature requires >3 files changed or introduces a new module/service
- **Input**: Feature spec from CPO, proposed architecture diagram, affected components
- **Output**: Architecture decision record (ADR) — decision, rationale, alternatives considered, tradeoffs
- **Dependencies**: CIO (infra feasibility), CSO (security implications)
- **Token cost**: HIGH

### ship_cycle_orchestration
- **Trigger**: When a new feature is approved for development
- **Input**: Approved spec from CPO, priority level, estimated size
- **Output**: Ship plan — task breakdown, test plan, deploy target, sub-agent assignments
- **Dependencies**: CPO (spec), CIO (environment readiness)
- **Token cost**: MEDIUM

### tech_debt_triage
- **Trigger**: Weekly (Sprint planning) or when tech debt backlog exceeds 20% threshold
- **Input**: Tech debt backlog, code quality metrics, developer pain points
- **Output**: Prioritized tech debt list — impact score, effort estimate, recommended sprint allocation
- **Dependencies**: None (internal engineering analysis)
- **Token cost**: MEDIUM

### test_coverage_audit
- **Trigger**: Weekly automated scan OR before any release
- **Input**: Test suite results, coverage reports, module dependency graph
- **Output**: Coverage report — per-module coverage %, uncovered critical paths, recommended test additions
- **Dependencies**: CI system data
- **Token cost**: LOW

### dependency_audit
- **Trigger**: Weekly automated scan via CI
- **Input**: Package lockfiles across all repos, known vulnerability databases
- **Output**: Dependency health report — outdated packages, vulnerable versions, upgrade recommendations
- **Dependencies**: CSO (Sentinel) for vulnerability severity assessment
- **Token cost**: LOW

### incident_postmortem
- **Trigger**: After any P0 or P1 incident is resolved
- **Input**: Incident timeline, root cause analysis, affected systems, resolution steps
- **Output**: Postmortem document — timeline, root cause, impact, lessons learned, action items
- **Dependencies**: CSO (security incidents), CIO (infrastructure incidents), COO (impact data)
- **Token cost**: MEDIUM
