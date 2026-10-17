import type { Metadata } from "next";
import Link from "next/link";
import { BookCallButton } from "@/components/booking/BookCallButton";
import { CtaSection } from "@/components/layout/CtaSection";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SERVICE_CATEGORIES, SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Offshore Recruitment & Business Support Services",
  description:
    "Explore Aakash AP's offshore services: full cycle recruitment pods, candidate sourcing, market intelligence, back-office BPO, finance support, virtual staffing and digital marketing.",
  alternates: {
    canonical: "/services",
  },
};

const CATEGORY_INTROS: Record<string, string> = {
  "Recruitment Solutions":
    "Delivery capacity for recruitment agencies and search firms: pods that source, screen, schedule and onboard under your brand, inside your ATS.",
  "Business Support Solutions":
    "Operational capacity for growing businesses: dedicated offshore professionals covering administration, finance, coordination and growth marketing.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="OUR SERVICES"
        heading="Practical Solutions for Ambitious Businesses."
        description="From tactical candidate sourcing to total administrative offload, every Aakash AP service is engineered to add capacity without adding overhead. You keep control of clients, pricing and decisions while we carry the delivery load."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      >
        <div className="flex flex-wrap items-center gap-space-md">
          <BookCallButton
            className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-amber-cta hover:bg-amber-hover text-surface-container-lowest font-label-md text-label-md font-bold rounded-lg shadow-xl hover:-translate-y-0.5 transition-all"
            label="Book a Discovery Call"
            icon="calendar_today"
            iconPosition="before"
          />
          <Link
            className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-md text-label-md transition-all"
            href="/case-studies"
          >
            <span>See Client Results</span>
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
      </PageHero>

      {SERVICE_CATEGORIES.map((category, index) => {
        const categoryServices = SERVICES.filter((service) => service.category === category);
        return (
          <section
            className={`w-full py-space-3xl ${index % 2 === 0 ? "bg-surface" : "bg-slate-surface"}`}
            key={category}
          >
            <Container className="space-y-space-2xl">
              <div className="max-w-2xl space-y-space-sm">
                <div className="font-label-caps text-label-caps text-emerald-accent tracking-widest uppercase font-bold">
                  {category}
                </div>
                <h2 className="font-headline-xl text-headline-xl text-forest-deep font-bold">
                  {category === "Recruitment Solutions"
                    ? "Recruitment delivery, built around your agency."
                    : "Business operations, handed over with confidence."}
                </h2>
                <p className="font-body-md text-body-md text-slate-text-muted">{CATEGORY_INTROS[category]}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
                {categoryServices.map((service) => (
                  <Link
                    className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                    data-path={`services-${service.slug}`}
                    href={`/services/${service.slug}`}
                    key={service.slug}
                  >
                    <div className="space-y-space-md">
                      <div className="w-14 h-14 rounded-lg bg-forest-deep text-on-primary flex items-center justify-center group-hover:bg-emerald-accent transition-colors">
                        <Icon name={service.icon} className="text-[28px]" />
                      </div>
                      <div className="space-y-space-xs">
                        <h3 className="font-headline-md text-headline-md text-slate-text-main group-hover:text-forest-deep transition-colors">
                          {service.name}
                        </h3>
                        <p className="font-body-sm text-body-sm text-slate-text-muted leading-relaxed">
                          {service.summary}
                        </p>
                      </div>
                    </div>
                    <div className="pt-space-md mt-space-md">
                      <span className="inline-flex items-center gap-space-xs font-label-md text-label-md text-forest-mid group-hover:text-emerald-accent font-semibold">
                        <span>{service.cardLabel}</span>
                        <Icon name="chevron_right" className="text-[16px]" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <CtaSection
        badge="NOT SURE WHERE TO START?"
        heading="Let's Map the Right Pod for Your Business."
        description="Tell us where delivery or operations slow you down. We will recommend the simplest offshore structure that removes the bottleneck, with transparent fixed monthly pricing."
        secondary={{ label: "Read Case Studies", href: "/case-studies" }}
      />
    </>
  );
}
