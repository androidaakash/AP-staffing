export type HeroCta =
  | { kind: "link"; label: string; icon: string; href: string; dataPath: string; style: "primary" | "ghost" }
  | { kind: "booking"; label: string; icon: string; style: "primary" | "ghost" };

export type HeroSlide = {
  image: string;
  imageAlt: string;
  badge: string;
  badgePulse: boolean;
  titleLead: string;
  titleAccent: string;
  body: string;
  ctas: HeroCta[];
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: "/images/hero-boardroom.jpg",
    imageAlt:
      "An executive offshore operations boardroom with international recruiters consulting over analytics dashboards on large displays, bathed in moody architectural lighting and natural morning sunlight through floor-to-ceiling windows.",
    badge: "YOUR OFFSHORE RECRUITMENT PARTNER",
    badgePulse: true,
    titleLead: "Build a Stronger Recruitment Business. ",
    titleAccent: "Without Growing Your Overheads.",
    body: "Extend your recruitment capacity with dedicated offshore professionals who support your workflows, strengthen delivery, and help your team focus on winning business.",
    ctas: [
      {
        kind: "link",
        label: "Explore Recruitment Solutions",
        icon: "arrow_forward",
        href: "/services",
        dataPath: "services",
        style: "primary",
      },
      { kind: "booking", label: "Book a Discovery Call", icon: "calendar_today", style: "ghost" },
    ],
  },
  {
    image: "/images/hero-workspace.jpg",
    imageAlt:
      "High-performing global virtual talent collaborating seamlessly in an upscale modern workspace with clean Scandinavian desks, dual monitor setups showing candidate pipelines, warm ambient architectural lighting and deep accent tones.",
    badge: "PEOPLE WHO POWER YOUR PROGRESS",
    badgePulse: false,
    titleLead: "Exceptional Talent. Flexible Teams. ",
    titleAccent: "More Room to Grow.",
    body: "Access dedicated virtual professionals for recruitment, administration, operations, and business support—aligned with the way your team works.",
    ctas: [
      {
        kind: "link",
        label: "Discover Virtual Staffing",
        icon: "groups",
        href: "/services/virtual-staffing",
        dataPath: "services-virtual-staffing",
        style: "primary",
      },
      {
        kind: "link",
        label: "Meet Our Team",
        icon: "east",
        href: "/#about",
        dataPath: "about-us",
        style: "ghost",
      },
    ],
  },
  {
    image: "/images/hero-analytics.jpg",
    imageAlt:
      "An executive analytics briefing room with focused operations managers reviewing process documentation, compliance charts, and SLA performance dashboards on sleek laptops, framed in low-key corporate atmosphere.",
    badge: "SMARTER BUSINESS OPERATIONS",
    badgePulse: false,
    titleLead: "Take the Pressure Off ",
    titleAccent: "Your Daily Operations.",
    body: "Outsource essential business tasks to a dependable offshore team and give your in-house people more time for clients, strategy, and business growth.",
    ctas: [
      {
        kind: "link",
        label: "Explore Business Support",
        icon: "verified",
        href: "/services/back-office-support",
        dataPath: "services-back-office-support",
        style: "primary",
      },
      { kind: "booking", label: "Talk to Our Experts", icon: "forum", style: "ghost" },
    ],
  },
];

export const TRUST_ITEMS = [
  {
    icon: "public",
    title: "Offshore Recruitment Expertise",
    description: "Rigorous UK & US market alignment with time-zone synchronization.",
  },
  {
    icon: "tune",
    title: "Flexible Staffing Solutions",
    description: "Agile, scalable month-to-month resourcing without long lock-ins.",
  },
  {
    icon: "account_tree",
    title: "Process-Driven Delivery",
    description: "Institutional SOP adherence, Bullhorn/JobAdder integration.",
  },
  {
    icon: "handshake",
    title: "Partnership-Led Service",
    description: "Direct communication with dedicated delivery managers.",
  },
];

