import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { CtaSection } from "@/components/layout/CtaSection";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { CASE_STUDIES, getCaseStudy } from "@/data/case-studies";

type CaseStudyPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return CASE_STUDIES.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const caseStudy = getCaseStudy(params.slug);
  if (!caseStudy) return {};

  return {
    title: caseStudy.seo.title,
    description: caseStudy.seo.description,
    alternates: {
      canonical: `/case-studies/${caseStudy.slug}`,
    },
  };
}

export default function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudy(params.slug);
  if (!caseStudy) notFound();

  const related = CASE_STUDIES.filter((item) => item.slug !== caseStudy.slug).slice(0, 2);

  const metaItems = [
    { icon: "public", label: "Region", value: caseStudy.region },
    { icon: "schedule", label: "Engagement", value: caseStudy.duration },
    { icon: "handshake", label: "Services", value: caseStudy.services.join(" + ") },
  ];

  return (
    <>
      <PageHero
        label={caseStudy.industry}
        heading={caseStudy.client}
        description={caseStudy.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: caseStudy.client },
        ]}
      />

      <section className="w-full py-space-2xl bg-slate-surface border-b border-slate-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {metaItems.map((item) => (
              <div className="flex items-start gap-space-md" key={item.label}>
                <div className="w-10 h-10 rounded-lg bg-plum-deep text-on-primary flex items-center justify-center shrink-0">
                  <Icon name={item.icon} className="text-[20px]" />
                </div>
                <div className="space-y-0.5">
                  <div className="font-label-caps text-label-caps uppercase text-slate-text-muted tracking-wider">
                    {item.label}
                  </div>
                  <div className="font-body-sm text-body-sm text-slate-text-main font-semibold">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="w-full py-space-3xl bg-surface">
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-space-2xl items-start">
          <div className="space-y-space-md">
            <div className="font-label-caps text-label-caps text-violet-accent tracking-widest uppercase font-bold">
              THE CHALLENGE
            </div>
            <h2 className="font-headline-lg text-headline-lg text-plum-deep font-bold">
              Where the Business Was Stuck.
            </h2>
          </div>
          <div className="space-y-space-md">
            {caseStudy.challenge.map((paragraph) => (
              <p className="font-body-md text-body-md text-slate-text-muted leading-relaxed" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="w-full py-space-3xl bg-slate-surface">
        <Container className="space-y-space-2xl">
          <div className="max-w-2xl space-y-space-sm">
            <div className="font-label-caps text-label-caps text-violet-accent tracking-widest uppercase font-bold">
              THE APPROACH
            </div>
            <h2 className="font-headline-xl text-headline-xl text-plum-deep font-bold">
              How the Pod Was Deployed.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {caseStudy.approach.map((step, index) => (
              <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md" key={step.title}>
                <span className="font-display-hero text-[32px] font-extrabold text-violet-accent/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-slate-text-main font-bold">{step.title}</h3>
                <p className="font-body-sm text-body-sm text-slate-text-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="w-full py-space-3xl bg-plum-deep text-on-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <Container className="relative space-y-space-2xl">
          <div className="max-w-2xl space-y-space-sm">
            <div className="font-label-caps text-label-caps text-primary-fixed tracking-widest uppercase font-bold">
              THE RESULTS
            </div>
            <h2 className="font-headline-xl text-headline-xl text-surface-container-lowest font-bold">
              Measured, Reported, Repeatable.
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-xl">
            {caseStudy.results.map((metric) => (
              <div className="bg-plum-mid/30 p-space-xl rounded-xl backdrop-blur-sm space-y-space-sm" key={metric.label}>
                <div className="font-display-hero text-display-hero text-primary-fixed font-extrabold tracking-tight">
                  {metric.value}
                </div>
                <div className="font-headline-sm text-headline-sm text-surface-container-lowest font-semibold">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="w-full py-space-3xl bg-surface">
        <Container className="max-w-4xl">
          <div className="relative bg-slate-surface rounded-2xl p-space-2xl md:p-space-3xl overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-violet-accent/10 blur-3xl pointer-events-none" />
            <div className="relative space-y-space-lg">
              <Icon name="format_quote" className="text-[48px] text-violet-accent/50" />
              <blockquote className="font-headline-md text-headline-md text-slate-text-main font-semibold leading-snug">
                {caseStudy.quote.text}
              </blockquote>
              <div className="flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-full bg-plum-deep text-on-primary flex items-center justify-center font-headline-sm font-bold">
                  {caseStudy.quote.author
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="font-label-md text-label-md text-slate-text-main font-bold">
                    {caseStudy.quote.author}
                  </div>
                  <div className="font-body-sm text-body-sm text-slate-text-muted">{caseStudy.quote.role}</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full pb-space-3xl bg-surface">
        <Container className="space-y-space-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <h2 className="font-headline-xl text-headline-xl text-plum-deep font-bold">More Client Stories.</h2>
            <Link
              className="inline-flex items-center gap-space-xs font-label-md text-label-md text-plum-deep hover:text-violet-accent font-bold group"
              href="/case-studies"
            >
              <span>View all case studies</span>
              <Icon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {related.map((item) => (
              <CaseStudyCard caseStudy={item} key={item.slug} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        badge="SIMILAR RESULTS, YOUR BUSINESS"
        heading="Ready to Remove Your Delivery Bottleneck?"
        description="We will walk you through the exact pod design, systems and reporting that produced these results, then scope the version that fits your business."
        secondary={{ label: "Explore Our Services", href: "/services" }}
      />
    </>
  );
}
