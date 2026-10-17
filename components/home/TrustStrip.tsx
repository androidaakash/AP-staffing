import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { TRUST_ITEMS } from "@/data/home";

export function TrustStrip() {
  return (
    <section className="w-full bg-surface-container-lowest shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] py-space-xl">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {TRUST_ITEMS.map((item) => (
            <div
              className="flex items-start gap-space-md p-space-sm rounded-lg hover:bg-slate-surface transition-colors"
              key={item.title}
            >
              <div className="w-12 h-12 rounded-lg bg-primary-fixed/30 text-plum-deep flex items-center justify-center shrink-0">
                <Icon name={item.icon} className="text-[26px]" />
              </div>
              <div className="space-y-1">
                <div className="font-headline-sm text-[16px] text-slate-text-main">{item.title}</div>
                <p className="font-body-sm text-body-sm text-slate-text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
