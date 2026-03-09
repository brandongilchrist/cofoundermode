# CoFounderMode — Architecture Document

> **93 files | 4,869 lines | 6 phases | 0 placeholders**

## What This Is

CoFounderMode is the operating system for autonomous AI-native companies. It enables a single 
founder (Chairman) to operate a company with the operational capacity of 50 employees using 
8 AI C-suite agents, each with a persistent identity, skills, and memory.

Built on three layers:
1. **Data / Memory** — Git-versioned markdown (this repo)
2. **Agentic / Service** — Paperclip orchestration with OpenClaw/NanoClaw runtimes
3. **UI / Mission Control** — LobsterBoard dashboards

---

## File Tree

```
cofoundermode/
├── company/                        # Company identity
│   ├── COMPANY.md                  # Name, parent, legal
│   ├── CULTURE.md                  # Values, operating principles
│   ├── GLOSSARY.md                 # Term definitions
│   ├── MISSION.md                  # Mission statement
│   └── VISION.md                   # 5-year vision
│
├── governance/                     # Policies and board structure
│   ├── BOARD.md                    # Chairman + CEO governance
│   ├── BUDGET_POLICY.md            # Spending rules, thresholds
│   ├── HIRING_POLICY.md            # Agent hiring/retiring rules
│   └── SECURITY_POLICY.md          # Security baselines
│
├── departments/                    # 8 departments
│   ├── engineering/                # CTO domain
│   ├── product/                    # CPO domain
│   ├── security/                   # CSO domain
│   ├── marketing/                  # CMO domain
│   ├── operations/                 # COO domain
│   ├── rd/                         # CRO domain (R&D)
│   ├── it/                         # CIO domain
│   └── finance/                    # CEO acting as CFO
│   └── (each has README.md, AGENTS.md, WORKFLOWS.md)
│
├── agents/                         # Agent identities
│   ├── _template/                  # SOUL.md, SKILLS.md, TOOLS.md, MEMORY.md templates
│   ├── ceo/                        # Atlas — Chief Promoter
│   ├── cto/                        # Forge — Ship Velocity
│   ├── cso/                        # Sentinel — Guardian (15-min heartbeat)
│   ├── cpo/                        # Prism — Expert Brain
│   ├── cmo/                        # Beacon — Growth Engine
│   ├── coo/                        # Nexus — Throughput Optimizer
│   ├── cro/                        # Horizon — Technology Scout
│   └── cio/                        # Bedrock — Infrastructure Commander
│   └── (each has SOUL.md, SKILLS.md, TOOLS.md, MEMORY.md)
│
├── projects/                       # Project tracking
│   └── _template/                  # PROJECT.md, BRIEF.md, LOG.md, AGENTS.md
│
├── skills/                         # 7 global skills
│   ├── code_review.md
│   ├── deploy_pipeline.md
│   ├── incident_response.md
│   ├── market_research.md
│   ├── product_spec.md
│   ├── threat_model.md
│   └── weekly_report.md
│
├── workflows/                      # 5 global workflows
│   ├── daily_standup.md
│   ├── new_project_intake.md
│   ├── security_heartbeat.md
│   ├── weekly_company_report.md
│   └── code_review_gate.md
│
├── infra/                          # Infrastructure config
│   ├── paperclip/config.yml        # Full orchestration config (320+ lines)
│   ├── adapters/                   # GitHub, Linear, Slack adapters
│   ├── terraform/                  # IaC (future)
│   └── README.md
│
└── LINEAR_BACKLOG.md               # Backlog mirror (synced to Linear)
```

---

## Agent Summary

| Agent | Name | Model | Budget | Heartbeat | Core Role |
|-------|------|-------|--------|-----------|-----------|
| CEO | Atlas | opus | $500/mo | 60 min | Chief Promoter — narrative + growth strategy |
| CTO | Forge | opus | $400/mo | 30 min | Ship Velocity — "Just Cut," <1hr deploy cycles |
| CSO | Sentinel | opus | $350/mo | **15 min** | Guardian — always-on security sentinel |
| CPO | Prism | sonnet | $250/mo | 60 min | Expert Brain — spec engine, user-centric |
| CMO | Beacon | sonnet | $250/mo | 60 min | Growth Engine — Promoter Blueprint execution |
| COO | Nexus | sonnet | $250/mo | 60 min | Throughput Optimizer — at-bats, dashboards |
| CRO | Horizon | opus | $250/mo | 60 min | Technology Scout — ATAH radar |
| CIO | Bedrock | sonnet | $250/mo | 60 min | Infrastructure Commander — zero friction |
| **Total** | | | **$2,500/mo** | | |

---

## Workflow Summary

| Workflow | Frequency | Primary Agent | Purpose |
|----------|-----------|---------------|---------|
| daily_standup | Daily 08-09 UTC | COO → CEO | All-agent activity digest |
| security_heartbeat | Every 15 min | CSO | CVE, dependency, access, secret checks |
| code_review_gate | Per PR | CTO + CSO/CIO | Multi-agent conditional review |
| weekly_company_report | Friday | All → COO → CEO | Full company report to Chairman |
| new_project_intake | On demand | CEO → CPO → CTO/CSO → COO/CMO | Structured project approval pipeline |

---

## Environment Variables

| Variable | Required | Used By |
|----------|----------|---------|
| `ANTHROPIC_API_KEY` | ✅ | All agents (Claude access) |
| `LINEAR_API_KEY` | ✅ | Linear integration |
| `GITHUB_TOKEN` | ✅ | GitHub adapter |
| `DATABASE_URL` | ❌ | Future: pgvector |
| `SLACK_BOT_TOKEN` | ❌ | Future: Slack adapter |
| `PERPLEXITY_API_KEY` | ❌ | Future: CRO research |
| `TELEGRAM_BOT_TOKEN` | ❌ | Future: alerts |

---

## Quick Start

```bash
# 1. Clone
git clone https://github.com/brandongilchrist/cofoundermode
cd cofoundermode

# 2. Onboard Paperclip
npx paperclipai onboard --yes

# 3. Set environment
export ANTHROPIC_API_KEY=sk-...
export LINEAR_API_KEY=lin_api_...
export GITHUB_TOKEN=ghp_...

# 4. Run Linear CLI
echo "api_key=$LINEAR_API_KEY\nteam=GIL" > .linear
npx linear roadmap
```

---

## Commit History

| Commit | Phase | Summary |
|--------|-------|---------|
| `bb2e2e1` | Phase 1 | 86 files, 2,448 lines — data layer scaffold |
| `1aebc74` | Phase 2 | 8 SOUL.md files — 844 lines, Greg Isenberg framework |
| `fed7fb4` | Linear | 13 issues, project, 3 labels in Linear |
| `a2baf9d` | Phase 3 | 8 SKILLS.md files — 510 lines, 66 skills |
| `ab058ee` | Phase 4 | Paperclip config.yml — 467 lines, full org config |
| `4b60916` | Phase 5 | 5 global workflows — 519 lines |
| `{this}` | Phase 6 | This architecture document |

---

## Next Steps

1. **Run `npx paperclipai onboard --yes`** to wire up live Paperclip instance
2. **Populate TOOLS.md** for each agent — grant-level tool access definitions
3. **Provision infrastructure** via Terraform (database, CI runners, monitoring)
4. **Enable Slack adapter** for real-time agent communication
5. **Wire up Obsidian vault** as secondary knowledge graph
6. **First project**: Create `projects/lobsterboard/` using the intake workflow
7. **Start agent heartbeats** — let agents begin their autonomous loops
