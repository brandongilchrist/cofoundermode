# Daily Digest — Scoring Harness

## Purpose
Validates that the CoFounderMode agent infrastructure works by measuring 
real outputs from a real venture against the SOUL/SKILLS/workflow definitions.

## Scoring Dimensions

### 1. Agent Activation (Binary per agent)
Check: Does `agents/{role}/MEMORY.md` contain entries referencing "daily-digest"?

```bash
#!/bin/bash
# score_activation.sh
echo "=== Agent Activation Score ==="
total=0
activated=0
for role in ceo cto cso cpo cmo coo cro cio; do
  total=$((total + 1))
  if grep -qi "daily.digest\|daily-digest\|venture.1" agents/$role/MEMORY.md 2>/dev/null; then
    echo "  ✅ $role: ACTIVATED"
    activated=$((activated + 1))
  else
    echo "  ❌ $role: NOT ACTIVATED"
  fi
done
echo "Score: $activated/$total"
```

### 2. SOUL Adherence (Manual review — 1-5 scale)
For each agent that activated, review its output against SOUL.md:
- Does the output reflect the agent's personality?
- Did it follow its decision principles?
- Did it respect its red lines?

| Agent | Personality Match | Decision Principles | Red Lines | Score /5 |
|-------|-------------------|--------------------|-----------|---------||
| CEO | | | | |
| CTO | | | | |
| CSO | | | | |
| CPO | | | | |
| CMO | | | | |
| COO | | | | |
| CRO | | | | |
| CIO | | | | |

### 3. Skill Execution (Checklist)
For each skill that SHOULD have fired, did it produce the correct output?

| Agent | Skill | Should Fire? | Did Fire? | Correct Output? |
|-------|-------|-------------|-----------|----------------|
| CRO | trend_detection | ✅ | | |
| CPO | product_spec | ✅ | | |
| CTO | ship_cycle_orchestration | ✅ | | |
| CTO | code_review | ✅ | | |
| CSO | security_heartbeat | ✅ | | |
| CMO | content_creation | ✅ | | |
| CMO | seo_optimization | ✅ | | |
| CIO | deploy_pipeline | ✅ | | |
| COO | daily_standup_aggregation | ✅ | | |
| COO | sla_tracking | ✅ | | |
| CEO | promoter_blueprint_review | ✅ | | |
| CEO | daily_standup_compilation | ✅ | | |

### 4. Handoff Completion (Chain %)
Expected chain for Daily Digest:

```
CRO → CPO → CTO → CSO → CMO → CIO → COO → CEO
 1      2     3     4     5     6     7     8
```

Check: At each handoff point, does the receiving agent's MEMORY.md reference 
output from the sending agent?

| Handoff | From → To | Completed? |
|---------|-----------|------------|
| 1 | CRO → CPO | |
| 2 | CPO → CTO | |
| 3 | CTO → CSO | |
| 4 | CSO → CMO | |
| 5 | CMO → CIO | |
| 6 | CIO → COO | |
| 7 | COO → CEO | |

Score: ___/7 handoffs complete

### 5. SLA Compliance
| Workflow | SLA | Met? |
|----------|-----|------|
| security_heartbeat | CSO fires within 15 min of deploy | |
| daily_standup | COO by 08:30, CEO by 09:30 UTC | |
| code_review_gate | CTO reviews within 4 hours | |

## Aggregate Score

```
Agent Activation:    __/8  = __%
SOUL Adherence:      __/40 = __%
Skill Execution:     __/12 = __%
Handoff Completion:  __/7  = __%
SLA Compliance:      __/3  = __%

OVERALL VENTURE SCORE: __%
```

## Findings Log
After running the venture, document what broke and what needs to change:

| Finding | Severity | Affected File | Fix |
|---------|----------|--------------|-----|
| | | | |
