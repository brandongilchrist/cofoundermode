# Finance Workflows

## 1. Daily Cost Review
```
Trigger: Daily at 9:00 AM
Steps:
  1. Pull per-agent cost data from Paperclip API
  2. Compare against daily budget targets (monthly budget / 30)
  3. Flag any agent exceeding 2x daily average
  4. Update cost tracking dashboard in LobsterBoard
  5. Alert CEO if any agent approaching 80% monthly limit
```

## 2. Monthly Financial Report
```
Trigger: 1st business day of each month
Steps:
  1. Aggregate all costs from previous month:
     - LLM API costs per agent
     - Infrastructure costs (cloud, hosting)
     - Third-party tool costs (Linear, Slack, etc.)
  2. Compare actuals vs budget
  3. Identify top cost drivers and optimization opportunities
  4. Project next month's spend based on trends
  5. Produce financial report artifact
  6. Route to Chairman for review
```

## 3. Budget Approval
```
Trigger: Spend request exceeding agent's autonomous limit
Steps:
  1. Requesting agent submits spend request with justification
  2. CEO reviews: Is this within department budget? Is it necessary?
  3. If < $500: CEO approves/denies
  4. If >= $500: CEO endorses and routes to Chairman
  5. Decision logged in MEMORY.md
  6. Budget tracking updated immediately
```
