import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { Article } from "@/data/insights";

type ArticleCardProps = {
  article: Article;
  priority?: boolean;
};

export function ArticleCard({ article, priority = false }: ArticleCardProps) {
  return (
    <Link
      className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
      href={`/blog/${article.slug}`}
    >
      <div className="space-y-space-md">
        <div className="aspect-[16/10] overflow-hidden">
          <Image
            alt={article.imageAlt}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            src={article.image}
            width={1408}
            height={768}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            priority={priority}
          />
        </div>
        <div className="p-space-lg pt-0 space-y-space-xs">
          <span className="px-2 py-0.5 rounded text-xs bg-slate-surface text-plum-deep font-semibold uppercase">
            {article.category}
          </span>
          <h3 className="font-headline-sm text-[18px] text-slate-text-main font-bold leading-snug group-hover:text-plum-deep transition-colors">
            {article.title}
          </h3>
          <p className="font-body-sm text-body-sm text-slate-text-muted line-clamp-2">
            {article.description}
          </p>
        </div>
      </div>
      <div className="p-space-lg pt-0 flex items-center justify-between text-body-sm text-label-sm text-slate-text-muted">
        <span>By {article.author}</span>
        <span className="inline-flex items-center gap-1">
          <Icon name="schedule" className="text-[14px]" />
          {article.readTime}
        </span>
      </div>
    </Link>
  );
}
