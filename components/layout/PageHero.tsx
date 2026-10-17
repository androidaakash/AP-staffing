import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  label: string;
  heading: string;
  description: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
};

export function PageHero({ label, heading, description, crumbs, children }: PageHeroProps) {
  return (
    <section className="relative w-full bg-plum-deep text-on-primary overflow-hidden">
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-violet-accent/15 blur-3xl pointer-events-none" />
      <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-plum-mid/50 blur-3xl pointer-events-none" />
      <Container className="relative z-10 py-space-2xl md:py-space-3xl space-y-space-lg">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-space-xs font-label-sm text-label-sm text-primary-fixed">
            {crumbs.map((crumb, index) => (
              <li className="flex items-center gap-space-xs" key={`${crumb.label}-${index}`}>
                {index > 0 ? (
                  <Icon name="chevron_right" className="text-[16px] text-primary-fixed/60" />
                ) : null}
                {crumb.href ? (
                  <Link className="hover:text-surface-container-lowest transition-colors" href={crumb.href}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-surface-container-lowest">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="max-w-3xl space-y-space-md">
          <div className="font-label-caps text-label-caps text-primary-fixed tracking-widest uppercase font-bold">
            {label}
          </div>
          <h1 className="font-headline-xl lg:text-[44px] lg:leading-[52px] text-surface-container-lowest font-extrabold tracking-tight">
            {heading}
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-high leading-relaxed">
            {description}
          </p>
        </div>
        {children ? <div className="pt-space-xs">{children}</div> : null}
      </Container>
    </section>
  );
}
