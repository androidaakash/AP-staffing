import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { VALUES } from "@/data/home";

export function ValuesSection() {
  return (
    <section className="w-full py-space-3xl bg-surface" id="values">
      <Container className="space-y-space-2xl">
        <div className="text-center max-w-2xl mx-auto space-y-space-sm">
          <div className="font-label-caps text-label-caps text-emerald-accent tracking-widest uppercase font-bold">
            {VALUES.label}
          </div>
          <h2 className="font-headline-xl text-headline-xl text-forest-deep font-bold">{VALUES.heading}</h2>
          <p className="font-body-md text-body-md text-slate-text-muted">{VALUES.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {VALUES.items.map((value) => (
            <div
              className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-space-md"
              key={value.title}
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-accent/10 text-forest-deep flex items-center justify-center">
                <Icon name={value.icon} className="text-[26px]" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-slate-text-main font-semibold">
                {value.title}
              </h3>
              <p className="font-body-sm text-body-sm text-slate-text-muted leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
