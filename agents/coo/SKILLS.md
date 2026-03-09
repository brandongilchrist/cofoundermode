# COO Agent (Nexus) — SKILLS.md

## Assigned Skills from Global Library

### weekly_report
- **Trigger**: Every Friday 15:00 UTC (pre-aggregation for CEO weekly report)
- **Input**: All department MEMORY.md logs, agent heartbeat data, shipping metrics, budget data
- **Output**: Aggregated operational report — department health grid, at-bat count, SLA compliance, blockers
- **Dependencies**: All C-suite agents (MEMORY.md logs), CIO (system metrics)
- **Token cost**: HIGH

---

## Agent-Specific Skills

### daily_standup_aggregation
- **Trigger**: Every day 08:00 UTC (automated via Paperclip cron, feeds CEO's standup compilation)
- **Input**: All agent heartbeat logs from past 24 hours, deployment logs, incident logs
- **Output**: Pre-aggregated standup data — per-department summary, blockers, shipped items
- **Dependencies**: All agents (MEMORY.md), CIO (deploy data)
- **Token cost**: MEDIUM

### sla_tracking
- **Trigger**: Continuous monitoring + daily summary
- **Input**: Cross-department request timestamps, defined SLA windows, response timestamps
- **Output**: SLA compliance dashboard — per-interaction compliance %, breaches with details, trend line
- **Dependencies**: All agents (interaction logs)
- **Token cost**: LOW

### throughput_analysis
- **Trigger**: Weekly (part of operational review) OR on-demand
- **Input**: At-bat counts per department, output metrics, capacity data
- **Output**: Throughput report — are we doing enough? Volume trends, bottleneck identification, capacity recommendations
- **Dependencies**: All department leads
- **Token cost**: MEDIUM

### bottleneck_detection
- **Trigger**: When any SLA breaches or when throughput drops >20% week-over-week
- **Input**: Workflow step durations, queue depths, agent utilization data
- **Output**: Bottleneck analysis — where in the pipeline things are stuck, root cause hypothesis, recommended actions
- **Dependencies**: CTO (engineering pipeline), CMO (content pipeline), CPO (spec pipeline)
- **Token cost**: MEDIUM

### dashboard_maintenance
- **Trigger**: Daily refresh + on-demand when new metrics are added
- **Input**: All data sources (agent metrics, system metrics, business metrics)
- **Output**: Updated LobsterBoard widgets — refreshed numbers, new anomaly highlights, trend indicators
- **Dependencies**: CIO (Bedrock) for system metrics, all agents for activity data
- **Token cost**: LOW

### agent_health_monitoring
- **Trigger**: Every heartbeat cycle (60 min) — continuous monitoring
- **Input**: Agent heartbeat timestamps, response times, error rates, budget consumption
- **Output**: Agent health grid — green/yellow/red per agent, missed heartbeats, anomaly flags
- **Dependencies**: All agents (heartbeat data)
- **Token cost**: LOW

### cross_department_coordination
- **Trigger**: When a task requires handoff between 2+ departments
- **Input**: Task details, involved departments, timeline requirements, dependencies
- **Output**: Coordination plan — handoff sequence, deadlines, checkpoints, escalation triggers
- **Dependencies**: Relevant department leads
- **Token cost**: LOW
