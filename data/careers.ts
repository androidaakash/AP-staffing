export type JobRole = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  shift: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export const CAREERS_INTRO = {
  label: "CAREERS AT AAKASH AP",
  heading: "Build a Career Without Borders.",
  description:
    "Join a high-governance offshore delivery network spanning Manila, Cape Town, Krakow, and Bangalore. Work directly with UK and US recruitment agencies and enterprises on long-term engagements.",
  paragraphs: [
    "Every Aakash AP professional embeds directly with a UK or US client, working inside real delivery teams with clear ownership from day one. You will be trained on our governance standards, data-protection protocols, and the exact systems your client uses, from Bullhorn and Vincere to JobAdder and bespoke CRMs.",
    "Progression is transparent and merit-based, with structured reviews every quarter and funded certifications in recruitment, finance, and information security. Many of our team leads and pod managers joined as recruiters or coordinators and were promoted within eighteen months.",
  ],
} as const;

export const CULTURE_PILLARS = [
  {
    icon: "verified_user",
    title: "Governance First",
    description:
      "Every engagement runs on documented process, measured service levels, and audited data protection. You will always know exactly what excellent looks like in your role.",
  },
  {
    icon: "school",
    title: "Continuous Learning",
    description:
      "Structured onboarding, funded certifications, and weekly knowledge sessions keep your skills current. We invest in your development because our clients depend on your expertise.",
  },
  {
    icon: "trending_up",
    title: "Real Progression",
    description:
      "Merit-based promotions are reviewed every quarter with clear criteria published from day one. Most of our team leads were promoted from within the delivery teams they now manage.",
  },
  {
    icon: "favorite",
    title: "People Who Care",
    description:
      "Wellbeing, workload balance, and genuine support are built into how we run every pod. Managers are measured on how their teams feel as much as what they deliver.",
  },
];

export const BENEFITS = [
  {
    icon: "schedule",
    title: "Time-Zone Aligned Shifts",
    description:
      "Work predictable hours aligned to your client's market, with no rotating night shifts unless you choose them.",
  },
  {
    icon: "public",
    title: "Global Career Pathways",
    description:
      "Build experience across UK and US client portfolios from any of our four offshore centres, with internal mobility between locations.",
  },
  {
    icon: "payments",
    title: "Competitive Local Pay",
    description:
      "Benchmarked salaries and performance bonuses paid on time, in your local currency, every month.",
  },
  {
    icon: "health_and_safety",
    title: "Health & Wellbeing Cover",
    description:
      "Private health insurance, wellness allowances, and confidential counselling are standard for every full-time team member.",
  },
  {
    icon: "workspace_premium",
    title: "Certification Sponsorship",
    description:
      "We fund role-relevant qualifications in recruitment, accounting, and information security, plus the study time to complete them.",
  },
  {
    icon: "school",
    title: "Structured Training Academy",
    description:
      "A twelve-week onboarding academy covers client systems, compliance, and delivery craft before you take ownership of live work.",
  },
];

export const HIRING_STEPS = [
  {
    number: "01",
    title: "Application",
    description:
      "Submit your CV through our careers portal and a member of the talent team will confirm receipt within two business days. Shortlisted candidates are invited to a structured screening call.",
  },
  {
    number: "02",
    title: "Screening & Assessment",
    description:
      "A competency-based interview explores your experience, communication skills, and role-specific knowledge. Depending on the position, you may complete a short practical assessment or systems test.",
  },
  {
    number: "03",
    title: "Client-Aligned Interview",
    description:
      "Finalists meet the delivery leads, and where appropriate the client team, who will own the engagement. This conversation focuses on working style, shift alignment, and mutual expectations.",
  },
  {
    number: "04",
    title: "Offer & Onboarding",
    description:
      "Successful candidates receive a written offer with clear compensation, shift pattern, and start date. Onboarding then begins with background vetting, systems training, and a structured ninety-day plan.",
  },
];

