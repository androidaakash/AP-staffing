import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import type { LegalDocument } from "@/data/legal";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <section className="w-full py-space-3xl bg-surface">
      <Container className="grid grid-cols-1 xl:grid-cols-[300px_1fr] gap-space-2xl">
        <aside className="hidden xl:block">
          <div className="sticky top-28 space-y-space-lg">
            <div className="font-label-caps text-label-caps uppercase text-forest-deep tracking-wider">
              On this page
            </div>
            <nav aria-label={`${document.title} sections`}>
              <ul className="space-y-1.5 font-body-sm text-body-sm text-slate-text-muted">
                {document.sections.map((section) => (
                  <li key={section.heading}>
                    <a
                      className="block hover:text-forest-deep transition-colors leading-snug"
                      href={`#${slugify(section.heading)}`}
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-space-xs text-label-sm font-label-sm text-slate-text-muted border-t border-slate-border pt-space-md">
              <Icon name="update" className="text-[16px] text-forest-mid" />
              <span>Last updated {document.updated}</span>
            </div>
          </div>
        </aside>

        <div className="max-w-3xl space-y-space-2xl">
          <p className="font-body-lg text-body-lg text-slate-text-muted leading-relaxed">
            {document.intro}
          </p>
          <div className="flex items-center gap-space-xs text-label-sm font-label-sm text-slate-text-muted xl:hidden">
            <Icon name="update" className="text-[16px] text-forest-mid" />
            <span>Last updated {document.updated}</span>
          </div>
          {document.sections.map((section) => (
            <section
              className="space-y-space-md scroll-mt-28"
              id={slugify(section.heading)}
              key={section.heading}
            >
              <h2 className="font-headline-md text-headline-md text-forest-deep font-bold">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  className="font-body-md text-body-md text-slate-text-muted leading-relaxed"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="space-y-space-xs">
                  {section.bullets.map((bullet) => (
                    <li className="flex items-start gap-space-sm font-body-sm text-body-sm text-slate-text-muted" key={bullet}>
                      <Icon name="check_circle" className="text-[18px] text-emerald-accent mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