export const ABOUT = {
  image: "/images/about-team.jpg",
  imageAlt:
    "Senior recruitment directors collaborating around a glass boardroom table reviewing candidate portfolios and operational benchmarks, captured in an upscale corporate environment with warm natural tones and architectural plants.",
  badgeTitle: "100% Embedded",
  badgeLabel: "Dedicated Talent Network",
  badgeDescription:
    "High-retention offshore specialists operating directly under your agency SOPs.",
  label: "WHO WE ARE",
  heading: "Your Growth Partner Behind the Scenes.",
  paragraphs: [
    "At Dream Gadge, we don't operate as a disconnected call center. We embed dedicated, experienced recruiters and business operations professionals straight into your daily operating cadence.",
    "Whether you are an ambitious recruitment agency scaling requisition intake or a professional enterprise streamlining administrative pipelines, our teams act as a dependable extension of your in-house staff.",
  ],
  checklist: [
    "Flexible offshore support strictly aligned with your timezone & market norms",
    "Dedicated talent trained on industry standards, CRM systems, and structured workflows",
    "Clear, transparent daily reporting and collaborative communication via Slack/Teams",
    "Tailored engagement models designed entirely around your priorities",
  ],
  link: { label: "Learn About Us", href: "/#about", dataPath: "about-us" },
};

export type ServiceCard = {
  icon: string;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
  dataPath: string;
  wide?: boolean;
  badge?: string;
};

export const SERVICES = {
  label: "OUR EXPERTISE",
  heading: "Practical Solutions for Ambitious Businesses.",
  description:
    "From tactical resume sourcing to total administrative offload, we provide targeted solutions engineered to elevate your billable efficiency.",
  cards: [
    {
      icon: "manage_accounts",
      title: "Full Cycle Recruitment",
      description:
        "Extend your recruitment delivery with support across candidate engagement, screening, interview coordination, and hiring workflows.",
      linkLabel: "View Full Cycle RPO",
      href: "/services/full-cycle-recruitment",
      dataPath: "services-full-cycle-recruitment",
    },
    {
      icon: "person_search",
      title: "Candidate Sourcing & Screening",
      description:
        "Build stronger candidate pipelines through targeted sourcing, initial screening, and organized candidate shortlists ready for placement.",
      linkLabel: "Explore Sourcing Hubs",
      href: "/services/candidate-sourcing",
      dataPath: "services-candidate-sourcing",
    },
    {
      icon: "explore",
      title: "Market Mapping",
      description:
        "Understand talent markets, identify competitor candidate distribution, and uncover high-value opportunities across your target vertical sectors.",
      linkLabel: "Talent Intelligence",
      href: "/services/market-mapping",
      dataPath: "services-market-mapping",
    },
    {
      icon: "inventory_2",
      title: "Back Office & Admin",
      description:
        "Reduce administrative pressure with dependable support for documentation, CRM data hygiene, diary scheduling, and daily workflows.",
      linkLabel: "BPO Operations",
      href: "/services/back-office-support",
      dataPath: "services-back-office-support",
    },
    {
      icon: "hub",
      title: "Virtual Staffing & Extended Pods",
      description:
        "Add dedicated remote professionals to support your business without unnecessarily expanding your in-house fixed structure. Fully trained on your tech stack, compliant, and managed daily.",
      linkLabel: "View Pod Configurations",
      href: "/services/virtual-staffing",
      dataPath: "services-virtual-staffing",
      wide: true,
      badge: "Popular",
    },
  ] as ServiceCard[],
  banner: {
    title: "Need something more specific?",
    description:
      "Let's build an agile team framework bespoke to your sector and software tools.",
    buttonLabel: "Discuss Your Requirements",
  },
};

export const EXPERIENCE = {
  label: "PROVEN PEDIGREE",
  heading: "Experience That Understands Your Market.",
  description:
    "Our senior management stems from Tier-1 British and North American search firms, giving us an intrinsic understanding of candidate calibre and client urgency.",
  metrics: [
    {
      value: "100+",
      title: "Years of Collective Experience",
      description:
        "Combined leadership background directing high-volume delivery across UK, US, European, and Australian staffing corridors.",
    },
    {
      value: "360°",
      title: "End-to-End Delivery Support",
      description:
        "Full-cycle coverage from LinkedIn Boolean mapping, ATS data enrichment, initial interview vetting, right down to candidate compliance auditing.",
    },
    {
      value: "99.4%",
      title: "UK & US Timezone Synchronization",
      description:
        "Shift rotas calibrated directly with London (GMT) and Eastern/Pacific (EST/PST) working hours for real-time agility.",
    },
  ],
};

