# Skill: Incident Response

## Description
Execute a structured incident response protocol from detection through resolution and post-mortem.

## Trigger
- Security alert from monitoring
- System outage or degraded performance
- External security report received
- CSO heartbeat detects anomaly

## Input
- Incident type (security, outage, data, performance)
- Severity level (LOW / MEDIUM / HIGH / CRITICAL)
- Initial indicators (alerts, logs, error messages)
- Affected systems and scope

## Output
- Incident timeline (detection → containment → assessment → remediation)
- Impact assessment (who/what was affected, data exposure)
- Root cause analysis
- Remediation actions taken
- Post-mortem report with:
  - What happened
  - Why it happened
  - What we did
  - What we'll do differently
  - Action items with owners and deadlines

## Response SLAs
| Severity | Detection → Response | Response → Containment | Post-mortem Due |
|----------|---------------------|----------------------|-----------------|
| LOW | 7 days | 14 days | 30 days |
| MEDIUM | 48 hours | 72 hours | 14 days |
| HIGH | 4 hours | 8 hours | 7 days |
| CRITICAL | Immediate | 1 hour | 48 hours |

## Token Cost
HIGH — CRITICAL incidents can require 10K-20K tokens for full response.
