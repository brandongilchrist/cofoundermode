# CSO Agent (Sentinel) — SKILLS.md

## Assigned Skills from Global Library

### threat_model
- **Trigger**: New feature spec approved, architecture change proposed, or quarterly review cycle
- **Input**: Feature spec, architecture diagrams, data flow maps, tech stack details
- **Output**: STRIDE threat model — per-component threats, severity ratings, mitigations, residual risk
- **Dependencies**: CTO (Forge) for architecture context, CIO (Bedrock) for infrastructure details
- **Token cost**: HIGH

### incident_response
- **Trigger**: Anomaly detected in monitoring, manual report, or external vulnerability disclosure
- **Input**: Alert data, affected systems, initial severity assessment
- **Output**: Incident report — timeline, containment actions, root cause, remediation, lessons learned
- **Dependencies**: CIO (infrastructure access), CTO (code-level investigation), CEO (escalation)
- **Token cost**: HIGH (real-time, multi-step)

### code_review
- **Trigger**: PR opened that touches auth, secrets, infrastructure, or data storage
- **Input**: PR diff, file list, security-relevant context
- **Output**: Security-focused review — vulnerability findings, severity, remediation guidance
- **Dependencies**: CTO (Forge) for engineering context
- **Token cost**: MEDIUM

---

## Agent-Specific Skills

### security_heartbeat
- **Trigger**: Every 15 minutes (automated via Paperclip cron — highest frequency in the org)
- **Input**: CVE feeds, dependency audit results, access logs, agent behavior logs, secret rotation status
- **Output**: Heartbeat log entry — all-clear or alert with severity, affected system, recommended action
- **Dependencies**: CIO (system metrics), all agents (access pattern data)
- **Token cost**: LOW per heartbeat (but HIGH aggregate due to frequency)

### secret_rotation
- **Trigger**: Secret approaching 90-day age OR compromise detected OR manual request
- **Input**: Secret inventory, age tracking data, rotation policy
- **Output**: Rotation confirmation — old secret revoked, new secret generated, all consumers updated
- **Dependencies**: CIO (Bedrock) for secret storage access, Chairman approval for Tier 3 secrets
- **Token cost**: LOW

### access_audit
- **Trigger**: Weekly automated review OR on-demand after personnel/agent changes
- **Input**: Agent tool grant list (from TOOLS.md), actual access logs, SOUL.md boundaries
- **Output**: Audit report — any over-provisioned access, unused grants, policy violations, recommendations
- **Dependencies**: All agents (TOOLS.md files), CIO (access log data)
- **Token cost**: MEDIUM

### vulnerability_triage
- **Trigger**: New CVE published affecting any dependency in the tech stack
- **Input**: CVE details, affected package, severity (CVSS), exploit availability
- **Output**: Triage decision — severity override (if needed), patching priority, affected repos, remediation timeline
- **Dependencies**: CTO (Forge) for patching, CIO (Bedrock) for deployment
- **Token cost**: LOW

### red_team_exercise
- **Trigger**: Quarterly (scheduled) OR after major architecture changes
- **Input**: Current architecture, agent topology, secret inventory, deployment pipeline
- **Output**: Red team report — attack paths identified, exploitability ratings, remediation priorities
- **Dependencies**: CTO (architecture docs), CIO (infra docs), CEO (approval to execute)
- **Token cost**: HIGH

### compliance_check
- **Trigger**: Monthly automated scan OR before external audit/SOC 2 prep
- **Input**: Security policy docs, access logs, incident history, backup verification results
- **Output**: Compliance dashboard — policy adherence %, gaps, remediation tasks with deadlines
- **Dependencies**: CIO (backup data), COO (policy tracking)
- **Token cost**: MEDIUM
