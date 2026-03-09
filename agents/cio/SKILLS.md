# CIO Agent (Bedrock) — SKILLS.md

## Assigned Skills from Global Library

### deploy_pipeline
- **Trigger**: PR merged to main OR manual deploy request from CTO
- **Input**: Merged code artifact, CI results, environment target, rollback version
- **Output**: Deployment result — success/fail, deployed version, health check results, rollback instructions
- **Dependencies**: CTO (Forge) for build artifacts, CSO (Sentinel) for security scan
- **Token cost**: LOW

### incident_response
- **Trigger**: Infrastructure alert (CPU, memory, disk, network anomaly) OR manual escalation
- **Input**: Alert data, affected services, current resource utilization, recent changes
- **Output**: Incident report — root cause, containment actions, resolution, prevention measures
- **Dependencies**: CSO (Sentinel) for security-related assessment, CTO (Forge) for code-level investigation
- **Token cost**: HIGH (real-time, multi-step)

---

## Agent-Specific Skills

### infrastructure_provisioning
- **Trigger**: New service/environment request from CTO or approved Terraform change
- **Input**: Service requirements (compute, storage, network), Terraform plan, budget constraints
- **Output**: Provisioned infrastructure — Terraform apply confirmed, endpoints available, monitoring configured
- **Dependencies**: CSO (Sentinel) for security review of Terraform plans, Chairman (Board approval)
- **Token cost**: MEDIUM

### backup_verification
- **Trigger**: Weekly automated test + post-backup daily check
- **Input**: Backup inventory, retention policy, restore point objectives
- **Output**: Backup health report — all backups verified, restore test results, any gaps or failures
- **Dependencies**: None (automated infrastructure check)
- **Token cost**: LOW

### system_health_monitoring
- **Trigger**: Every heartbeat (60 min) — continuous monitoring
- **Input**: CPU/memory/disk metrics, database health, CI/CD runner status, network latency
- **Output**: System health dashboard update — green/yellow/red per service, anomaly alerts, trend data
- **Dependencies**: COO (Nexus) for dashboard integration
- **Token cost**: LOW

### cost_optimization
- **Trigger**: Monthly cloud bill review OR when spend approaches budget ceiling
- **Input**: Cloud provider billing data, resource utilization metrics, reserved instance status
- **Output**: Cost optimization report — underutilized resources, right-sizing recommendations, projected savings
- **Dependencies**: CEO (Atlas) for budget context, COO (Nexus) for utilization data
- **Token cost**: MEDIUM

### database_maintenance
- **Trigger**: Weekly automated maintenance window OR performance degradation detected
- **Input**: Query performance logs, index usage stats, table size growth, connection pool health
- **Output**: Maintenance report — indexes rebuilt, vacuum completed, slow queries identified, optimization recommendations
- **Dependencies**: CTO (Forge) for query optimization coordination
- **Token cost**: LOW

### disaster_recovery_drill
- **Trigger**: Quarterly (scheduled) OR after major infrastructure change
- **Input**: DR plan, backup inventory, recovery procedure documentation, RTO/RPO targets
- **Output**: DR drill report — recovery time achieved, data integrity verified, gaps identified, procedure updates
- **Dependencies**: CSO (Sentinel) for security verification, CEO (Atlas) for drill approval
- **Token cost**: HIGH

### ci_cd_optimization
- **Trigger**: When build times exceed 10 minutes OR cache hit rate drops below 80%
- **Input**: CI pipeline metrics — build times, cache stats, runner utilization, failure patterns
- **Output**: Optimization plan — cache improvements, parallelization opportunities, runner scaling recommendations
- **Dependencies**: CTO (Forge) for pipeline configuration access
- **Token cost**: LOW
