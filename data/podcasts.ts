export type PodcastChapter = { time: string; title: string };

export type PodcastEpisode = {
  slug: string;
  category: string;
  title: string;
  description: string;
  duration: string;
  date: string;
  image: string;
  imageAlt: string;
  guest: string;
  guestRole: string;
  summary: string;
  takeaways: string[];
  chapters: PodcastChapter[];
};

export const PODCASTS = {
  label: "IDEAS, INSIGHTS & CONVERSATIONS",
  heading: "Conversations That Move Business Forward.",
  description:
    "Expert roundtables with global recruitment innovators exploring offshore leverage, AI sourcing, and scaling strategies.",
  linkLabel: "View All Episodes",
} as const;

export const EPISODES: PodcastEpisode[] = [
  {
    slug: "restructuring-recruitment-overhead",
    category: "The Aakash AP Podcast • Ep 24",
    title: "Restructuring Recruitment Overhead: The Shift to Hybrid Global Teams",
    description:
      "How mid-sized UK staffing firms are maintaining 35% EBIT margins using integrated offshore desks.",
    duration: "18 min listen",
    date: "Broadcasted Oct 2025",
    image: "/images/podcast-1.jpg",
    imageAlt:
      "Two international recruiting leaders in a professional broadcast studio wearing headphones and speaking into broadcast microphones discussing global recruitment process outsourcing strategies.",
    guest: "Alistair Crawford",
    guestRole: "Managing Director, TechSearch UK",
    summary:
      "Alistair Crawford explains how a twelve-desk UK technology agency rebuilt its cost base around a hybrid model that combines onshore consultants with offshore delivery pods. The conversation covers the board-level case for the shift, the mistakes of an early iteration, and the metrics that convinced a sceptical leadership team to commit.",
    takeaways: [
      "Hybrid desks cut delivery cost per placement by roughly a third within two quarters.",
      "Offshore pods work best when they own defined stages, not scattered tasks.",
      "Keep client-facing ownership onshore and move research offshore.",
      "Set a 90-day review gate before committing to full pod expansion.",
      "Measure hybrid success by gross margin per desk, not headcount.",
    ],
    chapters: [
      { time: "00:00", title: "Why overhead became the board's priority" },
      { time: "02:40", title: "The first failed offshore attempt" },
      { time: "05:15", title: "Designing the hybrid desk structure" },
      { time: "08:30", title: "Client reaction and confidentiality concerns" },
      { time: "12:05", title: "Metrics that justified expansion" },
      { time: "15:20", title: "Advice for managing directors considering the shift" },
    ],
  },
  {
    slug: "ats-governance-data-hygiene",
    category: "Executive Masterclass",
    title: "ATS Governance & Data Hygiene: Turning Dormant Pipelines into Placements",
    description:
      "Best practices for Bullhorn and Vincere database enrichment without wasting consultant time.",
    duration: "Keynote 24 min",
    date: "Released Nov 2025",
    image: "/images/podcast-2.jpg",
    imageAlt:
      "A tech executive speaking on an international conference stage with widescreen presentations displaying recruitment pipeline efficiency metrics and global candidate workflow diagrams.",
    guest: "Elena Vasquez",
    guestRole: "Head of Delivery, Aakash AP",
    summary:
      "Elena Vasquez presents a keynote on why most recruitment databases quietly decay and how structured governance reverses the trend. She walks through hygiene routines inside Bullhorn, Vincere, and JobAdder, then shows how dormant candidate records become live placements once ownership and cadence are clearly defined.",
    takeaways: [
      "Most ATS databases decay because no one owns record quality day to day.",
      "Assign named data stewards inside existing desks rather than a new role.",
      "Standardise tags and pipeline stages before any re-engagement campaign.",
      "A disciplined reactivation sprint can surface placements from year-old records.",
      "Measure hygiene with weekly exception reports, not annual clean-ups.",
    ],
    chapters: [
      { time: "00:00", title: "Why dormant pipelines are a hidden asset" },
      { time: "04:10", title: "How databases decay: five common patterns" },
      { time: "08:45", title: "Designing a data steward model" },
      { time: "13:00", title: "Bullhorn and Vincere hygiene routines" },
      { time: "17:30", title: "Reactivating candidates: sequence and tone" },
      { time: "21:15", title: "Measuring placements from reactivated records" },
    ],
  },
  {
    slug: "candidate-engagement-2025",
    category: "The Aakash AP Podcast • Ep 25",
    title: "Candidate Engagement in 2025: Why Automated Mass Messaging is Failing",
    description:
      "Why human-led personalisation paired with offshore scale yields 4x response rates across senior executives.",
    duration: "15 min listen",
    date: "Broadcasted Dec 2025",
    image: "/images/podcast-3.jpg",
    imageAlt:
      "A round-table discussion between three talent acquisition leaders in a modern conference room with coffee and digital tablets discussing international hiring dynamics.",
    guest: "Morgan Reynolds",
    guestRole: "VP Operations, Beacon Staffing USA",
    summary:
      "Morgan Reynolds explains why mass automation has degraded candidate response rates across US staffing markets and what replaced it at Beacon Staffing. The discussion covers human-led personalisation at offshore scale, channel mix by seniority, and the response metrics that actually predict placement outcomes.",
    takeaways: [
      "Mass sequences now compete with dozens of identical messages per candidate.",
      "Human-led personalisation at volume beats automation with no context.",
      "Response rates recover when offshore teams send fewer, better-researched messages.",
      "Track reply quality and interview requests, not just open rates.",
      "Blend SMS, email, and calls according to candidate seniority and sector.",
    ],
    chapters: [
      { time: "00:00", title: "Why response rates collapsed across US desks" },
      { time: "02:35", title: "How automation damaged candidate trust" },
      { time: "05:20", title: "Rebuilding engagement with human-led outreach" },
      { time: "08:10", title: "Scaling personalisation through offshore teams" },
      { time: "11:00", title: "Channel mix by seniority and sector" },
      { time: "13:25", title: "Metrics that predict placement outcomes" },
    ],
  },
];

export function getEpisode(slug: string): PodcastEpisode | undefined {
  return EPISODES.find((episode) => episode.slug === slug);
}
