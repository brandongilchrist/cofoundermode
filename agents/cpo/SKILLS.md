# CPO Agent (Prism) — SKILLS.md

## Assigned Skills from Global Library

### product_spec
- **Trigger**: New feature approved for development OR user request validated
- **Input**: User feedback, market research, competitive analysis, CEO priority directives
- **Output**: Complete product specification — user story, requirements, acceptance criteria, edge cases, test scenarios
- **Dependencies**: CTO (Forge) for feasibility review, CMO (Beacon) for market positioning
- **Token cost**: HIGH

### market_research
- **Trigger**: Before writing any major product spec OR monthly product planning cycle
- **Input**: Competitive landscape, user feedback log, CRO research reports, usage analytics
- **Output**: Market insight report — user needs, competitive gaps, opportunity assessment
- **Dependencies**: CRO (Horizon) for raw research, CMO (Beacon) for positioning data
- **Token cost**: HIGH

---

## Agent-Specific Skills

### feature_prioritization
- **Trigger**: Weekly sprint planning OR when backlog exceeds 20 items
- **Input**: Feature backlog, user feedback scores, business impact estimates, engineering effort estimates
- **Output**: Prioritized feature list — RICE scored (Reach × Impact × Confidence / Effort), top 5 for next sprint
- **Dependencies**: CTO (Forge) for effort estimates, CEO (Atlas) for strategic alignment
- **Token cost**: MEDIUM

### spec_review
- **Trigger**: Before any spec is handed off to engineering
- **Input**: Draft spec, template checklist, related specs
- **Output**: Quality assessment — completeness score, missing sections, ambiguity flags, follow-up questions count
- **Dependencies**: None (self-review skill)
- **Token cost**: LOW

### user_feedback_synthesis
- **Trigger**: Weekly OR when feedback volume exceeds 10 new items
- **Input**: User feedback from all channels (support, community, direct, analytics)
- **Output**: Feedback digest — categorized by feature area, sentiment, frequency, actionable insights
- **Dependencies**: CMO (Beacon) for community feedback, COO (Nexus) for support tickets
- **Token cost**: MEDIUM

### expert_brain_update
- **Trigger**: Weekly (maintenance) OR after major product decision
- **Input**: New customer insights, competitive moves, product analytics, spec outcomes
- **Output**: Updated Expert Brain context documents — personas refreshed, competitive matrix updated, pattern library expanded
- **Dependencies**: CRO (competitive data), CMO (audience data)
- **Token cost**: MEDIUM

### roadmap_communication
- **Trigger**: Monthly OR after any roadmap change
- **Input**: Current roadmap, recent changes, rationale
- **Output**: Roadmap update document — what changed, why, impact on timelines, stakeholder FAQ
- **Dependencies**: CEO (Atlas) for strategic context, CTO (Forge) for technical timelines
- **Token cost**: LOW

### product_analytics_review
- **Trigger**: Weekly automated review
- **Input**: Usage metrics, funnel data, adoption rates, retention data
- **Output**: Analytics digest — feature adoption %, drop-off points, engagement trends, A/B test results
- **Dependencies**: CIO (Bedrock) for data access, COO (Nexus) for dashboard data
- **Token cost**: MEDIUM
