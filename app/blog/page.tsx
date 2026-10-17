import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { CtaSection } from "@/components/layout/CtaSection";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { ARTICLES, INSIGHTS } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights & Blog",
  description:
    "Strategic insights on staffing economics, offshore delivery metrics and recruiting best practice from the Aakash AP leadership team.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const featured = ARTICLES.find((article) => article.featured) ?? ARTICLES[0];
  const rest = ARTICLES.filter((article) => article.slug !== featured.slug);

  return (
    <>
      <PageHero
        label={INSIGHTS.label}
        heading="Insights That Move Staffing Businesses Forward."
        description={INSIGHTS.description}
        crumbs={[{ label: "Home", href: "/" }, { label: "Insights & Blog" }]}
      />

      <section className="w-full py-space-3xl bg-surface">
        <Container className="space-y-space-2xl">
          <Link
            className="grid grid-cols-1 lg:grid-cols-2 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            href={`/blog/${featured.slug}`}
          >
            <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden">
              <Image
                alt={featured.imageAlt}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                src={featured.image}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
            <div className="p-space-xl lg:p-space-2xl flex flex-col justify-center gap-space-md">
              <div className="flex flex-wrap items-center gap-space-sm">
                <span className="px-2 py-0.5 rounded text-xs bg-violet-accent/10 text-violet-accent font-semibold uppercase">
                  Featured
                </span>
                <span className="px-2 py-0.5 rounded text-xs bg-slate-surface text-plum-deep font-semibold uppercase">
                  {featured.category}
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-slate-text-main font-bold leading-snug group-hover:text-plum-deep transition-colors">
                {featured.title}
              </h2>
              <p className="font-body-md text-body-md text-slate-text-muted">{featured.description}</p>
              <div className="flex flex-wrap items-center gap-space-md font-label-sm text-label-sm text-slate-text-muted">
                <span>By {featured.author}</span>
                <span>{featured.date}</span>
                <span className="inline-flex items-center gap-1">
                  <Icon name="schedule" className="text-[14px]" />
                  {featured.readTime}
                </span>
              </div>
              <span className="inline-flex items-center gap-space-xs font-label-md text-label-md text-plum-mid group-hover:text-violet-accent font-semibold">
                <span>Read article</span>
                <Icon name="arrow_forward" className="text-[16px] group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {rest.map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        badge="PUT INSIGHTS INTO PRACTICE"
        heading="Turn These Ideas into Delivery Capacity."
        description="Reading about offshore leverage is the easy part. We will help you scope the pod, the systems and the SLAs that make it work in your business."
        secondary={{ label: "Explore Our Services", href: "/services" }}
      />
    </>
  );
}
