# Agent Memory Log

> This file is **append-only**. Agents add entries but never delete them.
> Each entry includes a timestamp, category, and content.

## Format

```
### [ISO-8601 Timestamp] — [Category]
[Content of the memory entry]
```

## Categories
- **DECISION**: A decision the agent made and why
- **OBSERVATION**: Something the agent noticed or learned
- **ESCALATION**: An escalation sent to supervisor
- **TASK_COMPLETE**: A task completed with results
- **ERROR**: An error encountered and how it was handled
- **HEARTBEAT**: Regular heartbeat log entry

---

## Log

_No entries yet. Memory begins when the agent is activated._
