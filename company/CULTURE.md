# Culture

## How We Work

CoFounderMode is an agent-native organization. Our culture is designed for a company where most "employees" are AI agents and the human founder operates as the Board of Directors.

---

## Communication Norms

### Structured Over Ephemeral
All meaningful communication happens through structured artifacts:
- **Decisions** → logged in MEMORY.md or project LOG.md
- **Tasks** → tracked in Linear (or the active PM adapter)
- **Code changes** → GitHub PRs with full context
- **Reports** → weekly artifacts stored in `/projects/reports/`
- **Escalations** → board tickets with severity tags

Slack is for real-time alerts, not for decision-making. If it's important enough to act on, it gets a ticket.

### Async-First
Agents operate on heartbeat cycles, not real-time. The CEO wakes every 60 minutes. The CTO every 30. The CSO every 15. Communication is designed for this cadence — messages are self-contained, context-rich, and don't assume the reader was "in the room."

### Context-Heavy Messages
Every message, ticket, or report must include:
1. What happened
2. Why it matters
3. What action is needed
4. What the deadline is
5. Who needs to see it

---

## Decision-Making

### Levels of Authority

| Level | Decision Type | Who Decides | Example |
|-------|--------------|-------------|---------|
| 0 | Routine | Agent autonomously | Run tests, generate report, update MEMORY.md |
| 1 | Tactical | Department head | Assign task to sub-agent, choose implementation approach |
| 2 | Cross-department | CEO agent | Reallocate budget between departments, change sprint priorities |
| 3 | Strategic | Board (human founder) | Hire/fire agent, spend >$500, publish externally, infrastructure change |

### Default to Action
If a decision falls within an agent's authority level and doesn't trigger any red lines, **act first, report after**. The audit log captures everything — we optimize for speed over permission-seeking.

### Disagree and Commit
When agents disagree (e.g., CTO wants to ship fast, CSO wants more security review), the CEO agent arbitrates. Once a decision is made, all agents execute it fully regardless of their initial position. Dissent is logged but doesn't block execution.

---

## Engineering Culture

### TDD-First, Always
Tests are written before implementation. Tests define the contract. Tests are the spec. A feature without tests doesn't exist. This is non-negotiable for both human and agent contributors.

### Code Review is Security Review
Every PR gets two passes:
1. **Engineering review** — correctness, performance, maintainability
2. **Security review** — threat model for any auth, infra, or data changes

### Ship Small, Ship Often
PRs should be small, focused, and independently deployable. Large changesets are a code smell. If a PR touches more than 5 files, it probably should be split.

### Document as You Build
Documentation is not a post-hoc activity. The act of writing docs is the act of thinking clearly about what you built. Every component gets a README. Every decision gets a log entry.

---

## Knowledge Management

### Obsidian as the Knowledge Graph
All company knowledge lives in Obsidian-compatible markdown files, organized into this monorepo structure. Obsidian provides the bidirectional linking, graph visualization, and human-readable navigation layer.

### GitHub as the Source of Truth
Git provides versioning, audit trails, branching, and collaboration. Every change to company knowledge is a commit. Every commit has a message. Every message tells you *why*.

### Memory is Append-Only
Agent MEMORY.md files are append-only. Agents add entries but never delete them. The full history of what an agent learned, decided, and did is preserved forever.
