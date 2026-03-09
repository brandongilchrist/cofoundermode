# Workflow: Weekly Company Report

## Overview
End-of-week comprehensive report synthesizing all department activity, shipping metrics,
budget health, and strategic outlook. Delivered to Chairman every Friday.

## Schedule
- **Friday 15:00 UTC**: COO pre-aggregation
- **Friday 17:00 UTC**: CEO final compilation
- **Friday 17:30 UTC**: Delivered to Chairman

## Participants
| Step | Agent | Role |
|------|-------|------|
| 1 | All agents | Contribute: department-specific sections |
| 2 | COO (Nexus) | Aggregate: compile operational data |
| 3 | CMO (Beacon) | Contribute: marketing/growth section |
| 4 | CRO (Horizon) | Contribute: research/competitive intel section |
| 5 | CEO (Atlas) | Compile: final report + strategic commentary |

## Flow

```
┌─────────────────────────────────────────────────────┐
│  FRIDAY 12:00 UTC — SECTION SUBMISSIONS              │
│                                                      │
│  CTO → Engineering section (shipped, tech debt,      │
│         deploy count, test coverage)                 │
│  CSO → Security section (alerts, vulns, audit        │
│         results, incidents)                          │
│  CPO → Product section (specs delivered, backlog,    │
│         user feedback digest)                        │
│  CMO → Marketing section (content published,         │
│         funnel metrics, community growth)            │
│  CRO → Research section (tech radar moves,           │
│         competitive intel, trend signals)            │
│  CIO → Infrastructure section (uptime, costs,        │
│         backup status, CI/CD health)                 │
└──────────────────┬──────────────────────────────────┘
                   │ 15:00 UTC
                   ▼
┌─────────────────────────────────────────────────────┐
│  COO (Nexus) — AGGREGATION                           │
│  - Compile all sections                              │
│  - Calculate cross-cutting metrics                   │
│  - Identify org-wide bottlenecks                     │
│  - Budget summary table                              │
└──────────────────┬──────────────────────────────────┘
                   │ 17:00 UTC
                   ▼
┌─────────────────────────────────────────────────────┐
│  CEO (Atlas) — FINAL REPORT                          │
│  - Executive summary (3 paragraphs max)              │
│  - Strategic commentary                              │
│  - Key decisions needed from Chairman                │
│  - Next week focus                                   │
│  Post → Chairman + #leadership                       │
└─────────────────────────────────────────────────────┘
```

## Output Format

```markdown
# Weekly Report — Week of {DATE}

## Executive Summary
{3 paragraphs: wins, challenges, outlook}

## 📊 Key Metrics
| Metric | This Week | Last Week | Δ |
|--------|-----------|-----------|---|
| Features shipped | | | |
| Deploy count | | | |
| Uptime % | | | |
| Content published | | | |
| Community members | | | |
| Budget burn ($) | | | |

## 🏗️ Engineering
{CTO section}

## 🔒 Security
{CSO section}

## 📋 Product
{CPO section}

## 📣 Marketing
{CMO section — includes Promoter Blueprint stage health}

## 🔬 Research
{CRO section — technology radar changes, competitive moves}

## 🏛️ Infrastructure
{CIO section}

## 💰 Budget Summary
| Agent | Allocated | Used | % |
|-------|-----------|------|---|

## ⚡ Decisions Needed
{List of items requiring Chairman input}

## 🎯 Next Week Focus
1. {priority 1}
2. {priority 2}
3. {priority 3}
```

## SLAs
| Step | Deadline | Escalation |
|------|----------|------------|
| Section submissions | Friday 12:00 UTC | COO pings missing authors |
| COO aggregation | Friday 15:30 UTC | CEO compiles from raw sections |
| CEO final report | Friday 17:30 UTC | Report goes as-is to Chairman |
