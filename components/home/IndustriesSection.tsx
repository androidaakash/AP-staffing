import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { INDUSTRIES } from "@/data/home";

export function IndustriesSection() {
  return (
    <section className="w-full py-space-3xl bg-slate-surface" id="industries">
      <Container className="space-y-space-2xl">
        <div className="text-center max-w-2xl mx-auto space-y-space-sm">
          <div className="font-label-caps text-label-caps text-emerald-accent tracking-widest uppercase font-bold">
            {INDUSTRIES.label}
          </div>
          <h2 className="font-headline-xl text-headline-xl text-forest-deep font-bold">{INDUSTRIES.heading}</h2>
          <p className="font-body-md text-body-md text-slate-text-muted">{INDUSTRIES.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {INDUSTRIES.items.map((sector) => (
            <div
              className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm hover:shadow-lg transition-all space-y-space-md group"
              key={sector.title}
            >
              <div className="w-12 h-12 rounded-lg bg-forest-deep text-on-primary flex items-center justify-center group-hover:bg-emerald-accent transition-colors">
                <Icon name={sector.icon} className="text-[26px]" />
              </div>
              <div className="space-y-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-slate-text-main font-bold group-hover:text-forest-deep transition-colors">
                  {sector.title}
                </h3>
                <p className="font-body-sm text-body-sm text-slate-text-muted leading-relaxed">
                  {sector.description}
                </p>
              </div>
              <ul className="text-xs text-slate-text-muted space-y-1 pt-space-xs">
                {sector.bullets.map((bullet) => (
                  <li className="flex items-center gap-1.5" key={bullet}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
