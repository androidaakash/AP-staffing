import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { STEPS } from "@/data/home";

export function HowItWorks() {
  return (
    <section className="w-full py-space-3xl bg-slate-surface" id="how-it-works">
      <Container className="space-y-space-2xl">
        <div className="text-center max-w-2xl mx-auto space-y-space-sm">
          <div className="font-label-caps text-label-caps text-violet-accent tracking-widest uppercase font-bold">
            {STEPS.label}
          </div>
          <h2 className="font-headline-xl text-headline-xl text-plum-deep font-bold">{STEPS.heading}</h2>
          <p className="font-body-md text-body-md text-slate-text-muted">{STEPS.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg relative">
          {STEPS.items.map((step) => (
            <div
              className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm relative group space-y-space-md"
              key={step.number}
            >
              <div className="flex items-center justify-between">
                <span className="font-display-hero text-[32px] font-extrabold text-violet-accent/40">
                  {step.number}
                </span>
                <Icon name={step.icon} className="text-[24px] text-plum-deep" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-slate-text-main font-bold">{step.title}</h3>
              <p className="font-body-sm text-body-sm text-slate-text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
