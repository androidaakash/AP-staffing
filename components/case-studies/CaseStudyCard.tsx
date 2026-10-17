import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { CaseStudy } from "@/data/case-studies";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
      href={`/case-studies/${caseStudy.slug}`}
    >
      <div>
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            alt={caseStudy.imageAlt}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            src={caseStudy.image}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-surface-container-lowest/90 text-forest-deep text-xs font-semibold">
            {caseStudy.region}
          </span>
        </div>
        <div className="p-space-lg space-y-space-sm">
          <div className="font-label-caps text-label-caps text-emerald-accent uppercase font-bold">
            {caseStudy.industry}
          </div>
          <h3 className="font-headline-sm text-[18px] text-slate-text-main font-bold leading-snug group-hover:text-forest-deep transition-colors">
            {caseStudy.client}
          </h3>
          <p className="font-body-sm text-body-sm text-slate-text-muted line-clamp-3">
            {caseStudy.summary}
          </p>
          <div className="flex flex-wrap gap-space-lg pt-space-xs">
            {caseStudy.results.slice(0, 3).map((metric) => (
              <div key={metric.label}>
                <div className="font-headline-sm text-headline-sm text-forest-deep font-extrabold">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-text-muted">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-space-lg pb-space-lg">
        <span className="inline-flex items-center gap-1 font-label-md text-label-md text-forest-mid group-hover:text-emerald-accent font-semibold">
          Read case study
          <Icon name="arrow_forward" className="text-[16px]" />
        </span>
      </div>
    </Link>
  );
}
