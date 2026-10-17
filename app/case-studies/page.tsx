import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { CtaSection } from "@/components/layout/CtaSection";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { CASE_STUDIES } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Client Case Studies",
  description:
    "Real results from Aakash AP engagements: sourcing pods, credentialing desks, leasing operations and professional services pods delivering measurable offshore outcomes.",
  alternates: {
    canonical: "/case-studies",
  },
};

const HEADLINE_STATS = [
  { value: "2.4x", label: "Live hires per quarter" },
  { value: "99.8%", label: "Processing accuracy" },
  { value: "38%", label: "Admin cost reduction" },
  { value: "11 days", label: "Fastest go-live" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        label="PROVEN RESULTS"
        heading="Client Outcomes, Not Marketing Promises."
        description="Every engagement starts with a bottleneck and ends with numbers. Explore how recruitment agencies, property managers and professional services firms scaled with dedicated offshore pods."
        crumbs={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
      />

      <section className="w-full py-space-2xl bg-slate-surface border-b border-slate-border">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {HEADLINE_STATS.map((stat) => (
              <div className="text-center space-y-1" key={stat.label}>
                <div className="font-headline-xl text-headline-xl text-forest-deep font-extrabold">
                  {stat.value}
                </div>
                <div className="font-body-sm text-body-sm text-slate-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="w-full py-space-3xl bg-surface">
        <Container className="space-y-space-2xl">
          <div className="max-w-2xl space-y-space-sm">
            <div className="font-label-caps text-label-caps text-emerald-accent tracking-widest uppercase font-bold">
              THE DETAIL
            </div>
            <h2 className="font-headline-xl text-headline-xl text-forest-deep font-bold">
              Four Engagements. Four Bottlenecks Removed.
            </h2>
            <p className="font-body-md text-body-md text-slate-text-muted">
              Client names are anonymised at their request. Full references are available during the
              discovery process.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
            {CASE_STUDIES.map((caseStudy) => (
              <CaseStudyCard caseStudy={caseStudy} key={caseStudy.slug} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        badge="YOUR RESULTS NEXT"
        heading="Let's Write Your Case Study."
        description="Every case study on this page started with a fifteen-minute call about a delivery bottleneck. Tell us yours and we will map the pod that removes it."
        secondary={{ label: "Explore Our Services", href: "/services" }}
      />
    </>
  );
}
