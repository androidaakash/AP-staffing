import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { CtaSection } from "@/components/layout/CtaSection";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { ARTICLES, getArticle } from "@/data/insights";

type ArticlePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const related = ARTICLES.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <>
      <PageHero
        label={article.category}
        heading={article.title}
        description={article.description}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Insights & Blog", href: "/blog" },
          { label: article.category },
        ]}
      >
        <div className="flex flex-wrap items-center gap-space-md font-label-sm text-label-sm text-primary-fixed">
          <span className="inline-flex items-center gap-space-xs">
            <Icon name="person" className="text-[16px]" />
            By {article.author}, {article.authorRole}
          </span>
          <span className="inline-flex items-center gap-space-xs">
            <Icon name="calendar_today" className="text-[16px]" />
            {article.date}
          </span>
          <span className="inline-flex items-center gap-space-xs">
            <Icon name="schedule" className="text-[16px]" />
            {article.readTime}
          </span>
        </div>
      </PageHero>

      <section className="w-full py-space-3xl bg-surface">
        <Container className="max-w-4xl space-y-space-2xl">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
            <Image
              alt={article.imageAlt}
              className="object-cover"
              src={article.image}
              fill
              sizes="(min-width: 1024px) 768px, 100vw"
              priority
            />
          </div>

          <div className="space-y-space-2xl">
            {article.sections.map((section) => (
              <div className="space-y-space-md" key={section.heading}>
                <h2 className="font-headline-lg text-headline-lg text-forest-deep font-bold">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p className="font-body-md text-body-md text-slate-text-muted leading-relaxed" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="space-y-space-xs bg-slate-surface rounded-xl p-space-lg">
                    {section.bullets.map((bullet) => (
                      <li
                        className="flex items-start gap-space-sm font-body-sm text-body-sm text-slate-text-main"
                        key={bullet}
                      >
                        <Icon name="check_circle" className="text-[18px] text-emerald-accent mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>

          <div className="bg-slate-surface rounded-xl p-space-xl flex flex-col sm:flex-row items-start sm:items-center gap-space-md justify-between">
            <div className="flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-full bg-forest-deep text-on-primary flex items-center justify-center font-headline-sm font-bold">
                {article.author
                  .split(" ")
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <div className="font-headline-sm text-[16px] text-slate-text-main font-bold">{article.author}</div>
                <div className="font-body-sm text-body-sm text-slate-text-muted">{article.authorRole}</div>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-slate-text-muted max-w-sm">
              Writing about offshore delivery, staffing economics and the systems behind reliable recruitment.
            </p>
          </div>
        </Container>
      </section>

      <section className="w-full pb-space-3xl bg-surface">
        <Container className="space-y-space-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <h2 className="font-headline-xl text-headline-xl text-forest-deep font-bold">Keep Reading.</h2>
            <Link
              className="inline-flex items-center gap-space-xs font-label-md text-label-md text-forest-deep hover:text-emerald-accent font-bold group"
              href="/blog"
            >
              <span>View all articles</span>
              <Icon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {related.map((item) => (
              <ArticleCard article={item} key={item.slug} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        badge="FROM THEORY TO DELIVERY"
        heading="Discuss Where Offshore Support Could Take You."
        description="Our leadership team shares the same playbook with every client: honest scoping, transparent pricing and measurable delivery from week one."
        secondary={{ label: "Explore Our Services", href: "/services" }}
      />
    </>
  );
}
