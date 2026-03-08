# Security Workflows

## 1. Security Heartbeat (Every 15 Minutes)
```
Trigger: Cron every 15 minutes
Steps:
  1. CSO agent wakes and checks:
     - New CVE advisories (NVD, GitHub Security Advisories)
     - Dependency alerts on all repos
     - Unusual agent behavior patterns (budget spikes, unexpected tool calls)
     - Access log anomalies
  2. Updates /departments/security/MEMORY.md with findings
  3. If severity >= HIGH → escalate to board
  4. If severity == CRITICAL → invoke emergency override protocol
  5. Post summary to #security Slack channel
```

## 2. PR Security Review
```
Trigger: PR opened that touches auth, infra, data, or secrets
Steps:
  1. CSO receives PR notification via GitHub adapter
  2. Runs threat_model skill against the changeset
  3. Checks for: hardcoded secrets, insecure API patterns, missing auth checks
  4. Checks dependency changes for known vulnerabilities
  5. Approve or block with specific security findings
  6. Log review in MEMORY.md
```

## 3. Incident Response
```
Trigger: Security alert from monitoring, external report, or agent detection
Steps:
  1. DETECT — Identify the incident and severity
  2. CONTAIN — Emergency override if CRITICAL (revoke tokens, freeze deploys)
  3. ASSESS — Scope, impact, root cause analysis
  4. REMEDIATE — Fix vulnerability, rotate secrets, patch systems
  5. REPORT — Incident report to board within 24 hours
  6. IMPROVE — Update policies, add tests, update threat models
```

## 4. Weekly Security Audit
```
Trigger: Monday 9 AM
Steps:
  1. CSO reviews all access logs from the past week
  2. Runs dependency audit across all repos (npm audit, cargo audit, pip audit)
  3. Reviews any Tier 3 secret access events
  4. Checks secret rotation compliance
  5. Produces security section for weekly report
```