export const VALUES = {
  label: "WHAT GUIDES US",
  heading: "Strong Partnerships Start with Strong Values.",
  description:
    "Integrity and precision drive how we operate, how we select our people, and how we care for your business reputation.",
  items: [
    {
      icon: "shield",
      title: "Integrity",
      description:
        "Absolute honesty in talent assessments, data handling, and capacity management. We protect your client relationships with total confidentiality.",
    },
    {
      icon: "psychology",
      title: "Determination",
      description:
        "Persistent sourcing when talent pools are dry. We dig deeper across passive networks to surface candidates ordinary searchers overlook.",
    },
    {
      icon: "hearing",
      title: "Active Listening",
      description:
        "We adapt to your agency's idiosyncratic vernacular, client tone, and briefing nuances rather than enforcing rigid, generic frameworks.",
    },
    {
      icon: "volunteer_activism",
      title: "True Partnership",
      description:
        "Your long-term margin and retention matter to us. We treat your requisitions with the same emotional ownership as your internal partners.",
    },
  ],
};

export const TRANSFORMATION = {
  label: "SEAMLESS SCALE",
  heading: "Begin Your Journey of Transformation.",
  description:
    "Discover how the right offshore support can create more capacity, improve workflows, and give your recruitment team more time to focus on growth and closing deals.",
  buttonLabel: "Let's Talk About Your Goals",
};

export const STEPS = {
  label: "A CLEARER WAY TO OUTSOURCE",
  heading: "From First Conversation to Ongoing Support.",
  description:
    "Our 4-stage deployment model ensures zero operational friction, complete security, and swift return on capacity.",
  items: [
    {
      number: "01",
      icon: "search",
      title: "Understand",
      description:
        "We map your existing recruiting cycle, review ATS configurations, candidate persona benchmarks, and define clear key performance indicators.",
    },
    {
      number: "02",
      icon: "architecture",
      title: "Design",
      description:
        "We configure your dedicated offshore pod profile, curate shortlists of pre-vetted specialists, and tailor standard operational templates.",
    },
    {
      number: "03",
      icon: "rocket_launch",
      title: "Onboard",
      description:
        "Your remote resources complete tooling induction, security compliance verification, and integrate immediately into your Slack or Teams desk.",
    },
    {
      number: "04",
      icon: "trending_up",
      title: "Improve",
      description:
        "Structured bi-weekly reviews, quality assurance audits, SLA scorecards, and iterative feedback keep your talent operating at peak velocity.",
    },
  ],
};

export type Testimonial = {
  quote: string;
  initials: string;
  name: string;
  role: string;
  location: string;
};

export const TESTIMONIALS = {
  label: "VERIFIED TESTIMONIALS",
  heading: "Trusted Partnerships. Meaningful Progress.",
  description:
    "Hear from recruitment agency leaders who unlocked 40%+ operational leverage with Dream Gadge.",
  items: [
    {
      quote:
        '"Bringing in Dream Gadge\'s candidate sourcing pod allowed our London tech agency to double live job fills in Q3 without leasing extra office desk space. Their recruiters speak our market vernacular natively."',
      initials: "AC",
      name: "Alistair Crawford",
      role: "Managing Director • TechSearch UK",
      location: "London, United Kingdom",
    },
    {
      quote:
        '"Our US healthcare staffing practice was bogged down in credentialing backlogs. Arena\'s administrative desk took total ownership within 10 days. Accuracy scores have hit 99.8% consecutively."',
      initials: "MR",
      name: "Morgan Reynolds",
      role: "VP Operations • Beacon Staffing USA",
      location: "New York, United States",
    },
    {
      quote:
        '"We were skeptical of offshore models after a bad experience with generic freelancers. Dream Gadge is entirely different—accountability, dedicated managers, and direct Bullhorn integration."',
      initials: "SP",
      name: "Sarah Pendelton",
      role: "Founder • Pendelton Executive",
      location: "Manchester, United Kingdom",
    },
  ] as Testimonial[],
};

