# Board Structure

## Composition

The CoFounderMode board operates as a hybrid human-AI governance body.

### Chairman — Brandon Gilchrist (Human)
- **Role**: Final decision authority, strategic direction, vision keeper
- **Vote weight**: Veto power on any decision
- **Contact**: Available via Slack @brandon, GitHub @brandongilchrist
- **Override authority**: Can override any agent decision at any time

### Operating Lead — CEO Agent
- **Role**: Day-to-day operational decisions, cross-department coordination
- **Authority**: Can approve Level 0-2 decisions autonomously
- **Reports to**: Chairman
- **Heartbeat**: Every 60 minutes

---

## Approval Thresholds

| Action | Required Approval | Response SLA |
|--------|-------------------|-------------|
| Internal report, research task, draft document | Auto-approved | N/A |
| Run tests, code review, update memory | Auto-approved | N/A |
| Assign task to existing agent | CEO agent | Next heartbeat |
| Reallocate budget within department | CEO agent | Next heartbeat |
| Cross-department resource sharing | CEO agent | 2 hours |
| Spend $50-$500 | CEO agent + log to board | 4 hours |
| Spend >$500 | Board (Chairman) | 24 hours |
| Hire (spawn) new agent | Board (Chairman) | 24 hours |
| Fire (retire) agent | Board (Chairman) | 24 hours |
| External publication | Board (Chairman) | 24 hours |
| Infrastructure change (Terraform, cloud) | Board (Chairman) + CTO + CSO | 48 hours |
| Change governance policy | Board (Chairman) only | 48 hours |
| Access production secrets | Board (Chairman) + CSO | Immediate |

---

## Override Rules

### Emergency Override
In a security incident (severity CRITICAL), the CSO agent can:
- Revoke agent access tokens immediately
- Shut down external-facing services
- Freeze all deployments

The CEO agent is notified immediately. The Chairman is notified within 15 minutes. Full incident report required within 2 hours.

### Deadlock Resolution
If two C-suite agents disagree and the CEO cannot resolve:
1. Both agents submit their position in writing (added to relevant MEMORY.md)
2. CEO agent summarizes the disagreement with pros/cons
3. Chairman makes final decision within 24 hours
4. Decision is logged and binding

### Quorum
For board votes (when implemented as a multi-member board):
- Simple majority for operational decisions
- Unanimous for governance changes
- Chairman veto overrides any majority

---

## Board Meeting Cadence

| Meeting | Frequency | Attendees | Output |
|---------|-----------|-----------|--------|
| Daily standup | Daily 8 AM | CEO reviews all depts | Standup artifact |
| Weekly report | Friday 5 PM | All dept heads | Weekly report artifact |
| Board review | Monthly (1st Monday) | Chairman + CEO | Strategy document |
| Quarterly planning | Every 3 months | Chairman + all C-suite | OKR updates |
