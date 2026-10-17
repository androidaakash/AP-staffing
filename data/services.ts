export type ServiceCapability = { icon: string; title: string; description: string };
export type ServiceStep = { number: string; title: string; description: string };
export type ServiceOutcome = { value: string; label: string; description: string };
export type ServiceFaq = { question: string; answer: string };
export type ServiceCategory = "Recruitment Solutions" | "Business Support Solutions";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  icon: string;
  cardLabel: string;
  tagline: string;
  summary: string;
  heroDescription: string;
  badges: string[];
  overviewHeading: string;
  overviewParagraphs: string[];
  overviewPoints: string[];
  capabilities: ServiceCapability[];
  steps: ServiceStep[];
  outcomes: ServiceOutcome[];
  idealFor: string[];
  faqs: ServiceFaq[];
  seo: { title: string; description: string };
};

export const SERVICE_CATEGORIES: ServiceCategory[] = ["Recruitment Solutions", "Business Support Solutions"];

export const SERVICES: Service[] = [
  {
    slug: "full-cycle-recruitment",
    name: "Full Cycle Recruitment",
    category: "Recruitment Solutions",
    icon: "manage_accounts",
    cardLabel: "View Full Cycle RPO",
    tagline: "End-to-end recruitment delivery under your brand",
    summary:
      "Embed a dedicated offshore recruitment pod that manages requisitions from intake to offer. Screening, scheduling, compliance and onboarding run to your SLAs and under your brand.",
    heroDescription:
      "Our full cycle RPO pods sit inside your agency and run vacancies end to end, from intake briefing and sourcing through to offer management and onboarding. You keep client relationships, pricing and final decisions while we carry the delivery load. Every pod is built around your ATS, your workflows and the promises you make to clients.",
    badges: ["Dedicated pod", "Bullhorn and Vincere ready", "GDPR-aligned processes"],
    overviewHeading: "Recruitment delivery without the overhead",
    overviewParagraphs: [
      "Most agencies lose billable hours to delivery work that never appears on an invoice: reformatting CVs, chasing references, coordinating interviews and keeping the ATS current. A full cycle pod absorbs that load without adding permanent headcount in your home market. We recruit, train and manage the pod, then hold it to the SLAs you have agreed with your clients.",
      "Pods work inside Bullhorn, Vincere, JobAdder or whichever ATS you already run, so pipelines stay in one place and your consultants always see live data. Delivery leads report against time-to-shortlist, submission quality and interview-to-offer ratios each week. Candidate information is handled under GDPR-aligned processes with role-based access and full audit trails.",
    ],
    overviewPoints: [
      "Dedicated recruiters and delivery leads who work only on your vacancies",
      "ATS-native workflows in Bullhorn, Vincere, JobAdder or your in-house system",
      "Client-facing SLAs for time-to-shortlist, submissions and candidate care",
      "Documented GDPR handling with audit trails and role-based access",
    ],
    capabilities: [
      {
        icon: "support_agent",
        title: "Requisition Intake and Delivery Planning",
        description:
          "Structured intake calls and calibration sessions that translate client briefs into sourcing strategies, priorities and realistic delivery timelines.",
      },
      {
        icon: "search",
        title: "Sourcing and Candidate Engagement",
        description:
          "Boolean, X-ray and database search across LinkedIn, job boards and your ATS, with personalised outreach that protects your employer brand.",
      },
      {
        icon: "psychology",
        title: "Screening and Shortlist Presentation",
        description:
          "Structured screening interviews, skill verification and formatted shortlists that match your client's preferred template, tone and scoring standards.",
      },
      {
        icon: "calendar_month",
        title: "Interview and Offer Coordination",
        description:
          "Diary management across UK and US time zones, briefing packs, feedback chasing and offer paperwork handled to agreed service levels.",
      },
      {
        icon: "verified_user",
        title: "Compliance and Onboarding",
        description:
          "Right-to-work checks, reference verification, contract generation and onboarding documentation managed with complete, audit-ready records.",
      },
      {
        icon: "monitoring",
        title: "Delivery Reporting",
        description:
          "Weekly dashboards covering pipeline health, submission-to-interview ratios and SLA attainment, reviewed directly with your delivery lead.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Discovery and Calibration",
        description:
          "We map your delivery gaps, ATS setup, client SLAs and time zone coverage, then agree the pod shape and the measures that define success.",
      },
      {
        number: "02",
        title: "Pod Design and Hiring",
        description:
          "We shortlist pre-vetted offshore recruiters built around your sectors, calibrated on your vacancy types and tested against live scenarios.",
      },
      {
        number: "03",
        title: "Onboarding and Go-Live",
        description:
          "A two-week structured onboarding covers your ATS, brand tone, screening standards and reporting rhythm before the pod takes live requisitions.",
      },
      {
        number: "04",
        title: "Review and Scale",
        description:
          "Monthly performance reviews run against SLA data, and pods scale up or down with two to three weeks' notice as your vacancy flow changes.",
      },
    ],
    outcomes: [
      {
        value: "40%",
        label: "Cost Per Hire Reduction",
        description: "Typical saving on delivery cost compared with equivalent onshore recruitment hires.",
      },
      {
        value: "3x",
        label: "Shortlist Throughput",
        description: "More qualified candidates presented per consultant per week once pods are fully embedded.",
      },
      {
        value: "48 hrs",
        label: "Average Time to Shortlist",
        description: "From calibrated intake to first qualified shortlist on standard professional roles.",
      },
    ],
    idealFor: [
      "Agencies running ten or more live vacancies a month",
      "Boutique search firms without in-house delivery teams",
      "Enterprise talent teams with seasonal hiring peaks",
      "Recruiters protecting margin as local salary costs rise",
      "Firms expanding into new UK or US verticals",
    ],
    faqs: [
      {
        question: "How is full cycle RPO priced?",
        answer:
          "We work on a fixed monthly retainer per dedicated resource, so the cost is known before the pod starts. There are no placement fees and no long-term lock-ins; agreements run month to month after an initial three-month calibration period.",
      },
      {
        question: "Will the pod work inside our ATS?",
        answer:
          "Yes. Pods are trained on Bullhorn, Vincere, JobAdder, Loxo or your in-house system during onboarding. We mirror your pipeline stages, tags and submission formats, which means there is no translation layer for your consultants to manage.",
      },
      {
        question: "Do we keep control of client relationships?",
        answer:
          "Entirely. The pod works under your brand in client correspondence and calls, and you approve every shortlist, submission and offer. Candidates are sourced for your vacancies and remain yours, with no direct approach from our team.",
      },
      {
        question: "How quickly can a pod be live?",
        answer:
          "Most pods are operational within two to three weeks, including sourcing, vetting and onboarding. Complex technical verticals or dual-time-zone coverage can take slightly longer, and we scope that honestly during discovery.",
      },
      {
        question: "What happens if we need to scale down?",
        answer:
          "Pods reduce with two to three weeks' notice. We manage any transition internally, and because every pod member is employed by Aakash AP there are no redundancy costs or HR overhead on your side.",
      },
    ],
    seo: {
      title: "Offshore Full Cycle Recruitment Delivery",
      description:
        "Dedicated offshore recruitment pods that manage vacancies end to end, from intake and sourcing through to offer, compliance and structured onboarding.",
    },
  },
  {
    slug: "candidate-sourcing",
    name: "Candidate Sourcing & Screening",
    category: "Recruitment Solutions",
    icon: "person_search",
    cardLabel: "Explore Sourcing Hubs",
    tagline: "High-yield pipelines, screened and shortlist-ready",
    summary:
      "A sourcing hub that builds and screens candidate pipelines for your live roles. You receive interview-ready shortlists, mapped to your ATS stages and specification.",
    heroDescription:
      "A sourcing hub acts as a dedicated pipeline engine for your agency, filling your ATS with engaged, screened candidates for every live role. Our offshore researchers and screeners work under your brand, using your Boolean libraries and your tone of voice. You receive shortlists you can submit the same day, not raw CV dumps.",
    badges: ["Boolean and X-ray specialists", "ATS-ready shortlists", "48-hour turnaround"],
    overviewHeading: "A pipeline engine for your live roles",
    overviewParagraphs: [
      "Raw sourcing volume is rarely the bottleneck; screening quality is. A sourcing hub pairs offshore researchers with trained screeners so every candidate is contacted, qualified and documented before reaching your desk. Roles are loaded through Bullhorn, Vincere or JobAdder and progressed through your existing pipeline stages, keeping reporting clean.",
      "Hubs flex with your workload: run five live roles or fifty, and agree target volumes per week. Screeners apply your scoring rubric across skills, right-to-work status, salary expectations and notice periods. Each hub reports on response rates, screen-to-submit conversion and pipeline coverage, so you can see exactly where delivery stands before a client asks.",
    ],
    overviewPoints: [
      "Dedicated researchers and screeners who learn your niche and verticals",
      "Screened shortlists delivered within 48 hours of role calibration",
      "Coverage reports showing pipeline depth per vacancy and per stage",
      "Boolean, X-ray and job board search run to your sourcing standards",
    ],
    capabilities: [
      {
        icon: "search",
        title: "Talent Pool and Market Search",
        description:
          "Boolean, X-ray and database mining across LinkedIn Recruiter, job boards, communities and your historical ATS records.",
      },
      {
        icon: "person_search",
        title: "Outreach and Engagement",
        description:
          "Personalised InMail, email and SMS sequences written in your tone, with follow-up cadences that keep passive candidates warm.",
      },
      {
        icon: "rule",
        title: "Structured Screening",
        description:
          "Consistent phone and video screens against your scoring rubric, covering skills, motivation, salary expectations and notice periods.",
      },
      {
        icon: "description",
        title: "Candidate Documentation",
        description:
          "Formatted CVs, screening notes and compliance attachments prepared in your preferred template before anything is submitted.",
      },
      {
        icon: "query_stats",
        title: "Pipeline Analytics",
        description:
          "Weekly reporting on response rates, screen-to-submit ratios and coverage gaps, with clear recommendations for the next sourcing sprint.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Define the Profile",
        description:
          "We capture role requirements, must-haves, salary bands and target companies, then agree screening criteria and weekly volume targets.",
      },
      {
        number: "02",
        title: "Build Search and Outreach",
        description:
          "Boolean strings, talent maps and outreach sequences are built and tested, with your team approving all messaging before launch.",
      },
      {
        number: "03",
        title: "Screen and Qualify",
        description:
          "Researchers engage candidates while screeners run structured interviews, documenting every conversation directly in your ATS.",
      },
      {
        number: "04",
        title: "Deliver and Refine",
        description:
          "Shortlists land in agreed batches, and calibration calls sharpen targeting as response data and placement feedback come in.",
      },
    ],
    outcomes: [
      {
        value: "3x",
        label: "Pipeline Growth",
        description: "More engaged, fully screened candidates per live role than typical solo sourcing produces.",
      },
      {
        value: "48 hrs",
        label: "First Shortlist",
        description: "From approved role brief to the first screened shortlist on standard professional roles.",
      },
      {
        value: "72%",
        label: "Screen-to-Submit Rate",
        description: "Share of screened candidates meeting your submission standard, measured across every active role.",
      },
    ],
    idealFor: [
      "Agencies juggling multiple hard-to-fill roles",
      "Recruiters spending evenings on sourcing admin",
      "Firms entering new verticals without talent data",
      "Teams with high submission targets and lean headcount",
      "RPO partners needing reliable overflow sourcing capacity",
    ],
    faqs: [
      {
        question: "Do you source on job boards or LinkedIn only?",
        answer:
          "We use every channel that fits the role: LinkedIn Recruiter, job boards, niche communities, referral chains and your own ATS database. The channel mix is agreed per vacancy, and results are reported by source so budgets follow what works.",
      },
      {
        question: "How do you keep candidates engaged?",
        answer:
          "Every candidate receives a structured follow-up cadence with clear next steps, usually a mix of InMail, email and SMS over two weeks. Response patterns are tracked, and sequences are rewritten when reply rates fall below agreed thresholds.",
      },
      {
        question: "Is sourcing priced per role or per seat?",
        answer:
          "Sourcing hubs are priced as a fixed monthly retainer per dedicated researcher or screener, not per role or per placement. Costs stay predictable whether you run five vacancies or twenty, and capacity is adjusted with two to three weeks' notice.",
      },
      {
        question: "Will candidates know they are working with an offshore team?",
        answer:
          "Candidates interact under your brand only. Our researchers never mention Aakash AP, and all outreach runs through your email domains and messaging standards so the candidate experience stays consistent from first contact.",
      },
      {
        question: "Can you work to our screening rubric?",
        answer:
          "Yes. Your rubric is built into the hub's screening scripts during onboarding and calibrated against your recruiters' decisions in the first two weeks. Accuracy is reviewed monthly and scripts are updated as your standards evolve.",
      },
    ],
    seo: {
      title: "Offshore Sourcing and Screening Hubs",
      description:
        "Dedicated offshore sourcing hubs that engage, screen and shortlist candidates for your live roles, delivered through your ATS within 48 hours.",
    },
  },
  {
    slug: "market-mapping",
    name: "Market Mapping & Intelligence",
    category: "Recruitment Solutions",
    icon: "explore",
    cardLabel: "Talent Intelligence",
    tagline: "Know every candidate before your competitors do",
    summary:
      "Structured talent maps, competitor intelligence and salary benchmarks that show exactly where talent sits in your market before you launch a search.",
    heroDescription:
      "Market mapping turns guesswork into a searchable brief. Our researchers chart competitor structures, salary bands and talent distribution across your target sectors, then hand you a map ready for client conversations. Use it to win retained work, price engagements and plan every search with evidence rather than instinct.",
    badges: ["Client-ready deliverables", "Salary benchmark packs", "Vertical deep dives"],
    overviewHeading: "Intelligence that wins retainer conversations",
    overviewParagraphs: [
      "Clients rarely buy sourcing alone; they buy certainty. A market map shows which companies employ the talent they need, what those people earn and how they can be reached. We produce these maps for agencies pitching retained work and for enterprise teams benchmarking their own functions against the market.",
      "Every map starts with a scoping call to define sectors, geographies and seniority bands, then moves into structured research across professional networks, company filings, job adverts and your own ATS history. Deliverables are clean, visual and tagged for import into Bullhorn, Vincere or JobAdder. Sensitive findings are handled under GDPR-aligned processes and never shared beyond your team.",
    ],
    overviewPoints: [
      "Competitor org charts showing teams, titles and reporting lines",
      "Salary and day-rate benchmarks across UK, US and EU markets",
      "Talent distribution heatmaps by region, skill and seniority",
      "Deliverables tagged for direct import into your ATS",
    ],
    capabilities: [
      {
        icon: "dataset",
        title: "Competitor Talent Mapping",
        description:
          "Organisation structures and headcount breakdowns across your named competitor set, refreshed as roles and people move in the market.",
      },
      {
        icon: "payments",
        title: "Salary Benchmarking",
        description:
          "Base pay, commission and day-rate ranges segmented by seniority, location and sector, sourced from live market data rather than outdated surveys.",
      },
      {
        icon: "public",
        title: "Geographic Talent Studies",
        description:
          "Where the talent actually lives, including relocation likelihood, remote readiness and talent density across metropolitan areas.",
      },
      {
        icon: "insights",
        title: "Client Pitch Packs",
        description:
          "Board-ready summaries that frame your market knowledge, ready to present in retained search pitches, quarterly reviews and proposal documents.",
      },
      {
        icon: "tune",
        title: "Diversity and Talent Pools",
        description:
          "Structured analysis of talent pool composition, helping you build inclusive longlists without compromising on calibre or relevance.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Scope the Question",
        description:
          "We define the sectors, competitors, geographies and seniority bands your map must cover, plus the decisions it will inform.",
      },
      {
        number: "02",
        title: "Research and Verify",
        description:
          "Researchers triangulate data across public sources, job adverts, professional networks and calls to verify findings before anything is written up.",
      },
      {
        number: "03",
        title: "Build the Map",
        description:
          "Findings are structured into visual org charts, benchmark tables and talent heatmaps formatted for presentations and ATS import.",
      },
      {
        number: "04",
        title: "Brief and Refresh",
        description:
          "We walk your team through the findings and schedule refreshes so the intelligence stays current as the market moves underneath it.",
      },
    ],
    outcomes: [
      {
        value: "12 days",
        label: "Average Map Delivery",
        description: "From scoping call to client-ready deliverable on standard sector engagements.",
      },
      {
        value: "94%",
        label: "Verified Data Accuracy",
        description: "Findings confirmed against at least two independent sources before every delivery.",
      },
      {
        value: "2x",
        label: "Retained Pitch Conversion",
        description: "Agencies using market maps report stronger conversion on retained and exclusive proposals.",
      },
    ],
    idealFor: [
      "Agencies pitching retained or exclusive search",
      "Consultancies entering a new sector or region",
      "Enterprise teams building compensation frameworks",
      "Founders planning their first hires in a market",
      "Business development teams targeting competitor clients",
    ],
    faqs: [
      {
        question: "What exactly do we receive?",
        answer:
          "A typical engagement delivers visual org charts, salary benchmark tables, talent heatmaps and an executive summary. Files are supplied in spreadsheet and presentation formats, with a CSV export tagged for direct import into your ATS.",
      },
      {
        question: "How is this different from a LinkedIn search?",
        answer:
          "A LinkedIn search shows profiles; a market map shows structure and meaning. We verify findings across multiple sources, interpret what they mean for your search and format everything for client presentation. The output is a decision tool, not a list of names.",
      },
      {
        question: "How is market mapping priced?",
        answer:
          "Engagements are priced as a fixed monthly retainer per dedicated researcher, with scope agreed up front. Most projects run for two to six weeks, and there is no lock-in beyond the initial sprint you commission.",
      },
      {
        question: "Can you map a niche technical market?",
        answer:
          "Yes, provided we can agree target companies and seniority bands during scoping. Niche maps rely more on screening calls and referral chains, so they typically need one to two additional weeks and a short validation call at the halfway point.",
      },
      {
        question: "Is the data GDPR-compliant?",
        answer:
          "All personal data in maps is limited to professional information and handled under GDPR-aligned processes. Deliverables can be anonymised where your client requires it, and data retention periods are agreed during scoping.",
      },
    ],
    seo: {
      title: "Offshore Market Mapping and Intelligence",
      description:
        "Structured talent maps, competitor org charts and salary benchmarks delivered by dedicated offshore researchers, usually within twelve working days.",
    },
  },
  {
    slug: "back-office-support",
    name: "Back Office & Admin",
    category: "Business Support Solutions",
    icon: "inventory_2",
    cardLabel: "BPO Operations",
    tagline: "The admin engine behind your billable hours",
    summary:
      "Dedicated offshore administrators who keep documentation, CRM data, scheduling and compliance workflows moving while your consultants keep billing.",
    heroDescription:
      "Every recruitment business runs on administration: contracts, compliance files, timesheets, invoicing and CRM upkeep. Our back office pods take that workload off your consultants' desks and run it to documented standards. You get cleaner data, faster turnaround and more billable hours from the team you already have.",
    badges: ["Process-mapped delivery", "CRM data hygiene", "Same-day turnaround"],
    overviewHeading: "Administration handled, documented and measured",
    overviewParagraphs: [
      "Back office pods are built around written process maps, so quality does not depend on who happens to be working that day. Each pod member is trained on your CRM, document templates and compliance checklists during a structured two-week onboarding. Standard requests are turned around the same working day, with exceptions escalated to a named contact on your team.",
      "Typical pod workloads include timesheet processing, contractor onboarding packs, client reporting, diary coordination and ATS data hygiene. Work is logged in a shared tracker with clear turnaround times and quality checks. Because the pod sits inside your systems, nothing moves between platforms and your data stays under your control.",
    ],
    overviewPoints: [
      "Same-day turnaround on standard requests within agreed cut-off times",
      "Documented process maps with named owners for every workflow",
      "ATS and CRM data hygiene audited against your quality rules",
      "Escalation paths agreed so exceptions reach your team quickly",
    ],
    capabilities: [
      {
        icon: "description",
        title: "Documentation and Contracts",
        description:
          "Contract generation, extension paperwork, compliance files and template management kept consistent, current and audit-ready.",
      },
      {
        icon: "dataset",
        title: "CRM and ATS Data Hygiene",
        description:
          "Record cleanup, duplicate merging, stage corrections and enrichment that keeps Bullhorn or Vincere reporting trustworthy.",
      },
      {
        icon: "calendar_month",
        title: "Diary and Scheduling Support",
        description:
          "Interview scheduling, meeting coordination and reminder management across UK and US time zones, fully in your calendars.",
      },
      {
        icon: "receipt_long",
        title: "Timesheets and Invoicing Support",
        description:
          "Weekly timesheet collection, approval chasing, invoice preparation and margin checks handed cleanly to your finance team.",
      },
      {
        icon: "verified_user",
        title: "Compliance Administration",
        description:
          "Right-to-work records, certification expiry tracking, insurance documents and audit preparation maintained to your standards.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Process Audit",
        description:
          "We document your current workflows, volumes, tools and turnaround expectations, then flag gaps, risks and quick wins.",
      },
      {
        number: "02",
        title: "Pod Build",
        description:
          "Administrators are selected for your systems, briefed on your templates and trained through live examples during onboarding.",
      },
      {
        number: "03",
        title: "Run and Check",
        description:
          "The pod takes over agreed workflows with quality checks, same-day service levels and a standing weekly accuracy review.",
      },
      {
        number: "04",
        title: "Optimise",
        description:
          "Monthly reviews identify automation and process fixes that reduce handling time and lift data quality across the board.",
      },
    ],
    outcomes: [
      {
        value: "60%",
        label: "Admin Time Reclaimed",
        description: "Typical reduction in consultant hours spent on documentation, scheduling and CRM admin.",
      },
      {
        value: "98.5%",
        label: "Data Accuracy",
        description: "Quality-check pass rate across CRM updates, compliance records and client documentation.",
      },
      {
        value: "4 hrs",
        label: "Average Request Turnaround",
        description: "Standard administrative requests completed within four working hours of submission.",
      },
    ],
    idealFor: [
      "Agencies where consultants handle their own admin",
      "Teams processing high contractor timesheet volumes",
      "Firms with messy CRM or ATS records",
      "Back offices stretched during onboarding peaks",
      "Businesses standardising compliance documentation",
    ],
    faqs: [
      {
        question: "What tasks can the pod take on first?",
        answer:
          "Most teams start with timesheets, compliance files and CRM hygiene because the volume and rules are straightforward to document. Once accuracy is proven, pods usually absorb scheduling, client reporting and full onboarding packs.",
      },
      {
        question: "How do you prevent mistakes?",
        answer:
          "Every workflow has a written process map, a checklist and a quality reviewer. The first two weeks include daily spot checks against your samples, moving to weekly audits once accuracy targets are consistently met.",
      },
      {
        question: "Is admin support priced per task or per person?",
        answer:
          "Pricing is a fixed monthly retainer per dedicated administrator, agreed before onboarding begins. There is no per-task billing, so your costs stay flat while volumes fluctuate within the agreed scope.",
      },
      {
        question: "Will the pod work in our systems?",
        answer:
          "Yes. Administrators receive scoped access to your CRM, document tools and shared drives, with permissions limited to their role. We can also supply our own licences for standard tools if that is simpler for your IT team.",
      },
      {
        question: "What notice do you need to change pod size?",
        answer:
          "Two to three weeks is standard for scaling up or down, covering recruitment, training or structured handover. Detailed process maps are kept current, so continuity never depends on one person's memory.",
      },
    ],
    seo: {
      title: "Offshore Back Office and Admin Support",
      description:
        "Dedicated offshore administrators for documentation, CRM hygiene, scheduling and compliance, working to documented processes and same-day SLAs.",
    },
  },
  {
    slug: "finance-accounting",
    name: "Finance & Accounting",
    category: "Business Support Solutions",
    icon: "account_balance_wallet",
    cardLabel: "Finance Support",
    tagline: "Clean books, on-time payroll, better margin visibility",
    summary:
      "Offshore finance specialists for book-keeping, payroll support, invoicing and reporting, keeping your agency compliant and your margins visible.",
    heroDescription:
      "Finance work scales with every contractor you place, and it rarely pauses. Our offshore finance specialists manage book-keeping, payroll preparation and invoice cycles to fixed month-end deadlines. You keep oversight and approvals while routine processing stops competing with client work for your team's attention.",
    badges: ["Month-end discipline", "Payroll-ready data", "Audit-friendly records"],
    overviewHeading: "Finance operations that scale with placements",
    overviewParagraphs: [
      "Recruitment finance is unforgiving: payroll runs weekly for contractors, invoices must match timesheets, and margins move with every rate change. A dedicated finance pod handles the repetitive processing so your in-house team can focus on decisions. Work follows a fixed calendar with month-end and payroll deadlines agreed well in advance.",
      "Pods operate inside Xero, QuickBooks, Sage or your existing finance stack, using the same chart of accounts, approval rules and document standards. Deliverables include reconciliations, aged debtor reports, commission calculations and management accounts packs. Records are prepared for accountant and audit review, with a clear audit trail behind every entry.",
    ],
    overviewPoints: [
      "Fixed month-end and payroll cut-offs met every cycle",
      "Reconciliations prepared with a complete audit trail",
      "Works within Xero, QuickBooks, Sage or your own stack",
      "Margin and aged debtor reporting that flags issues early",
    ],
    capabilities: [
      {
        icon: "receipt_long",
        title: "Book-keeping and Reconciliations",
        description:
          "Sales and purchase ledgers, bank and balance sheet reconciliations maintained to a fixed month-end close timetable.",
      },
      {
        icon: "payments",
        title: "Payroll and Contractor Payments",
        description:
          "Timesheet-to-payroll preparation, payment runs, PAYE documentation and contractor compliance checks readied for your approval.",
      },
      {
        icon: "calculate",
        title: "Invoicing and Credit Control",
        description:
          "Invoice generation from timesheets, statement runs and aged debtor reporting that support consistent, predictable cash collection.",
      },
      {
        icon: "query_stats",
        title: "Management Reporting",
        description:
          "Margin analysis, gross profit by client and management accounts packs prepared on an agreed reporting calendar each month.",
      },
      {
        icon: "verified_user",
        title: "Compliance and Audit Preparation",
        description:
          "VAT returns, statutory documents and year-end packs prepared for your accountant, with all supporting schedules organised and indexed.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Finance Review",
        description:
          "We assess your ledgers, payroll cycle, approval rules and deadlines, then define the scope and the reporting calendar.",
      },
      {
        number: "02",
        title: "Access and Controls",
        description:
          "Finance specialists are onboarded with scoped permissions, segregation of duties and documented approval thresholds for payments.",
      },
      {
        number: "03",
        title: "Parallel Run",
        description:
          "The pod runs alongside your team for one full cycle, cross-checking outputs against your records before taking ownership.",
      },
      {
        number: "04",
        title: "Close and Improve",
        description:
          "Month-end close runs to a fixed calendar, with quarterly reviews identifying process, margin and cash flow improvements.",
      },
    ],
    outcomes: [
      {
        value: "5 days",
        label: "Faster Month-End Close",
        description: "Typical acceleration of month-end close once the pod owns recurring finance processing.",
      },
      {
        value: "30%",
        label: "Finance Cost Reduction",
        description: "Typical saving on processing costs compared with equivalent in-house finance hires.",
      },
      {
        value: "100%",
        label: "Payroll Deadline Adherence",
        description: "Payroll data prepared and approved ahead of every scheduled payment run.",
      },
    ],
    idealFor: [
      "Recruitment agencies running weekly contractor payroll",
      "Businesses outgrowing part-time book-keeping support",
      "Firms preparing for audit or investment review",
      "Owners who need margin visibility by client and desk",
      "Companies standardising finance across multiple entities",
    ],
    faqs: [
      {
        question: "Do you replace our accountant?",
        answer:
          "No. The pod handles processing, reconciliations and preparation while your accountant or finance director keeps oversight, approvals and advisory decisions. All schedules are prepared in their preferred format, so year-end work gets easier rather than more complicated.",
      },
      {
        question: "Are permissions and payments properly controlled?",
        answer:
          "Your team approves all payment runs and bank movements. Pod access is scoped by role, sensitive actions require your authorisation, and every journal carries a traceable record of who prepared and reviewed it.",
      },
      {
        question: "How is finance support priced?",
        answer:
          "Pods are billed as a fixed monthly retainer per dedicated finance specialist, not per transaction or per invoice. Scope is agreed up front and reviewed quarterly as volumes and entity structures change.",
      },
      {
        question: "Can you support multiple currencies and entities?",
        answer:
          "Yes. We routinely handle multi-currency ledgers, intercompany allocations and consolidated reporting across UK, US and EU entities. Any complexity is mapped during the finance review before the pod goes live.",
      },
      {
        question: "What if we need more capacity at year-end?",
        answer:
          "Peaks are planned into the reporting calendar, and extra capacity can be added with two to three weeks' notice. Year-end support blocks are often agreed at the start of the engagement so deadlines never become bottlenecks.",
      },
    ],
    seo: {
      title: "Offshore Finance and Accounting Support",
      description:
        "Offshore finance specialists for book-keeping, payroll preparation, invoicing and management reporting, delivered to fixed month-end close deadlines.",
    },
  },
  {
    slug: "virtual-staffing",
    name: "Virtual Staffing & Extended Pods",
    category: "Business Support Solutions",
    icon: "hub",
    cardLabel: "View Pod Configurations",
    tagline: "Dedicated professionals, fully aligned to your business",
    summary:
      "Build a pod of dedicated offshore professionals across recruitment, operations or support functions, managed daily and matched to your tech stack and time zones.",
    heroDescription:
      "Virtual staffing gives you named professionals who work exclusively for your business, not a shared queue of anonymous tasks. Pods can combine recruiters, coordinators, administrators and specialists into one managed team. We handle recruitment, HR, payroll and performance management; you direct the work.",
    badges: ["Named dedicated staff", "Fully managed HR", "Two to three week onboarding"],
    overviewHeading: "Your team, without the employment overhead",
    overviewParagraphs: [
      "Hiring in London, New York or Sydney is expensive and slow. Virtual staffing delivers the same capability from our delivery centres in Manila, Cape Town, Krakow and Bangalore. Every professional is employed by Aakash AP, so contracts, payroll, benefits and retention sit with us. You gain a dedicated team member at a predictable monthly cost.",
      "Pods are shaped around your requirements: a single coordinator, a two-person research team or a full delivery unit with a team lead. Everyone is trained on your systems, from Bullhorn and Vincere to Slack, Xero and Microsoft Teams. Managers review performance monthly against agreed KPIs, and replacement cover is arranged within days if a fit is not right.",
    ],
    overviewPoints: [
      "Named staff who work exclusively on your business",
      "HR, payroll, benefits and performance management included",
      "Shift patterns aligned to UK, US and APAC working hours",
      "Backup cover and replacements without recruitment fees",
    ],
    capabilities: [
      {
        icon: "groups",
        title: "Single Specialists and Coordinators",
        description:
          "One dedicated professional for recruitment support, operations, customer service or executive assistance, matched to your priorities.",
      },
      {
        icon: "account_tree",
        title: "Multi-Person Delivery Pods",
        description:
          "Coordinated teams of three to twelve with a senior lead, clear reporting lines and accountability for agreed output and quality.",
      },
      {
        icon: "laptop_mac",
        title: "Tech Stack Alignment",
        description:
          "Training on your ATS, CRM, telephony and collaboration tools so staff contribute meaningfully from their first week.",
      },
      {
        icon: "schedule",
        title: "Time Zone Coverage",
        description:
          "Rotas calibrated to London, New York and Los Angeles hours, with flexible options for split-day or extended coverage.",
      },
      {
        icon: "badge",
        title: "Performance Management",
        description:
          "Monthly KPI reviews, one-to-ones and development plans run by our managers, with full visibility for your leadership team.",
      },
      {
        icon: "sync_alt",
        title: "Scalable Pod Changes",
        description:
          "Add or reduce seats with two to three weeks' notice as your workload changes through the year, with no penalties attached.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Requirement Workshop",
        description:
          "We define roles, skills, working hours, tools and budget, then recommend the pod structure that matches your workload.",
      },
      {
        number: "02",
        title: "Search and Selection",
        description:
          "Candidates are sourced, tested and screened, you interview a shortlist and conduct the final interview yourself before anyone starts.",
      },
      {
        number: "03",
        title: "Onboard and Embed",
        description:
          "A two to three week onboarding embeds staff into your systems, processes, meeting rhythms and communication standards.",
      },
      {
        number: "04",
        title: "Review and Grow",
        description:
          "Monthly performance reviews measure output against KPIs, with pod adjustments agreed as your needs and volumes evolve.",
      },
    ],
    outcomes: [
      {
        value: "70%",
        label: "Employment Cost Saving",
        description: "Typical reduction in employment cost versus equivalent onshore hires, including benefits and overhead.",
      },
      {
        value: "12 days",
        label: "Average Time to Fill",
        description: "From requirement workshop to your chosen professional starting work in the pod.",
      },
      {
        value: "94%",
        label: "First-Year Retention",
        description: "Share of pod professionals still with their assigned teams after twelve months.",
      },
    ],
    idealFor: [
      "Agencies wanting dedicated capacity without local hires",
      "Businesses needing APAC or US hours coverage",
      "Founders building lean, variable-cost teams",
      "Operations leaders covering parental or long-term leave",
      "Enterprises piloting an offshore delivery centre",
    ],
    faqs: [
      {
        question: "Who employs the staff?",
        answer:
          "Aakash AP employs every pod member, covering contracts, payroll, benefits, equipment and HR administration. You direct day-to-day work while we handle employment, welfare and performance management responsibilities.",
      },
      {
        question: "Can we interview candidates first?",
        answer:
          "Yes. You receive a shortlist of pre-screened candidates and conduct the final interview yourself. For larger pods, we also run working sessions so you can assess approach and communication before any offers are made.",
      },
      {
        question: "Is there a lock-in period?",
        answer:
          "Agreements run on a rolling monthly basis after the initial onboarding period. There are no exit penalties, and pod sizes can be adjusted with two to three weeks' notice as your requirements change.",
      },
      {
        question: "What happens if someone is not the right fit?",
        answer:
          "Contact your account manager and the replacement process starts immediately, typically with new candidates presented within a week. Replacements are included in the retainer, and there are no additional recruitment fees.",
      },
      {
        question: "How is virtual staffing priced?",
        answer:
          "A fixed monthly retainer per dedicated resource covers salary, employment costs, equipment and management. Rates vary by seniority and location, and full breakdowns are shared before you commit to anything.",
      },
    ],
    seo: {
      title: "Virtual Staffing and Extended Offshore Pods",
      description:
        "Dedicated virtual professionals employed and managed by Aakash AP, aligned to your tools and time zones, ready to work within two to three weeks.",
    },
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    category: "Business Support Solutions",
    icon: "campaign",
    cardLabel: "Growth Marketing",
    tagline: "Marketing that fills your pipeline, not just your feed",
    summary:
      "An offshore marketing team for content pipelines, employer branding, campaigns and analytics, built to generate candidate and client enquiries.",
    heroDescription:
      "Recruitment marketing lives in the gap between brand and pipeline. Our offshore strategists, writers and designers run content, paid campaigns and employer branding for your agency, measured against enquiry and application goals. Your consultants stay on the phone while the marketing engine quietly compounds.",
    badges: ["Pipeline-first reporting", "Employer brand content", "Platform-certified specialists"],
    overviewHeading: "Marketing measured in enquiries, not likes",
    overviewParagraphs: [
      "Most agency marketing stops at posting; ours starts with pipeline maths. We agree the enquiries, applications and placements each campaign should support, then build content and paid plans around those targets. Weekly reporting shows cost per enquiry and channel performance in plain numbers, not vanity dashboards.",
      "Pod members cover SEO, paid social, email, copywriting and design, working from your brand guidelines and tone of voice. Platforms typically include LinkedIn, Google, Meta and your CRM for lead routing. Longer retainers include quarterly strategy reviews and refreshed creative, so campaigns evolve with the market instead of running stale.",
    ],
    overviewPoints: [
      "Campaigns built around enquiry and application targets",
      "Content calendars aligned to your sector and hiring peaks",
      "Paid and organic channels managed with cost-per-lead reporting",
      "Creative produced to your brand guidelines and tone of voice",
    ],
    capabilities: [
      {
        icon: "campaign",
        title: "Paid Social and PPC",
        description:
          "LinkedIn, Meta and Google campaigns built to generate candidate applications and client enquiries within agreed budgets.",
      },
      {
        icon: "brush",
        title: "Content and Copywriting",
        description:
          "Blog posts, salary guides, job adverts and case studies written for search visibility, recruiter credibility and genuine usefulness.",
      },
      {
        icon: "insights",
        title: "SEO and Website Optimisation",
        description:
          "Technical audits, keyword strategy and on-page optimisation that grow organic candidate and client traffic month over month.",
      },
      {
        icon: "trending_up",
        title: "Email and Nurture Campaigns",
        description:
          "Segmented lists, automated sequences and newsletters that keep clients and candidates warm between interactions and placements.",
      },
      {
        icon: "badge",
        title: "Employer Branding",
        description:
          "Careers pages, video content and social presence that present your clients as employers of choice in competitive talent markets.",
      },
      {
        icon: "query_stats",
        title: "Analytics and Attribution",
        description:
          "Dashboards tying channels to enquiries, applications and placements, reviewed in monthly performance sessions with your team.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Audit and Positioning",
        description:
          "We review your channels, competitors and enquiry sources, then agree the positioning and targets the pod will work towards.",
      },
      {
        number: "02",
        title: "Strategy and Calendar",
        description:
          "A quarterly plan sets campaigns, content themes, budgets and success metrics, approved by your team before anything launches.",
      },
      {
        number: "03",
        title: "Build and Launch",
        description:
          "Creative, copy, landing pages and campaigns are produced and launched, with tracking configured across every channel.",
      },
      {
        number: "04",
        title: "Measure and Iterate",
        description:
          "Monthly reports show cost per enquiry and channel performance, and budgets shift towards what is demonstrably working.",
      },
    ],
    outcomes: [
      {
        value: "2.5x",
        label: "Enquiry Growth",
        description: "Average uplift in qualified enquiries within two quarters of a pod going live.",
      },
      {
        value: "35%",
        label: "Cost Per Lead Reduction",
        description: "Typical decrease in blended cost per enquiry as campaigns mature and targeting sharpens.",
      },
      {
        value: "90 days",
        label: "Time to Impact",
        description: "Typical window before content and campaign work produces consistent enquiry growth.",
      },
    ],
    idealFor: [
      "Agencies with no dedicated marketing resource",
      "Recruiters relying only on job board advertising",
      "Firms launching into new sectors or regions",
      "Businesses needing consistent content at scale",
      "Teams wanting reporting tied to pipeline, not vanity metrics",
    ],
    faqs: [
      {
        question: "Do you handle strategy as well as execution?",
        answer:
          "Both. Senior strategists set the quarterly plan and targets while the pod executes content, paid media and reporting. Strategy reviews happen monthly, with a deeper planning session at the start of each quarter.",
      },
      {
        question: "Which platforms do you manage?",
        answer:
          "Most engagements cover LinkedIn, Google and Meta, plus email, SEO and your CRM for lead routing. The channel mix is agreed against your audience and budget rather than spreading spend thinly across every platform.",
      },
      {
        question: "How is marketing support priced?",
        answer:
          "Engagements use a fixed monthly retainer per dedicated pod member, covering strategy, execution and reporting. Media spend is billed separately at cost, so there is no markup on your advertising budget.",
      },
      {
        question: "How do you prove return on investment?",
        answer:
          "Every engagement starts with agreed metrics, usually qualified enquiries and cost per enquiry, with placements tracked where attribution allows. Dashboards are reviewed monthly and budgets are reallocated towards channels that deliver.",
      },
      {
        question: "Can the pod work with our existing agency?",
        answer:
          "Yes. Many clients keep a brand or PR agency and use our pod for performance marketing and content production. We coordinate through a shared calendar so messaging and campaign timing stay aligned.",
      },
    ],
    seo: {
      title: "Offshore Digital Marketing for Recruiters",
      description:
        "Offshore marketing specialists for content, paid campaigns, employer branding and analytics, with reporting tied to enquiries and applications.",
    },
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
