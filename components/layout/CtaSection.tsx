import Link from "next/link";
import { BookCallButton } from "@/components/booking/BookCallButton";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

type CtaSectionProps = {
  badge: string;
  heading: string;
  description: string;
  primaryLabel?: string;
  secondary?: { label: string; href: string };
  footnote?: string;
};

export function CtaSection({
  badge,
  heading,
  description,
  primaryLabel = "Talk to Our Experts",
  secondary,
  footnote = "No obligation. Just an honest conversation about your goals and offshore feasibility.",
}: CtaSectionProps) {
  return (
    <section className="w-full py-space-3xl bg-surface">
      <Container>
        <div className="relative rounded-2xl bg-plum-deep text-on-primary p-space-2xl md:p-space-3xl overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-violet-accent/15 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-space-lg">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-plum-mid/60 text-primary-fixed font-label-caps text-label-caps uppercase tracking-wider">
              <span>{badge}</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl lg:text-[44px] lg:leading-[52px] text-surface-container-lowest font-extrabold tracking-tight">
              {heading}
            </h2>
            <p className="font-body-lg text-body-lg text-surface-container-high leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <BookCallButton
                className="inline-flex items-center gap-space-xs px-space-xl py-space-md bg-violet-cta hover:bg-violet-cta-hover text-surface-container-lowest font-label-md text-label-md font-bold rounded-lg shadow-xl hover:-translate-y-0.5 transition-all"
                label={primaryLabel}
                icon="forum"
              />
              {secondary ? (
                <Link
                  className="inline-flex items-center gap-space-xs px-space-lg py-space-md rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-md text-label-md transition-all"
                  href={secondary.href}
                >
                  <span>{secondary.label}</span>
                  <Icon name="arrow_forward" className="text-[18px]" />
                </Link>
              ) : null}
            </div>
            <div className="flex items-center gap-space-xs text-primary-fixed font-body-sm text-body-sm pt-space-xs">
              <Icon name="info" className="text-[18px]" />
              <span>{footnote}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
