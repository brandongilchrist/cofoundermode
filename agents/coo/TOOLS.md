# Agent Tools Template

## Available Tools

### Core Tools (All Agents)
| Tool | Description | Access Level |
|------|------------|-------------|
| `read_file` | Read any file in the workspace | Full |
| `write_file` | Create or modify files | Workspace only |
| `run_command` | Execute shell commands | Sandboxed |
| `git_commit` | Commit changes to the repo | Own workspace |
| `memory_append` | Add entry to MEMORY.md | Own memory |
| `escalate` | Send escalation to supervisor | Always |
| `delegate` | Assign task to sub-agent | If can_spawn_subagents |

### Communication Tools
| Tool | Description | Access Level |
|------|------------|-------------|
| `slack_post` | Post to Slack channel | Department channels |
| `linear_create` | Create Linear ticket | Department boards |
| `linear_update` | Update Linear ticket status | Own tickets |
| `github_pr` | Create/review GitHub PR | Engineering repos |

### Department-Specific Tools
[Add department-specific tools here]

## Tool Budget Tracking
Every tool call has an associated cost. The agent must track:
- Estimated cost before execution
- Actual cost after execution
- Running total against monthly budget
