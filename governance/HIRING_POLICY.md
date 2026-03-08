# Hiring Policy

## Agent Lifecycle: Spawn → Operate → Retire

### Spawning New Agents

**Board approval is ALWAYS required to spawn a new agent.** No agent, including the CEO, can create a new agent without explicit Chairman approval.

#### Spawn Request Process
1. Requesting C-suite agent submits a hire request with:
   - **Role title** and department
   - **Justification**: Why existing agents can't handle this workload
   - **SOUL.md draft**: Proposed identity, directives, and decision principles
   - **Budget impact**: Estimated monthly cost
   - **Duration**: Permanent or project-scoped
   - **Reporting line**: Which C-suite agent supervises

2. CEO agent reviews and endorses (or rejects)
3. Chairman reviews and approves (or rejects)
4. If approved:
   - Agent folder created in `/agents/{role}/`
   - SOUL.md, TOOLS.md, SKILLS.md, MEMORY.md populated
   - Agent registered in Paperclip config
   - Agent appears in next heartbeat cycle

#### Sub-Agent Rules
- C-suite agents with `can_spawn_subagents: true` can request sub-agents
- Sub-agents are always scoped to a specific project or time period
- Maximum 3 active sub-agents per C-suite agent
- Sub-agents inherit their parent's budget (not additive)
- Sub-agents cannot spawn their own sub-agents

---

### Operating Requirements

All active agents must maintain:
- **SOUL.md**: Current and reviewed quarterly
- **MEMORY.md**: Updated every heartbeat cycle
- **Performance metrics**: Tasks completed, escalation rate, budget utilization
- **Heartbeat compliance**: Must respond to >95% of scheduled heartbeats

---

### Retiring Agents

**Board approval is ALWAYS required to retire an agent.**

#### Retirement Triggers
- Project completion (for project-scoped agents)
- Sustained underperformance (< 50% task completion rate over 30 days)
- Budget constraints requiring headcount reduction
- Role consolidation (merging two agent roles into one)
- Security concerns (agent exhibiting unexpected behavior)

#### Retirement Process
1. CEO agent submits retirement recommendation with:
   - Agent name and role
   - Reason for retirement
   - Impact analysis: What work will be redistributed
   - Knowledge transfer plan: How MEMORY.md content is preserved
2. Chairman approves
3. Agent MEMORY.md is archived (never deleted)
4. Agent is deregistered from Paperclip
5. Remaining tasks are reassigned

---

### Promotion / Role Change

Agents can be reconfigured (SOUL.md updated) without retirement:
- Title changes: CEO approval
- Expanded responsibilities: CEO approval + Chairman notification
- Reduced responsibilities: CEO approval
- Department transfer: Chairman approval
- Budget increase: Chairman approval

---

### Emergency Hire (Fast Track)

In case of a security incident or critical business need:
- CEO can request emergency hire with 1-hour approval SLA
- Chairman must approve via Slack (no formal review required)
- Agent is spawned immediately with a 7-day trial period
- Full SOUL.md review required within 7 days or agent is retired
