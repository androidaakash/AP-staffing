export type NavItem = {
  label: string;
  href: string;
  dataPath: string;
};

export type MegaMenuLink = {
  label: string;
  description: string;
  href: string;
  dataPath: string;
};

export type MegaMenuColumn = {
  heading: string;
  icon: string;
  links: MegaMenuLink[];
};

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/", dataPath: "home" },
  { label: "About Us", href: "/#about", dataPath: "about-us" },
];

export const PRIMARY_NAV_AFTER_SERVICES: NavItem[] = [
  { label: "Industries", href: "/#industries", dataPath: "industries" },
];

export const MEGA_MENU: MegaMenuColumn[] = [
  {
    heading: "Recruitment Solutions",
    icon: "group_add",
    links: [
      {
        label: "Full Cycle Recruitment",
        description: "End-to-end global requisition fulfillment & onboarding.",
        href: "/services/full-cycle-recruitment",
        dataPath: "services-full-cycle-recruitment",
      },
      {
        label: "Candidate Sourcing & Screening",
        description: "High-yield pipeline generation and behavioral vetting.",
        href: "/services/candidate-sourcing",
        dataPath: "services-candidate-sourcing",
      },
      {
        label: "Market Mapping & Intelligence",
        description: "Competitor talent benching and salary benchmarking.",
        href: "/services/market-mapping",
        dataPath: "services-market-mapping",
      },
    ],
  },
  {
    heading: "Business Support Solutions",
    icon: "domain",
    links: [
      {
        label: "Back Office & Admin",
        description: "Workflow coordination, data hygiene & compliance.",
        href: "/services/back-office-support",
        dataPath: "services-back-office-support",
      },
      {
        label: "Finance & Accounting",
        description: "Offshore payroll, book-keeping and invoice audits.",
        href: "/services/finance-accounting",
        dataPath: "services-finance-accounting",
      },
      {
        label: "Virtual Staffing",
        description: "Dedicated operational specialists aligned to time zones.",
        href: "/services/virtual-staffing",
        dataPath: "services-virtual-staffing",
      },
      {
        label: "Digital Marketing",
        description: "Brand awareness, content pipelines & employer branding.",
        href: "/services/digital-marketing",
        dataPath: "services-digital-marketing",
      },
    ],
  },
];

export const FOOTER_COLUMNS: { heading: string; links: NavItem[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/#about", dataPath: "about-us" },
      { label: "How It Works", href: "/#how-it-works", dataPath: "how-it-works" },
      { label: "Case Studies", href: "/case-studies", dataPath: "case-studies" },
      { label: "Insights / Blog", href: "/blog", dataPath: "insights-blog" },
      { label: "Podcasts", href: "/podcasts", dataPath: "podcasts" },
      { label: "Careers", href: "/careers", dataPath: "careers" },
      { label: "FAQs", href: "/#faq", dataPath: "faqs" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "All Services", href: "/services", dataPath: "services" },
      { label: "Full Cycle RPO", href: "/services/full-cycle-recruitment", dataPath: "services-full-cycle-recruitment" },
      { label: "Talent Sourcing Hubs", href: "/services/candidate-sourcing", dataPath: "services-candidate-sourcing" },
      { label: "Market Intelligence", href: "/services/market-mapping", dataPath: "services-market-mapping" },
      { label: "Administrative BPO", href: "/services/back-office-support", dataPath: "services-back-office-support" },
      { label: "Finance & Audit Support", href: "/services/finance-accounting", dataPath: "services-finance-accounting" },
      { label: "Virtual Executive Staffing", href: "/services/virtual-staffing", dataPath: "services-virtual-staffing" },
    ],
  },
];

export const LEGAL_LINKS: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy", dataPath: "privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service", dataPath: "terms-of-service" },
  { label: "Cookie Settings", href: "/cookie-settings", dataPath: "cookie-settings" },
  { label: "Security & SLA", href: "/security-sla", dataPath: "security-compliance" },
];