export const INDUSTRIES = {
  label: "SECTOR SPECIALIZATION",
  heading: "Tailored for Your Industry Verticals.",
  description:
    "Our offshore specialists arrive pre-briefed on the terminology, regulatory nuances, and compliance demands of your domain.",
  items: [
    {
      icon: "groups_3",
      title: "Recruitment Agencies",
      description:
        "Permanent and contract contingent staffing desks, executive search boutiques, and multi-branch commercial recruitment brands.",
      bullets: ["Tech & Engineering desks", "Healthcare & Life Sciences", "Finance & Executive Search"],
    },
    {
      icon: "apartment",
      title: "Property Management",
      description:
        "Leasing coordination, tenant enquiry qualification, contractor dispatch workflows, and compliance document archiving.",
      bullets: ["Lease administration", "Tenant vetting & references", "Maintenance work order triage"],
    },
    {
      icon: "rocket",
      title: "Growing Businesses",
      description:
        "Fast-moving scaleups needing operational agility without high onshore payroll overheads or drawn-out employment ramps.",
      bullets: ["Customer onboarding desks", "Operations coordinators", "SaaS pipeline validation"],
    },
    {
      icon: "account_balance",
      title: "Professional Services",
      description:
        "Accounting practices, legal consultancies, and management advisory firms requiring meticulous document management and research.",
      bullets: ["Audit file preparation", "Executive assistant support", "Data reconciliation"],
    },
  ],
};

export const FAQS = {
  label: "CLEAR ANSWERS",
  heading: "Frequently Asked Questions.",
  description:
    "Straightforward information on engagement models, security standards, and team integration.",
  items: [
    {
      question: "How do you vet and select offshore professionals for our team?",
      answer:
        "Every candidate undergoes a rigorous four-stage screening process: English fluency evaluation (C1/C2 CEFR standard), in-depth recruitment domain assessment, live ATS/CRM scenario tests, and rigorous reference/criminal record verification. You also conduct the final interview before any deployment begins.",
    },
    {
      question: "How do we communicate with our offshore team on a day-to-day basis?",
      answer:
        "Your dedicated team members integrate directly into your standard communication channels—including Slack, Microsoft Teams, Zoom, and your company email domain. They attend your morning stand-ups and provide daily submission reports summarizing requisitions worked, candidates contacted, and pipeline milestones.",
    },
    {
      question: "What data security and compliance measures are in place?",
      answer:
        "We maintain stringent ISO 27001-aligned information security frameworks. Work is performed through encrypted virtual desktops (VDI) with USB lockouts, biometric access centers, zero-local-data storage, and comprehensive GDPR / SOC2 data privacy agreements signed prior to project start.",
    },
    {
      question: "How does your pricing structure work? Are there hidden fees?",
      answer:
        "We operate transparent, fixed monthly retainer pricing per dedicated resource, which includes salary, workstation infrastructure, health benefits, dedicated delivery management, and software licenses. There are zero surprise recruitment fees, no setup penalties, and no long-term lock-ins.",
    },
    {
      question: "Can we start with just one offshore professional to test the model?",
      answer:
        "Yes, absolutely. A significant proportion of our long-term enterprise partners initiated their journey with a single sourcer or administrative specialist. Once the ROI and workflow integration are demonstrated, you can scale to multi-member pods with 2–3 weeks notice.",
    },
    {
      question: "Can your team work inside our existing ATS and CRM systems?",
      answer:
        "Yes. Our specialists have extensive daily experience across Bullhorn, Vincere, JobAdder, Greenhouse, Lever, Workable, and LinkedIn Recruiter Enterprise. We adhere strictly to your data fields, tagging rules, and pipeline stages.",
    },
  ],
};

export const FINAL_CTA = {
  badge: "GET STARTED TODAY",
  heading: "Ready to Take Your Business to the Next Level?",
  description:
    "Let's discuss where additional recruitment capacity or operational support could make the biggest difference to your business growth and profitability.",
  primaryLabel: "Talk to Our Experts",
  primaryIcon: "forum",
  secondaryLabel: "Explore Our Services",
  secondaryHref: "/services",
  footnote:
    "No obligation. Just an honest conversation about your goals and offshore feasibility.",
};
