import Link from "next/link";
import { EpisodeCard } from "@/components/insights/EpisodeCard";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { EPISODES, PODCASTS } from "@/data/podcasts";

export function PodcastsSection() {
  return (
    <section className="w-full py-space-3xl bg-slate-surface" id="insights">
      <Container className="space-y-space-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="space-y-space-xs max-w-xl">
            <div className="font-label-caps text-label-caps text-violet-accent tracking-widest uppercase font-bold">
              {PODCASTS.label}
            </div>
            <h2 className="font-headline-xl text-headline-xl text-plum-deep font-bold">{PODCASTS.heading}</h2>
            <p className="font-body-md text-body-md text-slate-text-muted">{PODCASTS.description}</p>
          </div>
          <Link
            className="inline-flex items-center gap-space-xs font-label-md text-label-md text-plum-deep hover:text-violet-accent font-bold group"
            data-path="podcasts"
            href="/podcasts"
          >
            <span>{PODCASTS.linkLabel}</span>
            <Icon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {EPISODES.slice(0, 3).map((episode) => (
            <EpisodeCard episode={episode} key={episode.slug} />
          ))}
        </div>
      </Container>
    </section>
  );
}
