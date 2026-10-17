import Image from "next/image";
import { BookCallButton } from "@/components/booking/BookCallButton";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { FOOTER_COLUMNS, LEGAL_LINKS } from "@/data/navigation";
import { CONTACT, SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="w-full bg-slate-surface border-t border-slate-border pt-space-3xl pb-space-xl text-slate-text-main">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-2xl border-b border-slate-border">
          <div className="lg:col-span-2 space-y-space-md pr-0 lg:pr-space-xl">
            <div className="flex items-center gap-space-sm">
              <Image
                alt={`${SITE.name} Brand Logo`}
                className="h-8 w-8 object-contain"
                src={SITE.logoMark}
                width={32}
                height={32}
              />
              <span className="font-headline-sm text-headline-sm tracking-tight text-forest-deep uppercase">
                {SITE.name}
              </span>
            </div>
            <p className="font-body-md text-body-md text-slate-text-muted max-w-sm">
              Pioneering high-governance offshore recruitment process outsourcing and scalable
              business process outsourcing. Delivering verified top 3% talent to international
              enterprises with SLA rigor.
            </p>
            <div className="space-y-space-xs font-body-sm text-body-sm text-slate-text-muted">
              <div className="flex items-center gap-space-xs">
                <Icon name="public" className="text-[18px] text-forest-deep" />
                <span>Offshore Centers: {SITE.offices}</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <Icon name="mail" className="text-[18px] text-forest-deep" />
                <a className="hover:text-forest-deep" href={CONTACT.emailHref}>
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <div className="font-label-caps text-label-caps uppercase text-forest-deep tracking-wider mb-space-md">
                {column.heading}
              </div>
              <ul className="space-y-space-sm font-body-sm text-body-sm text-slate-text-muted">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      className="hover:text-forest-deep transition-colors"
                      data-path={link.dataPath}
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="font-label-caps text-label-caps uppercase text-forest-deep tracking-wider mb-space-md">
              Governance &amp; Desk
            </div>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-slate-text-muted">
              <li className="flex items-center gap-1">
                <Icon name="verified_user" className="text-[16px] text-forest-mid" />
                <span>ISO 27001 Certified</span>
              </li>
              <li className="flex items-center gap-1">
                <Icon name="security" className="text-[16px] text-forest-mid" />
                <span>GDPR &amp; SOC2 Compliant</span>
              </li>
              <li className="pt-space-xs font-semibold text-slate-text-main">Regional Desks:</li>
              <li>
                <a className="hover:text-forest-deep transition-colors" href={CONTACT.phoneUKHref}>
                  UK Desk: {SITE.phoneUK}
                </a>
              </li>
              <li>
                <a className="hover:text-forest-deep transition-colors" href={CONTACT.phoneUSHref}>
                  US Desk: {SITE.phoneUS}
                </a>
              </li>
              <li>
                <BookCallButton
                  className="inline-flex items-center gap-1 text-emerald-accent font-semibold hover:underline"
                  label="Executive Advisory Portal"
                  icon="arrow_forward"
                  iconClassName="text-[16px]"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-space-xl flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-slate-text-muted">
          <div>{SITE.copyright}</div>
          <div className="flex flex-wrap items-center gap-space-md">
            {LEGAL_LINKS.map((link) => (
              <a
                className="hover:text-forest-deep transition-colors"
                data-path={link.dataPath}
                href={link.href}
                key={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
