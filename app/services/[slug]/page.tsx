import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookCallButton } from "@/components/booking/BookCallButton";
import { CtaSection } from "@/components/layout/CtaSection";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Icon } from "@/components/ui/Icon";
import { getService, SERVICES } from "@/data/services";

type ServicePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getService(params.slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getService(params.slug);
  if (!service) notFound();

  const related = [
    ...SERVICES.filter((item) => item.category === service.category && item.slug !== service.slug),
    ...SERVICES.filter((item) => item.category !== service.category),
  ].slice(0, 3);

  return (
    <>
      <PageHero
        label={service.category}
        heading={service.name}
        description={service.heroDescription}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      >
        <div className="space-y-space-lg">
          <div className="flex flex-wrap items-center gap-space-md">
            <BookCallButton
              className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-violet-cta hover:bg-violet-cta-hover text-surface-container-lowest font-label-md text-label-md font-bold rounded-lg shadow-xl hover:-translate-y-0.5 transition-all"
              label="Book a Discovery Call"
              icon="calendar_today"
              iconPosition="before"
            />
            <Link
              className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-md text-label-md transition-all"
              href="/services"
            >
              <span>Explore All Services</span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-space-sm">
            {service.badges.map((badge) => (
              <span
                className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-lowest/10 text-primary-fixed font-label-sm text-label-sm"
                key={badge}
              >
                <Icon name="verified" className="text-[14px]" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </PageHero>

      <section className="w-full py-space-3xl bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-2xl items-start">
            <div className="space-y-space-md">
              <div className="font-label-caps text-label-caps text-violet-accent tracking-widest uppercase font-bold">
                OVERVIEW
              </div>
              <h2 className="font-headline-lg text-headline-lg text-plum-deep font-bold">
                {service.overviewHeading}
              </h2>
              {service.overviewParagraphs.map((paragraph) => (
                <p className="font-body-md text-body-md text-slate-text-muted leading-relaxed" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="bg-slate-surface rounded-xl p-space-xl space-y-space-md shadow-sm">
              <div className="font-headline-sm text-headline-sm text-plum-deep font-bold">
                Optimised for outcomes
              </div>
              <ul className="space-y-space-sm">
                {service.overviewPoints.map((point) => (
                  <li className="flex items-start gap-space-sm font-body-sm text-body-sm text-slate-text-main" key={point}>
                    <Icon name="check_circle" className="text-[18px] text-violet-accent mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <BookCallButton
                className="w-full inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm bg-plum-deep hover:bg-plum-mid text-on-primary font-label-md text-label-md rounded-lg transition-colors"
                label={service.cardLabel}
                icon="arrow_forward"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full py-space-3xl bg-slate-surface">
        <Container className="space-y-space-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-space-sm">
            <div className="font-label-caps text-label-caps text-violet-accent tracking-widest uppercase font-bold">
              WHAT IS INCLUDED
            </div>
            <h2 className="font-headline-xl text-headline-xl text-plum-deep font-bold">
              Everything the Pod Delivers.
            </h2>
            <p className="font-body-md text-body-md text-slate-text-muted">
              Each engagement is scoped around your workflows, but these are the core capabilities every{" "}
              {service.name.toLowerCase()} engagement runs on.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {service.capabilities.map((capability) => (
              <div
                className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm hover:shadow-lg transition-all space-y-space-md group"
                key={capability.title}
              >
                <div className="w-12 h-12 rounded-lg bg-plum-deep text-on-primary flex items-center justify-center group-hover:bg-violet-accent transition-colors">
                  <Icon name={capability.icon} className="text-[26px]" />
                </div>
                <div className="space-y-space-xs">
                  <h3 className="font-headline-sm text-headline-sm text-slate-text-main font-bold">
                    {capability.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-slate-text-muted leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="w-full py-space-3xl bg-surface">
        <Container className="space-y-space-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-space-sm">
            <div className="font-label-caps text-label-caps text-violet-accent tracking-widest uppercase font-bold">
              HOW IT WORKS
            </div>
            <h2 className="font-headline-xl text-headline-xl text-plum-deep font-bold">
              From First Conversation to Live Delivery.
            </h2>
            <p className="font-body-md text-body-md text-slate-text-muted">
              A structured deployment model that gets your {service.name.toLowerCase()} pod productive in weeks, not months.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {service.steps.map((step) => (
              <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md" key={step.number}>
                <div className="flex items-center justify-between">
                  <span className="font-display-hero text-[32px] font-extrabold text-violet-accent/40">
                    {step.number}
                  </span>
                  <Icon name="arrow_forward" className="text-[22px] text-plum-deep" />
                </div>
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
              THE OUTCOMES
            </div>
            <h2 className="font-headline-xl text-headline-xl text-surface-container-lowest font-bold">
              Results This Service Is Built to Deliver.
            </h2>
            <p className="font-body-md text-body-md text-surface-container-high">
              Typical impact reported by clients running this engagement, measured through weekly SLA reporting.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl">
            {service.outcomes.map((outcome) => (
              <div className="bg-plum-mid/30 p-space-xl rounded-xl backdrop-blur-sm space-y-space-sm" key={outcome.label}>
                <div className="font-display-hero text-display-hero text-primary-fixed font-extrabold tracking-tight">
                  {outcome.value}
                </div>
                <div className="font-headline-sm text-headline-sm text-surface-container-lowest font-semibold">
                  {outcome.label}
                </div>
                <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="w-full py-space-3xl bg-surface">
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-space-2xl items-start">
          <div className="space-y-space-md">
            <div className="font-label-caps text-label-caps text-violet-accent tracking-widest uppercase font-bold">
              WHO IT'S FOR
            </div>
            <h2 className="font-headline-lg text-headline-lg text-plum-deep font-bold">
              Built for Teams Like Yours.
            </h2>
            <p className="font-body-md text-body-md text-slate-text-muted leading-relaxed">
              {service.tagline}. If any of the following describe your business, this service is designed for you.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            {service.idealFor.map((item) => (
              <li
                className="flex items-start gap-space-sm bg-slate-surface rounded-lg p-space-md font-body-sm text-body-sm text-slate-text-main"
                key={item}
              >
                <Icon name="check_circle" className="text-[18px] text-violet-accent mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="w-full py-space-3xl bg-slate-surface">
        <Container className="space-y-space-2xl max-w-4xl">
          <div className="text-center space-y-space-sm">
            <div className="font-label-caps text-label-caps text-violet-accent tracking-widest uppercase font-bold">
              COMMON QUESTIONS
            </div>
            <h2 className="font-headline-xl text-headline-xl text-plum-deep font-bold">
              {service.name}: Questions, Answered.
            </h2>
          </div>
          <FaqAccordion idPrefix={`service-${service.slug}`} items={service.faqs} />
        </Container>
      </section>

      <section className="w-full py-space-3xl bg-surface">
        <Container className="space-y-space-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="space-y-space-xs max-w-xl">
              <div className="font-label-caps text-label-caps text-violet-accent tracking-widest uppercase font-bold">
                KEEP EXPLORING
              </div>
              <h2 className="font-headline-xl text-headline-xl text-plum-deep font-bold">Related Services.</h2>
            </div>
            <Link
              className="inline-flex items-center gap-space-xs font-label-md text-label-md text-plum-deep hover:text-violet-accent font-bold group"
              href="/services"
            >
              <span>View all services</span>
              <Icon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {related.map((item) => (
              <Link
                className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm hover:shadow-lg transition-all flex flex-col justify-between gap-space-lg group"
                href={`/services/${item.slug}`}
                key={item.slug}
              >
                <div className="space-y-space-sm">
                  <div className="w-12 h-12 rounded-lg bg-plum-deep text-on-primary flex items-center justify-center group-hover:bg-violet-accent transition-colors">
                    <Icon name={item.icon} className="text-[26px]" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-slate-text-main font-bold group-hover:text-plum-deep transition-colors">
                    {item.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-slate-text-muted leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 font-label-md text-label-md text-plum-mid group-hover:text-violet-accent font-semibold">
                  <span>{item.cardLabel}</span>
                  <Icon name="arrow_forward" className="text-[16px]" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        badge="GET STARTED"
        heading={`Ready to Add ${service.name} Capacity?`}
        description="Tell us about your delivery gaps and we will scope a dedicated offshore pod with transparent fixed monthly pricing, no setup penalties and no long-term lock-ins."
        secondary={{ label: "Explore All Services", href: "/services" }}
      />
    </>
  );
}
