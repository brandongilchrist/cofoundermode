# Skill: Weekly Report

## Description
Compile and format a comprehensive weekly company report from all department inputs.

## Trigger
- Friday at 5:00 PM (weekly cadence)
- Ad-hoc request from CEO or Board

## Input
- Department MEMORY.md logs from the past week
- Task completion data from Linear
- Budget burn data from Paperclip
- Any incident reports from the week
- Previous week's report (for comparison)

## Output
- Weekly report artifact with:
  - **Executive Summary**: 3-5 sentence overview
  - **Key Metrics**: tasks completed, budget burn, uptime, incidents
  - **Department Sections**: each dept head's 3-bullet summary
    - Accomplishments this week
    - Blockers / risks
    - Priorities for next week
  - **Financial Summary**: spend vs budget, anomalies
  - **Security Summary**: incidents, vulnerabilities, compliance status
  - **Strategic Notes**: CEO observations and recommendations
- Report saved to `/projects/reports/{date}-weekly.md`
- Posted to #reports Slack channel

## Token Cost
MEDIUM — Aggregation and formatting, typically 3K-6K tokens.
