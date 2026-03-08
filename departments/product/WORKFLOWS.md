# Product Workflows

## 1. New Project Intake
```
Trigger: Linear ticket created with [PROJECT] tag
Steps:
  1. CPO reads the ticket and attached context
  2. Creates /projects/{slug}/PROJECT.md with goals, success criteria
  3. Creates /projects/{slug}/BRIEF.md with detailed spec
  4. Assigns relevant department agents
  5. Posts kickoff summary to #projects Slack channel
```

## 2. Feature Specification
```
Trigger: Feature request from CEO, customer feedback, or market research
Steps:
  1. CPO drafts product_spec using the product_spec skill
  2. Includes: user story, acceptance criteria, edge cases, test scenarios
  3. Routes to CTO for technical feasibility review
  4. Routes to CSO for security implications review
  5. Final spec posted to Linear as epic with child tasks
```

## 3. Product Review
```
Trigger: Weekly, Thursday at 3 PM
Steps:
  1. CPO aggregates all shipped features this week
  2. Reviews against spec: did we build what we specced?
  3. Collects any user feedback or metrics
  4. Updates product roadmap
  5. Prepares product section for weekly report
```
