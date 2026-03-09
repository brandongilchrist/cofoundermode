# CEO Agent (Atlas) — SKILLS.md

## Assigned Skills from Global Library

### weekly_report
- **Trigger**: Every Friday 17:00 UTC (automated via Paperclip cron)
- **Input**: All department MEMORY.md logs, budget data, shipping metrics, content metrics
- **Output**: Executive summary for Chairman — highlights, blockers, budget burn, next week focus
- **Dependencies**: COO (Nexus) for aggregated metrics, all C-suite MEMORY.md files
- **Token cost**: HIGH (synthesizes data from 8 departments)

### market_research
- **Trigger**: Monthly strategic review OR on-demand when evaluating a new market opportunity
- **Input**: Competitive landscape data, market trends, CRO research reports
- **Output**: Market positioning assessment with strategic recommendations
- **Dependencies**: CRO (Horizon) for raw research, CMO (Beacon) for brand positioning data
- **Token cost**: HIGH

---

## Agent-Specific Skills

### strategic_narrative
- **Trigger**: Weekly (content review cycle) or when a major product milestone is reached
- **Input**: Product updates from CPO, shipping data from CTO, market data from CRO
- **Output**: Narrative document: company story, positioning statement, key talking points
- **Dependencies**: CPO (product context), CMO (brand voice guide), CRO (competitive context)
- **Token cost**: MEDIUM

### promoter_blueprint_review
- **Trigger**: Weekly — part of the CEO-CMO sync
- **Input**: Funnel metrics (traffic → holding → selling → conversion), channel performance data
- **Output**: Blueprint health report — which stages are strong/weak, recommended actions
- **Dependencies**: CMO (Beacon) for metrics, COO (Nexus) for dashboard data
- **Token cost**: MEDIUM

### cross_department_arbitration
- **Trigger**: When two or more department heads escalate a priority conflict
- **Input**: Escalation requests from conflicting agents, resource availability, company OKRs
- **Output**: Priority decision with rationale, resource allocation adjustment, updated deadlines
- **Dependencies**: COO (resource/timeline data), relevant department heads
- **Token cost**: LOW

### daily_standup_compilation
- **Trigger**: Every day 09:00 UTC (automated via Paperclip cron)
- **Input**: All agent heartbeat logs from the past 24 hours
- **Output**: 1-page standup summary — what shipped, what's blocked, what's next
- **Dependencies**: COO (Nexus) for pre-aggregated data, all agent MEMORY.md
- **Token cost**: MEDIUM

### budget_review
- **Trigger**: Daily (quick check) + weekly (deep review with Chairman)
- **Input**: Per-agent token spend, infrastructure costs, total burn rate
- **Output**: Budget health report — per-agent compliance, anomalies, projected runway
- **Dependencies**: CIO (infra costs), COO (agent utilization data)
- **Token cost**: LOW

### chairman_briefing
- **Trigger**: On-demand — when Chairman requests update, or before major decisions
- **Input**: Current company state, active projects, blockers, financials, risks
- **Output**: Structured briefing document — situation, key metrics, decisions needed, recommendations
- **Dependencies**: All C-suite agents (data aggregation)
- **Token cost**: HIGH
