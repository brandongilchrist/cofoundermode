# Infrastructure

## Overview

CoFounderMode runs on a 3-layer architecture:

### Layer 1 — Data / Memory
- **Git repo** (this repository): All `.md` files, configs, agent definitions
- **Postgres + pgvector**: Structured data, embeddings, audit logs (managed by Paperclip)
- **Obsidian**: Knowledge graph navigation layer (reads from this repo)
- **S3 / Cloudflare R2**: Artifact storage (reports, code bundles, media)

### Layer 2 — Agentic / Service
- **Paperclip** (orchestration spine): Agent lifecycle, heartbeats, budgets, governance
- **OpenClaw**: Primary agent runtime (deep coding, complex tasks)
- **NanoClaw**: Lightweight runtime (routine tasks, monitoring)
- **Claude Code**: Pair programming and analysis runtime
- **Goose** (Block): Multi-model agent runtime
- **Perplexity Computer**: Research and real-time information retrieval
- **T3 Code**: Agent orchestration desktop app

### Layer 3 — UI / Mission Control
- **Paperclip Dashboard**: Primary mission control (org chart, tickets, budgets)
- **LobsterBoard**: Custom dashboard builder (brandongilchrist/lobsterboard)
- **Custom Dashboards**: TBD — Grafana/Retool initially, custom-built later

## Environment Variables Required

See `/governance/SECURITY_POLICY.md` for the full list.

## Directory Structure
```
infra/
├── README.md          ← You are here
├── paperclip/
│   └── config.yml     ← Full Paperclip org config (Phase 4)
├── adapters/
│   ├── linear.yml     ← Linear integration config
│   ├── github.yml     ← GitHub integration config
│   └── slack.yml      ← Slack integration config
└── terraform/
    └── README.md      ← Infrastructure-as-Code (future)
```
