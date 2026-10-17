import { BookCallButton } from "@/components/booking/BookCallButton";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SERVICES } from "@/data/home";

export function ServicesGrid() {
  return (
    <section className="w-full py-space-3xl bg-slate-surface" id="expertise">
      <Container className="space-y-space-2xl">
        <div className="text-center max-w-3xl mx-auto space-y-space-sm">
          <div className="font-label-caps text-label-caps text-violet-accent tracking-widest uppercase font-bold">
            {SERVICES.label}
          </div>
          <h2 className="font-headline-xl text-headline-xl text-plum-deep font-bold">
            {SERVICES.heading}
          </h2>
          <p className="font-body-md text-body-md text-slate-text-muted">{SERVICES.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {SERVICES.cards.map((card) => (
            <div
              className={`bg-surface-container-lowest p-space-xl rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group ${
                card.wide ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              key={card.title}
            >
              <div className="space-y-space-md">
                <div className="w-14 h-14 rounded-lg bg-plum-deep text-on-primary flex items-center justify-center group-hover:bg-violet-accent transition-colors">
                  <Icon name={card.icon} className="text-[28px]" />
                </div>
                <div className="space-y-space-xs">
                  {card.badge ? (
                    <div className="flex items-center gap-2">
                      <h3 className="font-headline-md text-headline-md text-slate-text-main group-hover:text-plum-deep transition-colors">
                        {card.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full text-xs bg-violet-accent/10 text-violet-accent font-semibold uppercase">
                        {card.badge}
                      </span>
                    </div>
                  ) : (
                    <h3 className="font-headline-md text-headline-md text-slate-text-main group-hover:text-plum-deep transition-colors">
                      {card.title}
                    </h3>
                  )}
                  <p
                    className={`font-body-sm text-body-sm text-slate-text-muted leading-relaxed ${
                      card.wide ? "max-w-xl" : ""
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
              <div className="pt-space-md mt-space-md">
                <a
                  className="inline-flex items-center gap-space-xs font-label-md text-label-md text-plum-mid group-hover:text-violet-accent font-semibold"
                  data-path={card.dataPath}
                  href={card.href}
                >
                  <span>{card.linkLabel}</span>
                  <Icon name="chevron_right" className="text-[16px]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-surface-container-lowest p-space-xl rounded-2xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-space-lg">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-headline-sm text-headline-sm text-plum-deep">{SERVICES.banner.title}</div>
            <p className="font-body-sm text-body-sm text-slate-text-muted">{SERVICES.banner.description}</p>
          </div>
          <BookCallButton
            className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-plum-deep hover:bg-plum-mid text-on-primary font-label-md text-label-md rounded-lg transition-colors whitespace-nowrap"
            label={SERVICES.banner.buttonLabel}
            icon="arrow_forward"
          />
        </div>
      </Container>
    </section>
  );
}
