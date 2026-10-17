import { Container } from "@/components/ui/Container";
import { EXPERIENCE } from "@/data/home";

export function ExperienceSection() {
  return (
    <section className="w-full py-space-3xl bg-plum-deep text-on-primary relative overflow-hidden" id="experience">
      <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      <Container className="relative space-y-space-2xl">
        <div className="max-w-2xl space-y-space-sm">
          <div className="font-label-caps text-label-caps text-primary-fixed tracking-widest uppercase font-bold">
            {EXPERIENCE.label}
          </div>
          <h2 className="font-headline-xl text-headline-xl text-surface-container-lowest font-bold">
            {EXPERIENCE.heading}
          </h2>
          <p className="font-body-md text-body-md text-surface-container-high">{EXPERIENCE.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl">
          {EXPERIENCE.metrics.map((metric) => (
            <div className="bg-plum-mid/30 p-space-xl rounded-xl backdrop-blur-sm space-y-space-sm" key={metric.value}>
              <div className="font-display-hero text-display-hero text-primary-fixed font-extrabold tracking-tight">
                {metric.value}
              </div>
              <div className="font-headline-sm text-headline-sm text-surface-container-lowest font-semibold">
                {metric.title}
              </div>
              <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
