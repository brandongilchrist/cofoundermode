# Security Policy

## Classification

All company data is classified into three tiers:

| Tier | Label | Examples | Access |
|------|-------|----------|--------|
| 1 | Public | Marketing content, open-source code, published reports | Any agent |
| 2 | Internal | SOUL.md files, workflows, project specs, MEMORY.md | Authenticated agents only |
| 3 | Restricted | API keys, credentials, financial data, customer PII | CSO + Chairman only |

---

## Secret Management

### Principles
- **No credentials in code.** Ever. Not in markdown, not in YAML, not in comments.
- **Environment variables only.** All secrets are referenced as `${SECRET_NAME}` in configs.
- **Encryption at rest.** Secrets stored using `age` + `sops` for local encryption, Bitwarden for team vault.
- **Rotation cadence.** All API keys rotated every 90 days minimum.

### Secret Storage Stack
1. **age/sops**: File-level encryption for any secret that must live in the repo (e.g., encrypted `.env.enc`)
2. **Bitwarden**: Team vault for shared credentials, API keys, service accounts
3. **Environment variables**: Runtime injection — agents never see the raw secret, only the env var reference

### Required Secrets (env vars)

| Variable | Service | Rotation |
|----------|---------|----------|
| `${LINEAR_API_KEY}` | Linear task management | 90 days |
| `${GITHUB_API_KEY}` | GitHub integration | 90 days |
| `${SLACK_BOT_TOKEN}` | Slack communication | 90 days |
| `${OPENAI_API_KEY}` | OpenAI / Codex runtime | 90 days |
| `${ANTHROPIC_API_KEY}` | Claude / OpenClaw runtime | 90 days |
| `${AWS_ACCESS_KEY_ID}` | S3 artifact storage | 90 days |
| `${AWS_SECRET_ACCESS_KEY}` | S3 artifact storage | 90 days |
| `${DATABASE_URL}` | Postgres connection | On change |
| `${PAPERCLIP_SECRET}` | Paperclip API auth | 90 days |

---

## Access Control

### Agent Permissions

| Agent | GitHub | Linear | Slack | Secrets | Terraform |
|-------|--------|--------|-------|---------|-----------|
| CEO | Read/Write | Full | Full | Read (Tier 2) | None |
| CTO | Read/Write | Full | Engineering channels | Read (Tier 2) | Read |
| CSO | Read/Write | Full | Security channels | Full (Tier 3) | Full |
| CPO | Read | Product boards | Product channels | None | None |
| CMO | Read (marketing repos) | Marketing boards | Marketing channels | None | None |
| COO | Read | Full | Full | Read (Tier 2) | Read |
| CRO | Read | R&D boards | R&D channels | None | None |
| CIO | Read/Write | IT boards | IT channels | Read (Tier 2) | Full |

---

## Audit Requirements

### Continuous Audit
- Every agent tool call is logged to the Paperclip audit trail (immutable, append-only)
- Failed authentication attempts trigger immediate CSO alert
- Unusual spend patterns (> 2x daily average) trigger COO + CSO alert

### Weekly Security Review
- CSO reviews all access logs for anomalies
- Dependency audit: check for new CVEs in all project dependencies
- Review any Tier 3 secret access events

### Monthly Security Assessment
- Full threat model review of any new features/integrations
- Penetration test simulation against the infrastructure
- Update SECURITY_POLICY.md with any new findings

---

## Incident Response

### Severity Levels

| Severity | Definition | Response SLA | Who |
|----------|-----------|-------------|-----|
| LOW | Informational finding, no immediate risk | 7 days | CSO |
| MEDIUM | Vulnerability with no active exploit | 48 hours | CSO + CTO |
| HIGH | Exploitable vulnerability or data exposure | 4 hours | CSO + CTO + CEO |
| CRITICAL | Active breach or data loss | Immediate | CSO (emergency override) + Chairman |

### Response Protocol
1. **Detect** — CSO heartbeat scan or external report
2. **Contain** — Isolate affected systems, revoke compromised credentials
3. **Assess** — Determine scope, impact, root cause
4. **Remediate** — Fix the vulnerability, rotate secrets, patch systems
5. **Report** — Full incident report to board within 24 hours
6. **Improve** — Update policies, add tests, prevent recurrence

---

## Red Team Cadence

- **Weekly**: Automated dependency scanning (npm audit, cargo audit, pip audit)
- **Monthly**: CSO runs a focused threat model on one system component
- **Quarterly**: Full security review of all agent permissions and access patterns
