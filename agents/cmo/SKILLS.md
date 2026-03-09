# CMO Agent (Beacon) — SKILLS.md

## Assigned Skills from Global Library

### market_research
- **Trigger**: Before launching any campaign OR monthly market sensing cycle
- **Input**: Competitor content, audience analytics, channel performance data, industry trends
- **Output**: Market insight report — audience sentiment, content gaps, channel opportunities, competitor positioning
- **Dependencies**: CRO (Horizon) for tech/market trends, CPO (Prism) for product positioning
- **Token cost**: HIGH

### weekly_report
- **Trigger**: Every Friday 17:00 UTC (contributes to CEO weekly report)
- **Input**: Content performance metrics, campaign results, community growth, funnel data
- **Output**: Marketing section of weekly report — what published, engagement numbers, pipeline health
- **Dependencies**: COO (Nexus) for aggregated dashboard data
- **Token cost**: MEDIUM

---

## Agent-Specific Skills

### content_creation
- **Trigger**: Per content calendar OR on-demand for product launches / announcements
- **Input**: Topic, target audience, channel, brand voice guide, Expert Brain swipe file
- **Output**: Draft content piece — blog post, tweet thread, newsletter, email sequence
- **Dependencies**: CPO (product context for accuracy), CEO (Atlas) for approval queue
- **Token cost**: HIGH (creative generation)

### promoter_blueprint_execution
- **Trigger**: Continuous — the core marketing operating loop
- **Input**: Funnel stage metrics (traffic, holding, selling, conversion), channel data
- **Output**: Stage-by-stage health report + next actions — which stages need attention, what to launch, what to kill
- **Dependencies**: CEO (Atlas) for strategy, COO (Nexus) for dashboard data
- **Token cost**: MEDIUM

### campaign_ab_testing
- **Trigger**: When launching any new content series, email sequence, or landing page
- **Input**: Two or more content variants, success criteria, sample size requirements
- **Output**: Test results — winner, confidence interval, lift %, recommendation (scale/kill/iterate)
- **Dependencies**: CIO (Bedrock) for analytics infrastructure
- **Token cost**: LOW

### community_engagement
- **Trigger**: Daily (ongoing) + triggered by mentions, questions, or community events
- **Input**: Community messages (Discord/Slack), social mentions, user feedback
- **Output**: Engagement log — questions answered, feedback surfaced, sentiment summary
- **Dependencies**: CPO (Prism) for product feedback routing
- **Token cost**: LOW

### expert_brain_marketing_update
- **Trigger**: Weekly maintenance cycle
- **Input**: This week's content performance, new competitor content, audience feedback, A/B results
- **Output**: Updated marketing Expert Brain — swipe file additions, persona refinements, channel performance updates
- **Dependencies**: CRO (competitive content intel)
- **Token cost**: MEDIUM

### launch_campaign
- **Trigger**: Product launch, feature release, or strategic announcement
- **Input**: Product details from CPO, launch timeline, target audience, channels
- **Output**: Launch plan — content calendar (pre/during/post), email sequences, social schedule, press kit draft
- **Dependencies**: CPO (product details), CTO (release timeline), CEO (approval)
- **Token cost**: HIGH

### seo_optimization
- **Trigger**: Monthly content audit OR when publishing new blog content
- **Input**: Current page rankings, keyword research, competitor SEO data, content drafts
- **Output**: SEO recommendations — target keywords, meta descriptions, internal linking strategy, content gaps
- **Dependencies**: CIO (Bedrock) for analytics access
- **Token cost**: MEDIUM
