# Workflow: Daily Standup

## Overview
Automated daily standup that aggregates all agent activity into a single executive summary.

## Schedule
- **Cron**: `0 8 * * *` (COO aggregation) → `0 9 * * *` (CEO compilation)
- **Frequency**: Every day, 7 days/week

## Participants
| Step | Agent | Role |
|------|-------|------|
| 1 | All agents | Provide: heartbeat logs from past 24 hours |
| 2 | COO (Nexus) | Aggregate: compile per-department summaries |
| 3 | CEO (Atlas) | Compile: produce final standup, post to #leadership |

## Flow

```
┌──────────────────────┐
│  ALL AGENTS           │
│  Heartbeat logs from  │
│  past 24 hours        │
└──────────┬───────────┘
           │ 08:00 UTC
           ▼
┌──────────────────────┐
│  COO (Nexus)          │
│  Aggregate:           │
│  - Per-dept summary   │
│  - Blockers list      │
│  - At-bat count       │
│  - Agent health grid  │
└──────────┬───────────┘
           │ 09:00 UTC
           ▼
┌──────────────────────┐
│  CEO (Atlas)          │
│  Compile:             │
│  - Executive summary  │
│  - Top 3 wins         │
│  - Top 3 blockers     │
│  - Today's focus      │
│  Post → #leadership   │
└──────────────────────┘
```

## Output Format

```markdown
# Daily Standup — {DATE}

## 🟢 Shipped Yesterday
- [item 1]
- [item 2]

## 🔴 Blocked
- [blocker 1] — Owner: {agent} — Expected resolution: {date}

## 🎯 Today's Focus
- [priority 1] — {agent}
- [priority 2] — {agent}

## 📊 Agent Health
| Agent | Status | Last Heartbeat | Budget Used |
|-------|--------|----------------|-------------|

## 💰 Budget Burn
- Daily spend: ${amount} | Monthly pace: ${amount} | Budget: ${total}
```

## SLA
- COO aggregation delivered by 08:30 UTC
- CEO compilation delivered by 09:30 UTC
- Any missed standup → escalate to Chairman

## Error Handling
- If COO misses aggregation deadline: CEO compiles directly from raw logs
- If agent heartbeat missing >3 cycles: Flag in blockers section
