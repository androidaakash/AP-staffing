import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EpisodeCard } from "@/components/insights/EpisodeCard";
import { CtaSection } from "@/components/layout/CtaSection";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { EPISODES, getEpisode } from "@/data/podcasts";

type EpisodePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return EPISODES.map((episode) => ({ slug: episode.slug }));
}

export function generateMetadata({ params }: EpisodePageProps): Metadata {
  const episode = getEpisode(params.slug);
  if (!episode) return {};

  return {
    title: episode.title,
    description: episode.description,
    alternates: {
      canonical: `/podcasts/${episode.slug}`,
    },
  };
}

export default function EpisodePage({ params }: EpisodePageProps) {
  const episode = getEpisode(params.slug);
  if (!episode) notFound();

  const related = EPISODES.filter((item) => item.slug !== episode.slug).slice(0, 2);

  return (
    <>
      <PageHero
        label={episode.category}
        heading={episode.title}
        description={episode.description}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Podcasts", href: "/podcasts" },
          { label: episode.category },
        ]}
      >
        <div className="flex flex-wrap items-center gap-space-md font-label-sm text-label-sm text-primary-fixed">
          <span className="inline-flex items-center gap-space-xs">
            <Icon name="headphones" className="text-[16px]" />
            {episode.duration}
          </span>
          <span className="inline-flex items-center gap-space-xs">
            <Icon name="calendar_today" className="text-[16px]" />
            {episode.date}
          </span>
          <span className="inline-flex items-center gap-space-xs">
            <Icon name="person" className="text-[16px]" />
            With {episode.guest}
          </span>
        </div>
      </PageHero>

      <section className="w-full py-space-3xl bg-surface">
        <Container className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-space-2xl items-start">
          <div className="space-y-space-2xl">
            <div className="space-y-space-md">
              <div className="font-label-caps text-label-caps text-emerald-accent tracking-widest uppercase font-bold">
                EPISODE SUMMARY
              </div>
              <p className="font-body-lg text-body-lg text-slate-text-main leading-relaxed">{episode.summary}</p>
            </div>

            <div className="space-y-space-md">
              <div className="font-label-caps text-label-caps text-emerald-accent tracking-widest uppercase font-bold">
                KEY TAKEAWAYS
              </div>
              <ul className="space-y-space-sm">
                {episode.takeaways.map((takeaway) => (
                  <li
                    className="flex items-start gap-space-sm bg-slate-surface rounded-lg p-space-md font-body-sm text-body-sm text-slate-text-main"
                    key={takeaway}
                  >
                    <Icon name="lightbulb" className="text-[18px] text-emerald-accent mt-0.5 shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-forest-deep text-on-primary rounded-2xl p-space-xl space-y-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-forest-mid/60 text-primary-fixed font-label-caps text-label-caps uppercase tracking-wider">
                <Icon name="headphones" className="text-[14px]" />
                Full recording
              </div>
              <div className="font-headline-sm text-headline-sm text-surface-container-lowest font-bold">
                Want the unedited conversation?
              </div>
              <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed">
                Full recordings are shared with clients and advisory subscribers. Request this episode and
                we will send the recording together with the slide deck or transcript where available.
              </p>
              <a
                className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-amber-cta hover:bg-amber-hover text-surface-container-lowest font-label-md text-label-md font-bold rounded-lg transition-colors"
                href={`mailto:advisory@aakashap.com?subject=${encodeURIComponent(`Episode recording request: ${episode.title}`)}`}
              >
                <span>Request This Recording</span>
                <Icon name="arrow_forward" className="text-[18px]" />
              </a>
            </div>
          </div>

          <aside className="space-y-space-lg lg:sticky lg:top-28">
            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-xl space-y-space-md">
              <div className="flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-full bg-forest-deep text-on-primary flex items-center justify-center font-headline-sm font-bold">
                  {episode.guest
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="font-headline-sm text-[16px] text-slate-text-main font-bold">{episode.guest}</div>
                  <div className="font-body-sm text-body-sm text-slate-text-muted">{episode.guestRole}</div>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-slate-text-muted leading-relaxed">
                Guest on {episode.category}. Speaking on this episode from first-hand delivery experience
                across UK and US recruitment markets.
              </p>
            </div>

            <div className="bg-slate-surface rounded-xl p-space-xl space-y-space-md">
              <div className="font-label-caps text-label-caps uppercase text-forest-deep tracking-wider">
                Chapters
              </div>
              <ul className="space-y-space-sm">
                {episode.chapters.map((chapter) => (
                  <li className="flex items-start gap-space-sm" key={chapter.time}>
                    <span className="font-label-md text-label-md text-forest-mid font-semibold shrink-0 w-12">
                      {chapter.time}
                    </span>
                    <span className="font-body-sm text-body-sm text-slate-text-muted">{chapter.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <section className="w-full pb-space-3xl bg-surface">
        <Container className="space-y-space-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <h2 className="font-headline-xl text-headline-xl text-forest-deep font-bold">More Episodes.</h2>
            <Link
              className="inline-flex items-center gap-space-xs font-label-md text-label-md text-forest-deep hover:text-emerald-accent font-bold group"
              href="/podcasts"
            >
              <span>View all episodes</span>
              <Icon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {related.map((item) => (
              <EpisodeCard episode={item} key={item.slug} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        badge="KEEP THE CONVERSATION GOING"
        heading="Prefer to Discuss It Directly?"
        description="Skip the queue and talk to the same delivery leaders who run our client pods. Fifteen minutes is usually enough to find your bottleneck."
        secondary={{ label: "Browse the Podcast Library", href: "/podcasts" }}
      />
    </>
  );
}
