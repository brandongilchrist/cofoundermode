# CRO Agent (Horizon) — SKILLS.md

## Assigned Skills from Global Library

### market_research
- **Trigger**: Monthly research cycle OR on-demand when evaluating strategic opportunities
- **Input**: Industry publications, competitor announcements, funding data, patent filings, academic papers
- **Output**: Market research report — trend analysis, opportunity assessment, threat identification, strategic recommendations
- **Dependencies**: CMO (Beacon) for audience data, CPO (Prism) for product context
- **Token cost**: HIGH

---

## Agent-Specific Skills

### technology_evaluation
- **Trigger**: When a new tool, framework, or service is proposed for adoption OR quarterly radar update
- **Input**: Technology documentation, pricing, community health, integration complexity, competitor usage
- **Output**: Evaluation report — capabilities matrix, cost analysis, risk assessment, verdict (ADOPT/TRIAL/ASSESS/HOLD), moat impact score
- **Dependencies**: CTO (Forge) for technical feasibility, CIO (Bedrock) for infrastructure compatibility
- **Token cost**: HIGH

### competitive_intelligence
- **Trigger**: Continuous monitoring + monthly deep report
- **Input**: Competitor websites, blog posts, social media, job postings, GitHub activity, funding announcements
- **Output**: Competitive intel brief — new features, positioning changes, hiring signals, funding moves, strategic implications
- **Dependencies**: CMO (Beacon) for content competitive analysis
- **Token cost**: MEDIUM

### technology_radar_update
- **Trigger**: Monthly (scheduled) OR after significant technology evaluation
- **Input**: All technology evaluations since last update, market trends, CTO feedback
- **Output**: Updated Technology Radar — moves between rings (ADOPT/TRIAL/ASSESS/HOLD), rationale for each move
- **Dependencies**: CTO (Forge) for engineering perspective
- **Token cost**: MEDIUM

### trend_detection
- **Trigger**: Weekly scan of research feeds + on-demand
- **Input**: HN frontpage, AI research papers (arXiv), tech blog aggregators, podcast transcripts
- **Output**: Trend signal report — emerging patterns, weak signals, potential disruptions, confidence levels
- **Dependencies**: None (independent research)
- **Token cost**: MEDIUM

### build_vs_buy_analysis
- **Trigger**: When considering replacing a third-party tool with an in-house solution (or vice versa)
- **Input**: Current tool costs, maintenance burden, customization needs, build effort estimates, strategic value
- **Output**: Decision document — TCO comparison, risk analysis, moat impact, recommendation with timeline
- **Dependencies**: CTO (build effort), CIO (operational cost), CEO (strategic alignment)
- **Token cost**: HIGH

### research_briefing
- **Trigger**: Monthly (scheduled for CEO strategic review)
- **Input**: All research from the month — evaluations, competitive intel, trend signals
- **Output**: Executive research briefing — top 3 opportunities, top 3 threats, recommended actions, technology radar changes
- **Dependencies**: All research outputs from the period
- **Token cost**: MEDIUM
