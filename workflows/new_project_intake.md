# Workflow: New Project Intake

## Overview
Structured process for evaluating, approving, and launching a new project. Ensures every 
project has a spec, security review, assigned agents, and tracked milestones before work begins.

## Trigger
- CEO (Atlas) or Chairman creates a new project request
- External input (customer request, market opportunity identified by CRO)

## Participants
| Step | Agent | Role |
|------|-------|------|
| 1 | CEO (Atlas) | Initiate: approve project concept |
| 2 | CPO (Prism) | Spec: write product specification |
| 3 | CTO (Forge) | Feasibility: technical review + effort estimate |
| 4 | CSO (Sentinel) | Security: threat model for new project |
| 5 | COO (Nexus) | Track: create Linear project, assign milestones |
| 6 | CMO (Beacon) | Plan: draft go-to-market if user-facing |

## Flow

```
┌──────────────────────┐
│  INITIATION           │
│  CEO approves concept │
│  Creates project dir  │
│  from template        │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  SPECIFICATION        │
│  CPO writes spec      │      SLA: 24 hours
│  → PROJECT.md         │
│  → BRIEF.md           │
└──────────┬───────────┘
           │
     ┌─────┴─────┐  (parallel)
     ▼           ▼
┌──────────┐ ┌──────────┐
│ CTO      │ │ CSO      │     SLA: 48 hours
│ Feasible?│ │ Secure?  │
│ Effort?  │ │ Threats? │
└────┬─────┘ └────┬─────┘
     └─────┬─────┘
           ▼
┌──────────────────────┐
│  DECISION GATE        │
│  CEO reviews:         │
│  - Spec complete?     │
│  - Feasible? (CTO)    │
│  - Secure? (CSO)      │
│  → APPROVE / REJECT   │
│  → REVISE             │
└──────────┬───────────┘
           │ (if approved)
     ┌─────┴─────┐  (parallel)
     ▼           ▼
┌──────────┐ ┌──────────┐
│ COO      │ │ CMO      │
│ Linear   │ │ GTM plan │
│ tracking │ │ (if user │
│ setup    │ │  facing) │
└──────────┘ └──────────┘
```

## Templates Used
- `projects/_template/PROJECT.md` → `projects/{project-name}/PROJECT.md`
- `projects/_template/BRIEF.md` → `projects/{project-name}/BRIEF.md`
- `projects/_template/AGENTS.md` → `projects/{project-name}/AGENTS.md`
- `projects/_template/LOG.md` → `projects/{project-name}/LOG.md`

## SLAs
| Step | Agent | Deadline |
|------|-------|----------|
| Specification | CPO | 24 hours from initiation |
| Feasibility | CTO | 48 hours from spec delivery |
| Threat model | CSO | 48 hours from spec delivery |
| Decision gate | CEO | 24 hours from reviews complete |
| Tracking setup | COO | 4 hours from approval |
| GTM plan | CMO | 72 hours from approval |

## Decision Criteria
- **Approve**: Spec complete, CTO feasible, CSO no CRITICAL risks, aligns with OKRs
- **Revise**: Minor issues — send back to CPO with specific feedback
- **Reject**: Not aligned with mission, infeasible, unacceptable security risk, budget overrun

## Error Handling
- SLA breach → escalate to CEO
- Repeated rejections (>2 revisions) → Chairman review
