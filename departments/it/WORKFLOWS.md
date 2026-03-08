# IT Workflows

## 1. Infrastructure Provisioning
```
Trigger: New infrastructure request from any department
Steps:
  1. CIO receives request with requirements (compute, storage, networking)
  2. Designs infrastructure using Terraform
  3. Routes to CSO for security review
  4. If infrastructure change → requires Board approval per BOARD.md
  5. Applies Terraform plan to staging first
  6. Validates in staging
  7. Applies to production
  8. Updates infra/terraform/ documentation
```

## 2. Monitoring & Alerting
```
Trigger: Continuous / Every heartbeat
Steps:
  1. CIO checks system health: CPU, memory, disk, network
  2. Reviews database performance metrics
  3. Checks agent runtime health (are all containers/processes running?)
  4. If anomaly detected → alert to #it Slack + escalate based on severity
  5. Update LobsterBoard infrastructure widgets
```

## 3. Backup & Recovery
```
Trigger: Daily at 2:00 AM
Steps:
  1. Automated Postgres backup to S3/R2
  2. Git repo mirror to backup location
  3. Verify backup integrity (checksum validation)
  4. Weekly: test restore to staging environment
  5. Log backup status in MEMORY.md
```

## 4. Incident Management
```
Trigger: System alert or user report
Steps:
  1. CIO triages: infrastructure vs application issue
  2. Infrastructure → CIO handles directly
  3. Application → route to CTO
  4. Security → route to CSO
  5. Post-incident: root cause analysis, update runbooks
```
