import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { PodcastEpisode } from "@/data/podcasts";

export function EpisodeCard({ episode }: { episode: PodcastEpisode }) {
  return (
    <Link
      className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
      href={`/podcasts/${episode.slug}`}
    >
      <div>
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            alt={episode.imageAlt}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            src={episode.image}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
          />
          <div className="absolute inset-0 bg-forest-deep/30 flex items-center justify-center">
            <div
              className="w-12 h-12 rounded-full bg-surface-container-lowest/90 text-forest-deep flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-emerald-accent group-hover:text-surface-container-lowest transition-all"
              aria-hidden="true"
            >
              <Icon name="podcasts" className="text-[26px]" />
            </div>
          </div>
          <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-forest-deep/80 text-surface-container-lowest text-xs font-semibold backdrop-blur-sm">
            {episode.duration}
          </span>
        </div>
        <div className="p-space-lg space-y-space-xs">
          <span className="font-label-caps text-label-caps text-emerald-accent uppercase font-bold">
            {episode.category}
          </span>
          <h3 className="font-headline-sm text-[18px] text-slate-text-main font-bold leading-snug group-hover:text-forest-deep transition-colors">
            {episode.title}
          </h3>
          <p className="font-body-sm text-body-sm text-slate-text-muted line-clamp-2">
            {episode.description}
          </p>
        </div>
      </div>
      <div className="px-space-lg pb-space-lg pt-space-xs flex items-center justify-between">
        <span className="font-body-sm text-label-sm text-slate-text-muted">{episode.date}</span>
        <span className="inline-flex items-center gap-1 font-label-md text-label-md text-forest-mid group-hover:text-emerald-accent font-semibold">
          Show notes
          <Icon name="arrow_forward" className="text-[16px]" />
        </span>
      </div>
    </Link>
  );
}
