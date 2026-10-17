import Link from "next/link";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { ARTICLES, INSIGHTS } from "@/data/insights";

export function BlogSection() {
  return (
    <section className="w-full py-space-3xl bg-surface" id="blog">
      <Container className="space-y-space-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="space-y-space-xs max-w-xl">
            <div className="font-label-caps text-label-caps text-emerald-accent tracking-widest uppercase font-bold">
              {INSIGHTS.label}
            </div>
            <h2 className="font-headline-xl text-headline-xl text-forest-deep font-bold">{INSIGHTS.heading}</h2>
            <p className="font-body-md text-body-md text-slate-text-muted">{INSIGHTS.description}</p>
          </div>
          <Link
            className="inline-flex items-center gap-space-xs font-label-md text-label-md text-forest-deep hover:text-emerald-accent font-bold group"
            data-path="insights-blog"
            href="/blog"
          >
            <span>{INSIGHTS.linkLabel}</span>
            <Icon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {ARTICLES.slice(0, 3).map((article) => (
            <ArticleCard article={article} key={article.slug} />
          ))}
        </div>
      </Container>
    </section>
  );
}
