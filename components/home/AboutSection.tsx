import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { ABOUT } from "@/data/home";

export function AboutSection() {
  return (
    <section className="w-full py-space-3xl bg-surface" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_25px_-5px_rgba(15,23,42,0.08)]">
              <Image
                alt={ABOUT.imageAlt}
                className="w-full h-[460px] object-cover"
                src={ABOUT.image}
                width={1408}
                height={768}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 right-6 sm:bottom-8 sm:right-8 bg-surface-container-lowest p-space-lg rounded-xl shadow-xl max-w-xs space-y-1">
              <div className="flex items-center gap-space-xs text-violet-accent font-headline-sm text-headline-sm font-bold">
                <Icon name="verified" className="text-[24px]" />
                <span>{ABOUT.badgeTitle}</span>
              </div>
              <div className="font-label-caps text-label-caps text-slate-text-main uppercase font-semibold">
                {ABOUT.badgeLabel}
              </div>
              <p className="font-body-sm text-body-sm text-slate-text-muted">{ABOUT.badgeDescription}</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-space-md">
            <div className="font-label-caps text-label-caps text-violet-accent tracking-widest uppercase font-bold">
              {ABOUT.label}
            </div>
            <h2 className="font-headline-xl text-headline-xl text-plum-deep font-bold leading-tight">
              {ABOUT.heading}
            </h2>
            <div className="space-y-space-sm font-body-md text-body-md text-slate-text-muted leading-relaxed">
              {ABOUT.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <ul className="space-y-space-sm pt-space-xs">
              {ABOUT.checklist.map((item) => (
                <li className="flex items-start gap-space-sm font-body-md text-slate-text-main" key={item}>
                  <span className="w-6 h-6 rounded-full bg-violet-accent/10 text-violet-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="check" className="text-[16px] font-bold" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-space-sm">
              <a
                className="inline-flex items-center gap-space-xs font-label-md text-label-md text-plum-deep hover:text-violet-accent font-bold group transition-colors"
                data-path={ABOUT.link.dataPath}
                href={ABOUT.link.href}
              >
                <span>{ABOUT.link.label}</span>
                <Icon
                  name="arrow_forward"
                  className="text-[18px] group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
