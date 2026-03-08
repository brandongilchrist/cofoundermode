# Glossary

Key terms, acronyms, and domain vocabulary used across CoFounderMode.

---

| Term | Definition |
|------|-----------|
| **Agent** | An autonomous AI entity with a persistent identity (SOUL.md), skills, tools, and memory. Operates on a heartbeat cycle within Paperclip. |
| **Board** | The governance layer — currently the human founder (Brandon Gilchrist). Approves strategic decisions, hires/fires agents, approves large spend. |
| **C-Suite** | The 8 executive-level agents: CEO, CTO, CSO, CPO, CMO, COO, CRO, CIO. Each leads a department. |
| **CoFounderMode** | The autonomous company infrastructure platform built by Gilchrist Research. |
| **Goal Ancestry** | The chain from Company Mission → Department Mission → Project Goal → Task that gives every piece of work context on *why* it matters. |
| **Governance Gate** | A checkpoint that requires board approval before an action can proceed. Examples: hiring agents, spending above $500, publishing externally. |
| **Heartbeat** | A scheduled wake-up signal that triggers an agent to check its work queue, execute pending tasks, and delegate as needed. Each agent has a configured interval (15-60 min). |
| **Heartbeat Interval** | The time in minutes between agent wake-up cycles. CSO: 15min, CTO: 30min, CEO/ops: 60min. |
| **Layer 1 (Data/Memory)** | The ground truth layer: Git-versioned .md files, Postgres/pgvector, Obsidian knowledge graph, S3/R2 artifact storage. |
| **Layer 2 (Agentic/Service)** | The execution layer: agent runtimes (OpenClaw, NanoClaw, Claude Code, Goose, Perplexity Computer) orchestrated by Paperclip. |
| **Layer 3 (UI/Mission Control)** | The visibility layer: Paperclip dashboard, LobsterBoard, custom dashboards for the founder. |
| **MEMORY.md** | Append-only log of an agent's decisions, learnings, and observations. Never deleted, always growing. |
| **NanoClaw** | Lightweight variant of OpenClaw for smaller, faster tasks. Lower token cost, shorter context window. |
| **OpenClaw** | Primary agent runtime. Full-featured autonomous coding agent with broad tool access. |
| **Orchestration Spine** | Paperclip — the central coordinator that manages all agents, task routing, budgets, and governance. |
| **Paperclip** | Open-source orchestration platform (paperclipai/paperclip) for zero-human companies. The spine of CoFounderMode. |
| **Perplexity Computer** | Research-focused agent runtime with web access and real-time information retrieval. |
| **Red Line** | An action an agent must NEVER take without explicit board approval. Crossing a red line without approval is an agent failure. |
| **Skill Injection** | The process of loading context (SKILLS.md + goal ancestry) into an agent at the start of each heartbeat cycle so it knows what it can do and why. |
| **SOUL.md** | The identity file for an agent: personality, directives, decision principles, escalation rules, red lines, knowledge domains. |
| **Sub-agent** | A specialized agent spawned by a C-suite agent for a specific task or project. Subject to hiring policy and board approval. |
| **Task Adapter** | A pluggable integration module (Linear, Jira, GitHub Issues, custom) that connects Paperclip to external task management systems. |
| **Token Budget** | Monthly spending limit per agent, measured in USD equivalent of LLM API costs. Hard stop at 100%, soft warning at 80%. |
| **Atomic Task Checkout** | Paperclip's mechanism ensuring no two agents work on the same task simultaneously. Prevents double-work. |
| **Audit Log** | Immutable, append-only log of every tool call, decision, and API request made by any agent. Full traceability. |
| **LobsterBoard** | Self-hosted dashboard builder (brandongilchrist/lobsterboard fork) used as mission control for monitoring agent activity. |
| **Claude Cowork** | Collaborative coding mode using Claude as a pair-programming partner within the service layer. |
| **Adapter Pattern** | Design principle where every external integration (Linear, Slack, GitHub) is accessed through a swappable adapter interface, enabling future replacement. |