export const ROLES: JobRole[] = [
  {
    id: "remote-recruiter-candidate-sourcing",
    title: "Remote Recruiter (Candidate Sourcing)",
    department: "Recruitment Delivery",
    location: "Manila, Philippines",
    type: "Full-time",
    shift: "UK hours (GMT)",
    summary:
      "Own the top of the recruitment funnel for UK agency clients, building talent pipelines and delivering interview-ready shortlists. You will work inside client ATS environments with clear daily targets and quality benchmarks.",
    responsibilities: [
      "Source active and passive candidates through LinkedIn Recruiter, job boards, and Boolean search across specialist markets.",
      "Screen CVs and conduct structured telephone or video pre-screens against client-approved scorecards.",
      "Maintain accurate candidate records, pipeline stages, and activity notes in client ATS platforms such as Bullhorn or JobAdder.",
      "Coordinate interview scheduling between candidates and client consultants across UK time zones.",
      "Report weekly on pipeline health, submission quality, and market feedback to your delivery lead.",
    ],
    requirements: [
      "2+ years of recruitment sourcing or talent acquisition experience, ideally within an agency or RPO environment.",
      "Excellent written and spoken English at C1 level or above, with confident stakeholder communication.",
      "Hands-on experience with at least one major ATS (Bullhorn, Vincere, JobAdder) and LinkedIn Recruiter.",
      "Strong Boolean search skills and a working knowledge of candidate assessment techniques.",
      "Bachelor's degree or equivalent practical experience, with willingness to work UK business hours.",
    ],
  },
  {
    id: "senior-recruiter-full-cycle-rpo",
    title: "Senior Recruiter (Full Cycle RPO)",
    department: "Recruitment Delivery",
    location: "Cape Town, South Africa",
    type: "Full-time",
    shift: "US hours (EST)",
    summary:
      "Manage end-to-end requisition delivery for US staffing clients, from intake briefing through offer management. You will act as a true recruitment partner rather than a CV processor.",
    responsibilities: [
      "Run intake briefings with client hiring managers and translate requirements into structured sourcing plans.",
      "Deliver full-cycle recruitment including sourcing, screening, interview coordination, feedback management, and offer negotiation support.",
      "Coach junior recruiters on candidate engagement, objection handling, and assessment quality.",
      "Maintain SLA compliance on time-to-shortlist and submission-to-interview ratios across all assigned requisitions.",
      "Produce weekly delivery reports and contribute to quarterly account reviews with client stakeholders.",
    ],
    requirements: [
      "4+ years of full-cycle recruitment experience, with at least two years supporting US markets.",
      "C2-level English with the presence and credibility to engage senior hiring managers directly.",
      "Advanced ATS proficiency (Bullhorn, Vincere, or similar) and familiarity with US hiring compliance practices.",
      "Demonstrated track record of filling specialist roles within competitive markets and tight deadlines.",
      "Bachelor's degree preferred; recruitment certifications such as AIRS or REC are an advantage.",
    ],
  },
  {
    id: "back-office-coordinator",
    title: "Back Office Coordinator",
    department: "Business Support",
    location: "Krakow, Poland",
    type: "Full-time",
    shift: "UK hours (GMT)",
    summary:
      "Keep UK client operations running smoothly by owning documentation, data hygiene, and workflow coordination across delivery teams. You will be the reliable backbone behind every placement and engagement.",
    responsibilities: [
      "Process placement paperwork, contracts, and compliance documents with meticulous attention to detail.",
      "Maintain CRM and ATS data hygiene, running weekly quality audits and correcting records.",
      "Coordinate calendars, meetings, and travel arrangements for client-facing delivery leads.",
      "Track and escalate workflow bottlenecks, ensuring tasks progress against agreed service levels.",
      "Prepare recurring reports, presentations, and client-facing correspondence to brand standards.",
    ],
    requirements: [
      "2+ years of administrative, coordination, or back-office experience, ideally supporting UK-based teams.",
      "English at C1 level or above, with excellent written accuracy and a professional telephone manner.",
      "High proficiency in Microsoft 365, especially Excel, Outlook, and document formatting in Word and PowerPoint.",
      "Experience with CRM, ATS, or ticketing systems; exposure to recruitment or professional services is a plus.",
      "Exceptional organisation and discretion when handling confidential client and candidate information.",
    ],
  },
  {
    id: "finance-payroll-associate",
    title: "Finance & Payroll Associate",
    department: "Finance & Accounting",
    location: "Bangalore, India",
    type: "Full-time",
    shift: "US hours (EST/PST rotation)",
    summary:
      "Support US and UK client payroll runs, invoicing, and reconciliation from our Bangalore finance hub. You will work to strict month-end deadlines with a zero-error mindset.",
    responsibilities: [
      "Process contractor and employee payroll across multiple jurisdictions, verifying timesheets and rate agreements.",
      "Prepare client invoices, reconcile payments, and investigate discrepancies to resolution.",
      "Maintain the general ledger, post journals, and support monthly close for client entities.",
      "Run margin and revenue reports, escalating anomalies to the finance manager before deadlines.",
      "Support audit requests by maintaining clean documentation and audit-ready working papers.",
    ],
    requirements: [
      "2+ years of payroll, accounts payable, or bookkeeping experience, ideally in staffing or professional services.",
      "Working knowledge of US and UK payroll practices; familiarity with PAYE and US state tax basics is an advantage.",
      "Proficiency in accounting software (QuickBooks, Xero, or similar) and advanced Excel skills.",
      "English at C1 level or above with clear written communication for client queries.",
      "Bachelor's degree in accounting, finance, or commerce; part-qualified ACCA, CIMA, or CPA is a plus.",
    ],
  },
  {
    id: "market-intelligence-analyst",
    title: "Market Intelligence Analyst",
    department: "Talent Intelligence",
    location: "Manila, Philippines",
    type: "Full-time",
    shift: "UK hours (GMT)",
    summary:
      "Produce the market maps, salary benchmarks, and competitor intelligence that power our clients' hiring strategies. Your research will directly shape where and how clients invest in talent.",
    responsibilities: [
      "Build market maps of target companies, talent pools, and competitor structures across client industries.",
      "Compile salary benchmarking reports using job board data, survey sources, and primary research calls.",
      "Monitor hiring signals, funding events, and industry news to produce weekly intelligence briefings.",
      "Maintain reusable research templates and dashboards that keep deliverables consistent and fast.",
      "Present findings to client stakeholders and internal delivery leads in clear, visual formats.",
    ],
    requirements: [
      "2+ years in research, market intelligence, or talent analytics, ideally within recruitment or consulting.",
      "Exceptional English at C2 level, including the ability to write crisp executive summaries.",
      "Advanced Excel or Google Sheets skills; experience with Power BI, Tableau, or similar is an advantage.",
      "Strong curiosity and research discipline, with the ability to triangulate data from multiple sources.",
      "Bachelor's degree in business, economics, or a related field; LinkedIn and data tooling experience preferred.",
    ],
  },
  {
    id: "digital-marketing-executive",
    title: "Digital Marketing Executive",
    department: "Growth Marketing",
    location: "Cape Town, South Africa",
    type: "Full-time",
    shift: "Flexible (UK/US overlap)",
    summary:
      "Drive employer branding, content, and performance marketing for Aakash AP and our client recruitment brands. You will own campaigns end to end, from concept to reporting.",
    responsibilities: [
      "Plan and execute social media campaigns across LinkedIn, Instagram, and emerging channels.",
      "Write and optimise content including blogs, landing pages, email sequences, and ad copy.",
      "Manage paid campaign budgets, run A/B tests, and report on cost per lead and conversion rates.",
      "Support employer branding projects for client recruitment teams, including careers page content.",
      "Maintain the marketing calendar and coordinate deliverables with design and delivery stakeholders.",
    ],
    requirements: [
      "2+ years of digital marketing experience, ideally in recruitment, B2B services, or agency settings.",
      "C2-level English with strong copywriting instincts and an eye for design quality.",
      "Hands-on experience with Google Ads, LinkedIn Campaign Manager, and marketing analytics tools.",
      "Working knowledge of CMS platforms (WordPress or Webflow) and email marketing software.",
      "Bachelor's degree in marketing, communications, or a related field; a portfolio of published work is expected.",
    ],
  },
];

export const CAREERS_EMAIL = "careers@aakashap.com";
