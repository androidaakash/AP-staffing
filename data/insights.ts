export type ArticleSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export type Article = {
  slug: string;
  category: string;
  title: string;
  description: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  sections: ArticleSection[];
};

export const INSIGHTS = {
  label: "THOUGHT LEADERSHIP",
  heading: "Latest Blogs & Industry Analysis.",
  description:
    "Strategic insights on staffing economics, offshore delivery metrics, and recruiting best practices.",
  linkLabel: "Explore All Articles",
} as const;

export const ARTICLES: Article[] = [
  {
    slug: "offshore-boolean-sourcing",
    category: "Sourcing Strategy",
    title: "How Modern Search Firms Outpace Talent Shortages with Offshore Boolean Sourcing",
    description:
      "Unlocking passive talent on GitHub, LinkedIn Recruiter, and industry forums without overburdening principal consultants.",
    author: "James Thornton",
    authorRole: "Director of Sourcing Strategy",
    date: "12 Aug 2025",
    readTime: "5 min read",
    image: "/images/blog-1.jpg",
    imageAlt:
      "An analytical desk with graphs depicting candidate response curves and market talent maps next to an espresso cup and a modern wireless keyboard in soft daylight.",
    featured: true,
    sections: [
      {
        heading: "Talent Shortages Are Capacity Problems",
        paragraphs: [
          "Every search firm recognises the pattern. Briefs arrive faster than consultants can work them, shortlists slip past agreed dates, and hiring managers begin testing rival suppliers. The market looks scarce, yet scarcity is rarely the root cause. In most agencies, the real constraint is capacity, not candidate supply.",
          "Principal consultants routinely spend close to half their week on research, list building, and inbox coordination. That work matters, but it consumes the hours that should be reserved for client counsel and closing. Offshore Boolean sourcing exists to return those hours by isolating the research-heavy front end of search and delivering it at a fraction of the onshore cost base.",
        ],
      },
      {
        heading: "Boolean Discipline Still Finds Passive Talent",
        paragraphs: [
          "Automation tools have changed the top of the sourcing funnel, but structured Boolean search remains the most dependable route to candidates who never apply. LinkedIn Recruiter, GitHub, Stack Overflow, and specialist forums all respond to carefully layered strings, and offshore sourcers bring the one resource onshore teams lack: uninterrupted working time.",
          "The advantage is volume with precision. A UK string might combine commutable locations with certification terms; a US string might layer metro radius logic with licence keywords. Run consistently across a sector, Boolean sourcing surfaces candidates that job boards, paid advertising, and inbound applications never reach.",
        ],
        bullets: [
          "Title expansion across seniority and synonym variants",
          "Location logic tuned to UK postcodes and US metros",
          "Certification and tooling keyword layering",
          "Passive candidate lists refreshed on a weekly cycle",
        ],
      },
      {
        heading: "Designing the Offshore Sourcing Pod",
        paragraphs: [
          "A sourcing pod is not a generic outsourcing arrangement. It is a small, embedded research unit that works inside your ATS and observes your naming conventions, tagging rules, and pipeline stages. Pods typically run on a 70–30 or 60–40 split between onshore ownership and offshore delivery, depending on how visible you want the model to be.",
          "Composition matters more than size. A typical pod pairs two Boolean sourcers with a senior researcher who owns market mapping and quality control. All three report to a delivery manager who joins your morning stand-up and holds accountability for weekly output.",
        ],
        bullets: [
          "Two sourcers plus one senior market mapper",
          "Delivery manager aligned to your stand-ups",
          "Direct work inside Bullhorn, Vincere, or JobAdder",
          "Weekly output packs with pipeline summaries",
        ],
      },
      {
        heading: "Where Offshore Sourcing Delivers Fastest",
        paragraphs: [
          "The fastest returns appear in verticals with deep passive pools and complex terminology. Technology, engineering, healthcare, and finance all reward systematic mapping because candidate identity is verifiable through repositories, certifications, and professional registrations.",
          "Market mapping compounds the benefit. Once an offshore team has documented a competitor's engineering structure or a hospital trust's staffing model, that intelligence stays in your database. Every subsequent brief in the same sector starts from an enriched position rather than a blank search.",
        ],
        bullets: [
          "Competitor org charts refreshed each quarter",
          "Salary benchmarks drawn from live candidate conversations",
          "Talent heat maps by city and function",
        ],
      },
      {
        heading: "Calibrating Sourcing to UK and US Time Zones",
        paragraphs: [
          "Offshore models succeed or fail on time-zone discipline. Candidates in London expect calls during business hours, and candidates in New York or California expect the same. A pod aligned to your working hours answers quickly, follows up within hours rather than days, and rarely hands a warm prospect to voicemail.",
          "In practice that means two coverage windows: a UK shift covering 08:00–17:00 GMT and a US shift covering 08:00–17:00 EST or PST. Agencies serving both corridors can run overlapping rotas so one team covers early London calls and late New York calls without splitting ownership.",
        ],
        bullets: [
          "Shift rotas matched to GMT and EST/PST",
          "Candidate response inside one business hour",
          "Overlapping coverage for dual-market agencies",
          "Escalation path to your onshore consultant",
        ],
      },
      {
        heading: "Proving Output with SLA Scorecards",
        paragraphs: [
          "Sourcing spend should be defended with evidence rather than sentiment. A working SLA tracks candidates sourced, qualified profiles delivered, interview-to-placement conversion, and candidate response rates, reviewed fortnightly against baselines agreed at kick-off.",
          "Scorecards keep expectations honest on both sides. When a metric slips, the review identifies whether the cause sits in the brief, the search string, or the market itself. That distinction is impossible to make without structured reporting, and it is the reason a sourcing engagement either earns renewal or quietly lapses.",
        ],
        bullets: [
          "Profiles delivered per week against target",
          "Interview conversion by sector and desk",
          "Time from brief to first shortlist",
          "Data hygiene checks on every record",
        ],
      },
      {
        heading: "A Practical First Step",
        paragraphs: [
          "Start with one clearly bounded requisition: a single hard-to-fill role in your busiest vertical. Give the pod full brief depth, ATS access, and one working week in the market. Review the first shortlist against the same quality bar you apply to onshore work.",
          "If the profiles stand up, scale deliberately. Most agencies extend from one role to a full desk within a quarter, and from a sourcing pod to full-cycle delivery support within two. The first shortlist will tell you more than any proposal document.",
        ],
      },
    ],
  },
  {
    slug: "real-unit-economics-offshore-rpo",
    category: "Scale & Operations",
    title: "The Real Unit Economics of Offshore RPO: A Guide for Agency Managing Directors",
    description:
      "Examining true cost comparisons, billable hours expansion, and ROI timelines when transitioning to specialised offshore pods.",
    author: "Elena Vasquez",
    authorRole: "Head of Delivery",
    date: "02 Sep 2025",
    readTime: "7 min read",
    image: "/images/blog-2.jpg",
    imageAlt:
      "Close up of financial and operational management report spreadsheets showing overhead reductions and growth margins under warm modern desk lighting.",
    sections: [
      {
        heading: "The Margin Story Behind Every Offshore Desk",
        paragraphs: [
          "Managing directors rarely reject offshore RPO on principle. They reject it because the numbers presented are too vague to underwrite. Percentage savings claims and testimonials do not survive contact with a board spreadsheet. Unit economics do.",
          "This guide sets out how to model an offshore desk honestly: what it costs, what it produces, and when it pays for itself. The framework below is the same one we use when scoping engagements with UK and US agencies.",
        ],
      },
      {
        heading: "The Real Cost of an Onshore Consultant",
        paragraphs: [
          "A mid-level onshore consultant in London or New York carries far more cost than the headline salary. Employers absorb pension contributions, national insurance or payroll taxes, benefits, equipment, desk space, recruitment fees, and the risk of early attrition.",
          "Once those layers are totalled, the fully loaded cost of a single onshore hire can reach 1.4 to 1.6 times base salary. That figure is the true comparison point for any offshore proposal, and it is the number most internal business cases quietly leave out.",
        ],
        bullets: [
          "Base salary plus employer taxes and pension",
          "Benefits, equipment, and desk overhead",
          "Agency fees amortised across expected tenure",
          "Attrition risk and the cost of rehiring",
        ],
      },
      {
        heading: "What a Fixed Monthly Retainer Covers",
        paragraphs: [
          "Our engagements are priced as a fixed monthly retainer per dedicated resource. The retainer includes salary, workstation infrastructure, security tooling, benefits, software licences, and dedicated delivery management. There are no placement fees, no setup penalties, and no charges that appear after signature.",
          "Fixed pricing changes the conversation. You can forecast cost per desk on a twelve-month horizon without modelling volatile commission structures. Your finance team gets a predictable line item, and the delivery team gets a defined scope.",
        ],
        bullets: [
          "One resource, one predictable monthly cost",
          "Infrastructure and licences included",
          "No placement or conversion fees",
          "Month-to-month terms without long lock-ins",
        ],
      },
      {
        heading: "Modelling Billable Hours Expansion",
        paragraphs: [
          "The economics only work if capacity converts into revenue. A sourcing pod that delivers fifteen qualified shortlists a month creates billable potential that did not exist before; the question is whether the agency has requisitions to absorb it.",
          "Serious business cases therefore start with pipeline, not headcount. If your consultants currently turn away briefs, the expansion case is straightforward. If they do not, the offshore desk should begin with back-office or data work where the return is easier to isolate.",
        ],
        bullets: [
          "Requisitions refused last quarter as your baseline",
          "Placements per consultant before and after deployment",
          "Average fee value by desk and sector",
          "Break-even placements per month",
        ],
      },
      {
        heading: "ROI Timelines and Payback Periods",
        paragraphs: [
          "In our experience, an offshore research or sourcing desk reaches payback within one to two billing cycles when the pipeline exists. Administrative desks pay back more slowly but with less variance, typically over one to two quarters.",
          "Payback is not the same as profit. The stronger question is contribution per desk after twelve months, including ramp time, training, and any restructuring of onshore roles. Most agencies that model properly find offshore leverage improves gross margin by four to nine points.",
        ],
      },
      {
        heading: "Where Offshore Budgets Quietly Leak",
        paragraphs: [
          "Weak offshore engagements fail in predictable places. Scope creep turns a sourcing pod into an administrative catch-all, unclear KPIs make performance impossible to judge, and poor integration leaves offshore staff waiting on system access rather than working briefs.",
          "Governance prevents these leaks. Fortnightly SLA scorecards, named delivery managers, and written scope definitions keep the engagement tight. When a desk drifts, the scorecard shows it within weeks rather than quarters.",
        ],
        bullets: [
          "Written scope with named deliverables",
          "Fortnightly SLA scorecard reviews",
          "Defined escalation and change process",
          "Quarterly commercial review with leadership",
        ],
      },
      {
        heading: "What to Build Into the Business Case",
        paragraphs: [
          "A defensible proposal contains three numbers: fully loaded onshore cost, fixed offshore retainer, and expected capacity output. Add one quarter of ramp time and a conservative conversion assumption, and the model will survive scrutiny from your board.",
          "We will build that model with you before any commitment. Bring your current desk costs, fee averages, and unfilled requisitions; we will bring benchmarks from comparable UK and US engagements.",
        ],
        bullets: [
          "Fully loaded onshore cost per desk",
          "Offshore retainer and ramp assumptions",
          "Conservative output and conversion rates",
          "Twelve-month contribution forecast",
        ],
      },
    ],
  },
  {
    slug: "gdpr-offshore-compliance",
    category: "BPO Advisory",
    title: "GDPR & Offshore Compliance: How We Safeguard Client Confidentiality",
    description:
      "A transparent breakdown of our ISO 27001 data governance, virtual desktop infrastructure, and background vetting protocols.",
    author: "Tariq Al-Mansoor",
    authorRole: "Information Security Lead",
    date: "21 Sep 2025",
    readTime: "4 min read",
    image: "/images/blog-3.jpg",
    imageAlt:
      "A clean corporate compliance checklist with security padlock icon displayed on high resolution laptop display with minimal elegant office background.",
    sections: [
      {
        heading: "Confidentiality Is a Board-Level Commitment",
        paragraphs: [
          "Recruitment is a business built on trust. Agencies hold candidate identities, client hiring plans, salary bands, and commercially sensitive workforce data. Handing any part of that to an offshore partner is a governance decision, not a procurement detail.",
          "Data protection is therefore treated at Dream Gadge as a board-level commitment rather than an IT policy. This article explains the controls that sit behind that commitment, from contractual safeguards to physical security and day-to-day operational discipline.",
        ],
      },
      {
        heading: "GDPR Obligations When Data Leaves the UK",
        paragraphs: [
          "The UK GDPR does not prohibit offshore processing. It requires lawful transfer mechanisms, documented processing agreements, and demonstrable security controls. Article 28 processor agreements, standard contractual clauses, and transfer risk assessments form the legal backbone of every engagement.",
          "In practice, we sign a data processing agreement before any candidate record moves. The agreement defines purpose limitation, retention periods, sub-processor disclosure, and breach notification windows measured in hours, not days.",
        ],
        bullets: [
          "Article 28 data processing agreements as standard",
          "Standard contractual clauses for international transfer",
          "Defined retention and deletion schedules",
          "Breach notification within contractual windows",
        ],
      },
      {
        heading: "ISO 27001 and the Security Operating Model",
        paragraphs: [
          "Our information security management system is aligned to ISO 27001. That alignment is not a certificate on a wall; it is a working model of risk assessment, control ownership, internal audit, and continuous improvement that governs how every desk operates.",
          "Controls are reviewed on a scheduled cycle and tested through internal audits and independent assessments. Findings feed a corrective action log with named owners and deadlines, and progress is reported to leadership each month.",
        ],
        bullets: [
          "Documented risk register with control owners",
          "Scheduled internal and external audits",
          "Corrective action tracking to closure",
          "Monthly security reporting to leadership",
        ],
      },
      {
        heading: "Virtual Desktops and Zero Local Storage",
        paragraphs: [
          "Our teams work exclusively through encrypted virtual desktop infrastructure. The VDI environment holds no local data, blocks USB storage by policy, and routes all sessions through monitored access gateways. If a workstation is lost or stolen, no client data leaves with it.",
          "Access follows least privilege. Sourcers see only the records their requisitions require, while senior administrators hold elevated permissions with additional logging. Every session is recorded and attributable to a named individual.",
        ],
        bullets: [
          "Encrypted virtual desktop infrastructure only",
          "USB storage lockout and clipboard controls",
          "Least-privilege access with session logging",
          "Zero client data stored on local devices",
        ],
      },
      {
        heading: "Vetting, Access Control, and SOC2 Alignment",
        paragraphs: [
          "Every offshore professional passes identity verification, criminal record checks, and reference validation before deployment. Access to client systems is provisioned on day one and revoked within hours of any role change or exit.",
          "Where clients require it, we align operating procedures with SOC2 principles around security, availability, and confidentiality. Evidence packs covering access reviews, change logs, and incident records are available under NDA during due diligence.",
        ],
        bullets: [
          "Identity and criminal record verification",
          "Reference checks completed before deployment",
          "Provisioning and revocation audit trail",
          "SOC2-aligned evidence packs on request",
        ],
      },
      {
        heading: "Meeting UK and US Regulatory Expectations",
        paragraphs: [
          "UK clients work within the UK GDPR and, in many cases, Financial Conduct Authority or NHS supplier standards. US clients frequently bring state-level privacy statutes, contractual security riders, or sector rules such as HIPAA for healthcare staffing.",
          "We maintain security documentation that maps our controls to these frameworks and appoint a named information security contact for every enterprise engagement. Questions raised during procurement are answered with evidence, not assurances.",
        ],
      },
      {
        heading: "Compliance Due Diligence: Questions to Ask",
        paragraphs: [
          "When evaluating any offshore provider, request the data processing agreement, the ISO 27001 statement of applicability, and evidence of VDI configuration before contracts are signed. Ask who owns incident response and how breach notifications are triggered.",
          "A serious provider will welcome that scrutiny. Our security team participates directly in client due diligence and will walk your compliance officers through every control, from encryption standards to physical site access records.",
        ],
        bullets: [
          "Request the data processing agreement early",
          "Review ISO 27001 scope and applicability",
          "Test VDI and access control claims",
          "Confirm breach notification timelines in writing",
          "Meet the named security contact before signing",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}
