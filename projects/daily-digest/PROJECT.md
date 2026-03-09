# Project: Daily Digest

## Status: ACTIVE
## Type: Test Venture (Infrastructure Validation)

## Overview
Auto-curated daily AI/crypto news digest published as a static site. 
First test venture to validate whether the CoFounderMode agent infrastructure works.

## Objective
Ship a live, publicly accessible news digest site that updates daily — 
with zero human intervention after initial deployment.

## Success Criteria
- [ ] Site is live and returns HTTP 200
- [ ] Content publishes daily (automated)
- [ ] All 8 agents produce MEMORY.md entries related to this project
- [ ] Agent handoff chain completes end-to-end
- [ ] Scoring harness produces a venture scorecard

## Agent Assignments
| Agent | Role in This Project |
|-------|---------------------|
| CEO (Atlas) | Approves narrative direction, weekly review |
| CTO (Forge) | Builds site + content pipeline |
| CSO (Sentinel) | Reviews for security (no leaks, safe deps) |
| CPO (Prism) | Specs the digest format + content structure |
| CMO (Beacon) | Writes/edits content, SEO |
| COO (Nexus) | Tracks daily shipping, reports status |
| CRO (Horizon) | Researches topics, provides source feeds |
| CIO (Bedrock) | Deploys + maintains hosting |

## Technical Spec
- **Stack**: HTML + CSS + JS (static site)
- **Content**: JSON feed of curated items, rendered as HTML
- **Deploy**: GitHub Pages or Cloudflare Pages
- **Pipeline**: Script that fetches → curates → generates → deploys
- **Schedule**: Daily at 07:00 UTC (pre-standup)

## Linear
- GIL-28
