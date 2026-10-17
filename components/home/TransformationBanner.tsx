import { BookCallButton } from "@/components/booking/BookCallButton";
import { Container } from "@/components/ui/Container";
import { TRANSFORMATION } from "@/data/home";

export function TransformationBanner() {
  return (
    <section className="w-full py-space-2xl bg-gradient-to-r from-forest-deep via-forest-mid to-forest-deep text-on-primary" id="transformation">
      <Container>
        <div className="p-space-2xl rounded-2xl bg-surface-container-lowest/5 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-space-xl">
          <div className="space-y-space-sm max-w-3xl">
            <div className="font-label-caps text-label-caps text-primary-fixed tracking-widest uppercase font-bold">
              {TRANSFORMATION.label}
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-surface-container-lowest">
              {TRANSFORMATION.heading}
            </h2>
            <p className="font-body-md text-body-md text-surface-container-high leading-relaxed">
              {TRANSFORMATION.description}
            </p>
          </div>
          <div className="shrink-0">
            <BookCallButton
              className="inline-flex items-center gap-space-xs px-space-xl py-space-md bg-amber-cta hover:bg-amber-hover text-surface-container-lowest font-label-md text-label-md font-bold rounded-lg shadow-xl hover:-translate-y-0.5 transition-all"
              label={TRANSFORMATION.buttonLabel}
              icon="arrow_forward"
              iconClassName="text-[20px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
