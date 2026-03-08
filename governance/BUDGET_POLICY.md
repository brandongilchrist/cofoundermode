# Budget Policy

## Per-Agent Monthly Budget Limits

All budgets are measured in USD equivalent of LLM API costs (tokens consumed, tool calls, external API usage).

| Agent | Role | Monthly Budget (USD) | Model Preference |
|-------|------|---------------------|------------------|
| CEO | Chief Executive Officer | $500 | claude-opus (strategy requires deep reasoning) |
| CTO | Chief Technology Officer | $400 | claude-opus (architecture decisions) |
| CSO | Chief Security Officer | $350 | claude-opus (security requires thoroughness) |
| CPO | Chief Product Officer | $250 | claude-sonnet (spec writing, research) |
| CMO | Chief Marketing Officer | $250 | claude-sonnet (content generation) |
| COO | Chief Operating Officer | $250 | claude-sonnet (operational tasks) |
| CRO | Chief R&D Officer | $250 | claude-opus (research requires depth) |
| CIO | Chief Information Officer | $250 | claude-sonnet (infrastructure ops) |

**Total monthly organization budget**: $2,500

---

## Budget Rules

### Soft Warning (80%)
When an agent reaches 80% of its monthly budget:
- Agent receives a warning in its next heartbeat context
- Agent must prioritize only HIGH and CRITICAL priority tasks
- Agent must defer LOW priority tasks to next month
- COO logs the warning in the ops dashboard

### Hard Stop (100%)
When an agent reaches 100% of its monthly budget:
- Agent is suspended until the next billing cycle
- All pending tasks are reassigned or queued
- CEO and Chairman are notified immediately
- Emergency override: Chairman can authorize a budget extension

### Escalation Rules

| Spend Level | Required Approval |
|-------------|-------------------|
| < $50 per task | Agent autonomously |
| $50 - $100 per task | CEO approval |
| $100 - $500 per task | CEO approval + board notification |
| > $500 per task | Board (Chairman) approval required |

### Budget Reallocation
- CEO can reallocate up to 20% of one department's budget to another
- Reallocation > 20% requires Chairman approval
- All reallocations are logged in `/governance/budget_log.md`

---

## Cost Tracking

Every agent tool call includes a cost estimate. Paperclip aggregates these into:
- **Per-agent daily burn rate**
- **Per-department weekly cost**
- **Organization monthly cost**
- **Cost-per-task metrics** (token cost / task completed)

All cost data is surfaced in the LobsterBoard mission control dashboard.

---

## Budget Review Cycle

| Review | Frequency | Owner | Action |
|--------|-----------|-------|--------|
| Daily cost check | Daily | COO | Flag anomalies > 2x daily average |
| Weekly budget review | Weekly | CEO + COO | Adjust priorities if burn rate too high |
| Monthly budget report | Monthly | CFO (CEO acting) | Full cost analysis, propose adjustments |
| Quarterly budget planning | Quarterly | Chairman + CEO | Set next quarter budgets |
