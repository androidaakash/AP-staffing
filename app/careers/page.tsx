import type { Metadata } from "next";
import Image from "next/image";
import { RolesList } from "@/components/careers/RolesList";
import { CtaSection } from "@/components/layout/CtaSection";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import {
  BENEFITS,
  CAREERS_EMAIL,
  CAREERS_INTRO,
  CULTURE_PILLARS,
  HIRING_STEPS,
  ROLES,
} from "@/data/careers";

export const metadata: Metadata = {
  title: "Careers at Dream Gadge",
  description:
    "Join a high-governance offshore delivery network across Manila, Cape Town, Krakow and Bangalore. Work directly with UK and US recruitment agencies and enterprises.",
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        label={CAREERS_INTRO.label}
        heading={CAREERS_INTRO.heading}
        description={CAREERS_INTRO.description}
        crumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      >
        <div className="flex flex-wrap items-center gap-space-md">
          <a
            className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-violet-cta hover:bg-violet-cta-hover text-surface-container-lowest font-label-md text-label-md font-bold rounded-lg shadow-xl hover:-translate-y-0.5 transition-all"
            href="#open-roles"
          >
            <Icon name="work" className="text-[18px]" />
            <span>See Open Roles</span>
          </a>
          <a
            className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-md text-label-md transition-all"
            href={`mailto:${CAREERS_EMAIL}`}
          >
            <span>Send a Speculative CV</span>
            <Icon name="arrow_forward" className="text-[18px]" />
          </a>
        </div>
      </PageHero>

      <section className="w-full py-space-3xl bg-surface">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-space-2xl items-center">
          <div className="space-y-space-md">
            <div className="font-label-caps text-label-caps text-violet-accent tracking-widest uppercase font-bold">
              WHY Dream Gadge
            </div>
            <h2 className="font-headline-lg text-headline-lg text-plum-deep font-bold">
              Real Clients. Real Ownership. Real Progression.
            </h2>
            {CAREERS_INTRO.paragraphs.map((paragraph) => (
              <p className="font-body-md text-body-md text-slate-text-muted leading-relaxed" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-lg">
            <Image
              alt="High-performing global virtual talent collaborating in an upscale modern workspace with dual monitor setups and deep accent tones."
              className="object-cover"
              src="/images/hero-workspace.jpg"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </Container>
      </section>

      <section className="w-full py-space-3xl bg-slate-surface">
        <Container className="space-y-space-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-space-sm">
            <div className="font-label-caps text-label-caps text-violet-accent tracking-widest uppercase font-bold">
              OUR CULTURE
            </div>
            <h2 className="font-headline-xl text-headline-xl text-plum-deep font-bold">
              What It Feels Like to Work Here.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {CULTURE_PILLARS.map((pillar) => (
              <div
                className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm hover:shadow-lg transition-all space-y-space-md group"
                key={pillar.title}
              >
                <div className="w-12 h-12 rounded-lg bg-plum-deep text-on-primary flex items-center justify-center group-hover:bg-violet-accent transition-colors">
                  <Icon name={pillar.icon} className="text-[26px]" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-slate-text-main font-bold">{pillar.title}</h3>
                <p className="font-body-sm text-body-sm text-slate-text-muted leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="w-full py-space-3xl bg-surface">
        <Container className="space-y-space-2xl">
          <div className="max-w-2xl space-y-space-sm">
            <div className="font-label-caps text-label-caps text-violet-accent tracking-widest uppercase font-bold">
              BENEFITS
            </div>
            <h2 className="font-headline-xl text-headline-xl text-plum-deep font-bold">
              Looked After, So You Can Deliver.
            </h2>
            <p className="font-body-md text-body-md text-slate-text-muted">
              Standard for every full-time team member across all four offshore centres.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {BENEFITS.map((benefit) => (
              <div className="flex items-start gap-space-md bg-slate-surface rounded-xl p-space-lg" key={benefit.title}>
                <div className="w-10 h-10 rounded-lg bg-plum-deep text-on-primary flex items-center justify-center shrink-0">
                  <Icon name={benefit.icon} className="text-[20px]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-headline-sm text-[16px] text-slate-text-main font-bold">{benefit.title}</h3>
                  <p className="font-body-sm text-body-sm text-slate-text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="w-full py-space-3xl bg-slate-surface scroll-mt-24" id="open-roles">
        <Container className="space-y-space-2xl max-w-5xl">
          <div className="text-center space-y-space-sm">
            <div className="font-label-caps text-label-caps text-violet-accent tracking-widest uppercase font-bold">
              OPEN ROLES
            </div>
            <h2 className="font-headline-xl text-headline-xl text-plum-deep font-bold">
              Current Opportunities.
            </h2>
            <p className="font-body-md text-body-md text-slate-text-muted max-w-2xl mx-auto">
              Expand a role to see the full brief, then apply directly with your CV. Every application is
              reviewed by our talent team within five working days.
            </p>
          </div>
          <RolesList roles={ROLES} />
        </Container>
      </section>

      <section className="w-full py-space-3xl bg-surface">
        <Container className="space-y-space-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-space-sm">
            <div className="font-label-caps text-label-caps text-violet-accent tracking-widest uppercase font-bold">
              HOW WE HIRE
            </div>
            <h2 className="font-headline-xl text-headline-xl text-plum-deep font-bold">
              A Process That Respects Your Time.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {HIRING_STEPS.map((step) => (
              <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md" key={step.number}>
                <span className="font-display-hero text-[32px] font-extrabold text-violet-accent/40">
                  {step.number}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-slate-text-main font-bold">{step.title}</h3>
                <p className="font-body-sm text-body-sm text-slate-text-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-plum-deep text-on-primary rounded-2xl p-space-xl md:p-space-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
            <div className="space-y-1">
              <div className="font-headline-sm text-headline-sm text-surface-container-lowest font-bold">
                Don't see your role listed?
              </div>
              <p className="font-body-sm text-body-sm text-surface-container-high">
                Send a speculative application to {CAREERS_EMAIL} and tell us where you would fit.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-violet-cta hover:bg-violet-cta-hover text-surface-container-lowest font-label-md text-label-md font-bold rounded-lg transition-colors whitespace-nowrap"
              href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent("Speculative application")}`}
            >
              <span>Email Our Talent Team</span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </a>
          </div>
        </Container>
      </section>

      <CtaSection
        badge="PARTNERS, NOT EMPLOYERS ONLY"
        heading="Prefer to Talk Before You Apply?"
        description="Our talent team is happy to answer questions about shifts, clients and progression before you commit to an application. Fifteen minutes, no obligation."
        secondary={{ label: "Learn About the Delivery Model", href: "/#how-it-works" }}
      />
    </>
  );
}
