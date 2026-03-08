# Infrastructure as Code — Terraform

## Status
Terraform infrastructure definitions will be added here as the company moves to cloud deployment.

## Planned Modules

### Core Infrastructure
- **VPC / Networking**: Private network for agent services
- **Compute**: Container-based agent runtime hosting (ECS/Cloud Run)
- **Database**: Managed Postgres with pgvector extension
- **Storage**: S3/R2 bucket for artifact storage

### Agent Runtime
- **Paperclip Server**: Containerized deployment of the orchestration spine
- **Agent Workers**: Container instances for each agent runtime (OpenClaw, NanoClaw, etc.)

### Monitoring
- **CloudWatch / Cloud Monitoring**: System-level metrics
- **LobsterBoard**: Custom agent dashboard (self-hosted)

## Environment Targets
| Environment | Purpose | Provider |
|-------------|---------|----------|
| local | Development and testing | Docker Compose |
| staging | Pre-production validation | AWS/GCP |
| production | Live autonomous operations | AWS/GCP |

## Prerequisites
- Terraform >= 1.5
- AWS CLI or gcloud CLI configured
- `${AWS_ACCESS_KEY_ID}` and `${AWS_SECRET_ACCESS_KEY}` (or GCP service account)
