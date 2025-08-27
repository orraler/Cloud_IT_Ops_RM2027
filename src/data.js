export const EPICS = [
  { type: "CloudOps", epic: "Zero-Touch Provisioning (CloudOps)", start: "Q1 2025", end: "Q4 2026", stories: [
    { title: "Automated Self-Service Infrastructure", tasks: [
      "Teams bot (ChatGPT) intake → n8n → CI/CD deploy (Terraform/ARM)",
      "AI pre-merge checks: policy, security, cost, tagging",
      "CMDB + IAM auto-link on provision"
    ]},
    { title: "Drift Detection & Auto-Remediation", tasks: [
      "Detect drift vs. IaC (tags, NSGs, backup, diagnostics)",
      "Trigger pre-approved fix playbooks; open Jira if manual review",
      "Weekly Claude summary of drift trends"
    ]},
    { title: "Template Library & Pipelines", tasks: [
      "Ref arch templates: AKS, App Service, SQL, VMSS",
      "Golden pipeline with gates (SBOM, vuln, policy-as-code)",
      "Publish developer how-to docs"
    ]}
  ]},
  { type: "CloudOps", epic: "Dev Experience Transformation (CloudOps)", start: "Q1 2025", end: "Q3 2026", stories: [
    { title: "AVD Off-Ramp for Jumpboxes", tasks: [
      "Pilot AVD for contractors; decommission bastions",
      "Autoscale pools based on session load (AI policy)",
      "Standardize images and FSLogix profiles"
    ]},
    { title: "Developer Self-Service Chatbot", tasks: [
      "FAQ + runbook Q&A from Confluence",
      "Request infra → validate role/limits → trigger pipeline",
      "Issue triage: suggest KB or raise incident"
    ]},
    { title: "Onboarding Copilot", tasks: [
      "Generate onboarding checklist per role",
      "Auto-provision tool access & secrets (PIM/JIT)",
      "NPS baseline + quarterly survey"
    ]}
  ]},
  { type: "CloudOps", epic: "Multi-Cloud Governance (CloudOps)", start: "Q2 2025", end: "Q2 2026", stories: [
    { title: "Workload Placement Framework", tasks: [
      "Publish Ref Arch v1 (Azure-first with exceptions)",
      "AI advisor recommends placement by cost/security/latency",
      "Tag schema + DR tier labels"
    ]},
    { title: "Tagging Compliance Enforcement", tasks: [
      "PR bot comments on missing keys; block on merge if critical",
      "n8n auto-tag fix for safe resources",
      "Weekly compliance report → Jira dashboard"
    ]}
  ]},
  { type: "CloudOps", epic: "FinOps Enablement (CloudOps)", start: "Q1 2025", end: "Q4 2026", stories: [
    { title: "Cost Intelligence & Forecasting", tasks: [
      "Unified dashboard per env/app/team",
      "AI anomaly explainer (e.g., Storage +20% from App X)",
      "Monthly forecast by unit economics"
    ]},
    { title: "Commitment Optimization", tasks: [
      "ProsperOps/automation for Azure; expand AWS/GCP",
      "AI suggestions → Teams approvals → execute",
      "Quarterly cost review with engineering leads"
    ]}
  ]},
  { type: "CloudOps", epic: "CloudOps as a Platform", start: "Q2 2025", end: "Q4 2026", stories: [
    { title: "Service Charters & SLAs", tasks: [
      "Publish 2 charters → expand to all services",
      "SLA scorecards (uptime, provision time, cost KPIs)",
      "AI alerts on SLA breaches"
    ]},
    { title: "Stakeholder Reporting", tasks: [
      "Claude-generated quarterly reviews from Jira/monitoring",
      "Roadmap/Backlog grooming from trend analysis"
    ]}
  ]},
  { type: "IT Ops", epic: "Service Ownership Program (IT Ops)", start: "Q1 2025", end: "Q3 2026", stories: [
    { title: "Establish Service Charters", tasks: [
      "Entra ID & M365 in 2025 → DNS/Endpoint/Server in 2026",
      "Define SLOs, error budgets, hygiene KPIs",
      "Publish change policy (standard vs normal)"
    ]},
    { title: "AI SLA Monitoring", tasks: [
      "Collect uptime/patch/backup metrics",
      "Auto-publish hygiene scorecards in Confluence"
    ]}
  ]},
  { type: "IT Ops", epic: "AI Multi-Channel Support (IT Ops)", start: "Q1 2025", end: "Q4 2026", stories: [
    { title: "Tier-0 Virtual Agent", tasks: [
      "Password reset, MFA, license packs (Entra)",
      "Device wipe/unlock via Intune/JAMF through bot",
      "Inline CSAT capture"
    ]},
    { title: "Predictive & Sentiment Routing", tasks: [
      "Detect frustration/VIP tickets (Claude)",
      "Auto-escalate & route to right queue",
      "Deflection targeting for top request types"
    ]}
  ]},
  { type: "IT Ops", epic: "Automation & Orchestration (IT Ops)", start: "Q2 2025", end: "Q4 2026", stories: [
    { title: "Service Catalog Cleanup", tasks: [
      "Audit duplicates/unused; rationalize items",
      "Top 10 automation candidates (mailbox add, DNS, shared drives)"
    ]},
    { title: "AI Ticket Enrichment & Routing", tasks: [
      "Auto-assign to DNS/Endpoint/Cloud based on content",
      "Draft probable resolution steps in Jira",
      "Approval flows in n8n"
    ]}
  ]},
  { type: "IT Ops", epic: "Zero-Touch Device Lifecycle (IT Ops)", start: "Q1 2025", end: "Q4 2026", stories: [
    { title: "Automated Provisioning", tasks: [
      "Autopilot/ABM baselines",
      "Top 5 self-service app packages",
      "BitLocker/FileVault escrow validation"
    ]},
    { title: "Compliance & Remediation", tasks: [
      "Patch/compliance dashboards",
      "AI detects drift >7 days → remediation scripts",
      "Auto-close stale devices >90 days"
    ]}
  ]},
  { type: "IT Ops", epic: "Proactive Ops & Reliability (IT Ops)", start: "Q2 2025", end: "Q4 2026", stories: [
    { title: "Event-to-Incident Automation", tasks: [
      "Correlate Datadog/Dynatrace alerts → open Jira",
      "Noise suppression + critical prioritization"
    ]},
    { title: "RCA Automation", tasks: [
      "AI drafts RCA from logs/metrics",
      "Quarterly reliability reviews with anomaly insights"
    ]}
  ]},
  { type: "IT Ops", epic: "Experience & Quality Mgmt (IT Ops)", start: "Q2 2025", end: "Q4 2026", stories: [
    { title: "KCS Automation", tasks: [
      "Draft KB after ticket closure",
      "Improve KB based on usage/feedback"
    ]},
    { title: "QA & Metrics Expansion", tasks: [
      "Weekly MTTR/FCR/CSAT summaries",
      "Top 5 repeating incidents → automation backlog"
    ]}
  ]}
];
