# Operations Workflows

## 1. Daily Standup
```
Trigger: Every day at 8:00 AM
Steps:
  1. CEO agent reviews all department MEMORY.md logs from the past 24 hours
  2. COO compiles key metrics: tasks completed, blockers, budget burn
  3. Produces a standup summary artifact
  4. Posts to #general Slack channel
  5. Archives to /projects/reports/standups/{date}.md
```

## 2. Weekly Company Report
```
Trigger: Friday at 5:00 PM
Steps:
  1. COO sends report request to all department heads
  2. Each C-suite agent writes their section (accomplishments, blockers, next week)
  3. CEO compiles and formats the full report
  4. Saved to /projects/reports/{date}-weekly.md
  5. Posted to #reports Slack channel
  6. Sent to Chairman for review
```

## 3. Operational Health Check
```
Trigger: Every heartbeat (60 minutes)
Steps:
  1. COO checks all agent heartbeat compliance (are they responding?)
  2. Reviews budget burn rates against monthly allocation
  3. Checks LobsterBoard dashboard for any red metrics
  4. Flags anomalies to CEO if found
  5. Updates MEMORY.md with health status
```

## 4. SLA Tracking
```
Trigger: Daily at end of business
Steps:
  1. COO reviews all inter-department requests from today
  2. Measures response time against SLA targets
  3. Flags any SLA breaches to the responsible department head
  4. Logs SLA metrics in operations dashboard
```
