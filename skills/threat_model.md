# Skill: Threat Model

## Description
Analyze a system, feature, or code change for security threats using STRIDE methodology and produce a threat model report with identified risks and mitigations.

## Trigger
- PR opened that touches auth, infrastructure, data storage, or external APIs
- New project kickoff involving sensitive data
- CSO scheduled threat model review

## Input
- Code diff or system architecture description
- Data flow diagrams (if available)
- List of external services and APIs involved
- Current security controls in place

## Output
- Threat model report following STRIDE categories:
  - **S**poofing: Can an attacker impersonate a user or system?
  - **T**ampering: Can data be modified in transit or at rest?
  - **R**epudiation: Can actions be denied without proof?
  - **I**nformation disclosure: Can sensitive data leak?
  - **D**enial of service: Can the system be overwhelmed?
  - **E**levation of privilege: Can an attacker gain unauthorized access?
- Risk severity rating per threat: CRITICAL / HIGH / MEDIUM / LOW
- Recommended mitigations for each identified threat
- Residual risk assessment

## Token Cost
HIGH — Requires deep analysis, typically 5K-15K tokens per model.
