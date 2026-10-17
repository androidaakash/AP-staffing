export type CaseStudyMetric = { value: string; label: string };
export type CaseStudyStep = { title: string; description: string };

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  region: string;
  services: string[];
  duration: string;
  summary: string;
  image: string;
  imageAlt: string;
  challenge: string[];
  approach: CaseStudyStep[];
  results: CaseStudyMetric[];
  quote: { text: string; author: string; role: string };
  seo: { title: string; description: string };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "uk-tech-agency-sourcing-pod",
    client: "UK Technology Recruitment Agency",
    industry: "Technology Recruitment",
    region: "London, United Kingdom",
    services: ["Candidate Sourcing & Screening", "Full Cycle Recruitment"],
    duration: "6 months",
    summary:
      "Within six months, a dedicated Manila sourcing pod lifted qualified submissions 2.4x and returned 38% of each consultant's week to client-facing work, without adding a single in-house hire.",
    image: "/images/hero-boardroom.jpg",
    imageAlt:
      "An executive offshore operations boardroom with international recruiters consulting over analytics dashboards on large displays, bathed in moody architectural lighting and natural morning sunlight through floor-to-ceiling windows.",
    challenge: [
      "The agency's eight consultants were spending the majority of each week trawling job boards, reworking CVs, and chasing candidate availability rather than managing client relationships. Leadership calculated that more than half of every working day was disappearing into sourcing administration instead of revenue-generating activity.",
      "Roles in the £55k to £90k bracket were the worst affected: shortlists regularly slipped past the 14-day mark promised to clients, and two key accounts moved to formal service reviews. Preferred supplier status on a framework three years in the making was at risk.",
      "Weekend coverage was a persistent gap. Applications arriving on Friday evening went unanswered until Monday, by which time the strongest engineers had accepted competing offers. The agency needed capacity that scaled with demand without inflating permanent headcount or office costs.",
    ],
    approach: [
      {
        title: "Discovery & Baselining",
        description:
          "We embedded with the leadership team for two weeks, mapping the workflow from requisition intake to offer and tagging every task as fee-earning or administrative. The exercise produced a prioritised delegation plan signed off by all eight consultants.",
      },
      {
        title: "Sourcing Pod Blueprint",
        description:
          "A four-person pod was configured in Manila around two sourcing specialists, one screening coordinator, and a delivery lead as single point of contact. Bullhorn access, LinkedIn Recruiter seats, and screening scorecards were mirrored into a secure offshore environment.",
      },
      {
        title: "Embedded Delivery Launch",
        description:
          "The pod went live inside the agency's existing Bullhorn instance, working the same pipelines and service levels as in-house consultants with extended Friday coverage to 22:00 GMT. Daily stand-ups and a shared shortlist tracker gave management full visibility from day one.",
      },
      {
        title: "Optimisation & Scale",
        description:
          "Monthly reviews tracked shortlist velocity, submission quality, and interviewer feedback, retuning the screening rubric each cycle. By month four the pod had absorbed two new client accounts without adding headcount or missing a single SLA milestone.",
      },
    ],
    results: [
      { value: "2.4x", label: "Qualified Submissions" },
      { value: "38%", label: "Billable Time Recovered" },
      { value: "11 days", label: "Time to Shortlist" },
      { value: "99.2%", label: "SLA Adherence" },
    ],
    quote: {
      text: "The sourcing pod changed how we operate. Our consultants spend their days in front of clients instead of job boards, and our two largest accounts have moved from service reviews to expansion conversations. I cannot imagine running the business without this team now.",
      author: "Alistair Crawford",
      role: "Managing Director",
    },
    seo: {
      title: "UK Tech Recruitment Agency Case Study | Aakash AP",
      description:
        "How a London technology recruitment agency used a dedicated Manila sourcing pod to lift qualified submissions 2.4x and return 38% of consultant time to clients.",
    },
  },
  {
    slug: "us-healthcare-credentialing-backlog",
    client: "US Healthcare Staffing Group",
    industry: "Healthcare Staffing",
    region: "New York, United States",
    services: ["Back Office & Admin", "Finance & Accounting"],
    duration: "4 months",
    summary:
      "A New York healthcare staffing group cleared a 400-file credentialing backlog in four months and cut credential turnaround from 23 days to 6, while recovering $180k in annual overtime costs.",
    image: "/images/hero-analytics.jpg",
    imageAlt:
      "An executive analytics briefing room with focused operations managers reviewing process documentation, compliance charts, and SLA performance dashboards on sleek laptops, framed in low-key corporate atmosphere.",
    challenge: [
      "The group's credentialing team of five was processing more than 400 files left over from a surge in travel nurse placements. Turnaround times stretched beyond 23 days, and account managers were fielding weekly escalations from hospital clients waiting on cleared staff.",
      "Licence expirations were slipping through manual spreadsheet tracking, creating audit exposure and forcing last-minute scrambling before compliance reviews. Overtime among the in-house team had run for eleven consecutive weeks, and burnout was driving attrition.",
      "Invoice reconciliation was equally fragile: hours worked and facility confirmations were matched by hand, delaying billing runs and pushing days sales outstanding well beyond the group's 45-day target. The back office had become the bottleneck on growth.",
    ],
    approach: [
      {
        title: "Rapid Diagnostic",
        description:
          "A two-week diagnostic mapped the credentialing lifecycle from application receipt to facility clearance, quantifying touchpoints, wait states, and rework. Every step was scored for automation potential and compliance sensitivity before any work moved offshore.",
      },
      {
        title: "Workflow Rebuild",
        description:
          "The credentialing and reconciliation processes were rebuilt as documented standard operating procedures with mandatory checkpoints and expiry alerts. A secure queue replaced the shared spreadsheet, giving every file a single owner and a visible ageing status.",
      },
      {
        title: "Shadow & Transfer",
        description:
          "Two Krakow-based administrators shadowed the New York team for three weeks, working live files under supervision before taking ownership of the queue. Knowledge checks and peer audits certified each administrator before full handover.",
      },
      {
        title: "Governance Rhythm",
        description:
          "A weekly operations review tracked turnaround times, backlog ageing, and reconciliation accuracy against agreed service levels. Monthly compliance reporting gave leadership an audit-ready view of licence status and expiring credentials.",
      },
    ],
    results: [
      { value: "400+", label: "Credentialing Files Cleared" },
      { value: "6 days", label: "Credential Turnaround" },
      { value: "99.8%", label: "Licence Tracking Accuracy" },
      { value: "$180k", label: "Overtime Costs Saved" },
    ],
    quote: {
      text: "Our credentialing backlog was a genuine compliance risk, and overtime was burning out a team I deeply valued. The offshore pod brought documented process, cleared fifteen months of arrears in four months, and gave us audit-ready reporting. Escalations from hospital clients have effectively stopped.",
      author: "Dana Whitfield",
      role: "Vice President of Operations",
    },
    seo: {
      title: "US Healthcare Credentialing Case Study | Aakash AP",
      description:
        "How a New York healthcare staffing group cleared a 400-file credentialing backlog and cut credential turnaround from 23 days to 6 with an offshore pod.",
    },
  },
  {
    slug: "property-leasing-operations-desk",
    client: "UK Property Management Company",
    industry: "Property Management",
    region: "Manchester, United Kingdom",
    services: ["Virtual Staffing & Extended Pods", "Back Office & Admin"],
    duration: "9 months",
    summary:
      "A Manchester property management company cut enquiry response times by 68% and reclaimed 30 hours of weekly property manager time with a dedicated virtual leasing desk on UK hours.",
    image: "/images/hero-workspace.jpg",
    imageAlt:
      "High-performing global virtual talent collaborating seamlessly in an upscale modern workspace with clean Scandinavian desks, dual monitor setups showing candidate pipelines, warm ambient architectural lighting and deep accent tones.",
    challenge: [
      "The lettings team was handling more than 900 enquiries a month across portals, email, and phone, and average first response time had stretched past 24 hours. Prospective tenants were booking viewings with competing agents before the team had even opened their enquiries.",
      "Property managers were absorbing referencing, tenancy paperwork, and deposit administration alongside inspections and maintenance coordination. Administrative work consumed roughly 60% of their week, and the tenancy file backlog was growing month on month.",
      "Enquiries arriving in the evenings and at weekends sat unanswered until Monday, exactly when serious tenants were most active online. The company knew it was losing instructions to faster competitors but had no capacity to extend coverage without a significant hiring round.",
    ],
    approach: [
      {
        title: "Operational Discovery",
        description:
          "We shadowed the lettings team for two weeks, timing every enquiry, viewing, and referencing task from first contact to signed tenancy. The resulting map showed exactly where response times broke down and which tasks could move to a dedicated desk.",
      },
      {
        title: "Leasing Desk Design",
        description:
          "A three-person virtual desk was configured to own first-response handling, tenant referencing, and tenancy administration end to end. Portal integrations, referencing platforms, and the property management CRM were connected to the desk's secure environment.",
      },
      {
        title: "Phased Handover",
        description:
          "Work moved across in three waves over six weeks, starting with out-of-hours enquiry response and progressing to referencing and file completion. Documented checklists and a live handover board kept quality visible while the team's confidence grew.",
      },
      {
        title: "Continuous Improvement",
        description:
          "Weekly performance huddles reviewed response times, viewing conversion, and referencing turnaround against targets. The desk also took on maintenance coordination in month five, freeing a further eight hours a week of property manager time.",
      },
    ],
    results: [
      { value: "68%", label: "Faster Enquiry Response" },
      { value: "30 hrs", label: "Weekly Admin Time Saved" },
      { value: "+41%", label: "Viewing Conversion Rate" },
      { value: "98.6%", label: "Enquiry SLA Attainment" },
    ],
    quote: {
      text: "Tenants now hear from us within minutes, even on Sunday evenings, and our property managers are back out on site where they actually add value. The leasing desk has become the engine room of our lettings operation, and instruction volumes have grown without a single additional local hire.",
      author: "Emma Sinclair",
      role: "Lettings Director",
    },
    seo: {
      title: "Property Lettings Operations Case Study | Aakash AP",
      description:
        "How a Manchester property management company cut enquiry response times by 68% and reclaimed 30 hours of weekly property manager time with a virtual desk.",
    },
  },
  {
    slug: "professional-services-admin-pod",
    client: "European Professional Services Firm",
    industry: "Professional Services",
    region: "Krakow & London",
    services: ["Back Office & Admin", "Finance & Accounting", "Virtual Staffing & Extended Pods"],
    duration: "8 months",
    summary:
      "A European professional services firm consolidated cross-border administration into a dedicated Krakow pod, cutting month-end close from 9 days to 4 and saving £120k in annual support costs.",
    image: "/images/about-team.jpg",
    imageAlt:
      "Senior recruitment directors collaborating around a glass boardroom table reviewing candidate portfolios and operational benchmarks, captured in an upscale corporate environment with warm natural tones and architectural plants.",
    challenge: [
      "Partners and senior consultants were formatting proposals, chasing timesheets, and assembling engagement letters late into the evening. Roughly a third of every fee earner's week was going to administration, directly limiting the firm's billable capacity across both offices.",
      "Month-end close was taking nine days because timesheets, expenses, and billing data were reconciled manually between London and Krakow. Invoices frequently went out late, and the firm's days sales outstanding had drifted well above its 40-day target.",
      "The two offices worked to different document standards with no single source of truth, so version control problems were frequent and client-ready packs were rebuilt from scratch. Leadership wanted a unified operating rhythm without importing more headcount into London's cost base.",
    ],
    approach: [
      {
        title: "Discovery & Scoping",
        description:
          "We interviewed partners, finance, and operations across both offices to catalogue every administrative task touching the client lifecycle. Each activity was assessed for frequency, risk, and suitability for offshore delivery before the pod was designed.",
      },
      {
        title: "Pod & Process Design",
        description:
          "A five-person pod was configured in Krakow covering document production, timesheet and billing support, and engagement administration. Standardised templates and a documented escalation matrix replaced the informal workflows that had grown up between offices.",
      },
      {
        title: "Embedded Transition",
        description:
          "The pod was embedded into the firm's document management and practice management systems during an eight-week phased transition. Partners retained approval authority at every step, with quality sampling applied to all client-facing deliverables.",
      },
      {
        title: "Optimisation & Governance",
        description:
          "A monthly steering review tracked month-end close, billing accuracy, and fee earner time reclaimed against agreed targets. The pod steadily absorbed additional workflows, including CRM hygiene and client reporting, as confidence in the model grew.",
      },
    ],
    results: [
      { value: "4 days", label: "Month-End Close" },
      { value: "£120k", label: "Annual Cost Saving" },
      { value: "+22%", label: "Fee Earner Capacity" },
      { value: "99.4%", label: "Billing Accuracy" },
    ],
    quote: {
      text: "We had two offices, three document standards, and no single view of our billing pipeline. The Krakow pod gave us one operating rhythm, and our partners now spend their time with clients rather than chasing paperwork. The saving paid for the programme several times over.",
      author: "Robert Ellison",
      role: "Managing Partner",
    },
    seo: {
      title: "Professional Services Admin Case Study | Aakash AP",
      description:
        "How a European professional services firm moved cross-border admin into a Krakow pod, cutting month-end close to 4 days and saving £120k a year.",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((caseStudy) => caseStudy.slug === slug);
}
