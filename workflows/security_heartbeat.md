# Workflow: Security Heartbeat

## Overview
The highest-frequency automated workflow in the organization. CSO (Sentinel) runs a security 
scan every 15 minutes, checking for vulnerabilities, access anomalies, and secret hygiene.

## Schedule
- **Cron**: `*/15 * * * *`
- **Frequency**: 96 times/day

## Participants
| Step | Agent | Role |
|------|-------|------|
| 1 | CSO (Sentinel) | Execute: run all heartbeat checks |
| 2 | CIO (Bedrock) | Support: provide system metrics on request |
| 3 | CEO (Atlas) | Escalation: receives HIGH+ alerts |
| 4 | Chairman | Escalation: receives CRITICAL alerts |

## Flow

```
┌──────────────────────────────────────────┐
│            EVERY 15 MINUTES               │
│                                           │
│  ┌─────────────────────────────────────┐  │
│  │ 1. CVE SCAN                         │  │
│  │    Check NVD + GitHub Security      │  │
│  │    for new vulns in our deps        │  │
│  └──────────────┬──────────────────────┘  │
│                 ▼                          │
│  ┌─────────────────────────────────────┐  │
│  │ 2. DEPENDENCY AUDIT                 │  │
│  │    Quick scan across all repos      │  │
│  │    for newly vulnerable packages    │  │
│  └──────────────┬──────────────────────┘  │
│                 ▼                          │
│  ┌─────────────────────────────────────┐  │
│  │ 3. ACCESS LOG REVIEW                │  │
│  │    Unusual agent behavior?          │  │
│  │    Unexpected tool calls?           │  │
│  │    Budget spikes?                   │  │
│  └──────────────┬──────────────────────┘  │
│                 ▼                          │
│  ┌─────────────────────────────────────┐  │
│  │ 4. SECRET ROTATION CHECK            │  │
│  │    Any secrets near 90-day window?  │  │
│  │    Any failed rotation attempts?    │  │
│  └──────────────┬──────────────────────┘  │
│                 ▼                          │
│  ┌─────────────────────────────────────┐  │
│  │ 5. LOG RESULT                       │  │
│  │    Append to agents/cso/MEMORY.md   │  │
│  │    "All clear" or alert details     │  │
│  └─────────────────────────────────────┘  │
│                                           │
└──────────────────────────────────────────┘
```

## Severity Escalation Matrix

| Severity | Action | Notify | Response SLA |
|----------|--------|--------|-------------|
| LOW | Log in MEMORY.md, add to weekly audit | — | Next weekly audit |
| MEDIUM | Log + create Linear issue | CTO | 24 hours |
| HIGH | Log + create urgent issue + alert | CEO + CTO | 4 hours |
| CRITICAL | Log + freeze deploys + alert | CEO + Chairman | 15 minutes |

## Emergency Override Actions (No Prior Approval)
When CRITICAL severity detected, Sentinel can immediately:
1. **Revoke** compromised agent tokens
2. **Freeze** all deployments
3. **Isolate** affected systems
4. Then notify CEO (immediately) and Chairman (within 15 minutes)

## Output Format

```markdown
## Security Heartbeat — {TIMESTAMP}

**Status**: 🟢 ALL CLEAR | 🟡 MEDIUM | 🔴 HIGH | 🚨 CRITICAL

### CVE Scan
- New CVEs: {count} | Affecting us: {count}

### Dependency Audit
- Vulnerable packages: {count} | Critical: {count}

### Access Logs
- Anomalies detected: {count}

### Secret Rotation
- Secrets expiring <7 days: {count}
- Failed rotations: {count}
```

## Budget Impact
- Per heartbeat: ~LOW token cost
- Daily aggregate: ~MEDIUM (96 heartbeats)
- Monthly: allocated within CSO's $350 budget
