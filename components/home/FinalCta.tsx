import { BookCallButton } from "@/components/booking/BookCallButton";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { FINAL_CTA } from "@/data/home";

export function FinalCta() {
  return (
    <section className="w-full py-space-3xl bg-surface" id="get-started">
      <Container>
        <div className="relative rounded-2xl bg-forest-deep text-on-primary p-space-2xl md:p-space-3xl overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-emerald-accent/15 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-space-lg">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-forest-mid/60 text-primary-fixed font-label-caps text-label-caps uppercase tracking-wider">
              <span>{FINAL_CTA.badge}</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl lg:text-[44px] lg:leading-[52px] text-surface-container-lowest font-extrabold tracking-tight">
              {FINAL_CTA.heading}
            </h2>
            <p className="font-body-lg text-body-lg text-surface-container-high leading-relaxed">
              {FINAL_CTA.description}
            </p>
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <BookCallButton
                className="inline-flex items-center gap-space-xs px-space-xl py-space-md bg-amber-cta hover:bg-amber-hover text-surface-container-lowest font-label-md text-label-md font-bold rounded-lg shadow-xl hover:-translate-y-0.5 transition-all"
                label={FINAL_CTA.primaryLabel}
                icon={FINAL_CTA.primaryIcon}
              />
              <a
                className="inline-flex items-center gap-space-xs px-space-lg py-space-md rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-md text-label-md transition-all"
                data-path="services-full-cycle-recruitment"
                href={FINAL_CTA.secondaryHref}
              >
                <span>{FINAL_CTA.secondaryLabel}</span>
                <Icon name="arrow_forward" className="text-[18px]" />
              </a>
            </div>
            <div className="flex items-center gap-space-xs text-primary-fixed font-body-sm text-body-sm pt-space-xs">
              <Icon name="info" className="text-[18px]" />
              <span>{FINAL_CTA.footnote}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
